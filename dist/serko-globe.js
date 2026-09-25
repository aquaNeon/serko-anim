(function(){"use strict";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ie="srgb",EA="srgb-linear",mn="linear",Zt="srgb",Yi="300 es";class bA{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const A=this._listeners;A[t]===void 0&&(A[t]=[]),A[t].indexOf(e)===-1&&A[t].push(e)}hasEventListener(t,e){const A=this._listeners;return A===void 0?!1:A[t]!==void 0&&A[t].indexOf(e)!==-1}removeEventListener(t,e){const A=this._listeners;if(A===void 0)return;const i=A[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const A=e[t.type];if(A!==void 0){t.target=this;const i=A.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}}const _e=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Qn=Math.PI/180,Jn=180/Math.PI;function YA(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,A=Math.random()*4294967295|0;return(_e[n&255]+_e[n>>8&255]+_e[n>>16&255]+_e[n>>24&255]+"-"+_e[t&255]+_e[t>>8&255]+"-"+_e[t>>16&15|64]+_e[t>>24&255]+"-"+_e[e&63|128]+_e[e>>8&255]+"-"+_e[e>>16&255]+_e[e>>24&255]+_e[A&255]+_e[A>>8&255]+_e[A>>16&255]+_e[A>>24&255]).toLowerCase()}function Ht(n,t,e){return Math.max(t,Math.min(e,n))}function Bs(n,t){return(n%t+t)%t}function ti(n,t,e){return(1-e)*n+e*t}function $A(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ee(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Kt{constructor(t=0,e=0){Kt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,A=this.y,i=t.elements;return this.x=i[0]*e+i[3]*A+i[6],this.y=i[1]*e+i[4]*A+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this}clampLength(t,e){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Ht(A,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const A=this.dot(t)/e;return Math.acos(Ht(A,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,A=this.y-t.y;return e*e+A*A}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,A){return this.x=t.x+(e.x-t.x)*A,this.y=t.y+(e.y-t.y)*A,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const A=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*A-s*i+t.x,this.y=r*i+s*A+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jA{constructor(t=0,e=0,A=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=A,this._w=i}static slerpFlat(t,e,A,i,r,s,a){let o=A[i+0],l=A[i+1],c=A[i+2],u=A[i+3];const d=r[s+0],f=r[s+1],m=r[s+2],_=r[s+3];if(a===0){t[e+0]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u;return}if(a===1){t[e+0]=d,t[e+1]=f,t[e+2]=m,t[e+3]=_;return}if(u!==_||o!==d||l!==f||c!==m){let p=1-a;const h=o*d+l*f+c*m+u*_,w=h>=0?1:-1,E=1-h*h;if(E>Number.EPSILON){const D=Math.sqrt(E),T=Math.atan2(D,h*w);p=Math.sin(p*T)/D,a=Math.sin(a*T)/D}const S=a*w;if(o=o*p+d*S,l=l*p+f*S,c=c*p+m*S,u=u*p+_*S,p===1-a){const D=1/Math.sqrt(o*o+l*l+c*c+u*u);o*=D,l*=D,c*=D,u*=D}}t[e]=o,t[e+1]=l,t[e+2]=c,t[e+3]=u}static multiplyQuaternionsFlat(t,e,A,i,r,s){const a=A[i],o=A[i+1],l=A[i+2],c=A[i+3],u=r[s],d=r[s+1],f=r[s+2],m=r[s+3];return t[e]=a*m+c*u+o*f-l*d,t[e+1]=o*m+c*d+l*u-a*f,t[e+2]=l*m+c*f+a*d-o*u,t[e+3]=c*m-a*u-o*d-l*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,A,i){return this._x=t,this._y=e,this._z=A,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const A=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,o=Math.sin,l=a(A/2),c=a(i/2),u=a(r/2),d=o(A/2),f=o(i/2),m=o(r/2);switch(s){case"XYZ":this._x=d*c*u+l*f*m,this._y=l*f*u-d*c*m,this._z=l*c*m+d*f*u,this._w=l*c*u-d*f*m;break;case"YXZ":this._x=d*c*u+l*f*m,this._y=l*f*u-d*c*m,this._z=l*c*m-d*f*u,this._w=l*c*u+d*f*m;break;case"ZXY":this._x=d*c*u-l*f*m,this._y=l*f*u+d*c*m,this._z=l*c*m+d*f*u,this._w=l*c*u-d*f*m;break;case"ZYX":this._x=d*c*u-l*f*m,this._y=l*f*u+d*c*m,this._z=l*c*m-d*f*u,this._w=l*c*u+d*f*m;break;case"YZX":this._x=d*c*u+l*f*m,this._y=l*f*u+d*c*m,this._z=l*c*m-d*f*u,this._w=l*c*u-d*f*m;break;case"XZY":this._x=d*c*u-l*f*m,this._y=l*f*u-d*c*m,this._z=l*c*m+d*f*u,this._w=l*c*u+d*f*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const A=e/2,i=Math.sin(A);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(A),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,A=e[0],i=e[4],r=e[8],s=e[1],a=e[5],o=e[9],l=e[2],c=e[6],u=e[10],d=A+a+u;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(c-o)*f,this._y=(r-l)*f,this._z=(s-i)*f}else if(A>a&&A>u){const f=2*Math.sqrt(1+A-a-u);this._w=(c-o)/f,this._x=.25*f,this._y=(i+s)/f,this._z=(r+l)/f}else if(a>u){const f=2*Math.sqrt(1+a-A-u);this._w=(r-l)/f,this._x=(i+s)/f,this._y=.25*f,this._z=(o+c)/f}else{const f=2*Math.sqrt(1+u-A-a);this._w=(s-i)/f,this._x=(r+l)/f,this._y=(o+c)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let A=t.dot(e)+1;return A<1e-8?(A=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=A):(this._x=0,this._y=-t.z,this._z=t.y,this._w=A)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=A),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ht(this.dot(t),-1,1)))}rotateTowards(t,e){const A=this.angleTo(t);if(A===0)return this;const i=Math.min(1,e/A);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const A=t._x,i=t._y,r=t._z,s=t._w,a=e._x,o=e._y,l=e._z,c=e._w;return this._x=A*c+s*a+i*l-r*o,this._y=i*c+s*o+r*a-A*l,this._z=r*c+s*l+A*o-i*a,this._w=s*c-A*a-i*o-r*l,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const A=this._x,i=this._y,r=this._z,s=this._w;let a=s*t._w+A*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=A,this._y=i,this._z=r,this;const o=1-a*a;if(o<=Number.EPSILON){const f=1-e;return this._w=f*s+e*this._w,this._x=f*A+e*this._x,this._y=f*i+e*this._y,this._z=f*r+e*this._z,this.normalize(),this}const l=Math.sqrt(o),c=Math.atan2(l,a),u=Math.sin((1-e)*c)/l,d=Math.sin(e*c)/l;return this._w=s*u+this._w*d,this._x=A*u+this._x*d,this._y=i*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,A){return this.copy(t).slerp(e,A)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),A=Math.random(),i=Math.sqrt(1-A),r=Math.sqrt(A);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,A=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=A}set(t,e,A){return A===void 0&&(A=this.z),this.x=t,this.y=e,this.z=A,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion($i.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion($i.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,A=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*A+r[6]*i,this.y=r[1]*e+r[4]*A+r[7]*i,this.z=r[2]*e+r[5]*A+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,A=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*A+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*A+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*A+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*A+r[10]*i+r[14])*s,this}applyQuaternion(t){const e=this.x,A=this.y,i=this.z,r=t.x,s=t.y,a=t.z,o=t.w,l=2*(s*i-a*A),c=2*(a*e-r*i),u=2*(r*A-s*e);return this.x=e+o*l+s*u-a*c,this.y=A+o*c+a*l-r*u,this.z=i+o*u+r*c-s*l,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,A=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*A+r[8]*i,this.y=r[1]*e+r[5]*A+r[9]*i,this.z=r[2]*e+r[6]*A+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this}clampLength(t,e){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Ht(A,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,A){return this.x=t.x+(e.x-t.x)*A,this.y=t.y+(e.y-t.y)*A,this.z=t.z+(e.z-t.z)*A,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const A=t.x,i=t.y,r=t.z,s=e.x,a=e.y,o=e.z;return this.x=i*o-r*a,this.y=r*s-A*o,this.z=A*a-i*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const A=t.dot(this)/e;return this.copy(t).multiplyScalar(A)}projectOnPlane(t){return ei.copy(this).projectOnVector(t),this.sub(ei)}reflect(t){return this.sub(ei.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const A=this.dot(t)/e;return Math.acos(Ht(A,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,A=this.y-t.y,i=this.z-t.z;return e*e+A*A+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,A){const i=Math.sin(e)*t;return this.x=i*Math.sin(A),this.y=Math.cos(e)*t,this.z=i*Math.cos(A),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,A){return this.x=t*Math.sin(e),this.y=A,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),A=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=A,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,A=Math.sqrt(1-e*e);return this.x=A*Math.cos(t),this.y=e,this.z=A*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ei=new U,$i=new jA;class Ut{constructor(t,e,A,i,r,s,a,o,l){Ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,A,i,r,s,a,o,l)}set(t,e,A,i,r,s,a,o,l){const c=this.elements;return c[0]=t,c[1]=i,c[2]=a,c[3]=e,c[4]=r,c[5]=o,c[6]=A,c[7]=s,c[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,A=t.elements;return e[0]=A[0],e[1]=A[1],e[2]=A[2],e[3]=A[3],e[4]=A[4],e[5]=A[5],e[6]=A[6],e[7]=A[7],e[8]=A[8],this}extractBasis(t,e,A){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),A.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const A=t.elements,i=e.elements,r=this.elements,s=A[0],a=A[3],o=A[6],l=A[1],c=A[4],u=A[7],d=A[2],f=A[5],m=A[8],_=i[0],p=i[3],h=i[6],w=i[1],E=i[4],S=i[7],D=i[2],T=i[5],C=i[8];return r[0]=s*_+a*w+o*D,r[3]=s*p+a*E+o*T,r[6]=s*h+a*S+o*C,r[1]=l*_+c*w+u*D,r[4]=l*p+c*E+u*T,r[7]=l*h+c*S+u*C,r[2]=d*_+f*w+m*D,r[5]=d*p+f*E+m*T,r[8]=d*h+f*S+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],A=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8];return e*s*c-e*a*l-A*r*c+A*a*o+i*r*l-i*s*o}invert(){const t=this.elements,e=t[0],A=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=c*s-a*l,d=a*o-c*r,f=l*r-s*o,m=e*u+A*d+i*f;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=u*_,t[1]=(i*l-c*A)*_,t[2]=(a*A-i*s)*_,t[3]=d*_,t[4]=(c*e-i*o)*_,t[5]=(i*r-a*e)*_,t[6]=f*_,t[7]=(A*o-l*e)*_,t[8]=(s*e-A*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,A,i,r,s,a){const o=Math.cos(r),l=Math.sin(r);return this.set(A*o,A*l,-A*(o*s+l*a)+s+t,-i*l,i*o,-i*(-l*s+o*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Ai.makeScale(t,e)),this}rotate(t){return this.premultiply(Ai.makeRotation(-t)),this}translate(t,e){return this.premultiply(Ai.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),A=Math.sin(t);return this.set(e,-A,0,A,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,A=t.elements;for(let i=0;i<9;i++)if(e[i]!==A[i])return!1;return!0}fromArray(t,e=0){for(let A=0;A<9;A++)this.elements[A]=t[A+e];return this}toArray(t=[],e=0){const A=this.elements;return t[e]=A[0],t[e+1]=A[1],t[e+2]=A[2],t[e+3]=A[3],t[e+4]=A[4],t[e+5]=A[5],t[e+6]=A[6],t[e+7]=A[7],t[e+8]=A[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Ai=new Ut;function ji(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function gn(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Os(){const n=gn("canvas");return n.style.display="block",n}const Ki={};function KA(n){n in Ki||(Ki[n]=!0,console.warn(n))}function zs(n,t,e){return new Promise(function(A,i){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:A()}}setTimeout(r,e)})}const Zi=new Ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qi=new Ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Hs(){const n={enabled:!0,workingColorSpace:EA,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===Zt&&(i.r=$e(i.r),i.g=$e(i.g),i.b=$e(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===Zt&&(i.r=wA(i.r),i.g=wA(i.g),i.b=wA(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?mn:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return KA("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return KA("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],A=[.3127,.329];return n.define({[EA]:{primaries:t,whitePoint:A,transfer:mn,toXYZ:Zi,fromXYZ:Qi,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ie},outputColorSpaceConfig:{drawingBufferColorSpace:Ie}},[Ie]:{primaries:t,whitePoint:A,transfer:Zt,toXYZ:Zi,fromXYZ:Qi,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ie}}}),n}const Wt=Hs();function $e(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function wA(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let TA;class Gs{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let A;if(t instanceof HTMLCanvasElement)A=t;else{TA===void 0&&(TA=gn("canvas")),TA.width=t.width,TA.height=t.height;const i=TA.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),A=TA}return A.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=gn("canvas");e.width=t.width,e.height=t.height;const A=e.getContext("2d");A.drawImage(t,0,0,t.width,t.height);const i=A.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=$e(r[s]/255)*255;return A.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let A=0;A<e.length;A++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[A]=Math.floor($e(e[A]/255)*255):e[A]=$e(e[A]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let ks=0;class ni{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ks++}),this.uuid=YA(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const A={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(ii(i[s].image)):r.push(ii(i[s]))}else r=ii(i);A.url=r}return e||(t.images[this.uuid]=A),A}}function ii(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Gs.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Vs=0;const ri=new U;class be extends bA{constructor(t=be.DEFAULT_IMAGE,e=be.DEFAULT_MAPPING,A=1001,i=1001,r=1006,s=1008,a=1023,o=1009,l=be.DEFAULT_ANISOTROPY,c=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Vs++}),this.uuid=YA(),this.name="",this.source=new ni(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=A,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=o,this.offset=new Kt(0,0),this.repeat=new Kt(1,1),this.center=new Kt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=c,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(ri).x}get height(){return this.source.getSize(ri).y}get depth(){return this.source.getSize(ri).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const A=t[e];if(A===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&A&&i.isVector2&&A.isVector2||i&&A&&i.isVector3&&A.isVector3||i&&A&&i.isMatrix3&&A.isMatrix3?i.copy(A):this[e]=A}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const A={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(A.userData=this.userData),e||(t.textures[this.uuid]=A),A}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}be.DEFAULT_IMAGE=null,be.DEFAULT_MAPPING=300,be.DEFAULT_ANISOTROPY=1;class ce{constructor(t=0,e=0,A=0,i=1){ce.prototype.isVector4=!0,this.x=t,this.y=e,this.z=A,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,A,i){return this.x=t,this.y=e,this.z=A,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,A=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*A+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*A+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*A+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*A+s[11]*i+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,A,i,r;const o=t.elements,l=o[0],c=o[4],u=o[8],d=o[1],f=o[5],m=o[9],_=o[2],p=o[6],h=o[10];if(Math.abs(c-d)<.01&&Math.abs(u-_)<.01&&Math.abs(m-p)<.01){if(Math.abs(c+d)<.1&&Math.abs(u+_)<.1&&Math.abs(m+p)<.1&&Math.abs(l+f+h-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const E=(l+1)/2,S=(f+1)/2,D=(h+1)/2,T=(c+d)/4,C=(u+_)/4,N=(m+p)/4;return E>S&&E>D?E<.01?(A=0,i=.707106781,r=.707106781):(A=Math.sqrt(E),i=T/A,r=C/A):S>D?S<.01?(A=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),A=T/i,r=N/i):D<.01?(A=.707106781,i=.707106781,r=0):(r=Math.sqrt(D),A=C/r,i=N/r),this.set(A,i,r,e),this}let w=Math.sqrt((p-m)*(p-m)+(u-_)*(u-_)+(d-c)*(d-c));return Math.abs(w)<.001&&(w=1),this.x=(p-m)/w,this.y=(u-_)/w,this.z=(d-c)/w,this.w=Math.acos((l+f+h-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ht(this.x,t.x,e.x),this.y=Ht(this.y,t.y,e.y),this.z=Ht(this.z,t.z,e.z),this.w=Ht(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ht(this.x,t,e),this.y=Ht(this.y,t,e),this.z=Ht(this.z,t,e),this.w=Ht(this.w,t,e),this}clampLength(t,e){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Ht(A,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,A){return this.x=t.x+(e.x-t.x)*A,this.y=t.y+(e.y-t.y)*A,this.z=t.z+(e.z-t.z)*A,this.w=t.w+(e.w-t.w)*A,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ws extends bA{constructor(t=1,e=1,A={}){super(),A=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},A),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=A.depth,this.scissor=new ce(0,0,t,e),this.scissorTest=!1,this.viewport=new ce(0,0,t,e);const i={width:t,height:e,depth:A.depth},r=new be(i);this.textures=[];const s=A.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(A),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=A.depthTexture,this.samples=A.samples,this.multiview=A.multiview}_setTextureOptions(t={}){const e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let A=0;A<this.textures.length;A++)this.textures[A].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,A=1){if(this.width!==t||this.height!==e||this.depth!==A){this.width=t,this.height=e,this.depth=A;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=A,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,A=t.textures.length;e<A;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new ni(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hA extends Ws{constructor(t=1,e=1,A={}){super(t,e,A),this.isWebGLRenderTarget=!0}}class Ji extends be{constructor(t=null,e=1,A=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:A,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Xs extends be{constructor(t=null,e=1,A=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:A,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ZA{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,A=t.length;e<A;e+=3)this.expandByPoint(Be.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,A=t.count;e<A;e++)this.expandByPoint(Be.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,A=t.length;e<A;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const A=Be.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(A),this.max.copy(t).add(A),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const A=t.geometry;if(A!==void 0){const r=A.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,Be):Be.fromBufferAttribute(r,s),Be.applyMatrix4(t.matrixWorld),this.expandByPoint(Be);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),_n.copy(t.boundingBox)):(A.boundingBox===null&&A.computeBoundingBox(),_n.copy(A.boundingBox)),_n.applyMatrix4(t.matrixWorld),this.union(_n)}const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Be),Be.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,A;return t.normal.x>0?(e=t.normal.x*this.min.x,A=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,A=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,A+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,A+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,A+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,A+=t.normal.z*this.min.z),e<=-t.constant&&A>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(QA),vn.subVectors(this.max,QA),RA.subVectors(t.a,QA),CA.subVectors(t.b,QA),PA.subVectors(t.c,QA),rA.subVectors(CA,RA),sA.subVectors(PA,CA),dA.subVectors(RA,PA);let e=[0,-rA.z,rA.y,0,-sA.z,sA.y,0,-dA.z,dA.y,rA.z,0,-rA.x,sA.z,0,-sA.x,dA.z,0,-dA.x,-rA.y,rA.x,0,-sA.y,sA.x,0,-dA.y,dA.x,0];return!si(e,RA,CA,PA,vn)||(e=[1,0,0,0,1,0,0,0,1],!si(e,RA,CA,PA,vn))?!1:(xn.crossVectors(rA,sA),e=[xn.x,xn.y,xn.z],si(e,RA,CA,PA,vn))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Be).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Be).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(je[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),je[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),je[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),je[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),je[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),je[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),je[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),je[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(je),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const je=[new U,new U,new U,new U,new U,new U,new U,new U],Be=new U,_n=new ZA,RA=new U,CA=new U,PA=new U,rA=new U,sA=new U,dA=new U,QA=new U,vn=new U,xn=new U,fA=new U;function si(n,t,e,A,i){for(let r=0,s=n.length-3;r<=s;r+=3){fA.fromArray(n,r);const a=i.x*Math.abs(fA.x)+i.y*Math.abs(fA.y)+i.z*Math.abs(fA.z),o=t.dot(fA),l=e.dot(fA),c=A.dot(fA);if(Math.max(-Math.max(o,l,c),Math.min(o,l,c))>a)return!1}return!0}const qs=new ZA,JA=new U,ai=new U;class tn{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const A=this.center;e!==void 0?A.copy(e):qs.setFromPoints(t).getCenter(A);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,A.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const A=this.center.distanceToSquared(t);return e.copy(t),A>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;JA.subVectors(t,this.center);const e=JA.lengthSq();if(e>this.radius*this.radius){const A=Math.sqrt(e),i=(A-this.radius)*.5;this.center.addScaledVector(JA,i/A),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(ai.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(JA.copy(t.center).add(ai)),this.expandByPoint(JA.copy(t.center).sub(ai))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Ke=new U,oi=new U,Mn=new U,aA=new U,li=new U,Sn=new U,ci=new U;class ui{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Ke)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const A=e.dot(this.direction);return A<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,A)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Ke.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Ke.copy(this.origin).addScaledVector(this.direction,e),Ke.distanceToSquared(t))}distanceSqToSegment(t,e,A,i){oi.copy(t).add(e).multiplyScalar(.5),Mn.copy(e).sub(t).normalize(),aA.copy(this.origin).sub(oi);const r=t.distanceTo(e)*.5,s=-this.direction.dot(Mn),a=aA.dot(this.direction),o=-aA.dot(Mn),l=aA.lengthSq(),c=Math.abs(1-s*s);let u,d,f,m;if(c>0)if(u=s*o-a,d=s*a-o,m=r*c,u>=0)if(d>=-m)if(d<=m){const _=1/c;u*=_,d*=_,f=u*(u+s*d+2*a)+d*(s*u+d+2*o)+l}else d=r,u=Math.max(0,-(s*d+a)),f=-u*u+d*(d+2*o)+l;else d=-r,u=Math.max(0,-(s*d+a)),f=-u*u+d*(d+2*o)+l;else d<=-m?(u=Math.max(0,-(-s*r+a)),d=u>0?-r:Math.min(Math.max(-r,-o),r),f=-u*u+d*(d+2*o)+l):d<=m?(u=0,d=Math.min(Math.max(-r,-o),r),f=d*(d+2*o)+l):(u=Math.max(0,-(s*r+a)),d=u>0?r:Math.min(Math.max(-r,-o),r),f=-u*u+d*(d+2*o)+l);else d=s>0?-r:r,u=Math.max(0,-(s*d+a)),f=-u*u+d*(d+2*o)+l;return A&&A.copy(this.origin).addScaledVector(this.direction,u),i&&i.copy(oi).addScaledVector(Mn,d),f}intersectSphere(t,e){Ke.subVectors(t.center,this.origin);const A=Ke.dot(this.direction),i=Ke.dot(Ke)-A*A,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=A-s,o=A+s;return o<0?null:a<0?this.at(o,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const A=-(this.origin.dot(t.normal)+t.constant)/e;return A>=0?A:null}intersectPlane(t,e){const A=this.distanceToPlane(t);return A===null?null:this.at(A,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let A,i,r,s,a,o;const l=1/this.direction.x,c=1/this.direction.y,u=1/this.direction.z,d=this.origin;return l>=0?(A=(t.min.x-d.x)*l,i=(t.max.x-d.x)*l):(A=(t.max.x-d.x)*l,i=(t.min.x-d.x)*l),c>=0?(r=(t.min.y-d.y)*c,s=(t.max.y-d.y)*c):(r=(t.max.y-d.y)*c,s=(t.min.y-d.y)*c),A>s||r>i||((r>A||isNaN(A))&&(A=r),(s<i||isNaN(i))&&(i=s),u>=0?(a=(t.min.z-d.z)*u,o=(t.max.z-d.z)*u):(a=(t.max.z-d.z)*u,o=(t.min.z-d.z)*u),A>o||a>i)||((a>A||A!==A)&&(A=a),(o<i||i!==i)&&(i=o),i<0)?null:this.at(A>=0?A:i,e)}intersectsBox(t){return this.intersectBox(t,Ke)!==null}intersectTriangle(t,e,A,i,r){li.subVectors(e,t),Sn.subVectors(A,t),ci.crossVectors(li,Sn);let s=this.direction.dot(ci),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;aA.subVectors(this.origin,t);const o=a*this.direction.dot(Sn.crossVectors(aA,Sn));if(o<0)return null;const l=a*this.direction.dot(li.cross(aA));if(l<0||o+l>s)return null;const c=-a*aA.dot(ci);return c<0?null:this.at(c/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ue{constructor(t,e,A,i,r,s,a,o,l,c,u,d,f,m,_,p){ue.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,A,i,r,s,a,o,l,c,u,d,f,m,_,p)}set(t,e,A,i,r,s,a,o,l,c,u,d,f,m,_,p){const h=this.elements;return h[0]=t,h[4]=e,h[8]=A,h[12]=i,h[1]=r,h[5]=s,h[9]=a,h[13]=o,h[2]=l,h[6]=c,h[10]=u,h[14]=d,h[3]=f,h[7]=m,h[11]=_,h[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ue().fromArray(this.elements)}copy(t){const e=this.elements,A=t.elements;return e[0]=A[0],e[1]=A[1],e[2]=A[2],e[3]=A[3],e[4]=A[4],e[5]=A[5],e[6]=A[6],e[7]=A[7],e[8]=A[8],e[9]=A[9],e[10]=A[10],e[11]=A[11],e[12]=A[12],e[13]=A[13],e[14]=A[14],e[15]=A[15],this}copyPosition(t){const e=this.elements,A=t.elements;return e[12]=A[12],e[13]=A[13],e[14]=A[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,A){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),A.setFromMatrixColumn(this,2),this}makeBasis(t,e,A){return this.set(t.x,e.x,A.x,0,t.y,e.y,A.y,0,t.z,e.z,A.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,A=t.elements,i=1/DA.setFromMatrixColumn(t,0).length(),r=1/DA.setFromMatrixColumn(t,1).length(),s=1/DA.setFromMatrixColumn(t,2).length();return e[0]=A[0]*i,e[1]=A[1]*i,e[2]=A[2]*i,e[3]=0,e[4]=A[4]*r,e[5]=A[5]*r,e[6]=A[6]*r,e[7]=0,e[8]=A[8]*s,e[9]=A[9]*s,e[10]=A[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,A=t.x,i=t.y,r=t.z,s=Math.cos(A),a=Math.sin(A),o=Math.cos(i),l=Math.sin(i),c=Math.cos(r),u=Math.sin(r);if(t.order==="XYZ"){const d=s*c,f=s*u,m=a*c,_=a*u;e[0]=o*c,e[4]=-o*u,e[8]=l,e[1]=f+m*l,e[5]=d-_*l,e[9]=-a*o,e[2]=_-d*l,e[6]=m+f*l,e[10]=s*o}else if(t.order==="YXZ"){const d=o*c,f=o*u,m=l*c,_=l*u;e[0]=d+_*a,e[4]=m*a-f,e[8]=s*l,e[1]=s*u,e[5]=s*c,e[9]=-a,e[2]=f*a-m,e[6]=_+d*a,e[10]=s*o}else if(t.order==="ZXY"){const d=o*c,f=o*u,m=l*c,_=l*u;e[0]=d-_*a,e[4]=-s*u,e[8]=m+f*a,e[1]=f+m*a,e[5]=s*c,e[9]=_-d*a,e[2]=-s*l,e[6]=a,e[10]=s*o}else if(t.order==="ZYX"){const d=s*c,f=s*u,m=a*c,_=a*u;e[0]=o*c,e[4]=m*l-f,e[8]=d*l+_,e[1]=o*u,e[5]=_*l+d,e[9]=f*l-m,e[2]=-l,e[6]=a*o,e[10]=s*o}else if(t.order==="YZX"){const d=s*o,f=s*l,m=a*o,_=a*l;e[0]=o*c,e[4]=_-d*u,e[8]=m*u+f,e[1]=u,e[5]=s*c,e[9]=-a*c,e[2]=-l*c,e[6]=f*u+m,e[10]=d-_*u}else if(t.order==="XZY"){const d=s*o,f=s*l,m=a*o,_=a*l;e[0]=o*c,e[4]=-u,e[8]=l*c,e[1]=d*u+_,e[5]=s*c,e[9]=f*u-m,e[2]=m*u-f,e[6]=a*c,e[10]=_*u+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Ys,t,$s)}lookAt(t,e,A){const i=this.elements;return Te.subVectors(t,e),Te.lengthSq()===0&&(Te.z=1),Te.normalize(),oA.crossVectors(A,Te),oA.lengthSq()===0&&(Math.abs(A.z)===1?Te.x+=1e-4:Te.z+=1e-4,Te.normalize(),oA.crossVectors(A,Te)),oA.normalize(),yn.crossVectors(Te,oA),i[0]=oA.x,i[4]=yn.x,i[8]=Te.x,i[1]=oA.y,i[5]=yn.y,i[9]=Te.y,i[2]=oA.z,i[6]=yn.z,i[10]=Te.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const A=t.elements,i=e.elements,r=this.elements,s=A[0],a=A[4],o=A[8],l=A[12],c=A[1],u=A[5],d=A[9],f=A[13],m=A[2],_=A[6],p=A[10],h=A[14],w=A[3],E=A[7],S=A[11],D=A[15],T=i[0],C=i[4],N=i[8],M=i[12],x=i[1],P=i[5],z=i[9],G=i[13],X=i[2],Y=i[6],W=i[10],Q=i[14],H=i[3],it=i[7],ct=i[11],nt=i[15];return r[0]=s*T+a*x+o*X+l*H,r[4]=s*C+a*P+o*Y+l*it,r[8]=s*N+a*z+o*W+l*ct,r[12]=s*M+a*G+o*Q+l*nt,r[1]=c*T+u*x+d*X+f*H,r[5]=c*C+u*P+d*Y+f*it,r[9]=c*N+u*z+d*W+f*ct,r[13]=c*M+u*G+d*Q+f*nt,r[2]=m*T+_*x+p*X+h*H,r[6]=m*C+_*P+p*Y+h*it,r[10]=m*N+_*z+p*W+h*ct,r[14]=m*M+_*G+p*Q+h*nt,r[3]=w*T+E*x+S*X+D*H,r[7]=w*C+E*P+S*Y+D*it,r[11]=w*N+E*z+S*W+D*ct,r[15]=w*M+E*G+S*Q+D*nt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],A=t[4],i=t[8],r=t[12],s=t[1],a=t[5],o=t[9],l=t[13],c=t[2],u=t[6],d=t[10],f=t[14],m=t[3],_=t[7],p=t[11],h=t[15];return m*(+r*o*u-i*l*u-r*a*d+A*l*d+i*a*f-A*o*f)+_*(+e*o*f-e*l*d+r*s*d-i*s*f+i*l*c-r*o*c)+p*(+e*l*u-e*a*f-r*s*u+A*s*f+r*a*c-A*l*c)+h*(-i*a*c-e*o*u+e*a*d+i*s*u-A*s*d+A*o*c)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,A){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=A),this}invert(){const t=this.elements,e=t[0],A=t[1],i=t[2],r=t[3],s=t[4],a=t[5],o=t[6],l=t[7],c=t[8],u=t[9],d=t[10],f=t[11],m=t[12],_=t[13],p=t[14],h=t[15],w=u*p*l-_*d*l+_*o*f-a*p*f-u*o*h+a*d*h,E=m*d*l-c*p*l-m*o*f+s*p*f+c*o*h-s*d*h,S=c*_*l-m*u*l+m*a*f-s*_*f-c*a*h+s*u*h,D=m*u*o-c*_*o-m*a*d+s*_*d+c*a*p-s*u*p,T=e*w+A*E+i*S+r*D;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return t[0]=w*C,t[1]=(_*d*r-u*p*r-_*i*f+A*p*f+u*i*h-A*d*h)*C,t[2]=(a*p*r-_*o*r+_*i*l-A*p*l-a*i*h+A*o*h)*C,t[3]=(u*o*r-a*d*r-u*i*l+A*d*l+a*i*f-A*o*f)*C,t[4]=E*C,t[5]=(c*p*r-m*d*r+m*i*f-e*p*f-c*i*h+e*d*h)*C,t[6]=(m*o*r-s*p*r-m*i*l+e*p*l+s*i*h-e*o*h)*C,t[7]=(s*d*r-c*o*r+c*i*l-e*d*l-s*i*f+e*o*f)*C,t[8]=S*C,t[9]=(m*u*r-c*_*r-m*A*f+e*_*f+c*A*h-e*u*h)*C,t[10]=(s*_*r-m*a*r+m*A*l-e*_*l-s*A*h+e*a*h)*C,t[11]=(c*a*r-s*u*r-c*A*l+e*u*l+s*A*f-e*a*f)*C,t[12]=D*C,t[13]=(c*_*i-m*u*i+m*A*d-e*_*d-c*A*p+e*u*p)*C,t[14]=(m*a*i-s*_*i-m*A*o+e*_*o+s*A*p-e*a*p)*C,t[15]=(s*u*i-c*a*i+c*A*o-e*u*o-s*A*d+e*a*d)*C,this}scale(t){const e=this.elements,A=t.x,i=t.y,r=t.z;return e[0]*=A,e[4]*=i,e[8]*=r,e[1]*=A,e[5]*=i,e[9]*=r,e[2]*=A,e[6]*=i,e[10]*=r,e[3]*=A,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],A=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,A,i))}makeTranslation(t,e,A){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,A,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),A=Math.sin(t);return this.set(1,0,0,0,0,e,-A,0,0,A,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),A=Math.sin(t);return this.set(e,0,A,0,0,1,0,0,-A,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),A=Math.sin(t);return this.set(e,-A,0,0,A,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const A=Math.cos(e),i=Math.sin(e),r=1-A,s=t.x,a=t.y,o=t.z,l=r*s,c=r*a;return this.set(l*s+A,l*a-i*o,l*o+i*a,0,l*a+i*o,c*a+A,c*o-i*s,0,l*o-i*a,c*o+i*s,r*o*o+A,0,0,0,0,1),this}makeScale(t,e,A){return this.set(t,0,0,0,0,e,0,0,0,0,A,0,0,0,0,1),this}makeShear(t,e,A,i,r,s){return this.set(1,A,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,A){const i=this.elements,r=e._x,s=e._y,a=e._z,o=e._w,l=r+r,c=s+s,u=a+a,d=r*l,f=r*c,m=r*u,_=s*c,p=s*u,h=a*u,w=o*l,E=o*c,S=o*u,D=A.x,T=A.y,C=A.z;return i[0]=(1-(_+h))*D,i[1]=(f+S)*D,i[2]=(m-E)*D,i[3]=0,i[4]=(f-S)*T,i[5]=(1-(d+h))*T,i[6]=(p+w)*T,i[7]=0,i[8]=(m+E)*C,i[9]=(p-w)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,A){const i=this.elements;let r=DA.set(i[0],i[1],i[2]).length();const s=DA.set(i[4],i[5],i[6]).length(),a=DA.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Oe.copy(this);const l=1/r,c=1/s,u=1/a;return Oe.elements[0]*=l,Oe.elements[1]*=l,Oe.elements[2]*=l,Oe.elements[4]*=c,Oe.elements[5]*=c,Oe.elements[6]*=c,Oe.elements[8]*=u,Oe.elements[9]*=u,Oe.elements[10]*=u,e.setFromRotationMatrix(Oe),A.x=r,A.y=s,A.z=a,this}makePerspective(t,e,A,i,r,s,a=2e3,o=!1){const l=this.elements,c=2*r/(e-t),u=2*r/(A-i),d=(e+t)/(e-t),f=(A+i)/(A-i);let m,_;if(o)m=r/(s-r),_=s*r/(s-r);else if(a===2e3)m=-(s+r)/(s-r),_=-2*s*r/(s-r);else if(a===2001)m=-s/(s-r),_=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=u,l[9]=f,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,A,i,r,s,a=2e3,o=!1){const l=this.elements,c=2/(e-t),u=2/(A-i),d=-(e+t)/(e-t),f=-(A+i)/(A-i);let m,_;if(o)m=1/(s-r),_=s/(s-r);else if(a===2e3)m=-2/(s-r),_=-(s+r)/(s-r);else if(a===2001)m=-1/(s-r),_=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=0,l[12]=d,l[1]=0,l[5]=u,l[9]=0,l[13]=f,l[2]=0,l[6]=0,l[10]=m,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,A=t.elements;for(let i=0;i<16;i++)if(e[i]!==A[i])return!1;return!0}fromArray(t,e=0){for(let A=0;A<16;A++)this.elements[A]=t[A+e];return this}toArray(t=[],e=0){const A=this.elements;return t[e]=A[0],t[e+1]=A[1],t[e+2]=A[2],t[e+3]=A[3],t[e+4]=A[4],t[e+5]=A[5],t[e+6]=A[6],t[e+7]=A[7],t[e+8]=A[8],t[e+9]=A[9],t[e+10]=A[10],t[e+11]=A[11],t[e+12]=A[12],t[e+13]=A[13],t[e+14]=A[14],t[e+15]=A[15],t}}const DA=new U,Oe=new ue,Ys=new U(0,0,0),$s=new U(1,1,1),oA=new U,yn=new U,Te=new U,tr=new ue,er=new jA;class Ze{constructor(t=0,e=0,A=0,i=Ze.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=A,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,A,i=this._order){return this._x=t,this._y=e,this._z=A,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,A=!0){const i=t.elements,r=i[0],s=i[4],a=i[8],o=i[1],l=i[5],c=i[9],u=i[2],d=i[6],f=i[10];switch(e){case"XYZ":this._y=Math.asin(Ht(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,f),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Ht(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,f),this._z=Math.atan2(o,l)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ht(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,f),this._z=Math.atan2(-s,l)):(this._y=0,this._z=Math.atan2(o,r));break;case"ZYX":this._y=Math.asin(-Ht(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(o,r)):(this._x=0,this._z=Math.atan2(-s,l));break;case"YZX":this._z=Math.asin(Ht(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-c,l),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,f));break;case"XZY":this._z=Math.asin(-Ht(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-c,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,A===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,A){return tr.makeRotationFromQuaternion(t),this.setFromRotationMatrix(tr,e,A)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return er.setFromEuler(this),this.setFromQuaternion(er,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ze.DEFAULT_ORDER="XYZ";class Ar{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let js=0;const nr=new U,LA=new jA,Qe=new ue,En=new U,en=new U,Ks=new U,Zs=new jA,ir=new U(1,0,0),rr=new U(0,1,0),sr=new U(0,0,1),ar={type:"added"},Qs={type:"removed"},IA={type:"childadded",child:null},hi={type:"childremoved",child:null};class Me extends bA{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:js++}),this.uuid=YA(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Me.DEFAULT_UP.clone();const t=new U,e=new Ze,A=new jA,i=new U(1,1,1);function r(){A.setFromEuler(e,!1)}function s(){e.setFromQuaternion(A,void 0,!1)}e._onChange(r),A._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:A},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ue},normalMatrix:{value:new Ut}}),this.matrix=new ue,this.matrixWorld=new ue,this.matrixAutoUpdate=Me.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ar,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return LA.setFromAxisAngle(t,e),this.quaternion.multiply(LA),this}rotateOnWorldAxis(t,e){return LA.setFromAxisAngle(t,e),this.quaternion.premultiply(LA),this}rotateX(t){return this.rotateOnAxis(ir,t)}rotateY(t){return this.rotateOnAxis(rr,t)}rotateZ(t){return this.rotateOnAxis(sr,t)}translateOnAxis(t,e){return nr.copy(t).applyQuaternion(this.quaternion),this.position.add(nr.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(ir,t)}translateY(t){return this.translateOnAxis(rr,t)}translateZ(t){return this.translateOnAxis(sr,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Qe.copy(this.matrixWorld).invert())}lookAt(t,e,A){t.isVector3?En.copy(t):En.set(t,e,A);const i=this.parent;this.updateWorldMatrix(!0,!1),en.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Qe.lookAt(en,En,this.up):Qe.lookAt(En,en,this.up),this.quaternion.setFromRotationMatrix(Qe),i&&(Qe.extractRotation(i.matrixWorld),LA.setFromRotationMatrix(Qe),this.quaternion.premultiply(LA.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(ar),IA.child=t,this.dispatchEvent(IA),IA.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let A=0;A<arguments.length;A++)this.remove(arguments[A]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Qs),hi.child=t,this.dispatchEvent(hi),hi.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Qe.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Qe.multiply(t.parent.matrixWorld)),t.applyMatrix4(Qe),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(ar),IA.child=t,this.dispatchEvent(IA),IA.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let A=0,i=this.children.length;A<i;A++){const s=this.children[A].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,A=[]){this[t]===e&&A.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(t,e,A);return A}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(en,t,Ks),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(en,Zs,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let A=0,i=e.length;A<i;A++)e[A].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let A=0,i=e.length;A<i;A++)e[A].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let A=0,i=e.length;A<i;A++)e[A].updateMatrixWorld(t)}updateWorldMatrix(t,e){const A=this.parent;if(t===!0&&A!==null&&A.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",A={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},A.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,o){return a[o.uuid]===void 0&&(a[o.uuid]=o.toJSON(t)),o.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const o=a.shapes;if(Array.isArray(o))for(let l=0,c=o.length;l<c;l++){const u=o[l];r(t.shapes,u)}else r(t.shapes,o)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let o=0,l=this.material.length;o<l;o++)a.push(r(t.materials,this.material[o]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const o=this.animations[a];i.animations.push(r(t.animations,o))}}if(e){const a=s(t.geometries),o=s(t.materials),l=s(t.textures),c=s(t.images),u=s(t.shapes),d=s(t.skeletons),f=s(t.animations),m=s(t.nodes);a.length>0&&(A.geometries=a),o.length>0&&(A.materials=o),l.length>0&&(A.textures=l),c.length>0&&(A.images=c),u.length>0&&(A.shapes=u),d.length>0&&(A.skeletons=d),f.length>0&&(A.animations=f),m.length>0&&(A.nodes=m)}return A.object=i,A;function s(a){const o=[];for(const l in a){const c=a[l];delete c.metadata,o.push(c)}return o}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let A=0;A<t.children.length;A++){const i=t.children[A];this.add(i.clone())}return this}}Me.DEFAULT_UP=new U(0,1,0),Me.DEFAULT_MATRIX_AUTO_UPDATE=!0,Me.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ze=new U,Je=new U,di=new U,tA=new U,UA=new U,FA=new U,or=new U,fi=new U,pi=new U,mi=new U,gi=new ce,_i=new ce,vi=new ce;class He{constructor(t=new U,e=new U,A=new U){this.a=t,this.b=e,this.c=A}static getNormal(t,e,A,i){i.subVectors(A,e),ze.subVectors(t,e),i.cross(ze);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,A,i,r){ze.subVectors(i,e),Je.subVectors(A,e),di.subVectors(t,e);const s=ze.dot(ze),a=ze.dot(Je),o=ze.dot(di),l=Je.dot(Je),c=Je.dot(di),u=s*l-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,f=(l*o-a*c)*d,m=(s*c-a*o)*d;return r.set(1-f-m,m,f)}static containsPoint(t,e,A,i){return this.getBarycoord(t,e,A,i,tA)===null?!1:tA.x>=0&&tA.y>=0&&tA.x+tA.y<=1}static getInterpolation(t,e,A,i,r,s,a,o){return this.getBarycoord(t,e,A,i,tA)===null?(o.x=0,o.y=0,"z"in o&&(o.z=0),"w"in o&&(o.w=0),null):(o.setScalar(0),o.addScaledVector(r,tA.x),o.addScaledVector(s,tA.y),o.addScaledVector(a,tA.z),o)}static getInterpolatedAttribute(t,e,A,i,r,s){return gi.setScalar(0),_i.setScalar(0),vi.setScalar(0),gi.fromBufferAttribute(t,e),_i.fromBufferAttribute(t,A),vi.fromBufferAttribute(t,i),s.setScalar(0),s.addScaledVector(gi,r.x),s.addScaledVector(_i,r.y),s.addScaledVector(vi,r.z),s}static isFrontFacing(t,e,A,i){return ze.subVectors(A,e),Je.subVectors(t,e),ze.cross(Je).dot(i)<0}set(t,e,A){return this.a.copy(t),this.b.copy(e),this.c.copy(A),this}setFromPointsAndIndices(t,e,A,i){return this.a.copy(t[e]),this.b.copy(t[A]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,A,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,A),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return ze.subVectors(this.c,this.b),Je.subVectors(this.a,this.b),ze.cross(Je).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return He.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return He.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,A,i,r){return He.getInterpolation(t,this.a,this.b,this.c,e,A,i,r)}containsPoint(t){return He.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return He.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const A=this.a,i=this.b,r=this.c;let s,a;UA.subVectors(i,A),FA.subVectors(r,A),fi.subVectors(t,A);const o=UA.dot(fi),l=FA.dot(fi);if(o<=0&&l<=0)return e.copy(A);pi.subVectors(t,i);const c=UA.dot(pi),u=FA.dot(pi);if(c>=0&&u<=c)return e.copy(i);const d=o*u-c*l;if(d<=0&&o>=0&&c<=0)return s=o/(o-c),e.copy(A).addScaledVector(UA,s);mi.subVectors(t,r);const f=UA.dot(mi),m=FA.dot(mi);if(m>=0&&f<=m)return e.copy(r);const _=f*l-o*m;if(_<=0&&l>=0&&m<=0)return a=l/(l-m),e.copy(A).addScaledVector(FA,a);const p=c*m-f*u;if(p<=0&&u-c>=0&&f-m>=0)return or.subVectors(r,i),a=(u-c)/(u-c+(f-m)),e.copy(i).addScaledVector(or,a);const h=1/(p+_+d);return s=_*h,a=d*h,e.copy(A).addScaledVector(UA,s).addScaledVector(FA,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const lr={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},lA={h:0,s:0,l:0},bn={h:0,s:0,l:0};function xi(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class Gt{constructor(t,e,A){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,A)}set(t,e,A){if(e===void 0&&A===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,A);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ie){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Wt.colorSpaceToWorking(this,e),this}setRGB(t,e,A,i=Wt.workingColorSpace){return this.r=t,this.g=e,this.b=A,Wt.colorSpaceToWorking(this,i),this}setHSL(t,e,A,i=Wt.workingColorSpace){if(t=Bs(t,1),e=Ht(e,0,1),A=Ht(A,0,1),e===0)this.r=this.g=this.b=A;else{const r=A<=.5?A*(1+e):A+e-A*e,s=2*A-r;this.r=xi(s,r,t+1/3),this.g=xi(s,r,t),this.b=xi(s,r,t-1/3)}return Wt.colorSpaceToWorking(this,i),this}setStyle(t,e=Ie){function A(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ie){const A=lr[t.toLowerCase()];return A!==void 0?this.setHex(A,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=$e(t.r),this.g=$e(t.g),this.b=$e(t.b),this}copyLinearToSRGB(t){return this.r=wA(t.r),this.g=wA(t.g),this.b=wA(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ie){return Wt.workingToColorSpace(ve.copy(this),t),Math.round(Ht(ve.r*255,0,255))*65536+Math.round(Ht(ve.g*255,0,255))*256+Math.round(Ht(ve.b*255,0,255))}getHexString(t=Ie){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Wt.workingColorSpace){Wt.workingToColorSpace(ve.copy(this),e);const A=ve.r,i=ve.g,r=ve.b,s=Math.max(A,i,r),a=Math.min(A,i,r);let o,l;const c=(a+s)/2;if(a===s)o=0,l=0;else{const u=s-a;switch(l=c<=.5?u/(s+a):u/(2-s-a),s){case A:o=(i-r)/u+(i<r?6:0);break;case i:o=(r-A)/u+2;break;case r:o=(A-i)/u+4;break}o/=6}return t.h=o,t.s=l,t.l=c,t}getRGB(t,e=Wt.workingColorSpace){return Wt.workingToColorSpace(ve.copy(this),e),t.r=ve.r,t.g=ve.g,t.b=ve.b,t}getStyle(t=Ie){Wt.workingToColorSpace(ve.copy(this),t);const e=ve.r,A=ve.g,i=ve.b;return t!==Ie?`color(${t} ${e.toFixed(3)} ${A.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(A*255)},${Math.round(i*255)})`}offsetHSL(t,e,A){return this.getHSL(lA),this.setHSL(lA.h+t,lA.s+e,lA.l+A)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,A){return this.r=t.r+(e.r-t.r)*A,this.g=t.g+(e.g-t.g)*A,this.b=t.b+(e.b-t.b)*A,this}lerpHSL(t,e){this.getHSL(lA),t.getHSL(bn);const A=ti(lA.h,bn.h,e),i=ti(lA.s,bn.s,e),r=ti(lA.l,bn.l,e);return this.setHSL(A,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,A=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*A+r[6]*i,this.g=r[1]*e+r[4]*A+r[7]*i,this.b=r[2]*e+r[5]*A+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ve=new Gt;Gt.NAMES=lr;let Js=0;class NA extends bA{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Js++}),this.uuid=YA(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Gt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const A=t[e];if(A===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(A):i&&i.isVector3&&A&&A.isVector3?i.copy(A):this[e]=A}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const A={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),this.color&&this.color.isColor&&(A.color=this.color.getHex()),this.roughness!==void 0&&(A.roughness=this.roughness),this.metalness!==void 0&&(A.metalness=this.metalness),this.sheen!==void 0&&(A.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(A.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(A.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(A.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(A.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(A.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(A.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(A.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(A.shininess=this.shininess),this.clearcoat!==void 0&&(A.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(A.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(A.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(A.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(A.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,A.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(A.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(A.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(A.dispersion=this.dispersion),this.iridescence!==void 0&&(A.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(A.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(A.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(A.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(A.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(A.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(A.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(A.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(A.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(A.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(A.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(A.lightMap=this.lightMap.toJSON(t).uuid,A.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(A.aoMap=this.aoMap.toJSON(t).uuid,A.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(A.bumpMap=this.bumpMap.toJSON(t).uuid,A.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(A.normalMap=this.normalMap.toJSON(t).uuid,A.normalMapType=this.normalMapType,A.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(A.displacementMap=this.displacementMap.toJSON(t).uuid,A.displacementScale=this.displacementScale,A.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(A.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(A.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(A.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(A.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(A.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(A.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(A.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(A.combine=this.combine)),this.envMapRotation!==void 0&&(A.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(A.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(A.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(A.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(A.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(A.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(A.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(A.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(A.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(A.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(A.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(A.size=this.size),this.shadowSide!==null&&(A.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(A.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(A.blending=this.blending),this.side!==0&&(A.side=this.side),this.vertexColors===!0&&(A.vertexColors=!0),this.opacity<1&&(A.opacity=this.opacity),this.transparent===!0&&(A.transparent=!0),this.blendSrc!==204&&(A.blendSrc=this.blendSrc),this.blendDst!==205&&(A.blendDst=this.blendDst),this.blendEquation!==100&&(A.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(A.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(A.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(A.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(A.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(A.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(A.depthFunc=this.depthFunc),this.depthTest===!1&&(A.depthTest=this.depthTest),this.depthWrite===!1&&(A.depthWrite=this.depthWrite),this.colorWrite===!1&&(A.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(A.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(A.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(A.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(A.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(A.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(A.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(A.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(A.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(A.rotation=this.rotation),this.polygonOffset===!0&&(A.polygonOffset=!0),this.polygonOffsetFactor!==0&&(A.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(A.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(A.linewidth=this.linewidth),this.dashSize!==void 0&&(A.dashSize=this.dashSize),this.gapSize!==void 0&&(A.gapSize=this.gapSize),this.scale!==void 0&&(A.scale=this.scale),this.dithering===!0&&(A.dithering=!0),this.alphaTest>0&&(A.alphaTest=this.alphaTest),this.alphaHash===!0&&(A.alphaHash=!0),this.alphaToCoverage===!0&&(A.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(A.premultipliedAlpha=!0),this.forceSinglePass===!0&&(A.forceSinglePass=!0),this.wireframe===!0&&(A.wireframe=!0),this.wireframeLinewidth>1&&(A.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(A.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(A.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(A.flatShading=!0),this.visible===!1&&(A.visible=!1),this.toneMapped===!1&&(A.toneMapped=!1),this.fog===!1&&(A.fog=!1),Object.keys(this.userData).length>0&&(A.userData=this.userData);function i(r){const s=[];for(const a in r){const o=r[a];delete o.metadata,s.push(o)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(A.textures=r),s.length>0&&(A.images=s)}return A}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let A=null;if(e!==null){const i=e.length;A=new Array(i);for(let r=0;r!==i;++r)A[r]=e[r].clone()}return this.clippingPlanes=A,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class cr extends NA{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Ze,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const de=new U,wn=new Kt;let ta=0;class fe{constructor(t,e,A=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ta++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=A,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,A){t*=this.itemSize,A*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[A+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,A=this.count;e<A;e++)wn.fromBufferAttribute(this,e),wn.applyMatrix3(t),this.setXY(e,wn.x,wn.y);else if(this.itemSize===3)for(let e=0,A=this.count;e<A;e++)de.fromBufferAttribute(this,e),de.applyMatrix3(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyMatrix4(t){for(let e=0,A=this.count;e<A;e++)de.fromBufferAttribute(this,e),de.applyMatrix4(t),this.setXYZ(e,de.x,de.y,de.z);return this}applyNormalMatrix(t){for(let e=0,A=this.count;e<A;e++)de.fromBufferAttribute(this,e),de.applyNormalMatrix(t),this.setXYZ(e,de.x,de.y,de.z);return this}transformDirection(t){for(let e=0,A=this.count;e<A;e++)de.fromBufferAttribute(this,e),de.transformDirection(t),this.setXYZ(e,de.x,de.y,de.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let A=this.array[t*this.itemSize+e];return this.normalized&&(A=$A(A,this.array)),A}setComponent(t,e,A){return this.normalized&&(A=Ee(A,this.array)),this.array[t*this.itemSize+e]=A,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=$A(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=$A(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=$A(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=$A(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ee(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,A){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),A=Ee(A,this.array)),this.array[t+0]=e,this.array[t+1]=A,this}setXYZ(t,e,A,i){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),A=Ee(A,this.array),i=Ee(i,this.array)),this.array[t+0]=e,this.array[t+1]=A,this.array[t+2]=i,this}setXYZW(t,e,A,i,r){return t*=this.itemSize,this.normalized&&(e=Ee(e,this.array),A=Ee(A,this.array),i=Ee(i,this.array),r=Ee(r,this.array)),this.array[t+0]=e,this.array[t+1]=A,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class ur extends fe{constructor(t,e,A){super(new Uint16Array(t),e,A)}}class hr extends fe{constructor(t,e,A){super(new Uint32Array(t),e,A)}}class eA extends fe{constructor(t,e,A){super(new Float32Array(t),e,A)}}let ea=0;const Ue=new ue,Mi=new Me,BA=new U,Re=new ZA,An=new ZA,ge=new U;class Ce extends bA{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:ea++}),this.uuid=YA(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(ji(t)?hr:ur)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,A=0){this.groups.push({start:t,count:e,materialIndex:A})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const A=this.attributes.normal;if(A!==void 0){const r=new Ut().getNormalMatrix(t);A.applyNormalMatrix(r),A.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Ue.makeRotationFromQuaternion(t),this.applyMatrix4(Ue),this}rotateX(t){return Ue.makeRotationX(t),this.applyMatrix4(Ue),this}rotateY(t){return Ue.makeRotationY(t),this.applyMatrix4(Ue),this}rotateZ(t){return Ue.makeRotationZ(t),this.applyMatrix4(Ue),this}translate(t,e,A){return Ue.makeTranslation(t,e,A),this.applyMatrix4(Ue),this}scale(t,e,A){return Ue.makeScale(t,e,A),this.applyMatrix4(Ue),this}lookAt(t){return Mi.lookAt(t),Mi.updateMatrix(),this.applyMatrix4(Mi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(BA).negate(),this.translate(BA.x,BA.y,BA.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const A=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];A.push(s.x,s.y,s.z||0)}this.setAttribute("position",new eA(A,3))}else{const A=Math.min(t.length,e.count);for(let i=0;i<A;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ZA);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let A=0,i=e.length;A<i;A++){const r=e[A];Re.setFromBufferAttribute(r),this.morphTargetsRelative?(ge.addVectors(this.boundingBox.min,Re.min),this.boundingBox.expandByPoint(ge),ge.addVectors(this.boundingBox.max,Re.max),this.boundingBox.expandByPoint(ge)):(this.boundingBox.expandByPoint(Re.min),this.boundingBox.expandByPoint(Re.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new tn);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const A=this.boundingSphere.center;if(Re.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const a=e[r];An.setFromBufferAttribute(a),this.morphTargetsRelative?(ge.addVectors(Re.min,An.min),Re.expandByPoint(ge),ge.addVectors(Re.max,An.max),Re.expandByPoint(ge)):(Re.expandByPoint(An.min),Re.expandByPoint(An.max))}Re.getCenter(A);let i=0;for(let r=0,s=t.count;r<s;r++)ge.fromBufferAttribute(t,r),i=Math.max(i,A.distanceToSquared(ge));if(e)for(let r=0,s=e.length;r<s;r++){const a=e[r],o=this.morphTargetsRelative;for(let l=0,c=a.count;l<c;l++)ge.fromBufferAttribute(a,l),o&&(BA.fromBufferAttribute(t,l),ge.add(BA)),i=Math.max(i,A.distanceToSquared(ge))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const A=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new fe(new Float32Array(4*A.count),4));const s=this.getAttribute("tangent"),a=[],o=[];for(let N=0;N<A.count;N++)a[N]=new U,o[N]=new U;const l=new U,c=new U,u=new U,d=new Kt,f=new Kt,m=new Kt,_=new U,p=new U;function h(N,M,x){l.fromBufferAttribute(A,N),c.fromBufferAttribute(A,M),u.fromBufferAttribute(A,x),d.fromBufferAttribute(r,N),f.fromBufferAttribute(r,M),m.fromBufferAttribute(r,x),c.sub(l),u.sub(l),f.sub(d),m.sub(d);const P=1/(f.x*m.y-m.x*f.y);isFinite(P)&&(_.copy(c).multiplyScalar(m.y).addScaledVector(u,-f.y).multiplyScalar(P),p.copy(u).multiplyScalar(f.x).addScaledVector(c,-m.x).multiplyScalar(P),a[N].add(_),a[M].add(_),a[x].add(_),o[N].add(p),o[M].add(p),o[x].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let N=0,M=w.length;N<M;++N){const x=w[N],P=x.start,z=x.count;for(let G=P,X=P+z;G<X;G+=3)h(t.getX(G+0),t.getX(G+1),t.getX(G+2))}const E=new U,S=new U,D=new U,T=new U;function C(N){D.fromBufferAttribute(i,N),T.copy(D);const M=a[N];E.copy(M),E.sub(D.multiplyScalar(D.dot(M))).normalize(),S.crossVectors(T,M);const P=S.dot(o[N])<0?-1:1;s.setXYZW(N,E.x,E.y,E.z,P)}for(let N=0,M=w.length;N<M;++N){const x=w[N],P=x.start,z=x.count;for(let G=P,X=P+z;G<X;G+=3)C(t.getX(G+0)),C(t.getX(G+1)),C(t.getX(G+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let A=this.getAttribute("normal");if(A===void 0)A=new fe(new Float32Array(e.count*3),3),this.setAttribute("normal",A);else for(let d=0,f=A.count;d<f;d++)A.setXYZ(d,0,0,0);const i=new U,r=new U,s=new U,a=new U,o=new U,l=new U,c=new U,u=new U;if(t)for(let d=0,f=t.count;d<f;d+=3){const m=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,p),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),a.fromBufferAttribute(A,m),o.fromBufferAttribute(A,_),l.fromBufferAttribute(A,p),a.add(c),o.add(c),l.add(c),A.setXYZ(m,a.x,a.y,a.z),A.setXYZ(_,o.x,o.y,o.z),A.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,f=e.count;d<f;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),s.fromBufferAttribute(e,d+2),c.subVectors(s,r),u.subVectors(i,r),c.cross(u),A.setXYZ(d+0,c.x,c.y,c.z),A.setXYZ(d+1,c.x,c.y,c.z),A.setXYZ(d+2,c.x,c.y,c.z);this.normalizeNormals(),A.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,A=t.count;e<A;e++)ge.fromBufferAttribute(t,e),ge.normalize(),t.setXYZ(e,ge.x,ge.y,ge.z)}toNonIndexed(){function t(a,o){const l=a.array,c=a.itemSize,u=a.normalized,d=new l.constructor(o.length*c);let f=0,m=0;for(let _=0,p=o.length;_<p;_++){a.isInterleavedBufferAttribute?f=o[_]*a.data.stride+a.offset:f=o[_]*c;for(let h=0;h<c;h++)d[m++]=l[f++]}return new fe(d,c,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Ce,A=this.index.array,i=this.attributes;for(const a in i){const o=i[a],l=t(o,A);e.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const o=[],l=r[a];for(let c=0,u=l.length;c<u;c++){const d=l[c],f=t(d,A);o.push(f)}e.morphAttributes[a]=o}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,o=s.length;a<o;a++){const l=s[a];e.addGroup(l.start,l.count,l.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const o=this.parameters;for(const l in o)o[l]!==void 0&&(t[l]=o[l]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const A=this.attributes;for(const o in A){const l=A[o];t.data.attributes[o]=l.toJSON(t.data)}const i={};let r=!1;for(const o in this.morphAttributes){const l=this.morphAttributes[o],c=[];for(let u=0,d=l.length;u<d;u++){const f=l[u];c.push(f.toJSON(t.data))}c.length>0&&(i[o]=c,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const A=t.index;A!==null&&this.setIndex(A.clone());const i=t.attributes;for(const l in i){const c=i[l];this.setAttribute(l,c.clone(e))}const r=t.morphAttributes;for(const l in r){const c=[],u=r[l];for(let d=0,f=u.length;d<f;d++)c.push(u[d].clone(e));this.morphAttributes[l]=c}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let l=0,c=s.length;l<c;l++){const u=s[l];this.addGroup(u.start,u.count,u.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const o=t.boundingSphere;return o!==null&&(this.boundingSphere=o.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const dr=new ue,pA=new ui,Tn=new tn,fr=new U,Rn=new U,Cn=new U,Pn=new U,Si=new U,Dn=new U,pr=new U,Ln=new U;class Ge extends Me{constructor(t=new Ce,e=new cr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,A=Object.keys(e);if(A.length>0){const i=e[A[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const A=this.geometry,i=A.attributes.position,r=A.morphAttributes.position,s=A.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){Dn.set(0,0,0);for(let o=0,l=r.length;o<l;o++){const c=a[o],u=r[o];c!==0&&(Si.fromBufferAttribute(u,t),s?Dn.addScaledVector(Si,c):Dn.addScaledVector(Si.sub(e),c))}e.add(Dn)}return e}raycast(t,e){const A=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(A.boundingSphere===null&&A.computeBoundingSphere(),Tn.copy(A.boundingSphere),Tn.applyMatrix4(r),pA.copy(t.ray).recast(t.near),!(Tn.containsPoint(pA.origin)===!1&&(pA.intersectSphere(Tn,fr)===null||pA.origin.distanceToSquared(fr)>(t.far-t.near)**2))&&(dr.copy(r).invert(),pA.copy(t.ray).applyMatrix4(dr),!(A.boundingBox!==null&&pA.intersectsBox(A.boundingBox)===!1)&&this._computeIntersections(t,e,pA)))}_computeIntersections(t,e,A){let i;const r=this.geometry,s=this.material,a=r.index,o=r.attributes.position,l=r.attributes.uv,c=r.attributes.uv1,u=r.attributes.normal,d=r.groups,f=r.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,_=d.length;m<_;m++){const p=d[m],h=s[p.materialIndex],w=Math.max(p.start,f.start),E=Math.min(a.count,Math.min(p.start+p.count,f.start+f.count));for(let S=w,D=E;S<D;S+=3){const T=a.getX(S),C=a.getX(S+1),N=a.getX(S+2);i=In(this,h,t,A,l,c,u,T,C,N),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(a.count,f.start+f.count);for(let p=m,h=_;p<h;p+=3){const w=a.getX(p),E=a.getX(p+1),S=a.getX(p+2);i=In(this,s,t,A,l,c,u,w,E,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}else if(o!==void 0)if(Array.isArray(s))for(let m=0,_=d.length;m<_;m++){const p=d[m],h=s[p.materialIndex],w=Math.max(p.start,f.start),E=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let S=w,D=E;S<D;S+=3){const T=S,C=S+1,N=S+2;i=In(this,h,t,A,l,c,u,T,C,N),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=p.materialIndex,e.push(i))}}else{const m=Math.max(0,f.start),_=Math.min(o.count,f.start+f.count);for(let p=m,h=_;p<h;p+=3){const w=p,E=p+1,S=p+2;i=In(this,s,t,A,l,c,u,w,E,S),i&&(i.faceIndex=Math.floor(p/3),e.push(i))}}}}function Aa(n,t,e,A,i,r,s,a){let o;if(t.side===1?o=A.intersectTriangle(s,r,i,!0,a):o=A.intersectTriangle(i,r,s,t.side===0,a),o===null)return null;Ln.copy(a),Ln.applyMatrix4(n.matrixWorld);const l=e.ray.origin.distanceTo(Ln);return l<e.near||l>e.far?null:{distance:l,point:Ln.clone(),object:n}}function In(n,t,e,A,i,r,s,a,o,l){n.getVertexPosition(a,Rn),n.getVertexPosition(o,Cn),n.getVertexPosition(l,Pn);const c=Aa(n,t,e,A,Rn,Cn,Pn,pr);if(c){const u=new U;He.getBarycoord(pr,Rn,Cn,Pn,u),i&&(c.uv=He.getInterpolatedAttribute(i,a,o,l,u,new Kt)),r&&(c.uv1=He.getInterpolatedAttribute(r,a,o,l,u,new Kt)),s&&(c.normal=He.getInterpolatedAttribute(s,a,o,l,u,new U),c.normal.dot(A.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:o,c:l,normal:new U,materialIndex:0};He.getNormal(Rn,Cn,Pn,d.normal),c.face=d,c.barycoord=u}return c}class nn extends Ce{constructor(t=1,e=1,A=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:A,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const o=[],l=[],c=[],u=[];let d=0,f=0;m("z","y","x",-1,-1,A,e,t,s,r,0),m("z","y","x",1,-1,A,e,-t,s,r,1),m("x","z","y",1,1,t,A,e,i,s,2),m("x","z","y",1,-1,t,A,-e,i,s,3),m("x","y","z",1,-1,t,e,A,i,r,4),m("x","y","z",-1,-1,t,e,-A,i,r,5),this.setIndex(o),this.setAttribute("position",new eA(l,3)),this.setAttribute("normal",new eA(c,3)),this.setAttribute("uv",new eA(u,2));function m(_,p,h,w,E,S,D,T,C,N,M){const x=S/C,P=D/N,z=S/2,G=D/2,X=T/2,Y=C+1,W=N+1;let Q=0,H=0;const it=new U;for(let ct=0;ct<W;ct++){const nt=ct*P-G;for(let Pt=0;Pt<Y;Pt++){const Vt=Pt*x-z;it[_]=Vt*w,it[p]=nt*E,it[h]=X,l.push(it.x,it.y,it.z),it[_]=0,it[p]=0,it[h]=T>0?1:-1,c.push(it.x,it.y,it.z),u.push(Pt/C),u.push(1-ct/N),Q+=1}}for(let ct=0;ct<N;ct++)for(let nt=0;nt<C;nt++){const Pt=d+nt+Y*ct,Vt=d+nt+Y*(ct+1),Yt=d+(nt+1)+Y*(ct+1),Ot=d+(nt+1)+Y*ct;o.push(Pt,Vt,Ot),o.push(Vt,Yt,Ot),H+=6}a.addGroup(f,H,M),f+=H,d+=Q}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new nn(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function OA(n){const t={};for(const e in n){t[e]={};for(const A in n[e]){const i=n[e][A];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][A]=null):t[e][A]=i.clone():Array.isArray(i)?t[e][A]=i.slice():t[e][A]=i}}return t}function Se(n){const t={};for(let e=0;e<n.length;e++){const A=OA(n[e]);for(const i in A)t[i]=A[i]}return t}function na(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function mr(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Wt.workingColorSpace}const ia={clone:OA,merge:Se};var ra=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,sa=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ke extends NA{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=ra,this.fragmentShader=sa,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=OA(t.uniforms),this.uniformsGroups=na(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const A={};for(const i in this.extensions)this.extensions[i]===!0&&(A[i]=!0);return Object.keys(A).length>0&&(e.extensions=A),e}}class gr extends Me{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ue,this.projectionMatrix=new ue,this.projectionMatrixInverse=new ue,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const cA=new U,_r=new Kt,vr=new Kt;class Ve extends gr{constructor(t=50,e=1,A=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=A,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Jn*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Qn*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Jn*2*Math.atan(Math.tan(Qn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,A){cA.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(cA.x,cA.y).multiplyScalar(-t/cA.z),cA.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),A.set(cA.x,cA.y).multiplyScalar(-t/cA.z)}getViewSize(t,e){return this.getViewBounds(t,_r,vr),e.subVectors(vr,_r)}setViewOffset(t,e,A,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=A,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Qn*.5*this.fov)/this.zoom,A=2*e,i=this.aspect*A,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const o=s.fullWidth,l=s.fullHeight;r+=s.offsetX*i/o,e-=s.offsetY*A/l,i*=s.width/o,A*=s.height/l}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-A,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const zA=-90,HA=1;class aa extends Me{constructor(t,e,A){super(),this.type="CubeCamera",this.renderTarget=A,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Ve(zA,HA,t,e);i.layers=this.layers,this.add(i);const r=new Ve(zA,HA,t,e);r.layers=this.layers,this.add(r);const s=new Ve(zA,HA,t,e);s.layers=this.layers,this.add(s);const a=new Ve(zA,HA,t,e);a.layers=this.layers,this.add(a);const o=new Ve(zA,HA,t,e);o.layers=this.layers,this.add(o);const l=new Ve(zA,HA,t,e);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[A,i,r,s,a,o]=e;for(const l of e)this.remove(l);if(t===2e3)A.up.set(0,1,0),A.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),o.up.set(0,1,0),o.lookAt(0,0,-1);else if(t===2001)A.up.set(0,-1,0),A.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),o.up.set(0,-1,0),o.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const l of e)this.add(l),l.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:A,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,o,l,c]=this.children,u=t.getRenderTarget(),d=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=A.texture.generateMipmaps;A.texture.generateMipmaps=!1,t.setRenderTarget(A,0,i),t.render(e,r),t.setRenderTarget(A,1,i),t.render(e,s),t.setRenderTarget(A,2,i),t.render(e,a),t.setRenderTarget(A,3,i),t.render(e,o),t.setRenderTarget(A,4,i),t.render(e,l),A.texture.generateMipmaps=_,t.setRenderTarget(A,5,i),t.render(e,c),t.setRenderTarget(u,d,f),t.xr.enabled=m,A.texture.needsPMREMUpdate=!0}}class xr extends be{constructor(t=[],e=301,A,i,r,s,a,o,l,c){super(t,e,A,i,r,s,a,o,l,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class oa extends hA{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const A={width:t,height:t,depth:1},i=[A,A,A,A,A,A];this.texture=new xr(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const A={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new nn(5,5,5),r=new ke({name:"CubemapFromEquirect",uniforms:OA(A.uniforms),vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const s=new Ge(i,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new aa(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,A=!0,i=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,A,i);t.setRenderTarget(r)}}class rn extends Me{constructor(){super(),this.isGroup=!0,this.type="Group"}}const la={type:"move"};class yi{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new rn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new rn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new rn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const A of t.hand.values())this._getHandJoint(e,A)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,A){let i=null,r=null,s=null;const a=this._targetRay,o=this._grip,l=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(l&&t.hand){s=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,A),h=this._getHandJoint(l,_);p!==null&&(h.matrix.fromArray(p.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,h.jointRadius=p.radius),h.visible=p!==null}const c=l.joints["index-finger-tip"],u=l.joints["thumb-tip"],d=c.position.distanceTo(u.position),f=.02,m=.005;l.inputState.pinching&&d>f+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!l.inputState.pinching&&d<=f-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else o!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,A),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,A),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(la)))}return a!==null&&(a.visible=i!==null),o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const A=new rn;A.matrixAutoUpdate=!1,A.visible=!1,t.joints[e.jointName]=A,t.add(A)}return t.joints[e.jointName]}}class ca extends Me{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Ze,this.environmentIntensity=1,this.environmentRotation=new Ze,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Ei=new U,ua=new U,ha=new Ut;class mA{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,A,i){return this.normal.set(t,e,A),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,A){const i=Ei.subVectors(A,e).cross(ua.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const A=t.delta(Ei),i=this.normal.dot(A);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(A,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),A=this.distanceToPoint(t.end);return e<0&&A>0||A<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const A=e||ha.getNormalMatrix(t),i=this.coplanarPoint(Ei).applyMatrix4(t),r=this.normal.applyMatrix3(A).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gA=new tn,da=new Kt(.5,.5),Un=new U;class Mr{constructor(t=new mA,e=new mA,A=new mA,i=new mA,r=new mA,s=new mA){this.planes=[t,e,A,i,r,s]}set(t,e,A,i,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(A),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let A=0;A<6;A++)e[A].copy(t.planes[A]);return this}setFromProjectionMatrix(t,e=2e3,A=!1){const i=this.planes,r=t.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],d=r[6],f=r[7],m=r[8],_=r[9],p=r[10],h=r[11],w=r[12],E=r[13],S=r[14],D=r[15];if(i[0].setComponents(l-s,f-c,h-m,D-w).normalize(),i[1].setComponents(l+s,f+c,h+m,D+w).normalize(),i[2].setComponents(l+a,f+u,h+_,D+E).normalize(),i[3].setComponents(l-a,f-u,h-_,D-E).normalize(),A)i[4].setComponents(o,d,p,S).normalize(),i[5].setComponents(l-o,f-d,h-p,D-S).normalize();else if(i[4].setComponents(l-o,f-d,h-p,D-S).normalize(),e===2e3)i[5].setComponents(l+o,f+d,h+p,D+S).normalize();else if(e===2001)i[5].setComponents(o,d,p,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),gA.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),gA.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(gA)}intersectsSprite(t){gA.center.set(0,0,0);const e=da.distanceTo(t.center);return gA.radius=.7071067811865476+e,gA.applyMatrix4(t.matrixWorld),this.intersectsSphere(gA)}intersectsSphere(t){const e=this.planes,A=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(A)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let A=0;A<6;A++){const i=e[A];if(Un.x=i.normal.x>0?t.max.x:t.min.x,Un.y=i.normal.y>0?t.max.y:t.min.y,Un.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(Un)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let A=0;A<6;A++)if(e[A].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Sr extends NA{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const Fn=new U,Nn=new U,yr=new ue,sn=new ui,Bn=new tn,bi=new U,Er=new U;class br extends Me{constructor(t=new Ce,e=new Sr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,A=[0];for(let i=1,r=e.count;i<r;i++)Fn.fromBufferAttribute(e,i-1),Nn.fromBufferAttribute(e,i),A[i]=A[i-1],A[i]+=Fn.distanceTo(Nn);t.setAttribute("lineDistance",new eA(A,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const A=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,s=A.drawRange;if(A.boundingSphere===null&&A.computeBoundingSphere(),Bn.copy(A.boundingSphere),Bn.applyMatrix4(i),Bn.radius+=r,t.ray.intersectsSphere(Bn)===!1)return;yr.copy(i).invert(),sn.copy(t.ray).applyMatrix4(yr);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=this.isLineSegments?2:1,c=A.index,d=A.attributes.position;if(c!==null){const f=Math.max(0,s.start),m=Math.min(c.count,s.start+s.count);for(let _=f,p=m-1;_<p;_+=l){const h=c.getX(_),w=c.getX(_+1),E=On(this,t,sn,o,h,w,_);E&&e.push(E)}if(this.isLineLoop){const _=c.getX(m-1),p=c.getX(f),h=On(this,t,sn,o,_,p,m-1);h&&e.push(h)}}else{const f=Math.max(0,s.start),m=Math.min(d.count,s.start+s.count);for(let _=f,p=m-1;_<p;_+=l){const h=On(this,t,sn,o,_,_+1,_);h&&e.push(h)}if(this.isLineLoop){const _=On(this,t,sn,o,m-1,f,m-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,A=Object.keys(e);if(A.length>0){const i=e[A[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function On(n,t,e,A,i,r,s){const a=n.geometry.attributes.position;if(Fn.fromBufferAttribute(a,i),Nn.fromBufferAttribute(a,r),e.distanceSqToSegment(Fn,Nn,bi,Er)>A)return;bi.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(bi);if(!(l<t.near||l>t.far))return{distance:l,point:Er.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const wr=new U,Tr=new U;class fa extends br{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,A=[];for(let i=0,r=e.count;i<r;i+=2)wr.fromBufferAttribute(e,i),Tr.fromBufferAttribute(e,i+1),A[i]=i===0?0:A[i-1],A[i+1]=A[i]+wr.distanceTo(Tr);t.setAttribute("lineDistance",new eA(A,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pa extends br{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class ma extends NA{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const Rr=new ue,wi=new ui,zn=new tn,Hn=new U;class ga extends Me{constructor(t=new Ce,e=new ma){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const A=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=A.drawRange;if(A.boundingSphere===null&&A.computeBoundingSphere(),zn.copy(A.boundingSphere),zn.applyMatrix4(i),zn.radius+=r,t.ray.intersectsSphere(zn)===!1)return;Rr.copy(i).invert(),wi.copy(t.ray).applyMatrix4(Rr);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),o=a*a,l=A.index,u=A.attributes.position;if(l!==null){const d=Math.max(0,s.start),f=Math.min(l.count,s.start+s.count);for(let m=d,_=f;m<_;m++){const p=l.getX(m);Hn.fromBufferAttribute(u,p),Cr(Hn,p,o,i,t,e,this)}}else{const d=Math.max(0,s.start),f=Math.min(u.count,s.start+s.count);for(let m=d,_=f;m<_;m++)Hn.fromBufferAttribute(u,m),Cr(Hn,m,o,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,A=Object.keys(e);if(A.length>0){const i=e[A[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Cr(n,t,e,A,i,r,s){const a=wi.distanceSqToPoint(n);if(a<e){const o=new U;wi.closestPointToPoint(n,o),o.applyMatrix4(A);const l=i.ray.origin.distanceTo(o);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:o,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}class Pr extends be{constructor(t,e,A=1014,i,r,s,a=1003,o=1003,l,c=1026,u=1){if(c!==1026&&c!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:u};super(d,i,r,s,a,o,c,A,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new ni(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class Dr extends be{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Gn extends Ce{constructor(t=1,e=1,A=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:A,heightSegments:i};const r=t/2,s=e/2,a=Math.floor(A),o=Math.floor(i),l=a+1,c=o+1,u=t/a,d=e/o,f=[],m=[],_=[],p=[];for(let h=0;h<c;h++){const w=h*d-s;for(let E=0;E<l;E++){const S=E*u-r;m.push(S,-w,0),_.push(0,0,1),p.push(E/a),p.push(1-h/o)}}for(let h=0;h<o;h++)for(let w=0;w<a;w++){const E=w+l*h,S=w+l*(h+1),D=w+1+l*(h+1),T=w+1+l*h;f.push(E,S,T),f.push(S,D,T)}this.setIndex(f),this.setAttribute("position",new eA(m,3)),this.setAttribute("normal",new eA(_,3)),this.setAttribute("uv",new eA(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Gn(t.width,t.height,t.widthSegments,t.heightSegments)}}class _a extends NA{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class va extends NA{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class Lr extends gr{constructor(t=-1,e=1,A=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=A,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,A,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=A,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),A=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=A-t,s=A+t,a=i+e,o=i-e;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,s=r+l*this.view.width,a-=c*this.view.offsetY,o=a-c*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,o,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class xa extends Ve{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function Ir(n,t,e,A){const i=Ma(A);switch(e){case 1021:return n*t;case 1028:return n*t/i.components*i.byteLength;case 1029:return n*t/i.components*i.byteLength;case 1030:return n*t*2/i.components*i.byteLength;case 1031:return n*t*2/i.components*i.byteLength;case 1022:return n*t*3/i.components*i.byteLength;case 1023:return n*t*4/i.components*i.byteLength;case 1033:return n*t*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Ma(n){switch(n){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Ur(){let n=null,t=!1,e=null,A=null;function i(r,s){e(r,s),A=n.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(A=n.requestAnimationFrame(i),t=!0)},stop:function(){n.cancelAnimationFrame(A),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function Sa(n){const t=new WeakMap;function e(a,o){const l=a.array,c=a.usage,u=l.byteLength,d=n.createBuffer();n.bindBuffer(o,d),n.bufferData(o,l,c),a.onUploadCallback();let f;if(l instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)f=n.HALF_FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(l instanceof Int16Array)f=n.SHORT;else if(l instanceof Uint32Array)f=n.UNSIGNED_INT;else if(l instanceof Int32Array)f=n.INT;else if(l instanceof Int8Array)f=n.BYTE;else if(l instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:f,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:u}}function A(a,o,l){const c=o.array,u=o.updateRanges;if(n.bindBuffer(l,a),u.length===0)n.bufferSubData(l,0,c);else{u.sort((f,m)=>f.start-m.start);let d=0;for(let f=1;f<u.length;f++){const m=u[d],_=u[f];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,u[d]=_)}u.length=d+1;for(let f=0,m=u.length;f<m;f++){const _=u[f];n.bufferSubData(l,_.start*c.BYTES_PER_ELEMENT,c,_.start,_.count)}o.clearUpdateRanges()}o.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const o=t.get(a);o&&(n.deleteBuffer(o.buffer),t.delete(a))}function s(a,o){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const c=t.get(a);(!c||c.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=t.get(a);if(l===void 0)t.set(a,e(a,o));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");A(l.buffer,a,o),l.version=a.version}}return{get:i,remove:r,update:s}}var ya=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ea=`#ifdef USE_ALPHAHASH
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
#endif`,ba=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,wa=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ta=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ra=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Ca=`#ifdef USE_AOMAP
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
#endif`,Pa=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Da=`#ifdef USE_BATCHING
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
#endif`,La=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ia=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ua=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Fa=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Na=`#ifdef USE_IRIDESCENCE
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
#endif`,Ba=`#ifdef USE_BUMPMAP
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
#endif`,Oa=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,za=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ha=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Ga=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ka=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Va=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Wa=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Xa=`#if defined( USE_COLOR_ALPHA )
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
#endif`,qa=`#define PI 3.141592653589793
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
} // validated`,Ya=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$a=`vec3 transformedNormal = objectNormal;
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
#endif`,ja=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Ka=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Za=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Qa=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ja="gl_FragColor = linearToOutputTexel( gl_FragColor );",to=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,eo=`#ifdef USE_ENVMAP
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
#endif`,Ao=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,no=`#ifdef USE_ENVMAP
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
#endif`,io=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ro=`#ifdef USE_ENVMAP
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
#endif`,so=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ao=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,oo=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lo=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,co=`#ifdef USE_GRADIENTMAP
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
}`,uo=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ho=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,fo=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,po=`uniform bool receiveShadow;
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
#endif`,mo=`#ifdef USE_ENVMAP
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
#endif`,go=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_o=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,vo=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,xo=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Mo=`PhysicalMaterial material;
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
#endif`,So=`struct PhysicalMaterial {
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
}`,yo=`
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
#endif`,Eo=`#if defined( RE_IndirectDiffuse )
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
#endif`,bo=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wo=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,To=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ro=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Co=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Po=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Do=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Lo=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Io=`#if defined( USE_POINTS_UV )
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
#endif`,Uo=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Fo=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,No=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Bo=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Oo=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,zo=`#ifdef USE_MORPHTARGETS
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
#endif`,Ho=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Go=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,ko=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Vo=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Wo=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Xo=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,qo=`#ifdef USE_NORMALMAP
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
#endif`,Yo=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$o=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jo=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Ko=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zo=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Qo=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Jo=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tl=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,el=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Al=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,nl=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,il=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,rl=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,sl=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,al=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,ol=`float getShadowMask() {
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
}`,ll=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,cl=`#ifdef USE_SKINNING
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
#endif`,ul=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hl=`#ifdef USE_SKINNING
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
#endif`,dl=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,fl=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,pl=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,ml=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,gl=`#ifdef USE_TRANSMISSION
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
#endif`,_l=`#ifdef USE_TRANSMISSION
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
#endif`,vl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,xl=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ml=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Sl=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nt={alphahash_fragment:ya,alphahash_pars_fragment:Ea,alphamap_fragment:ba,alphamap_pars_fragment:wa,alphatest_fragment:Ta,alphatest_pars_fragment:Ra,aomap_fragment:Ca,aomap_pars_fragment:Pa,batching_pars_vertex:Da,batching_vertex:La,begin_vertex:Ia,beginnormal_vertex:Ua,bsdfs:Fa,iridescence_fragment:Na,bumpmap_pars_fragment:Ba,clipping_planes_fragment:Oa,clipping_planes_pars_fragment:za,clipping_planes_pars_vertex:Ha,clipping_planes_vertex:Ga,color_fragment:ka,color_pars_fragment:Va,color_pars_vertex:Wa,color_vertex:Xa,common:qa,cube_uv_reflection_fragment:Ya,defaultnormal_vertex:$a,displacementmap_pars_vertex:ja,displacementmap_vertex:Ka,emissivemap_fragment:Za,emissivemap_pars_fragment:Qa,colorspace_fragment:Ja,colorspace_pars_fragment:to,envmap_fragment:eo,envmap_common_pars_fragment:Ao,envmap_pars_fragment:no,envmap_pars_vertex:io,envmap_physical_pars_fragment:mo,envmap_vertex:ro,fog_vertex:so,fog_pars_vertex:ao,fog_fragment:oo,fog_pars_fragment:lo,gradientmap_pars_fragment:co,lightmap_pars_fragment:uo,lights_lambert_fragment:ho,lights_lambert_pars_fragment:fo,lights_pars_begin:po,lights_toon_fragment:go,lights_toon_pars_fragment:_o,lights_phong_fragment:vo,lights_phong_pars_fragment:xo,lights_physical_fragment:Mo,lights_physical_pars_fragment:So,lights_fragment_begin:yo,lights_fragment_maps:Eo,lights_fragment_end:bo,logdepthbuf_fragment:wo,logdepthbuf_pars_fragment:To,logdepthbuf_pars_vertex:Ro,logdepthbuf_vertex:Co,map_fragment:Po,map_pars_fragment:Do,map_particle_fragment:Lo,map_particle_pars_fragment:Io,metalnessmap_fragment:Uo,metalnessmap_pars_fragment:Fo,morphinstance_vertex:No,morphcolor_vertex:Bo,morphnormal_vertex:Oo,morphtarget_pars_vertex:zo,morphtarget_vertex:Ho,normal_fragment_begin:Go,normal_fragment_maps:ko,normal_pars_fragment:Vo,normal_pars_vertex:Wo,normal_vertex:Xo,normalmap_pars_fragment:qo,clearcoat_normal_fragment_begin:Yo,clearcoat_normal_fragment_maps:$o,clearcoat_pars_fragment:jo,iridescence_pars_fragment:Ko,opaque_fragment:Zo,packing:Qo,premultiplied_alpha_fragment:Jo,project_vertex:tl,dithering_fragment:el,dithering_pars_fragment:Al,roughnessmap_fragment:nl,roughnessmap_pars_fragment:il,shadowmap_pars_fragment:rl,shadowmap_pars_vertex:sl,shadowmap_vertex:al,shadowmask_pars_fragment:ol,skinbase_vertex:ll,skinning_pars_vertex:cl,skinning_vertex:ul,skinnormal_vertex:hl,specularmap_fragment:dl,specularmap_pars_fragment:fl,tonemapping_fragment:pl,tonemapping_pars_fragment:ml,transmission_fragment:gl,transmission_pars_fragment:_l,uv_pars_fragment:vl,uv_pars_vertex:xl,uv_vertex:Ml,worldpos_vertex:Sl,background_vert:`varying vec2 vUv;
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
}`},st={common:{diffuse:{value:new Gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ut}},envmap:{envMap:{value:null},envMapRotation:{value:new Ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ut},normalScale:{value:new Kt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0},uvTransform:{value:new Ut}},sprite:{diffuse:{value:new Gt(16777215)},opacity:{value:1},center:{value:new Kt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ut},alphaMap:{value:null},alphaMapTransform:{value:new Ut},alphaTest:{value:0}}},We={basic:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.fog]),vertexShader:Nt.meshbasic_vert,fragmentShader:Nt.meshbasic_frag},lambert:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Nt.meshlambert_vert,fragmentShader:Nt.meshlambert_frag},phong:{uniforms:Se([st.common,st.specularmap,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.fog,st.lights,{emissive:{value:new Gt(0)},specular:{value:new Gt(1118481)},shininess:{value:30}}]),vertexShader:Nt.meshphong_vert,fragmentShader:Nt.meshphong_frag},standard:{uniforms:Se([st.common,st.envmap,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.roughnessmap,st.metalnessmap,st.fog,st.lights,{emissive:{value:new Gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag},toon:{uniforms:Se([st.common,st.aomap,st.lightmap,st.emissivemap,st.bumpmap,st.normalmap,st.displacementmap,st.gradientmap,st.fog,st.lights,{emissive:{value:new Gt(0)}}]),vertexShader:Nt.meshtoon_vert,fragmentShader:Nt.meshtoon_frag},matcap:{uniforms:Se([st.common,st.bumpmap,st.normalmap,st.displacementmap,st.fog,{matcap:{value:null}}]),vertexShader:Nt.meshmatcap_vert,fragmentShader:Nt.meshmatcap_frag},points:{uniforms:Se([st.points,st.fog]),vertexShader:Nt.points_vert,fragmentShader:Nt.points_frag},dashed:{uniforms:Se([st.common,st.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Nt.linedashed_vert,fragmentShader:Nt.linedashed_frag},depth:{uniforms:Se([st.common,st.displacementmap]),vertexShader:Nt.depth_vert,fragmentShader:Nt.depth_frag},normal:{uniforms:Se([st.common,st.bumpmap,st.normalmap,st.displacementmap,{opacity:{value:1}}]),vertexShader:Nt.meshnormal_vert,fragmentShader:Nt.meshnormal_frag},sprite:{uniforms:Se([st.sprite,st.fog]),vertexShader:Nt.sprite_vert,fragmentShader:Nt.sprite_frag},background:{uniforms:{uvTransform:{value:new Ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Nt.background_vert,fragmentShader:Nt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ut}},vertexShader:Nt.backgroundCube_vert,fragmentShader:Nt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Nt.cube_vert,fragmentShader:Nt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Nt.equirect_vert,fragmentShader:Nt.equirect_frag},distanceRGBA:{uniforms:Se([st.common,st.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Nt.distanceRGBA_vert,fragmentShader:Nt.distanceRGBA_frag},shadow:{uniforms:Se([st.lights,st.fog,{color:{value:new Gt(0)},opacity:{value:1}}]),vertexShader:Nt.shadow_vert,fragmentShader:Nt.shadow_frag}};We.physical={uniforms:Se([We.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ut},clearcoatNormalScale:{value:new Kt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ut},sheen:{value:0},sheenColor:{value:new Gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ut},transmissionSamplerSize:{value:new Kt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ut},attenuationDistance:{value:0},attenuationColor:{value:new Gt(0)},specularColor:{value:new Gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ut},anisotropyVector:{value:new Kt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ut}}]),vertexShader:Nt.meshphysical_vert,fragmentShader:Nt.meshphysical_frag};const kn={r:0,b:0,g:0},_A=new Ze,yl=new ue;function El(n,t,e,A,i,r,s){const a=new Gt(0);let o=r===!0?0:1,l,c,u=null,d=0,f=null;function m(E){let S=E.isScene===!0?E.background:null;return S&&S.isTexture&&(S=(E.backgroundBlurriness>0?e:t).get(S)),S}function _(E){let S=!1;const D=m(E);D===null?h(a,o):D&&D.isColor&&(h(D,1),S=!0);const T=n.xr.getEnvironmentBlendMode();T==="additive"?A.buffers.color.setClear(0,0,0,1,s):T==="alpha-blend"&&A.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(E,S){const D=m(S);D&&(D.isCubeTexture||D.mapping===306)?(c===void 0&&(c=new Ge(new nn(1,1,1),new ke({name:"BackgroundCubeMaterial",uniforms:OA(We.backgroundCube.uniforms),vertexShader:We.backgroundCube.vertexShader,fragmentShader:We.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(T,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),_A.copy(S.backgroundRotation),_A.x*=-1,_A.y*=-1,_A.z*=-1,D.isCubeTexture&&D.isRenderTargetTexture===!1&&(_A.y*=-1,_A.z*=-1),c.material.uniforms.envMap.value=D,c.material.uniforms.flipEnvMap.value=D.isCubeTexture&&D.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(yl.makeRotationFromEuler(_A)),c.material.toneMapped=Wt.getTransfer(D.colorSpace)!==Zt,(u!==D||d!==D.version||f!==n.toneMapping)&&(c.material.needsUpdate=!0,u=D,d=D.version,f=n.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null)):D&&D.isTexture&&(l===void 0&&(l=new Ge(new Gn(2,2),new ke({name:"BackgroundMaterial",uniforms:OA(We.background.uniforms),vertexShader:We.background.vertexShader,fragmentShader:We.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=D,l.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,l.material.toneMapped=Wt.getTransfer(D.colorSpace)!==Zt,D.matrixAutoUpdate===!0&&D.updateMatrix(),l.material.uniforms.uvTransform.value.copy(D.matrix),(u!==D||d!==D.version||f!==n.toneMapping)&&(l.material.needsUpdate=!0,u=D,d=D.version,f=n.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function h(E,S){E.getRGB(kn,mr(n)),A.buffers.color.setClear(kn.r,kn.g,kn.b,S,s)}function w(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(E,S=1){a.set(E),o=S,h(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(E){o=E,h(a,o)},render:_,addToRenderList:p,dispose:w}}function bl(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),A={},i=d(null);let r=i,s=!1;function a(x,P,z,G,X){let Y=!1;const W=u(G,z,P);r!==W&&(r=W,l(r.object)),Y=f(x,G,z,X),Y&&m(x,G,z,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),(Y||s)&&(s=!1,S(x,P,z,G),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function o(){return n.createVertexArray()}function l(x){return n.bindVertexArray(x)}function c(x){return n.deleteVertexArray(x)}function u(x,P,z){const G=z.wireframe===!0;let X=A[x.id];X===void 0&&(X={},A[x.id]=X);let Y=X[P.id];Y===void 0&&(Y={},X[P.id]=Y);let W=Y[G];return W===void 0&&(W=d(o()),Y[G]=W),W}function d(x){const P=[],z=[],G=[];for(let X=0;X<e;X++)P[X]=0,z[X]=0,G[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:z,attributeDivisors:G,object:x,attributes:{},index:null}}function f(x,P,z,G){const X=r.attributes,Y=P.attributes;let W=0;const Q=z.getAttributes();for(const H in Q)if(Q[H].location>=0){const ct=X[H];let nt=Y[H];if(nt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(nt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(nt=x.instanceColor)),ct===void 0||ct.attribute!==nt||nt&&ct.data!==nt.data)return!0;W++}return r.attributesNum!==W||r.index!==G}function m(x,P,z,G){const X={},Y=P.attributes;let W=0;const Q=z.getAttributes();for(const H in Q)if(Q[H].location>=0){let ct=Y[H];ct===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(ct=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(ct=x.instanceColor));const nt={};nt.attribute=ct,ct&&ct.data&&(nt.data=ct.data),X[H]=nt,W++}r.attributes=X,r.attributesNum=W,r.index=G}function _(){const x=r.newAttributes;for(let P=0,z=x.length;P<z;P++)x[P]=0}function p(x){h(x,0)}function h(x,P){const z=r.newAttributes,G=r.enabledAttributes,X=r.attributeDivisors;z[x]=1,G[x]===0&&(n.enableVertexAttribArray(x),G[x]=1),X[x]!==P&&(n.vertexAttribDivisor(x,P),X[x]=P)}function w(){const x=r.newAttributes,P=r.enabledAttributes;for(let z=0,G=P.length;z<G;z++)P[z]!==x[z]&&(n.disableVertexAttribArray(z),P[z]=0)}function E(x,P,z,G,X,Y,W){W===!0?n.vertexAttribIPointer(x,P,z,X,Y):n.vertexAttribPointer(x,P,z,G,X,Y)}function S(x,P,z,G){_();const X=G.attributes,Y=z.getAttributes(),W=P.defaultAttributeValues;for(const Q in Y){const H=Y[Q];if(H.location>=0){let it=X[Q];if(it===void 0&&(Q==="instanceMatrix"&&x.instanceMatrix&&(it=x.instanceMatrix),Q==="instanceColor"&&x.instanceColor&&(it=x.instanceColor)),it!==void 0){const ct=it.normalized,nt=it.itemSize,Pt=t.get(it);if(Pt===void 0)continue;const Vt=Pt.buffer,Yt=Pt.type,Ot=Pt.bytesPerElement,q=Yt===n.INT||Yt===n.UNSIGNED_INT||it.gpuType===1013;if(it.isInterleavedBufferAttribute){const j=it.data,ht=j.stride,Et=it.offset;if(j.isInstancedInterleavedBuffer){for(let gt=0;gt<H.locationSize;gt++)h(H.location+gt,j.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=j.meshPerAttribute*j.count)}else for(let gt=0;gt<H.locationSize;gt++)p(H.location+gt);n.bindBuffer(n.ARRAY_BUFFER,Vt);for(let gt=0;gt<H.locationSize;gt++)E(H.location+gt,nt/H.locationSize,Yt,ct,ht*Ot,(Et+nt/H.locationSize*gt)*Ot,q)}else{if(it.isInstancedBufferAttribute){for(let j=0;j<H.locationSize;j++)h(H.location+j,it.meshPerAttribute);x.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=it.meshPerAttribute*it.count)}else for(let j=0;j<H.locationSize;j++)p(H.location+j);n.bindBuffer(n.ARRAY_BUFFER,Vt);for(let j=0;j<H.locationSize;j++)E(H.location+j,nt/H.locationSize,Yt,ct,nt*Ot,nt/H.locationSize*j*Ot,q)}}else if(W!==void 0){const ct=W[Q];if(ct!==void 0)switch(ct.length){case 2:n.vertexAttrib2fv(H.location,ct);break;case 3:n.vertexAttrib3fv(H.location,ct);break;case 4:n.vertexAttrib4fv(H.location,ct);break;default:n.vertexAttrib1fv(H.location,ct)}}}}w()}function D(){N();for(const x in A){const P=A[x];for(const z in P){const G=P[z];for(const X in G)c(G[X].object),delete G[X];delete P[z]}delete A[x]}}function T(x){if(A[x.id]===void 0)return;const P=A[x.id];for(const z in P){const G=P[z];for(const X in G)c(G[X].object),delete G[X];delete P[z]}delete A[x.id]}function C(x){for(const P in A){const z=A[P];if(z[x.id]===void 0)continue;const G=z[x.id];for(const X in G)c(G[X].object),delete G[X];delete z[x.id]}}function N(){M(),s=!0,r!==i&&(r=i,l(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:N,resetDefaultState:M,dispose:D,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function wl(n,t,e){let A;function i(l){A=l}function r(l,c){n.drawArrays(A,l,c),e.update(c,A,1)}function s(l,c,u){u!==0&&(n.drawArraysInstanced(A,l,c,u),e.update(c,A,u))}function a(l,c,u){if(u===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(A,l,0,c,0,u);let f=0;for(let m=0;m<u;m++)f+=c[m];e.update(f,A,1)}function o(l,c,u,d){if(u===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let m=0;m<l.length;m++)s(l[m],c[m],d[m]);else{f.multiDrawArraysInstancedWEBGL(A,l,0,c,0,d,0,u);let m=0;for(let _=0;_<u;_++)m+=c[_]*d[_];e.update(m,A,1)}}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=o}function Tl(n,t,e,A){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){return!(C!==1023&&A.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const N=C===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==1009&&A.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==1015&&!N)}function o(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=e.precision!==void 0?e.precision:"highp";const c=o(l);c!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",c,"instead."),l=c);const u=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),h=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),E=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),D=m>0,T=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:o,textureFormatReadable:s,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:u,reversedDepthBuffer:d,maxTextures:f,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:p,maxAttributes:h,maxVertexUniforms:w,maxVaryings:E,maxFragmentUniforms:S,vertexTextures:D,maxSamples:T}}function Rl(n){const t=this;let e=null,A=0,i=!1,r=!1;const s=new mA,a=new Ut,o={value:null,needsUpdate:!1};this.uniform=o,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const f=u.length!==0||d||A!==0||i;return i=d,A=u.length,f},this.beginShadows=function(){r=!0,c(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){e=c(u,d,0)},this.setState=function(u,d,f){const m=u.clippingPlanes,_=u.clipIntersection,p=u.clipShadows,h=n.get(u);if(!i||m===null||m.length===0||r&&!p)r?c(null):l();else{const w=r?0:A,E=w*4;let S=h.clippingState||null;o.value=S,S=c(m,d,E,f);for(let D=0;D!==E;++D)S[D]=e[D];h.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function l(){o.value!==e&&(o.value=e,o.needsUpdate=A>0),t.numPlanes=A,t.numIntersection=0}function c(u,d,f,m){const _=u!==null?u.length:0;let p=null;if(_!==0){if(p=o.value,m!==!0||p===null){const h=f+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<h)&&(p=new Float32Array(h));for(let E=0,S=f;E!==_;++E,S+=4)s.copy(u[E]).applyMatrix4(w,a),s.normal.toArray(p,S),p[S+3]=s.constant}o.value=p,o.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function Cl(n){let t=new WeakMap;function e(s,a){return a===303?s.mapping=301:a===304&&(s.mapping=302),s}function A(s){if(s&&s.isTexture){const a=s.mapping;if(a===303||a===304)if(t.has(s)){const o=t.get(s).texture;return e(o,s.mapping)}else{const o=s.image;if(o&&o.height>0){const l=new oa(o.height);return l.fromEquirectangularTexture(n,s),t.set(s,l),s.addEventListener("dispose",i),e(l.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const o=t.get(a);o!==void 0&&(t.delete(a),o.dispose())}function r(){t=new WeakMap}return{get:A,dispose:r}}const GA=4,Fr=[.125,.215,.35,.446,.526,.582],vA=20,Ti=new Lr,Nr=new Gt;let Ri=null,Ci=0,Pi=0,Di=!1;const xA=(1+Math.sqrt(5))/2,kA=1/xA,Br=[new U(-xA,kA,0),new U(xA,kA,0),new U(-kA,0,xA),new U(kA,0,xA),new U(0,xA,-kA),new U(0,xA,kA),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],Pl=new U;class Or{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,A=.1,i=100,r={}){const{size:s=256,position:a=Pl}=r;Ri=this._renderer.getRenderTarget(),Ci=this._renderer.getActiveCubeFace(),Pi=this._renderer.getActiveMipmapLevel(),Di=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const o=this._allocateTargets();return o.depthBuffer=!0,this._sceneToCubeUV(t,A,i,o,a),e>0&&this._blur(o,0,0,e),this._applyPMREM(o),this._cleanup(o),o}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Gr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Hr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(Ri,Ci,Pi),this._renderer.xr.enabled=Di,t.scissorTest=!1,Vn(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),Ri=this._renderer.getRenderTarget(),Ci=this._renderer.getActiveCubeFace(),Pi=this._renderer.getActiveMipmapLevel(),Di=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const A=e||this._allocateTargets();return this._textureToCubeUV(t,A),this._applyPMREM(A),this._cleanup(A),A}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,A={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:EA,depthBuffer:!1},i=zr(t,e,A);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=zr(t,e,A);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=Dl(r)),this._blurMaterial=Ll(r,t,e)}return i}_compileMaterial(t){const e=new Ge(this._lodPlanes[0],t);this._renderer.compile(e,Ti)}_sceneToCubeUV(t,e,A,i,r){const o=new Ve(90,1,e,A),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,d=u.autoClear,f=u.toneMapping;u.getClearColor(Nr),u.toneMapping=0,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(i),u.clearDepth(),u.setRenderTarget(null));const _=new cr({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),p=new Ge(new nn,_);let h=!1;const w=t.background;w?w.isColor&&(_.color.copy(w),t.background=null,h=!0):(_.color.copy(Nr),h=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(o.up.set(0,l[E],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x+c[E],r.y,r.z)):S===1?(o.up.set(0,0,l[E]),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y+c[E],r.z)):(o.up.set(0,l[E],0),o.position.set(r.x,r.y,r.z),o.lookAt(r.x,r.y,r.z+c[E]));const D=this._cubeSize;Vn(i,S*D,E>2?D:0,D,D),u.setRenderTarget(i),h&&u.render(p,o),u.render(t,o)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=f,u.autoClear=d,t.background=w}_textureToCubeUV(t,e){const A=this._renderer,i=t.mapping===301||t.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Gr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Hr());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Ge(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const o=this._cubeSize;Vn(e,0,0,3*o,2*o),A.setRenderTarget(e),A.render(s,Ti)}_applyPMREM(t){const e=this._renderer,A=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Br[(i-r-1)%Br.length];this._blur(t,r-1,r,s,a)}e.autoClear=A}_blur(t,e,A,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,A,i,"latitudinal",r),this._halfBlur(s,t,A,A,i,"longitudinal",r)}_halfBlur(t,e,A,i,r,s,a){const o=this._renderer,l=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,u=new Ge(this._lodPlanes[i],l),d=l.uniforms,f=this._sizeLods[A]-1,m=isFinite(r)?Math.PI/(2*f):2*Math.PI/(2*vA-1),_=r/m,p=isFinite(r)?1+Math.floor(c*_):vA;p>vA&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${vA}`);const h=[];let w=0;for(let C=0;C<vA;++C){const N=C/_,M=Math.exp(-N*N/2);h.push(M),C===0?w+=M:C<p&&(w+=2*M)}for(let C=0;C<h.length;C++)h[C]=h[C]/w;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=h,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:E}=this;d.dTheta.value=m,d.mipInt.value=E-A;const S=this._sizeLods[i],D=3*S*(i>E-GA?i-E+GA:0),T=4*(this._cubeSize-S);Vn(e,D,T,3*S,2*S),o.setRenderTarget(e),o.render(u,Ti)}}function Dl(n){const t=[],e=[],A=[];let i=n;const r=n-GA+1+Fr.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);let o=1/a;s>n-GA?o=Fr[s-n+GA-1]:s===0&&(o=0),A.push(o);const l=1/(a-2),c=-l,u=1+l,d=[c,c,u,c,u,u,c,c,u,u,c,u],f=6,m=6,_=3,p=2,h=1,w=new Float32Array(_*m*f),E=new Float32Array(p*m*f),S=new Float32Array(h*m*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,N=T>2?0:-1,M=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];w.set(M,_*m*T),E.set(d,p*m*T);const x=[T,T,T,T,T,T];S.set(x,h*m*T)}const D=new Ce;D.setAttribute("position",new fe(w,_)),D.setAttribute("uv",new fe(E,p)),D.setAttribute("faceIndex",new fe(S,h)),t.push(D),i>GA&&i--}return{lodPlanes:t,sizeLods:e,sigmas:A}}function zr(n,t,e){const A=new hA(n,t,e);return A.texture.mapping=306,A.texture.name="PMREM.cubeUv",A.scissorTest=!0,A}function Vn(n,t,e,A,i){n.viewport.set(t,e,A,i),n.scissor.set(t,e,A,i)}function Ll(n,t,e){const A=new Float32Array(vA),i=new U(0,1,0);return new ke({name:"SphericalGaussianBlur",defines:{n:vA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:A},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Li(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Hr(){return new ke({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Li(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function Gr(){return new ke({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Li(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function Li(){return`

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
	`}function Il(n){let t=new WeakMap,e=null;function A(a){if(a&&a.isTexture){const o=a.mapping,l=o===303||o===304,c=o===301||o===302;if(l||c){let u=t.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new Or(n)),u=l?e.fromEquirectangular(a,u):e.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),u.texture;if(u!==void 0)return u.texture;{const f=a.image;return l&&f&&f.height>0||c&&f&&i(f)?(e===null&&(e=new Or(n)),u=l?e.fromEquirectangular(a):e.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,t.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function i(a){let o=0;const l=6;for(let c=0;c<l;c++)a[c]!==void 0&&o++;return o===l}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=t.get(o);l!==void 0&&(t.delete(o),l.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:A,dispose:s}}function Ul(n){const t={};function e(A){if(t[A]!==void 0)return t[A];let i;switch(A){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(A)}return t[A]=i,i}return{has:function(A){return e(A)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(A){const i=e(A);return i===null&&KA("THREE.WebGLRenderer: "+A+" extension not supported."),i}}}function Fl(n,t,e,A){const i={},r=new WeakMap;function s(u){const d=u.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",s),delete i[d.id];const f=r.get(d);f&&(t.remove(f),r.delete(d)),A.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(u,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,e.memory.geometries++),d}function o(u){const d=u.attributes;for(const f in d)t.update(d[f],n.ARRAY_BUFFER)}function l(u){const d=[],f=u.index,m=u.attributes.position;let _=0;if(f!==null){const w=f.array;_=f.version;for(let E=0,S=w.length;E<S;E+=3){const D=w[E+0],T=w[E+1],C=w[E+2];d.push(D,T,T,C,C,D)}}else if(m!==void 0){const w=m.array;_=m.version;for(let E=0,S=w.length/3-1;E<S;E+=3){const D=E+0,T=E+1,C=E+2;d.push(D,T,T,C,C,D)}}else return;const p=new(ji(d)?hr:ur)(d,1);p.version=_;const h=r.get(u);h&&t.remove(h),r.set(u,p)}function c(u){const d=r.get(u);if(d){const f=u.index;f!==null&&d.version<f.version&&l(u)}else l(u);return r.get(u)}return{get:a,update:o,getWireframeAttribute:c}}function Nl(n,t,e){let A;function i(d){A=d}let r,s;function a(d){r=d.type,s=d.bytesPerElement}function o(d,f){n.drawElements(A,f,r,d*s),e.update(f,A,1)}function l(d,f,m){m!==0&&(n.drawElementsInstanced(A,f,r,d*s,m),e.update(f,A,m))}function c(d,f,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(A,f,0,r,d,0,m);let p=0;for(let h=0;h<m;h++)p+=f[h];e.update(p,A,1)}function u(d,f,m,_){if(m===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let h=0;h<d.length;h++)l(d[h]/s,f[h],_[h]);else{p.multiDrawElementsInstancedWEBGL(A,f,0,r,d,0,_,0,m);let h=0;for(let w=0;w<m;w++)h+=f[w]*_[w];e.update(h,A,1)}}this.setMode=i,this.setIndex=a,this.render=o,this.renderInstances=l,this.renderMultiDraw=c,this.renderMultiDrawInstances=u}function Bl(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function A(r,s,a){switch(e.calls++,s){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:A}}function Ol(n,t,e){const A=new WeakMap,i=new ce;function r(s,a,o){const l=s.morphTargetInfluences,c=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=c!==void 0?c.length:0;let d=A.get(a);if(d===void 0||d.count!==u){let M=function(){C.dispose(),A.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const f=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],h=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let E=0;f===!0&&(E=1),m===!0&&(E=2),_===!0&&(E=3);let S=a.attributes.position.count*E,D=1;S>t.maxTextureSize&&(D=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const T=new Float32Array(S*D*4*u),C=new Ji(T,S,D,u);C.type=1015,C.needsUpdate=!0;const N=E*4;for(let x=0;x<u;x++){const P=p[x],z=h[x],G=w[x],X=S*D*4*x;for(let Y=0;Y<P.count;Y++){const W=Y*N;f===!0&&(i.fromBufferAttribute(P,Y),T[X+W+0]=i.x,T[X+W+1]=i.y,T[X+W+2]=i.z,T[X+W+3]=0),m===!0&&(i.fromBufferAttribute(z,Y),T[X+W+4]=i.x,T[X+W+5]=i.y,T[X+W+6]=i.z,T[X+W+7]=0),_===!0&&(i.fromBufferAttribute(G,Y),T[X+W+8]=i.x,T[X+W+9]=i.y,T[X+W+10]=i.z,T[X+W+11]=G.itemSize===4?i.w:1)}}d={count:u,texture:C,size:new Kt(S,D)},A.set(a,d),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)o.getUniforms().setValue(n,"morphTexture",s.morphTexture,e);else{let f=0;for(let _=0;_<l.length;_++)f+=l[_];const m=a.morphTargetsRelative?1:1-f;o.getUniforms().setValue(n,"morphTargetBaseInfluence",m),o.getUniforms().setValue(n,"morphTargetInfluences",l)}o.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),o.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function zl(n,t,e,A){let i=new WeakMap;function r(o){const l=A.render.frame,c=o.geometry,u=t.get(o,c);if(i.get(u)!==l&&(t.update(u),i.set(u,l)),o.isInstancedMesh&&(o.hasEventListener("dispose",a)===!1&&o.addEventListener("dispose",a),i.get(o)!==l&&(e.update(o.instanceMatrix,n.ARRAY_BUFFER),o.instanceColor!==null&&e.update(o.instanceColor,n.ARRAY_BUFFER),i.set(o,l))),o.isSkinnedMesh){const d=o.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return u}function s(){i=new WeakMap}function a(o){const l=o.target;l.removeEventListener("dispose",a),e.remove(l.instanceMatrix),l.instanceColor!==null&&e.remove(l.instanceColor)}return{update:r,dispose:s}}const kr=new be,Vr=new Pr(1,1),Wr=new Ji,Xr=new Xs,qr=new xr,Yr=[],$r=[],jr=new Float32Array(16),Kr=new Float32Array(9),Zr=new Float32Array(4);function VA(n,t,e){const A=n[0];if(A<=0||A>0)return n;const i=t*e;let r=Yr[i];if(r===void 0&&(r=new Float32Array(i),Yr[i]=r),t!==0){A.toArray(r,0);for(let s=1,a=0;s!==t;++s)a+=e,n[s].toArray(r,a)}return r}function pe(n,t){if(n.length!==t.length)return!1;for(let e=0,A=n.length;e<A;e++)if(n[e]!==t[e])return!1;return!0}function me(n,t){for(let e=0,A=t.length;e<A;e++)n[e]=t[e]}function Wn(n,t){let e=$r[t];e===void 0&&(e=new Int32Array(t),$r[t]=e);for(let A=0;A!==t;++A)e[A]=n.allocateTextureUnit();return e}function Hl(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function Gl(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;n.uniform2fv(this.addr,t),me(e,t)}}function kl(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(pe(e,t))return;n.uniform3fv(this.addr,t),me(e,t)}}function Vl(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;n.uniform4fv(this.addr,t),me(e,t)}}function Wl(n,t){const e=this.cache,A=t.elements;if(A===void 0){if(pe(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),me(e,t)}else{if(pe(e,A))return;Zr.set(A),n.uniformMatrix2fv(this.addr,!1,Zr),me(e,A)}}function Xl(n,t){const e=this.cache,A=t.elements;if(A===void 0){if(pe(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),me(e,t)}else{if(pe(e,A))return;Kr.set(A),n.uniformMatrix3fv(this.addr,!1,Kr),me(e,A)}}function ql(n,t){const e=this.cache,A=t.elements;if(A===void 0){if(pe(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),me(e,t)}else{if(pe(e,A))return;jr.set(A),n.uniformMatrix4fv(this.addr,!1,jr),me(e,A)}}function Yl(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function $l(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;n.uniform2iv(this.addr,t),me(e,t)}}function jl(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;n.uniform3iv(this.addr,t),me(e,t)}}function Kl(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;n.uniform4iv(this.addr,t),me(e,t)}}function Zl(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ql(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(pe(e,t))return;n.uniform2uiv(this.addr,t),me(e,t)}}function Jl(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(pe(e,t))return;n.uniform3uiv(this.addr,t),me(e,t)}}function tc(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(pe(e,t))return;n.uniform4uiv(this.addr,t),me(e,t)}}function ec(n,t,e){const A=this.cache,i=e.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i);let r;this.type===n.SAMPLER_2D_SHADOW?(Vr.compareFunction=515,r=Vr):r=kr,e.setTexture2D(t||r,i)}function Ac(n,t,e){const A=this.cache,i=e.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),e.setTexture3D(t||Xr,i)}function nc(n,t,e){const A=this.cache,i=e.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),e.setTextureCube(t||qr,i)}function ic(n,t,e){const A=this.cache,i=e.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),e.setTexture2DArray(t||Wr,i)}function rc(n){switch(n){case 5126:return Hl;case 35664:return Gl;case 35665:return kl;case 35666:return Vl;case 35674:return Wl;case 35675:return Xl;case 35676:return ql;case 5124:case 35670:return Yl;case 35667:case 35671:return $l;case 35668:case 35672:return jl;case 35669:case 35673:return Kl;case 5125:return Zl;case 36294:return Ql;case 36295:return Jl;case 36296:return tc;case 35678:case 36198:case 36298:case 36306:case 35682:return ec;case 35679:case 36299:case 36307:return Ac;case 35680:case 36300:case 36308:case 36293:return nc;case 36289:case 36303:case 36311:case 36292:return ic}}function sc(n,t){n.uniform1fv(this.addr,t)}function ac(n,t){const e=VA(t,this.size,2);n.uniform2fv(this.addr,e)}function oc(n,t){const e=VA(t,this.size,3);n.uniform3fv(this.addr,e)}function lc(n,t){const e=VA(t,this.size,4);n.uniform4fv(this.addr,e)}function cc(n,t){const e=VA(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function uc(n,t){const e=VA(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function hc(n,t){const e=VA(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function dc(n,t){n.uniform1iv(this.addr,t)}function fc(n,t){n.uniform2iv(this.addr,t)}function pc(n,t){n.uniform3iv(this.addr,t)}function mc(n,t){n.uniform4iv(this.addr,t)}function gc(n,t){n.uniform1uiv(this.addr,t)}function _c(n,t){n.uniform2uiv(this.addr,t)}function vc(n,t){n.uniform3uiv(this.addr,t)}function xc(n,t){n.uniform4uiv(this.addr,t)}function Mc(n,t,e){const A=this.cache,i=t.length,r=Wn(e,i);pe(A,r)||(n.uniform1iv(this.addr,r),me(A,r));for(let s=0;s!==i;++s)e.setTexture2D(t[s]||kr,r[s])}function Sc(n,t,e){const A=this.cache,i=t.length,r=Wn(e,i);pe(A,r)||(n.uniform1iv(this.addr,r),me(A,r));for(let s=0;s!==i;++s)e.setTexture3D(t[s]||Xr,r[s])}function yc(n,t,e){const A=this.cache,i=t.length,r=Wn(e,i);pe(A,r)||(n.uniform1iv(this.addr,r),me(A,r));for(let s=0;s!==i;++s)e.setTextureCube(t[s]||qr,r[s])}function Ec(n,t,e){const A=this.cache,i=t.length,r=Wn(e,i);pe(A,r)||(n.uniform1iv(this.addr,r),me(A,r));for(let s=0;s!==i;++s)e.setTexture2DArray(t[s]||Wr,r[s])}function bc(n){switch(n){case 5126:return sc;case 35664:return ac;case 35665:return oc;case 35666:return lc;case 35674:return cc;case 35675:return uc;case 35676:return hc;case 5124:case 35670:return dc;case 35667:case 35671:return fc;case 35668:case 35672:return pc;case 35669:case 35673:return mc;case 5125:return gc;case 36294:return _c;case 36295:return vc;case 36296:return xc;case 35678:case 36198:case 36298:case 36306:case 35682:return Mc;case 35679:case 36299:case 36307:return Sc;case 35680:case 36300:case 36308:case 36293:return yc;case 36289:case 36303:case 36311:case 36292:return Ec}}class wc{constructor(t,e,A){this.id=t,this.addr=A,this.cache=[],this.type=e.type,this.setValue=rc(e.type)}}class Tc{constructor(t,e,A){this.id=t,this.addr=A,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=bc(e.type)}}class Rc{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,A){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(t,e[a.id],A)}}}const Ii=/(\w+)(\])?(\[|\.)?/g;function Qr(n,t){n.seq.push(t),n.map[t.id]=t}function Cc(n,t,e){const A=n.name,i=A.length;for(Ii.lastIndex=0;;){const r=Ii.exec(A),s=Ii.lastIndex;let a=r[1];const o=r[2]==="]",l=r[3];if(o&&(a=a|0),l===void 0||l==="["&&s+2===i){Qr(e,l===void 0?new wc(a,n,t):new Tc(a,n,t));break}else{let u=e.map[a];u===void 0&&(u=new Rc(a),Qr(e,u)),e=u}}}class Xn{constructor(t,e){this.seq=[],this.map={};const A=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<A;++i){const r=t.getActiveUniform(e,i),s=t.getUniformLocation(e,r.name);Cc(r,s,this)}}setValue(t,e,A,i){const r=this.map[e];r!==void 0&&r.setValue(t,A,i)}setOptional(t,e,A){const i=e[A];i!==void 0&&this.setValue(t,A,i)}static upload(t,e,A,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],o=A[a.id];o.needsUpdate!==!1&&a.setValue(t,o.value,i)}}static seqWithValue(t,e){const A=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&A.push(s)}return A}}function Jr(n,t,e){const A=n.createShader(t);return n.shaderSource(A,e),n.compileShader(A),A}const Pc=37297;let Dc=0;function Lc(n,t){const e=n.split(`
`),A=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=i;s<r;s++){const a=s+1;A.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return A.join(`
`)}const ts=new Ut;function Ic(n){Wt._getMatrix(ts,Wt.workingColorSpace,n);const t=`mat3( ${ts.elements.map(e=>e.toFixed(4))} )`;switch(Wt.getTransfer(n)){case mn:return[t,"LinearTransferOETF"];case Zt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function es(n,t,e){const A=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(A&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Lc(n.getShaderSource(t),a)}else return r}function Uc(n,t){const e=Ic(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function Fc(n,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const qn=new U;function Nc(){Wt.getLuminanceCoefficients(qn);const n=qn.x.toFixed(4),t=qn.y.toFixed(4),e=qn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Bc(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(an).join(`
`)}function Oc(n){const t=[];for(const e in n){const A=n[e];A!==!1&&t.push("#define "+e+" "+A)}return t.join(`
`)}function zc(n,t){const e={},A=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let i=0;i<A;i++){const r=n.getActiveAttrib(t,i),s=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[s]={type:r.type,location:n.getAttribLocation(t,s),locationSize:a}}return e}function an(n){return n!==""}function As(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function ns(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Hc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ui(n){return n.replace(Hc,kc)}const Gc=new Map;function kc(n,t){let e=Nt[t];if(e===void 0){const A=Gc.get(t);if(A!==void 0)e=Nt[A],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,A);else throw new Error("Can not resolve #include <"+t+">")}return Ui(e)}const Vc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function is(n){return n.replace(Vc,Wc)}function Wc(n,t,e,A){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=A.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function rs(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function Xc(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function qc(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Yc(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function $c(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function jc(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,A=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:A,maxMip:e}}function Kc(n,t,e,A){const i=n.getContext(),r=e.defines;let s=e.vertexShader,a=e.fragmentShader;const o=Xc(e),l=qc(e),c=Yc(e),u=$c(e),d=jc(e),f=Bc(e),m=Oc(r),_=i.createProgram();let p,h,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(an).join(`
`),p.length>0&&(p+=`
`),h=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(an).join(`
`),h.length>0&&(h+=`
`)):(p=[rs(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(an).join(`
`),h=[rs(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+l:"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+o:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Nt.tonemapping_pars_fragment:"",e.toneMapping!==0?Fc("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Nt.colorspace_pars_fragment,Uc("linearToOutputTexel",e.outputColorSpace),Nc(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(an).join(`
`)),s=Ui(s),s=As(s,e),s=ns(s,e),a=Ui(a),a=As(a,e),a=ns(a,e),s=is(s),a=is(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,h=["#define varying in",e.glslVersion===Yi?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Yi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+h);const E=w+p+s,S=w+h+a,D=Jr(i,i.VERTEX_SHADER,E),T=Jr(i,i.FRAGMENT_SHADER,S);i.attachShader(_,D),i.attachShader(_,T),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(P){if(n.debug.checkShaderErrors){const z=i.getProgramInfoLog(_)||"",G=i.getShaderInfoLog(D)||"",X=i.getShaderInfoLog(T)||"",Y=z.trim(),W=G.trim(),Q=X.trim();let H=!0,it=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,_,D,T);else{const ct=es(i,D,"vertex"),nt=es(i,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+Y+`
`+ct+`
`+nt)}else Y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Y):(W===""||Q==="")&&(it=!1);it&&(P.diagnostics={runnable:H,programLog:Y,vertexShader:{log:W,prefix:p},fragmentShader:{log:Q,prefix:h}})}i.deleteShader(D),i.deleteShader(T),N=new Xn(i,_),M=zc(i,_)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,Pc)),x},this.destroy=function(){A.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=Dc++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=D,this.fragmentShader=T,this}let Zc=0;class Qc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,A=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(A),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const A of e)A.usedTimes--,A.usedTimes===0&&this.shaderCache.delete(A.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let A=e.get(t);return A===void 0&&(A=new Set,e.set(t,A)),A}_getShaderStage(t){const e=this.shaderCache;let A=e.get(t);return A===void 0&&(A=new Jc(t),e.set(t,A)),A}}class Jc{constructor(t){this.id=Zc++,this.code=t,this.usedTimes=0}}function tu(n,t,e,A,i,r,s){const a=new Ar,o=new Qc,l=new Set,c=[],u=i.logarithmicDepthBuffer,d=i.vertexTextures;let f=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return l.add(M),M===0?"uv":`uv${M}`}function p(M,x,P,z,G){const X=z.fog,Y=G.geometry,W=M.isMeshStandardMaterial?z.environment:null,Q=(M.isMeshStandardMaterial?e:t).get(M.envMap||W),H=Q&&Q.mapping===306?Q.image.height:null,it=m[M.type];M.precision!==null&&(f=i.getMaxPrecision(M.precision),f!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",f,"instead."));const ct=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,nt=ct!==void 0?ct.length:0;let Pt=0;Y.morphAttributes.position!==void 0&&(Pt=1),Y.morphAttributes.normal!==void 0&&(Pt=2),Y.morphAttributes.color!==void 0&&(Pt=3);let Vt,Yt,Ot,q;if(it){const jt=We[it];Vt=jt.vertexShader,Yt=jt.fragmentShader}else Vt=M.vertexShader,Yt=M.fragmentShader,o.update(M),Ot=o.getVertexShaderID(M),q=o.getFragmentShaderID(M);const j=n.getRenderTarget(),ht=n.state.buffers.depth.getReversed(),Et=G.isInstancedMesh===!0,gt=G.isBatchedMesh===!0,Bt=!!M.map,oe=!!M.matcap,b=!!Q,Qt=!!M.aoMap,Dt=!!M.lightMap,bt=!!M.bumpMap,pt=!!M.normalMap,ee=!!M.displacementMap,ut=!!M.emissiveMap,Lt=!!M.metalnessMap,re=!!M.roughnessMap,$t=M.anisotropy>0,y=M.clearcoat>0,g=M.dispersion>0,F=M.iridescence>0,V=M.sheen>0,K=M.transmission>0,k=$t&&!!M.anisotropyMap,St=y&&!!M.clearcoatMap,At=y&&!!M.clearcoatNormalMap,vt=y&&!!M.clearcoatRoughnessMap,xt=F&&!!M.iridescenceMap,tt=F&&!!M.iridescenceThicknessMap,lt=V&&!!M.sheenColorMap,Rt=V&&!!M.sheenRoughnessMap,Mt=!!M.specularMap,at=!!M.specularColorMap,Ft=!!M.specularIntensityMap,R=K&&!!M.transmissionMap,et=K&&!!M.thicknessMap,rt=!!M.gradientMap,ft=!!M.alphaMap,Z=M.alphaTest>0,$=!!M.alphaHash,_t=!!M.extensions;let It=0;M.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(It=n.toneMapping);const Ae={shaderID:it,shaderType:M.type,shaderName:M.name,vertexShader:Vt,fragmentShader:Yt,defines:M.defines,customVertexShaderID:Ot,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:f,batching:gt,batchingColor:gt&&G._colorsTexture!==null,instancing:Et,instancingColor:Et&&G.instanceColor!==null,instancingMorph:Et&&G.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:j===null?n.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:EA,alphaToCoverage:!!M.alphaToCoverage,map:Bt,matcap:oe,envMap:b,envMapMode:b&&Q.mapping,envMapCubeUVHeight:H,aoMap:Qt,lightMap:Dt,bumpMap:bt,normalMap:pt,displacementMap:d&&ee,emissiveMap:ut,normalMapObjectSpace:pt&&M.normalMapType===1,normalMapTangentSpace:pt&&M.normalMapType===0,metalnessMap:Lt,roughnessMap:re,anisotropy:$t,anisotropyMap:k,clearcoat:y,clearcoatMap:St,clearcoatNormalMap:At,clearcoatRoughnessMap:vt,dispersion:g,iridescence:F,iridescenceMap:xt,iridescenceThicknessMap:tt,sheen:V,sheenColorMap:lt,sheenRoughnessMap:Rt,specularMap:Mt,specularColorMap:at,specularIntensityMap:Ft,transmission:K,transmissionMap:R,thicknessMap:et,gradientMap:rt,opaque:M.transparent===!1&&M.blending===1&&M.alphaToCoverage===!1,alphaMap:ft,alphaTest:Z,alphaHash:$,combine:M.combine,mapUv:Bt&&_(M.map.channel),aoMapUv:Qt&&_(M.aoMap.channel),lightMapUv:Dt&&_(M.lightMap.channel),bumpMapUv:bt&&_(M.bumpMap.channel),normalMapUv:pt&&_(M.normalMap.channel),displacementMapUv:ee&&_(M.displacementMap.channel),emissiveMapUv:ut&&_(M.emissiveMap.channel),metalnessMapUv:Lt&&_(M.metalnessMap.channel),roughnessMapUv:re&&_(M.roughnessMap.channel),anisotropyMapUv:k&&_(M.anisotropyMap.channel),clearcoatMapUv:St&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:At&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:vt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:xt&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:tt&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:lt&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:Rt&&_(M.sheenRoughnessMap.channel),specularMapUv:Mt&&_(M.specularMap.channel),specularColorMapUv:at&&_(M.specularColorMap.channel),specularIntensityMapUv:Ft&&_(M.specularIntensityMap.channel),transmissionMapUv:R&&_(M.transmissionMap.channel),thicknessMapUv:et&&_(M.thicknessMap.channel),alphaMapUv:ft&&_(M.alphaMap.channel),vertexTangents:!!Y.attributes.tangent&&(pt||$t),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,pointsUvs:G.isPoints===!0&&!!Y.attributes.uv&&(Bt||ft),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:u,reversedDepthBuffer:ht,skinning:G.isSkinnedMesh===!0,morphTargets:Y.morphAttributes.position!==void 0,morphNormals:Y.morphAttributes.normal!==void 0,morphColors:Y.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:Pt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:It,decodeVideoTexture:Bt&&M.map.isVideoTexture===!0&&Wt.getTransfer(M.map.colorSpace)===Zt,decodeVideoTextureEmissive:ut&&M.emissiveMap.isVideoTexture===!0&&Wt.getTransfer(M.emissiveMap.colorSpace)===Zt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===2,flipSided:M.side===1,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:_t&&M.extensions.clipCullDistance===!0&&A.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(_t&&M.extensions.multiDraw===!0||gt)&&A.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:A.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ae.vertexUv1s=l.has(1),Ae.vertexUv2s=l.has(2),Ae.vertexUv3s=l.has(3),l.clear(),Ae}function h(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const P in M.defines)x.push(P),x.push(M.defines[P]);return M.isRawShaderMaterial===!1&&(w(x,M),E(x,M),x.push(n.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function w(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function E(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const x=m[M.type];let P;if(x){const z=We[x];P=ia.clone(z.uniforms)}else P=M.uniforms;return P}function D(M,x){let P;for(let z=0,G=c.length;z<G;z++){const X=c[z];if(X.cacheKey===x){P=X,++P.usedTimes;break}}return P===void 0&&(P=new Kc(n,x,M,r),c.push(P)),P}function T(M){if(--M.usedTimes===0){const x=c.indexOf(M);c[x]=c[c.length-1],c.pop(),M.destroy()}}function C(M){o.remove(M)}function N(){o.dispose()}return{getParameters:p,getProgramCacheKey:h,getUniforms:S,acquireProgram:D,releaseProgram:T,releaseShaderCache:C,programs:c,dispose:N}}function eu(){let n=new WeakMap;function t(s){return n.has(s)}function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function A(s){n.delete(s)}function i(s,a,o){n.get(s)[a]=o}function r(){n=new WeakMap}return{has:t,get:e,remove:A,update:i,dispose:r}}function Au(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function ss(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function as(){const n=[];let t=0;const e=[],A=[],i=[];function r(){t=0,e.length=0,A.length=0,i.length=0}function s(u,d,f,m,_,p){let h=n[t];return h===void 0?(h={id:u.id,object:u,geometry:d,material:f,groupOrder:m,renderOrder:u.renderOrder,z:_,group:p},n[t]=h):(h.id=u.id,h.object=u,h.geometry=d,h.material=f,h.groupOrder=m,h.renderOrder=u.renderOrder,h.z=_,h.group=p),t++,h}function a(u,d,f,m,_,p){const h=s(u,d,f,m,_,p);f.transmission>0?A.push(h):f.transparent===!0?i.push(h):e.push(h)}function o(u,d,f,m,_,p){const h=s(u,d,f,m,_,p);f.transmission>0?A.unshift(h):f.transparent===!0?i.unshift(h):e.unshift(h)}function l(u,d){e.length>1&&e.sort(u||Au),A.length>1&&A.sort(d||ss),i.length>1&&i.sort(d||ss)}function c(){for(let u=t,d=n.length;u<d;u++){const f=n[u];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:e,transmissive:A,transparent:i,init:r,push:a,unshift:o,finish:c,sort:l}}function nu(){let n=new WeakMap;function t(A,i){const r=n.get(A);let s;return r===void 0?(s=new as,n.set(A,[s])):i>=r.length?(s=new as,r.push(s)):s=r[i],s}function e(){n=new WeakMap}return{get:t,dispose:e}}function iu(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Gt};break;case"SpotLight":e={position:new U,direction:new U,color:new Gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Gt,groundColor:new Gt};break;case"RectAreaLight":e={color:new Gt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function ru(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Kt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let su=0;function au(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function ou(n){const t=new iu,e=ru(),A={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)A.probe.push(new U);const i=new U,r=new ue,s=new ue;function a(l){let c=0,u=0,d=0;for(let M=0;M<9;M++)A.probe[M].set(0,0,0);let f=0,m=0,_=0,p=0,h=0,w=0,E=0,S=0,D=0,T=0,C=0;l.sort(au);for(let M=0,x=l.length;M<x;M++){const P=l[M],z=P.color,G=P.intensity,X=P.distance,Y=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)c+=z.r*G,u+=z.g*G,d+=z.b*G;else if(P.isLightProbe){for(let W=0;W<9;W++)A.probe[W].addScaledVector(P.sh.coefficients[W],G);C++}else if(P.isDirectionalLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const Q=P.shadow,H=e.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,A.directionalShadow[f]=H,A.directionalShadowMap[f]=Y,A.directionalShadowMatrix[f]=P.shadow.matrix,w++}A.directional[f]=W,f++}else if(P.isSpotLight){const W=t.get(P);W.position.setFromMatrixPosition(P.matrixWorld),W.color.copy(z).multiplyScalar(G),W.distance=X,W.coneCos=Math.cos(P.angle),W.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),W.decay=P.decay,A.spot[_]=W;const Q=P.shadow;if(P.map&&(A.spotLightMap[D]=P.map,D++,Q.updateMatrices(P),P.castShadow&&T++),A.spotLightMatrix[_]=Q.matrix,P.castShadow){const H=e.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,A.spotShadow[_]=H,A.spotShadowMap[_]=Y,S++}_++}else if(P.isRectAreaLight){const W=t.get(P);W.color.copy(z).multiplyScalar(G),W.halfWidth.set(P.width*.5,0,0),W.halfHeight.set(0,P.height*.5,0),A.rectArea[p]=W,p++}else if(P.isPointLight){const W=t.get(P);if(W.color.copy(P.color).multiplyScalar(P.intensity),W.distance=P.distance,W.decay=P.decay,P.castShadow){const Q=P.shadow,H=e.get(P);H.shadowIntensity=Q.intensity,H.shadowBias=Q.bias,H.shadowNormalBias=Q.normalBias,H.shadowRadius=Q.radius,H.shadowMapSize=Q.mapSize,H.shadowCameraNear=Q.camera.near,H.shadowCameraFar=Q.camera.far,A.pointShadow[m]=H,A.pointShadowMap[m]=Y,A.pointShadowMatrix[m]=P.shadow.matrix,E++}A.point[m]=W,m++}else if(P.isHemisphereLight){const W=t.get(P);W.skyColor.copy(P.color).multiplyScalar(G),W.groundColor.copy(P.groundColor).multiplyScalar(G),A.hemi[h]=W,h++}}p>0&&(n.has("OES_texture_float_linear")===!0?(A.rectAreaLTC1=st.LTC_FLOAT_1,A.rectAreaLTC2=st.LTC_FLOAT_2):(A.rectAreaLTC1=st.LTC_HALF_1,A.rectAreaLTC2=st.LTC_HALF_2)),A.ambient[0]=c,A.ambient[1]=u,A.ambient[2]=d;const N=A.hash;(N.directionalLength!==f||N.pointLength!==m||N.spotLength!==_||N.rectAreaLength!==p||N.hemiLength!==h||N.numDirectionalShadows!==w||N.numPointShadows!==E||N.numSpotShadows!==S||N.numSpotMaps!==D||N.numLightProbes!==C)&&(A.directional.length=f,A.spot.length=_,A.rectArea.length=p,A.point.length=m,A.hemi.length=h,A.directionalShadow.length=w,A.directionalShadowMap.length=w,A.pointShadow.length=E,A.pointShadowMap.length=E,A.spotShadow.length=S,A.spotShadowMap.length=S,A.directionalShadowMatrix.length=w,A.pointShadowMatrix.length=E,A.spotLightMatrix.length=S+D-T,A.spotLightMap.length=D,A.numSpotLightShadowsWithMaps=T,A.numLightProbes=C,N.directionalLength=f,N.pointLength=m,N.spotLength=_,N.rectAreaLength=p,N.hemiLength=h,N.numDirectionalShadows=w,N.numPointShadows=E,N.numSpotShadows=S,N.numSpotMaps=D,N.numLightProbes=C,A.version=su++)}function o(l,c){let u=0,d=0,f=0,m=0,_=0;const p=c.matrixWorldInverse;for(let h=0,w=l.length;h<w;h++){const E=l[h];if(E.isDirectionalLight){const S=A.directional[u];S.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),u++}else if(E.isSpotLight){const S=A.spot[f];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(E.matrixWorld),i.setFromMatrixPosition(E.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(p),f++}else if(E.isRectAreaLight){const S=A.rectArea[m];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),s.identity(),r.copy(E.matrixWorld),r.premultiply(p),s.extractRotation(r),S.halfWidth.set(E.width*.5,0,0),S.halfHeight.set(0,E.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),m++}else if(E.isPointLight){const S=A.point[d];S.position.setFromMatrixPosition(E.matrixWorld),S.position.applyMatrix4(p),d++}else if(E.isHemisphereLight){const S=A.hemi[_];S.direction.setFromMatrixPosition(E.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:a,setupView:o,state:A}}function os(n){const t=new ou(n),e=[],A=[];function i(c){l.camera=c,e.length=0,A.length=0}function r(c){e.push(c)}function s(c){A.push(c)}function a(){t.setup(e)}function o(c){t.setupView(e,c)}const l={lightsArray:e,shadowsArray:A,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:o,pushLight:r,pushShadow:s}}function lu(n){let t=new WeakMap;function e(i,r=0){const s=t.get(i);let a;return s===void 0?(a=new os(n),t.set(i,[a])):r>=s.length?(a=new os(n),s.push(a)):a=s[r],a}function A(){t=new WeakMap}return{get:e,dispose:A}}const cu=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,uu=`uniform sampler2D shadow_pass;
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
}`;function hu(n,t,e){let A=new Mr;const i=new Kt,r=new Kt,s=new ce,a=new _a({depthPacking:3201}),o=new va,l={},c=e.maxTextureSize,u={0:1,1:0,2:2},d=new ke({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Kt},radius:{value:4}},vertexShader:cu,fragmentShader:uu}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const m=new Ce;m.setAttribute("position",new fe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ge(m,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let h=this.type;this.render=function(T,C,N){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||T.length===0)return;const M=n.getRenderTarget(),x=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),z=n.state;z.setBlending(0),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const G=h!==3&&this.type===3,X=h===3&&this.type!==3;for(let Y=0,W=T.length;Y<W;Y++){const Q=T[Y],H=Q.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",Q,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const it=H.getFrameExtents();if(i.multiply(it),r.copy(H.mapSize),(i.x>c||i.y>c)&&(i.x>c&&(r.x=Math.floor(c/it.x),i.x=r.x*it.x,H.mapSize.x=r.x),i.y>c&&(r.y=Math.floor(c/it.y),i.y=r.y*it.y,H.mapSize.y=r.y)),H.map===null||G===!0||X===!0){const nt=this.type!==3?{minFilter:1003,magFilter:1003}:{};H.map!==null&&H.map.dispose(),H.map=new hA(i.x,i.y,nt),H.map.texture.name=Q.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const ct=H.getViewportCount();for(let nt=0;nt<ct;nt++){const Pt=H.getViewport(nt);s.set(r.x*Pt.x,r.y*Pt.y,r.x*Pt.z,r.y*Pt.w),z.viewport(s),H.updateMatrices(Q,nt),A=H.getFrustum(),S(C,N,H.camera,Q,this.type)}H.isPointLightShadow!==!0&&this.type===3&&w(H,N),H.needsUpdate=!1}h=this.type,p.needsUpdate=!1,n.setRenderTarget(M,x,P)};function w(T,C){const N=t.update(_);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new hA(i.x,i.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,n.setRenderTarget(T.mapPass),n.clear(),n.renderBufferDirect(C,null,N,d,_,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,n.setRenderTarget(T.map),n.clear(),n.renderBufferDirect(C,null,N,f,_,null)}function E(T,C,N,M){let x=null;const P=N.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)x=P;else if(x=N.isPointLight===!0?o:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=x.uuid,G=C.uuid;let X=l[z];X===void 0&&(X={},l[z]=X);let Y=X[G];Y===void 0&&(Y=x.clone(),X[G]=Y,C.addEventListener("dispose",D)),x=Y}if(x.visible=C.visible,x.wireframe=C.wireframe,M===3?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:u[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=n.properties.get(x);z.light=N}return x}function S(T,C,N,M,x){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&x===3)&&(!T.frustumCulled||A.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,T.matrixWorld);const G=t.update(T),X=T.material;if(Array.isArray(X)){const Y=G.groups;for(let W=0,Q=Y.length;W<Q;W++){const H=Y[W],it=X[H.materialIndex];if(it&&it.visible){const ct=E(T,it,M,x);T.onBeforeShadow(n,T,C,N,G,ct,H),n.renderBufferDirect(N,null,G,ct,T,H),T.onAfterShadow(n,T,C,N,G,ct,H)}}}else if(X.visible){const Y=E(T,X,M,x);T.onBeforeShadow(n,T,C,N,G,Y,null),n.renderBufferDirect(N,null,G,Y,T,null),T.onAfterShadow(n,T,C,N,G,Y,null)}}const z=T.children;for(let G=0,X=z.length;G<X;G++)S(z[G],C,N,M,x)}function D(T){T.target.removeEventListener("dispose",D);for(const N in l){const M=l[N],x=T.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const du={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function fu(n,t){function e(){let R=!1;const et=new ce;let rt=null;const ft=new ce(0,0,0,0);return{setMask:function(Z){rt!==Z&&!R&&(n.colorMask(Z,Z,Z,Z),rt=Z)},setLocked:function(Z){R=Z},setClear:function(Z,$,_t,It,Ae){Ae===!0&&(Z*=It,$*=It,_t*=It),et.set(Z,$,_t,It),ft.equals(et)===!1&&(n.clearColor(Z,$,_t,It),ft.copy(et))},reset:function(){R=!1,rt=null,ft.set(-1,0,0,0)}}}function A(){let R=!1,et=!1,rt=null,ft=null,Z=null;return{setReversed:function($){if(et!==$){const _t=t.get("EXT_clip_control");$?_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.ZERO_TO_ONE_EXT):_t.clipControlEXT(_t.LOWER_LEFT_EXT,_t.NEGATIVE_ONE_TO_ONE_EXT),et=$;const It=Z;Z=null,this.setClear(It)}},getReversed:function(){return et},setTest:function($){$?j(n.DEPTH_TEST):ht(n.DEPTH_TEST)},setMask:function($){rt!==$&&!R&&(n.depthMask($),rt=$)},setFunc:function($){if(et&&($=du[$]),ft!==$){switch($){case 0:n.depthFunc(n.NEVER);break;case 1:n.depthFunc(n.ALWAYS);break;case 2:n.depthFunc(n.LESS);break;case 3:n.depthFunc(n.LEQUAL);break;case 4:n.depthFunc(n.EQUAL);break;case 5:n.depthFunc(n.GEQUAL);break;case 6:n.depthFunc(n.GREATER);break;case 7:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ft=$}},setLocked:function($){R=$},setClear:function($){Z!==$&&(et&&($=1-$),n.clearDepth($),Z=$)},reset:function(){R=!1,rt=null,ft=null,Z=null,et=!1}}}function i(){let R=!1,et=null,rt=null,ft=null,Z=null,$=null,_t=null,It=null,Ae=null;return{setTest:function(jt){R||(jt?j(n.STENCIL_TEST):ht(n.STENCIL_TEST))},setMask:function(jt){et!==jt&&!R&&(n.stencilMask(jt),et=jt)},setFunc:function(jt,iA,Ye){(rt!==jt||ft!==iA||Z!==Ye)&&(n.stencilFunc(jt,iA,Ye),rt=jt,ft=iA,Z=Ye)},setOp:function(jt,iA,Ye){($!==jt||_t!==iA||It!==Ye)&&(n.stencilOp(jt,iA,Ye),$=jt,_t=iA,It=Ye)},setLocked:function(jt){R=jt},setClear:function(jt){Ae!==jt&&(n.clearStencil(jt),Ae=jt)},reset:function(){R=!1,et=null,rt=null,ft=null,Z=null,$=null,_t=null,It=null,Ae=null}}}const r=new e,s=new A,a=new i,o=new WeakMap,l=new WeakMap;let c={},u={},d=new WeakMap,f=[],m=null,_=!1,p=null,h=null,w=null,E=null,S=null,D=null,T=null,C=new Gt(0,0,0),N=0,M=!1,x=null,P=null,z=null,G=null,X=null;const Y=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,Q=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(Q=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=Q>=1):H.indexOf("OpenGL ES")!==-1&&(Q=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=Q>=2);let it=null,ct={};const nt=n.getParameter(n.SCISSOR_BOX),Pt=n.getParameter(n.VIEWPORT),Vt=new ce().fromArray(nt),Yt=new ce().fromArray(Pt);function Ot(R,et,rt,ft){const Z=new Uint8Array(4),$=n.createTexture();n.bindTexture(R,$),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let _t=0;_t<rt;_t++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(et,0,n.RGBA,1,1,ft,0,n.RGBA,n.UNSIGNED_BYTE,Z):n.texImage2D(et+_t,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Z);return $}const q={};q[n.TEXTURE_2D]=Ot(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=Ot(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=Ot(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=Ot(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),j(n.DEPTH_TEST),s.setFunc(3),bt(!1),pt(1),j(n.CULL_FACE),Qt(0);function j(R){c[R]!==!0&&(n.enable(R),c[R]=!0)}function ht(R){c[R]!==!1&&(n.disable(R),c[R]=!1)}function Et(R,et){return u[R]!==et?(n.bindFramebuffer(R,et),u[R]=et,R===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=et),R===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=et),!0):!1}function gt(R,et){let rt=f,ft=!1;if(R){rt=d.get(et),rt===void 0&&(rt=[],d.set(et,rt));const Z=R.textures;if(rt.length!==Z.length||rt[0]!==n.COLOR_ATTACHMENT0){for(let $=0,_t=Z.length;$<_t;$++)rt[$]=n.COLOR_ATTACHMENT0+$;rt.length=Z.length,ft=!0}}else rt[0]!==n.BACK&&(rt[0]=n.BACK,ft=!0);ft&&n.drawBuffers(rt)}function Bt(R){return m!==R?(n.useProgram(R),m=R,!0):!1}const oe={100:n.FUNC_ADD,101:n.FUNC_SUBTRACT,102:n.FUNC_REVERSE_SUBTRACT};oe[103]=n.MIN,oe[104]=n.MAX;const b={200:n.ZERO,201:n.ONE,202:n.SRC_COLOR,204:n.SRC_ALPHA,210:n.SRC_ALPHA_SATURATE,208:n.DST_COLOR,206:n.DST_ALPHA,203:n.ONE_MINUS_SRC_COLOR,205:n.ONE_MINUS_SRC_ALPHA,209:n.ONE_MINUS_DST_COLOR,207:n.ONE_MINUS_DST_ALPHA,211:n.CONSTANT_COLOR,212:n.ONE_MINUS_CONSTANT_COLOR,213:n.CONSTANT_ALPHA,214:n.ONE_MINUS_CONSTANT_ALPHA};function Qt(R,et,rt,ft,Z,$,_t,It,Ae,jt){if(R===0){_===!0&&(ht(n.BLEND),_=!1);return}if(_===!1&&(j(n.BLEND),_=!0),R!==5){if(R!==p||jt!==M){if((h!==100||S!==100)&&(n.blendEquation(n.FUNC_ADD),h=100,S=100),jt)switch(R){case 1:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.ONE,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case 1:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case 3:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}w=null,E=null,D=null,T=null,C.set(0,0,0),N=0,p=R,M=jt}return}Z=Z||et,$=$||rt,_t=_t||ft,(et!==h||Z!==S)&&(n.blendEquationSeparate(oe[et],oe[Z]),h=et,S=Z),(rt!==w||ft!==E||$!==D||_t!==T)&&(n.blendFuncSeparate(b[rt],b[ft],b[$],b[_t]),w=rt,E=ft,D=$,T=_t),(It.equals(C)===!1||Ae!==N)&&(n.blendColor(It.r,It.g,It.b,Ae),C.copy(It),N=Ae),p=R,M=!1}function Dt(R,et){R.side===2?ht(n.CULL_FACE):j(n.CULL_FACE);let rt=R.side===1;et&&(rt=!rt),bt(rt),R.blending===1&&R.transparent===!1?Qt(0):Qt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),s.setFunc(R.depthFunc),s.setTest(R.depthTest),s.setMask(R.depthWrite),r.setMask(R.colorWrite);const ft=R.stencilWrite;a.setTest(ft),ft&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),ut(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?j(n.SAMPLE_ALPHA_TO_COVERAGE):ht(n.SAMPLE_ALPHA_TO_COVERAGE)}function bt(R){x!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),x=R)}function pt(R){R!==0?(j(n.CULL_FACE),R!==P&&(R===1?n.cullFace(n.BACK):R===2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ht(n.CULL_FACE),P=R}function ee(R){R!==z&&(W&&n.lineWidth(R),z=R)}function ut(R,et,rt){R?(j(n.POLYGON_OFFSET_FILL),(G!==et||X!==rt)&&(n.polygonOffset(et,rt),G=et,X=rt)):ht(n.POLYGON_OFFSET_FILL)}function Lt(R){R?j(n.SCISSOR_TEST):ht(n.SCISSOR_TEST)}function re(R){R===void 0&&(R=n.TEXTURE0+Y-1),it!==R&&(n.activeTexture(R),it=R)}function $t(R,et,rt){rt===void 0&&(it===null?rt=n.TEXTURE0+Y-1:rt=it);let ft=ct[rt];ft===void 0&&(ft={type:void 0,texture:void 0},ct[rt]=ft),(ft.type!==R||ft.texture!==et)&&(it!==rt&&(n.activeTexture(rt),it=rt),n.bindTexture(R,et||q[R]),ft.type=R,ft.texture=et)}function y(){const R=ct[it];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function V(){try{n.texSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function K(){try{n.texSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function k(){try{n.compressedTexSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function St(){try{n.compressedTexSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function At(){try{n.texStorage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function vt(){try{n.texStorage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xt(){try{n.texImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function tt(){try{n.texImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function lt(R){Vt.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),Vt.copy(R))}function Rt(R){Yt.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),Yt.copy(R))}function Mt(R,et){let rt=l.get(et);rt===void 0&&(rt=new WeakMap,l.set(et,rt));let ft=rt.get(R);ft===void 0&&(ft=n.getUniformBlockIndex(et,R.name),rt.set(R,ft))}function at(R,et){const ft=l.get(et).get(R);o.get(et)!==ft&&(n.uniformBlockBinding(et,ft,R.__bindingPointIndex),o.set(et,ft))}function Ft(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),c={},it=null,ct={},u={},d=new WeakMap,f=[],m=null,_=!1,p=null,h=null,w=null,E=null,S=null,D=null,T=null,C=new Gt(0,0,0),N=0,M=!1,x=null,P=null,z=null,G=null,X=null,Vt.set(0,0,n.canvas.width,n.canvas.height),Yt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:j,disable:ht,bindFramebuffer:Et,drawBuffers:gt,useProgram:Bt,setBlending:Qt,setMaterial:Dt,setFlipSided:bt,setCullFace:pt,setLineWidth:ee,setPolygonOffset:ut,setScissorTest:Lt,activeTexture:re,bindTexture:$t,unbindTexture:y,compressedTexImage2D:g,compressedTexImage3D:F,texImage2D:xt,texImage3D:tt,updateUBOMapping:Mt,uniformBlockBinding:at,texStorage2D:At,texStorage3D:vt,texSubImage2D:V,texSubImage3D:K,compressedTexSubImage2D:k,compressedTexSubImage3D:St,scissor:lt,viewport:Rt,reset:Ft}}function pu(n,t,e,A,i,r,s){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,o=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Kt,c=new WeakMap;let u;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(y,g){return f?new OffscreenCanvas(y,g):gn("canvas")}function _(y,g,F){let V=1;const K=$t(y);if((K.width>F||K.height>F)&&(V=F/Math.max(K.width,K.height)),V<1)if(typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&y instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&y instanceof ImageBitmap||typeof VideoFrame<"u"&&y instanceof VideoFrame){const k=Math.floor(V*K.width),St=Math.floor(V*K.height);u===void 0&&(u=m(k,St));const At=g?m(k,St):u;return At.width=k,At.height=St,At.getContext("2d").drawImage(y,0,0,k,St),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+k+"x"+St+")."),At}else return"data"in y&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),y;return y}function p(y){return y.generateMipmaps}function h(y){n.generateMipmap(y)}function w(y){return y.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:y.isWebGL3DRenderTarget?n.TEXTURE_3D:y.isWebGLArrayRenderTarget||y.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function E(y,g,F,V,K=!1){if(y!==null){if(n[y]!==void 0)return n[y];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+y+"'")}let k=g;if(g===n.RED&&(F===n.FLOAT&&(k=n.R32F),F===n.HALF_FLOAT&&(k=n.R16F),F===n.UNSIGNED_BYTE&&(k=n.R8)),g===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(k=n.R8UI),F===n.UNSIGNED_SHORT&&(k=n.R16UI),F===n.UNSIGNED_INT&&(k=n.R32UI),F===n.BYTE&&(k=n.R8I),F===n.SHORT&&(k=n.R16I),F===n.INT&&(k=n.R32I)),g===n.RG&&(F===n.FLOAT&&(k=n.RG32F),F===n.HALF_FLOAT&&(k=n.RG16F),F===n.UNSIGNED_BYTE&&(k=n.RG8)),g===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(k=n.RG8UI),F===n.UNSIGNED_SHORT&&(k=n.RG16UI),F===n.UNSIGNED_INT&&(k=n.RG32UI),F===n.BYTE&&(k=n.RG8I),F===n.SHORT&&(k=n.RG16I),F===n.INT&&(k=n.RG32I)),g===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(k=n.RGB8UI),F===n.UNSIGNED_SHORT&&(k=n.RGB16UI),F===n.UNSIGNED_INT&&(k=n.RGB32UI),F===n.BYTE&&(k=n.RGB8I),F===n.SHORT&&(k=n.RGB16I),F===n.INT&&(k=n.RGB32I)),g===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(k=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(k=n.RGBA16UI),F===n.UNSIGNED_INT&&(k=n.RGBA32UI),F===n.BYTE&&(k=n.RGBA8I),F===n.SHORT&&(k=n.RGBA16I),F===n.INT&&(k=n.RGBA32I)),g===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(k=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(k=n.R11F_G11F_B10F)),g===n.RGBA){const St=K?mn:Wt.getTransfer(V);F===n.FLOAT&&(k=n.RGBA32F),F===n.HALF_FLOAT&&(k=n.RGBA16F),F===n.UNSIGNED_BYTE&&(k=St===Zt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(k=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(k=n.RGB5_A1)}return(k===n.R16F||k===n.R32F||k===n.RG16F||k===n.RG32F||k===n.RGBA16F||k===n.RGBA32F)&&t.get("EXT_color_buffer_float"),k}function S(y,g){let F;return y?g===null||g===1014||g===1020?F=n.DEPTH24_STENCIL8:g===1015?F=n.DEPTH32F_STENCIL8:g===1012&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===1014||g===1020?F=n.DEPTH_COMPONENT24:g===1015?F=n.DEPTH_COMPONENT32F:g===1012&&(F=n.DEPTH_COMPONENT16),F}function D(y,g){return p(y)===!0||y.isFramebufferTexture&&y.minFilter!==1003&&y.minFilter!==1006?Math.log2(Math.max(g.width,g.height))+1:y.mipmaps!==void 0&&y.mipmaps.length>0?y.mipmaps.length:y.isCompressedTexture&&Array.isArray(y.image)?g.mipmaps.length:1}function T(y){const g=y.target;g.removeEventListener("dispose",T),N(g),g.isVideoTexture&&c.delete(g)}function C(y){const g=y.target;g.removeEventListener("dispose",C),x(g)}function N(y){const g=A.get(y);if(g.__webglInit===void 0)return;const F=y.source,V=d.get(F);if(V){const K=V[g.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(y),Object.keys(V).length===0&&d.delete(F)}A.remove(y)}function M(y){const g=A.get(y);n.deleteTexture(g.__webglTexture);const F=y.source,V=d.get(F);delete V[g.__cacheKey],s.memory.textures--}function x(y){const g=A.get(y);if(y.depthTexture&&(y.depthTexture.dispose(),A.remove(y.depthTexture)),y.isWebGLCubeRenderTarget)for(let V=0;V<6;V++){if(Array.isArray(g.__webglFramebuffer[V]))for(let K=0;K<g.__webglFramebuffer[V].length;K++)n.deleteFramebuffer(g.__webglFramebuffer[V][K]);else n.deleteFramebuffer(g.__webglFramebuffer[V]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[V])}else{if(Array.isArray(g.__webglFramebuffer))for(let V=0;V<g.__webglFramebuffer.length;V++)n.deleteFramebuffer(g.__webglFramebuffer[V]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let V=0;V<g.__webglColorRenderbuffer.length;V++)g.__webglColorRenderbuffer[V]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[V]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=y.textures;for(let V=0,K=F.length;V<K;V++){const k=A.get(F[V]);k.__webglTexture&&(n.deleteTexture(k.__webglTexture),s.memory.textures--),A.remove(F[V])}A.remove(y)}let P=0;function z(){P=0}function G(){const y=P;return y>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+y+" texture units while this GPU supports only "+i.maxTextures),P+=1,y}function X(y){const g=[];return g.push(y.wrapS),g.push(y.wrapT),g.push(y.wrapR||0),g.push(y.magFilter),g.push(y.minFilter),g.push(y.anisotropy),g.push(y.internalFormat),g.push(y.format),g.push(y.type),g.push(y.generateMipmaps),g.push(y.premultiplyAlpha),g.push(y.flipY),g.push(y.unpackAlignment),g.push(y.colorSpace),g.join()}function Y(y,g){const F=A.get(y);if(y.isVideoTexture&&Lt(y),y.isRenderTargetTexture===!1&&y.isExternalTexture!==!0&&y.version>0&&F.__version!==y.version){const V=y.image;if(V===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(V.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,y,g);return}}else y.isExternalTexture&&(F.__webglTexture=y.sourceTexture?y.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+g)}function W(y,g){const F=A.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){q(F,y,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+g)}function Q(y,g){const F=A.get(y);if(y.isRenderTargetTexture===!1&&y.version>0&&F.__version!==y.version){q(F,y,g);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+g)}function H(y,g){const F=A.get(y);if(y.version>0&&F.__version!==y.version){j(F,y,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+g)}const it={1e3:n.REPEAT,1001:n.CLAMP_TO_EDGE,1002:n.MIRRORED_REPEAT},ct={1003:n.NEAREST,1004:n.NEAREST_MIPMAP_NEAREST,1005:n.NEAREST_MIPMAP_LINEAR,1006:n.LINEAR,1007:n.LINEAR_MIPMAP_NEAREST,1008:n.LINEAR_MIPMAP_LINEAR},nt={512:n.NEVER,519:n.ALWAYS,513:n.LESS,515:n.LEQUAL,514:n.EQUAL,518:n.GEQUAL,516:n.GREATER,517:n.NOTEQUAL};function Pt(y,g){if(g.type===1015&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===1006||g.magFilter===1007||g.magFilter===1005||g.magFilter===1008||g.minFilter===1006||g.minFilter===1007||g.minFilter===1005||g.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(y,n.TEXTURE_WRAP_S,it[g.wrapS]),n.texParameteri(y,n.TEXTURE_WRAP_T,it[g.wrapT]),(y===n.TEXTURE_3D||y===n.TEXTURE_2D_ARRAY)&&n.texParameteri(y,n.TEXTURE_WRAP_R,it[g.wrapR]),n.texParameteri(y,n.TEXTURE_MAG_FILTER,ct[g.magFilter]),n.texParameteri(y,n.TEXTURE_MIN_FILTER,ct[g.minFilter]),g.compareFunction&&(n.texParameteri(y,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(y,n.TEXTURE_COMPARE_FUNC,nt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===1003||g.minFilter!==1005&&g.minFilter!==1008||g.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||A.get(g).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(y,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),A.get(g).__currentAnisotropy=g.anisotropy}}}function Vt(y,g){let F=!1;y.__webglInit===void 0&&(y.__webglInit=!0,g.addEventListener("dispose",T));const V=g.source;let K=d.get(V);K===void 0&&(K={},d.set(V,K));const k=X(g);if(k!==y.__cacheKey){K[k]===void 0&&(K[k]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,F=!0),K[k].usedTimes++;const St=K[y.__cacheKey];St!==void 0&&(K[y.__cacheKey].usedTimes--,St.usedTimes===0&&M(g)),y.__cacheKey=k,y.__webglTexture=K[k].texture}return F}function Yt(y,g,F){return Math.floor(Math.floor(y/F)/g)}function Ot(y,g,F,V){const k=y.updateRanges;if(k.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,F,V,g.data);else{k.sort((tt,lt)=>tt.start-lt.start);let St=0;for(let tt=1;tt<k.length;tt++){const lt=k[St],Rt=k[tt],Mt=lt.start+lt.count,at=Yt(Rt.start,g.width,4),Ft=Yt(lt.start,g.width,4);Rt.start<=Mt+1&&at===Ft&&Yt(Rt.start+Rt.count-1,g.width,4)===at?lt.count=Math.max(lt.count,Rt.start+Rt.count-lt.start):(++St,k[St]=Rt)}k.length=St+1;const At=n.getParameter(n.UNPACK_ROW_LENGTH),vt=n.getParameter(n.UNPACK_SKIP_PIXELS),xt=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let tt=0,lt=k.length;tt<lt;tt++){const Rt=k[tt],Mt=Math.floor(Rt.start/4),at=Math.ceil(Rt.count/4),Ft=Mt%g.width,R=Math.floor(Mt/g.width),et=at,rt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ft),n.pixelStorei(n.UNPACK_SKIP_ROWS,R),e.texSubImage2D(n.TEXTURE_2D,0,Ft,R,et,rt,F,V,g.data)}y.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,At),n.pixelStorei(n.UNPACK_SKIP_PIXELS,vt),n.pixelStorei(n.UNPACK_SKIP_ROWS,xt)}}function q(y,g,F){let V=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(V=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(V=n.TEXTURE_3D);const K=Vt(y,g),k=g.source;e.bindTexture(V,y.__webglTexture,n.TEXTURE0+F);const St=A.get(k);if(k.version!==St.__version||K===!0){e.activeTexture(n.TEXTURE0+F);const At=Wt.getPrimaries(Wt.workingColorSpace),vt=g.colorSpace===""?null:Wt.getPrimaries(g.colorSpace),xt=g.colorSpace===""||At===vt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,xt);let tt=_(g.image,!1,i.maxTextureSize);tt=re(g,tt);const lt=r.convert(g.format,g.colorSpace),Rt=r.convert(g.type);let Mt=E(g.internalFormat,lt,Rt,g.colorSpace,g.isVideoTexture);Pt(V,g);let at;const Ft=g.mipmaps,R=g.isVideoTexture!==!0,et=St.__version===void 0||K===!0,rt=k.dataReady,ft=D(g,tt);if(g.isDepthTexture)Mt=S(g.format===1027,g.type),et&&(R?e.texStorage2D(n.TEXTURE_2D,1,Mt,tt.width,tt.height):e.texImage2D(n.TEXTURE_2D,0,Mt,tt.width,tt.height,0,lt,Rt,null));else if(g.isDataTexture)if(Ft.length>0){R&&et&&e.texStorage2D(n.TEXTURE_2D,ft,Mt,Ft[0].width,Ft[0].height);for(let Z=0,$=Ft.length;Z<$;Z++)at=Ft[Z],R?rt&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,at.width,at.height,lt,Rt,at.data):e.texImage2D(n.TEXTURE_2D,Z,Mt,at.width,at.height,0,lt,Rt,at.data);g.generateMipmaps=!1}else R?(et&&e.texStorage2D(n.TEXTURE_2D,ft,Mt,tt.width,tt.height),rt&&Ot(g,tt,lt,Rt)):e.texImage2D(n.TEXTURE_2D,0,Mt,tt.width,tt.height,0,lt,Rt,tt.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){R&&et&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Mt,Ft[0].width,Ft[0].height,tt.depth);for(let Z=0,$=Ft.length;Z<$;Z++)if(at=Ft[Z],g.format!==1023)if(lt!==null)if(R){if(rt)if(g.layerUpdates.size>0){const _t=Ir(at.width,at.height,g.format,g.type);for(const It of g.layerUpdates){const Ae=at.data.subarray(It*_t/at.data.BYTES_PER_ELEMENT,(It+1)*_t/at.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,It,at.width,at.height,1,lt,Ae)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,at.width,at.height,tt.depth,lt,at.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,Mt,at.width,at.height,tt.depth,0,at.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?rt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,at.width,at.height,tt.depth,lt,Rt,at.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Z,Mt,at.width,at.height,tt.depth,0,lt,Rt,at.data)}else{R&&et&&e.texStorage2D(n.TEXTURE_2D,ft,Mt,Ft[0].width,Ft[0].height);for(let Z=0,$=Ft.length;Z<$;Z++)at=Ft[Z],g.format!==1023?lt!==null?R?rt&&e.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,at.width,at.height,lt,at.data):e.compressedTexImage2D(n.TEXTURE_2D,Z,Mt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?rt&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,at.width,at.height,lt,Rt,at.data):e.texImage2D(n.TEXTURE_2D,Z,Mt,at.width,at.height,0,lt,Rt,at.data)}else if(g.isDataArrayTexture)if(R){if(et&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ft,Mt,tt.width,tt.height,tt.depth),rt)if(g.layerUpdates.size>0){const Z=Ir(tt.width,tt.height,g.format,g.type);for(const $ of g.layerUpdates){const _t=tt.data.subarray($*Z/tt.data.BYTES_PER_ELEMENT,($+1)*Z/tt.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,$,tt.width,tt.height,1,lt,Rt,_t)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,tt.width,tt.height,tt.depth,lt,Rt,tt.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Mt,tt.width,tt.height,tt.depth,0,lt,Rt,tt.data);else if(g.isData3DTexture)R?(et&&e.texStorage3D(n.TEXTURE_3D,ft,Mt,tt.width,tt.height,tt.depth),rt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,tt.width,tt.height,tt.depth,lt,Rt,tt.data)):e.texImage3D(n.TEXTURE_3D,0,Mt,tt.width,tt.height,tt.depth,0,lt,Rt,tt.data);else if(g.isFramebufferTexture){if(et)if(R)e.texStorage2D(n.TEXTURE_2D,ft,Mt,tt.width,tt.height);else{let Z=tt.width,$=tt.height;for(let _t=0;_t<ft;_t++)e.texImage2D(n.TEXTURE_2D,_t,Mt,Z,$,0,lt,Rt,null),Z>>=1,$>>=1}}else if(Ft.length>0){if(R&&et){const Z=$t(Ft[0]);e.texStorage2D(n.TEXTURE_2D,ft,Mt,Z.width,Z.height)}for(let Z=0,$=Ft.length;Z<$;Z++)at=Ft[Z],R?rt&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,lt,Rt,at):e.texImage2D(n.TEXTURE_2D,Z,Mt,lt,Rt,at);g.generateMipmaps=!1}else if(R){if(et){const Z=$t(tt);e.texStorage2D(n.TEXTURE_2D,ft,Mt,Z.width,Z.height)}rt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,lt,Rt,tt)}else e.texImage2D(n.TEXTURE_2D,0,Mt,lt,Rt,tt);p(g)&&h(V),St.__version=k.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function j(y,g,F){if(g.image.length!==6)return;const V=Vt(y,g),K=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,y.__webglTexture,n.TEXTURE0+F);const k=A.get(K);if(K.version!==k.__version||V===!0){e.activeTexture(n.TEXTURE0+F);const St=Wt.getPrimaries(Wt.workingColorSpace),At=g.colorSpace===""?null:Wt.getPrimaries(g.colorSpace),vt=g.colorSpace===""||St===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,vt);const xt=g.isCompressedTexture||g.image[0].isCompressedTexture,tt=g.image[0]&&g.image[0].isDataTexture,lt=[];for(let $=0;$<6;$++)!xt&&!tt?lt[$]=_(g.image[$],!0,i.maxCubemapSize):lt[$]=tt?g.image[$].image:g.image[$],lt[$]=re(g,lt[$]);const Rt=lt[0],Mt=r.convert(g.format,g.colorSpace),at=r.convert(g.type),Ft=E(g.internalFormat,Mt,at,g.colorSpace),R=g.isVideoTexture!==!0,et=k.__version===void 0||V===!0,rt=K.dataReady;let ft=D(g,Rt);Pt(n.TEXTURE_CUBE_MAP,g);let Z;if(xt){R&&et&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ft,Rt.width,Rt.height);for(let $=0;$<6;$++){Z=lt[$].mipmaps;for(let _t=0;_t<Z.length;_t++){const It=Z[_t];g.format!==1023?Mt!==null?R?rt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t,0,0,It.width,It.height,Mt,It.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t,Ft,It.width,It.height,0,It.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t,0,0,It.width,It.height,Mt,at,It.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t,Ft,It.width,It.height,0,Mt,at,It.data)}}}else{if(Z=g.mipmaps,R&&et){Z.length>0&&ft++;const $=$t(lt[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ft,Ft,$.width,$.height)}for(let $=0;$<6;$++)if(tt){R?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,lt[$].width,lt[$].height,Mt,at,lt[$].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ft,lt[$].width,lt[$].height,0,Mt,at,lt[$].data);for(let _t=0;_t<Z.length;_t++){const Ae=Z[_t].image[$].image;R?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t+1,0,0,Ae.width,Ae.height,Mt,at,Ae.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t+1,Ft,Ae.width,Ae.height,0,Mt,at,Ae.data)}}else{R?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,0,0,Mt,at,lt[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,0,Ft,Mt,at,lt[$]);for(let _t=0;_t<Z.length;_t++){const It=Z[_t];R?rt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t+1,0,0,Mt,at,It.image[$]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+$,_t+1,Ft,Mt,at,It.image[$])}}}p(g)&&h(n.TEXTURE_CUBE_MAP),k.__version=K.version,g.onUpdate&&g.onUpdate(g)}y.__version=g.version}function ht(y,g,F,V,K,k){const St=r.convert(F.format,F.colorSpace),At=r.convert(F.type),vt=E(F.internalFormat,St,At,F.colorSpace),xt=A.get(g),tt=A.get(F);if(tt.__renderTarget=g,!xt.__hasExternalTextures){const lt=Math.max(1,g.width>>k),Rt=Math.max(1,g.height>>k);K===n.TEXTURE_3D||K===n.TEXTURE_2D_ARRAY?e.texImage3D(K,k,vt,lt,Rt,g.depth,0,St,At,null):e.texImage2D(K,k,vt,lt,Rt,0,St,At,null)}e.bindFramebuffer(n.FRAMEBUFFER,y),ut(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,V,K,tt.__webglTexture,0,ee(g)):(K===n.TEXTURE_2D||K>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,V,K,tt.__webglTexture,k),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Et(y,g,F){if(n.bindRenderbuffer(n.RENDERBUFFER,y),g.depthBuffer){const V=g.depthTexture,K=V&&V.isDepthTexture?V.type:null,k=S(g.stencilBuffer,K),St=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=ee(g);ut(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At,k,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,At,k,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,k,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,St,n.RENDERBUFFER,y)}else{const V=g.textures;for(let K=0;K<V.length;K++){const k=V[K],St=r.convert(k.format,k.colorSpace),At=r.convert(k.type),vt=E(k.internalFormat,St,At,k.colorSpace),xt=ee(g);F&&ut(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xt,vt,g.width,g.height):ut(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xt,vt,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,vt,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function gt(y,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,y),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const V=A.get(g.depthTexture);V.__renderTarget=g,(!V.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),Y(g.depthTexture,0);const K=V.__webglTexture,k=ee(g);if(g.depthTexture.format===1026)ut(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,K,0);else if(g.depthTexture.format===1027)ut(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0,k):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Bt(y){const g=A.get(y),F=y.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==y.depthTexture){const V=y.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),V){const K=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,V.removeEventListener("dispose",K)};V.addEventListener("dispose",K),g.__depthDisposeCallback=K}g.__boundDepthTexture=V}if(y.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const V=y.texture.mipmaps;V&&V.length>0?gt(g.__webglFramebuffer[0],y):gt(g.__webglFramebuffer,y)}else if(F){g.__webglDepthbuffer=[];for(let V=0;V<6;V++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[V]),g.__webglDepthbuffer[V]===void 0)g.__webglDepthbuffer[V]=n.createRenderbuffer(),Et(g.__webglDepthbuffer[V],y,!1);else{const K=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer[V];n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,k)}}else{const V=y.texture.mipmaps;if(V&&V.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Et(g.__webglDepthbuffer,y,!1);else{const K=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,k=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,k),n.framebufferRenderbuffer(n.FRAMEBUFFER,K,n.RENDERBUFFER,k)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function oe(y,g,F){const V=A.get(y);g!==void 0&&ht(V.__webglFramebuffer,y,y.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Bt(y)}function b(y){const g=y.texture,F=A.get(y),V=A.get(g);y.addEventListener("dispose",C);const K=y.textures,k=y.isWebGLCubeRenderTarget===!0,St=K.length>1;if(St||(V.__webglTexture===void 0&&(V.__webglTexture=n.createTexture()),V.__version=g.version,s.memory.textures++),k){F.__webglFramebuffer=[];for(let At=0;At<6;At++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[At]=[];for(let vt=0;vt<g.mipmaps.length;vt++)F.__webglFramebuffer[At][vt]=n.createFramebuffer()}else F.__webglFramebuffer[At]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let At=0;At<g.mipmaps.length;At++)F.__webglFramebuffer[At]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(St)for(let At=0,vt=K.length;At<vt;At++){const xt=A.get(K[At]);xt.__webglTexture===void 0&&(xt.__webglTexture=n.createTexture(),s.memory.textures++)}if(y.samples>0&&ut(y)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let At=0;At<K.length;At++){const vt=K[At];F.__webglColorRenderbuffer[At]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[At]);const xt=r.convert(vt.format,vt.colorSpace),tt=r.convert(vt.type),lt=E(vt.internalFormat,xt,tt,vt.colorSpace,y.isXRRenderTarget===!0),Rt=ee(y);n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,lt,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,F.__webglColorRenderbuffer[At])}n.bindRenderbuffer(n.RENDERBUFFER,null),y.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Et(F.__webglDepthRenderbuffer,y,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(k){e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture),Pt(n.TEXTURE_CUBE_MAP,g);for(let At=0;At<6;At++)if(g.mipmaps&&g.mipmaps.length>0)for(let vt=0;vt<g.mipmaps.length;vt++)ht(F.__webglFramebuffer[At][vt],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+At,vt);else ht(F.__webglFramebuffer[At],y,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);p(g)&&h(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(St){for(let At=0,vt=K.length;At<vt;At++){const xt=K[At],tt=A.get(xt);let lt=n.TEXTURE_2D;(y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(lt=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(lt,tt.__webglTexture),Pt(lt,xt),ht(F.__webglFramebuffer,y,xt,n.COLOR_ATTACHMENT0+At,lt,0),p(xt)&&h(lt)}e.unbindTexture()}else{let At=n.TEXTURE_2D;if((y.isWebGL3DRenderTarget||y.isWebGLArrayRenderTarget)&&(At=y.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(At,V.__webglTexture),Pt(At,g),g.mipmaps&&g.mipmaps.length>0)for(let vt=0;vt<g.mipmaps.length;vt++)ht(F.__webglFramebuffer[vt],y,g,n.COLOR_ATTACHMENT0,At,vt);else ht(F.__webglFramebuffer,y,g,n.COLOR_ATTACHMENT0,At,0);p(g)&&h(At),e.unbindTexture()}y.depthBuffer&&Bt(y)}function Qt(y){const g=y.textures;for(let F=0,V=g.length;F<V;F++){const K=g[F];if(p(K)){const k=w(y),St=A.get(K).__webglTexture;e.bindTexture(k,St),h(k),e.unbindTexture()}}}const Dt=[],bt=[];function pt(y){if(y.samples>0){if(ut(y)===!1){const g=y.textures,F=y.width,V=y.height;let K=n.COLOR_BUFFER_BIT;const k=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,St=A.get(y),At=g.length>1;if(At)for(let xt=0;xt<g.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,St.__webglMultisampledFramebuffer);const vt=y.texture.mipmaps;vt&&vt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglFramebuffer);for(let xt=0;xt<g.length;xt++){if(y.resolveDepthBuffer&&(y.depthBuffer&&(K|=n.DEPTH_BUFFER_BIT),y.stencilBuffer&&y.resolveStencilBuffer&&(K|=n.STENCIL_BUFFER_BIT)),At){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);const tt=A.get(g[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,tt,0)}n.blitFramebuffer(0,0,F,V,0,0,F,V,K,n.NEAREST),o===!0&&(Dt.length=0,bt.length=0,Dt.push(n.COLOR_ATTACHMENT0+xt),y.depthBuffer&&y.resolveDepthBuffer===!1&&(Dt.push(k),bt.push(k),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,bt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Dt))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),At)for(let xt=0;xt<g.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,St.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,St.__webglColorRenderbuffer[xt]);const tt=A.get(g[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,St.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,tt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,St.__webglMultisampledFramebuffer)}else if(y.depthBuffer&&y.resolveDepthBuffer===!1&&o){const g=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function ee(y){return Math.min(i.maxSamples,y.samples)}function ut(y){const g=A.get(y);return y.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Lt(y){const g=s.render.frame;c.get(y)!==g&&(c.set(y,g),y.update())}function re(y,g){const F=y.colorSpace,V=y.format,K=y.type;return y.isCompressedTexture===!0||y.isVideoTexture===!0||F!==EA&&F!==""&&(Wt.getTransfer(F)===Zt?(V!==1023||K!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function $t(y){return typeof HTMLImageElement<"u"&&y instanceof HTMLImageElement?(l.width=y.naturalWidth||y.width,l.height=y.naturalHeight||y.height):typeof VideoFrame<"u"&&y instanceof VideoFrame?(l.width=y.displayWidth,l.height=y.displayHeight):(l.width=y.width,l.height=y.height),l}this.allocateTextureUnit=G,this.resetTextureUnits=z,this.setTexture2D=Y,this.setTexture2DArray=W,this.setTexture3D=Q,this.setTextureCube=H,this.rebindTextures=oe,this.setupRenderTarget=b,this.updateRenderTargetMipmap=Qt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Bt,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=ut}function mu(n,t){function e(A,i=""){let r;const s=Wt.getTransfer(i);if(A===1009)return n.UNSIGNED_BYTE;if(A===1017)return n.UNSIGNED_SHORT_4_4_4_4;if(A===1018)return n.UNSIGNED_SHORT_5_5_5_1;if(A===35902)return n.UNSIGNED_INT_5_9_9_9_REV;if(A===35899)return n.UNSIGNED_INT_10F_11F_11F_REV;if(A===1010)return n.BYTE;if(A===1011)return n.SHORT;if(A===1012)return n.UNSIGNED_SHORT;if(A===1013)return n.INT;if(A===1014)return n.UNSIGNED_INT;if(A===1015)return n.FLOAT;if(A===1016)return n.HALF_FLOAT;if(A===1021)return n.ALPHA;if(A===1022)return n.RGB;if(A===1023)return n.RGBA;if(A===1026)return n.DEPTH_COMPONENT;if(A===1027)return n.DEPTH_STENCIL;if(A===1028)return n.RED;if(A===1029)return n.RED_INTEGER;if(A===1030)return n.RG;if(A===1031)return n.RG_INTEGER;if(A===1033)return n.RGBA_INTEGER;if(A===33776||A===33777||A===33778||A===33779)if(s===Zt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(A===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(A===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(A===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(A===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(A===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(A===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(A===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(A===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(A===35840||A===35841||A===35842||A===35843)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(A===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(A===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(A===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(A===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(A===36196||A===37492||A===37496)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(A===36196||A===37492)return s===Zt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(A===37496)return s===Zt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(A===37808||A===37809||A===37810||A===37811||A===37812||A===37813||A===37814||A===37815||A===37816||A===37817||A===37818||A===37819||A===37820||A===37821)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(A===37808)return s===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(A===37809)return s===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(A===37810)return s===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(A===37811)return s===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(A===37812)return s===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(A===37813)return s===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(A===37814)return s===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(A===37815)return s===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(A===37816)return s===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(A===37817)return s===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(A===37818)return s===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(A===37819)return s===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(A===37820)return s===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(A===37821)return s===Zt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(A===36492||A===36494||A===36495)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(A===36492)return s===Zt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(A===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(A===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(A===36283||A===36284||A===36285||A===36286)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(A===36283)return r.COMPRESSED_RED_RGTC1_EXT;if(A===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(A===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(A===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return A===1020?n.UNSIGNED_INT_24_8:n[A]!==void 0?n[A]:null}return{convert:e}}const gu=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,_u=`
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

}`;class vu{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const A=new Dr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=A}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,A=new ke({vertexShader:gu,fragmentShader:_u,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Ge(new Gn(20,20),A)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class xu extends bA{constructor(t,e){super();const A=this;let i=null,r=1,s=null,a="local-floor",o=1,l=null,c=null,u=null,d=null,f=null,m=null;const _=typeof XRWebGLBinding<"u",p=new vu,h={},w=e.getContextAttributes();let E=null,S=null;const D=[],T=[],C=new Kt;let N=null;const M=new Ve;M.viewport=new ce;const x=new Ve;x.viewport=new ce;const P=[M,x],z=new xa;let G=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let j=D[q];return j===void 0&&(j=new yi,D[q]=j),j.getTargetRaySpace()},this.getControllerGrip=function(q){let j=D[q];return j===void 0&&(j=new yi,D[q]=j),j.getGripSpace()},this.getHand=function(q){let j=D[q];return j===void 0&&(j=new yi,D[q]=j),j.getHandSpace()};function Y(q){const j=T.indexOf(q.inputSource);if(j===-1)return;const ht=D[j];ht!==void 0&&(ht.update(q.inputSource,q.frame,l||s),ht.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",Y),i.removeEventListener("selectstart",Y),i.removeEventListener("selectend",Y),i.removeEventListener("squeeze",Y),i.removeEventListener("squeezestart",Y),i.removeEventListener("squeezeend",Y),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",Q);for(let q=0;q<D.length;q++){const j=T[q];j!==null&&(T[q]=null,D[q].disconnect(j))}G=null,X=null,p.reset();for(const q in h)delete h[q];t.setRenderTarget(E),f=null,d=null,u=null,i=null,S=null,Ot.stop(),A.isPresenting=!1,t.setPixelRatio(N),t.setSize(C.width,C.height,!1),A.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,A.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,A.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||s},this.setReferenceSpace=function(q){l=q},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return u===null&&_&&(u=new XRWebGLBinding(i,e)),u},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(E=t.getRenderTarget(),i.addEventListener("select",Y),i.addEventListener("selectstart",Y),i.addEventListener("selectend",Y),i.addEventListener("squeeze",Y),i.addEventListener("squeezestart",Y),i.addEventListener("squeezeend",Y),i.addEventListener("end",W),i.addEventListener("inputsourceschange",Q),w.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,Et=null,gt=null;w.depth&&(gt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=w.stencil?1027:1026,Et=w.stencil?1020:1014);const Bt={colorFormat:e.RGBA8,depthFormat:gt,scaleFactor:r};u=this.getBinding(),d=u.createProjectionLayer(Bt),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new hA(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new Pr(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ht={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(i,e,ht),i.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),S=new hA(f.framebufferWidth,f.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(o),l=null,s=await i.requestReferenceSpace(a),Ot.setContext(i),Ot.start(),A.isPresenting=!0,A.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function Q(q){for(let j=0;j<q.removed.length;j++){const ht=q.removed[j],Et=T.indexOf(ht);Et>=0&&(T[Et]=null,D[Et].disconnect(ht))}for(let j=0;j<q.added.length;j++){const ht=q.added[j];let Et=T.indexOf(ht);if(Et===-1){for(let Bt=0;Bt<D.length;Bt++)if(Bt>=T.length){T.push(ht),Et=Bt;break}else if(T[Bt]===null){T[Bt]=ht,Et=Bt;break}if(Et===-1)break}const gt=D[Et];gt&&gt.connect(ht)}}const H=new U,it=new U;function ct(q,j,ht){H.setFromMatrixPosition(j.matrixWorld),it.setFromMatrixPosition(ht.matrixWorld);const Et=H.distanceTo(it),gt=j.projectionMatrix.elements,Bt=ht.projectionMatrix.elements,oe=gt[14]/(gt[10]-1),b=gt[14]/(gt[10]+1),Qt=(gt[9]+1)/gt[5],Dt=(gt[9]-1)/gt[5],bt=(gt[8]-1)/gt[0],pt=(Bt[8]+1)/Bt[0],ee=oe*bt,ut=oe*pt,Lt=Et/(-bt+pt),re=Lt*-bt;if(j.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(re),q.translateZ(Lt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),gt[10]===-1)q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse);else{const $t=oe+Lt,y=b+Lt,g=ee-re,F=ut+(Et-re),V=Qt*b/y*$t,K=Dt*b/y*$t;q.projectionMatrix.makePerspective(g,F,V,K,$t,y),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function nt(q,j){j===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(j.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let j=q.near,ht=q.far;p.texture!==null&&(p.depthNear>0&&(j=p.depthNear),p.depthFar>0&&(ht=p.depthFar)),z.near=x.near=M.near=j,z.far=x.far=M.far=ht,(G!==z.near||X!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),G=z.near,X=z.far),z.layers.mask=q.layers.mask|6,M.layers.mask=z.layers.mask&3,x.layers.mask=z.layers.mask&5;const Et=q.parent,gt=z.cameras;nt(z,Et);for(let Bt=0;Bt<gt.length;Bt++)nt(gt[Bt],Et);gt.length===2?ct(z,M,x):z.projectionMatrix.copy(M.projectionMatrix),Pt(q,z,Et)};function Pt(q,j,ht){ht===null?q.matrix.copy(j.matrixWorld):(q.matrix.copy(ht.matrixWorld),q.matrix.invert(),q.matrix.multiply(j.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(j.projectionMatrix),q.projectionMatrixInverse.copy(j.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Jn*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&f===null))return o},this.setFoveation=function(q){o=q,d!==null&&(d.fixedFoveation=q),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=q)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(z)},this.getCameraTexture=function(q){return h[q]};let Vt=null;function Yt(q,j){if(c=j.getViewerPose(l||s),m=j,c!==null){const ht=c.views;f!==null&&(t.setRenderTargetFramebuffer(S,f.framebuffer),t.setRenderTarget(S));let Et=!1;ht.length!==z.cameras.length&&(z.cameras.length=0,Et=!0);for(let b=0;b<ht.length;b++){const Qt=ht[b];let Dt=null;if(f!==null)Dt=f.getViewport(Qt);else{const pt=u.getViewSubImage(d,Qt);Dt=pt.viewport,b===0&&(t.setRenderTargetTextures(S,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(S))}let bt=P[b];bt===void 0&&(bt=new Ve,bt.layers.enable(b),bt.viewport=new ce,P[b]=bt),bt.matrix.fromArray(Qt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Qt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Dt.x,Dt.y,Dt.width,Dt.height),b===0&&(z.matrix.copy(bt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Et===!0&&z.cameras.push(bt)}const gt=i.enabledFeatures;if(gt&&gt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){u=A.getBinding();const b=u.getDepthInformation(ht[0]);b&&b.isValid&&b.texture&&p.init(b,i.renderState)}if(gt&&gt.includes("camera-access")&&_){t.state.unbindTexture(),u=A.getBinding();for(let b=0;b<ht.length;b++){const Qt=ht[b].camera;if(Qt){let Dt=h[Qt];Dt||(Dt=new Dr,h[Qt]=Dt);const bt=u.getCameraImage(Qt);Dt.sourceTexture=bt}}}}for(let ht=0;ht<D.length;ht++){const Et=T[ht],gt=D[ht];Et!==null&&gt!==void 0&&gt.update(Et,j,l||s)}Vt&&Vt(q,j),j.detectedPlanes&&A.dispatchEvent({type:"planesdetected",data:j}),m=null}const Ot=new Ur;Ot.setAnimationLoop(Yt),this.setAnimationLoop=function(q){Vt=q},this.dispose=function(){}}}const MA=new Ze,Mu=new ue;function Su(n,t){function e(p,h){p.matrixAutoUpdate===!0&&p.updateMatrix(),h.value.copy(p.matrix)}function A(p,h){h.color.getRGB(p.fogColor.value,mr(n)),h.isFog?(p.fogNear.value=h.near,p.fogFar.value=h.far):h.isFogExp2&&(p.fogDensity.value=h.density)}function i(p,h,w,E,S){h.isMeshBasicMaterial||h.isMeshLambertMaterial?r(p,h):h.isMeshToonMaterial?(r(p,h),u(p,h)):h.isMeshPhongMaterial?(r(p,h),c(p,h)):h.isMeshStandardMaterial?(r(p,h),d(p,h),h.isMeshPhysicalMaterial&&f(p,h,S)):h.isMeshMatcapMaterial?(r(p,h),m(p,h)):h.isMeshDepthMaterial?r(p,h):h.isMeshDistanceMaterial?(r(p,h),_(p,h)):h.isMeshNormalMaterial?r(p,h):h.isLineBasicMaterial?(s(p,h),h.isLineDashedMaterial&&a(p,h)):h.isPointsMaterial?o(p,h,w,E):h.isSpriteMaterial?l(p,h):h.isShadowMaterial?(p.color.value.copy(h.color),p.opacity.value=h.opacity):h.isShaderMaterial&&(h.uniformsNeedUpdate=!1)}function r(p,h){p.opacity.value=h.opacity,h.color&&p.diffuse.value.copy(h.color),h.emissive&&p.emissive.value.copy(h.emissive).multiplyScalar(h.emissiveIntensity),h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.bumpMap&&(p.bumpMap.value=h.bumpMap,e(h.bumpMap,p.bumpMapTransform),p.bumpScale.value=h.bumpScale,h.side===1&&(p.bumpScale.value*=-1)),h.normalMap&&(p.normalMap.value=h.normalMap,e(h.normalMap,p.normalMapTransform),p.normalScale.value.copy(h.normalScale),h.side===1&&p.normalScale.value.negate()),h.displacementMap&&(p.displacementMap.value=h.displacementMap,e(h.displacementMap,p.displacementMapTransform),p.displacementScale.value=h.displacementScale,p.displacementBias.value=h.displacementBias),h.emissiveMap&&(p.emissiveMap.value=h.emissiveMap,e(h.emissiveMap,p.emissiveMapTransform)),h.specularMap&&(p.specularMap.value=h.specularMap,e(h.specularMap,p.specularMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest);const w=t.get(h),E=w.envMap,S=w.envMapRotation;E&&(p.envMap.value=E,MA.copy(S),MA.x*=-1,MA.y*=-1,MA.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(MA.y*=-1,MA.z*=-1),p.envMapRotation.value.setFromMatrix4(Mu.makeRotationFromEuler(MA)),p.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=h.reflectivity,p.ior.value=h.ior,p.refractionRatio.value=h.refractionRatio),h.lightMap&&(p.lightMap.value=h.lightMap,p.lightMapIntensity.value=h.lightMapIntensity,e(h.lightMap,p.lightMapTransform)),h.aoMap&&(p.aoMap.value=h.aoMap,p.aoMapIntensity.value=h.aoMapIntensity,e(h.aoMap,p.aoMapTransform))}function s(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform))}function a(p,h){p.dashSize.value=h.dashSize,p.totalSize.value=h.dashSize+h.gapSize,p.scale.value=h.scale}function o(p,h,w,E){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.size.value=h.size*w,p.scale.value=E*.5,h.map&&(p.map.value=h.map,e(h.map,p.uvTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function l(p,h){p.diffuse.value.copy(h.color),p.opacity.value=h.opacity,p.rotation.value=h.rotation,h.map&&(p.map.value=h.map,e(h.map,p.mapTransform)),h.alphaMap&&(p.alphaMap.value=h.alphaMap,e(h.alphaMap,p.alphaMapTransform)),h.alphaTest>0&&(p.alphaTest.value=h.alphaTest)}function c(p,h){p.specular.value.copy(h.specular),p.shininess.value=Math.max(h.shininess,1e-4)}function u(p,h){h.gradientMap&&(p.gradientMap.value=h.gradientMap)}function d(p,h){p.metalness.value=h.metalness,h.metalnessMap&&(p.metalnessMap.value=h.metalnessMap,e(h.metalnessMap,p.metalnessMapTransform)),p.roughness.value=h.roughness,h.roughnessMap&&(p.roughnessMap.value=h.roughnessMap,e(h.roughnessMap,p.roughnessMapTransform)),h.envMap&&(p.envMapIntensity.value=h.envMapIntensity)}function f(p,h,w){p.ior.value=h.ior,h.sheen>0&&(p.sheenColor.value.copy(h.sheenColor).multiplyScalar(h.sheen),p.sheenRoughness.value=h.sheenRoughness,h.sheenColorMap&&(p.sheenColorMap.value=h.sheenColorMap,e(h.sheenColorMap,p.sheenColorMapTransform)),h.sheenRoughnessMap&&(p.sheenRoughnessMap.value=h.sheenRoughnessMap,e(h.sheenRoughnessMap,p.sheenRoughnessMapTransform))),h.clearcoat>0&&(p.clearcoat.value=h.clearcoat,p.clearcoatRoughness.value=h.clearcoatRoughness,h.clearcoatMap&&(p.clearcoatMap.value=h.clearcoatMap,e(h.clearcoatMap,p.clearcoatMapTransform)),h.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=h.clearcoatRoughnessMap,e(h.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),h.clearcoatNormalMap&&(p.clearcoatNormalMap.value=h.clearcoatNormalMap,e(h.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(h.clearcoatNormalScale),h.side===1&&p.clearcoatNormalScale.value.negate())),h.dispersion>0&&(p.dispersion.value=h.dispersion),h.iridescence>0&&(p.iridescence.value=h.iridescence,p.iridescenceIOR.value=h.iridescenceIOR,p.iridescenceThicknessMinimum.value=h.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=h.iridescenceThicknessRange[1],h.iridescenceMap&&(p.iridescenceMap.value=h.iridescenceMap,e(h.iridescenceMap,p.iridescenceMapTransform)),h.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=h.iridescenceThicknessMap,e(h.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),h.transmission>0&&(p.transmission.value=h.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),h.transmissionMap&&(p.transmissionMap.value=h.transmissionMap,e(h.transmissionMap,p.transmissionMapTransform)),p.thickness.value=h.thickness,h.thicknessMap&&(p.thicknessMap.value=h.thicknessMap,e(h.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=h.attenuationDistance,p.attenuationColor.value.copy(h.attenuationColor)),h.anisotropy>0&&(p.anisotropyVector.value.set(h.anisotropy*Math.cos(h.anisotropyRotation),h.anisotropy*Math.sin(h.anisotropyRotation)),h.anisotropyMap&&(p.anisotropyMap.value=h.anisotropyMap,e(h.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=h.specularIntensity,p.specularColor.value.copy(h.specularColor),h.specularColorMap&&(p.specularColorMap.value=h.specularColorMap,e(h.specularColorMap,p.specularColorMapTransform)),h.specularIntensityMap&&(p.specularIntensityMap.value=h.specularIntensityMap,e(h.specularIntensityMap,p.specularIntensityMapTransform))}function m(p,h){h.matcap&&(p.matcap.value=h.matcap)}function _(p,h){const w=t.get(h).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:A,refreshMaterialUniforms:i}}function yu(n,t,e,A){let i={},r={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function o(w,E){const S=E.program;A.uniformBlockBinding(w,S)}function l(w,E){let S=i[w.id];S===void 0&&(m(w),S=c(w),i[w.id]=S,w.addEventListener("dispose",p));const D=E.program;A.updateUBOMapping(w,D);const T=t.render.frame;r[w.id]!==T&&(d(w),r[w.id]=T)}function c(w){const E=u();w.__bindingPointIndex=E;const S=n.createBuffer(),D=w.__size,T=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,D,T),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function u(){for(let w=0;w<a;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const E=i[w.id],S=w.uniforms,D=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let T=0,C=S.length;T<C;T++){const N=Array.isArray(S[T])?S[T]:[S[T]];for(let M=0,x=N.length;M<x;M++){const P=N[M];if(f(P,T,M,D)===!0){const z=P.__offset,G=Array.isArray(P.value)?P.value:[P.value];let X=0;for(let Y=0;Y<G.length;Y++){const W=G[Y],Q=_(W);typeof W=="number"||typeof W=="boolean"?(P.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,z+X,P.__data)):W.isMatrix3?(P.__data[0]=W.elements[0],P.__data[1]=W.elements[1],P.__data[2]=W.elements[2],P.__data[3]=0,P.__data[4]=W.elements[3],P.__data[5]=W.elements[4],P.__data[6]=W.elements[5],P.__data[7]=0,P.__data[8]=W.elements[6],P.__data[9]=W.elements[7],P.__data[10]=W.elements[8],P.__data[11]=0):(W.toArray(P.__data,X),X+=Q.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(w,E,S,D){const T=w.value,C=E+"_"+S;if(D[C]===void 0)return typeof T=="number"||typeof T=="boolean"?D[C]=T:D[C]=T.clone(),!0;{const N=D[C];if(typeof T=="number"||typeof T=="boolean"){if(N!==T)return D[C]=T,!0}else if(N.equals(T)===!1)return N.copy(T),!0}return!1}function m(w){const E=w.uniforms;let S=0;const D=16;for(let C=0,N=E.length;C<N;C++){const M=Array.isArray(E[C])?E[C]:[E[C]];for(let x=0,P=M.length;x<P;x++){const z=M[x],G=Array.isArray(z.value)?z.value:[z.value];for(let X=0,Y=G.length;X<Y;X++){const W=G[X],Q=_(W),H=S%D,it=H%Q.boundary,ct=H+it;S+=it,ct!==0&&D-ct<Q.storage&&(S+=D-ct),z.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=Q.storage}}}const T=S%D;return T>0&&(S+=D-T),w.__size=S,w.__cache={},this}function _(w){const E={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(E.boundary=4,E.storage=4):w.isVector2?(E.boundary=8,E.storage=8):w.isVector3||w.isColor?(E.boundary=16,E.storage=12):w.isVector4?(E.boundary=16,E.storage=16):w.isMatrix3?(E.boundary=48,E.storage=48):w.isMatrix4?(E.boundary=64,E.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),E}function p(w){const E=w.target;E.removeEventListener("dispose",p);const S=s.indexOf(E.__bindingPointIndex);s.splice(S,1),n.deleteBuffer(i[E.id]),delete i[E.id],delete r[E.id]}function h(){for(const w in i)n.deleteBuffer(i[w]);s=[],i={},r={}}return{bind:o,update:l,dispose:h}}class Eu{constructor(t={}){const{canvas:e=Os(),context:A=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:o=!0,preserveDrawingBuffer:l=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let f;if(A!==null){if(typeof WebGLRenderingContext<"u"&&A instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");f=A.getContextAttributes().alpha}else f=s;const m=new Uint32Array(4),_=new Int32Array(4);let p=null,h=null;const w=[],E=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let D=!1;this._outputColorSpace=Ie;let T=0,C=0,N=null,M=-1,x=null;const P=new ce,z=new ce;let G=null;const X=new Gt(0);let Y=0,W=e.width,Q=e.height,H=1,it=null,ct=null;const nt=new ce(0,0,W,Q),Pt=new ce(0,0,W,Q);let Vt=!1;const Yt=new Mr;let Ot=!1,q=!1;const j=new ue,ht=new U,Et=new ce,gt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function oe(){return N===null?H:1}let b=A;function Qt(v,L){return e.getContext(v,L)}try{const v={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:o,preserveDrawingBuffer:l,powerPreference:c,failIfMajorPerformanceCaveat:u};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r180"),e.addEventListener("webglcontextlost",rt,!1),e.addEventListener("webglcontextrestored",ft,!1),e.addEventListener("webglcontextcreationerror",Z,!1),b===null){const L="webgl2";if(b=Qt(L,v),b===null)throw Qt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Dt,bt,pt,ee,ut,Lt,re,$t,y,g,F,V,K,k,St,At,vt,xt,tt,lt,Rt,Mt,at,Ft;function R(){Dt=new Ul(b),Dt.init(),Mt=new mu(b,Dt),bt=new Tl(b,Dt,t,Mt),pt=new fu(b,Dt),bt.reversedDepthBuffer&&d&&pt.buffers.depth.setReversed(!0),ee=new Bl(b),ut=new eu,Lt=new pu(b,Dt,pt,ut,bt,Mt,ee),re=new Cl(S),$t=new Il(S),y=new Sa(b),at=new bl(b,y),g=new Fl(b,y,ee,at),F=new zl(b,g,y,ee),tt=new Ol(b,bt,Lt),At=new Rl(ut),V=new tu(S,re,$t,Dt,bt,at,At),K=new Su(S,ut),k=new nu,St=new lu(Dt),xt=new El(S,re,$t,pt,F,f,o),vt=new hu(S,F,bt),Ft=new yu(b,ee,bt,pt),lt=new wl(b,Dt,ee),Rt=new Nl(b,Dt,ee),ee.programs=V.programs,S.capabilities=bt,S.extensions=Dt,S.properties=ut,S.renderLists=k,S.shadowMap=vt,S.state=pt,S.info=ee}R();const et=new xu(S,b);this.xr=et,this.getContext=function(){return b},this.getContextAttributes=function(){return b.getContextAttributes()},this.forceContextLoss=function(){const v=Dt.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Dt.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(W,Q,!1))},this.getSize=function(v){return v.set(W,Q)},this.setSize=function(v,L,B=!0){if(et.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,Q=L,e.width=Math.floor(v*H),e.height=Math.floor(L*H),B===!0&&(e.style.width=v+"px",e.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(W*H,Q*H).floor()},this.setDrawingBufferSize=function(v,L,B){W=v,Q=L,H=B,e.width=Math.floor(v*B),e.height=Math.floor(L*B),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(P)},this.getViewport=function(v){return v.copy(nt)},this.setViewport=function(v,L,B,O){v.isVector4?nt.set(v.x,v.y,v.z,v.w):nt.set(v,L,B,O),pt.viewport(P.copy(nt).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(Pt)},this.setScissor=function(v,L,B,O){v.isVector4?Pt.set(v.x,v.y,v.z,v.w):Pt.set(v,L,B,O),pt.scissor(z.copy(Pt).multiplyScalar(H).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(v){pt.setScissorTest(Vt=v)},this.setOpaqueSort=function(v){it=v},this.setTransparentSort=function(v){ct=v},this.getClearColor=function(v){return v.copy(xt.getClearColor())},this.setClearColor=function(){xt.setClearColor(...arguments)},this.getClearAlpha=function(){return xt.getClearAlpha()},this.setClearAlpha=function(){xt.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,B=!0){let O=0;if(v){let I=!1;if(N!==null){const J=N.texture.format;I=J===1033||J===1031||J===1029}if(I){const J=N.texture.type,ot=J===1009||J===1014||J===1012||J===1020||J===1017||J===1018,mt=xt.getClearColor(),dt=xt.getClearAlpha(),Tt=mt.r,Ct=mt.g,yt=mt.b;ot?(m[0]=Tt,m[1]=Ct,m[2]=yt,m[3]=dt,b.clearBufferuiv(b.COLOR,0,m)):(_[0]=Tt,_[1]=Ct,_[2]=yt,_[3]=dt,b.clearBufferiv(b.COLOR,0,_))}else O|=b.COLOR_BUFFER_BIT}L&&(O|=b.DEPTH_BUFFER_BIT),B&&(O|=b.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),b.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",rt,!1),e.removeEventListener("webglcontextrestored",ft,!1),e.removeEventListener("webglcontextcreationerror",Z,!1),xt.dispose(),k.dispose(),St.dispose(),ut.dispose(),re.dispose(),$t.dispose(),F.dispose(),at.dispose(),Ft.dispose(),V.dispose(),et.dispose(),et.removeEventListener("sessionstart",Ye),et.removeEventListener("sessionend",Ds),SA.stop()};function rt(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),D=!0}function ft(){console.log("THREE.WebGLRenderer: Context Restored."),D=!1;const v=ee.autoReset,L=vt.enabled,B=vt.autoUpdate,O=vt.needsUpdate,I=vt.type;R(),ee.autoReset=v,vt.enabled=L,vt.autoUpdate=B,vt.needsUpdate=O,vt.type=I}function Z(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function $(v){const L=v.target;L.removeEventListener("dispose",$),_t(L)}function _t(v){It(v),ut.remove(v)}function It(v){const L=ut.get(v).programs;L!==void 0&&(L.forEach(function(B){V.releaseProgram(B)}),v.isShaderMaterial&&V.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,B,O,I,J){L===null&&(L=gt);const ot=I.isMesh&&I.matrixWorld.determinant()<0,mt=qh(v,L,B,O,I);pt.setMaterial(O,ot);let dt=B.index,Tt=1;if(O.wireframe===!0){if(dt=g.getWireframeAttribute(B),dt===void 0)return;Tt=2}const Ct=B.drawRange,yt=B.attributes.position;let zt=Ct.start*Tt,Jt=(Ct.start+Ct.count)*Tt;J!==null&&(zt=Math.max(zt,J.start*Tt),Jt=Math.min(Jt,(J.start+J.count)*Tt)),dt!==null?(zt=Math.max(zt,0),Jt=Math.min(Jt,dt.count)):yt!=null&&(zt=Math.max(zt,0),Jt=Math.min(Jt,yt.count));const le=Jt-zt;if(le<0||le===1/0)return;at.setup(I,O,mt,B,dt);let ne,te=lt;if(dt!==null&&(ne=y.get(dt),te=Rt,te.setIndex(ne)),I.isMesh)O.wireframe===!0?(pt.setLineWidth(O.wireframeLinewidth*oe()),te.setMode(b.LINES)):te.setMode(b.TRIANGLES);else if(I.isLine){let wt=O.linewidth;wt===void 0&&(wt=1),pt.setLineWidth(wt*oe()),I.isLineSegments?te.setMode(b.LINES):I.isLineLoop?te.setMode(b.LINE_LOOP):te.setMode(b.LINE_STRIP)}else I.isPoints?te.setMode(b.POINTS):I.isSprite&&te.setMode(b.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)KA("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),te.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Dt.get("WEBGL_multi_draw"))te.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const wt=I._multiDrawStarts,se=I._multiDrawCounts,qt=I._multiDrawCount,De=dt?y.get(dt).bytesPerElement:1,qA=ut.get(O).currentProgram.getUniforms();for(let Le=0;Le<qt;Le++)qA.setValue(b,"_gl_DrawID",Le),te.render(wt[Le]/De,se[Le])}else if(I.isInstancedMesh)te.renderInstances(zt,le,I.count);else if(B.isInstancedBufferGeometry){const wt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,se=Math.min(B.instanceCount,wt);te.renderInstances(zt,le,se)}else te.render(zt,le)};function Ae(v,L,B){v.transparent===!0&&v.side===2&&v.forceSinglePass===!1?(v.side=1,v.needsUpdate=!0,Zn(v,L,B),v.side=0,v.needsUpdate=!0,Zn(v,L,B),v.side=2):Zn(v,L,B)}this.compile=function(v,L,B=null){B===null&&(B=v),h=St.get(B),h.init(L),E.push(h),B.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),v!==B&&v.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(h.pushLight(I),I.castShadow&&h.pushShadow(I))}),h.setupLights();const O=new Set;return v.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const J=I.material;if(J)if(Array.isArray(J))for(let ot=0;ot<J.length;ot++){const mt=J[ot];Ae(mt,B,I),O.add(mt)}else Ae(J,B,I),O.add(J)}),h=E.pop(),O},this.compileAsync=function(v,L,B=null){const O=this.compile(v,L,B);return new Promise(I=>{function J(){if(O.forEach(function(ot){ut.get(ot).currentProgram.isReady()&&O.delete(ot)}),O.size===0){I(v);return}setTimeout(J,10)}Dt.get("KHR_parallel_shader_compile")!==null?J():setTimeout(J,10)})};let jt=null;function iA(v){jt&&jt(v)}function Ye(){SA.stop()}function Ds(){SA.start()}const SA=new Ur;SA.setAnimationLoop(iA),typeof self<"u"&&SA.setContext(self),this.setAnimationLoop=function(v){jt=v,et.setAnimationLoop(v),v===null?SA.stop():SA.start()},et.addEventListener("sessionstart",Ye),et.addEventListener("sessionend",Ds),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),et.enabled===!0&&et.isPresenting===!0&&(et.cameraAutoUpdate===!0&&et.updateCamera(L),L=et.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,L,N),h=St.get(v,E.length),h.init(L),E.push(h),j.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Yt.setFromProjectionMatrix(j,2e3,L.reversedDepth),q=this.localClippingEnabled,Ot=At.init(this.clippingPlanes,q),p=k.get(v,w.length),p.init(),w.push(p),et.enabled===!0&&et.isPresenting===!0){const J=S.xr.getDepthSensingMesh();J!==null&&Xi(J,L,-1/0,S.sortObjects)}Xi(v,L,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(it,ct),Bt=et.enabled===!1||et.isPresenting===!1||et.hasDepthSensing()===!1,Bt&&xt.addToRenderList(p,v),this.info.render.frame++,Ot===!0&&At.beginShadows();const B=h.state.shadowsArray;vt.render(B,v,L),Ot===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=p.opaque,I=p.transmissive;if(h.setupLights(),L.isArrayCamera){const J=L.cameras;if(I.length>0)for(let ot=0,mt=J.length;ot<mt;ot++){const dt=J[ot];Is(O,I,v,dt)}Bt&&xt.render(v);for(let ot=0,mt=J.length;ot<mt;ot++){const dt=J[ot];Ls(p,v,dt,dt.viewport)}}else I.length>0&&Is(O,I,v,L),Bt&&xt.render(v),Ls(p,v,L);N!==null&&C===0&&(Lt.updateMultisampleRenderTarget(N),Lt.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(S,v,L),at.resetDefaultState(),M=-1,x=null,E.pop(),E.length>0?(h=E[E.length-1],Ot===!0&&At.setGlobalState(S.clippingPlanes,h.state.camera)):h=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function Xi(v,L,B,O){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)h.pushLight(v),v.castShadow&&h.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Yt.intersectsSprite(v)){O&&Et.setFromMatrixPosition(v.matrixWorld).applyMatrix4(j);const ot=F.update(v),mt=v.material;mt.visible&&p.push(v,ot,mt,B,Et.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Yt.intersectsObject(v))){const ot=F.update(v),mt=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Et.copy(v.boundingSphere.center)):(ot.boundingSphere===null&&ot.computeBoundingSphere(),Et.copy(ot.boundingSphere.center)),Et.applyMatrix4(v.matrixWorld).applyMatrix4(j)),Array.isArray(mt)){const dt=ot.groups;for(let Tt=0,Ct=dt.length;Tt<Ct;Tt++){const yt=dt[Tt],zt=mt[yt.materialIndex];zt&&zt.visible&&p.push(v,ot,zt,B,Et.z,yt)}}else mt.visible&&p.push(v,ot,mt,B,Et.z,null)}}const J=v.children;for(let ot=0,mt=J.length;ot<mt;ot++)Xi(J[ot],L,B,O)}function Ls(v,L,B,O){const I=v.opaque,J=v.transmissive,ot=v.transparent;h.setupLightsView(B),Ot===!0&&At.setGlobalState(S.clippingPlanes,B),O&&pt.viewport(P.copy(O)),I.length>0&&Kn(I,L,B),J.length>0&&Kn(J,L,B),ot.length>0&&Kn(ot,L,B),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function Is(v,L,B,O){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;h.state.transmissionRenderTarget[O.id]===void 0&&(h.state.transmissionRenderTarget[O.id]=new hA(1,1,{generateMipmaps:!0,type:Dt.has("EXT_color_buffer_half_float")||Dt.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Wt.workingColorSpace}));const J=h.state.transmissionRenderTarget[O.id],ot=O.viewport||P;J.setSize(ot.z*S.transmissionResolutionScale,ot.w*S.transmissionResolutionScale);const mt=S.getRenderTarget(),dt=S.getActiveCubeFace(),Tt=S.getActiveMipmapLevel();S.setRenderTarget(J),S.getClearColor(X),Y=S.getClearAlpha(),Y<1&&S.setClearColor(16777215,.5),S.clear(),Bt&&xt.render(B);const Ct=S.toneMapping;S.toneMapping=0;const yt=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),h.setupLightsView(O),Ot===!0&&At.setGlobalState(S.clippingPlanes,O),Kn(v,B,O),Lt.updateMultisampleRenderTarget(J),Lt.updateRenderTargetMipmap(J),Dt.has("WEBGL_multisampled_render_to_texture")===!1){let zt=!1;for(let Jt=0,le=L.length;Jt<le;Jt++){const ne=L[Jt],te=ne.object,wt=ne.geometry,se=ne.material,qt=ne.group;if(se.side===2&&te.layers.test(O.layers)){const De=se.side;se.side=1,se.needsUpdate=!0,Us(te,B,O,wt,se,qt),se.side=De,se.needsUpdate=!0,zt=!0}}zt===!0&&(Lt.updateMultisampleRenderTarget(J),Lt.updateRenderTargetMipmap(J))}S.setRenderTarget(mt,dt,Tt),S.setClearColor(X,Y),yt!==void 0&&(O.viewport=yt),S.toneMapping=Ct}function Kn(v,L,B){const O=L.isScene===!0?L.overrideMaterial:null;for(let I=0,J=v.length;I<J;I++){const ot=v[I],mt=ot.object,dt=ot.geometry,Tt=ot.group;let Ct=ot.material;Ct.allowOverride===!0&&O!==null&&(Ct=O),mt.layers.test(B.layers)&&Us(mt,L,B,dt,Ct,Tt)}}function Us(v,L,B,O,I,J){v.onBeforeRender(S,L,B,O,I,J),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),I.onBeforeRender(S,L,B,O,v,J),I.transparent===!0&&I.side===2&&I.forceSinglePass===!1?(I.side=1,I.needsUpdate=!0,S.renderBufferDirect(B,L,O,I,v,J),I.side=0,I.needsUpdate=!0,S.renderBufferDirect(B,L,O,I,v,J),I.side=2):S.renderBufferDirect(B,L,O,I,v,J),v.onAfterRender(S,L,B,O,I,J)}function Zn(v,L,B){L.isScene!==!0&&(L=gt);const O=ut.get(v),I=h.state.lights,J=h.state.shadowsArray,ot=I.state.version,mt=V.getParameters(v,I.state,J,L,B),dt=V.getProgramCacheKey(mt);let Tt=O.programs;O.environment=v.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(v.isMeshStandardMaterial?$t:re).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Tt===void 0&&(v.addEventListener("dispose",$),Tt=new Map,O.programs=Tt);let Ct=Tt.get(dt);if(Ct!==void 0){if(O.currentProgram===Ct&&O.lightsStateVersion===ot)return Ns(v,mt),Ct}else mt.uniforms=V.getUniforms(v),v.onBeforeCompile(mt,S),Ct=V.acquireProgram(mt,dt),Tt.set(dt,Ct),O.uniforms=mt.uniforms;const yt=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(yt.clippingPlanes=At.uniform),Ns(v,mt),O.needsLights=$h(v),O.lightsStateVersion=ot,O.needsLights&&(yt.ambientLightColor.value=I.state.ambient,yt.lightProbe.value=I.state.probe,yt.directionalLights.value=I.state.directional,yt.directionalLightShadows.value=I.state.directionalShadow,yt.spotLights.value=I.state.spot,yt.spotLightShadows.value=I.state.spotShadow,yt.rectAreaLights.value=I.state.rectArea,yt.ltc_1.value=I.state.rectAreaLTC1,yt.ltc_2.value=I.state.rectAreaLTC2,yt.pointLights.value=I.state.point,yt.pointLightShadows.value=I.state.pointShadow,yt.hemisphereLights.value=I.state.hemi,yt.directionalShadowMap.value=I.state.directionalShadowMap,yt.directionalShadowMatrix.value=I.state.directionalShadowMatrix,yt.spotShadowMap.value=I.state.spotShadowMap,yt.spotLightMatrix.value=I.state.spotLightMatrix,yt.spotLightMap.value=I.state.spotLightMap,yt.pointShadowMap.value=I.state.pointShadowMap,yt.pointShadowMatrix.value=I.state.pointShadowMatrix),O.currentProgram=Ct,O.uniformsList=null,Ct}function Fs(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=Xn.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function Ns(v,L){const B=ut.get(v);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function qh(v,L,B,O,I){L.isScene!==!0&&(L=gt),Lt.resetTextureUnits();const J=L.fog,ot=O.isMeshStandardMaterial?L.environment:null,mt=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:EA,dt=(O.isMeshStandardMaterial?$t:re).get(O.envMap||ot),Tt=O.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Ct=!!B.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),yt=!!B.morphAttributes.position,zt=!!B.morphAttributes.normal,Jt=!!B.morphAttributes.color;let le=0;O.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(le=S.toneMapping);const ne=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,te=ne!==void 0?ne.length:0,wt=ut.get(O),se=h.state.lights;if(Ot===!0&&(q===!0||v!==x)){const ye=v===x&&O.id===M;At.setState(O,v,ye)}let qt=!1;O.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==se.state.version||wt.outputColorSpace!==mt||I.isBatchedMesh&&wt.batching===!1||!I.isBatchedMesh&&wt.batching===!0||I.isBatchedMesh&&wt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&wt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&wt.instancing===!1||!I.isInstancedMesh&&wt.instancing===!0||I.isSkinnedMesh&&wt.skinning===!1||!I.isSkinnedMesh&&wt.skinning===!0||I.isInstancedMesh&&wt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&wt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&wt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&wt.instancingMorph===!1&&I.morphTexture!==null||wt.envMap!==dt||O.fog===!0&&wt.fog!==J||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==At.numPlanes||wt.numIntersection!==At.numIntersection)||wt.vertexAlphas!==Tt||wt.vertexTangents!==Ct||wt.morphTargets!==yt||wt.morphNormals!==zt||wt.morphColors!==Jt||wt.toneMapping!==le||wt.morphTargetsCount!==te)&&(qt=!0):(qt=!0,wt.__version=O.version);let De=wt.currentProgram;qt===!0&&(De=Zn(O,L,I));let qA=!1,Le=!1,pn=!1;const ae=De.getUniforms(),Fe=wt.uniforms;if(pt.useProgram(De.program)&&(qA=!0,Le=!0,pn=!0),O.id!==M&&(M=O.id,Le=!0),qA||x!==v){pt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),ae.setValue(b,"projectionMatrix",v.projectionMatrix),ae.setValue(b,"viewMatrix",v.matrixWorldInverse);const we=ae.map.cameraPosition;we!==void 0&&we.setValue(b,ht.setFromMatrixPosition(v.matrixWorld)),bt.logarithmicDepthBuffer&&ae.setValue(b,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&ae.setValue(b,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,Le=!0,pn=!0)}if(I.isSkinnedMesh){ae.setOptional(b,I,"bindMatrix"),ae.setOptional(b,I,"bindMatrixInverse");const ye=I.skeleton;ye&&(ye.boneTexture===null&&ye.computeBoneTexture(),ae.setValue(b,"boneTexture",ye.boneTexture,Lt))}I.isBatchedMesh&&(ae.setOptional(b,I,"batchingTexture"),ae.setValue(b,"batchingTexture",I._matricesTexture,Lt),ae.setOptional(b,I,"batchingIdTexture"),ae.setValue(b,"batchingIdTexture",I._indirectTexture,Lt),ae.setOptional(b,I,"batchingColorTexture"),I._colorsTexture!==null&&ae.setValue(b,"batchingColorTexture",I._colorsTexture,Lt));const Ne=B.morphAttributes;if((Ne.position!==void 0||Ne.normal!==void 0||Ne.color!==void 0)&&tt.update(I,B,De),(Le||wt.receiveShadow!==I.receiveShadow)&&(wt.receiveShadow=I.receiveShadow,ae.setValue(b,"receiveShadow",I.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Fe.envMap.value=dt,Fe.flipEnvMap.value=dt.isCubeTexture&&dt.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(Fe.envMapIntensity.value=L.environmentIntensity),Le&&(ae.setValue(b,"toneMappingExposure",S.toneMappingExposure),wt.needsLights&&Yh(Fe,pn),J&&O.fog===!0&&K.refreshFogUniforms(Fe,J),K.refreshMaterialUniforms(Fe,O,H,Q,h.state.transmissionRenderTarget[v.id]),Xn.upload(b,Fs(wt),Fe,Lt)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Xn.upload(b,Fs(wt),Fe,Lt),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&ae.setValue(b,"center",I.center),ae.setValue(b,"modelViewMatrix",I.modelViewMatrix),ae.setValue(b,"normalMatrix",I.normalMatrix),ae.setValue(b,"modelMatrix",I.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const ye=O.uniformsGroups;for(let we=0,qi=ye.length;we<qi;we++){const yA=ye[we];Ft.update(yA,De),Ft.bind(yA,De)}}return De}function Yh(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function $h(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return T},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,L,B){const O=ut.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),ut.get(v.texture).__webglTexture=L,ut.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:B,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const B=ut.get(v);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0};const jh=b.createFramebuffer();this.setRenderTarget=function(v,L=0,B=0){N=v,T=L,C=B;let O=!0,I=null,J=!1,ot=!1;if(v){const dt=ut.get(v);if(dt.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(b.FRAMEBUFFER,null),O=!1;else if(dt.__webglFramebuffer===void 0)Lt.setupRenderTarget(v);else if(dt.__hasExternalTextures)Lt.rebindTextures(v,ut.get(v.texture).__webglTexture,ut.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const yt=v.depthTexture;if(dt.__boundDepthTexture!==yt){if(yt!==null&&ut.has(yt)&&(v.width!==yt.image.width||v.height!==yt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Lt.setupDepthRenderbuffer(v)}}const Tt=v.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(ot=!0);const Ct=ut.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Ct[L])?I=Ct[L][B]:I=Ct[L],J=!0):v.samples>0&&Lt.useMultisampledRTT(v)===!1?I=ut.get(v).__webglMultisampledFramebuffer:Array.isArray(Ct)?I=Ct[B]:I=Ct,P.copy(v.viewport),z.copy(v.scissor),G=v.scissorTest}else P.copy(nt).multiplyScalar(H).floor(),z.copy(Pt).multiplyScalar(H).floor(),G=Vt;if(B!==0&&(I=jh),pt.bindFramebuffer(b.FRAMEBUFFER,I)&&O&&pt.drawBuffers(v,I),pt.viewport(P),pt.scissor(z),pt.setScissorTest(G),J){const dt=ut.get(v.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_CUBE_MAP_POSITIVE_X+L,dt.__webglTexture,B)}else if(ot){const dt=L;for(let Tt=0;Tt<v.textures.length;Tt++){const Ct=ut.get(v.textures[Tt]);b.framebufferTextureLayer(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0+Tt,Ct.__webglTexture,B,dt)}}else if(v!==null&&B!==0){const dt=ut.get(v.texture);b.framebufferTexture2D(b.FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,dt.__webglTexture,B)}M=-1},this.readRenderTargetPixels=function(v,L,B,O,I,J,ot,mt=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let dt=ut.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ot!==void 0&&(dt=dt[ot]),dt){pt.bindFramebuffer(b.FRAMEBUFFER,dt);try{const Tt=v.textures[mt],Ct=Tt.format,yt=Tt.type;if(!bt.textureFormatReadable(Ct)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(yt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-O&&B>=0&&B<=v.height-I&&(v.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+mt),b.readPixels(L,B,O,I,Mt.convert(Ct),Mt.convert(yt),J))}finally{const Tt=N!==null?ut.get(N).__webglFramebuffer:null;pt.bindFramebuffer(b.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(v,L,B,O,I,J,ot,mt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let dt=ut.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&ot!==void 0&&(dt=dt[ot]),dt)if(L>=0&&L<=v.width-O&&B>=0&&B<=v.height-I){pt.bindFramebuffer(b.FRAMEBUFFER,dt);const Tt=v.textures[mt],Ct=Tt.format,yt=Tt.type;if(!bt.textureFormatReadable(Ct))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(yt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const zt=b.createBuffer();b.bindBuffer(b.PIXEL_PACK_BUFFER,zt),b.bufferData(b.PIXEL_PACK_BUFFER,J.byteLength,b.STREAM_READ),v.textures.length>1&&b.readBuffer(b.COLOR_ATTACHMENT0+mt),b.readPixels(L,B,O,I,Mt.convert(Ct),Mt.convert(yt),0);const Jt=N!==null?ut.get(N).__webglFramebuffer:null;pt.bindFramebuffer(b.FRAMEBUFFER,Jt);const le=b.fenceSync(b.SYNC_GPU_COMMANDS_COMPLETE,0);return b.flush(),await zs(b,le,4),b.bindBuffer(b.PIXEL_PACK_BUFFER,zt),b.getBufferSubData(b.PIXEL_PACK_BUFFER,0,J),b.deleteBuffer(zt),b.deleteSync(le),J}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,B=0){const O=Math.pow(2,-B),I=Math.floor(v.image.width*O),J=Math.floor(v.image.height*O),ot=L!==null?L.x:0,mt=L!==null?L.y:0;Lt.setTexture2D(v,0),b.copyTexSubImage2D(b.TEXTURE_2D,B,0,0,ot,mt,I,J),pt.unbindTexture()};const Kh=b.createFramebuffer(),Zh=b.createFramebuffer();this.copyTextureToTexture=function(v,L,B=null,O=null,I=0,J=null){J===null&&(I!==0?(KA("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),J=I,I=0):J=0);let ot,mt,dt,Tt,Ct,yt,zt,Jt,le;const ne=v.isCompressedTexture?v.mipmaps[J]:v.image;if(B!==null)ot=B.max.x-B.min.x,mt=B.max.y-B.min.y,dt=B.isBox3?B.max.z-B.min.z:1,Tt=B.min.x,Ct=B.min.y,yt=B.isBox3?B.min.z:0;else{const Ne=Math.pow(2,-I);ot=Math.floor(ne.width*Ne),mt=Math.floor(ne.height*Ne),v.isDataArrayTexture?dt=ne.depth:v.isData3DTexture?dt=Math.floor(ne.depth*Ne):dt=1,Tt=0,Ct=0,yt=0}O!==null?(zt=O.x,Jt=O.y,le=O.z):(zt=0,Jt=0,le=0);const te=Mt.convert(L.format),wt=Mt.convert(L.type);let se;L.isData3DTexture?(Lt.setTexture3D(L,0),se=b.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Lt.setTexture2DArray(L,0),se=b.TEXTURE_2D_ARRAY):(Lt.setTexture2D(L,0),se=b.TEXTURE_2D),b.pixelStorei(b.UNPACK_FLIP_Y_WEBGL,L.flipY),b.pixelStorei(b.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),b.pixelStorei(b.UNPACK_ALIGNMENT,L.unpackAlignment);const qt=b.getParameter(b.UNPACK_ROW_LENGTH),De=b.getParameter(b.UNPACK_IMAGE_HEIGHT),qA=b.getParameter(b.UNPACK_SKIP_PIXELS),Le=b.getParameter(b.UNPACK_SKIP_ROWS),pn=b.getParameter(b.UNPACK_SKIP_IMAGES);b.pixelStorei(b.UNPACK_ROW_LENGTH,ne.width),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,ne.height),b.pixelStorei(b.UNPACK_SKIP_PIXELS,Tt),b.pixelStorei(b.UNPACK_SKIP_ROWS,Ct),b.pixelStorei(b.UNPACK_SKIP_IMAGES,yt);const ae=v.isDataArrayTexture||v.isData3DTexture,Fe=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const Ne=ut.get(v),ye=ut.get(L),we=ut.get(Ne.__renderTarget),qi=ut.get(ye.__renderTarget);pt.bindFramebuffer(b.READ_FRAMEBUFFER,we.__webglFramebuffer),pt.bindFramebuffer(b.DRAW_FRAMEBUFFER,qi.__webglFramebuffer);for(let yA=0;yA<dt;yA++)ae&&(b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ut.get(v).__webglTexture,I,yt+yA),b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ut.get(L).__webglTexture,J,le+yA)),b.blitFramebuffer(Tt,Ct,ot,mt,zt,Jt,ot,mt,b.DEPTH_BUFFER_BIT,b.NEAREST);pt.bindFramebuffer(b.READ_FRAMEBUFFER,null),pt.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else if(I!==0||v.isRenderTargetTexture||ut.has(v)){const Ne=ut.get(v),ye=ut.get(L);pt.bindFramebuffer(b.READ_FRAMEBUFFER,Kh),pt.bindFramebuffer(b.DRAW_FRAMEBUFFER,Zh);for(let we=0;we<dt;we++)ae?b.framebufferTextureLayer(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,Ne.__webglTexture,I,yt+we):b.framebufferTexture2D(b.READ_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,Ne.__webglTexture,I),Fe?b.framebufferTextureLayer(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,ye.__webglTexture,J,le+we):b.framebufferTexture2D(b.DRAW_FRAMEBUFFER,b.COLOR_ATTACHMENT0,b.TEXTURE_2D,ye.__webglTexture,J),I!==0?b.blitFramebuffer(Tt,Ct,ot,mt,zt,Jt,ot,mt,b.COLOR_BUFFER_BIT,b.NEAREST):Fe?b.copyTexSubImage3D(se,J,zt,Jt,le+we,Tt,Ct,ot,mt):b.copyTexSubImage2D(se,J,zt,Jt,Tt,Ct,ot,mt);pt.bindFramebuffer(b.READ_FRAMEBUFFER,null),pt.bindFramebuffer(b.DRAW_FRAMEBUFFER,null)}else Fe?v.isDataTexture||v.isData3DTexture?b.texSubImage3D(se,J,zt,Jt,le,ot,mt,dt,te,wt,ne.data):L.isCompressedArrayTexture?b.compressedTexSubImage3D(se,J,zt,Jt,le,ot,mt,dt,te,ne.data):b.texSubImage3D(se,J,zt,Jt,le,ot,mt,dt,te,wt,ne):v.isDataTexture?b.texSubImage2D(b.TEXTURE_2D,J,zt,Jt,ot,mt,te,wt,ne.data):v.isCompressedTexture?b.compressedTexSubImage2D(b.TEXTURE_2D,J,zt,Jt,ne.width,ne.height,te,ne.data):b.texSubImage2D(b.TEXTURE_2D,J,zt,Jt,ot,mt,te,wt,ne);b.pixelStorei(b.UNPACK_ROW_LENGTH,qt),b.pixelStorei(b.UNPACK_IMAGE_HEIGHT,De),b.pixelStorei(b.UNPACK_SKIP_PIXELS,qA),b.pixelStorei(b.UNPACK_SKIP_ROWS,Le),b.pixelStorei(b.UNPACK_SKIP_IMAGES,pn),J===0&&L.generateMipmaps&&b.generateMipmap(se),pt.unbindTexture()},this.initRenderTarget=function(v){ut.get(v).__webglFramebuffer===void 0&&Lt.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Lt.setTextureCube(v,0):v.isData3DTexture?Lt.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Lt.setTexture2DArray(v,0):Lt.setTexture2D(v,0),pt.unbindTexture()},this.resetState=function(){T=0,C=0,N=null,pt.reset(),at.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Wt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Wt._getUnpackColorSpace()}}const uA=Math.PI/180;function WA(n,t,e=1,A=new U){const i=(90-n)*uA,r=(t+180)*uA;return A.set(-e*Math.sin(i)*Math.cos(r),e*Math.cos(i),e*Math.sin(i)*Math.sin(r))}function bu(n,t,e,A){const i=(A-t)*uA,r=n*uA,s=e*uA,a=Math.cos(s)*Math.cos(i),o=Math.cos(s)*Math.sin(i),l=Math.atan2(Math.sin(r)+Math.sin(s),Math.sqrt((Math.cos(r)+a)*(Math.cos(r)+a)+o*o)),c=t*uA+Math.atan2(o,Math.cos(r)+a);return{lat:l/uA,lng:c/uA}}class wu{constructor(){this.camera=new Lr(-1,1,1,-1,.01,100),this.viewport={width:1,height:1},this.centerPx={x:0,y:0},this.radiusPx=1,this.lat=0,this.lng=0,this._v=new U,this._normal=new U,this._camDir=new U(0,0,1)}get camDir(){return this._camDir}lookAtLatLng(t,e){this.lat=t,this.lng=e,WA(t,e,10,this.camera.position),this.camera.up.set(0,1,0),this.camera.lookAt(0,0,0),this.camera.updateMatrixWorld(!0),this.camera.updateProjectionMatrix(),this._camDir.copy(this.camera.position).normalize()}layout(t,e,A,i){this.viewport.width=t,this.viewport.height=e,this.centerPx=A,this.radiusPx=i;const r=1/i,s=this.camera;s.left=-A.x*r,s.right=(t-A.x)*r,s.top=A.y*r,s.bottom=-(e-A.y)*r,s.updateProjectionMatrix(),s.updateMatrixWorld(!0)}project(t,e,A=0){const i=WA(t,e,1+A,this._v);this._normal.copy(i).normalize();const r=this._normal.dot(this._camDir);return i.project(this.camera),{x:(i.x*.5+.5)*this.viewport.width,y:(-i.y*.5+.5)*this.viewport.height,depth:r,visible:r>0}}}const Tu={latStep:2.4,latMin:-58,latMax:82,lngStep:2.4};function Ru(n,t){const{latStep:e,latMin:A,latMax:i,lngStep:r}=n,s=Math.round((i-A)/e)+1,a=Math.max(1,Math.round(360/r));let o=0;for(let l=0;l<s;l++){const c=A+l*e;for(let u=0;u<a;u++)t(c,-180+u*r,o++)}}const Yn=720,Fi=360,Cu="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+//8/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P////8HAAAA8P//////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+//////8HAAA+/P///z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7//////wf4////////////D/AfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD//////wf8////////////+/9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/sP/////f/D///////////////8BAAAAAAAAAAAAAAAAAADgPQAAAAAAAAAAAAD+DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA//8B/P//D/7//////////////wcAAAAAAAAAAPj/HwAAAADgAwAAAAAAAAAAAAD/PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///7////AOD//////////////wcAAAAAAADAxw//HwAAAAAAAAAAAAAAAAAAAAD8/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAA4P/P//8AAPz//////////////wMAAAAAAADA//8AAAAAAAAAAAAAAAAAAAAAAADw/zgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgH948P/8//8A+P///////////////wEAAAAAAACA//8AAAAAAAAAAAAAAAAAAAAAAAAAAP4DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPj4AQ78///A/////////////////wEAAAAAAAAA/j88AAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAPAACADwDn/w8A/v///////////////wEAAAAAAAAA4A/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfwAAAAAAAAD//wEA4P///////////////wMAAAAAAAAA8AcAAAAAAAAAAAAAAAAAAAAAAAAAAPAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgfwAgAADA/+H//w8A+P//////////////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAPABAAAAAAAAAPw/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4Ax/wAPgf4AMAwAAAwP//////////////fwAAAAAAAAAAAAAAAAAAAAAAAAAA/P8AAAAAAAAA8P///wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP/hD/gfwB8ADgAAAAAA/v///////////wEAAAAAAAAAAAAAAAAAAAAAAADg/wEAAAAAAAD+/////w8AAAAAAPj/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P//D8CPj////wAAAAAA+P///////////wEAAAAAAAAAAAAAAAAAAAAAAAD+BwAAAAAAAP7//////wcAAAAAAPz/8wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAHAAAAD/7//wAAAAAA4P///////////wAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAA4P//////fwAAAAAAAOAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAMD/AAAAAAAAAAAAAAAAAAAAwP//////////PwAAAAAAAAAAAAAAAAAAAAAAAMAfAAAAAAAA4P//////BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAIAA/gcIgAAAAAAAAP//////////fwAAAAAAAAAAAAAAAAAAAAAAAPgHAAAAAAD4/////////wMAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/fwIAeOAf/8HHnz8AAAAAAP7/////////AQAAAAAAAAAAAAAAAAAAAAAAAPgDAAAAAAD+//////////8/wP8AAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/5/cYH7g/P/DvfwAAAAAAAPz/////////BwAAAAAAAAAAAAAAAAAAAAAAAP4AAAD8YQD+//////////////8DAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD/+f9/P+B/DvD/f/4BAAAAAPz///////9/AAAAAAAAAAAAAAAAAAAAAAAAAH4AAAD8Q/j8//////////////8DAID//wMAAAAAAAAAAAAAAAAAAAAAAAAAAOB//P9/PwB/DvD///8PAAAAAP7/////////BwAAAAAAAAAAAAAAAAAAAAAAgH8AAAD/cP////////////////8DAYD//w8AAAAAAAAAHwAAAADAAAAAAAAAAAA+gP//fwCAP/D/////AQAAAMD////////fDwAAAAAAAAAAAAAAAAAAAAAAAPwBAMD/+P7///////////////+H/////38AAAAAAADAAAAAAAD+9wAAAAAAAAAA8P///wGA/+D/////DwAAADj///////8/DwAAAAAAAAAAAAAA/w8AAAAAAPAHAOD/8f//////////////////////////PwAAAAAAAAAAAPD///8AAAAAAAMAAOD//w+A/wH8/////wAAAPj///////8HAAAAAAAAAAAAAADA/x8AAAAAAAAAAMD/8////////////////////////////wAAAAAAAAAAAPz/////HwAA/0ccwP///z88fgDgIeD//wEAAPj9////////AQAAAAAAAAAAAMD//78BAAAAAAAABsD/+f//////////////////////////fwAA8P8BAAAAAP7//////wf/////A/3//wf++AfgH4D//wMAAAD8//////8/AAAAAAAAAAAAAPD///8fAAAAAAAA/gP/8f//////////////////////////////4f8/AQAA+P///////////////+MfCAAA+HfgPwD/fwAAAAD+//////8DAAAAAAAAAAAAAPz/////BwAAABgg/B/8w///////////////////////////////9///HwAA+P///////////////weAPwD4+P/wDwDw/wMAAMD//////x8AAAAAAAAAAAAAgP//////PwAPwMf////+5///////////////////////////////////fwAAgP///////////////w8f/4/////4H8DD/38AAOD/////PwAAAAAAAAAAAAAA4P///////wE//P//////w////////////////////////////////////wMAAP//////////////////////////H8CB//8AAPD/////HwAAAAAAAAAAAAAA8P///////wMH////////8f////////////////////////////////////sBAPj/////////////////////////BwDg//8PAOD/////DwAAAAAAAAAAAAAA+P///////wPO////////8P////////////////////////////////////8H8PH///////////////////////8PAADw//gPAOD/////AQAADsAHAAAAAAAA/P////8P/Hj//////////v///////////////////////////////////P8H//////////////////////////8HAADw/+ADAMD///8PAAAA//8HAAAAAAAA//8f/v8/AP7/////////////////////////////////////////////AX8A/P/////////////////////////zAPD//4EBAID///8AAAAA8P8PAAAAAACA//8H+P8/AP//////////////////////////////////////////////AHwA+N/////////////////////////xB/j//w8AAAD//38AAAAA/v8HAAAAAADA//8H/v8/Hv7///////////////////////////////////////////9/AAAAAMD////////////////////////4HxDg/z8AAAD//38AAAAA8P8BAAAAAADw//+D//9//P////////////////////////////////////////////8PAAAAAMD//////////////////////wf8+AAA/z8AAAD+/z8AAAAAwB8AAAAAAAD8///g//////////////////////////////////////////////////8fAAB4APj//////////////////////wcgAAAA/3wAAAD8/x8AAAAAAAAAAAAAAAD//z/4//////////////////////////////////////////////////8/AAAAwP///////////////////////wAADgAA+CMAAAD4/wcAAAAAAAAAAAAAAOD//w/8//////////////////////////////////////////////////9/AAAA4P//////////////////////PwAAA/EZgAcAAADw/wcAAAAAAAAAAAAAAPj//wf4/////////////////////////////////////////////z/+//8BAAAA8P//////////////////////HwAAAPH/AAAAAADg/wcAAAAAAAAAAAAAAPz//wf4////////////////////////////////////////////vx///x8AAAAA4P//////////////////////DwAAAPD/AQAAAADA/wMAAAAAAAAAAAAAAPz//wP4////////////////////////////////////////////gY///wMAAAAA4P////74////////////////BwAAAPD/HwAAAAAA8AMAAAAAAAAAAAAAAPz//wf4//////////////////////////////////////////9/AMH/fwAAAAAAnP//f/7A////////////////BwAAAOD/HwAAAAAAwAEAAAAAAAAAAAAAAPz//x/gB/7///////////////////////////////////////8/APj/GAAAAAAAAPD/Px8AwP//////////////BwAAAOD/H+AAAAAAAAAAAAAAAAAAAAAAAPj//x8AAP7///////////////////////////////////////8PAHwCAAAAAAAAAPD/DwIAAP7/////////////BwAAAPD/H/ABAAAAAAAAAAAAAAAAAAAAAPjv/w+A////////////////////////////////////////wYM/AD8AAAAAAAAAADDeHwAAAPj/////////////PwAAAPj/f/ADAAAAAAAAAAAAAAAAAAAAAPjD/wOA//////////////////////////////////////8HAAAAgB8AAAAAAAAAAADgDwAAAMD/////////////PwAAAOD///8HAAAAAAAAAAAAAAAAAOABAOCA/wEA/v////////////////////////////////////8DAAAA4A8AAAAAAAAAAADgcQAAAADw////////////fwAAAMD///8PAAAAAAAAAAAAAAAAAPAAAACA/yEA/v////////////////////////////////////8AAAAA/B8AAAAAAAAAAAB4OAAAAADg////////////fwQAAID///8fAAAAAAAAAAAAAAAAAPAPAAAY/xE4/////////////////////////////////////z8AAAAA/j8AAAAAAAAAAAAeAAAAAADA/////////////z8AAID///8fAAAAAAAAAAAAAAAAAPAHAAAf/gP8/////////////////////////////////////x8AAAAA/z8AAAAAAAAAAIAHAAAAAAAA//////////////8BAMD///8fAAAAAAAAAAAAAAAAAOADAAA//gD8/////////////////////////////////////wcAAACA/z8AAAAAAAAAAPADAAAAAAAA//////////////8PAMD///9/AAAAAAAAAAAAAAAAAOAPAADPHQD8/////////////////////////////////////wMAAACA/w8AAAAAAAAAABwAAAAAAAAA/v//////////////AfD/////AQAAAAAAAAAAAAAAAMAfAACOAQD4/////////////////////////////////////wAAAACA/wcAAAAAAAAAgAMAAAAAAAAA+P//////////////B/7/////HwAAAAAAAAAAAAAAAI8/AAAOAAz/////////////////////////////////////PwAAAACA/w8AAAAAAAAAAAAAAAAAAAAA+P//////////////B/7/////PwAAAAAAAAAAAAAAwA98AAA+g////////////////////////////////////////wMAAACA/wEAAAAAAAAAAAAAAAAAAADA4P//////////////B/z/////PwAAAAAAAAAAAAAA4A/8AAD+//////////////////////////////////////////8hAAAA/wAAAAAAAAAAAAAAAAAAAADAwP//////////////D/z//////wAAAAAAAAAAAAAA4I//APz///////////////////////////////////////////87AAAA/wAAAAAAAAAAAAAAAAAAAACAwP//////////////D/j//////wEAAAAAAAAAAAAA4If/B/7///////////////////////////////////////////9/AAAAHwAAAAAAAAAAAAAAAAAAAAAAAP//////////////H/z//////wEAAAAAAAAAAAAA4IP/B/////////////////////////////////////////////8/AAAAHgAAAAAAAAAAAAAAAAAAAAAAAP//////////////P/z/////fwAAAAAAAAAAAAAAYMD/A/////////////////////////////////////////////87AAAADgAAAAAAAAAAAAAAAAAAAAAAAP7/////////////////////zwEAAAAAAAAAAAAAAAD/x/////////////////////////////////////////////9xAAAAAgAAAAAAAAAAAAAAAAAAAAAAAPz/////////////////////4QAAAAAAAAAAAAAAAMA/+P////////////////////////////////////////////9xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////////w/+YAAAAAAAAAAAAAAAAGAB+P/////////////////////////////////////////////xAAAAAAAAAAAAAAAAAAAAAAAAAAAAALz//////////////////4MD8AEAAAAAAAAAAAAAAAAA///////////////////////////////////////////////xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHD+/////////////////wAM+B8AAAAAAAAAAAAAAADw//////////////////////////////////////////////+xAQAAAAAAAAAAAAAAAAAAAAAAAAAAAOD5////////////////P/4A/B8AAAAAAAAAAAAAAADn//////////////////////////////////////////////8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID4////////////////nz8A/D8AAAAAAAAAAAAAAID///////////////////////////////////////////////8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID7////////////////7z8A/j8AAAAAAAAAAAAAAAD+/////////////////////////////////////////////38QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////9z8AADIAAAAAAAAAAAAAAAD4/////////////////////////////////////////////z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////8AADAAAAAAAAAAAAAAAADw////////////8///H/z//////////////////////////x9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////39OAAAAAAAAAAAAAAAAAADg/////////x8+8P//A/z//////////////////////////w8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAADA/////////w84+P//Afz//////////////////////////wcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////48/AAAAAAAAAAAAAAAAAADg////+f///wf+//9/gP///////////////////////////wMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////+MDAAAAAAAAAAAAAAAAAADg////wf///wM4+P8/gP///////////////////////////wE4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////f3AAAAAAAAAAAAAAAAAAAADg///9wf///wEA4P8/4P///////////////////////////wB4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////DzAAAAAAAAAAAAAAAAAAAADg///gg////wEAgP9/wP//////////////////////////fwD4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAID/////////////////BwAAAAAAAAAAAAAAAAAAwP///xjgB/z//wAAAP9/gP//////////////////////////HgD+BwAAAAAAAAAAAAAAAAAAAAAAAAAAAID/////////////////AwAAAAAAAAAAAAAAAAAAwP//PwDkD/D//wAAAPh/AP7///////////////////////9/AAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/////////////////AwAAAAAAAAAAAAAAAAAAwP//PwCGH8D//wAAAPj/AP7///////////////////////8/AABnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////DwAAAAAAAAAAAAAAAAAAwP//PwAG/4D//wD+APj/AfL///////////////////////8PAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////9/AAAAAAAAAAAAAAAAAAAAwP//DwAA/IH//4P/A/z/A+D///////////////////////8HAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID///////////////8/AAAAAAAAAAAAAAAAAAAAwP//AQAH8If/cPz/////B/T/////////////////////8/8HAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID///////////////8PAAAAAAAAAAAAAAAAAAAAwP//AAAOwJHfwf//////H/z/////////////////////8P8BAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////8PAAAAAAAAAAAAAAAAAAAAwP//AAAGgAE/4P//////B/j///////////////////9/eH4AAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////8FAAAAAAAAAAAAAAAAAAAA4P//AAAGAAN+4P//////B/z///////////////////8/GHgAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+//////////////8DAAAAAAAAAAAAAAAAAAAA4P//AAAAAAE+4P//////A/D///////////////////8HAPwAAIAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/////////////38DAAAAAAAAAAAAAAAAAAAAwP9/AAAAgAH84P//////A/D///////////////////8PAPwBAIADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/////////////38BAAAAAAAAAAAAAAAAAAAAwP9/AAAAfgC4wP//////A/D///////////////////8/AvADAOADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/////////////38AAAAAAAAAAAAAAAAAAAAAwP8fAAAMeAA4gP//////H/D///////////////////9/H+AHAPIDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw//////////////8AAAAAAAAAAAAAAAAAAAAAAPgPwPs/AAAwgP/f//////7/////////////////////B/AHAP4DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw//////////////8AAAAAAAAAAAAAAAAAAAAAADAA/v8fAAAAABgO////////////////////////////A+AHAP8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//////////////8AAAAAAAAAAAAAAAAAAAAAADDA//8/AAAAAAAA////////////////////////////AOAHAP8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA//////////////8AAAAAAAAAAAAAAAAAAAAAAPDz//8/AACAHwAM//////////////////////////9/AOAD/v8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/////////////38AAAAAAAAAAAAAAAAAAAAAAPj///8fAAAAAAAG//////////////////////////9/AOAA/z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v///////////x8AAAAAAAAAAAAAAAAAAAAAAPz///8PAAAAAACA////////////////////////////AQDA0wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P///////////wcAAAAAAAAAAAAAAAAAAAAAAP7///8/AAAAAACA////////////////////////////AQAgngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P///////////wMAAAAAAAAAAAAAAAAAAAAAgP////8/AAAAAADA////////////////////////////AQD4BgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP///////////wAAAAAAAAAAAAAAAAAAAAAAwP//////BwAMAADA////////////////////////////AwD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////fwAAAAAAAAAAAAAAAAAAAAAA4P//////fwA/AADA////////////////////////////BwBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwPv/////////PwAAAAAAAAAAAAAAAAAAAAAA4P//////fwD/AwDg////////////////////////////DwBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgOP/////////HwAAAAAAAAAAAAAAAAAAAAAA8P///////wH/f/Dg////////////////////////////DwAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMP/////////HwAAAAAAAAAAAAAAAAAAAAAA4P///////w//////////////////////////////////BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMf//////x/wHwAAAAAAAAAAAAAAAAAAAAAA4P//////////////////////////////////////////BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIb/////3x8gPgAAAAAAAAAAAAAAAAAAAAAA4P//////////////////4P//////////////////////DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIz/////AwwAPAAAAAAAAAAAAAAAAAAAAAAA8P/////////////f////4P//////////////////////DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj/////AQAAfAAAAAAAAAAAAAAAAAAAAAAA/P/////////////d////wf//////////////////////DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADD+//9/AAAAeAAAAAAAAAAAAAAAAAAAAAAA/v/////////////7////gf//////////////////////BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHz4//8/AAAAfAAAAAAAAAAAAAAAAAAAAADA//////////////+H////A///////////////////////AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHj4//8fAAAA+AAAAAAAAAAAAAAAAAAAAADg//////////////+H////B/z/////////////////////AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODx//8fAAAA+AwAAAAAAAAAAAAAAAAAAADg//////////////8P////D3j8////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDh//8fAAAA8CAAAAAAAAAAAAAAAAAAAAD4//////////////8P/v//DwD9////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh//8/AAAA4AAAAAAAAAAAAAAAAAAAAAD4//////////////8f/v//TwD5//////////////////9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACD//8fAAAAQAAAAAAAAAAAAAAAAAAAAAD8//////////////8f/P//X8AB/uH///////////////8/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//8fAAAAABgAAAAAAAAAAAAAAAAAAAD8//////////////8//P//f+ABAMD///////////////8/DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO/v8fAAAAABAAAAAAAAAAAAAAAAAAAAD+//////////////9/+P////ADAID///////////////8PBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY/P8fAAAAABAAAAAAAAAAAAAAAAAAAAD///////////////9/4P////8PAAD///////////////8HBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ+P8PAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////9/4P////8/AAD8//////////////8BBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P8PAAAA/wEAAAAAAAAAAAAAAAAAAID/////////////////wP////9/AAD4/////5///////38AAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P8PAACA8Q8AAAAAAAAAAAAAAAAAAID/////////////////wf//////AAD4/////x///////wcAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P8fAAAAAB8AAAAAAAAAAAAAAAAAAMD/////////////////w/////9/AAD4/////wP//////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P8fAOADAHgAAAAAAAAAAAAAAAAAAMD/////////////////w/////8/AADw////PwD///9/EAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAA4P8/APgDAPABAAAAAAAAAAAAAAAAAMD/////////////////g/////8fAAAA/P//PwD+//8/GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P8/APgBAOAPAAAAAAAAAAAAAAAAAID/////////////////A/////8PAAAA/P//HwD+//8fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAA4P9/APgBAADgBgAAAAAAAAAAAAAAAID/////////////////A/7///8HAAAA/P//BwD4//8PPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAwP//APwBAADAPwAAAAAAAAAAAAAAAID/////////////////B/z///8PAAAA/P//AwD4//8HHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Af8BAACAfwAAAAAAAAAAAAAAAAD/////////////////B/z///8DAAAA/P//AQDw//8PHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7/9/8AAHj4SxwAAAAAAAAAAAAAAAD/////////////////D/j///8BAAAA/P//AADg//8PAAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD///8AACAAAAAAAAAAAAAAAAAAAAD/////////////////H/D//38AAAAA/P9/AADg//8fAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD//38AAAAAAAAAAAAAAAAAAAAAAID/////////////////P+D//38AAAAA+P8fAADg//8/AAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//38AAAAAAAAAAAAAAAAAAAAAAID/////////////////P+D//wcAAAAA+P8PAADg+/9/AAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/38AAAAAAAAAAAAAAAAAAAAAAID/////////////////P8D//wEAAAAA+P8HAADw+P//AAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA4H//AAAAAAAAAAAAAAAAAAAAAID/////////////////f+D//wAAAAAA+P8BAABA+P//AQAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//AQAAAAAAAAAAAAAAAAAAAMD//////////////////8D/fwAAAAAA8P8AAAAA+P//AwAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP//AQAAAAAAAAAAAAAAAAAAAOD//////////////////8P/BwAAAAAA4P8AAAAA8P//AwAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AwAAAAAAAAAAAAAAAAAAAMD//////////////////8f/AwAAAAAA4P8AAAAA8P//AwAALgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD/AQAAAAAAAAAAAAAAAAAAAMD//////////////////49/AAAAAAAA4P8AAAAA8P//BwAA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD+AQAAAAAAAAAAAAAAAAAAAMD//////////////////98HAAAAAAAAwP8BAAAA4Pz/BwAAxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+AQAAAAAAAAAAAAAAAAAAAMD//////////////////78DAAAAAAAAwP8AAAAA4Pz/BwAAhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8AQAAAQAAAAAAAAAAAAAAAID//////////////////38AAAAAAAAAwP8AAAAA4OD/AwAABAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AQCAGQAAAAAAAAAAAAAAAID//////////////////z8AIAAAAAAAgP8AAAAA4MD/AwAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAADweAAAAAAAAAAAAAAAAAD+/////////////////38APwAAAAAAAP8AAAAAYMD/AQAAMAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAQD+/wAgAAAAAAAAAAAAAAD8///////////////////wPwAAAAAAAP8AAAAAYID/AABA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAQD+/p83AAAAAAAAAAAAAAD4////////////////////PwAAAAAAAH8AAAAAYAA+AABAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgBwD+/P8fAAAAAAAAAAAAAADw////////////////////HwAAAAAAAD4AAAAAIAAcAAAgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw///P8/AAAAAAAAAAAAAADg////////////////////HwAAAAAAAD4DAAAAIAAMAAAQAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/pn///9/AAAAAAAAAAAAAADA////////////////////HwAAAAAAAA4DAAAA8AAEAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAePD/////AQAAAAAAAAAAAADA////////////////////DwAAAAAAAIgHAAAA8AEAAAAAwB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4Pj/////AwAAAAAAAAAAAADA////////////////////DwAAAAAAAAAHAAAAwAEAAAAA8B8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQPD/////BwAAAAAAAAAAAACA////////////////////BwAAAAAAAAAHAAAAgAEAAAAAEB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD/////DwAAAAAAAAAAAAAA/v//////////////////BwAAAAAAAAAHAAAAAAcAAAAGABcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD/////HwAAAAAAAAAAAAAA/P//H/7/////////////AwAAAAAAAAAHAAAAAA8AAAAGAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD//////w8AAAAAAAAAAAAA8P//Afz/////////////AwAAAAAAAAAAAAAAAB4AAAAfAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD//////38AAAAAAAAAAAAA4P9/APz/////////////AQAAAAAAAAAAAACABz8AAMA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD///////8AAAAAAAAAAAAAwAcAAPj/////////////AAAAAAAAAAAAAACAD34AAOAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD///////8BAAAAAAAAAAAAAAAAAAD8////////////AAAAAAAAAAAAAAAAH34AAPAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD///////8DAAAAAAAAAAAAAAAAAAD4//////////9/AAAAAAAAAAAAAAAAPnwAAPgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD///////8DAAAAAAAAAAAAAAAAAAD4//////////8/AAAAAAAAAAAAAAAAfHgAAPwHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD///////8DAAAAAAAAAAAAAAAAAAD4//////////8fAAAAAAAAAAAAAAAA+HgAgP8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPj///////8HAAAAAAAAAAAAAAAAAAD4//////////8PAAAAAAAAAAAAAAAA8PEAgP8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPj///////8PAAAAAAAAAAAAAAAAAAD4//////////8DAAAAAAAAAAAAAAAA4M8AyP8PAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPz///////8PAAAAAAAAAAAAAAAAAAD4//////////8BAAAAAAAAAAAAAAAAwJ8A/P8fAIIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////8PAAAAAAAAAAAAAAAAAAD4/////////38AAAAAAAAAAAAAAAAAwD8A/P8P/4EBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////8HAAAAAAAAAAAAAAAAAAD4/////////z8AAAAAAAAAAAAAAAAAwH8A/P8HAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP////////9/AAAAAAAAAAAAAAAAAAD8/////////x8AAAAAAAAAAAAAAAAAgH8A/P+HAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP////////9/AwAAAAAAAAAAAAAAAAD8/////////w8AAAAAAAAAAAAAAAAAAH8A+P+HYQCBDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////HwAAAAAAAAAAAAAAAAD8/////////w8AAAAAAAAAAAAAAAAAAP4B+P+DHwDADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////fwAAAAAAAAAAAAAAAAD8/////////wcAAAAAAAAAAAAAAAAAAP4B8P+BDwAADxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////fwAAAAAAAAAAAAAAAAD4/////////wMAAAAAAAAAAAAAAAAAAPwD8P/BDwAAGH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////w8AAAAAAAAAAAAAAADw/////////wAAAAAAAAAAAAAAAAAAAPgP8P/BDQAAH/8HAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////8BAAAAAAAAAAAAAADg/////////wAAAAAAAAAAAAAAAAAAAPAPAPvBHTAf/v8fAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP////////////8HAAAAAAAAAAAAAADA/////////wAAAAAAAAAAAAAAAAAAAOAPAOCAHSAg9P//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP////////////8PAAAAAAAAAAAAAACA////////fwAAAAAAAAAAAAAAAAAAAOAPAACAOQAAwP//A4ADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P////////////8fAAAAAAAAAAAAAACA////////PwAAAAAAAAAAAAAAAAAAAIAPAACAKQAAAP7/B4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////////AQAAAAAAAAAAAAAA////////PwAAAAAAAAAAAAAAAAAAAAAPAACAIQAAAPj/D8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////////AwAAAAAAAAAAAAAA////////PwAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAPD/H34gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////////AwAAAAAAAAAAAAAA////////PwAAAAAAAAAAAAAAAAAAAADwAAAAAAAAEOD/fxhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP//////////////AwAAAAAAAAAAAAAA/v//////fwAAAAAAAAAAAAAAAAAAAAD44QAAAAAAEOD/PwCAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7/////////////AwAAAAAAAAAAAAAA/P//////fwAAAAAAAAAAAAAAAAAAAADg/wMAAAAAAOD/PwAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7/////////////AwAAAAAAAAAAAAAA/P//////PwAAAAAAAAAAAAAAAAAAAAAA+R8AAAAAAPD/fQAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPz/////////////AwAAAAAAAAAAAAAA/P//////PwAAAAAAAAAAAAAAAAAAAAAAgH8AIAAAADh/8AAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPz/////////////AwAAAAAAAAAAAAAA/P//////fwAAAAAAAAAAAAAAAAAAAAAAAAA8DzwAAAB+4AEAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPj/////////////AQAAAAAAAAAAAAAA/P//////fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAgwAcAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPj/////////////AQAAAAAAAAAAAAAA/P///////wAAAAAAAAAAAAAAAAAAAAAAAACAgQMAAAAAgA8AAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD/////////////AAAAAAAAAAAAAAAA+P///////wAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD///////////8/AAAAAAAAAAAAAAAA+P///////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD///////////8/AAAAAAAAAAAAAAAA+P///////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD///////////8fAAAAAAAAAAAAAAAA+P///////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD///////////8PAAAAAAAAAAAAAAAA+P///////wEABAAAAAAAAAAAAAAAAAAAAAAAAABA/wMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD///////////8PAAAAAAAAAAAAAAAA/P///////wEABAAAAAAAAAAAAAAAAAAAAAAAAADg/wNwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID///////////8HAAAAAAAAAAAAAAAA/v///////wEADgAAAAAAAAAAAAAAAAAAAAAAAADg/wF4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID///////////8DAAAAAAAAAAAAAAAA/v///////wEADgAAAAAAAAAAAAAAAAAAAAAAAADw/wB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////8DAAAAAAAAAAAAAAAA/////////wEADwAAAAAAAAAAAAAAAAAAAAAAAPj4/wD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////8DAAAAAAAAAAAAAAAA/////////wOADwAAAAAAAAAAAAAAAAAAAAAAAPz4fwD4AwAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+//////////8DAAAAAAAAAAAAAAAA/////////wHAHwAAAAAAAAAAAAAAAAAAAAAAAP7//wD4BwAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4//////////8DAAAAAAAAAAAAAAAA/////////wHgFwAAAAAAAAAAAAAAAAAAAAAAAP7//wP4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//////////8DAAAAAAAAAAAAAACA/////////wD+DwAAAAAAAAAAAAAAAAAAAAAAgP7//wf4BwAAAABAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA//////////8DAAAAAAAAAAAAAACA////////fwD+DwAAAAAAAAAAAAAAAAAAAAAAoP///w/8BwAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////////8DAAAAAAAAAAAAAACA////////DwD/BwAAAAAAAAAAAAAAAAAAAAAA4P///z/8DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////////8DAAAAAAAAAAAAAAAA////////AwD/BwAAAAAAAAAAAAAAAAAAAAAA4P//////DwAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P////////8BAAAAAAAAAAAAAAAA////////AQD/BwAAAAAAAAAAAAAAAAAAAAAA8P//////DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P////////8BAAAAAAAAAAAAAAAA/v//////AAD/AwAAAAAAAAAAAAAAAAAAAAAA+P//////HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P////////8BAAAAAAAAAAAAAAAA/v////9/AAD+AwAAAAAAAAAAAAAAAAAAAAAA+P//////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P////////8AAAAAAAAAAAAAAAAA/P////8/AAD+AwAAAAAAAAAAAAAAAAAAAAAA/v///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P///////38AAAAAAAAAAAAAAAAA/P////8fAAD+AQAAAAAAAAAAAAAAAAAAAADA/////////wEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P///////38AAAAAAAAAAAAAAAAA+P////8/AAD/AQAAAAAAAAAAAAAAAAAAAAD+/////////wMAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P///////z8AAAAAAAAAAAAAAAAA+P////8/AID/AQAAAAAAAAAAAAAAAAAAAID//////////wcAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P///////z8AAAAAAAAAAAAAAAAA8P////9/AID/AAAAAAAAAAAAAAAAAAAAAMD//////////wcAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P///////x8AAAAAAAAAAAAAAAAA4P////9/AID/AAAAAAAAAAAAAAAAAAAAAOD//////////wcAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P///////w8AAAAAAAAAAAAAAAAA4P////9/AID/AAAAAAAAAAAAAAAAAAAAAPD//////////z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P///////wAAAAAAAAAAAAAAAAAA4P////9/AIB/AAAAAAAAAAAAAAAAAAAAAPD//////////z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P//////HwAAAAAAAAAAAAAAAAAA4P////9/AIB/AAAAAAAAAAAAAAAAAAAAAPj//////////z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P//////BwAAAAAAAAAAAAAAAAAA4P////9/AIB/AAAAAAAAAAAAAAAAAAAAAPj///////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P//////AQAAAAAAAAAAAAAAAAAA4P////8fAAA/AAAAAAAAAAAAAAAAAAAAAPj///////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P//////AAAAAAAAAAAAAAAAAAAA4P////8HAAAOAAAAAAAAAAAAAAAAAAAAAPD///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P////9/AAAAAAAAAAAAAAAAAAAAwP////8BAAAAAAAAAAAAAAAAAAAAAAAAAPD///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P////9/AAAAAAAAAAAAAAAAAAAAwP////8DAAAAAAAAAAAAAAAAAAAAAAAAAPj///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P////9/AAAAAAAAAAAAAAAAAAAAwP////8DAAAAAAAAAAAAAAAAAAAAAAAAAPj///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P////9/AAAAAAAAAAAAAAAAAAAAgP////8BAAAAAAAAAAAAAAAAAAAAAAAAAPD///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P////9/AAAAAAAAAAAAAAAAAAAAgP////8BAAAAAAAAAAAAAAAAAAAAAAAAAPD///////////8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P////9/AAAAAAAAAAAAAAAAAAAAAP////8BAAAAAAAAAAAAAAAAAAAAAAAAAOD///////////8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8/AAAAAAAAAAAAAAAAAAAAAP7///8AAAAAAAAAAAAAAAAAAAAAAAAAAOD///////////8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8fAAAAAAAAAAAAAAAAAAAAAP7//38AAAAAAAAAAAAAAAAAAAAAAAAAAMD///////////8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8PAAAAAAAAAAAAAAAAAAAAAPz//z8AAAAAAAAAAAAAAAAAAAAAAAAAAMD///////////8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8PAAAAAAAAAAAAAAAAAAAAAPj//x8AAAAAAAAAAAAAAAAAAAAAAAAAAMD///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8HAAAAAAAAAAAAAAAAAAAAAPj//x8AAAAAAAAAAAAAAAAAAAAAAAAAAMD///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8DAAAAAAAAAAAAAAAAAAAAAPD//w8AAAAAAAAAAAAAAAAAAAAAAAAAAID///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8BAAAAAAAAAAAAAAAAAAAAAPD//wcAAAAAAAAAAAAAAAAAAAAAAAAAAID///8D//////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v///38AAAAAAAAAAAAAAAAAAAAAAPD//wMAAAAAAAAAAAAAAAAAAAAAAAAAAAD//y8A+P////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v///38AAAAAAAAAAAAAAAAAAAAAAPD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAID//wMA8P////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v///z8AAAAAAAAAAAAAAAAAAAAAAPD/fwAAAAAAAAAAAAAAAAAAAAAAAAAAAID//wAA4Pf//38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////x8AAAAAAAAAAAAAAAAAAAAAAPD/DwAAAAAAAAAAAAAAAAAAAAAAAAAAAMD//wAAwPP//38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////9x8AAAAAAAAAAAAAAAAAAAAAAOAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMB/AAAAwPn//z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////jwcAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAAAgOj//z8AAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA////HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD//x8AAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA////HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD//x8AAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID//w8AAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//w8AAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//w8AAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg////HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/wcAAAAAAOARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg////DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4fQAAAAAAAOAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg////AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAOAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA//8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw//8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAMIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw/z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AEAAAAAAOsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw/z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AEAAAAAgA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ/38BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AAAAAAAgA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AAAAAAAwAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ/z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAA8AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA/z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADI/x8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/x8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/x8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/w8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/w8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8PwAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8PwDADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8fwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwdwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABg+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/j8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8DAAAAAAAAAAAAAPgDgB8AAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP8HAAAAAAAAgAEAAP4P8P8D8P/9/wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v8fAAAAAAAg/v9//v////9/////////DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw////gw8AAAD8////////////////////HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////8DAID//////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4APj///////8HAOD//////////////////////38wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnv8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8B/////////8HAPD/////////////////////////AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnv8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/3/////////8HgP//////////////////////////fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvv8HAAAAAAAAAAAAAAAAAAAAAMAPvv8HAPz///////////8A+P///////////////////////////wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/8PAAAAAAAAAAAAAAAAAAAAAP6f//////////////////8D/P////////////////////////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwf/4fAAAAAAAAAAAAAAAAAB54/P////////////////////8B////////////////////////////////BwAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAD8f/wfAAAAAAAAAAAAAAAA/P////////////////////////+A////////////////////////////////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAPB/AAAAAAA4H/w/AAAAAAAAAAAAAAAA///////////////////////////3////////////////////////////////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAACAAAAAAAP8/AAAAAAAAAAAAAADg////////////////////////////////////////////////////////////HwAAAAAAAAAAAAAAAAAAAAAAAAAAAP4P4PAfgAAA/v9/AAAAAAAAAAAAAAD+////////////////////////////////////////////////////////////DwAAAAAAAAAAAAAAAAAAAGD4AwAAAPz/////73/4//8/AAAAAAAAAAAAAID/////////////////////////////////////////////////////////////AQAAAAAAAAAAAAAAAAAAAAAA/D8AAMD///////////8fAAAAAAAAAAAAAAD+//////////////////////////////////////////////////////////8/AAAAAAAAAAAAAAAAAOD///////8PAID///////////8BAAAAAAAAAAAAAID///////////////////////////////////////////////////////////8HAAAAAAAAAAAAAAAA+P///////////7///////////38AAAAAAAAAAAAAAPD///////////////////////////////////////////////////////////8BAAAAAAAAAAAAAAD4/////////////////////////wMAAAAAAAAAAAAAgP////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAADw////////////////////////DwAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////38AAAAAAAAAAAAAAAD//////////////////////z8AAAAAAAAAAAAAAMD//////////////////////////////////////////////////////////////38AAAAAAAAAAAA4H/j///////////////////////8BAAAAAAAAAAAAAPj///////////////////////////////////////////////////////////////8AAAAAAAAAAADw//////////////////////////8PAAAAAAAAAAAAwP////////////////////////////////////////////////////////////////8AAAAAAAAAAADg/////////////////////////z8AAAAAAADAfwAA/v////////////////////////////////////////////////////////////////8HAAAAAAAAAP4A/////////////////////////w8AAAAAAADw/wEA//////////////////////////////////////////////////////////////////8/AAAAAAAAAPgBAP///////////////////////w8AAAAAAAD4/wEA/////////////////////////////////////////////////////////////////wcAAAAAAAAAAAAAAAD+/////////////////////38AAABAAAD+/wEAAOD//////////////////////////////////////////////////////////////wMAAAAAAAAAAAAAAAD4//////////////////////8BAADgAfD/fwAAAID//////////////////////////////////////////////////////////////wEAAAAAAAAAAAAAAAD+////////////////////////A8D/AOD/AAAAAP///////////////////////////////////////////////////////////////wAAAAAAAAAAAAAA//P/////////////////////////fwAAAAAAAADg/////////////////////////////////////////////////////////////////wMAAAAAAAAAAAAA+P////////////////////////////8DAADwB/j//////////////////////////////////////////////////////////////////w8AAAAAAAAAAAAAwP////////////////////////////9/AOD//////////////////////////////////////////////////////////////////////z8AAAAAAAAAAAAAwP//////////////////////////////g/////////////////////////////////////////////////////////////////////////8HAAAAAAAAAAAA4P//////////////////////////////////////////////////////////////////////////////////////////////////////////AQAAAAAAAAAAwP//////////////////////////////////////////////////////////////////////////////////////////////////////////BwAAhOF/AAAAAPD//////////////////////////////////////////////////////////////////////////////////////////////////////////8MBAAAAwP//////AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AP8/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";let on=null;function Pu(){if(on)return on;const n=atob(Cu);on=new Uint8Array(n.length);for(let t=0;t<n.length;t++)on[t]=n.charCodeAt(t);return on}function Du(n,t){const e=Pu();let A=Math.floor((t+180)/360*Yn),i=Math.floor((90-n)/180*Fi);A<0?A=0:A>=Yn&&(A=Yn-1),i<0?i=0:i>=Fi&&(i=Fi-1);const r=i*Yn+A;return(e[r>>3]&1<<(r&7))!==0}function ls({lattice:n=Tu,landColor:t=1315866,oceanColor:e=12763852,landSize:A=2,oceanSize:i=1.15,landOpacity:r=.92,oceanOpacity:s=.75}={}){const a=[],o=[];Ru(n,(h,w)=>{a.push(h),o.push(w)});const l=a.length,c=new Float32Array(l*3),u=new Float32Array(l),d=new U;let f=0;for(let h=0;h<l;h++){WA(a[h],o[h],1,d),c[h*3]=d.x,c[h*3+1]=d.y,c[h*3+2]=d.z;const w=Du(a[h],o[h])?1:0;u[h]=w,f+=w}const m=new Ce;m.setAttribute("position",new fe(c,3)),m.setAttribute("aLand",new fe(u,1));const _=new ke({transparent:!0,depthWrite:!1,uniforms:{uLandColor:{value:new Gt(t)},uOceanColor:{value:new Gt(e)},uLandSize:{value:A},uOceanSize:{value:i},uLandOpacity:{value:r},uOceanOpacity:{value:s},uPixelRatio:{value:1},uSizeScale:{value:1},uCamDir:{value:new U(0,0,1)},uFadeStart:{value:.06}},vertexShader:`
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
    `}),p=new ga(m,_);return p.frustumCulled=!1,p.renderOrder=2,p.userData.stats={count:l,landCount:f},p}function cs({color:n=1315866,opacity:t=.13,latStep:e=10,lngStep:A=10,latLimit:i=80,segments:r=128}={}){const s=[],a=new U,o=(d,f)=>{WA(d,f,1.0005,a),s.push(a.x,a.y,a.z)};for(let d=-i;d<=i;d+=e)for(let f=0;f<r;f++)o(d,-180+f/r*360),o(d,-180+(f+1)/r*360);for(let d=-180;d<180;d+=A)for(let f=0;f<r;f++)o(-90+f/r*180,d),o(-90+(f+1)/r*180,d);const l=new Ce;l.setAttribute("position",new fe(new Float32Array(s),3));const c=new ke({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new Gt(n)},uOpacity:{value:t},uCamDir:{value:new U(0,0,1)},uFadeStart:{value:.1}},vertexShader:`
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
    `}),u=new fa(l,c);return u.frustumCulled=!1,u.renderOrder=1,u}function Lu({color:n=1315866,opacity:t=.28,segments:e=512}={}){const A=new Float32Array(e*3);for(let o=0;o<e;o++){const l=o/e*Math.PI*2;A[o*3]=Math.cos(l),A[o*3+1]=Math.sin(l),A[o*3+2]=0}const i=new Ce;i.setAttribute("position",new fe(A,3));const r=new Sr({color:n,transparent:!0,opacity:t,depthWrite:!1}),s=new pa(i,r);s.frustumCulled=!1,s.renderOrder=3;const a=new U(0,0,1);return s.userData.faceCamera=o=>{s.quaternion.setFromUnitVectors(a,o)},s}function Iu(n){const t=n.length,e=new Float32Array(t*2*3),A=new Float32Array(t*2*3),i=new Float32Array(t*2*3),r=new Float32Array(t*2),s=new Float32Array(t*2);for(let l=0;l<t;l++){const c=n[l],u=n[Math.max(l-1,0)],d=n[Math.min(l+1,t-1)],f=t===1?0:l/(t-1);for(let m=0;m<2;m++){const _=(l*2+m)*3;e[_]=c.x,e[_+1]=c.y,e[_+2]=c.z,A[_]=u.x,A[_+1]=u.y,A[_+2]=u.z,i[_]=d.x,i[_+1]=d.y,i[_+2]=d.z,r[l*2+m]=m===0?-1:1,s[l*2+m]=f}}const a=new Uint32Array((t-1)*6);for(let l=0;l<t-1;l++){const c=l*2,u=l*6;a[u]=c,a[u+1]=c+1,a[u+2]=c+2,a[u+3]=c+2,a[u+4]=c+1,a[u+5]=c+3}const o=new Ce;return o.setAttribute("position",new fe(e,3)),o.setAttribute("aPrev",new fe(A,3)),o.setAttribute("aNext",new fe(i,3)),o.setAttribute("aSide",new fe(r,1)),o.setAttribute("aAlong",new fe(s,1)),o.setIndex(new fe(a,1)),o}const Uu=`
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
    float t = 1.0 - local;
    if (t < 0.8) return sqrt(t / 0.8);
    float k = (t - 0.8) / 0.2;
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
`,Fu=`
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
`;function us({baseColor:n=6710886,satColor:t=0,baseOpacity:e=0,satOpacity:A=1,width:i=2,opacity:r=1,mode:s=0,tailLength:a=.035,satFeather:o=.02}={}){return new ke({transparent:!0,depthWrite:!1,depthTest:!1,side:2,uniforms:{uResolution:{value:new Kt(1,1)},uWidth:{value:i},uOpacity:{value:r},uBaseColor:{value:new Gt(n)},uSatColor:{value:new Gt(t)},uBaseOpacity:{value:e},uSatOpacity:{value:A},uDrawProgress:{value:0},uHeadT:{value:0},uTailLength:{value:a},uSatFeather:{value:o},uMode:{value:s},uCamDir:{value:new U(0,0,1)}},vertexShader:Uu,fragmentShader:Fu})}function Nu(n,t,e,A=new U){const i=Math.min(1,Math.max(-1,n.dot(t))),r=Math.acos(i);if(r<1e-6)return A.copy(n);const s=Math.sin(r),a=Math.sin((1-e)*r)/s,o=Math.sin(e*r)/s;return A.set(n.x*a+t.x*o,n.y*a+t.y*o,n.z*a+t.z*o)}function Bu(n,t,{segments:e=192,lift:A=.055}={}){const i=WA(n.lat,n.lng,1),r=WA(t.lat,t.lng,1),s=[];for(let a=0;a<=e;a++){const o=a/e,l=Nu(i,r,o);l.multiplyScalar(1+A*Math.sin(Math.PI*o)),s.push(l)}return s}class Ou{constructor(t,e,{segments:A=192,lift:i=.055,width:r=2,dropWidth:s=7,baseColor:a=6710886,satColor:o=0,baseOpacity:l=0,satOpacity:c=1,dropBaseColor:u=4473924,tailLength:d=.035}={}){this.from=t,this.to=e,this.tailLength=d;const f=Bu(t,e,{segments:A,lift:i});this.geometry=Iu(f),this.arcMaterial=us({baseColor:a,satColor:o,baseOpacity:l,satOpacity:c,width:r,mode:0,tailLength:d}),this.dropMaterial=us({baseColor:u,satColor:o,baseOpacity:.75,satOpacity:1,width:s,mode:1,tailLength:d}),this.arc=new Ge(this.geometry,this.arcMaterial),this.drop=new Ge(this.geometry,this.dropMaterial),this.arc.frustumCulled=!1,this.drop.frustumCulled=!1,this.arc.renderOrder=10,this.drop.renderOrder=11,this.group=new rn,this.group.add(this.arc,this.drop),this.setProgress(0),this.setHead(0)}setProgress(t){const e=Math.min(1,Math.max(0,t));return this.arcMaterial.uniforms.uDrawProgress.value=e,this.dropMaterial.uniforms.uDrawProgress.value=e,this}setHead(t){const e=Math.min(1,Math.max(0,t));return this.arcMaterial.uniforms.uHeadT.value=e,this.dropMaterial.uniforms.uHeadT.value=e,this}setOpacity(t){return this.arcMaterial.uniforms.uOpacity.value=t,this.dropMaterial.uniforms.uOpacity.value=t,this}syncCamera(t,e,A){for(const i of[this.arcMaterial,this.dropMaterial])i.uniforms.uCamDir.value.copy(t),i.uniforms.uResolution.value.set(e,A);return this}dispose(){this.geometry.dispose(),this.arcMaterial.dispose(),this.dropMaterial.dispose()}}const zu=2,Hu=500,Gu=[.7,1.6];class ku{constructor(t,e){if(this.root=t,t.style.pointerEvents||(t.style.pointerEvents="none"),this.layout=e,this.anchor=document.querySelector("[data-globe-anchor]")||t,this.box=document.createElement("div"),this.box.className="globe-box",Object.assign(this.box.style,{position:"absolute",top:"0",left:"0",height:"100%",pointerEvents:"none"}),e.feather>0){const i=`linear-gradient(to bottom, #000 calc(100% - ${e.feather}px), transparent 100%)`;this.box.style.maskImage=i,this.box.style.webkitMaskImage=i}e.fadeIn>0&&(this.box.style.opacity="0",this.box.style.transition=`opacity ${e.fadeIn}s ease-out`),t.appendChild(this.box),this.canvas=document.createElement("canvas"),this.canvas.className="globe-canvas",Object.assign(this.canvas.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block",pointerEvents:"none"}),this.box.appendChild(this.canvas),this.renderer=new Eu({canvas:this.canvas,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.scene=new ca,this.globeCam=new wu,this.globeCam.lookAtLatLng(e.cameraLat,e.cameraLng),this.gridOpts={},this.dotOpts={},this.rimOpts={},this.grid=cs(this.gridOpts),this.dots=ls(this.dotOpts),this.rim=Lu(this.rimOpts),this.scene.add(this.grid,this.dots,this.rim),this.routes=[],this._needsResize=!0,this._size={w:0,h:0,dpr:0},this._onFrame=[],this._ro=new ResizeObserver(()=>{this._needsResize=!0}),this._ro.observe(this.root),this.cutEl=null,e.cutBelow&&e.cutBelow!=="none"&&(this.cutEl=document.querySelector(e.cutBelow),this.cutEl?this._ro.observe(this.cutEl):console.warn("[globe] data-cut-below found nothing for",e.cutBelow)),this._onWindowResize=()=>{this._needsResize=!0},window.addEventListener("resize",this._onWindowResize),window.addEventListener("scroll",this._onWindowResize,{passive:!0}),this._raf=null,this._lastTime=0,this.deltaSeconds=0,this._aim=null,this._pointer={x:0,y:0},this._drift={x:0,y:0},this._onPointerMove=i=>{if(i.pointerType==="touch")return;const r=window.innerWidth||1,s=window.innerHeight||1;this._pointer.x=Math.max(-1,Math.min(1,i.clientX/r*2-1)),this._pointer.y=Math.max(-1,Math.min(1,i.clientY/s*2-1))},this._onPointerLeave=()=>{this._pointer.x=0,this._pointer.y=0};const A=window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches;this._driftEnabled=!A&&(e.drift>0||e.driftLat>0),this._driftEnabled&&(window.addEventListener("pointermove",this._onPointerMove,{passive:!0}),document.documentElement.addEventListener("pointerleave",this._onPointerLeave))}_applyDrift(){const t=this.deltaSeconds,e=1-Math.exp(-this.layout.driftEase*t),A=this._drift;A.x+=(this._pointer.x-A.x)*e,A.y+=(this._pointer.y-A.y)*e;const i=this._aim||{lat:this.layout.cameraLat,lng:this.layout.cameraLng},r=this.layout.driftDirection,s=Math.max(-89,Math.min(89,i.lat+r*A.y*this.layout.driftLat)),a=i.lng-r*A.x*this.layout.drift,o=this.globeCam;Math.abs(o.lat-s)<1e-4&&Math.abs(o.lng-a)<1e-4||(o.lookAtLatLng(s,a),this._syncCamDir())}onFrame(t){return this._onFrame.push(t),()=>{const e=this._onFrame.indexOf(t);e>=0&&this._onFrame.splice(e,1)}}project(t,e,A=0){return this.globeCam.project(t,e,A)}_bleedHost(t){let e=null,A=this.root.parentElement;for(;A&&A!==document.body;){const i=getComputedStyle(A);(i.overflowX!=="visible"||i.overflowY!=="visible")&&A.getBoundingClientRect().width<t-1&&(e=A),A=A.parentElement}return!e||!e.parentElement?this.root:e.parentElement}_mobileMix(t){const e=this.layout.easeBelow,A=Math.max(e+1,this.layout.easeAbove),i=Math.min(1,Math.max(0,(t-e)/(A-e)));return 1-i*i*(3-2*i)}_lift(){if(this.layout.mobileLiftTall===null)return this.layout.mobileLift;const t=this.layout.liftShortH,e=Math.max(t+1,this.layout.liftTallH),A=window.innerHeight||e,i=Math.min(1,Math.max(0,(A-t)/(e-t))),r=i*i*(3-2*i);return this.layout.mobileLift+(this.layout.mobileLiftTall-this.layout.mobileLift)*r}_applyLayout(){const t=this.root.getBoundingClientRect(),e=this.anchor.getBoundingClientRect(),A=this.layout.fullBleed,i=document.documentElement.clientWidth||t.width;this.mobile=i<this.layout.mobileBelow;const r=this._mobileMix(i),s=this.layout.mobileTurn*r,a=this.layout.cameraLatMobile===null?this.layout.cameraLat:this.layout.cameraLat+(this.layout.cameraLatMobile-this.layout.cameraLat)*r;let o=this.root;A&&(o=this._bleedHost(i),o!==this.box.parentElement&&(o!==this.root&&getComputedStyle(o).position==="static"&&(o.style.position="relative"),o.appendChild(this.box)));let l=t.height;if(this.cutEl){const M=this.cutEl.getBoundingClientRect().bottom-t.top+this.layout.cutOffset;l=Math.max(1,Math.min(l,M))}const c=o.getBoundingClientRect(),u=A?i:t.width,d=A?-c.left:0;this.box.style.left=`${d}px`,this.box.style.top=`${A?t.top-c.top:0}px`,this.box.style.width=`${u}px`,this.box.style.height=`${l}px`,A&&t.left;const f={top:t.top,width:u,height:l},m=Math.max(1,Math.round(f.width)),_=Math.max(1,Math.round(f.height)),p=Math.min(window.devicePixelRatio||1,zu);(m!==this._size.w||_!==this._size.h||p!==this._size.dpr)&&(this.renderer.setPixelRatio(p),this.renderer.setSize(m,_,!1),this._size={w:m,h:_,dpr:p},this.dots.material.uniforms.uPixelRatio.value=p);const h=e.top-t.top,w=A?e.left+e.width/2:e.left-t.left+e.width/2;let E,S;if(this.layout.fitRoute>0&&this.route){const{from:M,to:x}=this.route,P=this.layout.aimAtRoute?bu(M.lat,M.lng,x.lat,x.lng):{lat:a,lng:this.layout.cameraLng},z=Math.max(-89,Math.min(89,P.lat+this.layout.tilt));this._aim={lat:z,lng:P.lng+this.layout.spin-s},this.globeCam.lookAtLatLng(this._aim.lat,this._aim.lng),this.globeCam.layout(m,_,{x:w,y:0},1);const G=this.globeCam.project(M.lat,M.lng),X=this.globeCam.project(x.lat,x.lng),Y=Math.hypot(X.x-G.x,X.y-G.y),W=this.layout.refWidth||m,Q=Math.max(1,W*this.layout.fitRoute),H=Math.min(this.layout.scaleMax,Math.max(this.layout.scaleMin,m/W));E=Q/Math.max(1e-6,Y)*H;const it=(G.y+X.y)/2;if(this.layout.apexClearance!==null)S=h+this.layout.apexClearance+E;else{const ct=e.height||_;S=h+ct*this.layout.routeY-it*E}}else{const M=Math.max(-89,Math.min(89,a+this.layout.tilt));if(this._aim={lat:M,lng:this.layout.cameraLng+this.layout.spin-s},this.globeCam.lookAtLatLng(this._aim.lat,this._aim.lng),this.layout.hasRefWidth){const x=this.layout.refWidth,P=Math.min(this.layout.scaleMax,Math.max(this.layout.scaleMin,i/x));E=x*this.layout.radiusScale*P}else this._warnedNoFit||(this._warnedNoFit=!0,console.warn('[globe] the globe is sized from its container, so it shrinks with the screen. Add data-ref-width="1440" to #globe-root to hold its size and crop instead.')),E=e.width*this.layout.radiusScale;if(this.layout.radiusMaxVh>0){const x=window.innerHeight||f.height||1;E=Math.min(E,x*this.layout.radiusMaxVh)}S=h+E*this.layout.centerYFactor,this.layout.apexClearance!==null&&(S=Math.max(S,h+this.layout.apexClearance+E))}if(this.layout.mobileScale!==1&&r>0){const M=1+(this.layout.mobileScale-1)*r,x=S-E;E*=M,S=x+E}const D=this._lift();D!==0&&r>0&&(S-=D*r);const T={x:w,y:S};this.globeCam.layout(m,_,T,E);const[C,N]=Gu;this.dots.material.uniforms.uSizeScale.value=Math.min(N,Math.max(C,E/Hu)),this._syncCamDir(),this._needsResize=!1}_syncCamDir(){const t=this.globeCam.camDir;this.dots.material.uniforms.uCamDir.value.copy(t),this.grid.material.uniforms.uCamDir.value.copy(t),this.rim.userData.faceCamera(t);for(const e of this.routes)e.syncCamera(t,this._size.w||1,this._size.h||1)}addRoute(t,e,A){const i=new Ou(t,e,A);return this.route={from:t,to:e},this.routes.push(i),this.scene.add(i.group),this._needsResize=!0,i}_replace(t,e,A){const i=this[t];return this.scene.remove(i),i.geometry.dispose(),i.material.dispose(),this[t]=e(A),this.scene.add(this[t]),this._syncCamDir(),t==="dots"&&(this.dots.material.uniforms.uPixelRatio.value=this._size.dpr||1,this._needsResize=!0),this[t]}setGrid(t){return Object.assign(this.gridOpts,t),this._replace("grid",cs,this.gridOpts)}setDots(t){return Object.assign(this.dotOpts,t),this._replace("dots",ls,this.dotOpts)}start(){if(this._raf!==null)return;const t=e=>{this._raf=requestAnimationFrame(t),this.deltaSeconds=this._lastTime?Math.min((e-this._lastTime)/1e3,.1):0,this._lastTime=e,this._needsResize&&this._applyLayout(),this._driftEnabled&&this._applyDrift();for(const A of this._onFrame)A(e,this);this.renderer.render(this.scene,this.globeCam.camera),this._revealed||(this._revealed=!0,requestAnimationFrame(()=>{this.box.style.opacity="1"}))};this._raf=requestAnimationFrame(t)}stop(){this._raf!==null&&cancelAnimationFrame(this._raf),this._raf=null,this._lastTime=0,this.deltaSeconds=0}dispose(){this.stop(),this._ro.disconnect(),window.removeEventListener("resize",this._onWindowResize),window.removeEventListener("scroll",this._onWindowResize),window.removeEventListener("pointermove",this._onPointerMove),document.documentElement.removeEventListener("pointerleave",this._onPointerLeave),this.renderer.dispose(),this.canvas.remove()}}const hs=[{id:"origin",lat:37.7749,lng:-122.4194,label:"San Francisco"},{id:"destination",lat:40.7128,lng:-74.006,label:"New York"}],kt={radiusScale:.403,centerYFactor:.925,cameraLat:-20,cameraLatMobile:-5,cameraLng:-91,globeStart:0,fitRoute:0,routeY:.34,tilt:0,spin:0,aimAtRoute:!1,fullBleed:!1,refWidth:1440,hasRefWidth:!1,scaleMin:1,scaleMax:1,mobileScale:1,mobileLift:40,mobileLiftTall:null,liftShortH:667,liftTallH:880,mobileBelow:768,mobileTurn:10,easeBelow:430,easeAbove:1024,radiusMaxVh:0,apexClearance:null,drift:4,driftLat:2,driftEase:3,driftDirection:-1,feather:120,cutBelow:".hero1_profile_wrap",cutOffset:64,fadeIn:1.2};function Xt(n,t,e){const A=n.getAttribute(t);if(A===null||A.trim()==="")return e;const i=Number.parseFloat(A);return Number.isFinite(i)?i:e}function Vu(n=document){const t=n.querySelectorAll("[data-globe-place]");if(!t.length)return hs;const e=[];return t.forEach((A,i)=>{const r=Xt(A,"data-lat",NaN),s=Xt(A,"data-lng",NaN);if(!Number.isFinite(r)||!Number.isFinite(s)){console.warn("[globe] skipping place with bad lat/lng",A);return}e.push({id:A.getAttribute("data-id")||`place-${i}`,lat:r,lng:s,label:A.getAttribute("data-label")||"",el:A})}),e.length?e:hs}function Wu(n){return n?{radiusScale:Xt(n,"data-radius-scale",kt.radiusScale),centerYFactor:Xt(n,"data-center-y",kt.centerYFactor),cameraLat:Xt(n,"data-camera-lat",kt.cameraLat),cameraLatMobile:n.hasAttribute("data-camera-lat-mobile")?Xt(n,"data-camera-lat-mobile",kt.cameraLat):kt.cameraLatMobile,cameraLng:Xt(n,"data-camera-lng",kt.cameraLng),globeStart:Xt(n,"data-globe-start",kt.globeStart),fitRoute:Xt(n,"data-fit-route",kt.fitRoute),routeY:Xt(n,"data-route-y",kt.routeY),tilt:Xt(n,"data-tilt",kt.tilt),spin:Xt(n,"data-spin",kt.spin),aimAtRoute:n.hasAttribute("data-aim-at-route"),fullBleed:n.hasAttribute("data-full-bleed"),refWidth:Xt(n,"data-ref-width",kt.refWidth),hasRefWidth:n.hasAttribute("data-ref-width"),scaleMin:Xt(n,"data-scale-min",kt.scaleMin),scaleMax:Xt(n,"data-scale-max",kt.scaleMax),mobileScale:Xt(n,"data-mobile-scale",kt.mobileScale),mobileLift:Xt(n,"data-mobile-lift",kt.mobileLift),mobileLiftTall:n.hasAttribute("data-mobile-lift-tall")?Xt(n,"data-mobile-lift-tall",0):kt.mobileLiftTall,liftShortH:Xt(n,"data-lift-short-h",kt.liftShortH),liftTallH:Xt(n,"data-lift-tall-h",kt.liftTallH),mobileBelow:Xt(n,"data-mobile-below",kt.mobileBelow),mobileTurn:Xt(n,"data-mobile-turn",kt.mobileTurn),easeBelow:Xt(n,"data-ease-below",kt.easeBelow),easeAbove:Xt(n,"data-ease-above",kt.easeAbove),radiusMaxVh:Xt(n,"data-radius-max-vh",kt.radiusMaxVh),apexClearance:n.hasAttribute("data-apex-clearance")?Xt(n,"data-apex-clearance",0):kt.apexClearance,drift:Xt(n,"data-drift",kt.drift),driftLat:Xt(n,"data-drift-lat",kt.driftLat),driftEase:Xt(n,"data-drift-ease",kt.driftEase),driftDirection:(n.getAttribute("data-drift-direction")||"").toLowerCase()==="same"?1:kt.driftDirection,feather:Xt(n,"data-feather",kt.feather),cutBelow:n.hasAttribute("data-cut-below")?n.getAttribute("data-cut-below").trim():kt.cutBelow,cutOffset:Xt(n,"data-cut-offset",kt.cutOffset),fadeIn:Xt(n,"data-fade-in",kt.fadeIn)}:{...kt}}const Xu=[["San Francisco",37.7749,-122.4194],["New York",40.7128,-74.006],["London",51.5074,-.1278],["Reykjavik",64.1466,-21.9426],["Mexico City",19.4326,-99.1332],["Bogota",4.711,-74.0721],["Anchorage",61.2181,-149.9003],["Lagos",6.5244,3.3792],["Tokyo",35.6762,139.6503],["Sydney",-33.8688,151.2093],["Cape Town",-33.9249,18.4241],["Honolulu",21.3069,-157.8583],["Null Island",0,0],["North Pole",89.9,0]];function qu(n){const t=document.createElement("div");Object.assign(t.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"40",font:"11px ui-monospace, monospace"}),n.root.appendChild(t);const e=Xu.map(([A,i,r])=>{const s=document.createElement("div");return s.textContent=A,Object.assign(s.style,{position:"absolute",transform:"translate(-50%, -50%)",padding:"2px 5px",borderRadius:"3px",background:"#ff2d55",color:"#fff",whiteSpace:"nowrap",willChange:"transform, opacity"}),t.appendChild(s),{el:s,lat:i,lng:r}});return n.onFrame(()=>{for(const A of e){const i=n.project(A.lat,A.lng);A.el.style.opacity=i.visible?String(.35+.65*i.depth):"0",A.el.style.transform=`translate(${i.x}px, ${i.y}px) translate(-50%, -50%)`}}),t}const Yu=`
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
`,ln=n=>n<0?0:n>1?1:n,$u=n=>1-Math.pow(1-n,3);let ds=!1;function ju(n){if(ds)return;ds=!0;const t=n.createElement("style");t.textContent=Yu,n.head.appendChild(t)}function Ku(n){ju(document);const t=document.createElement("div");return t.className="globe-pin-layer",Object.assign(t.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"40",overflow:"hidden"}),(n.box||n.root).appendChild(t),t}class fs{constructor(t,e){this.place=e,this.el=document.createElement("div"),this.el.className="globe-pin";const A=document.createElement("div");A.className="globe-pin__pill";const i=document.createElement("span");i.className="globe-pin__label",i.textContent=e.label,A.appendChild(i);const r=document.createElement("div");r.className="globe-pin__stem";const s=document.createElement("div");s.className="globe-pin__dot",this.el.append(A,r,s),this.pill=A,this.label=i,this.stem=r,this.dot=s,this.fullWidth=0,this.circleWidth=33,t.appendChild(this.el),this._amount=0,this._pill=1,this.setAmount(0)}setAmount(t){return this._amount=t,this}setPill(t){return this._pill=t,this}_measure(){if(this.fullWidth)return;const t=this.pill.style.width,e=this.label.style.opacity;this.pill.style.width="auto",this.label.style.opacity="1";const A=this.pill.offsetWidth,i=this.pill.offsetHeight;A&&(this.fullWidth=Math.ceil(A),this.circleWidth=Math.ceil(i)||33),this.pill.style.width=t,this.label.style.opacity=e}update(t){const e=t.project(this.place.lat,this.place.lng),A=this._amount;if(!e.visible||A<=.001){this.el.style.opacity="0";return}this._measure();const i=Math.min(1,e.depth/.12),r=ln(A);this.el.style.opacity=String(r*i),this.el.style.transform=`translate(${e.x}px, ${e.y}px)`;const s=ln(t.mobile?1:this._pill)*r,a=$u(ln((s-.3)/.7)),o=ln((s-.55)/.45),l=ln(s/.3),c=Math.round(this.circleWidth+(this.fullWidth-this.circleWidth)*a);this.pill.style.width=`${c}px`,this.pill.style.marginLeft=`${-c/2}px`,this.pill.style.opacity=String(l),this.pill.style.transform=`scale(${.7+.3*l})`,this.label.style.opacity=String(o),this.stem.style.transform=`scaleY(${r})`,this.dot.style.transform=`scale(${.4+.6*r})`}dispose(){this.el.remove()}}const Zu=new Set(["IMG","SVG","PICTURE","VIDEO","CANVAS"]);function Qu(n){return n.hasAttribute("data-type-atom")||Zu.has(n.tagName.toUpperCase())?!0:n.textContent.trim()===""}function Ju(n){const t=[];for(let e=1;e<=n.length;e++)t.push(e);return t}function th(n){const t=[],e=/\S+/g;let A;for(;(A=e.exec(n))!==null;)t.push(A.index+A[0].length);return!t.length&&n.length&&t.push(n.length),t}function ps(n,t,e){for(const A of Array.from(n.childNodes)){if(A.nodeType===Node.TEXT_NODE){const i=A.nodeValue;if(i.trim()===""||e.skip(A.parentElement))continue;const r=e.byWord?th(i):Ju(i);t.push({kind:"text",node:A,text:i,steps:r,cost:r.length});continue}A.nodeType===Node.ELEMENT_NODE&&(e.skip(A)||(Qu(A)?t.push({kind:"atom",el:A,cost:e.atomCost,display:A.style.display}):ps(A,t,e)))}}class ms{constructor(t,{skipSelector:e=null,byWord:A=!1}={}){this.el=t,this.byWord=A;const i=e?Array.from(t.querySelectorAll(e)):[],r=s=>s?i.some(a=>a===s||a.contains(s)):!1;this.units=[],ps(t,this.units,{skip:r,byWord:A,atomCost:A?1:4}),this.total=this.units.reduce((s,a)=>s+a.cost,0),this.revealed=-1,this.reveal(0)}reveal(t){if(t===this.revealed)return;this.revealed=t;let e=t;for(const A of this.units){if(A.kind==="text"){const i=Math.max(0,Math.min(A.steps.length,e)),r=i===0?0:A.steps[i-1],s=A.text.slice(0,r);A.node.nodeValue!==s&&(A.node.nodeValue=s)}else{const i=e>=A.cost?A.display||"":"none";A.el.style.display!==i&&(A.el.style.display=i)}e-=A.cost}}get done(){return this.revealed>=this.total}}const gs=.6;function _s(n,t,e){const A=n.getAttribute(t);if(A===null||A.trim()==="")return e;const i=A.split(",").map(r=>Number.parseFloat(r.trim())).filter(r=>Number.isFinite(r));return i.length?i:e}function eh(n,t,e){const A=n.getAttribute(t);if(A===null||A.trim()==="")return e;const i=Number.parseFloat(A);if(!Number.isFinite(i))return e;if(!/rems*$/i.test(A))return i;const r=Number.parseFloat(getComputedStyle(n.ownerDocument.documentElement).fontSize);return i*(Number.isFinite(r)?r:16)}function Pe(n,t,e){const A=n.getAttribute(t);if(A===null||A.trim()==="")return e;const i=Number.parseFloat(A);return Number.isFinite(i)?i:e}const AA=n=>n<0?0:n>1?1:n,cn=n=>1-Math.pow(1-n,3),Ni=n=>n*n*n,Ah=n=>1+(1.70158+1)*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2);function nh(n){const t=n.hasAttribute("data-globe-pin"),e=(n.getAttribute("data-anim")||"fade").toLowerCase(),A={el:n,anchored:t,anim:e,lat:Pe(n,"data-lat",0),lng:Pe(n,"data-lng",0),offsetX:Pe(n,"data-offset-x",0),offsetY:Pe(n,"data-offset-y",0),mobileOffsetY:Pe(n,"data-mobile-offset-y",0),mobileAbove:(n.getAttribute("data-mobile-above")||"").trim(),mobileAboveEl:null,mobileGap:eh(n,"data-mobile-gap",64),ins:_s(n,"data-in",[0]),outs:n.hasAttribute("data-out")?_s(n,"data-out",[]):[],collapse:(n.getAttribute("data-collapse")||"true").toLowerCase()!=="false",dur:Pe(n,"data-dur",gs),outDur:Pe(n,"data-out-dur",Pe(n,"data-dur",gs)),growOut:Pe(n,"data-grow-out",Pe(n,"data-grow-from",.6)),wipeFrom:(n.getAttribute("data-wipe-from")||"left").toLowerCase(),typeSpeed:Pe(n,"data-type-speed",26),typer:null,strokes:null,kids:null,kidStep:.12,growFrom:.6,typedCount:-1,hiddenByDisplay:!1,revealDisplay:""};if(n.getAttribute("data-no-wrap")==="true"){n.style.whiteSpace="nowrap",n.style.flexShrink="0";for(const r of Array.from(n.children))r.style.whiteSpace="nowrap",r.style.flexShrink="0"}if(e==="type"){const r=n.getBoundingClientRect();r.height&&(n.style.minHeight=`${Math.ceil(r.height)}px`),n.style.visibility="visible";const s=(n.getAttribute("data-type-by")||"word").toLowerCase()!=="char";A.typer=new ms(n,{skipSelector:n.getAttribute("data-type-skip")||null,byWord:s}),n.hasAttribute("data-type-speed")||(A.typeSpeed=s?4.5:26)}if(e==="grow"){const r=n.getAttribute("data-stagger-target"),s=Array.from(r?n.querySelectorAll(r):n.children);A.kids=s,A.kidStep=Pe(n,"data-stagger",.12),A.growFrom=Pe(n,"data-grow-from",.6);for(const a of s)a.style.willChange="transform, opacity"}if(e==="draw"){const r=n.getAttribute("data-draw-target")||"path";A.strokes=Array.from(n.querySelectorAll(r)).filter(s=>typeof s.getTotalLength=="function").map(s=>{let a=0;try{a=s.getTotalLength()}catch{a=0}return a?(s.style.strokeDasharray=String(a),s.style.strokeDashoffset=String(a),{path:s,length:a}):null}).filter(Boolean)}const i=typeof getComputedStyle=="function"?getComputedStyle(n):null;return i&&i.display==="none"&&(A.hiddenByDisplay=!0,A.revealDisplay=n.getAttribute("data-display")||"block"),n.style.willChange="transform, opacity",A.host=n,t&&n.getAttribute("data-reparent")!=="true"&&(n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.margin="0"),A}function ih(n){const t=n.root;let e=t.parentElement;if(n.cutEl)for(;e&&!e.contains(n.cutEl);)e=e.parentElement;return e||t.parentElement||t}function rh(n,t){const e=t.ownerDocument;let A=t.querySelector(":scope > .globe-overlay-layer");for(const i of n){if(!i.anchored||i.el.getAttribute("data-reparent")!=="true"||i.host!==i.el)continue;A||(A=e.createElement("div"),A.className="globe-overlay-layer",A.style.position="absolute",A.style.top="0",A.style.left="0",A.style.pointerEvents="none",A.style.zIndex="45",t.appendChild(A)),i.hiddenByDisplay&&(i.el.style.display=i.revealDisplay);const r=i.el,s=getComputedStyle(r).position;s!=="static"&&(r.dataset.globeAuthoredPosition=s,console.warn("[globe] "+(r.getAttribute("class")||"").split(" ")[0]+" is position:"+s+" in Webflow. An anchored card is positioned by the globe, so that has been reset - remove it in the Designer to avoid surprises.")),r.style.position="static",r.style.top="auto",r.style.right="auto",r.style.bottom="auto",r.style.left="auto",r.style.margin="0",r.style.transform="none",r.style.opacity="1",r.style.visibility="visible";const a=r.offsetHeight,o=e.createElement("div");o.className="globe-anchor-slot",o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.margin="0",o.style.willChange="transform, opacity",o.style.width="max-content",o.style.maxWidth="calc(100% - 2rem)",a&&(o.style.height=`${Math.ceil(a)}px`),A.appendChild(o),o.appendChild(i.el),i.el.style.willChange="",i.hiddenByDisplay&&(o.style.display="none",i.revealDisplay="block"),i.slotHeight=Math.ceil(a)||0,i.host=o}return A||null}function sh(n){const t=n.querySelectorAll('[data-lock-width="true"], [data-lock-height="true"]');for(const e of t){const A=e.getBoundingClientRect?e.getBoundingClientRect():null;A&&(e.getAttribute("data-lock-width")==="true"&&A.width&&(e.style.width=`${Math.ceil(A.width)}px`,e.style.flexGrow="0",e.style.flexShrink="0"),e.getAttribute("data-lock-height")==="true"&&A.height&&(e.style.height=`${Math.ceil(A.height)}px`))}}function ah(n,t){let e=-1;for(let A=0;A<n.ins.length;A++)t>=n.ins[A]&&(e=A);return e<0?{index:-1,start:n.ins[0]??0,end:n.outs[0]??null}:{index:e,start:n.ins[e],end:n.outs[e]===void 0?null:n.outs[e]}}class oh{constructor(t,e=document){const A=e.querySelectorAll("[data-globe-cue], [data-globe-pin]");sh(e),this.items=Array.from(A).map(nh),this.stage=t,this.layer=null,this._layerShift={x:0,y:0},t&&t.root&&(this.layer=rh(this.items,ih(t)))}_syncLayer(t){if(!this.layer)return;const e=(t.box||t.root).getBoundingClientRect(),A=this.layer.getBoundingClientRect(),i=this._layerShift;i.x+=e.left-A.left,i.y+=e.top-A.top;const r=this.layer.style;r.width=`${e.width}px`,r.height=`${e.height}px`,r.transform=`translate(${i.x}px, ${i.y}px)`}get maxTime(){return this.items.reduce((t,e)=>{const A=e.ins[e.ins.length-1],i=e.outs.length?e.outs[e.outs.length-1]:null,r=Math.max(A,i===null?0:i)+e.dur,s=e.typer?A+e.typer.total/e.typeSpeed:0;return Math.max(t,r,s)},0)}update(t,e){this._boxTop=null,this._syncLayer(e);for(const A of this.items)this._updateItem(A,t,e)}_mobileAboveTop(t,e){return t.mobileAbove?!t.mobileAboveEl&&(t.mobileAboveEl=document.querySelector(t.mobileAbove),!t.mobileAboveEl)?(console.warn("[globe] data-mobile-above found nothing for",t.mobileAbove),t.mobileAbove="",null):(this._boxTop===null&&(this._boxTop=(e.box||e.root).getBoundingClientRect().top),t.mobileAboveEl.getBoundingClientRect().top-this._boxTop):null}_updateItem(t,e,A){const i=ah(t,e),r=i.index<0?0:AA((e-i.start)/t.dur),s=i.end===null?0:AA((e-i.end)/t.outDur),a=r*(1-s),o=t.host;t.anim==="type"&&this._type(t,e,i.start),t.anim==="draw"&&this._draw(t,r);const l=i.end!==null&&e>=i.end+t.outDur;if(a<=.001){o.style.opacity="0",o.style.pointerEvents="none",t.anim==="wipe"&&(o.style.clipPath="inset(0 100% 0 0)"),(t.hiddenByDisplay||l&&t.collapse)&&(o.style.display="none");return}const c=t.hiddenByDisplay?t.revealDisplay:"";o.style.display!==c&&(o.style.display=c);let u=a,d=t.offsetX,f=t.offsetY,m=1;if(t.anim==="rise")f+=(1-cn(r))*16;else if(t.anim==="pop")m=.86+.14*Ah(r),u=AA(r*1.6)*(1-s);else if(t.anim==="type")u=r>0?1-s:0;else if(t.anim==="draw")u=r>0?1-s:0;else if(t.anim==="wipe"){const _=cn(AA(r)),p=s>0?Ni(s):0,h=Math.max(0,_-p);o.style.clipPath=t.wipeFrom==="right"?`inset(0 0 0 ${(1-h)*100}%)`:`inset(0 ${(1-h)*100}% 0 0)`,u=AA(r/.35)*(1-p)}else if(t.anim==="grow"){const _=cn(AA(r/.5)),p=t.growFrom+(1-t.growFrom)*_;m=s>0?p+(t.growOut-p)*Ni(s):p,u=AA(r/.25)*(1-Ni(s)),this._stagger(t,r,s)}if(t.anchored){const _=A.project(t.lat,t.lng);if(!_.visible){o.style.opacity="0",t.hiddenByDisplay&&(o.style.display="none");return}const p=Math.min(1,_.depth/.12);u*=p;const h=t.el.offsetHeight||t.slotHeight||0;h&&Math.abs(h-t.slotHeight)>.5&&(t.slotHeight=h,o.style.height=`${h}px`);const w=A.mobile?A._size.w/2:_.x+d;let E=_.y+f-h;if(A.mobile){const S=this._mobileAboveTop(t,A);E=S===null?_.y+t.mobileOffsetY:S-h-t.mobileGap}o.style.transform=`translate(${w}px, ${E}px) translate(-50%, 0) scale(${m})`,t.anim==="grow"&&(o.style.transformOrigin=A.mobile?"50% 0%":"50% 100%")}else o.style.transform=`translate(${d}px, ${f}px) scale(${m})`,t.anim==="grow"&&(o.style.transformOrigin="50% 100%");o.style.opacity=String(u),o.style.pointerEvents=u>.9?"":"none"}_stagger(t,e,A){if(!t.kids||!t.kids.length)return;const i=t.kidStep;t.kids.forEach((r,s)=>{const a=.35+s*i,o=AA((e-a)/.3),l=cn(o);r.style.opacity=String(l*(1-A)),r.style.transform=`translateY(${(1-l)*8}px)`})}_draw(t,e){if(!t.strokes||!t.strokes.length)return;const A=cn(AA(e));for(const i of t.strokes)i.path.style.strokeDashoffset=String(i.length*(1-A))}_type(t,e,A){if(!t.typer)return;const i=e-A,r=i<=0?0:Math.min(t.typer.total,Math.floor(i*t.typeSpeed));r!==t.typedCount&&(t.typedCount=r,t.typer.reveal(r),t.el.dataset.typing=t.typer.done?"0":"1")}}const $n=n=>n<0?0:n>1?1:n,jn=(n,t,e)=>n+(t-n)*e;function vs(n,t,e,A){const i=(r,s,a)=>3*r*a*(1-a)*(1-a)+3*s*a*a*(1-a)+a*a*a;return r=>{if(r<=0)return 0;if(r>=1)return 1;let s=0,a=1,o=r;for(let l=0;l<24;l++)o=(s+a)/2,i(n,e,o)<r?s=o:a=o;return i(t,A,o)}}const Bi=vs(.45,0,.2,1),Oi=vs(.22,1,.36,1);function zi(n,t,e="pref"){const A=t.gap-t.peek-t.space;return n<0?{y:A,s:.94,o:0,content:0,z:5}:n===0?{y:A,s:1,o:1,content:1,z:10,ease:Bi,odur:.25,cdelay:.35}:e==="pref"?{y:t.gap+t.height,s:1,o:0,content:1,z:11,ease:Bi}:{y:A,s:1,o:0,content:1,z:11,ease:Bi,odur:.6}}function lh(n,t){let e=-1;for(let A=0;A<t.length;A++)n>=t[A]&&(e=A);return e}function ch(n,t,e,A,i,r="pref"){const s=lh(n,e);if(s<0)return zi(-1,A,r);const a=zi(s-1-t,A,r),o=zi(s-t,A,r),l=n-e[s],c=o.ease||Oi,u=c($n(l/i)),d=c($n(l/(i*(o.odur||1)))),f=Oi($n((l-i*(o.cdelay||0))/(i*(o.cdur||1))));return{y:jn(a.y,o.y,u),s:jn(a.s,o.s,u),o:jn(a.o,o.o,d),content:jn(a.content,o.content,f),z:o.z}}const uh=["id","data-globe-cue","data-globe-pin","data-in","data-out","data-dur","data-anim"];function nA(n){for(const t of[n,...n.querySelectorAll("*")])for(const e of uh)t.removeAttribute(e);return n}function XA(n){return n.style.opacity="1",n.style.visibility="visible",n}function Hi(n){for(const t of[n,...n.children])t.style.whiteSpace="nowrap",t.style.flexShrink="0";return n}function Xe(n,t,e){n.style[t]!==e&&(n.style[t]=e)}let xs=!1;function hh(n,t,e){if(xs)return;xs=!0;const A=n.createElement("style"),i=e?`div:not(${e})`:"div";A.textContent=`.globe-stack-mobile, .globe-stack-mobile ${i} { font-size: ${t}px !important; }.globe-stack-mobile .globe-hide-mobile { display: none !important; }`,n.head.appendChild(A)}class dh{constructor(t,e=document){if(this.cfg=t,this.cards=[],this.times=[0,...t.cards.map(s=>s.at)],t.outAt&&this.times.push(t.outAt),this.template=e.querySelector(t.template),this.profile=e.querySelector(t.profile),!this.template||!this.profile){console.warn("[globe] card stack skipped: "+(this.template?t.profile:t.template)+" matched nothing");return}const A=this.template,i=A.parentElement;getComputedStyle(i).position==="static"&&(i.style.position="relative"),getComputedStyle(this.profile).position==="static"&&(this.profile.style.position="relative"),this.profile.style.zIndex="20",this.profile.style.whiteSpace="nowrap",this.wrap=t.wrap?e.querySelector(t.wrap):null;const r=t.name?this.profile.querySelector(t.name):null;t.mobileFontSize&&hh(document,t.mobileFontSize,r&&t.name),this._applyWidth(),t.minHeight&&(A.style.minHeight=`${t.minHeight}px`),t.cards.forEach((s,a)=>{const o=s.kind==="pref"?this._pref(s):this._prompt(s);if(!o)return;o.classList.add("globe-stack-card"),Object.assign(o.style,{position:"absolute",margin:"0",left:"0",top:"0",transformOrigin:"50% 50%",opacity:"0",visibility:"hidden"}),i.insertBefore(o,A);const l={spec:s,el:o,index:a+1,typer:null,strokes:null};s.kind==="pref"?l.strokes=Array.from(o.querySelectorAll("path")).map(c=>{let u=0;try{u=c.getTotalLength()}catch{u=0}return u?(c.style.strokeDasharray=String(u),{path:c,length:u}):null}).filter(Boolean):l.typer=new ms(o.firstElementChild,{byWord:t.typeBy!=="char"}),this.cards.push(l)}),A.style.visibility="hidden",this._measure(),this._onResize=()=>{this._dirty=!0},window.addEventListener("resize",this._onResize)}get maxTime(){const t=this.times[this.times.length-1];return this.cfg.cards.length?t+this.cfg.dur*1.5:0}_prompt(t){const e=this.template.querySelector(t.from);if(!e)return console.warn(`[globe] card stack: ${t.from} matched nothing, card skipped`),null;const A=nA(this.template.cloneNode(!1)),i=Hi(XA(nA(e.cloneNode(!t.text))));if(t.text){const s=e.querySelector(this.cfg.text),a=s?nA(s.cloneNode(!1)):document.createElement("div");a.textContent=t.text,i.appendChild(Hi(a))}if(getComputedStyle(e).display==="none"&&(i.style.display="flex"),t.hideOnMobile)for(const s of i.querySelectorAll(t.hideOnMobile))s.classList.add("globe-hide-mobile");A.appendChild(i);const r=this.template.querySelector(this.cfg.search);return r&&A.appendChild(XA(nA(r.cloneNode(!0)))),A}_pref(t){const e=this.template.querySelector(this.cfg.check),A=this.template.querySelector(this.cfg.text);if(!e||!A)return console.warn(`[globe] card stack: ${e?this.cfg.text:this.cfg.check} matched nothing, card skipped`),null;const i=nA(this.template.cloneNode(!1)),r=t.icon?this.template.querySelector(t.icon):null;t.icon&&!r&&console.warn(`[globe] card stack: ${t.icon} matched nothing, using the check`);let s;r?(s=XA(nA(e.cloneNode(!1))),s.style.alignItems="center",s.style.justifyContent="center",s.appendChild(XA(nA(r.cloneNode(!0))))):s=XA(nA(e.cloneNode(!0))),s.style.display="flex",s.style.flexShrink="0";const a=Hi(XA(nA(A.cloneNode(!1))));return a.textContent=t.text,a.style.margin="0",this.cfg.checkGap&&(i.style.gap=`${this.cfg.checkGap}px`),i.append(s,a),i}_applyWidth(){const{width:t,mobileBelow:e}=this.cfg,A=e>0&&document.documentElement.clientWidth<e;(this.wrap||this.template.parentElement).classList.toggle("globe-stack-mobile",A),this.wrap&&(Xe(this.wrap,"width",A?"100%":""),Xe(this.wrap,"maxWidth",A?"100%":"")),A?Xe(this.template,"width","100%"):t&&Xe(this.template,"width",`${t}px`)}_measure(){this._applyWidth();const t=this.template,e=t.offsetTop+t.offsetHeight;for(const i of this.cards)i.el.style.height="";const A=Math.ceil(Math.max(0,...this.cards.map(i=>i.el.offsetHeight)))||t.offsetHeight;this.geo={gap:this.profile.offsetTop-e,height:A,peek:this.cfg.peek,space:this.cfg.space,lift:this.cfg.lift};for(const i of this.cards){const r=A;i.el.style.boxSizing="border-box",i.el.style.height=`${r}px`,i.el.style.left=`${t.offsetLeft}px`,i.el.style.top=`${e-r}px`,i.el.style.width=`${t.offsetWidth}px`}this._dirty=!1}update(t){if(!this.cards.length)return;this._dirty&&this._measure();const e=this.cfg.dur;for(const A of this.cards){const i=ch(t,A.index,this.times,this.geo,e,A.spec.kind),r=A.el;Xe(r,"transform",`translateY(${i.y.toFixed(2)}px) scale(${i.s.toFixed(4)})`),Xe(r,"opacity",i.o.toFixed(3)),Xe(r,"zIndex",String(i.z)),Xe(r,"visibility",i.o<.002?"hidden":"visible");const s=i.content.toFixed(3);for(const o of r.children)Xe(o,"opacity",s);const a=t-A.spec.at-e*.35;if(A.typer){const o=a<=0?0:Math.min(A.typer.total,Math.floor(a*this.cfg.typeSpeed));A.typer.reveal(o)}if(A.strokes){const o=Oi($n(a/this.cfg.drawDur));for(const l of A.strokes)Xe(l.path,"strokeDashoffset",String(l.length*(1-o)))}}}dispose(){window.removeEventListener("resize",this._onResize);for(const t of this.cards)t.el.remove();this.template&&(this.template.style.visibility="")}}const un=[.6,1.4,1,1.1,1.8],hn=un.length,Gi=n=>n<0?0:n>1?1:n,ie=(n,t,e)=>n+(t-n)*e,fh=n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,ki=n=>1-Math.pow(1-n,3),he=(n,t,e,A=fh)=>A(Gi((n-t)/(e-t)));function Vi(n=un){const t=[0];for(const e of n)t.push(t[t.length-1]+e);return t}function ph(n,t,e=hn){return n>0?0:Math.min(e,1+Math.floor(-n/t))}function mh(n,t,e=Vi()[hn]){return e*Gi((0-n)/t)}function gh(n,t,e,A=10){const i=n+(t-n)*(1-Math.exp(-A*e));return Math.abs(t-i)<.001?t:i}function _h(n,t,e,A=1){const i=t-n;if(i===0)return n;const r=Math.max(1,Math.abs(i)/1.2)*A;return n+Math.sign(i)*Math.min(Math.abs(i),r*e)}function vh(n,t=un,e=Vi(t)){return t.map((A,i)=>Gi((n-e[i])/A))}function Ms(n,t=[255,255,255]){const e=/rgba?\(\s*([\d.]+)[ ,]+([\d.]+)[ ,]+([\d.]+)/.exec(n||"");return e?[Number(e[1]),Number(e[2]),Number(e[3])]:t}const Wi=Vi(un),xh=32,Mh=767,Ss="f2-style",Sh=`
.f2-pin{position:sticky;top:0;height:100vh;overflow:hidden}
.f2-track{position:absolute;left:0;top:0;width:0;height:0;z-index:2}
.f2-card{position:absolute!important;left:0!important;top:0!important;margin:0!important;box-sizing:border-box;transform-origin:50% 50%}
.f2-badge{position:absolute;top:12px;right:12px;display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:4.608px 10.4px;border-radius:6.912px;-webkit-backdrop-filter:blur(18.432px);backdrop-filter:blur(18.432px);font-family:inherit;font-size:13px;font-weight:600;line-height:19px;white-space:nowrap;pointer-events:none;z-index:2}
.f2-badge-disrupted{background:#fde7c4;color:#b8660f}
.f2-badge-confirmed{background:#c0f2b5;color:#17510b;opacity:0}
.f2-badge-rebooked{background:#fde7c4;color:#b8660f}
.f2-soft{background-color:#eeeef3!important}
.f2-soft,.f2-soft *{color:#121216!important}
.f2-ring{position:absolute;inset:-3px;border-radius:999px;z-index:-1;opacity:0;pointer-events:none;background:linear-gradient(90deg,#ff8c51,#f489ad 45%,#9b7cf6);filter:blur(6px)}
.f2-bg{position:absolute!important;inset:0!important;width:100%!important;height:100%!important;max-width:none!important;margin:0!important;object-fit:cover;object-position:50% 100%;z-index:-1;pointer-events:none}
.f2-pill{position:absolute;left:50%;top:50%;box-sizing:border-box;display:flex;align-items:center;gap:2.042em;padding:1.441em;opacity:0;pointer-events:none;font-size:10px;line-height:0}
.f2-avatar{position:relative;flex:0 0 auto;width:7.35em;height:7.35em;border-radius:50%;overflow:hidden;background:#dedeea}
.f2-avatar img{display:block!important;visibility:visible!important;position:absolute;inset:0;width:100%;height:100%;max-width:none;object-fit:cover}
.f2-avatar-b{width:7.278em;height:7.278em}
.f2-wave{flex:0 0 auto;width:15.682em;height:5.672em;display:flex;align-items:center;gap:.334em}
.f2-wave i{flex:0 0 auto;width:.667em;border-radius:.417em;background:#000;opacity:.2}
.f2-close{flex:0 0 auto;box-sizing:border-box;width:7.327em;height:7.327em;border-radius:50%;border:.24em solid transparent;display:flex;align-items:center;justify-content:center;background:linear-gradient(#fff,#fff) padding-box,linear-gradient(45deg,#ff8c51 0%,#f489ad 35%,#e388f2 62%,#96cbfa 100%) border-box}
.f2-close svg{width:2.4em;height:2.4em;display:block}
[data-f2-title],[data-f2-title] *{text-align:center!important}
.f2-title-b{position:absolute!important;opacity:0;pointer-events:none;margin:0!important;text-align:center}
.f2-title-b-head{margin:0!important;color:#000!important;text-align:center!important;max-width:none!important}
.f2-title-b-sub{margin:12px auto 0!important;max-width:448px!important;font-size:16px!important;font-weight:500!important;line-height:1.5!important;color:#000!important;text-align:center!important}
`,xe={count:12,disrupted:4,shift:2,hold:70,endHold:50,textGap:160,titleB:`24/7 human support,
whenever you need it.`,titleBSub:"Our support crew is here to help and available any time, day or night, wherever you are in the world.",disruptedLabel:"Disrupted",rebookedLabel:"Rebooked",confirmedLabel:"Confirmed",softButton:"See alternatives",logos:["","https://cdn.prod.website-files.com/6aa12b65e6dd0b96a2a8345b/6aa32dd2a66e06a72860750b_Flight.png","https://cdn.prod.website-files.com/6aa12b65e6dd0b96a2a8345b/6aa827c299c1c34d28a5cffe_slotStart%20(2).png"],avatarA:"https://cdn.prod.website-files.com/6aa12b65e6dd0b96a2a8345b/6aa835df822458297f3c3dd1_man_profile.png",avatarB:"https://cdn.prod.website-files.com/6aa12b65e6dd0b96a2a8345b/6aa3cae176be149882a84d17_5712689%202.png"},dn={w:466.45,h:102.32},yh="0 0 0 0.97px rgba(0,0,0,.04), 0 2.92px 7.8px -1.95px rgba(0,0,0,.1), 0 0.97px 0.97px -0.97px rgba(0,0,0,.1)",ys=[10.01,23.36,33.37,56.72,33.37,23.36,23.36,33.37,40.04,23.36,23.36,16.68,10.01,10.01,10.01,10.01],Eh='<svg viewBox="0 0 24 24" fill="none" aria-hidden="true"><path d="M5 5L19 19M19 5L5 19" stroke="#252525" stroke-width="2.4" stroke-linecap="round"/></svg>',qe=(n,t,e)=>{const A=n.getAttribute(t);return A===null||A.trim()===""?e:A},bh=n=>{const t=n.tagName==="IMG"?n:n.querySelector("img");return t?t.getAttribute("src")||"":qe(n,"data-f2-logo-src","")},fn=(n,t,e)=>{const A=parseFloat(n.getAttribute(t));return Number.isFinite(A)?A:e};function wh(n){if(n.getElementById(Ss))return;const t=n.createElement("style");t.id=Ss,t.textContent=Sh,n.head.appendChild(t)}let Th=0;function Rh(n){const t=`-f2c${++Th}`,e=new Map;for(const A of n.querySelectorAll("[id]")){const i=A.id+t;e.set(A.id,i),A.id=i}if(e.size)for(const A of n.querySelectorAll("*"))for(const i of Array.from(A.attributes)){if(!i.value.includes("#"))continue;let r=i.value;for(const[s,a]of e)r=r.split(`url(#${s})`).join(`url(#${a})`),r===`#${s}`&&(r=`#${a}`);r!==i.value&&A.setAttribute(i.name,r)}}function Ch(n){let t=n;for(;t&&t.children.length===1&&t.firstElementChild.tagName==="DIV";){const e=getComputedStyle(t);if(!(e.backgroundImage==="none"&&/^(transparent|rgba\(.*,\s*0\))$/.test(e.backgroundColor)))break;t=t.firstElementChild}return t}function Ph(n){const t=n.querySelector("[data-f2-time]")||n.querySelector('[class*="time_text"]');if(!t)return;const e=n.querySelector('[class*="card_fill"]'),A=e?getComputedStyle(e):null;t.textContent="",Object.assign(t.style,{display:"block",flex:"0 0 auto",width:"2.0625rem",height:A&&parseFloat(A.height)?A.height:"6px",borderRadius:A?A.borderRadius:"3px",backgroundColor:A?A.backgroundColor:"#ececf1"})}function Es(n){return n.querySelector("[data-f2-button]")||n.querySelector('[class*="btn"]')}function Dh(n,t){const e=Array.from(n.querySelectorAll("*")).reverse().find(A=>A.children.length===0&&A.textContent.trim());(e||n).textContent=t}function Lh(n,t){n.textContent="",t.split(`
`).forEach((e,A)=>{A&&n.appendChild(n.ownerDocument.createElement("br")),n.appendChild(n.ownerDocument.createTextNode(e))})}class Ih{constructor(t){this.section=t;const e=t.ownerDocument,A=t.querySelector("[data-f2-card]"),i=Ch(t.querySelector("[data-f2-panel]"));if(this.ok=!!(i&&A),!this.ok){console.warn("[f2] needs [data-f2-panel] and [data-f2-card] inside [data-f2]");return}wh(e);const r=Math.max(11,Math.round(fn(t,"data-f2-count",xe.count))),s=Math.round(fn(t,"data-f2-shift",xe.shift));this.opts={count:r,shift:s,disrupted:xe.disrupted,focus:xe.disrupted+s,hold:fn(t,"data-f2-hold",xe.hold),steps:qe(t,"data-f2-scroll","scrub")==="steps",endHold:fn(t,"data-f2-end-hold",xe.endHold),textGap:fn(t,"data-f2-text-gap",xe.textGap),logos:this._logos(t),avatars:["a","b"].map(d=>this._avatarSource(t,d))};const a=i.getBoundingClientRect(),o=A.getBoundingClientRect();this.ratio=a.height/Math.max(1,a.width),this.cardW=o.width||220,this.cardH=o.height||270,this.cardY=a.height?(o.top+o.height/2-a.top)/a.height:.6,Es(A)||console.warn("[f2] no [data-f2-button] in the card - the glow and hover are skipped");const l=e.createElement("div");for(l.className="f2-pin";t.firstChild;)l.appendChild(t.firstChild);t.appendChild(l),getComputedStyle(t).position==="static"&&(t.style.position="relative"),this.pin=l,this.header=Array.from(l.children).filter(d=>!d.contains(i));const c=i.cloneNode(!1);c.removeAttribute("data-f2-panel"),c.setAttribute("aria-hidden","true"),c.style.visibility="hidden",c.style.height=`${a.height}px`,i.parentNode.insertBefore(c,i),this.slot=c,Object.assign(i.style,{position:"absolute",margin:"0",zIndex:"3",overflow:"hidden",boxSizing:"border-box",maxWidth:"none",maxHeight:"none"}),this.panel=i;const u=i.querySelector("[data-f2-bg]")||Array.from(i.querySelectorAll("img")).find(d=>!A.contains(d));if(u){const d=u.cloneNode(!1);d.removeAttribute("data-f2-bg"),d.removeAttribute("class"),d.removeAttribute("style"),d.className="f2-bg",d.loading="eager",d.alt="",u.style.visibility="hidden",i.prepend(d)}this.titleA=t.querySelector('[data-f2-title="a"]'),this.titleB=t.querySelector('[data-f2-title="b"]'),!this.titleB&&this.titleA&&(this.titleB=this._makeTitleB()),this.titleB&&this.titleB.classList.add("f2-title-b"),this.track=e.createElement("div"),this.track.className="f2-track",i.appendChild(this.track),A.style.display="none",this.cards=[];for(let d=0;d<r;d++)this.cards.push(this._makeCard(A,d));this.play=0,this.last=0,this.rendered=!1,this.reduced=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches,this._frame=d=>this.frame(d),this._onResize=()=>this.measure(),this.measure()}_logos(t){const e=t.hasAttribute("data-f2-logos")?qe(t,"data-f2-logos","").split(",").map(A=>A.trim()).filter(Boolean):xe.logos.slice();for(const A of t.querySelectorAll("[data-f2-logo]")){const i=Math.round(parseFloat(A.getAttribute("data-f2-logo"))),r=bh(A);if(!(!r||!(i>=1))){for(;e.length<i;)e.push("");e[i-1]=r}}return e}_avatarSource(t,e){const A=t.querySelector(`[data-f2-avatar="${e}"]`),i=A&&(A.tagName==="IMG"?A:A.querySelector("img"));return i?(i.remove(),i.removeAttribute("data-f2-avatar"),i.removeAttribute("srcset"),i.removeAttribute("sizes"),i.style.display="",i.loading="eager",i):qe(t,`data-f2-avatar-${e}`,e==="a"?xe.avatarA:xe.avatarB)}_makeTitleB(){const t=this.titleA,e=t.cloneNode(!0);e.setAttribute("data-f2-title","b");const A=e.querySelector("p,h1,h2,h3,h4,h5,h6")||e;Lh(A,qe(this.section,"data-f2-title-b",xe.titleB));const i=A.cloneNode(!1);return A.classList.add("f2-title-b-head"),i.classList.add("f2-title-b-sub"),i.textContent=qe(this.section,"data-f2-title-b-sub",xe.titleBSub),A.after(i),t.after(e),e}_makeCard(t,e){const A=t.ownerDocument,{disrupted:i,focus:r,logos:s,avatars:a}=this.opts,o=t.cloneNode(!0);o.style.display="",o.removeAttribute("data-f2-card"),o.classList.add("f2-card"),Rh(o);const l={i:e,el:o,kids:Array.from(o.children),button:Es(o)};if(s.length&&s[e%s.length]){const c=o.querySelector("img");c&&(c.removeAttribute("srcset"),c.loading="eager",c.src=s[e%s.length])}if(e===i){const c=A.createElement("div");if(c.className="f2-badge f2-badge-rebooked",c.textContent=qe(this.section,"data-f2-rebooked-label",xe.rebookedLabel),o.appendChild(c),l.button){l.button.classList.add("f2-soft"),Dh(l.button,qe(this.section,"data-f2-soft-button",xe.softButton));const u=A.createElement("span");u.className="f2-ring",l.button.appendChild(u),l.ring=u}}if(e===i+1){const c=A.createElement("div");c.className="f2-badge f2-badge-disrupted",c.textContent=qe(this.section,"data-f2-disrupted-label",xe.disruptedLabel),o.appendChild(c),l.hint=c}if(e===r){const c=A.createElement("div");c.className="f2-badge f2-badge-confirmed",c.textContent=qe(this.section,"data-f2-confirmed-label",xe.confirmedLabel),o.appendChild(c),l.confirmed=c;const u=A.createElement("div");u.className="f2-pill";const d=(_,p)=>{const h=A.createElement("span");h.className=`f2-avatar f2-avatar-${p}`;let w=_;return typeof _=="string"&&(w=_?A.createElement("img"):null,w&&(w.src=_)),w&&(w.alt="",h.appendChild(w)),h},f=A.createElement("span");f.className="f2-wave";for(let _=0;_<ys.length;_++)f.appendChild(A.createElement("i"));const m=A.createElement("span");m.className="f2-close",m.innerHTML=Eh,u.append(d(a[0],"a"),f,d(a[1],"b"),m),o.appendChild(u),Object.assign(l,{pill:u,wave:f,bars:Array.from(f.children)})}return this.track.appendChild(o),e!==i&&e!==r&&Ph(o),l.button&&getComputedStyle(l.button).position==="static"&&(l.button.style.position="relative"),l.bg=Ms(getComputedStyle(o).backgroundColor),l.btnBg=l.button?Ms(getComputedStyle(l.button).backgroundColor,[18,18,22]):null,l}measure(){const t=this.pin,e=t.clientWidth,A=document.documentElement.clientHeight||innerHeight;this.slot.style.height=`${this.slot.offsetWidth*this.ratio}px`;const i=t.getBoundingClientRect(),r=this.slot.getBoundingClientRect(),s=Math.max(0,Math.round(r.bottom-i.top+xh-A));t.style.top=`${-s}px`,t.style.height=`${A+s}px`;const a=parseFloat(getComputedStyle(this.slot).borderTopLeftRadius)||22,o=e<=Mh?e-24:Math.min(r.width,e-24),l=this.cardW;this.geo={w:l,h:this.cardH,gap:Math.max(14,l*.09),offset:s,small:{x:(e-o)/2,y:r.top-i.top,w:o,h:r.height,r:a},full:{x:12,y:s+12,w:e-24,h:A-24,r:Math.max(a,28)},hold:this.opts.hold/100*A};const c=this.opts.steps?0:this.opts.endHold/100*A;this.section.style.height=`${A+s+hn*this.geo.hold+c}px`,this.rendered=!1}start(){addEventListener("resize",this._onResize),addEventListener("load",this._onResize,{once:!0}),requestAnimationFrame(this._frame)}frame(t){requestAnimationFrame(this._frame);const e=this.last?Math.min(.05,(t-this.last)/1e3):0;this.last=t;const A=this.section.getBoundingClientRect(),i=A.top+this.geo.offset,r=this.opts.steps?Wi[ph(i,this.geo.hold)]:mh(i,hn*this.geo.hold,Wi[hn]),s=this.reduced?r:this.opts.steps?_h(this.play,r,e):gh(this.play,r,e),a=s!==this.play;this.play=s,!(!(A.bottom>-50&&A.top<innerHeight+50)&&!a&&this.rendered)&&(this.render(this.play,t),this.rendered=!0)}render(t,e){const A=vh(t,un,Wi),{w:i,h:r,gap:s}=this.geo,{disrupted:a,focus:o,shift:l}=this.opts,c=i+s,u=he(A[1],.05,.6),d=this.geo.small,f=this.geo.full,m=ie(d.w,f.w,u),_=ie(d.h,f.h,u);Object.assign(this.panel.style,{left:`${ie(d.x,f.x,u)}px`,top:`${ie(d.y,f.y,u)}px`,width:`${m}px`,height:`${_}px`,borderRadius:`${ie(d.r,f.r,u)}px`});const p=he(A[1],0,.45);for(const nt of this.header)nt.style.opacity=String(1-p),nt.style.transform=`translateY(${-40*p}px)`;const h=he(A[4],.18,.5),w=Math.min(Math.max(64,i*.46)*(dn.w/dn.h),m-40),E=w/(dn.w/dn.h),S=ie(r,E,h),D=he(A[4],0,.3),T=he(A[4],.45,.8),C=this.titleA,N=this.titleB,M=C?C.offsetHeight:0,x=N?N.offsetHeight:M,P=ie(M,x,he(A[4],.2,.6)),z=this.opts.textGap,G=Math.max(24,(_-(M+z+r))/2),X=C?C.offsetTop:0,Y=ie(X,G,u);if(C&&(C.style.opacity=String(1-D),C.style.transform=`translateY(${Y-X-12*D}px)`),N&&C){const nt=Math.min(m-48,Math.max(C.offsetWidth,480));Object.assign(N.style,{left:`${(m-nt)/2}px`,top:`${Y}px`,width:`${nt}px`,opacity:String(T),transform:`translateY(${12*(1-T)}px)`})}this.track.style.left=`${m/2}px`,this.track.style.top=`${ie(_*this.cardY,G+P+z+S/2,u)}px`;const W=he(A[2],0,1),Q=he(A[3],0,.3),H=he(A[3],.25,.85,ki),it=he(A[4],0,.3),ct=he(A[0],0,1,ki);for(const nt of this.cards){const Pt=nt.el.style,Vt=nt.i-a;let Yt=0,Ot=0,q=0,j=1,ht=0,Et=5;Vt===0?(ht=1,Et=20):Vt===1&&(Yt=16,Ot=-10,q=6,ht=.5,Et=19);const gt=Math.abs(Vt),Bt=he(A[1],.3+.045*gt,.85+.03*gt);Yt=ie(Yt,Vt*c,Bt),Ot=ie(Ot,0,Bt),q=ie(q,0,Bt),ht=ie(ht,1,he(A[1],.3+.045*gt,.6+.045*gt)),Bt>.5&&Vt!==0&&(Et=10),nt.hint&&(nt.hint.style.opacity=String(1-Bt)),Yt-=l*c*W;const oe=nt.i-o;oe!==0&&(Yt+=Math.sign(oe)*c*.2*H*(1-it));let b=i,Qt=r,Dt=null,bt=1,pt=0;if(oe===0){A[2]>0&&(Et=30),j=1+.28*H*(1-it),q+=-4*H*(1-it),bt=1-he(A[4],0,.22);const ut=he(A[4],.46,.72);if(b=ie(ie(i,i*.9,h),w,ut),Qt=ie(r,E,h),Dt=h>0?ie(16,E/2,h):null,pt=ut>.999?1:0,nt.button&&nt.btnBg){const[$t,y,g]=nt.btnBg;nt.button.style.backgroundColor=`rgb(${ie($t,110,Q)}, ${ie(y,110,Q)}, ${ie(g,118,Q)})`}nt.confirmed&&(nt.confirmed.style.opacity=String(he(A[3],.45,.9)*bt));const Lt=E/dn.h*10;Object.assign(nt.pill.style,{fontSize:`${Lt}px`,width:`${w}px`,height:`${E}px`,transform:"translate(-50%, -50%)",opacity:String(pt)}),Pt.overflow=h>0?"hidden":"",Array.from(nt.pill.children).forEach(($t,y)=>{const g=he(A[4],.72+.05*y,.85+.05*y,ki);$t.style.opacity=String(g),$t.style.transform=`scale(${ie(.6,1,g)})`});const re=he(A[4],.8,1);nt.bars.forEach(($t,y)=>{const g=ys[y]/10,F=.55+.45*Math.abs(Math.sin(e/260+y*.7)*Math.cos(e/610+y*.33)),V=Math.min(5.672,g*ie(1,F*1.35,re));$t.style.height=`${Math.max(1.001,ie(1.001,V,re))}em`})}else{const ut=he(A[4],.05+.035*Math.abs(oe),.45+.035*Math.abs(oe));ht*=1-ut,Ot+=40*ut}if(Vt===0){const ut=he(A[1],.7,1),[Lt,re,$t]=nt.bg;nt.el.style.backgroundColor=`rgba(${Lt}, ${re}, ${$t}, ${ie(1,.6,ut)})`,nt.el.style.boxShadow=ut>0?yh:"",nt.ring&&(nt.ring.style.opacity=String(.45*ct*(1-he(A[1],.4,.8))))}Pt.width=`${b}px`,Pt.height=`${Qt}px`,Pt.borderRadius=Dt===null?"":`${Dt}px`,Pt.transform=`translate(${Yt-b/2}px, ${Ot-Qt/2}px) rotate(${q}deg) scale(${j})`,Pt.opacity=String(ht),Pt.zIndex=String(Et),Pt.visibility=ht<.002?"hidden":"visible";const ee=String(bt);for(const ut of nt.kids)ut.style.opacity=ee}}}function Uh(n=document){const t=[];for(const e of n.querySelectorAll("[data-f2]")){if(e.dataset.f2Mounted)continue;e.dataset.f2Mounted="1";const A=new Ih(e);A.ok&&(A.start(),t.push(A))}return t.length&&typeof window<"u"&&(window.__f2=t),t}const Fh=2.3,bs=20.3,ws=[{selector:".hero1_profile_wrap",layoutOnly:!0,lockHeight:!0},{selector:".hero1_profile_route_wrap",lat:37.7749,lng:-122.4194,offsetY:-31,mobileOffsetY:24,mobileAbove:".hero1_profile_wrap",mobileGap:"2rem",reparent:!0,in:4.25,out:9.3,dur:.9,outDur:.32,growOut:.86,anim:"grow"},{selector:".hero1_profile_hotel_wrap",lat:40.7128,lng:-74.006,offsetY:-31,mobileOffsetY:24,mobileAbove:".hero1_profile_wrap",mobileGap:"2rem",reparent:!0,in:12.65,out:19,dur:.9,outDur:.32,growOut:.86,anim:"grow",optional:!0}],Ts={template:".hero1_profile_choice_wrap",profile:".hero1_profile_item",wrap:".hero1_profile_wrap",name:".hero1_profile_name",check:".hero1_profile_choice_check",text:".hero1_profile_choice_text",search:".hero1_profile_search_wrap",width:450,minHeight:49,mobileFontSize:14,checkGap:8,dur:.6,peek:12,space:8,lift:30,typeBy:"char",typeSpeed:28,drawDur:.5,cards:[{at:.2,kind:"prompt",from:".hero1_profile_choice_text_wrap",hideOnMobile:".hero1_profile_choice_emoji"},{at:6.3,kind:"pref",text:"No early mornings"},{at:7.8,kind:"pref",text:"Premium economy"},{at:11,kind:"prompt",from:".hero1_profile_choice_hotel",text:"Stay at Marriott near Javits Center"},{at:14.5,kind:"pref",text:"Marriott Bonvoy membership",icon:".hero1_profile_choice_hotel .hero1_profile_choice_emoji"},{at:16,kind:"pref",text:"Walking distance to Javits Center"},{at:17.5,kind:"pref",text:"Mid-range price"}],outAt:bs},Nh={in:"data-in",noWrap:"data-no-wrap",out:"data-out",dur:"data-dur",collapse:"data-collapse",outDur:"data-out-dur",growOut:"data-grow-out",anim:"data-anim",typeSpeed:"data-type-speed",typeSkip:"data-type-skip",typeBy:"data-type-by",display:"data-display",lockWidth:"data-lock-width",lockHeight:"data-lock-height",lat:"data-lat",lng:"data-lng",offsetX:"data-offset-x",offsetY:"data-offset-y",mobileOffsetY:"data-mobile-offset-y",mobileAbove:"data-mobile-above",mobileGap:"data-mobile-gap",reparent:"data-reparent"};function Bh(n){const t=new Set;for(const e of n)for(const A of e.selector.split(".").filter(Boolean))t.add(A);return t}function Oh(n,t,e){const{cloneFrom:A,appendTo:i,insertAfter:r,text:s,style:a}=n.create,o=i?t.querySelector(i):null,l=r?t.querySelector(r):null;if(!o&&!l)return null;const c=A?t.querySelector(A):null,u=c?c.cloneNode(!1):(t.ownerDocument||document).createElement("div");u.removeAttribute("data-globe-cue"),u.removeAttribute("data-globe-pin");for(const d of["data-in","data-out","data-dur","data-anim"])u.removeAttribute(d);if(e)for(const d of Array.from(u.classList||[]))e.has(d)&&u.classList.remove(d);for(const d of n.selector.split(".").filter(Boolean))u.classList.add(d);return s!==void 0&&(u.textContent=s),a&&Object.assign(u.style,a),u.style.display="none",l&&l.parentNode?l.parentNode.insertBefore(u,l.nextSibling):o.appendChild(u),u}function zh(n=ws,t=document){const e=[],A=[],i=[],r=Bh(n);for(const s of n){let a=t.querySelectorAll(s.selector);if(!a.length&&s.create){const l=Oh(s,t,r);l&&(a=[l],i.push(s.selector))}if(!a.length){s.optional||A.push(s.selector);continue}let o=0;for(const l of a){const c=s.stagger?o*s.stagger:0;if(o++,!s.layoutOnly){const u=s.lat!==void 0?"data-globe-pin":"data-globe-cue";!l.hasAttribute("data-globe-cue")&&!l.hasAttribute("data-globe-pin")&&l.setAttribute(u,"")}s.style&&Object.assign(l.style,s.style);for(const[u,d]of Object.entries(Nh)){if(s[u]===void 0||l.hasAttribute(d))continue;const f=p=>Math.round((p+c)*1e3)/1e3,m=s[u],_=u==="in"||u==="out"?Array.isArray(m)?m.map(f).join(","):f(m):m;l.setAttribute(d,String(_))}e.push(s.selector)}}return A.length&&console.warn("[globe] sequence selectors matched nothing: "+A.join(", ")+" - a class was probably renamed in Webflow"),{applied:e,missing:A,created:i}}const Rs={linear:n=>n,outCubic:n=>1-Math.pow(1-n,3),inOutCubic:n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,outBack:n=>1+(1.70158+1)*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2)},Hh=[{track:"originPin",at:.15,dur:.75,from:0,to:1,ease:"outBack"},{track:"arcDraw",at:.65,dur:1.5,from:0,to:1,ease:"inOutCubic"},{track:"destPin",at:2.05,dur:.75,from:0,to:1,ease:"outBack"},{track:"dropHead",at:2.6,dur:1.8,from:0,to:1,ease:"inOutCubic"},{track:"originPill",at:1.4,dur:.55,from:1,to:0,ease:"inOutCubic"},{track:"originPill",at:7.2,dur:.45,from:0,to:1,ease:"outBack"},{track:"destPill",at:9.8,dur:.55,from:1,to:0,ease:"inOutCubic"},{track:"destPill",at:14.4,dur:.45,from:0,to:1,ease:"outBack"}],Gh=[{track:"originPin",at:0,dur:.6,from:1,to:0,ease:"inOutCubic"},{track:"destPin",at:0,dur:.6,from:1,to:0,ease:"inOutCubic"},{track:"routeOpacity",at:0,dur:.6,from:1,to:0,ease:"inOutCubic"}];class kh{constructor({route:t,originPin:e,destPin:A,beats:i=Hh,offset:r=0,loop:s=!1,loopDelay:a=2.5,outroAt:o=null}){this.route=t,this.originPin=e,this.destPin=A,this.offset=r,this.beats=r?i.map(l=>({...l,at:l.at+r})):i,o!==null&&(this.beats=this.beats.concat(Gh.map(l=>({...l,at:l.at+o})))),this.restAt=o,this.loop=s,this.loopDelay=a,this.time=0,this.playing=!1,this.duration=this.beats.reduce((l,c)=>Math.max(l,c.at+c.dur),0),this.beats=this.beats.slice().sort((l,c)=>l.at-c.at),this._initial={};for(const l of this.beats)l.track in this._initial||(this._initial[l.track]=l.from);this.values={originPin:0,arcDraw:0,dropHead:0,destPin:0,originPill:1,destPill:1,routeOpacity:1},Object.assign(this.values,this._initial),this._apply()}play(){return this.playing=!0,this}pause(){return this.playing=!1,this}restart(){return this.time=0,this.playing=!0,this}seek(t){return this.time=t,this._sample(),this._apply(),this}complete(){return this.seek(this.restAt===null?this.duration:this.restAt)}advance(t){if(!this.playing)return this;this.time+=t;const e=this.duration+(this.loop?this.loopDelay:0);return this.time>e&&(this.loop?this.time=0:this.time=this.duration),this._sample(),this._apply(),this}_sample(){for(const t of Object.keys(this._initial))this.values[t]=this._initial[t];for(const t of this.beats){if(this.time<t.at)continue;const e=(this.time-t.at)/t.dur,A=Math.min(1,Math.max(0,e)),i=Rs[t.ease]||Rs.linear;this.values[t.track]=t.from+(t.to-t.from)*i(A)}}_apply(){const t=this.values;this.route.setProgress(t.arcDraw),this.route.setHead(t.dropHead),this.route.setOpacity&&this.route.setOpacity(t.routeOpacity),this.originPin&&this.originPin.setAmount(t.originPin).setPill(t.originPill),this.destPin&&this.destPin.setAmount(t.destPin).setPill(t.destPill)}}function Vh(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const Wh="2026-09-25 09:43:38",Cs="#globe-root";function Ps(){Uh(document);const n=document.querySelector(Cs);if(!n){console.warn(`[globe] no ${Cs} on the page`);return}if(n.dataset.globeMounted)return;n.dataset.globeMounted="1";const t=Wu(n),e=Vu(n),A=new ku(n,t),i=e[0],r=e[1];let s=null;if(i&&r){const o=A.addRoute(i,r),l=Ku(A),c=new fs(l,i),u=new fs(l,r);s=new kh({route:o,originPin:c,destPin:u,offset:t.globeStart||Fh,loop:n.getAttribute("data-globe-loop")!=="false",loopDelay:.5,outroAt:bs}),zh(ws,document);const d=new dh({...Ts,mobileBelow:t.mobileBelow},document),f=new oh(A,document),m=Math.max(f.maxTime,d.maxTime);m>s.duration&&(s.duration=m),A.onFrame((_,p)=>{s.advance(p.deltaSeconds),c.update(p),u.update(p),f.update(s.time,p),d.update(s.time)}),window.__globeOverlays=f,window.__globeStack=d,Vh()?s.complete():Xh(document.querySelector(Ts.wrap)||n,s)}A.start(),(new URLSearchParams(location.search).has("debug")||n.hasAttribute("data-globe-debug"))&&qu(A),window.__globe={stage:A,layout:t,places:e,flow:s},window.__globeReport=()=>{const o=A.globeCam,l=n.getBoundingClientRect(),c=A.box.getBoundingClientRect(),u=[];let d=n.parentElement;for(;d&&d!==document.documentElement;){const m=getComputedStyle(d);(m.overflowX!=="visible"||m.overflowY!=="visible")&&u.push((d.getAttribute("class")||d.tagName)+" ("+Math.round(d.getBoundingClientRect().width)+"px)"),d=d.parentElement}const f={build:Wh,viewport:document.documentElement.clientWidth,attributesSeen:Array.from(n.attributes).filter(m=>m.name.startsWith("data-")).map(m=>m.name+(m.value?'="'+m.value+'"':"")),sizedBy:t.fitRoute>0?"fit-route (fixed)":t.hasRefWidth?"ref-width (fixed)":"container width (SHRINKS)",radiusPx:Math.round(o.radiusPx),globeDiameter:Math.round(o.radiusPx*2),containerWidth:Math.round(l.width),canvasBoxWidth:Math.round(c.width),canvasEscapedTo:A.box.parentElement===n?"not moved":A.box.parentElement.getAttribute("class")||A.box.parentElement.tagName,clippingAncestors:u.length?u:"none",apexClearance:t.apexClearance,refWidth:t.hasRefWidth?t.refWidth:"NOT SET",radiusScale:t.radiusScale,mobileScale:t.mobileScale,mobileBelow:t.mobileBelow,mobileActive:document.documentElement.clientWidth<t.mobileBelow,anchoredCards:(window.__globeOverlays?window.__globeOverlays.items:[]).filter(m=>m.anchored).map(m=>({cls:(m.el.getAttribute("class")||"").split(" ")[0],lat:m.lat,lng:m.lng,offsetY:m.offsetY,inSlot:m.host!==m.el,slotWidth:m.host!==m.el?m.host.style.width:"n/a",slotHeight:m.host!==m.el?m.host.style.height:"n/a",cardWidth:m.el.offsetWidth,cardHeight:m.el.offsetHeight,authoredPosition:m.el.dataset.globeAuthoredPosition||"static",sizeMismatch:m.host!==m.el&&(Math.abs(m.el.offsetWidth-parseFloat(m.host.style.width||0))>2||Math.abs(m.el.offsetHeight-parseFloat(m.host.style.height||0))>2)}))};return console.log("%c[globe report]","font-weight:bold",f),f}}function Xh(n,t){if(typeof IntersectionObserver!="function"){t.play();return}new IntersectionObserver(([e])=>{e.intersectionRatio>=.9?t.play():e.isIntersecting||t.pause()},{threshold:[0,.9]}).observe(n)}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",Ps,{once:!0}):Ps()})();
