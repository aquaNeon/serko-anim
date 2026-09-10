import { readFileSync, writeFileSync } from 'node:fs'

const BACKSLASH = String.fromCharCode(92)

function stripTemplateBody(body) {
  return body
    .split('\n')
    .map((line) => {
      const i = line.indexOf('//')
      if (i < 0) return line
      if (i > 0 && line[i - 1] === ':') return line
      const head = line.slice(0, i)
      return head.trim() === '' ? null : head.replace(/[ \t]+$/, '')
    })
    .filter((l) => l !== null)
    .join('\n')
}

function stripJs(src) {
  let out = ''
  let i = 0
  const n = src.length

  while (i < n) {
    const c = src[i]
    const next = src[i + 1]

    if (c === '/' && next === '/') {
      while (i < n && src[i] !== '\n') i++
      continue
    }

    if (c === '/' && next === '*') {
      i += 2
      while (i < n && !(src[i] === '*' && src[i + 1] === '/')) i++
      i += 2
      continue
    }

    if (c === '"' || c === "'") {
      const quote = c
      out += c
      i++
      while (i < n) {
        if (src[i] === BACKSLASH) {
          out += src[i] + (src[i + 1] ?? '')
          i += 2
          continue
        }
        out += src[i]
        const done = src[i] === quote
        i++
        if (done) break
      }
      continue
    }

    if (c === '`') {
      let body = ''
      i++
      let closed = false
      while (i < n && !closed) {
        if (src[i] === BACKSLASH) {
          body += src[i] + (src[i + 1] ?? '')
          i += 2
          continue
        }
        if (src[i] === '`') {
          i++
          closed = true
          break
        }
        if (src[i] === '$' && src[i + 1] === '{') {
          body += '${'
          i += 2
          let depth = 1
          while (i < n && depth > 0) {
            if (src[i] === '{') depth++
            else if (src[i] === '}') {
              depth--
              if (depth === 0) break
            }
            body += src[i]
            i++
          }
          body += '}'
          i++
          continue
        }
        body += src[i]
        i++
      }
      out += '`' + stripTemplateBody(body) + '`'
      continue
    }

    out += c
    i++
  }

  return tidy(out)
}

function tidy(s) {
  const lines = s.split('\n').map((l) => l.replace(/[ \t]+$/, ''))
  const kept = []
  for (const line of lines) {
    if (line.trim() === '' && kept.length && kept[kept.length - 1].trim() === '') continue
    kept.push(line)
  }
  while (kept.length && kept[0].trim() === '') kept.shift()
  while (kept.length && kept[kept.length - 1].trim() === '') kept.pop()
  return kept.join('\n') + '\n'
}

function stripHtml(src) {
  let out = src.replace(/(<script\b[^>]*>)([\s\S]*?)(<\/script>)/g, (_, open, body, close) => {
    if (body.trim() === '') return open + body + close
    const stripped = stripJs(body)
    const indented = stripped
      .split('\n')
      .map((l) => (l ? '    ' + l : l))
      .join('\n')
    return open + '\n' + indented + '  ' + close
  })
  out = out.replace(/(<style\b[^>]*>)([\s\S]*?)(<\/style>)/g, (_, o, b, c) =>
    o + b.replace(/\/\*[\s\S]*?\*\//g, '') + c)
  out = out.replace(/^[ \t]*<!--[\s\S]*?-->[ \t]*\n/gm, '')
  out = out.replace(/<!--[\s\S]*?-->/g, '')
  return tidy(out)
}

const files = process.argv.slice(2)
if (!files.length) {
  console.error('usage: node tools/strip-comments.mjs <files...>')
  process.exit(1)
}

for (const f of files) {
  const src = readFileSync(f, 'utf8')
  const out = f.endsWith('.html') ? stripHtml(src) : stripJs(src)
  writeFileSync(f, out)
  console.log(`${f}  ${src.length} -> ${out.length} chars`)
}
