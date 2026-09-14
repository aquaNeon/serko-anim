(function(){"use strict";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Le="srgb",SA="srgb-linear",dn="linear",jt="srgb",Gi="300 es";class yA{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const A=this._listeners;A[t]===void 0&&(A[t]=[]),A[t].indexOf(e)===-1&&A[t].push(e)}hasEventListener(t,e){const A=this._listeners;return A===void 0?!1:A[t]!==void 0&&A[t].indexOf(e)!==-1}removeEventListener(t,e){const A=this._listeners;if(A===void 0)return;const i=A[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const A=e[t.type];if(A!==void 0){t.target=this;const i=A.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zn=Math.PI/180,Qn=180/Math.PI;function qA(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,A=Math.random()*4294967295|0;return(_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[A&255]+_e[A>>8&255]+_e[A>>16&255]+_e[A>>24&255]).toLowerCase()}function Ht(n,t,e){return Math.max(t,Math.min(e,n))}function Us(n,t){return(n%t+t)%t}function Jn(n,t,e){return(1-e)*n+e*t}function YA(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ee(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class $t{constructor(t=0,e=0){$t.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,A=this.y,i=t.elements;return this.x=i[0]*e+i[3]*A+i[6],this.y=i[1]*e+i[4]*A+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Ht(A,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const A=this.dot(t)/e;return Math.acos(Ht(A,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,A=this.y-t.y;return e*e+A*A}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,A){return this.x=t.x+(e.x-t.x)*A,this.y=t.y+(e.y-t.y)*A,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const A=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*A-s*i+t.x,this.y=r*i+s*A+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class $A{constructor(t=0,e=0,A=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=A,this._w=i}static slerpFlat(t,e,A,i,r,s,a){let l=A[i+0],o=A[i+1],c=A[i+2],u=A[i+3];const d=r[s+0],f=r[s+1],m=r[s+2],_=r[s+3];if(a===0){t[e+0]=l,t[e+1]=o,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||l!==d||o!==f||c!==m){let p=1-a;const h=l*d+o*f+c*m+u*_,T=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const R=Math.sqrt(E),b=Math.atan2(R,h*T);p=Math.sin(p*b)/R,a=Math.sin(a*b)/R}const S=a*T;if(l=l*p+d*S,o=o*p+f*S,c=c*p+m*S,u=u*p+_*S,p===1-a){const R=1/Math.sqrt(l*l+o*o+c*c+u*u);l*=R,o*=R,c*=R,u*=R}}t[e]=l,t[e+1]=o,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,A,i,r,s){const a=A[i],l=A[i+1],o=A[i+2],c=A[i+3],u=r[s],d=r[s+1],f=r[s+2],m=r[s+3];return t[e]=a*m+c*u+l*f-o*d,t[e+1]=l*m+c*d+o*u-a*f,t[e+2]=o*m+c*f+a*d-l*u,t[e+3]=c*m-a*u-l*d-o*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,A,i){return this._x=t,this._y=e,this._z=A,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const A=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,l=Math.sin,o=a(A/2),c=a(i/2),u=a(r/2),d=l(A/2),f=l(i/2),m=l(r/2);switch(s){case"XYZ":this._x=d*c*u+o*f*m,this._y=o*f*u-d*c*m,this._z=o*c*m+d*f*u,this._w=o*c*u-d*f*m;break;case"YXZ":this._x=d*c*u+o*f*m,this._y=o*f*u-d*c*m,this._z=o*c*m-d*f*u,this._w=o*c*u+d*f*m;break;case"ZXY":this._x=d*c*u-o*f*m,this._y=o*f*u+d*c*m,this._z=o*c*m+d*f*u,this._w=o*c*u-d*f*m;break;case"ZYX":this._x=d*c*u-o*f*m,this._y=o*f*u+d*c*m,this._z=o*c*m-d*f*u,this._w=o*c*u+d*f*m;break;case"YZX":this._x=d*c*u+o*f*m,this._y=o*f*u+d*c*m,this._z=o*c*m-d*f*u,this._w=o*c*u-d*f*m;break;case"XZY":this._x=d*c*u-o*f*m,this._y=o*f*u-d*c*m,this._z=o*c*m+d*f*u,this._w=o*c*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const A=e/2,i=Math.sin(A);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(A),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,A=e[0],i=e[4],r=e[8],s=e[1],a=e[5],l=e[9],o=e[2],c=e[6],u=e[10],d=A+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-l)*f,this._y=(r-o)*f,this._z=(s-i)*f}else if(A>a&&A>u){const f=2*Math.sqrt(1+A-a-u);this._w=(c-l)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+o)/f}else if(a>u){const f=2*Math.sqrt(1+a-A-u);this._w=(r-o)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(l+c)/f}else{const f=2*Math.sqrt(1+u-A-a);this._w=(s-i)/f,this._x=(r+o)/f,this._y=(l+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let A=t.dot(e)+1;return A<1e-8?(A=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=A):(this._x=0,this._y=-t.z,this._z=t.y,this._w=A)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=A),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){const A=this.angleTo(t);if(A===0)return this;const i=Math.min(1,e/A);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const A=t._x,i=t._y,r=t._z,s=t._w,a=e._x,l=e._y,o=e._z,c=e._w;return this._x=A*c+s*a+i*o-r*l,this._y=i*c+s*l+r*a-A*o,this._z=r*c+s*o+A*l-i*a,this._w=s*c-A*a-i*l-r*o,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const A=this._x,i=this._y,r=this._z,s=this._w;let a=s*t._w+A*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=A,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const f=1-e;return this._w=f*s+e*this._w,this._x=f*A+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const o=Math.sqrt(l),c=Math.atan2(o,a),u=Math.sin((1-e)*c)/o,d=Math.sin(e*c)/o;return this._w=s*u+this._w*d,this._x=A*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,A){return this.copy(t).slerp(e,A)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),A=Math.random(),i=Math.sqrt(1-A),r=Math.sqrt(A);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,A=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=A}set(t,e,A){return A===void 0&&(A=this.z),this.x=t,this.y=e,this.z=A,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(ki.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(ki.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,A=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*A+r[6]*i,this.y=r[1]*e+r[4]*A+r[7]*i,this.z=r[2]*e+r[5]*A+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,A=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*A+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*A+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*A+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*A+r[10]*i+r[14])*s,this}applyQuaternion(t){const e=this.x,A=this.y,i=this.z,r=t.x,s=t.y,a=t.z,l=t.w,o=2*(s*i-a*A),c=2*(a*e-r*i),u=2*(r*A-s*e);return this.x=e+l*o+s*u-a*c,this.y=A+l*c+a*o-r*u,this.z=i+l*u+r*c-s*o,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,A=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*A+r[8]*i,this.y=r[1]*e+r[5]*A+r[9]*i,this.z=r[2]*e+r[6]*A+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Ht(A,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,A){return this.x=t.x+(e.x-t.x)*A,this.y=t.y+(e.y-t.y)*A,this.z=t.z+(e.z-t.z)*A,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const A=t.x,i=t.y,r=t.z,s=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*s-A*l,this.z=A*a-i*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const A=t.dot(this)/e;return this.copy(t).multiplyScalar(A)}projectOnPlane(t){return ti.copy(this).projectOnVector(t),this.sub(ti)}reflect(t){return this.sub(ti.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const A=this.dot(t)/e;return Math.acos(Ht(A,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,A=this.y-t.y,i=this.z-t.z;return e*e+A*A+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,A){const i=Math.sin(e)*t;return this.x=i*Math.sin(A),this.y=Math.cos(e)*t,this.z=i*Math.cos(A),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,A){return this.x=t*Math.sin(e),this.y=A,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),A=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=A,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,A=Math.sqrt(1-e*e);return this.x=A*Math.cos(t),this.y=e,this.z=A*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ti=new U,ki=new $A;class Ut{constructor(t,e,A,i,r,s,a,l,o){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,A,i,r,s,a,l,o)}set(t,e,A,i,r,s,a,l,o){const c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=l,c[6]=A,c[7]=s,c[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,A=t.elements;return e[0]=A[0],e[1]=A[1],e[2]=A[2],e[3]=A[3],e[4]=A[4],e[5]=A[5],e[6]=A[6],e[7]=A[7],e[8]=A[8],this}extractBasis(t,e,A){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),A.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const A=t.elements,i=e.elements,r=this.elements,s=A[0],a=A[3],l=A[6],o=A[1],c=A[4],u=A[7],d=A[2],f=A[5],m=A[8],_=i[0],p=i[3],h=i[6],T=i[1],E=i[4],S=i[7],R=i[2],b=i[5],P=i[8];return r[0]=s*_+a*T+l*R,r[3]=s*p+a*E+l*b,r[6]=s*h+a*S+l*P,r[1]=o*_+c*T+u*R,r[4]=o*p+c*E+u*b,r[7]=o*h+c*S+u*P,r[2]=d*_+f*T+m*R,r[5]=d*p+f*E+m*b,r[8]=d*h+f*S+m*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],A=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],o=t[7],c=t[8];return e*s*c-e*a*o-A*r*c+A*a*l+i*r*o-i*s*l}invert(){const t=this.elements,e=t[0],A=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],o=t[7],c=t[8],u=c*s-a*o,d=a*l-c*r,f=o*r-s*l,m=e*u+A*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(i*o-c*A)*_,t[2]=(a*A-i*s)*_,t[3]=d*_,t[4]=(c*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(A*l-o*e)*_,t[8]=(s*e-A*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,A,i,r,s,a){const l=Math.cos(r),o=Math.sin(r);return this.set(A*l,A*o,-A*(l*s+o*a)+s+t,-i*o,i*l,-i*(-o*s+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ei.makeScale(t,e)),this}rotate(t){return this.premultiply(ei.makeRotation(-t)),this}translate(t,e){return this.premultiply(ei.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),A=Math.sin(t);return this.set(e,-A,0,A,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,A=t.elements;for(let i=0;i<9;i++)if(e[i]!==A[i])return!1;return!0}fromArray(t,e=0){for(let A=0;A<9;A++)this.elements[A]=t[A+e];return this}toArray(t=[],e=0){const A=this.elements;return t[e]=A[0],t[e+1]=A[1],t[e+2]=A[2],t[e+3]=A[3],t[e+4]=A[4],t[e+5]=A[5],t[e+6]=A[6],t[e+7]=A[7],t[e+8]=A[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ei=new Ut;function Vi(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function fn(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Fs(){const n=fn("canvas");return n.style.display="block",n}const Wi={};function jA(n){n in Wi||(Wi[n]=!0,console.warn(n))}function Ns(n,t,e){return new Promise(function(A,i){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:A()}}setTimeout(r,e)})}const Xi=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),qi=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Bs(){const n={enabled:!0,workingColorSpace:SA,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===jt&&(i.r=qe(i.r),i.g=qe(i.g),i.b=qe(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===jt&&(i.r=EA(i.r),i.g=EA(i.g),i.b=EA(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?dn:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return jA("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return jA("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],A=[.3127,.329];return n.define({[SA]:{primaries:t,whitePoint:A,transfer:dn,toXYZ:Xi,fromXYZ:qi,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Le},outputColorSpaceConfig:{drawingBufferColorSpace:Le}},[Le]:{primaries:t,whitePoint:A,transfer:jt,toXYZ:Xi,fromXYZ:qi,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Le}}}),n}const Vt=Bs();function qe(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function EA(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let wA;class Os{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let A;if(t instanceof HTMLCanvasElement)A=t;else{wA===void 0&&(wA=fn("canvas")),wA.width=t.width,wA.height=t.height;const i=wA.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),A=wA}return A.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fn("canvas");e.width=t.width,e.height=t.height;const A=e.getContext("2d");A.drawImage(t,0,0,t.width,t.height);const i=A.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=qe(r[s]/255)*255;return A.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let A=0;A<e.length;A++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[A]=Math.floor(qe(e[A]/255)*255):e[A]=qe(e[A]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let zs=0;class Ai{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zs++}),this.uuid=qA(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const A={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(ni(i[s].image)):r.push(ni(i[s]))}else r=ni(i);A.url=r}return e||(t.images[this.uuid]=A),A}}function ni(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Os.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Hs=0;const ii=new U;class we extends yA{constructor(t=we.DEFAULT_IMAGE,e=we.DEFAULT_MAPPING,A=1001,i=1001,r=1006,s=1008,a=1023,l=1009,o=we.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Hs++}),this.uuid=qA(),this.name="",this.source=new Ai(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=A,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=o,this.format=a,this.internalFormat=null,this.type=l,this.offset=new $t(0,0),this.repeat=new $t(1,1),this.center=new $t(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ii).x}get height(){return this.source.getSize(ii).y}get depth(){return this.source.getSize(ii).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const A=t[e];if(A===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&A&&i.isVector2&&A.isVector2||i&&A&&i.isVector3&&A.isVector3||i&&A&&i.isMatrix3&&A.isMatrix3?i.copy(A):this[e]=A}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const A={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(A.userData=this.userData),e||(t.textures[this.uuid]=A),A}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}we.DEFAULT_IMAGE=null,we.DEFAULT_MAPPING=300,we.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,A=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=A,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,A,i){return this.x=t,this.y=e,this.z=A,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,A=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*A+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*A+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*A+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*A+s[11]*i+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,A,i,r;const l=t.elements,o=l[0],c=l[4],u=l[8],d=l[1],f=l[5],m=l[9],_=l[2],p=l[6],h=l[10];if(Math.abs(c-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(o+f+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(o+1)/2,S=(f+1)/2,R=(h+1)/2,b=(c+d)/4,P=(u+_)/4,N=(m+p)/4;return E>S&&E>R?E<.01?(A=0,i=.707106781,r=.707106781):(A=Math.sqrt(E),i=b/A,r=P/A):S>R?S<.01?(A=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),A=b/i,r=N/i):R<.01?(A=.707106781,i=.707106781,r=0):(r=Math.sqrt(R),A=P/r,i=N/r),this.set(A,i,r,e),this}let T=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(d-c)*(d-c));return Math.abs(T)<.001&&(T=1),this.x=(p-m)/T,this.y=(u-_)/T,this.z=(d-c)/T,this.w=Math.acos((o+f+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Ht(A,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,A){return this.x=t.x+(e.x-t.x)*A,this.y=t.y+(e.y-t.y)*A,this.z=t.z+(e.z-t.z)*A,this.w=t.w+(e.w-t.w)*A,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Gs extends yA{constructor(t=1,e=1,A={}){super(),A=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},A),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=A.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const i={width:t,height:e,depth:A.depth},r=new we(i);this.textures=[];const s=A.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(A),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=A.depthTexture,this.samples=A.samples,this.multiview=A.multiview}_setTextureOptions(t={}){const e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let A=0;A<this.textures.length;A++)this.textures[A].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,A=1){if(this.width!==t||this.height!==e||this.depth!==A){this.width=t,this.height=e,this.depth=A;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=A,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,A=t.textures.length;e<A;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Ai(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class cA extends Gs{constructor(t=1,e=1,A={}){super(t,e,A),this.isWebGLRenderTarget=!0}}class Yi extends we{constructor(t=null,e=1,A=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:A,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ks extends we{constructor(t=null,e=1,A=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:A,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class KA{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,A=t.length;e<A;e+=3)this.expandByPoint(Be.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,A=t.count;e<A;e++)this.expandByPoint(Be.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,A=t.length;e<A;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const A=Be.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(A),this.max.copy(t).add(A),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const A=t.geometry;if(A!==void 0){const r=A.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,Be):Be.fromBufferAttribute(r,s),Be.applyMatrix4(t.matrixWorld),this.expandByPoint(Be);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),pn.copy(t.boundingBox)):(A.boundingBox===null&&A.computeBoundingBox(),pn.copy(A.boundingBox)),pn.applyMatrix4(t.matrixWorld),this.union(pn)}const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Be),Be.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,A;return t.normal.x>0?(e=t.normal.x*this.min.x,A=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,A=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,A+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,A+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,A+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,A+=t.normal.z*this.min.z),e<=-t.constant&&A>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(ZA),mn.subVectors(this.max,ZA),TA.subVectors(t.a,ZA),bA.subVectors(t.b,ZA),RA.subVectors(t.c,ZA),AA.subVectors(bA,TA),nA.subVectors(RA,bA),uA.subVectors(TA,RA);let e=[0,-AA.z,AA.y,0,-nA.z,nA.y,0,-uA.z,uA.y,AA.z,0,-AA.x,nA.z,0,-nA.x,uA.z,0,-uA.x,-AA.y,AA.x,0,-nA.y,nA.x,0,-uA.y,uA.x,0];return!ri(e,TA,bA,RA,mn)||(e=[1,0,0,0,1,0,0,0,1],!ri(e,TA,bA,RA,mn))?!1:(gn.crossVectors(AA,nA),e=[gn.x,gn.y,gn.z],ri(e,TA,bA,RA,mn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Be).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Be).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ye[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ye[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ye[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ye[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ye[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ye[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ye[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ye[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ye),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Ye=[new U,new U,new U,new U,new U,new U,new U,new U],Be=new U,pn=new KA,TA=new U,bA=new U,RA=new U,AA=new U,nA=new U,uA=new U,ZA=new U,mn=new U,gn=new U,hA=new U;function ri(n,t,e,A,i){for(let r=0,s=n.length-3;r<=s;r+=3){hA.fromArray(n,r);const a=i.x*Math.abs(hA.x)+i.y*Math.abs(hA.y)+i.z*Math.abs(hA.z),l=t.dot(hA),o=e.dot(hA),c=A.dot(hA);if(Math.max(-Math.max(l,o,c),Math.min(l,o,c))>a)return!1}return!0}const Vs=new KA,QA=new U,si=new U;class JA{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const A=this.center;e!==void 0?A.copy(e):Vs.setFromPoints(t).getCenter(A);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,A.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const A=this.center.distanceToSquared(t);return e.copy(t),A>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;QA.subVectors(t,this.center);const e=QA.lengthSq();if(e>this.radius*this.radius){const A=Math.sqrt(e),i=(A-this.radius)*.5;this.center.addScaledVector(QA,i/A),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(si.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(QA.copy(t.center).add(si)),this.expandByPoint(QA.copy(t.center).sub(si))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const $e=new U,ai=new U,_n=new U,iA=new U,oi=new U,vn=new U,li=new U;class ci{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,$e)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const A=e.dot(this.direction);return A<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,A)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=$e.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):($e.copy(this.origin).addScaledVector(this.direction,e),$e.distanceToSquared(t))}distanceSqToSegment(t,e,A,i){ai.copy(t).add(e).multiplyScalar(.5),_n.copy(e).sub(t).normalize(),iA.copy(this.origin).sub(ai);const r=t.distanceTo(e)*.5,s=-this.direction.dot(_n),a=iA.dot(this.direction),l=-iA.dot(_n),o=iA.lengthSq(),c=Math.abs(1-s*s);let u,d,f,m;if(c>0)if(u=s*l-a,d=s*a-l,m=r*c,u>=0)if(d>=-m)if(d<=m){const _=1/c;u*=_,d*=_,f=u*(u+s*d+2*a)+d*(s*u+d+2*l)+o}else d=r,u=Math.max(0,-(s*d+a)),f=-u*u+d*(d+2*l)+o;else d=-r,u=Math.max(0,-(s*d+a)),f=-u*u+d*(d+2*l)+o;else d<=-m?(u=Math.max(0,-(-s*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+o):d<=m?(u=0,d=Math.min(Math.max(-r,-l),r),f=d*(d+2*l)+o):(u=Math.max(0,-(s*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),f=-u*u+d*(d+2*l)+o);else d=s>0?-r:r,u=Math.max(0,-(s*d+a)),f=-u*u+d*(d+2*l)+o;return A&&A.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(ai).addScaledVector(_n,d),f}intersectSphere(t,e){$e.subVectors(t.center,this.origin);const A=$e.dot(this.direction),i=$e.dot($e)-A*A,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=A-s,l=A+s;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const A=-(this.origin.dot(t.normal)+t.constant)/e;return A>=0?A:null}intersectPlane(t,e){const A=this.distanceToPlane(t);return A===null?null:this.at(A,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let A,i,r,s,a,l;const o=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return o>=0?(A=(t.min.x-d.x)*o,i=(t.max.x-d.x)*o):(A=(t.max.x-d.x)*o,i=(t.min.x-d.x)*o),c>=0?(r=(t.min.y-d.y)*c,s=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,s=(t.min.y-d.y)*c),A>s||r>i||((r>A||isNaN(A))&&(A=r),(s<i||isNaN(i))&&(i=s),u>=0?(a=(t.min.z-d.z)*u,l=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,l=(t.min.z-d.z)*u),A>l||a>i)||((a>A||A!==A)&&(A=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(A>=0?A:i,e)}intersectsBox(t){return this.intersectBox(t,$e)!==null}intersectTriangle(t,e,A,i,r){oi.subVectors(e,t),vn.subVectors(A,t),li.crossVectors(oi,vn);let s=this.direction.dot(li),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;iA.subVectors(this.origin,t);const l=a*this.direction.dot(vn.crossVectors(iA,vn));if(l<0)return null;const o=a*this.direction.dot(oi.cross(iA));if(o<0||l+o>s)return null;const c=-a*iA.dot(li);return c<0?null:this.at(c/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,A,i,r,s,a,l,o,c,u,d,f,m,_,p){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,A,i,r,s,a,l,o,c,u,d,f,m,_,p)}set(t,e,A,i,r,s,a,l,o,c,u,d,f,m,_,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=A,h[12]=i,h[1]=r,h[5]=s,h[9]=a,h[13]=l,h[2]=o,h[6]=c,h[10]=u,h[14]=d,h[3]=f,h[7]=m,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,A=t.elements;return e[0]=A[0],e[1]=A[1],e[2]=A[2],e[3]=A[3],e[4]=A[4],e[5]=A[5],e[6]=A[6],e[7]=A[7],e[8]=A[8],e[9]=A[9],e[10]=A[10],e[11]=A[11],e[12]=A[12],e[13]=A[13],e[14]=A[14],e[15]=A[15],this}copyPosition(t){const e=this.elements,A=t.elements;return e[12]=A[12],e[13]=A[13],e[14]=A[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,A){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),A.setFromMatrixColumn(this,2),this}makeBasis(t,e,A){return this.set(t.x,e.x,A.x,0,t.y,e.y,A.y,0,t.z,e.z,A.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,A=t.elements,i=1/CA.setFromMatrixColumn(t,0).length(),r=1/CA.setFromMatrixColumn(t,1).length(),s=1/CA.setFromMatrixColumn(t,2).length();return e[0]=A[0]*i,e[1]=A[1]*i,e[2]=A[2]*i,e[3]=0,e[4]=A[4]*r,e[5]=A[5]*r,e[6]=A[6]*r,e[7]=0,e[8]=A[8]*s,e[9]=A[9]*s,e[10]=A[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,A=t.x,i=t.y,r=t.z,s=Math.cos(A),a=Math.sin(A),l=Math.cos(i),o=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=s*c,f=s*u,m=a*c,_=a*u;e[0]=l*c,e[4]=-l*u,e[8]=o,e[1]=f+m*o,e[5]=d-_*o,e[9]=-a*l,e[2]=_-d*o,e[6]=m+f*o,e[10]=s*l}else if(t.order==="YXZ"){const d=l*c,f=l*u,m=o*c,_=o*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=s*o,e[1]=s*u,e[5]=s*c,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=s*l}else if(t.order==="ZXY"){const d=l*c,f=l*u,m=o*c,_=o*u;e[0]=d-_*a,e[4]=-s*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=s*c,e[9]=_-d*a,e[2]=-s*o,e[6]=a,e[10]=s*l}else if(t.order==="ZYX"){const d=s*c,f=s*u,m=a*c,_=a*u;e[0]=l*c,e[4]=m*o-f,e[8]=d*o+_,e[1]=l*u,e[5]=_*o+d,e[9]=f*o-m,e[2]=-o,e[6]=a*l,e[10]=s*l}else if(t.order==="YZX"){const d=s*l,f=s*o,m=a*l,_=a*o;e[0]=l*c,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=s*c,e[9]=-a*c,e[2]=-o*c,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=s*l,f=s*o,m=a*l,_=a*o;e[0]=l*c,e[4]=-u,e[8]=o*c,e[1]=d*u+_,e[5]=s*c,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*c,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ws,t,Xs)}lookAt(t,e,A){const i=this.elements;return be.subVectors(t,e),be.lengthSq()===0&&(be.z=1),be.normalize(),rA.crossVectors(A,be),rA.lengthSq()===0&&(Math.abs(A.z)===1?be.x+=1e-4:be.z+=1e-4,be.normalize(),rA.crossVectors(A,be)),rA.normalize(),xn.crossVectors(be,rA),i[0]=rA.x,i[4]=xn.x,i[8]=be.x,i[1]=rA.y,i[5]=xn.y,i[9]=be.y,i[2]=rA.z,i[6]=xn.z,i[10]=be.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const A=t.elements,i=e.elements,r=this.elements,s=A[0],a=A[4],l=A[8],o=A[12],c=A[1],u=A[5],d=A[9],f=A[13],m=A[2],_=A[6],p=A[10],h=A[14],T=A[3],E=A[7],S=A[11],R=A[15],b=i[0],P=i[4],N=i[8],M=i[12],x=i[1],D=i[5],z=i[9],G=i[13],X=i[2],Y=i[6],q=i[10],J=i[14],H=i[3],rt=i[7],ht=i[11],nt=i[15];return r[0]=s*b+a*x+l*X+o*H,r[4]=s*P+a*D+l*Y+o*rt,r[8]=s*N+a*z+l*q+o*ht,r[12]=s*M+a*G+l*J+o*nt,r[1]=c*b+u*x+d*X+f*H,r[5]=c*P+u*D+d*Y+f*rt,r[9]=c*N+u*z+d*q+f*ht,r[13]=c*M+u*G+d*J+f*nt,r[2]=m*b+_*x+p*X+h*H,r[6]=m*P+_*D+p*Y+h*rt,r[10]=m*N+_*z+p*q+h*ht,r[14]=m*M+_*G+p*J+h*nt,r[3]=T*b+E*x+S*X+R*H,r[7]=T*P+E*D+S*Y+R*rt,r[11]=T*N+E*z+S*q+R*ht,r[15]=T*M+E*G+S*J+R*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],A=t[4],i=t[8],r=t[12],s=t[1],a=t[5],l=t[9],o=t[13],c=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],p=t[11],h=t[15];return m*(+r*l*u-i*o*u-r*a*d+A*o*d+i*a*f-A*l*f)+_*(+e*l*f-e*o*d+r*s*d-i*s*f+i*o*c-r*l*c)+p*(+e*o*u-e*a*f-r*s*u+A*s*f+r*a*c-A*o*c)+h*(-i*a*c-e*l*u+e*a*d+i*s*u-A*s*d+A*l*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,A){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=A),this}invert(){const t=this.elements,e=t[0],A=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],o=t[7],c=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],p=t[14],h=t[15],T=u*p*o-_*d*o+_*l*f-a*p*f-u*l*h+a*d*h,E=m*d*o-c*p*o-m*l*f+s*p*f+c*l*h-s*d*h,S=c*_*o-m*u*o+m*a*f-s*_*f-c*a*h+s*u*h,R=m*u*l-c*_*l-m*a*d+s*_*d+c*a*p-s*u*p,b=e*T+A*E+i*S+r*R;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/b;return t[0]=T*P,t[1]=(_*d*r-u*p*r-_*i*f+A*p*f+u*i*h-A*d*h)*P,t[2]=(a*p*r-_*l*r+_*i*o-A*p*o-a*i*h+A*l*h)*P,t[3]=(u*l*r-a*d*r-u*i*o+A*d*o+a*i*f-A*l*f)*P,t[4]=E*P,t[5]=(c*p*r-m*d*r+m*i*f-e*p*f-c*i*h+e*d*h)*P,t[6]=(m*l*r-s*p*r-m*i*o+e*p*o+s*i*h-e*l*h)*P,t[7]=(s*d*r-c*l*r+c*i*o-e*d*o-s*i*f+e*l*f)*P,t[8]=S*P,t[9]=(m*u*r-c*_*r-m*A*f+e*_*f+c*A*h-e*u*h)*P,t[10]=(s*_*r-m*a*r+m*A*o-e*_*o-s*A*h+e*a*h)*P,t[11]=(c*a*r-s*u*r-c*A*o+e*u*o+s*A*f-e*a*f)*P,t[12]=R*P,t[13]=(c*_*i-m*u*i+m*A*d-e*_*d-c*A*p+e*u*p)*P,t[14]=(m*a*i-s*_*i-m*A*l+e*_*l+s*A*p-e*a*p)*P,t[15]=(s*u*i-c*a*i+c*A*l-e*u*l-s*A*d+e*a*d)*P,this}scale(t){const e=this.elements,A=t.x,i=t.y,r=t.z;return e[0]*=A,e[4]*=i,e[8]*=r,e[1]*=A,e[5]*=i,e[9]*=r,e[2]*=A,e[6]*=i,e[10]*=r,e[3]*=A,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],A=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,A,i))}makeTranslation(t,e,A){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,A,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),A=Math.sin(t);return this.set(1,0,0,0,0,e,-A,0,0,A,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),A=Math.sin(t);return this.set(e,0,A,0,0,1,0,0,-A,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),A=Math.sin(t);return this.set(e,-A,0,0,A,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const A=Math.cos(e),i=Math.sin(e),r=1-A,s=t.x,a=t.y,l=t.z,o=r*s,c=r*a;return this.set(o*s+A,o*a-i*l,o*l+i*a,0,o*a+i*l,c*a+A,c*l-i*s,0,o*l-i*a,c*l+i*s,r*l*l+A,0,0,0,0,1),this}makeScale(t,e,A){return this.set(t,0,0,0,0,e,0,0,0,0,A,0,0,0,0,1),this}makeShear(t,e,A,i,r,s){return this.set(1,A,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,A){const i=this.elements,r=e._x,s=e._y,a=e._z,l=e._w,o=r+r,c=s+s,u=a+a,d=r*o,f=r*c,m=r*u,_=s*c,p=s*u,h=a*u,T=l*o,E=l*c,S=l*u,R=A.x,b=A.y,P=A.z;return i[0]=(1-(_+h))*R,i[1]=(f+S)*R,i[2]=(m-E)*R,i[3]=0,i[4]=(f-S)*b,i[5]=(1-(d+h))*b,i[6]=(p+T)*b,i[7]=0,i[8]=(m+E)*P,i[9]=(p-T)*P,i[10]=(1-(d+_))*P,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,A){const i=this.elements;let r=CA.set(i[0],i[1],i[2]).length();const s=CA.set(i[4],i[5],i[6]).length(),a=CA.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Oe.copy(this);const o=1/r,c=1/s,u=1/a;return Oe.elements[0]*=o,Oe.elements[1]*=o,Oe.elements[2]*=o,Oe.elements[4]*=c,Oe.elements[5]*=c,Oe.elements[6]*=c,Oe.elements[8]*=u,Oe.elements[9]*=u,Oe.elements[10]*=u,e.setFromRotationMatrix(Oe),A.x=r,A.y=s,A.z=a,this}makePerspective(t,e,A,i,r,s,a=2e3,l=!1){const o=this.elements,c=2*r/(e-t),u=2*r/(A-i),d=(e+t)/(e-t),f=(A+i)/(A-i);let m,_;if(l)m=r/(s-r),_=s*r/(s-r);else if(a===2e3)m=-(s+r)/(s-r),_=-2*s*r/(s-r);else if(a===2001)m=-s/(s-r),_=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=c,o[4]=0,o[8]=d,o[12]=0,o[1]=0,o[5]=u,o[9]=f,o[13]=0,o[2]=0,o[6]=0,o[10]=m,o[14]=_,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,A,i,r,s,a=2e3,l=!1){const o=this.elements,c=2/(e-t),u=2/(A-i),d=-(e+t)/(e-t),f=-(A+i)/(A-i);let m,_;if(l)m=1/(s-r),_=s/(s-r);else if(a===2e3)m=-2/(s-r),_=-(s+r)/(s-r);else if(a===2001)m=-1/(s-r),_=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=c,o[4]=0,o[8]=0,o[12]=d,o[1]=0,o[5]=u,o[9]=0,o[13]=f,o[2]=0,o[6]=0,o[10]=m,o[14]=_,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,A=t.elements;for(let i=0;i<16;i++)if(e[i]!==A[i])return!1;return!0}fromArray(t,e=0){for(let A=0;A<16;A++)this.elements[A]=t[A+e];return this}toArray(t=[],e=0){const A=this.elements;return t[e]=A[0],t[e+1]=A[1],t[e+2]=A[2],t[e+3]=A[3],t[e+4]=A[4],t[e+5]=A[5],t[e+6]=A[6],t[e+7]=A[7],t[e+8]=A[8],t[e+9]=A[9],t[e+10]=A[10],t[e+11]=A[11],t[e+12]=A[12],t[e+13]=A[13],t[e+14]=A[14],t[e+15]=A[15],t}}const CA=new U,Oe=new ue,Ws=new U(0,0,0),Xs=new U(1,1,1),rA=new U,xn=new U,be=new U,$i=new ue,ji=new $A;class je{constructor(t=0,e=0,A=0,i=je.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=A,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,A,i=this._order){return this._x=t,this._y=e,this._z=A,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,A=!0){const i=t.elements,r=i[0],s=i[4],a=i[8],l=i[1],o=i[5],c=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,o),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(l,o)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-s,o)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,o));break;case"YZX":this._z=Math.asin(Ht(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,o),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ht(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,o),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,A===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,A){return $i.makeRotationFromQuaternion(t),this.setFromRotationMatrix($i,e,A)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return ji.setFromEuler(this),this.setFromQuaternion(ji,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}je.DEFAULT_ORDER="XYZ";class Ki{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let qs=0;const Zi=new U,PA=new $A,Ke=new ue,Mn=new U,tn=new U,Ys=new U,$s=new $A,Qi=new U(1,0,0),Ji=new U(0,1,0),tr=new U(0,0,1),er={type:"added"},js={type:"removed"},DA={type:"childadded",child:null},ui={type:"childremoved",child:null};class xe extends yA{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:qs++}),this.uuid=qA(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=xe.DEFAULT_UP.clone();const t=new U,e=new je,A=new $A,i=new U(1,1,1);function r(){A.setFromEuler(e,!1)}function s(){e.setFromQuaternion(A,void 0,!1)}e._onChange(r),A._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:A},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new Ut}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=xe.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ki,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return PA.setFromAxisAngle(t,e),this.quaternion.multiply(PA),this}rotateOnWorldAxis(t,e){return PA.setFromAxisAngle(t,e),this.quaternion.premultiply(PA),this}rotateX(t){return this.rotateOnAxis(Qi,t)}rotateY(t){return this.rotateOnAxis(Ji,t)}rotateZ(t){return this.rotateOnAxis(tr,t)}translateOnAxis(t,e){return Zi.copy(t).applyQuaternion(this.quaternion),this.position.add(Zi.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Qi,t)}translateY(t){return this.translateOnAxis(Ji,t)}translateZ(t){return this.translateOnAxis(tr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ke.copy(this.matrixWorld).invert())}lookAt(t,e,A){t.isVector3?Mn.copy(t):Mn.set(t,e,A);const i=this.parent;this.updateWorldMatrix(!0,!1),tn.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ke.lookAt(tn,Mn,this.up):Ke.lookAt(Mn,tn,this.up),this.quaternion.setFromRotationMatrix(Ke),i&&(Ke.extractRotation(i.matrixWorld),PA.setFromRotationMatrix(Ke),this.quaternion.premultiply(PA.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(er),DA.child=t,this.dispatchEvent(DA),DA.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let A=0;A<arguments.length;A++)this.remove(arguments[A]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(js),ui.child=t,this.dispatchEvent(ui),ui.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ke.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ke.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ke),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(er),DA.child=t,this.dispatchEvent(DA),DA.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let A=0,i=this.children.length;A<i;A++){const s=this.children[A].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,A=[]){this[t]===e&&A.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(t,e,A);return A}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tn,t,Ys),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(tn,$s,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let A=0,i=e.length;A<i;A++)e[A].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let A=0,i=e.length;A<i;A++)e[A].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let A=0,i=e.length;A<i;A++)e[A].updateMatrixWorld(t)}updateWorldMatrix(t,e){const A=this.parent;if(t===!0&&A!==null&&A.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",A={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},A.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let o=0,c=l.length;o<c;o++){const u=l[o];r(t.shapes,u)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,o=this.material.length;l<o;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=s(t.geometries),l=s(t.materials),o=s(t.textures),c=s(t.images),u=s(t.shapes),d=s(t.skeletons),f=s(t.animations),m=s(t.nodes);a.length>0&&(A.geometries=a),l.length>0&&(A.materials=l),o.length>0&&(A.textures=o),c.length>0&&(A.images=c),u.length>0&&(A.shapes=u),d.length>0&&(A.skeletons=d),f.length>0&&(A.animations=f),m.length>0&&(A.nodes=m)}return A.object=i,A;function s(a){const l=[];for(const o in a){const c=a[o];delete c.metadata,l.push(c)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let A=0;A<t.children.length;A++){const i=t.children[A];this.add(i.clone())}return this}}xe.DEFAULT_UP=new U(0,1,0),xe.DEFAULT_MATRIX_AUTO_UPDATE=!0,xe.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ze=new U,Ze=new U,hi=new U,Qe=new U,LA=new U,IA=new U,Ar=new U,di=new U,fi=new U,pi=new U,mi=new ce,gi=new ce,_i=new ce;class He{constructor(t=new U,e=new U,A=new U){this.a=t,this.b=e,this.c=A}static getNormal(t,e,A,i){i.subVectors(A,e),ze.subVectors(t,e),i.cross(ze);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,A,i,r){ze.subVectors(i,e),Ze.subVectors(A,e),hi.subVectors(t,e);const s=ze.dot(ze),a=ze.dot(Ze),l=ze.dot(hi),o=Ze.dot(Ze),c=Ze.dot(hi),u=s*o-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(o*l-a*c)*d,m=(s*c-a*l)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,A,i){return this.getBarycoord(t,e,A,i,Qe)===null?!1:Qe.x>=0&&Qe.y>=0&&Qe.x+Qe.y<=1}static getInterpolation(t,e,A,i,r,s,a,l){return this.getBarycoord(t,e,A,i,Qe)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Qe.x),l.addScaledVector(s,Qe.y),l.addScaledVector(a,Qe.z),l)}static getInterpolatedAttribute(t,e,A,i,r,s){return mi.setScalar(0),gi.setScalar(0),_i.setScalar(0),mi.fromBufferAttribute(t,e),gi.fromBufferAttribute(t,A),_i.fromBufferAttribute(t,i),s.setScalar(0),s.addScaledVector(mi,r.x),s.addScaledVector(gi,r.y),s.addScaledVector(_i,r.z),s}static isFrontFacing(t,e,A,i){return ze.subVectors(A,e),Ze.subVectors(t,e),ze.cross(Ze).dot(i)<0}set(t,e,A){return this.a.copy(t),this.b.copy(e),this.c.copy(A),this}setFromPointsAndIndices(t,e,A,i){return this.a.copy(t[e]),this.b.copy(t[A]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,A,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,A),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ze.subVectors(this.c,this.b),Ze.subVectors(this.a,this.b),ze.cross(Ze).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,A,i,r){return He.getInterpolation(t,this.a,this.b,this.c,e,A,i,r)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const A=this.a,i=this.b,r=this.c;let s,a;LA.subVectors(i,A),IA.subVectors(r,A),di.subVectors(t,A);const l=LA.dot(di),o=IA.dot(di);if(l<=0&&o<=0)return e.copy(A);fi.subVectors(t,i);const c=LA.dot(fi),u=IA.dot(fi);if(c>=0&&u<=c)return e.copy(i);const d=l*u-c*o;if(d<=0&&l>=0&&c<=0)return s=l/(l-c),e.copy(A).addScaledVector(LA,s);pi.subVectors(t,r);const f=LA.dot(pi),m=IA.dot(pi);if(m>=0&&f<=m)return e.copy(r);const _=f*o-l*m;if(_<=0&&o>=0&&m<=0)return a=o/(o-m),e.copy(A).addScaledVector(IA,a);const p=c*m-f*u;if(p<=0&&u-c>=0&&f-m>=0)return Ar.subVectors(r,i),a=(u-c)/(u-c+(f-m)),e.copy(i).addScaledVector(Ar,a);const h=1/(p+_+d);return s=_*h,a=d*h,e.copy(A).addScaledVector(LA,s).addScaledVector(IA,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const nr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},sA={h:0,s:0,l:0},Sn={h:0,s:0,l:0};function vi(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Gt{constructor(t,e,A){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,A)}set(t,e,A){if(e===void 0&&A===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,A);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Le){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Vt.colorSpaceToWorking(this,e),this}setRGB(t,e,A,i=Vt.workingColorSpace){return this.r=t,this.g=e,this.b=A,Vt.colorSpaceToWorking(this,i),this}setHSL(t,e,A,i=Vt.workingColorSpace){if(t=Us(t,1),e=Ht(e,0,1),A=Ht(A,0,1),e===0)this.r=this.g=this.b=A;else{const r=A<=.5?A*(1+e):A+e-A*e,s=2*A-r;this.r=vi(s,r,t+1/3),this.g=vi(s,r,t),this.b=vi(s,r,t-1/3)}return Vt.colorSpaceToWorking(this,i),this}setStyle(t,e=Le){function A(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Le){const A=nr[t.toLowerCase()];return A!==void 0?this.setHex(A,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=qe(t.r),this.g=qe(t.g),this.b=qe(t.b),this}copyLinearToSRGB(t){return this.r=EA(t.r),this.g=EA(t.g),this.b=EA(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Le){return Vt.workingToColorSpace(ve.copy(this),t),Math.round(Ht(ve.r*255,0,255))*65536+Math.round(Ht(ve.g*255,0,255))*256+Math.round(Ht(ve.b*255,0,255))}getHexString(t=Le){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Vt.workingColorSpace){Vt.workingToColorSpace(ve.copy(this),e);const A=ve.r,i=ve.g,r=ve.b,s=Math.max(A,i,r),a=Math.min(A,i,r);let l,o;const c=(a+s)/2;if(a===s)l=0,o=0;else{const u=s-a;switch(o=c<=.5?u/(s+a):u/(2-s-a),s){case A:l=(i-r)/u+(i<r?6:0);break;case i:l=(r-A)/u+2;break;case r:l=(A-i)/u+4;break}l/=6}return t.h=l,t.s=o,t.l=c,t}getRGB(t,e=Vt.workingColorSpace){return Vt.workingToColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=Le){Vt.workingToColorSpace(ve.copy(this),t);const e=ve.r,A=ve.g,i=ve.b;return t!==Le?`color(${t} ${e.toFixed(3)} ${A.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(A*255)},${Math.round(i*255)})`}offsetHSL(t,e,A){return this.getHSL(sA),this.setHSL(sA.h+t,sA.s+e,sA.l+A)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,A){return this.r=t.r+(e.r-t.r)*A,this.g=t.g+(e.g-t.g)*A,this.b=t.b+(e.b-t.b)*A,this}lerpHSL(t,e){this.getHSL(sA),t.getHSL(Sn);const A=Jn(sA.h,Sn.h,e),i=Jn(sA.s,Sn.s,e),r=Jn(sA.l,Sn.l,e);return this.setHSL(A,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,A=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*A+r[6]*i,this.g=r[1]*e+r[4]*A+r[7]*i,this.b=r[2]*e+r[5]*A+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ve=new Gt;Gt.NAMES=nr;let Ks=0;class UA extends yA{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Ks++}),this.uuid=qA(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const A=t[e];if(A===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(A):i&&i.isVector3&&A&&A.isVector3?i.copy(A):this[e]=A}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const A={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),this.color&&this.color.isColor&&(A.color=this.color.getHex()),this.roughness!==void 0&&(A.roughness=this.roughness),this.metalness!==void 0&&(A.metalness=this.metalness),this.sheen!==void 0&&(A.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(A.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(A.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(A.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(A.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(A.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(A.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(A.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(A.shininess=this.shininess),this.clearcoat!==void 0&&(A.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(A.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(A.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(A.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(A.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,A.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(A.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(A.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(A.dispersion=this.dispersion),this.iridescence!==void 0&&(A.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(A.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(A.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(A.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(A.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(A.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(A.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(A.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(A.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(A.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(A.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(A.lightMap=this.lightMap.toJSON(t).uuid,A.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(A.aoMap=this.aoMap.toJSON(t).uuid,A.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(A.bumpMap=this.bumpMap.toJSON(t).uuid,A.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(A.normalMap=this.normalMap.toJSON(t).uuid,A.normalMapType=this.normalMapType,A.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(A.displacementMap=this.displacementMap.toJSON(t).uuid,A.displacementScale=this.displacementScale,A.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(A.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(A.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(A.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(A.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(A.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(A.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(A.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(A.combine=this.combine)),this.envMapRotation!==void 0&&(A.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(A.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(A.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(A.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(A.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(A.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(A.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(A.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(A.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(A.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(A.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(A.size=this.size),this.shadowSide!==null&&(A.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(A.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(A.blending=this.blending),this.side!==0&&(A.side=this.side),this.vertexColors===!0&&(A.vertexColors=!0),this.opacity<1&&(A.opacity=this.opacity),this.transparent===!0&&(A.transparent=!0),this.blendSrc!==204&&(A.blendSrc=this.blendSrc),this.blendDst!==205&&(A.blendDst=this.blendDst),this.blendEquation!==100&&(A.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(A.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(A.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(A.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(A.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(A.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(A.depthFunc=this.depthFunc),this.depthTest===!1&&(A.depthTest=this.depthTest),this.depthWrite===!1&&(A.depthWrite=this.depthWrite),this.colorWrite===!1&&(A.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(A.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(A.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(A.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(A.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(A.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(A.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(A.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(A.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(A.rotation=this.rotation),this.polygonOffset===!0&&(A.polygonOffset=!0),this.polygonOffsetFactor!==0&&(A.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(A.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(A.linewidth=this.linewidth),this.dashSize!==void 0&&(A.dashSize=this.dashSize),this.gapSize!==void 0&&(A.gapSize=this.gapSize),this.scale!==void 0&&(A.scale=this.scale),this.dithering===!0&&(A.dithering=!0),this.alphaTest>0&&(A.alphaTest=this.alphaTest),this.alphaHash===!0&&(A.alphaHash=!0),this.alphaToCoverage===!0&&(A.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(A.premultipliedAlpha=!0),this.forceSinglePass===!0&&(A.forceSinglePass=!0),this.wireframe===!0&&(A.wireframe=!0),this.wireframeLinewidth>1&&(A.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(A.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(A.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(A.flatShading=!0),this.visible===!1&&(A.visible=!1),this.toneMapped===!1&&(A.toneMapped=!1),this.fog===!1&&(A.fog=!1),Object.keys(this.userData).length>0&&(A.userData=this.userData);function i(r){const s=[];for(const a in r){const l=r[a];delete l.metadata,s.push(l)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(A.textures=r),s.length>0&&(A.images=s)}return A}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let A=null;if(e!==null){const i=e.length;A=new Array(i);for(let r=0;r!==i;++r)A[r]=e[r].clone()}return this.clippingPlanes=A,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ir extends UA{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new je,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new U,yn=new $t;let Zs=0;class fe{constructor(t,e,A=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zs++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=A,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,A){t*=this.itemSize,A*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[A+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,A=this.count;e<A;e++)yn.fromBufferAttribute(this,e),yn.applyMatrix3(t),this.setXY(e,yn.x,yn.y);else if(this.itemSize===3)for(let e=0,A=this.count;e<A;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,A=this.count;e<A;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,A=this.count;e<A;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,A=this.count;e<A;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let A=this.array[t*this.itemSize+e];return this.normalized&&(A=YA(A,this.array)),A}setComponent(t,e,A){return this.normalized&&(A=Ee(A,this.array)),this.array[t*this.itemSize+e]=A,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=YA(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=YA(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=YA(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=YA(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,A){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),A=Ee(A,this.array)),this.array[t+0]=e,this.array[t+1]=A,this}setXYZ(t,e,A,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),A=Ee(A,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=A,this.array[t+2]=i,this}setXYZW(t,e,A,i,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),A=Ee(A,this.array),i=Ee(i,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=A,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class rr extends fe{constructor(t,e,A){super(new Uint16Array(t),e,A)}}class sr extends fe{constructor(t,e,A){super(new Uint32Array(t),e,A)}}class Je extends fe{constructor(t,e,A){super(new Float32Array(t),e,A)}}let Qs=0;const Ie=new ue,xi=new xe,FA=new U,Re=new KA,en=new KA,ge=new U;class Ce extends yA{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qs++}),this.uuid=qA(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Vi(t)?sr:rr)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,A=0){this.groups.push({start:t,count:e,materialIndex:A})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const A=this.attributes.normal;if(A!==void 0){const r=new Ut().getNormalMatrix(t);A.applyNormalMatrix(r),A.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ie.makeRotationFromQuaternion(t),this.applyMatrix4(Ie),this}rotateX(t){return Ie.makeRotationX(t),this.applyMatrix4(Ie),this}rotateY(t){return Ie.makeRotationY(t),this.applyMatrix4(Ie),this}rotateZ(t){return Ie.makeRotationZ(t),this.applyMatrix4(Ie),this}translate(t,e,A){return Ie.makeTranslation(t,e,A),this.applyMatrix4(Ie),this}scale(t,e,A){return Ie.makeScale(t,e,A),this.applyMatrix4(Ie),this}lookAt(t){return xi.lookAt(t),xi.updateMatrix(),this.applyMatrix4(xi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(FA).negate(),this.translate(FA.x,FA.y,FA.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const A=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];A.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Je(A,3))}else{const A=Math.min(t.length,e.count);for(let i=0;i<A;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new KA);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let A=0,i=e.length;A<i;A++){const r=e[A];Re.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Re.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Re.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Re.min),this.boundingBox.expandByPoint(Re.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new JA);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const A=this.boundingSphere.center;if(Re.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const a=e[r];en.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(Re.min,en.min),Re.expandByPoint(ge),ge.addVectors(Re.max,en.max),Re.expandByPoint(ge)):(Re.expandByPoint(en.min),Re.expandByPoint(en.max))}Re.getCenter(A);let i=0;for(let r=0,s=t.count;r<s;r++)ge.fromBufferAttribute(t,r),i=Math.max(i,A.distanceToSquared(ge));if(e)for(let r=0,s=e.length;r<s;r++){const a=e[r],l=this.morphTargetsRelative;for(let o=0,c=a.count;o<c;o++)ge.fromBufferAttribute(a,o),l&&(FA.fromBufferAttribute(t,o),ge.add(FA)),i=Math.max(i,A.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const A=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*A.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<A.count;N++)a[N]=new U,l[N]=new U;const o=new U,c=new U,u=new U,d=new $t,f=new $t,m=new $t,_=new U,p=new U;function h(N,M,x){o.fromBufferAttribute(A,N),c.fromBufferAttribute(A,M),u.fromBufferAttribute(A,x),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,x),c.sub(o),u.sub(o),f.sub(d),m.sub(d);const D=1/(f.x*m.y-m.x*f.y);isFinite(D)&&(_.copy(c).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(D),p.copy(u).multiplyScalar(f.x).addScaledVector(c,-m.x).multiplyScalar(D),a[N].add(_),a[M].add(_),a[x].add(_),l[N].add(p),l[M].add(p),l[x].add(p))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let N=0,M=T.length;N<M;++N){const x=T[N],D=x.start,z=x.count;for(let G=D,X=D+z;G<X;G+=3)h(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const E=new U,S=new U,R=new U,b=new U;function P(N){R.fromBufferAttribute(i,N),b.copy(R);const M=a[N];E.copy(M),E.sub(R.multiplyScalar(R.dot(M))).normalize(),S.crossVectors(b,M);const D=S.dot(l[N])<0?-1:1;s.setXYZW(N,E.x,E.y,E.z,D)}for(let N=0,M=T.length;N<M;++N){const x=T[N],D=x.start,z=x.count;for(let G=D,X=D+z;G<X;G+=3)P(t.getX(G+0)),P(t.getX(G+1)),P(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let A=this.getAttribute("normal");if(A===void 0)A=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",A);else for(let d=0,f=A.count;d<f;d++)A.setXYZ(d,0,0,0);const i=new U,r=new U,s=new U,a=new U,l=new U,o=new U,c=new U,u=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,p),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),a.fromBufferAttribute(A,m),l.fromBufferAttribute(A,_),o.fromBufferAttribute(A,p),a.add(c),l.add(c),o.add(c),A.setXYZ(m,a.x,a.y,a.z),A.setXYZ(_,l.x,l.y,l.z),A.setXYZ(p,o.x,o.y,o.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),s.fromBufferAttribute(e,d+2),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),A.setXYZ(d+0,c.x,c.y,c.z),A.setXYZ(d+1,c.x,c.y,c.z),A.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),A.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,A=t.count;e<A;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,l){const o=a.array,c=a.itemSize,u=a.normalized,d=new o.constructor(l.length*c);let f=0,m=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?f=l[_]*a.data.stride+a.offset:f=l[_]*c;for(let h=0;h<c;h++)d[m++]=o[f++]}return new fe(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,A=this.index.array,i=this.attributes;for(const a in i){const l=i[a],o=t(l,A);e.setAttribute(a,o)}const r=this.morphAttributes;for(const a in r){const l=[],o=r[a];for(let c=0,u=o.length;c<u;c++){const d=o[c],f=t(d,A);l.push(f)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const o=s[a];e.addGroup(o.start,o.count,o.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const o in l)l[o]!==void 0&&(t[o]=l[o]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const A=this.attributes;for(const l in A){const o=A[l];t.data.attributes[l]=o.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const o=this.morphAttributes[l],c=[];for(let u=0,d=o.length;u<d;u++){const f=o[u];c.push(f.toJSON(t.data))}c.length>0&&(i[l]=c,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const A=t.index;A!==null&&this.setIndex(A.clone());const i=t.attributes;for(const o in i){const c=i[o];this.setAttribute(o,c.clone(e))}const r=t.morphAttributes;for(const o in r){const c=[],u=r[o];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[o]=c}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let o=0,c=s.length;o<c;o++){const u=s[o];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const ar=new ue,dA=new ci,En=new JA,or=new U,wn=new U,Tn=new U,bn=new U,Mi=new U,Rn=new U,lr=new U,Cn=new U;class Ge extends xe{constructor(t=new Ce,e=new ir){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,A=Object.keys(e);if(A.length>0){const i=e[A[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const A=this.geometry,i=A.attributes.position,r=A.morphAttributes.position,s=A.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Rn.set(0,0,0);for(let l=0,o=r.length;l<o;l++){const c=a[l],u=r[l];c!==0&&(Mi.fromBufferAttribute(u,t),s?Rn.addScaledVector(Mi,c):Rn.addScaledVector(Mi.sub(e),c))}e.add(Rn)}return e}raycast(t,e){const A=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(A.boundingSphere===null&&A.computeBoundingSphere(),En.copy(A.boundingSphere),En.applyMatrix4(r),dA.copy(t.ray).recast(t.near),!(En.containsPoint(dA.origin)===!1&&(dA.intersectSphere(En,or)===null||dA.origin.distanceToSquared(or)>(t.far-t.near)**2))&&(ar.copy(r).invert(),dA.copy(t.ray).applyMatrix4(ar),!(A.boundingBox!==null&&dA.intersectsBox(A.boundingBox)===!1)&&this._computeIntersections(t,e,dA)))}_computeIntersections(t,e,A){let i;const r=this.geometry,s=this.material,a=r.index,l=r.attributes.position,o=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,_=d.length;m<_;m++){const p=d[m],h=s[p.materialIndex],T=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=T,R=E;S<R;S+=3){const b=a.getX(S),P=a.getX(S+1),N=a.getX(S+2);i=Pn(this,h,t,A,o,c,u,b,P,N),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,h=_;p<h;p+=3){const T=a.getX(p),E=a.getX(p+1),S=a.getX(p+2);i=Pn(this,s,t,A,o,c,u,T,E,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,_=d.length;m<_;m++){const p=d[m],h=s[p.materialIndex],T=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let S=T,R=E;S<R;S+=3){const b=S,P=S+1,N=S+2;i=Pn(this,h,t,A,o,c,u,b,P,N),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(l.count,f.start+f.count);for(let p=m,h=_;p<h;p+=3){const T=p,E=p+1,S=p+2;i=Pn(this,s,t,A,o,c,u,T,E,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Js(n,t,e,A,i,r,s,a){let l;if(t.side===1?l=A.intersectTriangle(s,r,i,!0,a):l=A.intersectTriangle(i,r,s,t.side===0,a),l===null)return null;Cn.copy(a),Cn.applyMatrix4(n.matrixWorld);const o=e.ray.origin.distanceTo(Cn);return o<e.near||o>e.far?null:{distance:o,point:Cn.clone(),object:n}}function Pn(n,t,e,A,i,r,s,a,l,o){n.getVertexPosition(a,wn),n.getVertexPosition(l,Tn),n.getVertexPosition(o,bn);const c=Js(n,t,e,A,wn,Tn,bn,lr);if(c){const u=new U;He.getBarycoord(lr,wn,Tn,bn,u),i&&(c.uv=He.getInterpolatedAttribute(i,a,l,o,u,new $t)),r&&(c.uv1=He.getInterpolatedAttribute(r,a,l,o,u,new $t)),s&&(c.normal=He.getInterpolatedAttribute(s,a,l,o,u,new U),c.normal.dot(A.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:o,normal:new U,materialIndex:0};He.getNormal(wn,Tn,bn,d.normal),c.face=d,c.barycoord=u}return c}class An extends Ce{constructor(t=1,e=1,A=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:A,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],o=[],c=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,A,e,t,s,r,0),m("z","y","x",1,-1,A,e,-t,s,r,1),m("x","z","y",1,1,t,A,e,i,s,2),m("x","z","y",1,-1,t,A,-e,i,s,3),m("x","y","z",1,-1,t,e,A,i,r,4),m("x","y","z",-1,-1,t,e,-A,i,r,5),this.setIndex(l),this.setAttribute("position",new Je(o,3)),this.setAttribute("normal",new Je(c,3)),this.setAttribute("uv",new Je(u,2));function m(_,p,h,T,E,S,R,b,P,N,M){const x=S/P,D=R/N,z=S/2,G=R/2,X=b/2,Y=P+1,q=N+1;let J=0,H=0;const rt=new U;for(let ht=0;ht<q;ht++){const nt=ht*D-G;for(let Pt=0;Pt<Y;Pt++){const kt=Pt*x-z;rt[_]=kt*T,rt[p]=nt*E,rt[h]=X,o.push(rt.x,rt.y,rt.z),rt[_]=0,rt[p]=0,rt[h]=b>0?1:-1,c.push(rt.x,rt.y,rt.z),u.push(Pt/P),u.push(1-ht/N),J+=1}}for(let ht=0;ht<N;ht++)for(let nt=0;nt<P;nt++){const Pt=d+nt+Y*ht,kt=d+nt+Y*(ht+1),Xt=d+(nt+1)+Y*(ht+1),Ot=d+(nt+1)+Y*ht;l.push(Pt,kt,Ot),l.push(kt,Xt,Ot),H+=6}a.addGroup(f,H,M),f+=H,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new An(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function NA(n){const t={};for(const e in n){t[e]={};for(const A in n[e]){const i=n[e][A];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][A]=null):t[e][A]=i.clone():Array.isArray(i)?t[e][A]=i.slice():t[e][A]=i}}return t}function Me(n){const t={};for(let e=0;e<n.length;e++){const A=NA(n[e]);for(const i in A)t[i]=A[i]}return t}function ta(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function cr(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Vt.workingColorSpace}const ea={clone:NA,merge:Me};var Aa=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,na=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ke extends UA{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Aa,this.fragmentShader=na,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=NA(t.uniforms),this.uniformsGroups=ta(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const A={};for(const i in this.extensions)this.extensions[i]===!0&&(A[i]=!0);return Object.keys(A).length>0&&(e.extensions=A),e}}class ur extends xe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const aA=new U,hr=new $t,dr=new $t;class Ve extends ur{constructor(t=50,e=1,A=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=A,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Qn*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Zn*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Qn*2*Math.atan(Math.tan(Zn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,A){aA.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(aA.x,aA.y).multiplyScalar(-t/aA.z),aA.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),A.set(aA.x,aA.y).multiplyScalar(-t/aA.z)}getViewSize(t,e){return this.getViewBounds(t,hr,dr),e.subVectors(dr,hr)}setViewOffset(t,e,A,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=A,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Zn*.5*this.fov)/this.zoom,A=2*e,i=this.aspect*A,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,o=s.fullHeight;r+=s.offsetX*i/l,e-=s.offsetY*A/o,i*=s.width/l,A*=s.height/o}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-A,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const BA=-90,OA=1;class ia extends xe{constructor(t,e,A){super(),this.type="CubeCamera",this.renderTarget=A,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ve(BA,OA,t,e);i.layers=this.layers,this.add(i);const r=new Ve(BA,OA,t,e);r.layers=this.layers,this.add(r);const s=new Ve(BA,OA,t,e);s.layers=this.layers,this.add(s);const a=new Ve(BA,OA,t,e);a.layers=this.layers,this.add(a);const l=new Ve(BA,OA,t,e);l.layers=this.layers,this.add(l);const o=new Ve(BA,OA,t,e);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[A,i,r,s,a,l]=e;for(const o of e)this.remove(o);if(t===2e3)A.up.set(0,1,0),A.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===2001)A.up.set(0,-1,0),A.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const o of e)this.add(o),o.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:A,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,l,o,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=A.texture.generateMipmaps;A.texture.generateMipmaps=!1,t.setRenderTarget(A,0,i),t.render(e,r),t.setRenderTarget(A,1,i),t.render(e,s),t.setRenderTarget(A,2,i),t.render(e,a),t.setRenderTarget(A,3,i),t.render(e,l),t.setRenderTarget(A,4,i),t.render(e,o),A.texture.generateMipmaps=_,t.setRenderTarget(A,5,i),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=m,A.texture.needsPMREMUpdate=!0}}class fr extends we{constructor(t=[],e=301,A,i,r,s,a,l,o,c){super(t,e,A,i,r,s,a,l,o,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class ra extends cA{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const A={width:t,height:t,depth:1},i=[A,A,A,A,A,A];this.texture=new fr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const A={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new An(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:NA(A.uniforms),vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const s=new Ge(i,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new ia(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,A=!0,i=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,A,i);t.setRenderTarget(r)}}class nn extends xe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const sa={type:"move"};class Si{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new nn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new nn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new nn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const A of t.hand.values())this._getHandJoint(e,A)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,A){let i=null,r=null,s=null;const a=this._targetRay,l=this._grip,o=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(o&&t.hand){s=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,A),h=this._getHandJoint(o,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const c=o.joints["index-finger-tip"],u=o.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,m=.005;o.inputState.pinching&&d>f+m?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!o.inputState.pinching&&d<=f-m&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,A),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,A),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(sa)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),o!==null&&(o.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const A=new nn;A.matrixAutoUpdate=!1,A.visible=!1,t.joints[e.jointName]=A,t.add(A)}return t.joints[e.jointName]}}class aa extends xe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new je,this.environmentIntensity=1,this.environmentRotation=new je,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const yi=new U,oa=new U,la=new Ut;class fA{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,A,i){return this.normal.set(t,e,A),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,A){const i=yi.subVectors(A,e).cross(oa.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const A=t.delta(yi),i=this.normal.dot(A);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(A,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),A=this.distanceToPoint(t.end);return e<0&&A>0||A<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const A=e||la.getNormalMatrix(t),i=this.coplanarPoint(yi).applyMatrix4(t),r=this.normal.applyMatrix3(A).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const pA=new JA,ca=new $t(.5,.5),Dn=new U;class pr{constructor(t=new fA,e=new fA,A=new fA,i=new fA,r=new fA,s=new fA){this.planes=[t,e,A,i,r,s]}set(t,e,A,i,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(A),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let A=0;A<6;A++)e[A].copy(t.planes[A]);return this}setFromProjectionMatrix(t,e=2e3,A=!1){const i=this.planes,r=t.elements,s=r[0],a=r[1],l=r[2],o=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],p=r[10],h=r[11],T=r[12],E=r[13],S=r[14],R=r[15];if(i[0].setComponents(o-s,f-c,h-m,R-T).normalize(),i[1].setComponents(o+s,f+c,h+m,R+T).normalize(),i[2].setComponents(o+a,f+u,h+_,R+E).normalize(),i[3].setComponents(o-a,f-u,h-_,R-E).normalize(),A)i[4].setComponents(l,d,p,S).normalize(),i[5].setComponents(o-l,f-d,h-p,R-S).normalize();else if(i[4].setComponents(o-l,f-d,h-p,R-S).normalize(),e===2e3)i[5].setComponents(o+l,f+d,h+p,R+S).normalize();else if(e===2001)i[5].setComponents(l,d,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),pA.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),pA.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(pA)}intersectsSprite(t){pA.center.set(0,0,0);const e=ca.distanceTo(t.center);return pA.radius=.7071067811865476+e,pA.applyMatrix4(t.matrixWorld),this.intersectsSphere(pA)}intersectsSphere(t){const e=this.planes,A=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(A)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let A=0;A<6;A++){const i=e[A];if(Dn.x=i.normal.x>0?t.max.x:t.min.x,Dn.y=i.normal.y>0?t.max.y:t.min.y,Dn.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Dn)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let A=0;A<6;A++)if(e[A].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class mr extends UA{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Ln=new U,In=new U,gr=new ue,rn=new ci,Un=new JA,Ei=new U,_r=new U;class vr extends xe{constructor(t=new Ce,e=new mr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,A=[0];for(let i=1,r=e.count;i<r;i++)Ln.fromBufferAttribute(e,i-1),In.fromBufferAttribute(e,i),A[i]=A[i-1],A[i]+=Ln.distanceTo(In);t.setAttribute("lineDistance",new Je(A,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const A=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,s=A.drawRange;if(A.boundingSphere===null&&A.computeBoundingSphere(),Un.copy(A.boundingSphere),Un.applyMatrix4(i),Un.radius+=r,t.ray.intersectsSphere(Un)===!1)return;gr.copy(i).invert(),rn.copy(t.ray).applyMatrix4(gr);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,o=this.isLineSegments?2:1,c=A.index,d=A.attributes.position;if(c!==null){const f=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let _=f,p=m-1;_<p;_+=o){const h=c.getX(_),T=c.getX(_+1),E=Fn(this,t,rn,l,h,T,_);E&&e.push(E)}if(this.isLineLoop){const _=c.getX(m-1),p=c.getX(f),h=Fn(this,t,rn,l,_,p,m-1);h&&e.push(h)}}else{const f=Math.max(0,s.start),m=Math.min(d.count,s.start+s.count);for(let _=f,p=m-1;_<p;_+=o){const h=Fn(this,t,rn,l,_,_+1,_);h&&e.push(h)}if(this.isLineLoop){const _=Fn(this,t,rn,l,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,A=Object.keys(e);if(A.length>0){const i=e[A[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Fn(n,t,e,A,i,r,s){const a=n.geometry.attributes.position;if(Ln.fromBufferAttribute(a,i),In.fromBufferAttribute(a,r),e.distanceSqToSegment(Ln,In,Ei,_r)>A)return;Ei.applyMatrix4(n.matrixWorld);const o=t.ray.origin.distanceTo(Ei);if(!(o<t.near||o>t.far))return{distance:o,point:_r.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const xr=new U,Mr=new U;class ua extends vr{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,A=[];for(let i=0,r=e.count;i<r;i+=2)xr.fromBufferAttribute(e,i),Mr.fromBufferAttribute(e,i+1),A[i]=i===0?0:A[i-1],A[i+1]=A[i]+xr.distanceTo(Mr);t.setAttribute("lineDistance",new Je(A,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ha extends vr{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class da extends UA{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Sr=new ue,wi=new ci,Nn=new JA,Bn=new U;class fa extends xe{constructor(t=new Ce,e=new da){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const A=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=A.drawRange;if(A.boundingSphere===null&&A.computeBoundingSphere(),Nn.copy(A.boundingSphere),Nn.applyMatrix4(i),Nn.radius+=r,t.ray.intersectsSphere(Nn)===!1)return;Sr.copy(i).invert(),wi.copy(t.ray).applyMatrix4(Sr);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,o=A.index,u=A.attributes.position;if(o!==null){const d=Math.max(0,s.start),f=Math.min(o.count,s.start+s.count);for(let m=d,_=f;m<_;m++){const p=o.getX(m);Bn.fromBufferAttribute(u,p),yr(Bn,p,l,i,t,e,this)}}else{const d=Math.max(0,s.start),f=Math.min(u.count,s.start+s.count);for(let m=d,_=f;m<_;m++)Bn.fromBufferAttribute(u,m),yr(Bn,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,A=Object.keys(e);if(A.length>0){const i=e[A[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function yr(n,t,e,A,i,r,s){const a=wi.distanceSqToPoint(n);if(a<e){const l=new U;wi.closestPointToPoint(n,l),l.applyMatrix4(A);const o=i.ray.origin.distanceTo(l);if(o<i.near||o>i.far)return;r.push({distance:o,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}class Er extends we{constructor(t,e,A=1014,i,r,s,a=1003,l=1003,o,c=1026,u=1){if(c!==1026&&c!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,r,s,a,l,c,A,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Ai(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class wr extends we{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class On extends Ce{constructor(t=1,e=1,A=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:A,heightSegments:i};const r=t/2,s=e/2,a=Math.floor(A),l=Math.floor(i),o=a+1,c=l+1,u=t/a,d=e/l,f=[],m=[],_=[],p=[];for(let h=0;h<c;h++){const T=h*d-s;for(let E=0;E<o;E++){const S=E*u-r;m.push(S,-T,0),_.push(0,0,1),p.push(E/a),p.push(1-h/l)}}for(let h=0;h<l;h++)for(let T=0;T<a;T++){const E=T+o*h,S=T+o*(h+1),R=T+1+o*(h+1),b=T+1+o*h;f.push(E,S,b),f.push(S,R,b)}this.setIndex(f),this.setAttribute("position",new Je(m,3)),this.setAttribute("normal",new Je(_,3)),this.setAttribute("uv",new Je(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new On(t.width,t.height,t.widthSegments,t.heightSegments)}}class pa extends UA{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ma extends UA{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Tr extends ur{constructor(t=-1,e=1,A=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=A,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,A,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=A,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),A=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=A-t,s=A+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,s=r+o*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class ga extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function br(n,t,e,A){const i=_a(A);switch(e){case 1021:return n*t;case 1028:return n*t/i.components*i.byteLength;case 1029:return n*t/i.components*i.byteLength;case 1030:return n*t*2/i.components*i.byteLength;case 1031:return n*t*2/i.components*i.byteLength;case 1022:return n*t*3/i.components*i.byteLength;case 1023:return n*t*4/i.components*i.byteLength;case 1033:return n*t*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function _a(n){switch(n){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rr(){let n=null,t=!1,e=null,A=null;function i(r,s){e(r,s),A=n.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(A=n.requestAnimationFrame(i),t=!0)},stop:function(){n.cancelAnimationFrame(A),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function va(n){const t=new WeakMap;function e(a,l){const o=a.array,c=a.usage,u=o.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,o,c),a.onUploadCallback();let f;if(o instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)f=n.HALF_FLOAT;else if(o instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(o instanceof Int16Array)f=n.SHORT;else if(o instanceof Uint32Array)f=n.UNSIGNED_INT;else if(o instanceof Int32Array)f=n.INT;else if(o instanceof Int8Array)f=n.BYTE;else if(o instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:d,type:f,bytesPerElement:o.BYTES_PER_ELEMENT,version:a.version,size:u}}function A(a,l,o){const c=l.array,u=l.updateRanges;if(n.bindBuffer(o,a),u.length===0)n.bufferSubData(o,0,c);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];n.bufferSubData(o,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const o=t.get(a);if(o===void 0)t.set(a,e(a,l));else if(o.version<a.version){if(o.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");A(o.buffer,a,l),o.version=a.version}}return{get:i,remove:r,update:s}}var xa=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ma=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Sa=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ya=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ea=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,wa=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ta=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ba=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Ra=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,Ca=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pa=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Da=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,La=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Ia=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Ua=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Fa=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Na=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ba=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Oa=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,za=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Ha=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Ga=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,ka=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Va=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wa=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xa=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,qa=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ya=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,$a=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,ja=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ka="gl_FragColor = linearToOutputTexel( gl_FragColor );",Za=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Qa=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Ja=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,to=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,eo=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Ao=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,no=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,io=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ro=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,so=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ao=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,oo=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,lo=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,co=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,uo=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,ho=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,fo=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,po=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mo=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,go=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,_o=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,vo=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xo=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Mo=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,So=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,yo=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Eo=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,wo=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,To=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,bo=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ro=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Co=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Po=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Do=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lo=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Io=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Uo=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fo=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,No=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Bo=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Oo=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,zo=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Ho=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Go=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ko=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Vo=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wo=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xo=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,qo=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Yo=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,$o=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jo=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Ko=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Zo=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qo=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Jo=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,tl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,el=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Al=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,nl=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,il=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,rl=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,sl=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,al=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ol=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,ll=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,cl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ul=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,hl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,dl=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,fl=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,pl=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ml=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,gl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_l=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,vl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nt={alphahash_fragment:xa,alphahash_pars_fragment:Ma,alphamap_fragment:Sa,alphamap_pars_fragment:ya,alphatest_fragment:Ea,alphatest_pars_fragment:wa,aomap_fragment:Ta,aomap_pars_fragment:ba,batching_pars_vertex:Ra,batching_vertex:Ca,begin_vertex:Pa,beginnormal_vertex:Da,bsdfs:La,iridescence_fragment:Ia,bumpmap_pars_fragment:Ua,clipping_planes_fragment:Fa,clipping_planes_pars_fragment:Na,clipping_planes_pars_vertex:Ba,clipping_planes_vertex:Oa,color_fragment:za,color_pars_fragment:Ha,color_pars_vertex:Ga,color_vertex:ka,common:Va,cube_uv_reflection_fragment:Wa,defaultnormal_vertex:Xa,displacementmap_pars_vertex:qa,displacementmap_vertex:Ya,emissivemap_fragment:$a,emissivemap_pars_fragment:ja,colorspace_fragment:Ka,colorspace_pars_fragment:Za,envmap_fragment:Qa,envmap_common_pars_fragment:Ja,envmap_pars_fragment:to,envmap_pars_vertex:eo,envmap_physical_pars_fragment:ho,envmap_vertex:Ao,fog_vertex:no,fog_pars_vertex:io,fog_fragment:ro,fog_pars_fragment:so,gradientmap_pars_fragment:ao,lightmap_pars_fragment:oo,lights_lambert_fragment:lo,lights_lambert_pars_fragment:co,lights_pars_begin:uo,lights_toon_fragment:fo,lights_toon_pars_fragment:po,lights_phong_fragment:mo,lights_phong_pars_fragment:go,lights_physical_fragment:_o,lights_physical_pars_fragment:vo,lights_fragment_begin:xo,lights_fragment_maps:Mo,lights_fragment_end:So,logdepthbuf_fragment:yo,logdepthbuf_pars_fragment:Eo,logdepthbuf_pars_vertex:wo,logdepthbuf_vertex:To,map_fragment:bo,map_pars_fragment:Ro,map_particle_fragment:Co,map_particle_pars_fragment:Po,metalnessmap_fragment:Do,metalnessmap_pars_fragment:Lo,morphinstance_vertex:Io,morphcolor_vertex:Uo,morphnormal_vertex:Fo,morphtarget_pars_vertex:No,morphtarget_vertex:Bo,normal_fragment_begin:Oo,normal_fragment_maps:zo,normal_pars_fragment:Ho,normal_pars_vertex:Go,normal_vertex:ko,normalmap_pars_fragment:Vo,clearcoat_normal_fragment_begin:Wo,clearcoat_normal_fragment_maps:Xo,clearcoat_pars_fragment:qo,iridescence_pars_fragment:Yo,opaque_fragment:$o,packing:jo,premultiplied_alpha_fragment:Ko,project_vertex:Zo,dithering_fragment:Qo,dithering_pars_fragment:Jo,roughnessmap_fragment:tl,roughnessmap_pars_fragment:el,shadowmap_pars_fragment:Al,shadowmap_pars_vertex:nl,shadowmap_vertex:il,shadowmask_pars_fragment:rl,skinbase_vertex:sl,skinning_pars_vertex:al,skinning_vertex:ol,skinnormal_vertex:ll,specularmap_fragment:cl,specularmap_pars_fragment:ul,tonemapping_fragment:hl,tonemapping_pars_fragment:dl,transmission_fragment:fl,transmission_pars_fragment:pl,uv_pars_fragment:ml,uv_pars_vertex:gl,uv_vertex:_l,worldpos_vertex:vl,background_vert:`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,background_frag:`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,backgroundCube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,backgroundCube_frag:`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,cube_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cube_frag:`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,depth_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,depth_frag:`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,distanceRGBA_vert:`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,distanceRGBA_frag:`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,equirect_vert:`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,equirect_frag:`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,linedashed_vert:`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,linedashed_frag:`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,meshbasic_vert:`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,meshbasic_frag:`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshlambert_vert:`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshlambert_frag:`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshmatcap_vert:`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,meshmatcap_frag:`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshnormal_vert:`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,meshnormal_frag:`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,meshphong_vert:`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshphong_frag:`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshphysical_vert:`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,meshphysical_frag:`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,meshtoon_vert:`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,meshtoon_frag:`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,points_vert:`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,points_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,shadow_vert:`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,shadow_frag:`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,sprite_vert:`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,sprite_frag:`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`},st={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new $t(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new $t(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},We={basic:{uniforms:Me([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Me([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Me([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Me([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Me([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Me([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Me([st.points,st.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Me([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Me([st.common,st.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Me([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Me([st.sprite,st.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Me([st.common,st.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Me([st.lights,st.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};We.physical={uniforms:Me([We.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new $t(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new $t},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new $t},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const zn={r:0,b:0,g:0},mA=new je,xl=new ue;function Ml(n,t,e,A,i,r,s){const a=new Gt(0);let l=r===!0?0:1,o,c,u=null,d=0,f=null;function m(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function _(E){let S=!1;const R=m(E);R===null?h(a,l):R&&R.isColor&&(h(R,1),S=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?A.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&A.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(E,S){const R=m(S);R&&(R.isCubeTexture||R.mapping===306)?(c===void 0&&(c=new Ge(new An(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:NA(We.backgroundCube.uniforms),vertexShader:We.backgroundCube.vertexShader,fragmentShader:We.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,P,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),mA.copy(S.backgroundRotation),mA.x*=-1,mA.y*=-1,mA.z*=-1,R.isCubeTexture&&R.isRenderTargetTexture===!1&&(mA.y*=-1,mA.z*=-1),c.material.uniforms.envMap.value=R,c.material.uniforms.flipEnvMap.value=R.isCubeTexture&&R.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(xl.makeRotationFromEuler(mA)),c.material.toneMapped=Vt.getTransfer(R.colorSpace)!==jt,(u!==R||d!==R.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=R,d=R.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):R&&R.isTexture&&(o===void 0&&(o=new Ge(new On(2,2),new ke({name:"BackgroundMaterial",uniforms:NA(We.background.uniforms),vertexShader:We.background.vertexShader,fragmentShader:We.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=R,o.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,o.material.toneMapped=Vt.getTransfer(R.colorSpace)!==jt,R.matrixAutoUpdate===!0&&R.updateMatrix(),o.material.uniforms.uvTransform.value.copy(R.matrix),(u!==R||d!==R.version||f!==n.toneMapping)&&(o.material.needsUpdate=!0,u=R,d=R.version,f=n.toneMapping),o.layers.enableAll(),E.unshift(o,o.geometry,o.material,0,0,null))}function h(E,S){E.getRGB(zn,cr(n)),A.buffers.color.setClear(zn.r,zn.g,zn.b,S,s)}function T(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),l=S,h(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,h(a,l)},render:_,addToRenderList:p,dispose:T}}function Sl(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),A={},i=d(null);let r=i,s=!1;function a(x,D,z,G,X){let Y=!1;const q=u(G,z,D);r!==q&&(r=q,o(r.object)),Y=f(x,G,z,X),Y&&m(x,G,z,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,S(x,D,z,G),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function o(x){return n.bindVertexArray(x)}function c(x){return n.deleteVertexArray(x)}function u(x,D,z){const G=z.wireframe===!0;let X=A[x.id];X===void 0&&(X={},A[x.id]=X);let Y=X[D.id];Y===void 0&&(Y={},X[D.id]=Y);let q=Y[G];return q===void 0&&(q=d(l()),Y[G]=q),q}function d(x){const D=[],z=[],G=[];for(let X=0;X<e;X++)D[X]=0,z[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:G,object:x,attributes:{},index:null}}function f(x,D,z,G){const X=r.attributes,Y=D.attributes;let q=0;const J=z.getAttributes();for(const H in J)if(J[H].location>=0){const ht=X[H];let nt=Y[H];if(nt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(nt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(nt=x.instanceColor)),ht===void 0||ht.attribute!==nt||nt&&ht.data!==nt.data)return!0;q++}return r.attributesNum!==q||r.index!==G}function m(x,D,z,G){const X={},Y=D.attributes;let q=0;const J=z.getAttributes();for(const H in J)if(J[H].location>=0){let ht=Y[H];ht===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ht=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ht=x.instanceColor));const nt={};nt.attribute=ht,ht&&ht.data&&(nt.data=ht.data),X[H]=nt,q++}r.attributes=X,r.attributesNum=q,r.index=G}function _(){const x=r.newAttributes;for(let D=0,z=x.length;D<z;D++)x[D]=0}function p(x){h(x,0)}function h(x,D){const z=r.newAttributes,G=r.enabledAttributes,X=r.attributeDivisors;z[x]=1,G[x]===0&&(n.enableVertexAttribArray(x),G[x]=1),X[x]!==D&&(n.vertexAttribDivisor(x,D),X[x]=D)}function T(){const x=r.newAttributes,D=r.enabledAttributes;for(let z=0,G=D.length;z<G;z++)D[z]!==x[z]&&(n.disableVertexAttribArray(z),D[z]=0)}function E(x,D,z,G,X,Y,q){q===!0?n.vertexAttribIPointer(x,D,z,X,Y):n.vertexAttribPointer(x,D,z,G,X,Y)}function S(x,D,z,G){_();const X=G.attributes,Y=z.getAttributes(),q=D.defaultAttributeValues;for(const J in Y){const H=Y[J];if(H.location>=0){let rt=X[J];if(rt===void 0&&(J==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),J==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor)),rt!==void 0){const ht=rt.normalized,nt=rt.itemSize,Pt=t.get(rt);if(Pt===void 0)continue;const kt=Pt.buffer,Xt=Pt.type,Ot=Pt.bytesPerElement,W=Xt===n.INT||Xt===n.UNSIGNED_INT||rt.gpuType===1013;if(rt.isInterleavedBufferAttribute){const j=rt.data,ut=j.stride,Et=rt.offset;if(j.isInstancedInterleavedBuffer){for(let gt=0;gt<H.locationSize;gt++)h(H.location+gt,j.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let gt=0;gt<H.locationSize;gt++)p(H.location+gt);n.bindBuffer(n.ARRAY_BUFFER,kt);for(let gt=0;gt<H.locationSize;gt++)E(H.location+gt,nt/H.locationSize,Xt,ht,ut*Ot,(Et+nt/H.locationSize*gt)*Ot,W)}else{if(rt.isInstancedBufferAttribute){for(let j=0;j<H.locationSize;j++)h(H.location+j,rt.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let j=0;j<H.locationSize;j++)p(H.location+j);n.bindBuffer(n.ARRAY_BUFFER,kt);for(let j=0;j<H.locationSize;j++)E(H.location+j,nt/H.locationSize,Xt,ht,nt*Ot,nt/H.locationSize*j*Ot,W)}}else if(q!==void 0){const ht=q[J];if(ht!==void 0)switch(ht.length){case 2:n.vertexAttrib2fv(H.location,ht);break;case 3:n.vertexAttrib3fv(H.location,ht);break;case 4:n.vertexAttrib4fv(H.location,ht);break;default:n.vertexAttrib1fv(H.location,ht)}}}}T()}function R(){N();for(const x in A){const D=A[x];for(const z in D){const G=D[z];for(const X in G)c(G[X].object),delete G[X];delete D[z]}delete A[x]}}function b(x){if(A[x.id]===void 0)return;const D=A[x.id];for(const z in D){const G=D[z];for(const X in G)c(G[X].object),delete G[X];delete D[z]}delete A[x.id]}function P(x){for(const D in A){const z=A[D];if(z[x.id]===void 0)continue;const G=z[x.id];for(const X in G)c(G[X].object),delete G[X];delete z[x.id]}}function N(){M(),s=!0,r!==i&&(r=i,o(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:N,resetDefaultState:M,dispose:R,releaseStatesOfGeometry:b,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:p,disableUnusedAttributes:T}}function yl(n,t,e){let A;function i(o){A=o}function r(o,c){n.drawArrays(A,o,c),e.update(c,A,1)}function s(o,c,u){u!==0&&(n.drawArraysInstanced(A,o,c,u),e.update(c,A,u))}function a(o,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(A,o,0,c,0,u);let f=0;for(let m=0;m<u;m++)f+=c[m];e.update(f,A,1)}function l(o,c,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<o.length;m++)s(o[m],c[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(A,o,0,c,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=c[_]*d[_];e.update(m,A,1)}}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function El(n,t,e,A){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(P){return!(P!==1023&&A.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const N=P===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==1009&&A.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==1015&&!N)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=e.precision!==void 0?e.precision:"highp";const c=l(o);c!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",c,"instead."),o=c);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),T=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),R=m>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:o,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:T,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:R,maxSamples:b}}function wl(n){const t=this;let e=null,A=0,i=!1,r=!1;const s=new fA,a=new Ut,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||A!==0||i;return i=d,A=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,h=n.get(u);if(!i||m===null||m.length===0||r&&!p)r?c(null):o();else{const T=r?0:A,E=T*4;let S=h.clippingState||null;l.value=S,S=c(m,d,E,f);for(let R=0;R!==E;++R)S[R]=e[R];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=T}};function o(){l.value!==e&&(l.value=e,l.needsUpdate=A>0),t.numPlanes=A,t.numIntersection=0}function c(u,d,f,m){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=l.value,m!==!0||p===null){const h=f+_*4,T=d.matrixWorldInverse;a.getNormalMatrix(T),(p===null||p.length<h)&&(p=new Float32Array(h));for(let E=0,S=f;E!==_;++E,S+=4)s.copy(u[E]).applyMatrix4(T,a),s.normal.toArray(p,S),p[S+3]=s.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Tl(n){let t=new WeakMap;function e(s,a){return a===303?s.mapping=301:a===304&&(s.mapping=302),s}function A(s){if(s&&s.isTexture){const a=s.mapping;if(a===303||a===304)if(t.has(s)){const l=t.get(s).texture;return e(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const o=new ra(l.height);return o.fromEquirectangularTexture(n,s),t.set(s,o),s.addEventListener("dispose",i),e(o.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:A,dispose:r}}const zA=4,Cr=[.125,.215,.35,.446,.526,.582],gA=20,Ti=new Tr,Pr=new Gt;let bi=null,Ri=0,Ci=0,Pi=!1;const _A=(1+Math.sqrt(5))/2,HA=1/_A,Dr=[new U(-_A,HA,0),new U(_A,HA,0),new U(-HA,0,_A),new U(HA,0,_A),new U(0,_A,-HA),new U(0,_A,HA),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],bl=new U;class Lr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,A=.1,i=100,r={}){const{size:s=256,position:a=bl}=r;bi=this._renderer.getRenderTarget(),Ri=this._renderer.getActiveCubeFace(),Ci=this._renderer.getActiveMipmapLevel(),Pi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,A,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ur(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(bi,Ri,Ci),this._renderer.xr.enabled=Pi,t.scissorTest=!1,Hn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),bi=this._renderer.getRenderTarget(),Ri=this._renderer.getActiveCubeFace(),Ci=this._renderer.getActiveMipmapLevel(),Pi=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const A=e||this._allocateTargets();return this._textureToCubeUV(t,A),this._applyPMREM(A),this._cleanup(A),A}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,A={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:SA,depthBuffer:!1},i=Ir(t,e,A);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ir(t,e,A);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Rl(r)),this._blurMaterial=Cl(r,t,e)}return i}_compileMaterial(t){const e=new Ge(this._lodPlanes[0],t);this._renderer.compile(e,Ti)}_sceneToCubeUV(t,e,A,i,r){const l=new Ve(90,1,e,A),o=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Pr),u.toneMapping=0,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const _=new ir({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),p=new Ge(new An,_);let h=!1;const T=t.background;T?T.isColor&&(_.color.copy(T),t.background=null,h=!0):(_.color.copy(Pr),h=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(l.up.set(0,o[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+c[E],r.y,r.z)):S===1?(l.up.set(0,0,o[E]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+c[E],r.z)):(l.up.set(0,o[E],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+c[E]));const R=this._cubeSize;Hn(i,S*R,E>2?R:0,R,R),u.setRenderTarget(i),h&&u.render(p,l),u.render(t,l)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=T}_textureToCubeUV(t,e){const A=this._renderer,i=t.mapping===301||t.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ur());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Hn(e,0,0,3*l,2*l),A.setRenderTarget(e),A.render(s,Ti)}_applyPMREM(t){const e=this._renderer,A=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Dr[(i-r-1)%Dr.length];this._blur(t,r-1,r,s,a)}e.autoClear=A}_blur(t,e,A,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,A,i,"latitudinal",r),this._halfBlur(s,t,A,A,i,"longitudinal",r)}_halfBlur(t,e,A,i,r,s,a){const l=this._renderer,o=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Ge(this._lodPlanes[i],o),d=o.uniforms,f=this._sizeLods[A]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*gA-1),_=r/m,p=isFinite(r)?1+Math.floor(c*_):gA;p>gA&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gA}`);const h=[];let T=0;for(let P=0;P<gA;++P){const N=P/_,M=Math.exp(-N*N/2);h.push(M),P===0?T+=M:P<p&&(T+=2*M)}for(let P=0;P<h.length;P++)h[P]=h[P]/T;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=m,d.mipInt.value=E-A;const S=this._sizeLods[i],R=3*S*(i>E-zA?i-E+zA:0),b=4*(this._cubeSize-S);Hn(e,R,b,3*S,2*S),l.setRenderTarget(e),l.render(u,Ti)}}function Rl(n){const t=[],e=[],A=[];let i=n;const r=n-zA+1+Cr.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);let l=1/a;s>n-zA?l=Cr[s-n+zA-1]:s===0&&(l=0),A.push(l);const o=1/(a-2),c=-o,u=1+o,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,m=6,_=3,p=2,h=1,T=new Float32Array(_*m*f),E=new Float32Array(p*m*f),S=new Float32Array(h*m*f);for(let b=0;b<f;b++){const P=b%3*2/3-1,N=b>2?0:-1,M=[P,N,0,P+2/3,N,0,P+2/3,N+1,0,P,N,0,P+2/3,N+1,0,P,N+1,0];T.set(M,_*m*b),E.set(d,p*m*b);const x=[b,b,b,b,b,b];S.set(x,h*m*b)}const R=new Ce;R.setAttribute("position",new fe(T,_)),R.setAttribute("uv",new fe(E,p)),R.setAttribute("faceIndex",new fe(S,h)),t.push(R),i>zA&&i--}return{lodPlanes:t,sizeLods:e,sigmas:A}}function Ir(n,t,e){const A=new cA(n,t,e);return A.texture.mapping=306,A.texture.name="PMREM.cubeUv",A.scissorTest=!0,A}function Hn(n,t,e,A,i){n.viewport.set(t,e,A,i),n.scissor.set(t,e,A,i)}function Cl(n,t,e){const A=new Float32Array(gA),i=new U(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:gA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:A},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Di(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Ur(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Di(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Fr(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Di(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Di(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function Pl(n){let t=new WeakMap,e=null;function A(a){if(a&&a.isTexture){const l=a.mapping,o=l===303||l===304,c=l===301||l===302;if(o||c){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Lr(n)),u=o?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return o&&f&&f.height>0||c&&f&&i(f)?(e===null&&(e=new Lr(n)),u=o?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let l=0;const o=6;for(let c=0;c<o;c++)a[c]!==void 0&&l++;return l===o}function r(a){const l=a.target;l.removeEventListener("dispose",r);const o=t.get(l);o!==void 0&&(t.delete(l),o.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:A,dispose:s}}function Dl(n){const t={};function e(A){if(t[A]!==void 0)return t[A];let i;switch(A){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(A)}return t[A]=i,i}return{has:function(A){return e(A)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(A){const i=e(A);return i===null&&jA("THREE.WebGLRenderer: "+A+" extension not supported."),i}}}function Ll(n,t,e,A){const i={},r=new WeakMap;function s(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",s),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),A.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,e.memory.geometries++),d}function l(u){const d=u.attributes;for(const f in d)t.update(d[f],n.ARRAY_BUFFER)}function o(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const T=f.array;_=f.version;for(let E=0,S=T.length;E<S;E+=3){const R=T[E+0],b=T[E+1],P=T[E+2];d.push(R,b,b,P,P,R)}}else if(m!==void 0){const T=m.array;_=m.version;for(let E=0,S=T.length/3-1;E<S;E+=3){const R=E+0,b=E+1,P=E+2;d.push(R,b,b,P,P,R)}}else return;const p=new(Vi(d)?sr:rr)(d,1);p.version=_;const h=r.get(u);h&&t.remove(h),r.set(u,p)}function c(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&o(u)}else o(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:c}}function Il(n,t,e){let A;function i(d){A=d}let r,s;function a(d){r=d.type,s=d.bytesPerElement}function l(d,f){n.drawElements(A,f,r,d*s),e.update(f,A,1)}function o(d,f,m){m!==0&&(n.drawElementsInstanced(A,f,r,d*s,m),e.update(f,A,m))}function c(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(A,f,0,r,d,0,m);let p=0;for(let h=0;h<m;h++)p+=f[h];e.update(p,A,1)}function u(d,f,m,_){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)o(d[h]/s,f[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(A,f,0,r,d,0,_,0,m);let h=0;for(let T=0;T<m;T++)h+=f[T]*_[T];e.update(h,A,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=o,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Ul(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function A(r,s,a){switch(e.calls++,s){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:A}}function Fl(n,t,e){const A=new WeakMap,i=new ce;function r(s,a,l){const o=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0;let d=A.get(a);if(d===void 0||d.count!==u){let M=function(){P.dispose(),A.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],T=a.morphAttributes.color||[];let E=0;f===!0&&(E=1),m===!0&&(E=2),_===!0&&(E=3);let S=a.attributes.position.count*E,R=1;S>t.maxTextureSize&&(R=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const b=new Float32Array(S*R*4*u),P=new Yi(b,S,R,u);P.type=1015,P.needsUpdate=!0;const N=E*4;for(let x=0;x<u;x++){const D=p[x],z=h[x],G=T[x],X=S*R*4*x;for(let Y=0;Y<D.count;Y++){const q=Y*N;f===!0&&(i.fromBufferAttribute(D,Y),b[X+q+0]=i.x,b[X+q+1]=i.y,b[X+q+2]=i.z,b[X+q+3]=0),m===!0&&(i.fromBufferAttribute(z,Y),b[X+q+4]=i.x,b[X+q+5]=i.y,b[X+q+6]=i.z,b[X+q+7]=0),_===!0&&(i.fromBufferAttribute(G,Y),b[X+q+8]=i.x,b[X+q+9]=i.y,b[X+q+10]=i.z,b[X+q+11]=G.itemSize===4?i.w:1)}}d={count:u,texture:P,size:new $t(S,R)},A.set(a,d),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,e);else{let f=0;for(let _=0;_<o.length;_++)f+=o[_];const m=a.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",o)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function Nl(n,t,e,A){let i=new WeakMap;function r(l){const o=A.render.frame,c=l.geometry,u=t.get(l,c);if(i.get(u)!==o&&(t.update(u),i.set(u,o)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==o&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),i.set(l,o))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==o&&(d.update(),i.set(d,o))}return u}function s(){i=new WeakMap}function a(l){const o=l.target;o.removeEventListener("dispose",a),e.remove(o.instanceMatrix),o.instanceColor!==null&&e.remove(o.instanceColor)}return{update:r,dispose:s}}const Nr=new we,Br=new Er(1,1),Or=new Yi,zr=new ks,Hr=new fr,Gr=[],kr=[],Vr=new Float32Array(16),Wr=new Float32Array(9),Xr=new Float32Array(4);function GA(n,t,e){const A=n[0];if(A<=0||A>0)return n;const i=t*e;let r=Gr[i];if(r===void 0&&(r=new Float32Array(i),Gr[i]=r),t!==0){A.toArray(r,0);for(let s=1,a=0;s!==t;++s)a+=e,n[s].toArray(r,a)}return r}function pe(n,t){if(n.length!==t.length)return!1;for(let e=0,A=n.length;e<A;e++)if(n[e]!==t[e])return!1;return!0}function me(n,t){for(let e=0,A=t.length;e<A;e++)n[e]=t[e]}function Gn(n,t){let e=kr[t];e===void 0&&(e=new Int32Array(t),kr[t]=e);for(let A=0;A!==t;++A)e[A]=n.allocateTextureUnit();return e}function Bl(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Ol(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;n.uniform2fv(this.addr,t),me(e,t)}}function zl(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;n.uniform3fv(this.addr,t),me(e,t)}}function Hl(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;n.uniform4fv(this.addr,t),me(e,t)}}function Gl(n,t){const e=this.cache,A=t.elements;if(A===void 0){if(pe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,A))return;Xr.set(A),n.uniformMatrix2fv(this.addr,!1,Xr),me(e,A)}}function kl(n,t){const e=this.cache,A=t.elements;if(A===void 0){if(pe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,A))return;Wr.set(A),n.uniformMatrix3fv(this.addr,!1,Wr),me(e,A)}}function Vl(n,t){const e=this.cache,A=t.elements;if(A===void 0){if(pe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,A))return;Vr.set(A),n.uniformMatrix4fv(this.addr,!1,Vr),me(e,A)}}function Wl(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function Xl(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;n.uniform2iv(this.addr,t),me(e,t)}}function ql(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;n.uniform3iv(this.addr,t),me(e,t)}}function Yl(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;n.uniform4iv(this.addr,t),me(e,t)}}function $l(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function jl(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;n.uniform2uiv(this.addr,t),me(e,t)}}function Kl(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;n.uniform3uiv(this.addr,t),me(e,t)}}function Zl(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;n.uniform4uiv(this.addr,t),me(e,t)}}function Ql(n,t,e){const A=this.cache,i=e.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i);let r;this.type===n.SAMPLER_2D_SHADOW?(Br.compareFunction=515,r=Br):r=Nr,e.setTexture2D(t||r,i)}function Jl(n,t,e){const A=this.cache,i=e.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),e.setTexture3D(t||zr,i)}function tc(n,t,e){const A=this.cache,i=e.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),e.setTextureCube(t||Hr,i)}function ec(n,t,e){const A=this.cache,i=e.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),e.setTexture2DArray(t||Or,i)}function Ac(n){switch(n){case 5126:return Bl;case 35664:return Ol;case 35665:return zl;case 35666:return Hl;case 35674:return Gl;case 35675:return kl;case 35676:return Vl;case 5124:case 35670:return Wl;case 35667:case 35671:return Xl;case 35668:case 35672:return ql;case 35669:case 35673:return Yl;case 5125:return $l;case 36294:return jl;case 36295:return Kl;case 36296:return Zl;case 35678:case 36198:case 36298:case 36306:case 35682:return Ql;case 35679:case 36299:case 36307:return Jl;case 35680:case 36300:case 36308:case 36293:return tc;case 36289:case 36303:case 36311:case 36292:return ec}}function nc(n,t){n.uniform1fv(this.addr,t)}function ic(n,t){const e=GA(t,this.size,2);n.uniform2fv(this.addr,e)}function rc(n,t){const e=GA(t,this.size,3);n.uniform3fv(this.addr,e)}function sc(n,t){const e=GA(t,this.size,4);n.uniform4fv(this.addr,e)}function ac(n,t){const e=GA(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function oc(n,t){const e=GA(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function lc(n,t){const e=GA(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function cc(n,t){n.uniform1iv(this.addr,t)}function uc(n,t){n.uniform2iv(this.addr,t)}function hc(n,t){n.uniform3iv(this.addr,t)}function dc(n,t){n.uniform4iv(this.addr,t)}function fc(n,t){n.uniform1uiv(this.addr,t)}function pc(n,t){n.uniform2uiv(this.addr,t)}function mc(n,t){n.uniform3uiv(this.addr,t)}function gc(n,t){n.uniform4uiv(this.addr,t)}function _c(n,t,e){const A=this.cache,i=t.length,r=Gn(e,i);pe(A,r)||(n.uniform1iv(this.addr,r),me(A,r));for(let s=0;s!==i;++s)e.setTexture2D(t[s]||Nr,r[s])}function vc(n,t,e){const A=this.cache,i=t.length,r=Gn(e,i);pe(A,r)||(n.uniform1iv(this.addr,r),me(A,r));for(let s=0;s!==i;++s)e.setTexture3D(t[s]||zr,r[s])}function xc(n,t,e){const A=this.cache,i=t.length,r=Gn(e,i);pe(A,r)||(n.uniform1iv(this.addr,r),me(A,r));for(let s=0;s!==i;++s)e.setTextureCube(t[s]||Hr,r[s])}function Mc(n,t,e){const A=this.cache,i=t.length,r=Gn(e,i);pe(A,r)||(n.uniform1iv(this.addr,r),me(A,r));for(let s=0;s!==i;++s)e.setTexture2DArray(t[s]||Or,r[s])}function Sc(n){switch(n){case 5126:return nc;case 35664:return ic;case 35665:return rc;case 35666:return sc;case 35674:return ac;case 35675:return oc;case 35676:return lc;case 5124:case 35670:return cc;case 35667:case 35671:return uc;case 35668:case 35672:return hc;case 35669:case 35673:return dc;case 5125:return fc;case 36294:return pc;case 36295:return mc;case 36296:return gc;case 35678:case 36198:case 36298:case 36306:case 35682:return _c;case 35679:case 36299:case 36307:return vc;case 35680:case 36300:case 36308:case 36293:return xc;case 36289:case 36303:case 36311:case 36292:return Mc}}class yc{constructor(t,e,A){this.id=t,this.addr=A,this.cache=[],this.type=e.type,this.setValue=Ac(e.type)}}class Ec{constructor(t,e,A){this.id=t,this.addr=A,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=Sc(e.type)}}class wc{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,A){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(t,e[a.id],A)}}}const Li=/(\w+)(\])?(\[|\.)?/g;function qr(n,t){n.seq.push(t),n.map[t.id]=t}function Tc(n,t,e){const A=n.name,i=A.length;for(Li.lastIndex=0;;){const r=Li.exec(A),s=Li.lastIndex;let a=r[1];const l=r[2]==="]",o=r[3];if(l&&(a=a|0),o===void 0||o==="["&&s+2===i){qr(e,o===void 0?new yc(a,n,t):new Ec(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new wc(a),qr(e,u)),e=u}}}class kn{constructor(t,e){this.seq=[],this.map={};const A=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<A;++i){const r=t.getActiveUniform(e,i),s=t.getUniformLocation(e,r.name);Tc(r,s,this)}}setValue(t,e,A,i){const r=this.map[e];r!==void 0&&r.setValue(t,A,i)}setOptional(t,e,A){const i=e[A];i!==void 0&&this.setValue(t,A,i)}static upload(t,e,A,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],l=A[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const A=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&A.push(s)}return A}}function Yr(n,t,e){const A=n.createShader(t);return n.shaderSource(A,e),n.compileShader(A),A}const bc=37297;let Rc=0;function Cc(n,t){const e=n.split(`
`),A=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=i;s<r;s++){const a=s+1;A.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return A.join(`
`)}const $r=new Ut;function Pc(n){Vt._getMatrix($r,Vt.workingColorSpace,n);const t=`mat3( ${$r.elements.map(e=>e.toFixed(4))} )`;switch(Vt.getTransfer(n)){case dn:return[t,"LinearTransferOETF"];case jt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function jr(n,t,e){const A=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(A&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Cc(n.getShaderSource(t),a)}else return r}function Dc(n,t){const e=Pc(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Lc(n,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Vn=new U;function Ic(){Vt.getLuminanceCoefficients(Vn);const n=Vn.x.toFixed(4),t=Vn.y.toFixed(4),e=Vn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Uc(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sn).join(`
`)}function Fc(n){const t=[];for(const e in n){const A=n[e];A!==!1&&t.push("#define "+e+" "+A)}return t.join(`
`)}function Nc(n,t){const e={},A=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let i=0;i<A;i++){const r=n.getActiveAttrib(t,i),s=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[s]={type:r.type,location:n.getAttribLocation(t,s),locationSize:a}}return e}function sn(n){return n!==""}function Kr(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Zr(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Bc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ii(n){return n.replace(Bc,zc)}const Oc=new Map;function zc(n,t){let e=Nt[t];if(e===void 0){const A=Oc.get(t);if(A!==void 0)e=Nt[A],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,A);else throw new Error("Can not resolve #include <"+t+">")}return Ii(e)}const Hc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Qr(n){return n.replace(Hc,Gc)}function Gc(n,t,e,A){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=A.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Jr(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function kc(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function Vc(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Wc(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function Xc(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function qc(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,A=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:A,maxMip:e}}function Yc(n,t,e,A){const i=n.getContext(),r=e.defines;let s=e.vertexShader,a=e.fragmentShader;const l=kc(e),o=Vc(e),c=Wc(e),u=Xc(e),d=qc(e),f=Uc(e),m=Fc(r),_=i.createProgram();let p,h,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(sn).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(sn).join(`
`),h.length>0&&(h+=`
`)):(p=[Jr(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sn).join(`
`),h=[Jr(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+o:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Nt.tonemapping_pars_fragment:"",e.toneMapping!==0?Lc("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Dc("linearToOutputTexel",e.outputColorSpace),Ic(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(sn).join(`
`)),s=Ii(s),s=Kr(s,e),s=Zr(s,e),a=Ii(a),a=Kr(a,e),a=Zr(a,e),s=Qr(s),a=Qr(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===Gi?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Gi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=T+p+s,S=T+h+a,R=Yr(i,i.VERTEX_SHADER,E),b=Yr(i,i.FRAGMENT_SHADER,S);i.attachShader(_,R),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function P(D){if(n.debug.checkShaderErrors){const z=i.getProgramInfoLog(_)||"",G=i.getShaderInfoLog(R)||"",X=i.getShaderInfoLog(b)||"",Y=z.trim(),q=G.trim(),J=X.trim();let H=!0,rt=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,_,R,b);else{const ht=jr(i,R,"vertex"),nt=jr(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Y+`
`+ht+`
`+nt)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(q===""||J==="")&&(rt=!1);rt&&(D.diagnostics={runnable:H,programLog:Y,vertexShader:{log:q,prefix:p},fragmentShader:{log:J,prefix:h}})}i.deleteShader(R),i.deleteShader(b),N=new kn(i,_),M=Nc(i,_)}let N;this.getUniforms=function(){return N===void 0&&P(this),N};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,bc)),x},this.destroy=function(){A.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Rc++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=R,this.fragmentShader=b,this}let $c=0;class jc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,A=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(A),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const A of e)A.usedTimes--,A.usedTimes===0&&this.shaderCache.delete(A.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let A=e.get(t);return A===void 0&&(A=new Set,e.set(t,A)),A}_getShaderStage(t){const e=this.shaderCache;let A=e.get(t);return A===void 0&&(A=new Kc(t),e.set(t,A)),A}}class Kc{constructor(t){this.id=$c++,this.code=t,this.usedTimes=0}}function Zc(n,t,e,A,i,r,s){const a=new Ki,l=new jc,o=new Set,c=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return o.add(M),M===0?"uv":`uv${M}`}function p(M,x,D,z,G){const X=z.fog,Y=G.geometry,q=M.isMeshStandardMaterial?z.environment:null,J=(M.isMeshStandardMaterial?e:t).get(M.envMap||q),H=J&&J.mapping===306?J.image.height:null,rt=m[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ht=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=ht!==void 0?ht.length:0;let Pt=0;Y.morphAttributes.position!==void 0&&(Pt=1),Y.morphAttributes.normal!==void 0&&(Pt=2),Y.morphAttributes.color!==void 0&&(Pt=3);let kt,Xt,Ot,W;if(rt){const Yt=We[rt];kt=Yt.vertexShader,Xt=Yt.fragmentShader}else kt=M.vertexShader,Xt=M.fragmentShader,l.update(M),Ot=l.getVertexShaderID(M),W=l.getFragmentShaderID(M);const j=n.getRenderTarget(),ut=n.state.buffers.depth.getReversed(),Et=G.isInstancedMesh===!0,gt=G.isBatchedMesh===!0,Bt=!!M.map,oe=!!M.matcap,w=!!J,Kt=!!M.aoMap,Dt=!!M.lightMap,wt=!!M.bumpMap,pt=!!M.normalMap,Jt=!!M.displacementMap,ct=!!M.emissiveMap,Lt=!!M.metalnessMap,ne=!!M.roughnessMap,qt=M.anisotropy>0,y=M.clearcoat>0,g=M.dispersion>0,F=M.iridescence>0,V=M.sheen>0,K=M.transmission>0,k=qt&&!!M.anisotropyMap,St=y&&!!M.clearcoatMap,At=y&&!!M.clearcoatNormalMap,vt=y&&!!M.clearcoatRoughnessMap,xt=F&&!!M.iridescenceMap,tt=F&&!!M.iridescenceThicknessMap,lt=V&&!!M.sheenColorMap,Rt=V&&!!M.sheenRoughnessMap,Mt=!!M.specularMap,at=!!M.specularColorMap,Ft=!!M.specularIntensityMap,C=K&&!!M.transmissionMap,et=K&&!!M.thicknessMap,it=!!M.gradientMap,ft=!!M.alphaMap,Z=M.alphaTest>0,$=!!M.alphaHash,_t=!!M.extensions;let It=0;M.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(It=n.toneMapping);const te={shaderID:rt,shaderType:M.type,shaderName:M.name,vertexShader:kt,fragmentShader:Xt,defines:M.defines,customVertexShaderID:Ot,customFragmentShaderID:W,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:gt,batchingColor:gt&&G._colorsTexture!==null,instancing:Et,instancingColor:Et&&G.instanceColor!==null,instancingMorph:Et&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:SA,alphaToCoverage:!!M.alphaToCoverage,map:Bt,matcap:oe,envMap:w,envMapMode:w&&J.mapping,envMapCubeUVHeight:H,aoMap:Kt,lightMap:Dt,bumpMap:wt,normalMap:pt,displacementMap:d&&Jt,emissiveMap:ct,normalMapObjectSpace:pt&&M.normalMapType===1,normalMapTangentSpace:pt&&M.normalMapType===0,metalnessMap:Lt,roughnessMap:ne,anisotropy:qt,anisotropyMap:k,clearcoat:y,clearcoatMap:St,clearcoatNormalMap:At,clearcoatRoughnessMap:vt,dispersion:g,iridescence:F,iridescenceMap:xt,iridescenceThicknessMap:tt,sheen:V,sheenColorMap:lt,sheenRoughnessMap:Rt,specularMap:Mt,specularColorMap:at,specularIntensityMap:Ft,transmission:K,transmissionMap:C,thicknessMap:et,gradientMap:it,opaque:M.transparent===!1&&M.blending===1&&M.alphaToCoverage===!1,alphaMap:ft,alphaTest:Z,alphaHash:$,combine:M.combine,mapUv:Bt&&_(M.map.channel),aoMapUv:Kt&&_(M.aoMap.channel),lightMapUv:Dt&&_(M.lightMap.channel),bumpMapUv:wt&&_(M.bumpMap.channel),normalMapUv:pt&&_(M.normalMap.channel),displacementMapUv:Jt&&_(M.displacementMap.channel),emissiveMapUv:ct&&_(M.emissiveMap.channel),metalnessMapUv:Lt&&_(M.metalnessMap.channel),roughnessMapUv:ne&&_(M.roughnessMap.channel),anisotropyMapUv:k&&_(M.anisotropyMap.channel),clearcoatMapUv:St&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:At&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&_(M.sheenRoughnessMap.channel),specularMapUv:Mt&&_(M.specularMap.channel),specularColorMapUv:at&&_(M.specularColorMap.channel),specularIntensityMapUv:Ft&&_(M.specularIntensityMap.channel),transmissionMapUv:C&&_(M.transmissionMap.channel),thicknessMapUv:et&&_(M.thicknessMap.channel),alphaMapUv:ft&&_(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(pt||qt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Y.attributes.uv&&(Bt||ft),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ut,skinning:G.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Pt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:It,decodeVideoTexture:Bt&&M.map.isVideoTexture===!0&&Vt.getTransfer(M.map.colorSpace)===jt,decodeVideoTextureEmissive:ct&&M.emissiveMap.isVideoTexture===!0&&Vt.getTransfer(M.emissiveMap.colorSpace)===jt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===2,flipSided:M.side===1,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_t&&M.extensions.clipCullDistance===!0&&A.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&M.extensions.multiDraw===!0||gt)&&A.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:A.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return te.vertexUv1s=o.has(1),te.vertexUv2s=o.has(2),te.vertexUv3s=o.has(3),o.clear(),te}function h(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)x.push(D),x.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(T(x,M),E(x,M),x.push(n.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function T(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function E(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const x=m[M.type];let D;if(x){const z=We[x];D=ea.clone(z.uniforms)}else D=M.uniforms;return D}function R(M,x){let D;for(let z=0,G=c.length;z<G;z++){const X=c[z];if(X.cacheKey===x){D=X,++D.usedTimes;break}}return D===void 0&&(D=new Yc(n,x,M,r),c.push(D)),D}function b(M){if(--M.usedTimes===0){const x=c.indexOf(M);c[x]=c[c.length-1],c.pop(),M.destroy()}}function P(M){l.remove(M)}function N(){l.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:S,acquireProgram:R,releaseProgram:b,releaseShaderCache:P,programs:c,dispose:N}}function Qc(){let n=new WeakMap;function t(s){return n.has(s)}function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function A(s){n.delete(s)}function i(s,a,l){n.get(s)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:A,update:i,dispose:r}}function Jc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ts(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function es(){const n=[];let t=0;const e=[],A=[],i=[];function r(){t=0,e.length=0,A.length=0,i.length=0}function s(u,d,f,m,_,p){let h=n[t];return h===void 0?(h={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:p},n[t]=h):(h.id=u.id,h.object=u,h.geometry=d,h.material=f,h.groupOrder=m,h.renderOrder=u.renderOrder,h.z=_,h.group=p),t++,h}function a(u,d,f,m,_,p){const h=s(u,d,f,m,_,p);f.transmission>0?A.push(h):f.transparent===!0?i.push(h):e.push(h)}function l(u,d,f,m,_,p){const h=s(u,d,f,m,_,p);f.transmission>0?A.unshift(h):f.transparent===!0?i.unshift(h):e.unshift(h)}function o(u,d){e.length>1&&e.sort(u||Jc),A.length>1&&A.sort(d||ts),i.length>1&&i.sort(d||ts)}function c(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:A,transparent:i,init:r,push:a,unshift:l,finish:c,sort:o}}function tu(){let n=new WeakMap;function t(A,i){const r=n.get(A);let s;return r===void 0?(s=new es,n.set(A,[s])):i>=r.length?(s=new es,r.push(s)):s=r[i],s}function e(){n=new WeakMap}return{get:t,dispose:e}}function eu(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Gt};break;case"SpotLight":e={position:new U,direction:new U,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function Au(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new $t,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let nu=0;function iu(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ru(n){const t=new eu,e=Au(),A={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)A.probe.push(new U);const i=new U,r=new ue,s=new ue;function a(o){let c=0,u=0,d=0;for(let M=0;M<9;M++)A.probe[M].set(0,0,0);let f=0,m=0,_=0,p=0,h=0,T=0,E=0,S=0,R=0,b=0,P=0;o.sort(iu);for(let M=0,x=o.length;M<x;M++){const D=o[M],z=D.color,G=D.intensity,X=D.distance,Y=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)c+=z.r*G,u+=z.g*G,d+=z.b*G;else if(D.isLightProbe){for(let q=0;q<9;q++)A.probe[q].addScaledVector(D.sh.coefficients[q],G);P++}else if(D.isDirectionalLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,H=e.get(D);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,A.directionalShadow[f]=H,A.directionalShadowMap[f]=Y,A.directionalShadowMatrix[f]=D.shadow.matrix,T++}A.directional[f]=q,f++}else if(D.isSpotLight){const q=t.get(D);q.position.setFromMatrixPosition(D.matrixWorld),q.color.copy(z).multiplyScalar(G),q.distance=X,q.coneCos=Math.cos(D.angle),q.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),q.decay=D.decay,A.spot[_]=q;const J=D.shadow;if(D.map&&(A.spotLightMap[R]=D.map,R++,J.updateMatrices(D),D.castShadow&&b++),A.spotLightMatrix[_]=J.matrix,D.castShadow){const H=e.get(D);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,A.spotShadow[_]=H,A.spotShadowMap[_]=Y,S++}_++}else if(D.isRectAreaLight){const q=t.get(D);q.color.copy(z).multiplyScalar(G),q.halfWidth.set(D.width*.5,0,0),q.halfHeight.set(0,D.height*.5,0),A.rectArea[p]=q,p++}else if(D.isPointLight){const q=t.get(D);if(q.color.copy(D.color).multiplyScalar(D.intensity),q.distance=D.distance,q.decay=D.decay,D.castShadow){const J=D.shadow,H=e.get(D);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,A.pointShadow[m]=H,A.pointShadowMap[m]=Y,A.pointShadowMatrix[m]=D.shadow.matrix,E++}A.point[m]=q,m++}else if(D.isHemisphereLight){const q=t.get(D);q.skyColor.copy(D.color).multiplyScalar(G),q.groundColor.copy(D.groundColor).multiplyScalar(G),A.hemi[h]=q,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(A.rectAreaLTC1=st.LTC_FLOAT_1,A.rectAreaLTC2=st.LTC_FLOAT_2):(A.rectAreaLTC1=st.LTC_HALF_1,A.rectAreaLTC2=st.LTC_HALF_2)),A.ambient[0]=c,A.ambient[1]=u,A.ambient[2]=d;const N=A.hash;(N.directionalLength!==f||N.pointLength!==m||N.spotLength!==_||N.rectAreaLength!==p||N.hemiLength!==h||N.numDirectionalShadows!==T||N.numPointShadows!==E||N.numSpotShadows!==S||N.numSpotMaps!==R||N.numLightProbes!==P)&&(A.directional.length=f,A.spot.length=_,A.rectArea.length=p,A.point.length=m,A.hemi.length=h,A.directionalShadow.length=T,A.directionalShadowMap.length=T,A.pointShadow.length=E,A.pointShadowMap.length=E,A.spotShadow.length=S,A.spotShadowMap.length=S,A.directionalShadowMatrix.length=T,A.pointShadowMatrix.length=E,A.spotLightMatrix.length=S+R-b,A.spotLightMap.length=R,A.numSpotLightShadowsWithMaps=b,A.numLightProbes=P,N.directionalLength=f,N.pointLength=m,N.spotLength=_,N.rectAreaLength=p,N.hemiLength=h,N.numDirectionalShadows=T,N.numPointShadows=E,N.numSpotShadows=S,N.numSpotMaps=R,N.numLightProbes=P,A.version=nu++)}function l(o,c){let u=0,d=0,f=0,m=0,_=0;const p=c.matrixWorldInverse;for(let h=0,T=o.length;h<T;h++){const E=o[h];if(E.isDirectionalLight){const S=A.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),u++}else if(E.isSpotLight){const S=A.spot[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),f++}else if(E.isRectAreaLight){const S=A.rectArea[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),s.identity(),r.copy(E.matrixWorld),r.premultiply(p),s.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),m++}else if(E.isPointLight){const S=A.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){const S=A.hemi[_];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:A}}function As(n){const t=new ru(n),e=[],A=[];function i(c){o.camera=c,e.length=0,A.length=0}function r(c){e.push(c)}function s(c){A.push(c)}function a(){t.setup(e)}function l(c){t.setupView(e,c)}const o={lightsArray:e,shadowsArray:A,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:o,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:s}}function su(n){let t=new WeakMap;function e(i,r=0){const s=t.get(i);let a;return s===void 0?(a=new As(n),t.set(i,[a])):r>=s.length?(a=new As(n),s.push(a)):a=s[r],a}function A(){t=new WeakMap}return{get:e,dispose:A}}const au=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ou=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function lu(n,t,e){let A=new pr;const i=new $t,r=new $t,s=new ce,a=new pa({depthPacking:3201}),l=new ma,o={},c=e.maxTextureSize,u={0:1,1:0,2:2},d=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new $t},radius:{value:4}},vertexShader:au,fragmentShader:ou}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ce;m.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ge(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let h=this.type;this.render=function(b,P,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||b.length===0)return;const M=n.getRenderTarget(),x=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending(0),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=h!==3&&this.type===3,X=h===3&&this.type!==3;for(let Y=0,q=b.length;Y<q;Y++){const J=b[Y],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const rt=H.getFrameExtents();if(i.multiply(rt),r.copy(H.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/rt.x),i.x=r.x*rt.x,H.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/rt.y),i.y=r.y*rt.y,H.mapSize.y=r.y)),H.map===null||G===!0||X===!0){const nt=this.type!==3?{minFilter:1003,magFilter:1003}:{};H.map!==null&&H.map.dispose(),H.map=new cA(i.x,i.y,nt),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ht=H.getViewportCount();for(let nt=0;nt<ht;nt++){const Pt=H.getViewport(nt);s.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),z.viewport(s),H.updateMatrices(J,nt),A=H.getFrustum(),S(P,N,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===3&&T(H,N),H.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(M,x,D)};function T(b,P){const N=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,f.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new cA(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(P,null,N,d,_,null),f.uniforms.shadow_pass.value=b.mapPass.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(P,null,N,f,_,null)}function E(b,P,N,M){let x=null;const D=N.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)x=D;else if(x=N.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const z=x.uuid,G=P.uuid;let X=o[z];X===void 0&&(X={},o[z]=X);let Y=X[G];Y===void 0&&(Y=x.clone(),X[G]=Y,P.addEventListener("dispose",R)),x=Y}if(x.visible=P.visible,x.wireframe=P.wireframe,M===3?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:u[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=n.properties.get(x);z.light=N}return x}function S(b,P,N,M,x){if(b.visible===!1)return;if(b.layers.test(P.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===3)&&(!b.frustumCulled||A.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,b.matrixWorld);const G=t.update(b),X=b.material;if(Array.isArray(X)){const Y=G.groups;for(let q=0,J=Y.length;q<J;q++){const H=Y[q],rt=X[H.materialIndex];if(rt&&rt.visible){const ht=E(b,rt,M,x);b.onBeforeShadow(n,b,P,N,G,ht,H),n.renderBufferDirect(N,null,G,ht,b,H),b.onAfterShadow(n,b,P,N,G,ht,H)}}}else if(X.visible){const Y=E(b,X,M,x);b.onBeforeShadow(n,b,P,N,G,Y,null),n.renderBufferDirect(N,null,G,Y,b,null),b.onAfterShadow(n,b,P,N,G,Y,null)}}const z=b.children;for(let G=0,X=z.length;G<X;G++)S(z[G],P,N,M,x)}function R(b){b.target.removeEventListener("dispose",R);for(const N in o){const M=o[N],x=b.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const cu={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function uu(n,t){function e(){let C=!1;const et=new ce;let it=null;const ft=new ce(0,0,0,0);return{setMask:function(Z){it!==Z&&!C&&(n.colorMask(Z,Z,Z,Z),it=Z)},setLocked:function(Z){C=Z},setClear:function(Z,$,_t,It,te){te===!0&&(Z*=It,$*=It,_t*=It),et.set(Z,$,_t,It),ft.equals(et)===!1&&(n.clearColor(Z,$,_t,It),ft.copy(et))},reset:function(){C=!1,it=null,ft.set(-1,0,0,0)}}}function A(){let C=!1,et=!1,it=null,ft=null,Z=null;return{setReversed:function($){if(et!==$){const _t=t.get("EXT_clip_control");$?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),et=$;const It=Z;Z=null,this.setClear(It)}},getReversed:function(){return et},setTest:function($){$?j(n.DEPTH_TEST):ut(n.DEPTH_TEST)},setMask:function($){it!==$&&!C&&(n.depthMask($),it=$)},setFunc:function($){if(et&&($=cu[$]),ft!==$){switch($){case 0:n.depthFunc(n.NEVER);break;case 1:n.depthFunc(n.ALWAYS);break;case 2:n.depthFunc(n.LESS);break;case 3:n.depthFunc(n.LEQUAL);break;case 4:n.depthFunc(n.EQUAL);break;case 5:n.depthFunc(n.GEQUAL);break;case 6:n.depthFunc(n.GREATER);break;case 7:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=$}},setLocked:function($){C=$},setClear:function($){Z!==$&&(et&&($=1-$),n.clearDepth($),Z=$)},reset:function(){C=!1,it=null,ft=null,Z=null,et=!1}}}function i(){let C=!1,et=null,it=null,ft=null,Z=null,$=null,_t=null,It=null,te=null;return{setTest:function(Yt){C||(Yt?j(n.STENCIL_TEST):ut(n.STENCIL_TEST))},setMask:function(Yt){et!==Yt&&!C&&(n.stencilMask(Yt),et=Yt)},setFunc:function(Yt,eA,Xe){(it!==Yt||ft!==eA||Z!==Xe)&&(n.stencilFunc(Yt,eA,Xe),it=Yt,ft=eA,Z=Xe)},setOp:function(Yt,eA,Xe){($!==Yt||_t!==eA||It!==Xe)&&(n.stencilOp(Yt,eA,Xe),$=Yt,_t=eA,It=Xe)},setLocked:function(Yt){C=Yt},setClear:function(Yt){te!==Yt&&(n.clearStencil(Yt),te=Yt)},reset:function(){C=!1,et=null,it=null,ft=null,Z=null,$=null,_t=null,It=null,te=null}}}const r=new e,s=new A,a=new i,l=new WeakMap,o=new WeakMap;let c={},u={},d=new WeakMap,f=[],m=null,_=!1,p=null,h=null,T=null,E=null,S=null,R=null,b=null,P=new Gt(0,0,0),N=0,M=!1,x=null,D=null,z=null,G=null,X=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let q=!1,J=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),q=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),q=J>=2);let rt=null,ht={};const nt=n.getParameter(n.SCISSOR_BOX),Pt=n.getParameter(n.VIEWPORT),kt=new ce().fromArray(nt),Xt=new ce().fromArray(Pt);function Ot(C,et,it,ft){const Z=new Uint8Array(4),$=n.createTexture();n.bindTexture(C,$),n.texParameteri(C,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(C,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _t=0;_t<it;_t++)C===n.TEXTURE_3D||C===n.TEXTURE_2D_ARRAY?n.texImage3D(et,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,Z):n.texImage2D(et+_t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Z);return $}const W={};W[n.TEXTURE_2D]=Ot(n.TEXTURE_2D,n.TEXTURE_2D,1),W[n.TEXTURE_CUBE_MAP]=Ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),W[n.TEXTURE_2D_ARRAY]=Ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),W[n.TEXTURE_3D]=Ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),j(n.DEPTH_TEST),s.setFunc(3),wt(!1),pt(1),j(n.CULL_FACE),Kt(0);function j(C){c[C]!==!0&&(n.enable(C),c[C]=!0)}function ut(C){c[C]!==!1&&(n.disable(C),c[C]=!1)}function Et(C,et){return u[C]!==et?(n.bindFramebuffer(C,et),u[C]=et,C===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=et),C===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=et),!0):!1}function gt(C,et){let it=f,ft=!1;if(C){it=d.get(et),it===void 0&&(it=[],d.set(et,it));const Z=C.textures;if(it.length!==Z.length||it[0]!==n.COLOR_ATTACHMENT0){for(let $=0,_t=Z.length;$<_t;$++)it[$]=n.COLOR_ATTACHMENT0+$;it.length=Z.length,ft=!0}}else it[0]!==n.BACK&&(it[0]=n.BACK,ft=!0);ft&&n.drawBuffers(it)}function Bt(C){return m!==C?(n.useProgram(C),m=C,!0):!1}const oe={100:n.FUNC_ADD,101:n.FUNC_SUBTRACT,102:n.FUNC_REVERSE_SUBTRACT};oe[103]=n.MIN,oe[104]=n.MAX;const w={200:n.ZERO,201:n.ONE,202:n.SRC_COLOR,204:n.SRC_ALPHA,210:n.SRC_ALPHA_SATURATE,208:n.DST_COLOR,206:n.DST_ALPHA,203:n.ONE_MINUS_SRC_COLOR,205:n.ONE_MINUS_SRC_ALPHA,209:n.ONE_MINUS_DST_COLOR,207:n.ONE_MINUS_DST_ALPHA,211:n.CONSTANT_COLOR,212:n.ONE_MINUS_CONSTANT_COLOR,213:n.CONSTANT_ALPHA,214:n.ONE_MINUS_CONSTANT_ALPHA};function Kt(C,et,it,ft,Z,$,_t,It,te,Yt){if(C===0){_===!0&&(ut(n.BLEND),_=!1);return}if(_===!1&&(j(n.BLEND),_=!0),C!==5){if(C!==p||Yt!==M){if((h!==100||S!==100)&&(n.blendEquation(n.FUNC_ADD),h=100,S=100),Yt)switch(C){case 1:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.ONE,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}else switch(C){case 1:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case 3:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",C);break}T=null,E=null,R=null,b=null,P.set(0,0,0),N=0,p=C,M=Yt}return}Z=Z||et,$=$||it,_t=_t||ft,(et!==h||Z!==S)&&(n.blendEquationSeparate(oe[et],oe[Z]),h=et,S=Z),(it!==T||ft!==E||$!==R||_t!==b)&&(n.blendFuncSeparate(w[it],w[ft],w[$],w[_t]),T=it,E=ft,R=$,b=_t),(It.equals(P)===!1||te!==N)&&(n.blendColor(It.r,It.g,It.b,te),P.copy(It),N=te),p=C,M=!1}function Dt(C,et){C.side===2?ut(n.CULL_FACE):j(n.CULL_FACE);let it=C.side===1;et&&(it=!it),wt(it),C.blending===1&&C.transparent===!1?Kt(0):Kt(C.blending,C.blendEquation,C.blendSrc,C.blendDst,C.blendEquationAlpha,C.blendSrcAlpha,C.blendDstAlpha,C.blendColor,C.blendAlpha,C.premultipliedAlpha),s.setFunc(C.depthFunc),s.setTest(C.depthTest),s.setMask(C.depthWrite),r.setMask(C.colorWrite);const ft=C.stencilWrite;a.setTest(ft),ft&&(a.setMask(C.stencilWriteMask),a.setFunc(C.stencilFunc,C.stencilRef,C.stencilFuncMask),a.setOp(C.stencilFail,C.stencilZFail,C.stencilZPass)),ct(C.polygonOffset,C.polygonOffsetFactor,C.polygonOffsetUnits),C.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):ut(n.SAMPLE_ALPHA_TO_COVERAGE)}function wt(C){x!==C&&(C?n.frontFace(n.CW):n.frontFace(n.CCW),x=C)}function pt(C){C!==0?(j(n.CULL_FACE),C!==D&&(C===1?n.cullFace(n.BACK):C===2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ut(n.CULL_FACE),D=C}function Jt(C){C!==z&&(q&&n.lineWidth(C),z=C)}function ct(C,et,it){C?(j(n.POLYGON_OFFSET_FILL),(G!==et||X!==it)&&(n.polygonOffset(et,it),G=et,X=it)):ut(n.POLYGON_OFFSET_FILL)}function Lt(C){C?j(n.SCISSOR_TEST):ut(n.SCISSOR_TEST)}function ne(C){C===void 0&&(C=n.TEXTURE0+Y-1),rt!==C&&(n.activeTexture(C),rt=C)}function qt(C,et,it){it===void 0&&(rt===null?it=n.TEXTURE0+Y-1:it=rt);let ft=ht[it];ft===void 0&&(ft={type:void 0,texture:void 0},ht[it]=ft),(ft.type!==C||ft.texture!==et)&&(rt!==it&&(n.activeTexture(it),rt=it),n.bindTexture(C,et||W[C]),ft.type=C,ft.texture=et)}function y(){const C=ht[rt];C!==void 0&&C.type!==void 0&&(n.bindTexture(C.type,null),C.type=void 0,C.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function V(){try{n.texSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function K(){try{n.texSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function St(){try{n.compressedTexSubImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function At(){try{n.texStorage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function vt(){try{n.texStorage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function xt(){try{n.texImage2D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function tt(){try{n.texImage3D(...arguments)}catch(C){console.error("THREE.WebGLState:",C)}}function lt(C){kt.equals(C)===!1&&(n.scissor(C.x,C.y,C.z,C.w),kt.copy(C))}function Rt(C){Xt.equals(C)===!1&&(n.viewport(C.x,C.y,C.z,C.w),Xt.copy(C))}function Mt(C,et){let it=o.get(et);it===void 0&&(it=new WeakMap,o.set(et,it));let ft=it.get(C);ft===void 0&&(ft=n.getUniformBlockIndex(et,C.name),it.set(C,ft))}function at(C,et){const ft=o.get(et).get(C);l.get(et)!==ft&&(n.uniformBlockBinding(et,ft,C.__bindingPointIndex),l.set(et,ft))}function Ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},rt=null,ht={},u={},d=new WeakMap,f=[],m=null,_=!1,p=null,h=null,T=null,E=null,S=null,R=null,b=null,P=new Gt(0,0,0),N=0,M=!1,x=null,D=null,z=null,G=null,X=null,kt.set(0,0,n.canvas.width,n.canvas.height),Xt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:j,disable:ut,bindFramebuffer:Et,drawBuffers:gt,useProgram:Bt,setBlending:Kt,setMaterial:Dt,setFlipSided:wt,setCullFace:pt,setLineWidth:Jt,setPolygonOffset:ct,setScissorTest:Lt,activeTexture:ne,bindTexture:qt,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:F,texImage2D:xt,texImage3D:tt,updateUBOMapping:Mt,uniformBlockBinding:at,texStorage2D:At,texStorage3D:vt,texSubImage2D:V,texSubImage3D:K,compressedTexSubImage2D:k,compressedTexSubImage3D:St,scissor:lt,viewport:Rt,reset:Ft}}function hu(n,t,e,A,i,r,s){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new $t,c=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(y,g){return f?new OffscreenCanvas(y,g):fn("canvas")}function _(y,g,F){let V=1;const K=qt(y);if((K.width>F||K.height>F)&&(V=F/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const k=Math.floor(V*K.width),St=Math.floor(V*K.height);u===void 0&&(u=m(k,St));const At=g?m(k,St):u;return At.width=k,At.height=St,At.getContext("2d").drawImage(y,0,0,k,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+k+"x"+St+")."),At}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),y;return y}function p(y){return y.generateMipmaps}function h(y){n.generateMipmap(y)}function T(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(y,g,F,V,K=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let k=g;if(g===n.RED&&(F===n.FLOAT&&(k=n.R32F),F===n.HALF_FLOAT&&(k=n.R16F),F===n.UNSIGNED_BYTE&&(k=n.R8)),g===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(k=n.R8UI),F===n.UNSIGNED_SHORT&&(k=n.R16UI),F===n.UNSIGNED_INT&&(k=n.R32UI),F===n.BYTE&&(k=n.R8I),F===n.SHORT&&(k=n.R16I),F===n.INT&&(k=n.R32I)),g===n.RG&&(F===n.FLOAT&&(k=n.RG32F),F===n.HALF_FLOAT&&(k=n.RG16F),F===n.UNSIGNED_BYTE&&(k=n.RG8)),g===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(k=n.RG8UI),F===n.UNSIGNED_SHORT&&(k=n.RG16UI),F===n.UNSIGNED_INT&&(k=n.RG32UI),F===n.BYTE&&(k=n.RG8I),F===n.SHORT&&(k=n.RG16I),F===n.INT&&(k=n.RG32I)),g===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(k=n.RGB8UI),F===n.UNSIGNED_SHORT&&(k=n.RGB16UI),F===n.UNSIGNED_INT&&(k=n.RGB32UI),F===n.BYTE&&(k=n.RGB8I),F===n.SHORT&&(k=n.RGB16I),F===n.INT&&(k=n.RGB32I)),g===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),F===n.UNSIGNED_INT&&(k=n.RGBA32UI),F===n.BYTE&&(k=n.RGBA8I),F===n.SHORT&&(k=n.RGBA16I),F===n.INT&&(k=n.RGBA32I)),g===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(k=n.R11F_G11F_B10F)),g===n.RGBA){const St=K?dn:Vt.getTransfer(V);F===n.FLOAT&&(k=n.RGBA32F),F===n.HALF_FLOAT&&(k=n.RGBA16F),F===n.UNSIGNED_BYTE&&(k=St===jt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function S(y,g){let F;return y?g===null||g===1014||g===1020?F=n.DEPTH24_STENCIL8:g===1015?F=n.DEPTH32F_STENCIL8:g===1012&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===1014||g===1020?F=n.DEPTH_COMPONENT24:g===1015?F=n.DEPTH_COMPONENT32F:g===1012&&(F=n.DEPTH_COMPONENT16),F}function R(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==1003&&y.minFilter!==1006?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function b(y){const g=y.target;g.removeEventListener("dispose",b),N(g),g.isVideoTexture&&c.delete(g)}function P(y){const g=y.target;g.removeEventListener("dispose",P),x(g)}function N(y){const g=A.get(y);if(g.__webglInit===void 0)return;const F=y.source,V=d.get(F);if(V){const K=V[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(y),Object.keys(V).length===0&&d.delete(F)}A.remove(y)}function M(y){const g=A.get(y);n.deleteTexture(g.__webglTexture);const F=y.source,V=d.get(F);delete V[g.__cacheKey],s.memory.textures--}function x(y){const g=A.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),A.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let K=0;K<g.__webglFramebuffer[V].length;K++)n.deleteFramebuffer(g.__webglFramebuffer[V][K]);else n.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)n.deleteFramebuffer(g.__webglFramebuffer[V]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=y.textures;for(let V=0,K=F.length;V<K;V++){const k=A.get(F[V]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),s.memory.textures--),A.remove(F[V])}A.remove(y)}let D=0;function z(){D=0}function G(){const y=D;return y>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+i.maxTextures),D+=1,y}function X(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function Y(y,g){const F=A.get(y);if(y.isVideoTexture&&Lt(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&F.__version!==y.version){const V=y.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{W(F,y,g);return}}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+g)}function q(y,g){const F=A.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){W(F,y,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+g)}function J(y,g){const F=A.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){W(F,y,g);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+g)}function H(y,g){const F=A.get(y);if(y.version>0&&F.__version!==y.version){j(F,y,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+g)}const rt={1e3:n.REPEAT,1001:n.CLAMP_TO_EDGE,1002:n.MIRRORED_REPEAT},ht={1003:n.NEAREST,1004:n.NEAREST_MIPMAP_NEAREST,1005:n.NEAREST_MIPMAP_LINEAR,1006:n.LINEAR,1007:n.LINEAR_MIPMAP_NEAREST,1008:n.LINEAR_MIPMAP_LINEAR},nt={512:n.NEVER,519:n.ALWAYS,513:n.LESS,515:n.LEQUAL,514:n.EQUAL,518:n.GEQUAL,516:n.GREATER,517:n.NOTEQUAL};function Pt(y,g){if(g.type===1015&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===1006||g.magFilter===1007||g.magFilter===1005||g.magFilter===1008||g.minFilter===1006||g.minFilter===1007||g.minFilter===1005||g.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,rt[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,rt[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,rt[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,ht[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,ht[g.minFilter]),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,nt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===1003||g.minFilter!==1005&&g.minFilter!==1008||g.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||A.get(g).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),A.get(g).__currentAnisotropy=g.anisotropy}}}function kt(y,g){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",b));const V=g.source;let K=d.get(V);K===void 0&&(K={},d.set(V,K));const k=X(g);if(k!==y.__cacheKey){K[k]===void 0&&(K[k]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,F=!0),K[k].usedTimes++;const St=K[y.__cacheKey];St!==void 0&&(K[y.__cacheKey].usedTimes--,St.usedTimes===0&&M(g)),y.__cacheKey=k,y.__webglTexture=K[k].texture}return F}function Xt(y,g,F){return Math.floor(Math.floor(y/F)/g)}function Ot(y,g,F,V){const k=y.updateRanges;if(k.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,F,V,g.data);else{k.sort((tt,lt)=>tt.start-lt.start);let St=0;for(let tt=1;tt<k.length;tt++){const lt=k[St],Rt=k[tt],Mt=lt.start+lt.count,at=Xt(Rt.start,g.width,4),Ft=Xt(lt.start,g.width,4);Rt.start<=Mt+1&&at===Ft&&Xt(Rt.start+Rt.count-1,g.width,4)===at?lt.count=Math.max(lt.count,Rt.start+Rt.count-lt.start):(++St,k[St]=Rt)}k.length=St+1;const At=n.getParameter(n.UNPACK_ROW_LENGTH),vt=n.getParameter(n.UNPACK_SKIP_PIXELS),xt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let tt=0,lt=k.length;tt<lt;tt++){const Rt=k[tt],Mt=Math.floor(Rt.start/4),at=Math.ceil(Rt.count/4),Ft=Mt%g.width,C=Math.floor(Mt/g.width),et=at,it=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ft),n.pixelStorei(n.UNPACK_SKIP_ROWS,C),e.texSubImage2D(n.TEXTURE_2D,0,Ft,C,et,it,F,V,g.data)}y.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,At),n.pixelStorei(n.UNPACK_SKIP_PIXELS,vt),n.pixelStorei(n.UNPACK_SKIP_ROWS,xt)}}function W(y,g,F){let V=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=n.TEXTURE_3D);const K=kt(y,g),k=g.source;e.bindTexture(V,y.__webglTexture,n.TEXTURE0+F);const St=A.get(k);if(k.version!==St.__version||K===!0){e.activeTexture(n.TEXTURE0+F);const At=Vt.getPrimaries(Vt.workingColorSpace),vt=g.colorSpace===""?null:Vt.getPrimaries(g.colorSpace),xt=g.colorSpace===""||At===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let tt=_(g.image,!1,i.maxTextureSize);tt=ne(g,tt);const lt=r.convert(g.format,g.colorSpace),Rt=r.convert(g.type);let Mt=E(g.internalFormat,lt,Rt,g.colorSpace,g.isVideoTexture);Pt(V,g);let at;const Ft=g.mipmaps,C=g.isVideoTexture!==!0,et=St.__version===void 0||K===!0,it=k.dataReady,ft=R(g,tt);if(g.isDepthTexture)Mt=S(g.format===1027,g.type),et&&(C?e.texStorage2D(n.TEXTURE_2D,1,Mt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,Mt,tt.width,tt.height,0,lt,Rt,null));else if(g.isDataTexture)if(Ft.length>0){C&&et&&e.texStorage2D(n.TEXTURE_2D,ft,Mt,Ft[0].width,Ft[0].height);for(let Z=0,$=Ft.length;Z<$;Z++)at=Ft[Z],C?it&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,at.width,at.height,lt,Rt,at.data):e.texImage2D(n.TEXTURE_2D,Z,Mt,at.width,at.height,0,lt,Rt,at.data);g.generateMipmaps=!1}else C?(et&&e.texStorage2D(n.TEXTURE_2D,ft,Mt,tt.width,tt.height),it&&Ot(g,tt,lt,Rt)):e.texImage2D(n.TEXTURE_2D,0,Mt,tt.width,tt.height,0,lt,Rt,tt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){C&&et&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Mt,Ft[0].width,Ft[0].height,tt.depth);for(let Z=0,$=Ft.length;Z<$;Z++)if(at=Ft[Z],g.format!==1023)if(lt!==null)if(C){if(it)if(g.layerUpdates.size>0){const _t=br(at.width,at.height,g.format,g.type);for(const It of g.layerUpdates){const te=at.data.subarray(It*_t/at.data.BYTES_PER_ELEMENT,(It+1)*_t/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,It,at.width,at.height,1,lt,te)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,at.width,at.height,tt.depth,lt,at.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Mt,at.width,at.height,tt.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else C?it&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,at.width,at.height,tt.depth,lt,Rt,at.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Z,Mt,at.width,at.height,tt.depth,0,lt,Rt,at.data)}else{C&&et&&e.texStorage2D(n.TEXTURE_2D,ft,Mt,Ft[0].width,Ft[0].height);for(let Z=0,$=Ft.length;Z<$;Z++)at=Ft[Z],g.format!==1023?lt!==null?C?it&&e.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,at.width,at.height,lt,at.data):e.compressedTexImage2D(n.TEXTURE_2D,Z,Mt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):C?it&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,at.width,at.height,lt,Rt,at.data):e.texImage2D(n.TEXTURE_2D,Z,Mt,at.width,at.height,0,lt,Rt,at.data)}else if(g.isDataArrayTexture)if(C){if(et&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Mt,tt.width,tt.height,tt.depth),it)if(g.layerUpdates.size>0){const Z=br(tt.width,tt.height,g.format,g.type);for(const $ of g.layerUpdates){const _t=tt.data.subarray($*Z/tt.data.BYTES_PER_ELEMENT,($+1)*Z/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,lt,Rt,_t)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,lt,Rt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Mt,tt.width,tt.height,tt.depth,0,lt,Rt,tt.data);else if(g.isData3DTexture)C?(et&&e.texStorage3D(n.TEXTURE_3D,ft,Mt,tt.width,tt.height,tt.depth),it&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,lt,Rt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,Mt,tt.width,tt.height,tt.depth,0,lt,Rt,tt.data);else if(g.isFramebufferTexture){if(et)if(C)e.texStorage2D(n.TEXTURE_2D,ft,Mt,tt.width,tt.height);else{let Z=tt.width,$=tt.height;for(let _t=0;_t<ft;_t++)e.texImage2D(n.TEXTURE_2D,_t,Mt,Z,$,0,lt,Rt,null),Z>>=1,$>>=1}}else if(Ft.length>0){if(C&&et){const Z=qt(Ft[0]);e.texStorage2D(n.TEXTURE_2D,ft,Mt,Z.width,Z.height)}for(let Z=0,$=Ft.length;Z<$;Z++)at=Ft[Z],C?it&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,lt,Rt,at):e.texImage2D(n.TEXTURE_2D,Z,Mt,lt,Rt,at);g.generateMipmaps=!1}else if(C){if(et){const Z=qt(tt);e.texStorage2D(n.TEXTURE_2D,ft,Mt,Z.width,Z.height)}it&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt,Rt,tt)}else e.texImage2D(n.TEXTURE_2D,0,Mt,lt,Rt,tt);p(g)&&h(V),St.__version=k.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function j(y,g,F){if(g.image.length!==6)return;const V=kt(y,g),K=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+F);const k=A.get(K);if(K.version!==k.__version||V===!0){e.activeTexture(n.TEXTURE0+F);const St=Vt.getPrimaries(Vt.workingColorSpace),At=g.colorSpace===""?null:Vt.getPrimaries(g.colorSpace),vt=g.colorSpace===""||St===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const xt=g.isCompressedTexture||g.image[0].isCompressedTexture,tt=g.image[0]&&g.image[0].isDataTexture,lt=[];for(let $=0;$<6;$++)!xt&&!tt?lt[$]=_(g.image[$],!0,i.maxCubemapSize):lt[$]=tt?g.image[$].image:g.image[$],lt[$]=ne(g,lt[$]);const Rt=lt[0],Mt=r.convert(g.format,g.colorSpace),at=r.convert(g.type),Ft=E(g.internalFormat,Mt,at,g.colorSpace),C=g.isVideoTexture!==!0,et=k.__version===void 0||V===!0,it=K.dataReady;let ft=R(g,Rt);Pt(n.TEXTURE_CUBE_MAP,g);let Z;if(xt){C&&et&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ft,Rt.width,Rt.height);for(let $=0;$<6;$++){Z=lt[$].mipmaps;for(let _t=0;_t<Z.length;_t++){const It=Z[_t];g.format!==1023?Mt!==null?C?it&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t,0,0,It.width,It.height,Mt,It.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t,Ft,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):C?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t,0,0,It.width,It.height,Mt,at,It.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t,Ft,It.width,It.height,0,Mt,at,It.data)}}}else{if(Z=g.mipmaps,C&&et){Z.length>0&&ft++;const $=qt(lt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ft,$.width,$.height)}for(let $=0;$<6;$++)if(tt){C?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,lt[$].width,lt[$].height,Mt,at,lt[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ft,lt[$].width,lt[$].height,0,Mt,at,lt[$].data);for(let _t=0;_t<Z.length;_t++){const te=Z[_t].image[$].image;C?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t+1,0,0,te.width,te.height,Mt,at,te.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t+1,Ft,te.width,te.height,0,Mt,at,te.data)}}else{C?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Mt,at,lt[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ft,Mt,at,lt[$]);for(let _t=0;_t<Z.length;_t++){const It=Z[_t];C?it&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t+1,0,0,Mt,at,It.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t+1,Ft,Mt,at,It.image[$])}}}p(g)&&h(n.TEXTURE_CUBE_MAP),k.__version=K.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ut(y,g,F,V,K,k){const St=r.convert(F.format,F.colorSpace),At=r.convert(F.type),vt=E(F.internalFormat,St,At,F.colorSpace),xt=A.get(g),tt=A.get(F);if(tt.__renderTarget=g,!xt.__hasExternalTextures){const lt=Math.max(1,g.width>>k),Rt=Math.max(1,g.height>>k);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,k,vt,lt,Rt,g.depth,0,St,At,null):e.texImage2D(K,k,vt,lt,Rt,0,St,At,null)}e.bindFramebuffer(n.FRAMEBUFFER,y),ct(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,K,tt.__webglTexture,0,Jt(g)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,K,tt.__webglTexture,k),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Et(y,g,F){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer){const V=g.depthTexture,K=V&&V.isDepthTexture?V.type:null,k=S(g.stencilBuffer,K),St=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=Jt(g);ct(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At,k,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,At,k,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,k,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,St,n.RENDERBUFFER,y)}else{const V=g.textures;for(let K=0;K<V.length;K++){const k=V[K],St=r.convert(k.format,k.colorSpace),At=r.convert(k.type),vt=E(k.internalFormat,St,At,k.colorSpace),xt=Jt(g);F&&ct(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,vt,g.width,g.height):ct(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,vt,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,vt,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function gt(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=A.get(g.depthTexture);V.__renderTarget=g,(!V.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y(g.depthTexture,0);const K=V.__webglTexture,k=Jt(g);if(g.depthTexture.format===1026)ct(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(g.depthTexture.format===1027)ct(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Bt(y){const g=A.get(y),F=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const V=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=V}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const V=y.texture.mipmaps;V&&V.length>0?gt(g.__webglFramebuffer[0],y):gt(g.__webglFramebuffer,y)}else if(F){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=n.createRenderbuffer(),Et(g.__webglDepthbuffer[V],y,!1);else{const K=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,k)}}else{const V=y.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Et(g.__webglDepthbuffer,y,!1);else{const K=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,k)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(y,g,F){const V=A.get(y);g!==void 0&&ut(V.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Bt(y)}function w(y){const g=y.texture,F=A.get(y),V=A.get(g);y.addEventListener("dispose",P);const K=y.textures,k=y.isWebGLCubeRenderTarget===!0,St=K.length>1;if(St||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=g.version,s.memory.textures++),k){F.__webglFramebuffer=[];for(let At=0;At<6;At++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[At]=[];for(let vt=0;vt<g.mipmaps.length;vt++)F.__webglFramebuffer[At][vt]=n.createFramebuffer()}else F.__webglFramebuffer[At]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let At=0;At<g.mipmaps.length;At++)F.__webglFramebuffer[At]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(St)for(let At=0,vt=K.length;At<vt;At++){const xt=A.get(K[At]);xt.__webglTexture===void 0&&(xt.__webglTexture=n.createTexture(),s.memory.textures++)}if(y.samples>0&&ct(y)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let At=0;At<K.length;At++){const vt=K[At];F.__webglColorRenderbuffer[At]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[At]);const xt=r.convert(vt.format,vt.colorSpace),tt=r.convert(vt.type),lt=E(vt.internalFormat,xt,tt,vt.colorSpace,y.isXRRenderTarget===!0),Rt=Jt(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,lt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,F.__webglColorRenderbuffer[At])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Et(F.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Pt(n.TEXTURE_CUBE_MAP,g);for(let At=0;At<6;At++)if(g.mipmaps&&g.mipmaps.length>0)for(let vt=0;vt<g.mipmaps.length;vt++)ut(F.__webglFramebuffer[At][vt],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+At,vt);else ut(F.__webglFramebuffer[At],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);p(g)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let At=0,vt=K.length;At<vt;At++){const xt=K[At],tt=A.get(xt);let lt=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(lt=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,tt.__webglTexture),Pt(lt,xt),ut(F.__webglFramebuffer,y,xt,n.COLOR_ATTACHMENT0+At,lt,0),p(xt)&&h(lt)}e.unbindTexture()}else{let At=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(At=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(At,V.__webglTexture),Pt(At,g),g.mipmaps&&g.mipmaps.length>0)for(let vt=0;vt<g.mipmaps.length;vt++)ut(F.__webglFramebuffer[vt],y,g,n.COLOR_ATTACHMENT0,At,vt);else ut(F.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,At,0);p(g)&&h(At),e.unbindTexture()}y.depthBuffer&&Bt(y)}function Kt(y){const g=y.textures;for(let F=0,V=g.length;F<V;F++){const K=g[F];if(p(K)){const k=T(y),St=A.get(K).__webglTexture;e.bindTexture(k,St),h(k),e.unbindTexture()}}}const Dt=[],wt=[];function pt(y){if(y.samples>0){if(ct(y)===!1){const g=y.textures,F=y.width,V=y.height;let K=n.COLOR_BUFFER_BIT;const k=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=A.get(y),At=g.length>1;if(At)for(let xt=0;xt<g.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);const vt=y.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let xt=0;xt<g.length;xt++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),At){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);const tt=A.get(g[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,F,V,0,0,F,V,K,n.NEAREST),l===!0&&(Dt.length=0,wt.length=0,Dt.push(n.COLOR_ATTACHMENT0+xt),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Dt.push(k),wt.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,wt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),At)for(let xt=0;xt<g.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);const tt=A.get(g[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&l){const g=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function Jt(y){return Math.min(i.maxSamples,y.samples)}function ct(y){const g=A.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Lt(y){const g=s.render.frame;c.get(y)!==g&&(c.set(y,g),y.update())}function ne(y,g){const F=y.colorSpace,V=y.format,K=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==SA&&F!==""&&(Vt.getTransfer(F)===jt?(V!==1023||K!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function qt(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(o.width=y.naturalWidth||y.width,o.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(o.width=y.displayWidth,o.height=y.displayHeight):(o.width=y.width,o.height=y.height),o}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=q,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=oe,this.setupRenderTarget=w,this.updateRenderTargetMipmap=Kt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=ut,this.useMultisampledRTT=ct}function du(n,t){function e(A,i=""){let r;const s=Vt.getTransfer(i);if(A===1009)return n.UNSIGNED_BYTE;if(A===1017)return n.UNSIGNED_SHORT_4_4_4_4;if(A===1018)return n.UNSIGNED_SHORT_5_5_5_1;if(A===35902)return n.UNSIGNED_INT_5_9_9_9_REV;if(A===35899)return n.UNSIGNED_INT_10F_11F_11F_REV;if(A===1010)return n.BYTE;if(A===1011)return n.SHORT;if(A===1012)return n.UNSIGNED_SHORT;if(A===1013)return n.INT;if(A===1014)return n.UNSIGNED_INT;if(A===1015)return n.FLOAT;if(A===1016)return n.HALF_FLOAT;if(A===1021)return n.ALPHA;if(A===1022)return n.RGB;if(A===1023)return n.RGBA;if(A===1026)return n.DEPTH_COMPONENT;if(A===1027)return n.DEPTH_STENCIL;if(A===1028)return n.RED;if(A===1029)return n.RED_INTEGER;if(A===1030)return n.RG;if(A===1031)return n.RG_INTEGER;if(A===1033)return n.RGBA_INTEGER;if(A===33776||A===33777||A===33778||A===33779)if(s===jt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(A===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(A===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(A===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(A===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(A===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(A===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(A===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(A===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(A===35840||A===35841||A===35842||A===35843)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(A===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(A===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(A===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(A===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(A===36196||A===37492||A===37496)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(A===36196||A===37492)return s===jt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(A===37496)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(A===37808||A===37809||A===37810||A===37811||A===37812||A===37813||A===37814||A===37815||A===37816||A===37817||A===37818||A===37819||A===37820||A===37821)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(A===37808)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(A===37809)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(A===37810)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(A===37811)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(A===37812)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(A===37813)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(A===37814)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(A===37815)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(A===37816)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(A===37817)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(A===37818)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(A===37819)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(A===37820)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(A===37821)return s===jt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(A===36492||A===36494||A===36495)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(A===36492)return s===jt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(A===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(A===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(A===36283||A===36284||A===36285||A===36286)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(A===36283)return r.COMPRESSED_RED_RGTC1_EXT;if(A===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(A===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(A===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return A===1020?n.UNSIGNED_INT_24_8:n[A]!==void 0?n[A]:null}return{convert:e}}const fu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,pu=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class mu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const A=new wr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=A}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,A=new ke({vertexShader:fu,fragmentShader:pu,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ge(new On(20,20),A)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class gu extends yA{constructor(t,e){super();const A=this;let i=null,r=1,s=null,a="local-floor",l=1,o=null,c=null,u=null,d=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",p=new mu,h={},T=e.getContextAttributes();let E=null,S=null;const R=[],b=[],P=new $t;let N=null;const M=new Ve;M.viewport=new ce;const x=new Ve;x.viewport=new ce;const D=[M,x],z=new ga;let G=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let j=R[W];return j===void 0&&(j=new Si,R[W]=j),j.getTargetRaySpace()},this.getControllerGrip=function(W){let j=R[W];return j===void 0&&(j=new Si,R[W]=j),j.getGripSpace()},this.getHand=function(W){let j=R[W];return j===void 0&&(j=new Si,R[W]=j),j.getHandSpace()};function Y(W){const j=b.indexOf(W.inputSource);if(j===-1)return;const ut=R[j];ut!==void 0&&(ut.update(W.inputSource,W.frame,o||s),ut.dispatchEvent({type:W.type,data:W.inputSource}))}function q(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",q),i.removeEventListener("inputsourceschange",J);for(let W=0;W<R.length;W++){const j=b[W];j!==null&&(b[W]=null,R[W].disconnect(j))}G=null,X=null,p.reset();for(const W in h)delete h[W];t.setRenderTarget(E),f=null,d=null,u=null,i=null,S=null,Ot.stop(),A.isPresenting=!1,t.setPixelRatio(N),t.setSize(P.width,P.height,!1),A.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){r=W,A.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,A.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||s},this.setReferenceSpace=function(W){o=W},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(W){if(i=W,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",q),i.addEventListener("inputsourceschange",J),T.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(P),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ut=null,Et=null,gt=null;T.depth&&(gt=T.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ut=T.stencil?1027:1026,Et=T.stencil?1020:1014);const Bt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Bt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new cA(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new Er(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ut),stencilBuffer:T.stencil,colorSpace:t.outputColorSpace,samples:T.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ut={antialias:T.antialias,alpha:!0,depth:T.depth,stencil:T.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,ut),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new cA(f.framebufferWidth,f.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:T.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),o=null,s=await i.requestReferenceSpace(a),Ot.setContext(i),Ot.start(),A.isPresenting=!0,A.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function J(W){for(let j=0;j<W.removed.length;j++){const ut=W.removed[j],Et=b.indexOf(ut);Et>=0&&(b[Et]=null,R[Et].disconnect(ut))}for(let j=0;j<W.added.length;j++){const ut=W.added[j];let Et=b.indexOf(ut);if(Et===-1){for(let Bt=0;Bt<R.length;Bt++)if(Bt>=b.length){b.push(ut),Et=Bt;break}else if(b[Bt]===null){b[Bt]=ut,Et=Bt;break}if(Et===-1)break}const gt=R[Et];gt&&gt.connect(ut)}}const H=new U,rt=new U;function ht(W,j,ut){H.setFromMatrixPosition(j.matrixWorld),rt.setFromMatrixPosition(ut.matrixWorld);const Et=H.distanceTo(rt),gt=j.projectionMatrix.elements,Bt=ut.projectionMatrix.elements,oe=gt[14]/(gt[10]-1),w=gt[14]/(gt[10]+1),Kt=(gt[9]+1)/gt[5],Dt=(gt[9]-1)/gt[5],wt=(gt[8]-1)/gt[0],pt=(Bt[8]+1)/Bt[0],Jt=oe*wt,ct=oe*pt,Lt=Et/(-wt+pt),ne=Lt*-wt;if(j.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(ne),W.translateZ(Lt),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),gt[10]===-1)W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const qt=oe+Lt,y=w+Lt,g=Jt-ne,F=ct+(Et-ne),V=Kt*w/y*qt,K=Dt*w/y*qt;W.projectionMatrix.makePerspective(g,F,V,K,qt,y),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function nt(W,j){j===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(j.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(i===null)return;let j=W.near,ut=W.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(ut=p.depthFar)),z.near=x.near=M.near=j,z.far=x.far=M.far=ut,(G!==z.near||X!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),G=z.near,X=z.far),z.layers.mask=W.layers.mask|6,M.layers.mask=z.layers.mask&3,x.layers.mask=z.layers.mask&5;const Et=W.parent,gt=z.cameras;nt(z,Et);for(let Bt=0;Bt<gt.length;Bt++)nt(gt[Bt],Et);gt.length===2?ht(z,M,x):z.projectionMatrix.copy(M.projectionMatrix),Pt(W,z,Et)};function Pt(W,j,ut){ut===null?W.matrix.copy(j.matrixWorld):(W.matrix.copy(ut.matrixWorld),W.matrix.invert(),W.matrix.multiply(j.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(j.projectionMatrix),W.projectionMatrixInverse.copy(j.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Qn*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(W){l=W,d!==null&&(d.fixedFoveation=W),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=W)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(W){return h[W]};let kt=null;function Xt(W,j){if(c=j.getViewerPose(o||s),m=j,c!==null){const ut=c.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Et=!1;ut.length!==z.cameras.length&&(z.cameras.length=0,Et=!0);for(let w=0;w<ut.length;w++){const Kt=ut[w];let Dt=null;if(f!==null)Dt=f.getViewport(Kt);else{const pt=u.getViewSubImage(d,Kt);Dt=pt.viewport,w===0&&(t.setRenderTargetTextures(S,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(S))}let wt=D[w];wt===void 0&&(wt=new Ve,wt.layers.enable(w),wt.viewport=new ce,D[w]=wt),wt.matrix.fromArray(Kt.transform.matrix),wt.matrix.decompose(wt.position,wt.quaternion,wt.scale),wt.projectionMatrix.fromArray(Kt.projectionMatrix),wt.projectionMatrixInverse.copy(wt.projectionMatrix).invert(),wt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),w===0&&(z.matrix.copy(wt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Et===!0&&z.cameras.push(wt)}const gt=i.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=A.getBinding();const w=u.getDepthInformation(ut[0]);w&&w.isValid&&w.texture&&p.init(w,i.renderState)}if(gt&&gt.includes("camera-access")&&_){t.state.unbindTexture(),u=A.getBinding();for(let w=0;w<ut.length;w++){const Kt=ut[w].camera;if(Kt){let Dt=h[Kt];Dt||(Dt=new wr,h[Kt]=Dt);const wt=u.getCameraImage(Kt);Dt.sourceTexture=wt}}}}for(let ut=0;ut<R.length;ut++){const Et=b[ut],gt=R[ut];Et!==null&&gt!==void 0&&gt.update(Et,j,o||s)}kt&&kt(W,j),j.detectedPlanes&&A.dispatchEvent({type:"planesdetected",data:j}),m=null}const Ot=new Rr;Ot.setAnimationLoop(Xt),this.setAnimationLoop=function(W){kt=W},this.dispose=function(){}}}const vA=new je,_u=new ue;function vu(n,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function A(p,h){h.color.getRGB(p.fogColor.value,cr(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,T,E,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),u(p,h)):h.isMeshPhongMaterial?(r(p,h),c(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&f(p,h,S)):h.isMeshMatcapMaterial?(r(p,h),m(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?l(p,h,T,E):h.isSpriteMaterial?o(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===1&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===1&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const T=t.get(h),E=T.envMap,S=T.envMapRotation;E&&(p.envMap.value=E,vA.copy(S),vA.x*=-1,vA.y*=-1,vA.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(vA.y*=-1,vA.z*=-1),p.envMapRotation.value.setFromMatrix4(_u.makeRotationFromEuler(vA)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function l(p,h,T,E){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*T,p.scale.value=E*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function o(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function f(p,h,T){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=T.texture,p.transmissionSamplerSize.value.set(T.width,T.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const T=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(T.matrixWorld),p.nearDistance.value=T.shadow.camera.near,p.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:A,refreshMaterialUniforms:i}}function xu(n,t,e,A){let i={},r={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(T,E){const S=E.program;A.uniformBlockBinding(T,S)}function o(T,E){let S=i[T.id];S===void 0&&(m(T),S=c(T),i[T.id]=S,T.addEventListener("dispose",p));const R=E.program;A.updateUBOMapping(T,R);const b=t.render.frame;r[T.id]!==b&&(d(T),r[T.id]=b)}function c(T){const E=u();T.__bindingPointIndex=E;const S=n.createBuffer(),R=T.__size,b=T.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,R,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function u(){for(let T=0;T<a;T++)if(s.indexOf(T)===-1)return s.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(T){const E=i[T.id],S=T.uniforms,R=T.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let b=0,P=S.length;b<P;b++){const N=Array.isArray(S[b])?S[b]:[S[b]];for(let M=0,x=N.length;M<x;M++){const D=N[M];if(f(D,b,M,R)===!0){const z=D.__offset,G=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let Y=0;Y<G.length;Y++){const q=G[Y],J=_(q);typeof q=="number"||typeof q=="boolean"?(D.__data[0]=q,n.bufferSubData(n.UNIFORM_BUFFER,z+X,D.__data)):q.isMatrix3?(D.__data[0]=q.elements[0],D.__data[1]=q.elements[1],D.__data[2]=q.elements[2],D.__data[3]=0,D.__data[4]=q.elements[3],D.__data[5]=q.elements[4],D.__data[6]=q.elements[5],D.__data[7]=0,D.__data[8]=q.elements[6],D.__data[9]=q.elements[7],D.__data[10]=q.elements[8],D.__data[11]=0):(q.toArray(D.__data,X),X+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(T,E,S,R){const b=T.value,P=E+"_"+S;if(R[P]===void 0)return typeof b=="number"||typeof b=="boolean"?R[P]=b:R[P]=b.clone(),!0;{const N=R[P];if(typeof b=="number"||typeof b=="boolean"){if(N!==b)return R[P]=b,!0}else if(N.equals(b)===!1)return N.copy(b),!0}return!1}function m(T){const E=T.uniforms;let S=0;const R=16;for(let P=0,N=E.length;P<N;P++){const M=Array.isArray(E[P])?E[P]:[E[P]];for(let x=0,D=M.length;x<D;x++){const z=M[x],G=Array.isArray(z.value)?z.value:[z.value];for(let X=0,Y=G.length;X<Y;X++){const q=G[X],J=_(q),H=S%R,rt=H%J.boundary,ht=H+rt;S+=rt,ht!==0&&R-ht<J.storage&&(S+=R-ht),z.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=J.storage}}}const b=S%R;return b>0&&(S+=R-b),T.__size=S,T.__cache={},this}function _(T){const E={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(E.boundary=4,E.storage=4):T.isVector2?(E.boundary=8,E.storage=8):T.isVector3||T.isColor?(E.boundary=16,E.storage=12):T.isVector4?(E.boundary=16,E.storage=16):T.isMatrix3?(E.boundary=48,E.storage=48):T.isMatrix4?(E.boundary=64,E.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),E}function p(T){const E=T.target;E.removeEventListener("dispose",p);const S=s.indexOf(E.__bindingPointIndex);s.splice(S,1),n.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function h(){for(const T in i)n.deleteBuffer(i[T]);s=[],i={},r={}}return{bind:l,update:o,dispose:h}}class Mu{constructor(t={}){const{canvas:e=Fs(),context:A=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:o=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(A!==null){if(typeof WebGLRenderingContext<"u"&&A instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=A.getContextAttributes().alpha}else f=s;const m=new Uint32Array(4),_=new Int32Array(4);let p=null,h=null;const T=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let R=!1;this._outputColorSpace=Le;let b=0,P=0,N=null,M=-1,x=null;const D=new ce,z=new ce;let G=null;const X=new Gt(0);let Y=0,q=e.width,J=e.height,H=1,rt=null,ht=null;const nt=new ce(0,0,q,J),Pt=new ce(0,0,q,J);let kt=!1;const Xt=new pr;let Ot=!1,W=!1;const j=new ue,ut=new U,Et=new ce,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function oe(){return N===null?H:1}let w=A;function Kt(v,L){return e.getContext(v,L)}try{const v={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:o,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r180"),e.addEventListener("webglcontextlost",it,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",Z,!1),w===null){const L="webgl2";if(w=Kt(L,v),w===null)throw Kt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Dt,wt,pt,Jt,ct,Lt,ne,qt,y,g,F,V,K,k,St,At,vt,xt,tt,lt,Rt,Mt,at,Ft;function C(){Dt=new Dl(w),Dt.init(),Mt=new du(w,Dt),wt=new El(w,Dt,t,Mt),pt=new uu(w,Dt),wt.reversedDepthBuffer&&d&&pt.buffers.depth.setReversed(!0),Jt=new Ul(w),ct=new Qc,Lt=new hu(w,Dt,pt,ct,wt,Mt,Jt),ne=new Tl(S),qt=new Pl(S),y=new va(w),at=new Sl(w,y),g=new Ll(w,y,Jt,at),F=new Nl(w,g,y,Jt),tt=new Fl(w,wt,Lt),At=new wl(ct),V=new Zc(S,ne,qt,Dt,wt,at,At),K=new vu(S,ct),k=new tu,St=new su(Dt),xt=new Ml(S,ne,qt,pt,F,f,l),vt=new lu(S,F,wt),Ft=new xu(w,Jt,wt,pt),lt=new yl(w,Dt,Jt),Rt=new Il(w,Dt,Jt),Jt.programs=V.programs,S.capabilities=wt,S.extensions=Dt,S.properties=ct,S.renderLists=k,S.shadowMap=vt,S.state=pt,S.info=Jt}C();const et=new gu(S,w);this.xr=et,this.getContext=function(){return w},this.getContextAttributes=function(){return w.getContextAttributes()},this.forceContextLoss=function(){const v=Dt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Dt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(q,J,!1))},this.getSize=function(v){return v.set(q,J)},this.setSize=function(v,L,B=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}q=v,J=L,e.width=Math.floor(v*H),e.height=Math.floor(L*H),B===!0&&(e.style.width=v+"px",e.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(q*H,J*H).floor()},this.setDrawingBufferSize=function(v,L,B){q=v,J=L,H=B,e.width=Math.floor(v*B),e.height=Math.floor(L*B),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(D)},this.getViewport=function(v){return v.copy(nt)},this.setViewport=function(v,L,B,O){v.isVector4?nt.set(v.x,v.y,v.z,v.w):nt.set(v,L,B,O),pt.viewport(D.copy(nt).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(Pt)},this.setScissor=function(v,L,B,O){v.isVector4?Pt.set(v.x,v.y,v.z,v.w):Pt.set(v,L,B,O),pt.scissor(z.copy(Pt).multiplyScalar(H).round())},this.getScissorTest=function(){return kt},this.setScissorTest=function(v){pt.setScissorTest(kt=v)},this.setOpaqueSort=function(v){rt=v},this.setTransparentSort=function(v){ht=v},this.getClearColor=function(v){return v.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,B=!0){let O=0;if(v){let I=!1;if(N!==null){const Q=N.texture.format;I=Q===1033||Q===1031||Q===1029}if(I){const Q=N.texture.type,ot=Q===1009||Q===1014||Q===1012||Q===1020||Q===1017||Q===1018,mt=xt.getClearColor(),dt=xt.getClearAlpha(),bt=mt.r,Ct=mt.g,yt=mt.b;ot?(m[0]=bt,m[1]=Ct,m[2]=yt,m[3]=dt,w.clearBufferuiv(w.COLOR,0,m)):(_[0]=bt,_[1]=Ct,_[2]=yt,_[3]=dt,w.clearBufferiv(w.COLOR,0,_))}else O|=w.COLOR_BUFFER_BIT}L&&(O|=w.DEPTH_BUFFER_BIT),B&&(O|=w.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),w.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",it,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",Z,!1),xt.dispose(),k.dispose(),St.dispose(),ct.dispose(),ne.dispose(),qt.dispose(),F.dispose(),at.dispose(),Ft.dispose(),V.dispose(),et.dispose(),et.removeEventListener("sessionstart",Xe),et.removeEventListener("sessionend",Rs),xA.stop()};function it(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),R=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),R=!1;const v=Jt.autoReset,L=vt.enabled,B=vt.autoUpdate,O=vt.needsUpdate,I=vt.type;C(),Jt.autoReset=v,vt.enabled=L,vt.autoUpdate=B,vt.needsUpdate=O,vt.type=I}function Z(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function $(v){const L=v.target;L.removeEventListener("dispose",$),_t(L)}function _t(v){It(v),ct.remove(v)}function It(v){const L=ct.get(v).programs;L!==void 0&&(L.forEach(function(B){V.releaseProgram(B)}),v.isShaderMaterial&&V.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,B,O,I,Q){L===null&&(L=gt);const ot=I.isMesh&&I.matrixWorld.determinant()<0,mt=Nh(v,L,B,O,I);pt.setMaterial(O,ot);let dt=B.index,bt=1;if(O.wireframe===!0){if(dt=g.getWireframeAttribute(B),dt===void 0)return;bt=2}const Ct=B.drawRange,yt=B.attributes.position;let zt=Ct.start*bt,Zt=(Ct.start+Ct.count)*bt;Q!==null&&(zt=Math.max(zt,Q.start*bt),Zt=Math.min(Zt,(Q.start+Q.count)*bt)),dt!==null?(zt=Math.max(zt,0),Zt=Math.min(Zt,dt.count)):yt!=null&&(zt=Math.max(zt,0),Zt=Math.min(Zt,yt.count));const le=Zt-zt;if(le<0||le===1/0)return;at.setup(I,O,mt,B,dt);let ee,Qt=lt;if(dt!==null&&(ee=y.get(dt),Qt=Rt,Qt.setIndex(ee)),I.isMesh)O.wireframe===!0?(pt.setLineWidth(O.wireframeLinewidth*oe()),Qt.setMode(w.LINES)):Qt.setMode(w.TRIANGLES);else if(I.isLine){let Tt=O.linewidth;Tt===void 0&&(Tt=1),pt.setLineWidth(Tt*oe()),I.isLineSegments?Qt.setMode(w.LINES):I.isLineLoop?Qt.setMode(w.LINE_LOOP):Qt.setMode(w.LINE_STRIP)}else I.isPoints?Qt.setMode(w.POINTS):I.isSprite&&Qt.setMode(w.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)jA("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),Qt.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))Qt.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const Tt=I._multiDrawStarts,ie=I._multiDrawCounts,Wt=I._multiDrawCount,Pe=dt?y.get(dt).bytesPerElement:1,XA=ct.get(O).currentProgram.getUniforms();for(let De=0;De<Wt;De++)XA.setValue(w,"_gl_DrawID",De),Qt.render(Tt[De]/Pe,ie[De])}else if(I.isInstancedMesh)Qt.renderInstances(zt,le,I.count);else if(B.isInstancedBufferGeometry){const Tt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ie=Math.min(B.instanceCount,Tt);Qt.renderInstances(zt,le,ie)}else Qt.render(zt,le)};function te(v,L,B){v.transparent===!0&&v.side===2&&v.forceSinglePass===!1?(v.side=1,v.needsUpdate=!0,Kn(v,L,B),v.side=0,v.needsUpdate=!0,Kn(v,L,B),v.side=2):Kn(v,L,B)}this.compile=function(v,L,B=null){B===null&&(B=v),h=St.get(B),h.init(L),E.push(h),B.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),v!==B&&v.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights();const O=new Set;return v.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const Q=I.material;if(Q)if(Array.isArray(Q))for(let ot=0;ot<Q.length;ot++){const mt=Q[ot];te(mt,B,I),O.add(mt)}else te(Q,B,I),O.add(Q)}),h=E.pop(),O},this.compileAsync=function(v,L,B=null){const O=this.compile(v,L,B);return new Promise(I=>{function Q(){if(O.forEach(function(ot){ct.get(ot).currentProgram.isReady()&&O.delete(ot)}),O.size===0){I(v);return}setTimeout(Q,10)}Dt.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Yt=null;function eA(v){Yt&&Yt(v)}function Xe(){xA.stop()}function Rs(){xA.start()}const xA=new Rr;xA.setAnimationLoop(eA),typeof self<"u"&&xA.setContext(self),this.setAnimationLoop=function(v){Yt=v,et.setAnimationLoop(v),v===null?xA.stop():xA.start()},et.addEventListener("sessionstart",Xe),et.addEventListener("sessionend",Rs),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(R===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(L),L=et.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,L,N),h=St.get(v,E.length),h.init(L),E.push(h),j.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Xt.setFromProjectionMatrix(j,2e3,L.reversedDepth),W=this.localClippingEnabled,Ot=At.init(this.clippingPlanes,W),p=k.get(v,T.length),p.init(),T.push(p),et.enabled===!0&&et.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&zi(Q,L,-1/0,S.sortObjects)}zi(v,L,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(rt,ht),Bt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Bt&&xt.addToRenderList(p,v),this.info.render.frame++,Ot===!0&&At.beginShadows();const B=h.state.shadowsArray;vt.render(B,v,L),Ot===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=p.opaque,I=p.transmissive;if(h.setupLights(),L.isArrayCamera){const Q=L.cameras;if(I.length>0)for(let ot=0,mt=Q.length;ot<mt;ot++){const dt=Q[ot];Ps(O,I,v,dt)}Bt&&xt.render(v);for(let ot=0,mt=Q.length;ot<mt;ot++){const dt=Q[ot];Cs(p,v,dt,dt.viewport)}}else I.length>0&&Ps(O,I,v,L),Bt&&xt.render(v),Cs(p,v,L);N!==null&&P===0&&(Lt.updateMultisampleRenderTarget(N),Lt.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(S,v,L),at.resetDefaultState(),M=-1,x=null,E.pop(),E.length>0?(h=E[E.length-1],Ot===!0&&At.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,T.pop(),T.length>0?p=T[T.length-1]:p=null};function zi(v,L,B,O){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Xt.intersectsSprite(v)){O&&Et.setFromMatrixPosition(v.matrixWorld).applyMatrix4(j);const ot=F.update(v),mt=v.material;mt.visible&&p.push(v,ot,mt,B,Et.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Xt.intersectsObject(v))){const ot=F.update(v),mt=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Et.copy(v.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Et.copy(ot.boundingSphere.center)),Et.applyMatrix4(v.matrixWorld).applyMatrix4(j)),Array.isArray(mt)){const dt=ot.groups;for(let bt=0,Ct=dt.length;bt<Ct;bt++){const yt=dt[bt],zt=mt[yt.materialIndex];zt&&zt.visible&&p.push(v,ot,zt,B,Et.z,yt)}}else mt.visible&&p.push(v,ot,mt,B,Et.z,null)}}const Q=v.children;for(let ot=0,mt=Q.length;ot<mt;ot++)zi(Q[ot],L,B,O)}function Cs(v,L,B,O){const I=v.opaque,Q=v.transmissive,ot=v.transparent;h.setupLightsView(B),Ot===!0&&At.setGlobalState(S.clippingPlanes,B),O&&pt.viewport(D.copy(O)),I.length>0&&jn(I,L,B),Q.length>0&&jn(Q,L,B),ot.length>0&&jn(ot,L,B),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Ps(v,L,B,O){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[O.id]===void 0&&(h.state.transmissionRenderTarget[O.id]=new cA(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Vt.workingColorSpace}));const Q=h.state.transmissionRenderTarget[O.id],ot=O.viewport||D;Q.setSize(ot.z*S.transmissionResolutionScale,ot.w*S.transmissionResolutionScale);const mt=S.getRenderTarget(),dt=S.getActiveCubeFace(),bt=S.getActiveMipmapLevel();S.setRenderTarget(Q),S.getClearColor(X),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),Bt&&xt.render(B);const Ct=S.toneMapping;S.toneMapping=0;const yt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),h.setupLightsView(O),Ot===!0&&At.setGlobalState(S.clippingPlanes,O),jn(v,B,O),Lt.updateMultisampleRenderTarget(Q),Lt.updateRenderTargetMipmap(Q),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Zt=0,le=L.length;Zt<le;Zt++){const ee=L[Zt],Qt=ee.object,Tt=ee.geometry,ie=ee.material,Wt=ee.group;if(ie.side===2&&Qt.layers.test(O.layers)){const Pe=ie.side;ie.side=1,ie.needsUpdate=!0,Ds(Qt,B,O,Tt,ie,Wt),ie.side=Pe,ie.needsUpdate=!0,zt=!0}}zt===!0&&(Lt.updateMultisampleRenderTarget(Q),Lt.updateRenderTargetMipmap(Q))}S.setRenderTarget(mt,dt,bt),S.setClearColor(X,Y),yt!==void 0&&(O.viewport=yt),S.toneMapping=Ct}function jn(v,L,B){const O=L.isScene===!0?L.overrideMaterial:null;for(let I=0,Q=v.length;I<Q;I++){const ot=v[I],mt=ot.object,dt=ot.geometry,bt=ot.group;let Ct=ot.material;Ct.allowOverride===!0&&O!==null&&(Ct=O),mt.layers.test(B.layers)&&Ds(mt,L,B,dt,Ct,bt)}}function Ds(v,L,B,O,I,Q){v.onBeforeRender(S,L,B,O,I,Q),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),I.onBeforeRender(S,L,B,O,v,Q),I.transparent===!0&&I.side===2&&I.forceSinglePass===!1?(I.side=1,I.needsUpdate=!0,S.renderBufferDirect(B,L,O,I,v,Q),I.side=0,I.needsUpdate=!0,S.renderBufferDirect(B,L,O,I,v,Q),I.side=2):S.renderBufferDirect(B,L,O,I,v,Q),v.onAfterRender(S,L,B,O,I,Q)}function Kn(v,L,B){L.isScene!==!0&&(L=gt);const O=ct.get(v),I=h.state.lights,Q=h.state.shadowsArray,ot=I.state.version,mt=V.getParameters(v,I.state,Q,L,B),dt=V.getProgramCacheKey(mt);let bt=O.programs;O.environment=v.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(v.isMeshStandardMaterial?qt:ne).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,bt===void 0&&(v.addEventListener("dispose",$),bt=new Map,O.programs=bt);let Ct=bt.get(dt);if(Ct!==void 0){if(O.currentProgram===Ct&&O.lightsStateVersion===ot)return Is(v,mt),Ct}else mt.uniforms=V.getUniforms(v),v.onBeforeCompile(mt,S),Ct=V.acquireProgram(mt,dt),bt.set(dt,Ct),O.uniforms=mt.uniforms;const yt=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(yt.clippingPlanes=At.uniform),Is(v,mt),O.needsLights=Oh(v),O.lightsStateVersion=ot,O.needsLights&&(yt.ambientLightColor.value=I.state.ambient,yt.lightProbe.value=I.state.probe,yt.directionalLights.value=I.state.directional,yt.directionalLightShadows.value=I.state.directionalShadow,yt.spotLights.value=I.state.spot,yt.spotLightShadows.value=I.state.spotShadow,yt.rectAreaLights.value=I.state.rectArea,yt.ltc_1.value=I.state.rectAreaLTC1,yt.ltc_2.value=I.state.rectAreaLTC2,yt.pointLights.value=I.state.point,yt.pointLightShadows.value=I.state.pointShadow,yt.hemisphereLights.value=I.state.hemi,yt.directionalShadowMap.value=I.state.directionalShadowMap,yt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,yt.spotShadowMap.value=I.state.spotShadowMap,yt.spotLightMatrix.value=I.state.spotLightMatrix,yt.spotLightMap.value=I.state.spotLightMap,yt.pointShadowMap.value=I.state.pointShadowMap,yt.pointShadowMatrix.value=I.state.pointShadowMatrix),O.currentProgram=Ct,O.uniformsList=null,Ct}function Ls(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=kn.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Is(v,L){const B=ct.get(v);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function Nh(v,L,B,O,I){L.isScene!==!0&&(L=gt),Lt.resetTextureUnits();const Q=L.fog,ot=O.isMeshStandardMaterial?L.environment:null,mt=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:SA,dt=(O.isMeshStandardMaterial?qt:ne).get(O.envMap||ot),bt=O.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ct=!!B.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),yt=!!B.morphAttributes.position,zt=!!B.morphAttributes.normal,Zt=!!B.morphAttributes.color;let le=0;O.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(le=S.toneMapping);const ee=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Qt=ee!==void 0?ee.length:0,Tt=ct.get(O),ie=h.state.lights;if(Ot===!0&&(W===!0||v!==x)){const ye=v===x&&O.id===M;At.setState(O,v,ye)}let Wt=!1;O.version===Tt.__version?(Tt.needsLights&&Tt.lightsStateVersion!==ie.state.version||Tt.outputColorSpace!==mt||I.isBatchedMesh&&Tt.batching===!1||!I.isBatchedMesh&&Tt.batching===!0||I.isBatchedMesh&&Tt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&Tt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&Tt.instancing===!1||!I.isInstancedMesh&&Tt.instancing===!0||I.isSkinnedMesh&&Tt.skinning===!1||!I.isSkinnedMesh&&Tt.skinning===!0||I.isInstancedMesh&&Tt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&Tt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&Tt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&Tt.instancingMorph===!1&&I.morphTexture!==null||Tt.envMap!==dt||O.fog===!0&&Tt.fog!==Q||Tt.numClippingPlanes!==void 0&&(Tt.numClippingPlanes!==At.numPlanes||Tt.numIntersection!==At.numIntersection)||Tt.vertexAlphas!==bt||Tt.vertexTangents!==Ct||Tt.morphTargets!==yt||Tt.morphNormals!==zt||Tt.morphColors!==Zt||Tt.toneMapping!==le||Tt.morphTargetsCount!==Qt)&&(Wt=!0):(Wt=!0,Tt.__version=O.version);let Pe=Tt.currentProgram;Wt===!0&&(Pe=Kn(O,L,I));let XA=!1,De=!1,hn=!1;const re=Pe.getUniforms(),Fe=Tt.uniforms;if(pt.useProgram(Pe.program)&&(XA=!0,De=!0,hn=!0),O.id!==M&&(M=O.id,De=!0),XA||x!==v){pt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),re.setValue(w,"projectionMatrix",v.projectionMatrix),re.setValue(w,"viewMatrix",v.matrixWorldInverse);const Te=re.map.cameraPosition;Te!==void 0&&Te.setValue(w,ut.setFromMatrixPosition(v.matrixWorld)),wt.logarithmicDepthBuffer&&re.setValue(w,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&re.setValue(w,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,De=!0,hn=!0)}if(I.isSkinnedMesh){re.setOptional(w,I,"bindMatrix"),re.setOptional(w,I,"bindMatrixInverse");const ye=I.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),re.setValue(w,"boneTexture",ye.boneTexture,Lt))}I.isBatchedMesh&&(re.setOptional(w,I,"batchingTexture"),re.setValue(w,"batchingTexture",I._matricesTexture,Lt),re.setOptional(w,I,"batchingIdTexture"),re.setValue(w,"batchingIdTexture",I._indirectTexture,Lt),re.setOptional(w,I,"batchingColorTexture"),I._colorsTexture!==null&&re.setValue(w,"batchingColorTexture",I._colorsTexture,Lt));const Ne=B.morphAttributes;if((Ne.position!==void 0||Ne.normal!==void 0||Ne.color!==void 0)&&tt.update(I,B,Pe),(De||Tt.receiveShadow!==I.receiveShadow)&&(Tt.receiveShadow=I.receiveShadow,re.setValue(w,"receiveShadow",I.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Fe.envMap.value=dt,Fe.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(Fe.envMapIntensity.value=L.environmentIntensity),De&&(re.setValue(w,"toneMappingExposure",S.toneMappingExposure),Tt.needsLights&&Bh(Fe,hn),Q&&O.fog===!0&&K.refreshFogUniforms(Fe,Q),K.refreshMaterialUniforms(Fe,O,H,J,h.state.transmissionRenderTarget[v.id]),kn.upload(w,Ls(Tt),Fe,Lt)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(kn.upload(w,Ls(Tt),Fe,Lt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&re.setValue(w,"center",I.center),re.setValue(w,"modelViewMatrix",I.modelViewMatrix),re.setValue(w,"normalMatrix",I.normalMatrix),re.setValue(w,"modelMatrix",I.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const ye=O.uniformsGroups;for(let Te=0,Hi=ye.length;Te<Hi;Te++){const MA=ye[Te];Ft.update(MA,Pe),Ft.bind(MA,Pe)}}return Pe}function Bh(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function Oh(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,L,B){const O=ct.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),ct.get(v.texture).__webglTexture=L,ct.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:B,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const B=ct.get(v);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0};const zh=w.createFramebuffer();this.setRenderTarget=function(v,L=0,B=0){N=v,b=L,P=B;let O=!0,I=null,Q=!1,ot=!1;if(v){const dt=ct.get(v);if(dt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(w.FRAMEBUFFER,null),O=!1;else if(dt.__webglFramebuffer===void 0)Lt.setupRenderTarget(v);else if(dt.__hasExternalTextures)Lt.rebindTextures(v,ct.get(v.texture).__webglTexture,ct.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const yt=v.depthTexture;if(dt.__boundDepthTexture!==yt){if(yt!==null&&ct.has(yt)&&(v.width!==yt.image.width||v.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Lt.setupDepthRenderbuffer(v)}}const bt=v.texture;(bt.isData3DTexture||bt.isDataArrayTexture||bt.isCompressedArrayTexture)&&(ot=!0);const Ct=ct.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ct[L])?I=Ct[L][B]:I=Ct[L],Q=!0):v.samples>0&&Lt.useMultisampledRTT(v)===!1?I=ct.get(v).__webglMultisampledFramebuffer:Array.isArray(Ct)?I=Ct[B]:I=Ct,D.copy(v.viewport),z.copy(v.scissor),G=v.scissorTest}else D.copy(nt).multiplyScalar(H).floor(),z.copy(Pt).multiplyScalar(H).floor(),G=kt;if(B!==0&&(I=zh),pt.bindFramebuffer(w.FRAMEBUFFER,I)&&O&&pt.drawBuffers(v,I),pt.viewport(D),pt.scissor(z),pt.setScissorTest(G),Q){const dt=ct.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_CUBE_MAP_POSITIVE_X+L,dt.__webglTexture,B)}else if(ot){const dt=L;for(let bt=0;bt<v.textures.length;bt++){const Ct=ct.get(v.textures[bt]);w.framebufferTextureLayer(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0+bt,Ct.__webglTexture,B,dt)}}else if(v!==null&&B!==0){const dt=ct.get(v.texture);w.framebufferTexture2D(w.FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,dt.__webglTexture,B)}M=-1},this.readRenderTargetPixels=function(v,L,B,O,I,Q,ot,mt=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=ct.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ot!==void 0&&(dt=dt[ot]),dt){pt.bindFramebuffer(w.FRAMEBUFFER,dt);try{const bt=v.textures[mt],Ct=bt.format,yt=bt.type;if(!wt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!wt.textureTypeReadable(yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-O&&B>=0&&B<=v.height-I&&(v.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+mt),w.readPixels(L,B,O,I,Mt.convert(Ct),Mt.convert(yt),Q))}finally{const bt=N!==null?ct.get(N).__webglFramebuffer:null;pt.bindFramebuffer(w.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(v,L,B,O,I,Q,ot,mt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=ct.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ot!==void 0&&(dt=dt[ot]),dt)if(L>=0&&L<=v.width-O&&B>=0&&B<=v.height-I){pt.bindFramebuffer(w.FRAMEBUFFER,dt);const bt=v.textures[mt],Ct=bt.format,yt=bt.type;if(!wt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!wt.textureTypeReadable(yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const zt=w.createBuffer();w.bindBuffer(w.PIXEL_PACK_BUFFER,zt),w.bufferData(w.PIXEL_PACK_BUFFER,Q.byteLength,w.STREAM_READ),v.textures.length>1&&w.readBuffer(w.COLOR_ATTACHMENT0+mt),w.readPixels(L,B,O,I,Mt.convert(Ct),Mt.convert(yt),0);const Zt=N!==null?ct.get(N).__webglFramebuffer:null;pt.bindFramebuffer(w.FRAMEBUFFER,Zt);const le=w.fenceSync(w.SYNC_GPU_COMMANDS_COMPLETE,0);return w.flush(),await Ns(w,le,4),w.bindBuffer(w.PIXEL_PACK_BUFFER,zt),w.getBufferSubData(w.PIXEL_PACK_BUFFER,0,Q),w.deleteBuffer(zt),w.deleteSync(le),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,B=0){const O=Math.pow(2,-B),I=Math.floor(v.image.width*O),Q=Math.floor(v.image.height*O),ot=L!==null?L.x:0,mt=L!==null?L.y:0;Lt.setTexture2D(v,0),w.copyTexSubImage2D(w.TEXTURE_2D,B,0,0,ot,mt,I,Q),pt.unbindTexture()};const Hh=w.createFramebuffer(),Gh=w.createFramebuffer();this.copyTextureToTexture=function(v,L,B=null,O=null,I=0,Q=null){Q===null&&(I!==0?(jA("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=I,I=0):Q=0);let ot,mt,dt,bt,Ct,yt,zt,Zt,le;const ee=v.isCompressedTexture?v.mipmaps[Q]:v.image;if(B!==null)ot=B.max.x-B.min.x,mt=B.max.y-B.min.y,dt=B.isBox3?B.max.z-B.min.z:1,bt=B.min.x,Ct=B.min.y,yt=B.isBox3?B.min.z:0;else{const Ne=Math.pow(2,-I);ot=Math.floor(ee.width*Ne),mt=Math.floor(ee.height*Ne),v.isDataArrayTexture?dt=ee.depth:v.isData3DTexture?dt=Math.floor(ee.depth*Ne):dt=1,bt=0,Ct=0,yt=0}O!==null?(zt=O.x,Zt=O.y,le=O.z):(zt=0,Zt=0,le=0);const Qt=Mt.convert(L.format),Tt=Mt.convert(L.type);let ie;L.isData3DTexture?(Lt.setTexture3D(L,0),ie=w.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Lt.setTexture2DArray(L,0),ie=w.TEXTURE_2D_ARRAY):(Lt.setTexture2D(L,0),ie=w.TEXTURE_2D),w.pixelStorei(w.UNPACK_FLIP_Y_WEBGL,L.flipY),w.pixelStorei(w.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),w.pixelStorei(w.UNPACK_ALIGNMENT,L.unpackAlignment);const Wt=w.getParameter(w.UNPACK_ROW_LENGTH),Pe=w.getParameter(w.UNPACK_IMAGE_HEIGHT),XA=w.getParameter(w.UNPACK_SKIP_PIXELS),De=w.getParameter(w.UNPACK_SKIP_ROWS),hn=w.getParameter(w.UNPACK_SKIP_IMAGES);w.pixelStorei(w.UNPACK_ROW_LENGTH,ee.width),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,ee.height),w.pixelStorei(w.UNPACK_SKIP_PIXELS,bt),w.pixelStorei(w.UNPACK_SKIP_ROWS,Ct),w.pixelStorei(w.UNPACK_SKIP_IMAGES,yt);const re=v.isDataArrayTexture||v.isData3DTexture,Fe=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const Ne=ct.get(v),ye=ct.get(L),Te=ct.get(Ne.__renderTarget),Hi=ct.get(ye.__renderTarget);pt.bindFramebuffer(w.READ_FRAMEBUFFER,Te.__webglFramebuffer),pt.bindFramebuffer(w.DRAW_FRAMEBUFFER,Hi.__webglFramebuffer);for(let MA=0;MA<dt;MA++)re&&(w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ct.get(v).__webglTexture,I,yt+MA),w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ct.get(L).__webglTexture,Q,le+MA)),w.blitFramebuffer(bt,Ct,ot,mt,zt,Zt,ot,mt,w.DEPTH_BUFFER_BIT,w.NEAREST);pt.bindFramebuffer(w.READ_FRAMEBUFFER,null),pt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else if(I!==0||v.isRenderTargetTexture||ct.has(v)){const Ne=ct.get(v),ye=ct.get(L);pt.bindFramebuffer(w.READ_FRAMEBUFFER,Hh),pt.bindFramebuffer(w.DRAW_FRAMEBUFFER,Gh);for(let Te=0;Te<dt;Te++)re?w.framebufferTextureLayer(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,Ne.__webglTexture,I,yt+Te):w.framebufferTexture2D(w.READ_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,Ne.__webglTexture,I),Fe?w.framebufferTextureLayer(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,ye.__webglTexture,Q,le+Te):w.framebufferTexture2D(w.DRAW_FRAMEBUFFER,w.COLOR_ATTACHMENT0,w.TEXTURE_2D,ye.__webglTexture,Q),I!==0?w.blitFramebuffer(bt,Ct,ot,mt,zt,Zt,ot,mt,w.COLOR_BUFFER_BIT,w.NEAREST):Fe?w.copyTexSubImage3D(ie,Q,zt,Zt,le+Te,bt,Ct,ot,mt):w.copyTexSubImage2D(ie,Q,zt,Zt,bt,Ct,ot,mt);pt.bindFramebuffer(w.READ_FRAMEBUFFER,null),pt.bindFramebuffer(w.DRAW_FRAMEBUFFER,null)}else Fe?v.isDataTexture||v.isData3DTexture?w.texSubImage3D(ie,Q,zt,Zt,le,ot,mt,dt,Qt,Tt,ee.data):L.isCompressedArrayTexture?w.compressedTexSubImage3D(ie,Q,zt,Zt,le,ot,mt,dt,Qt,ee.data):w.texSubImage3D(ie,Q,zt,Zt,le,ot,mt,dt,Qt,Tt,ee):v.isDataTexture?w.texSubImage2D(w.TEXTURE_2D,Q,zt,Zt,ot,mt,Qt,Tt,ee.data):v.isCompressedTexture?w.compressedTexSubImage2D(w.TEXTURE_2D,Q,zt,Zt,ee.width,ee.height,Qt,ee.data):w.texSubImage2D(w.TEXTURE_2D,Q,zt,Zt,ot,mt,Qt,Tt,ee);w.pixelStorei(w.UNPACK_ROW_LENGTH,Wt),w.pixelStorei(w.UNPACK_IMAGE_HEIGHT,Pe),w.pixelStorei(w.UNPACK_SKIP_PIXELS,XA),w.pixelStorei(w.UNPACK_SKIP_ROWS,De),w.pixelStorei(w.UNPACK_SKIP_IMAGES,hn),Q===0&&L.generateMipmaps&&w.generateMipmap(ie),pt.unbindTexture()},this.initRenderTarget=function(v){ct.get(v).__webglFramebuffer===void 0&&Lt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Lt.setTextureCube(v,0):v.isData3DTexture?Lt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Lt.setTexture2DArray(v,0):Lt.setTexture2D(v,0),pt.unbindTexture()},this.resetState=function(){b=0,P=0,N=null,pt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Vt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Vt._getUnpackColorSpace()}}const oA=Math.PI/180;function kA(n,t,e=1,A=new U){const i=(90-n)*oA,r=(t+180)*oA;return A.set(-e*Math.sin(i)*Math.cos(r),e*Math.cos(i),e*Math.sin(i)*Math.sin(r))}function Su(n,t,e,A){const i=(A-t)*oA,r=n*oA,s=e*oA,a=Math.cos(s)*Math.cos(i),l=Math.cos(s)*Math.sin(i),o=Math.atan2(Math.sin(r)+Math.sin(s),Math.sqrt((Math.cos(r)+a)*(Math.cos(r)+a)+l*l)),c=t*oA+Math.atan2(l,Math.cos(r)+a);return{lat:o/oA,lng:c/oA}}class yu{constructor(){this.camera=new Tr(-1,1,1,-1,.01,100),this.viewport={width:1,height:1},this.centerPx={x:0,y:0},this.radiusPx=1,this.lat=0,this.lng=0,this._v=new U,this._normal=new U,this._camDir=new U(0,0,1)}get camDir(){return this._camDir}lookAtLatLng(t,e){this.lat=t,this.lng=e,kA(t,e,10,this.camera.position),this.camera.up.set(0,1,0),this.camera.lookAt(0,0,0),this.camera.updateMatrixWorld(!0),this.camera.updateProjectionMatrix(),this._camDir.copy(this.camera.position).normalize()}layout(t,e,A,i){this.viewport.width=t,this.viewport.height=e,this.centerPx=A,this.radiusPx=i;const r=1/i,s=this.camera;s.left=-A.x*r,s.right=(t-A.x)*r,s.top=A.y*r,s.bottom=-(e-A.y)*r,s.updateProjectionMatrix(),s.updateMatrixWorld(!0)}project(t,e,A=0){const i=kA(t,e,1+A,this._v);this._normal.copy(i).normalize();const r=this._normal.dot(this._camDir);return i.project(this.camera),{x:(i.x*.5+.5)*this.viewport.width,y:(-i.y*.5+.5)*this.viewport.height,depth:r,visible:r>0}}}const Eu={latStep:2.4,latMin:-58,latMax:82,lngStep:2.4};function wu(n,t){const{latStep:e,latMin:A,latMax:i,lngStep:r}=n,s=Math.round((i-A)/e)+1,a=Math.max(1,Math.round(360/r));let l=0;for(let o=0;o<s;o++){const c=A+o*e;for(let u=0;u<a;u++)t(c,-180+u*r,l++)}}const Wn=720,Ui=360,Tu="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+//8/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P////8HAAAA8P//////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+//////8HAAA+/P///z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7//////wf4////////////D/AfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD//////wf8////////////+/9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/sP/////f/D///////////////8BAAAAAAAAAAAAAAAAAADgPQAAAAAAAAAAAAD+DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA//8B/P//D/7//////////////wcAAAAAAAAAAPj/HwAAAADgAwAAAAAAAAAAAAD/PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///7////AOD//////////////wcAAAAAAADAxw//HwAAAAAAAAAAAAAAAAAAAAD8/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAA4P/P//8AAPz//////////////wMAAAAAAADA//8AAAAAAAAAAAAAAAAAAAAAAADw/zgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgH948P/8//8A+P///////////////wEAAAAAAACA//8AAAAAAAAAAAAAAAAAAAAAAAAAAP4DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPj4AQ78///A/////////////////wEAAAAAAAAA/j88AAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAPAACADwDn/w8A/v///////////////wEAAAAAAAAA4A/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfwAAAAAAAAD//wEA4P///////////////wMAAAAAAAAA8AcAAAAAAAAAAAAAAAAAAAAAAAAAAPAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgfwAgAADA/+H//w8A+P//////////////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAPABAAAAAAAAAPw/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4Ax/wAPgf4AMAwAAAwP//////////////fwAAAAAAAAAAAAAAAAAAAAAAAAAA/P8AAAAAAAAA8P///wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP/hD/gfwB8ADgAAAAAA/v///////////wEAAAAAAAAAAAAAAAAAAAAAAADg/wEAAAAAAAD+/////w8AAAAAAPj/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P//D8CPj////wAAAAAA+P///////////wEAAAAAAAAAAAAAAAAAAAAAAAD+BwAAAAAAAP7//////wcAAAAAAPz/8wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAHAAAAD/7//wAAAAAA4P///////////wAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAA4P//////fwAAAAAAAOAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAMD/AAAAAAAAAAAAAAAAAAAAwP//////////PwAAAAAAAAAAAAAAAAAAAAAAAMAfAAAAAAAA4P//////BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAIAA/gcIgAAAAAAAAP//////////fwAAAAAAAAAAAAAAAAAAAAAAAPgHAAAAAAD4/////////wMAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/fwIAeOAf/8HHnz8AAAAAAP7/////////AQAAAAAAAAAAAAAAAAAAAAAAAPgDAAAAAAD+//////////8/wP8AAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/5/cYH7g/P/DvfwAAAAAAAPz/////////BwAAAAAAAAAAAAAAAAAAAAAAAP4AAAD8YQD+//////////////8DAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD/+f9/P+B/DvD/f/4BAAAAAPz///////9/AAAAAAAAAAAAAAAAAAAAAAAAAH4AAAD8Q/j8//////////////8DAID//wMAAAAAAAAAAAAAAAAAAAAAAAAAAOB//P9/PwB/DvD///8PAAAAAP7/////////BwAAAAAAAAAAAAAAAAAAAAAAgH8AAAD/cP////////////////8DAYD//w8AAAAAAAAAHwAAAADAAAAAAAAAAAA+gP//fwCAP/D/////AQAAAMD////////fDwAAAAAAAAAAAAAAAAAAAAAAAPwBAMD/+P7///////////////+H/////38AAAAAAADAAAAAAAD+9wAAAAAAAAAA8P///wGA/+D/////DwAAADj///////8/DwAAAAAAAAAAAAAA/w8AAAAAAPAHAOD/8f//////////////////////////PwAAAAAAAAAAAPD///8AAAAAAAMAAOD//w+A/wH8/////wAAAPj///////8HAAAAAAAAAAAAAADA/x8AAAAAAAAAAMD/8////////////////////////////wAAAAAAAAAAAPz/////HwAA/0ccwP///z88fgDgIeD//wEAAPj9////////AQAAAAAAAAAAAMD//78BAAAAAAAABsD/+f//////////////////////////fwAA8P8BAAAAAP7//////wf/////A/3//wf++AfgH4D//wMAAAD8//////8/AAAAAAAAAAAAAPD///8fAAAAAAAA/gP/8f//////////////////////////////4f8/AQAA+P///////////////+MfCAAA+HfgPwD/fwAAAAD+//////8DAAAAAAAAAAAAAPz/////BwAAABgg/B/8w///////////////////////////////9///HwAA+P///////////////weAPwD4+P/wDwDw/wMAAMD//////x8AAAAAAAAAAAAAgP//////PwAPwMf////+5///////////////////////////////////fwAAgP///////////////w8f/4/////4H8DD/38AAOD/////PwAAAAAAAAAAAAAA4P///////wE//P//////w////////////////////////////////////wMAAP//////////////////////////H8CB//8AAPD/////HwAAAAAAAAAAAAAA8P///////wMH////////8f////////////////////////////////////sBAPj/////////////////////////BwDg//8PAOD/////DwAAAAAAAAAAAAAA+P///////wPO////////8P////////////////////////////////////8H8PH///////////////////////8PAADw//gPAOD/////AQAADsAHAAAAAAAA/P////8P/Hj//////////v///////////////////////////////////P8H//////////////////////////8HAADw/+ADAMD///8PAAAA//8HAAAAAAAA//8f/v8/AP7/////////////////////////////////////////////AX8A/P/////////////////////////zAPD//4EBAID///8AAAAA8P8PAAAAAACA//8H+P8/AP//////////////////////////////////////////////AHwA+N/////////////////////////xB/j//w8AAAD//38AAAAA/v8HAAAAAADA//8H/v8/Hv7///////////////////////////////////////////9/AAAAAMD////////////////////////4HxDg/z8AAAD//38AAAAA8P8BAAAAAADw//+D//9//P////////////////////////////////////////////8PAAAAAMD//////////////////////wf8+AAA/z8AAAD+/z8AAAAAwB8AAAAAAAD8///g//////////////////////////////////////////////////8fAAB4APj//////////////////////wcgAAAA/3wAAAD8/x8AAAAAAAAAAAAAAAD//z/4//////////////////////////////////////////////////8/AAAAwP///////////////////////wAADgAA+CMAAAD4/wcAAAAAAAAAAAAAAOD//w/8//////////////////////////////////////////////////9/AAAA4P//////////////////////PwAAA/EZgAcAAADw/wcAAAAAAAAAAAAAAPj//wf4/////////////////////////////////////////////z/+//8BAAAA8P//////////////////////HwAAAPH/AAAAAADg/wcAAAAAAAAAAAAAAPz//wf4////////////////////////////////////////////vx///x8AAAAA4P//////////////////////DwAAAPD/AQAAAADA/wMAAAAAAAAAAAAAAPz//wP4////////////////////////////////////////////gY///wMAAAAA4P////74////////////////BwAAAPD/HwAAAAAA8AMAAAAAAAAAAAAAAPz//wf4//////////////////////////////////////////9/AMH/fwAAAAAAnP//f/7A////////////////BwAAAOD/HwAAAAAAwAEAAAAAAAAAAAAAAPz//x/gB/7///////////////////////////////////////8/APj/GAAAAAAAAPD/Px8AwP//////////////BwAAAOD/H+AAAAAAAAAAAAAAAAAAAAAAAPj//x8AAP7///////////////////////////////////////8PAHwCAAAAAAAAAPD/DwIAAP7/////////////BwAAAPD/H/ABAAAAAAAAAAAAAAAAAAAAAPjv/w+A////////////////////////////////////////wYM/AD8AAAAAAAAAADDeHwAAAPj/////////////PwAAAPj/f/ADAAAAAAAAAAAAAAAAAAAAAPjD/wOA//////////////////////////////////////8HAAAAgB8AAAAAAAAAAADgDwAAAMD/////////////PwAAAOD///8HAAAAAAAAAAAAAAAAAOABAOCA/wEA/v////////////////////////////////////8DAAAA4A8AAAAAAAAAAADgcQAAAADw////////////fwAAAMD///8PAAAAAAAAAAAAAAAAAPAAAACA/yEA/v////////////////////////////////////8AAAAA/B8AAAAAAAAAAAB4OAAAAADg////////////fwQAAID///8fAAAAAAAAAAAAAAAAAPAPAAAY/xE4/////////////////////////////////////z8AAAAA/j8AAAAAAAAAAAAeAAAAAADA/////////////z8AAID///8fAAAAAAAAAAAAAAAAAPAHAAAf/gP8/////////////////////////////////////x8AAAAA/z8AAAAAAAAAAIAHAAAAAAAA//////////////8BAMD///8fAAAAAAAAAAAAAAAAAOADAAA//gD8/////////////////////////////////////wcAAACA/z8AAAAAAAAAAPADAAAAAAAA//////////////8PAMD///9/AAAAAAAAAAAAAAAAAOAPAADPHQD8/////////////////////////////////////wMAAACA/w8AAAAAAAAAABwAAAAAAAAA/v//////////////AfD/////AQAAAAAAAAAAAAAAAMAfAACOAQD4/////////////////////////////////////wAAAACA/wcAAAAAAAAAgAMAAAAAAAAA+P//////////////B/7/////HwAAAAAAAAAAAAAAAI8/AAAOAAz/////////////////////////////////////PwAAAACA/w8AAAAAAAAAAAAAAAAAAAAA+P//////////////B/7/////PwAAAAAAAAAAAAAAwA98AAA+g////////////////////////////////////////wMAAACA/wEAAAAAAAAAAAAAAAAAAADA4P//////////////B/z/////PwAAAAAAAAAAAAAA4A/8AAD+//////////////////////////////////////////8hAAAA/wAAAAAAAAAAAAAAAAAAAADAwP//////////////D/z//////wAAAAAAAAAAAAAA4I//APz///////////////////////////////////////////87AAAA/wAAAAAAAAAAAAAAAAAAAACAwP//////////////D/j//////wEAAAAAAAAAAAAA4If/B/7///////////////////////////////////////////9/AAAAHwAAAAAAAAAAAAAAAAAAAAAAAP//////////////H/z//////wEAAAAAAAAAAAAA4IP/B/////////////////////////////////////////////8/AAAAHgAAAAAAAAAAAAAAAAAAAAAAAP//////////////P/z/////fwAAAAAAAAAAAAAAYMD/A/////////////////////////////////////////////87AAAADgAAAAAAAAAAAAAAAAAAAAAAAP7/////////////////////zwEAAAAAAAAAAAAAAAD/x/////////////////////////////////////////////9xAAAAAgAAAAAAAAAAAAAAAAAAAAAAAPz/////////////////////4QAAAAAAAAAAAAAAAMA/+P////////////////////////////////////////////9xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////////w/+YAAAAAAAAAAAAAAAAGAB+P/////////////////////////////////////////////xAAAAAAAAAAAAAAAAAAAAAAAAAAAAALz//////////////////4MD8AEAAAAAAAAAAAAAAAAA///////////////////////////////////////////////xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHD+/////////////////wAM+B8AAAAAAAAAAAAAAADw//////////////////////////////////////////////+xAQAAAAAAAAAAAAAAAAAAAAAAAAAAAOD5////////////////P/4A/B8AAAAAAAAAAAAAAADn//////////////////////////////////////////////8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID4////////////////nz8A/D8AAAAAAAAAAAAAAID///////////////////////////////////////////////8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID7////////////////7z8A/j8AAAAAAAAAAAAAAAD+/////////////////////////////////////////////38QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////9z8AADIAAAAAAAAAAAAAAAD4/////////////////////////////////////////////z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////8AADAAAAAAAAAAAAAAAADw////////////8///H/z//////////////////////////x9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////39OAAAAAAAAAAAAAAAAAADg/////////x8+8P//A/z//////////////////////////w8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAADA/////////w84+P//Afz//////////////////////////wcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////48/AAAAAAAAAAAAAAAAAADg////+f///wf+//9/gP///////////////////////////wMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////+MDAAAAAAAAAAAAAAAAAADg////wf///wM4+P8/gP///////////////////////////wE4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////f3AAAAAAAAAAAAAAAAAAAADg///9wf///wEA4P8/4P///////////////////////////wB4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////DzAAAAAAAAAAAAAAAAAAAADg///gg////wEAgP9/wP//////////////////////////fwD4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAID/////////////////BwAAAAAAAAAAAAAAAAAAwP///xjgB/z//wAAAP9/gP//////////////////////////HgD+BwAAAAAAAAAAAAAAAAAAAAAAAAAAAID/////////////////AwAAAAAAAAAAAAAAAAAAwP//PwDkD/D//wAAAPh/AP7///////////////////////9/AAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/////////////////AwAAAAAAAAAAAAAAAAAAwP//PwCGH8D//wAAAPj/AP7///////////////////////8/AABnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////DwAAAAAAAAAAAAAAAAAAwP//PwAG/4D//wD+APj/AfL///////////////////////8PAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////9/AAAAAAAAAAAAAAAAAAAAwP//DwAA/IH//4P/A/z/A+D///////////////////////8HAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID///////////////8/AAAAAAAAAAAAAAAAAAAAwP//AQAH8If/cPz/////B/T/////////////////////8/8HAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID///////////////8PAAAAAAAAAAAAAAAAAAAAwP//AAAOwJHfwf//////H/z/////////////////////8P8BAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////8PAAAAAAAAAAAAAAAAAAAAwP//AAAGgAE/4P//////B/j///////////////////9/eH4AAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////8FAAAAAAAAAAAAAAAAAAAA4P//AAAGAAN+4P//////B/z///////////////////8/GHgAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+//////////////8DAAAAAAAAAAAAAAAAAAAA4P//AAAAAAE+4P//////A/D///////////////////8HAPwAAIAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/////////////38DAAAAAAAAAAAAAAAAAAAAwP9/AAAAgAH84P//////A/D///////////////////8PAPwBAIADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/////////////38BAAAAAAAAAAAAAAAAAAAAwP9/AAAAfgC4wP//////A/D///////////////////8/AvADAOADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/////////////38AAAAAAAAAAAAAAAAAAAAAwP8fAAAMeAA4gP//////H/D///////////////////9/H+AHAPIDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw//////////////8AAAAAAAAAAAAAAAAAAAAAAPgPwPs/AAAwgP/f//////7/////////////////////B/AHAP4DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw//////////////8AAAAAAAAAAAAAAAAAAAAAADAA/v8fAAAAABgO////////////////////////////A+AHAP8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//////////////8AAAAAAAAAAAAAAAAAAAAAADDA//8/AAAAAAAA////////////////////////////AOAHAP8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA//////////////8AAAAAAAAAAAAAAAAAAAAAAPDz//8/AACAHwAM//////////////////////////9/AOAD/v8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/////////////38AAAAAAAAAAAAAAAAAAAAAAPj///8fAAAAAAAG//////////////////////////9/AOAA/z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v///////////x8AAAAAAAAAAAAAAAAAAAAAAPz///8PAAAAAACA////////////////////////////AQDA0wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P///////////wcAAAAAAAAAAAAAAAAAAAAAAP7///8/AAAAAACA////////////////////////////AQAgngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P///////////wMAAAAAAAAAAAAAAAAAAAAAgP////8/AAAAAADA////////////////////////////AQD4BgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP///////////wAAAAAAAAAAAAAAAAAAAAAAwP//////BwAMAADA////////////////////////////AwD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////fwAAAAAAAAAAAAAAAAAAAAAA4P//////fwA/AADA////////////////////////////BwBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwPv/////////PwAAAAAAAAAAAAAAAAAAAAAA4P//////fwD/AwDg////////////////////////////DwBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgOP/////////HwAAAAAAAAAAAAAAAAAAAAAA8P///////wH/f/Dg////////////////////////////DwAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMP/////////HwAAAAAAAAAAAAAAAAAAAAAA4P///////w//////////////////////////////////BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMf//////x/wHwAAAAAAAAAAAAAAAAAAAAAA4P//////////////////////////////////////////BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIb/////3x8gPgAAAAAAAAAAAAAAAAAAAAAA4P//////////////////4P//////////////////////DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIz/////AwwAPAAAAAAAAAAAAAAAAAAAAAAA8P/////////////f////4P//////////////////////DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj/////AQAAfAAAAAAAAAAAAAAAAAAAAAAA/P/////////////d////wf//////////////////////DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADD+//9/AAAAeAAAAAAAAAAAAAAAAAAAAAAA/v/////////////7////gf//////////////////////BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHz4//8/AAAAfAAAAAAAAAAAAAAAAAAAAADA//////////////+H////A///////////////////////AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHj4//8fAAAA+AAAAAAAAAAAAAAAAAAAAADg//////////////+H////B/z/////////////////////AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODx//8fAAAA+AwAAAAAAAAAAAAAAAAAAADg//////////////8P////D3j8////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDh//8fAAAA8CAAAAAAAAAAAAAAAAAAAAD4//////////////8P/v//DwD9////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh//8/AAAA4AAAAAAAAAAAAAAAAAAAAAD4//////////////8f/v//TwD5//////////////////9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACD//8fAAAAQAAAAAAAAAAAAAAAAAAAAAD8//////////////8f/P//X8AB/uH///////////////8/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//8fAAAAABgAAAAAAAAAAAAAAAAAAAD8//////////////8//P//f+ABAMD///////////////8/DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO/v8fAAAAABAAAAAAAAAAAAAAAAAAAAD+//////////////9/+P////ADAID///////////////8PBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY/P8fAAAAABAAAAAAAAAAAAAAAAAAAAD///////////////9/4P////8PAAD///////////////8HBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ+P8PAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////9/4P////8/AAD8//////////////8BBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P8PAAAA/wEAAAAAAAAAAAAAAAAAAID/////////////////wP////9/AAD4/////5///////38AAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P8PAACA8Q8AAAAAAAAAAAAAAAAAAID/////////////////wf//////AAD4/////x///////wcAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P8fAAAAAB8AAAAAAAAAAAAAAAAAAMD/////////////////w/////9/AAD4/////wP//////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P8fAOADAHgAAAAAAAAAAAAAAAAAAMD/////////////////w/////8/AADw////PwD///9/EAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAA4P8/APgDAPABAAAAAAAAAAAAAAAAAMD/////////////////g/////8fAAAA/P//PwD+//8/GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P8/APgBAOAPAAAAAAAAAAAAAAAAAID/////////////////A/////8PAAAA/P//HwD+//8fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAA4P9/APgBAADgBgAAAAAAAAAAAAAAAID/////////////////A/7///8HAAAA/P//BwD4//8PPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAwP//APwBAADAPwAAAAAAAAAAAAAAAID/////////////////B/z///8PAAAA/P//AwD4//8HHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Af8BAACAfwAAAAAAAAAAAAAAAAD/////////////////B/z///8DAAAA/P//AQDw//8PHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7/9/8AAHj4SxwAAAAAAAAAAAAAAAD/////////////////D/j///8BAAAA/P//AADg//8PAAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD///8AACAAAAAAAAAAAAAAAAAAAAD/////////////////H/D//38AAAAA/P9/AADg//8fAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD//38AAAAAAAAAAAAAAAAAAAAAAID/////////////////P+D//38AAAAA+P8fAADg//8/AAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//38AAAAAAAAAAAAAAAAAAAAAAID/////////////////P+D//wcAAAAA+P8PAADg+/9/AAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/38AAAAAAAAAAAAAAAAAAAAAAID/////////////////P8D//wEAAAAA+P8HAADw+P//AAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA4H//AAAAAAAAAAAAAAAAAAAAAID/////////////////f+D//wAAAAAA+P8BAABA+P//AQAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//AQAAAAAAAAAAAAAAAAAAAMD//////////////////8D/fwAAAAAA8P8AAAAA+P//AwAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP//AQAAAAAAAAAAAAAAAAAAAOD//////////////////8P/BwAAAAAA4P8AAAAA8P//AwAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AwAAAAAAAAAAAAAAAAAAAMD//////////////////8f/AwAAAAAA4P8AAAAA8P//AwAALgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD/AQAAAAAAAAAAAAAAAAAAAMD//////////////////49/AAAAAAAA4P8AAAAA8P//BwAA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD+AQAAAAAAAAAAAAAAAAAAAMD//////////////////98HAAAAAAAAwP8BAAAA4Pz/BwAAxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+AQAAAAAAAAAAAAAAAAAAAMD//////////////////78DAAAAAAAAwP8AAAAA4Pz/BwAAhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8AQAAAQAAAAAAAAAAAAAAAID//////////////////38AAAAAAAAAwP8AAAAA4OD/AwAABAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AQCAGQAAAAAAAAAAAAAAAID//////////////////z8AIAAAAAAAgP8AAAAA4MD/AwAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAADweAAAAAAAAAAAAAAAAAD+/////////////////38APwAAAAAAAP8AAAAAYMD/AQAAMAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAQD+/wAgAAAAAAAAAAAAAAD8///////////////////wPwAAAAAAAP8AAAAAYID/AABA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAQD+/p83AAAAAAAAAAAAAAD4////////////////////PwAAAAAAAH8AAAAAYAA+AABAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgBwD+/P8fAAAAAAAAAAAAAADw////////////////////HwAAAAAAAD4AAAAAIAAcAAAgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw///P8/AAAAAAAAAAAAAADg////////////////////HwAAAAAAAD4DAAAAIAAMAAAQAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/pn///9/AAAAAAAAAAAAAADA////////////////////HwAAAAAAAA4DAAAA8AAEAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAePD/////AQAAAAAAAAAAAADA////////////////////DwAAAAAAAIgHAAAA8AEAAAAAwB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4Pj/////AwAAAAAAAAAAAADA////////////////////DwAAAAAAAAAHAAAAwAEAAAAA8B8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQPD/////BwAAAAAAAAAAAACA////////////////////BwAAAAAAAAAHAAAAgAEAAAAAEB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD/////DwAAAAAAAAAAAAAA/v//////////////////BwAAAAAAAAAHAAAAAAcAAAAGABcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD/////HwAAAAAAAAAAAAAA/P//H/7/////////////AwAAAAAAAAAHAAAAAA8AAAAGAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD//////w8AAAAAAAAAAAAA8P//Afz/////////////AwAAAAAAAAAAAAAAAB4AAAAfAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD//////38AAAAAAAAAAAAA4P9/APz/////////////AQAAAAAAAAAAAACABz8AAMA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD///////8AAAAAAAAAAAAAwAcAAPj/////////////AAAAAAAAAAAAAACAD34AAOAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD///////8BAAAAAAAAAAAAAAAAAAD8////////////AAAAAAAAAAAAAAAAH34AAPAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD///////8DAAAAAAAAAAAAAAAAAAD4//////////9/AAAAAAAAAAAAAAAAPnwAAPgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD///////8DAAAAAAAAAAAAAAAAAAD4//////////8/AAAAAAAAAAAAAAAAfHgAAPwHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD///////8DAAAAAAAAAAAAAAAAAAD4//////////8fAAAAAAAAAAAAAAAA+HgAgP8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPj///////8HAAAAAAAAAAAAAAAAAAD4//////////8PAAAAAAAAAAAAAAAA8PEAgP8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPj///////8PAAAAAAAAAAAAAAAAAAD4//////////8DAAAAAAAAAAAAAAAA4M8AyP8PAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPz///////8PAAAAAAAAAAAAAAAAAAD4//////////8BAAAAAAAAAAAAAAAAwJ8A/P8fAIIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////8PAAAAAAAAAAAAAAAAAAD4/////////38AAAAAAAAAAAAAAAAAwD8A/P8P/4EBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////8HAAAAAAAAAAAAAAAAAAD4/////////z8AAAAAAAAAAAAAAAAAwH8A/P8HAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP////////9/AAAAAAAAAAAAAAAAAAD8/////////x8AAAAAAAAAAAAAAAAAgH8A/P+HAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP////////9/AwAAAAAAAAAAAAAAAAD8/////////w8AAAAAAAAAAAAAAAAAAH8A+P+HYQCBDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////HwAAAAAAAAAAAAAAAAD8/////////w8AAAAAAAAAAAAAAAAAAP4B+P+DHwDADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////fwAAAAAAAAAAAAAAAAD8/////////wcAAAAAAAAAAAAAAAAAAP4B8P+BDwAADxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////fwAAAAAAAAAAAAAAAAD4/////////wMAAAAAAAAAAAAAAAAAAPwD8P/BDwAAGH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////w8AAAAAAAAAAAAAAADw/////////wAAAAAAAAAAAAAAAAAAAPgP8P/BDQAAH/8HAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////8BAAAAAAAAAAAAAADg/////////wAAAAAAAAAAAAAAAAAAAPAPAPvBHTAf/v8fAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP////////////8HAAAAAAAAAAAAAADA/////////wAAAAAAAAAAAAAAAAAAAOAPAOCAHSAg9P//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP////////////8PAAAAAAAAAAAAAACA////////fwAAAAAAAAAAAAAAAAAAAOAPAACAOQAAwP//A4ADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P////////////8fAAAAAAAAAAAAAACA////////PwAAAAAAAAAAAAAAAAAAAIAPAACAKQAAAP7/B4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////////AQAAAAAAAAAAAAAA////////PwAAAAAAAAAAAAAAAAAAAAAPAACAIQAAAPj/D8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////////AwAAAAAAAAAAAAAA////////PwAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAPD/H34gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////////AwAAAAAAAAAAAAAA////////PwAAAAAAAAAAAAAAAAAAAADwAAAAAAAAEOD/fxhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP//////////////AwAAAAAAAAAAAAAA/v//////fwAAAAAAAAAAAAAAAAAAAAD44QAAAAAAEOD/PwCAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7/////////////AwAAAAAAAAAAAAAA/P//////fwAAAAAAAAAAAAAAAAAAAADg/wMAAAAAAOD/PwAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7/////////////AwAAAAAAAAAAAAAA/P//////PwAAAAAAAAAAAAAAAAAAAAAA+R8AAAAAAPD/fQAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPz/////////////AwAAAAAAAAAAAAAA/P//////PwAAAAAAAAAAAAAAAAAAAAAAgH8AIAAAADh/8AAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPz/////////////AwAAAAAAAAAAAAAA/P//////fwAAAAAAAAAAAAAAAAAAAAAAAAA8DzwAAAB+4AEAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPj/////////////AQAAAAAAAAAAAAAA/P//////fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAgwAcAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPj/////////////AQAAAAAAAAAAAAAA/P///////wAAAAAAAAAAAAAAAAAAAAAAAACAgQMAAAAAgA8AAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD/////////////AAAAAAAAAAAAAAAA+P///////wAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD///////////8/AAAAAAAAAAAAAAAA+P///////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD///////////8/AAAAAAAAAAAAAAAA+P///////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD///////////8fAAAAAAAAAAAAAAAA+P///////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD///////////8PAAAAAAAAAAAAAAAA+P///////wEABAAAAAAAAAAAAAAAAAAAAAAAAABA/wMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD///////////8PAAAAAAAAAAAAAAAA/P///////wEABAAAAAAAAAAAAAAAAAAAAAAAAADg/wNwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID///////////8HAAAAAAAAAAAAAAAA/v///////wEADgAAAAAAAAAAAAAAAAAAAAAAAADg/wF4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID///////////8DAAAAAAAAAAAAAAAA/v///////wEADgAAAAAAAAAAAAAAAAAAAAAAAADw/wB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////8DAAAAAAAAAAAAAAAA/////////wEADwAAAAAAAAAAAAAAAAAAAAAAAPj4/wD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////8DAAAAAAAAAAAAAAAA/////////wOADwAAAAAAAAAAAAAAAAAAAAAAAPz4fwD4AwAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+//////////8DAAAAAAAAAAAAAAAA/////////wHAHwAAAAAAAAAAAAAAAAAAAAAAAP7//wD4BwAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4//////////8DAAAAAAAAAAAAAAAA/////////wHgFwAAAAAAAAAAAAAAAAAAAAAAAP7//wP4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//////////8DAAAAAAAAAAAAAACA/////////wD+DwAAAAAAAAAAAAAAAAAAAAAAgP7//wf4BwAAAABAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA//////////8DAAAAAAAAAAAAAACA////////fwD+DwAAAAAAAAAAAAAAAAAAAAAAoP///w/8BwAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////////8DAAAAAAAAAAAAAACA////////DwD/BwAAAAAAAAAAAAAAAAAAAAAA4P///z/8DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////////8DAAAAAAAAAAAAAAAA////////AwD/BwAAAAAAAAAAAAAAAAAAAAAA4P//////DwAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P////////8BAAAAAAAAAAAAAAAA////////AQD/BwAAAAAAAAAAAAAAAAAAAAAA8P//////DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P////////8BAAAAAAAAAAAAAAAA/v//////AAD/AwAAAAAAAAAAAAAAAAAAAAAA+P//////HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P////////8BAAAAAAAAAAAAAAAA/v////9/AAD+AwAAAAAAAAAAAAAAAAAAAAAA+P//////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P////////8AAAAAAAAAAAAAAAAA/P////8/AAD+AwAAAAAAAAAAAAAAAAAAAAAA/v///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P///////38AAAAAAAAAAAAAAAAA/P////8fAAD+AQAAAAAAAAAAAAAAAAAAAADA/////////wEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P///////38AAAAAAAAAAAAAAAAA+P////8/AAD/AQAAAAAAAAAAAAAAAAAAAAD+/////////wMAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P///////z8AAAAAAAAAAAAAAAAA+P////8/AID/AQAAAAAAAAAAAAAAAAAAAID//////////wcAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P///////z8AAAAAAAAAAAAAAAAA8P////9/AID/AAAAAAAAAAAAAAAAAAAAAMD//////////wcAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P///////x8AAAAAAAAAAAAAAAAA4P////9/AID/AAAAAAAAAAAAAAAAAAAAAOD//////////wcAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P///////w8AAAAAAAAAAAAAAAAA4P////9/AID/AAAAAAAAAAAAAAAAAAAAAPD//////////z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P///////wAAAAAAAAAAAAAAAAAA4P////9/AIB/AAAAAAAAAAAAAAAAAAAAAPD//////////z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P//////HwAAAAAAAAAAAAAAAAAA4P////9/AIB/AAAAAAAAAAAAAAAAAAAAAPj//////////z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P//////BwAAAAAAAAAAAAAAAAAA4P////9/AIB/AAAAAAAAAAAAAAAAAAAAAPj///////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P//////AQAAAAAAAAAAAAAAAAAA4P////8fAAA/AAAAAAAAAAAAAAAAAAAAAPj///////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P//////AAAAAAAAAAAAAAAAAAAA4P////8HAAAOAAAAAAAAAAAAAAAAAAAAAPD///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P////9/AAAAAAAAAAAAAAAAAAAAwP////8BAAAAAAAAAAAAAAAAAAAAAAAAAPD///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P////9/AAAAAAAAAAAAAAAAAAAAwP////8DAAAAAAAAAAAAAAAAAAAAAAAAAPj///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P////9/AAAAAAAAAAAAAAAAAAAAwP////8DAAAAAAAAAAAAAAAAAAAAAAAAAPj///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P////9/AAAAAAAAAAAAAAAAAAAAgP////8BAAAAAAAAAAAAAAAAAAAAAAAAAPD///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P////9/AAAAAAAAAAAAAAAAAAAAgP////8BAAAAAAAAAAAAAAAAAAAAAAAAAPD///////////8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P////9/AAAAAAAAAAAAAAAAAAAAAP////8BAAAAAAAAAAAAAAAAAAAAAAAAAOD///////////8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8/AAAAAAAAAAAAAAAAAAAAAP7///8AAAAAAAAAAAAAAAAAAAAAAAAAAOD///////////8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8fAAAAAAAAAAAAAAAAAAAAAP7//38AAAAAAAAAAAAAAAAAAAAAAAAAAMD///////////8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8PAAAAAAAAAAAAAAAAAAAAAPz//z8AAAAAAAAAAAAAAAAAAAAAAAAAAMD///////////8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8PAAAAAAAAAAAAAAAAAAAAAPj//x8AAAAAAAAAAAAAAAAAAAAAAAAAAMD///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8HAAAAAAAAAAAAAAAAAAAAAPj//x8AAAAAAAAAAAAAAAAAAAAAAAAAAMD///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8DAAAAAAAAAAAAAAAAAAAAAPD//w8AAAAAAAAAAAAAAAAAAAAAAAAAAID///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8BAAAAAAAAAAAAAAAAAAAAAPD//wcAAAAAAAAAAAAAAAAAAAAAAAAAAID///8D//////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v///38AAAAAAAAAAAAAAAAAAAAAAPD//wMAAAAAAAAAAAAAAAAAAAAAAAAAAAD//y8A+P////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v///38AAAAAAAAAAAAAAAAAAAAAAPD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAID//wMA8P////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v///z8AAAAAAAAAAAAAAAAAAAAAAPD/fwAAAAAAAAAAAAAAAAAAAAAAAAAAAID//wAA4Pf//38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////x8AAAAAAAAAAAAAAAAAAAAAAPD/DwAAAAAAAAAAAAAAAAAAAAAAAAAAAMD//wAAwPP//38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////9x8AAAAAAAAAAAAAAAAAAAAAAOAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMB/AAAAwPn//z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////jwcAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAAAgOj//z8AAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA////HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD//x8AAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA////HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD//x8AAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID//w8AAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//w8AAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//w8AAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg////HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/wcAAAAAAOARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg////DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4fQAAAAAAAOAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg////AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAOAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA//8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw//8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAMIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw/z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AEAAAAAAOsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw/z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AEAAAAAgA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ/38BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AAAAAAAgA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AAAAAAAwAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ/z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAA8AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA/z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADI/x8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/x8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/x8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/w8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/w8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8PwAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8PwDADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8fwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwdwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABg+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/j8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8DAAAAAAAAAAAAAPgDgB8AAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP8HAAAAAAAAgAEAAP4P8P8D8P/9/wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v8fAAAAAAAg/v9//v////9/////////DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw////gw8AAAD8////////////////////HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////8DAID//////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4APj///////8HAOD//////////////////////38wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnv8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8B/////////8HAPD/////////////////////////AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnv8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/3/////////8HgP//////////////////////////fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvv8HAAAAAAAAAAAAAAAAAAAAAMAPvv8HAPz///////////8A+P///////////////////////////wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/8PAAAAAAAAAAAAAAAAAAAAAP6f//////////////////8D/P////////////////////////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwf/4fAAAAAAAAAAAAAAAAAB54/P////////////////////8B////////////////////////////////BwAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAD8f/wfAAAAAAAAAAAAAAAA/P////////////////////////+A////////////////////////////////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAPB/AAAAAAA4H/w/AAAAAAAAAAAAAAAA///////////////////////////3////////////////////////////////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAACAAAAAAAP8/AAAAAAAAAAAAAADg////////////////////////////////////////////////////////////HwAAAAAAAAAAAAAAAAAAAAAAAAAAAP4P4PAfgAAA/v9/AAAAAAAAAAAAAAD+////////////////////////////////////////////////////////////DwAAAAAAAAAAAAAAAAAAAGD4AwAAAPz/////73/4//8/AAAAAAAAAAAAAID/////////////////////////////////////////////////////////////AQAAAAAAAAAAAAAAAAAAAAAA/D8AAMD///////////8fAAAAAAAAAAAAAAD+//////////////////////////////////////////////////////////8/AAAAAAAAAAAAAAAAAOD///////8PAID///////////8BAAAAAAAAAAAAAID///////////////////////////////////////////////////////////8HAAAAAAAAAAAAAAAA+P///////////7///////////38AAAAAAAAAAAAAAPD///////////////////////////////////////////////////////////8BAAAAAAAAAAAAAAD4/////////////////////////wMAAAAAAAAAAAAAgP////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAADw////////////////////////DwAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////38AAAAAAAAAAAAAAAD//////////////////////z8AAAAAAAAAAAAAAMD//////////////////////////////////////////////////////////////38AAAAAAAAAAAA4H/j///////////////////////8BAAAAAAAAAAAAAPj///////////////////////////////////////////////////////////////8AAAAAAAAAAADw//////////////////////////8PAAAAAAAAAAAAwP////////////////////////////////////////////////////////////////8AAAAAAAAAAADg/////////////////////////z8AAAAAAADAfwAA/v////////////////////////////////////////////////////////////////8HAAAAAAAAAP4A/////////////////////////w8AAAAAAADw/wEA//////////////////////////////////////////////////////////////////8/AAAAAAAAAPgBAP///////////////////////w8AAAAAAAD4/wEA/////////////////////////////////////////////////////////////////wcAAAAAAAAAAAAAAAD+/////////////////////38AAABAAAD+/wEAAOD//////////////////////////////////////////////////////////////wMAAAAAAAAAAAAAAAD4//////////////////////8BAADgAfD/fwAAAID//////////////////////////////////////////////////////////////wEAAAAAAAAAAAAAAAD+////////////////////////A8D/AOD/AAAAAP///////////////////////////////////////////////////////////////wAAAAAAAAAAAAAA//P/////////////////////////fwAAAAAAAADg/////////////////////////////////////////////////////////////////wMAAAAAAAAAAAAA+P////////////////////////////8DAADwB/j//////////////////////////////////////////////////////////////////w8AAAAAAAAAAAAAwP////////////////////////////9/AOD//////////////////////////////////////////////////////////////////////z8AAAAAAAAAAAAAwP//////////////////////////////g/////////////////////////////////////////////////////////////////////////8HAAAAAAAAAAAA4P//////////////////////////////////////////////////////////////////////////////////////////////////////////AQAAAAAAAAAAwP//////////////////////////////////////////////////////////////////////////////////////////////////////////BwAAhOF/AAAAAPD//////////////////////////////////////////////////////////////////////////////////////////////////////////8MBAAAAwP//////AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AP8/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";let an=null;function bu(){if(an)return an;const n=atob(Tu);an=new Uint8Array(n.length);for(let t=0;t<n.length;t++)an[t]=n.charCodeAt(t);return an}function Ru(n,t){const e=bu();let A=Math.floor((t+180)/360*Wn),i=Math.floor((90-n)/180*Ui);A<0?A=0:A>=Wn&&(A=Wn-1),i<0?i=0:i>=Ui&&(i=Ui-1);const r=i*Wn+A;return(e[r>>3]&1<<(r&7))!==0}function ns({lattice:n=Eu,landColor:t=1315866,oceanColor:e=12763852,landSize:A=2,oceanSize:i=1.15,landOpacity:r=.92,oceanOpacity:s=.75}={}){const a=[],l=[];wu(n,(h,T)=>{a.push(h),l.push(T)});const o=a.length,c=new Float32Array(o*3),u=new Float32Array(o),d=new U;let f=0;for(let h=0;h<o;h++){kA(a[h],l[h],1,d),c[h*3]=d.x,c[h*3+1]=d.y,c[h*3+2]=d.z;const T=Ru(a[h],l[h])?1:0;u[h]=T,f+=T}const m=new Ce;m.setAttribute("position",new fe(c,3)),m.setAttribute("aLand",new fe(u,1));const _=new ke({transparent:!0,depthWrite:!1,uniforms:{uLandColor:{value:new Gt(t)},uOceanColor:{value:new Gt(e)},uLandSize:{value:A},uOceanSize:{value:i},uLandOpacity:{value:r},uOceanOpacity:{value:s},uPixelRatio:{value:1},uSizeScale:{value:1},uCamDir:{value:new U(0,0,1)},uFadeStart:{value:.06}},vertexShader:`
      attribute float aLand;
      uniform float uLandSize;
      uniform float uOceanSize;
      uniform float uPixelRatio;
      uniform float uSizeScale;
      uniform vec3 uCamDir;
      varying float vFacing;
      varying float vLand;

      void main() {
        vLand = aLand;
        vFacing = dot(normalize(position), uCamDir);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        gl_PointSize = mix(uOceanSize, uLandSize, aLand) * uSizeScale * uPixelRatio;
      }
    `,fragmentShader:`
      uniform vec3 uLandColor;
      uniform vec3 uOceanColor;
      uniform float uLandOpacity;
      uniform float uOceanOpacity;
      uniform float uFadeStart;
      varying float vFacing;
      varying float vLand;

      void main() {
        if (vFacing <= 0.0) discard;

        float d = length(gl_PointCoord - vec2(0.5));
        float alpha = 1.0 - smoothstep(0.32, 0.5, d);
        if (alpha <= 0.0) discard;

        alpha *= smoothstep(0.0, uFadeStart, vFacing);
        gl_FragColor = vec4(
          mix(uOceanColor, uLandColor, vLand),
          alpha * mix(uOceanOpacity, uLandOpacity, vLand)
        );
      }
    `}),p=new fa(m,_);return p.frustumCulled=!1,p.renderOrder=2,p.userData.stats={count:o,landCount:f},p}function is({color:n=1315866,opacity:t=.13,latStep:e=10,lngStep:A=10,latLimit:i=80,segments:r=128}={}){const s=[],a=new U,l=(d,f)=>{kA(d,f,1.0005,a),s.push(a.x,a.y,a.z)};for(let d=-i;d<=i;d+=e)for(let f=0;f<r;f++)l(d,-180+f/r*360),l(d,-180+(f+1)/r*360);for(let d=-180;d<180;d+=A)for(let f=0;f<r;f++)l(-90+f/r*180,d),l(-90+(f+1)/r*180,d);const o=new Ce;o.setAttribute("position",new fe(new Float32Array(s),3));const c=new ke({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Gt(n)},uOpacity:{value:t},uCamDir:{value:new U(0,0,1)},uFadeStart:{value:.1}},vertexShader:`
      uniform vec3 uCamDir;
      varying float vFacing;
      void main() {
        vFacing = dot(normalize(position), uCamDir);
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,fragmentShader:`
      uniform vec3 uColor;
      uniform float uOpacity;
      uniform float uFadeStart;
      varying float vFacing;
      void main() {
        if (vFacing <= 0.0) discard;
        float a = uOpacity * smoothstep(0.0, uFadeStart, vFacing);
        gl_FragColor = vec4(uColor, a);
      }
    `}),u=new ua(o,c);return u.frustumCulled=!1,u.renderOrder=1,u}function Cu({color:n=1315866,opacity:t=.28,segments:e=512}={}){const A=new Float32Array(e*3);for(let l=0;l<e;l++){const o=l/e*Math.PI*2;A[l*3]=Math.cos(o),A[l*3+1]=Math.sin(o),A[l*3+2]=0}const i=new Ce;i.setAttribute("position",new fe(A,3));const r=new mr({color:n,transparent:!0,opacity:t,depthWrite:!1}),s=new ha(i,r);s.frustumCulled=!1,s.renderOrder=3;const a=new U(0,0,1);return s.userData.faceCamera=l=>{s.quaternion.setFromUnitVectors(a,l)},s}function Pu(n){const t=n.length,e=new Float32Array(t*2*3),A=new Float32Array(t*2*3),i=new Float32Array(t*2*3),r=new Float32Array(t*2),s=new Float32Array(t*2);for(let o=0;o<t;o++){const c=n[o],u=n[Math.max(o-1,0)],d=n[Math.min(o+1,t-1)],f=t===1?0:o/(t-1);for(let m=0;m<2;m++){const _=(o*2+m)*3;e[_]=c.x,e[_+1]=c.y,e[_+2]=c.z,A[_]=u.x,A[_+1]=u.y,A[_+2]=u.z,i[_]=d.x,i[_+1]=d.y,i[_+2]=d.z,r[o*2+m]=m===0?-1:1,s[o*2+m]=f}}const a=new Uint32Array((t-1)*6);for(let o=0;o<t-1;o++){const c=o*2,u=o*6;a[u]=c,a[u+1]=c+1,a[u+2]=c+2,a[u+3]=c+2,a[u+4]=c+1,a[u+5]=c+3}const l=new Ce;return l.setAttribute("position",new fe(e,3)),l.setAttribute("aPrev",new fe(A,3)),l.setAttribute("aNext",new fe(i,3)),l.setAttribute("aSide",new fe(r,1)),l.setAttribute("aAlong",new fe(s,1)),l.setIndex(new fe(a,1)),l}const Du=`
  attribute vec3 aPrev;
  attribute vec3 aNext;
  attribute float aSide;
  attribute float aAlong;

  uniform vec2 uResolution;
  uniform float uWidth;
  uniform float uMode;
  uniform float uHeadT;
  uniform float uTailLength;

  varying float vAlong;
  varying float vSide;
  varying float vLocal;
  varying vec3 vWorld;

  vec2 toScreen(vec4 clip) {
    return (clip.xy / clip.w) * uResolution * 0.5;
  }

  float dropWidth(float local) {
    if (local < 0.0 || local > 1.0) return 0.0;
    if (local < 0.8) return sqrt(local / 0.8);
    float k = (local - 0.8) / 0.2;
    return sqrt(max(0.0, 1.0 - k * k));
  }

  void main() {
    vAlong = aAlong;
    vSide = aSide;
    vWorld = position;

    vec4 clip = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vec4 clipPrev = projectionMatrix * modelViewMatrix * vec4(aPrev, 1.0);
    vec4 clipNext = projectionMatrix * modelViewMatrix * vec4(aNext, 1.0);

    vec2 sCur = toScreen(clip);
    vec2 sPrev = toScreen(clipPrev);
    vec2 sNext = toScreen(clipNext);

    vec2 dir;
    if (distance(sNext, sCur) < 1e-6) dir = normalize(sCur - sPrev);
    else if (distance(sPrev, sCur) < 1e-6) dir = normalize(sNext - sCur);
    else dir = normalize(normalize(sCur - sPrev) + normalize(sNext - sCur));

    vec2 nrm = vec2(-dir.y, dir.x);

    float width = uWidth;
    vLocal = 0.0;
    if (uMode > 0.5) {
      vLocal = (aAlong - (uHeadT - uTailLength)) / uTailLength;
      width = uWidth * dropWidth(vLocal);
    }

    clip.xy += nrm * aSide * (width * 0.5) * (2.0 / uResolution) * clip.w;
    gl_Position = clip;
  }
`,Lu=`
  uniform vec3 uBaseColor;
  uniform vec3 uSatColor;
  uniform float uBaseOpacity;
  uniform float uSatOpacity;
  uniform float uOpacity;
  uniform float uDrawProgress;
  uniform float uHeadT;
  uniform float uSatFeather;
  uniform float uMode;
  uniform vec3 uCamDir;

  varying float vAlong;
  varying float vSide;
  varying float vLocal;
  varying vec3 vWorld;

  void main() {
    float alongAxis = dot(vWorld, uCamDir);
    float perp = length(vWorld - alongAxis * uCamDir);
    if (alongAxis < 0.0 && perp < 1.0) discard;

    if (vAlong > uDrawProgress) discard;

    if (uMode > 0.5) {
      if (vLocal < 0.0 || vLocal > 1.0) discard;
      if (uHeadT <= 0.0 || uHeadT >= 1.0) discard;
      float shade = mix(0.55, 1.0, vLocal);
      gl_FragColor = vec4(
        mix(uBaseColor, uSatColor, shade),
        mix(uBaseOpacity, uSatOpacity, shade) * uOpacity
      );
      return;
    }

    float ramp = vAlong;
    gl_FragColor = vec4(
      mix(uBaseColor, uSatColor, ramp),
      mix(uBaseOpacity, uSatOpacity, ramp) * uOpacity
    );
  }
`;function rs({baseColor:n=6710886,satColor:t=0,baseOpacity:e=0,satOpacity:A=1,width:i=2,opacity:r=1,mode:s=0,tailLength:a=.035,satFeather:l=.02}={}){return new ke({transparent:!0,depthWrite:!1,depthTest:!1,side:2,uniforms:{uResolution:{value:new $t(1,1)},uWidth:{value:i},uOpacity:{value:r},uBaseColor:{value:new Gt(n)},uSatColor:{value:new Gt(t)},uBaseOpacity:{value:e},uSatOpacity:{value:A},uDrawProgress:{value:0},uHeadT:{value:0},uTailLength:{value:a},uSatFeather:{value:l},uMode:{value:s},uCamDir:{value:new U(0,0,1)}},vertexShader:Du,fragmentShader:Lu})}function Iu(n,t,e,A=new U){const i=Math.min(1,Math.max(-1,n.dot(t))),r=Math.acos(i);if(r<1e-6)return A.copy(n);const s=Math.sin(r),a=Math.sin((1-e)*r)/s,l=Math.sin(e*r)/s;return A.set(n.x*a+t.x*l,n.y*a+t.y*l,n.z*a+t.z*l)}function Uu(n,t,{segments:e=192,lift:A=.055}={}){const i=kA(n.lat,n.lng,1),r=kA(t.lat,t.lng,1),s=[];for(let a=0;a<=e;a++){const l=a/e,o=Iu(i,r,l);o.multiplyScalar(1+A*Math.sin(Math.PI*l)),s.push(o)}return s}class Fu{constructor(t,e,{segments:A=192,lift:i=.055,width:r=2,dropWidth:s=7,baseColor:a=6710886,satColor:l=0,baseOpacity:o=0,satOpacity:c=1,dropBaseColor:u=4473924,tailLength:d=.035}={}){this.from=t,this.to=e,this.tailLength=d;const f=Uu(t,e,{segments:A,lift:i});this.geometry=Pu(f),this.arcMaterial=rs({baseColor:a,satColor:l,baseOpacity:o,satOpacity:c,width:r,mode:0,tailLength:d}),this.dropMaterial=rs({baseColor:u,satColor:l,baseOpacity:.75,satOpacity:1,width:s,mode:1,tailLength:d}),this.arc=new Ge(this.geometry,this.arcMaterial),this.drop=new Ge(this.geometry,this.dropMaterial),this.arc.frustumCulled=!1,this.drop.frustumCulled=!1,this.arc.renderOrder=10,this.drop.renderOrder=11,this.group=new nn,this.group.add(this.arc,this.drop),this.setProgress(0),this.setHead(0)}setProgress(t){const e=Math.min(1,Math.max(0,t));return this.arcMaterial.uniforms.uDrawProgress.value=e,this.dropMaterial.uniforms.uDrawProgress.value=e,this}setHead(t){const e=Math.min(1,Math.max(0,t));return this.arcMaterial.uniforms.uHeadT.value=e,this.dropMaterial.uniforms.uHeadT.value=e,this}setOpacity(t){return this.arcMaterial.uniforms.uOpacity.value=t,this.dropMaterial.uniforms.uOpacity.value=t,this}syncCamera(t,e,A){for(const i of[this.arcMaterial,this.dropMaterial])i.uniforms.uCamDir.value.copy(t),i.uniforms.uResolution.value.set(e,A);return this}dispose(){this.geometry.dispose(),this.arcMaterial.dispose(),this.dropMaterial.dispose()}}const Nu=2,Bu=500,Ou=[.7,1.6];class zu{constructor(t,e){if(this.root=t,t.style.pointerEvents||(t.style.pointerEvents="none"),this.layout=e,this.anchor=document.querySelector("[data-globe-anchor]")||t,this.box=document.createElement("div"),this.box.className="globe-box",Object.assign(this.box.style,{position:"absolute",top:"0",left:"0",height:"100%",pointerEvents:"none"}),e.feather>0){const i=`linear-gradient(to bottom, #000 calc(100% - ${e.feather}px), transparent 100%)`;this.box.style.maskImage=i,this.box.style.webkitMaskImage=i}t.appendChild(this.box),this.canvas=document.createElement("canvas"),this.canvas.className="globe-canvas",Object.assign(this.canvas.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block",pointerEvents:"none"}),this.box.appendChild(this.canvas),this.renderer=new Mu({canvas:this.canvas,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.scene=new aa,this.globeCam=new yu,this.globeCam.lookAtLatLng(e.cameraLat,e.cameraLng),this.gridOpts={},this.dotOpts={},this.rimOpts={},this.grid=is(this.gridOpts),this.dots=ns(this.dotOpts),this.rim=Cu(this.rimOpts),this.scene.add(this.grid,this.dots,this.rim),this.routes=[],this._needsResize=!0,this._size={w:0,h:0,dpr:0},this._onFrame=[],this._ro=new ResizeObserver(()=>{this._needsResize=!0}),this._ro.observe(this.root),this._onWindowResize=()=>{this._needsResize=!0},window.addEventListener("resize",this._onWindowResize),window.addEventListener("scroll",this._onWindowResize,{passive:!0}),this._raf=null,this._lastTime=0,this.deltaSeconds=0,this._aim=null,this._pointer={x:0,y:0},this._drift={x:0,y:0},this._onPointerMove=i=>{if(i.pointerType==="touch")return;const r=window.innerWidth||1,s=window.innerHeight||1;this._pointer.x=Math.max(-1,Math.min(1,i.clientX/r*2-1)),this._pointer.y=Math.max(-1,Math.min(1,i.clientY/s*2-1))},this._onPointerLeave=()=>{this._pointer.x=0,this._pointer.y=0};const A=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;this._driftEnabled=!A&&(e.drift>0||e.driftLat>0),this._driftEnabled&&(window.addEventListener("pointermove",this._onPointerMove,{passive:!0}),document.documentElement.addEventListener("pointerleave",this._onPointerLeave))}_applyDrift(){const t=this.deltaSeconds,e=1-Math.exp(-this.layout.driftEase*t),A=this._drift;A.x+=(this._pointer.x-A.x)*e,A.y+=(this._pointer.y-A.y)*e;const i=this._aim||{lat:this.layout.cameraLat,lng:this.layout.cameraLng},r=this.layout.driftDirection,s=Math.max(-89,Math.min(89,i.lat+r*A.y*this.layout.driftLat)),a=i.lng-r*A.x*this.layout.drift,l=this.globeCam;Math.abs(l.lat-s)<1e-4&&Math.abs(l.lng-a)<1e-4||(l.lookAtLatLng(s,a),this._syncCamDir())}onFrame(t){return this._onFrame.push(t),()=>{const e=this._onFrame.indexOf(t);e>=0&&this._onFrame.splice(e,1)}}project(t,e,A=0){return this.globeCam.project(t,e,A)}_bleedHost(t){let e=null,A=this.root.parentElement;for(;A&&A!==document.body;){const i=getComputedStyle(A);(i.overflowX!=="visible"||i.overflowY!=="visible")&&A.getBoundingClientRect().width<t-1&&(e=A),A=A.parentElement}return!e||!e.parentElement?this.root:e.parentElement}_applyLayout(){const t=this.root.getBoundingClientRect(),e=this.anchor.getBoundingClientRect(),A=this.layout.fullBleed,i=document.documentElement.clientWidth||t.width;let r=this.root;A&&(r=this._bleedHost(i),r!==this.box.parentElement&&(r!==this.root&&getComputedStyle(r).position==="static"&&(r.style.position="relative"),r.appendChild(this.box)));const s=r.getBoundingClientRect(),a=A?i:t.width,l=A?-s.left:0;this.box.style.left=`${l}px`,this.box.style.top=`${A?t.top-s.top:0}px`,this.box.style.width=`${a}px`,this.box.style.height=`${t.height}px`,A&&t.left;const o={top:t.top,width:a,height:t.height},c=Math.max(1,Math.round(o.width)),u=Math.max(1,Math.round(o.height)),d=Math.min(window.devicePixelRatio||1,Nu);(c!==this._size.w||u!==this._size.h||d!==this._size.dpr)&&(this.renderer.setPixelRatio(d),this.renderer.setSize(c,u,!1),this._size={w:c,h:u,dpr:d},this.dots.material.uniforms.uPixelRatio.value=d);const f=e.top-t.top,m=A?e.left+e.width/2:e.left-t.left+e.width/2;let _,p;if(this.layout.fitRoute>0&&this.route){const{from:S,to:R}=this.route,b=this.layout.aimAtRoute?Su(S.lat,S.lng,R.lat,R.lng):{lat:this.layout.cameraLat,lng:this.layout.cameraLng},P=Math.max(-89,Math.min(89,b.lat+this.layout.tilt));this._aim={lat:P,lng:b.lng+this.layout.spin},this.globeCam.lookAtLatLng(this._aim.lat,this._aim.lng),this.globeCam.layout(c,u,{x:m,y:0},1);const N=this.globeCam.project(S.lat,S.lng),M=this.globeCam.project(R.lat,R.lng),x=Math.hypot(M.x-N.x,M.y-N.y),D=this.layout.refWidth||c,z=Math.max(1,D*this.layout.fitRoute),G=Math.min(this.layout.scaleMax,Math.max(this.layout.scaleMin,c/D));_=z/Math.max(1e-6,x)*G;const X=(N.y+M.y)/2;if(this.layout.apexClearance!==null)p=f+this.layout.apexClearance+_;else{const Y=e.height||u;p=f+Y*this.layout.routeY-X*_}}else{if(this.layout.hasRefWidth){const S=this.layout.refWidth,R=Math.min(this.layout.scaleMax,Math.max(this.layout.scaleMin,i/S));_=S*this.layout.radiusScale*R}else this._warnedNoFit||(this._warnedNoFit=!0,console.warn('[globe] the globe is sized from its container, so it shrinks with the screen. Add data-ref-width="1440" to #globe-root to hold its size and crop instead.')),_=e.width*this.layout.radiusScale;if(this.layout.radiusMaxVh>0){const S=window.innerHeight||o.height||1;_=Math.min(_,S*this.layout.radiusMaxVh)}p=f+_*this.layout.centerYFactor,this.layout.apexClearance!==null&&(p=Math.max(p,f+this.layout.apexClearance+_))}if(i<this.layout.mobileBelow&&this.layout.mobileScale!==1){const S=this.layout.mobileScale,R=p-_;_*=S,p=R+_}const h={x:m,y:p};this.globeCam.layout(c,u,h,_);const[T,E]=Ou;this.dots.material.uniforms.uSizeScale.value=Math.min(E,Math.max(T,_/Bu)),this._syncCamDir(),this._needsResize=!1}_syncCamDir(){const t=this.globeCam.camDir;this.dots.material.uniforms.uCamDir.value.copy(t),this.grid.material.uniforms.uCamDir.value.copy(t),this.rim.userData.faceCamera(t);for(const e of this.routes)e.syncCamera(t,this._size.w||1,this._size.h||1)}addRoute(t,e,A){const i=new Fu(t,e,A);return this.route={from:t,to:e},this.routes.push(i),this.scene.add(i.group),this._needsResize=!0,i}_replace(t,e,A){const i=this[t];return this.scene.remove(i),i.geometry.dispose(),i.material.dispose(),this[t]=e(A),this.scene.add(this[t]),this._syncCamDir(),t==="dots"&&(this.dots.material.uniforms.uPixelRatio.value=this._size.dpr||1,this._needsResize=!0),this[t]}setGrid(t){return Object.assign(this.gridOpts,t),this._replace("grid",is,this.gridOpts)}setDots(t){return Object.assign(this.dotOpts,t),this._replace("dots",ns,this.dotOpts)}start(){if(this._raf!==null)return;const t=e=>{this._raf=requestAnimationFrame(t),this.deltaSeconds=this._lastTime?Math.min((e-this._lastTime)/1e3,.1):0,this._lastTime=e,this._needsResize&&this._applyLayout(),this._driftEnabled&&this._applyDrift();for(const A of this._onFrame)A(e,this);this.renderer.render(this.scene,this.globeCam.camera)};this._raf=requestAnimationFrame(t)}stop(){this._raf!==null&&cancelAnimationFrame(this._raf),this._raf=null,this._lastTime=0,this.deltaSeconds=0}dispose(){this.stop(),this._ro.disconnect(),window.removeEventListener("resize",this._onWindowResize),window.removeEventListener("scroll",this._onWindowResize),window.removeEventListener("pointermove",this._onPointerMove),document.documentElement.removeEventListener("pointerleave",this._onPointerLeave),this.renderer.dispose(),this.canvas.remove()}}const ss=[{id:"origin",lat:37.7749,lng:-122.4194,label:"San Francisco"},{id:"destination",lat:40.7128,lng:-74.006,label:"New York"}],se={radiusScale:.403,centerYFactor:.925,cameraLat:-4,cameraLng:-91,globeStart:0,fitRoute:0,routeY:.34,tilt:0,spin:0,aimAtRoute:!1,fullBleed:!1,refWidth:1440,hasRefWidth:!1,scaleMin:1,scaleMax:1,mobileScale:1,mobileBelow:768,radiusMaxVh:0,apexClearance:null,drift:4,driftLat:2,driftEase:3,driftDirection:-1,feather:120};function ae(n,t,e){const A=n.getAttribute(t);if(A===null||A.trim()==="")return e;const i=Number.parseFloat(A);return Number.isFinite(i)?i:e}function Hu(n=document){const t=n.querySelectorAll("[data-globe-place]");if(!t.length)return ss;const e=[];return t.forEach((A,i)=>{const r=ae(A,"data-lat",NaN),s=ae(A,"data-lng",NaN);if(!Number.isFinite(r)||!Number.isFinite(s)){console.warn("[globe] skipping place with bad lat/lng",A);return}e.push({id:A.getAttribute("data-id")||`place-${i}`,lat:r,lng:s,label:A.getAttribute("data-label")||"",el:A})}),e.length?e:ss}function Gu(n){return n?{radiusScale:ae(n,"data-radius-scale",se.radiusScale),centerYFactor:ae(n,"data-center-y",se.centerYFactor),cameraLat:ae(n,"data-camera-lat",se.cameraLat),cameraLng:ae(n,"data-camera-lng",se.cameraLng),globeStart:ae(n,"data-globe-start",se.globeStart),fitRoute:ae(n,"data-fit-route",se.fitRoute),routeY:ae(n,"data-route-y",se.routeY),tilt:ae(n,"data-tilt",se.tilt),spin:ae(n,"data-spin",se.spin),aimAtRoute:n.hasAttribute("data-aim-at-route"),fullBleed:n.hasAttribute("data-full-bleed"),refWidth:ae(n,"data-ref-width",se.refWidth),hasRefWidth:n.hasAttribute("data-ref-width"),scaleMin:ae(n,"data-scale-min",se.scaleMin),scaleMax:ae(n,"data-scale-max",se.scaleMax),mobileScale:ae(n,"data-mobile-scale",se.mobileScale),mobileBelow:ae(n,"data-mobile-below",se.mobileBelow),radiusMaxVh:ae(n,"data-radius-max-vh",se.radiusMaxVh),apexClearance:n.hasAttribute("data-apex-clearance")?ae(n,"data-apex-clearance",0):se.apexClearance,drift:ae(n,"data-drift",se.drift),driftLat:ae(n,"data-drift-lat",se.driftLat),driftEase:ae(n,"data-drift-ease",se.driftEase),driftDirection:(n.getAttribute("data-drift-direction")||"").toLowerCase()==="same"?1:se.driftDirection,feather:ae(n,"data-feather",se.feather)}:{...se}}const ku=[["San Francisco",37.7749,-122.4194],["New York",40.7128,-74.006],["London",51.5074,-.1278],["Reykjavik",64.1466,-21.9426],["Mexico City",19.4326,-99.1332],["Bogota",4.711,-74.0721],["Anchorage",61.2181,-149.9003],["Lagos",6.5244,3.3792],["Tokyo",35.6762,139.6503],["Sydney",-33.8688,151.2093],["Cape Town",-33.9249,18.4241],["Honolulu",21.3069,-157.8583],["Null Island",0,0],["North Pole",89.9,0]];function Vu(n){const t=document.createElement("div");Object.assign(t.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"40",font:"11px ui-monospace, monospace"}),n.root.appendChild(t);const e=ku.map(([A,i,r])=>{const s=document.createElement("div");return s.textContent=A,Object.assign(s.style,{position:"absolute",transform:"translate(-50%, -50%)",padding:"2px 5px",borderRadius:"3px",background:"#ff2d55",color:"#fff",whiteSpace:"nowrap",willChange:"transform, opacity"}),t.appendChild(s),{el:s,lat:i,lng:r}});return n.onFrame(()=>{for(const A of e){const i=n.project(A.lat,A.lng);A.el.style.opacity=i.visible?String(.35+.65*i.depth):"0",A.el.style.transform=`translate(${i.x}px, ${i.y}px) translate(-50%, -50%)`}}),t}const Wu=`
.globe-pin { position: absolute; top: 0; left: 0; pointer-events: none;
  will-change: transform, opacity; transform-origin: 50% 100%; }
.globe-pin__pill { position: absolute; left: 50%; bottom: 31px; height: 33px;
  display: flex; align-items: center; justify-content: center;
  border-radius: 16.5px; background: #000; color: #fff; font-size: 14px;
  line-height: 21px; white-space: nowrap; font-family: inherit;
  overflow: hidden; box-sizing: border-box; will-change: width, transform; }
.globe-pin__label { display: block; padding: 0 14px; }
.globe-pin__stem { position: absolute; left: 50%; bottom: -1px; width: 2px;
  height: 24px; margin-left: -1px; background: #000; opacity: .7;
  transform-origin: 50% 100%; }
.globe-pin__dot { position: absolute; left: 50%; top: 0; width: 12px;
  height: 12px; margin-left: -6px; margin-top: -6px; border-radius: 50%;
  background: #000; box-shadow: 0 0 0 2px #fff, 0 4px 4px rgba(0,0,0,.25); }
`,on=n=>n<0?0:n>1?1:n,Xu=n=>1-Math.pow(1-n,3);let as=!1;function qu(n){if(as)return;as=!0;const t=n.createElement("style");t.textContent=Wu,n.head.appendChild(t)}function Yu(n){qu(document);const t=document.createElement("div");return t.className="globe-pin-layer",Object.assign(t.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"40",overflow:"hidden"}),(n.box||n.root).appendChild(t),t}class os{constructor(t,e){this.place=e,this.el=document.createElement("div"),this.el.className="globe-pin";const A=document.createElement("div");A.className="globe-pin__pill";const i=document.createElement("span");i.className="globe-pin__label",i.textContent=e.label,A.appendChild(i);const r=document.createElement("div");r.className="globe-pin__stem";const s=document.createElement("div");s.className="globe-pin__dot",this.el.append(A,r,s),this.pill=A,this.label=i,this.stem=r,this.dot=s,this.fullWidth=0,this.circleWidth=33,t.appendChild(this.el),this._amount=0,this._pill=1,this.setAmount(0)}setAmount(t){return this._amount=t,this}setPill(t){return this._pill=t,this}_measure(){if(this.fullWidth)return;const t=this.pill.style.width,e=this.label.style.opacity;this.pill.style.width="auto",this.label.style.opacity="1";const A=this.pill.offsetWidth,i=this.pill.offsetHeight;A&&(this.fullWidth=Math.ceil(A),this.circleWidth=Math.ceil(i)||33),this.pill.style.width=t,this.label.style.opacity=e}update(t){const e=t.project(this.place.lat,this.place.lng),A=this._amount;if(!e.visible||A<=.001){this.el.style.opacity="0";return}this._measure();const i=Math.min(1,e.depth/.12),r=on(A);this.el.style.opacity=String(r*i),this.el.style.transform=`translate(${e.x}px, ${e.y}px)`;const s=on(this._pill)*r,a=Xu(on((s-.3)/.7)),l=on((s-.55)/.45),o=on(s/.3),c=Math.round(this.circleWidth+(this.fullWidth-this.circleWidth)*a);this.pill.style.width=`${c}px`,this.pill.style.marginLeft=`${-c/2}px`,this.pill.style.opacity=String(o),this.pill.style.transform=`scale(${.7+.3*o})`,this.label.style.opacity=String(l),this.stem.style.transform=`scaleY(${r})`,this.dot.style.transform=`scale(${.4+.6*r})`}dispose(){this.el.remove()}}const $u=new Set(["IMG","SVG","PICTURE","VIDEO","CANVAS"]);function ju(n){return n.hasAttribute("data-type-atom")||$u.has(n.tagName.toUpperCase())?!0:n.textContent.trim()===""}function Ku(n){const t=[];for(let e=1;e<=n.length;e++)t.push(e);return t}function Zu(n){const t=[],e=/\S+/g;let A;for(;(A=e.exec(n))!==null;)t.push(A.index+A[0].length);return!t.length&&n.length&&t.push(n.length),t}function ls(n,t,e){for(const A of Array.from(n.childNodes)){if(A.nodeType===Node.TEXT_NODE){const i=A.nodeValue;if(i.trim()===""||e.skip(A.parentElement))continue;const r=e.byWord?Zu(i):Ku(i);t.push({kind:"text",node:A,text:i,steps:r,cost:r.length});continue}A.nodeType===Node.ELEMENT_NODE&&(e.skip(A)||(ju(A)?t.push({kind:"atom",el:A,cost:e.atomCost,display:A.style.display}):ls(A,t,e)))}}class cs{constructor(t,{skipSelector:e=null,byWord:A=!1}={}){this.el=t,this.byWord=A;const i=e?Array.from(t.querySelectorAll(e)):[],r=s=>s?i.some(a=>a===s||a.contains(s)):!1;this.units=[],ls(t,this.units,{skip:r,byWord:A,atomCost:A?1:4}),this.total=this.units.reduce((s,a)=>s+a.cost,0),this.revealed=-1,this.reveal(0)}reveal(t){if(t===this.revealed)return;this.revealed=t;let e=t;for(const A of this.units){if(A.kind==="text"){const i=Math.max(0,Math.min(A.steps.length,e)),r=i===0?0:A.steps[i-1],s=A.text.slice(0,r);A.node.nodeValue!==s&&(A.node.nodeValue=s)}else{const i=e>=A.cost?A.display||"":"none";A.el.style.display!==i&&(A.el.style.display=i)}e-=A.cost}}get done(){return this.revealed>=this.total}}const us=.6;function hs(n,t,e){const A=n.getAttribute(t);if(A===null||A.trim()==="")return e;const i=A.split(",").map(r=>Number.parseFloat(r.trim())).filter(r=>Number.isFinite(r));return i.length?i:e}function Ue(n,t,e){const A=n.getAttribute(t);if(A===null||A.trim()==="")return e;const i=Number.parseFloat(A);return Number.isFinite(i)?i:e}const tA=n=>n<0?0:n>1?1:n,ln=n=>1-Math.pow(1-n,3),Fi=n=>n*n*n,Qu=n=>1+(1.70158+1)*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2);function Ju(n){const t=n.hasAttribute("data-globe-pin"),e=(n.getAttribute("data-anim")||"fade").toLowerCase(),A={el:n,anchored:t,anim:e,lat:Ue(n,"data-lat",0),lng:Ue(n,"data-lng",0),offsetX:Ue(n,"data-offset-x",0),offsetY:Ue(n,"data-offset-y",0),ins:hs(n,"data-in",[0]),outs:n.hasAttribute("data-out")?hs(n,"data-out",[]):[],collapse:(n.getAttribute("data-collapse")||"true").toLowerCase()!=="false",dur:Ue(n,"data-dur",us),outDur:Ue(n,"data-out-dur",Ue(n,"data-dur",us)),growOut:Ue(n,"data-grow-out",Ue(n,"data-grow-from",.6)),wipeFrom:(n.getAttribute("data-wipe-from")||"left").toLowerCase(),typeSpeed:Ue(n,"data-type-speed",26),typer:null,strokes:null,kids:null,kidStep:.12,growFrom:.6,typedCount:-1,hiddenByDisplay:!1,revealDisplay:""};if(n.getAttribute("data-no-wrap")==="true"){n.style.whiteSpace="nowrap",n.style.flexShrink="0";for(const r of Array.from(n.children))r.style.whiteSpace="nowrap",r.style.flexShrink="0"}if(e==="type"){const r=n.getBoundingClientRect();r.height&&(n.style.minHeight=`${Math.ceil(r.height)}px`),n.style.visibility="visible";const s=(n.getAttribute("data-type-by")||"word").toLowerCase()!=="char";A.typer=new cs(n,{skipSelector:n.getAttribute("data-type-skip")||null,byWord:s}),n.hasAttribute("data-type-speed")||(A.typeSpeed=s?4.5:26)}if(e==="grow"){const r=n.getAttribute("data-stagger-target"),s=Array.from(r?n.querySelectorAll(r):n.children);A.kids=s,A.kidStep=Ue(n,"data-stagger",.12),A.growFrom=Ue(n,"data-grow-from",.6);for(const a of s)a.style.willChange="transform, opacity"}if(e==="draw"){const r=n.getAttribute("data-draw-target")||"path";A.strokes=Array.from(n.querySelectorAll(r)).filter(s=>typeof s.getTotalLength=="function").map(s=>{let a=0;try{a=s.getTotalLength()}catch{a=0}return a?(s.style.strokeDasharray=String(a),s.style.strokeDashoffset=String(a),{path:s,length:a}):null}).filter(Boolean)}const i=typeof getComputedStyle=="function"?getComputedStyle(n):null;return i&&i.display==="none"&&(A.hiddenByDisplay=!0,A.revealDisplay=n.getAttribute("data-display")||"block"),n.style.willChange="transform, opacity",A.host=n,t&&n.getAttribute("data-reparent")!=="true"&&(n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.margin="0"),A}function th(n,t){const e=t.ownerDocument;let A=t.querySelector(".globe-overlay-layer");for(const i of n){if(!i.anchored||i.el.getAttribute("data-reparent")!=="true"||i.host!==i.el)continue;A||(A=e.createElement("div"),A.className="globe-overlay-layer",A.style.position="absolute",A.style.inset="0",A.style.pointerEvents="none",A.style.zIndex="45",t.appendChild(A)),i.hiddenByDisplay&&(i.el.style.display=i.revealDisplay);const r=i.el,s=getComputedStyle(r).position;s!=="static"&&(r.dataset.globeAuthoredPosition=s,console.warn("[globe] "+(r.getAttribute("class")||"").split(" ")[0]+" is position:"+s+" in Webflow. An anchored card is positioned by the globe, so that has been reset - remove it in the Designer to avoid surprises.")),r.style.position="static",r.style.top="auto",r.style.right="auto",r.style.bottom="auto",r.style.left="auto",r.style.margin="0",r.style.transform="none",r.style.opacity="1",r.style.visibility="visible";const a=r.offsetWidth,l=r.offsetHeight,o=e.createElement("div");o.className="globe-anchor-slot",o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.margin="0",o.style.willChange="transform, opacity",a&&(o.style.width=`${Math.ceil(a)}px`),l&&(o.style.height=`${Math.ceil(l)}px`),A.appendChild(o),o.appendChild(i.el),i.el.style.willChange="",i.hiddenByDisplay&&(o.style.display="none",i.revealDisplay="block"),i.slotHeight=Math.ceil(l)||0,i.host=o}}function eh(n){const t=n.querySelectorAll('[data-lock-width="true"], [data-lock-height="true"]');for(const e of t){const A=e.getBoundingClientRect?e.getBoundingClientRect():null;A&&(e.getAttribute("data-lock-width")==="true"&&A.width&&(e.style.width=`${Math.ceil(A.width)}px`,e.style.flexGrow="0",e.style.flexShrink="0"),e.getAttribute("data-lock-height")==="true"&&A.height&&(e.style.height=`${Math.ceil(A.height)}px`))}}function Ah(n,t){let e=-1;for(let A=0;A<n.ins.length;A++)t>=n.ins[A]&&(e=A);return e<0?{index:-1,start:n.ins[0]??0,end:n.outs[0]??null}:{index:e,start:n.ins[e],end:n.outs[e]===void 0?null:n.outs[e]}}class nh{constructor(t,e=document){const A=e.querySelectorAll("[data-globe-cue], [data-globe-pin]");eh(e),this.items=Array.from(A).map(Ju),this.stage=t,t&&t.root&&th(this.items,t.box||t.root)}get maxTime(){return this.items.reduce((t,e)=>{const A=e.ins[e.ins.length-1],i=e.outs.length?e.outs[e.outs.length-1]:null,r=Math.max(A,i===null?0:i)+e.dur,s=e.typer?A+e.typer.total/e.typeSpeed:0;return Math.max(t,r,s)},0)}update(t,e){for(const A of this.items)this._updateItem(A,t,e)}_updateItem(t,e,A){const i=Ah(t,e),r=i.index<0?0:tA((e-i.start)/t.dur),s=i.end===null?0:tA((e-i.end)/t.outDur),a=r*(1-s),l=t.host;t.anim==="type"&&this._type(t,e,i.start),t.anim==="draw"&&this._draw(t,r);const o=i.end!==null&&e>=i.end+t.outDur;if(a<=.001){l.style.opacity="0",l.style.pointerEvents="none",t.anim==="wipe"&&(l.style.clipPath="inset(0 100% 0 0)"),(t.hiddenByDisplay||o&&t.collapse)&&(l.style.display="none");return}const c=t.hiddenByDisplay?t.revealDisplay:"";l.style.display!==c&&(l.style.display=c);let u=a,d=t.offsetX,f=t.offsetY,m=1;if(t.anim==="rise")f+=(1-ln(r))*16;else if(t.anim==="pop")m=.86+.14*Qu(r),u=tA(r*1.6)*(1-s);else if(t.anim==="type")u=r>0?1-s:0;else if(t.anim==="draw")u=r>0?1-s:0;else if(t.anim==="wipe"){const _=ln(tA(r)),p=s>0?Fi(s):0,h=Math.max(0,_-p);l.style.clipPath=t.wipeFrom==="right"?`inset(0 0 0 ${(1-h)*100}%)`:`inset(0 ${(1-h)*100}% 0 0)`,u=tA(r/.35)*(1-p)}else if(t.anim==="grow"){const _=ln(tA(r/.5)),p=t.growFrom+(1-t.growFrom)*_;m=s>0?p+(t.growOut-p)*Fi(s):p,u=tA(r/.25)*(1-Fi(s)),this._stagger(t,r,s)}if(t.anchored){const _=A.project(t.lat,t.lng);if(!_.visible){l.style.opacity="0",t.hiddenByDisplay&&(l.style.display="none");return}const p=Math.min(1,_.depth/.12);u*=p;const h=t.el.offsetHeight||t.slotHeight||0;h&&Math.abs(h-t.slotHeight)>.5&&(t.slotHeight=h,l.style.height=`${h}px`),l.style.transform=`translate(${_.x+d}px, ${_.y+f-h}px) translate(-50%, 0) scale(${m})`,t.anim==="grow"&&(l.style.transformOrigin="50% 100%")}else l.style.transform=`translate(${d}px, ${f}px) scale(${m})`,t.anim==="grow"&&(l.style.transformOrigin="50% 100%");l.style.opacity=String(u),l.style.pointerEvents=u>.9?"":"none"}_stagger(t,e,A){if(!t.kids||!t.kids.length)return;const i=t.kidStep;t.kids.forEach((r,s)=>{const a=.35+s*i,l=tA((e-a)/.3),o=ln(l);r.style.opacity=String(o*(1-A)),r.style.transform=`translateY(${(1-o)*8}px)`})}_draw(t,e){if(!t.strokes||!t.strokes.length)return;const A=ln(tA(e));for(const i of t.strokes)i.path.style.strokeDashoffset=String(i.length*(1-A))}_type(t,e,A){if(!t.typer)return;const i=e-A,r=i<=0?0:Math.min(t.typer.total,Math.floor(i*t.typeSpeed));r!==t.typedCount&&(t.typedCount=r,t.typer.reveal(r),t.el.dataset.typing=t.typer.done?"0":"1")}}const Xn=n=>n<0?0:n>1?1:n,qn=(n,t,e)=>n+(t-n)*e;function ds(n,t,e,A){const i=(r,s,a)=>3*r*a*(1-a)*(1-a)+3*s*a*a*(1-a)+a*a*a;return r=>{if(r<=0)return 0;if(r>=1)return 1;let s=0,a=1,l=r;for(let o=0;o<24;o++)l=(s+a)/2,i(n,e,l)<r?s=l:a=l;return i(t,A,l)}}const fs=ds(.45,0,.2,1),Ni=ds(.22,1,.36,1);function Bi(n,t){const e=t.gap-t.peek-t.space;return n<-1?{y:t.gap+t.height+18,s:1,o:0,content:0,z:5}:n===-1?{y:t.gap+t.height-t.peek,s:1,o:t.peekOpacity,content:0,z:6}:n===0?{y:e,s:1,o:1,content:1,z:12,ease:fs,odur:.3,cdelay:.35}:n===1?{y:e-t.lift,s:1,o:0,content:0,z:11,ease:fs,cdur:.5}:{y:e-t.lift,s:1,o:0,content:0,z:0}}function ih(n,t){let e=-1;for(let A=0;A<t.length;A++)n>=t[A]&&(e=A);return e}function rh(n,t,e,A,i){const r=ih(n,e);if(r<0)return Bi(-2,A);const s=Bi(r-1-t,A),a=Bi(r-t,A),l=n-e[r],o=a.ease||Ni,c=o(Xn(l/i)),u=o(Xn(l/(i*(a.odur||1)))),d=Ni(Xn((l-i*(a.cdelay||0))/(i*(a.cdur||1))));return{y:qn(s.y,a.y,c),s:qn(s.s,a.s,c),o:qn(s.o,a.o,u),content:qn(s.content,a.content,d),z:a.z}}const sh=["id","data-globe-cue","data-globe-pin","data-in","data-out","data-dur","data-anim"];function VA(n){for(const t of[n,...n.querySelectorAll("*")])for(const e of sh)t.removeAttribute(e);return n}function Yn(n){return n.style.opacity="1",n.style.visibility="visible",n}function ps(n){for(const t of[n,...n.children])t.style.whiteSpace="nowrap",t.style.flexShrink="0";return n}function WA(n,t,e){n.style[t]!==e&&(n.style[t]=e)}class ah{constructor(t,e=document){if(this.cfg=t,this.cards=[],this.times=[0,...t.cards.map(r=>r.at)],this.template=e.querySelector(t.template),this.profile=e.querySelector(t.profile),!this.template||!this.profile){console.warn("[globe] card stack skipped: "+(this.template?t.profile:t.template)+" matched nothing");return}const A=this.template,i=A.parentElement;getComputedStyle(i).position==="static"&&(i.style.position="relative"),getComputedStyle(this.profile).position==="static"&&(this.profile.style.position="relative"),this.profile.style.zIndex="20",t.width&&(A.style.width=`${t.width}px`),t.minHeight&&(A.style.minHeight=`${t.minHeight}px`),t.cards.forEach((r,s)=>{const a=r.kind==="pref"?this._pref(r):this._prompt(r);if(!a)return;a.classList.add("globe-stack-card"),Object.assign(a.style,{position:"absolute",margin:"0",left:"0",top:"0",transformOrigin:"50% 100%",opacity:"0",visibility:"hidden"}),i.insertBefore(a,A);const l={spec:r,el:a,index:s+1,typer:null,strokes:null};r.kind==="pref"?l.strokes=Array.from(a.querySelectorAll("path")).map(o=>{let c=0;try{c=o.getTotalLength()}catch{c=0}return c?(o.style.strokeDasharray=String(c),{path:o,length:c}):null}).filter(Boolean):l.typer=new cs(a.firstElementChild,{byWord:!0}),this.cards.push(l)}),A.style.visibility="hidden",this._measure(),this._onResize=()=>{this._dirty=!0},window.addEventListener("resize",this._onResize)}get maxTime(){const t=this.cfg.cards[this.cfg.cards.length-1];return t?t.at+this.cfg.dur*1.5:0}_prompt(t){const e=this.template.querySelector(t.from);if(!e)return console.warn(`[globe] card stack: ${t.from} matched nothing, card skipped`),null;const A=VA(this.template.cloneNode(!1)),i=ps(Yn(VA(e.cloneNode(!0))));getComputedStyle(e).display==="none"&&(i.style.display="flex"),A.appendChild(i);const r=this.template.querySelector(this.cfg.search);return r&&A.appendChild(Yn(VA(r.cloneNode(!0)))),A}_pref(t){const e=this.template.querySelector(this.cfg.check),A=this.template.querySelector(this.cfg.text);if(!e||!A)return console.warn(`[globe] card stack: ${e?this.cfg.text:this.cfg.check} matched nothing, card skipped`),null;const i=VA(this.template.cloneNode(!1)),r=Yn(VA(e.cloneNode(!0)));r.style.display="flex";const s=ps(Yn(VA(A.cloneNode(!1))));return s.textContent=t.text,s.style.margin="0",i.append(r,s),i}_measure(){const t=this.template,e=t.offsetTop+t.offsetHeight,A=this.cards[0]&&this.cards[0].el.offsetHeight||t.offsetHeight;this.geo={gap:this.profile.offsetTop-e,height:A,peek:this.cfg.peek,space:this.cfg.space,lift:this.cfg.lift,peekOpacity:this.cfg.peekOpacity};for(const i of this.cards){const r=i.el.offsetHeight||A;i.el.style.left=`${t.offsetLeft}px`,i.el.style.top=`${e-r}px`,i.el.style.width=`${t.offsetWidth}px`}this._dirty=!1}update(t){if(!this.cards.length)return;this._dirty&&this._measure();const e=this.cfg.dur;for(const A of this.cards){const i=rh(t,A.index,this.times,this.geo,e),r=A.el;WA(r,"transform",`translateY(${i.y.toFixed(2)}px) scale(${i.s.toFixed(4)})`),WA(r,"opacity",i.o.toFixed(3)),WA(r,"zIndex",String(i.z)),WA(r,"visibility",i.o<.002?"hidden":"visible");const s=i.content.toFixed(3);for(const l of r.children)WA(l,"opacity",s);const a=t-A.spec.at-e*.35;if(A.typer){const l=a<=0?0:Math.min(A.typer.total,Math.floor(a*this.cfg.typeSpeed));A.typer.reveal(l)}if(A.strokes){const l=Ni(Xn(a/this.cfg.drawDur));for(const o of A.strokes)WA(o.path,"strokeDashoffset",String(o.length*(1-l)))}}}dispose(){window.removeEventListener("resize",this._onResize);for(const t of this.cards)t.el.remove();this.template&&(this.template.style.visibility="")}}const cn=[.6,1.4,1,1.1,1.8],ms=cn.length,gs=n=>n<0?0:n>1?1:n,Ae=(n,t,e)=>n+(t-n)*e,oh=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,Oi=n=>1-Math.pow(1-n,3),he=(n,t,e,A=oh)=>A(gs((n-t)/(e-t)));function _s(n=cn){const t=[0];for(const e of n)t.push(t[t.length-1]+e);return t}function lh(n,t,e=ms){return n>0?0:Math.min(e,1+Math.floor(-n/t))}function ch(n,t,e,A=1){const i=t-n;if(i===0)return n;const r=Math.max(1,Math.abs(i)/1.2)*A;return n+Math.sign(i)*Math.min(Math.abs(i),r*e)}function uh(n,t=cn,e=_s(t)){return t.map((A,i)=>gs((n-e[i])/A))}function vs(n,t=[255,255,255]){const e=/rgba?\(\s*([\d.]+)[ ,]+([\d.]+)[ ,]+([\d.]+)/.exec(n||"");return e?[Number(e[1]),Number(e[2]),Number(e[3])]:t}const xs=_s(cn),hh=32,dh=767,Ms="f2-style",fh=`
.f2-pin{position:sticky;top:0;height:100vh;overflow:hidden}
.f2-track{position:absolute;left:0;top:0;width:0;height:0;z-index:2}
.f2-card{position:absolute!important;left:0!important;top:0!important;margin:0!important;box-sizing:border-box;transform-origin:50% 50%}
.f2-badge{position:absolute;top:12px;right:12px;padding:4px 8px;border-radius:999px;font:600 10px/1 system-ui,-apple-system,"Segoe UI",sans-serif;white-space:nowrap;pointer-events:none;z-index:2}
.f2-badge-disrupted{background:#fde7c4;color:#b8660f}
.f2-badge-confirmed{background:#d9f4e1;color:#23864a;opacity:0}
.f2-soft{background-color:#eeeef3!important}
.f2-soft,.f2-soft *{color:#121216!important}
.f2-ring{position:absolute;inset:-3px;border-radius:999px;z-index:-1;opacity:0;pointer-events:none;background:linear-gradient(90deg,#ff8c51,#f489ad 45%,#9b7cf6);filter:blur(6px)}
.f2-bg{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;max-width:none!important;margin:0!important;object-fit:cover;object-position:50% 100%;z-index:-1;pointer-events:none}
.f2-pill{position:absolute;left:50%;top:50%;box-sizing:border-box;display:flex;align-items:center;gap:2.042em;padding:1.441em;opacity:0;pointer-events:none;font-size:10px;line-height:0}
.f2-avatar{position:relative;flex:0 0 auto;width:7.35em;height:7.35em;border-radius:50%;overflow:hidden;background:#dedeea}
.f2-avatar img{position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover}
.f2-avatar-b{width:7.278em;height:7.278em}
.f2-wave{flex:0 0 auto;width:15.682em;height:5.672em;display:flex;align-items:center;gap:.334em}
.f2-wave i{flex:0 0 auto;width:.667em;border-radius:.417em;background:#000;opacity:.2}
.f2-close{flex:0 0 auto;box-sizing:border-box;width:7.327em;height:7.327em;border-radius:50%;border:.24em solid transparent;display:flex;align-items:center;justify-content:center;background:linear-gradient(#fff,#fff) padding-box,linear-gradient(45deg,#ff8c51 0%,#f489ad 35%,#e388f2 62%,#96cbfa 100%) border-box}
.f2-close svg{width:2.4em;height:2.4em;display:block}
[data-f2-title],[data-f2-title] *{text-align:center!important}
.f2-title-b{position:absolute!important;opacity:0;pointer-events:none;margin:0!important;text-align:center}
.f2-title-b-head{margin:0!important;font-size:20px!important;font-weight:500!important;line-height:1.5!important;color:#000!important;text-align:center!important;max-width:none!important}
.f2-title-b-sub{margin:12px auto 0!important;max-width:448px!important;font-size:18px!important;font-weight:400!important;line-height:1.5!important;color:#000!important;text-align:center!important}
`,Se={count:12,disrupted:4,shift:2,hold:70,textGap:160,titleB:`24/7 human support,
whenever you need it.`,titleBSub:"Our support crew is here to help and available any time, day or night, wherever you are in the world.",disruptedLabel:"Disrupted",confirmedLabel:"Confirmed",softButton:"See alternatives",logos:["","https://cdn.prod.website-files.com/6aa12b65e6dd0b96a2a8345b/6aa827c24e5b37e637d8be28_slotStart%20(1).png","https://cdn.prod.website-files.com/6aa12b65e6dd0b96a2a8345b/6aa827c299c1c34d28a5cffe_slotStart%20(2).png"],avatarA:"https://cdn.prod.website-files.com/6aa12b65e6dd0b96a2a8345b/6aa835df822458297f3c3dd1_man_profile.png",avatarB:"https://cdn.prod.website-files.com/6aa12b65e6dd0b96a2a8345b/6aa3cae176be149882a84d17_5712689%202.png"},un={w:466.45,h:102.32},ph="0 0 0 0.97px rgba(0,0,0,.04), 0 2.92px 7.8px -1.95px rgba(0,0,0,.1), 0 0.97px 0.97px -0.97px rgba(0,0,0,.1)",Ss=[10.01,23.36,33.37,56.72,33.37,23.36,23.36,33.37,40.04,23.36,23.36,16.68,10.01,10.01,10.01,10.01],mh='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 5L19 19M19 5L5 19" stroke="#252525" stroke-width="2.4" stroke-linecap="round"/></svg>',lA=(n,t,e)=>{const A=n.getAttribute(t);return A===null||A.trim()===""?e:A},$n=(n,t,e)=>{const A=parseFloat(n.getAttribute(t));return Number.isFinite(A)?A:e};function gh(n){if(n.getElementById(Ms))return;const t=n.createElement("style");t.id=Ms,t.textContent=fh,n.head.appendChild(t)}let _h=0;function vh(n){const t=`-f2c${++_h}`,e=new Map;for(const A of n.querySelectorAll("[id]")){const i=A.id+t;e.set(A.id,i),A.id=i}if(e.size)for(const A of n.querySelectorAll("*"))for(const i of Array.from(A.attributes)){if(!i.value.includes("#"))continue;let r=i.value;for(const[s,a]of e)r=r.split(`url(#${s})`).join(`url(#${a})`),r===`#${s}`&&(r=`#${a}`);r!==i.value&&A.setAttribute(i.name,r)}}function xh(n){let t=n;for(;t&&t.children.length===1&&t.firstElementChild.tagName==="DIV";){const e=getComputedStyle(t);if(!(e.backgroundImage==="none"&&/^(transparent|rgba\(.*,\s*0\))$/.test(e.backgroundColor)))break;t=t.firstElementChild}return t}function Mh(n){const t=n.querySelector("[data-f2-time]")||n.querySelector('[class*="time_text"]');if(!t)return;const e=n.querySelector('[class*="card_fill"]'),A=e?getComputedStyle(e):null;t.textContent="",Object.assign(t.style,{display:"block",flex:"0 0 auto",width:"2.0625rem",height:A&&parseFloat(A.height)?A.height:"6px",borderRadius:A?A.borderRadius:"3px",backgroundColor:A?A.backgroundColor:"#ececf1"})}function ys(n){return n.querySelector("[data-f2-button]")||n.querySelector('[class*="btn"]')}function Sh(n,t){const e=Array.from(n.querySelectorAll("*")).reverse().find(A=>A.children.length===0&&A.textContent.trim());(e||n).textContent=t}function yh(n,t){n.textContent="",t.split(`
`).forEach((e,A)=>{A&&n.appendChild(n.ownerDocument.createElement("br")),n.appendChild(n.ownerDocument.createTextNode(e))})}class Eh{constructor(t){this.section=t;const e=t.ownerDocument,A=t.querySelector("[data-f2-card]"),i=xh(t.querySelector("[data-f2-panel]"));if(this.ok=!!(i&&A),!this.ok){console.warn("[f2] needs [data-f2-panel] and [data-f2-card] inside [data-f2]");return}gh(e);const r=Math.max(11,Math.round($n(t,"data-f2-count",Se.count))),s=Math.round($n(t,"data-f2-shift",Se.shift));this.opts={count:r,shift:s,disrupted:Se.disrupted,focus:Se.disrupted+s,hold:$n(t,"data-f2-hold",Se.hold),textGap:$n(t,"data-f2-text-gap",Se.textGap),logos:t.hasAttribute("data-f2-logos")?lA(t,"data-f2-logos","").split(",").map(d=>d.trim()).filter(Boolean):Se.logos,avatars:["a","b"].map(d=>this._avatarSource(t,d))};const a=i.getBoundingClientRect(),l=A.getBoundingClientRect();this.ratio=a.height/Math.max(1,a.width),this.cardW=l.width||220,this.cardH=l.height||270,this.cardY=a.height?(l.top+l.height/2-a.top)/a.height:.6,ys(A)||console.warn("[f2] no [data-f2-button] in the card - the glow and hover are skipped");const o=e.createElement("div");for(o.className="f2-pin";t.firstChild;)o.appendChild(t.firstChild);t.appendChild(o),getComputedStyle(t).position==="static"&&(t.style.position="relative"),this.pin=o,this.header=Array.from(o.children).filter(d=>!d.contains(i));const c=i.cloneNode(!1);c.removeAttribute("data-f2-panel"),c.setAttribute("aria-hidden","true"),c.style.visibility="hidden",c.style.height=`${a.height}px`,i.parentNode.insertBefore(c,i),this.slot=c,Object.assign(i.style,{position:"absolute",margin:"0",zIndex:"3",overflow:"hidden",boxSizing:"border-box",maxWidth:"none",maxHeight:"none"}),this.panel=i;const u=i.querySelector("[data-f2-bg]")||Array.from(i.querySelectorAll("img")).find(d=>!A.contains(d));if(u){const d=u.cloneNode(!1);d.removeAttribute("data-f2-bg"),d.removeAttribute("class"),d.removeAttribute("style"),d.className="f2-bg",d.loading="eager",d.alt="",u.style.visibility="hidden",i.prepend(d)}this.titleA=t.querySelector('[data-f2-title="a"]'),this.titleB=t.querySelector('[data-f2-title="b"]'),!this.titleB&&this.titleA&&(this.titleB=this._makeTitleB()),this.titleB&&this.titleB.classList.add("f2-title-b"),this.track=e.createElement("div"),this.track.className="f2-track",i.appendChild(this.track),A.style.display="none",this.cards=[];for(let d=0;d<r;d++)this.cards.push(this._makeCard(A,d));this.play=0,this.last=0,this.rendered=!1,this.reduced=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,this._frame=d=>this.frame(d),this._onResize=()=>this.measure(),this.measure()}_avatarSource(t,e){const A=t.querySelector(`[data-f2-avatar="${e}"]`);return A?(A.remove(),A.removeAttribute("data-f2-avatar"),A.loading="eager",A):lA(t,`data-f2-avatar-${e}`,e==="a"?Se.avatarA:Se.avatarB)}_makeTitleB(){const t=this.titleA,e=t.cloneNode(!0);e.setAttribute("data-f2-title","b");const A=e.querySelector("p,h1,h2,h3,h4,h5,h6")||e;yh(A,lA(this.section,"data-f2-title-b",Se.titleB));const i=A.cloneNode(!1);return A.classList.add("f2-title-b-head"),i.classList.add("f2-title-b-sub"),i.textContent=lA(this.section,"data-f2-title-b-sub",Se.titleBSub),A.after(i),t.after(e),e}_makeCard(t,e){const A=t.ownerDocument,{disrupted:i,focus:r,logos:s,avatars:a}=this.opts,l=t.cloneNode(!0);l.style.display="",l.removeAttribute("data-f2-card"),l.classList.add("f2-card"),vh(l);const o={i:e,el:l,kids:Array.from(l.children),button:ys(l)};if(s.length&&s[e%s.length]){const c=l.querySelector("img");c&&(c.removeAttribute("srcset"),c.loading="eager",c.src=s[e%s.length])}if(e===i){const c=A.createElement("div");if(c.className="f2-badge f2-badge-disrupted",c.textContent=lA(this.section,"data-f2-disrupted-label",Se.disruptedLabel),l.appendChild(c),o.button){o.button.classList.add("f2-soft"),Sh(o.button,lA(this.section,"data-f2-soft-button",Se.softButton));const u=A.createElement("span");u.className="f2-ring",o.button.appendChild(u),o.ring=u}}if(e===i+1){const c=A.createElement("div");c.className="f2-badge f2-badge-confirmed",c.textContent=lA(this.section,"data-f2-confirmed-label",Se.confirmedLabel),l.appendChild(c),o.hint=c}if(e===r){const c=A.createElement("div");c.className="f2-badge f2-badge-confirmed",c.textContent=lA(this.section,"data-f2-confirmed-label",Se.confirmedLabel),l.appendChild(c),o.confirmed=c;const u=A.createElement("div");u.className="f2-pill";const d=(_,p)=>{const h=A.createElement("span");h.className=`f2-avatar f2-avatar-${p}`;let T=_;return typeof _=="string"&&(T=_?A.createElement("img"):null,T&&(T.src=_)),T&&(T.alt="",h.appendChild(T)),h},f=A.createElement("span");f.className="f2-wave";for(let _=0;_<Ss.length;_++)f.appendChild(A.createElement("i"));const m=A.createElement("span");m.className="f2-close",m.innerHTML=mh,u.append(d(a[0],"a"),f,d(a[1],"b"),m),l.appendChild(u),Object.assign(o,{pill:u,wave:f,bars:Array.from(f.children)})}return this.track.appendChild(l),e!==i&&e!==r&&Mh(l),o.button&&getComputedStyle(o.button).position==="static"&&(o.button.style.position="relative"),o.bg=vs(getComputedStyle(l).backgroundColor),o.btnBg=o.button?vs(getComputedStyle(o.button).backgroundColor,[18,18,22]):null,o}measure(){const t=this.pin,e=t.clientWidth,A=document.documentElement.clientHeight||innerHeight;this.slot.style.height=`${this.slot.offsetWidth*this.ratio}px`;const i=t.getBoundingClientRect(),r=this.slot.getBoundingClientRect(),s=Math.max(0,Math.round(r.bottom-i.top+hh-A));t.style.top=`${-s}px`,t.style.height=`${A+s}px`;const a=parseFloat(getComputedStyle(this.slot).borderTopLeftRadius)||22,l=e<=dh?e-24:Math.min(r.width,e-24),o=this.cardW;this.geo={w:o,h:this.cardH,gap:Math.max(14,o*.09),offset:s,small:{x:(e-l)/2,y:r.top-i.top,w:l,h:r.height,r:a},full:{x:12,y:s+12,w:e-24,h:A-24,r:Math.max(a,28)},hold:this.opts.hold/100*A},this.section.style.height=`${A+s+ms*this.geo.hold}px`,this.rendered=!1}start(){addEventListener("resize",this._onResize),addEventListener("load",this._onResize,{once:!0}),requestAnimationFrame(this._frame)}frame(t){requestAnimationFrame(this._frame);const e=this.last?Math.min(.05,(t-this.last)/1e3):0;this.last=t;const A=this.section.getBoundingClientRect(),i=xs[lh(A.top+this.geo.offset,this.geo.hold)],r=this.reduced?i:ch(this.play,i,e),s=r!==this.play;this.play=r,!(!(A.bottom>-50&&A.top<innerHeight+50)&&!s&&this.rendered)&&(this.render(this.play,t),this.rendered=!0)}render(t,e){const A=uh(t,cn,xs),{w:i,h:r,gap:s}=this.geo,{disrupted:a,focus:l,shift:o}=this.opts,c=i+s,u=he(A[1],.05,.6),d=this.geo.small,f=this.geo.full,m=Ae(d.w,f.w,u),_=Ae(d.h,f.h,u);Object.assign(this.panel.style,{left:`${Ae(d.x,f.x,u)}px`,top:`${Ae(d.y,f.y,u)}px`,width:`${m}px`,height:`${_}px`,borderRadius:`${Ae(d.r,f.r,u)}px`});const p=he(A[1],0,.45);for(const nt of this.header)nt.style.opacity=String(1-p),nt.style.transform=`translateY(${-40*p}px)`;const h=he(A[4],.18,.5),T=Math.min(Math.max(64,i*.46)*(un.w/un.h),m-40),E=T/(un.w/un.h),S=Ae(r,E,h),R=he(A[4],0,.3),b=he(A[4],.45,.8),P=this.titleA,N=this.titleB,M=P?P.offsetHeight:0,x=N?N.offsetHeight:M,D=Ae(M,x,he(A[4],.2,.6)),z=this.opts.textGap,G=Math.max(24,(_-(D+z+S))/2),X=P?P.offsetTop:0,Y=Ae(X,G,u);if(P&&(P.style.opacity=String(1-R),P.style.transform=`translateY(${Y-X-12*R}px)`),N&&P){const nt=Math.min(m-48,Math.max(P.offsetWidth,480));Object.assign(N.style,{left:`${(m-nt)/2}px`,top:`${Y}px`,width:`${nt}px`,opacity:String(b),transform:`translateY(${12*(1-b)}px)`})}this.track.style.left=`${m/2}px`,this.track.style.top=`${Ae(_*this.cardY,G+D+z+S/2,u)}px`;const q=he(A[2],0,1),J=he(A[3],0,.3),H=he(A[3],.25,.85,Oi),rt=he(A[4],0,.3),ht=he(A[0],0,1,Oi);for(const nt of this.cards){const Pt=nt.el.style,kt=nt.i-a;let Xt=0,Ot=0,W=0,j=1,ut=0,Et=5;kt===0?(ut=1,Et=20):kt===1&&(Xt=16,Ot=-10,W=6,ut=.5,Et=19);const gt=Math.abs(kt),Bt=he(A[1],.3+.045*gt,.85+.03*gt);Xt=Ae(Xt,kt*c,Bt),Ot=Ae(Ot,0,Bt),W=Ae(W,0,Bt),ut=Ae(ut,1,he(A[1],.3+.045*gt,.6+.045*gt)),Bt>.5&&kt!==0&&(Et=10),nt.hint&&(nt.hint.style.opacity=String(1-Bt)),Xt-=o*c*q;const oe=nt.i-l;oe!==0&&(Xt+=Math.sign(oe)*c*.2*H*(1-rt));let w=i,Kt=r,Dt=null,wt=1,pt=0;if(oe===0){A[2]>0&&(Et=30),j=1+.28*H*(1-rt),W+=-4*H*(1-rt),wt=1-he(A[4],0,.22);const ct=he(A[4],.46,.72);if(w=Ae(Ae(i,i*.9,h),T,ct),Kt=Ae(r,E,h),Dt=h>0?Ae(16,E/2,h):null,pt=ct>.999?1:0,nt.button&&nt.btnBg){const[qt,y,g]=nt.btnBg;nt.button.style.backgroundColor=`rgb(${Ae(qt,110,J)}, ${Ae(y,110,J)}, ${Ae(g,118,J)})`}nt.confirmed&&(nt.confirmed.style.opacity=String(he(A[3],.45,.9)*wt));const Lt=E/un.h*10;Object.assign(nt.pill.style,{fontSize:`${Lt}px`,width:`${T}px`,height:`${E}px`,transform:"translate(-50%, -50%)",opacity:String(pt)}),Pt.overflow=h>0?"hidden":"",Array.from(nt.pill.children).forEach((qt,y)=>{const g=he(A[4],.72+.05*y,.85+.05*y,Oi);qt.style.opacity=String(g),qt.style.transform=`scale(${Ae(.6,1,g)})`});const ne=he(A[4],.8,1);nt.bars.forEach((qt,y)=>{const g=Ss[y]/10,F=.55+.45*Math.abs(Math.sin(e/260+y*.7)*Math.cos(e/610+y*.33)),V=Math.min(5.672,g*Ae(1,F*1.35,ne));qt.style.height=`${Math.max(1.001,Ae(1.001,V,ne))}em`})}else{const ct=he(A[4],.05+.035*Math.abs(oe),.45+.035*Math.abs(oe));ut*=1-ct,Ot+=40*ct}if(kt===0){const ct=he(A[1],.7,1),[Lt,ne,qt]=nt.bg;nt.el.style.backgroundColor=`rgba(${Lt}, ${ne}, ${qt}, ${Ae(1,.6,ct)})`,nt.el.style.boxShadow=ct>0?ph:"",nt.ring&&(nt.ring.style.opacity=String(.45*ht*(1-he(A[1],.4,.8))))}Pt.width=`${w}px`,Pt.height=`${Kt}px`,Pt.borderRadius=Dt===null?"":`${Dt}px`,Pt.transform=`translate(${Xt-w/2}px, ${Ot-Kt/2}px) rotate(${W}deg) scale(${j})`,Pt.opacity=String(ut),Pt.zIndex=String(Et),Pt.visibility=ut<.002?"hidden":"visible";const Jt=String(wt);for(const ct of nt.kids)ct.style.opacity=Jt}}}function wh(n=document){const t=[];for(const e of n.querySelectorAll("[data-f2]")){if(e.dataset.f2Mounted)continue;e.dataset.f2Mounted="1";const A=new Eh(e);A.ok&&(A.start(),t.push(A))}return t.length&&typeof window<"u"&&(window.__f2=t),t}const Es=[{selector:".hero1_profile_wrap",layoutOnly:!0,lockHeight:!0},{selector:".hero1_profile_route_wrap",lat:37.7749,lng:-122.4194,offsetY:-31,reparent:!0,in:4.95,out:8.4,dur:.9,outDur:.32,growOut:.86,anim:"grow"},{selector:".hero1_profile_hotel_wrap",lat:40.7128,lng:-74.006,offsetY:-31,reparent:!0,in:13.35,out:16.5,dur:.9,outDur:.32,growOut:.86,anim:"grow",optional:!0}],Th={template:".hero1_profile_choice_wrap",profile:".hero1_profile_item",check:".hero1_profile_choice_check",text:".hero1_profile_choice_text",search:".hero1_profile_search_wrap",width:450,minHeight:49,dur:.6,peek:12,space:12,lift:30,peekOpacity:.5,typeSpeed:4.5,drawDur:.5,cards:[{at:.9,kind:"prompt",from:".hero1_profile_choice_text_wrap"},{at:7,kind:"pref",text:"No early mornings"},{at:9.1,kind:"pref",text:"Premium economy"},{at:11.7,kind:"prompt",from:".hero1_profile_choice_hotel"},{at:15.2,kind:"pref",text:"Walkable location"},{at:17.1,kind:"pref",text:"Mid-range price"}]},bh=3,Rh={in:"data-in",noWrap:"data-no-wrap",out:"data-out",dur:"data-dur",collapse:"data-collapse",outDur:"data-out-dur",growOut:"data-grow-out",anim:"data-anim",typeSpeed:"data-type-speed",typeSkip:"data-type-skip",typeBy:"data-type-by",display:"data-display",lockWidth:"data-lock-width",lockHeight:"data-lock-height",lat:"data-lat",lng:"data-lng",offsetX:"data-offset-x",offsetY:"data-offset-y",reparent:"data-reparent"};function Ch(n){const t=new Set;for(const e of n)for(const A of e.selector.split(".").filter(Boolean))t.add(A);return t}function Ph(n,t,e){const{cloneFrom:A,appendTo:i,insertAfter:r,text:s,style:a}=n.create,l=i?t.querySelector(i):null,o=r?t.querySelector(r):null;if(!l&&!o)return null;const c=A?t.querySelector(A):null,u=c?c.cloneNode(!1):(t.ownerDocument||document).createElement("div");u.removeAttribute("data-globe-cue"),u.removeAttribute("data-globe-pin");for(const d of["data-in","data-out","data-dur","data-anim"])u.removeAttribute(d);if(e)for(const d of Array.from(u.classList||[]))e.has(d)&&u.classList.remove(d);for(const d of n.selector.split(".").filter(Boolean))u.classList.add(d);return s!==void 0&&(u.textContent=s),a&&Object.assign(u.style,a),u.style.display="none",o&&o.parentNode?o.parentNode.insertBefore(u,o.nextSibling):l.appendChild(u),u}function Dh(n=Es,t=document){const e=[],A=[],i=[],r=Ch(n);for(const s of n){let a=t.querySelectorAll(s.selector);if(!a.length&&s.create){const o=Ph(s,t,r);o&&(a=[o],i.push(s.selector))}if(!a.length){s.optional||A.push(s.selector);continue}let l=0;for(const o of a){const c=s.stagger?l*s.stagger:0;if(l++,!s.layoutOnly){const u=s.lat!==void 0?"data-globe-pin":"data-globe-cue";!o.hasAttribute("data-globe-cue")&&!o.hasAttribute("data-globe-pin")&&o.setAttribute(u,"")}s.style&&Object.assign(o.style,s.style);for(const[u,d]of Object.entries(Rh)){if(s[u]===void 0||o.hasAttribute(d))continue;const f=p=>Math.round((p+c)*1e3)/1e3,m=s[u],_=u==="in"||u==="out"?Array.isArray(m)?m.map(f).join(","):f(m):m;o.setAttribute(d,String(_))}e.push(s.selector)}}return A.length&&console.warn("[globe] sequence selectors matched nothing: "+A.join(", ")+" - a class was probably renamed in Webflow"),{applied:e,missing:A,created:i}}const ws={linear:n=>n,outCubic:n=>1-Math.pow(1-n,3),inOutCubic:n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,outBack:n=>1+(1.70158+1)*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2)},Lh=[{track:"originPin",at:.15,dur:.75,from:0,to:1,ease:"outBack"},{track:"arcDraw",at:.65,dur:1.5,from:0,to:1,ease:"inOutCubic"},{track:"destPin",at:2.05,dur:.75,from:0,to:1,ease:"outBack"},{track:"dropHead",at:2.6,dur:1.8,from:0,to:1,ease:"inOutCubic"},{track:"originPill",at:1.4,dur:.55,from:1,to:0,ease:"inOutCubic"},{track:"originPill",at:5.6,dur:.45,from:0,to:1,ease:"outBack"},{track:"destPill",at:9.8,dur:.55,from:1,to:0,ease:"inOutCubic"},{track:"destPill",at:13.7,dur:.45,from:0,to:1,ease:"outBack"}];class Ih{constructor({route:t,originPin:e,destPin:A,beats:i=Lh,offset:r=0,loop:s=!1,loopDelay:a=2.5}){this.route=t,this.originPin=e,this.destPin=A,this.offset=r,this.beats=r?i.map(l=>({...l,at:l.at+r})):i,this.loop=s,this.loopDelay=a,this.time=0,this.playing=!1,this.duration=this.beats.reduce((l,o)=>Math.max(l,o.at+o.dur),0),this.beats=this.beats.slice().sort((l,o)=>l.at-o.at),this._initial={};for(const l of this.beats)l.track in this._initial||(this._initial[l.track]=l.from);this.values={originPin:0,arcDraw:0,dropHead:0,destPin:0,originPill:1,destPill:1},Object.assign(this.values,this._initial),this._apply()}play(){return this.playing=!0,this}pause(){return this.playing=!1,this}restart(){return this.time=0,this.playing=!0,this}seek(t){return this.time=t,this._sample(),this._apply(),this}complete(){return this.seek(this.duration)}advance(t){if(!this.playing)return this;this.time+=t;const e=this.duration+(this.loop?this.loopDelay:0);return this.time>e&&(this.loop?this.time=0:this.time=this.duration),this._sample(),this._apply(),this}_sample(){for(const t of Object.keys(this._initial))this.values[t]=this._initial[t];for(const t of this.beats){if(this.time<t.at)continue;const e=(this.time-t.at)/t.dur,A=Math.min(1,Math.max(0,e)),i=ws[t.ease]||ws.linear;this.values[t.track]=t.from+(t.to-t.from)*i(A)}}_apply(){const t=this.values;this.route.setProgress(t.arcDraw),this.route.setHead(t.dropHead),this.originPin&&this.originPin.setAmount(t.originPin).setPill(t.originPill),this.destPin&&this.destPin.setAmount(t.destPin).setPill(t.destPill)}}function Uh(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const Fh="2026-09-14 18:42:25",Ts="#globe-root";function bs(){wh(document);const n=document.querySelector(Ts);if(!n){console.warn(`[globe] no ${Ts} on the page`);return}if(n.dataset.globeMounted)return;n.dataset.globeMounted="1";const t=Gu(n),e=Hu(n),A=new zu(n,t),i=e[0],r=e[1];let s=null;if(i&&r){const l=A.addRoute(i,r),o=Yu(A),c=new os(o,i),u=new os(o,r);s=new Ih({route:l,originPin:c,destPin:u,offset:t.globeStart||bh,loop:n.hasAttribute("data-globe-loop")}),Dh(Es,document);const d=new ah(Th,document),f=new nh(A,document),m=Math.max(f.maxTime,d.maxTime);m>s.duration&&(s.duration=m),A.onFrame((_,p)=>{s.advance(p.deltaSeconds),c.update(p),u.update(p),f.update(s.time,p),d.update(s.time)}),window.__globeOverlays=f,window.__globeStack=d,Uh()?s.complete():s.play()}A.start(),(new URLSearchParams(location.search).has("debug")||n.hasAttribute("data-globe-debug"))&&Vu(A),window.__globe={stage:A,layout:t,places:e,flow:s},window.__globeReport=()=>{const l=A.globeCam,o=n.getBoundingClientRect(),c=A.box.getBoundingClientRect(),u=[];let d=n.parentElement;for(;d&&d!==document.documentElement;){const m=getComputedStyle(d);(m.overflowX!=="visible"||m.overflowY!=="visible")&&u.push((d.getAttribute("class")||d.tagName)+" ("+Math.round(d.getBoundingClientRect().width)+"px)"),d=d.parentElement}const f={build:Fh,viewport:document.documentElement.clientWidth,attributesSeen:Array.from(n.attributes).filter(m=>m.name.startsWith("data-")).map(m=>m.name+(m.value?'="'+m.value+'"':"")),sizedBy:t.fitRoute>0?"fit-route (fixed)":t.hasRefWidth?"ref-width (fixed)":"container width (SHRINKS)",radiusPx:Math.round(l.radiusPx),globeDiameter:Math.round(l.radiusPx*2),containerWidth:Math.round(o.width),canvasBoxWidth:Math.round(c.width),canvasEscapedTo:A.box.parentElement===n?"not moved":A.box.parentElement.getAttribute("class")||A.box.parentElement.tagName,clippingAncestors:u.length?u:"none",apexClearance:t.apexClearance,refWidth:t.hasRefWidth?t.refWidth:"NOT SET",radiusScale:t.radiusScale,mobileScale:t.mobileScale,mobileBelow:t.mobileBelow,mobileActive:document.documentElement.clientWidth<t.mobileBelow,anchoredCards:(window.__globeOverlays?window.__globeOverlays.items:[]).filter(m=>m.anchored).map(m=>({cls:(m.el.getAttribute("class")||"").split(" ")[0],lat:m.lat,lng:m.lng,offsetY:m.offsetY,inSlot:m.host!==m.el,slotWidth:m.host!==m.el?m.host.style.width:"n/a",slotHeight:m.host!==m.el?m.host.style.height:"n/a",cardWidth:m.el.offsetWidth,cardHeight:m.el.offsetHeight,authoredPosition:m.el.dataset.globeAuthoredPosition||"static",sizeMismatch:m.host!==m.el&&(Math.abs(m.el.offsetWidth-parseFloat(m.host.style.width||0))>2||Math.abs(m.el.offsetHeight-parseFloat(m.host.style.height||0))>2)}))};return console.log("%c[globe report]","font-weight:bold",f),f}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",bs,{once:!0}):bs()})();
