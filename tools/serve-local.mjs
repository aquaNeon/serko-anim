import { createServer } from 'node:http'
import { readFile, stat } from 'node:fs/promises'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const BUNDLE = resolve(__dirname, '../dist/serko-globe.js')
const PORT = Number(process.env.PORT || 5179)

const server = createServer(async (req, res) => {
  const url = (req.url || '/').split('?')[0]

  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, HEAD, OPTIONS')
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate')

  if (req.method === 'OPTIONS') {
    res.writeHead(204)
    res.end()
    return
  }

  if (url === '/script.js' || url === '/serko-globe.js' || url === '/') {
    try {
      const [body, info] = await Promise.all([readFile(BUNDLE), stat(BUNDLE)])
      res.setHeader('Content-Type', 'text/javascript; charset=utf-8')
      res.writeHead(200)
      res.end(body)
      const kb = (info.size / 1024).toFixed(0)
      const when = info.mtime.toTimeString().slice(0, 8)
      console.log(`200 ${url}  ${kb} KB  built ${when}`)
    } catch {
      res.writeHead(404)
      res.end('bundle not found - run: npm run build')
      console.log(`404 ${url}  no bundle at dist/serko-globe.js`)
    }
    return
  }

  res.writeHead(404)
  res.end('not found')
})

server.listen(PORT, () => {
  console.log(`serving dist/serko-globe.js`)
  console.log(`  http://localhost:${PORT}/script.js`)
})
