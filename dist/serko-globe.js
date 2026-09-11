(function(){"use strict";/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Pe="srgb",_A="srgb-linear",rn="linear",qt="srgb",wi="300 es";class vA{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const A=this._listeners;A[t]===void 0&&(A[t]=[]),A[t].indexOf(e)===-1&&A[t].push(e)}hasEventListener(t,e){const A=this._listeners;return A===void 0?!1:A[t]!==void 0&&A[t].indexOf(e)!==-1}removeEventListener(t,e){const A=this._listeners;if(A===void 0)return;const i=A[t];if(i!==void 0){const r=i.indexOf(e);r!==-1&&i.splice(r,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const A=e[t.type];if(A!==void 0){t.target=this;const i=A.slice(0);for(let r=0,s=i.length;r<s;r++)i[r].call(this,t);t.target=null}}}const pe=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],zn=Math.PI/180,Hn=180/Math.PI;function HA(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,A=Math.random()*4294967295|0;return(pe[n&255]+pe[n>>8&255]+pe[n>>16&255]+pe[n>>24&255]+"-"+pe[t&255]+pe[t>>8&255]+"-"+pe[t>>16&15|64]+pe[t>>24&255]+"-"+pe[e&63|128]+pe[e>>8&255]+"-"+pe[e>>16&255]+pe[e>>24&255]+pe[A&255]+pe[A>>8&255]+pe[A>>16&255]+pe[A>>24&255]).toLowerCase()}function Ot(n,t,e){return Math.max(t,Math.min(e,n))}function as(n,t){return(n%t+t)%t}function Gn(n,t,e){return(1-e)*n+e*t}function GA(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Me(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Xt{constructor(t=0,e=0){Xt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,A=this.y,i=t.elements;return this.x=i[0]*e+i[3]*A+i[6],this.y=i[1]*e+i[4]*A+i[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this}clampLength(t,e){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Ot(A,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const A=this.dot(t)/e;return Math.acos(Ot(A,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,A=this.y-t.y;return e*e+A*A}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,A){return this.x=t.x+(e.x-t.x)*A,this.y=t.y+(e.y-t.y)*A,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const A=Math.cos(e),i=Math.sin(e),r=this.x-t.x,s=this.y-t.y;return this.x=r*A-s*i+t.x,this.y=r*i+s*A+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class VA{constructor(t=0,e=0,A=0,i=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=A,this._w=i}static slerpFlat(t,e,A,i,r,s,a){let l=A[i+0],o=A[i+1],h=A[i+2],c=A[i+3];const d=r[s+0],p=r[s+1],m=r[s+2],_=r[s+3];if(a===0){t[e+0]=l,t[e+1]=o,t[e+2]=h,t[e+3]=c;return}if(a===1){t[e+0]=d,t[e+1]=p,t[e+2]=m,t[e+3]=_;return}if(c!==_||l!==d||o!==p||h!==m){let f=1-a;const u=l*d+o*p+h*m+c*_,w=u>=0?1:-1,T=1-u*u;if(T>Number.EPSILON){const P=Math.sqrt(T),b=Math.atan2(P,u*w);f=Math.sin(f*b)/P,a=Math.sin(a*b)/P}const S=a*w;if(l=l*f+d*S,o=o*f+p*S,h=h*f+m*S,c=c*f+_*S,f===1-a){const P=1/Math.sqrt(l*l+o*o+h*h+c*c);l*=P,o*=P,h*=P,c*=P}}t[e]=l,t[e+1]=o,t[e+2]=h,t[e+3]=c}static multiplyQuaternionsFlat(t,e,A,i,r,s){const a=A[i],l=A[i+1],o=A[i+2],h=A[i+3],c=r[s],d=r[s+1],p=r[s+2],m=r[s+3];return t[e]=a*m+h*c+l*p-o*d,t[e+1]=l*m+h*d+o*c-a*p,t[e+2]=o*m+h*p+a*d-l*c,t[e+3]=h*m-a*c-l*d-o*p,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,A,i){return this._x=t,this._y=e,this._z=A,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const A=t._x,i=t._y,r=t._z,s=t._order,a=Math.cos,l=Math.sin,o=a(A/2),h=a(i/2),c=a(r/2),d=l(A/2),p=l(i/2),m=l(r/2);switch(s){case"XYZ":this._x=d*h*c+o*p*m,this._y=o*p*c-d*h*m,this._z=o*h*m+d*p*c,this._w=o*h*c-d*p*m;break;case"YXZ":this._x=d*h*c+o*p*m,this._y=o*p*c-d*h*m,this._z=o*h*m-d*p*c,this._w=o*h*c+d*p*m;break;case"ZXY":this._x=d*h*c-o*p*m,this._y=o*p*c+d*h*m,this._z=o*h*m+d*p*c,this._w=o*h*c-d*p*m;break;case"ZYX":this._x=d*h*c-o*p*m,this._y=o*p*c+d*h*m,this._z=o*h*m-d*p*c,this._w=o*h*c+d*p*m;break;case"YZX":this._x=d*h*c+o*p*m,this._y=o*p*c+d*h*m,this._z=o*h*m-d*p*c,this._w=o*h*c-d*p*m;break;case"XZY":this._x=d*h*c-o*p*m,this._y=o*p*c-d*h*m,this._z=o*h*m+d*p*c,this._w=o*h*c+d*p*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+s)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const A=e/2,i=Math.sin(A);return this._x=t.x*i,this._y=t.y*i,this._z=t.z*i,this._w=Math.cos(A),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,A=e[0],i=e[4],r=e[8],s=e[1],a=e[5],l=e[9],o=e[2],h=e[6],c=e[10],d=A+a+c;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-o)*p,this._z=(s-i)*p}else if(A>a&&A>c){const p=2*Math.sqrt(1+A-a-c);this._w=(h-l)/p,this._x=.25*p,this._y=(i+s)/p,this._z=(r+o)/p}else if(a>c){const p=2*Math.sqrt(1+a-A-c);this._w=(r-o)/p,this._x=(i+s)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+c-A-a);this._w=(s-i)/p,this._x=(r+o)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let A=t.dot(e)+1;return A<1e-8?(A=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=A):(this._x=0,this._y=-t.z,this._z=t.y,this._w=A)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=A),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Ot(this.dot(t),-1,1)))}rotateTowards(t,e){const A=this.angleTo(t);if(A===0)return this;const i=Math.min(1,e/A);return this.slerp(t,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const A=t._x,i=t._y,r=t._z,s=t._w,a=e._x,l=e._y,o=e._z,h=e._w;return this._x=A*h+s*a+i*o-r*l,this._y=i*h+s*l+r*a-A*o,this._z=r*h+s*o+A*l-i*a,this._w=s*h-A*a-i*l-r*o,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const A=this._x,i=this._y,r=this._z,s=this._w;let a=s*t._w+A*t._x+i*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=s,this._x=A,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-e;return this._w=p*s+e*this._w,this._x=p*A+e*this._x,this._y=p*i+e*this._y,this._z=p*r+e*this._z,this.normalize(),this}const o=Math.sqrt(l),h=Math.atan2(o,a),c=Math.sin((1-e)*h)/o,d=Math.sin(e*h)/o;return this._w=s*c+this._w*d,this._x=A*c+this._x*d,this._y=i*c+this._y*d,this._z=r*c+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,A){return this.copy(t).slerp(e,A)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),A=Math.random(),i=Math.sqrt(1-A),r=Math.sqrt(A);return this.set(i*Math.sin(t),i*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,A=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=A}set(t,e,A){return A===void 0&&(A=this.z),this.x=t,this.y=e,this.z=A,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(bi.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(bi.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,A=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[3]*A+r[6]*i,this.y=r[1]*e+r[4]*A+r[7]*i,this.z=r[2]*e+r[5]*A+r[8]*i,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,A=this.y,i=this.z,r=t.elements,s=1/(r[3]*e+r[7]*A+r[11]*i+r[15]);return this.x=(r[0]*e+r[4]*A+r[8]*i+r[12])*s,this.y=(r[1]*e+r[5]*A+r[9]*i+r[13])*s,this.z=(r[2]*e+r[6]*A+r[10]*i+r[14])*s,this}applyQuaternion(t){const e=this.x,A=this.y,i=this.z,r=t.x,s=t.y,a=t.z,l=t.w,o=2*(s*i-a*A),h=2*(a*e-r*i),c=2*(r*A-s*e);return this.x=e+l*o+s*c-a*h,this.y=A+l*h+a*o-r*c,this.z=i+l*c+r*h-s*o,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,A=this.y,i=this.z,r=t.elements;return this.x=r[0]*e+r[4]*A+r[8]*i,this.y=r[1]*e+r[5]*A+r[9]*i,this.z=r[2]*e+r[6]*A+r[10]*i,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this}clampLength(t,e){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Ot(A,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,A){return this.x=t.x+(e.x-t.x)*A,this.y=t.y+(e.y-t.y)*A,this.z=t.z+(e.z-t.z)*A,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const A=t.x,i=t.y,r=t.z,s=e.x,a=e.y,l=e.z;return this.x=i*l-r*a,this.y=r*s-A*l,this.z=A*a-i*s,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const A=t.dot(this)/e;return this.copy(t).multiplyScalar(A)}projectOnPlane(t){return Vn.copy(this).projectOnVector(t),this.sub(Vn)}reflect(t){return this.sub(Vn.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const A=this.dot(t)/e;return Math.acos(Ot(A,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,A=this.y-t.y,i=this.z-t.z;return e*e+A*A+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,A){const i=Math.sin(e)*t;return this.x=i*Math.sin(A),this.y=Math.cos(e)*t,this.z=i*Math.cos(A),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,A){return this.x=t*Math.sin(e),this.y=A,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),A=this.setFromMatrixColumn(t,1).length(),i=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=A,this.z=i,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,A=Math.sqrt(1-e*e);return this.x=A*Math.cos(t),this.y=e,this.z=A*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Vn=new U,bi=new VA;class Lt{constructor(t,e,A,i,r,s,a,l,o){Lt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,A,i,r,s,a,l,o)}set(t,e,A,i,r,s,a,l,o){const h=this.elements;return h[0]=t,h[1]=i,h[2]=a,h[3]=e,h[4]=r,h[5]=l,h[6]=A,h[7]=s,h[8]=o,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,A=t.elements;return e[0]=A[0],e[1]=A[1],e[2]=A[2],e[3]=A[3],e[4]=A[4],e[5]=A[5],e[6]=A[6],e[7]=A[7],e[8]=A[8],this}extractBasis(t,e,A){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),A.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const A=t.elements,i=e.elements,r=this.elements,s=A[0],a=A[3],l=A[6],o=A[1],h=A[4],c=A[7],d=A[2],p=A[5],m=A[8],_=i[0],f=i[3],u=i[6],w=i[1],T=i[4],S=i[7],P=i[2],b=i[5],C=i[8];return r[0]=s*_+a*w+l*P,r[3]=s*f+a*T+l*b,r[6]=s*u+a*S+l*C,r[1]=o*_+h*w+c*P,r[4]=o*f+h*T+c*b,r[7]=o*u+h*S+c*C,r[2]=d*_+p*w+m*P,r[5]=d*f+p*T+m*b,r[8]=d*u+p*S+m*C,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],A=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],o=t[7],h=t[8];return e*s*h-e*a*o-A*r*h+A*a*l+i*r*o-i*s*l}invert(){const t=this.elements,e=t[0],A=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],o=t[7],h=t[8],c=h*s-a*o,d=a*l-h*r,p=o*r-s*l,m=e*c+A*d+i*p;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/m;return t[0]=c*_,t[1]=(i*o-h*A)*_,t[2]=(a*A-i*s)*_,t[3]=d*_,t[4]=(h*e-i*l)*_,t[5]=(i*r-a*e)*_,t[6]=p*_,t[7]=(A*l-o*e)*_,t[8]=(s*e-A*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,A,i,r,s,a){const l=Math.cos(r),o=Math.sin(r);return this.set(A*l,A*o,-A*(l*s+o*a)+s+t,-i*o,i*l,-i*(-o*s+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(kn.makeScale(t,e)),this}rotate(t){return this.premultiply(kn.makeRotation(-t)),this}translate(t,e){return this.premultiply(kn.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),A=Math.sin(t);return this.set(e,-A,0,A,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,A=t.elements;for(let i=0;i<9;i++)if(e[i]!==A[i])return!1;return!0}fromArray(t,e=0){for(let A=0;A<9;A++)this.elements[A]=t[A+e];return this}toArray(t=[],e=0){const A=this.elements;return t[e]=A[0],t[e+1]=A[1],t[e+2]=A[2],t[e+3]=A[3],t[e+4]=A[4],t[e+5]=A[5],t[e+6]=A[6],t[e+7]=A[7],t[e+8]=A[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const kn=new Lt;function Ri(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function sn(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function os(){const n=sn("canvas");return n.style.display="block",n}const Pi={};function kA(n){n in Pi||(Pi[n]=!0,console.warn(n))}function ls(n,t,e){return new Promise(function(A,i){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:i();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:A()}}setTimeout(r,e)})}const Di=new Lt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Ci=new Lt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function cs(){const n={enabled:!0,workingColorSpace:_A,spaces:{},convert:function(i,r,s){return this.enabled===!1||r===s||!r||!s||(this.spaces[r].transfer===qt&&(i.r=ke(i.r),i.g=ke(i.g),i.b=ke(i.b)),this.spaces[r].primaries!==this.spaces[s].primaries&&(i.applyMatrix3(this.spaces[r].toXYZ),i.applyMatrix3(this.spaces[s].fromXYZ)),this.spaces[s].transfer===qt&&(i.r=xA(i.r),i.g=xA(i.g),i.b=xA(i.b))),i},workingToColorSpace:function(i,r){return this.convert(i,this.workingColorSpace,r)},colorSpaceToWorking:function(i,r){return this.convert(i,r,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===""?rn:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,r=this.workingColorSpace){return i.fromArray(this.spaces[r].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,r,s){return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[s].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,r){return kA("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(i,r)},toWorkingColorSpace:function(i,r){return kA("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(i,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],A=[.3127,.329];return n.define({[_A]:{primaries:t,whitePoint:A,transfer:rn,toXYZ:Di,fromXYZ:Ci,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Pe},outputColorSpaceConfig:{drawingBufferColorSpace:Pe}},[Pe]:{primaries:t,whitePoint:A,transfer:qt,toXYZ:Di,fromXYZ:Ci,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Pe}}}),n}const Gt=cs();function ke(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function xA(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let MA;class us{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let A;if(t instanceof HTMLCanvasElement)A=t;else{MA===void 0&&(MA=sn("canvas")),MA.width=t.width,MA.height=t.height;const i=MA.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),A=MA}return A.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=sn("canvas");e.width=t.width,e.height=t.height;const A=e.getContext("2d");A.drawImage(t,0,0,t.width,t.height);const i=A.getImageData(0,0,t.width,t.height),r=i.data;for(let s=0;s<r.length;s++)r[s]=ke(r[s]/255)*255;return A.putImageData(i,0,0),e}else if(t.data){const e=t.data.slice(0);for(let A=0;A<e.length;A++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[A]=Math.floor(ke(e[A]/255)*255):e[A]=ke(e[A]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let hs=0;class Wn{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:hs++}),this.uuid=HA(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const A={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let s=0,a=i.length;s<a;s++)i[s].isDataTexture?r.push(Xn(i[s].image)):r.push(Xn(i[s]))}else r=Xn(i);A.url=r}return e||(t.images[this.uuid]=A),A}}function Xn(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?us.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ds=0;const qn=new U;class Se extends vA{constructor(t=Se.DEFAULT_IMAGE,e=Se.DEFAULT_MAPPING,A=1001,i=1001,r=1006,s=1008,a=1023,l=1009,o=Se.DEFAULT_ANISOTROPY,h=""){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ds++}),this.uuid=HA(),this.name="",this.source=new Wn(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=A,this.wrapT=i,this.magFilter=r,this.minFilter=s,this.anisotropy=o,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Xt(0,0),this.repeat=new Xt(1,1),this.center=new Xt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Lt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(qn).x}get height(){return this.source.getSize(qn).y}get depth(){return this.source.getSize(qn).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const A=t[e];if(A===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}i&&A&&i.isVector2&&A.isVector2||i&&A&&i.isVector3&&A.isVector3||i&&A&&i.isMatrix3&&A.isMatrix3?i.copy(A):this[e]=A}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const A={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(A.userData=this.userData),e||(t.textures[this.uuid]=A),A}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==300)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case 1e3:t.x=t.x-Math.floor(t.x);break;case 1001:t.x=t.x<0?0:1;break;case 1002:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case 1e3:t.y=t.y-Math.floor(t.y);break;case 1001:t.y=t.y<0?0:1;break;case 1002:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Se.DEFAULT_IMAGE=null,Se.DEFAULT_MAPPING=300,Se.DEFAULT_ANISOTROPY=1;class ie{constructor(t=0,e=0,A=0,i=1){ie.prototype.isVector4=!0,this.x=t,this.y=e,this.z=A,this.w=i}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,A,i){return this.x=t,this.y=e,this.z=A,this.w=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,A=this.y,i=this.z,r=this.w,s=t.elements;return this.x=s[0]*e+s[4]*A+s[8]*i+s[12]*r,this.y=s[1]*e+s[5]*A+s[9]*i+s[13]*r,this.z=s[2]*e+s[6]*A+s[10]*i+s[14]*r,this.w=s[3]*e+s[7]*A+s[11]*i+s[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,A,i,r;const l=t.elements,o=l[0],h=l[4],c=l[8],d=l[1],p=l[5],m=l[9],_=l[2],f=l[6],u=l[10];if(Math.abs(h-d)<.01&&Math.abs(c-_)<.01&&Math.abs(m-f)<.01){if(Math.abs(h+d)<.1&&Math.abs(c+_)<.1&&Math.abs(m+f)<.1&&Math.abs(o+p+u-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const T=(o+1)/2,S=(p+1)/2,P=(u+1)/2,b=(h+d)/4,C=(c+_)/4,N=(m+f)/4;return T>S&&T>P?T<.01?(A=0,i=.707106781,r=.707106781):(A=Math.sqrt(T),i=b/A,r=C/A):S>P?S<.01?(A=.707106781,i=0,r=.707106781):(i=Math.sqrt(S),A=b/i,r=N/i):P<.01?(A=.707106781,i=.707106781,r=0):(r=Math.sqrt(P),A=C/r,i=N/r),this.set(A,i,r,e),this}let w=Math.sqrt((f-m)*(f-m)+(c-_)*(c-_)+(d-h)*(d-h));return Math.abs(w)<.001&&(w=1),this.x=(f-m)/w,this.y=(c-_)/w,this.z=(d-h)/w,this.w=Math.acos((o+p+u-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Ot(this.x,t.x,e.x),this.y=Ot(this.y,t.y,e.y),this.z=Ot(this.z,t.z,e.z),this.w=Ot(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Ot(this.x,t,e),this.y=Ot(this.y,t,e),this.z=Ot(this.z,t,e),this.w=Ot(this.w,t,e),this}clampLength(t,e){const A=this.length();return this.divideScalar(A||1).multiplyScalar(Ot(A,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,A){return this.x=t.x+(e.x-t.x)*A,this.y=t.y+(e.y-t.y)*A,this.z=t.z+(e.z-t.z)*A,this.w=t.w+(e.w-t.w)*A,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class fs extends vA{constructor(t=1,e=1,A={}){super(),A=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:1006,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},A),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=A.depth,this.scissor=new ie(0,0,t,e),this.scissorTest=!1,this.viewport=new ie(0,0,t,e);const i={width:t,height:e,depth:A.depth},r=new Se(i);this.textures=[];const s=A.count;for(let a=0;a<s;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(A),this.depthBuffer=A.depthBuffer,this.stencilBuffer=A.stencilBuffer,this.resolveDepthBuffer=A.resolveDepthBuffer,this.resolveStencilBuffer=A.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=A.depthTexture,this.samples=A.samples,this.multiview=A.multiview}_setTextureOptions(t={}){const e={minFilter:1006,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let A=0;A<this.textures.length;A++)this.textures[A].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,A=1){if(this.width!==t||this.height!==e||this.depth!==A){this.width=t,this.height=e,this.depth=A;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=t,this.textures[i].image.height=e,this.textures[i].image.depth=A,this.textures[i].isArrayTexture=this.textures[i].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,A=t.textures.length;e<A;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const i=Object.assign({},t.textures[e].image);this.textures[e].source=new Wn(i)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class sA extends fs{constructor(t=1,e=1,A={}){super(t,e,A),this.isWebGLRenderTarget=!0}}class Li extends Se{constructor(t=null,e=1,A=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:A,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class ps extends Se{constructor(t=null,e=1,A=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:A,depth:i},this.magFilter=1003,this.minFilter=1003,this.wrapR=1001,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class WA{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,A=t.length;e<A;e+=3)this.expandByPoint(Ue.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,A=t.count;e<A;e++)this.expandByPoint(Ue.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,A=t.length;e<A;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const A=Ue.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(A),this.max.copy(t).add(A),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const A=t.geometry;if(A!==void 0){const r=A.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let s=0,a=r.count;s<a;s++)t.isMesh===!0?t.getVertexPosition(s,Ue):Ue.fromBufferAttribute(r,s),Ue.applyMatrix4(t.matrixWorld),this.expandByPoint(Ue);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),an.copy(t.boundingBox)):(A.boundingBox===null&&A.computeBoundingBox(),an.copy(A.boundingBox)),an.applyMatrix4(t.matrixWorld),this.union(an)}const i=t.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,Ue),Ue.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,A;return t.normal.x>0?(e=t.normal.x*this.min.x,A=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,A=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,A+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,A+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,A+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,A+=t.normal.z*this.min.z),e<=-t.constant&&A>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(XA),on.subVectors(this.max,XA),SA.subVectors(t.a,XA),EA.subVectors(t.b,XA),yA.subVectors(t.c,XA),Je.subVectors(EA,SA),tA.subVectors(yA,EA),aA.subVectors(SA,yA);let e=[0,-Je.z,Je.y,0,-tA.z,tA.y,0,-aA.z,aA.y,Je.z,0,-Je.x,tA.z,0,-tA.x,aA.z,0,-aA.x,-Je.y,Je.x,0,-tA.y,tA.x,0,-aA.y,aA.x,0];return!Yn(e,SA,EA,yA,on)||(e=[1,0,0,0,1,0,0,0,1],!Yn(e,SA,EA,yA,on))?!1:(ln.crossVectors(Je,tA),e=[ln.x,ln.y,ln.z],Yn(e,SA,EA,yA,on))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,Ue).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(Ue).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(We[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),We[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),We[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),We[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),We[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),We[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),We[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),We[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(We),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const We=[new U,new U,new U,new U,new U,new U,new U,new U],Ue=new U,an=new WA,SA=new U,EA=new U,yA=new U,Je=new U,tA=new U,aA=new U,XA=new U,on=new U,ln=new U,oA=new U;function Yn(n,t,e,A,i){for(let r=0,s=n.length-3;r<=s;r+=3){oA.fromArray(n,r);const a=i.x*Math.abs(oA.x)+i.y*Math.abs(oA.y)+i.z*Math.abs(oA.z),l=t.dot(oA),o=e.dot(oA),h=A.dot(oA);if(Math.max(-Math.max(l,o,h),Math.min(l,o,h))>a)return!1}return!0}const ms=new WA,qA=new U,$n=new U;class YA{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const A=this.center;e!==void 0?A.copy(e):ms.setFromPoints(t).getCenter(A);let i=0;for(let r=0,s=t.length;r<s;r++)i=Math.max(i,A.distanceToSquared(t[r]));return this.radius=Math.sqrt(i),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const A=this.center.distanceToSquared(t);return e.copy(t),A>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;qA.subVectors(t,this.center);const e=qA.lengthSq();if(e>this.radius*this.radius){const A=Math.sqrt(e),i=(A-this.radius)*.5;this.center.addScaledVector(qA,i/A),this.radius+=i}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):($n.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(qA.copy(t.center).add($n)),this.expandByPoint(qA.copy(t.center).sub($n))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Xe=new U,jn=new U,cn=new U,eA=new U,Kn=new U,un=new U,Zn=new U;class Qn{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Xe)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const A=e.dot(this.direction);return A<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,A)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Xe.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Xe.copy(this.origin).addScaledVector(this.direction,e),Xe.distanceToSquared(t))}distanceSqToSegment(t,e,A,i){jn.copy(t).add(e).multiplyScalar(.5),cn.copy(e).sub(t).normalize(),eA.copy(this.origin).sub(jn);const r=t.distanceTo(e)*.5,s=-this.direction.dot(cn),a=eA.dot(this.direction),l=-eA.dot(cn),o=eA.lengthSq(),h=Math.abs(1-s*s);let c,d,p,m;if(h>0)if(c=s*l-a,d=s*a-l,m=r*h,c>=0)if(d>=-m)if(d<=m){const _=1/h;c*=_,d*=_,p=c*(c+s*d+2*a)+d*(s*c+d+2*l)+o}else d=r,c=Math.max(0,-(s*d+a)),p=-c*c+d*(d+2*l)+o;else d=-r,c=Math.max(0,-(s*d+a)),p=-c*c+d*(d+2*l)+o;else d<=-m?(c=Math.max(0,-(-s*r+a)),d=c>0?-r:Math.min(Math.max(-r,-l),r),p=-c*c+d*(d+2*l)+o):d<=m?(c=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+o):(c=Math.max(0,-(s*r+a)),d=c>0?r:Math.min(Math.max(-r,-l),r),p=-c*c+d*(d+2*l)+o);else d=s>0?-r:r,c=Math.max(0,-(s*d+a)),p=-c*c+d*(d+2*l)+o;return A&&A.copy(this.origin).addScaledVector(this.direction,c),i&&i.copy(jn).addScaledVector(cn,d),p}intersectSphere(t,e){Xe.subVectors(t.center,this.origin);const A=Xe.dot(this.direction),i=Xe.dot(Xe)-A*A,r=t.radius*t.radius;if(i>r)return null;const s=Math.sqrt(r-i),a=A-s,l=A+s;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const A=-(this.origin.dot(t.normal)+t.constant)/e;return A>=0?A:null}intersectPlane(t,e){const A=this.distanceToPlane(t);return A===null?null:this.at(A,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let A,i,r,s,a,l;const o=1/this.direction.x,h=1/this.direction.y,c=1/this.direction.z,d=this.origin;return o>=0?(A=(t.min.x-d.x)*o,i=(t.max.x-d.x)*o):(A=(t.max.x-d.x)*o,i=(t.min.x-d.x)*o),h>=0?(r=(t.min.y-d.y)*h,s=(t.max.y-d.y)*h):(r=(t.max.y-d.y)*h,s=(t.min.y-d.y)*h),A>s||r>i||((r>A||isNaN(A))&&(A=r),(s<i||isNaN(i))&&(i=s),c>=0?(a=(t.min.z-d.z)*c,l=(t.max.z-d.z)*c):(a=(t.max.z-d.z)*c,l=(t.min.z-d.z)*c),A>l||a>i)||((a>A||A!==A)&&(A=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(A>=0?A:i,e)}intersectsBox(t){return this.intersectBox(t,Xe)!==null}intersectTriangle(t,e,A,i,r){Kn.subVectors(e,t),un.subVectors(A,t),Zn.crossVectors(Kn,un);let s=this.direction.dot(Zn),a;if(s>0){if(i)return null;a=1}else if(s<0)a=-1,s=-s;else return null;eA.subVectors(this.origin,t);const l=a*this.direction.dot(un.crossVectors(eA,un));if(l<0)return null;const o=a*this.direction.dot(Kn.cross(eA));if(o<0||l+o>s)return null;const h=-a*eA.dot(Zn);return h<0?null:this.at(h/s,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class re{constructor(t,e,A,i,r,s,a,l,o,h,c,d,p,m,_,f){re.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,A,i,r,s,a,l,o,h,c,d,p,m,_,f)}set(t,e,A,i,r,s,a,l,o,h,c,d,p,m,_,f){const u=this.elements;return u[0]=t,u[4]=e,u[8]=A,u[12]=i,u[1]=r,u[5]=s,u[9]=a,u[13]=l,u[2]=o,u[6]=h,u[10]=c,u[14]=d,u[3]=p,u[7]=m,u[11]=_,u[15]=f,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new re().fromArray(this.elements)}copy(t){const e=this.elements,A=t.elements;return e[0]=A[0],e[1]=A[1],e[2]=A[2],e[3]=A[3],e[4]=A[4],e[5]=A[5],e[6]=A[6],e[7]=A[7],e[8]=A[8],e[9]=A[9],e[10]=A[10],e[11]=A[11],e[12]=A[12],e[13]=A[13],e[14]=A[14],e[15]=A[15],this}copyPosition(t){const e=this.elements,A=t.elements;return e[12]=A[12],e[13]=A[13],e[14]=A[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,A){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),A.setFromMatrixColumn(this,2),this}makeBasis(t,e,A){return this.set(t.x,e.x,A.x,0,t.y,e.y,A.y,0,t.z,e.z,A.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,A=t.elements,i=1/TA.setFromMatrixColumn(t,0).length(),r=1/TA.setFromMatrixColumn(t,1).length(),s=1/TA.setFromMatrixColumn(t,2).length();return e[0]=A[0]*i,e[1]=A[1]*i,e[2]=A[2]*i,e[3]=0,e[4]=A[4]*r,e[5]=A[5]*r,e[6]=A[6]*r,e[7]=0,e[8]=A[8]*s,e[9]=A[9]*s,e[10]=A[10]*s,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,A=t.x,i=t.y,r=t.z,s=Math.cos(A),a=Math.sin(A),l=Math.cos(i),o=Math.sin(i),h=Math.cos(r),c=Math.sin(r);if(t.order==="XYZ"){const d=s*h,p=s*c,m=a*h,_=a*c;e[0]=l*h,e[4]=-l*c,e[8]=o,e[1]=p+m*o,e[5]=d-_*o,e[9]=-a*l,e[2]=_-d*o,e[6]=m+p*o,e[10]=s*l}else if(t.order==="YXZ"){const d=l*h,p=l*c,m=o*h,_=o*c;e[0]=d+_*a,e[4]=m*a-p,e[8]=s*o,e[1]=s*c,e[5]=s*h,e[9]=-a,e[2]=p*a-m,e[6]=_+d*a,e[10]=s*l}else if(t.order==="ZXY"){const d=l*h,p=l*c,m=o*h,_=o*c;e[0]=d-_*a,e[4]=-s*c,e[8]=m+p*a,e[1]=p+m*a,e[5]=s*h,e[9]=_-d*a,e[2]=-s*o,e[6]=a,e[10]=s*l}else if(t.order==="ZYX"){const d=s*h,p=s*c,m=a*h,_=a*c;e[0]=l*h,e[4]=m*o-p,e[8]=d*o+_,e[1]=l*c,e[5]=_*o+d,e[9]=p*o-m,e[2]=-o,e[6]=a*l,e[10]=s*l}else if(t.order==="YZX"){const d=s*l,p=s*o,m=a*l,_=a*o;e[0]=l*h,e[4]=_-d*c,e[8]=m*c+p,e[1]=c,e[5]=s*h,e[9]=-a*h,e[2]=-o*h,e[6]=p*c+m,e[10]=d-_*c}else if(t.order==="XZY"){const d=s*l,p=s*o,m=a*l,_=a*o;e[0]=l*h,e[4]=-c,e[8]=o*h,e[1]=d*c+_,e[5]=s*h,e[9]=p*c-m,e[2]=m*c-p,e[6]=a*h,e[10]=_*c+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(gs,t,_s)}lookAt(t,e,A){const i=this.elements;return ye.subVectors(t,e),ye.lengthSq()===0&&(ye.z=1),ye.normalize(),AA.crossVectors(A,ye),AA.lengthSq()===0&&(Math.abs(A.z)===1?ye.x+=1e-4:ye.z+=1e-4,ye.normalize(),AA.crossVectors(A,ye)),AA.normalize(),hn.crossVectors(ye,AA),i[0]=AA.x,i[4]=hn.x,i[8]=ye.x,i[1]=AA.y,i[5]=hn.y,i[9]=ye.y,i[2]=AA.z,i[6]=hn.z,i[10]=ye.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const A=t.elements,i=e.elements,r=this.elements,s=A[0],a=A[4],l=A[8],o=A[12],h=A[1],c=A[5],d=A[9],p=A[13],m=A[2],_=A[6],f=A[10],u=A[14],w=A[3],T=A[7],S=A[11],P=A[15],b=i[0],C=i[4],N=i[8],M=i[12],x=i[1],D=i[5],z=i[9],V=i[13],X=i[2],$=i[6],W=i[10],et=i[14],H=i[3],rt=i[7],lt=i[11],St=i[15];return r[0]=s*b+a*x+l*X+o*H,r[4]=s*C+a*D+l*$+o*rt,r[8]=s*N+a*z+l*W+o*lt,r[12]=s*M+a*V+l*et+o*St,r[1]=h*b+c*x+d*X+p*H,r[5]=h*C+c*D+d*$+p*rt,r[9]=h*N+c*z+d*W+p*lt,r[13]=h*M+c*V+d*et+p*St,r[2]=m*b+_*x+f*X+u*H,r[6]=m*C+_*D+f*$+u*rt,r[10]=m*N+_*z+f*W+u*lt,r[14]=m*M+_*V+f*et+u*St,r[3]=w*b+T*x+S*X+P*H,r[7]=w*C+T*D+S*$+P*rt,r[11]=w*N+T*z+S*W+P*lt,r[15]=w*M+T*V+S*et+P*St,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],A=t[4],i=t[8],r=t[12],s=t[1],a=t[5],l=t[9],o=t[13],h=t[2],c=t[6],d=t[10],p=t[14],m=t[3],_=t[7],f=t[11],u=t[15];return m*(+r*l*c-i*o*c-r*a*d+A*o*d+i*a*p-A*l*p)+_*(+e*l*p-e*o*d+r*s*d-i*s*p+i*o*h-r*l*h)+f*(+e*o*c-e*a*p-r*s*c+A*s*p+r*a*h-A*o*h)+u*(-i*a*h-e*l*c+e*a*d+i*s*c-A*s*d+A*l*h)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,A){const i=this.elements;return t.isVector3?(i[12]=t.x,i[13]=t.y,i[14]=t.z):(i[12]=t,i[13]=e,i[14]=A),this}invert(){const t=this.elements,e=t[0],A=t[1],i=t[2],r=t[3],s=t[4],a=t[5],l=t[6],o=t[7],h=t[8],c=t[9],d=t[10],p=t[11],m=t[12],_=t[13],f=t[14],u=t[15],w=c*f*o-_*d*o+_*l*p-a*f*p-c*l*u+a*d*u,T=m*d*o-h*f*o-m*l*p+s*f*p+h*l*u-s*d*u,S=h*_*o-m*c*o+m*a*p-s*_*p-h*a*u+s*c*u,P=m*c*l-h*_*l-m*a*d+s*_*d+h*a*f-s*c*f,b=e*w+A*T+i*S+r*P;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/b;return t[0]=w*C,t[1]=(_*d*r-c*f*r-_*i*p+A*f*p+c*i*u-A*d*u)*C,t[2]=(a*f*r-_*l*r+_*i*o-A*f*o-a*i*u+A*l*u)*C,t[3]=(c*l*r-a*d*r-c*i*o+A*d*o+a*i*p-A*l*p)*C,t[4]=T*C,t[5]=(h*f*r-m*d*r+m*i*p-e*f*p-h*i*u+e*d*u)*C,t[6]=(m*l*r-s*f*r-m*i*o+e*f*o+s*i*u-e*l*u)*C,t[7]=(s*d*r-h*l*r+h*i*o-e*d*o-s*i*p+e*l*p)*C,t[8]=S*C,t[9]=(m*c*r-h*_*r-m*A*p+e*_*p+h*A*u-e*c*u)*C,t[10]=(s*_*r-m*a*r+m*A*o-e*_*o-s*A*u+e*a*u)*C,t[11]=(h*a*r-s*c*r-h*A*o+e*c*o+s*A*p-e*a*p)*C,t[12]=P*C,t[13]=(h*_*i-m*c*i+m*A*d-e*_*d-h*A*f+e*c*f)*C,t[14]=(m*a*i-s*_*i-m*A*l+e*_*l+s*A*f-e*a*f)*C,t[15]=(s*c*i-h*a*i+h*A*l-e*c*l-s*A*d+e*a*d)*C,this}scale(t){const e=this.elements,A=t.x,i=t.y,r=t.z;return e[0]*=A,e[4]*=i,e[8]*=r,e[1]*=A,e[5]*=i,e[9]*=r,e[2]*=A,e[6]*=i,e[10]*=r,e[3]*=A,e[7]*=i,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],A=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],i=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,A,i))}makeTranslation(t,e,A){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,A,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),A=Math.sin(t);return this.set(1,0,0,0,0,e,-A,0,0,A,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),A=Math.sin(t);return this.set(e,0,A,0,0,1,0,0,-A,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),A=Math.sin(t);return this.set(e,-A,0,0,A,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const A=Math.cos(e),i=Math.sin(e),r=1-A,s=t.x,a=t.y,l=t.z,o=r*s,h=r*a;return this.set(o*s+A,o*a-i*l,o*l+i*a,0,o*a+i*l,h*a+A,h*l-i*s,0,o*l-i*a,h*l+i*s,r*l*l+A,0,0,0,0,1),this}makeScale(t,e,A){return this.set(t,0,0,0,0,e,0,0,0,0,A,0,0,0,0,1),this}makeShear(t,e,A,i,r,s){return this.set(1,A,r,0,t,1,s,0,e,i,1,0,0,0,0,1),this}compose(t,e,A){const i=this.elements,r=e._x,s=e._y,a=e._z,l=e._w,o=r+r,h=s+s,c=a+a,d=r*o,p=r*h,m=r*c,_=s*h,f=s*c,u=a*c,w=l*o,T=l*h,S=l*c,P=A.x,b=A.y,C=A.z;return i[0]=(1-(_+u))*P,i[1]=(p+S)*P,i[2]=(m-T)*P,i[3]=0,i[4]=(p-S)*b,i[5]=(1-(d+u))*b,i[6]=(f+w)*b,i[7]=0,i[8]=(m+T)*C,i[9]=(f-w)*C,i[10]=(1-(d+_))*C,i[11]=0,i[12]=t.x,i[13]=t.y,i[14]=t.z,i[15]=1,this}decompose(t,e,A){const i=this.elements;let r=TA.set(i[0],i[1],i[2]).length();const s=TA.set(i[4],i[5],i[6]).length(),a=TA.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),t.x=i[12],t.y=i[13],t.z=i[14],Fe.copy(this);const o=1/r,h=1/s,c=1/a;return Fe.elements[0]*=o,Fe.elements[1]*=o,Fe.elements[2]*=o,Fe.elements[4]*=h,Fe.elements[5]*=h,Fe.elements[6]*=h,Fe.elements[8]*=c,Fe.elements[9]*=c,Fe.elements[10]*=c,e.setFromRotationMatrix(Fe),A.x=r,A.y=s,A.z=a,this}makePerspective(t,e,A,i,r,s,a=2e3,l=!1){const o=this.elements,h=2*r/(e-t),c=2*r/(A-i),d=(e+t)/(e-t),p=(A+i)/(A-i);let m,_;if(l)m=r/(s-r),_=s*r/(s-r);else if(a===2e3)m=-(s+r)/(s-r),_=-2*s*r/(s-r);else if(a===2001)m=-s/(s-r),_=-s*r/(s-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return o[0]=h,o[4]=0,o[8]=d,o[12]=0,o[1]=0,o[5]=c,o[9]=p,o[13]=0,o[2]=0,o[6]=0,o[10]=m,o[14]=_,o[3]=0,o[7]=0,o[11]=-1,o[15]=0,this}makeOrthographic(t,e,A,i,r,s,a=2e3,l=!1){const o=this.elements,h=2/(e-t),c=2/(A-i),d=-(e+t)/(e-t),p=-(A+i)/(A-i);let m,_;if(l)m=1/(s-r),_=s/(s-r);else if(a===2e3)m=-2/(s-r),_=-(s+r)/(s-r);else if(a===2001)m=-1/(s-r),_=-r/(s-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return o[0]=h,o[4]=0,o[8]=0,o[12]=d,o[1]=0,o[5]=c,o[9]=0,o[13]=p,o[2]=0,o[6]=0,o[10]=m,o[14]=_,o[3]=0,o[7]=0,o[11]=0,o[15]=1,this}equals(t){const e=this.elements,A=t.elements;for(let i=0;i<16;i++)if(e[i]!==A[i])return!1;return!0}fromArray(t,e=0){for(let A=0;A<16;A++)this.elements[A]=t[A+e];return this}toArray(t=[],e=0){const A=this.elements;return t[e]=A[0],t[e+1]=A[1],t[e+2]=A[2],t[e+3]=A[3],t[e+4]=A[4],t[e+5]=A[5],t[e+6]=A[6],t[e+7]=A[7],t[e+8]=A[8],t[e+9]=A[9],t[e+10]=A[10],t[e+11]=A[11],t[e+12]=A[12],t[e+13]=A[13],t[e+14]=A[14],t[e+15]=A[15],t}}const TA=new U,Fe=new re,gs=new U(0,0,0),_s=new U(1,1,1),AA=new U,hn=new U,ye=new U,Ii=new re,Ui=new VA;class qe{constructor(t=0,e=0,A=0,i=qe.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=A,this._order=i}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,A,i=this._order){return this._x=t,this._y=e,this._z=A,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,A=!0){const i=t.elements,r=i[0],s=i[4],a=i[8],l=i[1],o=i[5],h=i[9],c=i[2],d=i[6],p=i[10];switch(e){case"XYZ":this._y=Math.asin(Ot(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-s,r)):(this._x=Math.atan2(d,o),this._z=0);break;case"YXZ":this._x=Math.asin(-Ot(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,o)):(this._y=Math.atan2(-c,r),this._z=0);break;case"ZXY":this._x=Math.asin(Ot(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-c,p),this._z=Math.atan2(-s,o)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Ot(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-s,o));break;case"YZX":this._z=Math.asin(Ot(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,o),this._y=Math.atan2(-c,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Ot(s,-1,1)),Math.abs(s)<.9999999?(this._x=Math.atan2(d,o),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,A===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,A){return Ii.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Ii,e,A)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Ui.setFromEuler(this),this.setFromQuaternion(Ui,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}qe.DEFAULT_ORDER="XYZ";class Fi{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let vs=0;const Ni=new U,wA=new VA,Ye=new re,dn=new U,$A=new U,xs=new U,Ms=new VA,Bi=new U(1,0,0),Oi=new U(0,1,0),zi=new U(0,0,1),Hi={type:"added"},Ss={type:"removed"},bA={type:"childadded",child:null},Jn={type:"childremoved",child:null};class _e extends vA{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:vs++}),this.uuid=HA(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=_e.DEFAULT_UP.clone();const t=new U,e=new qe,A=new VA,i=new U(1,1,1);function r(){A.setFromEuler(e,!1)}function s(){e.setFromQuaternion(A,void 0,!1)}e._onChange(r),A._onChange(s),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:A},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new re},normalMatrix:{value:new Lt}}),this.matrix=new re,this.matrixWorld=new re,this.matrixAutoUpdate=_e.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Fi,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return wA.setFromAxisAngle(t,e),this.quaternion.multiply(wA),this}rotateOnWorldAxis(t,e){return wA.setFromAxisAngle(t,e),this.quaternion.premultiply(wA),this}rotateX(t){return this.rotateOnAxis(Bi,t)}rotateY(t){return this.rotateOnAxis(Oi,t)}rotateZ(t){return this.rotateOnAxis(zi,t)}translateOnAxis(t,e){return Ni.copy(t).applyQuaternion(this.quaternion),this.position.add(Ni.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Bi,t)}translateY(t){return this.translateOnAxis(Oi,t)}translateZ(t){return this.translateOnAxis(zi,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Ye.copy(this.matrixWorld).invert())}lookAt(t,e,A){t.isVector3?dn.copy(t):dn.set(t,e,A);const i=this.parent;this.updateWorldMatrix(!0,!1),$A.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ye.lookAt($A,dn,this.up):Ye.lookAt(dn,$A,this.up),this.quaternion.setFromRotationMatrix(Ye),i&&(Ye.extractRotation(i.matrixWorld),wA.setFromRotationMatrix(Ye),this.quaternion.premultiply(wA.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(Hi),bA.child=t,this.dispatchEvent(bA),bA.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let A=0;A<arguments.length;A++)this.remove(arguments[A]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(Ss),Jn.child=t,this.dispatchEvent(Jn),Jn.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Ye.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Ye.multiply(t.parent.matrixWorld)),t.applyMatrix4(Ye),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(Hi),bA.child=t,this.dispatchEvent(bA),bA.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let A=0,i=this.children.length;A<i;A++){const s=this.children[A].getObjectByProperty(t,e);if(s!==void 0)return s}}getObjectsByProperty(t,e,A=[]){this[t]===e&&A.push(this);const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].getObjectsByProperty(t,e,A);return A}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($A,t,xs),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose($A,Ms,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let A=0,i=e.length;A<i;A++)e[A].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let A=0,i=e.length;A<i;A++)e[A].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let A=0,i=e.length;A<i;A++)e[A].updateMatrixWorld(t)}updateWorldMatrix(t,e){const A=this.parent;if(t===!0&&A!==null&&A.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const i=this.children;for(let r=0,s=i.length;r<s;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",A={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},A.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(a=>({...a})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(t),i.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let o=0,h=l.length;o<h;o++){const c=l[o];r(t.shapes,c)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,o=this.material.length;l<o;l++)a.push(r(t.materials,this.material[l]));i.material=a}else i.material=r(t.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(t.animations,l))}}if(e){const a=s(t.geometries),l=s(t.materials),o=s(t.textures),h=s(t.images),c=s(t.shapes),d=s(t.skeletons),p=s(t.animations),m=s(t.nodes);a.length>0&&(A.geometries=a),l.length>0&&(A.materials=l),o.length>0&&(A.textures=o),h.length>0&&(A.images=h),c.length>0&&(A.shapes=c),d.length>0&&(A.skeletons=d),p.length>0&&(A.animations=p),m.length>0&&(A.nodes=m)}return A.object=i,A;function s(a){const l=[];for(const o in a){const h=a[o];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let A=0;A<t.children.length;A++){const i=t.children[A];this.add(i.clone())}return this}}_e.DEFAULT_UP=new U(0,1,0),_e.DEFAULT_MATRIX_AUTO_UPDATE=!0,_e.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Ne=new U,$e=new U,ti=new U,je=new U,RA=new U,PA=new U,Gi=new U,ei=new U,Ai=new U,ni=new U,ii=new ie,ri=new ie,si=new ie;class Be{constructor(t=new U,e=new U,A=new U){this.a=t,this.b=e,this.c=A}static getNormal(t,e,A,i){i.subVectors(A,e),Ne.subVectors(t,e),i.cross(Ne);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(t,e,A,i,r){Ne.subVectors(i,e),$e.subVectors(A,e),ti.subVectors(t,e);const s=Ne.dot(Ne),a=Ne.dot($e),l=Ne.dot(ti),o=$e.dot($e),h=$e.dot(ti),c=s*o-a*a;if(c===0)return r.set(0,0,0),null;const d=1/c,p=(o*l-a*h)*d,m=(s*h-a*l)*d;return r.set(1-p-m,m,p)}static containsPoint(t,e,A,i){return this.getBarycoord(t,e,A,i,je)===null?!1:je.x>=0&&je.y>=0&&je.x+je.y<=1}static getInterpolation(t,e,A,i,r,s,a,l){return this.getBarycoord(t,e,A,i,je)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,je.x),l.addScaledVector(s,je.y),l.addScaledVector(a,je.z),l)}static getInterpolatedAttribute(t,e,A,i,r,s){return ii.setScalar(0),ri.setScalar(0),si.setScalar(0),ii.fromBufferAttribute(t,e),ri.fromBufferAttribute(t,A),si.fromBufferAttribute(t,i),s.setScalar(0),s.addScaledVector(ii,r.x),s.addScaledVector(ri,r.y),s.addScaledVector(si,r.z),s}static isFrontFacing(t,e,A,i){return Ne.subVectors(A,e),$e.subVectors(t,e),Ne.cross($e).dot(i)<0}set(t,e,A){return this.a.copy(t),this.b.copy(e),this.c.copy(A),this}setFromPointsAndIndices(t,e,A,i){return this.a.copy(t[e]),this.b.copy(t[A]),this.c.copy(t[i]),this}setFromAttributeAndIndices(t,e,A,i){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,A),this.c.fromBufferAttribute(t,i),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return Ne.subVectors(this.c,this.b),$e.subVectors(this.a,this.b),Ne.cross($e).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return Be.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return Be.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,A,i,r){return Be.getInterpolation(t,this.a,this.b,this.c,e,A,i,r)}containsPoint(t){return Be.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return Be.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const A=this.a,i=this.b,r=this.c;let s,a;RA.subVectors(i,A),PA.subVectors(r,A),ei.subVectors(t,A);const l=RA.dot(ei),o=PA.dot(ei);if(l<=0&&o<=0)return e.copy(A);Ai.subVectors(t,i);const h=RA.dot(Ai),c=PA.dot(Ai);if(h>=0&&c<=h)return e.copy(i);const d=l*c-h*o;if(d<=0&&l>=0&&h<=0)return s=l/(l-h),e.copy(A).addScaledVector(RA,s);ni.subVectors(t,r);const p=RA.dot(ni),m=PA.dot(ni);if(m>=0&&p<=m)return e.copy(r);const _=p*o-l*m;if(_<=0&&o>=0&&m<=0)return a=o/(o-m),e.copy(A).addScaledVector(PA,a);const f=h*m-p*c;if(f<=0&&c-h>=0&&p-m>=0)return Gi.subVectors(r,i),a=(c-h)/(c-h+(p-m)),e.copy(i).addScaledVector(Gi,a);const u=1/(f+_+d);return s=_*u,a=d*u,e.copy(A).addScaledVector(RA,s).addScaledVector(PA,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Vi={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},nA={h:0,s:0,l:0},fn={h:0,s:0,l:0};function ai(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class zt{constructor(t,e,A){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,A)}set(t,e,A){if(e===void 0&&A===void 0){const i=t;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(t,e,A);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Pe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Gt.colorSpaceToWorking(this,e),this}setRGB(t,e,A,i=Gt.workingColorSpace){return this.r=t,this.g=e,this.b=A,Gt.colorSpaceToWorking(this,i),this}setHSL(t,e,A,i=Gt.workingColorSpace){if(t=as(t,1),e=Ot(e,0,1),A=Ot(A,0,1),e===0)this.r=this.g=this.b=A;else{const r=A<=.5?A*(1+e):A+e-A*e,s=2*A-r;this.r=ai(s,r,t+1/3),this.g=ai(s,r,t),this.b=ai(s,r,t-1/3)}return Gt.colorSpaceToWorking(this,i),this}setStyle(t,e=Pe){function A(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const s=i[1],a=i[2];switch(s){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return A(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=i[1],s=r.length;if(s===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(s===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Pe){const A=Vi[t.toLowerCase()];return A!==void 0?this.setHex(A,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=ke(t.r),this.g=ke(t.g),this.b=ke(t.b),this}copyLinearToSRGB(t){return this.r=xA(t.r),this.g=xA(t.g),this.b=xA(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Pe){return Gt.workingToColorSpace(me.copy(this),t),Math.round(Ot(me.r*255,0,255))*65536+Math.round(Ot(me.g*255,0,255))*256+Math.round(Ot(me.b*255,0,255))}getHexString(t=Pe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Gt.workingColorSpace){Gt.workingToColorSpace(me.copy(this),e);const A=me.r,i=me.g,r=me.b,s=Math.max(A,i,r),a=Math.min(A,i,r);let l,o;const h=(a+s)/2;if(a===s)l=0,o=0;else{const c=s-a;switch(o=h<=.5?c/(s+a):c/(2-s-a),s){case A:l=(i-r)/c+(i<r?6:0);break;case i:l=(r-A)/c+2;break;case r:l=(A-i)/c+4;break}l/=6}return t.h=l,t.s=o,t.l=h,t}getRGB(t,e=Gt.workingColorSpace){return Gt.workingToColorSpace(me.copy(this),e),t.r=me.r,t.g=me.g,t.b=me.b,t}getStyle(t=Pe){Gt.workingToColorSpace(me.copy(this),t);const e=me.r,A=me.g,i=me.b;return t!==Pe?`color(${t} ${e.toFixed(3)} ${A.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(A*255)},${Math.round(i*255)})`}offsetHSL(t,e,A){return this.getHSL(nA),this.setHSL(nA.h+t,nA.s+e,nA.l+A)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,A){return this.r=t.r+(e.r-t.r)*A,this.g=t.g+(e.g-t.g)*A,this.b=t.b+(e.b-t.b)*A,this}lerpHSL(t,e){this.getHSL(nA),t.getHSL(fn);const A=Gn(nA.h,fn.h,e),i=Gn(nA.s,fn.s,e),r=Gn(nA.l,fn.l,e);return this.setHSL(A,i,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,A=this.g,i=this.b,r=t.elements;return this.r=r[0]*e+r[3]*A+r[6]*i,this.g=r[1]*e+r[4]*A+r[7]*i,this.b=r[2]*e+r[5]*A+r[8]*i,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const me=new zt;zt.NAMES=Vi;let Es=0;class DA extends vA{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Es++}),this.uuid=HA(),this.name="",this.type="Material",this.blending=1,this.side=0,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=204,this.blendDst=205,this.blendEquation=100,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new zt(0,0,0),this.blendAlpha=0,this.depthFunc=3,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=519,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=7680,this.stencilZFail=7680,this.stencilZPass=7680,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const A=t[e];if(A===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const i=this[e];if(i===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(A):i&&i.isVector3&&A&&A.isVector3?i.copy(A):this[e]=A}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const A={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};A.uuid=this.uuid,A.type=this.type,this.name!==""&&(A.name=this.name),this.color&&this.color.isColor&&(A.color=this.color.getHex()),this.roughness!==void 0&&(A.roughness=this.roughness),this.metalness!==void 0&&(A.metalness=this.metalness),this.sheen!==void 0&&(A.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(A.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(A.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(A.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(A.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(A.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(A.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(A.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(A.shininess=this.shininess),this.clearcoat!==void 0&&(A.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(A.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(A.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(A.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(A.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,A.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(A.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(A.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(A.dispersion=this.dispersion),this.iridescence!==void 0&&(A.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(A.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(A.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(A.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(A.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(A.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(A.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(A.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(A.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(A.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(A.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(A.lightMap=this.lightMap.toJSON(t).uuid,A.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(A.aoMap=this.aoMap.toJSON(t).uuid,A.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(A.bumpMap=this.bumpMap.toJSON(t).uuid,A.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(A.normalMap=this.normalMap.toJSON(t).uuid,A.normalMapType=this.normalMapType,A.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(A.displacementMap=this.displacementMap.toJSON(t).uuid,A.displacementScale=this.displacementScale,A.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(A.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(A.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(A.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(A.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(A.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(A.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(A.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(A.combine=this.combine)),this.envMapRotation!==void 0&&(A.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(A.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(A.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(A.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(A.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(A.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(A.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(A.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(A.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(A.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(A.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(A.size=this.size),this.shadowSide!==null&&(A.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(A.sizeAttenuation=this.sizeAttenuation),this.blending!==1&&(A.blending=this.blending),this.side!==0&&(A.side=this.side),this.vertexColors===!0&&(A.vertexColors=!0),this.opacity<1&&(A.opacity=this.opacity),this.transparent===!0&&(A.transparent=!0),this.blendSrc!==204&&(A.blendSrc=this.blendSrc),this.blendDst!==205&&(A.blendDst=this.blendDst),this.blendEquation!==100&&(A.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(A.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(A.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(A.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(A.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(A.blendAlpha=this.blendAlpha),this.depthFunc!==3&&(A.depthFunc=this.depthFunc),this.depthTest===!1&&(A.depthTest=this.depthTest),this.depthWrite===!1&&(A.depthWrite=this.depthWrite),this.colorWrite===!1&&(A.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(A.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==519&&(A.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(A.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(A.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==7680&&(A.stencilFail=this.stencilFail),this.stencilZFail!==7680&&(A.stencilZFail=this.stencilZFail),this.stencilZPass!==7680&&(A.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(A.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(A.rotation=this.rotation),this.polygonOffset===!0&&(A.polygonOffset=!0),this.polygonOffsetFactor!==0&&(A.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(A.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(A.linewidth=this.linewidth),this.dashSize!==void 0&&(A.dashSize=this.dashSize),this.gapSize!==void 0&&(A.gapSize=this.gapSize),this.scale!==void 0&&(A.scale=this.scale),this.dithering===!0&&(A.dithering=!0),this.alphaTest>0&&(A.alphaTest=this.alphaTest),this.alphaHash===!0&&(A.alphaHash=!0),this.alphaToCoverage===!0&&(A.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(A.premultipliedAlpha=!0),this.forceSinglePass===!0&&(A.forceSinglePass=!0),this.wireframe===!0&&(A.wireframe=!0),this.wireframeLinewidth>1&&(A.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(A.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(A.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(A.flatShading=!0),this.visible===!1&&(A.visible=!1),this.toneMapped===!1&&(A.toneMapped=!1),this.fog===!1&&(A.fog=!1),Object.keys(this.userData).length>0&&(A.userData=this.userData);function i(r){const s=[];for(const a in r){const l=r[a];delete l.metadata,s.push(l)}return s}if(e){const r=i(t.textures),s=i(t.images);r.length>0&&(A.textures=r),s.length>0&&(A.images=s)}return A}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let A=null;if(e!==null){const i=e.length;A=new Array(i);for(let r=0;r!==i;++r)A[r]=e[r].clone()}return this.clippingPlanes=A,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class ki extends DA{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new qe,this.combine=0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const ae=new U,pn=new Xt;let ys=0;class oe{constructor(t,e,A=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:ys++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=A,this.usage=35044,this.updateRanges=[],this.gpuType=1015,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,A){t*=this.itemSize,A*=e.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[t+i]=e.array[A+i];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,A=this.count;e<A;e++)pn.fromBufferAttribute(this,e),pn.applyMatrix3(t),this.setXY(e,pn.x,pn.y);else if(this.itemSize===3)for(let e=0,A=this.count;e<A;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix3(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyMatrix4(t){for(let e=0,A=this.count;e<A;e++)ae.fromBufferAttribute(this,e),ae.applyMatrix4(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}applyNormalMatrix(t){for(let e=0,A=this.count;e<A;e++)ae.fromBufferAttribute(this,e),ae.applyNormalMatrix(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}transformDirection(t){for(let e=0,A=this.count;e<A;e++)ae.fromBufferAttribute(this,e),ae.transformDirection(t),this.setXYZ(e,ae.x,ae.y,ae.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let A=this.array[t*this.itemSize+e];return this.normalized&&(A=GA(A,this.array)),A}setComponent(t,e,A){return this.normalized&&(A=Me(A,this.array)),this.array[t*this.itemSize+e]=A,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=GA(e,this.array)),e}setX(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=GA(e,this.array)),e}setY(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=GA(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=GA(e,this.array)),e}setW(t,e){return this.normalized&&(e=Me(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,A){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),A=Me(A,this.array)),this.array[t+0]=e,this.array[t+1]=A,this}setXYZ(t,e,A,i){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),A=Me(A,this.array),i=Me(i,this.array)),this.array[t+0]=e,this.array[t+1]=A,this.array[t+2]=i,this}setXYZW(t,e,A,i,r){return t*=this.itemSize,this.normalized&&(e=Me(e,this.array),A=Me(A,this.array),i=Me(i,this.array),r=Me(r,this.array)),this.array[t+0]=e,this.array[t+1]=A,this.array[t+2]=i,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==35044&&(t.usage=this.usage),t}}class Wi extends oe{constructor(t,e,A){super(new Uint16Array(t),e,A)}}class Xi extends oe{constructor(t,e,A){super(new Uint32Array(t),e,A)}}class Ke extends oe{constructor(t,e,A){super(new Float32Array(t),e,A)}}let Ts=0;const De=new re,oi=new _e,CA=new U,Te=new WA,jA=new WA,ue=new U;class we extends vA{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ts++}),this.uuid=HA(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(Ri(t)?Xi:Wi)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,A=0){this.groups.push({start:t,count:e,materialIndex:A})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const A=this.attributes.normal;if(A!==void 0){const r=new Lt().getNormalMatrix(t);A.applyNormalMatrix(r),A.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(t),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return De.makeRotationFromQuaternion(t),this.applyMatrix4(De),this}rotateX(t){return De.makeRotationX(t),this.applyMatrix4(De),this}rotateY(t){return De.makeRotationY(t),this.applyMatrix4(De),this}rotateZ(t){return De.makeRotationZ(t),this.applyMatrix4(De),this}translate(t,e,A){return De.makeTranslation(t,e,A),this.applyMatrix4(De),this}scale(t,e,A){return De.makeScale(t,e,A),this.applyMatrix4(De),this}lookAt(t){return oi.lookAt(t),oi.updateMatrix(),this.applyMatrix4(oi.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(CA).negate(),this.translate(CA.x,CA.y,CA.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const A=[];for(let i=0,r=t.length;i<r;i++){const s=t[i];A.push(s.x,s.y,s.z||0)}this.setAttribute("position",new Ke(A,3))}else{const A=Math.min(t.length,e.count);for(let i=0;i<A;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new WA);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let A=0,i=e.length;A<i;A++){const r=e[A];Te.setFromBufferAttribute(r),this.morphTargetsRelative?(ue.addVectors(this.boundingBox.min,Te.min),this.boundingBox.expandByPoint(ue),ue.addVectors(this.boundingBox.max,Te.max),this.boundingBox.expandByPoint(ue)):(this.boundingBox.expandByPoint(Te.min),this.boundingBox.expandByPoint(Te.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new YA);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const A=this.boundingSphere.center;if(Te.setFromBufferAttribute(t),e)for(let r=0,s=e.length;r<s;r++){const a=e[r];jA.setFromBufferAttribute(a),this.morphTargetsRelative?(ue.addVectors(Te.min,jA.min),Te.expandByPoint(ue),ue.addVectors(Te.max,jA.max),Te.expandByPoint(ue)):(Te.expandByPoint(jA.min),Te.expandByPoint(jA.max))}Te.getCenter(A);let i=0;for(let r=0,s=t.count;r<s;r++)ue.fromBufferAttribute(t,r),i=Math.max(i,A.distanceToSquared(ue));if(e)for(let r=0,s=e.length;r<s;r++){const a=e[r],l=this.morphTargetsRelative;for(let o=0,h=a.count;o<h;o++)ue.fromBufferAttribute(a,o),l&&(CA.fromBufferAttribute(t,o),ue.add(CA)),i=Math.max(i,A.distanceToSquared(ue))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const A=e.position,i=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oe(new Float32Array(4*A.count),4));const s=this.getAttribute("tangent"),a=[],l=[];for(let N=0;N<A.count;N++)a[N]=new U,l[N]=new U;const o=new U,h=new U,c=new U,d=new Xt,p=new Xt,m=new Xt,_=new U,f=new U;function u(N,M,x){o.fromBufferAttribute(A,N),h.fromBufferAttribute(A,M),c.fromBufferAttribute(A,x),d.fromBufferAttribute(r,N),p.fromBufferAttribute(r,M),m.fromBufferAttribute(r,x),h.sub(o),c.sub(o),p.sub(d),m.sub(d);const D=1/(p.x*m.y-m.x*p.y);isFinite(D)&&(_.copy(h).multiplyScalar(m.y).addScaledVector(c,-p.y).multiplyScalar(D),f.copy(c).multiplyScalar(p.x).addScaledVector(h,-m.x).multiplyScalar(D),a[N].add(_),a[M].add(_),a[x].add(_),l[N].add(f),l[M].add(f),l[x].add(f))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let N=0,M=w.length;N<M;++N){const x=w[N],D=x.start,z=x.count;for(let V=D,X=D+z;V<X;V+=3)u(t.getX(V+0),t.getX(V+1),t.getX(V+2))}const T=new U,S=new U,P=new U,b=new U;function C(N){P.fromBufferAttribute(i,N),b.copy(P);const M=a[N];T.copy(M),T.sub(P.multiplyScalar(P.dot(M))).normalize(),S.crossVectors(b,M);const D=S.dot(l[N])<0?-1:1;s.setXYZW(N,T.x,T.y,T.z,D)}for(let N=0,M=w.length;N<M;++N){const x=w[N],D=x.start,z=x.count;for(let V=D,X=D+z;V<X;V+=3)C(t.getX(V+0)),C(t.getX(V+1)),C(t.getX(V+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let A=this.getAttribute("normal");if(A===void 0)A=new oe(new Float32Array(e.count*3),3),this.setAttribute("normal",A);else for(let d=0,p=A.count;d<p;d++)A.setXYZ(d,0,0,0);const i=new U,r=new U,s=new U,a=new U,l=new U,o=new U,h=new U,c=new U;if(t)for(let d=0,p=t.count;d<p;d+=3){const m=t.getX(d+0),_=t.getX(d+1),f=t.getX(d+2);i.fromBufferAttribute(e,m),r.fromBufferAttribute(e,_),s.fromBufferAttribute(e,f),h.subVectors(s,r),c.subVectors(i,r),h.cross(c),a.fromBufferAttribute(A,m),l.fromBufferAttribute(A,_),o.fromBufferAttribute(A,f),a.add(h),l.add(h),o.add(h),A.setXYZ(m,a.x,a.y,a.z),A.setXYZ(_,l.x,l.y,l.z),A.setXYZ(f,o.x,o.y,o.z)}else for(let d=0,p=e.count;d<p;d+=3)i.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),s.fromBufferAttribute(e,d+2),h.subVectors(s,r),c.subVectors(i,r),h.cross(c),A.setXYZ(d+0,h.x,h.y,h.z),A.setXYZ(d+1,h.x,h.y,h.z),A.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),A.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,A=t.count;e<A;e++)ue.fromBufferAttribute(t,e),ue.normalize(),t.setXYZ(e,ue.x,ue.y,ue.z)}toNonIndexed(){function t(a,l){const o=a.array,h=a.itemSize,c=a.normalized,d=new o.constructor(l.length*h);let p=0,m=0;for(let _=0,f=l.length;_<f;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let u=0;u<h;u++)d[m++]=o[p++]}return new oe(d,h,c)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new we,A=this.index.array,i=this.attributes;for(const a in i){const l=i[a],o=t(l,A);e.setAttribute(a,o)}const r=this.morphAttributes;for(const a in r){const l=[],o=r[a];for(let h=0,c=o.length;h<c;h++){const d=o[h],p=t(d,A);l.push(p)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const s=this.groups;for(let a=0,l=s.length;a<l;a++){const o=s[a];e.addGroup(o.start,o.count,o.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const o in l)l[o]!==void 0&&(t[o]=l[o]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const A=this.attributes;for(const l in A){const o=A[l];t.data.attributes[l]=o.toJSON(t.data)}const i={};let r=!1;for(const l in this.morphAttributes){const o=this.morphAttributes[l],h=[];for(let c=0,d=o.length;c<d;c++){const p=o[c];h.push(p.toJSON(t.data))}h.length>0&&(i[l]=h,r=!0)}r&&(t.data.morphAttributes=i,t.data.morphTargetsRelative=this.morphTargetsRelative);const s=this.groups;s.length>0&&(t.data.groups=JSON.parse(JSON.stringify(s)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const A=t.index;A!==null&&this.setIndex(A.clone());const i=t.attributes;for(const o in i){const h=i[o];this.setAttribute(o,h.clone(e))}const r=t.morphAttributes;for(const o in r){const h=[],c=r[o];for(let d=0,p=c.length;d<p;d++)h.push(c[d].clone(e));this.morphAttributes[o]=h}this.morphTargetsRelative=t.morphTargetsRelative;const s=t.groups;for(let o=0,h=s.length;o<h;o++){const c=s[o];this.addGroup(c.start,c.count,c.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const qi=new re,lA=new Qn,mn=new YA,Yi=new U,gn=new U,_n=new U,vn=new U,li=new U,xn=new U,$i=new U,Mn=new U;class Oe extends _e{constructor(t=new we,e=new ki){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,A=Object.keys(e);if(A.length>0){const i=e[A[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const A=this.geometry,i=A.attributes.position,r=A.morphAttributes.position,s=A.morphTargetsRelative;e.fromBufferAttribute(i,t);const a=this.morphTargetInfluences;if(r&&a){xn.set(0,0,0);for(let l=0,o=r.length;l<o;l++){const h=a[l],c=r[l];h!==0&&(li.fromBufferAttribute(c,t),s?xn.addScaledVector(li,h):xn.addScaledVector(li.sub(e),h))}e.add(xn)}return e}raycast(t,e){const A=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(A.boundingSphere===null&&A.computeBoundingSphere(),mn.copy(A.boundingSphere),mn.applyMatrix4(r),lA.copy(t.ray).recast(t.near),!(mn.containsPoint(lA.origin)===!1&&(lA.intersectSphere(mn,Yi)===null||lA.origin.distanceToSquared(Yi)>(t.far-t.near)**2))&&(qi.copy(r).invert(),lA.copy(t.ray).applyMatrix4(qi),!(A.boundingBox!==null&&lA.intersectsBox(A.boundingBox)===!1)&&this._computeIntersections(t,e,lA)))}_computeIntersections(t,e,A){let i;const r=this.geometry,s=this.material,a=r.index,l=r.attributes.position,o=r.attributes.uv,h=r.attributes.uv1,c=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(s))for(let m=0,_=d.length;m<_;m++){const f=d[m],u=s[f.materialIndex],w=Math.max(f.start,p.start),T=Math.min(a.count,Math.min(f.start+f.count,p.start+p.count));for(let S=w,P=T;S<P;S+=3){const b=a.getX(S),C=a.getX(S+1),N=a.getX(S+2);i=Sn(this,u,t,A,o,h,c,b,C,N),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const m=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let f=m,u=_;f<u;f+=3){const w=a.getX(f),T=a.getX(f+1),S=a.getX(f+2);i=Sn(this,s,t,A,o,h,c,w,T,S),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}else if(l!==void 0)if(Array.isArray(s))for(let m=0,_=d.length;m<_;m++){const f=d[m],u=s[f.materialIndex],w=Math.max(f.start,p.start),T=Math.min(l.count,Math.min(f.start+f.count,p.start+p.count));for(let S=w,P=T;S<P;S+=3){const b=S,C=S+1,N=S+2;i=Sn(this,u,t,A,o,h,c,b,C,N),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=f.materialIndex,e.push(i))}}else{const m=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let f=m,u=_;f<u;f+=3){const w=f,T=f+1,S=f+2;i=Sn(this,s,t,A,o,h,c,w,T,S),i&&(i.faceIndex=Math.floor(f/3),e.push(i))}}}}function ws(n,t,e,A,i,r,s,a){let l;if(t.side===1?l=A.intersectTriangle(s,r,i,!0,a):l=A.intersectTriangle(i,r,s,t.side===0,a),l===null)return null;Mn.copy(a),Mn.applyMatrix4(n.matrixWorld);const o=e.ray.origin.distanceTo(Mn);return o<e.near||o>e.far?null:{distance:o,point:Mn.clone(),object:n}}function Sn(n,t,e,A,i,r,s,a,l,o){n.getVertexPosition(a,gn),n.getVertexPosition(l,_n),n.getVertexPosition(o,vn);const h=ws(n,t,e,A,gn,_n,vn,$i);if(h){const c=new U;Be.getBarycoord($i,gn,_n,vn,c),i&&(h.uv=Be.getInterpolatedAttribute(i,a,l,o,c,new Xt)),r&&(h.uv1=Be.getInterpolatedAttribute(r,a,l,o,c,new Xt)),s&&(h.normal=Be.getInterpolatedAttribute(s,a,l,o,c,new U),h.normal.dot(A.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c:o,normal:new U,materialIndex:0};Be.getNormal(gn,_n,vn,d.normal),h.face=d,h.barycoord=c}return h}class KA extends we{constructor(t=1,e=1,A=1,i=1,r=1,s=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:A,widthSegments:i,heightSegments:r,depthSegments:s};const a=this;i=Math.floor(i),r=Math.floor(r),s=Math.floor(s);const l=[],o=[],h=[],c=[];let d=0,p=0;m("z","y","x",-1,-1,A,e,t,s,r,0),m("z","y","x",1,-1,A,e,-t,s,r,1),m("x","z","y",1,1,t,A,e,i,s,2),m("x","z","y",1,-1,t,A,-e,i,s,3),m("x","y","z",1,-1,t,e,A,i,r,4),m("x","y","z",-1,-1,t,e,-A,i,r,5),this.setIndex(l),this.setAttribute("position",new Ke(o,3)),this.setAttribute("normal",new Ke(h,3)),this.setAttribute("uv",new Ke(c,2));function m(_,f,u,w,T,S,P,b,C,N,M){const x=S/C,D=P/N,z=S/2,V=P/2,X=b/2,$=C+1,W=N+1;let et=0,H=0;const rt=new U;for(let lt=0;lt<W;lt++){const St=lt*D-V;for(let Nt=0;Nt<$;Nt++){const jt=Nt*x-z;rt[_]=jt*w,rt[f]=St*T,rt[u]=X,o.push(rt.x,rt.y,rt.z),rt[_]=0,rt[f]=0,rt[u]=b>0?1:-1,h.push(rt.x,rt.y,rt.z),c.push(Nt/C),c.push(1-lt/N),et+=1}}for(let lt=0;lt<N;lt++)for(let St=0;St<C;St++){const Nt=d+St+$*lt,jt=d+St+$*(lt+1),Qt=d+(St+1)+$*(lt+1),kt=d+(St+1)+$*lt;l.push(Nt,jt,kt),l.push(jt,Qt,kt),H+=6}a.addGroup(p,H,M),p+=H,d+=et}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new KA(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function LA(n){const t={};for(const e in n){t[e]={};for(const A in n[e]){const i=n[e][A];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][A]=null):t[e][A]=i.clone():Array.isArray(i)?t[e][A]=i.slice():t[e][A]=i}}return t}function ve(n){const t={};for(let e=0;e<n.length;e++){const A=LA(n[e]);for(const i in A)t[i]=A[i]}return t}function bs(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function ji(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Gt.workingColorSpace}const Rs={clone:LA,merge:ve};var Ps=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ds=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ze extends DA{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ps,this.fragmentShader=Ds,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=LA(t.uniforms),this.uniformsGroups=bs(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const i in this.uniforms){const s=this.uniforms[i].value;s&&s.isTexture?e.uniforms[i]={type:"t",value:s.toJSON(t).uuid}:s&&s.isColor?e.uniforms[i]={type:"c",value:s.getHex()}:s&&s.isVector2?e.uniforms[i]={type:"v2",value:s.toArray()}:s&&s.isVector3?e.uniforms[i]={type:"v3",value:s.toArray()}:s&&s.isVector4?e.uniforms[i]={type:"v4",value:s.toArray()}:s&&s.isMatrix3?e.uniforms[i]={type:"m3",value:s.toArray()}:s&&s.isMatrix4?e.uniforms[i]={type:"m4",value:s.toArray()}:e.uniforms[i]={value:s}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const A={};for(const i in this.extensions)this.extensions[i]===!0&&(A[i]=!0);return Object.keys(A).length>0&&(e.extensions=A),e}}class Ki extends _e{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new re,this.projectionMatrix=new re,this.projectionMatrixInverse=new re,this.coordinateSystem=2e3,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const iA=new U,Zi=new Xt,Qi=new Xt;class He extends Ki{constructor(t=50,e=1,A=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=A,this.far=i,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Hn*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(zn*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Hn*2*Math.atan(Math.tan(zn*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,A){iA.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(iA.x,iA.y).multiplyScalar(-t/iA.z),iA.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),A.set(iA.x,iA.y).multiplyScalar(-t/iA.z)}getViewSize(t,e){return this.getViewBounds(t,Zi,Qi),e.subVectors(Qi,Zi)}setViewOffset(t,e,A,i,r,s){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=A,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(zn*.5*this.fov)/this.zoom,A=2*e,i=this.aspect*A,r=-.5*i;const s=this.view;if(this.view!==null&&this.view.enabled){const l=s.fullWidth,o=s.fullHeight;r+=s.offsetX*i/l,e-=s.offsetY*A/o,i*=s.width/l,A*=s.height/o}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,e,e-A,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const IA=-90,UA=1;class Cs extends _e{constructor(t,e,A){super(),this.type="CubeCamera",this.renderTarget=A,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new He(IA,UA,t,e);i.layers=this.layers,this.add(i);const r=new He(IA,UA,t,e);r.layers=this.layers,this.add(r);const s=new He(IA,UA,t,e);s.layers=this.layers,this.add(s);const a=new He(IA,UA,t,e);a.layers=this.layers,this.add(a);const l=new He(IA,UA,t,e);l.layers=this.layers,this.add(l);const o=new He(IA,UA,t,e);o.layers=this.layers,this.add(o)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[A,i,r,s,a,l]=e;for(const o of e)this.remove(o);if(t===2e3)A.up.set(0,1,0),A.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),s.up.set(0,0,1),s.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===2001)A.up.set(0,-1,0),A.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),s.up.set(0,0,-1),s.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const o of e)this.add(o),o.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:A,activeMipmapLevel:i}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,s,a,l,o,h]=this.children,c=t.getRenderTarget(),d=t.getActiveCubeFace(),p=t.getActiveMipmapLevel(),m=t.xr.enabled;t.xr.enabled=!1;const _=A.texture.generateMipmaps;A.texture.generateMipmaps=!1,t.setRenderTarget(A,0,i),t.render(e,r),t.setRenderTarget(A,1,i),t.render(e,s),t.setRenderTarget(A,2,i),t.render(e,a),t.setRenderTarget(A,3,i),t.render(e,l),t.setRenderTarget(A,4,i),t.render(e,o),A.texture.generateMipmaps=_,t.setRenderTarget(A,5,i),t.render(e,h),t.setRenderTarget(c,d,p),t.xr.enabled=m,A.texture.needsPMREMUpdate=!0}}class Ji extends Se{constructor(t=[],e=301,A,i,r,s,a,l,o,h){super(t,e,A,i,r,s,a,l,o,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Ls extends sA{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const A={width:t,height:t,depth:1},i=[A,A,A,A,A,A];this.texture=new Ji(i),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const A={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new KA(5,5,5),r=new ze({name:"CubemapFromEquirect",uniforms:LA(A.uniforms),vertexShader:A.vertexShader,fragmentShader:A.fragmentShader,side:1,blending:0});r.uniforms.tEquirect.value=e;const s=new Oe(i,r),a=e.minFilter;return e.minFilter===1008&&(e.minFilter=1006),new Cs(1,10,this).update(t,s),e.minFilter=a,s.geometry.dispose(),s.material.dispose(),this}clear(t,e=!0,A=!0,i=!0){const r=t.getRenderTarget();for(let s=0;s<6;s++)t.setRenderTarget(this,s),t.clear(e,A,i);t.setRenderTarget(r)}}class ZA extends _e{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Is={type:"move"};class ci{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ZA,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ZA,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ZA,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const A of t.hand.values())this._getHandJoint(e,A)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,A){let i=null,r=null,s=null;const a=this._targetRay,l=this._grip,o=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(o&&t.hand){s=!0;for(const _ of t.hand.values()){const f=e.getJointPose(_,A),u=this._getHandJoint(o,_);f!==null&&(u.matrix.fromArray(f.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=f.radius),u.visible=f!==null}const h=o.joints["index-finger-tip"],c=o.joints["thumb-tip"],d=h.position.distanceTo(c.position),p=.02,m=.005;o.inputState.pinching&&d>p+m?(o.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!o.inputState.pinching&&d<=p-m&&(o.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,A),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=e.getPose(t.targetRaySpace,A),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Is)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),o!==null&&(o.visible=s!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const A=new ZA;A.matrixAutoUpdate=!1,A.visible=!1,t.joints[e.jointName]=A,t.add(A)}return t.joints[e.jointName]}}class Us extends _e{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new qe,this.environmentIntensity=1,this.environmentRotation=new qe,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const ui=new U,Fs=new U,Ns=new Lt;class cA{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,A,i){return this.normal.set(t,e,A),this.constant=i,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,A){const i=ui.subVectors(A,e).cross(Fs.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(i,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const A=t.delta(ui),i=this.normal.dot(A);if(i===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:e.copy(t.start).addScaledVector(A,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),A=this.distanceToPoint(t.end);return e<0&&A>0||A<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const A=e||Ns.getNormalMatrix(t),i=this.coplanarPoint(ui).applyMatrix4(t),r=this.normal.applyMatrix3(A).normalize();return this.constant=-i.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const uA=new YA,Bs=new Xt(.5,.5),En=new U;class tr{constructor(t=new cA,e=new cA,A=new cA,i=new cA,r=new cA,s=new cA){this.planes=[t,e,A,i,r,s]}set(t,e,A,i,r,s){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(A),a[3].copy(i),a[4].copy(r),a[5].copy(s),this}copy(t){const e=this.planes;for(let A=0;A<6;A++)e[A].copy(t.planes[A]);return this}setFromProjectionMatrix(t,e=2e3,A=!1){const i=this.planes,r=t.elements,s=r[0],a=r[1],l=r[2],o=r[3],h=r[4],c=r[5],d=r[6],p=r[7],m=r[8],_=r[9],f=r[10],u=r[11],w=r[12],T=r[13],S=r[14],P=r[15];if(i[0].setComponents(o-s,p-h,u-m,P-w).normalize(),i[1].setComponents(o+s,p+h,u+m,P+w).normalize(),i[2].setComponents(o+a,p+c,u+_,P+T).normalize(),i[3].setComponents(o-a,p-c,u-_,P-T).normalize(),A)i[4].setComponents(l,d,f,S).normalize(),i[5].setComponents(o-l,p-d,u-f,P-S).normalize();else if(i[4].setComponents(o-l,p-d,u-f,P-S).normalize(),e===2e3)i[5].setComponents(o+l,p+d,u+f,P+S).normalize();else if(e===2001)i[5].setComponents(l,d,f,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),uA.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),uA.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(uA)}intersectsSprite(t){uA.center.set(0,0,0);const e=Bs.distanceTo(t.center);return uA.radius=.7071067811865476+e,uA.applyMatrix4(t.matrixWorld),this.intersectsSphere(uA)}intersectsSphere(t){const e=this.planes,A=t.center,i=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(A)<i)return!1;return!0}intersectsBox(t){const e=this.planes;for(let A=0;A<6;A++){const i=e[A];if(En.x=i.normal.x>0?t.max.x:t.min.x,En.y=i.normal.y>0?t.max.y:t.min.y,En.z=i.normal.z>0?t.max.z:t.min.z,i.distanceToPoint(En)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let A=0;A<6;A++)if(e[A].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class er extends DA{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new zt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const yn=new U,Tn=new U,Ar=new re,QA=new Qn,wn=new YA,hi=new U,nr=new U;class ir extends _e{constructor(t=new we,e=new er){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,A=[0];for(let i=1,r=e.count;i<r;i++)yn.fromBufferAttribute(e,i-1),Tn.fromBufferAttribute(e,i),A[i]=A[i-1],A[i]+=yn.distanceTo(Tn);t.setAttribute("lineDistance",new Ke(A,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const A=this.geometry,i=this.matrixWorld,r=t.params.Line.threshold,s=A.drawRange;if(A.boundingSphere===null&&A.computeBoundingSphere(),wn.copy(A.boundingSphere),wn.applyMatrix4(i),wn.radius+=r,t.ray.intersectsSphere(wn)===!1)return;Ar.copy(i).invert(),QA.copy(t.ray).applyMatrix4(Ar);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,o=this.isLineSegments?2:1,h=A.index,d=A.attributes.position;if(h!==null){const p=Math.max(0,s.start),m=Math.min(h.count,s.start+s.count);for(let _=p,f=m-1;_<f;_+=o){const u=h.getX(_),w=h.getX(_+1),T=bn(this,t,QA,l,u,w,_);T&&e.push(T)}if(this.isLineLoop){const _=h.getX(m-1),f=h.getX(p),u=bn(this,t,QA,l,_,f,m-1);u&&e.push(u)}}else{const p=Math.max(0,s.start),m=Math.min(d.count,s.start+s.count);for(let _=p,f=m-1;_<f;_+=o){const u=bn(this,t,QA,l,_,_+1,_);u&&e.push(u)}if(this.isLineLoop){const _=bn(this,t,QA,l,m-1,p,m-1);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,A=Object.keys(e);if(A.length>0){const i=e[A[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function bn(n,t,e,A,i,r,s){const a=n.geometry.attributes.position;if(yn.fromBufferAttribute(a,i),Tn.fromBufferAttribute(a,r),e.distanceSqToSegment(yn,Tn,hi,nr)>A)return;hi.applyMatrix4(n.matrixWorld);const o=t.ray.origin.distanceTo(hi);if(!(o<t.near||o>t.far))return{distance:o,point:nr.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const rr=new U,sr=new U;class Os extends ir{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,A=[];for(let i=0,r=e.count;i<r;i+=2)rr.fromBufferAttribute(e,i),sr.fromBufferAttribute(e,i+1),A[i]=i===0?0:A[i-1],A[i+1]=A[i]+rr.distanceTo(sr);t.setAttribute("lineDistance",new Ke(A,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class zs extends ir{constructor(t,e){super(t,e),this.isLineLoop=!0,this.type="LineLoop"}}class Hs extends DA{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new zt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}}const ar=new re,di=new Qn,Rn=new YA,Pn=new U;class Gs extends _e{constructor(t=new we,e=new Hs){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}raycast(t,e){const A=this.geometry,i=this.matrixWorld,r=t.params.Points.threshold,s=A.drawRange;if(A.boundingSphere===null&&A.computeBoundingSphere(),Rn.copy(A.boundingSphere),Rn.applyMatrix4(i),Rn.radius+=r,t.ray.intersectsSphere(Rn)===!1)return;ar.copy(i).invert(),di.copy(t.ray).applyMatrix4(ar);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,o=A.index,c=A.attributes.position;if(o!==null){const d=Math.max(0,s.start),p=Math.min(o.count,s.start+s.count);for(let m=d,_=p;m<_;m++){const f=o.getX(m);Pn.fromBufferAttribute(c,f),or(Pn,f,l,i,t,e,this)}}else{const d=Math.max(0,s.start),p=Math.min(c.count,s.start+s.count);for(let m=d,_=p;m<_;m++)Pn.fromBufferAttribute(c,m),or(Pn,m,l,i,t,e,this)}}updateMorphTargets(){const e=this.geometry.morphAttributes,A=Object.keys(e);if(A.length>0){const i=e[A[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,s=i.length;r<s;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function or(n,t,e,A,i,r,s){const a=di.distanceSqToPoint(n);if(a<e){const l=new U;di.closestPointToPoint(n,l),l.applyMatrix4(A);const o=i.ray.origin.distanceTo(l);if(o<i.near||o>i.far)return;r.push({distance:o,distanceToRay:Math.sqrt(a),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:s})}}class lr extends Se{constructor(t,e,A=1014,i,r,s,a=1003,l=1003,o,h=1026,c=1){if(h!==1026&&h!==1027)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const d={width:t,height:e,depth:c};super(d,i,r,s,a,l,h,A,o),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Wn(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class cr extends Se{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}}class Dn extends we{constructor(t=1,e=1,A=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:A,heightSegments:i};const r=t/2,s=e/2,a=Math.floor(A),l=Math.floor(i),o=a+1,h=l+1,c=t/a,d=e/l,p=[],m=[],_=[],f=[];for(let u=0;u<h;u++){const w=u*d-s;for(let T=0;T<o;T++){const S=T*c-r;m.push(S,-w,0),_.push(0,0,1),f.push(T/a),f.push(1-u/l)}}for(let u=0;u<l;u++)for(let w=0;w<a;w++){const T=w+o*u,S=w+o*(u+1),P=w+1+o*(u+1),b=w+1+o*u;p.push(T,S,b),p.push(S,P,b)}this.setIndex(p),this.setAttribute("position",new Ke(m,3)),this.setAttribute("normal",new Ke(_,3)),this.setAttribute("uv",new Ke(f,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Dn(t.width,t.height,t.widthSegments,t.heightSegments)}}class Vs extends DA{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=3200,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ks extends DA{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}class ur extends Ki{constructor(t=-1,e=1,A=1,i=-1,r=.1,s=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=A,this.bottom=i,this.near=r,this.far=s,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,A,i,r,s){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=A,this.view.offsetY=i,this.view.width=r,this.view.height=s,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),A=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=A-t,s=A+t,a=i+e,l=i-e;if(this.view!==null&&this.view.enabled){const o=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=o*this.view.offsetX,s=r+o*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,s,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class Ws extends He{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}function hr(n,t,e,A){const i=Xs(A);switch(e){case 1021:return n*t;case 1028:return n*t/i.components*i.byteLength;case 1029:return n*t/i.components*i.byteLength;case 1030:return n*t*2/i.components*i.byteLength;case 1031:return n*t*2/i.components*i.byteLength;case 1022:return n*t*3/i.components*i.byteLength;case 1023:return n*t*4/i.components*i.byteLength;case 1033:return n*t*4/i.components*i.byteLength;case 33776:case 33777:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case 33778:case 33779:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case 35841:case 35843:return Math.max(n,16)*Math.max(t,8)/4;case 35840:case 35842:return Math.max(n,8)*Math.max(t,8)/2;case 36196:case 37492:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case 37496:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case 37808:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case 37809:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case 37810:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case 37811:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case 37812:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case 37813:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case 37814:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case 37815:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case 37816:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case 37817:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case 37818:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case 37819:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case 37820:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case 37821:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case 36492:case 36494:case 36495:return Math.ceil(n/4)*Math.ceil(t/4)*16;case 36283:case 36284:return Math.ceil(n/4)*Math.ceil(t/4)*8;case 36285:case 36286:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Xs(n){switch(n){case 1009:case 1010:return{byteLength:1,components:1};case 1012:case 1011:case 1016:return{byteLength:2,components:1};case 1017:case 1018:return{byteLength:2,components:4};case 1014:case 1013:case 1015:return{byteLength:4,components:1};case 35902:case 35899:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"180"}})),typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="180");/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dr(){let n=null,t=!1,e=null,A=null;function i(r,s){e(r,s),A=n.requestAnimationFrame(i)}return{start:function(){t!==!0&&e!==null&&(A=n.requestAnimationFrame(i),t=!0)},stop:function(){n.cancelAnimationFrame(A),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function qs(n){const t=new WeakMap;function e(a,l){const o=a.array,h=a.usage,c=o.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,o,h),a.onUploadCallback();let p;if(o instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&o instanceof Float16Array)p=n.HALF_FLOAT;else if(o instanceof Uint16Array)a.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(o instanceof Int16Array)p=n.SHORT;else if(o instanceof Uint32Array)p=n.UNSIGNED_INT;else if(o instanceof Int32Array)p=n.INT;else if(o instanceof Int8Array)p=n.BYTE;else if(o instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(o instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+o);return{buffer:d,type:p,bytesPerElement:o.BYTES_PER_ELEMENT,version:a.version,size:c}}function A(a,l,o){const h=l.array,c=l.updateRanges;if(n.bindBuffer(o,a),c.length===0)n.bufferSubData(o,0,h);else{c.sort((p,m)=>p.start-m.start);let d=0;for(let p=1;p<c.length;p++){const m=c[d],_=c[p];_.start<=m.start+m.count+1?m.count=Math.max(m.count,_.start+_.count-m.start):(++d,c[d]=_)}c.length=d+1;for(let p=0,m=c.length;p<m;p++){const _=c[p];n.bufferSubData(o,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function s(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=t.get(a);(!h||h.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const o=t.get(a);if(o===void 0)t.set(a,e(a,l));else if(o.version<a.version){if(o.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");A(o.buffer,a,l),o.version=a.version}}return{get:i,remove:r,update:s}}var Ys=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$s=`#ifdef USE_ALPHAHASH
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
#endif`,js=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Ks=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zs=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Qs=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Js=`#ifdef USE_AOMAP
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
#endif`,ta=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ea=`#ifdef USE_BATCHING
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
#endif`,Aa=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,na=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,ia=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ra=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,sa=`#ifdef USE_IRIDESCENCE
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
#endif`,aa=`#ifdef USE_BUMPMAP
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
#endif`,oa=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,la=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,ca=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ua=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,ha=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,da=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,fa=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,pa=`#if defined( USE_COLOR_ALPHA )
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
#endif`,ma=`#define PI 3.141592653589793
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
} // validated`,ga=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,_a=`vec3 transformedNormal = objectNormal;
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
#endif`,va=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,xa=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Ma=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sa=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Ea="gl_FragColor = linearToOutputTexel( gl_FragColor );",ya=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ta=`#ifdef USE_ENVMAP
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
#endif`,wa=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ba=`#ifdef USE_ENVMAP
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
#endif`,Ra=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Pa=`#ifdef USE_ENVMAP
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
#endif`,Da=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Ca=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,La=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Ia=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Ua=`#ifdef USE_GRADIENTMAP
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
}`,Fa=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Na=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Ba=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Oa=`uniform bool receiveShadow;
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
#endif`,za=`#ifdef USE_ENVMAP
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
#endif`,Ha=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ga=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Va=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ka=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wa=`PhysicalMaterial material;
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
#endif`,Xa=`struct PhysicalMaterial {
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
}`,qa=`
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
#endif`,Ya=`#if defined( RE_IndirectDiffuse )
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
#endif`,$a=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ja=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ka=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Za=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Qa=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ja=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,to=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eo=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ao=`#if defined( USE_POINTS_UV )
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
#endif`,no=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,io=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,ro=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,so=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ao=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oo=`#ifdef USE_MORPHTARGETS
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
#endif`,lo=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,co=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uo=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ho=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fo=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,po=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mo=`#ifdef USE_NORMALMAP
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
#endif`,go=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_o=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vo=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xo=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Mo=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,So=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Eo=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,yo=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,To=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,wo=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,bo=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ro=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Po=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Do=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Co=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Lo=`float getShadowMask() {
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
}`,Io=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Uo=`#ifdef USE_SKINNING
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
#endif`,Fo=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,No=`#ifdef USE_SKINNING
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
#endif`,Bo=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Oo=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,zo=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ho=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Go=`#ifdef USE_TRANSMISSION
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
#endif`,Vo=`#ifdef USE_TRANSMISSION
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
#endif`,ko=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Wo=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Xo=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,qo=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Ut={alphahash_fragment:Ys,alphahash_pars_fragment:$s,alphamap_fragment:js,alphamap_pars_fragment:Ks,alphatest_fragment:Zs,alphatest_pars_fragment:Qs,aomap_fragment:Js,aomap_pars_fragment:ta,batching_pars_vertex:ea,batching_vertex:Aa,begin_vertex:na,beginnormal_vertex:ia,bsdfs:ra,iridescence_fragment:sa,bumpmap_pars_fragment:aa,clipping_planes_fragment:oa,clipping_planes_pars_fragment:la,clipping_planes_pars_vertex:ca,clipping_planes_vertex:ua,color_fragment:ha,color_pars_fragment:da,color_pars_vertex:fa,color_vertex:pa,common:ma,cube_uv_reflection_fragment:ga,defaultnormal_vertex:_a,displacementmap_pars_vertex:va,displacementmap_vertex:xa,emissivemap_fragment:Ma,emissivemap_pars_fragment:Sa,colorspace_fragment:Ea,colorspace_pars_fragment:ya,envmap_fragment:Ta,envmap_common_pars_fragment:wa,envmap_pars_fragment:ba,envmap_pars_vertex:Ra,envmap_physical_pars_fragment:za,envmap_vertex:Pa,fog_vertex:Da,fog_pars_vertex:Ca,fog_fragment:La,fog_pars_fragment:Ia,gradientmap_pars_fragment:Ua,lightmap_pars_fragment:Fa,lights_lambert_fragment:Na,lights_lambert_pars_fragment:Ba,lights_pars_begin:Oa,lights_toon_fragment:Ha,lights_toon_pars_fragment:Ga,lights_phong_fragment:Va,lights_phong_pars_fragment:ka,lights_physical_fragment:Wa,lights_physical_pars_fragment:Xa,lights_fragment_begin:qa,lights_fragment_maps:Ya,lights_fragment_end:$a,logdepthbuf_fragment:ja,logdepthbuf_pars_fragment:Ka,logdepthbuf_pars_vertex:Za,logdepthbuf_vertex:Qa,map_fragment:Ja,map_pars_fragment:to,map_particle_fragment:eo,map_particle_pars_fragment:Ao,metalnessmap_fragment:no,metalnessmap_pars_fragment:io,morphinstance_vertex:ro,morphcolor_vertex:so,morphnormal_vertex:ao,morphtarget_pars_vertex:oo,morphtarget_vertex:lo,normal_fragment_begin:co,normal_fragment_maps:uo,normal_pars_fragment:ho,normal_pars_vertex:fo,normal_vertex:po,normalmap_pars_fragment:mo,clearcoat_normal_fragment_begin:go,clearcoat_normal_fragment_maps:_o,clearcoat_pars_fragment:vo,iridescence_pars_fragment:xo,opaque_fragment:Mo,packing:So,premultiplied_alpha_fragment:Eo,project_vertex:yo,dithering_fragment:To,dithering_pars_fragment:wo,roughnessmap_fragment:bo,roughnessmap_pars_fragment:Ro,shadowmap_pars_fragment:Po,shadowmap_pars_vertex:Do,shadowmap_vertex:Co,shadowmask_pars_fragment:Lo,skinbase_vertex:Io,skinning_pars_vertex:Uo,skinning_vertex:Fo,skinnormal_vertex:No,specularmap_fragment:Bo,specularmap_pars_fragment:Oo,tonemapping_fragment:zo,tonemapping_pars_fragment:Ho,transmission_fragment:Go,transmission_pars_fragment:Vo,uv_pars_fragment:ko,uv_pars_vertex:Wo,uv_vertex:Xo,worldpos_vertex:qo,background_vert:`varying vec2 vUv;
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
}`},it={common:{diffuse:{value:new zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Lt}},envmap:{envMap:{value:null},envMapRotation:{value:new Lt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Lt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Lt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Lt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Lt},normalScale:{value:new Xt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Lt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Lt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Lt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Lt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0},uvTransform:{value:new Lt}},sprite:{diffuse:{value:new zt(16777215)},opacity:{value:1},center:{value:new Xt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Lt},alphaMap:{value:null},alphaMapTransform:{value:new Lt},alphaTest:{value:0}}},Ge={basic:{uniforms:ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.fog]),vertexShader:Ut.meshbasic_vert,fragmentShader:Ut.meshbasic_frag},lambert:{uniforms:ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ut.meshlambert_vert,fragmentShader:Ut.meshlambert_frag},phong:{uniforms:ve([it.common,it.specularmap,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.fog,it.lights,{emissive:{value:new zt(0)},specular:{value:new zt(1118481)},shininess:{value:30}}]),vertexShader:Ut.meshphong_vert,fragmentShader:Ut.meshphong_frag},standard:{uniforms:ve([it.common,it.envmap,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.roughnessmap,it.metalnessmap,it.fog,it.lights,{emissive:{value:new zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag},toon:{uniforms:ve([it.common,it.aomap,it.lightmap,it.emissivemap,it.bumpmap,it.normalmap,it.displacementmap,it.gradientmap,it.fog,it.lights,{emissive:{value:new zt(0)}}]),vertexShader:Ut.meshtoon_vert,fragmentShader:Ut.meshtoon_frag},matcap:{uniforms:ve([it.common,it.bumpmap,it.normalmap,it.displacementmap,it.fog,{matcap:{value:null}}]),vertexShader:Ut.meshmatcap_vert,fragmentShader:Ut.meshmatcap_frag},points:{uniforms:ve([it.points,it.fog]),vertexShader:Ut.points_vert,fragmentShader:Ut.points_frag},dashed:{uniforms:ve([it.common,it.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ut.linedashed_vert,fragmentShader:Ut.linedashed_frag},depth:{uniforms:ve([it.common,it.displacementmap]),vertexShader:Ut.depth_vert,fragmentShader:Ut.depth_frag},normal:{uniforms:ve([it.common,it.bumpmap,it.normalmap,it.displacementmap,{opacity:{value:1}}]),vertexShader:Ut.meshnormal_vert,fragmentShader:Ut.meshnormal_frag},sprite:{uniforms:ve([it.sprite,it.fog]),vertexShader:Ut.sprite_vert,fragmentShader:Ut.sprite_frag},background:{uniforms:{uvTransform:{value:new Lt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ut.background_vert,fragmentShader:Ut.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Lt}},vertexShader:Ut.backgroundCube_vert,fragmentShader:Ut.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ut.cube_vert,fragmentShader:Ut.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ut.equirect_vert,fragmentShader:Ut.equirect_frag},distanceRGBA:{uniforms:ve([it.common,it.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ut.distanceRGBA_vert,fragmentShader:Ut.distanceRGBA_frag},shadow:{uniforms:ve([it.lights,it.fog,{color:{value:new zt(0)},opacity:{value:1}}]),vertexShader:Ut.shadow_vert,fragmentShader:Ut.shadow_frag}};Ge.physical={uniforms:ve([Ge.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Lt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Lt},clearcoatNormalScale:{value:new Xt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Lt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Lt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Lt},sheen:{value:0},sheenColor:{value:new zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Lt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Lt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Lt},transmissionSamplerSize:{value:new Xt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Lt},attenuationDistance:{value:0},attenuationColor:{value:new zt(0)},specularColor:{value:new zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Lt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Lt},anisotropyVector:{value:new Xt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Lt}}]),vertexShader:Ut.meshphysical_vert,fragmentShader:Ut.meshphysical_frag};const Cn={r:0,b:0,g:0},hA=new qe,Yo=new re;function $o(n,t,e,A,i,r,s){const a=new zt(0);let l=r===!0?0:1,o,h,c=null,d=0,p=null;function m(T){let S=T.isScene===!0?T.background:null;return S&&S.isTexture&&(S=(T.backgroundBlurriness>0?e:t).get(S)),S}function _(T){let S=!1;const P=m(T);P===null?u(a,l):P&&P.isColor&&(u(P,1),S=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?A.buffers.color.setClear(0,0,0,1,s):b==="alpha-blend"&&A.buffers.color.setClear(0,0,0,0,s),(n.autoClear||S)&&(A.buffers.depth.setTest(!0),A.buffers.depth.setMask(!0),A.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function f(T,S){const P=m(S);P&&(P.isCubeTexture||P.mapping===306)?(h===void 0&&(h=new Oe(new KA(1,1,1),new ze({name:"BackgroundCubeMaterial",uniforms:LA(Ge.backgroundCube.uniforms),vertexShader:Ge.backgroundCube.vertexShader,fragmentShader:Ge.backgroundCube.fragmentShader,side:1,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,C,N){this.matrixWorld.copyPosition(N.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(h)),hA.copy(S.backgroundRotation),hA.x*=-1,hA.y*=-1,hA.z*=-1,P.isCubeTexture&&P.isRenderTargetTexture===!1&&(hA.y*=-1,hA.z*=-1),h.material.uniforms.envMap.value=P,h.material.uniforms.flipEnvMap.value=P.isCubeTexture&&P.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Yo.makeRotationFromEuler(hA)),h.material.toneMapped=Gt.getTransfer(P.colorSpace)!==qt,(c!==P||d!==P.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,c=P,d=P.version,p=n.toneMapping),h.layers.enableAll(),T.unshift(h,h.geometry,h.material,0,0,null)):P&&P.isTexture&&(o===void 0&&(o=new Oe(new Dn(2,2),new ze({name:"BackgroundMaterial",uniforms:LA(Ge.background.uniforms),vertexShader:Ge.background.vertexShader,fragmentShader:Ge.background.fragmentShader,side:0,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),o.geometry.deleteAttribute("normal"),Object.defineProperty(o.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(o)),o.material.uniforms.t2D.value=P,o.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,o.material.toneMapped=Gt.getTransfer(P.colorSpace)!==qt,P.matrixAutoUpdate===!0&&P.updateMatrix(),o.material.uniforms.uvTransform.value.copy(P.matrix),(c!==P||d!==P.version||p!==n.toneMapping)&&(o.material.needsUpdate=!0,c=P,d=P.version,p=n.toneMapping),o.layers.enableAll(),T.unshift(o,o.geometry,o.material,0,0,null))}function u(T,S){T.getRGB(Cn,ji(n)),A.buffers.color.setClear(Cn.r,Cn.g,Cn.b,S,s)}function w(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),o!==void 0&&(o.geometry.dispose(),o.material.dispose(),o=void 0)}return{getClearColor:function(){return a},setClearColor:function(T,S=1){a.set(T),l=S,u(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(T){l=T,u(a,l)},render:_,addToRenderList:f,dispose:w}}function jo(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),A={},i=d(null);let r=i,s=!1;function a(x,D,z,V,X){let $=!1;const W=c(V,z,D);r!==W&&(r=W,o(r.object)),$=p(x,V,z,X),$&&m(x,V,z,X),X!==null&&t.update(X,n.ELEMENT_ARRAY_BUFFER),($||s)&&(s=!1,S(x,D,z,V),X!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(X).buffer))}function l(){return n.createVertexArray()}function o(x){return n.bindVertexArray(x)}function h(x){return n.deleteVertexArray(x)}function c(x,D,z){const V=z.wireframe===!0;let X=A[x.id];X===void 0&&(X={},A[x.id]=X);let $=X[D.id];$===void 0&&($={},X[D.id]=$);let W=$[V];return W===void 0&&(W=d(l()),$[V]=W),W}function d(x){const D=[],z=[],V=[];for(let X=0;X<e;X++)D[X]=0,z[X]=0,V[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:z,attributeDivisors:V,object:x,attributes:{},index:null}}function p(x,D,z,V){const X=r.attributes,$=D.attributes;let W=0;const et=z.getAttributes();for(const H in et)if(et[H].location>=0){const lt=X[H];let St=$[H];if(St===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(St=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(St=x.instanceColor)),lt===void 0||lt.attribute!==St||St&&lt.data!==St.data)return!0;W++}return r.attributesNum!==W||r.index!==V}function m(x,D,z,V){const X={},$=D.attributes;let W=0;const et=z.getAttributes();for(const H in et)if(et[H].location>=0){let lt=$[H];lt===void 0&&(H==="instanceMatrix"&&x.instanceMatrix&&(lt=x.instanceMatrix),H==="instanceColor"&&x.instanceColor&&(lt=x.instanceColor));const St={};St.attribute=lt,lt&&lt.data&&(St.data=lt.data),X[H]=St,W++}r.attributes=X,r.attributesNum=W,r.index=V}function _(){const x=r.newAttributes;for(let D=0,z=x.length;D<z;D++)x[D]=0}function f(x){u(x,0)}function u(x,D){const z=r.newAttributes,V=r.enabledAttributes,X=r.attributeDivisors;z[x]=1,V[x]===0&&(n.enableVertexAttribArray(x),V[x]=1),X[x]!==D&&(n.vertexAttribDivisor(x,D),X[x]=D)}function w(){const x=r.newAttributes,D=r.enabledAttributes;for(let z=0,V=D.length;z<V;z++)D[z]!==x[z]&&(n.disableVertexAttribArray(z),D[z]=0)}function T(x,D,z,V,X,$,W){W===!0?n.vertexAttribIPointer(x,D,z,X,$):n.vertexAttribPointer(x,D,z,V,X,$)}function S(x,D,z,V){_();const X=V.attributes,$=z.getAttributes(),W=D.defaultAttributeValues;for(const et in $){const H=$[et];if(H.location>=0){let rt=X[et];if(rt===void 0&&(et==="instanceMatrix"&&x.instanceMatrix&&(rt=x.instanceMatrix),et==="instanceColor"&&x.instanceColor&&(rt=x.instanceColor)),rt!==void 0){const lt=rt.normalized,St=rt.itemSize,Nt=t.get(rt);if(Nt===void 0)continue;const jt=Nt.buffer,Qt=Nt.type,kt=Nt.bytesPerElement,q=Qt===n.INT||Qt===n.UNSIGNED_INT||rt.gpuType===1013;if(rt.isInterleavedBufferAttribute){const K=rt.data,ht=K.stride,Pt=rt.offset;if(K.isInstancedInterleavedBuffer){for(let Mt=0;Mt<H.locationSize;Mt++)u(H.location+Mt,K.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let Mt=0;Mt<H.locationSize;Mt++)f(H.location+Mt);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let Mt=0;Mt<H.locationSize;Mt++)T(H.location+Mt,St/H.locationSize,Qt,lt,ht*kt,(Pt+St/H.locationSize*Mt)*kt,q)}else{if(rt.isInstancedBufferAttribute){for(let K=0;K<H.locationSize;K++)u(H.location+K,rt.meshPerAttribute);x.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=rt.meshPerAttribute*rt.count)}else for(let K=0;K<H.locationSize;K++)f(H.location+K);n.bindBuffer(n.ARRAY_BUFFER,jt);for(let K=0;K<H.locationSize;K++)T(H.location+K,St/H.locationSize,Qt,lt,St*kt,St/H.locationSize*K*kt,q)}}else if(W!==void 0){const lt=W[et];if(lt!==void 0)switch(lt.length){case 2:n.vertexAttrib2fv(H.location,lt);break;case 3:n.vertexAttrib3fv(H.location,lt);break;case 4:n.vertexAttrib4fv(H.location,lt);break;default:n.vertexAttrib1fv(H.location,lt)}}}}w()}function P(){N();for(const x in A){const D=A[x];for(const z in D){const V=D[z];for(const X in V)h(V[X].object),delete V[X];delete D[z]}delete A[x]}}function b(x){if(A[x.id]===void 0)return;const D=A[x.id];for(const z in D){const V=D[z];for(const X in V)h(V[X].object),delete V[X];delete D[z]}delete A[x.id]}function C(x){for(const D in A){const z=A[D];if(z[x.id]===void 0)continue;const V=z[x.id];for(const X in V)h(V[X].object),delete V[X];delete z[x.id]}}function N(){M(),s=!0,r!==i&&(r=i,o(r.object))}function M(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:N,resetDefaultState:M,dispose:P,releaseStatesOfGeometry:b,releaseStatesOfProgram:C,initAttributes:_,enableAttribute:f,disableUnusedAttributes:w}}function Ko(n,t,e){let A;function i(o){A=o}function r(o,h){n.drawArrays(A,o,h),e.update(h,A,1)}function s(o,h,c){c!==0&&(n.drawArraysInstanced(A,o,h,c),e.update(h,A,c))}function a(o,h,c){if(c===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(A,o,0,h,0,c);let p=0;for(let m=0;m<c;m++)p+=h[m];e.update(p,A,1)}function l(o,h,c,d){if(c===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let m=0;m<o.length;m++)s(o[m],h[m],d[m]);else{p.multiDrawArraysInstancedWEBGL(A,o,0,h,0,d,0,c);let m=0;for(let _=0;_<c;_++)m+=h[_]*d[_];e.update(m,A,1)}}this.setMode=i,this.render=r,this.renderInstances=s,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function Zo(n,t,e,A){let i;function r(){if(i!==void 0)return i;if(t.has("EXT_texture_filter_anisotropic")===!0){const C=t.get("EXT_texture_filter_anisotropic");i=n.getParameter(C.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(C){return!(C!==1023&&A.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(C){const N=C===1016&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(C!==1009&&A.convert(C)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&C!==1015&&!N)}function l(C){if(C==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";C="mediump"}return C==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let o=e.precision!==void 0?e.precision:"highp";const h=l(o);h!==o&&(console.warn("THREE.WebGLRenderer:",o,"not supported, using",h,"instead."),o=h);const c=e.logarithmicDepthBuffer===!0,d=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),m=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),f=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),T=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),P=m>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:s,textureTypeReadable:a,precision:o,logarithmicDepthBuffer:c,reversedDepthBuffer:d,maxTextures:p,maxVertexTextures:m,maxTextureSize:_,maxCubemapSize:f,maxAttributes:u,maxVertexUniforms:w,maxVaryings:T,maxFragmentUniforms:S,vertexTextures:P,maxSamples:b}}function Qo(n){const t=this;let e=null,A=0,i=!1,r=!1;const s=new cA,a=new Lt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(c,d){const p=c.length!==0||d||A!==0||i;return i=d,A=c.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(c,d){e=h(c,d,0)},this.setState=function(c,d,p){const m=c.clippingPlanes,_=c.clipIntersection,f=c.clipShadows,u=n.get(c);if(!i||m===null||m.length===0||r&&!f)r?h(null):o();else{const w=r?0:A,T=w*4;let S=u.clippingState||null;l.value=S,S=h(m,d,T,p);for(let P=0;P!==T;++P)S[P]=e[P];u.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function o(){l.value!==e&&(l.value=e,l.needsUpdate=A>0),t.numPlanes=A,t.numIntersection=0}function h(c,d,p,m){const _=c!==null?c.length:0;let f=null;if(_!==0){if(f=l.value,m!==!0||f===null){const u=p+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(f===null||f.length<u)&&(f=new Float32Array(u));for(let T=0,S=p;T!==_;++T,S+=4)s.copy(c[T]).applyMatrix4(w,a),s.normal.toArray(f,S),f[S+3]=s.constant}l.value=f,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,f}}function Jo(n){let t=new WeakMap;function e(s,a){return a===303?s.mapping=301:a===304&&(s.mapping=302),s}function A(s){if(s&&s.isTexture){const a=s.mapping;if(a===303||a===304)if(t.has(s)){const l=t.get(s).texture;return e(l,s.mapping)}else{const l=s.image;if(l&&l.height>0){const o=new Ls(l.height);return o.fromEquirectangularTexture(n,s),t.set(s,o),s.addEventListener("dispose",i),e(o.texture,s.mapping)}else return null}}return s}function i(s){const a=s.target;a.removeEventListener("dispose",i);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:A,dispose:r}}const FA=4,fr=[.125,.215,.35,.446,.526,.582],dA=20,fi=new ur,pr=new zt;let pi=null,mi=0,gi=0,_i=!1;const fA=(1+Math.sqrt(5))/2,NA=1/fA,mr=[new U(-fA,NA,0),new U(fA,NA,0),new U(-NA,0,fA),new U(NA,0,fA),new U(0,fA,-NA),new U(0,fA,NA),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],tl=new U;class gr{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,A=.1,i=100,r={}){const{size:s=256,position:a=tl}=r;pi=this._renderer.getRenderTarget(),mi=this._renderer.getActiveCubeFace(),gi=this._renderer.getActiveMipmapLevel(),_i=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(s);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,A,i,l,a),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=xr(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=vr(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(pi,mi,gi),this._renderer.xr.enabled=_i,t.scissorTest=!1,Ln(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===301||t.mapping===302?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),pi=this._renderer.getRenderTarget(),mi=this._renderer.getActiveCubeFace(),gi=this._renderer.getActiveMipmapLevel(),_i=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const A=e||this._allocateTargets();return this._textureToCubeUV(t,A),this._applyPMREM(A),this._cleanup(A),A}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,A={magFilter:1006,minFilter:1006,generateMipmaps:!1,type:1016,format:1023,colorSpace:_A,depthBuffer:!1},i=_r(t,e,A);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=_r(t,e,A);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=el(r)),this._blurMaterial=Al(r,t,e)}return i}_compileMaterial(t){const e=new Oe(this._lodPlanes[0],t);this._renderer.compile(e,fi)}_sceneToCubeUV(t,e,A,i,r){const l=new He(90,1,e,A),o=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,p=c.toneMapping;c.getClearColor(pr),c.toneMapping=0,c.autoClear=!1,c.state.buffers.depth.getReversed()&&(c.setRenderTarget(i),c.clearDepth(),c.setRenderTarget(null));const _=new ki({name:"PMREM.Background",side:1,depthWrite:!1,depthTest:!1}),f=new Oe(new KA,_);let u=!1;const w=t.background;w?w.isColor&&(_.color.copy(w),t.background=null,u=!0):(_.color.copy(pr),u=!0);for(let T=0;T<6;T++){const S=T%3;S===0?(l.up.set(0,o[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[T],r.y,r.z)):S===1?(l.up.set(0,0,o[T]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[T],r.z)):(l.up.set(0,o[T],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[T]));const P=this._cubeSize;Ln(i,S*P,T>2?P:0,P,P),c.setRenderTarget(i),u&&c.render(f,l),c.render(t,l)}f.geometry.dispose(),f.material.dispose(),c.toneMapping=p,c.autoClear=d,t.background=w}_textureToCubeUV(t,e){const A=this._renderer,i=t.mapping===301||t.mapping===302;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=xr()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=vr());const r=i?this._cubemapMaterial:this._equirectMaterial,s=new Oe(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Ln(e,0,0,3*l,2*l),A.setRenderTarget(e),A.render(s,fi)}_applyPMREM(t){const e=this._renderer,A=e.autoClear;e.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=mr[(i-r-1)%mr.length];this._blur(t,r-1,r,s,a)}e.autoClear=A}_blur(t,e,A,i,r){const s=this._pingPongRenderTarget;this._halfBlur(t,s,e,A,i,"latitudinal",r),this._halfBlur(s,t,A,A,i,"longitudinal",r)}_halfBlur(t,e,A,i,r,s,a){const l=this._renderer,o=this._blurMaterial;s!=="latitudinal"&&s!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,c=new Oe(this._lodPlanes[i],o),d=o.uniforms,p=this._sizeLods[A]-1,m=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*dA-1),_=r/m,f=isFinite(r)?1+Math.floor(h*_):dA;f>dA&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${f} samples when the maximum is set to ${dA}`);const u=[];let w=0;for(let C=0;C<dA;++C){const N=C/_,M=Math.exp(-N*N/2);u.push(M),C===0?w+=M:C<f&&(w+=2*M)}for(let C=0;C<u.length;C++)u[C]=u[C]/w;d.envMap.value=t.texture,d.samples.value=f,d.weights.value=u,d.latitudinal.value=s==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:T}=this;d.dTheta.value=m,d.mipInt.value=T-A;const S=this._sizeLods[i],P=3*S*(i>T-FA?i-T+FA:0),b=4*(this._cubeSize-S);Ln(e,P,b,3*S,2*S),l.setRenderTarget(e),l.render(c,fi)}}function el(n){const t=[],e=[],A=[];let i=n;const r=n-FA+1+fr.length;for(let s=0;s<r;s++){const a=Math.pow(2,i);e.push(a);let l=1/a;s>n-FA?l=fr[s-n+FA-1]:s===0&&(l=0),A.push(l);const o=1/(a-2),h=-o,c=1+o,d=[h,h,c,h,c,c,h,h,c,c,h,c],p=6,m=6,_=3,f=2,u=1,w=new Float32Array(_*m*p),T=new Float32Array(f*m*p),S=new Float32Array(u*m*p);for(let b=0;b<p;b++){const C=b%3*2/3-1,N=b>2?0:-1,M=[C,N,0,C+2/3,N,0,C+2/3,N+1,0,C,N,0,C+2/3,N+1,0,C,N+1,0];w.set(M,_*m*b),T.set(d,f*m*b);const x=[b,b,b,b,b,b];S.set(x,u*m*b)}const P=new we;P.setAttribute("position",new oe(w,_)),P.setAttribute("uv",new oe(T,f)),P.setAttribute("faceIndex",new oe(S,u)),t.push(P),i>FA&&i--}return{lodPlanes:t,sizeLods:e,sigmas:A}}function _r(n,t,e){const A=new sA(n,t,e);return A.texture.mapping=306,A.texture.name="PMREM.cubeUv",A.scissorTest=!0,A}function Ln(n,t,e,A,i){n.viewport.set(t,e,A,i),n.scissor.set(t,e,A,i)}function Al(n,t,e){const A=new Float32Array(dA),i=new U(0,1,0);return new ze({name:"SphericalGaussianBlur",defines:{n:dA,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:A},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:vi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function vr(){return new ze({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:vi(),fragmentShader:`

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
		`,blending:0,depthTest:!1,depthWrite:!1})}function xr(){return new ze({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:vi(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:0,depthTest:!1,depthWrite:!1})}function vi(){return`

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
	`}function nl(n){let t=new WeakMap,e=null;function A(a){if(a&&a.isTexture){const l=a.mapping,o=l===303||l===304,h=l===301||l===302;if(o||h){let c=t.get(a);const d=c!==void 0?c.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new gr(n)),c=o?e.fromEquirectangular(a,c):e.fromCubemap(a,c),c.texture.pmremVersion=a.pmremVersion,t.set(a,c),c.texture;if(c!==void 0)return c.texture;{const p=a.image;return o&&p&&p.height>0||h&&p&&i(p)?(e===null&&(e=new gr(n)),c=o?e.fromEquirectangular(a):e.fromCubemap(a),c.texture.pmremVersion=a.pmremVersion,t.set(a,c),a.addEventListener("dispose",r),c.texture):null}}}return a}function i(a){let l=0;const o=6;for(let h=0;h<o;h++)a[h]!==void 0&&l++;return l===o}function r(a){const l=a.target;l.removeEventListener("dispose",r);const o=t.get(l);o!==void 0&&(t.delete(l),o.dispose())}function s(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:A,dispose:s}}function il(n){const t={};function e(A){if(t[A]!==void 0)return t[A];let i;switch(A){case"WEBGL_depth_texture":i=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=n.getExtension(A)}return t[A]=i,i}return{has:function(A){return e(A)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(A){const i=e(A);return i===null&&kA("THREE.WebGLRenderer: "+A+" extension not supported."),i}}}function rl(n,t,e,A){const i={},r=new WeakMap;function s(c){const d=c.target;d.index!==null&&t.remove(d.index);for(const m in d.attributes)t.remove(d.attributes[m]);d.removeEventListener("dispose",s),delete i[d.id];const p=r.get(d);p&&(t.remove(p),r.delete(d)),A.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(c,d){return i[d.id]===!0||(d.addEventListener("dispose",s),i[d.id]=!0,e.memory.geometries++),d}function l(c){const d=c.attributes;for(const p in d)t.update(d[p],n.ARRAY_BUFFER)}function o(c){const d=[],p=c.index,m=c.attributes.position;let _=0;if(p!==null){const w=p.array;_=p.version;for(let T=0,S=w.length;T<S;T+=3){const P=w[T+0],b=w[T+1],C=w[T+2];d.push(P,b,b,C,C,P)}}else if(m!==void 0){const w=m.array;_=m.version;for(let T=0,S=w.length/3-1;T<S;T+=3){const P=T+0,b=T+1,C=T+2;d.push(P,b,b,C,C,P)}}else return;const f=new(Ri(d)?Xi:Wi)(d,1);f.version=_;const u=r.get(c);u&&t.remove(u),r.set(c,f)}function h(c){const d=r.get(c);if(d){const p=c.index;p!==null&&d.version<p.version&&o(c)}else o(c);return r.get(c)}return{get:a,update:l,getWireframeAttribute:h}}function sl(n,t,e){let A;function i(d){A=d}let r,s;function a(d){r=d.type,s=d.bytesPerElement}function l(d,p){n.drawElements(A,p,r,d*s),e.update(p,A,1)}function o(d,p,m){m!==0&&(n.drawElementsInstanced(A,p,r,d*s,m),e.update(p,A,m))}function h(d,p,m){if(m===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(A,p,0,r,d,0,m);let f=0;for(let u=0;u<m;u++)f+=p[u];e.update(f,A,1)}function c(d,p,m,_){if(m===0)return;const f=t.get("WEBGL_multi_draw");if(f===null)for(let u=0;u<d.length;u++)o(d[u]/s,p[u],_[u]);else{f.multiDrawElementsInstancedWEBGL(A,p,0,r,d,0,_,0,m);let u=0;for(let w=0;w<m;w++)u+=p[w]*_[w];e.update(u,A,1)}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=o,this.renderMultiDraw=h,this.renderMultiDrawInstances=c}function al(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function A(r,s,a){switch(e.calls++,s){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",s);break}}function i(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:i,update:A}}function ol(n,t,e){const A=new WeakMap,i=new ie;function r(s,a,l){const o=s.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,c=h!==void 0?h.length:0;let d=A.get(a);if(d===void 0||d.count!==c){let M=function(){C.dispose(),A.delete(a),a.removeEventListener("dispose",M)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,m=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],u=a.morphAttributes.normal||[],w=a.morphAttributes.color||[];let T=0;p===!0&&(T=1),m===!0&&(T=2),_===!0&&(T=3);let S=a.attributes.position.count*T,P=1;S>t.maxTextureSize&&(P=Math.ceil(S/t.maxTextureSize),S=t.maxTextureSize);const b=new Float32Array(S*P*4*c),C=new Li(b,S,P,c);C.type=1015,C.needsUpdate=!0;const N=T*4;for(let x=0;x<c;x++){const D=f[x],z=u[x],V=w[x],X=S*P*4*x;for(let $=0;$<D.count;$++){const W=$*N;p===!0&&(i.fromBufferAttribute(D,$),b[X+W+0]=i.x,b[X+W+1]=i.y,b[X+W+2]=i.z,b[X+W+3]=0),m===!0&&(i.fromBufferAttribute(z,$),b[X+W+4]=i.x,b[X+W+5]=i.y,b[X+W+6]=i.z,b[X+W+7]=0),_===!0&&(i.fromBufferAttribute(V,$),b[X+W+8]=i.x,b[X+W+9]=i.y,b[X+W+10]=i.z,b[X+W+11]=V.itemSize===4?i.w:1)}}d={count:c,texture:C,size:new Xt(S,P)},A.set(a,d),a.addEventListener("dispose",M)}if(s.isInstancedMesh===!0&&s.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",s.morphTexture,e);else{let p=0;for(let _=0;_<o.length;_++)p+=o[_];const m=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",m),l.getUniforms().setValue(n,"morphTargetInfluences",o)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function ll(n,t,e,A){let i=new WeakMap;function r(l){const o=A.render.frame,h=l.geometry,c=t.get(l,h);if(i.get(c)!==o&&(t.update(c),i.set(c,o)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==o&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),i.set(l,o))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==o&&(d.update(),i.set(d,o))}return c}function s(){i=new WeakMap}function a(l){const o=l.target;o.removeEventListener("dispose",a),e.remove(o.instanceMatrix),o.instanceColor!==null&&e.remove(o.instanceColor)}return{update:r,dispose:s}}const Mr=new Se,Sr=new lr(1,1),Er=new Li,yr=new ps,Tr=new Ji,wr=[],br=[],Rr=new Float32Array(16),Pr=new Float32Array(9),Dr=new Float32Array(4);function BA(n,t,e){const A=n[0];if(A<=0||A>0)return n;const i=t*e;let r=wr[i];if(r===void 0&&(r=new Float32Array(i),wr[i]=r),t!==0){A.toArray(r,0);for(let s=1,a=0;s!==t;++s)a+=e,n[s].toArray(r,a)}return r}function le(n,t){if(n.length!==t.length)return!1;for(let e=0,A=n.length;e<A;e++)if(n[e]!==t[e])return!1;return!0}function ce(n,t){for(let e=0,A=t.length;e<A;e++)n[e]=t[e]}function In(n,t){let e=br[t];e===void 0&&(e=new Int32Array(t),br[t]=e);for(let A=0;A!==t;++A)e[A]=n.allocateTextureUnit();return e}function cl(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function ul(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;n.uniform2fv(this.addr,t),ce(e,t)}}function hl(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(le(e,t))return;n.uniform3fv(this.addr,t),ce(e,t)}}function dl(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;n.uniform4fv(this.addr,t),ce(e,t)}}function fl(n,t){const e=this.cache,A=t.elements;if(A===void 0){if(le(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ce(e,t)}else{if(le(e,A))return;Dr.set(A),n.uniformMatrix2fv(this.addr,!1,Dr),ce(e,A)}}function pl(n,t){const e=this.cache,A=t.elements;if(A===void 0){if(le(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ce(e,t)}else{if(le(e,A))return;Pr.set(A),n.uniformMatrix3fv(this.addr,!1,Pr),ce(e,A)}}function ml(n,t){const e=this.cache,A=t.elements;if(A===void 0){if(le(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ce(e,t)}else{if(le(e,A))return;Rr.set(A),n.uniformMatrix4fv(this.addr,!1,Rr),ce(e,A)}}function gl(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function _l(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;n.uniform2iv(this.addr,t),ce(e,t)}}function vl(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;n.uniform3iv(this.addr,t),ce(e,t)}}function xl(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;n.uniform4iv(this.addr,t),ce(e,t)}}function Ml(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Sl(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(le(e,t))return;n.uniform2uiv(this.addr,t),ce(e,t)}}function El(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(le(e,t))return;n.uniform3uiv(this.addr,t),ce(e,t)}}function yl(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(le(e,t))return;n.uniform4uiv(this.addr,t),ce(e,t)}}function Tl(n,t,e){const A=this.cache,i=e.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i);let r;this.type===n.SAMPLER_2D_SHADOW?(Sr.compareFunction=515,r=Sr):r=Mr,e.setTexture2D(t||r,i)}function wl(n,t,e){const A=this.cache,i=e.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),e.setTexture3D(t||yr,i)}function bl(n,t,e){const A=this.cache,i=e.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),e.setTextureCube(t||Tr,i)}function Rl(n,t,e){const A=this.cache,i=e.allocateTextureUnit();A[0]!==i&&(n.uniform1i(this.addr,i),A[0]=i),e.setTexture2DArray(t||Er,i)}function Pl(n){switch(n){case 5126:return cl;case 35664:return ul;case 35665:return hl;case 35666:return dl;case 35674:return fl;case 35675:return pl;case 35676:return ml;case 5124:case 35670:return gl;case 35667:case 35671:return _l;case 35668:case 35672:return vl;case 35669:case 35673:return xl;case 5125:return Ml;case 36294:return Sl;case 36295:return El;case 36296:return yl;case 35678:case 36198:case 36298:case 36306:case 35682:return Tl;case 35679:case 36299:case 36307:return wl;case 35680:case 36300:case 36308:case 36293:return bl;case 36289:case 36303:case 36311:case 36292:return Rl}}function Dl(n,t){n.uniform1fv(this.addr,t)}function Cl(n,t){const e=BA(t,this.size,2);n.uniform2fv(this.addr,e)}function Ll(n,t){const e=BA(t,this.size,3);n.uniform3fv(this.addr,e)}function Il(n,t){const e=BA(t,this.size,4);n.uniform4fv(this.addr,e)}function Ul(n,t){const e=BA(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Fl(n,t){const e=BA(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Nl(n,t){const e=BA(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Bl(n,t){n.uniform1iv(this.addr,t)}function Ol(n,t){n.uniform2iv(this.addr,t)}function zl(n,t){n.uniform3iv(this.addr,t)}function Hl(n,t){n.uniform4iv(this.addr,t)}function Gl(n,t){n.uniform1uiv(this.addr,t)}function Vl(n,t){n.uniform2uiv(this.addr,t)}function kl(n,t){n.uniform3uiv(this.addr,t)}function Wl(n,t){n.uniform4uiv(this.addr,t)}function Xl(n,t,e){const A=this.cache,i=t.length,r=In(e,i);le(A,r)||(n.uniform1iv(this.addr,r),ce(A,r));for(let s=0;s!==i;++s)e.setTexture2D(t[s]||Mr,r[s])}function ql(n,t,e){const A=this.cache,i=t.length,r=In(e,i);le(A,r)||(n.uniform1iv(this.addr,r),ce(A,r));for(let s=0;s!==i;++s)e.setTexture3D(t[s]||yr,r[s])}function Yl(n,t,e){const A=this.cache,i=t.length,r=In(e,i);le(A,r)||(n.uniform1iv(this.addr,r),ce(A,r));for(let s=0;s!==i;++s)e.setTextureCube(t[s]||Tr,r[s])}function $l(n,t,e){const A=this.cache,i=t.length,r=In(e,i);le(A,r)||(n.uniform1iv(this.addr,r),ce(A,r));for(let s=0;s!==i;++s)e.setTexture2DArray(t[s]||Er,r[s])}function jl(n){switch(n){case 5126:return Dl;case 35664:return Cl;case 35665:return Ll;case 35666:return Il;case 35674:return Ul;case 35675:return Fl;case 35676:return Nl;case 5124:case 35670:return Bl;case 35667:case 35671:return Ol;case 35668:case 35672:return zl;case 35669:case 35673:return Hl;case 5125:return Gl;case 36294:return Vl;case 36295:return kl;case 36296:return Wl;case 35678:case 36198:case 36298:case 36306:case 35682:return Xl;case 35679:case 36299:case 36307:return ql;case 35680:case 36300:case 36308:case 36293:return Yl;case 36289:case 36303:case 36311:case 36292:return $l}}class Kl{constructor(t,e,A){this.id=t,this.addr=A,this.cache=[],this.type=e.type,this.setValue=Pl(e.type)}}class Zl{constructor(t,e,A){this.id=t,this.addr=A,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jl(e.type)}}class Ql{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,A){const i=this.seq;for(let r=0,s=i.length;r!==s;++r){const a=i[r];a.setValue(t,e[a.id],A)}}}const xi=/(\w+)(\])?(\[|\.)?/g;function Cr(n,t){n.seq.push(t),n.map[t.id]=t}function Jl(n,t,e){const A=n.name,i=A.length;for(xi.lastIndex=0;;){const r=xi.exec(A),s=xi.lastIndex;let a=r[1];const l=r[2]==="]",o=r[3];if(l&&(a=a|0),o===void 0||o==="["&&s+2===i){Cr(e,o===void 0?new Kl(a,n,t):new Zl(a,n,t));break}else{let c=e.map[a];c===void 0&&(c=new Ql(a),Cr(e,c)),e=c}}}class Un{constructor(t,e){this.seq=[],this.map={};const A=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let i=0;i<A;++i){const r=t.getActiveUniform(e,i),s=t.getUniformLocation(e,r.name);Jl(r,s,this)}}setValue(t,e,A,i){const r=this.map[e];r!==void 0&&r.setValue(t,A,i)}setOptional(t,e,A){const i=e[A];i!==void 0&&this.setValue(t,A,i)}static upload(t,e,A,i){for(let r=0,s=e.length;r!==s;++r){const a=e[r],l=A[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,i)}}static seqWithValue(t,e){const A=[];for(let i=0,r=t.length;i!==r;++i){const s=t[i];s.id in e&&A.push(s)}return A}}function Lr(n,t,e){const A=n.createShader(t);return n.shaderSource(A,e),n.compileShader(A),A}const tc=37297;let ec=0;function Ac(n,t){const e=n.split(`
`),A=[],i=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let s=i;s<r;s++){const a=s+1;A.push(`${a===t?">":" "} ${a}: ${e[s]}`)}return A.join(`
`)}const Ir=new Lt;function nc(n){Gt._getMatrix(Ir,Gt.workingColorSpace,n);const t=`mat3( ${Ir.elements.map(e=>e.toFixed(4))} )`;switch(Gt.getTransfer(n)){case rn:return[t,"LinearTransferOETF"];case qt:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Ur(n,t,e){const A=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(A&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return e.toUpperCase()+`

`+r+`

`+Ac(n.getShaderSource(t),a)}else return r}function ic(n,t){const e=nc(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function rc(n,t){let e;switch(t){case 1:e="Linear";break;case 2:e="Reinhard";break;case 3:e="Cineon";break;case 4:e="ACESFilmic";break;case 6:e="AgX";break;case 7:e="Neutral";break;case 5:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fn=new U;function sc(){Gt.getLuminanceCoefficients(Fn);const n=Fn.x.toFixed(4),t=Fn.y.toFixed(4),e=Fn.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function ac(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(JA).join(`
`)}function oc(n){const t=[];for(const e in n){const A=n[e];A!==!1&&t.push("#define "+e+" "+A)}return t.join(`
`)}function lc(n,t){const e={},A=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let i=0;i<A;i++){const r=n.getActiveAttrib(t,i),s=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[s]={type:r.type,location:n.getAttribLocation(t,s),locationSize:a}}return e}function JA(n){return n!==""}function Fr(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Nr(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const cc=/^[ \t]*#include +<([\w\d./]+)>/gm;function Mi(n){return n.replace(cc,hc)}const uc=new Map;function hc(n,t){let e=Ut[t];if(e===void 0){const A=uc.get(t);if(A!==void 0)e=Ut[A],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,A);else throw new Error("Can not resolve #include <"+t+">")}return Mi(e)}const dc=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Br(n){return n.replace(dc,fc)}function fc(n,t,e,A){let i="";for(let r=parseInt(t);r<parseInt(e);r++)i+=A.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Or(n){let t=`precision ${n.precision} float;
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
#define LOW_PRECISION`),t}function pc(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===1?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===2?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===3&&(t="SHADOWMAP_TYPE_VSM"),t}function mc(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case 301:case 302:t="ENVMAP_TYPE_CUBE";break;case 306:t="ENVMAP_TYPE_CUBE_UV";break}return t}function gc(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case 302:t="ENVMAP_MODE_REFRACTION";break}return t}function _c(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case 0:t="ENVMAP_BLENDING_MULTIPLY";break;case 1:t="ENVMAP_BLENDING_MIX";break;case 2:t="ENVMAP_BLENDING_ADD";break}return t}function vc(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,A=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:A,maxMip:e}}function xc(n,t,e,A){const i=n.getContext(),r=e.defines;let s=e.vertexShader,a=e.fragmentShader;const l=pc(e),o=mc(e),h=gc(e),c=_c(e),d=vc(e),p=ac(e),m=oc(r),_=i.createProgram();let f,u,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(JA).join(`
`),f.length>0&&(f+=`
`),u=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m].filter(JA).join(`
`),u.length>0&&(u+=`
`)):(f=[Or(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(JA).join(`
`),u=[Or(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,m,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+o:"",e.envMap?"#define "+h:"",e.envMap?"#define "+c:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==0?"#define TONE_MAPPING":"",e.toneMapping!==0?Ut.tonemapping_pars_fragment:"",e.toneMapping!==0?rc("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Ut.colorspace_pars_fragment,ic("linearToOutputTexel",e.outputColorSpace),sc(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(JA).join(`
`)),s=Mi(s),s=Fr(s,e),s=Nr(s,e),a=Mi(a),a=Fr(a,e),a=Nr(a,e),s=Br(s),a=Br(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,f=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+f,u=["#define varying in",e.glslVersion===wi?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===wi?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const T=w+f+s,S=w+u+a,P=Lr(i,i.VERTEX_SHADER,T),b=Lr(i,i.FRAGMENT_SHADER,S);i.attachShader(_,P),i.attachShader(_,b),e.index0AttributeName!==void 0?i.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function C(D){if(n.debug.checkShaderErrors){const z=i.getProgramInfoLog(_)||"",V=i.getShaderInfoLog(P)||"",X=i.getShaderInfoLog(b)||"",$=z.trim(),W=V.trim(),et=X.trim();let H=!0,rt=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(H=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(i,_,P,b);else{const lt=Ur(i,P,"vertex"),St=Ur(i,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+$+`
`+lt+`
`+St)}else $!==""?console.warn("THREE.WebGLProgram: Program Info Log:",$):(W===""||et==="")&&(rt=!1);rt&&(D.diagnostics={runnable:H,programLog:$,vertexShader:{log:W,prefix:f},fragmentShader:{log:et,prefix:u}})}i.deleteShader(P),i.deleteShader(b),N=new Un(i,_),M=lc(i,_)}let N;this.getUniforms=function(){return N===void 0&&C(this),N};let M;this.getAttributes=function(){return M===void 0&&C(this),M};let x=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=i.getProgramParameter(_,tc)),x},this.destroy=function(){A.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ec++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=P,this.fragmentShader=b,this}let Mc=0;class Sc{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,A=t.fragmentShader,i=this._getShaderStage(e),r=this._getShaderStage(A),s=this._getShaderCacheForMaterial(t);return s.has(i)===!1&&(s.add(i),i.usedTimes++),s.has(r)===!1&&(s.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const A of e)A.usedTimes--,A.usedTimes===0&&this.shaderCache.delete(A.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let A=e.get(t);return A===void 0&&(A=new Set,e.set(t,A)),A}_getShaderStage(t){const e=this.shaderCache;let A=e.get(t);return A===void 0&&(A=new Ec(t),e.set(t,A)),A}}class Ec{constructor(t){this.id=Mc++,this.code=t,this.usedTimes=0}}function yc(n,t,e,A,i,r,s){const a=new Fi,l=new Sc,o=new Set,h=[],c=i.logarithmicDepthBuffer,d=i.vertexTextures;let p=i.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(M){return o.add(M),M===0?"uv":`uv${M}`}function f(M,x,D,z,V){const X=z.fog,$=V.geometry,W=M.isMeshStandardMaterial?z.environment:null,et=(M.isMeshStandardMaterial?e:t).get(M.envMap||W),H=et&&et.mapping===306?et.image.height:null,rt=m[M.type];M.precision!==null&&(p=i.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const lt=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,St=lt!==void 0?lt.length:0;let Nt=0;$.morphAttributes.position!==void 0&&(Nt=1),$.morphAttributes.normal!==void 0&&(Nt=2),$.morphAttributes.color!==void 0&&(Nt=3);let jt,Qt,kt,q;if(rt){const Wt=Ge[rt];jt=Wt.vertexShader,Qt=Wt.fragmentShader}else jt=M.vertexShader,Qt=M.fragmentShader,l.update(M),kt=l.getVertexShaderID(M),q=l.getFragmentShaderID(M);const K=n.getRenderTarget(),ht=n.state.buffers.depth.getReversed(),Pt=V.isInstancedMesh===!0,Mt=V.isBatchedMesh===!0,Ht=!!M.map,ge=!!M.matcap,y=!!et,Jt=!!M.aoMap,Ct=!!M.lightMap,bt=!!M.bumpMap,pt=!!M.normalMap,te=!!M.displacementMap,mt=!!M.emissiveMap,Ft=!!M.metalnessMap,de=!!M.roughnessMap,se=M.anisotropy>0,E=M.clearcoat>0,g=M.dispersion>0,F=M.iridescence>0,k=M.sheen>0,j=M.transmission>0,G=se&&!!M.anisotropyMap,xt=E&&!!M.clearcoatMap,At=E&&!!M.clearcoatNormalMap,gt=E&&!!M.clearcoatRoughnessMap,_t=F&&!!M.iridescenceMap,J=F&&!!M.iridescenceThicknessMap,ot=k&&!!M.sheenColorMap,wt=k&&!!M.sheenRoughnessMap,vt=!!M.specularMap,st=!!M.specularColorMap,It=!!M.specularIntensityMap,R=j&&!!M.transmissionMap,tt=j&&!!M.thicknessMap,nt=!!M.gradientMap,ut=!!M.alphaMap,Z=M.alphaTest>0,Y=!!M.alphaHash,ft=!!M.extensions;let Dt=0;M.toneMapped&&(K===null||K.isXRRenderTarget===!0)&&(Dt=n.toneMapping);const Kt={shaderID:rt,shaderType:M.type,shaderName:M.name,vertexShader:jt,fragmentShader:Qt,defines:M.defines,customVertexShaderID:kt,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Mt,batchingColor:Mt&&V._colorsTexture!==null,instancing:Pt,instancingColor:Pt&&V.instanceColor!==null,instancingMorph:Pt&&V.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:K===null?n.outputColorSpace:K.isXRRenderTarget===!0?K.texture.colorSpace:_A,alphaToCoverage:!!M.alphaToCoverage,map:Ht,matcap:ge,envMap:y,envMapMode:y&&et.mapping,envMapCubeUVHeight:H,aoMap:Jt,lightMap:Ct,bumpMap:bt,normalMap:pt,displacementMap:d&&te,emissiveMap:mt,normalMapObjectSpace:pt&&M.normalMapType===1,normalMapTangentSpace:pt&&M.normalMapType===0,metalnessMap:Ft,roughnessMap:de,anisotropy:se,anisotropyMap:G,clearcoat:E,clearcoatMap:xt,clearcoatNormalMap:At,clearcoatRoughnessMap:gt,dispersion:g,iridescence:F,iridescenceMap:_t,iridescenceThicknessMap:J,sheen:k,sheenColorMap:ot,sheenRoughnessMap:wt,specularMap:vt,specularColorMap:st,specularIntensityMap:It,transmission:j,transmissionMap:R,thicknessMap:tt,gradientMap:nt,opaque:M.transparent===!1&&M.blending===1&&M.alphaToCoverage===!1,alphaMap:ut,alphaTest:Z,alphaHash:Y,combine:M.combine,mapUv:Ht&&_(M.map.channel),aoMapUv:Jt&&_(M.aoMap.channel),lightMapUv:Ct&&_(M.lightMap.channel),bumpMapUv:bt&&_(M.bumpMap.channel),normalMapUv:pt&&_(M.normalMap.channel),displacementMapUv:te&&_(M.displacementMap.channel),emissiveMapUv:mt&&_(M.emissiveMap.channel),metalnessMapUv:Ft&&_(M.metalnessMap.channel),roughnessMapUv:de&&_(M.roughnessMap.channel),anisotropyMapUv:G&&_(M.anisotropyMap.channel),clearcoatMapUv:xt&&_(M.clearcoatMap.channel),clearcoatNormalMapUv:At&&_(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:gt&&_(M.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(M.iridescenceMap.channel),iridescenceThicknessMapUv:J&&_(M.iridescenceThicknessMap.channel),sheenColorMapUv:ot&&_(M.sheenColorMap.channel),sheenRoughnessMapUv:wt&&_(M.sheenRoughnessMap.channel),specularMapUv:vt&&_(M.specularMap.channel),specularColorMapUv:st&&_(M.specularColorMap.channel),specularIntensityMapUv:It&&_(M.specularIntensityMap.channel),transmissionMapUv:R&&_(M.transmissionMap.channel),thicknessMapUv:tt&&_(M.thicknessMap.channel),alphaMapUv:ut&&_(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(pt||se),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:V.isPoints===!0&&!!$.attributes.uv&&(Ht||ut),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:c,reversedDepthBuffer:ht,skinning:V.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:St,morphTextureStride:Nt,numDirLights:x.directional.length,numPointLights:x.point.length,numSpotLights:x.spot.length,numSpotLightMaps:x.spotLightMap.length,numRectAreaLights:x.rectArea.length,numHemiLights:x.hemi.length,numDirLightShadows:x.directionalShadowMap.length,numPointLightShadows:x.pointShadowMap.length,numSpotLightShadows:x.spotShadowMap.length,numSpotLightShadowsWithMaps:x.numSpotLightShadowsWithMaps,numLightProbes:x.numLightProbes,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:Dt,decodeVideoTexture:Ht&&M.map.isVideoTexture===!0&&Gt.getTransfer(M.map.colorSpace)===qt,decodeVideoTextureEmissive:mt&&M.emissiveMap.isVideoTexture===!0&&Gt.getTransfer(M.emissiveMap.colorSpace)===qt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===2,flipSided:M.side===1,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ft&&M.extensions.clipCullDistance===!0&&A.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ft&&M.extensions.multiDraw===!0||Mt)&&A.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:A.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Kt.vertexUv1s=o.has(1),Kt.vertexUv2s=o.has(2),Kt.vertexUv3s=o.has(3),o.clear(),Kt}function u(M){const x=[];if(M.shaderID?x.push(M.shaderID):(x.push(M.customVertexShaderID),x.push(M.customFragmentShaderID)),M.defines!==void 0)for(const D in M.defines)x.push(D),x.push(M.defines[D]);return M.isRawShaderMaterial===!1&&(w(x,M),T(x,M),x.push(n.outputColorSpace)),x.push(M.customProgramCacheKey),x.join()}function w(M,x){M.push(x.precision),M.push(x.outputColorSpace),M.push(x.envMapMode),M.push(x.envMapCubeUVHeight),M.push(x.mapUv),M.push(x.alphaMapUv),M.push(x.lightMapUv),M.push(x.aoMapUv),M.push(x.bumpMapUv),M.push(x.normalMapUv),M.push(x.displacementMapUv),M.push(x.emissiveMapUv),M.push(x.metalnessMapUv),M.push(x.roughnessMapUv),M.push(x.anisotropyMapUv),M.push(x.clearcoatMapUv),M.push(x.clearcoatNormalMapUv),M.push(x.clearcoatRoughnessMapUv),M.push(x.iridescenceMapUv),M.push(x.iridescenceThicknessMapUv),M.push(x.sheenColorMapUv),M.push(x.sheenRoughnessMapUv),M.push(x.specularMapUv),M.push(x.specularColorMapUv),M.push(x.specularIntensityMapUv),M.push(x.transmissionMapUv),M.push(x.thicknessMapUv),M.push(x.combine),M.push(x.fogExp2),M.push(x.sizeAttenuation),M.push(x.morphTargetsCount),M.push(x.morphAttributeCount),M.push(x.numDirLights),M.push(x.numPointLights),M.push(x.numSpotLights),M.push(x.numSpotLightMaps),M.push(x.numHemiLights),M.push(x.numRectAreaLights),M.push(x.numDirLightShadows),M.push(x.numPointLightShadows),M.push(x.numSpotLightShadows),M.push(x.numSpotLightShadowsWithMaps),M.push(x.numLightProbes),M.push(x.shadowMapType),M.push(x.toneMapping),M.push(x.numClippingPlanes),M.push(x.numClipIntersection),M.push(x.depthPacking)}function T(M,x){a.disableAll(),x.supportsVertexTextures&&a.enable(0),x.instancing&&a.enable(1),x.instancingColor&&a.enable(2),x.instancingMorph&&a.enable(3),x.matcap&&a.enable(4),x.envMap&&a.enable(5),x.normalMapObjectSpace&&a.enable(6),x.normalMapTangentSpace&&a.enable(7),x.clearcoat&&a.enable(8),x.iridescence&&a.enable(9),x.alphaTest&&a.enable(10),x.vertexColors&&a.enable(11),x.vertexAlphas&&a.enable(12),x.vertexUv1s&&a.enable(13),x.vertexUv2s&&a.enable(14),x.vertexUv3s&&a.enable(15),x.vertexTangents&&a.enable(16),x.anisotropy&&a.enable(17),x.alphaHash&&a.enable(18),x.batching&&a.enable(19),x.dispersion&&a.enable(20),x.batchingColor&&a.enable(21),x.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),x.fog&&a.enable(0),x.useFog&&a.enable(1),x.flatShading&&a.enable(2),x.logarithmicDepthBuffer&&a.enable(3),x.reversedDepthBuffer&&a.enable(4),x.skinning&&a.enable(5),x.morphTargets&&a.enable(6),x.morphNormals&&a.enable(7),x.morphColors&&a.enable(8),x.premultipliedAlpha&&a.enable(9),x.shadowMapEnabled&&a.enable(10),x.doubleSided&&a.enable(11),x.flipSided&&a.enable(12),x.useDepthPacking&&a.enable(13),x.dithering&&a.enable(14),x.transmission&&a.enable(15),x.sheen&&a.enable(16),x.opaque&&a.enable(17),x.pointsUvs&&a.enable(18),x.decodeVideoTexture&&a.enable(19),x.decodeVideoTextureEmissive&&a.enable(20),x.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const x=m[M.type];let D;if(x){const z=Ge[x];D=Rs.clone(z.uniforms)}else D=M.uniforms;return D}function P(M,x){let D;for(let z=0,V=h.length;z<V;z++){const X=h[z];if(X.cacheKey===x){D=X,++D.usedTimes;break}}return D===void 0&&(D=new xc(n,x,M,r),h.push(D)),D}function b(M){if(--M.usedTimes===0){const x=h.indexOf(M);h[x]=h[h.length-1],h.pop(),M.destroy()}}function C(M){l.remove(M)}function N(){l.dispose()}return{getParameters:f,getProgramCacheKey:u,getUniforms:S,acquireProgram:P,releaseProgram:b,releaseShaderCache:C,programs:h,dispose:N}}function Tc(){let n=new WeakMap;function t(s){return n.has(s)}function e(s){let a=n.get(s);return a===void 0&&(a={},n.set(s,a)),a}function A(s){n.delete(s)}function i(s,a,l){n.get(s)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:A,update:i,dispose:r}}function wc(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function zr(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Hr(){const n=[];let t=0;const e=[],A=[],i=[];function r(){t=0,e.length=0,A.length=0,i.length=0}function s(c,d,p,m,_,f){let u=n[t];return u===void 0?(u={id:c.id,object:c,geometry:d,material:p,groupOrder:m,renderOrder:c.renderOrder,z:_,group:f},n[t]=u):(u.id=c.id,u.object=c,u.geometry=d,u.material=p,u.groupOrder=m,u.renderOrder=c.renderOrder,u.z=_,u.group=f),t++,u}function a(c,d,p,m,_,f){const u=s(c,d,p,m,_,f);p.transmission>0?A.push(u):p.transparent===!0?i.push(u):e.push(u)}function l(c,d,p,m,_,f){const u=s(c,d,p,m,_,f);p.transmission>0?A.unshift(u):p.transparent===!0?i.unshift(u):e.unshift(u)}function o(c,d){e.length>1&&e.sort(c||wc),A.length>1&&A.sort(d||zr),i.length>1&&i.sort(d||zr)}function h(){for(let c=t,d=n.length;c<d;c++){const p=n[c];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:e,transmissive:A,transparent:i,init:r,push:a,unshift:l,finish:h,sort:o}}function bc(){let n=new WeakMap;function t(A,i){const r=n.get(A);let s;return r===void 0?(s=new Hr,n.set(A,[s])):i>=r.length?(s=new Hr,r.push(s)):s=r[i],s}function e(){n=new WeakMap}return{get:t,dispose:e}}function Rc(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new zt};break;case"SpotLight":e={position:new U,direction:new U,color:new zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new zt,groundColor:new zt};break;case"RectAreaLight":e={color:new zt,position:new U,halfWidth:new U,halfHeight:new U};break}return n[t.id]=e,e}}}function Pc(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Xt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Dc=0;function Cc(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Lc(n){const t=new Rc,e=Pc(),A={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let o=0;o<9;o++)A.probe.push(new U);const i=new U,r=new re,s=new re;function a(o){let h=0,c=0,d=0;for(let M=0;M<9;M++)A.probe[M].set(0,0,0);let p=0,m=0,_=0,f=0,u=0,w=0,T=0,S=0,P=0,b=0,C=0;o.sort(Cc);for(let M=0,x=o.length;M<x;M++){const D=o[M],z=D.color,V=D.intensity,X=D.distance,$=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)h+=z.r*V,c+=z.g*V,d+=z.b*V;else if(D.isLightProbe){for(let W=0;W<9;W++)A.probe[W].addScaledVector(D.sh.coefficients[W],V);C++}else if(D.isDirectionalLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const et=D.shadow,H=e.get(D);H.shadowIntensity=et.intensity,H.shadowBias=et.bias,H.shadowNormalBias=et.normalBias,H.shadowRadius=et.radius,H.shadowMapSize=et.mapSize,A.directionalShadow[p]=H,A.directionalShadowMap[p]=$,A.directionalShadowMatrix[p]=D.shadow.matrix,w++}A.directional[p]=W,p++}else if(D.isSpotLight){const W=t.get(D);W.position.setFromMatrixPosition(D.matrixWorld),W.color.copy(z).multiplyScalar(V),W.distance=X,W.coneCos=Math.cos(D.angle),W.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),W.decay=D.decay,A.spot[_]=W;const et=D.shadow;if(D.map&&(A.spotLightMap[P]=D.map,P++,et.updateMatrices(D),D.castShadow&&b++),A.spotLightMatrix[_]=et.matrix,D.castShadow){const H=e.get(D);H.shadowIntensity=et.intensity,H.shadowBias=et.bias,H.shadowNormalBias=et.normalBias,H.shadowRadius=et.radius,H.shadowMapSize=et.mapSize,A.spotShadow[_]=H,A.spotShadowMap[_]=$,S++}_++}else if(D.isRectAreaLight){const W=t.get(D);W.color.copy(z).multiplyScalar(V),W.halfWidth.set(D.width*.5,0,0),W.halfHeight.set(0,D.height*.5,0),A.rectArea[f]=W,f++}else if(D.isPointLight){const W=t.get(D);if(W.color.copy(D.color).multiplyScalar(D.intensity),W.distance=D.distance,W.decay=D.decay,D.castShadow){const et=D.shadow,H=e.get(D);H.shadowIntensity=et.intensity,H.shadowBias=et.bias,H.shadowNormalBias=et.normalBias,H.shadowRadius=et.radius,H.shadowMapSize=et.mapSize,H.shadowCameraNear=et.camera.near,H.shadowCameraFar=et.camera.far,A.pointShadow[m]=H,A.pointShadowMap[m]=$,A.pointShadowMatrix[m]=D.shadow.matrix,T++}A.point[m]=W,m++}else if(D.isHemisphereLight){const W=t.get(D);W.skyColor.copy(D.color).multiplyScalar(V),W.groundColor.copy(D.groundColor).multiplyScalar(V),A.hemi[u]=W,u++}}f>0&&(n.has("OES_texture_float_linear")===!0?(A.rectAreaLTC1=it.LTC_FLOAT_1,A.rectAreaLTC2=it.LTC_FLOAT_2):(A.rectAreaLTC1=it.LTC_HALF_1,A.rectAreaLTC2=it.LTC_HALF_2)),A.ambient[0]=h,A.ambient[1]=c,A.ambient[2]=d;const N=A.hash;(N.directionalLength!==p||N.pointLength!==m||N.spotLength!==_||N.rectAreaLength!==f||N.hemiLength!==u||N.numDirectionalShadows!==w||N.numPointShadows!==T||N.numSpotShadows!==S||N.numSpotMaps!==P||N.numLightProbes!==C)&&(A.directional.length=p,A.spot.length=_,A.rectArea.length=f,A.point.length=m,A.hemi.length=u,A.directionalShadow.length=w,A.directionalShadowMap.length=w,A.pointShadow.length=T,A.pointShadowMap.length=T,A.spotShadow.length=S,A.spotShadowMap.length=S,A.directionalShadowMatrix.length=w,A.pointShadowMatrix.length=T,A.spotLightMatrix.length=S+P-b,A.spotLightMap.length=P,A.numSpotLightShadowsWithMaps=b,A.numLightProbes=C,N.directionalLength=p,N.pointLength=m,N.spotLength=_,N.rectAreaLength=f,N.hemiLength=u,N.numDirectionalShadows=w,N.numPointShadows=T,N.numSpotShadows=S,N.numSpotMaps=P,N.numLightProbes=C,A.version=Dc++)}function l(o,h){let c=0,d=0,p=0,m=0,_=0;const f=h.matrixWorldInverse;for(let u=0,w=o.length;u<w;u++){const T=o[u];if(T.isDirectionalLight){const S=A.directional[c];S.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(f),c++}else if(T.isSpotLight){const S=A.spot[p];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(T.matrixWorld),i.setFromMatrixPosition(T.target.matrixWorld),S.direction.sub(i),S.direction.transformDirection(f),p++}else if(T.isRectAreaLight){const S=A.rectArea[m];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(f),s.identity(),r.copy(T.matrixWorld),r.premultiply(f),s.extractRotation(r),S.halfWidth.set(T.width*.5,0,0),S.halfHeight.set(0,T.height*.5,0),S.halfWidth.applyMatrix4(s),S.halfHeight.applyMatrix4(s),m++}else if(T.isPointLight){const S=A.point[d];S.position.setFromMatrixPosition(T.matrixWorld),S.position.applyMatrix4(f),d++}else if(T.isHemisphereLight){const S=A.hemi[_];S.direction.setFromMatrixPosition(T.matrixWorld),S.direction.transformDirection(f),_++}}}return{setup:a,setupView:l,state:A}}function Gr(n){const t=new Lc(n),e=[],A=[];function i(h){o.camera=h,e.length=0,A.length=0}function r(h){e.push(h)}function s(h){A.push(h)}function a(){t.setup(e)}function l(h){t.setupView(e,h)}const o={lightsArray:e,shadowsArray:A,camera:null,lights:t,transmissionRenderTarget:{}};return{init:i,state:o,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:s}}function Ic(n){let t=new WeakMap;function e(i,r=0){const s=t.get(i);let a;return s===void 0?(a=new Gr(n),t.set(i,[a])):r>=s.length?(a=new Gr(n),s.push(a)):a=s[r],a}function A(){t=new WeakMap}return{get:e,dispose:A}}const Uc=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Fc=`uniform sampler2D shadow_pass;
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
}`;function Nc(n,t,e){let A=new tr;const i=new Xt,r=new Xt,s=new ie,a=new Vs({depthPacking:3201}),l=new ks,o={},h=e.maxTextureSize,c={0:1,1:0,2:2},d=new ze({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Xt},radius:{value:4}},vertexShader:Uc,fragmentShader:Fc}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const m=new we;m.setAttribute("position",new oe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Oe(m,d),f=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=1;let u=this.type;this.render=function(b,C,N){if(f.enabled===!1||f.autoUpdate===!1&&f.needsUpdate===!1||b.length===0)return;const M=n.getRenderTarget(),x=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),z=n.state;z.setBlending(0),z.buffers.depth.getReversed()===!0?z.buffers.color.setClear(0,0,0,0):z.buffers.color.setClear(1,1,1,1),z.buffers.depth.setTest(!0),z.setScissorTest(!1);const V=u!==3&&this.type===3,X=u===3&&this.type!==3;for(let $=0,W=b.length;$<W;$++){const et=b[$],H=et.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",et,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;i.copy(H.mapSize);const rt=H.getFrameExtents();if(i.multiply(rt),r.copy(H.mapSize),(i.x>h||i.y>h)&&(i.x>h&&(r.x=Math.floor(h/rt.x),i.x=r.x*rt.x,H.mapSize.x=r.x),i.y>h&&(r.y=Math.floor(h/rt.y),i.y=r.y*rt.y,H.mapSize.y=r.y)),H.map===null||V===!0||X===!0){const St=this.type!==3?{minFilter:1003,magFilter:1003}:{};H.map!==null&&H.map.dispose(),H.map=new sA(i.x,i.y,St),H.map.texture.name=et.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const lt=H.getViewportCount();for(let St=0;St<lt;St++){const Nt=H.getViewport(St);s.set(r.x*Nt.x,r.y*Nt.y,r.x*Nt.z,r.y*Nt.w),z.viewport(s),H.updateMatrices(et,St),A=H.getFrustum(),S(C,N,H.camera,et,this.type)}H.isPointLightShadow!==!0&&this.type===3&&w(H,N),H.needsUpdate=!1}u=this.type,f.needsUpdate=!1,n.setRenderTarget(M,x,D)};function w(b,C){const N=t.update(_);d.defines.VSM_SAMPLES!==b.blurSamples&&(d.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new sA(i.x,i.y)),d.uniforms.shadow_pass.value=b.map.texture,d.uniforms.resolution.value=b.mapSize,d.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(C,null,N,d,_,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(C,null,N,p,_,null)}function T(b,C,N,M){let x=null;const D=N.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(D!==void 0)x=D;else if(x=N.isPointLight===!0?l:a,n.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0||C.alphaToCoverage===!0){const z=x.uuid,V=C.uuid;let X=o[z];X===void 0&&(X={},o[z]=X);let $=X[V];$===void 0&&($=x.clone(),X[V]=$,C.addEventListener("dispose",P)),x=$}if(x.visible=C.visible,x.wireframe=C.wireframe,M===3?x.side=C.shadowSide!==null?C.shadowSide:C.side:x.side=C.shadowSide!==null?C.shadowSide:c[C.side],x.alphaMap=C.alphaMap,x.alphaTest=C.alphaToCoverage===!0?.5:C.alphaTest,x.map=C.map,x.clipShadows=C.clipShadows,x.clippingPlanes=C.clippingPlanes,x.clipIntersection=C.clipIntersection,x.displacementMap=C.displacementMap,x.displacementScale=C.displacementScale,x.displacementBias=C.displacementBias,x.wireframeLinewidth=C.wireframeLinewidth,x.linewidth=C.linewidth,N.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const z=n.properties.get(x);z.light=N}return x}function S(b,C,N,M,x){if(b.visible===!1)return;if(b.layers.test(C.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&x===3)&&(!b.frustumCulled||A.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(N.matrixWorldInverse,b.matrixWorld);const V=t.update(b),X=b.material;if(Array.isArray(X)){const $=V.groups;for(let W=0,et=$.length;W<et;W++){const H=$[W],rt=X[H.materialIndex];if(rt&&rt.visible){const lt=T(b,rt,M,x);b.onBeforeShadow(n,b,C,N,V,lt,H),n.renderBufferDirect(N,null,V,lt,b,H),b.onAfterShadow(n,b,C,N,V,lt,H)}}}else if(X.visible){const $=T(b,X,M,x);b.onBeforeShadow(n,b,C,N,V,$,null),n.renderBufferDirect(N,null,V,$,b,null),b.onAfterShadow(n,b,C,N,V,$,null)}}const z=b.children;for(let V=0,X=z.length;V<X;V++)S(z[V],C,N,M,x)}function P(b){b.target.removeEventListener("dispose",P);for(const N in o){const M=o[N],x=b.target.uuid;x in M&&(M[x].dispose(),delete M[x])}}}const Bc={0:1,2:6,4:7,3:5,1:0,6:2,7:4,5:3};function Oc(n,t){function e(){let R=!1;const tt=new ie;let nt=null;const ut=new ie(0,0,0,0);return{setMask:function(Z){nt!==Z&&!R&&(n.colorMask(Z,Z,Z,Z),nt=Z)},setLocked:function(Z){R=Z},setClear:function(Z,Y,ft,Dt,Kt){Kt===!0&&(Z*=Dt,Y*=Dt,ft*=Dt),tt.set(Z,Y,ft,Dt),ut.equals(tt)===!1&&(n.clearColor(Z,Y,ft,Dt),ut.copy(tt))},reset:function(){R=!1,nt=null,ut.set(-1,0,0,0)}}}function A(){let R=!1,tt=!1,nt=null,ut=null,Z=null;return{setReversed:function(Y){if(tt!==Y){const ft=t.get("EXT_clip_control");Y?ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.ZERO_TO_ONE_EXT):ft.clipControlEXT(ft.LOWER_LEFT_EXT,ft.NEGATIVE_ONE_TO_ONE_EXT),tt=Y;const Dt=Z;Z=null,this.setClear(Dt)}},getReversed:function(){return tt},setTest:function(Y){Y?K(n.DEPTH_TEST):ht(n.DEPTH_TEST)},setMask:function(Y){nt!==Y&&!R&&(n.depthMask(Y),nt=Y)},setFunc:function(Y){if(tt&&(Y=Bc[Y]),ut!==Y){switch(Y){case 0:n.depthFunc(n.NEVER);break;case 1:n.depthFunc(n.ALWAYS);break;case 2:n.depthFunc(n.LESS);break;case 3:n.depthFunc(n.LEQUAL);break;case 4:n.depthFunc(n.EQUAL);break;case 5:n.depthFunc(n.GEQUAL);break;case 6:n.depthFunc(n.GREATER);break;case 7:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}ut=Y}},setLocked:function(Y){R=Y},setClear:function(Y){Z!==Y&&(tt&&(Y=1-Y),n.clearDepth(Y),Z=Y)},reset:function(){R=!1,nt=null,ut=null,Z=null,tt=!1}}}function i(){let R=!1,tt=null,nt=null,ut=null,Z=null,Y=null,ft=null,Dt=null,Kt=null;return{setTest:function(Wt){R||(Wt?K(n.STENCIL_TEST):ht(n.STENCIL_TEST))},setMask:function(Wt){tt!==Wt&&!R&&(n.stencilMask(Wt),tt=Wt)},setFunc:function(Wt,Qe,Ve){(nt!==Wt||ut!==Qe||Z!==Ve)&&(n.stencilFunc(Wt,Qe,Ve),nt=Wt,ut=Qe,Z=Ve)},setOp:function(Wt,Qe,Ve){(Y!==Wt||ft!==Qe||Dt!==Ve)&&(n.stencilOp(Wt,Qe,Ve),Y=Wt,ft=Qe,Dt=Ve)},setLocked:function(Wt){R=Wt},setClear:function(Wt){Kt!==Wt&&(n.clearStencil(Wt),Kt=Wt)},reset:function(){R=!1,tt=null,nt=null,ut=null,Z=null,Y=null,ft=null,Dt=null,Kt=null}}}const r=new e,s=new A,a=new i,l=new WeakMap,o=new WeakMap;let h={},c={},d=new WeakMap,p=[],m=null,_=!1,f=null,u=null,w=null,T=null,S=null,P=null,b=null,C=new zt(0,0,0),N=0,M=!1,x=null,D=null,z=null,V=null,X=null;const $=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let W=!1,et=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(et=parseFloat(/^WebGL (\d)/.exec(H)[1]),W=et>=1):H.indexOf("OpenGL ES")!==-1&&(et=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),W=et>=2);let rt=null,lt={};const St=n.getParameter(n.SCISSOR_BOX),Nt=n.getParameter(n.VIEWPORT),jt=new ie().fromArray(St),Qt=new ie().fromArray(Nt);function kt(R,tt,nt,ut){const Z=new Uint8Array(4),Y=n.createTexture();n.bindTexture(R,Y),n.texParameteri(R,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(R,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let ft=0;ft<nt;ft++)R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY?n.texImage3D(tt,0,n.RGBA,1,1,ut,0,n.RGBA,n.UNSIGNED_BYTE,Z):n.texImage2D(tt+ft,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Z);return Y}const q={};q[n.TEXTURE_2D]=kt(n.TEXTURE_2D,n.TEXTURE_2D,1),q[n.TEXTURE_CUBE_MAP]=kt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[n.TEXTURE_2D_ARRAY]=kt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),q[n.TEXTURE_3D]=kt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),K(n.DEPTH_TEST),s.setFunc(3),bt(!1),pt(1),K(n.CULL_FACE),Jt(0);function K(R){h[R]!==!0&&(n.enable(R),h[R]=!0)}function ht(R){h[R]!==!1&&(n.disable(R),h[R]=!1)}function Pt(R,tt){return c[R]!==tt?(n.bindFramebuffer(R,tt),c[R]=tt,R===n.DRAW_FRAMEBUFFER&&(c[n.FRAMEBUFFER]=tt),R===n.FRAMEBUFFER&&(c[n.DRAW_FRAMEBUFFER]=tt),!0):!1}function Mt(R,tt){let nt=p,ut=!1;if(R){nt=d.get(tt),nt===void 0&&(nt=[],d.set(tt,nt));const Z=R.textures;if(nt.length!==Z.length||nt[0]!==n.COLOR_ATTACHMENT0){for(let Y=0,ft=Z.length;Y<ft;Y++)nt[Y]=n.COLOR_ATTACHMENT0+Y;nt.length=Z.length,ut=!0}}else nt[0]!==n.BACK&&(nt[0]=n.BACK,ut=!0);ut&&n.drawBuffers(nt)}function Ht(R){return m!==R?(n.useProgram(R),m=R,!0):!1}const ge={100:n.FUNC_ADD,101:n.FUNC_SUBTRACT,102:n.FUNC_REVERSE_SUBTRACT};ge[103]=n.MIN,ge[104]=n.MAX;const y={200:n.ZERO,201:n.ONE,202:n.SRC_COLOR,204:n.SRC_ALPHA,210:n.SRC_ALPHA_SATURATE,208:n.DST_COLOR,206:n.DST_ALPHA,203:n.ONE_MINUS_SRC_COLOR,205:n.ONE_MINUS_SRC_ALPHA,209:n.ONE_MINUS_DST_COLOR,207:n.ONE_MINUS_DST_ALPHA,211:n.CONSTANT_COLOR,212:n.ONE_MINUS_CONSTANT_COLOR,213:n.CONSTANT_ALPHA,214:n.ONE_MINUS_CONSTANT_ALPHA};function Jt(R,tt,nt,ut,Z,Y,ft,Dt,Kt,Wt){if(R===0){_===!0&&(ht(n.BLEND),_=!1);return}if(_===!1&&(K(n.BLEND),_=!0),R!==5){if(R!==f||Wt!==M){if((u!==100||S!==100)&&(n.blendEquation(n.FUNC_ADD),u=100,S=100),Wt)switch(R){case 1:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFunc(n.ONE,n.ONE);break;case 3:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case 4:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}else switch(R){case 1:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case 2:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case 3:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case 4:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",R);break}w=null,T=null,P=null,b=null,C.set(0,0,0),N=0,f=R,M=Wt}return}Z=Z||tt,Y=Y||nt,ft=ft||ut,(tt!==u||Z!==S)&&(n.blendEquationSeparate(ge[tt],ge[Z]),u=tt,S=Z),(nt!==w||ut!==T||Y!==P||ft!==b)&&(n.blendFuncSeparate(y[nt],y[ut],y[Y],y[ft]),w=nt,T=ut,P=Y,b=ft),(Dt.equals(C)===!1||Kt!==N)&&(n.blendColor(Dt.r,Dt.g,Dt.b,Kt),C.copy(Dt),N=Kt),f=R,M=!1}function Ct(R,tt){R.side===2?ht(n.CULL_FACE):K(n.CULL_FACE);let nt=R.side===1;tt&&(nt=!nt),bt(nt),R.blending===1&&R.transparent===!1?Jt(0):Jt(R.blending,R.blendEquation,R.blendSrc,R.blendDst,R.blendEquationAlpha,R.blendSrcAlpha,R.blendDstAlpha,R.blendColor,R.blendAlpha,R.premultipliedAlpha),s.setFunc(R.depthFunc),s.setTest(R.depthTest),s.setMask(R.depthWrite),r.setMask(R.colorWrite);const ut=R.stencilWrite;a.setTest(ut),ut&&(a.setMask(R.stencilWriteMask),a.setFunc(R.stencilFunc,R.stencilRef,R.stencilFuncMask),a.setOp(R.stencilFail,R.stencilZFail,R.stencilZPass)),mt(R.polygonOffset,R.polygonOffsetFactor,R.polygonOffsetUnits),R.alphaToCoverage===!0?K(n.SAMPLE_ALPHA_TO_COVERAGE):ht(n.SAMPLE_ALPHA_TO_COVERAGE)}function bt(R){x!==R&&(R?n.frontFace(n.CW):n.frontFace(n.CCW),x=R)}function pt(R){R!==0?(K(n.CULL_FACE),R!==D&&(R===1?n.cullFace(n.BACK):R===2?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):ht(n.CULL_FACE),D=R}function te(R){R!==z&&(W&&n.lineWidth(R),z=R)}function mt(R,tt,nt){R?(K(n.POLYGON_OFFSET_FILL),(V!==tt||X!==nt)&&(n.polygonOffset(tt,nt),V=tt,X=nt)):ht(n.POLYGON_OFFSET_FILL)}function Ft(R){R?K(n.SCISSOR_TEST):ht(n.SCISSOR_TEST)}function de(R){R===void 0&&(R=n.TEXTURE0+$-1),rt!==R&&(n.activeTexture(R),rt=R)}function se(R,tt,nt){nt===void 0&&(rt===null?nt=n.TEXTURE0+$-1:nt=rt);let ut=lt[nt];ut===void 0&&(ut={type:void 0,texture:void 0},lt[nt]=ut),(ut.type!==R||ut.texture!==tt)&&(rt!==nt&&(n.activeTexture(nt),rt=nt),n.bindTexture(R,tt||q[R]),ut.type=R,ut.texture=tt)}function E(){const R=lt[rt];R!==void 0&&R.type!==void 0&&(n.bindTexture(R.type,null),R.type=void 0,R.texture=void 0)}function g(){try{n.compressedTexImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function F(){try{n.compressedTexImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function k(){try{n.texSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function j(){try{n.texSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function G(){try{n.compressedTexSubImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function xt(){try{n.compressedTexSubImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function At(){try{n.texStorage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function gt(){try{n.texStorage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function _t(){try{n.texImage2D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function J(){try{n.texImage3D(...arguments)}catch(R){console.error("THREE.WebGLState:",R)}}function ot(R){jt.equals(R)===!1&&(n.scissor(R.x,R.y,R.z,R.w),jt.copy(R))}function wt(R){Qt.equals(R)===!1&&(n.viewport(R.x,R.y,R.z,R.w),Qt.copy(R))}function vt(R,tt){let nt=o.get(tt);nt===void 0&&(nt=new WeakMap,o.set(tt,nt));let ut=nt.get(R);ut===void 0&&(ut=n.getUniformBlockIndex(tt,R.name),nt.set(R,ut))}function st(R,tt){const ut=o.get(tt).get(R);l.get(tt)!==ut&&(n.uniformBlockBinding(tt,ut,R.__bindingPointIndex),l.set(tt,ut))}function It(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),s.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},rt=null,lt={},c={},d=new WeakMap,p=[],m=null,_=!1,f=null,u=null,w=null,T=null,S=null,P=null,b=null,C=new zt(0,0,0),N=0,M=!1,x=null,D=null,z=null,V=null,X=null,jt.set(0,0,n.canvas.width,n.canvas.height),Qt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:K,disable:ht,bindFramebuffer:Pt,drawBuffers:Mt,useProgram:Ht,setBlending:Jt,setMaterial:Ct,setFlipSided:bt,setCullFace:pt,setLineWidth:te,setPolygonOffset:mt,setScissorTest:Ft,activeTexture:de,bindTexture:se,unbindTexture:E,compressedTexImage2D:g,compressedTexImage3D:F,texImage2D:_t,texImage3D:J,updateUBOMapping:vt,uniformBlockBinding:st,texStorage2D:At,texStorage3D:gt,texSubImage2D:k,texSubImage3D:j,compressedTexSubImage2D:G,compressedTexSubImage3D:xt,scissor:ot,viewport:wt,reset:It}}function zc(n,t,e,A,i,r,s){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),o=new Xt,h=new WeakMap;let c;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function m(E,g){return p?new OffscreenCanvas(E,g):sn("canvas")}function _(E,g,F){let k=1;const j=se(E);if((j.width>F||j.height>F)&&(k=F/Math.max(j.width,j.height)),k<1)if(typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&E instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&E instanceof ImageBitmap||typeof VideoFrame<"u"&&E instanceof VideoFrame){const G=Math.floor(k*j.width),xt=Math.floor(k*j.height);c===void 0&&(c=m(G,xt));const At=g?m(G,xt):c;return At.width=G,At.height=xt,At.getContext("2d").drawImage(E,0,0,G,xt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+G+"x"+xt+")."),At}else return"data"in E&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),E;return E}function f(E){return E.generateMipmaps}function u(E){n.generateMipmap(E)}function w(E){return E.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:E.isWebGL3DRenderTarget?n.TEXTURE_3D:E.isWebGLArrayRenderTarget||E.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function T(E,g,F,k,j=!1){if(E!==null){if(n[E]!==void 0)return n[E];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+E+"'")}let G=g;if(g===n.RED&&(F===n.FLOAT&&(G=n.R32F),F===n.HALF_FLOAT&&(G=n.R16F),F===n.UNSIGNED_BYTE&&(G=n.R8)),g===n.RED_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.R8UI),F===n.UNSIGNED_SHORT&&(G=n.R16UI),F===n.UNSIGNED_INT&&(G=n.R32UI),F===n.BYTE&&(G=n.R8I),F===n.SHORT&&(G=n.R16I),F===n.INT&&(G=n.R32I)),g===n.RG&&(F===n.FLOAT&&(G=n.RG32F),F===n.HALF_FLOAT&&(G=n.RG16F),F===n.UNSIGNED_BYTE&&(G=n.RG8)),g===n.RG_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RG8UI),F===n.UNSIGNED_SHORT&&(G=n.RG16UI),F===n.UNSIGNED_INT&&(G=n.RG32UI),F===n.BYTE&&(G=n.RG8I),F===n.SHORT&&(G=n.RG16I),F===n.INT&&(G=n.RG32I)),g===n.RGB_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RGB8UI),F===n.UNSIGNED_SHORT&&(G=n.RGB16UI),F===n.UNSIGNED_INT&&(G=n.RGB32UI),F===n.BYTE&&(G=n.RGB8I),F===n.SHORT&&(G=n.RGB16I),F===n.INT&&(G=n.RGB32I)),g===n.RGBA_INTEGER&&(F===n.UNSIGNED_BYTE&&(G=n.RGBA8UI),F===n.UNSIGNED_SHORT&&(G=n.RGBA16UI),F===n.UNSIGNED_INT&&(G=n.RGBA32UI),F===n.BYTE&&(G=n.RGBA8I),F===n.SHORT&&(G=n.RGBA16I),F===n.INT&&(G=n.RGBA32I)),g===n.RGB&&(F===n.UNSIGNED_INT_5_9_9_9_REV&&(G=n.RGB9_E5),F===n.UNSIGNED_INT_10F_11F_11F_REV&&(G=n.R11F_G11F_B10F)),g===n.RGBA){const xt=j?rn:Gt.getTransfer(k);F===n.FLOAT&&(G=n.RGBA32F),F===n.HALF_FLOAT&&(G=n.RGBA16F),F===n.UNSIGNED_BYTE&&(G=xt===qt?n.SRGB8_ALPHA8:n.RGBA8),F===n.UNSIGNED_SHORT_4_4_4_4&&(G=n.RGBA4),F===n.UNSIGNED_SHORT_5_5_5_1&&(G=n.RGB5_A1)}return(G===n.R16F||G===n.R32F||G===n.RG16F||G===n.RG32F||G===n.RGBA16F||G===n.RGBA32F)&&t.get("EXT_color_buffer_float"),G}function S(E,g){let F;return E?g===null||g===1014||g===1020?F=n.DEPTH24_STENCIL8:g===1015?F=n.DEPTH32F_STENCIL8:g===1012&&(F=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===1014||g===1020?F=n.DEPTH_COMPONENT24:g===1015?F=n.DEPTH_COMPONENT32F:g===1012&&(F=n.DEPTH_COMPONENT16),F}function P(E,g){return f(E)===!0||E.isFramebufferTexture&&E.minFilter!==1003&&E.minFilter!==1006?Math.log2(Math.max(g.width,g.height))+1:E.mipmaps!==void 0&&E.mipmaps.length>0?E.mipmaps.length:E.isCompressedTexture&&Array.isArray(E.image)?g.mipmaps.length:1}function b(E){const g=E.target;g.removeEventListener("dispose",b),N(g),g.isVideoTexture&&h.delete(g)}function C(E){const g=E.target;g.removeEventListener("dispose",C),x(g)}function N(E){const g=A.get(E);if(g.__webglInit===void 0)return;const F=E.source,k=d.get(F);if(k){const j=k[g.__cacheKey];j.usedTimes--,j.usedTimes===0&&M(E),Object.keys(k).length===0&&d.delete(F)}A.remove(E)}function M(E){const g=A.get(E);n.deleteTexture(g.__webglTexture);const F=E.source,k=d.get(F);delete k[g.__cacheKey],s.memory.textures--}function x(E){const g=A.get(E);if(E.depthTexture&&(E.depthTexture.dispose(),A.remove(E.depthTexture)),E.isWebGLCubeRenderTarget)for(let k=0;k<6;k++){if(Array.isArray(g.__webglFramebuffer[k]))for(let j=0;j<g.__webglFramebuffer[k].length;j++)n.deleteFramebuffer(g.__webglFramebuffer[k][j]);else n.deleteFramebuffer(g.__webglFramebuffer[k]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[k])}else{if(Array.isArray(g.__webglFramebuffer))for(let k=0;k<g.__webglFramebuffer.length;k++)n.deleteFramebuffer(g.__webglFramebuffer[k]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let k=0;k<g.__webglColorRenderbuffer.length;k++)g.__webglColorRenderbuffer[k]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[k]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const F=E.textures;for(let k=0,j=F.length;k<j;k++){const G=A.get(F[k]);G.__webglTexture&&(n.deleteTexture(G.__webglTexture),s.memory.textures--),A.remove(F[k])}A.remove(E)}let D=0;function z(){D=0}function V(){const E=D;return E>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+E+" texture units while this GPU supports only "+i.maxTextures),D+=1,E}function X(E){const g=[];return g.push(E.wrapS),g.push(E.wrapT),g.push(E.wrapR||0),g.push(E.magFilter),g.push(E.minFilter),g.push(E.anisotropy),g.push(E.internalFormat),g.push(E.format),g.push(E.type),g.push(E.generateMipmaps),g.push(E.premultiplyAlpha),g.push(E.flipY),g.push(E.unpackAlignment),g.push(E.colorSpace),g.join()}function $(E,g){const F=A.get(E);if(E.isVideoTexture&&Ft(E),E.isRenderTargetTexture===!1&&E.isExternalTexture!==!0&&E.version>0&&F.__version!==E.version){const k=E.image;if(k===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(k.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{q(F,E,g);return}}else E.isExternalTexture&&(F.__webglTexture=E.sourceTexture?E.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,F.__webglTexture,n.TEXTURE0+g)}function W(E,g){const F=A.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){q(F,E,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,F.__webglTexture,n.TEXTURE0+g)}function et(E,g){const F=A.get(E);if(E.isRenderTargetTexture===!1&&E.version>0&&F.__version!==E.version){q(F,E,g);return}e.bindTexture(n.TEXTURE_3D,F.__webglTexture,n.TEXTURE0+g)}function H(E,g){const F=A.get(E);if(E.version>0&&F.__version!==E.version){K(F,E,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,F.__webglTexture,n.TEXTURE0+g)}const rt={1e3:n.REPEAT,1001:n.CLAMP_TO_EDGE,1002:n.MIRRORED_REPEAT},lt={1003:n.NEAREST,1004:n.NEAREST_MIPMAP_NEAREST,1005:n.NEAREST_MIPMAP_LINEAR,1006:n.LINEAR,1007:n.LINEAR_MIPMAP_NEAREST,1008:n.LINEAR_MIPMAP_LINEAR},St={512:n.NEVER,519:n.ALWAYS,513:n.LESS,515:n.LEQUAL,514:n.EQUAL,518:n.GEQUAL,516:n.GREATER,517:n.NOTEQUAL};function Nt(E,g){if(g.type===1015&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===1006||g.magFilter===1007||g.magFilter===1005||g.magFilter===1008||g.minFilter===1006||g.minFilter===1007||g.minFilter===1005||g.minFilter===1008)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(E,n.TEXTURE_WRAP_S,rt[g.wrapS]),n.texParameteri(E,n.TEXTURE_WRAP_T,rt[g.wrapT]),(E===n.TEXTURE_3D||E===n.TEXTURE_2D_ARRAY)&&n.texParameteri(E,n.TEXTURE_WRAP_R,rt[g.wrapR]),n.texParameteri(E,n.TEXTURE_MAG_FILTER,lt[g.magFilter]),n.texParameteri(E,n.TEXTURE_MIN_FILTER,lt[g.minFilter]),g.compareFunction&&(n.texParameteri(E,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(E,n.TEXTURE_COMPARE_FUNC,St[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===1003||g.minFilter!==1005&&g.minFilter!==1008||g.type===1015&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||A.get(g).__currentAnisotropy){const F=t.get("EXT_texture_filter_anisotropic");n.texParameterf(E,F.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,i.getMaxAnisotropy())),A.get(g).__currentAnisotropy=g.anisotropy}}}function jt(E,g){let F=!1;E.__webglInit===void 0&&(E.__webglInit=!0,g.addEventListener("dispose",b));const k=g.source;let j=d.get(k);j===void 0&&(j={},d.set(k,j));const G=X(g);if(G!==E.__cacheKey){j[G]===void 0&&(j[G]={texture:n.createTexture(),usedTimes:0},s.memory.textures++,F=!0),j[G].usedTimes++;const xt=j[E.__cacheKey];xt!==void 0&&(j[E.__cacheKey].usedTimes--,xt.usedTimes===0&&M(g)),E.__cacheKey=G,E.__webglTexture=j[G].texture}return F}function Qt(E,g,F){return Math.floor(Math.floor(E/F)/g)}function kt(E,g,F,k){const G=E.updateRanges;if(G.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,g.width,g.height,F,k,g.data);else{G.sort((J,ot)=>J.start-ot.start);let xt=0;for(let J=1;J<G.length;J++){const ot=G[xt],wt=G[J],vt=ot.start+ot.count,st=Qt(wt.start,g.width,4),It=Qt(ot.start,g.width,4);wt.start<=vt+1&&st===It&&Qt(wt.start+wt.count-1,g.width,4)===st?ot.count=Math.max(ot.count,wt.start+wt.count-ot.start):(++xt,G[xt]=wt)}G.length=xt+1;const At=n.getParameter(n.UNPACK_ROW_LENGTH),gt=n.getParameter(n.UNPACK_SKIP_PIXELS),_t=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,g.width);for(let J=0,ot=G.length;J<ot;J++){const wt=G[J],vt=Math.floor(wt.start/4),st=Math.ceil(wt.count/4),It=vt%g.width,R=Math.floor(vt/g.width),tt=st,nt=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,It),n.pixelStorei(n.UNPACK_SKIP_ROWS,R),e.texSubImage2D(n.TEXTURE_2D,0,It,R,tt,nt,F,k,g.data)}E.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,At),n.pixelStorei(n.UNPACK_SKIP_PIXELS,gt),n.pixelStorei(n.UNPACK_SKIP_ROWS,_t)}}function q(E,g,F){let k=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(k=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(k=n.TEXTURE_3D);const j=jt(E,g),G=g.source;e.bindTexture(k,E.__webglTexture,n.TEXTURE0+F);const xt=A.get(G);if(G.version!==xt.__version||j===!0){e.activeTexture(n.TEXTURE0+F);const At=Gt.getPrimaries(Gt.workingColorSpace),gt=g.colorSpace===""?null:Gt.getPrimaries(g.colorSpace),_t=g.colorSpace===""||At===gt?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_t);let J=_(g.image,!1,i.maxTextureSize);J=de(g,J);const ot=r.convert(g.format,g.colorSpace),wt=r.convert(g.type);let vt=T(g.internalFormat,ot,wt,g.colorSpace,g.isVideoTexture);Nt(k,g);let st;const It=g.mipmaps,R=g.isVideoTexture!==!0,tt=xt.__version===void 0||j===!0,nt=G.dataReady,ut=P(g,J);if(g.isDepthTexture)vt=S(g.format===1027,g.type),tt&&(R?e.texStorage2D(n.TEXTURE_2D,1,vt,J.width,J.height):e.texImage2D(n.TEXTURE_2D,0,vt,J.width,J.height,0,ot,wt,null));else if(g.isDataTexture)if(It.length>0){R&&tt&&e.texStorage2D(n.TEXTURE_2D,ut,vt,It[0].width,It[0].height);for(let Z=0,Y=It.length;Z<Y;Z++)st=It[Z],R?nt&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,st.width,st.height,ot,wt,st.data):e.texImage2D(n.TEXTURE_2D,Z,vt,st.width,st.height,0,ot,wt,st.data);g.generateMipmaps=!1}else R?(tt&&e.texStorage2D(n.TEXTURE_2D,ut,vt,J.width,J.height),nt&&kt(g,J,ot,wt)):e.texImage2D(n.TEXTURE_2D,0,vt,J.width,J.height,0,ot,wt,J.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){R&&tt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,vt,It[0].width,It[0].height,J.depth);for(let Z=0,Y=It.length;Z<Y;Z++)if(st=It[Z],g.format!==1023)if(ot!==null)if(R){if(nt)if(g.layerUpdates.size>0){const ft=hr(st.width,st.height,g.format,g.type);for(const Dt of g.layerUpdates){const Kt=st.data.subarray(Dt*ft/st.data.BYTES_PER_ELEMENT,(Dt+1)*ft/st.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,Dt,st.width,st.height,1,ot,Kt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,st.width,st.height,J.depth,ot,st.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Z,vt,st.width,st.height,J.depth,0,st.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else R?nt&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,Z,0,0,0,st.width,st.height,J.depth,ot,wt,st.data):e.texImage3D(n.TEXTURE_2D_ARRAY,Z,vt,st.width,st.height,J.depth,0,ot,wt,st.data)}else{R&&tt&&e.texStorage2D(n.TEXTURE_2D,ut,vt,It[0].width,It[0].height);for(let Z=0,Y=It.length;Z<Y;Z++)st=It[Z],g.format!==1023?ot!==null?R?nt&&e.compressedTexSubImage2D(n.TEXTURE_2D,Z,0,0,st.width,st.height,ot,st.data):e.compressedTexImage2D(n.TEXTURE_2D,Z,vt,st.width,st.height,0,st.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):R?nt&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,st.width,st.height,ot,wt,st.data):e.texImage2D(n.TEXTURE_2D,Z,vt,st.width,st.height,0,ot,wt,st.data)}else if(g.isDataArrayTexture)if(R){if(tt&&e.texStorage3D(n.TEXTURE_2D_ARRAY,ut,vt,J.width,J.height,J.depth),nt)if(g.layerUpdates.size>0){const Z=hr(J.width,J.height,g.format,g.type);for(const Y of g.layerUpdates){const ft=J.data.subarray(Y*Z/J.data.BYTES_PER_ELEMENT,(Y+1)*Z/J.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Y,J.width,J.height,1,ot,wt,ft)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,ot,wt,J.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,vt,J.width,J.height,J.depth,0,ot,wt,J.data);else if(g.isData3DTexture)R?(tt&&e.texStorage3D(n.TEXTURE_3D,ut,vt,J.width,J.height,J.depth),nt&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,ot,wt,J.data)):e.texImage3D(n.TEXTURE_3D,0,vt,J.width,J.height,J.depth,0,ot,wt,J.data);else if(g.isFramebufferTexture){if(tt)if(R)e.texStorage2D(n.TEXTURE_2D,ut,vt,J.width,J.height);else{let Z=J.width,Y=J.height;for(let ft=0;ft<ut;ft++)e.texImage2D(n.TEXTURE_2D,ft,vt,Z,Y,0,ot,wt,null),Z>>=1,Y>>=1}}else if(It.length>0){if(R&&tt){const Z=se(It[0]);e.texStorage2D(n.TEXTURE_2D,ut,vt,Z.width,Z.height)}for(let Z=0,Y=It.length;Z<Y;Z++)st=It[Z],R?nt&&e.texSubImage2D(n.TEXTURE_2D,Z,0,0,ot,wt,st):e.texImage2D(n.TEXTURE_2D,Z,vt,ot,wt,st);g.generateMipmaps=!1}else if(R){if(tt){const Z=se(J);e.texStorage2D(n.TEXTURE_2D,ut,vt,Z.width,Z.height)}nt&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,ot,wt,J)}else e.texImage2D(n.TEXTURE_2D,0,vt,ot,wt,J);f(g)&&u(k),xt.__version=G.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function K(E,g,F){if(g.image.length!==6)return;const k=jt(E,g),j=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,E.__webglTexture,n.TEXTURE0+F);const G=A.get(j);if(j.version!==G.__version||k===!0){e.activeTexture(n.TEXTURE0+F);const xt=Gt.getPrimaries(Gt.workingColorSpace),At=g.colorSpace===""?null:Gt.getPrimaries(g.colorSpace),gt=g.colorSpace===""||xt===At?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,gt);const _t=g.isCompressedTexture||g.image[0].isCompressedTexture,J=g.image[0]&&g.image[0].isDataTexture,ot=[];for(let Y=0;Y<6;Y++)!_t&&!J?ot[Y]=_(g.image[Y],!0,i.maxCubemapSize):ot[Y]=J?g.image[Y].image:g.image[Y],ot[Y]=de(g,ot[Y]);const wt=ot[0],vt=r.convert(g.format,g.colorSpace),st=r.convert(g.type),It=T(g.internalFormat,vt,st,g.colorSpace),R=g.isVideoTexture!==!0,tt=G.__version===void 0||k===!0,nt=j.dataReady;let ut=P(g,wt);Nt(n.TEXTURE_CUBE_MAP,g);let Z;if(_t){R&&tt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,It,wt.width,wt.height);for(let Y=0;Y<6;Y++){Z=ot[Y].mipmaps;for(let ft=0;ft<Z.length;ft++){const Dt=Z[ft];g.format!==1023?vt!==null?R?nt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft,0,0,Dt.width,Dt.height,vt,Dt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft,It,Dt.width,Dt.height,0,Dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):R?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft,0,0,Dt.width,Dt.height,vt,st,Dt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft,It,Dt.width,Dt.height,0,vt,st,Dt.data)}}}else{if(Z=g.mipmaps,R&&tt){Z.length>0&&ut++;const Y=se(ot[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,ut,It,Y.width,Y.height)}for(let Y=0;Y<6;Y++)if(J){R?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,ot[Y].width,ot[Y].height,vt,st,ot[Y].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,It,ot[Y].width,ot[Y].height,0,vt,st,ot[Y].data);for(let ft=0;ft<Z.length;ft++){const Kt=Z[ft].image[Y].image;R?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft+1,0,0,Kt.width,Kt.height,vt,st,Kt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft+1,It,Kt.width,Kt.height,0,vt,st,Kt.data)}}else{R?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,vt,st,ot[Y]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,It,vt,st,ot[Y]);for(let ft=0;ft<Z.length;ft++){const Dt=Z[ft];R?nt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft+1,0,0,vt,st,Dt.image[Y]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ft+1,It,vt,st,Dt.image[Y])}}}f(g)&&u(n.TEXTURE_CUBE_MAP),G.__version=j.version,g.onUpdate&&g.onUpdate(g)}E.__version=g.version}function ht(E,g,F,k,j,G){const xt=r.convert(F.format,F.colorSpace),At=r.convert(F.type),gt=T(F.internalFormat,xt,At,F.colorSpace),_t=A.get(g),J=A.get(F);if(J.__renderTarget=g,!_t.__hasExternalTextures){const ot=Math.max(1,g.width>>G),wt=Math.max(1,g.height>>G);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?e.texImage3D(j,G,gt,ot,wt,g.depth,0,xt,At,null):e.texImage2D(j,G,gt,ot,wt,0,xt,At,null)}e.bindFramebuffer(n.FRAMEBUFFER,E),mt(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,k,j,J.__webglTexture,0,te(g)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,k,j,J.__webglTexture,G),e.bindFramebuffer(n.FRAMEBUFFER,null)}function Pt(E,g,F){if(n.bindRenderbuffer(n.RENDERBUFFER,E),g.depthBuffer){const k=g.depthTexture,j=k&&k.isDepthTexture?k.type:null,G=S(g.stencilBuffer,j),xt=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,At=te(g);mt(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,At,G,g.width,g.height):F?n.renderbufferStorageMultisample(n.RENDERBUFFER,At,G,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,G,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,xt,n.RENDERBUFFER,E)}else{const k=g.textures;for(let j=0;j<k.length;j++){const G=k[j],xt=r.convert(G.format,G.colorSpace),At=r.convert(G.type),gt=T(G.internalFormat,xt,At,G.colorSpace),_t=te(g);F&&mt(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,_t,gt,g.width,g.height):mt(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,_t,gt,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,gt,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Mt(E,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,E),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const k=A.get(g.depthTexture);k.__renderTarget=g,(!k.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),$(g.depthTexture,0);const j=k.__webglTexture,G=te(g);if(g.depthTexture.format===1026)mt(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(g.depthTexture.format===1027)mt(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,G):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ht(E){const g=A.get(E),F=E.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==E.depthTexture){const k=E.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),k){const j=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,k.removeEventListener("dispose",j)};k.addEventListener("dispose",j),g.__depthDisposeCallback=j}g.__boundDepthTexture=k}if(E.depthTexture&&!g.__autoAllocateDepthBuffer){if(F)throw new Error("target.depthTexture not supported in Cube render targets");const k=E.texture.mipmaps;k&&k.length>0?Mt(g.__webglFramebuffer[0],E):Mt(g.__webglFramebuffer,E)}else if(F){g.__webglDepthbuffer=[];for(let k=0;k<6;k++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[k]),g.__webglDepthbuffer[k]===void 0)g.__webglDepthbuffer[k]=n.createRenderbuffer(),Pt(g.__webglDepthbuffer[k],E,!1);else{const j=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer[k];n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,G)}}else{const k=E.texture.mipmaps;if(k&&k.length>0?e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),Pt(g.__webglDepthbuffer,E,!1);else{const j=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,G)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function ge(E,g,F){const k=A.get(E);g!==void 0&&ht(k.__webglFramebuffer,E,E.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),F!==void 0&&Ht(E)}function y(E){const g=E.texture,F=A.get(E),k=A.get(g);E.addEventListener("dispose",C);const j=E.textures,G=E.isWebGLCubeRenderTarget===!0,xt=j.length>1;if(xt||(k.__webglTexture===void 0&&(k.__webglTexture=n.createTexture()),k.__version=g.version,s.memory.textures++),G){F.__webglFramebuffer=[];for(let At=0;At<6;At++)if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer[At]=[];for(let gt=0;gt<g.mipmaps.length;gt++)F.__webglFramebuffer[At][gt]=n.createFramebuffer()}else F.__webglFramebuffer[At]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){F.__webglFramebuffer=[];for(let At=0;At<g.mipmaps.length;At++)F.__webglFramebuffer[At]=n.createFramebuffer()}else F.__webglFramebuffer=n.createFramebuffer();if(xt)for(let At=0,gt=j.length;At<gt;At++){const _t=A.get(j[At]);_t.__webglTexture===void 0&&(_t.__webglTexture=n.createTexture(),s.memory.textures++)}if(E.samples>0&&mt(E)===!1){F.__webglMultisampledFramebuffer=n.createFramebuffer(),F.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,F.__webglMultisampledFramebuffer);for(let At=0;At<j.length;At++){const gt=j[At];F.__webglColorRenderbuffer[At]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,F.__webglColorRenderbuffer[At]);const _t=r.convert(gt.format,gt.colorSpace),J=r.convert(gt.type),ot=T(gt.internalFormat,_t,J,gt.colorSpace,E.isXRRenderTarget===!0),wt=te(E);n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,ot,E.width,E.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+At,n.RENDERBUFFER,F.__webglColorRenderbuffer[At])}n.bindRenderbuffer(n.RENDERBUFFER,null),E.depthBuffer&&(F.__webglDepthRenderbuffer=n.createRenderbuffer(),Pt(F.__webglDepthRenderbuffer,E,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(G){e.bindTexture(n.TEXTURE_CUBE_MAP,k.__webglTexture),Nt(n.TEXTURE_CUBE_MAP,g);for(let At=0;At<6;At++)if(g.mipmaps&&g.mipmaps.length>0)for(let gt=0;gt<g.mipmaps.length;gt++)ht(F.__webglFramebuffer[At][gt],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+At,gt);else ht(F.__webglFramebuffer[At],E,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+At,0);f(g)&&u(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(xt){for(let At=0,gt=j.length;At<gt;At++){const _t=j[At],J=A.get(_t);let ot=n.TEXTURE_2D;(E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(ot=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,J.__webglTexture),Nt(ot,_t),ht(F.__webglFramebuffer,E,_t,n.COLOR_ATTACHMENT0+At,ot,0),f(_t)&&u(ot)}e.unbindTexture()}else{let At=n.TEXTURE_2D;if((E.isWebGL3DRenderTarget||E.isWebGLArrayRenderTarget)&&(At=E.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(At,k.__webglTexture),Nt(At,g),g.mipmaps&&g.mipmaps.length>0)for(let gt=0;gt<g.mipmaps.length;gt++)ht(F.__webglFramebuffer[gt],E,g,n.COLOR_ATTACHMENT0,At,gt);else ht(F.__webglFramebuffer,E,g,n.COLOR_ATTACHMENT0,At,0);f(g)&&u(At),e.unbindTexture()}E.depthBuffer&&Ht(E)}function Jt(E){const g=E.textures;for(let F=0,k=g.length;F<k;F++){const j=g[F];if(f(j)){const G=w(E),xt=A.get(j).__webglTexture;e.bindTexture(G,xt),u(G),e.unbindTexture()}}}const Ct=[],bt=[];function pt(E){if(E.samples>0){if(mt(E)===!1){const g=E.textures,F=E.width,k=E.height;let j=n.COLOR_BUFFER_BIT;const G=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,xt=A.get(E),At=g.length>1;if(At)for(let _t=0;_t<g.length;_t++)e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,xt.__webglMultisampledFramebuffer);const gt=E.texture.mipmaps;gt&&gt.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglFramebuffer);for(let _t=0;_t<g.length;_t++){if(E.resolveDepthBuffer&&(E.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),E.stencilBuffer&&E.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),At){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,xt.__webglColorRenderbuffer[_t]);const J=A.get(g[_t]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,J,0)}n.blitFramebuffer(0,0,F,k,0,0,F,k,j,n.NEAREST),l===!0&&(Ct.length=0,bt.length=0,Ct.push(n.COLOR_ATTACHMENT0+_t),E.depthBuffer&&E.resolveDepthBuffer===!1&&(Ct.push(G),bt.push(G),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,bt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Ct))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),At)for(let _t=0;_t<g.length;_t++){e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.RENDERBUFFER,xt.__webglColorRenderbuffer[_t]);const J=A.get(g[_t]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,xt.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+_t,n.TEXTURE_2D,J,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,xt.__webglMultisampledFramebuffer)}else if(E.depthBuffer&&E.resolveDepthBuffer===!1&&l){const g=E.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function te(E){return Math.min(i.maxSamples,E.samples)}function mt(E){const g=A.get(E);return E.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function Ft(E){const g=s.render.frame;h.get(E)!==g&&(h.set(E,g),E.update())}function de(E,g){const F=E.colorSpace,k=E.format,j=E.type;return E.isCompressedTexture===!0||E.isVideoTexture===!0||F!==_A&&F!==""&&(Gt.getTransfer(F)===qt?(k!==1023||j!==1009)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",F)),g}function se(E){return typeof HTMLImageElement<"u"&&E instanceof HTMLImageElement?(o.width=E.naturalWidth||E.width,o.height=E.naturalHeight||E.height):typeof VideoFrame<"u"&&E instanceof VideoFrame?(o.width=E.displayWidth,o.height=E.displayHeight):(o.width=E.width,o.height=E.height),o}this.allocateTextureUnit=V,this.resetTextureUnits=z,this.setTexture2D=$,this.setTexture2DArray=W,this.setTexture3D=et,this.setTextureCube=H,this.rebindTextures=ge,this.setupRenderTarget=y,this.updateRenderTargetMipmap=Jt,this.updateMultisampleRenderTarget=pt,this.setupDepthRenderbuffer=Ht,this.setupFrameBufferTexture=ht,this.useMultisampledRTT=mt}function Hc(n,t){function e(A,i=""){let r;const s=Gt.getTransfer(i);if(A===1009)return n.UNSIGNED_BYTE;if(A===1017)return n.UNSIGNED_SHORT_4_4_4_4;if(A===1018)return n.UNSIGNED_SHORT_5_5_5_1;if(A===35902)return n.UNSIGNED_INT_5_9_9_9_REV;if(A===35899)return n.UNSIGNED_INT_10F_11F_11F_REV;if(A===1010)return n.BYTE;if(A===1011)return n.SHORT;if(A===1012)return n.UNSIGNED_SHORT;if(A===1013)return n.INT;if(A===1014)return n.UNSIGNED_INT;if(A===1015)return n.FLOAT;if(A===1016)return n.HALF_FLOAT;if(A===1021)return n.ALPHA;if(A===1022)return n.RGB;if(A===1023)return n.RGBA;if(A===1026)return n.DEPTH_COMPONENT;if(A===1027)return n.DEPTH_STENCIL;if(A===1028)return n.RED;if(A===1029)return n.RED_INTEGER;if(A===1030)return n.RG;if(A===1031)return n.RG_INTEGER;if(A===1033)return n.RGBA_INTEGER;if(A===33776||A===33777||A===33778||A===33779)if(s===qt)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(A===33776)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(A===33777)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(A===33778)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(A===33779)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(A===33776)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(A===33777)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(A===33778)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(A===33779)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(A===35840||A===35841||A===35842||A===35843)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(A===35840)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(A===35841)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(A===35842)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(A===35843)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(A===36196||A===37492||A===37496)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(A===36196||A===37492)return s===qt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(A===37496)return s===qt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(A===37808||A===37809||A===37810||A===37811||A===37812||A===37813||A===37814||A===37815||A===37816||A===37817||A===37818||A===37819||A===37820||A===37821)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(A===37808)return s===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(A===37809)return s===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(A===37810)return s===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(A===37811)return s===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(A===37812)return s===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(A===37813)return s===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(A===37814)return s===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(A===37815)return s===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(A===37816)return s===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(A===37817)return s===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(A===37818)return s===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(A===37819)return s===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(A===37820)return s===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(A===37821)return s===qt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(A===36492||A===36494||A===36495)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(A===36492)return s===qt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(A===36494)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(A===36495)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(A===36283||A===36284||A===36285||A===36286)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(A===36283)return r.COMPRESSED_RED_RGTC1_EXT;if(A===36284)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(A===36285)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(A===36286)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return A===1020?n.UNSIGNED_INT_24_8:n[A]!==void 0?n[A]:null}return{convert:e}}const Gc=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Vc=`
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

}`;class kc{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const A=new cr(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=A}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,A=new ze({vertexShader:Gc,fragmentShader:Vc,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Oe(new Dn(20,20),A)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Wc extends vA{constructor(t,e){super();const A=this;let i=null,r=1,s=null,a="local-floor",l=1,o=null,h=null,c=null,d=null,p=null,m=null;const _=typeof XRWebGLBinding<"u",f=new kc,u={},w=e.getContextAttributes();let T=null,S=null;const P=[],b=[],C=new Xt;let N=null;const M=new He;M.viewport=new ie;const x=new He;x.viewport=new ie;const D=[M,x],z=new Ws;let V=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let K=P[q];return K===void 0&&(K=new ci,P[q]=K),K.getTargetRaySpace()},this.getControllerGrip=function(q){let K=P[q];return K===void 0&&(K=new ci,P[q]=K),K.getGripSpace()},this.getHand=function(q){let K=P[q];return K===void 0&&(K=new ci,P[q]=K),K.getHandSpace()};function $(q){const K=b.indexOf(q.inputSource);if(K===-1)return;const ht=P[K];ht!==void 0&&(ht.update(q.inputSource,q.frame,o||s),ht.dispatchEvent({type:q.type,data:q.inputSource}))}function W(){i.removeEventListener("select",$),i.removeEventListener("selectstart",$),i.removeEventListener("selectend",$),i.removeEventListener("squeeze",$),i.removeEventListener("squeezestart",$),i.removeEventListener("squeezeend",$),i.removeEventListener("end",W),i.removeEventListener("inputsourceschange",et);for(let q=0;q<P.length;q++){const K=b[q];K!==null&&(b[q]=null,P[q].disconnect(K))}V=null,X=null,f.reset();for(const q in u)delete u[q];t.setRenderTarget(T),p=null,d=null,c=null,i=null,S=null,kt.stop(),A.isPresenting=!1,t.setPixelRatio(N),t.setSize(C.width,C.height,!1),A.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){r=q,A.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,A.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return o||s},this.setReferenceSpace=function(q){o=q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return c===null&&_&&(c=new XRWebGLBinding(i,e)),c},this.getFrame=function(){return m},this.getSession=function(){return i},this.setSession=async function(q){if(i=q,i!==null){if(T=t.getRenderTarget(),i.addEventListener("select",$),i.addEventListener("selectstart",$),i.addEventListener("selectend",$),i.addEventListener("squeeze",$),i.addEventListener("squeezestart",$),i.addEventListener("squeezeend",$),i.addEventListener("end",W),i.addEventListener("inputsourceschange",et),w.xrCompatible!==!0&&await e.makeXRCompatible(),N=t.getPixelRatio(),t.getSize(C),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let ht=null,Pt=null,Mt=null;w.depth&&(Mt=w.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,ht=w.stencil?1027:1026,Pt=w.stencil?1020:1014);const Ht={colorFormat:e.RGBA8,depthFormat:Mt,scaleFactor:r};c=this.getBinding(),d=c.createProjectionLayer(Ht),i.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),S=new sA(d.textureWidth,d.textureHeight,{format:1023,type:1009,depthTexture:new lr(d.textureWidth,d.textureHeight,Pt,void 0,void 0,void 0,void 0,void 0,void 0,ht),stencilBuffer:w.stencil,colorSpace:t.outputColorSpace,samples:w.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1,resolveStencilBuffer:d.ignoreDepthValues===!1})}else{const ht={antialias:w.antialias,alpha:!0,depth:w.depth,stencil:w.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,e,ht),i.updateRenderState({baseLayer:p}),t.setPixelRatio(1),t.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new sA(p.framebufferWidth,p.framebufferHeight,{format:1023,type:1009,colorSpace:t.outputColorSpace,stencilBuffer:w.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),o=null,s=await i.requestReferenceSpace(a),kt.setContext(i),kt.start(),A.isPresenting=!0,A.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return f.getDepthTexture()};function et(q){for(let K=0;K<q.removed.length;K++){const ht=q.removed[K],Pt=b.indexOf(ht);Pt>=0&&(b[Pt]=null,P[Pt].disconnect(ht))}for(let K=0;K<q.added.length;K++){const ht=q.added[K];let Pt=b.indexOf(ht);if(Pt===-1){for(let Ht=0;Ht<P.length;Ht++)if(Ht>=b.length){b.push(ht),Pt=Ht;break}else if(b[Ht]===null){b[Ht]=ht,Pt=Ht;break}if(Pt===-1)break}const Mt=P[Pt];Mt&&Mt.connect(ht)}}const H=new U,rt=new U;function lt(q,K,ht){H.setFromMatrixPosition(K.matrixWorld),rt.setFromMatrixPosition(ht.matrixWorld);const Pt=H.distanceTo(rt),Mt=K.projectionMatrix.elements,Ht=ht.projectionMatrix.elements,ge=Mt[14]/(Mt[10]-1),y=Mt[14]/(Mt[10]+1),Jt=(Mt[9]+1)/Mt[5],Ct=(Mt[9]-1)/Mt[5],bt=(Mt[8]-1)/Mt[0],pt=(Ht[8]+1)/Ht[0],te=ge*bt,mt=ge*pt,Ft=Pt/(-bt+pt),de=Ft*-bt;if(K.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(de),q.translateZ(Ft),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Mt[10]===-1)q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse);else{const se=ge+Ft,E=y+Ft,g=te-de,F=mt+(Pt-de),k=Jt*y/E*se,j=Ct*y/E*se;q.projectionMatrix.makePerspective(g,F,k,j,se,E),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function St(q,K){K===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(K.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(i===null)return;let K=q.near,ht=q.far;f.texture!==null&&(f.depthNear>0&&(K=f.depthNear),f.depthFar>0&&(ht=f.depthFar)),z.near=x.near=M.near=K,z.far=x.far=M.far=ht,(V!==z.near||X!==z.far)&&(i.updateRenderState({depthNear:z.near,depthFar:z.far}),V=z.near,X=z.far),z.layers.mask=q.layers.mask|6,M.layers.mask=z.layers.mask&3,x.layers.mask=z.layers.mask&5;const Pt=q.parent,Mt=z.cameras;St(z,Pt);for(let Ht=0;Ht<Mt.length;Ht++)St(Mt[Ht],Pt);Mt.length===2?lt(z,M,x):z.projectionMatrix.copy(M.projectionMatrix),Nt(q,z,Pt)};function Nt(q,K,ht){ht===null?q.matrix.copy(K.matrixWorld):(q.matrix.copy(ht.matrixWorld),q.matrix.invert(),q.matrix.multiply(K.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(K.projectionMatrix),q.projectionMatrixInverse.copy(K.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=Hn*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return f.texture!==null},this.getDepthSensingMesh=function(){return f.getMesh(z)},this.getCameraTexture=function(q){return u[q]};let jt=null;function Qt(q,K){if(h=K.getViewerPose(o||s),m=K,h!==null){const ht=h.views;p!==null&&(t.setRenderTargetFramebuffer(S,p.framebuffer),t.setRenderTarget(S));let Pt=!1;ht.length!==z.cameras.length&&(z.cameras.length=0,Pt=!0);for(let y=0;y<ht.length;y++){const Jt=ht[y];let Ct=null;if(p!==null)Ct=p.getViewport(Jt);else{const pt=c.getViewSubImage(d,Jt);Ct=pt.viewport,y===0&&(t.setRenderTargetTextures(S,pt.colorTexture,pt.depthStencilTexture),t.setRenderTarget(S))}let bt=D[y];bt===void 0&&(bt=new He,bt.layers.enable(y),bt.viewport=new ie,D[y]=bt),bt.matrix.fromArray(Jt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Jt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),y===0&&(z.matrix.copy(bt.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),Pt===!0&&z.cameras.push(bt)}const Mt=i.enabledFeatures;if(Mt&&Mt.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){c=A.getBinding();const y=c.getDepthInformation(ht[0]);y&&y.isValid&&y.texture&&f.init(y,i.renderState)}if(Mt&&Mt.includes("camera-access")&&_){t.state.unbindTexture(),c=A.getBinding();for(let y=0;y<ht.length;y++){const Jt=ht[y].camera;if(Jt){let Ct=u[Jt];Ct||(Ct=new cr,u[Jt]=Ct);const bt=c.getCameraImage(Jt);Ct.sourceTexture=bt}}}}for(let ht=0;ht<P.length;ht++){const Pt=b[ht],Mt=P[ht];Pt!==null&&Mt!==void 0&&Mt.update(Pt,K,o||s)}jt&&jt(q,K),K.detectedPlanes&&A.dispatchEvent({type:"planesdetected",data:K}),m=null}const kt=new dr;kt.setAnimationLoop(Qt),this.setAnimationLoop=function(q){jt=q},this.dispose=function(){}}}const pA=new qe,Xc=new re;function qc(n,t){function e(f,u){f.matrixAutoUpdate===!0&&f.updateMatrix(),u.value.copy(f.matrix)}function A(f,u){u.color.getRGB(f.fogColor.value,ji(n)),u.isFog?(f.fogNear.value=u.near,f.fogFar.value=u.far):u.isFogExp2&&(f.fogDensity.value=u.density)}function i(f,u,w,T,S){u.isMeshBasicMaterial||u.isMeshLambertMaterial?r(f,u):u.isMeshToonMaterial?(r(f,u),c(f,u)):u.isMeshPhongMaterial?(r(f,u),h(f,u)):u.isMeshStandardMaterial?(r(f,u),d(f,u),u.isMeshPhysicalMaterial&&p(f,u,S)):u.isMeshMatcapMaterial?(r(f,u),m(f,u)):u.isMeshDepthMaterial?r(f,u):u.isMeshDistanceMaterial?(r(f,u),_(f,u)):u.isMeshNormalMaterial?r(f,u):u.isLineBasicMaterial?(s(f,u),u.isLineDashedMaterial&&a(f,u)):u.isPointsMaterial?l(f,u,w,T):u.isSpriteMaterial?o(f,u):u.isShadowMaterial?(f.color.value.copy(u.color),f.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function r(f,u){f.opacity.value=u.opacity,u.color&&f.diffuse.value.copy(u.color),u.emissive&&f.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.bumpMap&&(f.bumpMap.value=u.bumpMap,e(u.bumpMap,f.bumpMapTransform),f.bumpScale.value=u.bumpScale,u.side===1&&(f.bumpScale.value*=-1)),u.normalMap&&(f.normalMap.value=u.normalMap,e(u.normalMap,f.normalMapTransform),f.normalScale.value.copy(u.normalScale),u.side===1&&f.normalScale.value.negate()),u.displacementMap&&(f.displacementMap.value=u.displacementMap,e(u.displacementMap,f.displacementMapTransform),f.displacementScale.value=u.displacementScale,f.displacementBias.value=u.displacementBias),u.emissiveMap&&(f.emissiveMap.value=u.emissiveMap,e(u.emissiveMap,f.emissiveMapTransform)),u.specularMap&&(f.specularMap.value=u.specularMap,e(u.specularMap,f.specularMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest);const w=t.get(u),T=w.envMap,S=w.envMapRotation;T&&(f.envMap.value=T,pA.copy(S),pA.x*=-1,pA.y*=-1,pA.z*=-1,T.isCubeTexture&&T.isRenderTargetTexture===!1&&(pA.y*=-1,pA.z*=-1),f.envMapRotation.value.setFromMatrix4(Xc.makeRotationFromEuler(pA)),f.flipEnvMap.value=T.isCubeTexture&&T.isRenderTargetTexture===!1?-1:1,f.reflectivity.value=u.reflectivity,f.ior.value=u.ior,f.refractionRatio.value=u.refractionRatio),u.lightMap&&(f.lightMap.value=u.lightMap,f.lightMapIntensity.value=u.lightMapIntensity,e(u.lightMap,f.lightMapTransform)),u.aoMap&&(f.aoMap.value=u.aoMap,f.aoMapIntensity.value=u.aoMapIntensity,e(u.aoMap,f.aoMapTransform))}function s(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform))}function a(f,u){f.dashSize.value=u.dashSize,f.totalSize.value=u.dashSize+u.gapSize,f.scale.value=u.scale}function l(f,u,w,T){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.size.value=u.size*w,f.scale.value=T*.5,u.map&&(f.map.value=u.map,e(u.map,f.uvTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function o(f,u){f.diffuse.value.copy(u.color),f.opacity.value=u.opacity,f.rotation.value=u.rotation,u.map&&(f.map.value=u.map,e(u.map,f.mapTransform)),u.alphaMap&&(f.alphaMap.value=u.alphaMap,e(u.alphaMap,f.alphaMapTransform)),u.alphaTest>0&&(f.alphaTest.value=u.alphaTest)}function h(f,u){f.specular.value.copy(u.specular),f.shininess.value=Math.max(u.shininess,1e-4)}function c(f,u){u.gradientMap&&(f.gradientMap.value=u.gradientMap)}function d(f,u){f.metalness.value=u.metalness,u.metalnessMap&&(f.metalnessMap.value=u.metalnessMap,e(u.metalnessMap,f.metalnessMapTransform)),f.roughness.value=u.roughness,u.roughnessMap&&(f.roughnessMap.value=u.roughnessMap,e(u.roughnessMap,f.roughnessMapTransform)),u.envMap&&(f.envMapIntensity.value=u.envMapIntensity)}function p(f,u,w){f.ior.value=u.ior,u.sheen>0&&(f.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),f.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(f.sheenColorMap.value=u.sheenColorMap,e(u.sheenColorMap,f.sheenColorMapTransform)),u.sheenRoughnessMap&&(f.sheenRoughnessMap.value=u.sheenRoughnessMap,e(u.sheenRoughnessMap,f.sheenRoughnessMapTransform))),u.clearcoat>0&&(f.clearcoat.value=u.clearcoat,f.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(f.clearcoatMap.value=u.clearcoatMap,e(u.clearcoatMap,f.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(f.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,e(u.clearcoatRoughnessMap,f.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(f.clearcoatNormalMap.value=u.clearcoatNormalMap,e(u.clearcoatNormalMap,f.clearcoatNormalMapTransform),f.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===1&&f.clearcoatNormalScale.value.negate())),u.dispersion>0&&(f.dispersion.value=u.dispersion),u.iridescence>0&&(f.iridescence.value=u.iridescence,f.iridescenceIOR.value=u.iridescenceIOR,f.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],f.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(f.iridescenceMap.value=u.iridescenceMap,e(u.iridescenceMap,f.iridescenceMapTransform)),u.iridescenceThicknessMap&&(f.iridescenceThicknessMap.value=u.iridescenceThicknessMap,e(u.iridescenceThicknessMap,f.iridescenceThicknessMapTransform))),u.transmission>0&&(f.transmission.value=u.transmission,f.transmissionSamplerMap.value=w.texture,f.transmissionSamplerSize.value.set(w.width,w.height),u.transmissionMap&&(f.transmissionMap.value=u.transmissionMap,e(u.transmissionMap,f.transmissionMapTransform)),f.thickness.value=u.thickness,u.thicknessMap&&(f.thicknessMap.value=u.thicknessMap,e(u.thicknessMap,f.thicknessMapTransform)),f.attenuationDistance.value=u.attenuationDistance,f.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(f.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(f.anisotropyMap.value=u.anisotropyMap,e(u.anisotropyMap,f.anisotropyMapTransform))),f.specularIntensity.value=u.specularIntensity,f.specularColor.value.copy(u.specularColor),u.specularColorMap&&(f.specularColorMap.value=u.specularColorMap,e(u.specularColorMap,f.specularColorMapTransform)),u.specularIntensityMap&&(f.specularIntensityMap.value=u.specularIntensityMap,e(u.specularIntensityMap,f.specularIntensityMapTransform))}function m(f,u){u.matcap&&(f.matcap.value=u.matcap)}function _(f,u){const w=t.get(u).light;f.referencePosition.value.setFromMatrixPosition(w.matrixWorld),f.nearDistance.value=w.shadow.camera.near,f.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:A,refreshMaterialUniforms:i}}function Yc(n,t,e,A){let i={},r={},s=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,T){const S=T.program;A.uniformBlockBinding(w,S)}function o(w,T){let S=i[w.id];S===void 0&&(m(w),S=h(w),i[w.id]=S,w.addEventListener("dispose",f));const P=T.program;A.updateUBOMapping(w,P);const b=t.render.frame;r[w.id]!==b&&(d(w),r[w.id]=b)}function h(w){const T=c();w.__bindingPointIndex=T;const S=n.createBuffer(),P=w.__size,b=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,P,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,T,S),S}function c(){for(let w=0;w<a;w++)if(s.indexOf(w)===-1)return s.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const T=i[w.id],S=w.uniforms,P=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,T);for(let b=0,C=S.length;b<C;b++){const N=Array.isArray(S[b])?S[b]:[S[b]];for(let M=0,x=N.length;M<x;M++){const D=N[M];if(p(D,b,M,P)===!0){const z=D.__offset,V=Array.isArray(D.value)?D.value:[D.value];let X=0;for(let $=0;$<V.length;$++){const W=V[$],et=_(W);typeof W=="number"||typeof W=="boolean"?(D.__data[0]=W,n.bufferSubData(n.UNIFORM_BUFFER,z+X,D.__data)):W.isMatrix3?(D.__data[0]=W.elements[0],D.__data[1]=W.elements[1],D.__data[2]=W.elements[2],D.__data[3]=0,D.__data[4]=W.elements[3],D.__data[5]=W.elements[4],D.__data[6]=W.elements[5],D.__data[7]=0,D.__data[8]=W.elements[6],D.__data[9]=W.elements[7],D.__data[10]=W.elements[8],D.__data[11]=0):(W.toArray(D.__data,X),X+=et.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,z,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(w,T,S,P){const b=w.value,C=T+"_"+S;if(P[C]===void 0)return typeof b=="number"||typeof b=="boolean"?P[C]=b:P[C]=b.clone(),!0;{const N=P[C];if(typeof b=="number"||typeof b=="boolean"){if(N!==b)return P[C]=b,!0}else if(N.equals(b)===!1)return N.copy(b),!0}return!1}function m(w){const T=w.uniforms;let S=0;const P=16;for(let C=0,N=T.length;C<N;C++){const M=Array.isArray(T[C])?T[C]:[T[C]];for(let x=0,D=M.length;x<D;x++){const z=M[x],V=Array.isArray(z.value)?z.value:[z.value];for(let X=0,$=V.length;X<$;X++){const W=V[X],et=_(W),H=S%P,rt=H%et.boundary,lt=H+rt;S+=rt,lt!==0&&P-lt<et.storage&&(S+=P-lt),z.__data=new Float32Array(et.storage/Float32Array.BYTES_PER_ELEMENT),z.__offset=S,S+=et.storage}}}const b=S%P;return b>0&&(S+=P-b),w.__size=S,w.__cache={},this}function _(w){const T={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(T.boundary=4,T.storage=4):w.isVector2?(T.boundary=8,T.storage=8):w.isVector3||w.isColor?(T.boundary=16,T.storage=12):w.isVector4?(T.boundary=16,T.storage=16):w.isMatrix3?(T.boundary=48,T.storage=48):w.isMatrix4?(T.boundary=64,T.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),T}function f(w){const T=w.target;T.removeEventListener("dispose",f);const S=s.indexOf(T.__bindingPointIndex);s.splice(S,1),n.deleteBuffer(i[T.id]),delete i[T.id],delete r[T.id]}function u(){for(const w in i)n.deleteBuffer(i[w]);s=[],i={},r={}}return{bind:l,update:o,dispose:u}}class $c{constructor(t={}){const{canvas:e=os(),context:A=null,depth:i=!0,stencil:r=!1,alpha:s=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:o=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:c=!1,reversedDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let p;if(A!==null){if(typeof WebGLRenderingContext<"u"&&A instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=A.getContextAttributes().alpha}else p=s;const m=new Uint32Array(4),_=new Int32Array(4);let f=null,u=null;const w=[],T=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=0,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const S=this;let P=!1;this._outputColorSpace=Pe;let b=0,C=0,N=null,M=-1,x=null;const D=new ie,z=new ie;let V=null;const X=new zt(0);let $=0,W=e.width,et=e.height,H=1,rt=null,lt=null;const St=new ie(0,0,W,et),Nt=new ie(0,0,W,et);let jt=!1;const Qt=new tr;let kt=!1,q=!1;const K=new re,ht=new U,Pt=new ie,Mt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ht=!1;function ge(){return N===null?H:1}let y=A;function Jt(v,L){return e.getContext(v,L)}try{const v={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:o,powerPreference:h,failIfMajorPerformanceCaveat:c};if("setAttribute"in e&&e.setAttribute("data-engine","three.js r180"),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",ut,!1),e.addEventListener("webglcontextcreationerror",Z,!1),y===null){const L="webgl2";if(y=Jt(L,v),y===null)throw Jt(L)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let Ct,bt,pt,te,mt,Ft,de,se,E,g,F,k,j,G,xt,At,gt,_t,J,ot,wt,vt,st,It;function R(){Ct=new il(y),Ct.init(),vt=new Hc(y,Ct),bt=new Zo(y,Ct,t,vt),pt=new Oc(y,Ct),bt.reversedDepthBuffer&&d&&pt.buffers.depth.setReversed(!0),te=new al(y),mt=new Tc,Ft=new zc(y,Ct,pt,mt,bt,vt,te),de=new Jo(S),se=new nl(S),E=new qs(y),st=new jo(y,E),g=new rl(y,E,te,st),F=new ll(y,g,E,te),J=new ol(y,bt,Ft),At=new Qo(mt),k=new yc(S,de,se,Ct,bt,st,At),j=new qc(S,mt),G=new bc,xt=new Ic(Ct),_t=new $o(S,de,se,pt,F,p,l),gt=new Nc(S,F,bt),It=new Yc(y,te,bt,pt),ot=new Ko(y,Ct,te),wt=new sl(y,Ct,te),te.programs=k.programs,S.capabilities=bt,S.extensions=Ct,S.properties=mt,S.renderLists=G,S.shadowMap=gt,S.state=pt,S.info=te}R();const tt=new Wc(S,y);this.xr=tt,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const v=Ct.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=Ct.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(v){v!==void 0&&(H=v,this.setSize(W,et,!1))},this.getSize=function(v){return v.set(W,et)},this.setSize=function(v,L,B=!0){if(tt.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}W=v,et=L,e.width=Math.floor(v*H),e.height=Math.floor(L*H),B===!0&&(e.style.width=v+"px",e.style.height=L+"px"),this.setViewport(0,0,v,L)},this.getDrawingBufferSize=function(v){return v.set(W*H,et*H).floor()},this.setDrawingBufferSize=function(v,L,B){W=v,et=L,H=B,e.width=Math.floor(v*B),e.height=Math.floor(L*B),this.setViewport(0,0,v,L)},this.getCurrentViewport=function(v){return v.copy(D)},this.getViewport=function(v){return v.copy(St)},this.setViewport=function(v,L,B,O){v.isVector4?St.set(v.x,v.y,v.z,v.w):St.set(v,L,B,O),pt.viewport(D.copy(St).multiplyScalar(H).round())},this.getScissor=function(v){return v.copy(Nt)},this.setScissor=function(v,L,B,O){v.isVector4?Nt.set(v.x,v.y,v.z,v.w):Nt.set(v,L,B,O),pt.scissor(z.copy(Nt).multiplyScalar(H).round())},this.getScissorTest=function(){return jt},this.setScissorTest=function(v){pt.setScissorTest(jt=v)},this.setOpaqueSort=function(v){rt=v},this.setTransparentSort=function(v){lt=v},this.getClearColor=function(v){return v.copy(_t.getClearColor())},this.setClearColor=function(){_t.setClearColor(...arguments)},this.getClearAlpha=function(){return _t.getClearAlpha()},this.setClearAlpha=function(){_t.setClearAlpha(...arguments)},this.clear=function(v=!0,L=!0,B=!0){let O=0;if(v){let I=!1;if(N!==null){const Q=N.texture.format;I=Q===1033||Q===1031||Q===1029}if(I){const Q=N.texture.type,at=Q===1009||Q===1014||Q===1012||Q===1020||Q===1017||Q===1018,dt=_t.getClearColor(),ct=_t.getClearAlpha(),Tt=dt.r,Rt=dt.g,Et=dt.b;at?(m[0]=Tt,m[1]=Rt,m[2]=Et,m[3]=ct,y.clearBufferuiv(y.COLOR,0,m)):(_[0]=Tt,_[1]=Rt,_[2]=Et,_[3]=ct,y.clearBufferiv(y.COLOR,0,_))}else O|=y.COLOR_BUFFER_BIT}L&&(O|=y.DEPTH_BUFFER_BIT),B&&(O|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(O)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",ut,!1),e.removeEventListener("webglcontextcreationerror",Z,!1),_t.dispose(),G.dispose(),xt.dispose(),mt.dispose(),de.dispose(),se.dispose(),F.dispose(),st.dispose(),It.dispose(),k.dispose(),tt.dispose(),tt.removeEventListener("sessionstart",Ve),tt.removeEventListener("sessionend",es),mA.stop()};function nt(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),P=!0}function ut(){console.log("THREE.WebGLRenderer: Context Restored."),P=!1;const v=te.autoReset,L=gt.enabled,B=gt.autoUpdate,O=gt.needsUpdate,I=gt.type;R(),te.autoReset=v,gt.enabled=L,gt.autoUpdate=B,gt.needsUpdate=O,gt.type=I}function Z(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function Y(v){const L=v.target;L.removeEventListener("dispose",Y),ft(L)}function ft(v){Dt(v),mt.remove(v)}function Dt(v){const L=mt.get(v).programs;L!==void 0&&(L.forEach(function(B){k.releaseProgram(B)}),v.isShaderMaterial&&k.releaseShaderCache(v))}this.renderBufferDirect=function(v,L,B,O,I,Q){L===null&&(L=Mt);const at=I.isMesh&&I.matrixWorld.determinant()<0,dt=Gu(v,L,B,O,I);pt.setMaterial(O,at);let ct=B.index,Tt=1;if(O.wireframe===!0){if(ct=g.getWireframeAttribute(B),ct===void 0)return;Tt=2}const Rt=B.drawRange,Et=B.attributes.position;let Bt=Rt.start*Tt,Yt=(Rt.start+Rt.count)*Tt;Q!==null&&(Bt=Math.max(Bt,Q.start*Tt),Yt=Math.min(Yt,(Q.start+Q.count)*Tt)),ct!==null?(Bt=Math.max(Bt,0),Yt=Math.min(Yt,ct.count)):Et!=null&&(Bt=Math.max(Bt,0),Yt=Math.min(Yt,Et.count));const ne=Yt-Bt;if(ne<0||ne===1/0)return;st.setup(I,O,dt,B,ct);let Zt,$t=ot;if(ct!==null&&(Zt=E.get(ct),$t=wt,$t.setIndex(Zt)),I.isMesh)O.wireframe===!0?(pt.setLineWidth(O.wireframeLinewidth*ge()),$t.setMode(y.LINES)):$t.setMode(y.TRIANGLES);else if(I.isLine){let yt=O.linewidth;yt===void 0&&(yt=1),pt.setLineWidth(yt*ge()),I.isLineSegments?$t.setMode(y.LINES):I.isLineLoop?$t.setMode(y.LINE_LOOP):$t.setMode(y.LINE_STRIP)}else I.isPoints?$t.setMode(y.POINTS):I.isSprite&&$t.setMode(y.TRIANGLES);if(I.isBatchedMesh)if(I._multiDrawInstances!==null)kA("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),$t.renderMultiDrawInstances(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount,I._multiDrawInstances);else if(Ct.get("WEBGL_multi_draw"))$t.renderMultiDraw(I._multiDrawStarts,I._multiDrawCounts,I._multiDrawCount);else{const yt=I._multiDrawStarts,ee=I._multiDrawCounts,Vt=I._multiDrawCount,be=ct?E.get(ct).bytesPerElement:1,zA=mt.get(O).currentProgram.getUniforms();for(let Re=0;Re<Vt;Re++)zA.setValue(y,"_gl_DrawID",Re),$t.render(yt[Re]/be,ee[Re])}else if(I.isInstancedMesh)$t.renderInstances(Bt,ne,I.count);else if(B.isInstancedBufferGeometry){const yt=B._maxInstanceCount!==void 0?B._maxInstanceCount:1/0,ee=Math.min(B.instanceCount,yt);$t.renderInstances(Bt,ne,ee)}else $t.render(Bt,ne)};function Kt(v,L,B){v.transparent===!0&&v.side===2&&v.forceSinglePass===!1?(v.side=1,v.needsUpdate=!0,On(v,L,B),v.side=0,v.needsUpdate=!0,On(v,L,B),v.side=2):On(v,L,B)}this.compile=function(v,L,B=null){B===null&&(B=v),u=xt.get(B),u.init(L),T.push(u),B.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),v!==B&&v.traverseVisible(function(I){I.isLight&&I.layers.test(L.layers)&&(u.pushLight(I),I.castShadow&&u.pushShadow(I))}),u.setupLights();const O=new Set;return v.traverse(function(I){if(!(I.isMesh||I.isPoints||I.isLine||I.isSprite))return;const Q=I.material;if(Q)if(Array.isArray(Q))for(let at=0;at<Q.length;at++){const dt=Q[at];Kt(dt,B,I),O.add(dt)}else Kt(Q,B,I),O.add(Q)}),u=T.pop(),O},this.compileAsync=function(v,L,B=null){const O=this.compile(v,L,B);return new Promise(I=>{function Q(){if(O.forEach(function(at){mt.get(at).currentProgram.isReady()&&O.delete(at)}),O.size===0){I(v);return}setTimeout(Q,10)}Ct.get("KHR_parallel_shader_compile")!==null?Q():setTimeout(Q,10)})};let Wt=null;function Qe(v){Wt&&Wt(v)}function Ve(){mA.stop()}function es(){mA.start()}const mA=new dr;mA.setAnimationLoop(Qe),typeof self<"u"&&mA.setContext(self),this.setAnimationLoop=function(v){Wt=v,tt.setAnimationLoop(v),v===null?mA.stop():mA.start()},tt.addEventListener("sessionstart",Ve),tt.addEventListener("sessionend",es),this.render=function(v,L){if(L!==void 0&&L.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),L.parent===null&&L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),tt.enabled===!0&&tt.isPresenting===!0&&(tt.cameraAutoUpdate===!0&&tt.updateCamera(L),L=tt.getCamera()),v.isScene===!0&&v.onBeforeRender(S,v,L,N),u=xt.get(v,T.length),u.init(L),T.push(u),K.multiplyMatrices(L.projectionMatrix,L.matrixWorldInverse),Qt.setFromProjectionMatrix(K,2e3,L.reversedDepth),q=this.localClippingEnabled,kt=At.init(this.clippingPlanes,q),f=G.get(v,w.length),f.init(),w.push(f),tt.enabled===!0&&tt.isPresenting===!0){const Q=S.xr.getDepthSensingMesh();Q!==null&&yi(Q,L,-1/0,S.sortObjects)}yi(v,L,0,S.sortObjects),f.finish(),S.sortObjects===!0&&f.sort(rt,lt),Ht=tt.enabled===!1||tt.isPresenting===!1||tt.hasDepthSensing()===!1,Ht&&_t.addToRenderList(f,v),this.info.render.frame++,kt===!0&&At.beginShadows();const B=u.state.shadowsArray;gt.render(B,v,L),kt===!0&&At.endShadows(),this.info.autoReset===!0&&this.info.reset();const O=f.opaque,I=f.transmissive;if(u.setupLights(),L.isArrayCamera){const Q=L.cameras;if(I.length>0)for(let at=0,dt=Q.length;at<dt;at++){const ct=Q[at];ns(O,I,v,ct)}Ht&&_t.render(v);for(let at=0,dt=Q.length;at<dt;at++){const ct=Q[at];As(f,v,ct,ct.viewport)}}else I.length>0&&ns(O,I,v,L),Ht&&_t.render(v),As(f,v,L);N!==null&&C===0&&(Ft.updateMultisampleRenderTarget(N),Ft.updateRenderTargetMipmap(N)),v.isScene===!0&&v.onAfterRender(S,v,L),st.resetDefaultState(),M=-1,x=null,T.pop(),T.length>0?(u=T[T.length-1],kt===!0&&At.setGlobalState(S.clippingPlanes,u.state.camera)):u=null,w.pop(),w.length>0?f=w[w.length-1]:f=null};function yi(v,L,B,O){if(v.visible===!1)return;if(v.layers.test(L.layers)){if(v.isGroup)B=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(L);else if(v.isLight)u.pushLight(v),v.castShadow&&u.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||Qt.intersectsSprite(v)){O&&Pt.setFromMatrixPosition(v.matrixWorld).applyMatrix4(K);const at=F.update(v),dt=v.material;dt.visible&&f.push(v,at,dt,B,Pt.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||Qt.intersectsObject(v))){const at=F.update(v),dt=v.material;if(O&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Pt.copy(v.boundingSphere.center)):(at.boundingSphere===null&&at.computeBoundingSphere(),Pt.copy(at.boundingSphere.center)),Pt.applyMatrix4(v.matrixWorld).applyMatrix4(K)),Array.isArray(dt)){const ct=at.groups;for(let Tt=0,Rt=ct.length;Tt<Rt;Tt++){const Et=ct[Tt],Bt=dt[Et.materialIndex];Bt&&Bt.visible&&f.push(v,at,Bt,B,Pt.z,Et)}}else dt.visible&&f.push(v,at,dt,B,Pt.z,null)}}const Q=v.children;for(let at=0,dt=Q.length;at<dt;at++)yi(Q[at],L,B,O)}function As(v,L,B,O){const I=v.opaque,Q=v.transmissive,at=v.transparent;u.setupLightsView(B),kt===!0&&At.setGlobalState(S.clippingPlanes,B),O&&pt.viewport(D.copy(O)),I.length>0&&Bn(I,L,B),Q.length>0&&Bn(Q,L,B),at.length>0&&Bn(at,L,B),pt.buffers.depth.setTest(!0),pt.buffers.depth.setMask(!0),pt.buffers.color.setMask(!0),pt.setPolygonOffset(!1)}function ns(v,L,B,O){if((B.isScene===!0?B.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[O.id]===void 0&&(u.state.transmissionRenderTarget[O.id]=new sA(1,1,{generateMipmaps:!0,type:Ct.has("EXT_color_buffer_half_float")||Ct.has("EXT_color_buffer_float")?1016:1009,minFilter:1008,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Gt.workingColorSpace}));const Q=u.state.transmissionRenderTarget[O.id],at=O.viewport||D;Q.setSize(at.z*S.transmissionResolutionScale,at.w*S.transmissionResolutionScale);const dt=S.getRenderTarget(),ct=S.getActiveCubeFace(),Tt=S.getActiveMipmapLevel();S.setRenderTarget(Q),S.getClearColor(X),$=S.getClearAlpha(),$<1&&S.setClearColor(16777215,.5),S.clear(),Ht&&_t.render(B);const Rt=S.toneMapping;S.toneMapping=0;const Et=O.viewport;if(O.viewport!==void 0&&(O.viewport=void 0),u.setupLightsView(O),kt===!0&&At.setGlobalState(S.clippingPlanes,O),Bn(v,B,O),Ft.updateMultisampleRenderTarget(Q),Ft.updateRenderTargetMipmap(Q),Ct.has("WEBGL_multisampled_render_to_texture")===!1){let Bt=!1;for(let Yt=0,ne=L.length;Yt<ne;Yt++){const Zt=L[Yt],$t=Zt.object,yt=Zt.geometry,ee=Zt.material,Vt=Zt.group;if(ee.side===2&&$t.layers.test(O.layers)){const be=ee.side;ee.side=1,ee.needsUpdate=!0,is($t,B,O,yt,ee,Vt),ee.side=be,ee.needsUpdate=!0,Bt=!0}}Bt===!0&&(Ft.updateMultisampleRenderTarget(Q),Ft.updateRenderTargetMipmap(Q))}S.setRenderTarget(dt,ct,Tt),S.setClearColor(X,$),Et!==void 0&&(O.viewport=Et),S.toneMapping=Rt}function Bn(v,L,B){const O=L.isScene===!0?L.overrideMaterial:null;for(let I=0,Q=v.length;I<Q;I++){const at=v[I],dt=at.object,ct=at.geometry,Tt=at.group;let Rt=at.material;Rt.allowOverride===!0&&O!==null&&(Rt=O),dt.layers.test(B.layers)&&is(dt,L,B,ct,Rt,Tt)}}function is(v,L,B,O,I,Q){v.onBeforeRender(S,L,B,O,I,Q),v.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),I.onBeforeRender(S,L,B,O,v,Q),I.transparent===!0&&I.side===2&&I.forceSinglePass===!1?(I.side=1,I.needsUpdate=!0,S.renderBufferDirect(B,L,O,I,v,Q),I.side=0,I.needsUpdate=!0,S.renderBufferDirect(B,L,O,I,v,Q),I.side=2):S.renderBufferDirect(B,L,O,I,v,Q),v.onAfterRender(S,L,B,O,I,Q)}function On(v,L,B){L.isScene!==!0&&(L=Mt);const O=mt.get(v),I=u.state.lights,Q=u.state.shadowsArray,at=I.state.version,dt=k.getParameters(v,I.state,Q,L,B),ct=k.getProgramCacheKey(dt);let Tt=O.programs;O.environment=v.isMeshStandardMaterial?L.environment:null,O.fog=L.fog,O.envMap=(v.isMeshStandardMaterial?se:de).get(v.envMap||O.environment),O.envMapRotation=O.environment!==null&&v.envMap===null?L.environmentRotation:v.envMapRotation,Tt===void 0&&(v.addEventListener("dispose",Y),Tt=new Map,O.programs=Tt);let Rt=Tt.get(ct);if(Rt!==void 0){if(O.currentProgram===Rt&&O.lightsStateVersion===at)return ss(v,dt),Rt}else dt.uniforms=k.getUniforms(v),v.onBeforeCompile(dt,S),Rt=k.acquireProgram(dt,ct),Tt.set(ct,Rt),O.uniforms=dt.uniforms;const Et=O.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(Et.clippingPlanes=At.uniform),ss(v,dt),O.needsLights=ku(v),O.lightsStateVersion=at,O.needsLights&&(Et.ambientLightColor.value=I.state.ambient,Et.lightProbe.value=I.state.probe,Et.directionalLights.value=I.state.directional,Et.directionalLightShadows.value=I.state.directionalShadow,Et.spotLights.value=I.state.spot,Et.spotLightShadows.value=I.state.spotShadow,Et.rectAreaLights.value=I.state.rectArea,Et.ltc_1.value=I.state.rectAreaLTC1,Et.ltc_2.value=I.state.rectAreaLTC2,Et.pointLights.value=I.state.point,Et.pointLightShadows.value=I.state.pointShadow,Et.hemisphereLights.value=I.state.hemi,Et.directionalShadowMap.value=I.state.directionalShadowMap,Et.directionalShadowMatrix.value=I.state.directionalShadowMatrix,Et.spotShadowMap.value=I.state.spotShadowMap,Et.spotLightMatrix.value=I.state.spotLightMatrix,Et.spotLightMap.value=I.state.spotLightMap,Et.pointShadowMap.value=I.state.pointShadowMap,Et.pointShadowMatrix.value=I.state.pointShadowMatrix),O.currentProgram=Rt,O.uniformsList=null,Rt}function rs(v){if(v.uniformsList===null){const L=v.currentProgram.getUniforms();v.uniformsList=Un.seqWithValue(L.seq,v.uniforms)}return v.uniformsList}function ss(v,L){const B=mt.get(v);B.outputColorSpace=L.outputColorSpace,B.batching=L.batching,B.batchingColor=L.batchingColor,B.instancing=L.instancing,B.instancingColor=L.instancingColor,B.instancingMorph=L.instancingMorph,B.skinning=L.skinning,B.morphTargets=L.morphTargets,B.morphNormals=L.morphNormals,B.morphColors=L.morphColors,B.morphTargetsCount=L.morphTargetsCount,B.numClippingPlanes=L.numClippingPlanes,B.numIntersection=L.numClipIntersection,B.vertexAlphas=L.vertexAlphas,B.vertexTangents=L.vertexTangents,B.toneMapping=L.toneMapping}function Gu(v,L,B,O,I){L.isScene!==!0&&(L=Mt),Ft.resetTextureUnits();const Q=L.fog,at=O.isMeshStandardMaterial?L.environment:null,dt=N===null?S.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:_A,ct=(O.isMeshStandardMaterial?se:de).get(O.envMap||at),Tt=O.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,Rt=!!B.attributes.tangent&&(!!O.normalMap||O.anisotropy>0),Et=!!B.morphAttributes.position,Bt=!!B.morphAttributes.normal,Yt=!!B.morphAttributes.color;let ne=0;O.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(ne=S.toneMapping);const Zt=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,$t=Zt!==void 0?Zt.length:0,yt=mt.get(O),ee=u.state.lights;if(kt===!0&&(q===!0||v!==x)){const xe=v===x&&O.id===M;At.setState(O,v,xe)}let Vt=!1;O.version===yt.__version?(yt.needsLights&&yt.lightsStateVersion!==ee.state.version||yt.outputColorSpace!==dt||I.isBatchedMesh&&yt.batching===!1||!I.isBatchedMesh&&yt.batching===!0||I.isBatchedMesh&&yt.batchingColor===!0&&I.colorTexture===null||I.isBatchedMesh&&yt.batchingColor===!1&&I.colorTexture!==null||I.isInstancedMesh&&yt.instancing===!1||!I.isInstancedMesh&&yt.instancing===!0||I.isSkinnedMesh&&yt.skinning===!1||!I.isSkinnedMesh&&yt.skinning===!0||I.isInstancedMesh&&yt.instancingColor===!0&&I.instanceColor===null||I.isInstancedMesh&&yt.instancingColor===!1&&I.instanceColor!==null||I.isInstancedMesh&&yt.instancingMorph===!0&&I.morphTexture===null||I.isInstancedMesh&&yt.instancingMorph===!1&&I.morphTexture!==null||yt.envMap!==ct||O.fog===!0&&yt.fog!==Q||yt.numClippingPlanes!==void 0&&(yt.numClippingPlanes!==At.numPlanes||yt.numIntersection!==At.numIntersection)||yt.vertexAlphas!==Tt||yt.vertexTangents!==Rt||yt.morphTargets!==Et||yt.morphNormals!==Bt||yt.morphColors!==Yt||yt.toneMapping!==ne||yt.morphTargetsCount!==$t)&&(Vt=!0):(Vt=!0,yt.__version=O.version);let be=yt.currentProgram;Vt===!0&&(be=On(O,L,I));let zA=!1,Re=!1,nn=!1;const Ae=be.getUniforms(),Le=yt.uniforms;if(pt.useProgram(be.program)&&(zA=!0,Re=!0,nn=!0),O.id!==M&&(M=O.id,Re=!0),zA||x!==v){pt.buffers.depth.getReversed()&&v.reversedDepth!==!0&&(v._reversedDepth=!0,v.updateProjectionMatrix()),Ae.setValue(y,"projectionMatrix",v.projectionMatrix),Ae.setValue(y,"viewMatrix",v.matrixWorldInverse);const Ee=Ae.map.cameraPosition;Ee!==void 0&&Ee.setValue(y,ht.setFromMatrixPosition(v.matrixWorld)),bt.logarithmicDepthBuffer&&Ae.setValue(y,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(O.isMeshPhongMaterial||O.isMeshToonMaterial||O.isMeshLambertMaterial||O.isMeshBasicMaterial||O.isMeshStandardMaterial||O.isShaderMaterial)&&Ae.setValue(y,"isOrthographic",v.isOrthographicCamera===!0),x!==v&&(x=v,Re=!0,nn=!0)}if(I.isSkinnedMesh){Ae.setOptional(y,I,"bindMatrix"),Ae.setOptional(y,I,"bindMatrixInverse");const xe=I.skeleton;xe&&(xe.boneTexture===null&&xe.computeBoneTexture(),Ae.setValue(y,"boneTexture",xe.boneTexture,Ft))}I.isBatchedMesh&&(Ae.setOptional(y,I,"batchingTexture"),Ae.setValue(y,"batchingTexture",I._matricesTexture,Ft),Ae.setOptional(y,I,"batchingIdTexture"),Ae.setValue(y,"batchingIdTexture",I._indirectTexture,Ft),Ae.setOptional(y,I,"batchingColorTexture"),I._colorsTexture!==null&&Ae.setValue(y,"batchingColorTexture",I._colorsTexture,Ft));const Ie=B.morphAttributes;if((Ie.position!==void 0||Ie.normal!==void 0||Ie.color!==void 0)&&J.update(I,B,be),(Re||yt.receiveShadow!==I.receiveShadow)&&(yt.receiveShadow=I.receiveShadow,Ae.setValue(y,"receiveShadow",I.receiveShadow)),O.isMeshGouraudMaterial&&O.envMap!==null&&(Le.envMap.value=ct,Le.flipEnvMap.value=ct.isCubeTexture&&ct.isRenderTargetTexture===!1?-1:1),O.isMeshStandardMaterial&&O.envMap===null&&L.environment!==null&&(Le.envMapIntensity.value=L.environmentIntensity),Re&&(Ae.setValue(y,"toneMappingExposure",S.toneMappingExposure),yt.needsLights&&Vu(Le,nn),Q&&O.fog===!0&&j.refreshFogUniforms(Le,Q),j.refreshMaterialUniforms(Le,O,H,et,u.state.transmissionRenderTarget[v.id]),Un.upload(y,rs(yt),Le,Ft)),O.isShaderMaterial&&O.uniformsNeedUpdate===!0&&(Un.upload(y,rs(yt),Le,Ft),O.uniformsNeedUpdate=!1),O.isSpriteMaterial&&Ae.setValue(y,"center",I.center),Ae.setValue(y,"modelViewMatrix",I.modelViewMatrix),Ae.setValue(y,"normalMatrix",I.normalMatrix),Ae.setValue(y,"modelMatrix",I.matrixWorld),O.isShaderMaterial||O.isRawShaderMaterial){const xe=O.uniformsGroups;for(let Ee=0,Ti=xe.length;Ee<Ti;Ee++){const gA=xe[Ee];It.update(gA,be),It.bind(gA,be)}}return be}function Vu(v,L){v.ambientLightColor.needsUpdate=L,v.lightProbe.needsUpdate=L,v.directionalLights.needsUpdate=L,v.directionalLightShadows.needsUpdate=L,v.pointLights.needsUpdate=L,v.pointLightShadows.needsUpdate=L,v.spotLights.needsUpdate=L,v.spotLightShadows.needsUpdate=L,v.rectAreaLights.needsUpdate=L,v.hemisphereLights.needsUpdate=L}function ku(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return C},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(v,L,B){const O=mt.get(v);O.__autoAllocateDepthBuffer=v.resolveDepthBuffer===!1,O.__autoAllocateDepthBuffer===!1&&(O.__useRenderToTexture=!1),mt.get(v.texture).__webglTexture=L,mt.get(v.depthTexture).__webglTexture=O.__autoAllocateDepthBuffer?void 0:B,O.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(v,L){const B=mt.get(v);B.__webglFramebuffer=L,B.__useDefaultFramebuffer=L===void 0};const Wu=y.createFramebuffer();this.setRenderTarget=function(v,L=0,B=0){N=v,b=L,C=B;let O=!0,I=null,Q=!1,at=!1;if(v){const ct=mt.get(v);if(ct.__useDefaultFramebuffer!==void 0)pt.bindFramebuffer(y.FRAMEBUFFER,null),O=!1;else if(ct.__webglFramebuffer===void 0)Ft.setupRenderTarget(v);else if(ct.__hasExternalTextures)Ft.rebindTextures(v,mt.get(v.texture).__webglTexture,mt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const Et=v.depthTexture;if(ct.__boundDepthTexture!==Et){if(Et!==null&&mt.has(Et)&&(v.width!==Et.image.width||v.height!==Et.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");Ft.setupDepthRenderbuffer(v)}}const Tt=v.texture;(Tt.isData3DTexture||Tt.isDataArrayTexture||Tt.isCompressedArrayTexture)&&(at=!0);const Rt=mt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(Rt[L])?I=Rt[L][B]:I=Rt[L],Q=!0):v.samples>0&&Ft.useMultisampledRTT(v)===!1?I=mt.get(v).__webglMultisampledFramebuffer:Array.isArray(Rt)?I=Rt[B]:I=Rt,D.copy(v.viewport),z.copy(v.scissor),V=v.scissorTest}else D.copy(St).multiplyScalar(H).floor(),z.copy(Nt).multiplyScalar(H).floor(),V=jt;if(B!==0&&(I=Wu),pt.bindFramebuffer(y.FRAMEBUFFER,I)&&O&&pt.drawBuffers(v,I),pt.viewport(D),pt.scissor(z),pt.setScissorTest(V),Q){const ct=mt.get(v.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+L,ct.__webglTexture,B)}else if(at){const ct=L;for(let Tt=0;Tt<v.textures.length;Tt++){const Rt=mt.get(v.textures[Tt]);y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0+Tt,Rt.__webglTexture,B,ct)}}else if(v!==null&&B!==0){const ct=mt.get(v.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,ct.__webglTexture,B)}M=-1},this.readRenderTargetPixels=function(v,L,B,O,I,Q,at,dt=0){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ct=mt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&at!==void 0&&(ct=ct[at]),ct){pt.bindFramebuffer(y.FRAMEBUFFER,ct);try{const Tt=v.textures[dt],Rt=Tt.format,Et=Tt.type;if(!bt.textureFormatReadable(Rt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Et)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}L>=0&&L<=v.width-O&&B>=0&&B<=v.height-I&&(v.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+dt),y.readPixels(L,B,O,I,vt.convert(Rt),vt.convert(Et),Q))}finally{const Tt=N!==null?mt.get(N).__webglFramebuffer:null;pt.bindFramebuffer(y.FRAMEBUFFER,Tt)}}},this.readRenderTargetPixelsAsync=async function(v,L,B,O,I,Q,at,dt=0){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ct=mt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&at!==void 0&&(ct=ct[at]),ct)if(L>=0&&L<=v.width-O&&B>=0&&B<=v.height-I){pt.bindFramebuffer(y.FRAMEBUFFER,ct);const Tt=v.textures[dt],Rt=Tt.format,Et=Tt.type;if(!bt.textureFormatReadable(Rt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Et))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Bt=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,Bt),y.bufferData(y.PIXEL_PACK_BUFFER,Q.byteLength,y.STREAM_READ),v.textures.length>1&&y.readBuffer(y.COLOR_ATTACHMENT0+dt),y.readPixels(L,B,O,I,vt.convert(Rt),vt.convert(Et),0);const Yt=N!==null?mt.get(N).__webglFramebuffer:null;pt.bindFramebuffer(y.FRAMEBUFFER,Yt);const ne=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await ls(y,ne,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,Bt),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,Q),y.deleteBuffer(Bt),y.deleteSync(ne),Q}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(v,L=null,B=0){const O=Math.pow(2,-B),I=Math.floor(v.image.width*O),Q=Math.floor(v.image.height*O),at=L!==null?L.x:0,dt=L!==null?L.y:0;Ft.setTexture2D(v,0),y.copyTexSubImage2D(y.TEXTURE_2D,B,0,0,at,dt,I,Q),pt.unbindTexture()};const Xu=y.createFramebuffer(),qu=y.createFramebuffer();this.copyTextureToTexture=function(v,L,B=null,O=null,I=0,Q=null){Q===null&&(I!==0?(kA("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Q=I,I=0):Q=0);let at,dt,ct,Tt,Rt,Et,Bt,Yt,ne;const Zt=v.isCompressedTexture?v.mipmaps[Q]:v.image;if(B!==null)at=B.max.x-B.min.x,dt=B.max.y-B.min.y,ct=B.isBox3?B.max.z-B.min.z:1,Tt=B.min.x,Rt=B.min.y,Et=B.isBox3?B.min.z:0;else{const Ie=Math.pow(2,-I);at=Math.floor(Zt.width*Ie),dt=Math.floor(Zt.height*Ie),v.isDataArrayTexture?ct=Zt.depth:v.isData3DTexture?ct=Math.floor(Zt.depth*Ie):ct=1,Tt=0,Rt=0,Et=0}O!==null?(Bt=O.x,Yt=O.y,ne=O.z):(Bt=0,Yt=0,ne=0);const $t=vt.convert(L.format),yt=vt.convert(L.type);let ee;L.isData3DTexture?(Ft.setTexture3D(L,0),ee=y.TEXTURE_3D):L.isDataArrayTexture||L.isCompressedArrayTexture?(Ft.setTexture2DArray(L,0),ee=y.TEXTURE_2D_ARRAY):(Ft.setTexture2D(L,0),ee=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,L.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,L.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,L.unpackAlignment);const Vt=y.getParameter(y.UNPACK_ROW_LENGTH),be=y.getParameter(y.UNPACK_IMAGE_HEIGHT),zA=y.getParameter(y.UNPACK_SKIP_PIXELS),Re=y.getParameter(y.UNPACK_SKIP_ROWS),nn=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,Zt.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Zt.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,Tt),y.pixelStorei(y.UNPACK_SKIP_ROWS,Rt),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Et);const Ae=v.isDataArrayTexture||v.isData3DTexture,Le=L.isDataArrayTexture||L.isData3DTexture;if(v.isDepthTexture){const Ie=mt.get(v),xe=mt.get(L),Ee=mt.get(Ie.__renderTarget),Ti=mt.get(xe.__renderTarget);pt.bindFramebuffer(y.READ_FRAMEBUFFER,Ee.__webglFramebuffer),pt.bindFramebuffer(y.DRAW_FRAMEBUFFER,Ti.__webglFramebuffer);for(let gA=0;gA<ct;gA++)Ae&&(y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,mt.get(v).__webglTexture,I,Et+gA),y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,mt.get(L).__webglTexture,Q,ne+gA)),y.blitFramebuffer(Tt,Rt,at,dt,Bt,Yt,at,dt,y.DEPTH_BUFFER_BIT,y.NEAREST);pt.bindFramebuffer(y.READ_FRAMEBUFFER,null),pt.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else if(I!==0||v.isRenderTargetTexture||mt.has(v)){const Ie=mt.get(v),xe=mt.get(L);pt.bindFramebuffer(y.READ_FRAMEBUFFER,Xu),pt.bindFramebuffer(y.DRAW_FRAMEBUFFER,qu);for(let Ee=0;Ee<ct;Ee++)Ae?y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,Ie.__webglTexture,I,Et+Ee):y.framebufferTexture2D(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,Ie.__webglTexture,I),Le?y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,xe.__webglTexture,Q,ne+Ee):y.framebufferTexture2D(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_2D,xe.__webglTexture,Q),I!==0?y.blitFramebuffer(Tt,Rt,at,dt,Bt,Yt,at,dt,y.COLOR_BUFFER_BIT,y.NEAREST):Le?y.copyTexSubImage3D(ee,Q,Bt,Yt,ne+Ee,Tt,Rt,at,dt):y.copyTexSubImage2D(ee,Q,Bt,Yt,Tt,Rt,at,dt);pt.bindFramebuffer(y.READ_FRAMEBUFFER,null),pt.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else Le?v.isDataTexture||v.isData3DTexture?y.texSubImage3D(ee,Q,Bt,Yt,ne,at,dt,ct,$t,yt,Zt.data):L.isCompressedArrayTexture?y.compressedTexSubImage3D(ee,Q,Bt,Yt,ne,at,dt,ct,$t,Zt.data):y.texSubImage3D(ee,Q,Bt,Yt,ne,at,dt,ct,$t,yt,Zt):v.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,Q,Bt,Yt,at,dt,$t,yt,Zt.data):v.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,Q,Bt,Yt,Zt.width,Zt.height,$t,Zt.data):y.texSubImage2D(y.TEXTURE_2D,Q,Bt,Yt,at,dt,$t,yt,Zt);y.pixelStorei(y.UNPACK_ROW_LENGTH,Vt),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,be),y.pixelStorei(y.UNPACK_SKIP_PIXELS,zA),y.pixelStorei(y.UNPACK_SKIP_ROWS,Re),y.pixelStorei(y.UNPACK_SKIP_IMAGES,nn),Q===0&&L.generateMipmaps&&y.generateMipmap(ee),pt.unbindTexture()},this.initRenderTarget=function(v){mt.get(v).__webglFramebuffer===void 0&&Ft.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?Ft.setTextureCube(v,0):v.isData3DTexture?Ft.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?Ft.setTexture2DArray(v,0):Ft.setTexture2D(v,0),pt.unbindTexture()},this.resetState=function(){b=0,C=0,N=null,pt.reset(),st.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return 2e3}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=Gt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Gt._getUnpackColorSpace()}}const rA=Math.PI/180;function OA(n,t,e=1,A=new U){const i=(90-n)*rA,r=(t+180)*rA;return A.set(-e*Math.sin(i)*Math.cos(r),e*Math.cos(i),e*Math.sin(i)*Math.sin(r))}function jc(n,t,e,A){const i=(A-t)*rA,r=n*rA,s=e*rA,a=Math.cos(s)*Math.cos(i),l=Math.cos(s)*Math.sin(i),o=Math.atan2(Math.sin(r)+Math.sin(s),Math.sqrt((Math.cos(r)+a)*(Math.cos(r)+a)+l*l)),h=t*rA+Math.atan2(l,Math.cos(r)+a);return{lat:o/rA,lng:h/rA}}class Kc{constructor(){this.camera=new ur(-1,1,1,-1,.01,100),this.viewport={width:1,height:1},this.centerPx={x:0,y:0},this.radiusPx=1,this.lat=0,this.lng=0,this._v=new U,this._normal=new U,this._camDir=new U(0,0,1)}get camDir(){return this._camDir}lookAtLatLng(t,e){this.lat=t,this.lng=e,OA(t,e,10,this.camera.position),this.camera.up.set(0,1,0),this.camera.lookAt(0,0,0),this.camera.updateMatrixWorld(!0),this.camera.updateProjectionMatrix(),this._camDir.copy(this.camera.position).normalize()}layout(t,e,A,i){this.viewport.width=t,this.viewport.height=e,this.centerPx=A,this.radiusPx=i;const r=1/i,s=this.camera;s.left=-A.x*r,s.right=(t-A.x)*r,s.top=A.y*r,s.bottom=-(e-A.y)*r,s.updateProjectionMatrix(),s.updateMatrixWorld(!0)}project(t,e,A=0){const i=OA(t,e,1+A,this._v);this._normal.copy(i).normalize();const r=this._normal.dot(this._camDir);return i.project(this.camera),{x:(i.x*.5+.5)*this.viewport.width,y:(-i.y*.5+.5)*this.viewport.height,depth:r,visible:r>0}}}const Zc={latStep:2.4,latMin:-58,latMax:82,lngStep:2.4};function Qc(n,t){const{latStep:e,latMin:A,latMax:i,lngStep:r}=n,s=Math.round((i-A)/e)+1,a=Math.max(1,Math.round(360/r));let l=0;for(let o=0;o<s;o++){const h=A+o*e;for(let c=0;c<a;c++)t(h,-180+c*r,l++)}}const Nn=720,Si=360,Jc="AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+//8/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P////8HAAAA8P//////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+//////8HAAA+/P///z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7//////wf4////////////D/AfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD//////wf8////////////+/9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/sP/////f/D///////////////8BAAAAAAAAAAAAAAAAAADgPQAAAAAAAAAAAAD+DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA//8B/P//D/7//////////////wcAAAAAAAAAAPj/HwAAAADgAwAAAAAAAAAAAAD/PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA///7////AOD//////////////wcAAAAAAADAxw//HwAAAAAAAAAAAAAAAAAAAAD8/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAYAAA4P/P//8AAPz//////////////wMAAAAAAADA//8AAAAAAAAAAAAAAAAAAAAAAADw/zgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgH948P/8//8A+P///////////////wEAAAAAAACA//8AAAAAAAAAAAAAAAAAAAAAAAAAAP4DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPj4AQ78///A/////////////////wEAAAAAAAAA/j88AAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAPAACADwDn/w8A/v///////////////wEAAAAAAAAA4A/8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfwAAAAAAAAD//wEA4P///////////////wMAAAAAAAAA8AcAAAAAAAAAAAAAAAAAAAAAAAAAAPAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgfwAgAADA/+H//w8A+P//////////////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAPABAAAAAAAAAPw/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4Ax/wAPgf4AMAwAAAwP//////////////fwAAAAAAAAAAAAAAAAAAAAAAAAAA/P8AAAAAAAAA8P///wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP/hD/gfwB8ADgAAAAAA/v///////////wEAAAAAAAAAAAAAAAAAAAAAAADg/wEAAAAAAAD+/////w8AAAAAAPj/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P//D8CPj////wAAAAAA+P///////////wEAAAAAAAAAAAAAAAAAAAAAAAD+BwAAAAAAAP7//////wcAAAAAAPz/8wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAHAAAAD/7//wAAAAAA4P///////////wAAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAAAA4P//////fwAAAAAAAOAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAMD/AAAAAAAAAAAAAAAAAAAAwP//////////PwAAAAAAAAAAAAAAAAAAAAAAAMAfAAAAAAAA4P//////BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//wAAAIAA/gcIgAAAAAAAAP//////////fwAAAAAAAAAAAAAAAAAAAAAAAPgHAAAAAAD4/////////wMAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/fwIAeOAf/8HHnz8AAAAAAP7/////////AQAAAAAAAAAAAAAAAAAAAAAAAPgDAAAAAAD+//////////8/wP8AAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/5/cYH7g/P/DvfwAAAAAAAPz/////////BwAAAAAAAAAAAAAAAAAAAAAAAP4AAAD8YQD+//////////////8DAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD/+f9/P+B/DvD/f/4BAAAAAPz///////9/AAAAAAAAAAAAAAAAAAAAAAAAAH4AAAD8Q/j8//////////////8DAID//wMAAAAAAAAAAAAAAAAAAAAAAAAAAOB//P9/PwB/DvD///8PAAAAAP7/////////BwAAAAAAAAAAAAAAAAAAAAAAgH8AAAD/cP////////////////8DAYD//w8AAAAAAAAAHwAAAADAAAAAAAAAAAA+gP//fwCAP/D/////AQAAAMD////////fDwAAAAAAAAAAAAAAAAAAAAAAAPwBAMD/+P7///////////////+H/////38AAAAAAADAAAAAAAD+9wAAAAAAAAAA8P///wGA/+D/////DwAAADj///////8/DwAAAAAAAAAAAAAA/w8AAAAAAPAHAOD/8f//////////////////////////PwAAAAAAAAAAAPD///8AAAAAAAMAAOD//w+A/wH8/////wAAAPj///////8HAAAAAAAAAAAAAADA/x8AAAAAAAAAAMD/8////////////////////////////wAAAAAAAAAAAPz/////HwAA/0ccwP///z88fgDgIeD//wEAAPj9////////AQAAAAAAAAAAAMD//78BAAAAAAAABsD/+f//////////////////////////fwAA8P8BAAAAAP7//////wf/////A/3//wf++AfgH4D//wMAAAD8//////8/AAAAAAAAAAAAAPD///8fAAAAAAAA/gP/8f//////////////////////////////4f8/AQAA+P///////////////+MfCAAA+HfgPwD/fwAAAAD+//////8DAAAAAAAAAAAAAPz/////BwAAABgg/B/8w///////////////////////////////9///HwAA+P///////////////weAPwD4+P/wDwDw/wMAAMD//////x8AAAAAAAAAAAAAgP//////PwAPwMf////+5///////////////////////////////////fwAAgP///////////////w8f/4/////4H8DD/38AAOD/////PwAAAAAAAAAAAAAA4P///////wE//P//////w////////////////////////////////////wMAAP//////////////////////////H8CB//8AAPD/////HwAAAAAAAAAAAAAA8P///////wMH////////8f////////////////////////////////////sBAPj/////////////////////////BwDg//8PAOD/////DwAAAAAAAAAAAAAA+P///////wPO////////8P////////////////////////////////////8H8PH///////////////////////8PAADw//gPAOD/////AQAADsAHAAAAAAAA/P////8P/Hj//////////v///////////////////////////////////P8H//////////////////////////8HAADw/+ADAMD///8PAAAA//8HAAAAAAAA//8f/v8/AP7/////////////////////////////////////////////AX8A/P/////////////////////////zAPD//4EBAID///8AAAAA8P8PAAAAAACA//8H+P8/AP//////////////////////////////////////////////AHwA+N/////////////////////////xB/j//w8AAAD//38AAAAA/v8HAAAAAADA//8H/v8/Hv7///////////////////////////////////////////9/AAAAAMD////////////////////////4HxDg/z8AAAD//38AAAAA8P8BAAAAAADw//+D//9//P////////////////////////////////////////////8PAAAAAMD//////////////////////wf8+AAA/z8AAAD+/z8AAAAAwB8AAAAAAAD8///g//////////////////////////////////////////////////8fAAB4APj//////////////////////wcgAAAA/3wAAAD8/x8AAAAAAAAAAAAAAAD//z/4//////////////////////////////////////////////////8/AAAAwP///////////////////////wAADgAA+CMAAAD4/wcAAAAAAAAAAAAAAOD//w/8//////////////////////////////////////////////////9/AAAA4P//////////////////////PwAAA/EZgAcAAADw/wcAAAAAAAAAAAAAAPj//wf4/////////////////////////////////////////////z/+//8BAAAA8P//////////////////////HwAAAPH/AAAAAADg/wcAAAAAAAAAAAAAAPz//wf4////////////////////////////////////////////vx///x8AAAAA4P//////////////////////DwAAAPD/AQAAAADA/wMAAAAAAAAAAAAAAPz//wP4////////////////////////////////////////////gY///wMAAAAA4P////74////////////////BwAAAPD/HwAAAAAA8AMAAAAAAAAAAAAAAPz//wf4//////////////////////////////////////////9/AMH/fwAAAAAAnP//f/7A////////////////BwAAAOD/HwAAAAAAwAEAAAAAAAAAAAAAAPz//x/gB/7///////////////////////////////////////8/APj/GAAAAAAAAPD/Px8AwP//////////////BwAAAOD/H+AAAAAAAAAAAAAAAAAAAAAAAPj//x8AAP7///////////////////////////////////////8PAHwCAAAAAAAAAPD/DwIAAP7/////////////BwAAAPD/H/ABAAAAAAAAAAAAAAAAAAAAAPjv/w+A////////////////////////////////////////wYM/AD8AAAAAAAAAADDeHwAAAPj/////////////PwAAAPj/f/ADAAAAAAAAAAAAAAAAAAAAAPjD/wOA//////////////////////////////////////8HAAAAgB8AAAAAAAAAAADgDwAAAMD/////////////PwAAAOD///8HAAAAAAAAAAAAAAAAAOABAOCA/wEA/v////////////////////////////////////8DAAAA4A8AAAAAAAAAAADgcQAAAADw////////////fwAAAMD///8PAAAAAAAAAAAAAAAAAPAAAACA/yEA/v////////////////////////////////////8AAAAA/B8AAAAAAAAAAAB4OAAAAADg////////////fwQAAID///8fAAAAAAAAAAAAAAAAAPAPAAAY/xE4/////////////////////////////////////z8AAAAA/j8AAAAAAAAAAAAeAAAAAADA/////////////z8AAID///8fAAAAAAAAAAAAAAAAAPAHAAAf/gP8/////////////////////////////////////x8AAAAA/z8AAAAAAAAAAIAHAAAAAAAA//////////////8BAMD///8fAAAAAAAAAAAAAAAAAOADAAA//gD8/////////////////////////////////////wcAAACA/z8AAAAAAAAAAPADAAAAAAAA//////////////8PAMD///9/AAAAAAAAAAAAAAAAAOAPAADPHQD8/////////////////////////////////////wMAAACA/w8AAAAAAAAAABwAAAAAAAAA/v//////////////AfD/////AQAAAAAAAAAAAAAAAMAfAACOAQD4/////////////////////////////////////wAAAACA/wcAAAAAAAAAgAMAAAAAAAAA+P//////////////B/7/////HwAAAAAAAAAAAAAAAI8/AAAOAAz/////////////////////////////////////PwAAAACA/w8AAAAAAAAAAAAAAAAAAAAA+P//////////////B/7/////PwAAAAAAAAAAAAAAwA98AAA+g////////////////////////////////////////wMAAACA/wEAAAAAAAAAAAAAAAAAAADA4P//////////////B/z/////PwAAAAAAAAAAAAAA4A/8AAD+//////////////////////////////////////////8hAAAA/wAAAAAAAAAAAAAAAAAAAADAwP//////////////D/z//////wAAAAAAAAAAAAAA4I//APz///////////////////////////////////////////87AAAA/wAAAAAAAAAAAAAAAAAAAACAwP//////////////D/j//////wEAAAAAAAAAAAAA4If/B/7///////////////////////////////////////////9/AAAAHwAAAAAAAAAAAAAAAAAAAAAAAP//////////////H/z//////wEAAAAAAAAAAAAA4IP/B/////////////////////////////////////////////8/AAAAHgAAAAAAAAAAAAAAAAAAAAAAAP//////////////P/z/////fwAAAAAAAAAAAAAAYMD/A/////////////////////////////////////////////87AAAADgAAAAAAAAAAAAAAAAAAAAAAAP7/////////////////////zwEAAAAAAAAAAAAAAAD/x/////////////////////////////////////////////9xAAAAAgAAAAAAAAAAAAAAAAAAAAAAAPz/////////////////////4QAAAAAAAAAAAAAAAMA/+P////////////////////////////////////////////9xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////////////w/+YAAAAAAAAAAAAAAAAGAB+P/////////////////////////////////////////////xAAAAAAAAAAAAAAAAAAAAAAAAAAAAALz//////////////////4MD8AEAAAAAAAAAAAAAAAAA///////////////////////////////////////////////xAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHD+/////////////////wAM+B8AAAAAAAAAAAAAAADw//////////////////////////////////////////////+xAQAAAAAAAAAAAAAAAAAAAAAAAAAAAOD5////////////////P/4A/B8AAAAAAAAAAAAAAADn//////////////////////////////////////////////8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID4////////////////nz8A/D8AAAAAAAAAAAAAAID///////////////////////////////////////////////8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID7////////////////7z8A/j8AAAAAAAAAAAAAAAD+/////////////////////////////////////////////38QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////9z8AADIAAAAAAAAAAAAAAAD4/////////////////////////////////////////////z8wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////////8AADAAAAAAAAAAAAAAAADw////////////8///H/z//////////////////////////x9wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////39OAAAAAAAAAAAAAAAAAADg/////////x8+8P//A/z//////////////////////////w8QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////////AAAAAAAAAAAAAAAAAADA/////////w84+P//Afz//////////////////////////wcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////48/AAAAAAAAAAAAAAAAAADg////+f///wf+//9/gP///////////////////////////wMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//////////////////+MDAAAAAAAAAAAAAAAAAADg////wf///wM4+P8/gP///////////////////////////wE4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////f3AAAAAAAAAAAAAAAAAAAADg///9wf///wEA4P8/4P///////////////////////////wB4BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////DzAAAAAAAAAAAAAAAAAAAADg///gg////wEAgP9/wP//////////////////////////fwD4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAID/////////////////BwAAAAAAAAAAAAAAAAAAwP///xjgB/z//wAAAP9/gP//////////////////////////HgD+BwAAAAAAAAAAAAAAAAAAAAAAAAAAAID/////////////////AwAAAAAAAAAAAAAAAAAAwP//PwDkD/D//wAAAPh/AP7///////////////////////9/AAD/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAID/////////////////AwAAAAAAAAAAAAAAAAAAwP//PwCGH8D//wAAAPj/AP7///////////////////////8/AABnAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD/////////////////DwAAAAAAAAAAAAAAAAAAwP//PwAG/4D//wD+APj/AfL///////////////////////8PAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////9/AAAAAAAAAAAAAAAAAAAAwP//DwAA/IH//4P/A/z/A+D///////////////////////8HAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID///////////////8/AAAAAAAAAAAAAAAAAAAAwP//AQAH8If/cPz/////B/T/////////////////////8/8HAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID///////////////8PAAAAAAAAAAAAAAAAAAAAwP//AAAOwJHfwf//////H/z/////////////////////8P8BAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////8PAAAAAAAAAAAAAAAAAAAAwP//AAAGgAE/4P//////B/j///////////////////9/eH4AAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////8FAAAAAAAAAAAAAAAAAAAA4P//AAAGAAN+4P//////B/z///////////////////8/GHgAAAAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+//////////////8DAAAAAAAAAAAAAAAAAAAA4P//AAAAAAE+4P//////A/D///////////////////8HAPwAAIAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/////////////38DAAAAAAAAAAAAAAAAAAAAwP9/AAAAgAH84P//////A/D///////////////////8PAPwBAIADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/////////////38BAAAAAAAAAAAAAAAAAAAAwP9/AAAAfgC4wP//////A/D///////////////////8/AvADAOADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/////////////38AAAAAAAAAAAAAAAAAAAAAwP8fAAAMeAA4gP//////H/D///////////////////9/H+AHAPIDAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw//////////////8AAAAAAAAAAAAAAAAAAAAAAPgPwPs/AAAwgP/f//////7/////////////////////B/AHAP4DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw//////////////8AAAAAAAAAAAAAAAAAAAAAADAA/v8fAAAAABgO////////////////////////////A+AHAP8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//////////////8AAAAAAAAAAAAAAAAAAAAAADDA//8/AAAAAAAA////////////////////////////AOAHAP8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA//////////////8AAAAAAAAAAAAAAAAAAAAAAPDz//8/AACAHwAM//////////////////////////9/AOAD/v8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/////////////38AAAAAAAAAAAAAAAAAAAAAAPj///8fAAAAAAAG//////////////////////////9/AOAA/z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v///////////x8AAAAAAAAAAAAAAAAAAAAAAPz///8PAAAAAACA////////////////////////////AQDA0wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P///////////wcAAAAAAAAAAAAAAAAAAAAAAP7///8/AAAAAACA////////////////////////////AQAgngAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P///////////wMAAAAAAAAAAAAAAAAAAAAAgP////8/AAAAAADA////////////////////////////AQD4BgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP///////////wAAAAAAAAAAAAAAAAAAAAAAwP//////BwAMAADA////////////////////////////AwD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////fwAAAAAAAAAAAAAAAAAAAAAA4P//////fwA/AADA////////////////////////////BwBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwPv/////////PwAAAAAAAAAAAAAAAAAAAAAA4P//////fwD/AwDg////////////////////////////DwBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgOP/////////HwAAAAAAAAAAAAAAAAAAAAAA8P///////wH/f/Dg////////////////////////////DwAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMP/////////HwAAAAAAAAAAAAAAAAAAAAAA4P///////w//////////////////////////////////BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMf//////x/wHwAAAAAAAAAAAAAAAAAAAAAA4P//////////////////////////////////////////BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIb/////3x8gPgAAAAAAAAAAAAAAAAAAAAAA4P//////////////////4P//////////////////////DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIz/////AwwAPAAAAAAAAAAAAAAAAAAAAAAA8P/////////////f////4P//////////////////////DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj/////AQAAfAAAAAAAAAAAAAAAAAAAAAAA/P/////////////d////wf//////////////////////DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADD+//9/AAAAeAAAAAAAAAAAAAAAAAAAAAAA/v/////////////7////gf//////////////////////BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHz4//8/AAAAfAAAAAAAAAAAAAAAAAAAAADA//////////////+H////A///////////////////////AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHj4//8fAAAA+AAAAAAAAAAAAAAAAAAAAADg//////////////+H////B/z/////////////////////AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAODx//8fAAAA+AwAAAAAAAAAAAAAAAAAAADg//////////////8P////D3j8////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIDh//8fAAAA8CAAAAAAAAAAAAAAAAAAAAD4//////////////8P/v//DwD9////////////////////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADh//8/AAAA4AAAAAAAAAAAAAAAAAAAAAD4//////////////8f/v//TwD5//////////////////9/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACD//8fAAAAQAAAAAAAAAAAAAAAAAAAAAD8//////////////8f/P//X8AB/uH///////////////8/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH//8fAAAAABgAAAAAAAAAAAAAAAAAAAD8//////////////8//P//f+ABAMD///////////////8/DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO/v8fAAAAABAAAAAAAAAAAAAAAAAAAAD+//////////////9/+P////ADAID///////////////8PBgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY/P8fAAAAABAAAAAAAAAAAAAAAAAAAAD///////////////9/4P////8PAAD///////////////8HBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQ+P8PAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////////9/4P////8/AAD8//////////////8BBwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P8PAAAA/wEAAAAAAAAAAAAAAAAAAID/////////////////wP////9/AAD4/////5///////38AAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P8PAACA8Q8AAAAAAAAAAAAAAAAAAID/////////////////wf//////AAD4/////x///////wcAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P8fAAAAAB8AAAAAAAAAAAAAAAAAAMD/////////////////w/////9/AAD4/////wP//////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P8fAOADAHgAAAAAAAAAAAAAAAAAAMD/////////////////w/////8/AADw////PwD///9/EAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAA4P8/APgDAPABAAAAAAAAAAAAAAAAAMD/////////////////g/////8fAAAA/P//PwD+//8/GAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P8/APgBAOAPAAAAAAAAAAAAAAAAAID/////////////////A/////8PAAAA/P//HwD+//8fAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAA4P9/APgBAADgBgAAAAAAAAAAAAAAAID/////////////////A/7///8HAAAA/P//BwD4//8PPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAAAAAAAAAAAAAAwP//APwBAADAPwAAAAAAAAAAAAAAAID/////////////////B/z///8PAAAA/P//AwD4//8HHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Af8BAACAfwAAAAAAAAAAAAAAAAD/////////////////B/z///8DAAAA/P//AQDw//8PHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7/9/8AAHj4SxwAAAAAAAAAAAAAAAD/////////////////D/j///8BAAAA/P//AADg//8PAAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD///8AACAAAAAAAAAAAAAAAAAAAAD/////////////////H/D//38AAAAA/P9/AADg//8fAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD//38AAAAAAAAAAAAAAAAAAAAAAID/////////////////P+D//38AAAAA+P8fAADg//8/AAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//38AAAAAAAAAAAAAAAAAAAAAAID/////////////////P+D//wcAAAAA+P8PAADg+/9/AAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/38AAAAAAAAAAAAAAAAAAAAAAID/////////////////P8D//wEAAAAA+P8HAADw+P//AAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA4H//AAAAAAAAAAAAAAAAAAAAAID/////////////////f+D//wAAAAAA+P8BAABA+P//AQAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//AQAAAAAAAAAAAAAAAAAAAMD//////////////////8D/fwAAAAAA8P8AAAAA+P//AwAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP//AQAAAAAAAAAAAAAAAAAAAOD//////////////////8P/BwAAAAAA4P8AAAAA8P//AwAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//AwAAAAAAAAAAAAAAAAAAAMD//////////////////8f/AwAAAAAA4P8AAAAA8P//AwAALgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD/AQAAAAAAAAAAAAAAAAAAAMD//////////////////49/AAAAAAAA4P8AAAAA8P//BwAA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD+AQAAAAAAAAAAAAAAAAAAAMD//////////////////98HAAAAAAAAwP8BAAAA4Pz/BwAAxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+AQAAAAAAAAAAAAAAAAAAAMD//////////////////78DAAAAAAAAwP8AAAAA4Pz/BwAAhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8AQAAAQAAAAAAAAAAAAAAAID//////////////////38AAAAAAAAAwP8AAAAA4OD/AwAABAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AQCAGQAAAAAAAAAAAAAAAID//////////////////z8AIAAAAAAAgP8AAAAA4MD/AwAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAADweAAAAAAAAAAAAAAAAAD+/////////////////38APwAAAAAAAP8AAAAAYMD/AQAAMAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAQD+/wAgAAAAAAAAAAAAAAD8///////////////////wPwAAAAAAAP8AAAAAYID/AABA0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwAQD+/p83AAAAAAAAAAAAAAD4////////////////////PwAAAAAAAH8AAAAAYAA+AABAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgBwD+/P8fAAAAAAAAAAAAAADw////////////////////HwAAAAAAAD4AAAAAIAAcAAAgYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw///P8/AAAAAAAAAAAAAADg////////////////////HwAAAAAAAD4DAAAAIAAMAAAQAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/pn///9/AAAAAAAAAAAAAADA////////////////////HwAAAAAAAA4DAAAA8AAEAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAePD/////AQAAAAAAAAAAAADA////////////////////DwAAAAAAAIgHAAAA8AEAAAAAwB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4Pj/////AwAAAAAAAAAAAADA////////////////////DwAAAAAAAAAHAAAAwAEAAAAA8B8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQPD/////BwAAAAAAAAAAAACA////////////////////BwAAAAAAAAAHAAAAgAEAAAAAEB8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD/////DwAAAAAAAAAAAAAA/v//////////////////BwAAAAAAAAAHAAAAAAcAAAAGABcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD/////HwAAAAAAAAAAAAAA/P//H/7/////////////AwAAAAAAAAAHAAAAAA8AAAAGAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD//////w8AAAAAAAAAAAAA8P//Afz/////////////AwAAAAAAAAAAAAAAAB4AAAAfAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD//////38AAAAAAAAAAAAA4P9/APz/////////////AQAAAAAAAAAAAACABz8AAMA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD///////8AAAAAAAAAAAAAwAcAAPj/////////////AAAAAAAAAAAAAACAD34AAOAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD///////8BAAAAAAAAAAAAAAAAAAD8////////////AAAAAAAAAAAAAAAAH34AAPAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD///////8DAAAAAAAAAAAAAAAAAAD4//////////9/AAAAAAAAAAAAAAAAPnwAAPgHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD///////8DAAAAAAAAAAAAAAAAAAD4//////////8/AAAAAAAAAAAAAAAAfHgAAPwHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD///////8DAAAAAAAAAAAAAAAAAAD4//////////8fAAAAAAAAAAAAAAAA+HgAgP8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPj///////8HAAAAAAAAAAAAAAAAAAD4//////////8PAAAAAAAAAAAAAAAA8PEAgP8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPj///////8PAAAAAAAAAAAAAAAAAAD4//////////8DAAAAAAAAAAAAAAAA4M8AyP8PAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPz///////8PAAAAAAAAAAAAAAAAAAD4//////////8BAAAAAAAAAAAAAAAAwJ8A/P8fAIIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////8PAAAAAAAAAAAAAAAAAAD4/////////38AAAAAAAAAAAAAAAAAwD8A/P8P/4EBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////8HAAAAAAAAAAAAAAAAAAD4/////////z8AAAAAAAAAAAAAAAAAwH8A/P8HAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP////////9/AAAAAAAAAAAAAAAAAAD8/////////x8AAAAAAAAAAAAAAAAAgH8A/P+HAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP////////9/AwAAAAAAAAAAAAAAAAD8/////////w8AAAAAAAAAAAAAAAAAAH8A+P+HYQCBDwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////HwAAAAAAAAAAAAAAAAD8/////////w8AAAAAAAAAAAAAAAAAAP4B+P+DHwDADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////fwAAAAAAAAAAAAAAAAD8/////////wcAAAAAAAAAAAAAAAAAAP4B8P+BDwAADxgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////fwAAAAAAAAAAAAAAAAD4/////////wMAAAAAAAAAAAAAAAAAAPwD8P/BDwAAGH4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP///////////w8AAAAAAAAAAAAAAADw/////////wAAAAAAAAAAAAAAAAAAAPgP8P/BDQAAH/8HAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP////////////8BAAAAAAAAAAAAAADg/////////wAAAAAAAAAAAAAAAAAAAPAPAPvBHTAf/v8fAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP////////////8HAAAAAAAAAAAAAADA/////////wAAAAAAAAAAAAAAAAAAAOAPAOCAHSAg9P//AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP////////////8PAAAAAAAAAAAAAACA////////fwAAAAAAAAAAAAAAAAAAAOAPAACAOQAAwP//A4ADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4P////////////8fAAAAAAAAAAAAAACA////////PwAAAAAAAAAAAAAAAAAAAIAPAACAKQAAAP7/B4ABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////////AQAAAAAAAAAAAAAA////////PwAAAAAAAAAAAAAAAAAAAAAPAACAIQAAAPj/D8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////////AwAAAAAAAAAAAAAA////////PwAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAPD/H34gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP//////////////AwAAAAAAAAAAAAAA////////PwAAAAAAAAAAAAAAAAAAAADwAAAAAAAAEOD/fxhAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgP//////////////AwAAAAAAAAAAAAAA/v//////fwAAAAAAAAAAAAAAAAAAAAD44QAAAAAAEOD/PwCAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7/////////////AwAAAAAAAAAAAAAA/P//////fwAAAAAAAAAAAAAAAAAAAADg/wMAAAAAAOD/PwAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP7/////////////AwAAAAAAAAAAAAAA/P//////PwAAAAAAAAAAAAAAAAAAAAAA+R8AAAAAAPD/fQAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPz/////////////AwAAAAAAAAAAAAAA/P//////PwAAAAAAAAAAAAAAAAAAAAAAgH8AIAAAADh/8AAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPz/////////////AwAAAAAAAAAAAAAA/P//////fwAAAAAAAAAAAAAAAAAAAAAAAAA8DzwAAAB+4AEAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPj/////////////AQAAAAAAAAAAAAAA/P//////fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAgwAcAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPj/////////////AQAAAAAAAAAAAAAA/P///////wAAAAAAAAAAAAAAAAAAAAAAAACAgQMAAAAAgA8AAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD/////////////AAAAAAAAAAAAAAAA+P///////wAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPD///////////8/AAAAAAAAAAAAAAAA+P///////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD///////////8/AAAAAAAAAAAAAAAA+P///////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD///////////8fAAAAAAAAAAAAAAAA+P///////wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAABgAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD///////////8PAAAAAAAAAAAAAAAA+P///////wEABAAAAAAAAAAAAAAAAAAAAAAAAABA/wMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD///////////8PAAAAAAAAAAAAAAAA/P///////wEABAAAAAAAAAAAAAAAAAAAAAAAAADg/wNwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID///////////8HAAAAAAAAAAAAAAAA/v///////wEADgAAAAAAAAAAAAAAAAAAAAAAAADg/wF4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID///////////8DAAAAAAAAAAAAAAAA/v///////wEADgAAAAAAAAAAAAAAAAAAAAAAAADw/wB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////8DAAAAAAAAAAAAAAAA/////////wEADwAAAAAAAAAAAAAAAAAAAAAAAPj4/wD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////////8DAAAAAAAAAAAAAAAA/////////wOADwAAAAAAAAAAAAAAAAAAAAAAAPz4fwD4AwAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+//////////8DAAAAAAAAAAAAAAAA/////////wHAHwAAAAAAAAAAAAAAAAAAAAAAAP7//wD4BwAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4//////////8DAAAAAAAAAAAAAAAA/////////wHgFwAAAAAAAAAAAAAAAAAAAAAAAP7//wP4BwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//////////8DAAAAAAAAAAAAAACA/////////wD+DwAAAAAAAAAAAAAAAAAAAAAAgP7//wf4BwAAAABAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA//////////8DAAAAAAAAAAAAAACA////////fwD+DwAAAAAAAAAAAAAAAAAAAAAAoP///w/8BwAAAAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////////8DAAAAAAAAAAAAAACA////////DwD/BwAAAAAAAAAAAAAAAAAAAAAA4P///z/8DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////////8DAAAAAAAAAAAAAAAA////////AwD/BwAAAAAAAAAAAAAAAAAAAAAA4P//////DwAAAAAAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P////////8BAAAAAAAAAAAAAAAA////////AQD/BwAAAAAAAAAAAAAAAAAAAAAA8P//////DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P////////8BAAAAAAAAAAAAAAAA/v//////AAD/AwAAAAAAAAAAAAAAAAAAAAAA+P//////HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P////////8BAAAAAAAAAAAAAAAA/v////9/AAD+AwAAAAAAAAAAAAAAAAAAAAAA+P//////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P////////8AAAAAAAAAAAAAAAAA/P////8/AAD+AwAAAAAAAAAAAAAAAAAAAAAA/v///////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P///////38AAAAAAAAAAAAAAAAA/P////8fAAD+AQAAAAAAAAAAAAAAAAAAAADA/////////wEAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P///////38AAAAAAAAAAAAAAAAA+P////8/AAD/AQAAAAAAAAAAAAAAAAAAAAD+/////////wMAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P///////z8AAAAAAAAAAAAAAAAA+P////8/AID/AQAAAAAAAAAAAAAAAAAAAID//////////wcAAAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P///////z8AAAAAAAAAAAAAAAAA8P////9/AID/AAAAAAAAAAAAAAAAAAAAAMD//////////wcAAAAYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8P///////x8AAAAAAAAAAAAAAAAA4P////9/AID/AAAAAAAAAAAAAAAAAAAAAOD//////////wcAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P///////w8AAAAAAAAAAAAAAAAA4P////9/AID/AAAAAAAAAAAAAAAAAAAAAPD//////////z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P///////wAAAAAAAAAAAAAAAAAA4P////9/AIB/AAAAAAAAAAAAAAAAAAAAAPD//////////z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P//////HwAAAAAAAAAAAAAAAAAA4P////9/AIB/AAAAAAAAAAAAAAAAAAAAAPj//////////z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P//////BwAAAAAAAAAAAAAAAAAA4P////9/AIB/AAAAAAAAAAAAAAAAAAAAAPj///////////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P//////AQAAAAAAAAAAAAAAAAAA4P////8fAAA/AAAAAAAAAAAAAAAAAAAAAPj///////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P//////AAAAAAAAAAAAAAAAAAAA4P////8HAAAOAAAAAAAAAAAAAAAAAAAAAPD///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+P////9/AAAAAAAAAAAAAAAAAAAAwP////8BAAAAAAAAAAAAAAAAAAAAAAAAAPD///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P////9/AAAAAAAAAAAAAAAAAAAAwP////8DAAAAAAAAAAAAAAAAAAAAAAAAAPj///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P////9/AAAAAAAAAAAAAAAAAAAAwP////8DAAAAAAAAAAAAAAAAAAAAAAAAAPj///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P////9/AAAAAAAAAAAAAAAAAAAAgP////8BAAAAAAAAAAAAAAAAAAAAAAAAAPD///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P////9/AAAAAAAAAAAAAAAAAAAAgP////8BAAAAAAAAAAAAAAAAAAAAAAAAAPD///////////8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/P////9/AAAAAAAAAAAAAAAAAAAAAP////8BAAAAAAAAAAAAAAAAAAAAAAAAAOD///////////8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8/AAAAAAAAAAAAAAAAAAAAAP7///8AAAAAAAAAAAAAAAAAAAAAAAAAAOD///////////8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8fAAAAAAAAAAAAAAAAAAAAAP7//38AAAAAAAAAAAAAAAAAAAAAAAAAAMD///////////8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8PAAAAAAAAAAAAAAAAAAAAAPz//z8AAAAAAAAAAAAAAAAAAAAAAAAAAMD///////////8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8PAAAAAAAAAAAAAAAAAAAAAPj//x8AAAAAAAAAAAAAAAAAAAAAAAAAAMD///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8HAAAAAAAAAAAAAAAAAAAAAPj//x8AAAAAAAAAAAAAAAAAAAAAAAAAAMD///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8DAAAAAAAAAAAAAAAAAAAAAPD//w8AAAAAAAAAAAAAAAAAAAAAAAAAAID///////////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v////8BAAAAAAAAAAAAAAAAAAAAAPD//wcAAAAAAAAAAAAAAAAAAAAAAAAAAID///8D//////8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v///38AAAAAAAAAAAAAAAAAAAAAAPD//wMAAAAAAAAAAAAAAAAAAAAAAAAAAAD//y8A+P////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v///38AAAAAAAAAAAAAAAAAAAAAAPD//wAAAAAAAAAAAAAAAAAAAAAAAAAAAID//wMA8P////8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v///z8AAAAAAAAAAAAAAAAAAAAAAPD/fwAAAAAAAAAAAAAAAAAAAAAAAAAAAID//wAA4Pf//38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/////x8AAAAAAAAAAAAAAAAAAAAAAPD/DwAAAAAAAAAAAAAAAAAAAAAAAAAAAMD//wAAwPP//38AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////9x8AAAAAAAAAAAAAAAAAAAAAAOAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMB/AAAAwPn//z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////jwcAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfAAAAgOj//z8AAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA////HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOD//x8AAAAAABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA////HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD//x8AAAAAABgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAID//w8AAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//w8AAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//w8AAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg////HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/wcAAAAAAOARAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg////DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4fQAAAAAAAOAfAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg////AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAOAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA//8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//8PAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADg//8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw//8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAMIBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw/z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AEAAAAAAOsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw/z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AEAAAAAgA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ/38BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AAAAAAAgA8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AAAAAAAwAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ/z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcAAAAAAA8AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADA/z8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADI/x8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAfwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/x8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgHwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4/x8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8/w8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/w8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAeAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+/wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD+fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8PwAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8PwDADwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8fwBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwdwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQ+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABg+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACA/wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/j8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA8AMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGAAAAAAAAAAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8DAAAAAAAAAAAAAPgDgB8AAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwP8HAAAAAAAAgAEAAP4P8P8D8P/9/wEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/v8fAAAAAAAg/v9//v////9/////////DwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADw////gw8AAAD8////////////////////HwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///////8DAID//////////////////////wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4APj///////8HAOD//////////////////////38wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnv8DAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD8B/////////8HAPD/////////////////////////AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAnv8HAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMD/3/////////8HgP//////////////////////////fwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAvv8HAAAAAAAAAAAAAAAAAAAAAMAPvv8HAPz///////////8A+P///////////////////////////wMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf/8PAAAAAAAAAAAAAAAAAAAAAP6f//////////////////8D/P////////////////////////////8BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADwf/4fAAAAAAAAAAAAAAAAAB54/P////////////////////8B////////////////////////////////BwAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAD8f/wfAAAAAAAAAAAAAAAA/P////////////////////////+A////////////////////////////////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAPB/AAAAAAA4H/w/AAAAAAAAAAAAAAAA///////////////////////////3////////////////////////////////PwAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAACAAAAAAAP8/AAAAAAAAAAAAAADg////////////////////////////////////////////////////////////HwAAAAAAAAAAAAAAAAAAAAAAAAAAAP4P4PAfgAAA/v9/AAAAAAAAAAAAAAD+////////////////////////////////////////////////////////////DwAAAAAAAAAAAAAAAAAAAGD4AwAAAPz/////73/4//8/AAAAAAAAAAAAAID/////////////////////////////////////////////////////////////AQAAAAAAAAAAAAAAAAAAAAAA/D8AAMD///////////8fAAAAAAAAAAAAAAD+//////////////////////////////////////////////////////////8/AAAAAAAAAAAAAAAAAOD///////8PAID///////////8BAAAAAAAAAAAAAID///////////////////////////////////////////////////////////8HAAAAAAAAAAAAAAAA+P///////////7///////////38AAAAAAAAAAAAAAPD///////////////////////////////////////////////////////////8BAAAAAAAAAAAAAAD4/////////////////////////wMAAAAAAAAAAAAAgP////////////////////////////////////////////////////////////8AAAAAAAAAAAAAAADw////////////////////////DwAAAAAAAAAAAAAA/////////////////////////////////////////////////////////////38AAAAAAAAAAAAAAAD//////////////////////z8AAAAAAAAAAAAAAMD//////////////////////////////////////////////////////////////38AAAAAAAAAAAA4H/j///////////////////////8BAAAAAAAAAAAAAPj///////////////////////////////////////////////////////////////8AAAAAAAAAAADw//////////////////////////8PAAAAAAAAAAAAwP////////////////////////////////////////////////////////////////8AAAAAAAAAAADg/////////////////////////z8AAAAAAADAfwAA/v////////////////////////////////////////////////////////////////8HAAAAAAAAAP4A/////////////////////////w8AAAAAAADw/wEA//////////////////////////////////////////////////////////////////8/AAAAAAAAAPgBAP///////////////////////w8AAAAAAAD4/wEA/////////////////////////////////////////////////////////////////wcAAAAAAAAAAAAAAAD+/////////////////////38AAABAAAD+/wEAAOD//////////////////////////////////////////////////////////////wMAAAAAAAAAAAAAAAD4//////////////////////8BAADgAfD/fwAAAID//////////////////////////////////////////////////////////////wEAAAAAAAAAAAAAAAD+////////////////////////A8D/AOD/AAAAAP///////////////////////////////////////////////////////////////wAAAAAAAAAAAAAA//P/////////////////////////fwAAAAAAAADg/////////////////////////////////////////////////////////////////wMAAAAAAAAAAAAA+P////////////////////////////8DAADwB/j//////////////////////////////////////////////////////////////////w8AAAAAAAAAAAAAwP////////////////////////////9/AOD//////////////////////////////////////////////////////////////////////z8AAAAAAAAAAAAAwP//////////////////////////////g/////////////////////////////////////////////////////////////////////////8HAAAAAAAAAAAA4P//////////////////////////////////////////////////////////////////////////////////////////////////////////AQAAAAAAAAAAwP//////////////////////////////////////////////////////////////////////////////////////////////////////////BwAAhOF/AAAAAPD//////////////////////////////////////////////////////////////////////////////////////////////////////////8MBAAAAwP//////AwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA/AP8/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA";let tn=null;function tu(){if(tn)return tn;const n=atob(Jc);tn=new Uint8Array(n.length);for(let t=0;t<n.length;t++)tn[t]=n.charCodeAt(t);return tn}function eu(n,t){const e=tu();let A=Math.floor((t+180)/360*Nn),i=Math.floor((90-n)/180*Si);A<0?A=0:A>=Nn&&(A=Nn-1),i<0?i=0:i>=Si&&(i=Si-1);const r=i*Nn+A;return(e[r>>3]&1<<(r&7))!==0}function Vr({lattice:n=Zc,landColor:t=1315866,oceanColor:e=12763852,landSize:A=2,oceanSize:i=1.15,landOpacity:r=.92,oceanOpacity:s=.75}={}){const a=[],l=[];Qc(n,(u,w)=>{a.push(u),l.push(w)});const o=a.length,h=new Float32Array(o*3),c=new Float32Array(o),d=new U;let p=0;for(let u=0;u<o;u++){OA(a[u],l[u],1,d),h[u*3]=d.x,h[u*3+1]=d.y,h[u*3+2]=d.z;const w=eu(a[u],l[u])?1:0;c[u]=w,p+=w}const m=new we;m.setAttribute("position",new oe(h,3)),m.setAttribute("aLand",new oe(c,1));const _=new ze({transparent:!0,depthWrite:!1,uniforms:{uLandColor:{value:new zt(t)},uOceanColor:{value:new zt(e)},uLandSize:{value:A},uOceanSize:{value:i},uLandOpacity:{value:r},uOceanOpacity:{value:s},uPixelRatio:{value:1},uSizeScale:{value:1},uCamDir:{value:new U(0,0,1)},uFadeStart:{value:.06}},vertexShader:`
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
    `}),f=new Gs(m,_);return f.frustumCulled=!1,f.renderOrder=2,f.userData.stats={count:o,landCount:p},f}function kr({color:n=1315866,opacity:t=.13,latStep:e=10,lngStep:A=10,latLimit:i=80,segments:r=128}={}){const s=[],a=new U,l=(d,p)=>{OA(d,p,1.0005,a),s.push(a.x,a.y,a.z)};for(let d=-i;d<=i;d+=e)for(let p=0;p<r;p++)l(d,-180+p/r*360),l(d,-180+(p+1)/r*360);for(let d=-180;d<180;d+=A)for(let p=0;p<r;p++)l(-90+p/r*180,d),l(-90+(p+1)/r*180,d);const o=new we;o.setAttribute("position",new oe(new Float32Array(s),3));const h=new ze({transparent:!0,depthWrite:!1,uniforms:{uColor:{value:new zt(n)},uOpacity:{value:t},uCamDir:{value:new U(0,0,1)},uFadeStart:{value:.1}},vertexShader:`
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
    `}),c=new Os(o,h);return c.frustumCulled=!1,c.renderOrder=1,c}function Au({color:n=1315866,opacity:t=.28,segments:e=512}={}){const A=new Float32Array(e*3);for(let l=0;l<e;l++){const o=l/e*Math.PI*2;A[l*3]=Math.cos(o),A[l*3+1]=Math.sin(o),A[l*3+2]=0}const i=new we;i.setAttribute("position",new oe(A,3));const r=new er({color:n,transparent:!0,opacity:t,depthWrite:!1}),s=new zs(i,r);s.frustumCulled=!1,s.renderOrder=3;const a=new U(0,0,1);return s.userData.faceCamera=l=>{s.quaternion.setFromUnitVectors(a,l)},s}function nu(n){const t=n.length,e=new Float32Array(t*2*3),A=new Float32Array(t*2*3),i=new Float32Array(t*2*3),r=new Float32Array(t*2),s=new Float32Array(t*2);for(let o=0;o<t;o++){const h=n[o],c=n[Math.max(o-1,0)],d=n[Math.min(o+1,t-1)],p=t===1?0:o/(t-1);for(let m=0;m<2;m++){const _=(o*2+m)*3;e[_]=h.x,e[_+1]=h.y,e[_+2]=h.z,A[_]=c.x,A[_+1]=c.y,A[_+2]=c.z,i[_]=d.x,i[_+1]=d.y,i[_+2]=d.z,r[o*2+m]=m===0?-1:1,s[o*2+m]=p}}const a=new Uint32Array((t-1)*6);for(let o=0;o<t-1;o++){const h=o*2,c=o*6;a[c]=h,a[c+1]=h+1,a[c+2]=h+2,a[c+3]=h+2,a[c+4]=h+1,a[c+5]=h+3}const l=new we;return l.setAttribute("position",new oe(e,3)),l.setAttribute("aPrev",new oe(A,3)),l.setAttribute("aNext",new oe(i,3)),l.setAttribute("aSide",new oe(r,1)),l.setAttribute("aAlong",new oe(s,1)),l.setIndex(new oe(a,1)),l}const iu=`
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
`,ru=`
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
`;function Wr({baseColor:n=6710886,satColor:t=0,baseOpacity:e=0,satOpacity:A=1,width:i=2,opacity:r=1,mode:s=0,tailLength:a=.035,satFeather:l=.02}={}){return new ze({transparent:!0,depthWrite:!1,depthTest:!1,side:2,uniforms:{uResolution:{value:new Xt(1,1)},uWidth:{value:i},uOpacity:{value:r},uBaseColor:{value:new zt(n)},uSatColor:{value:new zt(t)},uBaseOpacity:{value:e},uSatOpacity:{value:A},uDrawProgress:{value:0},uHeadT:{value:0},uTailLength:{value:a},uSatFeather:{value:l},uMode:{value:s},uCamDir:{value:new U(0,0,1)}},vertexShader:iu,fragmentShader:ru})}function su(n,t,e,A=new U){const i=Math.min(1,Math.max(-1,n.dot(t))),r=Math.acos(i);if(r<1e-6)return A.copy(n);const s=Math.sin(r),a=Math.sin((1-e)*r)/s,l=Math.sin(e*r)/s;return A.set(n.x*a+t.x*l,n.y*a+t.y*l,n.z*a+t.z*l)}function au(n,t,{segments:e=192,lift:A=.055}={}){const i=OA(n.lat,n.lng,1),r=OA(t.lat,t.lng,1),s=[];for(let a=0;a<=e;a++){const l=a/e,o=su(i,r,l);o.multiplyScalar(1+A*Math.sin(Math.PI*l)),s.push(o)}return s}class ou{constructor(t,e,{segments:A=192,lift:i=.055,width:r=2,dropWidth:s=7,baseColor:a=6710886,satColor:l=0,baseOpacity:o=0,satOpacity:h=1,dropBaseColor:c=4473924,tailLength:d=.035}={}){this.from=t,this.to=e,this.tailLength=d;const p=au(t,e,{segments:A,lift:i});this.geometry=nu(p),this.arcMaterial=Wr({baseColor:a,satColor:l,baseOpacity:o,satOpacity:h,width:r,mode:0,tailLength:d}),this.dropMaterial=Wr({baseColor:c,satColor:l,baseOpacity:.75,satOpacity:1,width:s,mode:1,tailLength:d}),this.arc=new Oe(this.geometry,this.arcMaterial),this.drop=new Oe(this.geometry,this.dropMaterial),this.arc.frustumCulled=!1,this.drop.frustumCulled=!1,this.arc.renderOrder=10,this.drop.renderOrder=11,this.group=new ZA,this.group.add(this.arc,this.drop),this.setProgress(0),this.setHead(0)}setProgress(t){const e=Math.min(1,Math.max(0,t));return this.arcMaterial.uniforms.uDrawProgress.value=e,this.dropMaterial.uniforms.uDrawProgress.value=e,this}setHead(t){const e=Math.min(1,Math.max(0,t));return this.arcMaterial.uniforms.uHeadT.value=e,this.dropMaterial.uniforms.uHeadT.value=e,this}setOpacity(t){return this.arcMaterial.uniforms.uOpacity.value=t,this.dropMaterial.uniforms.uOpacity.value=t,this}syncCamera(t,e,A){for(const i of[this.arcMaterial,this.dropMaterial])i.uniforms.uCamDir.value.copy(t),i.uniforms.uResolution.value.set(e,A);return this}dispose(){this.geometry.dispose(),this.arcMaterial.dispose(),this.dropMaterial.dispose()}}const lu=2,cu=500,uu=[.7,1.6];class hu{constructor(t,e){this.root=t,t.style.pointerEvents||(t.style.pointerEvents="none"),this.layout=e,this.anchor=document.querySelector("[data-globe-anchor]")||t,this.box=document.createElement("div"),this.box.className="globe-box",Object.assign(this.box.style,{position:"absolute",top:"0",left:"0",height:"100%",pointerEvents:"none"}),t.appendChild(this.box),this.canvas=document.createElement("canvas"),this.canvas.className="globe-canvas",Object.assign(this.canvas.style,{position:"absolute",inset:"0",width:"100%",height:"100%",display:"block",pointerEvents:"none"}),this.box.appendChild(this.canvas),this.renderer=new $c({canvas:this.canvas,alpha:!0,antialias:!0,powerPreference:"high-performance"}),this.renderer.setClearColor(0,0),this.scene=new Us,this.globeCam=new Kc,this.globeCam.lookAtLatLng(e.cameraLat,e.cameraLng),this.gridOpts={},this.dotOpts={},this.rimOpts={},this.grid=kr(this.gridOpts),this.dots=Vr(this.dotOpts),this.rim=Au(this.rimOpts),this.scene.add(this.grid,this.dots,this.rim),this.routes=[],this._needsResize=!0,this._size={w:0,h:0,dpr:0},this._onFrame=[],this._ro=new ResizeObserver(()=>{this._needsResize=!0}),this._ro.observe(this.root),this._onWindowResize=()=>{this._needsResize=!0},window.addEventListener("resize",this._onWindowResize),window.addEventListener("scroll",this._onWindowResize,{passive:!0}),this._raf=null,this._lastTime=0,this.deltaSeconds=0}onFrame(t){return this._onFrame.push(t),()=>{const e=this._onFrame.indexOf(t);e>=0&&this._onFrame.splice(e,1)}}project(t,e,A=0){return this.globeCam.project(t,e,A)}_bleedHost(t){let e=null,A=this.root.parentElement;for(;A&&A!==document.body;){const i=getComputedStyle(A);(i.overflowX!=="visible"||i.overflowY!=="visible")&&A.getBoundingClientRect().width<t-1&&(e=A),A=A.parentElement}return!e||!e.parentElement?this.root:e.parentElement}_applyLayout(){const t=this.root.getBoundingClientRect(),e=this.anchor.getBoundingClientRect(),A=this.layout.fullBleed,i=document.documentElement.clientWidth||t.width;let r=this.root;A&&(r=this._bleedHost(i),r!==this.box.parentElement&&(r!==this.root&&getComputedStyle(r).position==="static"&&(r.style.position="relative"),r.appendChild(this.box)));const s=r.getBoundingClientRect(),a=A?i:t.width,l=A?-s.left:0;this.box.style.left=`${l}px`,this.box.style.top=`${A?t.top-s.top:0}px`,this.box.style.width=`${a}px`,this.box.style.height=`${t.height}px`,A&&t.left;const o={top:t.top,width:a,height:t.height},h=Math.max(1,Math.round(o.width)),c=Math.max(1,Math.round(o.height)),d=Math.min(window.devicePixelRatio||1,lu);(h!==this._size.w||c!==this._size.h||d!==this._size.dpr)&&(this.renderer.setPixelRatio(d),this.renderer.setSize(h,c,!1),this._size={w:h,h:c,dpr:d},this.dots.material.uniforms.uPixelRatio.value=d);const p=e.top-t.top,m=A?e.left+e.width/2:e.left-t.left+e.width/2;let _,f;if(this.layout.fitRoute>0&&this.route){const{from:S,to:P}=this.route,b=this.layout.aimAtRoute?jc(S.lat,S.lng,P.lat,P.lng):{lat:this.layout.cameraLat,lng:this.layout.cameraLng},C=Math.max(-89,Math.min(89,b.lat+this.layout.tilt));this.globeCam.lookAtLatLng(C,b.lng+this.layout.spin),this.globeCam.layout(h,c,{x:m,y:0},1);const N=this.globeCam.project(S.lat,S.lng),M=this.globeCam.project(P.lat,P.lng),x=Math.hypot(M.x-N.x,M.y-N.y),D=this.layout.refWidth||h,z=Math.max(1,D*this.layout.fitRoute),V=Math.min(this.layout.scaleMax,Math.max(this.layout.scaleMin,h/D));_=z/Math.max(1e-6,x)*V;const X=(N.y+M.y)/2;if(this.layout.apexClearance!==null)f=p+this.layout.apexClearance+_;else{const $=e.height||c;f=p+$*this.layout.routeY-X*_}}else{if(this.layout.hasRefWidth){const S=this.layout.refWidth,P=Math.min(this.layout.scaleMax,Math.max(this.layout.scaleMin,i/S));_=S*this.layout.radiusScale*P}else this._warnedNoFit||(this._warnedNoFit=!0,console.warn('[globe] the globe is sized from its container, so it shrinks with the screen. Add data-ref-width="1440" to #globe-root to hold its size and crop instead.')),_=e.width*this.layout.radiusScale;if(this.layout.radiusMaxVh>0){const S=window.innerHeight||o.height||1;_=Math.min(_,S*this.layout.radiusMaxVh)}f=p+_*this.layout.centerYFactor,this.layout.apexClearance!==null&&(f=Math.max(f,p+this.layout.apexClearance+_))}if(i<this.layout.mobileBelow&&this.layout.mobileScale!==1){const S=this.layout.mobileScale,P=f-_;_*=S,f=P+_}const u={x:m,y:f};this.globeCam.layout(h,c,u,_);const[w,T]=uu;this.dots.material.uniforms.uSizeScale.value=Math.min(T,Math.max(w,_/cu)),this._syncCamDir(),this._needsResize=!1}_syncCamDir(){const t=this.globeCam.camDir;this.dots.material.uniforms.uCamDir.value.copy(t),this.grid.material.uniforms.uCamDir.value.copy(t),this.rim.userData.faceCamera(t);for(const e of this.routes)e.syncCamera(t,this._size.w||1,this._size.h||1)}addRoute(t,e,A){const i=new ou(t,e,A);return this.route={from:t,to:e},this.routes.push(i),this.scene.add(i.group),this._needsResize=!0,i}_replace(t,e,A){const i=this[t];return this.scene.remove(i),i.geometry.dispose(),i.material.dispose(),this[t]=e(A),this.scene.add(this[t]),this._syncCamDir(),t==="dots"&&(this.dots.material.uniforms.uPixelRatio.value=this._size.dpr||1,this._needsResize=!0),this[t]}setGrid(t){return Object.assign(this.gridOpts,t),this._replace("grid",kr,this.gridOpts)}setDots(t){return Object.assign(this.dotOpts,t),this._replace("dots",Vr,this.dotOpts)}start(){if(this._raf!==null)return;const t=e=>{this._raf=requestAnimationFrame(t),this.deltaSeconds=this._lastTime?Math.min((e-this._lastTime)/1e3,.1):0,this._lastTime=e,this._needsResize&&this._applyLayout();for(const A of this._onFrame)A(e,this);this.renderer.render(this.scene,this.globeCam.camera)};this._raf=requestAnimationFrame(t)}stop(){this._raf!==null&&cancelAnimationFrame(this._raf),this._raf=null,this._lastTime=0,this.deltaSeconds=0}dispose(){this.stop(),this._ro.disconnect(),window.removeEventListener("resize",this._onWindowResize),window.removeEventListener("scroll",this._onWindowResize),this.renderer.dispose(),this.canvas.remove()}}const Xr=[{id:"origin",lat:37.7749,lng:-122.4194,label:"San Francisco"},{id:"destination",lat:40.7128,lng:-74.006,label:"New York"}],fe={radiusScale:.403,centerYFactor:.925,cameraLat:-4,cameraLng:-91,globeStart:0,fitRoute:0,routeY:.34,tilt:0,spin:0,aimAtRoute:!1,fullBleed:!1,refWidth:1440,hasRefWidth:!1,scaleMin:1,scaleMax:1,mobileScale:1,mobileBelow:768,radiusMaxVh:0,apexClearance:null};function he(n,t,e){const A=n.getAttribute(t);if(A===null||A.trim()==="")return e;const i=Number.parseFloat(A);return Number.isFinite(i)?i:e}function du(n=document){const t=n.querySelectorAll("[data-globe-place]");if(!t.length)return Xr;const e=[];return t.forEach((A,i)=>{const r=he(A,"data-lat",NaN),s=he(A,"data-lng",NaN);if(!Number.isFinite(r)||!Number.isFinite(s)){console.warn("[globe] skipping place with bad lat/lng",A);return}e.push({id:A.getAttribute("data-id")||`place-${i}`,lat:r,lng:s,label:A.getAttribute("data-label")||"",el:A})}),e.length?e:Xr}function fu(n){return n?{radiusScale:he(n,"data-radius-scale",fe.radiusScale),centerYFactor:he(n,"data-center-y",fe.centerYFactor),cameraLat:he(n,"data-camera-lat",fe.cameraLat),cameraLng:he(n,"data-camera-lng",fe.cameraLng),globeStart:he(n,"data-globe-start",fe.globeStart),fitRoute:he(n,"data-fit-route",fe.fitRoute),routeY:he(n,"data-route-y",fe.routeY),tilt:he(n,"data-tilt",fe.tilt),spin:he(n,"data-spin",fe.spin),aimAtRoute:n.hasAttribute("data-aim-at-route"),fullBleed:n.hasAttribute("data-full-bleed"),refWidth:he(n,"data-ref-width",fe.refWidth),hasRefWidth:n.hasAttribute("data-ref-width"),scaleMin:he(n,"data-scale-min",fe.scaleMin),scaleMax:he(n,"data-scale-max",fe.scaleMax),mobileScale:he(n,"data-mobile-scale",fe.mobileScale),mobileBelow:he(n,"data-mobile-below",fe.mobileBelow),radiusMaxVh:he(n,"data-radius-max-vh",fe.radiusMaxVh),apexClearance:n.hasAttribute("data-apex-clearance")?he(n,"data-apex-clearance",0):fe.apexClearance}:{...fe}}const pu=[["San Francisco",37.7749,-122.4194],["New York",40.7128,-74.006],["London",51.5074,-.1278],["Reykjavik",64.1466,-21.9426],["Mexico City",19.4326,-99.1332],["Bogota",4.711,-74.0721],["Anchorage",61.2181,-149.9003],["Lagos",6.5244,3.3792],["Tokyo",35.6762,139.6503],["Sydney",-33.8688,151.2093],["Cape Town",-33.9249,18.4241],["Honolulu",21.3069,-157.8583],["Null Island",0,0],["North Pole",89.9,0]];function mu(n){const t=document.createElement("div");Object.assign(t.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"40",font:"11px ui-monospace, monospace"}),n.root.appendChild(t);const e=pu.map(([A,i,r])=>{const s=document.createElement("div");return s.textContent=A,Object.assign(s.style,{position:"absolute",transform:"translate(-50%, -50%)",padding:"2px 5px",borderRadius:"3px",background:"#ff2d55",color:"#fff",whiteSpace:"nowrap",willChange:"transform, opacity"}),t.appendChild(s),{el:s,lat:i,lng:r}});return n.onFrame(()=>{for(const A of e){const i=n.project(A.lat,A.lng);A.el.style.opacity=i.visible?String(.35+.65*i.depth):"0",A.el.style.transform=`translate(${i.x}px, ${i.y}px) translate(-50%, -50%)`}}),t}const gu=`
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
`,en=n=>n<0?0:n>1?1:n,_u=n=>1-Math.pow(1-n,3);let qr=!1;function vu(n){if(qr)return;qr=!0;const t=n.createElement("style");t.textContent=gu,n.head.appendChild(t)}function xu(n){vu(document);const t=document.createElement("div");return t.className="globe-pin-layer",Object.assign(t.style,{position:"absolute",inset:"0",pointerEvents:"none",zIndex:"40",overflow:"hidden"}),(n.box||n.root).appendChild(t),t}class Yr{constructor(t,e){this.place=e,this.el=document.createElement("div"),this.el.className="globe-pin";const A=document.createElement("div");A.className="globe-pin__pill";const i=document.createElement("span");i.className="globe-pin__label",i.textContent=e.label,A.appendChild(i);const r=document.createElement("div");r.className="globe-pin__stem";const s=document.createElement("div");s.className="globe-pin__dot",this.el.append(A,r,s),this.pill=A,this.label=i,this.stem=r,this.dot=s,this.fullWidth=0,this.circleWidth=33,t.appendChild(this.el),this._amount=0,this._pill=1,this.setAmount(0)}setAmount(t){return this._amount=t,this}setPill(t){return this._pill=t,this}_measure(){if(this.fullWidth)return;const t=this.pill.style.width,e=this.label.style.opacity;this.pill.style.width="auto",this.label.style.opacity="1";const A=this.pill.offsetWidth,i=this.pill.offsetHeight;A&&(this.fullWidth=Math.ceil(A),this.circleWidth=Math.ceil(i)||33),this.pill.style.width=t,this.label.style.opacity=e}update(t){const e=t.project(this.place.lat,this.place.lng),A=this._amount;if(!e.visible||A<=.001){this.el.style.opacity="0";return}this._measure();const i=Math.min(1,e.depth/.12),r=en(A);this.el.style.opacity=String(r*i),this.el.style.transform=`translate(${e.x}px, ${e.y}px)`;const s=en(this._pill)*r,a=_u(en((s-.3)/.7)),l=en((s-.55)/.45),o=en(s/.3),h=Math.round(this.circleWidth+(this.fullWidth-this.circleWidth)*a);this.pill.style.width=`${h}px`,this.pill.style.marginLeft=`${-h/2}px`,this.pill.style.opacity=String(o),this.pill.style.transform=`scale(${.7+.3*o})`,this.label.style.opacity=String(l),this.stem.style.transform=`scaleY(${r})`,this.dot.style.transform=`scale(${.4+.6*r})`}dispose(){this.el.remove()}}const Mu=new Set(["IMG","SVG","PICTURE","VIDEO","CANVAS"]),Su=1;function Eu(n){return n.hasAttribute("data-type-atom")||Mu.has(n.tagName.toUpperCase())?!0:n.textContent.trim()===""}function yu(n,t){const e=n.nodeValue,A=n.ownerDocument,i=A.createElement("span");i.className="globe-type-run";const r=i,s=[],a=t?/\S+\s*/g:/[\s\S]/g;let l,o=0;for(;(l=a.exec(e))!==null;){l.index>o&&r.appendChild(A.createTextNode(e.slice(o,l.index)));const h=A.createElement("span");h.className="globe-type-unit",h.style.opacity="0",h.style.willChange="opacity",h.textContent=l[0],r.appendChild(h),s.push({kind:"text",el:h,cost:1}),o=l.index+l[0].length}return o<e.length&&r.appendChild(A.createTextNode(e.slice(o))),n.parentNode.replaceChild(i,n),s}function $r(n,t,e){for(const A of Array.from(n.childNodes)){if(A.nodeType===Node.TEXT_NODE){if(A.nodeValue.trim()===""||e.skip(A.parentElement))continue;t.push(...yu(A,e.byWord));continue}A.nodeType===Node.ELEMENT_NODE&&(e.skip(A)||A.classList&&A.classList.contains("globe-type-unit")||(Eu(A)?(A.style.opacity="0",A.style.willChange="opacity",t.push({kind:"atom",el:A,cost:Su})):$r(A,t,e)))}}class Tu{constructor(t,{skipSelector:e=null,byWord:A=!0}={}){this.el=t,this.byWord=A;const i=t.getBoundingClientRect?{w:t.getBoundingClientRect().width,h:t.getBoundingClientRect().height}:null,r=e?Array.from(t.querySelectorAll(e)):[],s=a=>a?r.some(l=>l===a||l.contains(a)):!1;if(this.units=[],$r(t,this.units,{skip:s,byWord:A}),this.total=this.units.reduce((a,l)=>a+l.cost,0),i&&t.getBoundingClientRect){const a=t.getBoundingClientRect();(Math.abs(a.width-i.w)>1||Math.abs(a.height-i.h)>1)&&console.warn("[globe] splitting the text changed the layout of "+(t.getAttribute&&t.getAttribute("class")||"")+" from "+Math.round(i.w)+"x"+Math.round(i.h)+" to "+Math.round(a.width)+"x"+Math.round(a.height))}this.revealed=-1,this.reveal(0)}reveal(t){if(t===this.revealed)return;this.revealed=t;let e=t;for(const A of this.units){const i=e>=A.cost?"1":"0";A.el.style.opacity!==i&&(A.el.style.opacity=i),e-=A.cost}}get done(){return this.revealed>=this.total}}const jr=.6;function Kr(n,t,e){const A=n.getAttribute(t);if(A===null||A.trim()==="")return e;const i=A.split(",").map(r=>Number.parseFloat(r.trim())).filter(r=>Number.isFinite(r));return i.length?i:e}function Ce(n,t,e){const A=n.getAttribute(t);if(A===null||A.trim()==="")return e;const i=Number.parseFloat(A);return Number.isFinite(i)?i:e}const Ze=n=>n<0?0:n>1?1:n,An=n=>1-Math.pow(1-n,3),Ei=n=>n*n*n,wu=n=>1+(1.70158+1)*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2);function bu(n){const t=n.hasAttribute("data-globe-pin"),e=(n.getAttribute("data-anim")||"fade").toLowerCase(),A={el:n,anchored:t,anim:e,lat:Ce(n,"data-lat",0),lng:Ce(n,"data-lng",0),offsetX:Ce(n,"data-offset-x",0),offsetY:Ce(n,"data-offset-y",0),ins:Kr(n,"data-in",[0]),outs:n.hasAttribute("data-out")?Kr(n,"data-out",[]):[],collapse:(n.getAttribute("data-collapse")||"true").toLowerCase()!=="false",dur:Ce(n,"data-dur",jr),outDur:Ce(n,"data-out-dur",Ce(n,"data-dur",jr)),growOut:Ce(n,"data-grow-out",Ce(n,"data-grow-from",.6)),typeSpeed:Ce(n,"data-type-speed",26),typer:null,strokes:null,wipeFrom:(n.getAttribute("data-wipe-from")||"left").toLowerCase(),kids:null,kidStep:.12,growFrom:.6,typedCount:-1,hiddenByDisplay:!1,revealDisplay:""};if(n.getAttribute("data-no-wrap")==="true"){n.style.whiteSpace="nowrap",n.style.flexShrink="0";for(const r of Array.from(n.children))r.style.whiteSpace="nowrap",r.style.flexShrink="0"}if(e==="type"){const r=n.getBoundingClientRect();r.height&&(n.style.minHeight=`${Math.ceil(r.height)}px`),n.style.visibility="visible";const s=(n.getAttribute("data-type-by")||"word").toLowerCase()!=="char";A.typer=new Tu(n,{skipSelector:n.getAttribute("data-type-skip")||null,byWord:s}),n.hasAttribute("data-type-speed")||(A.typeSpeed=s?4.5:26)}if(e==="grow"){const r=n.getAttribute("data-stagger-target"),s=Array.from(r?n.querySelectorAll(r):n.children);A.kids=s,A.kidStep=Ce(n,"data-stagger",.12),A.growFrom=Ce(n,"data-grow-from",.6);for(const a of s)a.style.willChange="transform, opacity"}if(e==="draw"){const r=n.getAttribute("data-draw-target")||"path";A.strokes=Array.from(n.querySelectorAll(r)).filter(s=>typeof s.getTotalLength=="function").map(s=>{let a=0;try{a=s.getTotalLength()}catch{a=0}return a?(s.style.strokeDasharray=String(a),s.style.strokeDashoffset=String(a),{path:s,length:a}):null}).filter(Boolean)}const i=typeof getComputedStyle=="function"?getComputedStyle(n):null;return i&&i.display==="none"&&(A.hiddenByDisplay=!0,A.revealDisplay=n.getAttribute("data-display")||"block"),n.style.willChange="transform, opacity",A.host=n,t&&n.getAttribute("data-reparent")!=="true"&&(n.style.position="absolute",n.style.top="0",n.style.left="0",n.style.margin="0"),A}function Ru(n,t){const e=t.ownerDocument;let A=t.querySelector(".globe-overlay-layer");for(const i of n){if(!i.anchored||i.el.getAttribute("data-reparent")!=="true"||i.host!==i.el)continue;A||(A=e.createElement("div"),A.className="globe-overlay-layer",A.style.position="absolute",A.style.inset="0",A.style.pointerEvents="none",A.style.zIndex="45",t.appendChild(A)),i.hiddenByDisplay&&(i.el.style.display=i.revealDisplay);const r=i.el,s=getComputedStyle(r).position;s!=="static"&&(r.dataset.globeAuthoredPosition=s,console.warn("[globe] "+(r.getAttribute("class")||"").split(" ")[0]+" is position:"+s+" in Webflow. An anchored card is positioned by the globe, so that has been reset - remove it in the Designer to avoid surprises.")),r.style.position="static",r.style.top="auto",r.style.right="auto",r.style.bottom="auto",r.style.left="auto",r.style.margin="0",r.style.transform="none";const a=r.offsetWidth,l=r.offsetHeight,o=e.createElement("div");o.className="globe-anchor-slot",o.style.position="absolute",o.style.top="0",o.style.left="0",o.style.margin="0",o.style.willChange="transform, opacity",a&&(o.style.width=`${Math.ceil(a)}px`),l&&(o.style.height=`${Math.ceil(l)}px`),A.appendChild(o),o.appendChild(i.el),i.el.style.willChange="",i.hiddenByDisplay&&(o.style.display="none",i.revealDisplay="block"),i.slotHeight=Math.ceil(l)||0,i.slotWidth=Math.ceil(a)||0,i.host=o}}function Pu(n){const t=n.querySelectorAll('[data-lock-width="true"], [data-lock-height="true"]');for(const e of t){const A=e.getBoundingClientRect?e.getBoundingClientRect():null;A&&(e.getAttribute("data-lock-width")==="true"&&A.width&&(e.style.width=`${Math.ceil(A.width)}px`,e.style.flexGrow="0",e.style.flexShrink="0"),e.getAttribute("data-lock-height")==="true"&&A.height&&(e.style.height=`${Math.ceil(A.height)}px`))}}function Du(n,t){let e=-1;for(let A=0;A<n.ins.length;A++)t>=n.ins[A]&&(e=A);return e<0?{index:-1,start:n.ins[0]??0,end:n.outs[0]??null}:{index:e,start:n.ins[e],end:n.outs[e]===void 0?null:n.outs[e]}}class Cu{constructor(t,e=document){const A=e.querySelectorAll("[data-globe-cue], [data-globe-pin]");Pu(e),this.items=Array.from(A).map(bu),this.stage=t,t&&t.root&&Ru(this.items,t.box||t.root)}get maxTime(){return this.items.reduce((t,e)=>{const A=e.ins[e.ins.length-1],i=e.outs.length?e.outs[e.outs.length-1]:null,r=Math.max(A+e.dur,i===null?0:i+e.outDur),s=e.typer?A+e.typer.total/e.typeSpeed:0;return Math.max(t,r,s)},0)}update(t,e){for(const A of this.items)this._updateItem(A,t,e)}_updateItem(t,e,A){const i=Du(t,e),r=i.index<0?0:Ze((e-i.start)/t.dur),s=i.end===null?0:Ze((e-i.end)/t.outDur),a=r*(1-s),l=t.host;t.anim==="type"&&this._type(t,e,i.start),t.anim==="draw"&&this._draw(t,r);const o=i.end!==null&&e>=i.end+t.outDur;if(a<=.001){l.style.opacity="0",l.style.pointerEvents="none",t.anim==="wipe"&&(l.style.clipPath="inset(0 100% 0 0)"),(t.hiddenByDisplay||o&&t.collapse)&&(l.style.display="none");return}const h=t.hiddenByDisplay?t.revealDisplay:"";l.style.display!==h&&(l.style.display=h);let c=a,d=t.offsetX,p=t.offsetY,m=1;if(t.anim==="rise")p+=(1-An(r))*16;else if(t.anim==="pop")m=.86+.14*wu(r),c=Ze(r*1.6)*(1-s);else if(t.anim==="type")c=r>0?1-s:0;else if(t.anim==="draw")c=r>0?1-s:0;else if(t.anim==="wipe"){const _=An(Ze(r)),f=s>0?Ei(s):0,u=t.wipeFrom,w=Math.max(0,_-f);l.style.clipPath=u==="right"?`inset(0 0 0 ${(1-w)*100}%)`:`inset(0 ${(1-w)*100}% 0 0)`,c=Ze(r/.35)*(1-f)}else if(t.anim==="grow"){const _=An(Ze(r/.5)),f=t.growFrom+(1-t.growFrom)*_;m=s>0?f+(t.growOut-f)*Ei(s):f,c=Ze(r/.25)*(1-Ei(s)),this._stagger(t,r,s)}if(t.anchored){const _=A.project(t.lat,t.lng);if(!_.visible){l.style.opacity="0",t.hiddenByDisplay&&(l.style.display="none");return}const f=Math.min(1,_.depth/.12);c*=f;const u=t.el.offsetHeight||t.slotHeight||0;u&&Math.abs(u-t.slotHeight)>.5&&(t.slotHeight=u,l.style.height=`${u}px`);const w=t.el.offsetWidth;w&&Math.abs(w-(t.slotWidth||0))>.5&&(t.slotWidth=w,l.style.width=`${w}px`),l.style.transform=`translate(${_.x+d}px, ${_.y+p-u}px) translate(-50%, 0) scale(${m})`,t.anim==="grow"&&(l.style.transformOrigin="50% 100%")}else l.style.transform=`translate(${d}px, ${p}px) scale(${m})`,t.anim==="grow"&&(l.style.transformOrigin="50% 100%");l.style.opacity=String(c),l.style.pointerEvents=c>.9?"":"none"}_stagger(t,e,A){if(!t.kids||!t.kids.length)return;const i=t.kidStep;t.kids.forEach((r,s)=>{const a=.35+s*i,l=Ze((e-a)/.3),o=An(l);r.style.opacity=String(o*(1-A)),r.style.transform=`translateY(${(1-o)*8}px)`})}_draw(t,e){if(!t.strokes||!t.strokes.length)return;const A=An(Ze(e));for(const i of t.strokes)i.path.style.strokeDashoffset=String(i.length*(1-A))}_type(t,e,A){if(!t.typer)return;const i=e-A,r=i<=0?0:Math.min(t.typer.total,Math.floor(i*t.typeSpeed));r!==t.typedCount&&(t.typedCount=r,t.typer.reveal(r),t.el.dataset.typing=t.typer.done?"0":"1")}}const Zr=[{selector:".hero1_profile_wrap",layoutOnly:!0,lockHeight:!0},{selector:".hero1_profile_choice_wrap",in:.2,anim:"rise",lockWidth:!0,lockHeight:!0},{selector:".hero1_profile_choice_text_wrap",noWrap:!0,in:.6,out:6.2,dur:.45,anim:"type",typeSpeed:4.5},{selector:".hero1_profile_search_wrap",in:[.2,11.5],out:[6.2],dur:.45,anim:"fade"},{selector:".hero1_profile_route_wrap",lat:37.7749,lng:-122.4194,offsetY:-31,reparent:!0,in:4.95,out:8.4,dur:.9,outDur:.32,growOut:.86,anim:"grow"},{selector:".hero1_profile_choice_check",in:6.7,out:11,dur:.4,anim:"pop",display:"flex"},{selector:".hero1_profile_choice_check_mark",in:[6.85,8.9],dur:.5,anim:"draw",optional:!0},{selector:".hero1_profile_choice_confirm",create:{cloneFrom:".hero1_profile_choice_text",insertAfter:".hero1_profile_choice_check",text:"No early mornings"},in:7,out:8.6,dur:.34,outDur:.24,anim:"wipe",display:"block",optional:!0},{selector:".hero1_profile_choice_confirm_two",create:{cloneFrom:".hero1_profile_choice_text",insertAfter:".hero1_profile_choice_check",text:"Premium economy"},in:9.1,out:11,dur:.34,outDur:.24,anim:"wipe",display:"block",optional:!0},{selector:".hero1_profile_choice_hotel",noWrap:!0,in:11.7,anim:"type",typeSpeed:4.5,display:"flex",optional:!0},{selector:".hero1_profile_hotel_wrap",lat:40.7128,lng:-74.006,offsetY:-31,reparent:!0,in:13.35,out:16.5,dur:.9,outDur:.32,growOut:.86,anim:"grow",optional:!0},{selector:".hero1_profile_choice_line",in:14,stagger:1.6,anim:"type",typeSpeed:4.5,display:"flex",optional:!0}],Lu=3,Iu={in:"data-in",noWrap:"data-no-wrap",out:"data-out",dur:"data-dur",outDur:"data-out-dur",growFrom:"data-grow-from",growOut:"data-grow-out",anim:"data-anim",typeSpeed:"data-type-speed",typeSkip:"data-type-skip",typeBy:"data-type-by",display:"data-display",lockWidth:"data-lock-width",lockHeight:"data-lock-height",lat:"data-lat",lng:"data-lng",offsetX:"data-offset-x",offsetY:"data-offset-y",reparent:"data-reparent"};function Uu(n){const t=new Set;for(const e of n)for(const A of e.selector.split(".").filter(Boolean))t.add(A);return t}function Fu(n,t,e){const{cloneFrom:A,appendTo:i,insertAfter:r,text:s,style:a}=n.create,l=i?t.querySelector(i):null,o=r?t.querySelector(r):null;if(!l&&!o)return null;const h=A?t.querySelector(A):null,c=h?h.cloneNode(!1):(t.ownerDocument||document).createElement("div");c.removeAttribute("data-globe-cue"),c.removeAttribute("data-globe-pin");for(const d of["data-in","data-out","data-dur","data-anim"])c.removeAttribute(d);if(e)for(const d of Array.from(c.classList||[]))e.has(d)&&c.classList.remove(d);for(const d of n.selector.split(".").filter(Boolean))c.classList.add(d);return s!==void 0&&(c.textContent=s),a&&Object.assign(c.style,a),c.style.display="none",o&&o.parentNode?o.parentNode.insertBefore(c,o.nextSibling):l.appendChild(c),c}function Nu(n=Zr,t=document){const e=[],A=[],i=[],r=Uu(n);for(const s of n){let a=t.querySelectorAll(s.selector);if(!a.length&&s.create){const o=Fu(s,t,r);o&&(a=[o],i.push(s.selector))}if(!a.length){s.optional||A.push(s.selector);continue}let l=0;for(const o of a){const h=s.stagger?l*s.stagger:0;if(l++,!s.layoutOnly){const c=s.lat!==void 0?"data-globe-pin":"data-globe-cue";!o.hasAttribute("data-globe-cue")&&!o.hasAttribute("data-globe-pin")&&o.setAttribute(c,"")}s.style&&Object.assign(o.style,s.style);for(const[c,d]of Object.entries(Iu)){if(s[c]===void 0||o.hasAttribute(d))continue;const p=f=>Math.round((f+h)*1e3)/1e3,m=s[c],_=c==="in"||c==="out"?Array.isArray(m)?m.map(p).join(","):p(m):m;o.setAttribute(d,String(_))}e.push(s.selector)}}return A.length&&console.warn("[globe] sequence selectors matched nothing: "+A.join(", ")+" - a class was probably renamed in Webflow"),{applied:e,missing:A,created:i}}const Qr={linear:n=>n,outCubic:n=>1-Math.pow(1-n,3),inOutCubic:n=>n<.5?4*n*n*n:1-Math.pow(-2*n+2,3)/2,outBack:n=>1+(1.70158+1)*Math.pow(n-1,3)+1.70158*Math.pow(n-1,2)},Bu=[{track:"originPin",at:.15,dur:.75,from:0,to:1,ease:"outBack"},{track:"arcDraw",at:.65,dur:1.5,from:0,to:1,ease:"inOutCubic"},{track:"destPin",at:2.05,dur:.75,from:0,to:1,ease:"outBack"},{track:"dropHead",at:2.6,dur:1.8,from:0,to:1,ease:"inOutCubic"},{track:"originPill",at:1.4,dur:.55,from:1,to:0,ease:"inOutCubic"},{track:"originPill",at:5.6,dur:.45,from:0,to:1,ease:"outBack"},{track:"destPill",at:9.8,dur:.55,from:1,to:0,ease:"inOutCubic"},{track:"destPill",at:13.7,dur:.45,from:0,to:1,ease:"outBack"}];class Ou{constructor({route:t,originPin:e,destPin:A,beats:i=Bu,offset:r=0,loop:s=!1,loopDelay:a=2.5}){this.route=t,this.originPin=e,this.destPin=A,this.offset=r,this.beats=r?i.map(l=>({...l,at:l.at+r})):i,this.loop=s,this.loopDelay=a,this.time=0,this.playing=!1,this.duration=this.beats.reduce((l,o)=>Math.max(l,o.at+o.dur),0),this.beats=this.beats.slice().sort((l,o)=>l.at-o.at),this._initial={};for(const l of this.beats)l.track in this._initial||(this._initial[l.track]=l.from);this.values={originPin:0,arcDraw:0,dropHead:0,destPin:0,originPill:1,destPill:1},Object.assign(this.values,this._initial),this._apply()}play(){return this.playing=!0,this}pause(){return this.playing=!1,this}restart(){return this.time=0,this.playing=!0,this}seek(t){return this.time=t,this._sample(),this._apply(),this}complete(){return this.seek(this.duration)}advance(t){if(!this.playing)return this;this.time+=t;const e=this.duration+(this.loop?this.loopDelay:0);return this.time>e&&(this.loop?this.time=0:this.time=this.duration),this._sample(),this._apply(),this}_sample(){for(const t of Object.keys(this._initial))this.values[t]=this._initial[t];for(const t of this.beats){if(this.time<t.at)continue;const e=(this.time-t.at)/t.dur,A=Math.min(1,Math.max(0,e)),i=Qr[t.ease]||Qr.linear;this.values[t.track]=t.from+(t.to-t.from)*i(A)}}_apply(){const t=this.values;this.route.setProgress(t.arcDraw),this.route.setHead(t.dropHead),this.originPin&&this.originPin.setAmount(t.originPin).setPill(t.originPill),this.destPin&&this.destPin.setAmount(t.destPin).setPill(t.destPill)}}function zu(){return typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-reduced-motion: reduce)").matches}const Hu="2026-09-11 11:59",Jr="#globe-root";function ts(){const n=document.querySelector(Jr);if(!n){console.warn(`[globe] no ${Jr} on the page`);return}if(n.dataset.globeMounted)return;n.dataset.globeMounted="1";const t=fu(n),e=du(n),A=new hu(n,t),i=e[0],r=e[1];let s=null;if(i&&r){const l=A.addRoute(i,r),o=xu(A),h=new Yr(o,i),c=new Yr(o,r);s=new Ou({route:l,originPin:h,destPin:c,offset:t.globeStart||Lu,loop:n.hasAttribute("data-globe-loop")}),Nu(Zr,document);const d=new Cu(A,document);d.maxTime>s.duration&&(s.duration=d.maxTime),A.onFrame((p,m)=>{s.advance(m.deltaSeconds),h.update(m),c.update(m),d.update(s.time,m)}),window.__globeOverlays=d,zu()?s.complete():s.play()}A.start(),(new URLSearchParams(location.search).has("debug")||n.hasAttribute("data-globe-debug"))&&mu(A),window.__globe={stage:A,layout:t,places:e,flow:s},window.__globeReport=()=>{const l=A.globeCam,o=n.getBoundingClientRect(),h=A.box.getBoundingClientRect(),c=[];let d=n.parentElement;for(;d&&d!==document.documentElement;){const m=getComputedStyle(d);(m.overflowX!=="visible"||m.overflowY!=="visible")&&c.push((d.getAttribute("class")||d.tagName)+" ("+Math.round(d.getBoundingClientRect().width)+"px)"),d=d.parentElement}const p={build:Hu,viewport:document.documentElement.clientWidth,attributesSeen:Array.from(n.attributes).filter(m=>m.name.startsWith("data-")).map(m=>m.name+(m.value?'="'+m.value+'"':"")),sizedBy:t.fitRoute>0?"fit-route (fixed)":t.hasRefWidth?"ref-width (fixed)":"container width (SHRINKS)",radiusPx:Math.round(l.radiusPx),globeDiameter:Math.round(l.radiusPx*2),containerWidth:Math.round(o.width),canvasBoxWidth:Math.round(h.width),canvasEscapedTo:A.box.parentElement===n?"not moved":A.box.parentElement.getAttribute("class")||A.box.parentElement.tagName,clippingAncestors:c.length?c:"none",apexClearance:t.apexClearance,refWidth:t.hasRefWidth?t.refWidth:"NOT SET",radiusScale:t.radiusScale,mobileScale:t.mobileScale,mobileBelow:t.mobileBelow,mobileActive:document.documentElement.clientWidth<t.mobileBelow,anchoredCards:(window.__globeOverlays?window.__globeOverlays.items:[]).filter(m=>m.anchored).map(m=>({cls:(m.el.getAttribute("class")||"").split(" ")[0],lat:m.lat,lng:m.lng,offsetY:m.offsetY,inSlot:m.host!==m.el,slotWidth:m.host!==m.el?m.host.style.width:"n/a",slotHeight:m.host!==m.el?m.host.style.height:"n/a",cardWidth:m.el.offsetWidth,cardHeight:m.el.offsetHeight,authoredPosition:m.el.dataset.globeAuthoredPosition||"static",sizeMismatch:m.host!==m.el&&(Math.abs(m.el.offsetWidth-parseFloat(m.host.style.width||0))>2||Math.abs(m.el.offsetHeight-parseFloat(m.host.style.height||0))>2)}))};return console.log("%c[globe report]","font-weight:bold",p),p}}document.readyState==="loading"?document.addEventListener("DOMContentLoaded",ts,{once:!0}):ts()})();
