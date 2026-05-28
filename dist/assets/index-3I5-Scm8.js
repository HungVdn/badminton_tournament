(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const c of a)if(c.type==="childList")for(const o of c.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function s(a){const c={};return a.integrity&&(c.integrity=a.integrity),a.referrerPolicy&&(c.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?c.credentials="include":a.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function n(a){if(a.ep)return;a.ep=!0;const c=s(a);fetch(a.href,c)}})();const ci=[{id:1,name:"DuongDLQ",preferred_format:"Any",preferred_partnership:"Totally random"},{id:2,name:"HungVDN",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:3,name:"KhaiCT",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:4,name:"phuocnv",preferred_format:"Any",preferred_partnership:"Totally random"},{id:5,name:"TriemPT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:6,name:"MinhDN",preferred_format:"Men's Doubles",preferred_partnership:"Form your own team and register later"},{id:10,name:"LongNT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:11,name:"ChiKP",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"},{id:12,name:"QuanNLH",preferred_format:"Any",preferred_partnership:"Totally random"},{id:13,name:"HungNT",preferred_format:"Any",preferred_partnership:"Skill-based tiers, then random"},{id:14,name:"TienTS",preferred_format:"Men's Doubles",preferred_partnership:"Skill-based tiers, then random"},{id:15,name:"HieuPV",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:16,name:"ThanhPT",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"}],di=[{id:"MD-1",name:"Hưng 7 - Khải",player1:"HungVDN",player2:"KhaiCT",category:"Men's Doubles"},{id:"MD-2",name:"Hưng 14 - Phong",player1:"HungNT",player2:"PhongTH",category:"Men's Doubles"},{id:"MD-3",name:"Tùng - Dương",player1:"DuongDLQ",player2:"TungHD",category:"Men's Doubles"},{id:"MD-4",name:"Tiến - Minh",player1:"TienTS",player2:"MinhDN",category:"Men's Doubles"},{id:"MD-5",name:"Phước - Hiếu",player1:"PhuocNV",player2:"HieuPV",category:"Men's Doubles"},{id:"XD-1",name:"Hằng - Minh",player1:"HangTTT-GA",player2:"MinhTH1993",category:"Mixed's Doubles"},{id:"XD-2",name:"Minh - Triêm",player1:"MinhLNH",player2:"TriemPT",category:"Mixed's Doubles"},{id:"XD-3",name:"Trân - Long",player1:"TranPQB",player2:"LongNT1988",category:"Mixed's Doubles"},{id:"XD-4",name:"Thanh - Hoàn",player1:"ThanhPT",player2:"HoanTT",category:"Mixed's Doubles"},{id:"XD-5",name:"Chi - Quân",player1:"ChiKP",player2:"QuanNLH",category:"Mixed's Doubles"}],hi=[{id:"M-1",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"1:30 - 2:00",team1:"Hưng 7 - Khải",team2:"Hưng 14 - Phong",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-2",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"1:30 - 2:00",team1:"Tùng - Dương",team2:"Tiến - Minh",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-5",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"2:05 - 2:35",team1:"Tùng - Dương",team2:"Hưng 7 - Khải",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-6",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"2:05 - 2:35",team1:"Hưng 14 - Phong",team2:"Phước - Hiếu",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-9",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"2:40 - 3:10",team1:"Hưng 7 - Khải",team2:"Tiến - Minh",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-10",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"2:40 - 3:10",team1:"Tùng - Dương",team2:"Phước - Hiếu",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-13",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"3:15 - 3:45",team1:"Phước - Hiếu",team2:"Hưng 7 - Khải",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-14",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"3:15 - 3:45",team1:"Hưng 14 - Phong",team2:"Tiến - Minh",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-17",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 15",time:"3:50 - 4:20",team1:"Hưng 14 - Phong",team2:"Tùng - Dương",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-18",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 16",time:"3:50 - 4:20",team1:"Tiến - Minh",team2:"Phước - Hiếu",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-3",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"1:30 - 2:00",team1:"Hằng - Minh",team2:"Minh - Triêm",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-4",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"1:30 - 2:00",team1:"Trân - Long",team2:"Thanh - Hoàn",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-7",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"2:05 - 2:35",team1:"Trân - Long",team2:"Hằng - Minh",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-8",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"2:05 - 2:35",team1:"Minh - Triêm",team2:"Chi - Quân",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-11",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"2:40 - 3:10",team1:"Thanh - Hoàn",team2:"Hằng - Minh",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-12",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"2:40 - 3:10",team1:"Trân - Long",team2:"Chi - Quân",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-15",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"3:15 - 3:45",team1:"Hằng - Minh",team2:"Chi - Quân",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-16",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"3:15 - 3:45",team1:"Minh - Triêm",team2:"Thanh - Hoàn",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-19",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 20",time:"3:50 - 4:20",team1:"Minh - Triêm",team2:"Trân - Long",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-20",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 21",time:"3:50 - 4:20",team1:"Thanh - Hoàn",team2:"Chi - Quân",score1:"",score2:"",sets:[],status:"Scheduled"}],Dn={en:{title:"GEAR GAMES BADMINTON TOURNAMENT 2026",subtitle:"Tournament Regulations and General Information",sections:[{id:"categories",title:"I. Competition Categories",content:["• Mixed Doubles","• Men's Doubles","• Total: 10 pairs - 20 players"]},{id:"schedule",title:"II. Schedule & Venue",content:["• Date: 31 May 2026","• Venue: Alpha Era court"]},{id:"prizes",title:"III. Prizes",content:["🏆 First Place: 2,000,000 VND + Championship Trophy","🥈 Second Place: 1,500,000 VND","🥉 Third Place: 1,000,000 VND"]},{id:"regulations",title:"IV. Regulations & Tournament Format",content:["• **Qualifying Round**: Round-Robin format. Top 4 teams from each category will advance to the Semi-finals.","• **Semi-finals**: A Single-elimination bracket to determine the Top 2 teams for the Grand Final.","• **Grand Final**: A Single-elimination match to crown the Season Champion.","• **Set Points Rules**:","  - Qualifying Round: Best of 3 (BO3) – 15 points per set.","  - Semi-finals & Grand Final: Best of 3 (BO3) – 21 points per set.","  - If the score reaches 20-20 (or 14-14 in 15-pt game), the side gaining a 2-point lead first wins the set.","  - If the score reaches 29-29 (or 20-20 in 15-pt game), the side that scores the 30th point (or 21st) wins the set.","• **Group Stage Ranking Priority**:","  - Win: +1 point. Loss: +0 point.","  - Priority: (1) Total Match Points $\\rightarrow$ (2) Net Sets/Games (Won - Lost) $\\rightarrow$ (3) Head-to-Head Result $\\rightarrow$ (4) Net Points (Won - Lost) $\\rightarrow$ (5) Drawing of lots."]},{id:"rules",title:"V. Doubles Rules & Service Position",content:["• Standard BWF Laws of Badminton apply.","• **Service and Receiving Courts**:","  - If the serving side's score is **even** (0, 2, 4, 6...), the server shall serve from the **right** service court diagonally to the receiver's right court.","  - If the serving side's score is **odd** (1, 3, 5, 7...), the server shall serve from the **left** service court diagonally to the receiver's left court.","  - The player diagonally opposite to the server shall be the receiver.","  - Only the receiver can return the service. If their partner touches the shuttle first, the serving side wins a point.","• **Swapping Positions**:","  - Players only swap their left/right service positions when their team **wins a point on their own service**.","  - If the receiving side wins the rally, they win a point and the right to serve, but players do not swap positions."]},{id:"intervals",title:"VI. Intervals & Player Behavior",content:["• Mid-game Interval: When one side reaches 11 points (or 8 points in a 15-point game), an interval not exceeding 60 seconds is allowed.","• Inter-game Interval: A rest period not exceeding 2 minutes is allowed between the first and second games, and between the second and third games.","• Play shall be continuous. Misconduct and delay tactics may be penalized by the umpire."]}]}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Oi=function(l){const e=[];let s=0;for(let n=0;n<l.length;n++){let a=l.charCodeAt(n);a<128?e[s++]=a:a<2048?(e[s++]=a>>6|192,e[s++]=a&63|128):(a&64512)===55296&&n+1<l.length&&(l.charCodeAt(n+1)&64512)===56320?(a=65536+((a&1023)<<10)+(l.charCodeAt(++n)&1023),e[s++]=a>>18|240,e[s++]=a>>12&63|128,e[s++]=a>>6&63|128,e[s++]=a&63|128):(e[s++]=a>>12|224,e[s++]=a>>6&63|128,e[s++]=a&63|128)}return e},Nn=function(l){const e=[];let s=0,n=0;for(;s<l.length;){const a=l[s++];if(a<128)e[n++]=String.fromCharCode(a);else if(a>191&&a<224){const c=l[s++];e[n++]=String.fromCharCode((a&31)<<6|c&63)}else if(a>239&&a<365){const c=l[s++],o=l[s++],u=l[s++],v=((a&7)<<18|(c&63)<<12|(o&63)<<6|u&63)-65536;e[n++]=String.fromCharCode(55296+(v>>10)),e[n++]=String.fromCharCode(56320+(v&1023))}else{const c=l[s++],o=l[s++];e[n++]=String.fromCharCode((a&15)<<12|(c&63)<<6|o&63)}}return e.join("")},kn={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(l,e){if(!Array.isArray(l))throw Error("encodeByteArray takes an array as a parameter");this.init_();const s=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,n=[];for(let a=0;a<l.length;a+=3){const c=l[a],o=a+1<l.length,u=o?l[a+1]:0,v=a+2<l.length,x=v?l[a+2]:0,$=c>>2,w=(c&3)<<4|u>>4;let A=(u&15)<<2|x>>6,M=x&63;v||(M=64,o||(A=64)),n.push(s[$],s[w],s[A],s[M])}return n.join("")},encodeString(l,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(l):this.encodeByteArray(Oi(l),e)},decodeString(l,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(l):Nn(this.decodeStringToByteArray(l,e))},decodeStringToByteArray(l,e){this.init_();const s=e?this.charToByteMapWebSafe_:this.charToByteMap_,n=[];for(let a=0;a<l.length;){const c=s[l.charAt(a++)],u=a<l.length?s[l.charAt(a)]:0;++a;const x=a<l.length?s[l.charAt(a)]:64;++a;const w=a<l.length?s[l.charAt(a)]:64;if(++a,c==null||u==null||x==null||w==null)throw new Rn;const A=c<<2|u>>4;if(n.push(A),x!==64){const M=u<<4&240|x>>2;if(n.push(M),w!==64){const _=x<<6&192|w;n.push(_)}}}return n},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let l=0;l<this.ENCODED_VALS.length;l++)this.byteToCharMap_[l]=this.ENCODED_VALS.charAt(l),this.charToByteMap_[this.byteToCharMap_[l]]=l,this.byteToCharMapWebSafe_[l]=this.ENCODED_VALS_WEBSAFE.charAt(l),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[l]]=l,l>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(l)]=l,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(l)]=l)}}};class Rn extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Bn=function(l){const e=Oi(l);return kn.encodeByteArray(e,!0)},ji=function(l){return Bn(l).replace(/\./g,"")};function On(){try{return typeof indexedDB=="object"}catch{return!1}}function jn(){return new Promise((l,e)=>{try{let s=!0;const n="validate-browser-context-for-indexeddb-analytics-module",a=self.indexedDB.open(n);a.onsuccess=()=>{a.result.close(),s||self.indexedDB.deleteDatabase(n),l(!0)},a.onupgradeneeded=()=>{s=!1},a.onerror=()=>{var c;e(((c=a.error)==null?void 0:c.message)||"")}}catch(s){e(s)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn="FirebaseError";class Dt extends Error{constructor(e,s,n){super(s),this.code=e,this.customData=n,this.name=Hn,Object.setPrototypeOf(this,Dt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Hi.prototype.create)}}class Hi{constructor(e,s,n){this.service=e,this.serviceName=s,this.errors=n}create(e,...s){const n=s[0]||{},a=`${this.service}/${e}`,c=this.errors[e],o=c?Fn(c,n):"Error",u=`${this.serviceName}: ${o} (${a}).`;return new Dt(a,u,n)}}function Fn(l,e){return l.replace(Vn,(s,n)=>{const a=e[n];return a!=null?String(a):`<${n}?>`})}const Vn=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Un(l){return l&&l._delegate?l._delegate:l}class ge{constructor(e,s,n){this.name=e,this.instanceFactory=s,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var U;(function(l){l[l.DEBUG=0]="DEBUG",l[l.VERBOSE=1]="VERBOSE",l[l.INFO=2]="INFO",l[l.WARN=3]="WARN",l[l.ERROR=4]="ERROR",l[l.SILENT=5]="SILENT"})(U||(U={}));const Wn={debug:U.DEBUG,verbose:U.VERBOSE,info:U.INFO,warn:U.WARN,error:U.ERROR,silent:U.SILENT},Gn=U.INFO,zn={[U.DEBUG]:"log",[U.VERBOSE]:"log",[U.INFO]:"info",[U.WARN]:"warn",[U.ERROR]:"error"},qn=(l,e,...s)=>{if(e<l.logLevel)return;const n=new Date().toISOString(),a=zn[e];if(a)console[a](`[${n}]  ${l.name}:`,...s);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Fi{constructor(e){this.name=e,this._logLevel=Gn,this._logHandler=qn,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in U))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Wn[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,U.DEBUG,...e),this._logHandler(this,U.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,U.VERBOSE,...e),this._logHandler(this,U.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,U.INFO,...e),this._logHandler(this,U.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,U.WARN,...e),this._logHandler(this,U.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,U.ERROR,...e),this._logHandler(this,U.ERROR,...e)}}const Xn=(l,e)=>e.some(s=>l instanceof s);let ui,mi;function Jn(){return ui||(ui=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Kn(){return mi||(mi=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Vi=new WeakMap,ts=new WeakMap,Ui=new WeakMap,Xe=new WeakMap,ns=new WeakMap;function Yn(l){const e=new Promise((s,n)=>{const a=()=>{l.removeEventListener("success",c),l.removeEventListener("error",o)},c=()=>{s(gt(l.result)),a()},o=()=>{n(l.error),a()};l.addEventListener("success",c),l.addEventListener("error",o)});return e.then(s=>{s instanceof IDBCursor&&Vi.set(s,l)}).catch(()=>{}),ns.set(e,l),e}function Qn(l){if(ts.has(l))return;const e=new Promise((s,n)=>{const a=()=>{l.removeEventListener("complete",c),l.removeEventListener("error",o),l.removeEventListener("abort",o)},c=()=>{s(),a()},o=()=>{n(l.error||new DOMException("AbortError","AbortError")),a()};l.addEventListener("complete",c),l.addEventListener("error",o),l.addEventListener("abort",o)});ts.set(l,e)}let es={get(l,e,s){if(l instanceof IDBTransaction){if(e==="done")return ts.get(l);if(e==="objectStoreNames")return l.objectStoreNames||Ui.get(l);if(e==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return gt(l[e])},set(l,e,s){return l[e]=s,!0},has(l,e){return l instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in l}};function Zn(l){es=l(es)}function tr(l){return l===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...s){const n=l.call(Je(this),e,...s);return Ui.set(n,e.sort?e.sort():[e]),gt(n)}:Kn().includes(l)?function(...e){return l.apply(Je(this),e),gt(Vi.get(this))}:function(...e){return gt(l.apply(Je(this),e))}}function er(l){return typeof l=="function"?tr(l):(l instanceof IDBTransaction&&Qn(l),Xn(l,Jn())?new Proxy(l,es):l)}function gt(l){if(l instanceof IDBRequest)return Yn(l);if(Xe.has(l))return Xe.get(l);const e=er(l);return e!==l&&(Xe.set(l,e),ns.set(e,l)),e}const Je=l=>ns.get(l);function sr(l,e,{blocked:s,upgrade:n,blocking:a,terminated:c}={}){const o=indexedDB.open(l,e),u=gt(o);return n&&o.addEventListener("upgradeneeded",v=>{n(gt(o.result),v.oldVersion,v.newVersion,gt(o.transaction),v)}),s&&o.addEventListener("blocked",v=>s(v.oldVersion,v.newVersion,v)),u.then(v=>{c&&v.addEventListener("close",()=>c()),a&&v.addEventListener("versionchange",x=>a(x.oldVersion,x.newVersion,x))}).catch(()=>{}),u}const ir=["get","getKey","getAll","getAllKeys","count"],nr=["put","add","delete","clear"],Ke=new Map;function pi(l,e){if(!(l instanceof IDBDatabase&&!(e in l)&&typeof e=="string"))return;if(Ke.get(e))return Ke.get(e);const s=e.replace(/FromIndex$/,""),n=e!==s,a=nr.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!(a||ir.includes(s)))return;const c=async function(o,...u){const v=this.transaction(o,a?"readwrite":"readonly");let x=v.store;return n&&(x=x.index(u.shift())),(await Promise.all([x[s](...u),a&&v.done]))[0]};return Ke.set(e,c),c}Zn(l=>({...l,get:(e,s,n)=>pi(e,s)||l.get(e,s,n),has:(e,s)=>!!pi(e,s)||l.has(e,s)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(s=>{if(ar(s)){const n=s.getImmediate();return`${n.library}/${n.version}`}else return null}).filter(s=>s).join(" ")}}function ar(l){const e=l.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ss="@firebase/app",fi="0.14.12";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new Fi("@firebase/app"),or="@firebase/app-compat",lr="@firebase/analytics-compat",cr="@firebase/analytics",dr="@firebase/app-check-compat",hr="@firebase/app-check",ur="@firebase/auth",mr="@firebase/auth-compat",pr="@firebase/database",fr="@firebase/data-connect",gr="@firebase/database-compat",vr="@firebase/functions",br="@firebase/functions-compat",yr="@firebase/installations",xr="@firebase/installations-compat",Sr="@firebase/messaging",wr="@firebase/messaging-compat",Tr="@firebase/performance",Er="@firebase/performance-compat",$r="@firebase/remote-config",Ar="@firebase/remote-config-compat",Ir="@firebase/storage",Mr="@firebase/storage-compat",_r="@firebase/firestore",Pr="@firebase/ai",Cr="@firebase/firestore-compat",Lr="firebase",Dr="12.13.0",Nr={[ss]:"fire-core",[or]:"fire-core-compat",[cr]:"fire-analytics",[lr]:"fire-analytics-compat",[hr]:"fire-app-check",[dr]:"fire-app-check-compat",[ur]:"fire-auth",[mr]:"fire-auth-compat",[pr]:"fire-rtdb",[fr]:"fire-data-connect",[gr]:"fire-rtdb-compat",[vr]:"fire-fn",[br]:"fire-fn-compat",[yr]:"fire-iid",[xr]:"fire-iid-compat",[Sr]:"fire-fcm",[wr]:"fire-fcm-compat",[Tr]:"fire-perf",[Er]:"fire-perf-compat",[$r]:"fire-rc",[Ar]:"fire-rc-compat",[Ir]:"fire-gcs",[Mr]:"fire-gcs-compat",[_r]:"fire-fst",[Cr]:"fire-fst-compat",[Pr]:"fire-vertex","fire-js":"fire-js",[Lr]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kr=new Map,Rr=new Map,gi=new Map;function vi(l,e){try{l.container.addComponent(e)}catch(s){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${l.name}`,s)}}function ve(l){const e=l.name;if(gi.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;gi.set(e,l);for(const s of kr.values())vi(s,l);for(const s of Rr.values())vi(s,l);return!0}function Br(l){return l==null?!1:l.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},rs=new Hi("app","Firebase",Or);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=Dr;function Ct(l,e,s){let n=Nr[l]??l;s&&(n+=`-${s}`);const a=n.match(/\s|\//),c=e.match(/\s|\//);if(a||c){const o=[`Unable to register library "${n}" with version "${e}":`];a&&o.push(`library name "${n}" contains illegal characters (whitespace or "/")`),a&&c&&o.push("and"),c&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(o.join(" "));return}ve(new ge(`${n}-version`,()=>({library:n,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr="firebase-heartbeat-database",Fr=1,Zt="firebase-heartbeat-store";let Ye=null;function Wi(){return Ye||(Ye=sr(Hr,Fr,{upgrade:(l,e)=>{switch(e){case 0:try{l.createObjectStore(Zt)}catch(s){console.warn(s)}}}}).catch(l=>{throw rs.create("idb-open",{originalErrorMessage:l.message})})),Ye}async function Vr(l){try{const s=(await Wi()).transaction(Zt),n=await s.objectStore(Zt).get(Gi(l));return await s.done,n}catch(e){if(e instanceof Dt)ct.warn(e.message);else{const s=rs.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ct.warn(s.message)}}}async function bi(l,e){try{const n=(await Wi()).transaction(Zt,"readwrite");await n.objectStore(Zt).put(e,Gi(l)),await n.done}catch(s){if(s instanceof Dt)ct.warn(s.message);else{const n=rs.create("idb-set",{originalErrorMessage:s==null?void 0:s.message});ct.warn(n.message)}}}function Gi(l){return`${l.name}!${l.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ur=1024,Wr=30;class Gr{constructor(e){this.container=e,this._heartbeatsCache=null;const s=this.container.getProvider("app").getImmediate();this._storage=new qr(s),this._heartbeatsCachePromise=this._storage.read().then(n=>(this._heartbeatsCache=n,n))}async triggerHeartbeat(){var e,s;try{const a=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),c=yi();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((s=this._heartbeatsCache)==null?void 0:s.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===c||this._heartbeatsCache.heartbeats.some(o=>o.date===c))return;if(this._heartbeatsCache.heartbeats.push({date:c,agent:a}),this._heartbeatsCache.heartbeats.length>Wr){const o=Xr(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(n){ct.warn(n)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const s=yi(),{heartbeatsToSend:n,unsentEntries:a}=zr(this._heartbeatsCache.heartbeats),c=ji(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=s,a.length>0?(this._heartbeatsCache.heartbeats=a,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),c}catch(s){return ct.warn(s),""}}}function yi(){return new Date().toISOString().substring(0,10)}function zr(l,e=Ur){const s=[];let n=l.slice();for(const a of l){const c=s.find(o=>o.agent===a.agent);if(c){if(c.dates.push(a.date),xi(s)>e){c.dates.pop();break}}else if(s.push({agent:a.agent,dates:[a.date]}),xi(s)>e){s.pop();break}n=n.slice(1)}return{heartbeatsToSend:s,unsentEntries:n}}class qr{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return On()?jn().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const s=await Vr(this.app);return s!=null&&s.heartbeats?s:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return bi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const n=await this.read();return bi(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}else return}}function xi(l){return ji(JSON.stringify({version:2,heartbeats:l})).length}function Xr(l){if(l.length===0)return-1;let e=0,s=l[0].date;for(let n=1;n<l.length;n++)l[n].date<s&&(s=l[n].date,e=n);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jr(l){ve(new ge("platform-logger",e=>new rr(e),"PRIVATE")),ve(new ge("heartbeat",e=>new Gr(e),"PRIVATE")),Ct(ss,fi,l),Ct(ss,fi,"esm2020"),Ct("fire-js","")}Jr("");var Kr="firebase",Yr="12.13.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ct(Kr,Yr,"app");var Si=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var as;(function(){var l;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(f,h){function p(){}p.prototype=h.prototype,f.F=h.prototype,f.prototype=new p,f.prototype.constructor=f,f.D=function(b,g,y){for(var m=Array(arguments.length-2),j=2;j<arguments.length;j++)m[j-2]=arguments[j];return h.prototype[g].apply(b,m)}}function s(){this.blockSize=-1}function n(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.C=Array(this.blockSize),this.o=this.h=0,this.u()}e(n,s),n.prototype.u=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function a(f,h,p){p||(p=0);const b=Array(16);if(typeof h=="string")for(var g=0;g<16;++g)b[g]=h.charCodeAt(p++)|h.charCodeAt(p++)<<8|h.charCodeAt(p++)<<16|h.charCodeAt(p++)<<24;else for(g=0;g<16;++g)b[g]=h[p++]|h[p++]<<8|h[p++]<<16|h[p++]<<24;h=f.g[0],p=f.g[1],g=f.g[2];let y=f.g[3],m;m=h+(y^p&(g^y))+b[0]+3614090360&4294967295,h=p+(m<<7&4294967295|m>>>25),m=y+(g^h&(p^g))+b[1]+3905402710&4294967295,y=h+(m<<12&4294967295|m>>>20),m=g+(p^y&(h^p))+b[2]+606105819&4294967295,g=y+(m<<17&4294967295|m>>>15),m=p+(h^g&(y^h))+b[3]+3250441966&4294967295,p=g+(m<<22&4294967295|m>>>10),m=h+(y^p&(g^y))+b[4]+4118548399&4294967295,h=p+(m<<7&4294967295|m>>>25),m=y+(g^h&(p^g))+b[5]+1200080426&4294967295,y=h+(m<<12&4294967295|m>>>20),m=g+(p^y&(h^p))+b[6]+2821735955&4294967295,g=y+(m<<17&4294967295|m>>>15),m=p+(h^g&(y^h))+b[7]+4249261313&4294967295,p=g+(m<<22&4294967295|m>>>10),m=h+(y^p&(g^y))+b[8]+1770035416&4294967295,h=p+(m<<7&4294967295|m>>>25),m=y+(g^h&(p^g))+b[9]+2336552879&4294967295,y=h+(m<<12&4294967295|m>>>20),m=g+(p^y&(h^p))+b[10]+4294925233&4294967295,g=y+(m<<17&4294967295|m>>>15),m=p+(h^g&(y^h))+b[11]+2304563134&4294967295,p=g+(m<<22&4294967295|m>>>10),m=h+(y^p&(g^y))+b[12]+1804603682&4294967295,h=p+(m<<7&4294967295|m>>>25),m=y+(g^h&(p^g))+b[13]+4254626195&4294967295,y=h+(m<<12&4294967295|m>>>20),m=g+(p^y&(h^p))+b[14]+2792965006&4294967295,g=y+(m<<17&4294967295|m>>>15),m=p+(h^g&(y^h))+b[15]+1236535329&4294967295,p=g+(m<<22&4294967295|m>>>10),m=h+(g^y&(p^g))+b[1]+4129170786&4294967295,h=p+(m<<5&4294967295|m>>>27),m=y+(p^g&(h^p))+b[6]+3225465664&4294967295,y=h+(m<<9&4294967295|m>>>23),m=g+(h^p&(y^h))+b[11]+643717713&4294967295,g=y+(m<<14&4294967295|m>>>18),m=p+(y^h&(g^y))+b[0]+3921069994&4294967295,p=g+(m<<20&4294967295|m>>>12),m=h+(g^y&(p^g))+b[5]+3593408605&4294967295,h=p+(m<<5&4294967295|m>>>27),m=y+(p^g&(h^p))+b[10]+38016083&4294967295,y=h+(m<<9&4294967295|m>>>23),m=g+(h^p&(y^h))+b[15]+3634488961&4294967295,g=y+(m<<14&4294967295|m>>>18),m=p+(y^h&(g^y))+b[4]+3889429448&4294967295,p=g+(m<<20&4294967295|m>>>12),m=h+(g^y&(p^g))+b[9]+568446438&4294967295,h=p+(m<<5&4294967295|m>>>27),m=y+(p^g&(h^p))+b[14]+3275163606&4294967295,y=h+(m<<9&4294967295|m>>>23),m=g+(h^p&(y^h))+b[3]+4107603335&4294967295,g=y+(m<<14&4294967295|m>>>18),m=p+(y^h&(g^y))+b[8]+1163531501&4294967295,p=g+(m<<20&4294967295|m>>>12),m=h+(g^y&(p^g))+b[13]+2850285829&4294967295,h=p+(m<<5&4294967295|m>>>27),m=y+(p^g&(h^p))+b[2]+4243563512&4294967295,y=h+(m<<9&4294967295|m>>>23),m=g+(h^p&(y^h))+b[7]+1735328473&4294967295,g=y+(m<<14&4294967295|m>>>18),m=p+(y^h&(g^y))+b[12]+2368359562&4294967295,p=g+(m<<20&4294967295|m>>>12),m=h+(p^g^y)+b[5]+4294588738&4294967295,h=p+(m<<4&4294967295|m>>>28),m=y+(h^p^g)+b[8]+2272392833&4294967295,y=h+(m<<11&4294967295|m>>>21),m=g+(y^h^p)+b[11]+1839030562&4294967295,g=y+(m<<16&4294967295|m>>>16),m=p+(g^y^h)+b[14]+4259657740&4294967295,p=g+(m<<23&4294967295|m>>>9),m=h+(p^g^y)+b[1]+2763975236&4294967295,h=p+(m<<4&4294967295|m>>>28),m=y+(h^p^g)+b[4]+1272893353&4294967295,y=h+(m<<11&4294967295|m>>>21),m=g+(y^h^p)+b[7]+4139469664&4294967295,g=y+(m<<16&4294967295|m>>>16),m=p+(g^y^h)+b[10]+3200236656&4294967295,p=g+(m<<23&4294967295|m>>>9),m=h+(p^g^y)+b[13]+681279174&4294967295,h=p+(m<<4&4294967295|m>>>28),m=y+(h^p^g)+b[0]+3936430074&4294967295,y=h+(m<<11&4294967295|m>>>21),m=g+(y^h^p)+b[3]+3572445317&4294967295,g=y+(m<<16&4294967295|m>>>16),m=p+(g^y^h)+b[6]+76029189&4294967295,p=g+(m<<23&4294967295|m>>>9),m=h+(p^g^y)+b[9]+3654602809&4294967295,h=p+(m<<4&4294967295|m>>>28),m=y+(h^p^g)+b[12]+3873151461&4294967295,y=h+(m<<11&4294967295|m>>>21),m=g+(y^h^p)+b[15]+530742520&4294967295,g=y+(m<<16&4294967295|m>>>16),m=p+(g^y^h)+b[2]+3299628645&4294967295,p=g+(m<<23&4294967295|m>>>9),m=h+(g^(p|~y))+b[0]+4096336452&4294967295,h=p+(m<<6&4294967295|m>>>26),m=y+(p^(h|~g))+b[7]+1126891415&4294967295,y=h+(m<<10&4294967295|m>>>22),m=g+(h^(y|~p))+b[14]+2878612391&4294967295,g=y+(m<<15&4294967295|m>>>17),m=p+(y^(g|~h))+b[5]+4237533241&4294967295,p=g+(m<<21&4294967295|m>>>11),m=h+(g^(p|~y))+b[12]+1700485571&4294967295,h=p+(m<<6&4294967295|m>>>26),m=y+(p^(h|~g))+b[3]+2399980690&4294967295,y=h+(m<<10&4294967295|m>>>22),m=g+(h^(y|~p))+b[10]+4293915773&4294967295,g=y+(m<<15&4294967295|m>>>17),m=p+(y^(g|~h))+b[1]+2240044497&4294967295,p=g+(m<<21&4294967295|m>>>11),m=h+(g^(p|~y))+b[8]+1873313359&4294967295,h=p+(m<<6&4294967295|m>>>26),m=y+(p^(h|~g))+b[15]+4264355552&4294967295,y=h+(m<<10&4294967295|m>>>22),m=g+(h^(y|~p))+b[6]+2734768916&4294967295,g=y+(m<<15&4294967295|m>>>17),m=p+(y^(g|~h))+b[13]+1309151649&4294967295,p=g+(m<<21&4294967295|m>>>11),m=h+(g^(p|~y))+b[4]+4149444226&4294967295,h=p+(m<<6&4294967295|m>>>26),m=y+(p^(h|~g))+b[11]+3174756917&4294967295,y=h+(m<<10&4294967295|m>>>22),m=g+(h^(y|~p))+b[2]+718787259&4294967295,g=y+(m<<15&4294967295|m>>>17),m=p+(y^(g|~h))+b[9]+3951481745&4294967295,f.g[0]=f.g[0]+h&4294967295,f.g[1]=f.g[1]+(g+(m<<21&4294967295|m>>>11))&4294967295,f.g[2]=f.g[2]+g&4294967295,f.g[3]=f.g[3]+y&4294967295}n.prototype.v=function(f,h){h===void 0&&(h=f.length);const p=h-this.blockSize,b=this.C;let g=this.h,y=0;for(;y<h;){if(g==0)for(;y<=p;)a(this,f,y),y+=this.blockSize;if(typeof f=="string"){for(;y<h;)if(b[g++]=f.charCodeAt(y++),g==this.blockSize){a(this,b),g=0;break}}else for(;y<h;)if(b[g++]=f[y++],g==this.blockSize){a(this,b),g=0;break}}this.h=g,this.o+=h},n.prototype.A=function(){var f=Array((this.h<56?this.blockSize:this.blockSize*2)-this.h);f[0]=128;for(var h=1;h<f.length-8;++h)f[h]=0;h=this.o*8;for(var p=f.length-8;p<f.length;++p)f[p]=h&255,h/=256;for(this.v(f),f=Array(16),h=0,p=0;p<4;++p)for(let b=0;b<32;b+=8)f[h++]=this.g[p]>>>b&255;return f};function c(f,h){var p=u;return Object.prototype.hasOwnProperty.call(p,f)?p[f]:p[f]=h(f)}function o(f,h){this.h=h;const p=[];let b=!0;for(let g=f.length-1;g>=0;g--){const y=f[g]|0;b&&y==h||(p[g]=y,b=!1)}this.g=p}var u={};function v(f){return-128<=f&&f<128?c(f,function(h){return new o([h|0],h<0?-1:0)}):new o([f|0],f<0?-1:0)}function x(f){if(isNaN(f)||!isFinite(f))return w;if(f<0)return I(x(-f));const h=[];let p=1;for(let b=0;f>=p;b++)h[b]=f/p|0,p*=4294967296;return new o(h,0)}function $(f,h){if(f.length==0)throw Error("number format error: empty string");if(h=h||10,h<2||36<h)throw Error("radix out of range: "+h);if(f.charAt(0)=="-")return I($(f.substring(1),h));if(f.indexOf("-")>=0)throw Error('number format error: interior "-" character');const p=x(Math.pow(h,8));let b=w;for(let y=0;y<f.length;y+=8){var g=Math.min(8,f.length-y);const m=parseInt(f.substring(y,y+g),h);g<8?(g=x(Math.pow(h,g)),b=b.j(g).add(x(m))):(b=b.j(p),b=b.add(x(m)))}return b}var w=v(0),A=v(1),M=v(16777216);l=o.prototype,l.m=function(){if(E(this))return-I(this).m();let f=0,h=1;for(let p=0;p<this.g.length;p++){const b=this.i(p);f+=(b>=0?b:4294967296+b)*h,h*=4294967296}return f},l.toString=function(f){if(f=f||10,f<2||36<f)throw Error("radix out of range: "+f);if(_(this))return"0";if(E(this))return"-"+I(this).toString(f);const h=x(Math.pow(f,6));var p=this;let b="";for(;;){const g=N(p,h).g;p=L(p,g.j(h));let y=((p.g.length>0?p.g[0]:p.h)>>>0).toString(f);if(p=g,_(p))return y+b;for(;y.length<6;)y="0"+y;b=y+b}},l.i=function(f){return f<0?0:f<this.g.length?this.g[f]:this.h};function _(f){if(f.h!=0)return!1;for(let h=0;h<f.g.length;h++)if(f.g[h]!=0)return!1;return!0}function E(f){return f.h==-1}l.l=function(f){return f=L(this,f),E(f)?-1:_(f)?0:1};function I(f){const h=f.g.length,p=[];for(let b=0;b<h;b++)p[b]=~f.g[b];return new o(p,~f.h).add(A)}l.abs=function(){return E(this)?I(this):this},l.add=function(f){const h=Math.max(this.g.length,f.g.length),p=[];let b=0;for(let g=0;g<=h;g++){let y=b+(this.i(g)&65535)+(f.i(g)&65535),m=(y>>>16)+(this.i(g)>>>16)+(f.i(g)>>>16);b=m>>>16,y&=65535,m&=65535,p[g]=m<<16|y}return new o(p,p[p.length-1]&-2147483648?-1:0)};function L(f,h){return f.add(I(h))}l.j=function(f){if(_(this)||_(f))return w;if(E(this))return E(f)?I(this).j(I(f)):I(I(this).j(f));if(E(f))return I(this.j(I(f)));if(this.l(M)<0&&f.l(M)<0)return x(this.m()*f.m());const h=this.g.length+f.g.length,p=[];for(var b=0;b<2*h;b++)p[b]=0;for(b=0;b<this.g.length;b++)for(let g=0;g<f.g.length;g++){const y=this.i(b)>>>16,m=this.i(b)&65535,j=f.i(g)>>>16,tt=f.i(g)&65535;p[2*b+2*g]+=m*tt,k(p,2*b+2*g),p[2*b+2*g+1]+=y*tt,k(p,2*b+2*g+1),p[2*b+2*g+1]+=m*j,k(p,2*b+2*g+1),p[2*b+2*g+2]+=y*j,k(p,2*b+2*g+2)}for(f=0;f<h;f++)p[f]=p[2*f+1]<<16|p[2*f];for(f=h;f<2*h;f++)p[f]=0;return new o(p,0)};function k(f,h){for(;(f[h]&65535)!=f[h];)f[h+1]+=f[h]>>>16,f[h]&=65535,h++}function C(f,h){this.g=f,this.h=h}function N(f,h){if(_(h))throw Error("division by zero");if(_(f))return new C(w,w);if(E(f))return h=N(I(f),h),new C(I(h.g),I(h.h));if(E(h))return h=N(f,I(h)),new C(I(h.g),h.h);if(f.g.length>30){if(E(f)||E(h))throw Error("slowDivide_ only works with positive integers.");for(var p=A,b=h;b.l(f)<=0;)p=R(p),b=R(b);var g=D(p,1),y=D(b,1);for(b=D(b,2),p=D(p,2);!_(b);){var m=y.add(b);m.l(f)<=0&&(g=g.add(p),y=m),b=D(b,1),p=D(p,1)}return h=L(f,g.j(h)),new C(g,h)}for(g=w;f.l(h)>=0;){for(p=Math.max(1,Math.floor(f.m()/h.m())),b=Math.ceil(Math.log(p)/Math.LN2),b=b<=48?1:Math.pow(2,b-48),y=x(p),m=y.j(h);E(m)||m.l(f)>0;)p-=b,y=x(p),m=y.j(h);_(y)&&(y=A),g=g.add(y),f=L(f,m)}return new C(g,f)}l.B=function(f){return N(this,f).h},l.and=function(f){const h=Math.max(this.g.length,f.g.length),p=[];for(let b=0;b<h;b++)p[b]=this.i(b)&f.i(b);return new o(p,this.h&f.h)},l.or=function(f){const h=Math.max(this.g.length,f.g.length),p=[];for(let b=0;b<h;b++)p[b]=this.i(b)|f.i(b);return new o(p,this.h|f.h)},l.xor=function(f){const h=Math.max(this.g.length,f.g.length),p=[];for(let b=0;b<h;b++)p[b]=this.i(b)^f.i(b);return new o(p,this.h^f.h)};function R(f){const h=f.g.length+1,p=[];for(let b=0;b<h;b++)p[b]=f.i(b)<<1|f.i(b-1)>>>31;return new o(p,f.h)}function D(f,h){const p=h>>5;h%=32;const b=f.g.length-p,g=[];for(let y=0;y<b;y++)g[y]=h>0?f.i(y+p)>>>h|f.i(y+p+1)<<32-h:f.i(y+p);return new o(g,f.h)}n.prototype.digest=n.prototype.A,n.prototype.reset=n.prototype.u,n.prototype.update=n.prototype.v,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.B,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=x,o.fromString=$,as=o}).apply(typeof Si<"u"?Si:typeof self<"u"?self:typeof window<"u"?window:{});var me=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};(function(){var l,e=Object.defineProperty;function s(t){t=[typeof globalThis=="object"&&globalThis,t,typeof window=="object"&&window,typeof self=="object"&&self,typeof me=="object"&&me];for(var i=0;i<t.length;++i){var r=t[i];if(r&&r.Math==Math)return r}throw Error("Cannot find global object")}var n=s(this);function a(t,i){if(i)t:{var r=n;t=t.split(".");for(var d=0;d<t.length-1;d++){var S=t[d];if(!(S in r))break t;r=r[S]}t=t[t.length-1],d=r[t],i=i(d),i!=d&&i!=null&&e(r,t,{configurable:!0,writable:!0,value:i})}}a("Symbol.dispose",function(t){return t||Symbol("Symbol.dispose")}),a("Array.prototype.values",function(t){return t||function(){return this[Symbol.iterator]()}}),a("Object.entries",function(t){return t||function(i){var r=[],d;for(d in i)Object.prototype.hasOwnProperty.call(i,d)&&r.push([d,i[d]]);return r}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var c=c||{},o=this||self;function u(t){var i=typeof t;return i=="object"&&t!=null||i=="function"}function v(t,i,r){return t.call.apply(t.bind,arguments)}function x(t,i,r){return x=v,x.apply(null,arguments)}function $(t,i){var r=Array.prototype.slice.call(arguments,1);return function(){var d=r.slice();return d.push.apply(d,arguments),t.apply(this,d)}}function w(t,i){function r(){}r.prototype=i.prototype,t.Z=i.prototype,t.prototype=new r,t.prototype.constructor=t,t.Ob=function(d,S,T){for(var P=Array(arguments.length-2),B=2;B<arguments.length;B++)P[B-2]=arguments[B];return i.prototype[S].apply(d,P)}}var A=typeof AsyncContext<"u"&&typeof AsyncContext.Snapshot=="function"?t=>t&&AsyncContext.Snapshot.wrap(t):t=>t;function M(t){const i=t.length;if(i>0){const r=Array(i);for(let d=0;d<i;d++)r[d]=t[d];return r}return[]}function _(t,i){for(let d=1;d<arguments.length;d++){const S=arguments[d];var r=typeof S;if(r=r!="object"?r:S?Array.isArray(S)?"array":r:"null",r=="array"||r=="object"&&typeof S.length=="number"){r=t.length||0;const T=S.length||0;t.length=r+T;for(let P=0;P<T;P++)t[r+P]=S[P]}else t.push(S)}}class E{constructor(i,r){this.i=i,this.j=r,this.h=0,this.g=null}get(){let i;return this.h>0?(this.h--,i=this.g,this.g=i.next,i.next=null):i=this.i(),i}}function I(t){o.setTimeout(()=>{throw t},0)}function L(){var t=f;let i=null;return t.g&&(i=t.g,t.g=t.g.next,t.g||(t.h=null),i.next=null),i}class k{constructor(){this.h=this.g=null}add(i,r){const d=C.get();d.set(i,r),this.h?this.h.next=d:this.g=d,this.h=d}}var C=new E(()=>new N,t=>t.reset());class N{constructor(){this.next=this.g=this.h=null}set(i,r){this.h=i,this.g=r,this.next=null}reset(){this.next=this.g=this.h=null}}let R,D=!1,f=new k,h=()=>{const t=Promise.resolve(void 0);R=()=>{t.then(p)}};function p(){for(var t;t=L();){try{t.h.call(t.g)}catch(r){I(r)}var i=C;i.j(t),i.h<100&&(i.h++,t.next=i.g,i.g=t)}D=!1}function b(){this.u=this.u,this.C=this.C}b.prototype.u=!1,b.prototype.dispose=function(){this.u||(this.u=!0,this.N())},b.prototype[Symbol.dispose]=function(){this.dispose()},b.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function g(t,i){this.type=t,this.g=this.target=i,this.defaultPrevented=!1}g.prototype.h=function(){this.defaultPrevented=!0};var y=function(){if(!o.addEventListener||!Object.defineProperty)return!1;var t=!1,i=Object.defineProperty({},"passive",{get:function(){t=!0}});try{const r=()=>{};o.addEventListener("test",r,i),o.removeEventListener("test",r,i)}catch{}return t}();function m(t){return/^[\s\xa0]*$/.test(t)}function j(t,i){g.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t&&this.init(t,i)}w(j,g),j.prototype.init=function(t,i){const r=this.type=t.type,d=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;this.target=t.target||t.srcElement,this.g=i,i=t.relatedTarget,i||(r=="mouseover"?i=t.fromElement:r=="mouseout"&&(i=t.toElement)),this.relatedTarget=i,d?(this.clientX=d.clientX!==void 0?d.clientX:d.pageX,this.clientY=d.clientY!==void 0?d.clientY:d.pageY,this.screenX=d.screenX||0,this.screenY=d.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=t.pointerType,this.state=t.state,this.i=t,t.defaultPrevented&&j.Z.h.call(this)},j.prototype.h=function(){j.Z.h.call(this);const t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var tt="closure_listenable_"+(Math.random()*1e6|0),Qi=0;function Zi(t,i,r,d,S){this.listener=t,this.proxy=null,this.src=i,this.type=r,this.capture=!!d,this.ha=S,this.key=++Qi,this.da=this.fa=!1}function ee(t){t.da=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function se(t,i,r){for(const d in t)i.call(r,t[d],d,t)}function tn(t,i){for(const r in t)i.call(void 0,t[r],r,t)}function ds(t){const i={};for(const r in t)i[r]=t[r];return i}const hs="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function us(t,i){let r,d;for(let S=1;S<arguments.length;S++){d=arguments[S];for(r in d)t[r]=d[r];for(let T=0;T<hs.length;T++)r=hs[T],Object.prototype.hasOwnProperty.call(d,r)&&(t[r]=d[r])}}function ie(t){this.src=t,this.g={},this.h=0}ie.prototype.add=function(t,i,r,d,S){const T=t.toString();t=this.g[T],t||(t=this.g[T]=[],this.h++);const P=Te(t,i,d,S);return P>-1?(i=t[P],r||(i.fa=!1)):(i=new Zi(i,this.src,T,!!d,S),i.fa=r,t.push(i)),i};function we(t,i){const r=i.type;if(r in t.g){var d=t.g[r],S=Array.prototype.indexOf.call(d,i,void 0),T;(T=S>=0)&&Array.prototype.splice.call(d,S,1),T&&(ee(i),t.g[r].length==0&&(delete t.g[r],t.h--))}}function Te(t,i,r,d){for(let S=0;S<t.length;++S){const T=t[S];if(!T.da&&T.listener==i&&T.capture==!!r&&T.ha==d)return S}return-1}var Ee="closure_lm_"+(Math.random()*1e6|0),$e={};function ms(t,i,r,d,S){if(Array.isArray(i)){for(let T=0;T<i.length;T++)ms(t,i[T],r,d,S);return null}return r=gs(r),t&&t[tt]?t.J(i,r,u(d)?!!d.capture:!1,S):en(t,i,r,!1,d,S)}function en(t,i,r,d,S,T){if(!i)throw Error("Invalid event type");const P=u(S)?!!S.capture:!!S;let B=Ie(t);if(B||(t[Ee]=B=new ie(t)),r=B.add(i,r,d,P,T),r.proxy)return r;if(d=sn(),r.proxy=d,d.src=t,d.listener=r,t.addEventListener)y||(S=P),S===void 0&&(S=!1),t.addEventListener(i.toString(),d,S);else if(t.attachEvent)t.attachEvent(fs(i.toString()),d);else if(t.addListener&&t.removeListener)t.addListener(d);else throw Error("addEventListener and attachEvent are unavailable.");return r}function sn(){function t(r){return i.call(t.src,t.listener,r)}const i=nn;return t}function ps(t,i,r,d,S){if(Array.isArray(i))for(var T=0;T<i.length;T++)ps(t,i[T],r,d,S);else d=u(d)?!!d.capture:!!d,r=gs(r),t&&t[tt]?(t=t.i,T=String(i).toString(),T in t.g&&(i=t.g[T],r=Te(i,r,d,S),r>-1&&(ee(i[r]),Array.prototype.splice.call(i,r,1),i.length==0&&(delete t.g[T],t.h--)))):t&&(t=Ie(t))&&(i=t.g[i.toString()],t=-1,i&&(t=Te(i,r,d,S)),(r=t>-1?i[t]:null)&&Ae(r))}function Ae(t){if(typeof t!="number"&&t&&!t.da){var i=t.src;if(i&&i[tt])we(i.i,t);else{var r=t.type,d=t.proxy;i.removeEventListener?i.removeEventListener(r,d,t.capture):i.detachEvent?i.detachEvent(fs(r),d):i.addListener&&i.removeListener&&i.removeListener(d),(r=Ie(i))?(we(r,t),r.h==0&&(r.src=null,i[Ee]=null)):ee(t)}}}function fs(t){return t in $e?$e[t]:$e[t]="on"+t}function nn(t,i){if(t.da)t=!0;else{i=new j(i,this);const r=t.listener,d=t.ha||t.src;t.fa&&Ae(t),t=r.call(d,i)}return t}function Ie(t){return t=t[Ee],t instanceof ie?t:null}var Me="__closure_events_fn_"+(Math.random()*1e9>>>0);function gs(t){return typeof t=="function"?t:(t[Me]||(t[Me]=function(i){return t.handleEvent(i)}),t[Me])}function J(){b.call(this),this.i=new ie(this),this.M=this,this.G=null}w(J,b),J.prototype[tt]=!0,J.prototype.removeEventListener=function(t,i,r,d){ps(this,t,i,r,d)};function K(t,i){var r,d=t.G;if(d)for(r=[];d;d=d.G)r.push(d);if(t=t.M,d=i.type||i,typeof i=="string")i=new g(i,t);else if(i instanceof g)i.target=i.target||t;else{var S=i;i=new g(d,t),us(i,S)}S=!0;let T,P;if(r)for(P=r.length-1;P>=0;P--)T=i.g=r[P],S=ne(T,d,!0,i)&&S;if(T=i.g=t,S=ne(T,d,!0,i)&&S,S=ne(T,d,!1,i)&&S,r)for(P=0;P<r.length;P++)T=i.g=r[P],S=ne(T,d,!1,i)&&S}J.prototype.N=function(){if(J.Z.N.call(this),this.i){var t=this.i;for(const i in t.g){const r=t.g[i];for(let d=0;d<r.length;d++)ee(r[d]);delete t.g[i],t.h--}}this.G=null},J.prototype.J=function(t,i,r,d){return this.i.add(String(t),i,!1,r,d)},J.prototype.K=function(t,i,r,d){return this.i.add(String(t),i,!0,r,d)};function ne(t,i,r,d){if(i=t.i.g[String(i)],!i)return!0;i=i.concat();let S=!0;for(let T=0;T<i.length;++T){const P=i[T];if(P&&!P.da&&P.capture==r){const B=P.listener,q=P.ha||P.src;P.fa&&we(t.i,P),S=B.call(q,d)!==!1&&S}}return S&&!d.defaultPrevented}function rn(t,i){if(typeof t!="function")if(t&&typeof t.handleEvent=="function")t=x(t.handleEvent,t);else throw Error("Invalid listener argument");return Number(i)>2147483647?-1:o.setTimeout(t,i||0)}function vs(t){t.g=rn(()=>{t.g=null,t.i&&(t.i=!1,vs(t))},t.l);const i=t.h;t.h=null,t.m.apply(null,i)}class an extends b{constructor(i,r){super(),this.m=i,this.l=r,this.h=null,this.i=!1,this.g=null}j(i){this.h=arguments,this.g?this.i=!0:vs(this)}N(){super.N(),this.g&&(o.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Nt(t){b.call(this),this.h=t,this.g={}}w(Nt,b);var bs=[];function ys(t){se(t.g,function(i,r){this.g.hasOwnProperty(r)&&Ae(i)},t),t.g={}}Nt.prototype.N=function(){Nt.Z.N.call(this),ys(this)},Nt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var _e=o.JSON.stringify,on=o.JSON.parse,ln=class{stringify(t){return o.JSON.stringify(t,void 0)}parse(t){return o.JSON.parse(t,void 0)}};function xs(){}function cn(){}var kt={OPEN:"a",hb:"b",ERROR:"c",tb:"d"};function Pe(){g.call(this,"d")}w(Pe,g);function Ce(){g.call(this,"c")}w(Ce,g);var It={},Ss=null;function Le(){return Ss=Ss||new J}It.Ia="serverreachability";function ws(t){g.call(this,It.Ia,t)}w(ws,g);function Rt(t){const i=Le();K(i,new ws(i))}It.STAT_EVENT="statevent";function Ts(t,i){g.call(this,It.STAT_EVENT,t),this.stat=i}w(Ts,g);function Y(t){const i=Le();K(i,new Ts(i,t))}It.Ja="timingevent";function Es(t,i){g.call(this,It.Ja,t),this.size=i}w(Es,g);function Bt(t,i){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return o.setTimeout(function(){t()},i)}function Ot(){this.g=!0}Ot.prototype.ua=function(){this.g=!1};function dn(t,i,r,d,S,T){t.info(function(){if(t.g)if(T){var P="",B=T.split("&");for(let V=0;V<B.length;V++){var q=B[V].split("=");if(q.length>1){const X=q[0];q=q[1];const nt=X.split("_");P=nt.length>=2&&nt[1]=="type"?P+(X+"="+q+"&"):P+(X+"=redacted&")}}}else P=null;else P=T;return"XMLHTTP REQ ("+d+") [attempt "+S+"]: "+i+`
`+r+`
`+P})}function hn(t,i,r,d,S,T,P){t.info(function(){return"XMLHTTP RESP ("+d+") [ attempt "+S+"]: "+i+`
`+r+`
`+T+" "+P})}function Mt(t,i,r,d){t.info(function(){return"XMLHTTP TEXT ("+i+"): "+mn(t,r)+(d?" "+d:"")})}function un(t,i){t.info(function(){return"TIMEOUT: "+i})}Ot.prototype.info=function(){};function mn(t,i){if(!t.g)return i;if(!i)return null;try{const T=JSON.parse(i);if(T){for(t=0;t<T.length;t++)if(Array.isArray(T[t])){var r=T[t];if(!(r.length<2)){var d=r[1];if(Array.isArray(d)&&!(d.length<1)){var S=d[0];if(S!="noop"&&S!="stop"&&S!="close")for(let P=1;P<d.length;P++)d[P]=""}}}}return _e(T)}catch{return i}}var De={NO_ERROR:0,TIMEOUT:8},pn={},$s;function Ne(){}w(Ne,xs),Ne.prototype.g=function(){return new XMLHttpRequest},$s=new Ne;function jt(t){return encodeURIComponent(String(t))}function fn(t){var i=1;t=t.split(":");const r=[];for(;i>0&&t.length;)r.push(t.shift()),i--;return t.length&&r.push(t.join(":")),r}function dt(t,i,r,d){this.j=t,this.i=i,this.l=r,this.S=d||1,this.V=new Nt(this),this.H=45e3,this.J=null,this.o=!1,this.u=this.B=this.A=this.M=this.F=this.T=this.D=null,this.G=[],this.g=null,this.C=0,this.m=this.v=null,this.X=-1,this.K=!1,this.P=0,this.O=null,this.W=this.L=this.U=this.R=!1,this.h=new As}function As(){this.i=null,this.g="",this.h=!1}var Is={},ke={};function Re(t,i,r){t.M=1,t.A=ae(it(i)),t.u=r,t.R=!0,Ms(t,null)}function Ms(t,i){t.F=Date.now(),re(t),t.B=it(t.A);var r=t.B,d=t.S;Array.isArray(d)||(d=[String(d)]),Fs(r.i,"t",d),t.C=0,r=t.j.L,t.h=new As,t.g=ri(t.j,r?i:null,!t.u),t.P>0&&(t.O=new an(x(t.Y,t,t.g),t.P)),i=t.V,r=t.g,d=t.ba;var S="readystatechange";Array.isArray(S)||(S&&(bs[0]=S.toString()),S=bs);for(let T=0;T<S.length;T++){const P=ms(r,S[T],d||i.handleEvent,!1,i.h||i);if(!P)break;i.g[P.key]=P}i=t.J?ds(t.J):{},t.u?(t.v||(t.v="POST"),i["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.B,t.v,t.u,i)):(t.v="GET",t.g.ea(t.B,t.v,null,i)),Rt(),dn(t.i,t.v,t.B,t.l,t.S,t.u)}dt.prototype.ba=function(t){t=t.target;const i=this.O;i&&mt(t)==3?i.j():this.Y(t)},dt.prototype.Y=function(t){try{if(t==this.g)t:{const B=mt(this.g),q=this.g.ya(),V=this.g.ca();if(!(B<3)&&(B!=3||this.g&&(this.h.h||this.g.la()||Xs(this.g)))){this.K||B!=4||q==7||(q==8||V<=0?Rt(3):Rt(2)),Be(this);var i=this.g.ca();this.X=i;var r=gn(this);if(this.o=i==200,hn(this.i,this.v,this.B,this.l,this.S,B,i),this.o){if(this.U&&!this.L){e:{if(this.g){var d,S=this.g;if((d=S.g?S.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(d)){var T=d;break e}}T=null}if(t=T)Mt(this.i,this.l,t,"Initial handshake response via X-HTTP-Initial-Response"),this.L=!0,Oe(this,t);else{this.o=!1,this.m=3,Y(12),bt(this),Ht(this);break t}}if(this.R){t=!0;let X;for(;!this.K&&this.C<r.length;)if(X=vn(this,r),X==ke){B==4&&(this.m=4,Y(14),t=!1),Mt(this.i,this.l,null,"[Incomplete Response]");break}else if(X==Is){this.m=4,Y(15),Mt(this.i,this.l,r,"[Invalid Chunk]"),t=!1;break}else Mt(this.i,this.l,X,null),Oe(this,X);if(_s(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),B!=4||r.length!=0||this.h.h||(this.m=1,Y(16),t=!1),this.o=this.o&&t,!t)Mt(this.i,this.l,r,"[Invalid Chunked Response]"),bt(this),Ht(this);else if(r.length>0&&!this.W){this.W=!0;var P=this.j;P.g==this&&P.aa&&!P.P&&(P.j.info("Great, no buffering proxy detected. Bytes received: "+r.length),ze(P),P.P=!0,Y(11))}}else Mt(this.i,this.l,r,null),Oe(this,r);B==4&&bt(this),this.o&&!this.K&&(B==4?ei(this.j,this):(this.o=!1,re(this)))}else Cn(this.g),i==400&&r.indexOf("Unknown SID")>0?(this.m=3,Y(12)):(this.m=0,Y(13)),bt(this),Ht(this)}}}catch{}finally{}};function gn(t){if(!_s(t))return t.g.la();const i=Xs(t.g);if(i==="")return"";let r="";const d=i.length,S=mt(t.g)==4;if(!t.h.i){if(typeof TextDecoder>"u")return bt(t),Ht(t),"";t.h.i=new o.TextDecoder}for(let T=0;T<d;T++)t.h.h=!0,r+=t.h.i.decode(i[T],{stream:!(S&&T==d-1)});return i.length=0,t.h.g+=r,t.C=0,t.h.g}function _s(t){return t.g?t.v=="GET"&&t.M!=2&&t.j.Aa:!1}function vn(t,i){var r=t.C,d=i.indexOf(`
`,r);return d==-1?ke:(r=Number(i.substring(r,d)),isNaN(r)?Is:(d+=1,d+r>i.length?ke:(i=i.slice(d,d+r),t.C=d+r,i)))}dt.prototype.cancel=function(){this.K=!0,bt(this)};function re(t){t.T=Date.now()+t.H,Ps(t,t.H)}function Ps(t,i){if(t.D!=null)throw Error("WatchDog timer not null");t.D=Bt(x(t.aa,t),i)}function Be(t){t.D&&(o.clearTimeout(t.D),t.D=null)}dt.prototype.aa=function(){this.D=null;const t=Date.now();t-this.T>=0?(un(this.i,this.B),this.M!=2&&(Rt(),Y(17)),bt(this),this.m=2,Ht(this)):Ps(this,this.T-t)};function Ht(t){t.j.I==0||t.K||ei(t.j,t)}function bt(t){Be(t);var i=t.O;i&&typeof i.dispose=="function"&&i.dispose(),t.O=null,ys(t.V),t.g&&(i=t.g,t.g=null,i.abort(),i.dispose())}function Oe(t,i){try{var r=t.j;if(r.I!=0&&(r.g==t||je(r.h,t))){if(!t.L&&je(r.h,t)&&r.I==3){try{var d=r.Ba.g.parse(i)}catch{d=null}if(Array.isArray(d)&&d.length==3){var S=d;if(S[0]==0){t:if(!r.v){if(r.g)if(r.g.F+3e3<t.F)he(r),ce(r);else break t;Ge(r),Y(18)}}else r.xa=S[1],0<r.xa-r.K&&S[2]<37500&&r.F&&r.A==0&&!r.C&&(r.C=Bt(x(r.Va,r),6e3));Ds(r.h)<=1&&r.ta&&(r.ta=void 0)}else xt(r,11)}else if((t.L||r.g==t)&&he(r),!m(i))for(S=r.Ba.g.parse(i),i=0;i<S.length;i++){let V=S[i];const X=V[0];if(!(X<=r.K))if(r.K=X,V=V[1],r.I==2)if(V[0]=="c"){r.M=V[1],r.ba=V[2];const nt=V[3];nt!=null&&(r.ka=nt,r.j.info("VER="+r.ka));const St=V[4];St!=null&&(r.za=St,r.j.info("SVER="+r.za));const pt=V[5];pt!=null&&typeof pt=="number"&&pt>0&&(d=1.5*pt,r.O=d,r.j.info("backChannelRequestTimeoutMs_="+d)),d=r;const ft=t.g;if(ft){const ue=ft.g?ft.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(ue){var T=d.h;T.g||ue.indexOf("spdy")==-1&&ue.indexOf("quic")==-1&&ue.indexOf("h2")==-1||(T.j=T.l,T.g=new Set,T.h&&(He(T,T.h),T.h=null))}if(d.G){const qe=ft.g?ft.g.getResponseHeader("X-HTTP-Session-Id"):null;qe&&(d.wa=qe,W(d.J,d.G,qe))}}r.I=3,r.l&&r.l.ra(),r.aa&&(r.T=Date.now()-t.F,r.j.info("Handshake RTT: "+r.T+"ms")),d=r;var P=t;if(d.na=ni(d,d.L?d.ba:null,d.W),P.L){Ns(d.h,P);var B=P,q=d.O;q&&(B.H=q),B.D&&(Be(B),re(B)),d.g=P}else Zs(d);r.i.length>0&&de(r)}else V[0]!="stop"&&V[0]!="close"||xt(r,7);else r.I==3&&(V[0]=="stop"||V[0]=="close"?V[0]=="stop"?xt(r,7):We(r):V[0]!="noop"&&r.l&&r.l.qa(V),r.A=0)}}Rt(4)}catch{}}var bn=class{constructor(t,i){this.g=t,this.map=i}};function Cs(t){this.l=t||10,o.PerformanceNavigationTiming?(t=o.performance.getEntriesByType("navigation"),t=t.length>0&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(o.chrome&&o.chrome.loadTimes&&o.chrome.loadTimes()&&o.chrome.loadTimes().wasFetchedViaSpdy),this.j=t?this.l:1,this.g=null,this.j>1&&(this.g=new Set),this.h=null,this.i=[]}function Ls(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function Ds(t){return t.h?1:t.g?t.g.size:0}function je(t,i){return t.h?t.h==i:t.g?t.g.has(i):!1}function He(t,i){t.g?t.g.add(i):t.h=i}function Ns(t,i){t.h&&t.h==i?t.h=null:t.g&&t.g.has(i)&&t.g.delete(i)}Cs.prototype.cancel=function(){if(this.i=ks(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function ks(t){if(t.h!=null)return t.i.concat(t.h.G);if(t.g!=null&&t.g.size!==0){let i=t.i;for(const r of t.g.values())i=i.concat(r.G);return i}return M(t.i)}var Rs=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function yn(t,i){if(t){t=t.split("&");for(let r=0;r<t.length;r++){const d=t[r].indexOf("=");let S,T=null;d>=0?(S=t[r].substring(0,d),T=t[r].substring(d+1)):S=t[r],i(S,T?decodeURIComponent(T.replace(/\+/g," ")):"")}}}function ht(t){this.g=this.o=this.j="",this.u=null,this.m=this.h="",this.l=!1;let i;t instanceof ht?(this.l=t.l,Ft(this,t.j),this.o=t.o,this.g=t.g,Vt(this,t.u),this.h=t.h,Fe(this,Vs(t.i)),this.m=t.m):t&&(i=String(t).match(Rs))?(this.l=!1,Ft(this,i[1]||"",!0),this.o=Ut(i[2]||""),this.g=Ut(i[3]||"",!0),Vt(this,i[4]),this.h=Ut(i[5]||"",!0),Fe(this,i[6]||"",!0),this.m=Ut(i[7]||"")):(this.l=!1,this.i=new Gt(null,this.l))}ht.prototype.toString=function(){const t=[];var i=this.j;i&&t.push(Wt(i,Bs,!0),":");var r=this.g;return(r||i=="file")&&(t.push("//"),(i=this.o)&&t.push(Wt(i,Bs,!0),"@"),t.push(jt(r).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),r=this.u,r!=null&&t.push(":",String(r))),(r=this.h)&&(this.g&&r.charAt(0)!="/"&&t.push("/"),t.push(Wt(r,r.charAt(0)=="/"?wn:Sn,!0))),(r=this.i.toString())&&t.push("?",r),(r=this.m)&&t.push("#",Wt(r,En)),t.join("")},ht.prototype.resolve=function(t){const i=it(this);let r=!!t.j;r?Ft(i,t.j):r=!!t.o,r?i.o=t.o:r=!!t.g,r?i.g=t.g:r=t.u!=null;var d=t.h;if(r)Vt(i,t.u);else if(r=!!t.h){if(d.charAt(0)!="/")if(this.g&&!this.h)d="/"+d;else{var S=i.h.lastIndexOf("/");S!=-1&&(d=i.h.slice(0,S+1)+d)}if(S=d,S==".."||S==".")d="";else if(S.indexOf("./")!=-1||S.indexOf("/.")!=-1){d=S.lastIndexOf("/",0)==0,S=S.split("/");const T=[];for(let P=0;P<S.length;){const B=S[P++];B=="."?d&&P==S.length&&T.push(""):B==".."?((T.length>1||T.length==1&&T[0]!="")&&T.pop(),d&&P==S.length&&T.push("")):(T.push(B),d=!0)}d=T.join("/")}else d=S}return r?i.h=d:r=t.i.toString()!=="",r?Fe(i,Vs(t.i)):r=!!t.m,r&&(i.m=t.m),i};function it(t){return new ht(t)}function Ft(t,i,r){t.j=r?Ut(i,!0):i,t.j&&(t.j=t.j.replace(/:$/,""))}function Vt(t,i){if(i){if(i=Number(i),isNaN(i)||i<0)throw Error("Bad port number "+i);t.u=i}else t.u=null}function Fe(t,i,r){i instanceof Gt?(t.i=i,$n(t.i,t.l)):(r||(i=Wt(i,Tn)),t.i=new Gt(i,t.l))}function W(t,i,r){t.i.set(i,r)}function ae(t){return W(t,"zx",Math.floor(Math.random()*2147483648).toString(36)+Math.abs(Math.floor(Math.random()*2147483648)^Date.now()).toString(36)),t}function Ut(t,i){return t?i?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Wt(t,i,r){return typeof t=="string"?(t=encodeURI(t).replace(i,xn),r&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function xn(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Bs=/[#\/\?@]/g,Sn=/[#\?:]/g,wn=/[#\?]/g,Tn=/[#\?@]/g,En=/#/g;function Gt(t,i){this.h=this.g=null,this.i=t||null,this.j=!!i}function yt(t){t.g||(t.g=new Map,t.h=0,t.i&&yn(t.i,function(i,r){t.add(decodeURIComponent(i.replace(/\+/g," ")),r)}))}l=Gt.prototype,l.add=function(t,i){yt(this),this.i=null,t=_t(this,t);let r=this.g.get(t);return r||this.g.set(t,r=[]),r.push(i),this.h+=1,this};function Os(t,i){yt(t),i=_t(t,i),t.g.has(i)&&(t.i=null,t.h-=t.g.get(i).length,t.g.delete(i))}function js(t,i){return yt(t),i=_t(t,i),t.g.has(i)}l.forEach=function(t,i){yt(this),this.g.forEach(function(r,d){r.forEach(function(S){t.call(i,S,d,this)},this)},this)};function Hs(t,i){yt(t);let r=[];if(typeof i=="string")js(t,i)&&(r=r.concat(t.g.get(_t(t,i))));else for(t=Array.from(t.g.values()),i=0;i<t.length;i++)r=r.concat(t[i]);return r}l.set=function(t,i){return yt(this),this.i=null,t=_t(this,t),js(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[i]),this.h+=1,this},l.get=function(t,i){return t?(t=Hs(this,t),t.length>0?String(t[0]):i):i};function Fs(t,i,r){Os(t,i),r.length>0&&(t.i=null,t.g.set(_t(t,i),M(r)),t.h+=r.length)}l.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],i=Array.from(this.g.keys());for(let d=0;d<i.length;d++){var r=i[d];const S=jt(r);r=Hs(this,r);for(let T=0;T<r.length;T++){let P=S;r[T]!==""&&(P+="="+jt(r[T])),t.push(P)}}return this.i=t.join("&")};function Vs(t){const i=new Gt;return i.i=t.i,t.g&&(i.g=new Map(t.g),i.h=t.h),i}function _t(t,i){return i=String(i),t.j&&(i=i.toLowerCase()),i}function $n(t,i){i&&!t.j&&(yt(t),t.i=null,t.g.forEach(function(r,d){const S=d.toLowerCase();d!=S&&(Os(this,d),Fs(this,S,r))},t)),t.j=i}function An(t,i){const r=new Ot;if(o.Image){const d=new Image;d.onload=$(ut,r,"TestLoadImage: loaded",!0,i,d),d.onerror=$(ut,r,"TestLoadImage: error",!1,i,d),d.onabort=$(ut,r,"TestLoadImage: abort",!1,i,d),d.ontimeout=$(ut,r,"TestLoadImage: timeout",!1,i,d),o.setTimeout(function(){d.ontimeout&&d.ontimeout()},1e4),d.src=t}else i(!1)}function In(t,i){const r=new Ot,d=new AbortController,S=setTimeout(()=>{d.abort(),ut(r,"TestPingServer: timeout",!1,i)},1e4);fetch(t,{signal:d.signal}).then(T=>{clearTimeout(S),T.ok?ut(r,"TestPingServer: ok",!0,i):ut(r,"TestPingServer: server error",!1,i)}).catch(()=>{clearTimeout(S),ut(r,"TestPingServer: error",!1,i)})}function ut(t,i,r,d,S){try{S&&(S.onload=null,S.onerror=null,S.onabort=null,S.ontimeout=null),d(r)}catch{}}function Mn(){this.g=new ln}function Ve(t){this.i=t.Sb||null,this.h=t.ab||!1}w(Ve,xs),Ve.prototype.g=function(){return new oe(this.i,this.h)};function oe(t,i){J.call(this),this.H=t,this.o=i,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.A=new Headers,this.h=null,this.F="GET",this.D="",this.g=!1,this.B=this.j=this.l=null,this.v=new AbortController}w(oe,J),l=oe.prototype,l.open=function(t,i){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.F=t,this.D=i,this.readyState=1,qt(this)},l.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");if(this.v.signal.aborted)throw this.abort(),Error("Request was aborted.");this.g=!0;const i={headers:this.A,method:this.F,credentials:this.m,cache:void 0,signal:this.v.signal};t&&(i.body=t),(this.H||o).fetch(new Request(this.D,i)).then(this.Pa.bind(this),this.ga.bind(this))},l.abort=function(){this.response=this.responseText="",this.A=new Headers,this.status=0,this.v.abort(),this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),this.readyState>=1&&this.g&&this.readyState!=4&&(this.g=!1,zt(this)),this.readyState=0},l.Pa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,qt(this)),this.g&&(this.readyState=3,qt(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Na.bind(this),this.ga.bind(this));else if(typeof o.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.B=new TextDecoder;Us(this)}else t.text().then(this.Oa.bind(this),this.ga.bind(this))};function Us(t){t.j.read().then(t.Ma.bind(t)).catch(t.ga.bind(t))}l.Ma=function(t){if(this.g){if(this.o&&t.value)this.response.push(t.value);else if(!this.o){var i=t.value?t.value:new Uint8Array(0);(i=this.B.decode(i,{stream:!t.done}))&&(this.response=this.responseText+=i)}t.done?zt(this):qt(this),this.readyState==3&&Us(this)}},l.Oa=function(t){this.g&&(this.response=this.responseText=t,zt(this))},l.Na=function(t){this.g&&(this.response=t,zt(this))},l.ga=function(){this.g&&zt(this)};function zt(t){t.readyState=4,t.l=null,t.j=null,t.B=null,qt(t)}l.setRequestHeader=function(t,i){this.A.append(t,i)},l.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},l.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],i=this.h.entries();for(var r=i.next();!r.done;)r=r.value,t.push(r[0]+": "+r[1]),r=i.next();return t.join(`\r
`)};function qt(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(oe.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});function Ws(t){let i="";return se(t,function(r,d){i+=d,i+=":",i+=r,i+=`\r
`}),i}function Ue(t,i,r){t:{for(d in r){var d=!1;break t}d=!0}d||(r=Ws(r),typeof t=="string"?r!=null&&jt(r):W(t,i,r))}function G(t){J.call(this),this.headers=new Map,this.L=t||null,this.h=!1,this.g=null,this.D="",this.o=0,this.l="",this.j=this.B=this.v=this.A=!1,this.m=null,this.F="",this.H=!1}w(G,J);var _n=/^https?$/i,Pn=["POST","PUT"];l=G.prototype,l.Fa=function(t){this.H=t},l.ea=function(t,i,r,d){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+t);i=i?i.toUpperCase():"GET",this.D=t,this.l="",this.o=0,this.A=!1,this.h=!0,this.g=this.L?this.L.g():$s.g(),this.g.onreadystatechange=A(x(this.Ca,this));try{this.B=!0,this.g.open(i,String(t),!0),this.B=!1}catch(T){Gs(this,T);return}if(t=r||"",r=new Map(this.headers),d)if(Object.getPrototypeOf(d)===Object.prototype)for(var S in d)r.set(S,d[S]);else if(typeof d.keys=="function"&&typeof d.get=="function")for(const T of d.keys())r.set(T,d.get(T));else throw Error("Unknown input type for opt_headers: "+String(d));d=Array.from(r.keys()).find(T=>T.toLowerCase()=="content-type"),S=o.FormData&&t instanceof o.FormData,!(Array.prototype.indexOf.call(Pn,i,void 0)>=0)||d||S||r.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[T,P]of r)this.g.setRequestHeader(T,P);this.F&&(this.g.responseType=this.F),"withCredentials"in this.g&&this.g.withCredentials!==this.H&&(this.g.withCredentials=this.H);try{this.m&&(clearTimeout(this.m),this.m=null),this.v=!0,this.g.send(t),this.v=!1}catch(T){Gs(this,T)}};function Gs(t,i){t.h=!1,t.g&&(t.j=!0,t.g.abort(),t.j=!1),t.l=i,t.o=5,zs(t),le(t)}function zs(t){t.A||(t.A=!0,K(t,"complete"),K(t,"error"))}l.abort=function(t){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.o=t||7,K(this,"complete"),K(this,"abort"),le(this))},l.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),le(this,!0)),G.Z.N.call(this)},l.Ca=function(){this.u||(this.B||this.v||this.j?qs(this):this.Xa())},l.Xa=function(){qs(this)};function qs(t){if(t.h&&typeof c<"u"){if(t.v&&mt(t)==4)setTimeout(t.Ca.bind(t),0);else if(K(t,"readystatechange"),mt(t)==4){t.h=!1;try{const T=t.ca();t:switch(T){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var i=!0;break t;default:i=!1}var r;if(!(r=i)){var d;if(d=T===0){let P=String(t.D).match(Rs)[1]||null;!P&&o.self&&o.self.location&&(P=o.self.location.protocol.slice(0,-1)),d=!_n.test(P?P.toLowerCase():"")}r=d}if(r)K(t,"complete"),K(t,"success");else{t.o=6;try{var S=mt(t)>2?t.g.statusText:""}catch{S=""}t.l=S+" ["+t.ca()+"]",zs(t)}}finally{le(t)}}}}function le(t,i){if(t.g){t.m&&(clearTimeout(t.m),t.m=null);const r=t.g;t.g=null,i||K(t,"ready");try{r.onreadystatechange=null}catch{}}}l.isActive=function(){return!!this.g};function mt(t){return t.g?t.g.readyState:0}l.ca=function(){try{return mt(this)>2?this.g.status:-1}catch{return-1}},l.la=function(){try{return this.g?this.g.responseText:""}catch{return""}},l.La=function(t){if(this.g){var i=this.g.responseText;return t&&i.indexOf(t)==0&&(i=i.substring(t.length)),on(i)}};function Xs(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.F){case"":case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}function Cn(t){const i={};t=(t.g&&mt(t)>=2&&t.g.getAllResponseHeaders()||"").split(`\r
`);for(let d=0;d<t.length;d++){if(m(t[d]))continue;var r=fn(t[d]);const S=r[0];if(r=r[1],typeof r!="string")continue;r=r.trim();const T=i[S]||[];i[S]=T,T.push(r)}tn(i,function(d){return d.join(", ")})}l.ya=function(){return this.o},l.Ha=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xt(t,i,r){return r&&r.internalChannelParams&&r.internalChannelParams[t]||i}function Js(t){this.za=0,this.i=[],this.j=new Ot,this.ba=this.na=this.J=this.W=this.g=this.wa=this.G=this.H=this.u=this.U=this.o=null,this.Ya=this.V=0,this.Sa=Xt("failFast",!1,t),this.F=this.C=this.v=this.m=this.l=null,this.X=!0,this.xa=this.K=-1,this.Y=this.A=this.D=0,this.Qa=Xt("baseRetryDelayMs",5e3,t),this.Za=Xt("retryDelaySeedMs",1e4,t),this.Ta=Xt("forwardChannelMaxRetries",2,t),this.va=Xt("forwardChannelRequestTimeoutMs",2e4,t),this.ma=t&&t.xmlHttpFactory||void 0,this.Ua=t&&t.Rb||void 0,this.Aa=t&&t.useFetchStreams||!1,this.O=void 0,this.L=t&&t.supportsCrossDomainXhr||!1,this.M="",this.h=new Cs(t&&t.concurrentRequestLimit),this.Ba=new Mn,this.S=t&&t.fastHandshake||!1,this.R=t&&t.encodeInitMessageHeaders||!1,this.S&&this.R&&(this.R=!1),this.Ra=t&&t.Pb||!1,t&&t.ua&&this.j.ua(),t&&t.forceLongPolling&&(this.X=!1),this.aa=!this.S&&this.X&&t&&t.detectBufferingProxy||!1,this.ia=void 0,t&&t.longPollingTimeout&&t.longPollingTimeout>0&&(this.ia=t.longPollingTimeout),this.ta=void 0,this.T=0,this.P=!1,this.ja=this.B=null}l=Js.prototype,l.ka=8,l.I=1,l.connect=function(t,i,r,d){Y(0),this.W=t,this.H=i||{},r&&d!==void 0&&(this.H.OSID=r,this.H.OAID=d),this.F=this.X,this.J=ni(this,null,this.W),de(this)};function We(t){if(Ks(t),t.I==3){var i=t.V++,r=it(t.J);if(W(r,"SID",t.M),W(r,"RID",i),W(r,"TYPE","terminate"),Jt(t,r),i=new dt(t,t.j,i),i.M=2,i.A=ae(it(r)),r=!1,o.navigator&&o.navigator.sendBeacon)try{r=o.navigator.sendBeacon(i.A.toString(),"")}catch{}!r&&o.Image&&(new Image().src=i.A,r=!0),r||(i.g=ri(i.j,null),i.g.ea(i.A)),i.F=Date.now(),re(i)}ii(t)}function ce(t){t.g&&(ze(t),t.g.cancel(),t.g=null)}function Ks(t){ce(t),t.v&&(o.clearTimeout(t.v),t.v=null),he(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&o.clearTimeout(t.m),t.m=null)}function de(t){if(!Ls(t.h)&&!t.m){t.m=!0;var i=t.Ea;R||h(),D||(R(),D=!0),f.add(i,t),t.D=0}}function Ln(t,i){return Ds(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=i.G.concat(t.i),!0):t.I==1||t.I==2||t.D>=(t.Sa?0:t.Ta)?!1:(t.m=Bt(x(t.Ea,t,i),si(t,t.D)),t.D++,!0)}l.Ea=function(t){if(this.m)if(this.m=null,this.I==1){if(!t){this.V=Math.floor(Math.random()*1e5),t=this.V++;const S=new dt(this,this.j,t);let T=this.o;if(this.U&&(T?(T=ds(T),us(T,this.U)):T=this.U),this.u!==null||this.R||(S.J=T,T=null),this.S)t:{for(var i=0,r=0;r<this.i.length;r++){e:{var d=this.i[r];if("__data__"in d.map&&(d=d.map.__data__,typeof d=="string")){d=d.length;break e}d=void 0}if(d===void 0)break;if(i+=d,i>4096){i=r;break t}if(i===4096||r===this.i.length-1){i=r+1;break t}}i=1e3}else i=1e3;i=Qs(this,S,i),r=it(this.J),W(r,"RID",t),W(r,"CVER",22),this.G&&W(r,"X-HTTP-Session-Id",this.G),Jt(this,r),T&&(this.R?i="headers="+jt(Ws(T))+"&"+i:this.u&&Ue(r,this.u,T)),He(this.h,S),this.Ra&&W(r,"TYPE","init"),this.S?(W(r,"$req",i),W(r,"SID","null"),S.U=!0,Re(S,r,null)):Re(S,r,i),this.I=2}}else this.I==3&&(t?Ys(this,t):this.i.length==0||Ls(this.h)||Ys(this))};function Ys(t,i){var r;i?r=i.l:r=t.V++;const d=it(t.J);W(d,"SID",t.M),W(d,"RID",r),W(d,"AID",t.K),Jt(t,d),t.u&&t.o&&Ue(d,t.u,t.o),r=new dt(t,t.j,r,t.D+1),t.u===null&&(r.J=t.o),i&&(t.i=i.G.concat(t.i)),i=Qs(t,r,1e3),r.H=Math.round(t.va*.5)+Math.round(t.va*.5*Math.random()),He(t.h,r),Re(r,d,i)}function Jt(t,i){t.H&&se(t.H,function(r,d){W(i,d,r)}),t.l&&se({},function(r,d){W(i,d,r)})}function Qs(t,i,r){r=Math.min(t.i.length,r);const d=t.l?x(t.l.Ka,t.l,t):null;t:{var S=t.i;let B=-1;for(;;){const q=["count="+r];B==-1?r>0?(B=S[0].g,q.push("ofs="+B)):B=0:q.push("ofs="+B);let V=!0;for(let X=0;X<r;X++){var T=S[X].g;const nt=S[X].map;if(T-=B,T<0)B=Math.max(0,S[X].g-100),V=!1;else try{T="req"+T+"_"||"";try{var P=nt instanceof Map?nt:Object.entries(nt);for(const[St,pt]of P){let ft=pt;u(pt)&&(ft=_e(pt)),q.push(T+St+"="+encodeURIComponent(ft))}}catch(St){throw q.push(T+"type="+encodeURIComponent("_badmap")),St}}catch{d&&d(nt)}}if(V){P=q.join("&");break t}}P=void 0}return t=t.i.splice(0,r),i.G=t,P}function Zs(t){if(!t.g&&!t.v){t.Y=1;var i=t.Da;R||h(),D||(R(),D=!0),f.add(i,t),t.A=0}}function Ge(t){return t.g||t.v||t.A>=3?!1:(t.Y++,t.v=Bt(x(t.Da,t),si(t,t.A)),t.A++,!0)}l.Da=function(){if(this.v=null,ti(this),this.aa&&!(this.P||this.g==null||this.T<=0)){var t=4*this.T;this.j.info("BP detection timer enabled: "+t),this.B=Bt(x(this.Wa,this),t)}},l.Wa=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.P=!0,Y(10),ce(this),ti(this))};function ze(t){t.B!=null&&(o.clearTimeout(t.B),t.B=null)}function ti(t){t.g=new dt(t,t.j,"rpc",t.Y),t.u===null&&(t.g.J=t.o),t.g.P=0;var i=it(t.na);W(i,"RID","rpc"),W(i,"SID",t.M),W(i,"AID",t.K),W(i,"CI",t.F?"0":"1"),!t.F&&t.ia&&W(i,"TO",t.ia),W(i,"TYPE","xmlhttp"),Jt(t,i),t.u&&t.o&&Ue(i,t.u,t.o),t.O&&(t.g.H=t.O);var r=t.g;t=t.ba,r.M=1,r.A=ae(it(i)),r.u=null,r.R=!0,Ms(r,t)}l.Va=function(){this.C!=null&&(this.C=null,ce(this),Ge(this),Y(19))};function he(t){t.C!=null&&(o.clearTimeout(t.C),t.C=null)}function ei(t,i){var r=null;if(t.g==i){he(t),ze(t),t.g=null;var d=2}else if(je(t.h,i))r=i.G,Ns(t.h,i),d=1;else return;if(t.I!=0){if(i.o)if(d==1){r=i.u?i.u.length:0,i=Date.now()-i.F;var S=t.D;d=Le(),K(d,new Es(d,r)),de(t)}else Zs(t);else if(S=i.m,S==3||S==0&&i.X>0||!(d==1&&Ln(t,i)||d==2&&Ge(t)))switch(r&&r.length>0&&(i=t.h,i.i=i.i.concat(r)),S){case 1:xt(t,5);break;case 4:xt(t,10);break;case 3:xt(t,6);break;default:xt(t,2)}}}function si(t,i){let r=t.Qa+Math.floor(Math.random()*t.Za);return t.isActive()||(r*=2),r*i}function xt(t,i){if(t.j.info("Error code "+i),i==2){var r=x(t.bb,t),d=t.Ua;const S=!d;d=new ht(d||"//www.google.com/images/cleardot.gif"),o.location&&o.location.protocol=="http"||Ft(d,"https"),ae(d),S?An(d.toString(),r):In(d.toString(),r)}else Y(2);t.I=0,t.l&&t.l.pa(i),ii(t),Ks(t)}l.bb=function(t){t?(this.j.info("Successfully pinged google.com"),Y(2)):(this.j.info("Failed to ping google.com"),Y(1))};function ii(t){if(t.I=0,t.ja=[],t.l){const i=ks(t.h);(i.length!=0||t.i.length!=0)&&(_(t.ja,i),_(t.ja,t.i),t.h.i.length=0,M(t.i),t.i.length=0),t.l.oa()}}function ni(t,i,r){var d=r instanceof ht?it(r):new ht(r);if(d.g!="")i&&(d.g=i+"."+d.g),Vt(d,d.u);else{var S=o.location;d=S.protocol,i=i?i+"."+S.hostname:S.hostname,S=+S.port;const T=new ht(null);d&&Ft(T,d),i&&(T.g=i),S&&Vt(T,S),r&&(T.h=r),d=T}return r=t.G,i=t.wa,r&&i&&W(d,r,i),W(d,"VER",t.ka),Jt(t,d),d}function ri(t,i,r){if(i&&!t.L)throw Error("Can't create secondary domain capable XhrIo object.");return i=t.Aa&&!t.ma?new G(new Ve({ab:r})):new G(t.ma),i.Fa(t.L),i}l.isActive=function(){return!!this.l&&this.l.isActive(this)};function ai(){}l=ai.prototype,l.ra=function(){},l.qa=function(){},l.pa=function(){},l.oa=function(){},l.isActive=function(){return!0},l.Ka=function(){};function Z(t,i){J.call(this),this.g=new Js(i),this.l=t,this.h=i&&i.messageUrlParams||null,t=i&&i.messageHeaders||null,i&&i.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.o=t,t=i&&i.initMessageHeaders||null,i&&i.messageContentType&&(t?t["X-WebChannel-Content-Type"]=i.messageContentType:t={"X-WebChannel-Content-Type":i.messageContentType}),i&&i.sa&&(t?t["X-WebChannel-Client-Profile"]=i.sa:t={"X-WebChannel-Client-Profile":i.sa}),this.g.U=t,(t=i&&i.Qb)&&!m(t)&&(this.g.u=t),this.A=i&&i.supportsCrossDomainXhr||!1,this.v=i&&i.sendRawJson||!1,(i=i&&i.httpSessionIdParam)&&!m(i)&&(this.g.G=i,t=this.h,t!==null&&i in t&&(t=this.h,i in t&&delete t[i])),this.j=new Pt(this)}w(Z,J),Z.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.L=!0),this.g.connect(this.l,this.h||void 0)},Z.prototype.close=function(){We(this.g)},Z.prototype.o=function(t){var i=this.g;if(typeof t=="string"){var r={};r.__data__=t,t=r}else this.v&&(r={},r.__data__=_e(t),t=r);i.i.push(new bn(i.Ya++,t)),i.I==3&&de(i)},Z.prototype.N=function(){this.g.l=null,delete this.j,We(this.g),delete this.g,Z.Z.N.call(this)};function oi(t){Pe.call(this),t.__headers__&&(this.headers=t.__headers__,this.statusCode=t.__status__,delete t.__headers__,delete t.__status__);var i=t.__sm__;if(i){t:{for(const r in i){t=r;break t}t=void 0}(this.i=t)&&(t=this.i,i=i!==null&&t in i?i[t]:void 0),this.data=i}else this.data=t}w(oi,Pe);function li(){Ce.call(this),this.status=1}w(li,Ce);function Pt(t){this.g=t}w(Pt,ai),Pt.prototype.ra=function(){K(this.g,"a")},Pt.prototype.qa=function(t){K(this.g,new oi(t))},Pt.prototype.pa=function(t){K(this.g,new li)},Pt.prototype.oa=function(){K(this.g,"b")},Z.prototype.send=Z.prototype.o,Z.prototype.open=Z.prototype.m,Z.prototype.close=Z.prototype.close,De.NO_ERROR=0,De.TIMEOUT=8,De.HTTP_ERROR=6,pn.COMPLETE="complete",cn.EventType=kt,kt.OPEN="a",kt.CLOSE="b",kt.ERROR="c",kt.MESSAGE="d",J.prototype.listen=J.prototype.J,G.prototype.listenOnce=G.prototype.K,G.prototype.getLastError=G.prototype.Ha,G.prototype.getLastErrorCode=G.prototype.ya,G.prototype.getStatus=G.prototype.ca,G.prototype.getResponseJson=G.prototype.La,G.prototype.getResponseText=G.prototype.la,G.prototype.send=G.prototype.ea,G.prototype.setWithCredentials=G.prototype.Fa}).apply(typeof me<"u"?me:typeof self<"u"?self:typeof window<"u"?window:{});/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Q.UNAUTHENTICATED=new Q(null),Q.GOOGLE_CREDENTIALS=new Q("google-credentials-uid"),Q.FIRST_PARTY=new Q("first-party-uid"),Q.MOCK_USER=new Q("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Se="12.13.0";function Qr(l){Se=l}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=new Fi("@firebase/firestore");function st(l,...e){if(be.logLevel<=U.DEBUG){const s=e.map(qi);be.debug(`Firestore (${Se}): ${l}`,...s)}}function zi(l,...e){if(be.logLevel<=U.ERROR){const s=e.map(qi);be.error(`Firestore (${Se}): ${l}`,...s)}}function qi(l){if(typeof l=="string")return l;try{return function(s){return JSON.stringify(s)}(l)}catch{return l}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(l,e,s){let n="Unexpected state";typeof e=="string"?n=e:s=e,Xi(l,n,s)}function Xi(l,e,s){let n=`FIRESTORE (${Se}) INTERNAL ASSERTION FAILED: ${e} (ID: ${l.toString(16)})`;if(s!==void 0)try{n+=" CONTEXT: "+JSON.stringify(s)}catch{n+=" CONTEXT: "+s}throw zi(n),new Error(n)}function Kt(l,e,s,n){let a="Unexpected state";typeof s=="string"?a=s:n=s,l||Xi(e,a,n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const H={CANCELLED:"cancelled",INVALID_ARGUMENT:"invalid-argument",FAILED_PRECONDITION:"failed-precondition"};class F extends Dt{constructor(e,s){super(e,s),this.code=e,this.message=s,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yt{constructor(){this.promise=new Promise((e,s)=>{this.resolve=e,this.reject=s})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr{constructor(e,s){this.user=s,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ta{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,s){e.enqueueRetryable(()=>s(Q.UNAUTHENTICATED))}shutdown(){}}class ea{constructor(e){this.t=e,this.currentUser=Q.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,s){Kt(this.o===void 0,42304);let n=this.i;const a=v=>this.i!==n?(n=this.i,s(v)):Promise.resolve();let c=new Yt;this.o=()=>{this.i++,this.currentUser=this.u(),c.resolve(),c=new Yt,e.enqueueRetryable(()=>a(this.currentUser))};const o=()=>{const v=c;e.enqueueRetryable(async()=>{await v.promise,await a(this.currentUser)})},u=v=>{st("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=v,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(v=>u(v)),setTimeout(()=>{if(!this.auth){const v=this.t.getImmediate({optional:!0});v?u(v):(st("FirebaseAuthCredentialsProvider","Auth not yet detected"),c.resolve(),c=new Yt)}},0),o()}getToken(){const e=this.i,s=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(s).then(n=>this.i!==e?(st("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):n?(Kt(typeof n.accessToken=="string",31837,{l:n}),new Zr(n.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return Kt(e===null||typeof e=="string",2055,{h:e}),new Q(e)}}class sa{constructor(e,s,n){this.P=e,this.T=s,this.I=n,this.type="FirstParty",this.user=Q.FIRST_PARTY,this.R=new Map}A(){return this.I?this.I():null}get headers(){this.R.set("X-Goog-AuthUser",this.P);const e=this.A();return e&&this.R.set("Authorization",e),this.T&&this.R.set("X-Goog-Iam-Authorization-Token",this.T),this.R}}class ia{constructor(e,s,n){this.P=e,this.T=s,this.I=n}getToken(){return Promise.resolve(new sa(this.P,this.T,this.I))}start(e,s){e.enqueueRetryable(()=>s(Q.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class wi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class na{constructor(e,s){this.V=s,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,Br(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,s){Kt(this.o===void 0,3512);const n=c=>{c.error!=null&&st("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${c.error.message}`);const o=c.token!==this.m;return this.m=c.token,st("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?s(c.token):Promise.resolve()};this.o=c=>{e.enqueueRetryable(()=>n(c))};const a=c=>{st("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=c,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(c=>a(c)),setTimeout(()=>{if(!this.appCheck){const c=this.V.getImmediate({optional:!0});c?a(c):st("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new wi(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(s=>s?(Kt(typeof s.token=="string",44558,{tokenResult:s}),this.m=s.token,new wi(s.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ra(l){const e=typeof self<"u"&&(self.crypto||self.msCrypto),s=new Uint8Array(l);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(s);else for(let n=0;n<l;n++)s[n]=Math.floor(256*Math.random());return s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aa{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=62*Math.floor(4.129032258064516);let n="";for(;n.length<20;){const a=ra(40);for(let c=0;c<a.length;++c)n.length<20&&a[c]<s&&(n+=e.charAt(a[c]%62))}return n}}function vt(l,e){return l<e?-1:l>e?1:0}function oa(l,e){const s=Math.min(l.length,e.length);for(let n=0;n<s;n++){const a=l.charAt(n),c=e.charAt(n);if(a!==c)return Qe(a)===Qe(c)?vt(a,c):Qe(a)?1:-1}return vt(l.length,e.length)}const la=55296,ca=57343;function Qe(l){const e=l.charCodeAt(0);return e>=la&&e<=ca}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ti="__name__";class rt{constructor(e,s,n){s===void 0?s=0:s>e.length&&ye(637,{offset:s,range:e.length}),n===void 0?n=e.length-s:n>e.length-s&&ye(1746,{length:n,range:e.length-s}),this.segments=e,this.offset=s,this.len=n}get length(){return this.len}isEqual(e){return rt.comparator(this,e)===0}child(e){const s=this.segments.slice(this.offset,this.limit());return e instanceof rt?e.forEach(n=>{s.push(n)}):s.push(e),this.construct(s)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let s=0;s<this.length;s++)if(this.get(s)!==e.get(s))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let s=0;s<this.length;s++)if(this.get(s)!==e.get(s))return!1;return!0}forEach(e){for(let s=this.offset,n=this.limit();s<n;s++)e(this.segments[s])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,s){const n=Math.min(e.length,s.length);for(let a=0;a<n;a++){const c=rt.compareSegments(e.get(a),s.get(a));if(c!==0)return c}return vt(e.length,s.length)}static compareSegments(e,s){const n=rt.isNumericId(e),a=rt.isNumericId(s);return n&&!a?-1:!n&&a?1:n&&a?rt.extractNumericId(e).compare(rt.extractNumericId(s)):oa(e,s)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return as.fromString(e.substring(4,e.length-2))}}class et extends rt{construct(e,s,n){return new et(e,s,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const s=[];for(const n of e){if(n.indexOf("//")>=0)throw new F(H.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);s.push(...n.split("/").filter(a=>a.length>0))}return new et(s)}static emptyPath(){return new et([])}}const da=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class wt extends rt{construct(e,s,n){return new wt(e,s,n)}static isValidIdentifier(e){return da.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),wt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===Ti}static keyField(){return new wt([Ti])}static fromServerFormat(e){const s=[];let n="",a=0;const c=()=>{if(n.length===0)throw new F(H.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);s.push(n),n=""};let o=!1;for(;a<e.length;){const u=e[a];if(u==="\\"){if(a+1===e.length)throw new F(H.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const v=e[a+1];if(v!=="\\"&&v!=="."&&v!=="`")throw new F(H.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=v,a+=2}else u==="`"?(o=!o,a++):u!=="."||o?(n+=u,a++):(c(),a++)}if(c(),o)throw new F(H.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new wt(s)}static emptyPath(){return new wt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tt{constructor(e){this.path=e}static fromPath(e){return new Tt(et.fromString(e))}static fromName(e){return new Tt(et.fromString(e).popFirst(5))}static empty(){return new Tt(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,s){return et.comparator(e.path,s.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Tt(new et(e.slice()))}}function ha(l,e,s,n){if(e===!0&&n===!0)throw new F(H.INVALID_ARGUMENT,`${l} and ${s} cannot be used together.`)}function ua(l){return typeof l=="object"&&l!==null&&(Object.getPrototypeOf(l)===Object.prototype||Object.getPrototypeOf(l)===null)}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(l,e){const s={typeString:l};return e&&(s.value=e),s}function te(l,e){if(!ua(l))throw new F(H.INVALID_ARGUMENT,"JSON must be an object");let s;for(const n in e)if(e[n]){const a=e[n].typeString,c="value"in e[n]?{value:e[n].value}:void 0;if(!(n in l)){s=`JSON missing required field: '${n}'`;break}const o=l[n];if(a&&typeof o!==a){s=`JSON field '${n}' must be a ${a}.`;break}if(c!==void 0&&o!==c.value){s=`Expected '${n}' field to equal '${c.value}'`;break}}if(s)throw new F(H.INVALID_ARGUMENT,s);return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=-62135596800,$i=1e6;class at{static now(){return at.fromMillis(Date.now())}static fromDate(e){return at.fromMillis(e.getTime())}static fromMillis(e){const s=Math.floor(e/1e3),n=Math.floor((e-1e3*s)*$i);return new at(s,n)}constructor(e,s){if(this.seconds=e,this.nanoseconds=s,s<0)throw new F(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+s);if(s>=1e9)throw new F(H.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+s);if(e<Ei)throw new F(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new F(H.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/$i}_compareTo(e){return this.seconds===e.seconds?vt(this.nanoseconds,e.nanoseconds):vt(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:at._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(te(e,at._jsonSchema))return new at(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Ei;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}at._jsonSchemaVersion="firestore/timestamp/1.0",at._jsonSchema={type:z("string",at._jsonSchemaVersion),seconds:z("number"),nanoseconds:z("number")};function ma(l){return l.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.binaryString=e}static fromBase64String(e){const s=function(a){try{return atob(a)}catch(c){throw typeof DOMException<"u"&&c instanceof DOMException?new pa("Invalid base64 string: "+c):c}}(e);return new At(s)}static fromUint8Array(e){const s=function(a){let c="";for(let o=0;o<a.length;++o)c+=String.fromCharCode(a[o]);return c}(e);return new At(s)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(s){return btoa(s)}(this.binaryString)}toUint8Array(){return function(s){const n=new Uint8Array(s.length);for(let a=0;a<s.length;a++)n[a]=s.charCodeAt(a);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return vt(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}At.EMPTY_BYTE_STRING=new At("");const Ai="(default)";class xe{constructor(e,s){this.projectId=e,this.database=s||Ai}static empty(){return new xe("","")}get isDefaultDatabase(){return this.database===Ai}isEqual(e){return e instanceof xe&&e.projectId===this.projectId&&e.database===this.database}}function fa(l,e){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new F(H.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new xe(l.options.projectId,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ga{constructor(e,s=null,n=[],a=[],c=null,o="F",u=null,v=null){this.path=e,this.collectionGroup=s,this.explicitOrderBy=n,this.filters=a,this.limit=c,this.limitType=o,this.startAt=u,this.endAt=v,this.Ie=null,this.Ee=null,this.Re=null,this.startAt,this.endAt}}function va(l){return new ga(l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ii,O;(O=Ii||(Ii={}))[O.OK=0]="OK",O[O.CANCELLED=1]="CANCELLED",O[O.UNKNOWN=2]="UNKNOWN",O[O.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",O[O.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",O[O.NOT_FOUND=5]="NOT_FOUND",O[O.ALREADY_EXISTS=6]="ALREADY_EXISTS",O[O.PERMISSION_DENIED=7]="PERMISSION_DENIED",O[O.UNAUTHENTICATED=16]="UNAUTHENTICATED",O[O.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",O[O.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",O[O.ABORTED=10]="ABORTED",O[O.OUT_OF_RANGE=11]="OUT_OF_RANGE",O[O.UNIMPLEMENTED=12]="UNIMPLEMENTED",O[O.INTERNAL=13]="INTERNAL",O[O.UNAVAILABLE=14]="UNAVAILABLE",O[O.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new as([4294967295,4294967295],0);/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ba=41943040;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ya=1048576;function Ze(){return typeof document<"u"?document:null}class xa{constructor(e,s,n=1e3,a=1.5,c=6e4){this.Ci=e,this.timerId=s,this.R_=n,this.A_=a,this.V_=c,this.d_=0,this.m_=null,this.f_=Date.now(),this.reset()}reset(){this.d_=0}g_(){this.d_=this.V_}p_(e){this.cancel();const s=Math.floor(this.d_+this.y_()),n=Math.max(0,Date.now()-this.f_),a=Math.max(0,s-n);a>0&&st("ExponentialBackoff",`Backing off for ${a} ms (base delay: ${this.d_} ms, delay with jitter: ${s} ms, last attempt: ${n} ms ago)`),this.m_=this.Ci.enqueueAfterDelay(this.timerId,a,()=>(this.f_=Date.now(),e())),this.d_*=this.A_,this.d_<this.R_&&(this.d_=this.R_),this.d_>this.V_&&(this.d_=this.V_)}w_(){this.m_!==null&&(this.m_.skipDelay(),this.m_=null)}cancel(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}y_(){return(Math.random()-.5)*this.d_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class os{constructor(e,s,n,a,c){this.asyncQueue=e,this.timerId=s,this.targetTimeMs=n,this.op=a,this.removalCallback=c,this.deferred=new Yt,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,s,n,a,c){const o=Date.now()+n,u=new os(e,s,o,a,c);return u.start(n),u}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new F(H.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}var Mi,_i;(_i=Mi||(Mi={})).Ba="default",_i.Cache="cache";/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sa(l){const e={};return l.timeoutSeconds!==void 0&&(e.timeoutSeconds=l.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wa="ComponentProvider",Pi=new Map;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta="firestore.googleapis.com",Ci=!0;class Li{constructor(e){if(e.host===void 0){if(e.ssl!==void 0)throw new F(H.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=Ta,this.ssl=Ci}else this.host=e.host,this.ssl=e.ssl??Ci;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=ba;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<ya)throw new F(H.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}ha("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=Sa(e.experimentalLongPollingOptions??{}),function(n){if(n.timeoutSeconds!==void 0){if(isNaN(n.timeoutSeconds))throw new F(H.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (must not be NaN)`);if(n.timeoutSeconds<5)throw new F(H.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (minimum allowed value is 5)`);if(n.timeoutSeconds>30)throw new F(H.INVALID_ARGUMENT,`invalid long polling timeout: ${n.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(n,a){return n.timeoutSeconds===a.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class Ea{constructor(e,s,n,a){this._authCredentials=e,this._appCheckCredentials=s,this._databaseId=n,this._app=a,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Li({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new F(H.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new F(H.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Li(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ta;switch(n.type){case"firstParty":return new ia(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new F(H.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(s){const n=Pi.get(s);n&&(st(wa,"Removing Datastore"),Pi.delete(s),n.terminate())}(this),Promise.resolve()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ls{constructor(e,s,n){this.converter=s,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ls(this.firestore,e,this._query)}}class ot{constructor(e,s,n){this.converter=s,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new cs(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new ot(this.firestore,e,this._key)}toJSON(){return{type:ot._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,s,n){if(te(s,ot._jsonSchema))return new ot(e,n||null,new Tt(et.fromString(s.referencePath)))}}ot._jsonSchemaVersion="firestore/documentReference/1.0",ot._jsonSchema={type:z("string",ot._jsonSchemaVersion),referencePath:z("string")};class cs extends ls{constructor(e,s,n){super(e,s,va(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new ot(this.firestore,null,new Tt(e))}withConverter(e){return new cs(this.firestore,e,this._path)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Di="AsyncQueue";class Ni{constructor(e=Promise.resolve()){this.rc=[],this.sc=!1,this.oc=[],this._c=null,this.ac=!1,this.uc=!1,this.cc=[],this.M_=new xa(this,"async_queue_retry"),this.lc=()=>{const n=Ze();n&&st(Di,"Visibility state changed to "+n.visibilityState),this.M_.w_()},this.hc=e;const s=Ze();s&&typeof s.addEventListener=="function"&&s.addEventListener("visibilitychange",this.lc)}get isShuttingDown(){return this.sc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pc(),this.Tc(e)}enterRestrictedMode(e){if(!this.sc){this.sc=!0,this.uc=e||!1;const s=Ze();s&&typeof s.removeEventListener=="function"&&s.removeEventListener("visibilitychange",this.lc)}}enqueue(e){if(this.Pc(),this.sc)return new Promise(()=>{});const s=new Yt;return this.Tc(()=>this.sc&&this.uc?Promise.resolve():(e().then(s.resolve,s.reject),s.promise)).then(()=>s.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.rc.push(e),this.Ic()))}async Ic(){if(this.rc.length!==0){try{await this.rc[0](),this.rc.shift(),this.M_.reset()}catch(e){if(!ma(e))throw e;st(Di,"Operation failed with retryable error: "+e)}this.rc.length>0&&this.M_.p_(()=>this.Ic())}}Tc(e){const s=this.hc.then(()=>(this.ac=!0,e().catch(n=>{throw this._c=n,this.ac=!1,zi("INTERNAL UNHANDLED ERROR: ",ki(n)),n}).then(n=>(this.ac=!1,n))));return this.hc=s,s}enqueueAfterDelay(e,s,n){this.Pc(),this.cc.indexOf(e)>-1&&(s=0);const a=os.createAndSchedule(this,e,s,n,c=>this.Ec(c));return this.oc.push(a),a}Pc(){this._c&&ye(47125,{Rc:ki(this._c)})}verifyOperationInProgress(){}async Ac(){let e;do e=this.hc,await e;while(e!==this.hc)}Vc(e){for(const s of this.oc)if(s.timerId===e)return!0;return!1}dc(e){return this.Ac().then(()=>{this.oc.sort((s,n)=>s.targetTimeMs-n.targetTimeMs);for(const s of this.oc)if(s.skipDelay(),e!=="all"&&s.timerId===e)break;return this.Ac()})}mc(e){this.cc.push(e)}Ec(e){const s=this.oc.indexOf(e);this.oc.splice(s,1)}}function ki(l){let e=l.message||"";return l.stack&&(e=l.stack.includes(l.message)?l.stack:l.message+`
`+l.stack),e}class $a extends Ea{constructor(e,s,n,a){super(e,s,n,a),this.type="firestore",this._queue=new Ni,this._persistenceKey=(a==null?void 0:a.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new Ni(e),this._firestoreClient=void 0,await e}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(e){this._byteString=e}static fromBase64String(e){try{return new lt(At.fromBase64String(e))}catch(s){throw new F(H.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+s)}}static fromUint8Array(e){return new lt(At.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:lt._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(te(e,lt._jsonSchema))return lt.fromBase64String(e.bytes)}}lt._jsonSchemaVersion="firestore/bytes/1.0",lt._jsonSchema={type:z("string",lt._jsonSchemaVersion),bytes:z("string")};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ji{constructor(...e){for(let s=0;s<e.length;++s)if(e[s].length===0)throw new F(H.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new wt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Et{constructor(e,s){if(!isFinite(e)||e<-90||e>90)throw new F(H.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(s)||s<-180||s>180)throw new F(H.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+s);this._lat=e,this._long=s}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return vt(this._lat,e._lat)||vt(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Et._jsonSchemaVersion}}static fromJSON(e){if(te(e,Et._jsonSchema))return new Et(e.latitude,e.longitude)}}Et._jsonSchemaVersion="firestore/geoPoint/1.0",Et._jsonSchema={type:z("string",Et._jsonSchemaVersion),latitude:z("number"),longitude:z("number")};/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $t{constructor(e){this._values=(e||[]).map(s=>s)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(n,a){if(n.length!==a.length)return!1;for(let c=0;c<n.length;++c)if(n[c]!==a[c])return!1;return!0}(this._values,e._values)}toJSON(){return{type:$t._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(te(e,$t._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(s=>typeof s=="number"))return new $t(e.vectorValues);throw new F(H.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}$t._jsonSchemaVersion="firestore/vectorValue/1.0",$t._jsonSchema={type:z("string",$t._jsonSchemaVersion),vectorValues:z("object")};function Ki(l,e,s){if((e=Un(e))instanceof Ji)return e._internalPath;if(typeof e=="string")return Ia(l,e);throw is("Field path arguments must be of type string or ",l)}const Aa=new RegExp("[~\\*/\\[\\]]");function Ia(l,e,s){if(e.search(Aa)>=0)throw is(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,l);try{return new Ji(...e.split("."))._internalPath}catch{throw is(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,l)}}function is(l,e,s,n,a){let c=`Function ${e}() called with invalid data`;c+=". ";let o="";return new F(H.INVALID_ARGUMENT,c+l+o)}const Ri="@firebase/firestore",Bi="4.14.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(e,s,n,a,c){this._firestore=e,this._userDataWriter=s,this._key=n,this._document=a,this._converter=c}get id(){return this._key.path.lastSegment()}get ref(){return new ot(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Ma(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}_fieldsProto(){var e;return((e=this._document)==null?void 0:e.data.clone().value.mapValue.fields)??void 0}get(e){if(this._document){const s=this._document.data.field(Ki("DocumentSnapshot.get",e));if(s!==null)return this._userDataWriter.convertValue(s)}}}class Ma extends Yi{data(){return super.data()}}class pe{constructor(e,s){this.hasPendingWrites=e,this.fromCache=s}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Lt extends Yi{constructor(e,s,n,a,c,o){super(e,s,n,a,o),this._firestore=e,this._firestoreImpl=e,this.metadata=c}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const s=new fe(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(s,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,s={}){if(this._document){const n=this._document.data.field(Ki("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n,s.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new F(H.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,s={};return s.type=Lt._jsonSchemaVersion,s.bundle="",s.bundleSource="DocumentSnapshot",s.bundleName=this._key.toString(),!e||!e.isValidDocument()||!e.isFoundDocument()?s:(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),s.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),s)}}Lt._jsonSchemaVersion="firestore/documentSnapshot/1.0",Lt._jsonSchema={type:z("string",Lt._jsonSchemaVersion),bundleSource:z("string","DocumentSnapshot"),bundleName:z("string"),bundle:z("string")};class fe extends Lt{data(e={}){return super.data(e)}}class Qt{constructor(e,s,n,a){this._firestore=e,this._userDataWriter=s,this._snapshot=a,this.metadata=new pe(a.hasPendingWrites,a.fromCache),this.query=n}get docs(){const e=[];return this.forEach(s=>e.push(s)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,s){this._snapshot.docs.forEach(n=>{e.call(s,new fe(this._firestore,this._userDataWriter,n.key,n,new pe(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const s=!!e.includeMetadataChanges;if(s&&this._snapshot.excludesMetadataChanges)throw new F(H.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===s||(this._cachedChanges=function(a,c){if(a._snapshot.oldDocs.isEmpty()){let o=0;return a._snapshot.docChanges.map(u=>{const v=new fe(a._firestore,a._userDataWriter,u.doc.key,u.doc,new pe(a._snapshot.mutatedKeys.has(u.doc.key),a._snapshot.fromCache),a.query.converter);return u.doc,{type:"added",doc:v,oldIndex:-1,newIndex:o++}})}{let o=a._snapshot.oldDocs;return a._snapshot.docChanges.filter(u=>c||u.type!==3).map(u=>{const v=new fe(a._firestore,a._userDataWriter,u.doc.key,u.doc,new pe(a._snapshot.mutatedKeys.has(u.doc.key),a._snapshot.fromCache),a.query.converter);let x=-1,$=-1;return u.type!==0&&(x=o.indexOf(u.doc.key),o=o.delete(u.doc.key)),u.type!==1&&(o=o.add(u.doc),$=o.indexOf(u.doc.key)),{type:_a(u.type),doc:v,oldIndex:x,newIndex:$}})}}(this,s),this._cachedChangesIncludeMetadataChanges=s),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new F(H.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Qt._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=aa.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const s=[],n=[],a=[];return this.docs.forEach(c=>{c._document!==null&&(s.push(c._document),n.push(this._userDataWriter.convertObjectMap(c._document.data.value.mapValue.fields,"previous")),a.push(c.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function _a(l){switch(l){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return ye(61501,{type:l})}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt._jsonSchemaVersion="firestore/querySnapshot/1.0",Qt._jsonSchema={type:z("string",Qt._jsonSchemaVersion),bundleSource:z("string","QuerySnapshot"),bundleName:z("string"),bundle:z("string")};(function(e,s=!0){Qr(jr),ve(new ge("firestore",(n,{instanceIdentifier:a,options:c})=>{const o=n.getProvider("app").getImmediate(),u=new $a(new ea(n.getProvider("auth-internal")),new na(o,n.getProvider("app-check-internal")),fa(o,a),o);return c={useFetchStreams:s,...c},u._setSettings(c),u},"PUBLIC").setMultipleInstances(!0)),Ct(Ri,Bi,e),Ct(Ri,Bi,"esm2020")})();console.warn("⚠️ Firebase is not configured yet. Switched to offline LocalStorage mode. Open 'js/firebase-config.js' to add your keys!");class Pa{constructor(){this.players=[],this.teams=[],this.matches=[],this.scoreConfig={},this.listeners=[],this.init()}init(){const e=localStorage.getItem("badminton_players"),s=localStorage.getItem("badminton_teams"),n=localStorage.getItem("badminton_matches"),a=localStorage.getItem("badminton_scoreConfig");this.players=e?JSON.parse(e):[...ci],this.teams=s?JSON.parse(s):[...di],this.matches=n?JSON.parse(n):[...hi];const c={"Men's Doubles":{"Group Stage":{targetPoints:15,maxPoints:21,setsToWin:2},"Semi-finals":{targetPoints:21,maxPoints:30,setsToWin:2},"Grand Final":{targetPoints:21,maxPoints:30,setsToWin:2},"Bronze Match":{targetPoints:21,maxPoints:30,setsToWin:2}},"Mixed's Doubles":{"Group Stage":{targetPoints:15,maxPoints:21,setsToWin:2},"Semi-finals":{targetPoints:21,maxPoints:30,setsToWin:2},"Grand Final":{targetPoints:21,maxPoints:30,setsToWin:2},"Bronze Match":{targetPoints:21,maxPoints:30,setsToWin:2}}};let o=null;if(a)try{o=JSON.parse(a)}catch{o=null}o?o["Group Stage"]&&!o["Men's Doubles"]?this.scoreConfig={"Men's Doubles":JSON.parse(JSON.stringify(o)),"Mixed's Doubles":JSON.parse(JSON.stringify(o))}:this.scoreConfig=o:this.scoreConfig=c,this.propagateKnockoutTeams(),this.saveToStorageLocal()}saveToStorageLocal(){localStorage.setItem("badminton_players",JSON.stringify(this.players)),localStorage.setItem("badminton_teams",JSON.stringify(this.teams)),localStorage.setItem("badminton_matches",JSON.stringify(this.matches)),localStorage.setItem("badminton_scoreConfig",JSON.stringify(this.scoreConfig))}saveToStorage(){this.saveToStorageLocal(),this.saveToFirestore()}saveToFirestore(){}resetToDefault(){localStorage.removeItem("badminton_players"),localStorage.removeItem("badminton_teams"),localStorage.removeItem("badminton_matches"),localStorage.removeItem("badminton_scoreConfig"),this.players=[...ci],this.teams=[...di],this.matches=hi.map(e=>({...e,status:"Scheduled",score1:"",score2:"",sets:[],winner:""})),this.scoreConfig={"Men's Doubles":{"Group Stage":{targetPoints:15,maxPoints:21,setsToWin:2},"Semi-finals":{targetPoints:21,maxPoints:30,setsToWin:2},"Grand Final":{targetPoints:21,maxPoints:30,setsToWin:2},"Bronze Match":{targetPoints:21,maxPoints:30,setsToWin:2}},"Mixed's Doubles":{"Group Stage":{targetPoints:15,maxPoints:21,setsToWin:2},"Semi-finals":{targetPoints:21,maxPoints:30,setsToWin:2},"Grand Final":{targetPoints:21,maxPoints:30,setsToWin:2},"Bronze Match":{targetPoints:21,maxPoints:30,setsToWin:2}}},this.propagateKnockoutTeams(),this.saveToStorage(),this.notifyListeners()}getScoreConfig(e,s){let n=e,a=s;return s||(a=e,n="Men's Doubles"),this.scoreConfig[n]&&this.scoreConfig[n][a]?this.scoreConfig[n][a]:this.scoreConfig[a]?this.scoreConfig[a]:{targetPoints:21,maxPoints:30,setsToWin:2}}updateScoreConfig(e,s,n){this.scoreConfig[e]||(this.scoreConfig[e]={}),this.scoreConfig[e][s]={targetPoints:Number(n.targetPoints),maxPoints:Number(n.maxPoints),setsToWin:Number(n.setsToWin)},this.saveToStorage(),this.notifyListeners()}addListener(e){this.listeners.push(e)}notifyListeners(){this.listeners.forEach(e=>e(this))}updateMatchScore(e,s,n,a,c){const o=this.matches.find(u=>u.id===e);return o?(o.sets=s,o.score1=n,o.score2=a,o.status=c,c==="Completed"?o.winner=n>a?o.team1:o.team2:o.winner="",this.propagateKnockoutTeams(),this.saveToStorage(),this.notifyListeners(),!0):!1}calculateStandings(e){const s=this.teams.filter(o=>o.category===e),n=this.matches.filter(o=>o.category===e&&o.stage==="Group Stage"),a={};s.forEach(o=>{a[o.name]={name:o.name,teamId:o.id,player1:o.player1,player2:o.player2,played:0,won:0,lost:0,points:0,setsWon:0,setsLost:0,netSets:0,pointsWon:0,pointsLost:0,netPoints:0}}),n.forEach(o=>{if(o.status!=="Completed")return;const u=o.team1,v=o.team2;if(!a[u]||!a[v])return;a[u].played+=1,a[v].played+=1;const x=Number(o.score1)||0,$=Number(o.score2)||0;a[u].setsWon+=x,a[u].setsLost+=$,a[v].setsWon+=$,a[v].setsLost+=x,x>$?(a[u].won+=1,a[u].points+=1,a[v].lost+=1):(a[v].won+=1,a[v].points+=1,a[u].lost+=1),o.sets.forEach(w=>{const A=Number(w.t1)||0,M=Number(w.t2)||0;a[u].pointsWon+=A,a[u].pointsLost+=M,a[v].pointsWon+=M,a[v].pointsLost+=A})}),Object.values(a).forEach(o=>{o.netSets=o.setsWon-o.setsLost,o.netPoints=o.pointsWon-o.pointsLost});const c=Object.values(a);return c.sort((o,u)=>{if(u.points!==o.points)return u.points-o.points;if(u.netSets!==o.netSets)return u.netSets-o.netSets;if(c.filter(x=>x.points===o.points&&x.netSets===o.netSets).length===2){const x=n.find($=>$.status==="Completed"&&($.team1===o.name&&$.team2===u.name||$.team1===u.name&&$.team2===o.name));if(x){if(x.winner===o.name)return-1;if(x.winner===u.name)return 1}}return u.netPoints!==o.netPoints?u.netPoints-o.netPoints:o.name.localeCompare(u.name)}),c}isGroupStageComplete(e){const s=this.matches.filter(n=>n.category===e&&n.stage==="Group Stage");return s.length>0&&s.every(n=>n.status==="Completed")}propagateKnockoutTeams(){["Men's Doubles","Mixed's Doubles"].forEach(s=>{const n=this.isGroupStageComplete(s),a=this.calculateStandings(s),c=n?a[0].name:`1st Place ${s==="Men's Doubles"?"MD":"XD"}`,o=n?a[1].name:`2nd Place ${s==="Men's Doubles"?"MD":"XD"}`,u=n?a[2].name:`3rd Place ${s==="Men's Doubles"?"MD":"XD"}`,v=n?a[3].name:`4th Place ${s==="Men's Doubles"?"MD":"XD"}`,x=s==="Men's Doubles"?"MD":"XD",$=`SF1-${x}`,w=`SF2-${x}`,A=`F-${x}`,M=`B-${x}`;let _=this.matches.find(h=>h.id===$),E=this.matches.find(h=>h.id===w),I=this.matches.find(h=>h.id===A),L=this.matches.find(h=>h.id===M);const k="4:30 - 5:10",C=s==="Men's Doubles"?"5:15 - 5:55":"6:00 - 6:40";_?(_.status!=="Completed"||_.team1&&_.team1.includes("Place")||_.team2&&_.team2.includes("Place"))&&(_.team1=c,_.team2=v):(_={id:$,category:s,stage:"Semi-finals",pitch:s==="Men's Doubles"?"Pitch 15":"Pitch 20",time:k,team1:c,team2:v,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(_)),E?(E.status!=="Completed"||E.team1&&E.team1.includes("Place")||E.team2&&E.team2.includes("Place"))&&(E.team1=o,E.team2=u):(E={id:w,category:s,stage:"Semi-finals",pitch:s==="Men's Doubles"?"Pitch 16":"Pitch 21",time:k,team1:o,team2:u,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(E));const N=_.status==="Completed"?_.winner:`Winner SF1 (${x})`,R=_.status==="Completed"?_.winner===_.team1?_.team2:_.team1:`Loser SF1 (${x})`,D=E.status==="Completed"?E.winner:`Winner SF2 (${x})`,f=E.status==="Completed"?E.winner===E.team1?E.team2:E.team1:`Loser SF2 (${x})`;L?(L.status!=="Completed"||L.team1&&L.team1.includes("Loser")||L.team2&&L.team2.includes("Loser"))&&(L.team1=R,L.team2=f):(L={id:M,category:s,stage:"Bronze Match",pitch:s==="Men's Doubles"?"Pitch 15":"Pitch 20",time:C,team1:R,team2:f,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(L)),I?(I.status!=="Completed"||I.team1&&I.team1.includes("Winner")||I.team2&&I.team2.includes("Winner"))&&(I.team1=N,I.team2=D):(I={id:A,category:s,stage:"Grand Final",pitch:s==="Men's Doubles"?"Pitch 16":"Pitch 21",time:C,team1:N,team2:D,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(I))})}}class Ca{constructor(e,s,n,a){if(this.state=e,this.sync=s,this.matchId=n,this.onFinish=a,this.lang="en",this.match=this.state.matches.find(o=>o.id===n),!this.match)throw new Error(`Match not found: ${n}`);const c=this.state.getScoreConfig(this.match.category,this.match.stage);this.targetPoints=c.targetPoints,this.maxPoints=c.maxPoints,this.setsToWin=c.setsToWin,this.team1Obj=this.state.teams.find(o=>o.name===this.match.team1),this.team2Obj=this.state.teams.find(o=>o.name===this.match.team2),this.team1Players=this.team1Obj?[this.team1Obj.player1,this.team1Obj.player2]:["Team A Player 1","Team A Player 2"],this.team2Players=this.team2Obj?[this.team2Obj.player1,this.team2Obj.player2]:["Team B Player 1","Team B Player 2"],this.score1=0,this.score2=0,this.sets=[],this.match.sets&&this.match.sets.length>0&&this.match.status==="Live"&&(this.sets=[...this.match.sets],this.score1=this.match.score1||0,this.score2=this.match.score2||0),this.currentSet=this.sets.length+1,this.servingTeam="A",this.history=[],this.isCourtSwapped=!1,this.set3SwapHappened=!1,this.team1Right=this.team1Players[0],this.team1Left=this.team1Players[1],this.team2Right=this.team2Players[0],this.team2Left=this.team2Players[1],this.init()}init(){this.createOverlayContainer(),this.render(),this.sync.broadcast("LIVE_MATCH_START",{matchId:this.matchId,matchState:this.serializeState()})}createOverlayContainer(){if(document.getElementById("umpire-overlay-container"))return;const e=document.createElement("div");e.id="umpire-overlay-container",e.className="umpire-overlay-backdrop",document.body.appendChild(e)}serializeState(){return{sets:[...this.sets,{t1:this.score1,t2:this.score2}],score1:this.score1,score2:this.score2,currentSet:this.currentSet,servingTeam:this.servingTeam,isEven:(this.servingTeam==="A"?this.score1:this.score2)%2===0,serverName:this.getServerName(),partnerName:this.getServerPartnerName(),receiverName:this.getReceiverName(),receiverPartnerName:this.getReceiverPartnerName(),isCourtSwapped:this.isCourtSwapped}}broadcastUpdate(){const e=this.serializeState();e.matchId=this.matchId,this.sync.broadcast("LIVE_SCORE_UPDATE",e)}getServerName(){const e=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?e?this.team1Right:this.team1Left:e?this.team2Right:this.team2Left}getServerPartnerName(){const e=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?e?this.team1Left:this.team1Right:e?this.team2Left:this.team2Right}getReceiverName(){const e=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?e?this.team2Right:this.team2Left:e?this.team1Right:this.team1Left}getReceiverPartnerName(){const e=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?e?this.team2Left:this.team2Right:e?this.team1Left:this.team1Right}saveToHistory(){this.history.push({score1:this.score1,score2:this.score2,sets:JSON.parse(JSON.stringify(this.sets)),currentSet:this.currentSet,servingTeam:this.servingTeam,team1Right:this.team1Right,team1Left:this.team1Left,team2Right:this.team2Right,team2Left:this.team2Left})}undo(){if(this.history.length===0)return;const e=this.history.pop();this.score1=e.score1,this.score2=e.score2,this.sets=e.sets,this.currentSet=e.currentSet,this.servingTeam=e.servingTeam,this.team1Right=e.team1Right,this.team1Left=e.team1Left,this.team2Right=e.team2Right,this.team2Left=e.team2Left,this.render(),this.broadcastUpdate()}addPoint(e){if(this.saveToHistory(),e==="A"){if(this.servingTeam==="A"){const n=this.team1Right;this.team1Right=this.team1Left,this.team1Left=n}this.score1++,this.servingTeam="A"}else{if(this.servingTeam==="B"){const n=this.team2Right;this.team2Right=this.team2Left,this.team2Left=n}this.score2++,this.servingTeam="B"}const s=this.setsToWin*2-1;if(this.currentSet===s&&!this.set3SwapHappened){const n=Math.ceil(this.targetPoints/2);(this.score1===n||this.score2===n)&&(this.set3SwapHappened=!0,this.showSwapNotice(`⚡ Score reached ${n}! Both teams must swap sides.`),this.isCourtSwapped=!this.isCourtSwapped)}this.checkSetWinner(),this.render(),this.triggerServeAnimation(),this.broadcastUpdate()}triggerServeAnimation(){const e=document.querySelector(".umpire-court-svg .svg-shuttle");e&&(e.setAttribute("dur","0.7s"),e.innerHTML=`
        <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
          <mpath href="#umpire-shuttle-path" />
        </animateMotion>
      `)}checkSetWinner(){const e=this.score1,s=this.score2,n=Math.max(e,s),a=Math.min(e,s),c=n-a;let o=!1;if(n>=this.targetPoints&&(c>=2||n===this.maxPoints)&&(o=!0),o){this.currentSet-1,this.sets.push({t1:e,t2:s});let u=0,v=0;if(this.sets.forEach(x=>{x.t1>x.t2?u++:v++}),u===this.setsToWin||v===this.setsToWin)this.submitMatch(u,v);else{const x=e>s?this.match.team1:this.match.team2;this.showSwapNotice(`Set ${this.currentSet} completed! ${x} won this set. Prepare for Set ${this.currentSet+1}. Both teams must swap sides.`),this.score1=0,this.score2=0,this.currentSet++,this.servingTeam=e>s?"A":"B",this.isCourtSwapped=!this.isCourtSwapped}}}submitMatch(e,s){const n=e>s?this.match.team1:this.match.team2;this.state.updateMatchScore(this.matchId,this.sets,e,s,"Completed"),this.sync.broadcast("LIVE_MATCH_END",{matchId:this.matchId}),this.sync.setMatchLiveStatus(this.matchId,!1),this.showMatchEndNotice(n)}close(){this.sync.broadcast("LIVE_MATCH_END",{matchId:this.matchId}),this.sync.setMatchLiveStatus(this.matchId,!1);const e=document.getElementById("umpire-overlay-container");e&&(e.classList.add("hidden"),e.innerHTML=""),this.onFinish&&this.onFinish(),window.BadmintonAppInstance&&window.BadmintonAppInstance.switchTab("dashboard")}showSwapNotice(e){const s=document.createElement("div");s.className="swap-notice-modal-backdrop",s.innerHTML=`
      <div class="swap-notice-modal-card glass-card text-center animate-scale-in">
        <div class="swap-icon-container mb-4 text-glow-volt animate-bounce" style="font-size: 3rem; filter: drop-shadow(0 0 12px rgba(132, 204, 22, 0.45));">
          🏸
        </div>
        <h3 class="text-sm font-black text-glow-volt mb-2" style="font-size: 1.2rem; letter-spacing: 0.05em;">SWAP COURTS!</h3>
        <p class="text-xs text-slate-200 mb-6 font-semibold" style="line-height: 1.5;">${e}</p>
        <button class="btn btn-sm btn-volt w-full py-2.5 font-bold uppercase tracking-wider" id="swap-notice-btn-ok">
          Got It & Continue
        </button>
      </div>
    `,document.body.appendChild(s),document.getElementById("swap-notice-btn-ok").onclick=()=>{s.classList.add("animate-fade-out"),setTimeout(()=>s.remove(),300)},setTimeout(()=>{document.body.contains(s)&&(s.classList.add("animate-fade-out"),setTimeout(()=>s.remove(),300))},5e3)}showMatchEndNotice(e){const s=this.match.stage||"Group Stage";let n="WIN THE MATCH!",a="MATCH COMPLETED",c=`🎉 Congratulations to **${e}** on winning this match! 🎉`,o="🏸",u="MATCH WINNER",v="#84cc16",x="rgba(132, 204, 22, 0.45)";s==="Semi-finals"?(n="CONGRATULATIONS ON WINNING!",a="QUALIFIED FOR THE FINALS",c=`⚡ Spectacular! **${e}** won the Semi-finals and officially qualified for the championship Grand Final! 🏆`,o="🏅",u="SEMI-FINALS WINNER",v="#06b6d4",x="rgba(6, 182, 212, 0.45)"):s==="Grand Final"?(n="TOURNAMENT CHAMPIONS!",a="GEAR GAMES BADMINTON 2026 CUP",c=`👑 CHAMPIONS! Huge congratulations to the ultimate champions of the Gear Games 2026 Badminton Tournament: **${e}**! A historic and well-deserved victory! 🏆🥇`,o="🏆",u="TOURNAMENT CHAMPIONS",v="#fbbf24",x="rgba(251, 191, 36, 0.5)"):s==="Bronze Match"&&(n="BRONZE MEDALISTS!",a="BRONZE MEDAL SECURED",c=`🥉 Superb! **${e}** won the Bronze Match and successfully claimed the prestigious **Bronze Medal**! 🥉`,o="🥉",u="BRONZE WINNER",v="#ea580c",x="rgba(234, 88, 12, 0.45)");const $=document.createElement("div");$.className="match-end-modal-backdrop relative",$.innerHTML=`
      <div class="match-end-modal-card glass-card text-center animate-scale-in relative overflow-hidden" style="max-width: 480px; width: 90%; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px ${x}; z-index: 2;">
        <div class="relative" style="z-index: 2;">
          <div class="trophy-icon-container mb-4 animate-bounce" style="font-size: 4.5rem; filter: drop-shadow(0 0 18px ${x}); line-height: 1;">
            ${o}
          </div>
          
          <h2 class="text-lg font-black mb-1" style="font-size: 1.5rem; color: ${v}; filter: drop-shadow(0 0 8px ${x});">${n}</h2>
          <p class="text-xs text-slate-400 mb-4 uppercase tracking-widest font-bold">${a}</p>
          
          <div class="bg-slate-950/60 rounded-xl p-4 border border-slate-900 mb-6">
            <span class="text-5xs uppercase font-extrabold text-slate-500 block mb-1.5">${u}</span>
            <span class="text-sm font-black text-white uppercase" style="font-size: 1.25rem; filter: drop-shadow(0 0 8px rgba(255,255,255,0.25));">${e}</span>
            
            <div class="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-slate-900/60">
              ${this.sets.map((w,A)=>`
                <div class="bg-slate-900/80 px-2.5 py-1 rounded text-4xs font-bold text-slate-300">
                  S${A+1}: <span class="text-volt">${w.t1}</span>-<span class="text-cyan">${w.t2}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <p class="text-xs text-slate-200 mb-6 font-semibold px-2" style="line-height: 1.6;">${c}</p>
          
          <button class="btn w-full py-3 font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2" id="match-end-btn-home" style="font-size: 0.85rem; background-color: ${v}; color: #000; box-shadow: 0 4px 14px ${x}; border: none;">
            🏠 Back to Homepage
          </button>
        </div>
      </div>
    `,document.body.appendChild($),document.getElementById("match-end-btn-home").onclick=()=>{$.classList.add("animate-fade-out"),setTimeout(()=>{$.remove(),this.close()},300)}}toggleServe(){this.saveToHistory(),this.servingTeam=this.servingTeam==="B"?"A":"B",this.render(),this.broadcastUpdate()}swapPlayers(e){if(this.saveToHistory(),e==="1"){const s=this.team1Right;this.team1Right=this.team1Left,this.team1Left=s}else{const s=this.team2Right;this.team2Right=this.team2Left,this.team2Left=s}this.render(),this.broadcastUpdate()}render(){const e=document.getElementById("umpire-overlay-container");if(!e)return;e.classList.remove("hidden"),(this.servingTeam==="A"?this.score1:this.score2)%2;let s,n,a,c;this.isCourtSwapped?(s=this.team2Right,n=this.team2Left,a=this.team1Right,c=this.team1Left):(s=this.team1Right,n=this.team1Left,a=this.team2Right,c=this.team2Left);const o=this.getServerName(),u=this.getReceiverName(),v=D=>D===o?"S":D===u?"R":"P",x=D=>D===o?"volt":D===u?"cyan":"neutral",$=D=>D===o?"text-volt":D===u?"text-cyan":"text-slate-200",w=D=>D!==o?"":`
        <g class="shuttle-badge" transform="translate(11, -11)">
          <circle cx="0" cy="0" r="8.5" fill="#090d16" stroke="#84cc16" stroke-width="1.2" />
          <text x="0" y="3.5" font-size="10" text-anchor="middle" font-family="sans-serif">🏸</text>
        </g>
      `;let A,M,_,E;o===s?(A=210,M=355):o===n?(A=90,M=355):o===a?(A=90,M=145):(A=210,M=145),u===s?(_=210,E=355):u===n?(_=90,E=355):u===a?(_=90,E=145):(_=210,E=145);const I=(D,f)=>f===355?D===210?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z":D===90?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",L=I(A,M),k=I(_,E),C=(A+_)/2+30,N=(M+E)/2-40,R=this.sets.map((D,f)=>`
      <div class="umpire-set-badge">
        <span>Set ${f+1}:</span>
        <strong>${D.t1} - ${D.t2}</strong>
      </div>
    `).join("");e.innerHTML=`
      <div class="umpire-card glass-card">
        <!-- Header -->
        <div class="umpire-header flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div class="flex items-center gap-3">
            <span class="badge bg-danger pulse-dot flex items-center gap-1.5 font-bold">
              <span class="live-dot"></span> LIVE
            </span>
            <span class="text-xs font-bold text-slate-300">${this.match.pitch} | ${this.match.stage} (${this.targetPoints} pts, Best of ${this.setsToWin*2-1})</span>
          </div>
          <h2 class="text-sm font-black m-0 text-glow-volt">UMPIRE CONTROL PANEL</h2>
          <button class="btn btn-xs btn-neutral" id="umpire-btn-close">✕ Exit</button>
        </div>

        <!-- Scores and Set layout -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          
          <!-- Umpire Controls Column (Grid Span 7) -->
          <div class="lg:col-span-7 flex flex-col gap-6">
            
            <!-- Historic sets review -->
            <div class="flex items-center gap-3 justify-center mb-1">
              ${R}
              <div class="umpire-set-badge current">
                <span>Set ${this.currentSet}:</span>
                <strong class="text-volt">${this.score1} - ${this.score2}</strong>
              </div>
            </div>

            <!-- Huge Scoreboard buttons -->
            <div class="grid grid-cols-2 gap-6">
              <!-- Team 1 Plus -->
              <div class="flex flex-col gap-2">
                <div class="text-center font-black text-2xs truncate text-volt mb-1" title="${this.match.team1}">
                  ${this.match.team1}
                </div>
                <button class="umpire-score-btn team-a-glow flex flex-col justify-center items-center" id="umpire-add-a">
                  <span class="score-num font-mono">${this.score1}</span>
                  <span class="score-label font-bold text-2xs uppercase tracking-wider">ADD POINT ❶</span>
                </button>
                <div class="flex gap-2">
                  <button class="btn btn-xs btn-neutral flex-1 py-2 font-bold text-4xs" id="umpire-swap-players-1">🔄 Court Swap</button>
                </div>
              </div>

              <!-- Team 2 Plus -->
              <div class="flex flex-col gap-2">
                <div class="text-center font-black text-2xs truncate text-cyan mb-1" title="${this.match.team2}">
                  ${this.match.team2}
                </div>
                <button class="umpire-score-btn team-b-glow flex flex-col justify-center items-center" id="umpire-add-b">
                  <span class="score-num font-mono">${this.score2}</span>
                  <span class="score-label font-bold text-2xs uppercase tracking-wider">ADD POINT ❷</span>
                </button>
                <div class="flex gap-2">
                  <button class="btn btn-xs btn-neutral flex-1 py-2 font-bold text-4xs" id="umpire-swap-players-2">🔄 Court Swap</button>
                </div>
              </div>
            </div>

            <!-- Auxiliary Panel Actions -->
            <div class="bg-slate-950/60 p-4 rounded-lg border border-slate-900 grid grid-cols-3 gap-3 items-center">
              <div>
                <button class="btn btn-sm btn-outline btn-block text-4xs py-2 font-bold" id="umpire-btn-undo" ${this.history.length===0?"disabled":""}>
                  ↩ Undo Action
                </button>
              </div>
              <div>
                <button class="btn btn-sm btn-outline btn-block text-4xs py-2 font-bold flex items-center justify-center gap-1.5" id="umpire-btn-serve">
                  🏸 Toggle Serve
                </button>
              </div>
              <div class="text-center text-4xs text-slate-400 font-semibold flex flex-col items-center justify-center border-l border-slate-800">
                <div>Current Serve:</div>
                <div class="font-extrabold text-volt mt-1 text-2xs uppercase">${this.servingTeam==="A"?"Team 1":"Team 2"}</div>
              </div>
            </div>
          </div>

          <!-- Umpire Court Simulator Column (Grid Span 5) -->
          <div class="lg:col-span-5 flex flex-col items-center gap-4 bg-slate-950/45 p-4 rounded-lg border border-slate-900/60">
            <h4 class="text-5xs font-bold uppercase tracking-widest text-slate-500 m-0">ACTUAL PLAYER POSITIONS ON COURT</h4>
            <div style="width: 100%; max-width: 250px; aspect-ratio: 3/5;">
              <svg class="court-svg umpire-court-svg" viewBox="0 0 300 500" width="100%" height="100%">
                <defs>
                  <filter id="ump-glow-volt" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="ump-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <!-- Court boundaries -->
                <rect x="20" y="40" width="260" height="420" class="court-line outer" />
                <line x1="40" y1="40" x2="40" y2="460" class="court-line singles-side" />
                <line x1="260" y1="40" x2="260" y2="460" class="court-line singles-side" />
                <line x1="150" y1="40" x2="150" y2="190" class="court-line center" />
                <line x1="150" y1="310" x2="150" y2="460" class="court-line center" />
                <line x1="20" y1="190" x2="280" y2="190" class="court-line service-short" />
                <line x1="20" y1="310" x2="280" y2="310" class="court-line service-short" />
                <line x1="20" y1="60" x2="280" y2="60" class="court-line service-long-doubles" />
                <line x1="20" y1="440" x2="280" y2="440" class="court-line service-long-doubles" />
                <line x1="10" y1="250" x2="290" y2="250" class="court-line net" />
                <circle cx="10" cy="250" r="4" class="net-post" />
                <circle cx="290" cy="250" r="4" class="net-post" />

                <!-- Court highlights -->
                <path d="${L}" class="svg-highlight-box serving" filter="url(#ump-glow-volt)" />
                <path d="${k}" class="svg-highlight-box receiving" filter="url(#ump-glow-cyan)" />

                <!-- Flight Arrow path -->
                <path id="umpire-shuttle-path" d="M ${A},${M} Q ${C},${N} ${_},${E}" class="svg-shuttle-path" />
                
                <!-- Animated Shuttlecock -->
                <circle r="5" class="svg-shuttle" filter="url(#ump-glow-cyan)">
                  <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
                    <mpath href="#umpire-shuttle-path" />
                  </animateMotion>
                </circle>

                <!-- Player Avatars Bottom (Team on same horizontal line in middle of bottom court at y=355) -->
                <!-- Bottom Left Player -->
                <g class="player-avatar ${n===o?"server":n===u?"receiver":"partner"}" transform="translate(90, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${x(n)}" />
                  <text x="0" y="4" class="avatar-text">${v(n)}</text>
                  ${w(n)}
                </g>
                <text x="90" y="383" class="svg-player-name ${$(n)} font-bold">${n.split(" ")[0]}</text>

                <!-- Bottom Right Player -->
                <g class="player-avatar ${s===o?"server":s===u?"receiver":"partner"}" transform="translate(210, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${x(s)}" />
                  <text x="0" y="4" class="avatar-text">${v(s)}</text>
                  ${w(s)}
                </g>
                <text x="210" y="383" class="svg-player-name ${$(s)} font-bold">${s.split(" ")[0]}</text>

                <!-- Player Avatars Top (Team on same horizontal line in middle of top court at y=145) -->
                <!-- Top Right Player (Screen Left x=90) -->
                <g class="player-avatar ${a===o?"server":a===u?"receiver":"partner"}" transform="translate(90, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${x(a)}" />
                  <text x="0" y="4" class="avatar-text">${v(a)}</text>
                  ${w(a)}
                </g>
                <text x="90" y="123" class="svg-player-name ${$(a)} font-bold">${a.split(" ")[0]}</text>

                <!-- Top Left Player (Screen Right x=210) -->
                <g class="player-avatar ${c===o?"server":c===u?"receiver":"partner"}" transform="translate(210, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${x(c)}" />
                  <text x="0" y="4" class="avatar-text">${v(c)}</text>
                  ${w(c)}
                </g>
                <text x="210" y="123" class="svg-player-name ${$(c)} font-bold">${c.split(" ")[0]}</text>
              </svg>
            </div>
            
            <div class="text-4xs text-slate-500 font-medium text-center max-w-[200px] leading-relaxed">
              👉 <strong>Rule Book:</strong> Serve from **Right** on Even (0,2,4) and **Left** on Odd (1,3,5). Partners swap when winning own serve.
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("umpire-btn-close").onclick=()=>{confirm("Do you want to exit the scoring room? The live status will be suspended.")&&this.close()},document.getElementById("umpire-add-a").onclick=()=>this.addPoint("A"),document.getElementById("umpire-add-b").onclick=()=>this.addPoint("B"),document.getElementById("umpire-btn-serve").onclick=()=>this.toggleServe(),document.getElementById("umpire-btn-undo").onclick=()=>this.undo(),document.getElementById("umpire-swap-players-1").onclick=()=>this.swapPlayers("1"),document.getElementById("umpire-swap-players-2").onclick=()=>this.swapPlayers("2")}}class La{constructor(e,s,n){this.state=e,this.onUpdate=s,this.sync=n,this.isAdmin=!1,this.isRef=!1,this.refPitch="",this.activeMatchId=null,this.lang="en",this.passkeys={goodmintongg2026:{role:"admin",label:"Super Admin"},ref15:{role:"ref",pitch:"Pitch 15",label:"Pitch 15 Umpire"},ref16:{role:"ref",pitch:"Pitch 16",label:"Pitch 16 Umpire"},ref20:{role:"ref",pitch:"Pitch 20",label:"Pitch 20 Umpire"},ref21:{role:"ref",pitch:"Pitch 21",label:"Pitch 21 Umpire"}},this.init()}setLanguage(e){this.lang="en"}init(){this.isAdmin=sessionStorage.getItem("badminton_isAdmin")==="true",this.isRef=sessionStorage.getItem("badminton_isRef")==="true",this.refPitch=sessionStorage.getItem("badminton_refPitch")||"",this.createModalContainer(),this.setupAdminToggleListener()}createModalContainer(){if(document.getElementById("score-modal-container"))return;const e=document.createElement("div");if(e.id="score-modal-container",e.className="modal-backdrop hidden",document.body.appendChild(e),document.getElementById("admin-modal-container"))return;const s=document.createElement("div");if(s.id="admin-modal-container",s.className="modal-backdrop hidden",document.body.appendChild(s),!document.getElementById("score-config-modal-container")){const n=document.createElement("div");n.id="score-config-modal-container",n.className="modal-backdrop hidden",document.body.appendChild(n)}}setupAdminToggleListener(){document.body.addEventListener("click",e=>{e.target.closest("#btn-toggle-admin")&&(this.isAdmin||this.isRef?this.logout():this.showAdminLogin()),e.target.closest("#btn-score-settings")&&(this.isAdmin?this.showScoreConfigModal():this.showToast("You must be a Super Admin to modify scoring settings.","info"));const a=e.target.closest(".btn-edit-match");if(a){const o=a.getAttribute("data-match-id"),u=this.state.matches.find(x=>x.id===o);if(!u)return;const v=this.checkMatchReadyState(u);if(!v.ready){this.showUnreadyAlert(v.reason);return}this.isAdmin||this.isRef&&u.pitch===this.refPitch?this.openScoreModal(o):this.showToast("You are not authorized to edit matches on this pitch!","info")}const c=e.target.closest(".btn-join-match");if(c){const o=c.getAttribute("data-match-id"),u=this.state.matches.find(x=>x.id===o);if(!u)return;const v=this.checkMatchReadyState(u);if(!v.ready){this.showUnreadyAlert(v.reason);return}this.isAdmin||this.isRef&&u.pitch===this.refPitch?this.openUmpireConsole(o):this.showToast("You are not authorized to umpire on this pitch!","info")}})}checkMatchReadyState(e){if(e.team1&&e.team1.includes("Place")||e.team2&&e.team2.includes("Place"))return{ready:!1,reason:"This match cannot be played yet! Please wait for the Group Stage to complete to decide the playing teams."};const s=e.category==="Men's Doubles"?"MD":"XD",n=e.team1&&(e.team1.includes("SF1")||e.team1.includes("Winner SF1")||e.team1.includes("Loser SF1"))||e.team2&&(e.team2.includes("SF1")||e.team2.includes("Winner SF1")||e.team2.includes("Loser SF1")),a=e.team1&&(e.team1.includes("SF2")||e.team1.includes("Winner SF2")||e.team1.includes("Loser SF2"))||e.team2&&(e.team2.includes("SF2")||e.team2.includes("Winner SF2")||e.team2.includes("Loser SF2"));if(n){const c=`SF1-${s}`,o=this.state.matches.find(u=>u.id===c);if(o&&o.status!=="Completed")return{ready:!1,reason:`This match is waiting for the result of semi-final match **${`Semi-final 1 (${e.category})`}** to complete.`}}if(a){const c=`SF2-${s}`,o=this.state.matches.find(u=>u.id===c);if(o&&o.status!=="Completed")return{ready:!1,reason:`This match is waiting for the result of semi-final match **${`Semi-final 2 (${e.category})`}** to complete.`}}return{ready:!0}}showUnreadyAlert(e){const s=document.createElement("div");s.className="swap-notice-modal-backdrop",s.innerHTML=`
      <div class="swap-notice-modal-card glass-card text-center animate-scale-in" style="max-width: 400px; width: 90%; border-color: rgba(239, 68, 68, 0.3); box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(239, 68, 68, 0.25);">
        <div class="mb-4 text-danger animate-pulse" style="font-size: 3rem;">
          ⚠️
        </div>
        <h3 class="text-sm font-black text-danger mb-2" style="font-size: 1.15rem; letter-spacing: 0.05em;">
          MATCH NOT READY!
        </h3>
        <p class="text-xs text-slate-200 mb-6 font-semibold px-2" style="line-height: 1.6;">
          ${e}
        </p>
        <button class="btn btn-sm btn-danger w-full py-2.5 font-bold uppercase tracking-wider" id="unready-alert-btn-ok">
          Got It
        </button>
      </div>
    `,document.body.appendChild(s),document.getElementById("unready-alert-btn-ok").onclick=()=>{s.classList.add("animate-fade-out"),setTimeout(()=>s.remove(),300)}}openUmpireConsole(e){this.sync&&new Ca(this.state,this.sync,e,()=>{this.onUpdate()})}logout(){this.isAdmin=!1,this.isRef=!1,this.refPitch="",sessionStorage.setItem("badminton_isAdmin","false"),sessionStorage.setItem("badminton_isRef","false"),sessionStorage.removeItem("badminton_refPitch"),sessionStorage.removeItem("badminton_authLabel"),this.onUpdate(),this.showToast("Logged out successfully!","info")}showAdminLogin(){const e=document.getElementById("admin-modal-container");if(!e)return;const s="Portal Login",n="Enter Admin or Umpire passkey:",a="Passkey",c="Login",o="Cancel";e.innerHTML=`
      <div class="modal-card glass-card">
        <h3 class="modal-title">${s}</h3>
        <p class="modal-desc">${n}</p>
        
        <div class="form-group mb-4">
          <label class="form-label">${a}</label>
          <input type="password" id="admin-passkey-input" class="form-input" placeholder="••••••••" />
          <div id="admin-login-error" class="input-error-msg hidden"></div>
        </div>
        
        <div class="flex items-center justify-end gap-2">
          <button class="btn btn-neutral" id="btn-cancel-admin">${o}</button>
          <button class="btn btn-primary" id="btn-submit-admin">${c}</button>
        </div>
      </div>
    `,e.classList.remove("hidden"),document.getElementById("admin-passkey-input").focus(),document.getElementById("btn-cancel-admin").onclick=()=>e.classList.add("hidden"),document.getElementById("btn-submit-admin").onclick=()=>this.handleAdminLogin(),document.getElementById("admin-passkey-input").onkeydown=u=>{u.key==="Enter"&&this.handleAdminLogin()}}handleAdminLogin(){const e=document.getElementById("admin-passkey-input"),s=document.getElementById("admin-login-error");if(!e||!s)return;const n=e.value,a=this.passkeys[n];if(a){a.role==="admin"?(this.isAdmin=!0,this.isRef=!1,this.refPitch="",sessionStorage.setItem("badminton_isAdmin","true"),sessionStorage.setItem("badminton_isRef","false"),sessionStorage.removeItem("badminton_refPitch"),sessionStorage.setItem("badminton_authLabel",a.label)):(this.isRef=!0,this.isAdmin=!1,this.refPitch=a.pitch,sessionStorage.setItem("badminton_isAdmin","false"),sessionStorage.setItem("badminton_isRef","true"),sessionStorage.setItem("badminton_refPitch",a.pitch),sessionStorage.setItem("badminton_authLabel",a.label)),document.getElementById("admin-modal-container").classList.add("hidden"),this.onUpdate();const c=`Login success! Role: ${a.label}.`;this.showToast(c,"success")}else s.textContent="Incorrect passkey. Please try again.",s.classList.remove("hidden"),e.classList.add("input-error"),e.focus()}openScoreModal(e){this.activeMatchId=e;const s=this.state.matches.find(C=>C.id===e);if(!s)return;const n=document.getElementById("score-modal-container");if(!n)return;const a=this.state.getScoreConfig(s.category,s.stage),c=a.targetPoints,o=a.maxPoints,u=a.setsToWin,v=u*2-1,x="Match Score Editor",$="Set",w=s.team1,A=s.team2,M="Save Score",_="Cancel",E="Clear Score";let I="";for(let C=1;C<=v;C++){const N=s.sets[C-1]||{t1:"",t2:""},R=C===1?"required":"";I+=`
        <!-- Set ${C} -->
        <div class="score-set-row grid grid-cols-5 gap-3 items-center" id="s${C}-row">
          <div class="col-span-2">
            <input type="number" min="0" max="${o}" id="s${C}-t1" class="form-input score-box text-left" placeholder="0" value="${N.t1!==void 0?N.t1:""}" ${R} />
          </div>
          <div class="text-center font-bold text-muted">${$} ${C}</div>
          <div class="col-span-2">
            <input type="number" min="0" max="${o}" id="s${C}-t2" class="form-input score-box text-right" placeholder="0" value="${N.t2!==void 0?N.t2:""}" ${R} />
          </div>
        </div>
      `}n.innerHTML=`
      <div class="modal-card score-editor glass-card">
        <div class="flex items-center justify-between mb-4">
          <h3 class="modal-title m-0">${x}</h3>
          <span class="badge bg-purple">${s.stage} (${c} pts)</span>
        </div>
        
        <div class="score-team-headers grid grid-cols-5 gap-2 mb-2 text-xs font-semibold text-muted text-center">
          <div class="col-span-2 text-left">Team 1</div>
          <div>VS</div>
          <div class="col-span-2 text-right">Team 2</div>
        </div>

        <div class="score-team-names grid grid-cols-5 gap-2 mb-4 text-sm font-bold text-center items-center">
          <div class="col-span-2 text-left text-volt">${w}</div>
          <div class="text-xs text-muted">vs</div>
          <div class="col-span-2 text-right text-cyan">${A}</div>
        </div>

        <form id="score-form" class="space-y-4">
          ${I}

          <div id="score-error-msg" class="input-error-msg hidden p-2 bg-red-950/40 rounded border border-red-500/30 text-center text-xs"></div>

          <div class="flex items-center justify-between pt-2 border-t border-slate-700/50 mt-4">
            <button type="button" class="btn btn-danger" id="btn-clear-score">${E}</button>
            <div class="flex items-center gap-2">
              <button type="button" class="btn btn-neutral" id="btn-cancel-score">${_}</button>
              <button type="submit" class="btn btn-primary">${M}</button>
            </div>
          </div>
        </form>
      </div>
    `,n.classList.remove("hidden");const L=[];for(let C=1;C<=v;C++)L.push({t1:document.getElementById(`s${C}-t1`),t2:document.getElementById(`s${C}-t2`),row:document.getElementById(`s${C}-row`)});const k=()=>{let C=0,N=0;for(let R=1;R<=v;R++){const D=L[R-1].row,f=L[R-1].t1,h=L[R-1].t2;if(R===1){f.disabled=!1,h.disabled=!1,D.classList.remove("opacity-40"),f.setAttribute("required","required"),h.setAttribute("required","required");const g=Number(f.value),y=Number(h.value),m=this.validateSetScore(g,y,c,o);m.valid&&(m.winner===1?C++:N++);continue}const p=C===u||N===u;let b=!0;for(let g=0;g<R-1;g++){const y=Number(L[g].t1.value),m=Number(L[g].t2.value);if(!this.validateSetScore(y,m,c,o).valid){b=!1;break}}if(b&&!p){D.classList.remove("opacity-40"),f.disabled=!1,h.disabled=!1,f.setAttribute("required","required"),h.setAttribute("required","required");const g=Number(f.value),y=Number(h.value),m=this.validateSetScore(g,y,c,o);m.valid&&(m.winner===1?C++:N++)}else D.classList.add("opacity-40"),f.disabled=!0,h.disabled=!0,f.value="",h.value="",f.removeAttribute("required"),h.removeAttribute("required")}};L.forEach(C=>{C.t1.addEventListener("input",k),C.t2.addEventListener("input",k)}),k(),document.getElementById("btn-cancel-score").onclick=()=>n.classList.add("hidden"),document.getElementById("btn-clear-score").onclick=()=>this.handleClearScore(e),document.getElementById("score-form").onsubmit=C=>{C.preventDefault(),this.handleSaveScore(s,a)}}validateSetScore(e,s,n,a){if(isNaN(e)||isNaN(s))return{valid:!1};if(e<0||s<0)return{valid:!1};const c=Math.max(e,s),o=Math.min(e,s),u=c-o,v=e>s?1:2;if(c<n)return{valid:!1};if(c===n&&u>=2)return{valid:!0,winner:v};if(c>n){if(u===2&&c<a)return{valid:!0,winner:v};if(c===a&&u===1)return{valid:!0,winner:v}}return{valid:!1}}handleClearScore(e){confirm("Are you sure you want to clear the score for this match?")&&(this.state.updateMatchScore(e,[],"","","Scheduled"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast("Match score cleared.","info"))}handleSaveScore(e,s){const n=s.targetPoints,a=s.maxPoints,c=s.setsToWin,o=c*2-1,u=document.getElementById("score-error-msg");u.classList.add("hidden");const v=[];let x=0,$=0;for(let w=1;w<=o;w++){const A=document.getElementById(`s${w}-t1`).value,M=document.getElementById(`s${w}-t2`).value;if(x===c||$===c){if(A!==""||M!==""){this.showInputError(u,`Set ${w} score should be empty since match has already ended.`);return}continue}if(A===""||M===""){this.showInputError(u,`Please fill in Set ${w} score.`);return}const _=Number(A),E=Number(M),I=this.validateSetScore(_,E,n,a);if(!I.valid){this.showInputError(u,`Set ${w} is invalid. Winner must reach ${n} and lead by 2, or reach cap limit of ${a} points.`);return}v.push({t1:_,t2:E}),I.winner===1?x++:$++}if(x<c&&$<c){this.showInputError(u,`No team has won the required ${c} sets to win the match.`);return}x>$?e.team1:e.team2,this.state.updateMatchScore(e.id,v,x,$,"Completed"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast("Score updated successfully!","success")}showInputError(e,s){e.textContent=s,e.classList.remove("hidden")}showToast(e,s="success"){const n=document.createElement("div");n.className=`toast-alert toast-${s}`,n.innerHTML=`
      <div class="flex items-center gap-2">
        <span class="toast-icon">${s==="success"?"✓":s==="info"?"ℹ":"⚠"}</span>
        <span>${e}</span>
      </div>
    `,document.body.appendChild(n),setTimeout(()=>n.classList.add("show"),10),setTimeout(()=>{n.classList.remove("show"),setTimeout(()=>n.remove(),300)},3e3)}showScoreConfigModal(){const e=document.getElementById("score-config-modal-container");if(!e)return;const s=["Men's Doubles","Mixed's Doubles"],n=["Group Stage","Semi-finals","Grand Final","Bronze Match"],a={};s.forEach(E=>{a[E]={},n.forEach(I=>{a[E][I]=this.state.getScoreConfig(E,I)})});const c=E=>n.map(I=>{const L=a[E][I],k=E==="Men's Doubles"?"md":"xd",C=I.replace(/\s+/g,"-").toLowerCase();return`
          <div class="score-config-stage-card glass-panel p-3.5 rounded-lg border border-slate-700/40 flex flex-col gap-3">
            <div class="text-2xs font-black text-volt border-b border-slate-800 pb-1.5 flex items-center justify-between">
              <span>${I}</span>
              <span class="badge bg-slate-850 text-slate-400 font-bold" style="font-size: 0.55rem; padding: 2px 6px;">Stage Rules</span>
            </div>
            
            <div class="grid grid-cols-3 gap-2">
              <div class="form-group">
                <label class="form-label" style="font-size: 0.55rem; letter-spacing: 0.02em;">Target Pts</label>
                <input type="number" min="5" max="50" id="${k}-${C}-target" class="form-input score-box text-center py-1.5" style="font-size: 1rem;" value="${L.targetPoints}" required />
              </div>
              <div class="form-group">
                <label class="form-label" style="font-size: 0.55rem; letter-spacing: 0.02em;">Max Pts</label>
                <input type="number" min="5" max="60" id="${k}-${C}-max" class="form-input score-box text-center py-1.5" style="font-size: 1rem;" value="${L.maxPoints}" required />
              </div>
              <div class="form-group">
                <label class="form-label" style="font-size: 0.55rem; letter-spacing: 0.02em;">Sets to Win</label>
                <select id="${k}-${C}-sets" class="form-input text-center" style="font-weight: bold; background: #0b0f19; font-size: 0.8rem; padding: 0.5rem 0.25rem; height: 42px; cursor: pointer; line-height: 1.5;">
                  <option value="1" ${L.setsToWin===1?"selected":""}>1 Set</option>
                  <option value="2" ${L.setsToWin===2?"selected":""}>Best of 3</option>
                  <option value="3" ${L.setsToWin===3?"selected":""}>Best of 5</option>
                </select>
              </div>
            </div>
          </div>
        `}).join("");e.innerHTML=`
      <div class="modal-card score-config-modal glass-card animate-scale-in" style="max-width: 680px; width: 95%;">
        <div class="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
          <div>
            <h3 class="modal-title m-0 text-glow-volt">⚙️ Match Scoring Settings</h3>
            <p class="modal-desc m-0">Configure rules for target points, max points, and sets to win per tournament stage.</p>
          </div>
          <button class="btn btn-xs btn-neutral" id="btn-close-score-config">✕</button>
        </div>

        <!-- Category Tabs -->
        <div class="flex border-b border-slate-800/80 mb-4 justify-center gap-4">
          <button type="button" class="score-config-tab active font-black pb-2 px-4 text-volt" id="tab-config-md" style="font-size: 0.85rem; border-bottom: 2px solid var(--volt); background: none; border-top: none; border-left: none; border-right: none; cursor: pointer; outline: none; transition: all 0.2s;">💎 Men's Doubles (MD)</button>
          <button type="button" class="score-config-tab font-black pb-2 px-4 text-slate-500" id="tab-config-xd" style="font-size: 0.85rem; border-bottom: 2px solid transparent; background: none; border-top: none; border-left: none; border-right: none; cursor: pointer; outline: none; transition: all 0.2s;">🔮 Mixed's Doubles (XD)</button>
        </div>

        <!-- Presets Section -->
        <div class="mb-5 bg-slate-950/45 p-3 rounded-lg border border-slate-800/80">
          <div class="flex justify-between items-center mb-2">
            <span class="text-5xs uppercase font-extrabold text-slate-500 tracking-wider">⚡ QUICK SCORE PRESETS</span>
            <span class="text-[9px] font-black text-slate-400">Applies to the active tab</span>
          </div>
          <div class="flex flex-wrap gap-2">
            <button type="button" class="btn btn-xs btn-outline" id="preset-bwf-standard">🏸 BWF Standard (21pts, Best of 3)</button>
            <button type="button" class="btn btn-xs btn-outline" id="preset-fast-15">⚡ Short Game (15pts, Best of 3)</button>
            <button type="button" class="btn btn-xs btn-outline" id="preset-single-set">🎯 Single Set (21pts, 1 Set)</button>
          </div>
        </div>

        <form id="score-config-form" class="space-y-4">
          <!-- MD Section -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[45vh] overflow-y-auto pr-1" id="config-section-md">
            ${c("Men's Doubles")}
          </div>

          <!-- XD Section -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[45vh] overflow-y-auto pr-1 hidden" id="config-section-xd">
            ${c("Mixed's Doubles")}
          </div>

          <div id="score-config-error-msg" class="input-error-msg hidden p-2 bg-red-950/40 rounded border border-red-500/30 text-center text-xs"></div>

          <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
            <button type="button" class="btn btn-neutral" id="btn-cancel-score-config">Cancel</button>
            <button type="submit" class="btn btn-primary">Apply Settings</button>
          </div>
        </form>
      </div>
    `,e.classList.remove("hidden");let o="md";const u=document.getElementById("tab-config-md"),v=document.getElementById("tab-config-xd"),x=document.getElementById("config-section-md"),$=document.getElementById("config-section-xd");u.onclick=()=>{o="md",u.classList.add("text-volt"),u.style.borderColor="var(--volt)",v.classList.remove("text-volt"),v.classList.add("text-slate-500"),v.style.borderColor="transparent",x.classList.remove("hidden"),$.classList.add("hidden")},v.onclick=()=>{o="xd",v.classList.add("text-volt"),v.style.borderColor="var(--volt)",u.classList.remove("text-volt"),u.classList.add("text-slate-500"),u.style.borderColor="transparent",$.classList.remove("hidden"),x.classList.add("hidden")};const w=E=>{const I=o;n.forEach(L=>{const k=L.replace(/\s+/g,"-").toLowerCase(),C=E[L]||E.default;document.getElementById(`${I}-${k}-target`).value=C.targetPoints,document.getElementById(`${I}-${k}-max`).value=C.maxPoints,document.getElementById(`${I}-${k}-sets`).value=C.setsToWin})};document.getElementById("preset-bwf-standard").onclick=()=>{w({default:{targetPoints:21,maxPoints:30,setsToWin:2}}),this.showToast(`Standard BWF presets filled for ${o==="md"?"Men's Doubles":"Mixed's Doubles"}!`,"info")},document.getElementById("preset-fast-15").onclick=()=>{w({default:{targetPoints:15,maxPoints:21,setsToWin:2}}),this.showToast(`Short Game presets filled for ${o==="md"?"Men's Doubles":"Mixed's Doubles"}!`,"info")},document.getElementById("preset-single-set").onclick=()=>{w({default:{targetPoints:21,maxPoints:30,setsToWin:1}}),this.showToast(`Single Set presets filled for ${o==="md"?"Men's Doubles":"Mixed's Doubles"}!`,"info")};const A=document.getElementById("btn-close-score-config"),M=document.getElementById("btn-cancel-score-config"),_=()=>e.classList.add("hidden");A.onclick=_,M.onclick=_,document.getElementById("score-config-form").onsubmit=E=>{E.preventDefault();const I=document.getElementById("score-config-error-msg");I.classList.add("hidden");for(const L of s){const k=L==="Men's Doubles"?"md":"xd";for(const C of n){const N=C.replace(/\s+/g,"-").toLowerCase(),R=Number(document.getElementById(`${k}-${N}-target`).value),D=Number(document.getElementById(`${k}-${N}-max`).value),f=Number(document.getElementById(`${k}-${N}-sets`).value);if(D<R){I.textContent=`Max points cannot be less than target points in ${L} - ${C}.`,I.classList.remove("hidden");return}this.state.updateScoreConfig(L,C,{targetPoints:R,maxPoints:D,setsToWin:f})}}e.classList.add("hidden"),this.showToast("Match scoring settings updated successfully!","success"),this.onUpdate()}}}class Da{constructor(e){this.container=document.getElementById(e),this.isEven=!0,this.servingTeam="A",this.serverIndex=0,this.receiverIndex=0,this.lang="en",this.teamAPlayers=["Player 1","Player 2"],this.teamBPlayers=["Player 3","Player 4"],this.init()}setLanguage(e){this.lang="en",this.render()}setScoreParity(e){this.isEven=e,this.render()}setTeams(e,s){this.teamAPlayers=e,this.teamBPlayers=s,this.render()}init(){this.container&&this.render()}render(){var b,g,y,m;if(!this.container)return;const e=this.isEven?this.teamAPlayers[0]:this.teamAPlayers[1],s=this.isEven?this.teamAPlayers[1]:this.teamAPlayers[0],n=this.isEven?this.teamBPlayers[0]:this.teamBPlayers[1],a=this.isEven?this.teamBPlayers[1]:this.teamBPlayers[0],c="Even Score (0, 2, 4...)",o="Odd Score (1, 3, 5...)",u="Doubles Service Simulator",v=`Serving Team (Bottom) has an **${this.isEven?"EVEN":"ODD"}** score:`,x=`<ul>
        <li><strong>Server:</strong> <span class="highlight-volt">${e}</span> serves from the <strong>${this.isEven?"RIGHT":"LEFT"}</strong> court.</li>
        <li><strong>Receiver:</strong> <span class="highlight-cyan">${n}</span> stands in the diagonal court to receive.</li>
        <li><strong>Valid Service Zone:</strong> The doubles service court (wider but shorter than singles) is highlighted.</li>
       </ul>`,$=this.isEven?210:90,w=400,A=this.isEven?90:210,M=400,_=this.isEven?90:210,E=100,I=this.isEven?210:90,L=100,k=this.isEven?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z",C=this.isEven?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",N=$,R=w-10,D=_,f=E+10,h=(N+D)/2+30,p=(R+f)/2-40;this.container.innerHTML=`
      <div class="court-sim-card glass-card">
        <h3 class="court-title flex items-center justify-between">
          <span>${u}</span>
          <div class="sim-lang-badge">BWF RULES</div>
        </h3>
        
        <div class="court-sim-grid">
          <div class="court-visual-wrapper">
            <svg class="court-svg" viewBox="0 0 300 500" width="100%" height="100%">
              <defs>
                <filter id="neon-glow-volt" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
                <filter id="neon-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="6" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              <!-- Court Outer Boundary -->
              <rect x="20" y="40" width="260" height="420" class="court-line outer" />
              
              <!-- Singles Sidelines (Inner) -->
              <line x1="40" y1="40" x2="40" y2="460" class="court-line singles-side" />
              <line x1="260" y1="40" x2="260" y2="460" class="court-line singles-side" />
              
              <!-- Center Line -->
              <line x1="150" y1="40" x2="150" y2="190" class="court-line center" />
              <line x1="150" y1="310" x2="150" y2="460" class="court-line center" />
              
              <!-- Short Service Lines -->
              <line x1="20" y1="190" x2="280" y2="190" class="court-line service-short" />
              <line x1="20" y1="310" x2="280" y2="310" class="court-line service-short" />
              
              <!-- Doubles Long Service Lines -->
              <line x1="20" y1="60" x2="280" y2="60" class="court-line service-long-doubles" />
              <line x1="20" y1="440" x2="280" y2="440" class="court-line service-long-doubles" />
              
              <!-- Net Line -->
              <line x1="10" y1="250" x2="290" y2="250" class="court-line net" />
              <!-- Net Post Left & Right -->
              <circle cx="10" cy="250" r="4" class="net-post" />
              <circle cx="290" cy="250" r="4" class="net-post" />
              
              <!-- HIGHLIGHT ACTIVE SERVING BOX -->
              <path d="${k}" class="svg-highlight-box serving" filter="url(#neon-glow-volt)" />
              
              <!-- HIGHLIGHT TARGET RECEIVING BOX -->
              <path d="${C}" class="svg-highlight-box receiving" filter="url(#neon-glow-cyan)" />
              
              <!-- Shuttlecock path animation -->
              <path id="shuttle-path" d="M ${N},${R} Q ${h},${p} ${D},${f}" class="svg-shuttle-path" />
              <circle r="5" class="svg-shuttle" filter="url(#neon-glow-cyan)">
                <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
                  <mpath href="#shuttle-path" />
                </animateMotion>
              </circle>

              <!-- TRANSPARENT CLICKABLE AREAS FOR SERVICE BOXES -->
              <path d="M 150,310 L 280,310 L 280,440 L 150,440 Z" class="svg-click-box" id="svg-click-right" style="cursor: pointer; fill: transparent; pointer-events: all;" />
              <path d="M 20,310 L 150,310 L 150,440 L 20,440 Z" class="svg-click-box" id="svg-click-left" style="cursor: pointer; fill: transparent; pointer-events: all;" />

              <!-- Player Avatars Bottom (Team A) -->
              <!-- Server -->
              <g class="player-avatar server">
                <circle cx="${$}" cy="${w}" r="14" class="avatar-bg volt" />
                <text x="${$}" y="${w+4}" class="avatar-text">S</text>
              </g>
              <text x="${$}" y="${w+28}" class="svg-player-name text-volt">${e.split(" ")[0]}</text>
              
              <!-- Partner A -->
              <g class="player-avatar partner">
                <circle cx="${A}" cy="${M}" r="12" class="avatar-bg neutral" />
                <text x="${A}" y="${M+4}" class="avatar-text">P</text>
              </g>
              <text x="${A}" y="${M+28}" class="svg-player-name text-muted">${s.split(" ")[0]}</text>

              <!-- Player Avatars Top (Team B) -->
              <!-- Receiver -->
              <g class="player-avatar receiver">
                <circle cx="${_}" cy="${E}" r="14" class="avatar-bg cyan" />
                <text x="${_}" y="${E+4}" class="avatar-text">R</text>
              </g>
              <text x="${_}" y="${E-22}" class="svg-player-name text-cyan">${n.split(" ")[0]}</text>
              
              <!-- Partner B -->
              <g class="player-avatar receiver-partner">
                <circle cx="${I}" cy="${L}" r="12" class="avatar-bg neutral" />
                <text x="${I}" y="${L+4}" class="avatar-text">P</text>
              </g>
              <text x="${I}" y="${L-22}" class="svg-player-name text-muted">${a.split(" ")[0]}</text>
            </svg>
          </div>
          
          <div class="court-controls-wrapper flex flex-col justify-between">
            <div>
              <div class="selector-title">Score Status</div>
              <div class="sim-toggle-buttons grid grid-cols-2 gap-2 mb-4">
                <button class="btn-toggle-sim ${this.isEven?"active glow-volt":""}" id="sim-btn-even">
                  ${c}
                </button>
                <button class="btn-toggle-sim ${this.isEven?"":"active glow-cyan"}" id="sim-btn-odd">
                  ${o}
                </button>
              </div>
              
              <div class="sim-explanation">
                <div class="exp-header flex items-center gap-2 mb-2">
                  <span class="indicator-dot pulse-${this.isEven?"volt":"cyan"}"></span>
                  <span>${v}</span>
                </div>
                <div class="exp-details">${x}</div>
              </div>
            </div>
            
            <div class="court-sim-footer mt-4 p-3 glass-panel rounded-lg text-xs text-muted">
              💡 <strong>Tip:</strong> Click directly on the bottom court boxes to toggle even/odd service. Players only swap courts when their team wins a point on their own serve.
            </div>
          </div>
        </div>
      </div>
    `,(b=document.getElementById("sim-btn-even"))==null||b.addEventListener("click",()=>this.setScoreParity(!0)),(g=document.getElementById("sim-btn-odd"))==null||g.addEventListener("click",()=>this.setScoreParity(!1)),(y=document.getElementById("svg-click-right"))==null||y.addEventListener("click",()=>this.setScoreParity(!0)),(m=document.getElementById("svg-click-left"))==null||m.addEventListener("click",()=>this.setScoreParity(!1))}}class Na{constructor(e,s){this.state=e,this.onRemoteUpdate=s,this.channelName="badminton_live_sync",this.channel=null,this.senderId=Math.random().toString(36).substring(2),this.lastRemoteTimestamp=0,this.init()}init(){try{this.channel=new BroadcastChannel(this.channelName),this.channel.onmessage=e=>this.handleMessage(e.data)}catch(e){console.warn("BroadcastChannel not supported in this browser. Falling back to storage event listeners.",e),window.addEventListener("storage",s=>{if(s.key==="badminton_live_sync_fallback")try{const n=JSON.parse(s.newValue);this.handleMessage(n)}catch(n){console.error("Failed to parse fallback storage sync message",n)}})}}getLiveMatches(){const e=localStorage.getItem("badminton_live_matches");return e?JSON.parse(e):{}}saveLiveMatches(e){localStorage.setItem("badminton_live_matches",JSON.stringify(e))}broadcast(e,s){const n={type:e,payload:s,timestamp:Date.now()};this.channel&&this.channel.postMessage(n),localStorage.setItem("badminton_live_sync_fallback",JSON.stringify(n))}handleMessage(e){if(!e||!e.type||!e.payload)return;const{type:s,payload:n}=e;switch(s){case"LIVE_SCORE_UPDATE":this.applyLiveUpdate(n);break;case"LIVE_MATCH_START":this.setMatchLiveStatus(n.matchId,!0,n.matchState);break;case"LIVE_MATCH_END":this.setMatchLiveStatus(n.matchId,!1);break}}setMatchLiveStatus(e,s,n=null){const a=this.getLiveMatches();s?a[e]={matchId:e,isLive:!0,updatedAt:Date.now(),...n||{}}:delete a[e],this.saveLiveMatches(a),this.onRemoteUpdate&&this.onRemoteUpdate("STATUS_UPDATE",{matchId:e,isLive:s})}applyLiveUpdate(e){const{matchId:s,sets:n,score1:a,score2:c,currentSet:o,servingTeam:u,isEven:v,serverName:x,partnerName:$,receiverName:w,receiverPartnerName:A,isCourtSwapped:M,team1Right:_,team1Left:E,team2Right:I,team2Left:L}=e,k=this.getLiveMatches();k[s]={matchId:s,isLive:!0,updatedAt:Date.now(),sets:n,score1:a,score2:c,currentSet:o,servingTeam:u,isEven:v,serverName:x,partnerName:$,receiverName:w,receiverPartnerName:A,isCourtSwapped:M,team1Right:_,team1Left:E,team2Right:I,team2Left:L},this.saveLiveMatches(k);const C=this.state.matches.find(N=>N.id===s);C&&(C.sets=n,C.score1=a,C.score2=c,C.status="Live"),this.onRemoteUpdate&&this.onRemoteUpdate("SCORE_UPDATE",e)}}class ka{constructor(){this.canvas=null,this.ctx=null,this.particles=[],this.colors=["#84cc16","#22d3ee","#a855f7","#f43f5e","#eab308"],this.animationFrame=null}start(){this.stop(),this.canvas=document.createElement("canvas"),this.canvas.className="confetti-canvas",document.body.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.resize();const e=()=>this.resize();window.addEventListener("resize",e),this.resizeHandler=e;for(let n=0;n<120;n++)this.particles.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height-this.canvas.height,r:Math.random()*4+3,d:Math.random()*this.canvas.height,color:this.colors[Math.floor(Math.random()*this.colors.length)],tilt:Math.random()*8-4,tiltAngleIncremental:Math.random()*.05+.02,tiltAngle:0,speed:Math.random()*2+1.5});const s=()=>{if(!this.ctx||!this.canvas)return;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let n=0;this.particles.forEach(a=>{a.tiltAngle+=a.tiltAngleIncremental,a.y+=a.speed,a.x+=Math.sin(a.tiltAngle)*.5,a.tilt=Math.sin(a.tiltAngle-a.r/2)*4,this.ctx.beginPath(),this.ctx.lineWidth=a.r,this.ctx.strokeStyle=a.color,this.ctx.moveTo(a.x+a.tilt+a.r/2,a.y),this.ctx.lineTo(a.x+a.tilt,a.y+a.tilt+a.r/2),this.ctx.stroke(),a.y<=this.canvas.height&&n++}),n>0?this.animationFrame=requestAnimationFrame(s):this.stop()};s()}resize(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}stop(){this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null),this.canvas&&(this.canvas.remove(),this.canvas=null,this.ctx=null),this.particles=[]}}class Ra{constructor(){window.BadmintonAppInstance=this,this.state=new Pa,this.lang="en",this.activeTab="dashboard",this.activeCategoryFilter="all",this.fixtureSearchText="",this.fixtureStatusFilter="all",this.confetti=new ka,this.countdownTimer=null,this.activeSpectateMatchId=null,this.sync=new Na(this.state,(e,s)=>this.handleSyncUpdate(e,s)),this.admin=new La(this.state,()=>this.handleStateChange(),this.sync),this.courtSimulator=null,this.state.addListener(()=>this.handleStateChange()),this.init()}init(){this.setupDOM(),this.setupEventListeners(),this.admin.setLanguage(this.lang),this.renderActiveView(),this.updateNavbar(),setTimeout(()=>this.updateActivePill(),100)}getTeamRank(e,s){const n=this.state.calculateStandings(s),a=s==="Men's Doubles"?"MD":"XD",c=this.state.matches.find(v=>v.id===`F-${a}`),o=this.state.matches.find(v=>v.id===`B-${a}`);if(c&&c.status==="Completed"){if(c.winner===e)return 1;if(c.team1===e||c.team2===e)return 2}if(o&&o.status==="Completed"){if(o.winner===e)return 3;if(o.team1===e||o.team2===e)return 4}const u=n.findIndex(v=>v.name===e);return u!==-1?u+1:"-"}getTeamStats(e,s){const a=this.state.calculateStandings(s).find(I=>I.name===e)||{points:0},c=this.state.matches.filter(I=>I.category===s&&I.status==="Completed"&&(I.team1===e||I.team2===e)),o=c.length,u=c.filter(I=>I.winner===e).length,v=o-u,x=o>0?Math.round(u/o*100):0;let $=0,w=0,A=0,M=0;c.forEach(I=>{const L=I.team1===e,k=Number(I.score1)||0,C=Number(I.score2)||0;L?($+=k,w+=C):($+=C,w+=k),I.sets&&I.sets.forEach(N=>{const R=Number(N.t1)||0,D=Number(N.t2)||0;L?(A+=R,M+=D):(A+=D,M+=R)})});const _=$-w,E=A-M;return{played:o,wins:u,losses:v,pts:a.points,setsWon:$,setsLost:w,netSets:_,pointsWon:A,pointsLost:M,netPoints:E,winPercent:x,completedMatches:c}}setupDOM(){this.translateStaticElements()}setupEventListeners(){document.querySelectorAll(".nav-tab").forEach(n=>{n.addEventListener("click",a=>{const c=a.currentTarget.getAttribute("data-tab");c&&this.switchTab(c)})}),window.addEventListener("resize",()=>this.updateActivePill());const s=document.getElementById("btn-reset-db");s&&s.addEventListener("click",()=>{this.admin.isAdmin&&confirm("WARNING: This will reset all tournament scores and standings to defaults. Proceed?")&&(this.state.resetToDefault(),this.admin.showToast("Database reset to default!","success"))}),document.body.addEventListener("click",n=>{const a=n.target.closest(".btn-spectate-match");if(a){const c=a.getAttribute("data-match-id");this.openSpectateOverlay(c)}})}handleStateChange(){this.renderActiveView(),this.updateNavbar()}switchTab(e){this.activeTab=e,this.confetti&&this.confetti.stop(),document.querySelectorAll(".nav-tab").forEach(n=>{n.getAttribute("data-tab")===e?n.classList.add("active"):n.classList.remove("active")}),this.renderActiveView(),e==="rules"&&setTimeout(()=>{this.courtSimulator=new Da("court-sim-container"),this.courtSimulator.setLanguage(this.lang);const n=this.state.teams.filter(c=>c.category==="Men's Doubles")[0],a=this.state.teams.filter(c=>c.category==="Mixed's Doubles")[0];n&&a&&this.courtSimulator.setTeams([n.player1,n.player2],[a.player1,a.player2])},50),this.updateActivePill()}updateActivePill(){const e=document.querySelector(`.nav-tab[data-tab="${this.activeTab}"]`),s=document.querySelector(".nav-tabs-wrapper");if(!s)return;let n=document.querySelector(".nav-active-pill");n||(n=document.createElement("div"),n.className="nav-active-pill",s.appendChild(n)),e&&(n.style.width=`${e.offsetWidth}px`,n.style.transform=`translateX(${e.offsetLeft}px)`)}translateStaticElements(){}updateNavbar(){const e=document.getElementById("btn-toggle-admin"),s=document.getElementById("btn-reset-db");if(e){let n=document.getElementById("navbar-welcome-user"),a=document.getElementById("btn-score-settings");if(this.admin.isAdmin||this.admin.isRef){const o=sessionStorage.getItem("badminton_authLabel")||(this.admin.isAdmin?"Super Admin":this.admin.refPitch+" Umpire");n||(n=document.createElement("span"),n.id="navbar-welcome-user",n.className="text-5xs text-slate-300 font-extrabold tracking-wide uppercase mr-1 flex items-center gap-1.5",e.parentNode.insertBefore(n,e)),n.innerHTML=`<span class="w-1.5 h-1.5 rounded-full bg-volt pulse-dot"></span> Welcome, <span class="text-volt font-black">${o}</span>`,n.classList.remove("hidden"),this.admin.isAdmin?(a||(a=document.createElement("button"),a.id="btn-score-settings",a.className="btn btn-xs btn-outline btn-volt flex items-center gap-1 mr-1",a.innerHTML="⚙️ <span>Score Settings</span>",e.parentNode.insertBefore(a,e)),a.classList.remove("hidden")):a&&a.classList.add("hidden"),e.innerHTML="✕ <span>Logout</span>",e.className="btn btn-xs btn-danger font-bold flex items-center gap-1",s&&this.admin.isAdmin&&s.classList.remove("hidden")}else n&&(n.classList.add("hidden"),n.innerHTML=""),a&&a.classList.add("hidden"),e.innerHTML="🔐 <span>Admin Login</span>",e.className="btn btn-xs btn-outline flex items-center gap-1",s&&s.classList.add("hidden")}}renderActiveView(){const e=document.getElementById("main-view-container");if(!e)return;switch(e.className="view-fade-in",this.activeTab){case"dashboard":this.renderDashboard(e);break;case"standings":this.renderStandings(e);break;case"fixtures":this.renderFixtures(e);break;case"bracket":this.renderBracket(e);break;case"results":this.renderResults(e);break;case"rules":this.renderRules(e);break;case"teams":this.renderTeams(e);break}e.querySelectorAll(".glass-card, .dashboard-stat-card, .team-card, .match-card, .bracket-node, .standings-table tbody tr").forEach((n,a)=>{n.classList.add("animate-fade-slide-up"),n.style.animationDelay=`${a*.03}s`})}renderDashboard(e){var x,$;const s=this.state.matches.length,n=this.state.matches.filter(w=>w.status==="Completed").length,a=s>0?Math.round(n/s*100):0;let c=0;this.state.matches.forEach(w=>{w.status==="Completed"&&w.sets.forEach(A=>{c+=A.t1+A.t2})});const o="GEAR GAMES BADMINTON CHAMPIONSHIP 2026",u="Live standings, schedule fixtures & bracket generator",v="COUNTDOWN TO TOURNAMENT";e.innerHTML=`
      <div class="hero-section glass-card mb-6">
        <h1 class="hero-title text-glow-volt">${o}</h1>
        <p class="hero-subtitle">${u}</p>
        
        <div class="countdown-container mt-6">
          <div class="countdown-title mb-2">${v}</div>
          <div class="grid grid-cols-4 gap-4 max-w-sm mx-auto">
            <div class="countdown-box">
              <span id="cd-days" class="cd-num">00</span>
              <span class="cd-lbl">Days</span>
            </div>
            <div class="countdown-box">
              <span id="cd-hours" class="cd-num">00</span>
              <span class="cd-lbl">Hrs</span>
            </div>
            <div class="countdown-box">
              <span id="cd-minutes" class="cd-num">00</span>
              <span class="cd-lbl">Mins</span>
            </div>
            <div class="countdown-box">
              <span id="cd-seconds" class="cd-num">00</span>
              <span class="cd-lbl">Secs</span>
            </div>
          </div>
          <div class="text-xs text-muted mt-3">⚡ 31 May 2026 @ 13:30 | Alpha Era court ⚡</div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div class="dashboard-stat-card glass-card border-glow-volt">
          <div class="stat-icon text-volt">🏆</div>
          <div class="stat-info">
            <span class="stat-value">${n}/${s}</span>
            <span class="stat-label">Matches Completed</span>
          </div>
          <div class="stat-progress-bar mt-3">
            <div class="progress-fill glow-volt" style="width: ${a}%"></div>
          </div>
          <div class="text-right text-xs text-volt font-bold mt-1">${a}% Complete</div>
        </div>

        <div class="dashboard-stat-card glass-card border-glow-cyan">
          <div class="stat-icon text-cyan">🔥</div>
          <div class="stat-info">
            <span class="stat-value">${c}</span>
            <span class="stat-label">Total Points Scored</span>
          </div>
          <div class="stat-progress-bar mt-3">
            <div class="progress-fill glow-cyan" style="width: 100%"></div>
          </div>
          <div class="text-right text-xs text-cyan font-bold mt-1">Live Statistics</div>
        </div>

        <div class="dashboard-stat-card glass-card border-glow-purple">
          <div class="stat-icon text-purple">👥</div>
          <div class="stat-info">
            <span class="stat-value">10 Teams</span>
            <span class="stat-label">20 Registered Players</span>
          </div>
          <div class="stat-progress-bar mt-3">
            <div class="progress-fill glow-purple" style="width: 100%"></div>
          </div>
          <div class="text-right text-xs text-purple font-bold mt-1">Men's & Mixed Doubles</div>
        </div>
      </div>

      <!-- Live Stadium Center Card -->
      <div class="glass-card mb-6 border border-slate-800">
        <div class="flex items-center justify-between border-b border-slate-800/80 pb-3 mb-4 flex-wrap gap-2">
          <h3 class="m-0 flex items-center gap-2">
            <span class="live-dot pulse-red"></span>
            <span class="text-glow-volt font-black uppercase text-xs" style="letter-spacing: 0.05em;">
              🔴 LIVE COURT TRACKER
            </span>
          </h3>
        </div>
        
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          ${this.renderLivePitches()}
        </div>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <!-- Quick standings MD -->
        <div class="glass-card">
          <h3 class="flex items-center justify-between mb-4">
            <span class="text-volt font-bold">💎 Men's Doubles Leaderboard</span>
            <button class="btn btn-xs btn-outline" id="dash-goto-md">View Full</button>
          </h3>
          <div class="overflow-x-auto">
            ${this.renderMiniStandingsTable("Men's Doubles")}
          </div>
        </div>

        <!-- Quick standings XD -->
        <div class="glass-card">
          <h3 class="flex items-center justify-between mb-4">
            <span class="text-cyan font-bold">🔮 Mixed's Doubles Leaderboard</span>
            <button class="btn btn-xs btn-outline" id="dash-goto-xd">View Full</button>
          </h3>
          <div class="overflow-x-auto">
            ${this.renderMiniStandingsTable("Mixed's Doubles")}
          </div>
        </div>
      </div>
    `,(x=document.getElementById("dash-goto-md"))==null||x.addEventListener("click",()=>this.switchTab("standings")),($=document.getElementById("dash-goto-xd"))==null||$.addEventListener("click",()=>this.switchTab("standings")),this.startCountdown()}renderMiniStandingsTable(e){const s=this.state.calculateStandings(e);let n=s.slice(0,3).map((a,c)=>`
        <tr>
          <td class="text-center font-bold" style="width: 45px;">${c===0?"🥇":c===1?"🥈":"🥉"}</td>
          <td class="font-bold text-slate-100">${a.name}</td>
          <td class="text-center font-semibold text-volt">${a.points}</td>
          <td class="text-center text-slate-300">${a.played}</td>
          <td class="text-center text-slate-300">${a.netSets>0?"+"+a.netSets:a.netSets}</td>
          <td class="text-center text-slate-300 text-xs">${a.pointsWon}-${a.pointsLost}</td>
        </tr>
      `).join("");return s.length===0&&(n='<tr><td colspan="6" class="text-center text-muted py-4">No data available</td></tr>'),`
      <table class="standings-table mini-table">
        <thead>
          <tr>
            <th class="text-center">#</th>
            <th>Team</th>
            <th class="text-center">Wins</th>
            <th class="text-center">Pld</th>
            <th class="text-center">Sets</th>
            <th class="text-center">Points</th>
          </tr>
        </thead>
        <tbody>
          ${n}
        </tbody>
      </table>
    `}renderStandings(e){e.innerHTML=`
      <div class="flex items-center justify-between mb-6 flex-wrap gap-4">
        <div>
          <h2 class="view-title text-glow-volt m-0">📊 Tournament Leaderboards</h2>
          <p class="view-subtitle">Real-time calculated ranks and tie-breaker statistics</p>
        </div>
        
        <div class="flex items-center gap-2 bg-slate-900/60 p-1.5 rounded-lg border border-slate-700/40">
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter==="all"?"active bg-slate-800 text-volt":"btn-text"}" id="std-filter-all">
            All
          </button>
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter==="md"?"active bg-slate-800 text-volt":"btn-text"}" id="std-filter-md">
            Men's Doubles
          </button>
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter==="xd"?"active bg-slate-800 text-volt":"btn-text"}" id="std-filter-xd">
            Mixed's Doubles
          </button>
        </div>
      </div>

      <div class="space-y-8">
        ${this.activeCategoryFilter==="all"||this.activeCategoryFilter==="md"?this.renderCategoryStandings("Men's Doubles"):""}
        ${this.activeCategoryFilter==="all"||this.activeCategoryFilter==="xd"?this.renderCategoryStandings("Mixed's Doubles"):""}
      </div>
    `,document.getElementById("std-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("std-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("std-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()}}renderCategoryStandings(e){const s=this.state.calculateStandings(e),n=e==="Men's Doubles",a=n?"text-volt":"text-cyan",c=s.map((o,u)=>{const v=u+1,x=v<=4,$=this.state.isGroupStageComplete(e);let w=`<span class="rank-circle font-bold ${v===1?"gold":v===2?"silver":v===3?"bronze":""}">${v}</span>`,A="";$&&(x?A='<span class="advance-tag neon-green">SEMIS</span>':A='<span class="advance-tag neon-red">OUT</span>');const M=o.played===s.length-1,_=M?'<span class="finished-tag">4 Matches</span>':"";return`
        <tr class="${x?"row-top-4":"row-eliminated"} ${n?"md-row":"xd-row"}">
          <td class="text-center">${w}</td>
          <td class="font-bold text-slate-100">
            <div class="flex items-center gap-2 flex-wrap">
              <span>${o.name}</span>
              ${A}
              ${_}
            </div>
            <div class="text-xs text-muted font-normal mt-0.5">${o.player1} & ${o.player2}</div>
          </td>
          <td class="text-center font-bold text-volt text-base">${o.points}</td>
          <td class="text-center font-bold ${M?"text-emerald-400":"text-slate-200"}">${o.played}</td>
          <td class="text-center text-slate-200 font-semibold text-emerald-400">${o.won}</td>
          <td class="text-center font-semibold ${o.lost>0?"text-rose-400":"text-slate-400"}">${o.lost}</td>
          <td class="text-center text-slate-200 font-bold ${o.netSets>=0?"text-emerald-400":"text-rose-400"}">
            ${o.setsWon}-${o.setsLost} 
            <span class="text-xs font-normal">(${o.netSets>=0?"+"+o.netSets:o.netSets})</span>
          </td>
          <td class="text-center text-slate-300 text-xs">
            ${o.pointsWon}-${o.pointsLost}
            <span class="text-xs font-semibold block text-cyan-400 mt-0.5">(${o.netPoints>=0?"+"+o.netPoints:o.netPoints})</span>
          </td>
        </tr>
      `}).join("");return`
      <div class="glass-card mb-6">
        <h3 class="flex items-center gap-2 mb-4 font-bold border-b border-slate-700/50 pb-3">
          <span>${n?"💎":"🔮"}</span>
          <span class="${a}">${e}</span>
          <span class="badge bg-slate-800 text-slate-400 text-xs font-normal ml-2">Qualifying Stage</span>
        </h3>
        
        <div class="overflow-x-auto">
          <table class="standings-table">
            <thead>
              <tr>
                <th class="text-center" style="width: 60px;">#</th>
                <th>Team / Members</th>
                <th class="text-center">Pts</th>
                <th class="text-center">Pld</th>
                <th class="text-center">Won</th>
                <th class="text-center">Lost</th>
                <th class="text-center">Sets (Net)</th>
                <th class="text-center">Set Pts (Net)</th>
              </tr>
            </thead>
            <tbody>
              ${c}
            </tbody>
          </table>
        </div>
        
        <div class="p-3 bg-slate-900/40 rounded-lg mt-4 border border-slate-800 flex items-center gap-2 text-xs text-muted">
          <span>💡</span>
          <span><strong>Ranking rule:</strong> Top 4 teams automatically advance to the Semi-finals. Tie-breakers: Match wins ➔ Net Sets ➔ Head-to-Head ➔ Net Points.</span>
        </div>
      </div>
    `}renderFixtures(e){let s="";this.activeCategoryFilter==="all"?s=`
        <div class="fixtures-grid gap-6 items-start">
          ${this.renderCategoryFixtures("Men's Doubles")}
          ${this.renderCategoryFixtures("Mixed's Doubles")}
        </div>
      `:this.activeCategoryFilter==="md"?s=`
        <div class="grid grid-cols-1 gap-6 items-start">
          ${this.renderCategoryFixtures("Men's Doubles")}
        </div>
      `:s=`
        <div class="grid grid-cols-1 gap-6 items-start">
          ${this.renderCategoryFixtures("Mixed's Doubles")}
        </div>
      `,e.innerHTML=`
      <div class="flex items-center justify-between mb-4 flex-wrap gap-4">
        <div>
          <h2 class="view-title text-glow-volt m-0"><svg class="nav-icon mr-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" style="width: 22px; height: 22px; vertical-align: middle;"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> Match Schedule & Results</h2>
          <p class="view-subtitle">List of scheduled tournament fixtures and match scores</p>
        </div>
        
        <div class="flex items-center gap-2 bg-slate-900/60 p-1.5 rounded-lg border border-slate-700/40">
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter==="all"?"active bg-slate-800 text-volt":"btn-text"}" id="fix-filter-all">
            All
          </button>
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter==="md"?"active bg-slate-800 text-volt":"btn-text"}" id="fix-filter-md">
            Men's Doubles
          </button>
          <button class="btn btn-sm btn-filter ${this.activeCategoryFilter==="xd"?"active bg-slate-800 text-volt":"btn-text"}" id="fix-filter-xd">
            Mixed's Doubles
          </button>
        </div>
      </div>

      <!-- Search & Status filter deck -->
      <div class="filter-deck">
        <div class="filter-search-wrapper">
          <span class="filter-search-icon">🔍</span>
          <input type="text" class="filter-search-input" id="fixture-search" 
                 placeholder="Search team or player name..." 
                 value="${this.fixtureSearchText}">
        </div>

        <div class="filter-pills">
          <button class="filter-pill ${this.fixtureStatusFilter==="all"?"active":""}" data-status="all">
            All
          </button>
          <button class="filter-pill ${this.fixtureStatusFilter==="Scheduled"?"active":""}" data-status="Scheduled">
            Scheduled
          </button>
          <button class="filter-pill ${this.fixtureStatusFilter==="Completed"?"active":""}" data-status="Completed">
            Completed
          </button>
        </div>
      </div>

      ${s}
    `,document.getElementById("fix-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("fix-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("fix-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()};const n=document.getElementById("fixture-search");n.oninput=c=>{this.fixtureSearchText=c.target.value,this.renderActiveView();const o=document.getElementById("fixture-search");o&&(o.focus(),o.setSelectionRange(this.fixtureSearchText.length,this.fixtureSearchText.length))},document.querySelectorAll(".filter-pill").forEach(c=>{c.onclick=()=>{this.fixtureStatusFilter=c.getAttribute("data-status"),this.renderActiveView()}})}checkPlayersIncludeSearch(e,s,n){const a=this.state.teams.find(o=>o.name===e),c=this.state.teams.find(o=>o.name===s);return!!(a&&(a.player1.toLowerCase().includes(n)||a.player2.toLowerCase().includes(n))||c&&(c.player1.toLowerCase().includes(n)||c.player2.toLowerCase().includes(n)))}renderCategoryFixtures(e){const s=e==="Men's Doubles",n=s?"Men's Doubles":"Mixed's Doubles";let a=this.state.matches.filter(E=>E.category===e);if(this.fixtureStatusFilter!=="all"&&(a=a.filter(E=>E.status===this.fixtureStatusFilter)),this.fixtureSearchText.trim()!==""){const E=this.fixtureSearchText.toLowerCase().trim();a=a.filter(I=>I.team1.toLowerCase().includes(E)||I.team2.toLowerCase().includes(E)||I.stage&&I.stage.toLowerCase().includes(E)||I.pitch&&I.pitch.toLowerCase().includes(E)||this.checkPlayersIncludeSearch(I.team1,I.team2,E))}const c=a.filter(E=>E.stage==="Group Stage"),o=a.filter(E=>E.stage==="Semi-finals"),u=a.filter(E=>E.stage==="Grand Final"),v=a.filter(E=>E.stage==="Bronze Match"),x="GRAND CHAMPIONSHIP",$="BRONZE FINALS",w="SEMIFINALS STAGE",A="GROUP STAGE QUALIFYING",M=(E,I)=>E.length===0?"":`
        <div class="glass-card flex flex-col gap-3 relative overflow-hidden" style="background: rgba(15, 23, 42, 0.25); padding: 1.25rem;">
          <div class="absolute top-0 left-0 w-full h-[2px]" style="background: ${s?"var(--volt)":"var(--cyan)"};"></div>
          <div class="text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 pb-1.5 border-b border-slate-800/80 flex items-center justify-between">
            <span class="${s?"text-volt":"text-cyan"} font-extrabold" style="font-size: 0.65rem; letter-spacing: 0.05em;">${I}</span>
            <span class="text-slate-600 font-medium">${E.length} ${E.length===1?"Match":"Matches"}</span>
          </div>
          <div class="flex flex-col gap-3">
            ${this.renderMatchCards(E)}
          </div>
        </div>
      `;let _="No matches scheduled or completed";return this.fixtureSearchText.trim()!==""?_="No matches found matching your search":this.fixtureStatusFilter==="Scheduled"?_="No matches scheduled":this.fixtureStatusFilter==="Completed"&&(_="No matches completed"),`
      <div class="flex-1 flex flex-col gap-5">
        <h3 class="font-extrabold text-sm flex items-center gap-2 mb-1 pb-2 border-b border-slate-800">
          <span>${s?"💎":"🔮"}</span>
          <span class="${s?"text-volt":"text-cyan"}">${n}</span>
        </h3>
        
        <div class="flex flex-col gap-4">
          ${a.length===0?`
            <div class="glass-card text-center py-8 px-4 flex flex-col items-center justify-center gap-2 border border-dashed border-slate-800/60" style="background: rgba(15, 23, 42, 0.15); border-radius: 12px;">
              <span class="text-xl">📅</span>
              <span class="text-slate-400 font-semibold text-xs">${_}</span>
            </div>
          `:`
            ${M(u,x)}
            ${M(v,$)}
            ${M(o,w)}
            ${M(c,A)}
          `}
        </div>
      </div>
    `}renderMatchCards(e){if(e.length===0)return'<div class="col-span-2 text-center text-muted py-6">No matches found</div>';const s=this.sync.getLiveMatches();return e.map(n=>{const a=s[n.id],c=!!a,o=n.status==="Completed";n.team1&&(n.team1.includes("Place")||n.team1.includes("Winner")||n.team1.includes("Loser"))||n.team2&&(n.team2.includes("Place")||n.team2.includes("Winner")||n.team2.includes("Loser"));let u="",v="";c?(u="border-glow-volt bg-volt-gradient",v=`
          <span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--danger); color: #fff; box-shadow: 0 0 8px rgba(239, 68, 68, 0.4);">
            <span class="live-dot-pulse"></span> LIVE
          </span>
        `):n.stage==="Grand Final"?(u="border-glow-gold bg-gold-gradient",v=o?'<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--gold); color: #000; box-shadow: 0 0 8px rgba(245, 158, 11, 0.45);"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a6 6 0 0 1 6 6v3a6 6 0 0 1-6 6h0a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"/></svg>GRAND FINAL</span>':'<span class="match-badge scheduled" style="border: 1px solid var(--gold); color: var(--gold);">GRAND FINAL</span>'):n.stage==="Bronze Match"?(u="border-glow-bronze bg-bronze-gradient",v=o?'<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--bronze); color: #000;"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>BRONZE MATCH</span>':'<span class="match-badge scheduled" style="border: 1px solid var(--bronze); color: var(--bronze);">BRONZE MATCH</span>'):(u=o?"border-completed":"border-scheduled",v=o?'<span class="match-badge completed">FINAL</span>':'<span class="match-badge scheduled">SCHEDULED</span>');const x=n.category==="Men's Doubles",$=x?'<span class="badge bg-volt text-slate-950 font-bold text-2xs mr-2">MD</span>':'<span class="badge bg-cyan text-slate-950 font-bold text-2xs mr-2">XD</span>',w=this.state.teams.find(b=>b.name===n.team1),A=this.state.teams.find(b=>b.name===n.team2),M=w?`${w.player1} & ${w.player2}`:"",_=A?`${A.player1} & ${A.player2}`:"",E=x?"text-volt":"text-cyan",L=this.state.getScoreConfig(n.category,n.stage).setsToWin*2-1,k=o?n.sets:c?a.sets:[],C=o?n.score1:c?a.score1:"-",N=o?n.score2:c?a.score2:"-";let R="",D="";if((o||c)&&k&&k.length>0){const b=o&&n.winner===n.team1?`<span class="${E}" style="font-size: 0.55rem; width: 8px;">●</span>`:'<span style="width: 8px;"></span>',g=o&&n.winner===n.team2?`<span class="${E}" style="font-size: 0.55rem; width: 8px;">●</span>`:'<span style="width: 8px;"></span>';R+=b,D+=g,k.forEach(y=>{R+=`<span class="${y.t1>y.t2?E:"text-slate-400"}" style="width: 22px; display: inline-block; text-align: center;">${y.t1}</span>`,D+=`<span class="${y.t2>y.t1?E:"text-slate-400"}" style="width: 22px; display: inline-block; text-align: center;">${y.t2}</span>`});for(let y=k.length;y<L;y++)R+='<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>',D+='<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>'}else{R='<span style="width: 8px;"></span>',D='<span style="width: 8px;"></span>';for(let b=0;b<L;b++)R+='<span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>',D+='<span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>'}const f=this.admin.isAdmin||this.admin.isRef&&n.pitch===this.admin.refPitch;let h="";c?h=`
          <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800/80 gap-2">
            <button class="btn btn-xs btn-outline btn-spectate-match flex items-center gap-1" data-match-id="${n.id}">
              🔍 <span>Spectate</span>
            </button>
            ${f?`
              <button class="btn btn-xs btn-outline btn-join-match flex items-center gap-1" style="border-color: var(--volt); color: var(--volt);" data-match-id="${n.id}">
                Umpire <span>Join</span>
              </button>
            `:""}
          </div>
        `:o?h=this.admin.isAdmin?`
          <div class="flex justify-end mt-3 pt-2.5 border-t border-slate-800/80">
            <button class="btn btn-xs btn-outline btn-edit-match flex items-center gap-1" data-match-id="${n.id}">
              ✏️ <span>Edit Score</span>
            </button>
          </div>
        `:"":h=`
          <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800/80 gap-2">
            <div>
              <span class="text-5xs text-slate-500 font-bold uppercase tracking-wider">AWAITING</span>
            </div>
            <div class="flex gap-2">
              ${f?`
                <button class="btn btn-xs btn-outline btn-join-match flex items-center gap-1" style="border-color: var(--volt); color: var(--volt);" data-match-id="${n.id}">
                  🏸 <span>Umpire</span>
                </button>
              `:""}
              ${this.admin.isAdmin?`
                <button class="btn btn-xs btn-outline btn-edit-match flex items-center gap-1" data-match-id="${n.id}">
                  ✏️ <span>Direct</span>
                </button>
              `:""}
            </div>
          </div>
        `;const p=this.admin.isAdmin?"admin-card":"";return`
        <div class="match-card glass-panel rounded-lg p-4 border border-slate-700/50 flex flex-col justify-between hover-glowing ${u} ${p}">
          <div class="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <div class="flex items-center text-xs font-semibold text-slate-300">
              ${$}
              <span>${n.pitch} | ${n.time}</span>
            </div>
            ${v}
          </div>

          <!-- BWF Vertical Scoreboard Grid -->
          <div class="flex flex-col gap-2.5 mb-3">
            <!-- Team 1 Row -->
            <div class="flex items-center justify-between">
              <div class="flex flex-col min-w-0 pr-2">
                <span class="text-sm font-bold ${o&&n.winner===n.team1||c&&C>N?E:"text-slate-200"} truncate" title="${n.team1}">
                  ${n.team1}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${M||"TBD"}">${M||"TBD"}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: ${L*22+12}px; gap: 0.5rem; flex-shrink: 0;">
                ${R}
              </div>
            </div>
            
            <!-- Team 2 Row -->
            <div class="flex items-center justify-between">
              <div class="flex flex-col min-w-0 pr-2">
                <span class="text-sm font-bold ${o&&n.winner===n.team2||c&&N>C?E:"text-slate-200"} truncate" title="${n.team2}">
                  ${n.team2}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${_||"TBD"}">${_||"TBD"}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: ${L*22+12}px; gap: 0.5rem; flex-shrink: 0;">
                ${D}
              </div>
            </div>
          </div>

          <!-- Action Footer -->
          ${h}
        </div>
      `}).join("")}renderBracket(e){const s=u=>{const v=u==="Men's Doubles"?"MD":"XD";return{sf1:this.state.matches.find(x=>x.id===`SF1-${v}`),sf2:this.state.matches.find(x=>x.id===`SF2-${v}`),f:this.state.matches.find(x=>x.id===`F-${v}`),b:this.state.matches.find(x=>x.id===`B-${v}`)}},n=s("Men's Doubles"),a=s("Mixed's Doubles"),c=u=>{const v=this.state.calculateStandings(u),x=this.state.isGroupStageComplete(u);return v.map(($,w)=>{const A=w+1,M=A<=4,_=A===1?"gold":A===2?"silver":A===3?"bronze":"",E=A===1?"🥇 Seed 1":A===2?"🥈 Seed 2":A===3?"🥉 Seed 3":A===4?"🎫 Seed 4":"❌ Out",I=M?"text-emerald-400":"text-slate-500";return`
          <div class="flex items-center justify-between text-4xs border-b border-slate-800/40 pb-1.5 last:border-b-0 last:pb-0" style="padding: 0.2rem 0;" data-team-name="${$.name}">
            <div class="flex items-center gap-1.5 truncate max-w-[125px]" title="${$.name}">
              <span class="rank-circle font-bold ${_}" style="width: 18px; height: 18px; font-size: 0.55rem; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center;">${A}</span>
              <span class="font-bold text-slate-200 truncate">${$.name}</span>
            </div>
            ${x?`<span class="font-extrabold ${I}" style="font-size: 0.55rem; flex-shrink: 0;">${E}</span>`:""}
          </div>
        `}).join("")},o=(u,v,x,$)=>{const w=this.getAwardResults($),A=M=>{if(!M)return'<div class="bracket-node empty">N/A</div>';const _=M.status==="Completed",E=M.team1&&(M.team1.includes("Place")||M.team1.includes("Winner")||M.team1.includes("Loser"))||M.team2&&(M.team2.includes("Place")||M.team2.includes("Winner")||M.team2.includes("Loser")),I=this.admin.isAdmin?E?'<span title="Cannot edit score yet" style="opacity: 0.3; cursor: not-allowed; font-size: 0.65rem;">🔒</span>':`<button class="btn-edit-node-score btn-edit-match" data-match-id="${M.id}">✏️</button>`:"",L=this.state.teams.find(g=>g.name===M.team1),k=this.state.teams.find(g=>g.name===M.team2),C=L?`${L.player1} & ${L.player2}`:"",N=k?`${k.player1} & ${k.player2}`:"",D=this.state.getScoreConfig(M.category,M.stage).setsToWin*2-1,f=x?"text-volt":"text-cyan";let h="",p="";if(_&&M.sets&&M.sets.length>0){const g=M.winner===M.team1?`<span class="${f}" style="font-size: 0.45rem; width: 6px;">●</span>`:'<span style="width: 6px;"></span>',y=M.winner===M.team2?`<span class="${f}" style="font-size: 0.45rem; width: 6px;">●</span>`:'<span style="width: 6px;"></span>';h+=g,p+=y,M.sets.forEach(m=>{h+=`<span class="${m.t1>m.t2?f:"text-slate-400"}" style="width: 16px; display: inline-block; text-align: center;">${m.t1}</span>`,p+=`<span class="${m.t2>m.t1?f:"text-slate-400"}" style="width: 16px; display: inline-block; text-align: center;">${m.t2}</span>`});for(let m=M.sets.length;m<D;m++)h+='<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>',p+='<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>'}else{h='<span style="width: 6px;"></span>',p='<span style="width: 8px;"></span>';for(let g=0;g<D;g++)h+='<span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>',p+='<span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>'}const b=_?'<div class="node-footer text-4xs text-emerald-400 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">✓ Finished</div>':`<div class="node-footer text-4xs text-slate-500 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">🕒 ${M.time}</div>`;return`
          <div class="bracket-node glass-panel border border-slate-700/60 rounded ${_?"completed":""}">
            <div class="node-header flex items-center justify-between text-4xs text-muted mb-1.5 pb-1 border-b border-slate-800">
              <span>${M.pitch} | ${M.stage}</span>
              ${I}
            </div>
            
            <div class="flex flex-col gap-1.5">
              <!-- Team 1 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${_&&M.winner===M.team1?f:"text-slate-300"}" data-team-name="${M.team1}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${M.team1}">${M.team1}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${C||"TBD"}">${C||"TBD"}</span>
                </div>
                <div class="flex items-center justify-end font-mono text-4xs font-bold" style="width: ${D*16+10}px; gap: 0.35rem; flex-shrink: 0;">
                  ${h}
                </div>
              </div>
              
              <!-- Team 2 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${_&&M.winner===M.team2?f:"text-slate-300"}" data-team-name="${M.team2}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${M.team2}">${M.team2}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${N||"TBD"}">${N||"TBD"}</span>
                </div>
                <div class="flex items-center justify-end font-mono text-4xs font-bold" style="width: ${D*16+10}px; gap: 0.35rem; flex-shrink: 0;">
                  ${p}
                </div>
              </div>
            </div>
            
            ${b}
          </div>
        `};return`
        <div class="glass-card mb-8">
          <h3 class="font-bold border-b border-slate-700/50 pb-3 mb-6 flex items-center gap-2">
            <span>🏟️</span>
            <span class="${x?"text-volt":"text-cyan"}">${v} Bracket</span>
          </h3>

          <div class="bracket-visualizer">
            <!-- Group Standings Column -->
            <div class="bracket-col flex flex-col justify-center" style="width: 190px;">
              <div class="node-label mb-2 text-center" style="letter-spacing: 0.05em;">📊 GROUP STANDINGS</div>
              <div class="glass-panel p-2.5 rounded border border-slate-700/40 flex flex-col gap-1" style="background: rgba(15, 23, 42, 0.45);">
                ${c($)}
              </div>
              <div class="text-4xs text-muted text-center mt-2.5 font-semibold leading-relaxed">
                💡 Top 4 teams advance to<br>playoff bracket stage
              </div>
            </div>

            <!-- Connectors Column 0 -->
            <div class="bracket-connectors flex flex-col justify-around py-4">
              <div class="connector-fork" style="height: 100%; border: none; display: flex; flex-direction: column; justify-content: space-around;">
                <div class="connector-line horizontal" style="opacity: 0.35;"></div>
                <div class="connector-line horizontal" style="opacity: 0.35;"></div>
              </div>
            </div>

            <!-- Semifinals Column -->
            <div class="bracket-col">
              <div class="bracket-group">
                <div class="node-label">SEMI FINAL 1</div>
                ${A(u.sf1)}
              </div>
              <div class="bracket-group">
                <div class="node-label">SEMI FINAL 2</div>
                ${A(u.sf2)}
              </div>
            </div>

            <!-- Connectors Column 1 -->
            <div class="bracket-connectors flex flex-col justify-around py-4">
              <div class="connector-fork">
                <div class="connector-line horizontal"></div>
                <div class="connector-line vertical height-half"></div>
              </div>
              <div class="connector-fork mt-8">
                <div class="connector-line horizontal"></div>
                <div class="connector-line vertical height-half"></div>
              </div>
            </div>

            <!-- Finals Column -->
            <div class="bracket-col flex flex-col justify-around">
              <div class="bracket-group">
                <div class="node-label text-gold font-bold">🏆 GRAND CHAMPIONSHIP</div>
                ${A(u.f)}
              </div>
              
              <div class="bracket-group mt-6">
                <div class="node-label text-bronze font-bold">🥉 THIRD-PLACE MATCH</div>
                ${A(u.b)}
              </div>
            </div>

            <!-- Connectors Column 2 -->
            <div class="bracket-connectors flex flex-col justify-around py-4">
              <div class="connector-fork">
                <div class="connector-line horizontal" style="opacity: 0.35;"></div>
              </div>
              <div class="connector-fork mt-8">
                <div class="connector-line horizontal" style="opacity: 0.35;"></div>
              </div>
            </div>

            <!-- Bảng Vàng / Podium Column -->
            <div class="bracket-col flex flex-col justify-center" style="width: 190px; gap: 0.75rem;">
              <div class="node-label mb-2 text-center text-gold font-bold" style="letter-spacing: 0.05em;">🏆 FINAL RESULTS</div>
              
              <!-- Gold Node -->
              <div class="bracket-node glass-panel border border-amber-500/35 rounded hover-glowing" style="background: rgba(245, 158, 11, 0.03); padding: 0.5rem 0.65rem;" data-team-name="${w.goldTeam.name}">
                <div class="flex items-center gap-1.5 font-extrabold text-3xs text-amber-400">
                  <span>🥇</span>
                  <span>CHAMPION</span>
                </div>
                <div class="font-extrabold text-xs text-slate-100 truncate mt-1" title="${w.goldTeam.name}">${w.goldTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${w.goldTeam.players}">${w.goldTeam.players}</div>
              </div>

              <!-- Silver Node -->
              <div class="bracket-node glass-panel border border-slate-400/30 rounded hover-glowing" style="background: rgba(148, 163, 184, 0.02); padding: 0.5rem 0.65rem;" data-team-name="${w.silverTeam.name}">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-slate-300">
                  <span>🥈</span>
                  <span>RUNNER-UP</span>
                </div>
                <div class="font-bold text-xs text-slate-200 truncate mt-1" title="${w.silverTeam.name}">${w.silverTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${w.silverTeam.players}">${w.silverTeam.players}</div>
              </div>

              <!-- Bronze Node -->
              <div class="bracket-node glass-panel border border-amber-700/30 rounded hover-glowing" style="background: rgba(217, 119, 6, 0.01); padding: 0.5rem 0.65rem;" data-team-name="${w.bronzeTeam.name}">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-amber-600">
                  <span>🥉</span>
                  <span>3RD PLACE</span>
                </div>
                <div class="font-semibold text-xs text-slate-200 truncate mt-1" title="${w.bronzeTeam.name}">${w.bronzeTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${w.bronzeTeam.players}">${w.bronzeTeam.players}</div>
              </div>

              <!-- 4th Place Node -->
              <div class="bracket-node glass-panel border border-slate-600/30 rounded hover-glowing" style="background: rgba(148, 163, 184, 0.01); padding: 0.5rem 0.65rem;" data-team-name="${w.fourthTeam.name}">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-slate-400">
                  <span>🏅</span>
                  <span>4TH PLACE</span>
                </div>
                <div class="font-semibold text-xs text-slate-200 truncate mt-1" title="${w.fourthTeam.name}">${w.fourthTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${w.fourthTeam.players}">${w.fourthTeam.players}</div>
              </div>
            </div>
          </div>
        </div>
      `};e.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">🌳 Playoff Tournament Tree</h2>
        <p class="view-subtitle">Automatic calculated tournament brackets and playoff trees</p>
      </div>

      ${o(n,"Men's Doubles",!0,"Men's Doubles")}
      ${o(a,"Mixed's Doubles",!1,"Mixed's Doubles")}
    `,setTimeout(()=>this.setupBracketHighlights(),50)}setupBracketHighlights(){const e=document.querySelectorAll(".bracket-visualizer");e.length!==0&&e.forEach(s=>{s.addEventListener("mouseover",n=>{const a=n.target.closest("[data-team-name]");if(!a)return;const c=a.getAttribute("data-team-name");if(!c||c.includes("Winner")||c.includes("Loser")||c.includes("Place"))return;document.querySelectorAll(`[data-team-name="${CSS.escape(c)}"]`).forEach(u=>{u.classList.add("team-highlight-active");const v=u.closest(".bracket-node");v&&v.classList.add("node-highlight-active")})}),s.addEventListener("mouseout",n=>{const a=n.target.closest("[data-team-name]");if(!a||!a.getAttribute("data-team-name"))return;document.querySelectorAll("[data-team-name]").forEach(u=>{u.classList.remove("team-highlight-active");const v=u.closest(".bracket-node");v&&v.classList.remove("node-highlight-active")})})})}getAwardResults(e){const s=e==="Men's Doubles"?"MD":"XD",n=this.state.matches.find($=>$.id===`F-${s}`),a=this.state.matches.find($=>$.id===`B-${s}`);let c={name:"TBD",players:"Championship Winner",confirmed:!1},o={name:"TBD",players:"Championship Runner-up",confirmed:!1},u={name:"TBD",players:"Bronze Winner",confirmed:!1},v={name:"TBD",players:"Bronze Runner-up",confirmed:!1};const x=$=>{if(!$)return"";const w=this.state.teams.find(A=>A.name===$);return w?`${w.player1} & ${w.player2}`:""};if(n)if(n.status==="Completed"){const $=n.winner,w=n.winner===n.team1?n.team2:n.team1;c={name:$,players:x($),confirmed:!0},o={name:w,players:x(w),confirmed:!0}}else n.team1.includes("Winner")||n.team2.includes("Winner")||(c={name:"Grand Finalists",players:`${n.team1} vs ${n.team2}`,confirmed:!1},o={name:"Chasing Runner-up",players:"Runner-up of Grand Final",confirmed:!1});if(a)if(a.status==="Completed"){const $=a.winner,w=a.winner===a.team1?a.team2:a.team1;u={name:$,players:x($),confirmed:!0},v={name:w,players:x(w),confirmed:!0}}else a.team1.includes("Loser")||a.team2.includes("Loser")||(u={name:"Bronze Contenders",players:`${a.team1} vs ${a.team2}`,confirmed:!1});return{goldTeam:c,silverTeam:o,bronzeTeam:u,fourthTeam:v}}renderResults(e){const s=this.getAwardResults("Men's Doubles"),n=this.getAwardResults("Mixed's Doubles"),a=(o,u,v)=>{const x=o.goldTeam.confirmed||o.silverTeam.confirmed||o.bronzeTeam.confirmed,$=(f,h=48,p="")=>{let b="";if(p==="gold"?b=`
            <div class="podium-medal-badge gold" title="Gold Medal - Champion" style="font-size: 16px; line-height: 1;">
              🥇
            </div>
          `:p==="silver"?b=`
            <div class="podium-medal-badge silver" title="Silver Medal - Runner-up" style="font-size: 16px; line-height: 1;">
              🥈
            </div>
          `:p==="bronze"?b=`
            <div class="podium-medal-badge bronze" title="Bronze Medal - 3rd Place" style="font-size: 16px; line-height: 1;">
              🥉
            </div>
          `:p==="fourth"&&(b=`
            <div class="podium-medal-badge fourth" title="Honorable Mention - 4th Place" style="font-size: 16px; line-height: 1;">
              🎖️
            </div>
          `),!f||f.includes("TBD")||f.includes("Place")||f.includes("Winner")||f.includes("Loser")||f.includes("Chasing")||f.includes("Tranh")||f.includes("Chung"))return`
            <div class="podium-avatar flex items-center justify-center font-bold text-slate-400 bg-slate-800/85 mx-auto" style="width: ${h}px; height: ${h}px; font-size: ${h*.4}px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); border-radius: 50% !important; position: relative;">
              👥
              ${b}
            </div>
          `;const g=this.state.teams.find(y=>y.name===f);return g?`
          <div class="podium-avatar-wrapper mx-auto" style="width: ${h}px; height: ${h}px; position: relative; flex-shrink: 0; border-radius: 50% !important;">
            <img src="/teams/${g.id}.jpg" 
                 onerror="this.onerror=null; this.src='/teams/${g.id}.png'; this.onerror=function(){this.style.display='none'; this.nextElementSibling.style.display='flex';};" 
                 class="podium-avatar object-cover" 
                 style="width: 100%; height: 100%; display: block; border-radius: 50% !important; box-shadow: 0 4px 10px rgba(0,0,0,0.4);" />
            <div class="team-fallback-avatar flex items-center justify-center font-bold text-slate-400 bg-slate-800" 
                 style="display:none; width: 100%; height: 100%; border-radius: 50% !important; font-size: ${h*.4}px;">👥</div>
            ${b}
          </div>
        `:`
            <div class="podium-avatar flex items-center justify-center font-bold text-slate-400 bg-slate-800/85 mx-auto" style="width: ${h}px; height: ${h}px; font-size: ${h*.4}px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); border-radius: 50% !important; position: relative;">
              👥
              ${b}
            </div>
          `},w=this.state.teams.find(f=>f.name===o.silverTeam.name),A=w?w.id:"",M=A?"clickable-podium":"",_=this.state.teams.find(f=>f.name===o.goldTeam.name),E=_?_.id:"",I=E?"clickable-podium":"",L=this.state.teams.find(f=>f.name===o.bronzeTeam.name),k=L?L.id:"",C=k?"clickable-podium":"",N=this.state.teams.find(f=>f.name===o.fourthTeam.name),R=N?N.id:"",D=R?"clickable-podium":"";return`
        <div class="glass-card mb-8 text-center relative overflow-hidden" style="padding: 1.5rem 1rem;">
          <div class="absolute top-0 left-0 w-full h-[3px] ${v?"bg-gradient-to-r from-lime-500 via-lime-400 to-lime-600":"bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-600"}"></div>
          <h3 class="font-bold mb-2 flex items-center justify-center gap-2 ${v?"text-volt":"text-cyan"} text-glow-volt">
            <span>🏆</span>
            <span>${u}</span>
          </h3>
          <p class="text-xs text-muted mb-4">
            ${x?"⚡ Official championship matches completed":"⏳ Waiting for championship finals to complete"}
          </p>
 
          <div class="podium-stage-container">
            <!-- Silver (#2) -->
            <div class="podium-column silver ${M}" data-team-id="${A}" data-category="${u}">
              <div class="h-6 md:h-8 mb-1.5 flex-shrink-0"></div>
              <div class="podium-avatar-halo">
                ${$(o.silverTeam.name,56,"silver")}
              </div>
              <div class="text-center w-full px-1 mb-2.5 flex-1 flex flex-col justify-end">
                <div class="font-extrabold text-[11px] md:text-sm text-slate-100 break-words leading-snug" title="${o.silverTeam.name}">${o.silverTeam.name}</div>
                <div class="text-[9px] md:text-xs text-slate-400 font-medium break-words mt-0.5 leading-snug" title="${o.silverTeam.players}">${o.silverTeam.players}</div>
              </div>
              <div class="podium-pedestal-block">
                <span class="podium-number">2</span>
                <span class="podium-badge">Runner-up</span>
              </div>
            </div>

            <!-- Gold (#1) -->
            <div class="podium-column gold ${I}" data-team-id="${E}" data-category="${u}">
              <div class="crown-icon text-2xl md:text-3xl animate-bounce-slow mb-1 flex-shrink-0" style="filter: drop-shadow(0 0 8px rgba(245,158,11,0.6));">👑</div>
              <div class="podium-avatar-halo">
                ${$(o.goldTeam.name,68,"gold")}
              </div>
              <div class="text-center w-full px-1 mb-2.5 flex-1 flex flex-col justify-end">
                <div class="font-black text-xs md:text-base text-slate-100 break-words leading-snug" title="${o.goldTeam.name}">${o.goldTeam.name}</div>
                <div class="text-[9px] md:text-xs text-slate-400 font-medium break-words mt-0.5 leading-snug" title="${o.goldTeam.players}">${o.goldTeam.players}</div>
              </div>
              <div class="podium-pedestal-block">
                <span class="podium-number">1</span>
                <span class="podium-badge">Champion</span>
              </div>
            </div>

            <!-- Bronze (#3) -->
            <div class="podium-column bronze ${C}" data-team-id="${k}" data-category="${u}">
              <div class="h-6 md:h-8 mb-1.5 flex-shrink-0"></div>
              <div class="podium-avatar-halo">
                ${$(o.bronzeTeam.name,56,"bronze")}
              </div>
              <div class="text-center w-full px-1 mb-2.5 flex-1 flex flex-col justify-end">
                <div class="font-extrabold text-[11px] md:text-sm text-slate-100 break-words leading-snug" title="${o.bronzeTeam.name}">${o.bronzeTeam.name}</div>
                <div class="text-[9px] md:text-xs text-slate-400 font-medium break-words mt-0.5 leading-snug" title="${o.bronzeTeam.players}">${o.bronzeTeam.players}</div>
              </div>
              <div class="podium-pedestal-block">
                <span class="podium-number">3</span>
                <span class="podium-badge">3rd Place</span>
              </div>
            </div>
          </div>
 
          <!-- Fourth Place premium card -->
          <div class="podium-fourth-card ${D}" data-team-id="${R}" data-category="${u}">
            <div class="flex items-center gap-3 min-w-0 flex-1">
              <div class="podium-fourth-rank">
                4
              </div>
              ${$(o.fourthTeam.name,36,"fourth")}
              <div class="min-w-0 flex-1 text-left">
                <div class="font-extrabold text-xs text-slate-200 truncate" title="${o.fourthTeam.name}">${o.fourthTeam.name}</div>
                <div class="text-[10px] text-slate-500 font-medium truncate mt-0.5" title="${o.fourthTeam.players}">${o.fourthTeam.players}</div>
              </div>
            </div>
            <div class="flex-shrink-0">
              <span class="podium-fourth-badge">🎖️ Honorable Mention</span>
            </div>
          </div>
        </div>
      `};e.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">🏆 Championship Wall of Fame</h2>
        <p class="view-subtitle">Honoring the champions and premium standings of the season</p>
      </div>
 
      ${a(s,"Men's Doubles",!0)}
      ${a(n,"Mixed's Doubles",!1)}
    `,e.querySelectorAll(".clickable-podium").forEach(o=>{o.addEventListener("click",()=>{const u=o.getAttribute("data-team-id"),v=o.getAttribute("data-category");u&&v&&this.showTeamDetailsModal(u,v)})}),setTimeout(()=>{this.activeTab==="results"&&this.confetti&&this.confetti.start()},150)}renderRules(e){const s=Dn.en,n=s.sections.map(a=>{const c=a.content.map(o=>{let u=o.replace(/\*\*(.*?)\*\*/g,'<strong class="text-slate-100">$1</strong>');return u=u.replace(/\\rightarrow/g," ➔ "),u=u.replace(/\$(.*?)\$/g,'<code class="bg-slate-900 px-1 py-0.5 rounded text-volt font-bold">$1</code>'),`<p class="mb-2 text-slate-300 leading-relaxed text-sm">${u}</p>`}).join("");return`
        <div class="rules-section glass-panel border border-slate-700/40 p-4 rounded-lg hover-glowing mb-4">
          <h3 class="text-volt font-bold border-b border-slate-800 pb-2 mb-3 text-sm">${a.title}</h3>
          <div>${c}</div>
        </div>
      `}).join("");e.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">📘 Rules & Regulations</h2>
        <p class="view-subtitle">Official tournament handbook and dynamic doubles service simulator</p>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <!-- Interactive Simulator Widget (Grid span 5) -->
        <div class="lg:col-span-5" id="court-sim-container">
          <!-- Will be loaded dynamically via CourtSimulator -->
        </div>

        <!-- Rules Handbook (Grid span 7) -->
        <div class="lg:col-span-7 flex flex-col gap-2">
          <div class="glass-card flex-1">
            <h3 class="m-0 mb-1 font-bold text-glow-cyan text-base">${s.title}</h3>
            <p class="text-xs text-muted mb-4 border-b border-slate-800 pb-2">${s.subtitle}</p>
            
            <div class="rules-scroll-area pr-2">
              ${n}
            </div>
          </div>
        </div>
      </div>
    `}renderTeams(e){const s=(o,u)=>{const v=u==="Men's Doubles",x=v?"text-volt":"text-cyan",$=o.map(w=>{const A=this.getTeamStats(w.name,u),M=this.getTeamRank(w.name,u),_=A.completedMatches.map(I=>{const L=I.winner===w.name,k=L?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-rose-500/10 text-rose-400 border border-rose-500/20",C=L?"W":"L",N=`${I.stage}: ${I.team1} vs ${I.team2} (${I.score1}-${I.score2})`;return`<span class="flex items-center justify-center rounded-full font-bold font-mono text-5xs cursor-help ${k}" style="width: 14px; height: 14px; font-size: 0.45rem;" title="${N}">${C}</span>`}).join(""),E=_.length>0?_:'<span class="text-slate-500 text-5xs italic font-sans">No matches</span>';return`
          <div class="team-profile-card ${v?"team-card-md":"team-card-xd"} glass-panel border border-slate-700/50 rounded-lg hover-glowing flex flex-col justify-between overflow-hidden relative"
               style="background: radial-gradient(circle at top right, ${v?"rgba(163, 230, 53, 0.05)":"rgba(34, 211, 238, 0.05)"} 0%, rgba(15, 22, 42, 0.45) 80%); cursor: pointer;"
               data-team-id="${w.id}" data-category="${u}">
            
            <!-- Team Color Banner -->
            <div class="team-card-banner w-full" style="height: 52px; background: linear-gradient(135deg, ${v?"rgba(163, 230, 53, 0.15)":"rgba(34, 211, 238, 0.15)"} 0%, rgba(15, 22, 42, 0.6) 100%); border-b: 1px solid rgba(255, 255, 255, 0.04);"></div>

            <!-- Team Image Circular Avatar overlapping banner -->
            <div class="team-card-avatar-wrapper">
              <div class="team-card-avatar-inner" style="box-shadow: 0 4px 10px rgba(0,0,0,0.5), 0 0 15px ${v?"rgba(163, 230, 53, 0.2)":"rgba(34, 211, 238, 0.2)"};">
                <img src="/teams/${w.id}.jpg" 
                     onerror="this.onerror=null; this.src='/teams/${w.id}.png'; this.onerror=function(){ this.style.display='none'; this.parentNode.querySelector('.team-avatar-placeholder').style.display='flex'; }" 
                     class="team-card-img" />
                <div class="team-avatar-placeholder" style="display: none;">
                  <span>👥</span>
                </div>
              </div>
            </div>

            <div class="team-card-body">
              <div>

                <div class="flex justify-between items-start gap-2 mb-3 border-b border-slate-800 pb-2">
                  <div class="flex flex-wrap break-words min-w-0 flex-1">
                    <span class="font-extrabold text-sm text-slate-100 break-words pr-1" title="${w.name}">${w.name}</span>
                  </div>
                  <div class="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
                    <span class="badge bg-slate-800/80 text-slate-300 font-extrabold text-5xs border border-slate-700/50">#${M}</span>
                    <span class="badge ${v?"bg-volt":"bg-cyan"} text-slate-950 font-bold text-4xs">TEAM</span>
                  </div>
                </div>

                <!-- Members -->
                <div class="flex flex-col gap-1.5 mb-4 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="text-slate-500">🏸</span>
                    <span class="font-semibold text-slate-300">${w.player1}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-slate-500">🏸</span>
                    <span class="font-semibold text-slate-300">${w.player2}</span>
                  </div>
                  
                  <!-- Form guide -->
                  <div class="flex items-center gap-1.5 mt-2 pt-2 border-t border-slate-800/40">
                    <span class="text-5xs font-bold uppercase tracking-wider text-slate-500">FORM:</span>
                    <div class="flex items-center gap-1">
                      ${E}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Stats -->
              <div class="bg-slate-950/60 p-3 rounded border border-slate-900 text-4xs">
                <!-- Summary row -->
                <div class="grid grid-cols-4 gap-1 text-center font-semibold text-slate-400 mb-3 border-b border-slate-900 pb-2">
                  <div>
                    <div class="text-2xs font-extrabold text-slate-200">${A.played}</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">Pld</div>
                  </div>
                  <div>
                    <div class="text-2xs font-extrabold ${v?"text-volt":"text-cyan"}">${A.wins}</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">Won</div>
                  </div>
                  <div>
                    <div class="text-2xs font-extrabold ${A.losses>0?"text-rose-400":"text-slate-400"}">${A.losses}</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">Lost</div>
                  </div>
                  <div>
                    <div class="text-2xs font-extrabold text-slate-200">${A.winPercent}%</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">Win%</div>
                  </div>
                </div>

                <!-- Telemetry detail list -->
                <div class="flex flex-col gap-1.5 font-mono">
                  <div class="flex items-center justify-between text-slate-400">
                    <span>Standing Pts:</span>
                    <span class="font-extrabold text-slate-200">${A.pts}</span>
                  </div>
                  <div class="flex items-center justify-between text-slate-400">
                    <span>Sets W/L:</span>
                    <div class="flex items-center gap-1.5">
                      <span class="text-slate-200">${A.setsWon}-${A.setsLost}</span>
                      <span class="text-5xs font-bold px-1 py-0.5 rounded ${A.netSets>0?"bg-emerald-500/10 text-emerald-400":A.netSets<0?"bg-rose-500/10 text-rose-400":"bg-slate-800 text-slate-400"}">
                        ${A.netSets>0?"+":""}${A.netSets}
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center justify-between text-slate-400">
                    <span>Points W/L:</span>
                    <div class="flex items-center gap-1.5">
                      <span class="text-slate-200">${A.pointsWon}-${A.pointsLost}</span>
                      <span class="text-5xs font-bold px-1 py-0.5 rounded ${A.netPoints>0?"bg-emerald-500/10 text-emerald-400":A.netPoints<0?"bg-rose-500/10 text-rose-400":"bg-slate-800 text-slate-400"}">
                        ${A.netPoints>0?"+":""}${A.netPoints}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        `}).join("");return`
        <div class="glass-card mb-6">
          <h3 class="font-bold border-b border-slate-700/50 pb-2 mb-4 flex items-center gap-2">
            <span class="${x}">${v?"💎":"🔮"}</span>
            <span class="${x}">${u} (${o.length} Teams)</span>
          </h3>
          <div class="team-cards-grid">
            ${$}
          </div>
        </div>
      `},n=this.state.teams.filter(o=>o.category==="Men's Doubles").sort((o,u)=>{const v=this.getTeamRank(o.name,"Men's Doubles"),x=this.getTeamRank(u.name,"Men's Doubles");return(typeof v=="number"?v:99)-(typeof x=="number"?x:99)}),a=this.state.teams.filter(o=>o.category==="Mixed's Doubles").sort((o,u)=>{const v=this.getTeamRank(o.name,"Mixed's Doubles"),x=this.getTeamRank(u.name,"Mixed's Doubles");return(typeof v=="number"?v:99)-(typeof x=="number"?x:99)});e.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">👥 Registered Teams & Members</h2>
        <p class="view-subtitle">Browse player profiles and team group statistics</p>
      </div>

      <!-- Teams lists -->
      ${s(n,"Men's Doubles")}
      ${s(a,"Mixed's Doubles")}
    `,e.querySelectorAll(".team-profile-card").forEach(o=>{o.addEventListener("click",()=>{const u=o.getAttribute("data-team-id"),v=o.getAttribute("data-category");this.showTeamDetailsModal(u,v)})})}showTeamDetailsModal(e,s){const n=this.state.teams.find(p=>p.id===e);if(!n)return;const a=s==="Men's Doubles",c=this.getTeamStats(n.name,s),o=this.getTeamRank(n.name,s),u=c.played,v=c.wins,x=c.losses,$=c.pts,w=c.setsWon,A=c.setsLost,M=c.netSets,_=c.pointsWon,E=c.pointsLost,I=c.netPoints,L=c.winPercent,k=c.completedMatches.map(p=>{const b=p.winner===n.name,g=b?"win":"loss",y=b?"W":"L",m=`${p.stage}: ${p.team1} vs ${p.team2} (${p.score1}-${p.score2})`;return`<span class="team-modal-form-pill ${g}" title="${m}">${y}</span>`}).join(""),C=k.length>0?k:'<span class="text-slate-500 text-5xs italic">No matches played</span>',N=document.createElement("div");N.className="team-modal-backdrop",N.id="team-profile-modal-backdrop";const R=o===1?'<div class="team-modal-rank-badge rank-1">🥇 Rank #1</div>':o===2?'<div class="team-modal-rank-badge rank-2">🥈 Rank #2</div>':o===3?'<div class="team-modal-rank-badge rank-3">🥉 Rank #3</div>':`<div class="team-modal-rank-badge rank-other">Rank #${o}</div>`,D=a?"volt":"cyan";N.innerHTML=`
      <div class="team-modal-card">
        <!-- Close Button -->
        <button class="team-modal-close-btn" id="modal-team-close-btn">
          &times;
        </button>

        <!-- Cover Photo with Integrated Header -->
        <div class="team-modal-cover">
          ${R}
          <img src="/teams/${n.id}.jpg" 
               onerror="this.onerror=null; this.src='/teams/${n.id}.png'; this.onerror=function(){ this.style.display='none'; this.parentNode.querySelector('.team-modal-cover-placeholder').style.display='flex'; }" />
          <div class="team-modal-cover-placeholder" style="display: none;">
            👥
          </div>
          
          <!-- Spotlight Gradient overlay for rich contrast -->
          <div class="team-modal-spotlight"></div>
          
          <!-- Team Header Content -->
          <div class="team-modal-header-content">
            <div class="flex items-center gap-1">
              <span class="team-modal-cat-tag ${D}">${s}</span>
              <span class="team-modal-id-tag">ID: ${n.id}</span>
            </div>
            <h3 class="team-modal-name">${n.name}</h3>
          </div>
        </div>

        <!-- Team Profile Body -->
        <div class="team-modal-body">
          
          <!-- Players Grid -->
          <div class="team-modal-players-grid">
            <div class="team-modal-player-card">
              <div class="team-modal-player-icon ${D}">🏸</div>
              <div class="team-modal-player-info">
                <div class="team-modal-player-role">Player 1</div>
                <div class="team-modal-player-name" title="${n.player1}">${n.player1}</div>
              </div>
            </div>
            <div class="team-modal-player-card">
              <div class="team-modal-player-icon ${D}">🏸</div>
              <div class="team-modal-player-info">
                <div class="team-modal-player-role">Player 2</div>
                <div class="team-modal-player-name" title="${n.player2}">${n.player2}</div>
              </div>
            </div>
          </div>

          <!-- Aligned capsule Match summary bar -->
          <div class="team-modal-summary-bar">
            <div class="team-modal-summary-item">
              <div class="team-modal-summary-label">Played</div>
              <div class="team-modal-summary-value">${u}</div>
            </div>
            <div class="team-modal-summary-divider"></div>
            <div class="team-modal-summary-item">
              <div class="team-modal-summary-label won">Won</div>
              <div class="team-modal-summary-value won">${v}</div>
            </div>
            <div class="team-modal-summary-divider"></div>
            <div class="team-modal-summary-item">
              <div class="team-modal-summary-label lost">Lost</div>
              <div class="team-modal-summary-value lost">${x}</div>
            </div>
          </div>

          <!-- Esports Telemetry Grid -->
          <div class="team-modal-telemetry-grid">
            <!-- Standing Points -->
            <div class="team-modal-telemetry-card">
              <div class="team-modal-telemetry-header">
                <span class="team-modal-telemetry-icon">🏆</span>
                <span class="team-modal-telemetry-label">Standing Points</span>
              </div>
              <div class="team-modal-telemetry-value-row">
                <span class="team-modal-telemetry-value">${$}</span>
                <span class="team-modal-telemetry-unit">pts</span>
              </div>
            </div>
            
            <!-- Win Rate -->
            <div class="team-modal-telemetry-card">
              <div class="team-modal-telemetry-header">
                <span class="team-modal-telemetry-icon">📈</span>
                <span class="team-modal-telemetry-label">Win Rate</span>
              </div>
              <div class="team-modal-telemetry-value-row">
                <span class="team-modal-telemetry-value">${L}</span>
                <span class="team-modal-telemetry-unit">%</span>
              </div>
              <div class="team-modal-progress-track">
                <div class="team-modal-progress-bar ${D}" style="width: ${L}%;"></div>
              </div>
            </div>

            <!-- Sets Diff -->
            <div class="team-modal-telemetry-card">
              <div class="team-modal-telemetry-header">
                <span class="team-modal-telemetry-icon">🎾</span>
                <span class="team-modal-telemetry-label">Sets Diff</span>
              </div>
              <div class="team-modal-telemetry-value-row">
                <span class="team-modal-telemetry-value" style="font-size: 1.25rem;">${w}-${A}</span>
                <span class="team-modal-diff-badge ${M>0?"positive":M<0?"negative":"neutral"}">
                  ${M>0?"+":""}${M}
                </span>
              </div>
            </div>

            <!-- Points Diff -->
            <div class="team-modal-telemetry-card">
              <div class="team-modal-telemetry-header">
                <span class="team-modal-telemetry-icon">🎯</span>
                <span class="team-modal-telemetry-label">Points Diff</span>
              </div>
              <div class="team-modal-telemetry-value-row">
                <span class="team-modal-telemetry-value" style="font-size: 1.25rem;">${_}-${E}</span>
                <span class="team-modal-diff-badge ${I>0?"positive":I<0?"negative":"neutral"}">
                  ${I>0?"+":""}${I}
                </span>
              </div>
            </div>
          </div>

          <!-- Form guide -->
          <div class="team-modal-form-row">
            <div class="team-modal-form-header">
              <span class="team-modal-telemetry-icon">📊</span>
              <span class="team-modal-form-label">Form Guide</span>
            </div>
            <div class="team-modal-form-list">
              ${C}
            </div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(N);const f=N.querySelector("#modal-team-close-btn"),h=()=>{N.classList.add("animate-fade-out"),setTimeout(()=>N.remove(),250)};f.addEventListener("click",h),N.addEventListener("click",p=>{p.target===N&&h()})}startCountdown(){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null);const e=new Date("May 31, 2026 13:30:00").getTime(),s=()=>{const n=document.getElementById("cd-days"),a=document.getElementById("cd-hours"),c=document.getElementById("cd-minutes"),o=document.getElementById("cd-seconds");if(!n){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null);return}const u=new Date().getTime(),v=e-u;if(v<0){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null),n.textContent="00",a.textContent="00",c.textContent="00",o.textContent="00";return}const x=Math.floor(v/(1e3*60*60*24)),$=Math.floor(v%(1e3*60*60*24)/(1e3*60*60)),w=Math.floor(v%(1e3*60*60)/(1e3*60)),A=Math.floor(v%(1e3*60)/1e3);n.textContent=x.toString().padStart(2,"0"),a.textContent=$.toString().padStart(2,"0"),c.textContent=w.toString().padStart(2,"0"),o.textContent=A.toString().padStart(2,"0")};s(),this.countdownTimer=setInterval(s,1e3)}handleSyncUpdate(e,s){if(this.renderActiveView(),this.activeSpectateMatchId&&s&&s.matchId===this.activeSpectateMatchId)if(e==="STATUS_UPDATE"&&!s.isLive){const n=this.state.matches.find(a=>a.id===s.matchId);if(n)this.showSpectatorMatchEndNotice(n);else{const a=document.getElementById("spectate-overlay-container");a&&(a.classList.add("hidden"),a.innerHTML=""),this.activeSpectateMatchId=null}}else this.renderSpectateOverlay(this.activeSpectateMatchId)}showSpectatorMatchEndNotice(e){const s=e.stage||"Group Stage";let n=e.team1;e.score2Sets>e.score1Sets&&(n=e.team2);let a="WIN THE MATCH!",c="MATCH COMPLETED",o=`🎉 Congratulations to **${n}** on winning this match! 🎉`,u="🏸",v="MATCH WINNER",x="#84cc16",$="rgba(132, 204, 22, 0.45)";s==="Semi-finals"?(a="CONGRATULATIONS ON WINNING!",c="QUALIFIED FOR THE FINALS",o=`⚡ Spectacular! **${n}** won the Semi-finals and officially qualified for the championship Grand Final! 🏆`,u="🏅",v="SEMI-FINALS WINNER",x="#06b6d4",$="rgba(6, 182, 212, 0.45)"):s==="Grand Final"?(a="TOURNAMENT CHAMPIONS!",c="GEAR GAMES BADMINTON 2026 CUP",o=`👑 CHAMPIONS! Huge congratulations to the ultimate champions of the Gear Games 2026 Badminton Tournament: **${n}**! A historic and well-deserved victory! 🏆🥇`,u="🏆",v="TOURNAMENT CHAMPIONS",x="#fbbf24",$="rgba(251, 191, 36, 0.5)"):s==="Bronze Match"&&(a="BRONZE MEDALISTS!",c="BRONZE MEDAL SECURED",o=`🥉 Superb! **${n}** won the Bronze Match and successfully claimed the prestigious **Bronze Medal**! 🥉`,u="🥉",v="BRONZE WINNER",x="#ea580c",$="rgba(234, 88, 12, 0.45)");const w=document.createElement("div");w.className="match-end-modal-backdrop relative",w.innerHTML=`
      <div class="match-end-modal-card glass-card text-center animate-scale-in relative overflow-hidden" style="max-width: 480px; width: 90%; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px ${$}; z-index: 2;">
        <div class="relative" style="z-index: 2;">
          <div class="trophy-icon-container mb-4 animate-bounce" style="font-size: 4.5rem; filter: drop-shadow(0 0 18px ${$}); line-height: 1;">
            ${u}
          </div>
          
          <h2 class="text-lg font-black mb-1" style="font-size: 1.5rem; color: ${x}; filter: drop-shadow(0 0 8px ${$});">${a}</h2>
          <p class="text-xs text-slate-400 mb-4 uppercase tracking-widest font-bold">${c}</p>
          
          <div class="bg-slate-950/60 rounded-xl p-4 border border-slate-900 mb-6">
            <span class="text-5xs uppercase font-extrabold text-slate-500 block mb-1.5">${v}</span>
            <span class="text-sm font-black text-white uppercase" style="font-size: 1.25rem; filter: drop-shadow(0 0 8px rgba(255,255,255,0.25));">${n}</span>
            
            <div class="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-slate-900/60">
              ${e.sets?e.sets.map((A,M)=>`
                <div class="bg-slate-900/80 px-2.5 py-1 rounded text-4xs font-bold text-slate-300">
                  S${M+1}: <span class="text-volt">${A.t1}</span>-<span class="text-cyan">${A.t2}</span>
                </div>
              `).join(""):""}
            </div>
          </div>

          <p class="text-xs text-slate-200 mb-6 font-semibold px-2" style="line-height: 1.6;">${o}</p>
          
          <button class="btn w-full py-3 font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2" id="spec-end-btn-home" style="font-size: 0.85rem; background-color: ${x}; color: #000; box-shadow: 0 4px 14px ${$}; border: none;">
            🏠 Back to Homepage
          </button>
        </div>
      </div>
    `,document.body.appendChild(w),document.getElementById("spec-end-btn-home").onclick=()=>{w.classList.add("animate-fade-out"),setTimeout(()=>{w.remove();const A=document.getElementById("spectate-overlay-container");A&&(A.classList.add("hidden"),A.innerHTML=""),this.activeSpectateMatchId=null,this.switchTab("dashboard")},300)}}renderLivePitches(){const e=["Pitch 15","Pitch 16","Pitch 20","Pitch 21"],s=this.sync.getLiveMatches();return e.map(n=>{const a=Object.keys(s).find(u=>{const v=this.state.matches.find(x=>x.id===u);return v&&v.pitch===n});if(a){const u=s[a],v=this.state.matches.find($=>$.id===a);v.category;const x=this.admin.isAdmin||this.admin.isRef&&v.pitch===this.admin.refPitch;return`
          <div class="live-pitch-card glass-panel border border-red-500/30 p-3 rounded-lg hover-glowing bg-red-950/5 flex flex-col justify-between">
            <div class="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2">
              <span class="font-extrabold text-volt text-4xs">${n}</span>
              <span class="badge bg-danger pulse-dot flex items-center gap-1 font-bold text-5xs">
                <span class="live-dot"></span> LIVE
              </span>
            </div>
            
            <div class="text-center py-1">
              <div class="text-4xs font-bold text-slate-400 mb-0.5 truncate" title="${v.team1}">${v.team1}</div>
              <div class="text-xs font-mono font-black text-slate-100 flex items-center justify-center gap-2">
                <span class="${u.servingTeam==="A"?"text-glow-volt":""}">${u.score1}</span>
                <span class="text-slate-600 text-3xs">vs</span>
                <span class="${u.servingTeam==="B"?"text-glow-cyan":""}">${u.score2}</span>
              </div>
              <div class="text-4xs font-bold text-slate-400 mt-0.5 truncate" title="${v.team2}">${v.team2}</div>
            </div>
            
            <div class="text-5xs text-center text-slate-500 font-semibold mb-2">
              Set ${u.currentSet} | serve: ${u.servingTeam==="A"?"T1":"T2"}
            </div>

            <div class="flex items-center gap-2 pt-2 border-t border-slate-800/80">
              <button class="btn btn-2xs btn-outline btn-spectate-match flex-1 font-bold" data-match-id="${v.id}">
                🔍 Spectate
              </button>
              ${x?`
                <button class="btn btn-2xs btn-outline btn-join-match font-bold" style="border-color: var(--volt); color: var(--volt);" data-match-id="${v.id}">
                  🏸 Ump
                </button>
              `:""}
            </div>
          </div>
        `}const c=this.state.matches.find(u=>u.pitch===n&&u.status==="Scheduled"),o=this.admin.isAdmin||this.admin.isRef&&n===this.admin.refPitch;return c?`
          <div class="live-pitch-card glass-panel border border-slate-800 p-3 rounded-lg flex flex-col justify-between" style="opacity: 0.8;">
            <div class="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2">
              <span class="font-extrabold text-slate-400 text-4xs">${n}</span>
              <span class="badge bg-slate-800 text-slate-500 font-bold text-5xs">${c.time}</span>
            </div>
            
            <div class="text-center py-2">
              <div class="text-5xs text-muted truncate" title="${c.team1}">${c.team1}</div>
              <div class="text-4xs font-bold text-slate-400 py-0.5">SCHEDULED</div>
              <div class="text-5xs text-muted truncate" title="${c.team2}">${c.team2}</div>
            </div>

            <div class="pt-2 border-t border-slate-800/80">
              ${o?`
                <button class="btn btn-2xs btn-outline btn-join-match btn-block font-bold" style="border-color: var(--volt); color: var(--volt);" data-match-id="${c.id}">
                  🏸 Start Match
                </button>
              `:`
                <div class="text-center text-5xs text-slate-600 font-semibold py-1">💤 Awaiting start</div>
              `}
            </div>
          </div>
        `:`
        <div class="live-pitch-card glass-panel border border-slate-900 p-3 rounded-lg flex flex-col justify-center items-center" style="opacity: 0.55; min-height: 125px;">
          <span class="text-lg">💤</span>
          <span class="font-extrabold text-slate-400 text-4xs mt-1.5">${n}</span>
          <span class="text-5xs text-slate-600 font-semibold mt-0.5">Court Empty</span>
        </div>
      `}).join("")}openSpectateOverlay(e){if(document.getElementById("umpire-overlay-container")&&!document.getElementById("umpire-overlay-container").classList.contains("hidden")){alert("You are in the Umpire Control room. Please exit Umpire mode first!");return}if(this.activeSpectateMatchId=e,!document.getElementById("spectate-overlay-container")){const s=document.createElement("div");s.id="spectate-overlay-container",s.className="umpire-overlay-backdrop",document.body.appendChild(s)}this.renderSpectateOverlay(e),setTimeout(()=>{const s=document.querySelector(".spectate-court-svg .svg-shuttle");s&&(s.setAttribute("dur","0.7s"),s.innerHTML=`
          <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
            <mpath href="#spectate-shuttle-path" />
          </animateMotion>
        `)},100)}renderSpectateOverlay(e){const s=document.getElementById("spectate-overlay-container");if(!s)return;s.classList.remove("hidden");const n=this.state.matches.find(j=>j.id===e),c=this.sync.getLiveMatches()[e];if(!c||!n){s.classList.add("hidden"),this.activeSpectateMatchId=null;return}c.isEven,n.category;let o,u,v,x;const $=c.team1Right||n.team1.split(" ")[0]+" 1",w=c.team1Left||n.team1.split(" ")[0]+" 2",A=c.team2Right||n.team2.split(" ")[0]+" 1",M=c.team2Left||n.team2.split(" ")[0]+" 2";c.isCourtSwapped?(o=A,u=M,v=$,x=w):(o=$,u=w,v=A,x=M);const _=c.serverName,E=c.receiverName,I=j=>j===_?"S":j===E?"R":"P",L=j=>j===_?"volt":j===E?"cyan":"neutral",k=j=>j===_?"text-volt":j===E?"text-cyan":"text-slate-200",C=j=>j!==_?"":`
        <g class="shuttle-badge" transform="translate(11, -11)">
          <circle cx="0" cy="0" r="8.5" fill="#090d16" stroke="#84cc16" stroke-width="1.2" />
          <text x="0" y="3.5" font-size="10" text-anchor="middle" font-family="sans-serif">🏸</text>
        </g>
      `;let N,R,D,f;_===o?(N=210,R=355):_===u?(N=90,R=355):_===v?(N=90,R=145):(N=210,R=145),E===o?(D=210,f=355):E===u?(D=90,f=355):E===v?(D=90,f=145):(D=210,f=145);const h=(j,tt)=>tt===355?j===210?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z":j===90?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",p=h(N,R),b=h(D,f),g=(N+D)/2+30,y=(R+f)/2-40,m=c.sets.map((j,tt)=>`
      <div class="umpire-set-badge">
        <span>Set ${tt+1}:</span>
        <strong>${j.t1} - ${j.t2}</strong>
      </div>
    `).join("");s.innerHTML=`
      <div class="umpire-card glass-card spectate-stadium">
        <!-- Header -->
        <div class="umpire-header flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div class="flex items-center gap-3">
            <span class="badge bg-danger pulse-dot flex items-center gap-1.5 font-bold">
              <span class="live-dot"></span> LIVE SPECTATING
            </span>
            <span class="text-xs font-bold text-slate-300">${n.pitch} | ${n.stage}</span>
          </div>
          <h2 class="text-sm font-black m-0 text-glow-volt">LIVE STADIUM SCREEN</h2>
          <button class="btn btn-xs btn-neutral" id="spectate-btn-close">✕ Exit</button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <!-- Spectator Scoreboard Column (Grid Span 7) -->
          <div class="lg:col-span-7 flex flex-col gap-6">
            
            <!-- Historic sets display -->
            <div class="flex items-center gap-3 justify-center mb-1">
              ${m}
              <div class="umpire-set-badge current">
                <span>Set ${c.currentSet}:</span>
                <strong class="text-volt">${c.score1} - ${c.score2}</strong>
              </div>
            </div>

            <!-- Big Glowing Score Pads (Read-only for Spectators) -->
            <div class="grid grid-cols-2 gap-6 text-center">
              <div class="bg-slate-950/60 p-6 rounded-xl border border-slate-900 relative">
                <div class="text-2xs font-extrabold truncate text-volt mb-3" title="${n.team1}">
                  ${n.team1}
                </div>
                <div class="font-mono font-black text-6xl text-glow-volt py-4">${c.score1}</div>
                ${c.servingTeam==="A"?`
                  <span class="absolute top-3 right-3 text-volt animate-bounce" style="font-size: 0.95rem;">🏸 Serve</span>
                `:""}
              </div>

              <div class="bg-slate-950/60 p-6 rounded-xl border border-slate-900 relative">
                <div class="text-2xs font-extrabold truncate text-cyan mb-3" title="${n.team2}">
                  ${n.team2}
                </div>
                <div class="font-mono font-black text-6xl text-glow-cyan py-4">${c.score2}</div>
                ${c.servingTeam==="B"?`
                  <span class="absolute top-3 right-3 text-cyan animate-bounce" style="font-size: 0.95rem;">🏸 Serve</span>
                `:""}
              </div>
            </div>

            <div class="bg-slate-900/40 p-4 rounded border border-slate-800 text-center text-4xs text-slate-500 font-semibold leading-relaxed">
              📣 Spectator display updates automatically in real-time as the referee enters scores on their device.
            </div>
          </div>

          <!-- Spectator Court Simulator Column (Grid Span 5) -->
          <div class="lg:col-span-5 flex flex-col items-center gap-4 bg-slate-950/45 p-4 rounded-lg border border-slate-900/60">
            <h4 class="text-5xs font-bold uppercase tracking-widest text-slate-500 m-0">LIVE COURT VISUALIZER</h4>
            <div style="width: 100%; max-width: 250px; aspect-ratio: 3/5;">
              <svg class="court-svg spectate-court-svg" viewBox="0 0 300 500" width="100%" height="100%">
                <defs>
                  <filter id="spec-glow-volt" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                  <filter id="spec-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="6" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                </defs>

                <!-- boundaries -->
                <rect x="20" y="40" width="260" height="420" class="court-line outer" />
                <line x1="40" y1="40" x2="40" y2="460" class="court-line singles-side" />
                <line x1="260" y1="40" x2="260" y2="460" class="court-line singles-side" />
                <line x1="150" y1="40" x2="150" y2="190" class="court-line center" />
                <line x1="150" y1="310" x2="150" y2="460" class="court-line center" />
                <line x1="20" y1="190" x2="280" y2="190" class="court-line service-short" />
                <line x1="20" y1="310" x2="280" y2="310" class="court-line service-short" />
                <line x1="20" y1="60" x2="280" y2="60" class="court-line service-long-doubles" />
                <line x1="20" y1="440" x2="280" y2="440" class="court-line service-long-doubles" />
                <line x1="10" y1="250" x2="290" y2="250" class="court-line net" />
                <circle cx="10" cy="250" r="4" class="net-post" />
                <circle cx="290" cy="250" r="4" class="net-post" />

                <!-- highlights -->
                <path d="${p}" class="svg-highlight-box serving" filter="url(#spec-glow-volt)" />
                <path d="${b}" class="svg-highlight-box receiving" filter="url(#spec-glow-cyan)" />

                <!-- shuttle flight -->
                <path id="spectate-shuttle-path" d="M ${N},${R} Q ${g},${y} ${D},${f}" class="svg-shuttle-path" />
                <circle r="5" class="svg-shuttle" filter="url(#spec-glow-cyan)">
                  <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
                    <mpath href="#spectate-shuttle-path" />
                  </animateMotion>
                </circle>

                <!-- Player Avatars Bottom (Team on same horizontal line in middle of bottom court at y=355) -->
                <!-- Bottom Left Player -->
                <g class="player-avatar ${u===_?"server":u===E?"receiver":"partner"}" transform="translate(90, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${L(u)}" />
                  <text x="0" y="4" class="avatar-text">${I(u)}</text>
                  ${C(u)}
                </g>
                <text x="90" y="383" class="svg-player-name ${k(u)} font-bold">${u.split(" ")[0]}</text>

                <!-- Bottom Right Player -->
                <g class="player-avatar ${o===_?"server":o===E?"receiver":"partner"}" transform="translate(210, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${L(o)}" />
                  <text x="0" y="4" class="avatar-text">${I(o)}</text>
                  ${C(o)}
                </g>
                <text x="210" y="383" class="svg-player-name ${k(o)} font-bold">${o.split(" ")[0]}</text>

                <!-- Player Avatars Top (Team on same horizontal line in middle of top court at y=145) -->
                <!-- Top Right Player (Screen Left x=90) -->
                <g class="player-avatar ${v===_?"server":v===E?"receiver":"partner"}" transform="translate(90, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${L(v)}" />
                  <text x="0" y="4" class="avatar-text">${I(v)}</text>
                  ${C(v)}
                </g>
                <text x="90" y="123" class="svg-player-name ${k(v)} font-bold">${v.split(" ")[0]}</text>

                <!-- Top Left Player (Screen Right x=210) -->
                <g class="player-avatar ${x===_?"server":x===E?"receiver":"partner"}" transform="translate(210, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${L(x)}" />
                  <text x="0" y="4" class="avatar-text">${I(x)}</text>
                  ${C(x)}
                </g>
                <text x="210" y="123" class="svg-player-name ${k(x)} font-bold">${x.split(" ")[0]}</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("spectate-btn-close").onclick=()=>{s.classList.add("hidden"),s.innerHTML="",this.activeSpectateMatchId=null}}}window.addEventListener("DOMContentLoaded",()=>{new Ra});
