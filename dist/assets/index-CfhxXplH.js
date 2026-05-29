(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}})();const un=[{id:1,name:"DuongDLQ",preferred_format:"Any",preferred_partnership:"Totally random"},{id:2,name:"HungVDN",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:3,name:"KhaiCT",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:4,name:"phuocnv",preferred_format:"Any",preferred_partnership:"Totally random"},{id:5,name:"TriemPT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:6,name:"MinhDN",preferred_format:"Men's Doubles",preferred_partnership:"Form your own team and register later"},{id:10,name:"LongNT",preferred_format:"Any",preferred_partnership:"Totally random"},{id:11,name:"ChiKP",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"},{id:12,name:"QuanNLH",preferred_format:"Any",preferred_partnership:"Totally random"},{id:13,name:"HungNT",preferred_format:"Any",preferred_partnership:"Skill-based tiers, then random"},{id:14,name:"TienTS",preferred_format:"Men's Doubles",preferred_partnership:"Skill-based tiers, then random"},{id:15,name:"HieuPV",preferred_format:"Men's Doubles",preferred_partnership:"Totally random"},{id:16,name:"ThanhPT",preferred_format:"Mixed's Doubles",preferred_partnership:"Totally random"}],fn=[{id:"MD-1",name:"Hưng 7 - Khải",player1:"HungVDN",player2:"KhaiCT",category:"Men's Doubles"},{id:"MD-2",name:"Hưng 14 - Phong",player1:"HungNT",player2:"PhongTH",category:"Men's Doubles"},{id:"MD-3",name:"Tùng - Dương",player1:"DuongDLQ",player2:"TungHD",category:"Men's Doubles"},{id:"MD-4",name:"Tiến - Minh",player1:"TienTS",player2:"MinhDN",category:"Men's Doubles"},{id:"MD-5",name:"Phước - Hiếu",player1:"PhuocNV",player2:"HieuPV",category:"Men's Doubles"},{id:"XD-1",name:"Hằng - Minh",player1:"HangTTT-GA",player2:"MinhTH1993",category:"Mixed's Doubles"},{id:"XD-2",name:"Minh - Triêm",player1:"MinhLNH",player2:"TriemPT",category:"Mixed's Doubles"},{id:"XD-3",name:"Trân - Long",player1:"TranPQB",player2:"LongNT1988",category:"Mixed's Doubles"},{id:"XD-4",name:"Thanh - Hoàn",player1:"ThanhPT",player2:"HoanTT",category:"Mixed's Doubles"},{id:"XD-5",name:"Chi - Quân",player1:"ChiKP",player2:"QuanNLH",category:"Mixed's Doubles"}],mn=[{id:"M-1",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 1",time:"1:30 - 2:00",team1:"Hưng 7 - Khải",team2:"Hưng 14 - Phong",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-2",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 2",time:"1:30 - 2:00",team1:"Tùng - Dương",team2:"Tiến - Minh",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-5",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 1",time:"2:05 - 2:35",team1:"Tùng - Dương",team2:"Hưng 7 - Khải",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-6",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 2",time:"2:05 - 2:35",team1:"Hưng 14 - Phong",team2:"Phước - Hiếu",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-9",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 1",time:"2:40 - 3:10",team1:"Hưng 7 - Khải",team2:"Tiến - Minh",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-10",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 2",time:"2:40 - 3:10",team1:"Tùng - Dương",team2:"Phước - Hiếu",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-13",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 1",time:"3:15 - 3:45",team1:"Phước - Hiếu",team2:"Hưng 7 - Khải",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-14",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 2",time:"3:15 - 3:45",team1:"Hưng 14 - Phong",team2:"Tiến - Minh",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-17",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 1",time:"3:50 - 4:20",team1:"Hưng 14 - Phong",team2:"Tùng - Dương",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-18",category:"Men's Doubles",stage:"Group Stage",pitch:"Pitch 2",time:"3:50 - 4:20",team1:"Tiến - Minh",team2:"Phước - Hiếu",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-3",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 3",time:"1:30 - 2:00",team1:"Hằng - Minh",team2:"Minh - Triêm",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-4",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 4",time:"1:30 - 2:00",team1:"Trân - Long",team2:"Thanh - Hoàn",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-7",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 3",time:"2:05 - 2:35",team1:"Trân - Long",team2:"Hằng - Minh",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-8",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 4",time:"2:05 - 2:35",team1:"Minh - Triêm",team2:"Chi - Quân",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-11",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 3",time:"2:40 - 3:10",team1:"Thanh - Hoàn",team2:"Hằng - Minh",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-12",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 4",time:"2:40 - 3:10",team1:"Trân - Long",team2:"Chi - Quân",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-15",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 3",time:"3:15 - 3:45",team1:"Hằng - Minh",team2:"Chi - Quân",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-16",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 4",time:"3:15 - 3:45",team1:"Minh - Triêm",team2:"Thanh - Hoàn",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-19",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 3",time:"3:50 - 4:20",team1:"Minh - Triêm",team2:"Trân - Long",score1:"",score2:"",sets:[],status:"Scheduled"},{id:"M-20",category:"Mixed's Doubles",stage:"Group Stage",pitch:"Pitch 4",time:"3:50 - 4:20",team1:"Thanh - Hoàn",team2:"Chi - Quân",score1:"",score2:"",sets:[],status:"Scheduled"}],kr={en:{title:"GEAR GAMES BADMINTON TOURNAMENT 2026",subtitle:"Tournament Regulations and General Information",sections:[{id:"categories",title:"I. Competition Categories",content:["• Mixed Doubles","• Men's Doubles","• Total: 10 pairs - 20 players"]},{id:"schedule",title:"II. Schedule & Venue",content:["• Date: 31 May 2026","• Venue: Alpha Era court"]},{id:"prizes",title:"III. Prizes",content:["🏆 First Place: 2,000,000 VND + Championship Trophy","🥈 Second Place: 1,500,000 VND","🥉 Third Place: 1,000,000 VND"]},{id:"regulations",title:"IV. Regulations & Tournament Format",content:["• **Qualifying Round**: Round-Robin format. Top 4 teams from each category will advance to the Semi-finals.","• **Semi-finals**: A Single-elimination bracket to determine the Top 2 teams for the Grand Final.","• **Grand Final**: A Single-elimination match to crown the Season Champion.","• **Set Points Rules**:","  - Qualifying Round: Best of 3 (BO3) – 15 points per set.","  - Semi-finals & Grand Final: Best of 3 (BO3) – 21 points per set.","  - If the score reaches 20-20 (or 14-14 in 15-pt game), the side gaining a 2-point lead first wins the set.","  - If the score reaches 29-29 (or 20-20 in 15-pt game), the side that scores the 30th point (or 21st) wins the set.","• **Group Stage Ranking Priority**:","  - Win: +1 point. Loss: +0 point.","  - Priority: (1) Total Match Points $\\rightarrow$ (2) Net Sets/Games (Won - Lost) $\\rightarrow$ (3) Head-to-Head Result $\\rightarrow$ (4) Net Points (Won - Lost) $\\rightarrow$ (5) Drawing of lots."]},{id:"rules",title:"V. Doubles Rules & Service Position",content:["• Standard BWF Laws of Badminton apply.","• **Service and Receiving Courts**:","  - If the serving side's score is **even** (0, 2, 4, 6...), the server shall serve from the **right** service court diagonally to the receiver's right court.","  - If the serving side's score is **odd** (1, 3, 5, 7...), the server shall serve from the **left** service court diagonally to the receiver's left court.","  - The player diagonally opposite to the server shall be the receiver.","  - Only the receiver can return the service. If their partner touches the shuttle first, the serving side wins a point.","• **Swapping Positions**:","  - Players only swap their left/right service positions when their team **wins a point on their own service**.","  - If the receiving side wins the rally, they win a point and the right to serve, but players do not swap positions."]},{id:"intervals",title:"VI. Intervals & Player Behavior",content:["• Mid-game Interval: When one side reaches 11 points (or 8 points in a 15-point game), an interval not exceeding 60 seconds is allowed.","• Inter-game Interval: A rest period not exceeding 2 minutes is allowed between the first and second games, and between the second and third games.","• Play shall be continuous. Misconduct and delay tactics may be penalized by the umpire."]}]}},Rr=()=>{};var pn={};/**
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
 */const ci={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const v=function(n,e){if(!n)throw Be(e)},Be=function(n){return new Error("Firebase Database ("+ci.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
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
 */const di=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):(i&64512)===55296&&s+1<n.length&&(n.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(n.charCodeAt(++s)&1023),e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Dr=function(n){const e=[];let t=0,s=0;for(;t<n.length;){const i=n[t++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=n[t++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=n[t++],o=n[t++],a=n[t++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ms={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<n.length;i+=3){const r=n[i],o=i+1<n.length,a=o?n[i+1]:0,l=i+2<n.length,c=l?n[i+2]:0,h=r>>2,d=(r&3)<<4|a>>4;let u=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(u=64)),s.push(t[h],t[d],t[u],t[f])}return s.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(di(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Dr(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<n.length;){const r=t[n.charAt(i++)],a=i<n.length?t[n.charAt(i)]:0;++i;const c=i<n.length?t[n.charAt(i)]:64;++i;const d=i<n.length?t[n.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new Lr;const u=r<<2|a>>4;if(s.push(u),c!==64){const f=a<<4&240|c>>2;if(s.push(f),d!==64){const m=c<<6&192|d;s.push(m)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class Lr extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const hi=function(n){const e=di(n);return Ms.encodeByteArray(e,!0)},vt=function(n){return hi(n).replace(/\./g,"")},os=function(n){try{return Ms.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Or(n){return ui(void 0,n)}function ui(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!Fr(t)||(n[t]=ui(n[t],e[t]));return n}function Fr(n){return n!=="__proto__"}/**
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
 */function Br(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Hr=()=>Br().__FIREBASE_DEFAULTS__,Wr=()=>{if(typeof process>"u"||typeof pn>"u")return;const n=pn.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},Ur=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&os(n[1]);return e&&JSON.parse(e)},fi=()=>{try{return Rr()||Hr()||Wr()||Ur()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},Gr=n=>{var e,t;return(t=(e=fi())==null?void 0:e.emulatorHosts)==null?void 0:t[n]},zr=n=>{const e=Gr(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),s]:[e.substring(0,t),s]},mi=()=>{var n;return(n=fi())==null?void 0:n.config};/**
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
 */class at{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,s)=>{t?this.reject(t):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,s))}}}/**
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
 */function Vr(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},s=e||"demo-project",i=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o={iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}},...n};return[vt(JSON.stringify(t)),vt(JSON.stringify(o)),""].join(".")}/**
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
 */function jr(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function pi(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(jr())}function qr(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Yr(){return ci.NODE_ADMIN===!0}function Kr(){try{return typeof indexedDB=="object"}catch{return!1}}function Qr(){return new Promise((n,e)=>{try{let t=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),t||self.indexedDB.deleteDatabase(s),n(!0)},i.onupgradeneeded=()=>{t=!1},i.onerror=()=>{var r;e(((r=i.error)==null?void 0:r.message)||"")}}catch(t){e(t)}})}/**
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
 */const Xr="FirebaseError";class lt extends Error{constructor(e,t,s){super(t),this.code=e,this.customData=s,this.name=Xr,Object.setPrototypeOf(this,lt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gi.prototype.create)}}class gi{constructor(e,t,s){this.service=e,this.serviceName=t,this.errors=s}create(e,...t){const s=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Jr(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new lt(i,a,s)}}function Jr(n,e){return n.replace(Zr,(t,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Zr=/\{\$([^}]+)}/g;/**
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
 */function Je(n){return JSON.parse(n)}function q(n){return JSON.stringify(n)}/**
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
 */const vi=function(n){let e={},t={},s={},i="";try{const r=n.split(".");e=Je(os(r[0])||""),t=Je(os(r[1])||""),i=r[2],s=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:s,signature:i}},eo=function(n){const e=vi(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},to=function(n){const e=vi(n).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function ie(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function ke(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function gn(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function bt(n,e,t){const s={};for(const i in n)Object.prototype.hasOwnProperty.call(n,i)&&(s[i]=e.call(t,n[i],i,n));return s}function yt(n,e){if(n===e)return!0;const t=Object.keys(n),s=Object.keys(e);for(const i of t){if(!s.includes(i))return!1;const r=n[i],o=e[i];if(vn(r)&&vn(o)){if(!yt(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!t.includes(i))return!1;return!0}function vn(n){return n!==null&&typeof n=="object"}/**
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
 */function so(n){const e=[];for(const[t,s]of Object.entries(n))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class no{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let d=0;d<16;d++)s[d]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let d=16;d<80;d++){const u=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(u<<1|u>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,h;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),h=1518500249):(c=r^o^a,h=1859775393):d<60?(c=r&o|a&(r|o),h=2400959708):(c=r^o^a,h=3395469782);const u=(i<<5|i>>>27)+c+l+h+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=u}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const s=t-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<t;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<t;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<t;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=t&255,t/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function Dt(n,e){return`${n} failed: ${e} argument `}/**
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
 */const io=function(n){const e=[];let t=0;for(let s=0;s<n.length;s++){let i=n.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,v(s<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[t++]=i:i<2048?(e[t++]=i>>6|192,e[t++]=i&63|128):i<65536?(e[t++]=i>>12|224,e[t++]=i>>6&63|128,e[t++]=i&63|128):(e[t++]=i>>18|240,e[t++]=i>>12&63|128,e[t++]=i>>6&63|128,e[t++]=i&63|128)}return e},Lt=function(n){let e=0;for(let t=0;t<n.length;t++){const s=n.charCodeAt(t);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,t++):e+=3}return e};/**
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
 */function ct(n){return n&&n._delegate?n._delegate:n}/**
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
 */function bi(n){try{return(n.startsWith("http://")||n.startsWith("https://")?new URL(n).hostname:n).endsWith(".cloudworkstations.dev")}catch{return!1}}async function ro(n){return(await fetch(n,{credentials:"include"})).ok}class Ze{constructor(e,t,s){this.name=e,this.instanceFactory=t,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const ve="[DEFAULT]";/**
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
 */class oo{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const s=new at;if(this.instancesDeferred.set(t,s),this.isInitialized(t)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:t});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){const t=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(e==null?void 0:e.optional)??!1;if(this.isInitialized(t)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:t})}catch(i){if(s)return null;throw i}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(lo(e))try{this.getOrInitializeService({instanceIdentifier:ve})}catch{}for(const[t,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=ve){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ve){return this.instances.has(e)}getOptions(e=ve){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,t){const s=this.normalizeInstanceIdentifier(t),i=this.onInitCallbacks.get(s)??new Set;i.add(e),this.onInitCallbacks.set(s,i);const r=this.instances.get(s);return r&&e(r,s),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const s=this.onInitCallbacks.get(t);if(s)for(const i of s)try{i(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:ao(e),options:t}),this.instances.set(e,s),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=ve){return this.component?this.component.multipleInstances?e:ve:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ao(n){return n===ve?void 0:n}function lo(n){return n.instantiationMode==="EAGER"}/**
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
 */class co{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new oo(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var O;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(O||(O={}));const ho={debug:O.DEBUG,verbose:O.VERBOSE,info:O.INFO,warn:O.WARN,error:O.ERROR,silent:O.SILENT},uo=O.INFO,fo={[O.DEBUG]:"log",[O.VERBOSE]:"log",[O.INFO]:"info",[O.WARN]:"warn",[O.ERROR]:"error"},mo=(n,e,...t)=>{if(e<n.logLevel)return;const s=new Date().toISOString(),i=fo[e];if(i)console[i](`[${s}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class yi{constructor(e){this.name=e,this._logLevel=uo,this._logHandler=mo,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in O))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?ho[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,O.DEBUG,...e),this._logHandler(this,O.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,O.VERBOSE,...e),this._logHandler(this,O.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,O.INFO,...e),this._logHandler(this,O.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,O.WARN,...e),this._logHandler(this,O.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,O.ERROR,...e),this._logHandler(this,O.ERROR,...e)}}const po=(n,e)=>e.some(t=>n instanceof t);let bn,yn;function go(){return bn||(bn=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function vo(){return yn||(yn=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _i=new WeakMap,as=new WeakMap,xi=new WeakMap,Kt=new WeakMap,Ns=new WeakMap;function bo(n){const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(he(n.result)),i()},o=()=>{s(n.error),i()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&_i.set(t,n)}).catch(()=>{}),Ns.set(e,n),e}function yo(n){if(as.has(n))return;const e=new Promise((t,s)=>{const i=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),i()},o=()=>{s(n.error||new DOMException("AbortError","AbortError")),i()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});as.set(n,e)}let ls={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return as.get(n);if(e==="objectStoreNames")return n.objectStoreNames||xi.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return he(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function _o(n){ls=n(ls)}function xo(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const s=n.call(Qt(this),e,...t);return xi.set(s,e.sort?e.sort():[e]),he(s)}:vo().includes(n)?function(...e){return n.apply(Qt(this),e),he(_i.get(this))}:function(...e){return he(n.apply(Qt(this),e))}}function So(n){return typeof n=="function"?xo(n):(n instanceof IDBTransaction&&yo(n),po(n,go())?new Proxy(n,ls):n)}function he(n){if(n instanceof IDBRequest)return bo(n);if(Kt.has(n))return Kt.get(n);const e=So(n);return e!==n&&(Kt.set(n,e),Ns.set(e,n)),e}const Qt=n=>Ns.get(n);function wo(n,e,{blocked:t,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(n,e),a=he(o);return s&&o.addEventListener("upgradeneeded",l=>{s(he(o.result),l.oldVersion,l.newVersion,he(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Co=["get","getKey","getAll","getAllKeys","count"],Eo=["put","add","delete","clear"],Xt=new Map;function _n(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Xt.get(e))return Xt.get(e);const t=e.replace(/FromIndex$/,""),s=e!==t,i=Eo.includes(t);if(!(t in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Co.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),i&&l.done]))[0]};return Xt.set(e,r),r}_o(n=>({...n,get:(e,t,s)=>_n(e,t)||n.get(e,t,s),has:(e,t)=>!!_n(e,t)||n.has(e,t)}));/**
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
 */class To{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Io(t)){const s=t.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(t=>t).join(" ")}}function Io(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const cs="@firebase/app",xn="0.14.12";/**
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
 */const ae=new yi("@firebase/app"),Mo="@firebase/app-compat",No="@firebase/analytics-compat",Ao="@firebase/analytics",Po="@firebase/app-check-compat",$o="@firebase/app-check",ko="@firebase/auth",Ro="@firebase/auth-compat",Do="@firebase/database",Lo="@firebase/data-connect",Oo="@firebase/database-compat",Fo="@firebase/functions",Bo="@firebase/functions-compat",Ho="@firebase/installations",Wo="@firebase/installations-compat",Uo="@firebase/messaging",Go="@firebase/messaging-compat",zo="@firebase/performance",Vo="@firebase/performance-compat",jo="@firebase/remote-config",qo="@firebase/remote-config-compat",Yo="@firebase/storage",Ko="@firebase/storage-compat",Qo="@firebase/firestore",Xo="@firebase/ai",Jo="@firebase/firestore-compat",Zo="firebase",ea="12.13.0";/**
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
 */const ds="[DEFAULT]",ta={[cs]:"fire-core",[Mo]:"fire-core-compat",[Ao]:"fire-analytics",[No]:"fire-analytics-compat",[$o]:"fire-app-check",[Po]:"fire-app-check-compat",[ko]:"fire-auth",[Ro]:"fire-auth-compat",[Do]:"fire-rtdb",[Lo]:"fire-data-connect",[Oo]:"fire-rtdb-compat",[Fo]:"fire-fn",[Bo]:"fire-fn-compat",[Ho]:"fire-iid",[Wo]:"fire-iid-compat",[Uo]:"fire-fcm",[Go]:"fire-fcm-compat",[zo]:"fire-perf",[Vo]:"fire-perf-compat",[jo]:"fire-rc",[qo]:"fire-rc-compat",[Yo]:"fire-gcs",[Ko]:"fire-gcs-compat",[Qo]:"fire-fst",[Jo]:"fire-fst-compat",[Xo]:"fire-vertex","fire-js":"fire-js",[Zo]:"fire-js-all"};/**
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
 */const _t=new Map,sa=new Map,hs=new Map;function Sn(n,e){try{n.container.addComponent(e)}catch(t){ae.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function xt(n){const e=n.name;if(hs.has(e))return ae.debug(`There were multiple attempts to register component ${e}.`),!1;hs.set(e,n);for(const t of _t.values())Sn(t,n);for(const t of sa.values())Sn(t,n);return!0}function na(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}function ia(n){return n==null?!1:n.settings!==void 0}/**
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
 */const ra={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},ue=new gi("app","Firebase",ra);/**
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
 */class oa{constructor(e,t,s){this._isDeleted=!1,this._options={...e},this._config={...t},this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Ze("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ue.create("app-deleted",{appName:this._name})}}/**
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
 */const aa=ea;function Si(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const s={name:ds,automaticDataCollectionEnabled:!0,...e},i=s.name;if(typeof i!="string"||!i)throw ue.create("bad-app-name",{appName:String(i)});if(t||(t=mi()),!t)throw ue.create("no-options");const r=_t.get(i);if(r){if(yt(t,r.options)&&yt(s,r.config))return r;throw ue.create("duplicate-app",{appName:i})}const o=new co(i);for(const l of hs.values())o.addComponent(l);const a=new oa(t,s,o);return _t.set(i,a),a}function la(n=ds){const e=_t.get(n);if(!e&&n===ds&&mi())return Si();if(!e)throw ue.create("no-app",{appName:n});return e}function Ne(n,e,t){let s=ta[n]??n;t&&(s+=`-${t}`);const i=s.match(/\s|\//),r=e.match(/\s|\//);if(i||r){const o=[`Unable to register library "${s}" with version "${e}":`];i&&o.push(`library name "${s}" contains illegal characters (whitespace or "/")`),i&&r&&o.push("and"),r&&o.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ae.warn(o.join(" "));return}xt(new Ze(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const ca="firebase-heartbeat-database",da=1,et="firebase-heartbeat-store";let Jt=null;function wi(){return Jt||(Jt=wo(ca,da,{upgrade:(n,e)=>{switch(e){case 0:try{n.createObjectStore(et)}catch(t){console.warn(t)}}}}).catch(n=>{throw ue.create("idb-open",{originalErrorMessage:n.message})})),Jt}async function ha(n){try{const t=(await wi()).transaction(et),s=await t.objectStore(et).get(Ci(n));return await t.done,s}catch(e){if(e instanceof lt)ae.warn(e.message);else{const t=ue.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ae.warn(t.message)}}}async function wn(n,e){try{const s=(await wi()).transaction(et,"readwrite");await s.objectStore(et).put(e,Ci(n)),await s.done}catch(t){if(t instanceof lt)ae.warn(t.message);else{const s=ue.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ae.warn(s.message)}}}function Ci(n){return`${n.name}!${n.options.appId}`}/**
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
 */const ua=1024,fa=30;class ma{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ga(t),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,t;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Cn();if(((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((t=this._heartbeatsCache)==null?void 0:t.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>fa){const o=va(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){ae.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)==null?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const t=Cn(),{heartbeatsToSend:s,unsentEntries:i}=pa(this._heartbeatsCache.heartbeats),r=vt(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=t,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(t){return ae.warn(t),""}}}function Cn(){return new Date().toISOString().substring(0,10)}function pa(n,e=ua){const t=[];let s=n.slice();for(const i of n){const r=t.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),En(t)>e){r.dates.pop();break}}else if(t.push({agent:i.agent,dates:[i.date]}),En(t)>e){t.pop();break}s=s.slice(1)}return{heartbeatsToSend:t,unsentEntries:s}}class ga{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Kr()?Qr().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const t=await ha(this.app);return t!=null&&t.heartbeats?t:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return wn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){if(await this._canUseIndexedDBPromise){const s=await this.read();return wn(this.app,{lastSentHeartbeatDate:e.lastSentHeartbeatDate??s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function En(n){return vt(JSON.stringify({version:2,heartbeats:n})).length}function va(n){if(n.length===0)return-1;let e=0,t=n[0].date;for(let s=1;s<n.length;s++)n[s].date<t&&(t=n[s].date,e=s);return e}/**
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
 */function ba(n){xt(new Ze("platform-logger",e=>new To(e),"PRIVATE")),xt(new Ze("heartbeat",e=>new ma(e),"PRIVATE")),Ne(cs,xn,n),Ne(cs,xn,"esm2020"),Ne("fire-js","")}ba("");var ya="firebase",_a="12.13.0";/**
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
 */Ne(ya,_a,"app");var Tn={};const In="@firebase/database",Mn="1.1.3";/**
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
 */let Ei="";function xa(n){Ei=n}/**
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
 */class Sa{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),q(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:Je(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class wa{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return ie(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const Ti=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Sa(e)}}catch{}return new wa},ye=Ti("localStorage"),Ca=Ti("sessionStorage");/**
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
 */const Ae=new yi("@firebase/database"),Ea=function(){let n=1;return function(){return n++}}(),Ii=function(n){const e=io(n),t=new no;t.update(e);const s=t.digest();return Ms.encodeByteArray(s)},dt=function(...n){let e="";for(let t=0;t<n.length;t++){const s=n[t];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=dt.apply(null,s):typeof s=="object"?e+=q(s):e+=s,e+=" "}return e};let qe=null,Nn=!0;const Ta=function(n,e){v(!0,"Can't turn on custom loggers persistently."),Ae.logLevel=O.VERBOSE,qe=Ae.log.bind(Ae)},Y=function(...n){if(Nn===!0&&(Nn=!1,qe===null&&Ca.get("logging_enabled")===!0&&Ta()),qe){const e=dt.apply(null,n);qe(e)}},ht=function(n){return function(...e){Y(n,...e)}},us=function(...n){const e="FIREBASE INTERNAL ERROR: "+dt(...n);Ae.error(e)},le=function(...n){const e=`FIREBASE FATAL ERROR: ${dt(...n)}`;throw Ae.error(e),new Error(e)},Q=function(...n){const e="FIREBASE WARNING: "+dt(...n);Ae.warn(e)},Ia=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Q("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},As=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Ma=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},Re="[MIN_NAME]",_e="[MAX_NAME]",Ce=function(n,e){if(n===e)return 0;if(n===Re||e===_e)return-1;if(e===Re||n===_e)return 1;{const t=An(n),s=An(e);return t!==null?s!==null?t-s===0?n.length-e.length:t-s:-1:s!==null?1:n<e?-1:1}},Na=function(n,e){return n===e?0:n<e?-1:1},Ge=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+q(e))},Ps=function(n){if(typeof n!="object"||n===null)return q(n);const e=[];for(const s in n)e.push(s);e.sort();let t="{";for(let s=0;s<e.length;s++)s!==0&&(t+=","),t+=q(e[s]),t+=":",t+=Ps(n[e[s]]);return t+="}",t},Mi=function(n,e){const t=n.length;if(t<=e)return[n];const s=[];for(let i=0;i<t;i+=e)i+e>t?s.push(n.substring(i,t)):s.push(n.substring(i,i+e));return s};function K(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const Ni=function(n){v(!As(n),"Invalid JSON number");const e=11,t=52,s=(1<<e-1)-1;let i,r,o,a,l;n===0?(r=0,o=0,i=1/n===-1/0?1:0):(i=n<0,n=Math.abs(n),n>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),s),r=a+s,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-s-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const h=c.join("");let d="";for(l=0;l<64;l+=8){let u=parseInt(h.substr(l,8),2).toString(16);u.length===1&&(u="0"+u),d=d+u}return d.toLowerCase()},Aa=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Pa=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function $a(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const s=new Error(n+" at "+e._path.toString()+": "+t);return s.code=n.toUpperCase(),s}const ka=new RegExp("^-?(0*)\\d{1,10}$"),Ra=-2147483648,Da=2147483647,An=function(n){if(ka.test(n)){const e=Number(n);if(e>=Ra&&e<=Da)return e}return null},He=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw Q("Exception was thrown by user callback.",t),e},Math.floor(0))}},La=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Ye=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
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
 */class Oa{constructor(e,t){this.appCheckProvider=t,this.appName=e.name,ia(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((t,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)==null||t.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Q(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class Fa{constructor(e,t,s){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(Y("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,s):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Q(e)}}class gt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}gt.OWNER="owner";/**
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
 */const $s="5",Ai="v",Pi="s",$i="r",ki="f",Ri=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Di="ls",Li="p",fs="ac",Oi="websocket",Fi="long_polling";/**
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
 */class Bi{constructor(e,t,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=t,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=ye.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&ye.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Ba(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function Hi(n,e,t){v(typeof e=="string","typeof type must == string"),v(typeof t=="object","typeof params must == object");let s;if(e===Oi)s=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===Fi)s=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Ba(n)&&(t.ns=n.namespace);const i=[];return K(t,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class Ha{constructor(){this.counters_={}}incrementCounter(e,t=1){ie(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return Or(this.counters_)}}/**
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
 */const Zt={},es={};function ks(n){const e=n.toString();return Zt[e]||(Zt[e]=new Ha),Zt[e]}function Wa(n,e){const t=n.toString();return es[t]||(es[t]=e()),es[t]}/**
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
 */class Ua{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&He(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const Pn="start",Ga="close",za="pLPCommand",Va="pRTLPCB",Wi="id",Ui="pw",Gi="ser",ja="cb",qa="seg",Ya="ts",Ka="d",Qa="dframe",zi=1870,Vi=30,Xa=zi-Vi,Ja=25e3,Za=3e4;class Me{constructor(e,t,s,i,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=ht(e),this.stats_=ks(t),this.urlFn=l=>(this.appCheckToken&&(l[fs]=this.appCheckToken),Hi(t,Fi,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Ua(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Za)),Ma(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Rs((...r)=>{const[o,a,l,c,h]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Pn)this.id=a,this.password=l;else if(o===Ga)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Pn]="t",s[Gi]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[ja]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Ai]=$s,this.transportSessionId&&(s[Pi]=this.transportSessionId),this.lastSessionId&&(s[Di]=this.lastSessionId),this.applicationId&&(s[Li]=this.applicationId),this.appCheckToken&&(s[fs]=this.appCheckToken),typeof location<"u"&&location.hostname&&Ri.test(location.hostname)&&(s[$i]=ki);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Me.forceAllow_=!0}static forceDisallow(){Me.forceDisallow_=!0}static isAvailable(){return Me.forceAllow_?!0:!Me.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Aa()&&!Pa()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=q(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=hi(t),i=Mi(s,Xa);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const s={};s[Qa]="t",s[Wi]=e,s[Ui]=t,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=q(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Rs{constructor(e,t,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ea(),window[za+this.uniqueCallbackIdentifier]=e,window[Va+this.uniqueCallbackIdentifier]=t,this.myIFrame=Rs.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Y("frame writing exception"),a.stack&&Y(a.stack),Y(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Y("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Wi]=this.myID,e[Ui]=this.myPW,e[Gi]=this.currentSerial;let t=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Vi+s.length<=zi;){const o=this.pendingSegs.shift();s=s+"&"+qa+i+"="+o.seg+"&"+Ya+i+"="+o.ts+"&"+Ka+i+"="+o.d,i++}return t=t+s,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,s){this.pendingSegs.push({seg:e,ts:t,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const s=()=>{this.outstandingRequests.delete(t),this.newRequest_()},i=setTimeout(s,Math.floor(Ja)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),t())},s.onerror=()=>{Y("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const el=16384,tl=45e3;let St=null;typeof MozWebSocket<"u"?St=MozWebSocket:typeof WebSocket<"u"&&(St=WebSocket);class ee{constructor(e,t,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=ht(this.connId),this.stats_=ks(t),this.connURL=ee.connectionURL_(t,o,a,i,s),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,s,i,r){const o={};return o[Ai]=$s,typeof location<"u"&&location.hostname&&Ri.test(location.hostname)&&(o[$i]=ki),t&&(o[Pi]=t),s&&(o[Di]=s),i&&(o[fs]=i),r&&(o[Li]=r),Hi(e,Oi,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,ye.set("previous_websocket_failure",!0);try{let s;Yr(),this.mySock=new St(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){ee.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(t);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&St!==null&&!ee.forceDisallow_}static previouslyFailed(){return ye.isInMemoryStorage||ye.get("previous_websocket_failure")===!0}markConnectionHealthy(){ye.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const s=Je(t);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(v(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const s=this.extractFrameCount_(t);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const t=q(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const s=Mi(t,el);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(tl))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}ee.responsesRequiredToBeHealthy=2;ee.healthyTimeout=3e4;/**
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
 */class tt{static get ALL_TRANSPORTS(){return[Me,ee]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const t=ee&&ee.isAvailable();let s=t&&!ee.previouslyFailed();if(e.webSocketOnly&&(t||Q("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[ee];else{const i=this.transports_=[];for(const r of tt.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);tt.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}tt.globalTransportInitialized_=!1;/**
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
 */const sl=6e4,nl=5e3,il=10*1024,rl=100*1024,ts="t",$n="d",ol="s",kn="r",al="e",Rn="o",Dn="a",Ln="n",On="p",ll="h";class cl{constructor(e,t,s,i,r,o,a,l,c,h){this.id=e,this.repoInfo_=t,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=h,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=ht("c:"+this.id+":"),this.transportManager_=new tt(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Ye(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>rl?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>il?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ts in e){const t=e[ts];t===Dn?this.upgradeIfSecondaryHealthy_():t===kn?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===Rn&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=Ge("t",e),s=Ge("d",e);if(t==="c")this.onSecondaryControl_(s);else if(t==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:On,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Dn,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ln,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=Ge("t",e),s=Ge("d",e);t==="c"?this.onControl_(s):t==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=Ge(ts,e);if($n in e){const s=e[$n];if(t===ll){const i={...s};this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(t===Ln){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===ol?this.onConnectionShutdown_(s):t===kn?this.onReset_(s):t===al?us("Server Error: "+s):t===Rn?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):us("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),$s!==s&&Q("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,s),Ye(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(sl))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Ye(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nl))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:On,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(ye.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class ji{put(e,t,s,i){}merge(e,t,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,s){}onDisconnectMerge(e,t,s){}onDisconnectCancel(e,t){}reportStats(e){}}/**
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
 */class qi{constructor(e){this.allowedEvents_=e,this.listeners_={},v(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,t)}}on(e,t,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:s});const i=this.getInitialEvent(e);i&&t.apply(s,i)}off(e,t,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===t&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){v(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
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
 */class wt extends qi{static getInstance(){return new wt}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!pi()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return v(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Fn=32,Bn=768;class R{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function A(){return new R("")}function I(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function me(n){return n.pieces_.length-n.pieceNum_}function F(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new R(n.pieces_,e)}function Ds(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function dl(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function st(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Yi(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new R(e,0)}function H(n,e){const t=[];for(let s=n.pieceNum_;s<n.pieces_.length;s++)t.push(n.pieces_[s]);if(e instanceof R)for(let s=e.pieceNum_;s<e.pieces_.length;s++)t.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&t.push(s[i])}return new R(t,0)}function N(n){return n.pieceNum_>=n.pieces_.length}function X(n,e){const t=I(n),s=I(e);if(t===null)return e;if(t===s)return X(F(n),F(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function hl(n,e){const t=st(n,0),s=st(e,0);for(let i=0;i<t.length&&i<s.length;i++){const r=Ce(t[i],s[i]);if(r!==0)return r}return t.length===s.length?0:t.length<s.length?-1:1}function Ls(n,e){if(me(n)!==me(e))return!1;for(let t=n.pieceNum_,s=e.pieceNum_;t<=n.pieces_.length;t++,s++)if(n.pieces_[t]!==e.pieces_[s])return!1;return!0}function Z(n,e){let t=n.pieceNum_,s=e.pieceNum_;if(me(n)>me(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[s])return!1;++t,++s}return!0}class ul{constructor(e,t){this.errorPrefix_=t,this.parts_=st(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Lt(this.parts_[s]);Ki(this)}}function fl(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=Lt(e),Ki(n)}function ml(n){const e=n.parts_.pop();n.byteLength_-=Lt(e),n.parts_.length>0&&(n.byteLength_-=1)}function Ki(n){if(n.byteLength_>Bn)throw new Error(n.errorPrefix_+"has a key path longer than "+Bn+" bytes ("+n.byteLength_+").");if(n.parts_.length>Fn)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fn+") or object contains a cycle "+be(n))}function be(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
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
 */class Os extends qi{static getInstance(){return new Os}constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return v(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const ze=1e3,pl=60*5*1e3,Hn=30*1e3,gl=1.3,vl=3e4,bl="server_kill",Wn=3;class oe extends ji{constructor(e,t,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=oe.nextPersistentConnectionId_++,this.log_=ht("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ze,this.maxReconnectDelay_=pl,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Os.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&wt.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,s){const i=++this.requestNumber_,r={r:i,a:e,b:t};this.log_(q(r)),v(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const t=new at,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),v(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:t,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(s)})}sendListen_(e){const t=e.query,s=t._path.toString(),i=t._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;oe.warnOnListenWarnings_(l,t),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&ie(e,"w")){const s=ke(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();Q(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||to(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Hn)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=eo(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(t,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,s=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,s)})}unlisten(e,t){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),v(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,t)}sendUnlisten_(e,t,s,i){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:s})}onDisconnectMerge(e,t,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:s})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,s,i){const r={p:t,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,t,s,i){this.putInternal("p",e,t,s,i)}merge(e,t,s,i){this.putInternal("m",e,t,s,i)}putInternal(e,t,s,i,r){this.initConnection_();const o={p:t,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,s,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+q(e));const t=e.r,s=this.requestCBHash_[t];s&&(delete this.requestCBHash_[t],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):us("Unrecognized action received from server: "+q(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){v(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ze,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ze,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>vl&&(this.reconnectDelay_=ze),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*gl)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+oe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){v(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const h=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,u]=await Promise.all([this.authTokenProvider_.getToken(h),this.appCheckTokenProvider_.getToken(h)]);o?Y("getToken() completed but was canceled"):(Y("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=u&&u.token,a=new cl(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,s,f=>{Q(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(bl)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Q(d),l())}}}interrupt(e){Y("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Y("Resuming connection for reason: "+e),delete this.interruptReasons_[e],gn(this.interruptReasons_)&&(this.reconnectDelay_=ze,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let s;t?s=t.map(r=>Ps(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,t){const s=new R(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(t),r.delete(t),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,t){Y("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Wn&&(this.reconnectDelay_=Hn,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){Y("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Wn&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+Ei.replace(/\./g,"-")]=1,pi()?e["framework.cordova"]=1:qr()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=wt.getInstance().currentlyOnline();return gn(this.interruptReasons_)&&e}}oe.nextPersistentConnectionId_=0;oe.nextConnectionId_=0;/**
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
 */class M{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new M(e,t)}}/**
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
 */class Ot{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const s=new M(Re,e),i=new M(Re,t);return this.compare(s,i)!==0}minPost(){return M.MIN}}/**
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
 */let mt;class Qi extends Ot{static get __EMPTY_NODE(){return mt}static set __EMPTY_NODE(e){mt=e}compare(e,t){return Ce(e.name,t.name)}isDefinedOn(e){throw Be("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return M.MIN}maxPost(){return new M(_e,mt)}makePost(e,t){return v(typeof e=="string","KeyIndex indexValue must always be a string."),new M(e,mt)}toString(){return".key"}}const Pe=new Qi;/**
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
 */class pt{constructor(e,t,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?s(e.key,t):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class V{constructor(e,t,s,i,r){this.key=e,this.value=t,this.color=s??V.RED,this.left=i??J.EMPTY_NODE,this.right=r??J.EMPTY_NODE}copy(e,t,s,i,r){return new V(e??this.key,t??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,t,s),null):r===0?i=i.copy(null,t,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,t,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return J.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let s,i;if(s=this,t(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,t),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),t(e,s.key)===0){if(s.right.isEmpty())return J.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,t))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,V.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,V.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}V.RED=!0;V.BLACK=!1;class yl{copy(e,t,s,i,r){return this}insert(e,t,s){return new V(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class J{constructor(e,t=J.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new J(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,V.BLACK,null,null))}remove(e){return new J(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,V.BLACK,null,null))}get(e){let t,s=this.root_;for(;!s.isEmpty();){if(t=this.comparator_(e,s.key),t===0)return s.value;t<0?s=s.left:t>0&&(s=s.right)}return null}getPredecessorKey(e){let t,s=this.root_,i=null;for(;!s.isEmpty();)if(t=this.comparator_(e,s.key),t===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else t<0?s=s.left:t>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new pt(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new pt(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new pt(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new pt(this.root_,null,this.comparator_,!0,e)}}J.EMPTY_NODE=new yl;/**
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
 */function _l(n,e){return Ce(n.name,e.name)}function Fs(n,e){return Ce(n,e)}/**
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
 */let ms;function xl(n){ms=n}const Xi=function(n){return typeof n=="number"?"number:"+Ni(n):"string:"+n},Ji=function(n){if(n.isLeafNode()){const e=n.val();v(typeof e=="string"||typeof e=="number"||typeof e=="object"&&ie(e,".sv"),"Priority must be a string or number.")}else v(n===ms||n.isEmpty(),"priority of unexpected type.");v(n===ms||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Un;class z{static set __childrenNodeConstructor(e){Un=e}static get __childrenNodeConstructor(){return Un}constructor(e,t=z.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,v(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Ji(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new z(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:z.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return N(e)?this:I(e)===".priority"?this.priorityNode_:z.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:z.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const s=I(e);return s===null?t:t.isEmpty()&&s!==".priority"?this:(v(s!==".priority"||me(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,z.__childrenNodeConstructor.EMPTY_NODE.updateChild(F(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Xi(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=Ni(this.value_):e+=this.value_,this.lazyHash_=Ii(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===z.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof z.__childrenNodeConstructor?-1:(v(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,s=typeof this.value_,i=z.VALUE_TYPE_ORDER.indexOf(t),r=z.VALUE_TYPE_ORDER.indexOf(s);return v(i>=0,"Unknown leaf type: "+t),v(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}z.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Zi,er;function Sl(n){Zi=n}function wl(n){er=n}class Cl extends Ot{compare(e,t){const s=e.node.getPriority(),i=t.node.getPriority(),r=s.compareTo(i);return r===0?Ce(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return M.MIN}maxPost(){return new M(_e,new z("[PRIORITY-POST]",er))}makePost(e,t){const s=Zi(e);return new M(t,new z("[PRIORITY-POST]",s))}toString(){return".priority"}}const W=new Cl;/**
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
 */const El=Math.log(2);class Tl{constructor(e){const t=r=>parseInt(Math.log(r)/El,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Ct=function(n,e,t,s){n.sort(e);const i=function(l,c){const h=c-l;let d,u;if(h===0)return null;if(h===1)return d=n[l],u=t?t(d):d,new V(u,d.node,V.BLACK,null,null);{const f=parseInt(h/2,10)+l,m=i(l,f),p=i(f+1,c);return d=n[f],u=t?t(d):d,new V(u,d.node,V.BLACK,m,p)}},r=function(l){let c=null,h=null,d=n.length;const u=function(m,p){const g=d-m,y=d;d-=m;const S=i(g+1,y),b=n[g],w=t?t(b):b;f(new V(w,b.node,p,null,S))},f=function(m){c?(c.left=m,c=m):(h=m,c=m)};for(let m=0;m<l.count;++m){const p=l.nextBitIsOne(),g=Math.pow(2,l.count-(m+1));p?u(g,V.BLACK):(u(g,V.BLACK),u(g,V.RED))}return h},o=new Tl(n.length),a=r(o);return new J(s||e,a)};/**
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
 */let ss;const Te={};class re{static get Default(){return v(Te&&W,"ChildrenNode.ts has not been loaded"),ss=ss||new re({".priority":Te},{".priority":W}),ss}constructor(e,t){this.indexes_=e,this.indexSet_=t}get(e){const t=ke(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof J?t:null}hasIndex(e){return ie(this.indexSet_,e.toString())}addIndex(e,t){v(e!==Pe,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=t.getIterator(M.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Ct(s,e.getCompare()):a=Te;const l=e.toString(),c={...this.indexSet_};c[l]=e;const h={...this.indexes_};return h[l]=a,new re(h,c)}addToIndexes(e,t){const s=bt(this.indexes_,(i,r)=>{const o=ke(this.indexSet_,r);if(v(o,"Missing index implementation for "+r),i===Te)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(M.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Ct(a,o.getCompare())}else return Te;else{const a=t.get(e.name);let l=i;return a&&(l=l.remove(new M(e.name,a))),l.insert(e,e.node)}});return new re(s,this.indexSet_)}removeFromIndexes(e,t){const s=bt(this.indexes_,i=>{if(i===Te)return i;{const r=t.get(e.name);return r?i.remove(new M(e.name,r)):i}});return new re(s,this.indexSet_)}}/**
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
 */let Ve;class C{static get EMPTY_NODE(){return Ve||(Ve=new C(new J(Fs),null,re.Default))}constructor(e,t,s){this.children_=e,this.priorityNode_=t,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Ji(this.priorityNode_),this.children_.isEmpty()&&v(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||Ve}updatePriority(e){return this.children_.isEmpty()?this:new C(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?Ve:t}}getChild(e){const t=I(e);return t===null?this:this.getImmediateChild(t).getChild(F(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(v(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const s=new M(e,t);let i,r;t.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?Ve:this.priorityNode_;return new C(i,o,r)}}updateChild(e,t){const s=I(e);if(s===null)return t;{v(I(e)!==".priority"||me(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(F(e),t);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let s=0,i=0,r=!0;if(this.forEachChild(W,(o,a)=>{t[o]=a.val(e),s++,r&&C.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Xi(this.getPriority().val())+":"),this.forEachChild(W,(t,s)=>{const i=s.hash();i!==""&&(e+=":"+t+":"+i)}),this.lazyHash_=e===""?"":Ii(e)}return this.lazyHash_}getPredecessorChildName(e,t,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new M(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new M(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const s=t.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new M(t,this.children_.get(t)):null}forEachChild(e,t){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>t(i.name,i.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,M.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const s=this.resolveIndex_(t);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,M.Wrap);let r=i.peek();for(;r!=null&&t.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===ut?-1:0}withIndex(e){if(e===Pe||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new C(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===Pe||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const s=this.getIterator(W),i=t.getIterator(W);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Pe?null:this.indexMap_.get(e.toString())}}C.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Il extends C{constructor(){super(new J(Fs),C.EMPTY_NODE,re.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return C.EMPTY_NODE}isEmpty(){return!1}}const ut=new Il;Object.defineProperties(M,{MIN:{value:new M(Re,C.EMPTY_NODE)},MAX:{value:new M(_e,ut)}});Qi.__EMPTY_NODE=C.EMPTY_NODE;z.__childrenNodeConstructor=C;xl(ut);wl(ut);/**
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
 */const Ml=!0;function j(n,e=null){if(n===null)return C.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),v(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new z(t,j(e))}if(!(n instanceof Array)&&Ml){const t=[];let s=!1;if(K(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=j(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),t.push(new M(o,l)))}}),t.length===0)return C.EMPTY_NODE;const r=Ct(t,_l,o=>o.name,Fs);if(s){const o=Ct(t,W.getCompare());return new C(r,j(e),new re({".priority":o},{".priority":W}))}else return new C(r,j(e),re.Default)}else{let t=C.EMPTY_NODE;return K(n,(s,i)=>{if(ie(n,s)&&s.substring(0,1)!=="."){const r=j(i);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(s,r))}}),t.updatePriority(j(e))}}Sl(j);/**
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
 */class Nl extends Ot{constructor(e){super(),this.indexPath_=e,v(!N(e)&&I(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const s=this.extractChild(e.node),i=this.extractChild(t.node),r=s.compareTo(i);return r===0?Ce(e.name,t.name):r}makePost(e,t){const s=j(e),i=C.EMPTY_NODE.updateChild(this.indexPath_,s);return new M(t,i)}maxPost(){const e=C.EMPTY_NODE.updateChild(this.indexPath_,ut);return new M(_e,e)}toString(){return st(this.indexPath_,0).join("/")}}/**
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
 */class Al extends Ot{compare(e,t){const s=e.node.compareTo(t.node);return s===0?Ce(e.name,t.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return M.MIN}maxPost(){return M.MAX}makePost(e,t){const s=j(e);return new M(t,s)}toString(){return".value"}}const Pl=new Al;/**
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
 */function tr(n){return{type:"value",snapshotNode:n}}function De(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function nt(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function it(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function $l(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
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
 */class Bs{constructor(e){this.index_=e}updateChild(e,t,s,i,r,o){v(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(t)?o.trackChildChange(nt(t,a)):v(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(De(t,s)):o.trackChildChange(it(t,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(t,s).withIndex(this.index_)}updateFullNode(e,t,s){return s!=null&&(e.isLeafNode()||e.forEachChild(W,(i,r)=>{t.hasChild(i)||s.trackChildChange(nt(i,r))}),t.isLeafNode()||t.forEachChild(W,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(it(i,r,o))}else s.trackChildChange(De(i,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?C.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class rt{constructor(e){this.indexedFilter_=new Bs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=rt.getStartPost_(e),this.endPost_=rt.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&s}updateChild(e,t,s,i,r,o){return this.matches(new M(t,s))||(s=C.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,s,i,r,o)}updateFullNode(e,t,s){t.isLeafNode()&&(t=C.EMPTY_NODE);let i=t.withIndex(this.index_);i=i.updatePriority(C.EMPTY_NODE);const r=this;return t.forEachChild(W,(o,a)=>{r.matches(new M(o,a))||(i=i.updateImmediateChild(o,C.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
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
 */class kl{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=t=>{const s=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new rt(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,s,i,r,o){return this.rangedFilter_.matches(new M(t,s))||(s=C.EMPTY_NODE),e.getImmediateChild(t).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,s,i,r,o):this.fullLimitUpdateChild_(e,t,s,r,o)}updateFullNode(e,t,s){let i;if(t.isLeafNode()||t.isEmpty())i=C.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){i=C.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=t.withIndex(this.index_),i=i.updatePriority(C.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,C.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(u,f)=>d(f,u)}else o=this.index_.getCompare();const a=e;v(a.numChildren()===this.limit_,"");const l=new M(t,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),h=this.rangedFilter_.matches(l);if(a.hasChild(t)){const d=a.getImmediateChild(t);let u=i.getChildAfterChild(this.index_,c,this.reverse_);for(;u!=null&&(u.name===t||a.hasChild(u.name));)u=i.getChildAfterChild(this.index_,u,this.reverse_);const f=u==null?1:o(u,l);if(h&&!s.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(it(t,s,d)),a.updateImmediateChild(t,s);{r!=null&&r.trackChildChange(nt(t,d));const p=a.updateImmediateChild(t,C.EMPTY_NODE);return u!=null&&this.rangedFilter_.matches(u)?(r!=null&&r.trackChildChange(De(u.name,u.node)),p.updateImmediateChild(u.name,u.node)):p}}else return s.isEmpty()?e:h&&o(c,l)>=0?(r!=null&&(r.trackChildChange(nt(c.name,c.node)),r.trackChildChange(De(t,s))),a.updateImmediateChild(t,s).updateImmediateChild(c.name,C.EMPTY_NODE)):e}}/**
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
 */class Hs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=W}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return v(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return v(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Re}hasEnd(){return this.endSet_}getIndexEndValue(){return v(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return v(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:_e}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return v(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===W}copy(){const e=new Hs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Rl(n){return n.loadsAllData()?new Bs(n.getIndex()):n.hasLimit()?new kl(n):new rt(n)}function Gn(n){const e={};if(n.isDefault())return e;let t;if(n.index_===W?t="$priority":n.index_===Pl?t="$value":n.index_===Pe?t="$key":(v(n.index_ instanceof Nl,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=q(t),n.startSet_){const s=n.startAfterSet_?"startAfter":"startAt";e[s]=q(n.indexStartValue_),n.startNameSet_&&(e[s]+=","+q(n.indexStartName_))}if(n.endSet_){const s=n.endBeforeSet_?"endBefore":"endAt";e[s]=q(n.indexEndValue_),n.endNameSet_&&(e[s]+=","+q(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function zn(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==W&&(e.i=n.index_.toString()),e}/**
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
 */class Et extends ji{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(v(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,t,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=ht("p:rest:"),this.listens_={}}listen(e,t,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Et.getListenId_(e,s),a={};this.listens_[o]=a;const l=Gn(e._queryParams);this.restRequest_(r+".json",l,(c,h)=>{let d=h;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),ke(this.listens_,o)===a){let u;c?c===401?u="permission_denied":u="rest_error:"+c:u="ok",i(u,null)}})}unlisten(e,t){const s=Et.getListenId_(e,t);delete this.listens_[s]}get(e){const t=Gn(e._queryParams),s=e._path.toString(),i=new at;return this.restRequest_(s+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,t={},s){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(t.auth=i.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+so(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Je(a.responseText)}catch{Q("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Q("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Dl{constructor(){this.rootNode_=C.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
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
 */function Tt(){return{value:null,children:new Map}}function sr(n,e,t){if(N(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const s=I(e);n.children.has(s)||n.children.set(s,Tt());const i=n.children.get(s);e=F(e),sr(i,e,t)}}function ps(n,e,t){n.value!==null?t(e,n.value):Ll(n,(s,i)=>{const r=new R(e.toString()+"/"+s);ps(i,r,t)})}function Ll(n,e){n.children.forEach((t,s)=>{e(s,t)})}/**
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
 */class Ol{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t={...e};return this.last_&&K(this.last_,(s,i)=>{t[s]=t[s]-i}),this.last_=e,t}}/**
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
 */const Vn=10*1e3,Fl=30*1e3,Bl=5*60*1e3;class Hl{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new Ol(e);const s=Vn+(Fl-Vn)*Math.random();Ye(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),t={};let s=!1;K(e,(i,r)=>{r>0&&ie(this.statsToReport_,i)&&(t[i]=r,s=!0)}),s&&this.server_.reportStats(t),Ye(this.reportStats_.bind(this),Math.floor(Math.random()*2*Bl))}}/**
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
 */var te;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(te||(te={}));function Ws(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Us(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gs(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
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
 */class It{constructor(e,t,s){this.path=e,this.affectedTree=t,this.revert=s,this.type=te.ACK_USER_WRITE,this.source=Ws()}operationForChild(e){if(N(this.path)){if(this.affectedTree.value!=null)return v(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new R(e));return new It(A(),t,this.revert)}}else return v(I(this.path)===e,"operationForChild called for unrelated child."),new It(F(this.path),this.affectedTree,this.revert)}}/**
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
 */class ot{constructor(e,t){this.source=e,this.path=t,this.type=te.LISTEN_COMPLETE}operationForChild(e){return N(this.path)?new ot(this.source,A()):new ot(this.source,F(this.path))}}/**
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
 */class xe{constructor(e,t,s){this.source=e,this.path=t,this.snap=s,this.type=te.OVERWRITE}operationForChild(e){return N(this.path)?new xe(this.source,A(),this.snap.getImmediateChild(e)):new xe(this.source,F(this.path),this.snap)}}/**
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
 */class Le{constructor(e,t,s){this.source=e,this.path=t,this.children=s,this.type=te.MERGE}operationForChild(e){if(N(this.path)){const t=this.children.subtree(new R(e));return t.isEmpty()?null:t.value?new xe(this.source,A(),t.value):new Le(this.source,A(),t)}else return v(I(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Le(this.source,F(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class Se{constructor(e,t,s){this.node_=e,this.fullyInitialized_=t,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(N(e))return this.isFullyInitialized()&&!this.filtered_;const t=I(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Wl{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Ul(n,e,t,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push($l(o.childName,o.snapshotNode))}),je(n,i,"child_removed",e,s,t),je(n,i,"child_added",e,s,t),je(n,i,"child_moved",r,s,t),je(n,i,"child_changed",e,s,t),je(n,i,"value",e,s,t),i}function je(n,e,t,s,i,r){const o=s.filter(a=>a.type===t);o.sort((a,l)=>zl(n,a,l)),o.forEach(a=>{const l=Gl(n,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Gl(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function zl(n,e,t){if(e.childName==null||t.childName==null)throw Be("Should only compare child_ events.");const s=new M(e.childName,e.snapshotNode),i=new M(t.childName,t.snapshotNode);return n.index_.compare(s,i)}/**
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
 */function Ft(n,e){return{eventCache:n,serverCache:e}}function Ke(n,e,t,s){return Ft(new Se(e,t,s),n.serverCache)}function nr(n,e,t,s){return Ft(n.eventCache,new Se(e,t,s))}function gs(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function we(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
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
 */let ns;const Vl=()=>(ns||(ns=new J(Na)),ns);class L{static fromObject(e){let t=new L(null);return K(e,(s,i)=>{t=t.set(new R(s),i)}),t}constructor(e,t=Vl()){this.value=e,this.children=t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:A(),value:this.value};if(N(e))return null;{const s=I(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(F(e),t);return r!=null?{path:H(new R(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(N(e))return this;{const t=I(e),s=this.children.get(t);return s!==null?s.subtree(F(e)):new L(null)}}set(e,t){if(N(e))return new L(t,this.children);{const s=I(e),r=(this.children.get(s)||new L(null)).set(F(e),t),o=this.children.insert(s,r);return new L(this.value,o)}}remove(e){if(N(e))return this.children.isEmpty()?new L(null):new L(null,this.children);{const t=I(e),s=this.children.get(t);if(s){const i=s.remove(F(e));let r;return i.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,i),this.value===null&&r.isEmpty()?new L(null):new L(this.value,r)}else return this}}get(e){if(N(e))return this.value;{const t=I(e),s=this.children.get(t);return s?s.get(F(e)):null}}setTree(e,t){if(N(e))return t;{const s=I(e),r=(this.children.get(s)||new L(null)).setTree(F(e),t);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new L(this.value,o)}}fold(e){return this.fold_(A(),e)}fold_(e,t){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(H(e,i),t)}),t(e,this.value,s)}findOnPath(e,t){return this.findOnPath_(e,A(),t)}findOnPath_(e,t,s){const i=this.value?s(t,this.value):!1;if(i)return i;if(N(e))return null;{const r=I(e),o=this.children.get(r);return o?o.findOnPath_(F(e),H(t,r),s):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,A(),t)}foreachOnPath_(e,t,s){if(N(e))return this;{this.value&&s(t,this.value);const i=I(e),r=this.children.get(i);return r?r.foreachOnPath_(F(e),H(t,i),s):new L(null)}}foreach(e){this.foreach_(A(),e)}foreach_(e,t){this.children.inorderTraversal((s,i)=>{i.foreach_(H(e,s),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,s)=>{s.value&&e(t,s.value)})}}/**
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
 */class se{constructor(e){this.writeTree_=e}static empty(){return new se(new L(null))}}function Qe(n,e,t){if(N(e))return new se(new L(t));{const s=n.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=X(i,e);return r=r.updateChild(o,t),new se(n.writeTree_.set(i,r))}else{const i=new L(t),r=n.writeTree_.setTree(e,i);return new se(r)}}}function vs(n,e,t){let s=n;return K(t,(i,r)=>{s=Qe(s,H(e,i),r)}),s}function jn(n,e){if(N(e))return se.empty();{const t=n.writeTree_.setTree(e,new L(null));return new se(t)}}function bs(n,e){return Ee(n,e)!=null}function Ee(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(X(t.path,e)):null}function qn(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(W,(s,i)=>{e.push(new M(s,i))}):n.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new M(s,i.value))}),e}function fe(n,e){if(N(e))return n;{const t=Ee(n,e);return t!=null?new se(new L(t)):new se(n.writeTree_.subtree(e))}}function ys(n){return n.writeTree_.isEmpty()}function Oe(n,e){return ir(A(),n.writeTree_,e)}function ir(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(v(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):t=ir(H(n,i),r,t)}),!t.getChild(n).isEmpty()&&s!==null&&(t=t.updateChild(H(n,".priority"),s)),t}}/**
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
 */function zs(n,e){return lr(e,n)}function jl(n,e,t,s,i){v(s>n.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),n.allWrites.push({path:e,snap:t,writeId:s,visible:i}),i&&(n.visibleWrites=Qe(n.visibleWrites,e,t)),n.lastWriteId=s}function ql(n,e,t,s){v(s>n.lastWriteId,"Stacking an older merge on top of newer ones"),n.allWrites.push({path:e,children:t,writeId:s,visible:!0}),n.visibleWrites=vs(n.visibleWrites,e,t),n.lastWriteId=s}function Yl(n,e){for(let t=0;t<n.allWrites.length;t++){const s=n.allWrites[t];if(s.writeId===e)return s}return null}function Kl(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);v(t>=0,"removeWrite called with nonexistent writeId.");const s=n.allWrites[t];n.allWrites.splice(t,1);let i=s.visible,r=!1,o=n.allWrites.length-1;for(;i&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&Ql(a,s.path)?i=!1:Z(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Xl(n),!0;if(s.snap)n.visibleWrites=jn(n.visibleWrites,s.path);else{const a=s.children;K(a,l=>{n.visibleWrites=jn(n.visibleWrites,H(s.path,l))})}return!0}else return!1}function Ql(n,e){if(n.snap)return Z(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&Z(H(n.path,t),e))return!0;return!1}function Xl(n){n.visibleWrites=rr(n.allWrites,Jl,A()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function Jl(n){return n.visible}function rr(n,e,t){let s=se.empty();for(let i=0;i<n.length;++i){const r=n[i];if(e(r)){const o=r.path;let a;if(r.snap)Z(t,o)?(a=X(t,o),s=Qe(s,a,r.snap)):Z(o,t)&&(a=X(o,t),s=Qe(s,A(),r.snap.getChild(a)));else if(r.children){if(Z(t,o))a=X(t,o),s=vs(s,a,r.children);else if(Z(o,t))if(a=X(o,t),N(a))s=vs(s,A(),r.children);else{const l=ke(r.children,I(a));if(l){const c=l.getChild(F(a));s=Qe(s,A(),c)}}}else throw Be("WriteRecord should have .snap or .children")}}return s}function or(n,e,t,s,i){if(!s&&!i){const r=Ee(n.visibleWrites,e);if(r!=null)return r;{const o=fe(n.visibleWrites,e);if(ys(o))return t;if(t==null&&!bs(o,A()))return null;{const a=t||C.EMPTY_NODE;return Oe(o,a)}}}else{const r=fe(n.visibleWrites,e);if(!i&&ys(r))return t;if(!i&&t==null&&!bs(r,A()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(Z(c.path,e)||Z(e,c.path))},a=rr(n.allWrites,o,e),l=t||C.EMPTY_NODE;return Oe(a,l)}}}function Zl(n,e,t){let s=C.EMPTY_NODE;const i=Ee(n.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(W,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(t){const r=fe(n.visibleWrites,e);return t.forEachChild(W,(o,a)=>{const l=Oe(fe(r,new R(o)),a);s=s.updateImmediateChild(o,l)}),qn(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=fe(n.visibleWrites,e);return qn(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function ec(n,e,t,s,i){v(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=H(e,t);if(bs(n.visibleWrites,r))return null;{const o=fe(n.visibleWrites,r);return ys(o)?i.getChild(t):Oe(o,i.getChild(t))}}function tc(n,e,t,s){const i=H(e,t),r=Ee(n.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(t)){const o=fe(n.visibleWrites,i);return Oe(o,s.getNode().getImmediateChild(t))}else return null}function sc(n,e){return Ee(n.visibleWrites,e)}function nc(n,e,t,s,i,r,o){let a;const l=fe(n.visibleWrites,e),c=Ee(l,A());if(c!=null)a=c;else if(t!=null)a=Oe(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const h=[],d=o.getCompare(),u=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let f=u.getNext();for(;f&&h.length<i;)d(f,s)!==0&&h.push(f),f=u.getNext();return h}else return[]}function ic(){return{visibleWrites:se.empty(),allWrites:[],lastWriteId:-1}}function Mt(n,e,t,s){return or(n.writeTree,n.treePath,e,t,s)}function Vs(n,e){return Zl(n.writeTree,n.treePath,e)}function Yn(n,e,t,s){return ec(n.writeTree,n.treePath,e,t,s)}function Nt(n,e){return sc(n.writeTree,H(n.treePath,e))}function rc(n,e,t,s,i,r){return nc(n.writeTree,n.treePath,e,t,s,i,r)}function js(n,e,t){return tc(n.writeTree,n.treePath,e,t)}function ar(n,e){return lr(H(n.treePath,e),n.writeTree)}function lr(n,e){return{treePath:n,writeTree:e}}/**
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
 */class oc{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,s=e.childName;v(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),v(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(s,it(s,e.snapshotNode,i.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(s,nt(s,i.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(s,De(s,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(s,it(s,e.snapshotNode,i.oldSnap));else throw Be("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class ac{getCompleteChild(e){return null}getChildAfterChild(e,t,s){return null}}const cr=new ac;class qs{constructor(e,t,s=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=s}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new Se(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return js(this.writes_,e,s)}}getChildAfterChild(e,t,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:we(this.viewCache_),r=rc(this.writes_,i,t,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function lc(n){return{filter:n}}function cc(n,e){v(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),v(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function dc(n,e,t,s,i){const r=new oc;let o,a;if(t.type===te.OVERWRITE){const c=t;c.source.fromUser?o=_s(n,e,c.path,c.snap,s,i,r):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!N(c.path),o=At(n,e,c.path,c.snap,s,i,a,r))}else if(t.type===te.MERGE){const c=t;c.source.fromUser?o=uc(n,e,c.path,c.children,s,i,r):(v(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=xs(n,e,c.path,c.children,s,i,a,r))}else if(t.type===te.ACK_USER_WRITE){const c=t;c.revert?o=pc(n,e,c.path,s,i,r):o=fc(n,e,c.path,c.affectedTree,s,i,r)}else if(t.type===te.LISTEN_COMPLETE)o=mc(n,e,t.path,s,r);else throw Be("Unknown operation type: "+t.type);const l=r.getChanges();return hc(e,o,l),{viewCache:o,changes:l}}function hc(n,e,t){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=gs(n);(t.length>0||!n.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&t.push(tr(gs(e)))}}function dr(n,e,t,s,i,r){const o=e.eventCache;if(Nt(s,t)!=null)return e;{let a,l;if(N(t))if(v(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=we(e),h=c instanceof C?c:C.EMPTY_NODE,d=Vs(s,h);a=n.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Mt(s,we(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=I(t);if(c===".priority"){v(me(t)===1,"Can't have a priority with additional path components");const h=o.getNode();l=e.serverCache.getNode();const d=Yn(s,t,h,l);d!=null?a=n.filter.updatePriority(h,d):a=o.getNode()}else{const h=F(t);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const u=Yn(s,t,o.getNode(),l);u!=null?d=o.getNode().getImmediateChild(c).updateChild(h,u):d=o.getNode().getImmediateChild(c)}else d=js(s,c,e.serverCache);d!=null?a=n.filter.updateChild(o.getNode(),c,d,h,i,r):a=o.getNode()}}return Ke(e,a,o.isFullyInitialized()||N(t),n.filter.filtersNodes())}}function At(n,e,t,s,i,r,o,a){const l=e.serverCache;let c;const h=o?n.filter:n.filter.getIndexedFilter();if(N(t))c=h.updateFullNode(l.getNode(),s,null);else if(h.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,s);c=h.updateFullNode(l.getNode(),f,null)}else{const f=I(t);if(!l.isCompleteForPath(t)&&me(t)>1)return e;const m=F(t),g=l.getNode().getImmediateChild(f).updateChild(m,s);f===".priority"?c=h.updatePriority(l.getNode(),g):c=h.updateChild(l.getNode(),f,g,m,cr,null)}const d=nr(e,c,l.isFullyInitialized()||N(t),h.filtersNodes()),u=new qs(i,d,r);return dr(n,d,t,i,u,a)}function _s(n,e,t,s,i,r,o){const a=e.eventCache;let l,c;const h=new qs(i,e,r);if(N(t))c=n.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ke(e,c,!0,n.filter.filtersNodes());else{const d=I(t);if(d===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),s),l=Ke(e,c,a.isFullyInitialized(),a.isFiltered());else{const u=F(t),f=a.getNode().getImmediateChild(d);let m;if(N(u))m=s;else{const p=h.getCompleteChild(d);p!=null?Ds(u)===".priority"&&p.getChild(Yi(u)).isEmpty()?m=p:m=p.updateChild(u,s):m=C.EMPTY_NODE}if(f.equals(m))l=e;else{const p=n.filter.updateChild(a.getNode(),d,m,u,h,o);l=Ke(e,p,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Kn(n,e){return n.eventCache.isCompleteForChild(e)}function uc(n,e,t,s,i,r,o){let a=e;return s.foreach((l,c)=>{const h=H(t,l);Kn(e,I(h))&&(a=_s(n,a,h,c,i,r,o))}),s.foreach((l,c)=>{const h=H(t,l);Kn(e,I(h))||(a=_s(n,a,h,c,i,r,o))}),a}function Qn(n,e,t){return t.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function xs(n,e,t,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;N(t)?c=s:c=new L(null).setTree(t,s);const h=e.serverCache.getNode();return c.children.inorderTraversal((d,u)=>{if(h.hasChild(d)){const f=e.serverCache.getNode().getImmediateChild(d),m=Qn(n,f,u);l=At(n,l,new R(d),m,i,r,o,a)}}),c.children.inorderTraversal((d,u)=>{const f=!e.serverCache.isCompleteForChild(d)&&u.value===null;if(!h.hasChild(d)&&!f){const m=e.serverCache.getNode().getImmediateChild(d),p=Qn(n,m,u);l=At(n,l,new R(d),p,i,r,o,a)}}),l}function fc(n,e,t,s,i,r,o){if(Nt(i,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(N(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return At(n,e,t,l.getNode().getChild(t),i,r,a,o);if(N(t)){let c=new L(null);return l.getNode().forEachChild(Pe,(h,d)=>{c=c.set(new R(h),d)}),xs(n,e,t,c,i,r,a,o)}else return e}else{let c=new L(null);return s.foreach((h,d)=>{const u=H(t,h);l.isCompleteForPath(u)&&(c=c.set(h,l.getNode().getChild(u)))}),xs(n,e,t,c,i,r,a,o)}}function mc(n,e,t,s,i){const r=e.serverCache,o=nr(e,r.getNode(),r.isFullyInitialized()||N(t),r.isFiltered());return dr(n,o,t,s,cr,i)}function pc(n,e,t,s,i,r){let o;if(Nt(s,t)!=null)return e;{const a=new qs(s,e,i),l=e.eventCache.getNode();let c;if(N(t)||I(t)===".priority"){let h;if(e.serverCache.isFullyInitialized())h=Mt(s,we(e));else{const d=e.serverCache.getNode();v(d instanceof C,"serverChildren would be complete if leaf node"),h=Vs(s,d)}h=h,c=n.filter.updateFullNode(l,h,r)}else{const h=I(t);let d=js(s,h,e.serverCache);d==null&&e.serverCache.isCompleteForChild(h)&&(d=l.getImmediateChild(h)),d!=null?c=n.filter.updateChild(l,h,d,F(t),a,r):e.eventCache.getNode().hasChild(h)?c=n.filter.updateChild(l,h,C.EMPTY_NODE,F(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Mt(s,we(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Nt(s,A())!=null,Ke(e,c,o,n.filter.filtersNodes())}}/**
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
 */class gc{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Bs(s.getIndex()),r=Rl(s);this.processor_=lc(r);const o=t.serverCache,a=t.eventCache,l=i.updateFullNode(C.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(C.EMPTY_NODE,a.getNode(),null),h=new Se(l,o.isFullyInitialized(),i.filtersNodes()),d=new Se(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ft(d,h),this.eventGenerator_=new Wl(this.query_)}get query(){return this.query_}}function vc(n){return n.viewCache_.serverCache.getNode()}function bc(n,e){const t=we(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!N(e)&&!t.getImmediateChild(I(e)).isEmpty())?t.getChild(e):null}function Xn(n){return n.eventRegistrations_.length===0}function yc(n,e){n.eventRegistrations_.push(e)}function Jn(n,e,t){const s=[];if(t){v(e==null,"A cancel should cancel all event registrations.");const i=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=i}else n.eventRegistrations_=[];return s}function Zn(n,e,t,s){e.type===te.MERGE&&e.source.queryId!==null&&(v(we(n.viewCache_),"We should always have a full cache before handling merges"),v(gs(n.viewCache_),"Missing event cache, even though we have a server cache"));const i=n.viewCache_,r=dc(n.processor_,i,e,t,s);return cc(n.processor_,r.viewCache),v(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,hr(n,r.changes,r.viewCache.eventCache.getNode(),null)}function _c(n,e){const t=n.viewCache_.eventCache,s=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(W,(r,o)=>{s.push(De(r,o))}),t.isFullyInitialized()&&s.push(tr(t.getNode())),hr(n,s,t.getNode(),e)}function hr(n,e,t,s){const i=s?[s]:n.eventRegistrations_;return Ul(n.eventGenerator_,e,t,i)}/**
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
 */let Pt;class xc{constructor(){this.views=new Map}}function Sc(n){v(!Pt,"__referenceConstructor has already been defined"),Pt=n}function wc(){return v(Pt,"Reference.ts has not been loaded"),Pt}function Cc(n){return n.views.size===0}function Ys(n,e,t,s){const i=e.source.queryId;if(i!==null){const r=n.views.get(i);return v(r!=null,"SyncTree gave us an op for an invalid query."),Zn(r,e,t,s)}else{let r=[];for(const o of n.views.values())r=r.concat(Zn(o,e,t,s));return r}}function Ec(n,e,t,s,i){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=Mt(t,i?s:null),l=!1;a?l=!0:s instanceof C?(a=Vs(t,s),l=!1):(a=C.EMPTY_NODE,l=!1);const c=Ft(new Se(a,l,!1),new Se(s,i,!1));return new gc(e,c)}return o}function Tc(n,e,t,s,i,r){const o=Ec(n,e,s,i,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),yc(o,t),_c(o,t)}function Ic(n,e,t,s){const i=e._queryIdentifier,r=[];let o=[];const a=pe(n);if(i==="default")for(const[l,c]of n.views.entries())o=o.concat(Jn(c,t,s)),Xn(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(i);l&&(o=o.concat(Jn(l,t,s)),Xn(l)&&(n.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!pe(n)&&r.push(new(wc())(e._repo,e._path)),{removed:r,events:o}}function ur(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function $e(n,e){let t=null;for(const s of n.views.values())t=t||bc(s,e);return t}function fr(n,e){if(e._queryParams.loadsAllData())return Bt(n);{const s=e._queryIdentifier;return n.views.get(s)}}function mr(n,e){return fr(n,e)!=null}function pe(n){return Bt(n)!=null}function Bt(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let $t;function Mc(n){v(!$t,"__referenceConstructor has already been defined"),$t=n}function Nc(){return v($t,"Reference.ts has not been loaded"),$t}let Ac=1;class ei{constructor(e){this.listenProvider_=e,this.syncPointTree_=new L(null),this.pendingWriteTree_=ic(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function pr(n,e,t,s,i){return jl(n.pendingWriteTree_,e,t,s,i),i?We(n,new xe(Ws(),e,t)):[]}function Pc(n,e,t,s){ql(n.pendingWriteTree_,e,t,s);const i=L.fromObject(t);return We(n,new Le(Ws(),e,i))}function de(n,e,t=!1){const s=Yl(n.pendingWriteTree_,e);if(Kl(n.pendingWriteTree_,e)){let r=new L(null);return s.snap!=null?r=r.set(A(),!0):K(s.children,o=>{r=r.set(new R(o),!0)}),We(n,new It(s.path,r,t))}else return[]}function Ht(n,e,t){return We(n,new xe(Us(),e,t))}function $c(n,e,t){const s=L.fromObject(t);return We(n,new Le(Us(),e,s))}function kc(n,e){return We(n,new ot(Us(),e))}function Rc(n,e,t){const s=Qs(n,t);if(s){const i=Xs(s),r=i.path,o=i.queryId,a=X(r,e),l=new ot(Gs(o),a);return Js(n,r,l)}else return[]}function Ss(n,e,t,s,i=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||mr(o,e))){const l=Ic(o,e,t,s);Cc(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const h=c.findIndex(u=>u._queryParams.loadsAllData())!==-1,d=n.syncPointTree_.findOnPath(r,(u,f)=>pe(f));if(h&&!d){const u=n.syncPointTree_.subtree(r);if(!u.isEmpty()){const f=Oc(u);for(let m=0;m<f.length;++m){const p=f[m],g=p.query,y=br(n,p);n.listenProvider_.startListening(Xe(g),kt(n,g),y.hashFn,y.onComplete)}}}!d&&c.length>0&&!s&&(h?n.listenProvider_.stopListening(Xe(e),null):c.forEach(u=>{const f=n.queryToTagMap.get(Wt(u));n.listenProvider_.stopListening(Xe(u),f)}))}Fc(n,c)}return a}function Dc(n,e,t,s){const i=Qs(n,s);if(i!=null){const r=Xs(i),o=r.path,a=r.queryId,l=X(o,e),c=new xe(Gs(a),l,t);return Js(n,o,c)}else return[]}function Lc(n,e,t,s){const i=Qs(n,s);if(i){const r=Xs(i),o=r.path,a=r.queryId,l=X(o,e),c=L.fromObject(t),h=new Le(Gs(a),l,c);return Js(n,o,h)}else return[]}function ti(n,e,t,s=!1){const i=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(i,(u,f)=>{const m=X(u,i);r=r||$e(f,m),o=o||pe(f)});let a=n.syncPointTree_.get(i);a?(o=o||pe(a),r=r||$e(a,A())):(a=new xc,n.syncPointTree_=n.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=C.EMPTY_NODE,n.syncPointTree_.subtree(i).foreachChild((f,m)=>{const p=$e(m,A());p&&(r=r.updateImmediateChild(f,p))}));const c=mr(a,e);if(!c&&!e._queryParams.loadsAllData()){const u=Wt(e);v(!n.queryToTagMap.has(u),"View does not exist, but we have a tag");const f=Bc();n.queryToTagMap.set(u,f),n.tagToQueryMap.set(f,u)}const h=zs(n.pendingWriteTree_,i);let d=Tc(a,e,t,h,r,l);if(!c&&!o&&!s){const u=fr(a,e);d=d.concat(Hc(n,e,u))}return d}function Ks(n,e,t){const i=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=X(o,e),c=$e(a,l);if(c)return c});return or(i,e,r,t,!0)}function We(n,e){return gr(e,n.syncPointTree_,null,zs(n.pendingWriteTree_,A()))}function gr(n,e,t,s){if(N(n.path))return vr(n,e,t,s);{const i=e.get(A());t==null&&i!=null&&(t=$e(i,A()));let r=[];const o=I(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,h=ar(s,o);r=r.concat(gr(a,l,c,h))}return i&&(r=r.concat(Ys(i,n,s,t))),r}}function vr(n,e,t,s){const i=e.get(A());t==null&&i!=null&&(t=$e(i,A()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=ar(s,o),h=n.operationForChild(o);h&&(r=r.concat(vr(h,a,l,c)))}),i&&(r=r.concat(Ys(i,n,s,t))),r}function br(n,e){const t=e.query,s=kt(n,t);return{hashFn:()=>(vc(e)||C.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?Rc(n,t._path,s):kc(n,t._path);{const r=$a(i,t);return Ss(n,t,null,r)}}}}function kt(n,e){const t=Wt(e);return n.queryToTagMap.get(t)}function Wt(n){return n._path.toString()+"$"+n._queryIdentifier}function Qs(n,e){return n.tagToQueryMap.get(e)}function Xs(n){const e=n.indexOf("$");return v(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new R(n.substr(0,e))}}function Js(n,e,t){const s=n.syncPointTree_.get(e);v(s,"Missing sync point for query tag that we're tracking");const i=zs(n.pendingWriteTree_,e);return Ys(s,t,i,null)}function Oc(n){return n.fold((e,t,s)=>{if(t&&pe(t))return[Bt(t)];{let i=[];return t&&(i=ur(t)),K(s,(r,o)=>{i=i.concat(o)}),i}})}function Xe(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Nc())(n._repo,n._path):n}function Fc(n,e){for(let t=0;t<e.length;++t){const s=e[t];if(!s._queryParams.loadsAllData()){const i=Wt(s),r=n.queryToTagMap.get(i);n.queryToTagMap.delete(i),n.tagToQueryMap.delete(r)}}}function Bc(){return Ac++}function Hc(n,e,t){const s=e._path,i=kt(n,e),r=br(n,t),o=n.listenProvider_.startListening(Xe(e),i,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(s);if(i)v(!pe(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,h,d)=>{if(!N(c)&&h&&pe(h))return[Bt(h).query];{let u=[];return h&&(u=u.concat(ur(h).map(f=>f.query))),K(d,(f,m)=>{u=u.concat(m)}),u}});for(let c=0;c<l.length;++c){const h=l[c];n.listenProvider_.stopListening(Xe(h),kt(n,h))}}return o}/**
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
 */class Zs{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new Zs(t)}node(){return this.node_}}class en{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=H(this.path_,e);return new en(this.syncTree_,t)}node(){return Ks(this.syncTree_,this.path_)}}const Wc=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},si=function(n,e,t){if(!n||typeof n!="object")return n;if(v(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Uc(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Gc(n[".sv"],e);v(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Uc=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:v(!1,"Unexpected server value: "+n)}},Gc=function(n,e,t){n.hasOwnProperty("increment")||v(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const s=n.increment;typeof s!="number"&&v(!1,"Unexpected increment value: "+s);const i=e.node();if(v(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},yr=function(n,e,t,s){return tn(e,new en(t,n),s)},_r=function(n,e,t){return tn(n,new Zs(e),t)};function tn(n,e,t){const s=n.getPriority().val(),i=si(s,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=si(o.getValue(),e,t);return a!==o.getValue()||i!==o.getPriority().val()?new z(a,j(i)):n}else{const o=n;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new z(i))),o.forEachChild(W,(a,l)=>{const c=tn(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class sn{constructor(e="",t=null,s={children:{},childCount:0}){this.name=e,this.parent=t,this.node=s}}function nn(n,e){let t=e instanceof R?e:new R(e),s=n,i=I(t);for(;i!==null;){const r=ke(s.node.children,i)||{children:{},childCount:0};s=new sn(i,s,r),t=F(t),i=I(t)}return s}function Ue(n){return n.node.value}function xr(n,e){n.node.value=e,ws(n)}function Sr(n){return n.node.childCount>0}function zc(n){return Ue(n)===void 0&&!Sr(n)}function Ut(n,e){K(n.node.children,(t,s)=>{e(new sn(t,n,s))})}function wr(n,e,t,s){t&&e(n),Ut(n,i=>{wr(i,e,!0)})}function Vc(n,e,t){let s=n.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function ft(n){return new R(n.parent===null?n.name:ft(n.parent)+"/"+n.name)}function ws(n){n.parent!==null&&jc(n.parent,n.name,n)}function jc(n,e,t){const s=zc(t),i=ie(n.node.children,e);s&&i?(delete n.node.children[e],n.node.childCount--,ws(n)):!s&&!i&&(n.node.children[e]=t.node,n.node.childCount++,ws(n))}/**
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
 */const qc=/[\[\].#$\/\u0000-\u001F\u007F]/,Yc=/[\[\].#$\u0000-\u001F\u007F]/,is=10*1024*1024,rn=function(n){return typeof n=="string"&&n.length!==0&&!qc.test(n)},Cr=function(n){return typeof n=="string"&&n.length!==0&&!Yc.test(n)},Kc=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Cr(n)},Qc=function(n){return n===null||typeof n=="string"||typeof n=="number"&&!As(n)||n&&typeof n=="object"&&ie(n,".sv")},Xc=function(n,e,t,s){Gt(Dt(n,"value"),e,t)},Gt=function(n,e,t){const s=t instanceof R?new ul(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+be(s));if(typeof e=="function")throw new Error(n+"contains a function "+be(s)+" with contents = "+e.toString());if(As(e))throw new Error(n+"contains "+e.toString()+" "+be(s));if(typeof e=="string"&&e.length>is/3&&Lt(e)>is)throw new Error(n+"contains a string greater than "+is+" utf8 bytes "+be(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(K(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!rn(o)))throw new Error(n+" contains an invalid key ("+o+") "+be(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);fl(s,o),Gt(n,a,s),ml(s)}),i&&r)throw new Error(n+' contains ".value" child '+be(s)+" in addition to actual children.")}},Jc=function(n,e){let t,s;for(t=0;t<e.length;t++){s=e[t];const r=st(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!rn(r[o]))throw new Error(n+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(hl);let i=null;for(t=0;t<e.length;t++){if(s=e[t],i!==null&&Z(i,s))throw new Error(n+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},Zc=function(n,e,t,s){const i=Dt(n,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];K(e,(o,a)=>{const l=new R(o);if(Gt(i,a,H(t,l)),Ds(l)===".priority"&&!Qc(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),Jc(i,r)},Er=function(n,e,t,s){if(!Cr(t))throw new Error(Dt(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ed=function(n,e,t,s){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Er(n,e,t)},Tr=function(n,e){if(I(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},td=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!rn(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!Kc(t))throw new Error(Dt(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class sd{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function zt(n,e){let t=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();t!==null&&!Ls(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(i)}t&&n.eventLists_.push(t)}function Ir(n,e,t){zt(n,t),Mr(n,s=>Ls(s,e))}function ne(n,e,t){zt(n,t),Mr(n,s=>Z(s,e)||Z(e,s))}function Mr(n,e){n.recursionDepth_++;let t=!0;for(let s=0;s<n.eventLists_.length;s++){const i=n.eventLists_[s];if(i){const r=i.path;e(r)?(nd(n.eventLists_[s]),n.eventLists_[s]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function nd(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const s=t.getEventRunner();qe&&Y("event: "+t.toString()),He(s)}}}/**
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
 */const id="repo_interrupt",rd=25;class od{constructor(e,t,s,i){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sd,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Tt(),this.transactionQueueTree_=new sn,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function ad(n,e,t){if(n.stats_=ks(n.repoInfo_),n.forceRestClient_||La())n.server_=new Et(n.repoInfo_,(s,i,r,o)=>{ni(n,s,i,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>ii(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{q(t)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}n.persistentConnection_=new oe(n.repoInfo_,e,(s,i,r,o)=>{ni(n,s,i,r,o)},s=>{ii(n,s)},s=>{cd(n,s)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(s=>{n.server_.refreshAuthToken(s)}),n.appCheckProvider_.addTokenChangeListener(s=>{n.server_.refreshAppCheckToken(s.token)}),n.statsReporter_=Wa(n.repoInfo_,()=>new Hl(n.stats_,n.server_)),n.infoData_=new Dl,n.infoSyncTree_=new ei({startListening:(s,i,r,o)=>{let a=[];const l=n.infoData_.getNode(s._path);return l.isEmpty()||(a=Ht(n.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),on(n,"connected",!1),n.serverSyncTree_=new ei({startListening:(s,i,r,o)=>(n.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);ne(n.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{n.server_.unlisten(s,i)}})}function ld(n){const t=n.infoData_.getNode(new R(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function Vt(n){return Wc({timestamp:ld(n)})}function ni(n,e,t,s,i){n.dataUpdateCount++;const r=new R(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(i)if(s){const l=bt(t,c=>j(c));o=Lc(n.serverSyncTree_,r,l,i)}else{const l=j(t);o=Dc(n.serverSyncTree_,r,l,i)}else if(s){const l=bt(t,c=>j(c));o=$c(n.serverSyncTree_,r,l)}else{const l=j(t);o=Ht(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Fe(n,r)),ne(n.eventQueue_,a,o)}function ii(n,e){on(n,"connected",e),e===!1&&ud(n)}function cd(n,e){K(e,(t,s)=>{on(n,t,s)})}function on(n,e,t){const s=new R("/.info/"+e),i=j(t);n.infoData_.updateSnapshot(s,i);const r=Ht(n.infoSyncTree_,s,i);ne(n.eventQueue_,s,r)}function an(n){return n.nextWriteId_++}function dd(n,e,t,s,i){jt(n,"set",{path:e.toString(),value:t,priority:s});const r=Vt(n),o=j(t,s),a=Ks(n.serverSyncTree_,e),l=_r(o,a,r),c=an(n),h=pr(n.serverSyncTree_,e,l,c,!0);zt(n.eventQueue_,h),n.server_.put(e.toString(),o.val(!0),(u,f)=>{const m=u==="ok";m||Q("set at "+e+" failed: "+u);const p=de(n.serverSyncTree_,c,!m);ne(n.eventQueue_,e,p),Cs(n,i,u,f)});const d=cn(n,e);Fe(n,d),ne(n.eventQueue_,d,[])}function hd(n,e,t,s){jt(n,"update",{path:e.toString(),value:t});let i=!0;const r=Vt(n),o={};if(K(t,(a,l)=>{i=!1,o[a]=yr(H(e,a),j(l),n.serverSyncTree_,r)}),i)Y("update() called with empty data.  Don't do anything."),Cs(n,s,"ok",void 0);else{const a=an(n),l=Pc(n.serverSyncTree_,e,o,a);zt(n.eventQueue_,l),n.server_.merge(e.toString(),t,(c,h)=>{const d=c==="ok";d||Q("update at "+e+" failed: "+c);const u=de(n.serverSyncTree_,a,!d),f=u.length>0?Fe(n,e):e;ne(n.eventQueue_,f,u),Cs(n,s,c,h)}),K(t,c=>{const h=cn(n,H(e,c));Fe(n,h)}),ne(n.eventQueue_,e,[])}}function ud(n){jt(n,"onDisconnectEvents");const e=Vt(n),t=Tt();ps(n.onDisconnect_,A(),(i,r)=>{const o=yr(i,r,n.serverSyncTree_,e);sr(t,i,o)});let s=[];ps(t,A(),(i,r)=>{s=s.concat(Ht(n.serverSyncTree_,i,r));const o=cn(n,i);Fe(n,o)}),n.onDisconnect_=Tt(),ne(n.eventQueue_,A(),s)}function fd(n,e,t){let s;I(e._path)===".info"?s=ti(n.infoSyncTree_,e,t):s=ti(n.serverSyncTree_,e,t),Ir(n.eventQueue_,e._path,s)}function ri(n,e,t){let s;I(e._path)===".info"?s=Ss(n.infoSyncTree_,e,t):s=Ss(n.serverSyncTree_,e,t),Ir(n.eventQueue_,e._path,s)}function md(n){n.persistentConnection_&&n.persistentConnection_.interrupt(id)}function jt(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),Y(t,...e)}function Cs(n,e,t,s){e&&He(()=>{if(t==="ok")e(null);else{const i=(t||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Nr(n,e,t){return Ks(n.serverSyncTree_,e,t)||C.EMPTY_NODE}function ln(n,e=n.transactionQueueTree_){if(e||qt(n,e),Ue(e)){const t=Pr(n,e);v(t.length>0,"Sending zero length transaction queue"),t.every(i=>i.status===0)&&pd(n,ft(e),t)}else Sr(e)&&Ut(e,t=>{ln(n,t)})}function pd(n,e,t){const s=t.map(c=>c.currentWriteId),i=Nr(n,e,s);let r=i;const o=i.hash();for(let c=0;c<t.length;c++){const h=t[c];v(h.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),h.status=1,h.retryCount++;const d=X(e,h.path);r=r.updateChild(d,h.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{jt(n,"transaction put response",{path:l.toString(),status:c});let h=[];if(c==="ok"){const d=[];for(let u=0;u<t.length;u++)t[u].status=2,h=h.concat(de(n.serverSyncTree_,t[u].currentWriteId)),t[u].onComplete&&d.push(()=>t[u].onComplete(null,!0,t[u].currentOutputSnapshotResolved)),t[u].unwatcher();qt(n,nn(n.transactionQueueTree_,e)),ln(n,n.transactionQueueTree_),ne(n.eventQueue_,e,h);for(let u=0;u<d.length;u++)He(d[u])}else{if(c==="datastale")for(let d=0;d<t.length;d++)t[d].status===3?t[d].status=4:t[d].status=0;else{Q("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<t.length;d++)t[d].status=4,t[d].abortReason=c}Fe(n,e)}},o)}function Fe(n,e){const t=Ar(n,e),s=ft(t),i=Pr(n,t);return gd(n,i,s),s}function gd(n,e,t){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=X(t,l.path);let h=!1,d;if(v(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)h=!0,d=l.abortReason,i=i.concat(de(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=rd)h=!0,d="maxretry",i=i.concat(de(n.serverSyncTree_,l.currentWriteId,!0));else{const u=Nr(n,l.path,o);l.currentInputSnapshot=u;const f=e[a].update(u.val());if(f!==void 0){Gt("transaction failed: Data returned ",f,l.path);let m=j(f);typeof f=="object"&&f!=null&&ie(f,".priority")||(m=m.updatePriority(u.getPriority()));const g=l.currentWriteId,y=Vt(n),S=_r(m,u,y);l.currentOutputSnapshotRaw=m,l.currentOutputSnapshotResolved=S,l.currentWriteId=an(n),o.splice(o.indexOf(g),1),i=i.concat(pr(n.serverSyncTree_,l.path,S,l.currentWriteId,l.applyLocally)),i=i.concat(de(n.serverSyncTree_,g,!0))}else h=!0,d="nodata",i=i.concat(de(n.serverSyncTree_,l.currentWriteId,!0))}ne(n.eventQueue_,t,i),i=[],h&&(e[a].status=2,function(u){setTimeout(u,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}qt(n,n.transactionQueueTree_);for(let a=0;a<s.length;a++)He(s[a]);ln(n,n.transactionQueueTree_)}function Ar(n,e){let t,s=n.transactionQueueTree_;for(t=I(e);t!==null&&Ue(s)===void 0;)s=nn(s,t),e=F(e),t=I(e);return s}function Pr(n,e){const t=[];return $r(n,e,t),t.sort((s,i)=>s.order-i.order),t}function $r(n,e,t){const s=Ue(e);if(s)for(let i=0;i<s.length;i++)t.push(s[i]);Ut(e,i=>{$r(n,i,t)})}function qt(n,e){const t=Ue(e);if(t){let s=0;for(let i=0;i<t.length;i++)t[i].status!==2&&(t[s]=t[i],s++);t.length=s,xr(e,t.length>0?t:void 0)}Ut(e,s=>{qt(n,s)})}function cn(n,e){const t=ft(Ar(n,e)),s=nn(n.transactionQueueTree_,e);return Vc(s,i=>{rs(n,i)}),rs(n,s),wr(s,i=>{rs(n,i)}),t}function rs(n,e){const t=Ue(e);if(t){const s=[];let i=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(v(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(v(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),i=i.concat(de(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&s.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?xr(e,void 0):t.length=r+1,ne(n.eventQueue_,ft(e),i);for(let o=0;o<s.length;o++)He(s[o])}}/**
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
 */function vd(n){let e="";const t=n.split("/");for(let s=0;s<t.length;s++)if(t[s].length>0){let i=t[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function bd(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const s=t.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Q(`Invalid query segment '${t}' in query '${n}'`)}return e}const oi=function(n,e){const t=yd(n),s=t.namespace;t.domain==="firebase.com"&&le(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&t.domain!=="localhost"&&le("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Ia();const i=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new Bi(t.host,t.secure,s,i,e,"",s!==t.subdomain),path:new R(t.pathString)}},yd=function(n){let e="",t="",s="",i="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let h=n.indexOf("/");h===-1&&(h=n.length);let d=n.indexOf("?");d===-1&&(d=n.length),e=n.substring(0,Math.min(h,d)),h<d&&(i=vd(n.substring(h,d)));const u=bd(n.substring(Math.min(n.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const m=e.indexOf(".");s=e.substring(0,m).toLowerCase(),t=e.substring(m+1),r=s}"ns"in u&&(r=u.ns)}return{host:e,port:l,domain:t,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class _d{constructor(e,t,s,i){this.eventType=e,this.eventRegistration=t,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+q(this.snapshot.exportVal())}}class xd{constructor(e,t,s){this.eventRegistration=e,this.error=t,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class Sd{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return v(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class dn{constructor(e,t,s,i){this._repo=e,this._path=t,this._queryParams=s,this._orderByCalled=i}get key(){return N(this._path)?null:Ds(this._path)}get ref(){return new ge(this._repo,this._path)}get _queryIdentifier(){const e=zn(this._queryParams),t=Ps(e);return t==="{}"?"default":t}get _queryObject(){return zn(this._queryParams)}isEqual(e){if(e=ct(e),!(e instanceof dn))return!1;const t=this._repo===e._repo,s=Ls(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return t&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+dl(this._path)}}class ge extends dn{constructor(e,t){super(e,t,new Hs,!1)}get parent(){const e=Yi(this._path);return e===null?null:new ge(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Rt{constructor(e,t,s){this._node=e,this.ref=t,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new R(e),s=Es(this.ref,e);return new Rt(this._node.getChild(t),s,W)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Rt(i,Es(this.ref,s),W)))}hasChild(e){const t=new R(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function Ie(n,e){return n=ct(n),n._checkNotDeleted("ref"),e!==void 0?Es(n._root,e):n._root}function Es(n,e){return n=ct(n),I(n._path)===null?ed("child","path",e):Er("child","path",e),new ge(n._repo,H(n._path,e))}function wd(n){return Tr("remove",n._path),Ts(n,null)}function Ts(n,e){n=ct(n),Tr("set",n._path),Xc("set",e,n._path);const t=new at;return dd(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}function Cd(n,e){Zc("update",e,n._path);const t=new at;return hd(n._repo,n._path,e,t.wrapCallback(()=>{})),t.promise}class hn{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const s=t._queryParams.getIndex();return new _d("value",this,new Rt(e.snapshotNode,new ge(t._repo,t._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new xd(this,e,t):null}matches(e){return e instanceof hn?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function Ed(n,e,t,s,i){let r;if(typeof s=="object"&&(r=void 0,i=s),typeof s=="function"&&(r=s),i&&i.onlyOnce){const l=t,c=(h,d)=>{ri(n._repo,n,a),l(h,d)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new Sd(t,r||void 0),a=new hn(o);return fd(n._repo,n,a),()=>ri(n._repo,n,a)}function ai(n,e,t,s){return Ed(n,"value",e,t,s)}Sc(ge);Mc(ge);/**
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
 */const Td="FIREBASE_DATABASE_EMULATOR_HOST",Is={};let Id=!1;function Md(n,e,t,s){const i=e.lastIndexOf(":"),r=e.substring(0,i),o=bi(r);n.repoInfo_=new Bi(e,o,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0,t),s&&(n.authTokenProvider_=s)}function Nd(n,e,t,s,i){let r=s||n.options.databaseURL;r===void 0&&(n.options.projectId||le("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Y("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=oi(r,i),a=o.repoInfo,l;typeof process<"u"&&Tn&&(l=Tn[Td]),l?(r=`http://${l}?ns=${a.namespace}`,o=oi(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new Fa(n.name,n.options,e);td("Invalid Firebase Database URL",o),N(o.path)||le("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Pd(a,n,c,new Oa(n,t));return new $d(h,n)}function Ad(n,e){const t=Is[e];(!t||t[n.key]!==n)&&le(`Database ${e}(${n.repoInfo_}) has already been deleted.`),md(n),delete t[n.key]}function Pd(n,e,t,s){let i=Is[e.name];i||(i={},Is[e.name]=i);let r=i[n.toURLString()];return r&&le("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new od(n,Id,t,s),i[n.toURLString()]=r,r}class $d{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(ad(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new ge(this._repo,A())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Ad(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&le("Cannot call "+e+" on a deleted database.")}}function kd(n=la(),e){const t=na(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const s=zr("database");s&&Rd(t,...s)}return t}function Rd(n,e,t,s={}){n=ct(n),n._checkNotDeleted("useEmulator");const i=`${e}:${t}`,r=n._repoInternal;if(n._instanceStarted){if(i===n._repoInternal.repoInfo_.host&&yt(s,r.repoInfo_.emulatorOptions))return;le("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&le('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new gt(gt.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:Vr(s.mockUserToken,n.app.options.projectId);o=new gt(a)}bi(e)&&ro(e),Md(r,i,s,o)}/**
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
 */function Dd(n){xa(aa),xt(new Ze("database",(e,{instanceIdentifier:t})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Nd(s,i,r,t)},"PUBLIC").setMultipleInstances(!0)),Ne(In,Mn,n),Ne(In,Mn,"esm2020")}oe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};oe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Dd();const Ld={projectId:"gg-badminton-6c8f0",databaseURL:"https://gg-badminton-6c8f0-default-rtdb.asia-southeast1.firebasedatabase.app",authDomain:"gg-badminton-6c8f0.firebaseapp.com",messagingSenderId:"823190830009",storageBucket:"gg-badminton-6c8f0.appspot.com",apiKey:"",appId:""};let li=null,ce=null;try{li=Si(Ld),ce=kd(li),console.log("🔥 Firebase Realtime Database initialized successfully!")}catch(n){console.error("❌ Failed to initialize Firebase:",n)}const G={isAvailable(){return ce!==null},saveState(n){return this.isAvailable()?Ts(Ie(ce,"tournament"),{players:n.players,teams:n.teams,matches:n.matches,scoreConfig:n.scoreConfig,updatedAt:Date.now()}).catch(e=>{console.error("❌ Firebase saveState failed:",e)}):Promise.resolve()},onStateChange(n){if(!this.isAvailable())return()=>{};const e=Ie(ce,"tournament");return ai(e,t=>{t.exists()?n(t.val()):n(null)},t=>{console.error("❌ Firebase onStateChange error:",t)})},resetAll(n){if(!this.isAvailable())return Promise.resolve();const e={};return e.tournament={players:n.players,teams:n.teams,matches:n.matches,scoreConfig:n.scoreConfig,updatedAt:Date.now()},e.live=null,Cd(Ie(ce),e).catch(t=>{console.error("❌ Firebase resetAll failed:",t)})},saveLiveMatch(n,e){return this.isAvailable()?Ts(Ie(ce,`live/${n}`),{...e,updatedAt:Date.now()}).catch(t=>{console.error(`❌ Firebase saveLiveMatch (${n}) failed:`,t)}):Promise.resolve()},removeLiveMatch(n){return this.isAvailable()?wd(Ie(ce,`live/${n}`)).catch(e=>{console.error(`❌ Firebase removeLiveMatch (${n}) failed:`,e)}):Promise.resolve()},onAllLiveMatchesChange(n){if(!this.isAvailable())return()=>{};const e=Ie(ce,"live");return ai(e,t=>{t.exists()?n(t.val()):n({})},t=>{console.error("❌ Firebase onAllLiveMatchesChange error:",t)})}};class Od{constructor(){this.players=[],this.teams=[],this.matches=[],this.scoreConfig={},this.listeners=[],this.init()}init(){const e=localStorage.getItem("badminton_players"),t=localStorage.getItem("badminton_teams"),s=localStorage.getItem("badminton_matches"),i=localStorage.getItem("badminton_scoreConfig");this.players=e?JSON.parse(e):[...un],this.teams=t?JSON.parse(t):[...fn];const r=h=>{if(!Array.isArray(h))return{updated:h,changed:!1};let d=!1;return{updated:h.map(f=>{let m=f.pitch;return m==="Pitch 15"?(m="Pitch 1",d=!0):m==="Pitch 16"?(m="Pitch 2",d=!0):m==="Pitch 20"?(m="Pitch 3",d=!0):m==="Pitch 21"&&(m="Pitch 4",d=!0),{...f,pitch:m}}),changed:d}};let o=s?JSON.parse(s):[...mn];const a=r(o);this.matches=a.updated,a.changed&&this.saveToStorageLocal();const l={"Men's Doubles":{"Group Stage":{targetPoints:15,maxPoints:21,setsToWin:2},"Semi-finals":{targetPoints:21,maxPoints:30,setsToWin:2},"Grand Final":{targetPoints:21,maxPoints:30,setsToWin:2},"Bronze Match":{targetPoints:21,maxPoints:30,setsToWin:2}},"Mixed's Doubles":{"Group Stage":{targetPoints:15,maxPoints:21,setsToWin:2},"Semi-finals":{targetPoints:21,maxPoints:30,setsToWin:2},"Grand Final":{targetPoints:21,maxPoints:30,setsToWin:2},"Bronze Match":{targetPoints:21,maxPoints:30,setsToWin:2}}};let c=null;if(i)try{c=JSON.parse(i)}catch{c=null}if(c?c["Group Stage"]&&!c["Men's Doubles"]?this.scoreConfig={"Men's Doubles":JSON.parse(JSON.stringify(c)),"Mixed's Doubles":JSON.parse(JSON.stringify(c))}:this.scoreConfig=c:this.scoreConfig=l,this.propagateKnockoutTeams(),this.saveToStorageLocal(),G.isAvailable())try{G.onStateChange(h=>{if(h){let d=!1;if(h.matches){const u=r(h.matches);JSON.stringify(this.matches)!==JSON.stringify(u.updated)&&(this.matches=u.updated,d=!0)}h.scoreConfig&&JSON.stringify(this.scoreConfig)!==JSON.stringify(h.scoreConfig)&&(this.scoreConfig=h.scoreConfig,d=!0),h.players&&JSON.stringify(this.players)!==JSON.stringify(h.players)&&(this.players=h.players,d=!0),h.teams&&JSON.stringify(this.teams)!==JSON.stringify(h.teams)&&(this.teams=h.teams,d=!0),d&&(this.propagateKnockoutTeams(),this.saveToStorageLocal(),this.notifyListeners())}else this.saveToFirebase()})}catch(h){console.error("❌ Failed to establish real-time Firebase sync listener:",h)}}saveToStorageLocal(){localStorage.setItem("badminton_players",JSON.stringify(this.players)),localStorage.setItem("badminton_teams",JSON.stringify(this.teams)),localStorage.setItem("badminton_matches",JSON.stringify(this.matches)),localStorage.setItem("badminton_scoreConfig",JSON.stringify(this.scoreConfig))}saveToStorage(){this.saveToStorageLocal(),this.saveToFirebase()}saveToFirebase(){G.isAvailable()&&G.saveState({players:this.players,teams:this.teams,matches:this.matches,scoreConfig:this.scoreConfig})}resetToDefault(){localStorage.removeItem("badminton_players"),localStorage.removeItem("badminton_teams"),localStorage.removeItem("badminton_matches"),localStorage.removeItem("badminton_scoreConfig"),this.players=[...un],this.teams=[...fn],this.matches=mn.map(e=>({...e,status:"Scheduled",score1:"",score2:"",sets:[],winner:""})),this.scoreConfig={"Men's Doubles":{"Group Stage":{targetPoints:15,maxPoints:21,setsToWin:2},"Semi-finals":{targetPoints:21,maxPoints:30,setsToWin:2},"Grand Final":{targetPoints:21,maxPoints:30,setsToWin:2},"Bronze Match":{targetPoints:21,maxPoints:30,setsToWin:2}},"Mixed's Doubles":{"Group Stage":{targetPoints:15,maxPoints:21,setsToWin:2},"Semi-finals":{targetPoints:21,maxPoints:30,setsToWin:2},"Grand Final":{targetPoints:21,maxPoints:30,setsToWin:2},"Bronze Match":{targetPoints:21,maxPoints:30,setsToWin:2}}},this.propagateKnockoutTeams(),this.saveToStorageLocal(),G.isAvailable()&&G.resetAll({players:this.players,teams:this.teams,matches:this.matches,scoreConfig:this.scoreConfig}),this.notifyListeners()}getScoreConfig(e,t){let s=e,i=t;return t||(i=e,s="Men's Doubles"),this.scoreConfig[s]&&this.scoreConfig[s][i]?this.scoreConfig[s][i]:this.scoreConfig[i]?this.scoreConfig[i]:{targetPoints:21,maxPoints:30,setsToWin:2}}updateScoreConfig(e,t,s){this.scoreConfig[e]||(this.scoreConfig[e]={}),this.scoreConfig[e][t]={targetPoints:Number(s.targetPoints),maxPoints:Number(s.maxPoints),setsToWin:Number(s.setsToWin)},this.saveToStorage(),this.notifyListeners()}addListener(e){this.listeners.push(e)}notifyListeners(){this.listeners.forEach(e=>e(this))}updateMatchScore(e,t,s,i,r){const o=this.matches.find(a=>a.id===e);return o?(o.sets=t,o.score1=s,o.score2=i,o.status=r,r==="Completed"?o.winner=s>i?o.team1:o.team2:o.winner="",this.propagateKnockoutTeams(),this.saveToStorage(),this.notifyListeners(),!0):!1}calculateStandings(e){const t=this.teams.filter(o=>o.category===e),s=this.matches.filter(o=>o.category===e&&o.stage==="Group Stage"),i={};t.forEach(o=>{i[o.name]={name:o.name,teamId:o.id,player1:o.player1,player2:o.player2,played:0,won:0,lost:0,points:0,setsWon:0,setsLost:0,netSets:0,pointsWon:0,pointsLost:0,netPoints:0}}),s.forEach(o=>{if(o.status!=="Completed")return;const a=o.team1,l=o.team2;if(!i[a]||!i[l])return;i[a].played+=1,i[l].played+=1;const c=Number(o.score1)||0,h=Number(o.score2)||0;i[a].setsWon+=c,i[a].setsLost+=h,i[l].setsWon+=h,i[l].setsLost+=c,c>h?(i[a].won+=1,i[a].points+=1,i[l].lost+=1):(i[l].won+=1,i[l].points+=1,i[a].lost+=1),o.sets.forEach(d=>{const u=Number(d.t1)||0,f=Number(d.t2)||0;i[a].pointsWon+=u,i[a].pointsLost+=f,i[l].pointsWon+=f,i[l].pointsLost+=u})}),Object.values(i).forEach(o=>{o.netSets=o.setsWon-o.setsLost,o.netPoints=o.pointsWon-o.pointsLost});const r=Object.values(i);return r.sort((o,a)=>{if(a.points!==o.points)return a.points-o.points;if(a.netSets!==o.netSets)return a.netSets-o.netSets;if(r.filter(c=>c.points===o.points&&c.netSets===o.netSets).length===2){const c=s.find(h=>h.status==="Completed"&&(h.team1===o.name&&h.team2===a.name||h.team1===a.name&&h.team2===o.name));if(c){if(c.winner===o.name)return-1;if(c.winner===a.name)return 1}}return a.netPoints!==o.netPoints?a.netPoints-o.netPoints:o.name.localeCompare(a.name)}),r}isGroupStageComplete(e){const t=this.matches.filter(s=>s.category===e&&s.stage==="Group Stage");return t.length>0&&t.every(s=>s.status==="Completed")}propagateKnockoutTeams(){["Men's Doubles","Mixed's Doubles"].forEach(t=>{const s=this.isGroupStageComplete(t),i=this.calculateStandings(t),r=s?i[0].name:`1st Place ${t==="Men's Doubles"?"MD":"XD"}`,o=s?i[1].name:`2nd Place ${t==="Men's Doubles"?"MD":"XD"}`,a=s?i[2].name:`3rd Place ${t==="Men's Doubles"?"MD":"XD"}`,l=s?i[3].name:`4th Place ${t==="Men's Doubles"?"MD":"XD"}`,c=t==="Men's Doubles"?"MD":"XD",h=`SF1-${c}`,d=`SF2-${c}`,u=`F-${c}`,f=`B-${c}`;let m=this.matches.find(E=>E.id===h),p=this.matches.find(E=>E.id===d),g=this.matches.find(E=>E.id===u),y=this.matches.find(E=>E.id===f);const S="4:30 - 5:10",b=t==="Men's Doubles"?"5:15 - 5:55":"6:00 - 6:40";m?((m.status!=="Completed"||m.team1&&m.team1.includes("Place")||m.team2&&m.team2.includes("Place"))&&(m.team1=r,m.team2=l),m.pitch=t==="Men's Doubles"?"Pitch 1":"Pitch 3",m.time=S):(m={id:h,category:t,stage:"Semi-finals",pitch:t==="Men's Doubles"?"Pitch 1":"Pitch 3",time:S,team1:r,team2:l,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(m)),p?((p.status!=="Completed"||p.team1&&p.team1.includes("Place")||p.team2&&p.team2.includes("Place"))&&(p.team1=o,p.team2=a),p.pitch=t==="Men's Doubles"?"Pitch 2":"Pitch 4",p.time=S):(p={id:d,category:t,stage:"Semi-finals",pitch:t==="Men's Doubles"?"Pitch 2":"Pitch 4",time:S,team1:o,team2:a,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(p));const w=m.status==="Completed"?m.winner:`Winner SF1 (${c})`,T=m.status==="Completed"?m.winner===m.team1?m.team2:m.team1:`Loser SF1 (${c})`,_=p.status==="Completed"?p.winner:`Winner SF2 (${c})`,x=p.status==="Completed"?p.winner===p.team1?p.team2:p.team1:`Loser SF2 (${c})`;y?((y.status!=="Completed"||y.team1&&y.team1.includes("Loser")||y.team2&&y.team2.includes("Loser"))&&(y.team1=T,y.team2=x),y.pitch="Pitch 2",y.time=b):(y={id:f,category:t,stage:"Bronze Match",pitch:"Pitch 2",time:b,team1:T,team2:x,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(y)),g?((g.status!=="Completed"||g.team1&&g.team1.includes("Winner")||g.team2&&g.team2.includes("Winner"))&&(g.team1=w,g.team2=_),g.pitch="Pitch 3",g.time=b):(g={id:u,category:t,stage:"Grand Final",pitch:"Pitch 3",time:b,team1:w,team2:_,score1:"",score2:"",sets:[],status:"Scheduled"},this.matches.push(g))})}}class Fd{constructor(e,t,s,i){if(this.state=e,this.sync=t,this.matchId=s,this.onFinish=i,this.lang="en",this.match=this.state.matches.find(o=>o.id===s),!this.match)throw new Error(`Match not found: ${s}`);const r=this.state.getScoreConfig(this.match.category,this.match.stage);this.targetPoints=r.targetPoints,this.maxPoints=r.maxPoints,this.setsToWin=r.setsToWin,this.team1Obj=this.state.teams.find(o=>o.name===this.match.team1),this.team2Obj=this.state.teams.find(o=>o.name===this.match.team2),this.team1Players=this.team1Obj?[this.team1Obj.player1,this.team1Obj.player2]:["Team A Player 1","Team A Player 2"],this.team2Players=this.team2Obj?[this.team2Obj.player1,this.team2Obj.player2]:["Team B Player 1","Team B Player 2"],this.score1=0,this.score2=0,this.sets=[],this.match.sets&&this.match.sets.length>0&&this.match.status==="Live"&&(this.sets=[...this.match.sets],this.score1=this.match.score1||0,this.score2=this.match.score2||0),this.currentSet=this.sets.length+1,this.servingTeam="A",this.history=[],this.isCourtSwapped=!1,this.set3SwapHappened=!1,this.team1Right=this.team1Players[0],this.team1Left=this.team1Players[1],this.team2Right=this.team2Players[0],this.team2Left=this.team2Players[1],this.init()}init(){this.createOverlayContainer(),this.render(),this.sync.broadcast("LIVE_MATCH_START",{matchId:this.matchId,matchState:this.serializeState()})}createOverlayContainer(){if(document.getElementById("umpire-overlay-container"))return;const e=document.createElement("div");e.id="umpire-overlay-container",e.className="umpire-overlay-backdrop",document.body.appendChild(e)}serializeState(){return{sets:[...this.sets,{t1:this.score1,t2:this.score2}],score1:this.score1,score2:this.score2,currentSet:this.currentSet,servingTeam:this.servingTeam,isEven:(this.servingTeam==="A"?this.score1:this.score2)%2===0,serverName:this.getServerName(),partnerName:this.getServerPartnerName(),receiverName:this.getReceiverName(),receiverPartnerName:this.getReceiverPartnerName(),isCourtSwapped:this.isCourtSwapped}}broadcastUpdate(){const e=this.serializeState();e.matchId=this.matchId,this.sync.broadcast("LIVE_SCORE_UPDATE",e)}getServerName(){const e=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?e?this.team1Right:this.team1Left:e?this.team2Right:this.team2Left}getServerPartnerName(){const e=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?e?this.team1Left:this.team1Right:e?this.team2Left:this.team2Right}getReceiverName(){const e=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?e?this.team2Right:this.team2Left:e?this.team1Right:this.team1Left}getReceiverPartnerName(){const e=(this.servingTeam==="A"?this.score1:this.score2)%2===0;return this.servingTeam==="A"?e?this.team2Left:this.team2Right:e?this.team1Left:this.team1Right}saveToHistory(){this.history.push({score1:this.score1,score2:this.score2,sets:JSON.parse(JSON.stringify(this.sets)),currentSet:this.currentSet,servingTeam:this.servingTeam,team1Right:this.team1Right,team1Left:this.team1Left,team2Right:this.team2Right,team2Left:this.team2Left})}undo(){if(this.history.length===0)return;const e=this.history.pop();this.score1=e.score1,this.score2=e.score2,this.sets=e.sets,this.currentSet=e.currentSet,this.servingTeam=e.servingTeam,this.team1Right=e.team1Right,this.team1Left=e.team1Left,this.team2Right=e.team2Right,this.team2Left=e.team2Left,this.render(),this.broadcastUpdate()}addPoint(e){if(this.saveToHistory(),e==="A"){if(this.servingTeam==="A"){const s=this.team1Right;this.team1Right=this.team1Left,this.team1Left=s}this.score1++,this.servingTeam="A"}else{if(this.servingTeam==="B"){const s=this.team2Right;this.team2Right=this.team2Left,this.team2Left=s}this.score2++,this.servingTeam="B"}const t=this.setsToWin*2-1;if(this.currentSet===t&&!this.set3SwapHappened){const s=Math.ceil(this.targetPoints/2);(this.score1===s||this.score2===s)&&(this.set3SwapHappened=!0,this.showSwapNotice(`⚡ Score reached ${s}! Both teams must swap sides.`),this.isCourtSwapped=!this.isCourtSwapped)}this.checkSetWinner(),this.render(),this.triggerServeAnimation(),this.broadcastUpdate()}triggerServeAnimation(){const e=document.querySelector(".umpire-court-svg .svg-shuttle");e&&(e.setAttribute("dur","0.7s"),e.innerHTML=`
        <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
          <mpath href="#umpire-shuttle-path" />
        </animateMotion>
      `)}checkSetWinner(){const e=this.score1,t=this.score2,s=Math.max(e,t),i=Math.min(e,t),r=s-i;let o=!1;if(s>=this.targetPoints&&(r>=2||s===this.maxPoints)&&(o=!0),o){this.currentSet-1,this.sets.push({t1:e,t2:t});let a=0,l=0;if(this.sets.forEach(c=>{c.t1>c.t2?a++:l++}),a===this.setsToWin||l===this.setsToWin)this.submitMatch(a,l);else{const c=e>t?this.match.team1:this.match.team2;this.showSwapNotice(`Set ${this.currentSet} completed! ${c} won this set. Prepare for Set ${this.currentSet+1}. Both teams must swap sides.`),this.score1=0,this.score2=0,this.currentSet++,this.servingTeam=e>t?"A":"B",this.isCourtSwapped=!this.isCourtSwapped}}}submitMatch(e,t){const s=e>t?this.match.team1:this.match.team2;this.state.updateMatchScore(this.matchId,this.sets,e,t,"Completed"),this.sync.broadcast("LIVE_MATCH_END",{matchId:this.matchId}),this.sync.setMatchLiveStatus(this.matchId,!1),this.showMatchEndNotice(s)}close(){this.sync.broadcast("LIVE_MATCH_END",{matchId:this.matchId}),this.sync.setMatchLiveStatus(this.matchId,!1);const e=document.getElementById("umpire-overlay-container");e&&(e.classList.add("hidden"),e.innerHTML=""),this.onFinish&&this.onFinish(),window.BadmintonAppInstance&&window.BadmintonAppInstance.switchTab("dashboard")}showSwapNotice(e){const t=document.createElement("div");t.className="swap-notice-modal-backdrop",t.innerHTML=`
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
    `,document.body.appendChild(t),document.getElementById("swap-notice-btn-ok").onclick=()=>{t.classList.add("animate-fade-out"),setTimeout(()=>t.remove(),300)},setTimeout(()=>{document.body.contains(t)&&(t.classList.add("animate-fade-out"),setTimeout(()=>t.remove(),300))},5e3)}showMatchEndNotice(e){const t=this.match.stage||"Group Stage";let s="WIN THE MATCH!",i="MATCH COMPLETED",r=`🎉 Congratulations to **${e}** on winning this match! 🎉`,o="🏸",a="MATCH WINNER",l="#84cc16",c="rgba(132, 204, 22, 0.45)";t==="Semi-finals"?(s="CONGRATULATIONS ON WINNING!",i="QUALIFIED FOR THE FINALS",r=`⚡ Spectacular! **${e}** won the Semi-finals and officially qualified for the championship Grand Final! 🏆`,o="🏅",a="SEMI-FINALS WINNER",l="#06b6d4",c="rgba(6, 182, 212, 0.45)"):t==="Grand Final"?(s="TOURNAMENT CHAMPIONS!",i="GEAR GAMES BADMINTON 2026 CUP",r=`👑 CHAMPIONS! Huge congratulations to the ultimate champions of the Gear Games 2026 Badminton Tournament: **${e}**! A historic and well-deserved victory! 🏆🥇`,o="🏆",a="TOURNAMENT CHAMPIONS",l="#fbbf24",c="rgba(251, 191, 36, 0.5)"):t==="Bronze Match"&&(s="BRONZE MEDALISTS!",i="BRONZE MEDAL SECURED",r=`🥉 Superb! **${e}** won the Bronze Match and successfully claimed the prestigious **Bronze Medal**! 🥉`,o="🥉",a="BRONZE WINNER",l="#ea580c",c="rgba(234, 88, 12, 0.45)");const h=document.createElement("div");h.className="match-end-modal-backdrop relative",h.innerHTML=`
      <div class="match-end-modal-card glass-card text-center animate-scale-in relative overflow-hidden" style="max-width: 480px; width: 90%; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px ${c}; z-index: 2;">
        <div class="relative" style="z-index: 2;">
          <div class="trophy-icon-container mb-4 animate-bounce" style="font-size: 4.5rem; filter: drop-shadow(0 0 18px ${c}); line-height: 1;">
            ${o}
          </div>
          
          <h2 class="text-lg font-black mb-1" style="font-size: 1.5rem; color: ${l}; filter: drop-shadow(0 0 8px ${c});">${s}</h2>
          <p class="text-xs text-slate-400 mb-4 uppercase tracking-widest font-bold">${i}</p>
          
          <div class="bg-slate-950/60 rounded-xl p-4 border border-slate-900 mb-6">
            <span class="text-5xs uppercase font-extrabold text-slate-500 block mb-1.5">${a}</span>
            <span class="text-sm font-black text-white uppercase" style="font-size: 1.25rem; filter: drop-shadow(0 0 8px rgba(255,255,255,0.25));">${e}</span>
            
            <div class="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-slate-900/60">
              ${this.sets.map((d,u)=>`
                <div class="bg-slate-900/80 px-2.5 py-1 rounded text-4xs font-bold text-slate-300">
                  S${u+1}: <span class="text-volt">${d.t1}</span>-<span class="text-cyan">${d.t2}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <p class="text-xs text-slate-200 mb-6 font-semibold px-2" style="line-height: 1.6;">${r}</p>
          
          <button class="btn w-full py-3 font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2" id="match-end-btn-home" style="font-size: 0.85rem; background-color: ${l}; color: #000; box-shadow: 0 4px 14px ${c}; border: none;">
            🏠 Back to Homepage
          </button>
        </div>
      </div>
    `,document.body.appendChild(h),document.getElementById("match-end-btn-home").onclick=()=>{h.classList.add("animate-fade-out"),setTimeout(()=>{h.remove(),this.close()},300)}}toggleServe(){this.saveToHistory(),this.servingTeam=this.servingTeam==="B"?"A":"B",this.render(),this.broadcastUpdate()}swapPlayers(e){if(this.saveToHistory(),e==="1"){const t=this.team1Right;this.team1Right=this.team1Left,this.team1Left=t}else{const t=this.team2Right;this.team2Right=this.team2Left,this.team2Left=t}this.render(),this.broadcastUpdate()}render(){const e=document.getElementById("umpire-overlay-container");if(!e)return;e.classList.remove("hidden"),(this.servingTeam==="A"?this.score1:this.score2)%2;let t,s,i,r;this.isCourtSwapped?(t=this.team2Right,s=this.team2Left,i=this.team1Right,r=this.team1Left):(t=this.team1Right,s=this.team1Left,i=this.team2Right,r=this.team2Left);const o=this.getServerName(),a=this.getReceiverName(),l=_=>_===o?"S":_===a?"R":"P",c=_=>_===o?"volt":_===a?"cyan":"neutral",h=_=>_===o?"text-volt":_===a?"text-cyan":"text-slate-200",d=_=>_!==o?"":`
        <g class="shuttle-badge" transform="translate(11, -11)">
          <circle cx="0" cy="0" r="8.5" fill="#090d16" stroke="#84cc16" stroke-width="1.2" />
          <text x="0" y="3.5" font-size="10" text-anchor="middle" font-family="sans-serif">🏸</text>
        </g>
      `;let u,f,m,p;o===t?(u=210,f=355):o===s?(u=90,f=355):o===i?(u=90,f=145):(u=210,f=145),a===t?(m=210,p=355):a===s?(m=90,p=355):a===i?(m=90,p=145):(m=210,p=145);const g=(_,x)=>x===355?_===210?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z":_===90?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",y=g(u,f),S=g(m,p),b=(u+m)/2+30,w=(f+p)/2-40,T=this.sets.map((_,x)=>`
      <div class="umpire-set-badge">
        <span>Set ${x+1}:</span>
        <strong>${_.t1} - ${_.t2}</strong>
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
              ${T}
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
                <path d="${y}" class="svg-highlight-box serving" filter="url(#ump-glow-volt)" />
                <path d="${S}" class="svg-highlight-box receiving" filter="url(#ump-glow-cyan)" />

                <!-- Flight Arrow path -->
                <path id="umpire-shuttle-path" d="M ${u},${f} Q ${b},${w} ${m},${p}" class="svg-shuttle-path" />
                
                <!-- Animated Shuttlecock -->
                <circle r="5" class="svg-shuttle" filter="url(#ump-glow-cyan)">
                  <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
                    <mpath href="#umpire-shuttle-path" />
                  </animateMotion>
                </circle>

                <!-- Player Avatars Bottom (Team on same horizontal line in middle of bottom court at y=355) -->
                <!-- Bottom Left Player -->
                <g class="player-avatar ${s===o?"server":s===a?"receiver":"partner"}" transform="translate(90, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${c(s)}" />
                  <text x="0" y="4" class="avatar-text">${l(s)}</text>
                  ${d(s)}
                </g>
                <text x="90" y="383" class="svg-player-name ${h(s)} font-bold">${s.split(" ")[0]}</text>

                <!-- Bottom Right Player -->
                <g class="player-avatar ${t===o?"server":t===a?"receiver":"partner"}" transform="translate(210, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${c(t)}" />
                  <text x="0" y="4" class="avatar-text">${l(t)}</text>
                  ${d(t)}
                </g>
                <text x="210" y="383" class="svg-player-name ${h(t)} font-bold">${t.split(" ")[0]}</text>

                <!-- Player Avatars Top (Team on same horizontal line in middle of top court at y=145) -->
                <!-- Top Right Player (Screen Left x=90) -->
                <g class="player-avatar ${i===o?"server":i===a?"receiver":"partner"}" transform="translate(90, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${c(i)}" />
                  <text x="0" y="4" class="avatar-text">${l(i)}</text>
                  ${d(i)}
                </g>
                <text x="90" y="123" class="svg-player-name ${h(i)} font-bold">${i.split(" ")[0]}</text>

                <!-- Top Left Player (Screen Right x=210) -->
                <g class="player-avatar ${r===o?"server":r===a?"receiver":"partner"}" transform="translate(210, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${c(r)}" />
                  <text x="0" y="4" class="avatar-text">${l(r)}</text>
                  ${d(r)}
                </g>
                <text x="210" y="123" class="svg-player-name ${h(r)} font-bold">${r.split(" ")[0]}</text>
              </svg>
            </div>
            
            <div class="text-4xs text-slate-500 font-medium text-center max-w-[200px] leading-relaxed">
              👉 <strong>Rule Book:</strong> Serve from **Right** on Even (0,2,4) and **Left** on Odd (1,3,5). Partners swap when winning own serve.
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("umpire-btn-close").onclick=()=>{confirm("Do you want to exit the scoring room? The live status will be suspended.")&&this.close()},document.getElementById("umpire-add-a").onclick=()=>this.addPoint("A"),document.getElementById("umpire-add-b").onclick=()=>this.addPoint("B"),document.getElementById("umpire-btn-serve").onclick=()=>this.toggleServe(),document.getElementById("umpire-btn-undo").onclick=()=>this.undo(),document.getElementById("umpire-swap-players-1").onclick=()=>this.swapPlayers("1"),document.getElementById("umpire-swap-players-2").onclick=()=>this.swapPlayers("2")}}class Bd{constructor(e,t,s){this.state=e,this.onUpdate=t,this.sync=s,this.isAdmin=!1,this.isRef=!1,this.refPitch="",this.activeMatchId=null,this.lang="en",this.passkeys={goodmintongg2026:{role:"admin",label:"Super Admin"},ref1:{role:"ref",pitch:"Pitch 1",label:"Pitch 1 Umpire"},ref2:{role:"ref",pitch:"Pitch 2",label:"Pitch 2 Umpire"},ref3:{role:"ref",pitch:"Pitch 3",label:"Pitch 3 Umpire"},ref4:{role:"ref",pitch:"Pitch 4",label:"Pitch 4 Umpire"}},this.init()}setLanguage(e){this.lang="en"}init(){this.isAdmin=sessionStorage.getItem("badminton_isAdmin")==="true",this.isRef=sessionStorage.getItem("badminton_isRef")==="true",this.refPitch=sessionStorage.getItem("badminton_refPitch")||"",this.createModalContainer(),this.setupAdminToggleListener()}createModalContainer(){if(document.getElementById("score-modal-container"))return;const e=document.createElement("div");if(e.id="score-modal-container",e.className="modal-backdrop hidden",document.body.appendChild(e),document.getElementById("admin-modal-container"))return;const t=document.createElement("div");if(t.id="admin-modal-container",t.className="modal-backdrop hidden",document.body.appendChild(t),!document.getElementById("score-config-modal-container")){const s=document.createElement("div");s.id="score-config-modal-container",s.className="modal-backdrop hidden",document.body.appendChild(s)}}setupAdminToggleListener(){document.body.addEventListener("click",e=>{e.target.closest("#btn-toggle-admin")&&(this.isAdmin||this.isRef?this.logout():this.showAdminLogin()),e.target.closest("#btn-score-settings")&&(this.isAdmin?this.showScoreConfigModal():this.showToast("You must be a Super Admin to modify scoring settings.","info"));const i=e.target.closest(".btn-edit-match");if(i){const o=i.getAttribute("data-match-id"),a=this.state.matches.find(c=>c.id===o);if(!a)return;const l=this.checkMatchReadyState(a);if(!l.ready){this.showUnreadyAlert(l.reason);return}this.isAdmin||this.isRef&&a.pitch===this.refPitch?this.openScoreModal(o):this.showToast("You are not authorized to edit matches on this pitch!","info")}const r=e.target.closest(".btn-join-match");if(r){const o=r.getAttribute("data-match-id"),a=this.state.matches.find(c=>c.id===o);if(!a)return;const l=this.checkMatchReadyState(a);if(!l.ready){this.showUnreadyAlert(l.reason);return}this.isAdmin||this.isRef&&a.pitch===this.refPitch?this.openUmpireConsole(o):this.showToast("You are not authorized to umpire on this pitch!","info")}})}checkMatchReadyState(e){if(e.team1&&e.team1.includes("Place")||e.team2&&e.team2.includes("Place"))return{ready:!1,reason:"This match cannot be played yet! Please wait for the Group Stage to complete to decide the playing teams."};const t=e.category==="Men's Doubles"?"MD":"XD",s=e.team1&&(e.team1.includes("SF1")||e.team1.includes("Winner SF1")||e.team1.includes("Loser SF1"))||e.team2&&(e.team2.includes("SF1")||e.team2.includes("Winner SF1")||e.team2.includes("Loser SF1")),i=e.team1&&(e.team1.includes("SF2")||e.team1.includes("Winner SF2")||e.team1.includes("Loser SF2"))||e.team2&&(e.team2.includes("SF2")||e.team2.includes("Winner SF2")||e.team2.includes("Loser SF2"));if(s){const r=`SF1-${t}`,o=this.state.matches.find(a=>a.id===r);if(o&&o.status!=="Completed")return{ready:!1,reason:`This match is waiting for the result of semi-final match **${`Semi-final 1 (${e.category})`}** to complete.`}}if(i){const r=`SF2-${t}`,o=this.state.matches.find(a=>a.id===r);if(o&&o.status!=="Completed")return{ready:!1,reason:`This match is waiting for the result of semi-final match **${`Semi-final 2 (${e.category})`}** to complete.`}}return{ready:!0}}showUnreadyAlert(e){const t=document.createElement("div");t.className="swap-notice-modal-backdrop",t.innerHTML=`
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
    `,document.body.appendChild(t),document.getElementById("unready-alert-btn-ok").onclick=()=>{t.classList.add("animate-fade-out"),setTimeout(()=>t.remove(),300)}}openUmpireConsole(e){this.sync&&new Fd(this.state,this.sync,e,()=>{this.onUpdate()})}logout(){this.isAdmin=!1,this.isRef=!1,this.refPitch="",sessionStorage.setItem("badminton_isAdmin","false"),sessionStorage.setItem("badminton_isRef","false"),sessionStorage.removeItem("badminton_refPitch"),sessionStorage.removeItem("badminton_authLabel"),this.onUpdate(),this.showToast("Logged out successfully!","info")}showAdminLogin(){const e=document.getElementById("admin-modal-container");if(!e)return;const t="Portal Login",s="Enter Admin or Umpire passkey:",i="Passkey",r="Login",o="Cancel";e.innerHTML=`
      <div class="modal-card glass-card">
        <h3 class="modal-title">${t}</h3>
        <p class="modal-desc">${s}</p>
        
        <div class="form-group mb-4">
          <label class="form-label">${i}</label>
          <input type="password" id="admin-passkey-input" class="form-input" placeholder="••••••••" />
          <div id="admin-login-error" class="input-error-msg hidden"></div>
        </div>
        
        <div class="flex items-center justify-end gap-2">
          <button class="btn btn-neutral" id="btn-cancel-admin">${o}</button>
          <button class="btn btn-primary" id="btn-submit-admin">${r}</button>
        </div>
      </div>
    `,e.classList.remove("hidden"),document.getElementById("admin-passkey-input").focus(),document.getElementById("btn-cancel-admin").onclick=()=>e.classList.add("hidden"),document.getElementById("btn-submit-admin").onclick=()=>this.handleAdminLogin(),document.getElementById("admin-passkey-input").onkeydown=a=>{a.key==="Enter"&&this.handleAdminLogin()}}handleAdminLogin(){const e=document.getElementById("admin-passkey-input"),t=document.getElementById("admin-login-error");if(!e||!t)return;const s=e.value,i=this.passkeys[s];if(i){i.role==="admin"?(this.isAdmin=!0,this.isRef=!1,this.refPitch="",sessionStorage.setItem("badminton_isAdmin","true"),sessionStorage.setItem("badminton_isRef","false"),sessionStorage.removeItem("badminton_refPitch"),sessionStorage.setItem("badminton_authLabel",i.label)):(this.isRef=!0,this.isAdmin=!1,this.refPitch=i.pitch,sessionStorage.setItem("badminton_isAdmin","false"),sessionStorage.setItem("badminton_isRef","true"),sessionStorage.setItem("badminton_refPitch",i.pitch),sessionStorage.setItem("badminton_authLabel",i.label)),document.getElementById("admin-modal-container").classList.add("hidden"),this.onUpdate();const r=`Login success! Role: ${i.label}.`;this.showToast(r,"success")}else t.textContent="Incorrect passkey. Please try again.",t.classList.remove("hidden"),e.classList.add("input-error"),e.focus()}openScoreModal(e){this.activeMatchId=e;const t=this.state.matches.find(b=>b.id===e);if(!t)return;const s=document.getElementById("score-modal-container");if(!s)return;const i=this.state.getScoreConfig(t.category,t.stage),r=i.targetPoints,o=i.maxPoints,a=i.setsToWin,l=a*2-1,c="Match Score Editor",h="Set",d=t.team1,u=t.team2,f="Save Score",m="Cancel",p="Clear Score";let g="";for(let b=1;b<=l;b++){const w=t.sets[b-1]||{t1:"",t2:""},T=b===1?"required":"";g+=`
        <!-- Set ${b} -->
        <div class="score-set-row grid grid-cols-5 gap-3 items-center" id="s${b}-row">
          <div class="col-span-2">
            <input type="number" min="0" max="${o}" id="s${b}-t1" class="form-input score-box text-left" placeholder="0" value="${w.t1!==void 0?w.t1:""}" ${T} />
          </div>
          <div class="text-center font-bold text-muted">${h} ${b}</div>
          <div class="col-span-2">
            <input type="number" min="0" max="${o}" id="s${b}-t2" class="form-input score-box text-right" placeholder="0" value="${w.t2!==void 0?w.t2:""}" ${T} />
          </div>
        </div>
      `}s.innerHTML=`
      <div class="modal-card score-editor glass-card">
        <div class="flex items-center justify-between mb-4">
          <h3 class="modal-title m-0">${c}</h3>
          <span class="badge bg-purple">${t.stage} (${r} pts)</span>
        </div>
        
        <div class="score-team-headers grid grid-cols-5 gap-2 mb-2 text-xs font-semibold text-muted text-center">
          <div class="col-span-2 text-left">Team 1</div>
          <div>VS</div>
          <div class="col-span-2 text-right">Team 2</div>
        </div>

        <div class="score-team-names grid grid-cols-5 gap-2 mb-4 text-sm font-bold text-center items-center">
          <div class="col-span-2 text-left text-volt">${d}</div>
          <div class="text-xs text-muted">vs</div>
          <div class="col-span-2 text-right text-cyan">${u}</div>
        </div>

        <form id="score-form" class="space-y-4">
          ${g}

          <div id="score-error-msg" class="input-error-msg hidden p-2 bg-red-950/40 rounded border border-red-500/30 text-center text-xs"></div>

          <div class="flex items-center justify-between pt-2 border-t border-slate-700/50 mt-4">
            <button type="button" class="btn btn-danger" id="btn-clear-score">${p}</button>
            <div class="flex items-center gap-2">
              <button type="button" class="btn btn-neutral" id="btn-cancel-score">${m}</button>
              <button type="submit" class="btn btn-primary">${f}</button>
            </div>
          </div>
        </form>
      </div>
    `,s.classList.remove("hidden");const y=[];for(let b=1;b<=l;b++)y.push({t1:document.getElementById(`s${b}-t1`),t2:document.getElementById(`s${b}-t2`),row:document.getElementById(`s${b}-row`)});const S=()=>{let b=0,w=0;for(let T=1;T<=l;T++){const _=y[T-1].row,x=y[T-1].t1,E=y[T-1].t2;if(T===1){x.disabled=!1,E.disabled=!1,_.classList.remove("opacity-40"),x.setAttribute("required","required"),E.setAttribute("required","required");const $=Number(x.value),D=Number(E.value),B=this.validateSetScore($,D,r,o);B.valid&&(B.winner===1?b++:w++);continue}const P=b===a||w===a;let k=!0;for(let $=0;$<T-1;$++){const D=Number(y[$].t1.value),B=Number(y[$].t2.value);if(!this.validateSetScore(D,B,r,o).valid){k=!1;break}}if(k&&!P){_.classList.remove("opacity-40"),x.disabled=!1,E.disabled=!1,x.setAttribute("required","required"),E.setAttribute("required","required");const $=Number(x.value),D=Number(E.value),B=this.validateSetScore($,D,r,o);B.valid&&(B.winner===1?b++:w++)}else _.classList.add("opacity-40"),x.disabled=!0,E.disabled=!0,x.value="",E.value="",x.removeAttribute("required"),E.removeAttribute("required")}};y.forEach(b=>{b.t1.addEventListener("input",S),b.t2.addEventListener("input",S)}),S(),document.getElementById("btn-cancel-score").onclick=()=>s.classList.add("hidden"),document.getElementById("btn-clear-score").onclick=()=>this.handleClearScore(e),document.getElementById("score-form").onsubmit=b=>{b.preventDefault(),this.handleSaveScore(t,i)}}validateSetScore(e,t,s,i){if(isNaN(e)||isNaN(t))return{valid:!1};if(e<0||t<0)return{valid:!1};const r=Math.max(e,t),o=Math.min(e,t),a=r-o,l=e>t?1:2;if(r<s)return{valid:!1};if(r===s&&a>=2)return{valid:!0,winner:l};if(r>s){if(a===2&&r<i)return{valid:!0,winner:l};if(r===i&&a===1)return{valid:!0,winner:l}}return{valid:!1}}handleClearScore(e){confirm("Are you sure you want to clear the score for this match?")&&(this.state.updateMatchScore(e,[],"","","Scheduled"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast("Match score cleared.","info"))}handleSaveScore(e,t){const s=t.targetPoints,i=t.maxPoints,r=t.setsToWin,o=r*2-1,a=document.getElementById("score-error-msg");a.classList.add("hidden");const l=[];let c=0,h=0;for(let d=1;d<=o;d++){const u=document.getElementById(`s${d}-t1`).value,f=document.getElementById(`s${d}-t2`).value;if(c===r||h===r){if(u!==""||f!==""){this.showInputError(a,`Set ${d} score should be empty since match has already ended.`);return}continue}if(u===""||f===""){this.showInputError(a,`Please fill in Set ${d} score.`);return}const m=Number(u),p=Number(f),g=this.validateSetScore(m,p,s,i);if(!g.valid){this.showInputError(a,`Set ${d} is invalid. Winner must reach ${s} and lead by 2, or reach cap limit of ${i} points.`);return}l.push({t1:m,t2:p}),g.winner===1?c++:h++}if(c<r&&h<r){this.showInputError(a,`No team has won the required ${r} sets to win the match.`);return}c>h?e.team1:e.team2,this.state.updateMatchScore(e.id,l,c,h,"Completed"),document.getElementById("score-modal-container").classList.add("hidden"),this.showToast("Score updated successfully!","success")}showInputError(e,t){e.textContent=t,e.classList.remove("hidden")}showToast(e,t="success"){const s=document.createElement("div");s.className=`toast-alert toast-${t}`,s.innerHTML=`
      <div class="flex items-center gap-2">
        <span class="toast-icon">${t==="success"?"✓":t==="info"?"ℹ":"⚠"}</span>
        <span>${e}</span>
      </div>
    `,document.body.appendChild(s),setTimeout(()=>s.classList.add("show"),10),setTimeout(()=>{s.classList.remove("show"),setTimeout(()=>s.remove(),300)},3e3)}showScoreConfigModal(){const e=document.getElementById("score-config-modal-container");if(!e)return;const t=["Men's Doubles","Mixed's Doubles"],s=["Group Stage","Semi-finals","Grand Final","Bronze Match"],i={};t.forEach(p=>{i[p]={},s.forEach(g=>{i[p][g]=this.state.getScoreConfig(p,g)})});const r=p=>s.map(g=>{const y=i[p][g],S=p==="Men's Doubles"?"md":"xd",b=g.replace(/\s+/g,"-").toLowerCase();return`
          <div class="score-config-stage-card glass-panel p-3.5 rounded-lg border border-slate-700/40 flex flex-col gap-3">
            <div class="text-2xs font-black text-volt border-b border-slate-800 pb-1.5 flex items-center justify-between">
              <span>${g}</span>
              <span class="badge bg-slate-850 text-slate-400 font-bold" style="font-size: 0.55rem; padding: 2px 6px;">Stage Rules</span>
            </div>
            
            <div class="grid grid-cols-3 gap-2">
              <div class="form-group">
                <label class="form-label" style="font-size: 0.55rem; letter-spacing: 0.02em;">Target Pts</label>
                <input type="number" min="5" max="50" id="${S}-${b}-target" class="form-input score-box text-center py-1.5" style="font-size: 1rem;" value="${y.targetPoints}" required />
              </div>
              <div class="form-group">
                <label class="form-label" style="font-size: 0.55rem; letter-spacing: 0.02em;">Max Pts</label>
                <input type="number" min="5" max="60" id="${S}-${b}-max" class="form-input score-box text-center py-1.5" style="font-size: 1rem;" value="${y.maxPoints}" required />
              </div>
              <div class="form-group">
                <label class="form-label" style="font-size: 0.55rem; letter-spacing: 0.02em;">Sets to Win</label>
                <select id="${S}-${b}-sets" class="form-input text-center" style="font-weight: bold; background: #0b0f19; font-size: 0.8rem; padding: 0.5rem 0.25rem; height: 42px; cursor: pointer; line-height: 1.5;">
                  <option value="1" ${y.setsToWin===1?"selected":""}>1 Set</option>
                  <option value="2" ${y.setsToWin===2?"selected":""}>Best of 3</option>
                  <option value="3" ${y.setsToWin===3?"selected":""}>Best of 5</option>
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
            ${r("Men's Doubles")}
          </div>

          <!-- XD Section -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-[45vh] overflow-y-auto pr-1 hidden" id="config-section-xd">
            ${r("Mixed's Doubles")}
          </div>

          <div id="score-config-error-msg" class="input-error-msg hidden p-2 bg-red-950/40 rounded border border-red-500/30 text-center text-xs"></div>

          <div class="flex items-center justify-end gap-2 pt-3 border-t border-slate-800">
            <button type="button" class="btn btn-neutral" id="btn-cancel-score-config">Cancel</button>
            <button type="submit" class="btn btn-primary">Apply Settings</button>
          </div>
        </form>
      </div>
    `,e.classList.remove("hidden");let o="md";const a=document.getElementById("tab-config-md"),l=document.getElementById("tab-config-xd"),c=document.getElementById("config-section-md"),h=document.getElementById("config-section-xd");a.onclick=()=>{o="md",a.classList.add("text-volt"),a.style.borderColor="var(--volt)",l.classList.remove("text-volt"),l.classList.add("text-slate-500"),l.style.borderColor="transparent",c.classList.remove("hidden"),h.classList.add("hidden")},l.onclick=()=>{o="xd",l.classList.add("text-volt"),l.style.borderColor="var(--volt)",a.classList.remove("text-volt"),a.classList.add("text-slate-500"),a.style.borderColor="transparent",h.classList.remove("hidden"),c.classList.add("hidden")};const d=p=>{const g=o;s.forEach(y=>{const S=y.replace(/\s+/g,"-").toLowerCase(),b=p[y]||p.default;document.getElementById(`${g}-${S}-target`).value=b.targetPoints,document.getElementById(`${g}-${S}-max`).value=b.maxPoints,document.getElementById(`${g}-${S}-sets`).value=b.setsToWin})};document.getElementById("preset-bwf-standard").onclick=()=>{d({default:{targetPoints:21,maxPoints:30,setsToWin:2}}),this.showToast(`Standard BWF presets filled for ${o==="md"?"Men's Doubles":"Mixed's Doubles"}!`,"info")},document.getElementById("preset-fast-15").onclick=()=>{d({default:{targetPoints:15,maxPoints:21,setsToWin:2}}),this.showToast(`Short Game presets filled for ${o==="md"?"Men's Doubles":"Mixed's Doubles"}!`,"info")},document.getElementById("preset-single-set").onclick=()=>{d({default:{targetPoints:21,maxPoints:30,setsToWin:1}}),this.showToast(`Single Set presets filled for ${o==="md"?"Men's Doubles":"Mixed's Doubles"}!`,"info")};const u=document.getElementById("btn-close-score-config"),f=document.getElementById("btn-cancel-score-config"),m=()=>e.classList.add("hidden");u.onclick=m,f.onclick=m,document.getElementById("score-config-form").onsubmit=p=>{p.preventDefault();const g=document.getElementById("score-config-error-msg");g.classList.add("hidden");for(const y of t){const S=y==="Men's Doubles"?"md":"xd";for(const b of s){const w=b.replace(/\s+/g,"-").toLowerCase(),T=Number(document.getElementById(`${S}-${w}-target`).value),_=Number(document.getElementById(`${S}-${w}-max`).value),x=Number(document.getElementById(`${S}-${w}-sets`).value);if(_<T){g.textContent=`Max points cannot be less than target points in ${y} - ${b}.`,g.classList.remove("hidden");return}this.state.updateScoreConfig(y,b,{targetPoints:T,maxPoints:_,setsToWin:x})}}e.classList.add("hidden"),this.showToast("Match scoring settings updated successfully!","success"),this.onUpdate()}}}class Hd{constructor(e){this.container=document.getElementById(e),this.isEven=!0,this.servingTeam="A",this.serverIndex=0,this.receiverIndex=0,this.lang="en",this.teamAPlayers=["Player 1","Player 2"],this.teamBPlayers=["Player 3","Player 4"],this.init()}setLanguage(e){this.lang="en",this.render()}setScoreParity(e){this.isEven=e,this.render()}setTeams(e,t){this.teamAPlayers=e,this.teamBPlayers=t,this.render()}init(){this.container&&this.render()}render(){var k,$,D,B;if(!this.container)return;const e=this.isEven?this.teamAPlayers[0]:this.teamAPlayers[1],t=this.isEven?this.teamAPlayers[1]:this.teamAPlayers[0],s=this.isEven?this.teamBPlayers[0]:this.teamBPlayers[1],i=this.isEven?this.teamBPlayers[1]:this.teamBPlayers[0],r="Even Score (0, 2, 4...)",o="Odd Score (1, 3, 5...)",a="Doubles Service Simulator",l=`Serving Team (Bottom) has an **${this.isEven?"EVEN":"ODD"}** score:`,c=`<ul>
        <li><strong>Server:</strong> <span class="highlight-volt">${e}</span> serves from the <strong>${this.isEven?"RIGHT":"LEFT"}</strong> court.</li>
        <li><strong>Receiver:</strong> <span class="highlight-cyan">${s}</span> stands in the diagonal court to receive.</li>
        <li><strong>Valid Service Zone:</strong> The doubles service court (wider but shorter than singles) is highlighted.</li>
       </ul>`,h=this.isEven?210:90,d=400,u=this.isEven?90:210,f=400,m=this.isEven?90:210,p=100,g=this.isEven?210:90,y=100,S=this.isEven?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z",b=this.isEven?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",w=h,T=d-10,_=m,x=p+10,E=(w+_)/2+30,P=(T+x)/2-40;this.container.innerHTML=`
      <div class="court-sim-card glass-card">
        <h3 class="court-title flex items-center justify-between">
          <span>${a}</span>
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
              <path d="${S}" class="svg-highlight-box serving" filter="url(#neon-glow-volt)" />
              
              <!-- HIGHLIGHT TARGET RECEIVING BOX -->
              <path d="${b}" class="svg-highlight-box receiving" filter="url(#neon-glow-cyan)" />
              
              <!-- Shuttlecock path animation -->
              <path id="shuttle-path" d="M ${w},${T} Q ${E},${P} ${_},${x}" class="svg-shuttle-path" />
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
                <circle cx="${h}" cy="${d}" r="14" class="avatar-bg volt" />
                <text x="${h}" y="${d+4}" class="avatar-text">S</text>
              </g>
              <text x="${h}" y="${d+28}" class="svg-player-name text-volt">${e.split(" ")[0]}</text>
              
              <!-- Partner A -->
              <g class="player-avatar partner">
                <circle cx="${u}" cy="${f}" r="12" class="avatar-bg neutral" />
                <text x="${u}" y="${f+4}" class="avatar-text">P</text>
              </g>
              <text x="${u}" y="${f+28}" class="svg-player-name text-muted">${t.split(" ")[0]}</text>

              <!-- Player Avatars Top (Team B) -->
              <!-- Receiver -->
              <g class="player-avatar receiver">
                <circle cx="${m}" cy="${p}" r="14" class="avatar-bg cyan" />
                <text x="${m}" y="${p+4}" class="avatar-text">R</text>
              </g>
              <text x="${m}" y="${p-22}" class="svg-player-name text-cyan">${s.split(" ")[0]}</text>
              
              <!-- Partner B -->
              <g class="player-avatar receiver-partner">
                <circle cx="${g}" cy="${y}" r="12" class="avatar-bg neutral" />
                <text x="${g}" y="${y+4}" class="avatar-text">P</text>
              </g>
              <text x="${g}" y="${y-22}" class="svg-player-name text-muted">${i.split(" ")[0]}</text>
            </svg>
          </div>
          
          <div class="court-controls-wrapper flex flex-col justify-between">
            <div>
              <div class="selector-title">Score Status</div>
              <div class="sim-toggle-buttons grid grid-cols-2 gap-2 mb-4">
                <button class="btn-toggle-sim ${this.isEven?"active glow-volt":""}" id="sim-btn-even">
                  ${r}
                </button>
                <button class="btn-toggle-sim ${this.isEven?"":"active glow-cyan"}" id="sim-btn-odd">
                  ${o}
                </button>
              </div>
              
              <div class="sim-explanation">
                <div class="exp-header flex items-center gap-2 mb-2">
                  <span class="indicator-dot pulse-${this.isEven?"volt":"cyan"}"></span>
                  <span>${l}</span>
                </div>
                <div class="exp-details">${c}</div>
              </div>
            </div>
            
            <div class="court-sim-footer mt-4 p-3 glass-panel rounded-lg text-xs text-muted">
              💡 <strong>Tip:</strong> Click directly on the bottom court boxes to toggle even/odd service. Players only swap courts when their team wins a point on their own serve.
            </div>
          </div>
        </div>
      </div>
    `,(k=document.getElementById("sim-btn-even"))==null||k.addEventListener("click",()=>this.setScoreParity(!0)),($=document.getElementById("sim-btn-odd"))==null||$.addEventListener("click",()=>this.setScoreParity(!1)),(D=document.getElementById("svg-click-right"))==null||D.addEventListener("click",()=>this.setScoreParity(!0)),(B=document.getElementById("svg-click-left"))==null||B.addEventListener("click",()=>this.setScoreParity(!1))}}class Wd{constructor(e,t){this.state=e,this.onRemoteUpdate=t,this.channelName="badminton_live_sync",this.channel=null,this.init()}init(){try{this.channel=new BroadcastChannel(this.channelName),this.channel.onmessage=e=>this.handleMessage(e.data)}catch(e){console.warn("BroadcastChannel not supported in this browser. Falling back to storage event listeners.",e),window.addEventListener("storage",t=>{if(t.key==="badminton_live_sync_fallback")try{const s=JSON.parse(t.newValue);this.handleMessage(s)}catch(s){console.error("Failed to parse fallback storage sync message",s)}})}if(G.isAvailable())try{G.onAllLiveMatchesChange(e=>{const t=this.getLiveMatches();let s=!1;for(const i in e){const r=e[i],o=t[i];if(!o||JSON.stringify(o)!==JSON.stringify(r)){t[i]=r,s=!0;const a=this.state.matches.find(l=>l.id===i);a&&(a.sets=r.sets||[],a.score1=r.score1!==void 0?r.score1:"",a.score2=r.score2!==void 0?r.score2:"",a.status="Live"),this.onRemoteUpdate&&this.onRemoteUpdate("SCORE_UPDATE",r)}}for(const i in t)if(!e||!e[i]){delete t[i],s=!0;const r=this.state.matches.find(o=>o.id===i);r&&r.status==="Live"&&(r.status="Scheduled"),this.onRemoteUpdate&&this.onRemoteUpdate("STATUS_UPDATE",{matchId:i,isLive:!1})}s&&(this.saveLiveMatches(t),this.onRemoteUpdate&&this.onRemoteUpdate("LIVE_SYNC_RELOAD",{}))})}catch(e){console.error("❌ Failed to connect live sync listener to Firebase:",e)}}getLiveMatches(){const e=localStorage.getItem("badminton_live_matches");return e?JSON.parse(e):{}}saveLiveMatches(e){localStorage.setItem("badminton_live_matches",JSON.stringify(e))}broadcast(e,t){const s={type:e,payload:t,timestamp:Date.now()};if(this.channel&&this.channel.postMessage(s),localStorage.setItem("badminton_live_sync_fallback",JSON.stringify(s)),G.isAvailable())if(e==="LIVE_MATCH_START"){const i={matchId:t.matchId,isLive:!0,updatedAt:Date.now(),...t.matchState||{}};G.saveLiveMatch(t.matchId,i)}else e==="LIVE_SCORE_UPDATE"?G.saveLiveMatch(t.matchId,{...t,isLive:!0,updatedAt:Date.now()}):e==="LIVE_MATCH_END"&&G.removeLiveMatch(t.matchId)}handleMessage(e){if(!e||!e.type||!e.payload)return;const{type:t,payload:s}=e;switch(t){case"LIVE_SCORE_UPDATE":this.applyLiveUpdate(s);break;case"LIVE_MATCH_START":this.setMatchLiveStatus(s.matchId,!0,s.matchState);break;case"LIVE_MATCH_END":this.setMatchLiveStatus(s.matchId,!1);break}}setMatchLiveStatus(e,t,s=null){const i=this.getLiveMatches();t?(i[e]={matchId:e,isLive:!0,updatedAt:Date.now(),...s||{}},G.isAvailable()&&G.saveLiveMatch(e,i[e])):(delete i[e],G.isAvailable()&&G.removeLiveMatch(e)),this.saveLiveMatches(i),this.onRemoteUpdate&&this.onRemoteUpdate("STATUS_UPDATE",{matchId:e,isLive:t})}applyLiveUpdate(e){const{matchId:t,sets:s,score1:i,score2:r,currentSet:o,servingTeam:a,isEven:l,serverName:c,partnerName:h,receiverName:d,receiverPartnerName:u,isCourtSwapped:f,team1Right:m,team1Left:p,team2Right:g,team2Left:y}=e,S=this.getLiveMatches();S[t]={matchId:t,isLive:!0,updatedAt:Date.now(),sets:s,score1:i,score2:r,currentSet:o,servingTeam:a,isEven:l,serverName:c,partnerName:h,receiverName:d,receiverPartnerName:u,isCourtSwapped:f,team1Right:m,team1Left:p,team2Right:g,team2Left:y},this.saveLiveMatches(S),G.isAvailable()&&G.saveLiveMatch(t,S[t]);const b=this.state.matches.find(w=>w.id===t);b&&(b.sets=s,b.score1=i,b.score2=r,b.status="Live"),this.onRemoteUpdate&&this.onRemoteUpdate("SCORE_UPDATE",e)}}class Ud{constructor(){this.canvas=null,this.ctx=null,this.particles=[],this.colors=["#84cc16","#22d3ee","#a855f7","#f43f5e","#eab308"],this.animationFrame=null}start(){this.stop(),this.canvas=document.createElement("canvas"),this.canvas.className="confetti-canvas",document.body.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.resize();const e=()=>this.resize();window.addEventListener("resize",e),this.resizeHandler=e;for(let s=0;s<120;s++)this.particles.push({x:Math.random()*this.canvas.width,y:Math.random()*this.canvas.height-this.canvas.height,r:Math.random()*4+3,d:Math.random()*this.canvas.height,color:this.colors[Math.floor(Math.random()*this.colors.length)],tilt:Math.random()*8-4,tiltAngleIncremental:Math.random()*.05+.02,tiltAngle:0,speed:Math.random()*2+1.5});const t=()=>{if(!this.ctx||!this.canvas)return;this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);let s=0;this.particles.forEach(i=>{i.tiltAngle+=i.tiltAngleIncremental,i.y+=i.speed,i.x+=Math.sin(i.tiltAngle)*.5,i.tilt=Math.sin(i.tiltAngle-i.r/2)*4,this.ctx.beginPath(),this.ctx.lineWidth=i.r,this.ctx.strokeStyle=i.color,this.ctx.moveTo(i.x+i.tilt+i.r/2,i.y),this.ctx.lineTo(i.x+i.tilt,i.y+i.tilt+i.r/2),this.ctx.stroke(),i.y<=this.canvas.height&&s++}),s>0?this.animationFrame=requestAnimationFrame(t):this.stop()};t()}resize(){this.canvas&&(this.canvas.width=window.innerWidth,this.canvas.height=window.innerHeight)}stop(){this.animationFrame&&(cancelAnimationFrame(this.animationFrame),this.animationFrame=null),this.resizeHandler&&(window.removeEventListener("resize",this.resizeHandler),this.resizeHandler=null),this.canvas&&(this.canvas.remove(),this.canvas=null,this.ctx=null),this.particles=[]}}class Gd{constructor(){window.BadmintonAppInstance=this,this.state=new Od,this.lang="en",this.activeTab="dashboard",this.activeCategoryFilter="all",this.fixtureSearchText="",this.fixtureStatusFilter="all",this.confetti=new Ud,this.countdownTimer=null,this.activeSpectateMatchId=null,this.sync=new Wd(this.state,(e,t)=>this.handleSyncUpdate(e,t)),this.admin=new Bd(this.state,()=>this.handleStateChange(),this.sync),this.courtSimulator=null,this.state.addListener(()=>this.handleStateChange()),this.init()}init(){this.setupDOM(),this.setupEventListeners(),this.admin.setLanguage(this.lang),this.renderActiveView(),this.updateNavbar(),setTimeout(()=>this.updateActivePill(),100)}getTeamRank(e,t){const s=this.state.calculateStandings(t),i=t==="Men's Doubles"?"MD":"XD",r=this.state.matches.find(l=>l.id===`F-${i}`),o=this.state.matches.find(l=>l.id===`B-${i}`);if(r&&r.status==="Completed"){if(r.winner===e)return 1;if(r.team1===e||r.team2===e)return 2}if(o&&o.status==="Completed"){if(o.winner===e)return 3;if(o.team1===e||o.team2===e)return 4}const a=s.findIndex(l=>l.name===e);return a!==-1?a+1:"-"}getTeamStats(e,t){const i=this.state.calculateStandings(t).find(g=>g.name===e)||{points:0},r=this.state.matches.filter(g=>g.category===t&&g.status==="Completed"&&(g.team1===e||g.team2===e)),o=r.length,a=r.filter(g=>g.winner===e).length,l=o-a,c=o>0?Math.round(a/o*100):0;let h=0,d=0,u=0,f=0;r.forEach(g=>{const y=g.team1===e,S=Number(g.score1)||0,b=Number(g.score2)||0;y?(h+=S,d+=b):(h+=b,d+=S),g.sets&&g.sets.forEach(w=>{const T=Number(w.t1)||0,_=Number(w.t2)||0;y?(u+=T,f+=_):(u+=_,f+=T)})});const m=h-d,p=u-f;return{played:o,wins:a,losses:l,pts:i.points,setsWon:h,setsLost:d,netSets:m,pointsWon:u,pointsLost:f,netPoints:p,winPercent:c,completedMatches:r}}setupDOM(){this.translateStaticElements()}setupEventListeners(){document.querySelectorAll(".nav-tab").forEach(s=>{s.addEventListener("click",i=>{const r=i.currentTarget.getAttribute("data-tab");r&&this.switchTab(r)})}),window.addEventListener("resize",()=>this.updateActivePill());const t=document.getElementById("btn-reset-db");t&&t.addEventListener("click",()=>{this.admin.isAdmin&&confirm("WARNING: This will reset all tournament scores and standings to defaults. Proceed?")&&(this.state.resetToDefault(),this.admin.showToast("Database reset to default!","success"))}),document.body.addEventListener("click",s=>{const i=s.target.closest(".btn-spectate-match");if(i){const r=i.getAttribute("data-match-id");this.openSpectateOverlay(r)}})}handleStateChange(){this.renderActiveView(),this.updateNavbar()}switchTab(e){this.activeTab=e,this.confetti&&this.confetti.stop(),document.querySelectorAll(".nav-tab").forEach(s=>{s.getAttribute("data-tab")===e?s.classList.add("active"):s.classList.remove("active")}),this.renderActiveView(),e==="rules"&&setTimeout(()=>{this.courtSimulator=new Hd("court-sim-container"),this.courtSimulator.setLanguage(this.lang);const s=this.state.teams.filter(r=>r.category==="Men's Doubles")[0],i=this.state.teams.filter(r=>r.category==="Mixed's Doubles")[0];s&&i&&this.courtSimulator.setTeams([s.player1,s.player2],[i.player1,i.player2])},50),this.updateActivePill()}updateActivePill(){const e=document.querySelector(`.nav-tab[data-tab="${this.activeTab}"]`),t=document.querySelector(".nav-tabs-wrapper");if(!t)return;let s=document.querySelector(".nav-active-pill");s||(s=document.createElement("div"),s.className="nav-active-pill",t.appendChild(s)),e&&(s.style.width=`${e.offsetWidth}px`,s.style.transform=`translateX(${e.offsetLeft}px)`)}translateStaticElements(){}updateNavbar(){const e=document.getElementById("btn-toggle-admin"),t=document.getElementById("btn-reset-db");if(e){let s=document.getElementById("navbar-welcome-user"),i=document.getElementById("btn-score-settings");if(this.admin.isAdmin||this.admin.isRef){const o=sessionStorage.getItem("badminton_authLabel")||(this.admin.isAdmin?"Super Admin":this.admin.refPitch+" Umpire");s||(s=document.createElement("span"),s.id="navbar-welcome-user",s.className="text-5xs text-slate-300 font-extrabold tracking-wide uppercase mr-1 flex items-center gap-1.5",e.parentNode.insertBefore(s,e)),s.innerHTML=`<span class="w-1.5 h-1.5 rounded-full bg-volt pulse-dot"></span> Welcome, <span class="text-volt font-black">${o}</span>`,s.classList.remove("hidden"),this.admin.isAdmin?(i||(i=document.createElement("button"),i.id="btn-score-settings",i.className="btn btn-xs btn-outline btn-volt flex items-center gap-1 mr-1",i.innerHTML="⚙️ <span>Score Settings</span>",e.parentNode.insertBefore(i,e)),i.classList.remove("hidden")):i&&i.classList.add("hidden"),e.innerHTML="✕ <span>Logout</span>",e.className="btn btn-xs btn-danger font-bold flex items-center gap-1",t&&this.admin.isAdmin&&t.classList.remove("hidden")}else s&&(s.classList.add("hidden"),s.innerHTML=""),i&&i.classList.add("hidden"),e.innerHTML="🔐 <span>Admin Login</span>",e.className="btn btn-xs btn-outline flex items-center gap-1",t&&t.classList.add("hidden")}}renderActiveView(){const e=document.getElementById("main-view-container");if(!e)return;switch(e.className="view-fade-in",this.activeTab){case"dashboard":this.renderDashboard(e);break;case"standings":this.renderStandings(e);break;case"fixtures":this.renderFixtures(e);break;case"bracket":this.renderBracket(e);break;case"results":this.renderResults(e);break;case"rules":this.renderRules(e);break;case"teams":this.renderTeams(e);break}e.querySelectorAll(".glass-card, .dashboard-stat-card, .team-card, .match-card, .bracket-node, .standings-table tbody tr").forEach((s,i)=>{s.classList.add("animate-fade-slide-up"),s.style.animationDelay=`${i*.03}s`})}renderDashboard(e){var c,h;const t=this.state.matches.length,s=this.state.matches.filter(d=>d.status==="Completed").length,i=t>0?Math.round(s/t*100):0;let r=0;this.state.matches.forEach(d=>{d.status==="Completed"&&d.sets.forEach(u=>{r+=u.t1+u.t2})});const o="GEAR GAMES BADMINTON CHAMPIONSHIP 2026",a="Live standings, schedule fixtures & bracket generator",l="COUNTDOWN TO TOURNAMENT";e.innerHTML=`
      <div class="hero-section glass-card mb-6">
        <h1 class="hero-title text-glow-volt">${o}</h1>
        <p class="hero-subtitle">${a}</p>
        
        <div class="countdown-container mt-6">
          <div class="countdown-title mb-2">${l}</div>
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
            <span class="stat-value">${s}/${t}</span>
            <span class="stat-label">Matches Completed</span>
          </div>
          <div class="stat-progress-bar mt-3">
            <div class="progress-fill glow-volt" style="width: ${i}%"></div>
          </div>
          <div class="text-right text-xs text-volt font-bold mt-1">${i}% Complete</div>
        </div>

        <div class="dashboard-stat-card glass-card border-glow-cyan">
          <div class="stat-icon text-cyan">🔥</div>
          <div class="stat-info">
            <span class="stat-value">${r}</span>
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
    `,(c=document.getElementById("dash-goto-md"))==null||c.addEventListener("click",()=>this.switchTab("standings")),(h=document.getElementById("dash-goto-xd"))==null||h.addEventListener("click",()=>this.switchTab("standings")),this.startCountdown()}renderMiniStandingsTable(e){const t=this.state.calculateStandings(e);let s=t.slice(0,3).map((i,r)=>`
        <tr>
          <td class="text-center font-bold" style="width: 45px;">${r===0?"🥇":r===1?"🥈":"🥉"}</td>
          <td class="font-bold text-slate-100">${i.name}</td>
          <td class="text-center font-semibold text-volt">${i.points}</td>
          <td class="text-center text-slate-300">${i.played}</td>
          <td class="text-center text-slate-300">${i.netSets>0?"+"+i.netSets:i.netSets}</td>
          <td class="text-center text-slate-300 text-xs">${i.pointsWon}-${i.pointsLost}</td>
        </tr>
      `).join("");return t.length===0&&(s='<tr><td colspan="6" class="text-center text-muted py-4">No data available</td></tr>'),`
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
          ${s}
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
    `,document.getElementById("std-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("std-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("std-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()}}renderCategoryStandings(e){const t=this.state.calculateStandings(e),s=e==="Men's Doubles",i=s?"text-volt":"text-cyan",r=t.map((o,a)=>{const l=a+1,c=l<=4,h=this.state.isGroupStageComplete(e);let d=`<span class="rank-circle font-bold ${l===1?"gold":l===2?"silver":l===3?"bronze":""}">${l}</span>`,u="";h&&(c?u='<span class="advance-tag neon-green">SEMIS</span>':u='<span class="advance-tag neon-red">OUT</span>');const f=o.played===t.length-1,m=f?'<span class="finished-tag">4 Matches</span>':"";return`
        <tr class="${c?"row-top-4":"row-eliminated"} ${s?"md-row":"xd-row"}">
          <td class="text-center">${d}</td>
          <td class="font-bold text-slate-100">
            <div class="flex items-center gap-2 flex-wrap">
              <span>${o.name}</span>
              ${u}
              ${m}
            </div>
            <div class="text-xs text-muted font-normal mt-0.5">${o.player1} & ${o.player2}</div>
          </td>
          <td class="text-center font-bold text-volt text-base">${o.points}</td>
          <td class="text-center font-bold ${f?"text-emerald-400":"text-slate-200"}">${o.played}</td>
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
          <span>${s?"💎":"🔮"}</span>
          <span class="${i}">${e}</span>
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
              ${r}
            </tbody>
          </table>
        </div>
        
        <div class="p-3 bg-slate-900/40 rounded-lg mt-4 border border-slate-800 flex items-center gap-2 text-xs text-muted">
          <span>💡</span>
          <span><strong>Ranking rule:</strong> Top 4 teams automatically advance to the Semi-finals. Tie-breakers: Match wins ➔ Net Sets ➔ Head-to-Head ➔ Net Points.</span>
        </div>
      </div>
    `}renderFixtures(e){let t="";this.activeCategoryFilter==="all"?t=`
        <div class="fixtures-grid gap-6 items-start">
          ${this.renderCategoryFixtures("Men's Doubles")}
          ${this.renderCategoryFixtures("Mixed's Doubles")}
        </div>
      `:this.activeCategoryFilter==="md"?t=`
        <div class="grid grid-cols-1 gap-6 items-start">
          ${this.renderCategoryFixtures("Men's Doubles")}
        </div>
      `:t=`
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

      ${t}
    `,document.getElementById("fix-filter-all").onclick=()=>{this.activeCategoryFilter="all",this.renderActiveView()},document.getElementById("fix-filter-md").onclick=()=>{this.activeCategoryFilter="md",this.renderActiveView()},document.getElementById("fix-filter-xd").onclick=()=>{this.activeCategoryFilter="xd",this.renderActiveView()};const s=document.getElementById("fixture-search");s.oninput=r=>{this.fixtureSearchText=r.target.value,this.renderActiveView();const o=document.getElementById("fixture-search");o&&(o.focus(),o.setSelectionRange(this.fixtureSearchText.length,this.fixtureSearchText.length))},document.querySelectorAll(".filter-pill").forEach(r=>{r.onclick=()=>{this.fixtureStatusFilter=r.getAttribute("data-status"),this.renderActiveView()}})}checkPlayersIncludeSearch(e,t,s){const i=this.state.teams.find(o=>o.name===e),r=this.state.teams.find(o=>o.name===t);return!!(i&&(i.player1.toLowerCase().includes(s)||i.player2.toLowerCase().includes(s))||r&&(r.player1.toLowerCase().includes(s)||r.player2.toLowerCase().includes(s)))}renderCategoryFixtures(e){const t=e==="Men's Doubles",s=t?"Men's Doubles":"Mixed's Doubles";let i=this.state.matches.filter(p=>p.category===e);if(this.fixtureStatusFilter!=="all"&&(i=i.filter(p=>p.status===this.fixtureStatusFilter)),this.fixtureSearchText.trim()!==""){const p=this.fixtureSearchText.toLowerCase().trim();i=i.filter(g=>g.team1.toLowerCase().includes(p)||g.team2.toLowerCase().includes(p)||g.stage&&g.stage.toLowerCase().includes(p)||g.pitch&&g.pitch.toLowerCase().includes(p)||this.checkPlayersIncludeSearch(g.team1,g.team2,p))}const r=i.filter(p=>p.stage==="Group Stage"),o=i.filter(p=>p.stage==="Semi-finals"),a=i.filter(p=>p.stage==="Grand Final"),l=i.filter(p=>p.stage==="Bronze Match"),c="GRAND CHAMPIONSHIP",h="BRONZE FINALS",d="SEMIFINALS STAGE",u="GROUP STAGE QUALIFYING",f=(p,g)=>p.length===0?"":`
        <div class="glass-card flex flex-col gap-3 relative overflow-hidden" style="background: rgba(15, 23, 42, 0.25); padding: 1.25rem;">
          <div class="absolute top-0 left-0 w-full h-[2px]" style="background: ${t?"var(--volt)":"var(--cyan)"};"></div>
          <div class="text-4xs font-bold text-slate-500 uppercase tracking-wider mb-1.5 pb-1.5 border-b border-slate-800/80 flex items-center justify-between">
            <span class="${t?"text-volt":"text-cyan"} font-extrabold" style="font-size: 0.65rem; letter-spacing: 0.05em;">${g}</span>
            <span class="text-slate-600 font-medium">${p.length} ${p.length===1?"Match":"Matches"}</span>
          </div>
          <div class="flex flex-col gap-3">
            ${this.renderMatchCards(p)}
          </div>
        </div>
      `;let m="No matches scheduled or completed";return this.fixtureSearchText.trim()!==""?m="No matches found matching your search":this.fixtureStatusFilter==="Scheduled"?m="No matches scheduled":this.fixtureStatusFilter==="Completed"&&(m="No matches completed"),`
      <div class="flex-1 flex flex-col gap-5">
        <h3 class="font-extrabold text-sm flex items-center gap-2 mb-1 pb-2 border-b border-slate-800">
          <span>${t?"💎":"🔮"}</span>
          <span class="${t?"text-volt":"text-cyan"}">${s}</span>
        </h3>
        
        <div class="flex flex-col gap-4">
          ${i.length===0?`
            <div class="glass-card text-center py-8 px-4 flex flex-col items-center justify-center gap-2 border border-dashed border-slate-800/60" style="background: rgba(15, 23, 42, 0.15); border-radius: 12px;">
              <span class="text-xl">📅</span>
              <span class="text-slate-400 font-semibold text-xs">${m}</span>
            </div>
          `:`
            ${f(a,c)}
            ${f(l,h)}
            ${f(o,d)}
            ${f(r,u)}
          `}
        </div>
      </div>
    `}renderMatchCards(e){if(e.length===0)return'<div class="col-span-2 text-center text-muted py-6">No matches found</div>';const t=this.sync.getLiveMatches();return e.map(s=>{const i=t[s.id],r=!!i,o=s.status==="Completed";s.team1&&(s.team1.includes("Place")||s.team1.includes("Winner")||s.team1.includes("Loser"))||s.team2&&(s.team2.includes("Place")||s.team2.includes("Winner")||s.team2.includes("Loser"));let a="",l="";r?(a="border-glow-volt bg-volt-gradient",l=`
          <span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--danger); color: #fff; box-shadow: 0 0 8px rgba(239, 68, 68, 0.4);">
            <span class="live-dot-pulse"></span> LIVE
          </span>
        `):s.stage==="Grand Final"?(a="border-glow-gold bg-gold-gradient",l=o?'<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--gold); color: #000; box-shadow: 0 0 8px rgba(245, 158, 11, 0.45);"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.45 1-1 1H4v2h16v-2h-5c-.55 0-1-.45-1-1v-2.34"/><path d="M12 2a6 6 0 0 1 6 6v3a6 6 0 0 1-6 6h0a6 6 0 0 1-6-6V8a6 6 0 0 1 6-6z"/></svg>GRAND FINAL</span>':'<span class="match-badge scheduled" style="border: 1px solid var(--gold); color: var(--gold);">GRAND FINAL</span>'):s.stage==="Bronze Match"?(a="border-glow-bronze bg-bronze-gradient",l=o?'<span class="match-badge flex items-center gap-1 font-extrabold" style="background-color: var(--bronze); color: #000;"><svg class="w-3 h-3" stroke="currentColor" viewBox="0 0 24 24" fill="none" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="margin: 0; width: 12px; height: 12px;"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>BRONZE MATCH</span>':'<span class="match-badge scheduled" style="border: 1px solid var(--bronze); color: var(--bronze);">BRONZE MATCH</span>'):(a=o?"border-completed":"border-scheduled",l=o?'<span class="match-badge completed">FINAL</span>':'<span class="match-badge scheduled">SCHEDULED</span>');const c=s.category==="Men's Doubles",h=c?'<span class="badge bg-volt text-slate-950 font-bold text-2xs mr-2">MD</span>':'<span class="badge bg-cyan text-slate-950 font-bold text-2xs mr-2">XD</span>',d=this.state.teams.find(k=>k.name===s.team1),u=this.state.teams.find(k=>k.name===s.team2),f=d?`${d.player1} & ${d.player2}`:"",m=u?`${u.player1} & ${u.player2}`:"",p=c?"text-volt":"text-cyan",y=this.state.getScoreConfig(s.category,s.stage).setsToWin*2-1,S=o?s.sets:r?i.sets:[],b=o?s.score1:r?i.score1:"-",w=o?s.score2:r?i.score2:"-";let T="",_="";if((o||r)&&S&&S.length>0){const k=o&&s.winner===s.team1?`<span class="${p}" style="font-size: 0.55rem; width: 8px;">●</span>`:'<span style="width: 8px;"></span>',$=o&&s.winner===s.team2?`<span class="${p}" style="font-size: 0.55rem; width: 8px;">●</span>`:'<span style="width: 8px;"></span>';T+=k,_+=$,S.forEach(D=>{T+=`<span class="${D.t1>D.t2?p:"text-slate-400"}" style="width: 22px; display: inline-block; text-align: center;">${D.t1}</span>`,_+=`<span class="${D.t2>D.t1?p:"text-slate-400"}" style="width: 22px; display: inline-block; text-align: center;">${D.t2}</span>`});for(let D=S.length;D<y;D++)T+='<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>',_+='<span class="text-slate-700" style="width: 22px; display: inline-block; text-align: center;">-</span>'}else{T='<span style="width: 8px;"></span>',_='<span style="width: 8px;"></span>';for(let k=0;k<y;k++)T+='<span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>',_+='<span class="text-slate-600" style="width: 22px; display: inline-block; text-align: center;">-</span>'}const x=this.admin.isAdmin||this.admin.isRef&&s.pitch===this.admin.refPitch;let E="";r?E=`
          <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800/80 gap-2">
            <button class="btn btn-xs btn-outline btn-spectate-match flex items-center gap-1" data-match-id="${s.id}">
              🔍 <span>Spectate</span>
            </button>
            ${x?`
              <button class="btn btn-xs btn-outline btn-join-match flex items-center gap-1" style="border-color: var(--volt); color: var(--volt);" data-match-id="${s.id}">
                Umpire <span>Join</span>
              </button>
            `:""}
          </div>
        `:o?E=this.admin.isAdmin?`
          <div class="flex justify-end mt-3 pt-2.5 border-t border-slate-800/80">
            <button class="btn btn-xs btn-outline btn-edit-match flex items-center gap-1" data-match-id="${s.id}">
              ✏️ <span>Edit Score</span>
            </button>
          </div>
        `:"":E=`
          <div class="flex items-center justify-between mt-3 pt-2.5 border-t border-slate-800/80 gap-2">
            <div>
              <span class="text-5xs text-slate-500 font-bold uppercase tracking-wider">AWAITING</span>
            </div>
            <div class="flex gap-2">
              ${x?`
                <button class="btn btn-xs btn-outline btn-join-match flex items-center gap-1" style="border-color: var(--volt); color: var(--volt);" data-match-id="${s.id}">
                  🏸 <span>Umpire</span>
                </button>
              `:""}
              ${this.admin.isAdmin?`
                <button class="btn btn-xs btn-outline btn-edit-match flex items-center gap-1" data-match-id="${s.id}">
                  ✏️ <span>Direct</span>
                </button>
              `:""}
            </div>
          </div>
        `;const P=this.admin.isAdmin?"admin-card":"";return`
        <div class="match-card glass-panel rounded-lg p-4 border border-slate-700/50 flex flex-col justify-between hover-glowing ${a} ${P}">
          <div class="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
            <div class="flex items-center text-xs font-semibold text-slate-300">
              ${h}
              <span>${s.pitch} | ${s.time}</span>
            </div>
            ${l}
          </div>

          <!-- BWF Vertical Scoreboard Grid -->
          <div class="flex flex-col gap-2.5 mb-3">
            <!-- Team 1 Row -->
            <div class="flex items-center justify-between">
              <div class="flex flex-col min-w-0 pr-2">
                <span class="text-sm font-bold ${o&&s.winner===s.team1||r&&b>w?p:"text-slate-200"} truncate" title="${s.team1}">
                  ${s.team1}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${f||"TBD"}">${f||"TBD"}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: ${y*22+12}px; gap: 0.5rem; flex-shrink: 0;">
                ${T}
              </div>
            </div>
            
            <!-- Team 2 Row -->
            <div class="flex items-center justify-between">
              <div class="flex flex-col min-w-0 pr-2">
                <span class="text-sm font-bold ${o&&s.winner===s.team2||r&&w>b?p:"text-slate-200"} truncate" title="${s.team2}">
                  ${s.team2}
                </span>
                <span class="text-4xs text-slate-500 font-normal mt-0.5 truncate" title="${m||"TBD"}">${m||"TBD"}</span>
              </div>
              <div class="flex items-center justify-end font-mono text-2xs font-extrabold" style="width: ${y*22+12}px; gap: 0.5rem; flex-shrink: 0;">
                ${_}
              </div>
            </div>
          </div>

          <!-- Action Footer -->
          ${E}
        </div>
      `}).join("")}renderBracket(e){const t=a=>{const l=a==="Men's Doubles"?"MD":"XD";return{sf1:this.state.matches.find(c=>c.id===`SF1-${l}`),sf2:this.state.matches.find(c=>c.id===`SF2-${l}`),f:this.state.matches.find(c=>c.id===`F-${l}`),b:this.state.matches.find(c=>c.id===`B-${l}`)}},s=t("Men's Doubles"),i=t("Mixed's Doubles"),r=a=>{const l=this.state.calculateStandings(a),c=this.state.isGroupStageComplete(a);return l.map((h,d)=>{const u=d+1,f=u<=4,m=u===1?"gold":u===2?"silver":u===3?"bronze":"",p=u===1?"🥇 Seed 1":u===2?"🥈 Seed 2":u===3?"🥉 Seed 3":u===4?"🎫 Seed 4":"❌ Out",g=f?"text-emerald-400":"text-slate-500";return`
          <div class="flex items-center justify-between text-4xs border-b border-slate-800/40 pb-1.5 last:border-b-0 last:pb-0" style="padding: 0.2rem 0;" data-team-name="${h.name}">
            <div class="flex items-center gap-1.5 truncate max-w-[125px]" title="${h.name}">
              <span class="rank-circle font-bold ${m}" style="width: 18px; height: 18px; font-size: 0.55rem; flex-shrink: 0; display: inline-flex; align-items: center; justify-content: center;">${u}</span>
              <span class="font-bold text-slate-200 truncate">${h.name}</span>
            </div>
            ${c?`<span class="font-extrabold ${g}" style="font-size: 0.55rem; flex-shrink: 0;">${p}</span>`:""}
          </div>
        `}).join("")},o=(a,l,c,h)=>{const d=this.getAwardResults(h),u=f=>{if(!f)return'<div class="bracket-node empty">N/A</div>';const m=f.status==="Completed",p=f.team1&&(f.team1.includes("Place")||f.team1.includes("Winner")||f.team1.includes("Loser"))||f.team2&&(f.team2.includes("Place")||f.team2.includes("Winner")||f.team2.includes("Loser")),g=this.admin.isAdmin?p?'<span title="Cannot edit score yet" style="opacity: 0.3; cursor: not-allowed; font-size: 0.65rem;">🔒</span>':`<button class="btn-edit-node-score btn-edit-match" data-match-id="${f.id}">✏️</button>`:"",y=this.state.teams.find($=>$.name===f.team1),S=this.state.teams.find($=>$.name===f.team2),b=y?`${y.player1} & ${y.player2}`:"",w=S?`${S.player1} & ${S.player2}`:"",_=this.state.getScoreConfig(f.category,f.stage).setsToWin*2-1,x=c?"text-volt":"text-cyan";let E="",P="";if(m&&f.sets&&f.sets.length>0){const $=f.winner===f.team1?`<span class="${x}" style="font-size: 0.45rem; width: 6px;">●</span>`:'<span style="width: 6px;"></span>',D=f.winner===f.team2?`<span class="${x}" style="font-size: 0.45rem; width: 6px;">●</span>`:'<span style="width: 6px;"></span>';E+=$,P+=D,f.sets.forEach(B=>{E+=`<span class="${B.t1>B.t2?x:"text-slate-400"}" style="width: 16px; display: inline-block; text-align: center;">${B.t1}</span>`,P+=`<span class="${B.t2>B.t1?x:"text-slate-400"}" style="width: 16px; display: inline-block; text-align: center;">${B.t2}</span>`});for(let B=f.sets.length;B<_;B++)E+='<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>',P+='<span class="text-slate-700" style="width: 16px; display: inline-block; text-align: center;">-</span>'}else{E='<span style="width: 6px;"></span>',P='<span style="width: 8px;"></span>';for(let $=0;$<_;$++)E+='<span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>',P+='<span class="text-slate-600" style="width: 16px; display: inline-block; text-align: center;">-</span>'}const k=m?'<div class="node-footer text-4xs text-emerald-400 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">✓ Finished</div>':`<div class="node-footer text-4xs text-slate-500 font-semibold mt-1.5 pt-1 border-t border-slate-800/40 text-center">🕒 ${f.time}</div>`;return`
          <div class="bracket-node glass-panel border border-slate-700/60 rounded ${m?"completed":""}">
            <div class="node-header flex items-center justify-between text-4xs text-muted mb-1.5 pb-1 border-b border-slate-800">
              <span>${f.pitch} | ${f.stage}</span>
              ${g}
            </div>
            
            <div class="flex flex-col gap-1.5">
              <!-- Team 1 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${m&&f.winner===f.team1?x:"text-slate-300"}" data-team-name="${f.team1}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${f.team1}">${f.team1}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${b||"TBD"}">${b||"TBD"}</span>
                </div>
                <div class="flex items-center justify-end font-mono text-4xs font-bold" style="width: ${_*16+10}px; gap: 0.35rem; flex-shrink: 0;">
                  ${E}
                </div>
              </div>
              
              <!-- Team 2 Row -->
              <div class="flex items-center justify-between text-3xs font-bold ${m&&f.winner===f.team2?x:"text-slate-300"}" data-team-name="${f.team2}">
                <div class="flex flex-col min-w-0 pr-1.5">
                  <span class="truncate" title="${f.team2}">${f.team2}</span>
                  <span class="text-5xs text-slate-500 font-normal mt-0.5 truncate" style="max-w-[85px];" title="${w||"TBD"}">${w||"TBD"}</span>
                </div>
                <div class="flex items-center justify-end font-mono text-4xs font-bold" style="width: ${_*16+10}px; gap: 0.35rem; flex-shrink: 0;">
                  ${P}
                </div>
              </div>
            </div>
            
            ${k}
          </div>
        `};return`
        <div class="glass-card mb-8">
          <h3 class="font-bold border-b border-slate-700/50 pb-3 mb-6 flex items-center gap-2">
            <span>🏟️</span>
            <span class="${c?"text-volt":"text-cyan"}">${l} Bracket</span>
          </h3>

          <div class="bracket-visualizer">
            <!-- Group Standings Column -->
            <div class="bracket-col flex flex-col justify-center" style="width: 190px;">
              <div class="node-label mb-2 text-center" style="letter-spacing: 0.05em;">📊 GROUP STANDINGS</div>
              <div class="glass-panel p-2.5 rounded border border-slate-700/40 flex flex-col gap-1" style="background: rgba(15, 23, 42, 0.45);">
                ${r(h)}
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
                ${u(a.sf1)}
              </div>
              <div class="bracket-group">
                <div class="node-label">SEMI FINAL 2</div>
                ${u(a.sf2)}
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
                ${u(a.f)}
              </div>
              
              <div class="bracket-group mt-6">
                <div class="node-label text-bronze font-bold">🥉 THIRD-PLACE MATCH</div>
                ${u(a.b)}
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
              <div class="bracket-node glass-panel border border-amber-500/35 rounded hover-glowing" style="background: rgba(245, 158, 11, 0.03); padding: 0.5rem 0.65rem;" data-team-name="${d.goldTeam.name}">
                <div class="flex items-center gap-1.5 font-extrabold text-3xs text-amber-400">
                  <span>🥇</span>
                  <span>CHAMPION</span>
                </div>
                <div class="font-extrabold text-xs text-slate-100 truncate mt-1" title="${d.goldTeam.name}">${d.goldTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${d.goldTeam.players}">${d.goldTeam.players}</div>
              </div>

              <!-- Silver Node -->
              <div class="bracket-node glass-panel border border-slate-400/30 rounded hover-glowing" style="background: rgba(148, 163, 184, 0.02); padding: 0.5rem 0.65rem;" data-team-name="${d.silverTeam.name}">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-slate-300">
                  <span>🥈</span>
                  <span>RUNNER-UP</span>
                </div>
                <div class="font-bold text-xs text-slate-200 truncate mt-1" title="${d.silverTeam.name}">${d.silverTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${d.silverTeam.players}">${d.silverTeam.players}</div>
              </div>

              <!-- Bronze Node -->
              <div class="bracket-node glass-panel border border-amber-700/30 rounded hover-glowing" style="background: rgba(217, 119, 6, 0.01); padding: 0.5rem 0.65rem;" data-team-name="${d.bronzeTeam.name}">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-amber-600">
                  <span>🥉</span>
                  <span>3RD PLACE</span>
                </div>
                <div class="font-semibold text-xs text-slate-200 truncate mt-1" title="${d.bronzeTeam.name}">${d.bronzeTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${d.bronzeTeam.players}">${d.bronzeTeam.players}</div>
              </div>

              <!-- 4th Place Node -->
              <div class="bracket-node glass-panel border border-slate-600/30 rounded hover-glowing" style="background: rgba(148, 163, 184, 0.01); padding: 0.5rem 0.65rem;" data-team-name="${d.fourthTeam.name}">
                <div class="flex items-center gap-1.5 font-bold text-3xs text-slate-400">
                  <span>🏅</span>
                  <span>4TH PLACE</span>
                </div>
                <div class="font-semibold text-xs text-slate-200 truncate mt-1" title="${d.fourthTeam.name}">${d.fourthTeam.name}</div>
                <div class="text-4xs text-muted truncate mt-0.5" title="${d.fourthTeam.players}">${d.fourthTeam.players}</div>
              </div>
            </div>
          </div>
        </div>
      `};e.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">🌳 Playoff Tournament Tree</h2>
        <p class="view-subtitle">Automatic calculated tournament brackets and playoff trees</p>
      </div>

      ${o(s,"Men's Doubles",!0,"Men's Doubles")}
      ${o(i,"Mixed's Doubles",!1,"Mixed's Doubles")}
    `,setTimeout(()=>this.setupBracketHighlights(),50)}setupBracketHighlights(){const e=document.querySelectorAll(".bracket-visualizer");e.length!==0&&e.forEach(t=>{t.addEventListener("mouseover",s=>{const i=s.target.closest("[data-team-name]");if(!i)return;const r=i.getAttribute("data-team-name");if(!r||r.includes("Winner")||r.includes("Loser")||r.includes("Place"))return;document.querySelectorAll(`[data-team-name="${CSS.escape(r)}"]`).forEach(a=>{a.classList.add("team-highlight-active");const l=a.closest(".bracket-node");l&&l.classList.add("node-highlight-active")})}),t.addEventListener("mouseout",s=>{const i=s.target.closest("[data-team-name]");if(!i||!i.getAttribute("data-team-name"))return;document.querySelectorAll("[data-team-name]").forEach(a=>{a.classList.remove("team-highlight-active");const l=a.closest(".bracket-node");l&&l.classList.remove("node-highlight-active")})})})}getAwardResults(e){const t=e==="Men's Doubles"?"MD":"XD",s=this.state.matches.find(h=>h.id===`F-${t}`),i=this.state.matches.find(h=>h.id===`B-${t}`);let r={name:"TBD",players:"Championship Winner",confirmed:!1},o={name:"TBD",players:"Championship Runner-up",confirmed:!1},a={name:"TBD",players:"Bronze Winner",confirmed:!1},l={name:"TBD",players:"Bronze Runner-up",confirmed:!1};const c=h=>{if(!h)return"";const d=this.state.teams.find(u=>u.name===h);return d?`${d.player1} & ${d.player2}`:""};if(s)if(s.status==="Completed"){const h=s.winner,d=s.winner===s.team1?s.team2:s.team1;r={name:h,players:c(h),confirmed:!0},o={name:d,players:c(d),confirmed:!0}}else s.team1.includes("Winner")||s.team2.includes("Winner")||(r={name:"Grand Finalists",players:`${s.team1} vs ${s.team2}`,confirmed:!1},o={name:"Chasing Runner-up",players:"Runner-up of Grand Final",confirmed:!1});if(i)if(i.status==="Completed"){const h=i.winner,d=i.winner===i.team1?i.team2:i.team1;a={name:h,players:c(h),confirmed:!0},l={name:d,players:c(d),confirmed:!0}}else i.team1.includes("Loser")||i.team2.includes("Loser")||(a={name:"Bronze Contenders",players:`${i.team1} vs ${i.team2}`,confirmed:!1});return{goldTeam:r,silverTeam:o,bronzeTeam:a,fourthTeam:l}}renderResults(e){const t=this.getAwardResults("Men's Doubles"),s=this.getAwardResults("Mixed's Doubles"),i=(o,a,l)=>{const c=o.goldTeam.confirmed||o.silverTeam.confirmed||o.bronzeTeam.confirmed,h=(x,E=48,P="")=>{let k="";if(P==="gold"?k=`
            <div class="podium-medal-badge gold" title="Gold Medal - Champion" style="font-size: 16px; line-height: 1;">
              🥇
            </div>
          `:P==="silver"?k=`
            <div class="podium-medal-badge silver" title="Silver Medal - Runner-up" style="font-size: 16px; line-height: 1;">
              🥈
            </div>
          `:P==="bronze"?k=`
            <div class="podium-medal-badge bronze" title="Bronze Medal - 3rd Place" style="font-size: 16px; line-height: 1;">
              🥉
            </div>
          `:P==="fourth"&&(k=`
            <div class="podium-medal-badge fourth" title="Honorable Mention - 4th Place" style="font-size: 16px; line-height: 1;">
              🎖️
            </div>
          `),!x||x.includes("TBD")||x.includes("Place")||x.includes("Winner")||x.includes("Loser")||x.includes("Chasing")||x.includes("Tranh")||x.includes("Chung"))return`
            <div class="podium-avatar flex items-center justify-center font-bold text-slate-400 bg-slate-800/85 mx-auto" style="width: ${E}px; height: ${E}px; font-size: ${E*.4}px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); border-radius: 50% !important; position: relative;">
              👥
              ${k}
            </div>
          `;const $=this.state.teams.find(D=>D.name===x);return $?`
          <div class="podium-avatar-wrapper mx-auto" style="width: ${E}px; height: ${E}px; position: relative; flex-shrink: 0; border-radius: 50% !important;">
            <img src="/teams/${$.id}.jpg" 
                 onerror="this.onerror=null; this.src='/teams/${$.id}.png'; this.onerror=function(){this.style.display='none'; this.nextElementSibling.style.display='flex';};" 
                 class="podium-avatar object-cover" 
                 style="width: 100%; height: 100%; display: block; border-radius: 50% !important; box-shadow: 0 4px 10px rgba(0,0,0,0.4);" />
            <div class="team-fallback-avatar flex items-center justify-center font-bold text-slate-400 bg-slate-800" 
                 style="display:none; width: 100%; height: 100%; border-radius: 50% !important; font-size: ${E*.4}px;">👥</div>
            ${k}
          </div>
        `:`
            <div class="podium-avatar flex items-center justify-center font-bold text-slate-400 bg-slate-800/85 mx-auto" style="width: ${E}px; height: ${E}px; font-size: ${E*.4}px; box-shadow: 0 4px 10px rgba(0,0,0,0.3); border-radius: 50% !important; position: relative;">
              👥
              ${k}
            </div>
          `},d=this.state.teams.find(x=>x.name===o.silverTeam.name),u=d?d.id:"",f=u?"clickable-podium":"",m=this.state.teams.find(x=>x.name===o.goldTeam.name),p=m?m.id:"",g=p?"clickable-podium":"",y=this.state.teams.find(x=>x.name===o.bronzeTeam.name),S=y?y.id:"",b=S?"clickable-podium":"",w=this.state.teams.find(x=>x.name===o.fourthTeam.name),T=w?w.id:"",_=T?"clickable-podium":"";return`
        <div class="glass-card mb-8 text-center relative overflow-hidden" style="padding: 1.5rem 1rem;">
          <div class="absolute top-0 left-0 w-full h-[3px] ${l?"bg-gradient-to-r from-lime-500 via-lime-400 to-lime-600":"bg-gradient-to-r from-cyan-500 via-cyan-400 to-cyan-600"}"></div>
          <h3 class="font-bold mb-2 flex items-center justify-center gap-2 ${l?"text-volt":"text-cyan"} text-glow-volt">
            <span>🏆</span>
            <span>${a}</span>
          </h3>
          <p class="text-xs text-muted mb-4">
            ${c?"⚡ Official championship matches completed":"⏳ Waiting for championship finals to complete"}
          </p>
 
          <div class="podium-stage-container">
            <!-- Silver (#2) -->
            <div class="podium-column silver ${f}" data-team-id="${u}" data-category="${a}">
              <div class="h-6 md:h-8 mb-1.5 flex-shrink-0"></div>
              <div class="podium-avatar-halo">
                ${h(o.silverTeam.name,56,"silver")}
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
            <div class="podium-column gold ${g}" data-team-id="${p}" data-category="${a}">
              <div class="crown-icon text-2xl md:text-3xl animate-bounce-slow mb-1 flex-shrink-0" style="filter: drop-shadow(0 0 8px rgba(245,158,11,0.6));">👑</div>
              <div class="podium-avatar-halo">
                ${h(o.goldTeam.name,68,"gold")}
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
            <div class="podium-column bronze ${b}" data-team-id="${S}" data-category="${a}">
              <div class="h-6 md:h-8 mb-1.5 flex-shrink-0"></div>
              <div class="podium-avatar-halo">
                ${h(o.bronzeTeam.name,56,"bronze")}
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
          <div class="podium-fourth-card ${_}" data-team-id="${T}" data-category="${a}">
            <div class="flex items-center gap-3 min-w-0 flex-1">
              <div class="podium-fourth-rank">
                4
              </div>
              ${h(o.fourthTeam.name,36,"fourth")}
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
 
      ${i(t,"Men's Doubles",!0)}
      ${i(s,"Mixed's Doubles",!1)}
    `,e.querySelectorAll(".clickable-podium").forEach(o=>{o.addEventListener("click",()=>{const a=o.getAttribute("data-team-id"),l=o.getAttribute("data-category");a&&l&&this.showTeamDetailsModal(a,l)})}),setTimeout(()=>{this.activeTab==="results"&&this.confetti&&this.confetti.start()},150)}renderRules(e){const t=kr.en,s=t.sections.map(i=>{const r=i.content.map(o=>{let a=o.replace(/\*\*(.*?)\*\*/g,'<strong class="text-slate-100">$1</strong>');return a=a.replace(/\\rightarrow/g," ➔ "),a=a.replace(/\$(.*?)\$/g,'<code class="bg-slate-900 px-1 py-0.5 rounded text-volt font-bold">$1</code>'),`<p class="mb-2 text-slate-300 leading-relaxed text-sm">${a}</p>`}).join("");return`
        <div class="rules-section glass-panel border border-slate-700/40 p-4 rounded-lg hover-glowing mb-4">
          <h3 class="text-volt font-bold border-b border-slate-800 pb-2 mb-3 text-sm">${i.title}</h3>
          <div>${r}</div>
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
            <h3 class="m-0 mb-1 font-bold text-glow-cyan text-base">${t.title}</h3>
            <p class="text-xs text-muted mb-4 border-b border-slate-800 pb-2">${t.subtitle}</p>
            
            <div class="rules-scroll-area pr-2">
              ${s}
            </div>
          </div>
        </div>
      </div>
    `}renderTeams(e){const t=(o,a)=>{const l=a==="Men's Doubles",c=l?"text-volt":"text-cyan",h=o.map(d=>{const u=this.getTeamStats(d.name,a),f=this.getTeamRank(d.name,a),m=u.completedMatches.map(g=>{const y=g.winner===d.name,S=y?"bg-emerald-500/10 text-emerald-400 border border-emerald-500/20":"bg-rose-500/10 text-rose-400 border border-rose-500/20",b=y?"W":"L",w=`${g.stage}: ${g.team1} vs ${g.team2} (${g.score1}-${g.score2})`;return`<span class="flex items-center justify-center rounded-full font-bold font-mono text-5xs cursor-help ${S}" style="width: 14px; height: 14px; font-size: 0.45rem;" title="${w}">${b}</span>`}).join(""),p=m.length>0?m:'<span class="text-slate-500 text-5xs italic font-sans">No matches</span>';return`
          <div class="team-profile-card ${l?"team-card-md":"team-card-xd"} glass-panel border border-slate-700/50 rounded-lg hover-glowing flex flex-col justify-between overflow-hidden relative"
               style="background: radial-gradient(circle at top right, ${l?"rgba(163, 230, 53, 0.05)":"rgba(34, 211, 238, 0.05)"} 0%, rgba(15, 22, 42, 0.45) 80%); cursor: pointer;"
               data-team-id="${d.id}" data-category="${a}">
            
            <!-- Team Color Banner -->
            <div class="team-card-banner w-full" style="height: 52px; background: linear-gradient(135deg, ${l?"rgba(163, 230, 53, 0.15)":"rgba(34, 211, 238, 0.15)"} 0%, rgba(15, 22, 42, 0.6) 100%); border-b: 1px solid rgba(255, 255, 255, 0.04);"></div>

            <!-- Team Image Circular Avatar overlapping banner -->
            <div class="team-card-avatar-wrapper">
              <div class="team-card-avatar-inner" style="box-shadow: 0 4px 10px rgba(0,0,0,0.5), 0 0 15px ${l?"rgba(163, 230, 53, 0.2)":"rgba(34, 211, 238, 0.2)"};">
                <img src="/teams/${d.id}.jpg" 
                     onerror="this.onerror=null; this.src='/teams/${d.id}.png'; this.onerror=function(){ this.style.display='none'; this.parentNode.querySelector('.team-avatar-placeholder').style.display='flex'; }" 
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
                    <span class="font-extrabold text-sm text-slate-100 break-words pr-1" title="${d.name}">${d.name}</span>
                  </div>
                  <div class="flex items-center gap-1.5 flex-shrink-0 mt-0.5">
                    <span class="badge bg-slate-800/80 text-slate-300 font-extrabold text-5xs border border-slate-700/50">#${f}</span>
                    <span class="badge ${l?"bg-volt":"bg-cyan"} text-slate-950 font-bold text-4xs">TEAM</span>
                  </div>
                </div>

                <!-- Members -->
                <div class="flex flex-col gap-1.5 mb-4 text-xs">
                  <div class="flex items-center gap-2">
                    <span class="text-slate-500">🏸</span>
                    <span class="font-semibold text-slate-300">${d.player1}</span>
                  </div>
                  <div class="flex items-center gap-2">
                    <span class="text-slate-500">🏸</span>
                    <span class="font-semibold text-slate-300">${d.player2}</span>
                  </div>
                  
                  <!-- Form guide -->
                  <div class="flex items-center gap-1.5 mt-2 pt-2 border-t border-slate-800/40">
                    <span class="text-5xs font-bold uppercase tracking-wider text-slate-500">FORM:</span>
                    <div class="flex items-center gap-1">
                      ${p}
                    </div>
                  </div>
                </div>
              </div>

              <!-- Stats -->
              <div class="bg-slate-950/60 p-3 rounded border border-slate-900 text-4xs">
                <!-- Summary row -->
                <div class="grid grid-cols-4 gap-1 text-center font-semibold text-slate-400 mb-3 border-b border-slate-900 pb-2">
                  <div>
                    <div class="text-2xs font-extrabold text-slate-200">${u.played}</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">Pld</div>
                  </div>
                  <div>
                    <div class="text-2xs font-extrabold ${l?"text-volt":"text-cyan"}">${u.wins}</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">Won</div>
                  </div>
                  <div>
                    <div class="text-2xs font-extrabold ${u.losses>0?"text-rose-400":"text-slate-400"}">${u.losses}</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">Lost</div>
                  </div>
                  <div>
                    <div class="text-2xs font-extrabold text-slate-200">${u.winPercent}%</div>
                    <div class="text-5xs uppercase tracking-wider text-slate-500">Win%</div>
                  </div>
                </div>

                <!-- Telemetry detail list -->
                <div class="flex flex-col gap-1.5 font-mono">
                  <div class="flex items-center justify-between text-slate-400">
                    <span>Standing Pts:</span>
                    <span class="font-extrabold text-slate-200">${u.pts}</span>
                  </div>
                  <div class="flex items-center justify-between text-slate-400">
                    <span>Sets W/L:</span>
                    <div class="flex items-center gap-1.5">
                      <span class="text-slate-200">${u.setsWon}-${u.setsLost}</span>
                      <span class="text-5xs font-bold px-1 py-0.5 rounded ${u.netSets>0?"bg-emerald-500/10 text-emerald-400":u.netSets<0?"bg-rose-500/10 text-rose-400":"bg-slate-800 text-slate-400"}">
                        ${u.netSets>0?"+":""}${u.netSets}
                      </span>
                    </div>
                  </div>
                  <div class="flex items-center justify-between text-slate-400">
                    <span>Points W/L:</span>
                    <div class="flex items-center gap-1.5">
                      <span class="text-slate-200">${u.pointsWon}-${u.pointsLost}</span>
                      <span class="text-5xs font-bold px-1 py-0.5 rounded ${u.netPoints>0?"bg-emerald-500/10 text-emerald-400":u.netPoints<0?"bg-rose-500/10 text-rose-400":"bg-slate-800 text-slate-400"}">
                        ${u.netPoints>0?"+":""}${u.netPoints}
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
            <span class="${c}">${l?"💎":"🔮"}</span>
            <span class="${c}">${a} (${o.length} Teams)</span>
          </h3>
          <div class="team-cards-grid">
            ${h}
          </div>
        </div>
      `},s=this.state.teams.filter(o=>o.category==="Men's Doubles").sort((o,a)=>{const l=this.getTeamRank(o.name,"Men's Doubles"),c=this.getTeamRank(a.name,"Men's Doubles");return(typeof l=="number"?l:99)-(typeof c=="number"?c:99)}),i=this.state.teams.filter(o=>o.category==="Mixed's Doubles").sort((o,a)=>{const l=this.getTeamRank(o.name,"Mixed's Doubles"),c=this.getTeamRank(a.name,"Mixed's Doubles");return(typeof l=="number"?l:99)-(typeof c=="number"?c:99)});e.innerHTML=`
      <div class="mb-6">
        <h2 class="view-title text-glow-volt m-0">👥 Registered Teams & Members</h2>
        <p class="view-subtitle">Browse player profiles and team group statistics</p>
      </div>

      <!-- Teams lists -->
      ${t(s,"Men's Doubles")}
      ${t(i,"Mixed's Doubles")}
    `,e.querySelectorAll(".team-profile-card").forEach(o=>{o.addEventListener("click",()=>{const a=o.getAttribute("data-team-id"),l=o.getAttribute("data-category");this.showTeamDetailsModal(a,l)})})}showTeamDetailsModal(e,t){const s=this.state.teams.find(P=>P.id===e);if(!s)return;const i=t==="Men's Doubles",r=this.getTeamStats(s.name,t),o=this.getTeamRank(s.name,t),a=r.played,l=r.wins,c=r.losses,h=r.pts,d=r.setsWon,u=r.setsLost,f=r.netSets,m=r.pointsWon,p=r.pointsLost,g=r.netPoints,y=r.winPercent,S=r.completedMatches.map(P=>{const k=P.winner===s.name,$=k?"win":"loss",D=k?"W":"L",B=`${P.stage}: ${P.team1} vs ${P.team2} (${P.score1}-${P.score2})`;return`<span class="team-modal-form-pill ${$}" title="${B}">${D}</span>`}).join(""),b=S.length>0?S:'<span class="text-slate-500 text-5xs italic">No matches played</span>',w=document.createElement("div");w.className="team-modal-backdrop",w.id="team-profile-modal-backdrop";const T=o===1?'<div class="team-modal-rank-badge rank-1">🥇 Rank #1</div>':o===2?'<div class="team-modal-rank-badge rank-2">🥈 Rank #2</div>':o===3?'<div class="team-modal-rank-badge rank-3">🥉 Rank #3</div>':`<div class="team-modal-rank-badge rank-other">Rank #${o}</div>`,_=i?"volt":"cyan";w.innerHTML=`
      <div class="team-modal-card">
        <!-- Close Button -->
        <button class="team-modal-close-btn" id="modal-team-close-btn">
          &times;
        </button>

        <!-- Cover Photo with Integrated Header -->
        <div class="team-modal-cover">
          ${T}
          <img src="/teams/${s.id}.jpg" 
               onerror="this.onerror=null; this.src='/teams/${s.id}.png'; this.onerror=function(){ this.style.display='none'; this.parentNode.querySelector('.team-modal-cover-placeholder').style.display='flex'; }" />
          <div class="team-modal-cover-placeholder" style="display: none;">
            👥
          </div>
          
          <!-- Spotlight Gradient overlay for rich contrast -->
          <div class="team-modal-spotlight"></div>
          
          <!-- Team Header Content -->
          <div class="team-modal-header-content">
            <div class="flex items-center gap-1">
              <span class="team-modal-cat-tag ${_}">${t}</span>
              <span class="team-modal-id-tag">ID: ${s.id}</span>
            </div>
            <h3 class="team-modal-name">${s.name}</h3>
          </div>
        </div>

        <!-- Team Profile Body -->
        <div class="team-modal-body">
          
          <!-- Players Grid -->
          <div class="team-modal-players-grid">
            <div class="team-modal-player-card">
              <div class="team-modal-player-icon ${_}">🏸</div>
              <div class="team-modal-player-info">
                <div class="team-modal-player-role">Player 1</div>
                <div class="team-modal-player-name" title="${s.player1}">${s.player1}</div>
              </div>
            </div>
            <div class="team-modal-player-card">
              <div class="team-modal-player-icon ${_}">🏸</div>
              <div class="team-modal-player-info">
                <div class="team-modal-player-role">Player 2</div>
                <div class="team-modal-player-name" title="${s.player2}">${s.player2}</div>
              </div>
            </div>
          </div>

          <!-- Aligned capsule Match summary bar -->
          <div class="team-modal-summary-bar">
            <div class="team-modal-summary-item">
              <div class="team-modal-summary-label">Played</div>
              <div class="team-modal-summary-value">${a}</div>
            </div>
            <div class="team-modal-summary-divider"></div>
            <div class="team-modal-summary-item">
              <div class="team-modal-summary-label won">Won</div>
              <div class="team-modal-summary-value won">${l}</div>
            </div>
            <div class="team-modal-summary-divider"></div>
            <div class="team-modal-summary-item">
              <div class="team-modal-summary-label lost">Lost</div>
              <div class="team-modal-summary-value lost">${c}</div>
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
                <span class="team-modal-telemetry-value">${h}</span>
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
                <span class="team-modal-telemetry-value">${y}</span>
                <span class="team-modal-telemetry-unit">%</span>
              </div>
              <div class="team-modal-progress-track">
                <div class="team-modal-progress-bar ${_}" style="width: ${y}%;"></div>
              </div>
            </div>

            <!-- Sets Diff -->
            <div class="team-modal-telemetry-card">
              <div class="team-modal-telemetry-header">
                <span class="team-modal-telemetry-icon">🎾</span>
                <span class="team-modal-telemetry-label">Sets Diff</span>
              </div>
              <div class="team-modal-telemetry-value-row">
                <span class="team-modal-telemetry-value" style="font-size: 1.25rem;">${d}-${u}</span>
                <span class="team-modal-diff-badge ${f>0?"positive":f<0?"negative":"neutral"}">
                  ${f>0?"+":""}${f}
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
                <span class="team-modal-telemetry-value" style="font-size: 1.25rem;">${m}-${p}</span>
                <span class="team-modal-diff-badge ${g>0?"positive":g<0?"negative":"neutral"}">
                  ${g>0?"+":""}${g}
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
              ${b}
            </div>
          </div>
        </div>
      </div>
    `,document.body.appendChild(w);const x=w.querySelector("#modal-team-close-btn"),E=()=>{w.classList.add("animate-fade-out"),setTimeout(()=>w.remove(),250)};x.addEventListener("click",E),w.addEventListener("click",P=>{P.target===w&&E()})}startCountdown(){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null);const e=new Date("May 31, 2026 13:30:00").getTime(),t=()=>{const s=document.getElementById("cd-days"),i=document.getElementById("cd-hours"),r=document.getElementById("cd-minutes"),o=document.getElementById("cd-seconds");if(!s){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null);return}const a=new Date().getTime(),l=e-a;if(l<0){this.countdownTimer&&(clearInterval(this.countdownTimer),this.countdownTimer=null),s.textContent="00",i.textContent="00",r.textContent="00",o.textContent="00";return}const c=Math.floor(l/(1e3*60*60*24)),h=Math.floor(l%(1e3*60*60*24)/(1e3*60*60)),d=Math.floor(l%(1e3*60*60)/(1e3*60)),u=Math.floor(l%(1e3*60)/1e3);s.textContent=c.toString().padStart(2,"0"),i.textContent=h.toString().padStart(2,"0"),r.textContent=d.toString().padStart(2,"0"),o.textContent=u.toString().padStart(2,"0")};t(),this.countdownTimer=setInterval(t,1e3)}handleSyncUpdate(e,t){if(this.renderActiveView(),this.activeSpectateMatchId&&t&&t.matchId===this.activeSpectateMatchId)if(e==="STATUS_UPDATE"&&!t.isLive){const s=this.state.matches.find(i=>i.id===t.matchId);if(s)this.showSpectatorMatchEndNotice(s);else{const i=document.getElementById("spectate-overlay-container");i&&(i.classList.add("hidden"),i.innerHTML=""),this.activeSpectateMatchId=null}}else this.renderSpectateOverlay(this.activeSpectateMatchId)}showSpectatorMatchEndNotice(e){const t=e.stage||"Group Stage";let s=e.team1;e.score2Sets>e.score1Sets&&(s=e.team2);let i="WIN THE MATCH!",r="MATCH COMPLETED",o=`🎉 Congratulations to **${s}** on winning this match! 🎉`,a="🏸",l="MATCH WINNER",c="#84cc16",h="rgba(132, 204, 22, 0.45)";t==="Semi-finals"?(i="CONGRATULATIONS ON WINNING!",r="QUALIFIED FOR THE FINALS",o=`⚡ Spectacular! **${s}** won the Semi-finals and officially qualified for the championship Grand Final! 🏆`,a="🏅",l="SEMI-FINALS WINNER",c="#06b6d4",h="rgba(6, 182, 212, 0.45)"):t==="Grand Final"?(i="TOURNAMENT CHAMPIONS!",r="GEAR GAMES BADMINTON 2026 CUP",o=`👑 CHAMPIONS! Huge congratulations to the ultimate champions of the Gear Games 2026 Badminton Tournament: **${s}**! A historic and well-deserved victory! 🏆🥇`,a="🏆",l="TOURNAMENT CHAMPIONS",c="#fbbf24",h="rgba(251, 191, 36, 0.5)"):t==="Bronze Match"&&(i="BRONZE MEDALISTS!",r="BRONZE MEDAL SECURED",o=`🥉 Superb! **${s}** won the Bronze Match and successfully claimed the prestigious **Bronze Medal**! 🥉`,a="🥉",l="BRONZE WINNER",c="#ea580c",h="rgba(234, 88, 12, 0.45)");const d=document.createElement("div");d.className="match-end-modal-backdrop relative",d.innerHTML=`
      <div class="match-end-modal-card glass-card text-center animate-scale-in relative overflow-hidden" style="max-width: 480px; width: 90%; box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 60px ${h}; z-index: 2;">
        <div class="relative" style="z-index: 2;">
          <div class="trophy-icon-container mb-4 animate-bounce" style="font-size: 4.5rem; filter: drop-shadow(0 0 18px ${h}); line-height: 1;">
            ${a}
          </div>
          
          <h2 class="text-lg font-black mb-1" style="font-size: 1.5rem; color: ${c}; filter: drop-shadow(0 0 8px ${h});">${i}</h2>
          <p class="text-xs text-slate-400 mb-4 uppercase tracking-widest font-bold">${r}</p>
          
          <div class="bg-slate-950/60 rounded-xl p-4 border border-slate-900 mb-6">
            <span class="text-5xs uppercase font-extrabold text-slate-500 block mb-1.5">${l}</span>
            <span class="text-sm font-black text-white uppercase" style="font-size: 1.25rem; filter: drop-shadow(0 0 8px rgba(255,255,255,0.25));">${s}</span>
            
            <div class="flex items-center justify-center gap-2 mt-3 pt-3 border-t border-slate-900/60">
              ${e.sets?e.sets.map((u,f)=>`
                <div class="bg-slate-900/80 px-2.5 py-1 rounded text-4xs font-bold text-slate-300">
                  S${f+1}: <span class="text-volt">${u.t1}</span>-<span class="text-cyan">${u.t2}</span>
                </div>
              `).join(""):""}
            </div>
          </div>

          <p class="text-xs text-slate-200 mb-6 font-semibold px-2" style="line-height: 1.6;">${o}</p>
          
          <button class="btn w-full py-3 font-extrabold uppercase tracking-wider text-xs flex items-center justify-center gap-2" id="spec-end-btn-home" style="font-size: 0.85rem; background-color: ${c}; color: #000; box-shadow: 0 4px 14px ${h}; border: none;">
            🏠 Back to Homepage
          </button>
        </div>
      </div>
    `,document.body.appendChild(d),document.getElementById("spec-end-btn-home").onclick=()=>{d.classList.add("animate-fade-out"),setTimeout(()=>{d.remove();const u=document.getElementById("spectate-overlay-container");u&&(u.classList.add("hidden"),u.innerHTML=""),this.activeSpectateMatchId=null,this.switchTab("dashboard")},300)}}renderLivePitches(){const e=["Pitch 1","Pitch 2","Pitch 3","Pitch 4"],t=this.sync.getLiveMatches();return e.map(s=>{const i=Object.keys(t).find(a=>{const l=this.state.matches.find(c=>c.id===a);return l&&l.pitch===s});if(i){const a=t[i],l=this.state.matches.find(h=>h.id===i);l.category;const c=this.admin.isAdmin||this.admin.isRef&&l.pitch===this.admin.refPitch;return`
          <div class="live-pitch-card glass-panel border border-red-500/30 p-3 rounded-lg hover-glowing bg-red-950/5 flex flex-col justify-between">
            <div class="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2">
              <span class="font-extrabold text-volt text-4xs">${s}</span>
              <span class="badge bg-danger pulse-dot flex items-center gap-1 font-bold text-5xs">
                <span class="live-dot"></span> LIVE
              </span>
            </div>
            
            <div class="text-center py-1">
              <div class="text-4xs font-bold text-slate-400 mb-0.5 truncate" title="${l.team1}">${l.team1}</div>
              <div class="text-xs font-mono font-black text-slate-100 flex items-center justify-center gap-2">
                <span class="${a.servingTeam==="A"?"text-glow-volt":""}">${a.score1}</span>
                <span class="text-slate-600 text-3xs">vs</span>
                <span class="${a.servingTeam==="B"?"text-glow-cyan":""}">${a.score2}</span>
              </div>
              <div class="text-4xs font-bold text-slate-400 mt-0.5 truncate" title="${l.team2}">${l.team2}</div>
            </div>
            
            <div class="text-5xs text-center text-slate-500 font-semibold mb-2">
              Set ${a.currentSet} | serve: ${a.servingTeam==="A"?"T1":"T2"}
            </div>

            <div class="flex items-center gap-2 pt-2 border-t border-slate-800/80">
              <button class="btn btn-2xs btn-outline btn-spectate-match flex-1 font-bold" data-match-id="${l.id}">
                🔍 Spectate
              </button>
              ${c?`
                <button class="btn btn-2xs btn-outline btn-join-match font-bold" style="border-color: var(--volt); color: var(--volt);" data-match-id="${l.id}">
                  🏸 Ump
                </button>
              `:""}
            </div>
          </div>
        `}const r=this.state.matches.find(a=>a.pitch===s&&a.status==="Scheduled"),o=this.admin.isAdmin||this.admin.isRef&&s===this.admin.refPitch;return r?`
          <div class="live-pitch-card glass-panel border border-slate-800 p-3 rounded-lg flex flex-col justify-between" style="opacity: 0.8;">
            <div class="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2">
              <span class="font-extrabold text-slate-400 text-4xs">${s}</span>
              <span class="badge bg-slate-800 text-slate-500 font-bold text-5xs">${r.time}</span>
            </div>
            
            <div class="text-center py-2">
              <div class="text-5xs text-muted truncate" title="${r.team1}">${r.team1}</div>
              <div class="text-4xs font-bold text-slate-400 py-0.5">SCHEDULED</div>
              <div class="text-5xs text-muted truncate" title="${r.team2}">${r.team2}</div>
            </div>

            <div class="pt-2 border-t border-slate-800/80">
              ${o?`
                <button class="btn btn-2xs btn-outline btn-join-match btn-block font-bold" style="border-color: var(--volt); color: var(--volt);" data-match-id="${r.id}">
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
          <span class="font-extrabold text-slate-400 text-4xs mt-1.5">${s}</span>
          <span class="text-5xs text-slate-600 font-semibold mt-0.5">Court Empty</span>
        </div>
      `}).join("")}openSpectateOverlay(e){if(document.getElementById("umpire-overlay-container")&&!document.getElementById("umpire-overlay-container").classList.contains("hidden")){alert("You are in the Umpire Control room. Please exit Umpire mode first!");return}if(this.activeSpectateMatchId=e,!document.getElementById("spectate-overlay-container")){const t=document.createElement("div");t.id="spectate-overlay-container",t.className="umpire-overlay-backdrop",document.body.appendChild(t)}this.renderSpectateOverlay(e),setTimeout(()=>{const t=document.querySelector(".spectate-court-svg .svg-shuttle");t&&(t.setAttribute("dur","0.7s"),t.innerHTML=`
          <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
            <mpath href="#spectate-shuttle-path" />
          </animateMotion>
        `)},100)}renderSpectateOverlay(e){const t=document.getElementById("spectate-overlay-container");if(!t)return;t.classList.remove("hidden");const s=this.state.matches.find(U=>U.id===e),r=this.sync.getLiveMatches()[e];if(!r||!s){t.classList.add("hidden"),this.activeSpectateMatchId=null;return}r.isEven,s.category;let o,a,l,c;const h=r.team1Right||s.team1.split(" ")[0]+" 1",d=r.team1Left||s.team1.split(" ")[0]+" 2",u=r.team2Right||s.team2.split(" ")[0]+" 1",f=r.team2Left||s.team2.split(" ")[0]+" 2";r.isCourtSwapped?(o=u,a=f,l=h,c=d):(o=h,a=d,l=u,c=f);const m=r.serverName,p=r.receiverName,g=U=>U===m?"S":U===p?"R":"P",y=U=>U===m?"volt":U===p?"cyan":"neutral",S=U=>U===m?"text-volt":U===p?"text-cyan":"text-slate-200",b=U=>U!==m?"":`
        <g class="shuttle-badge" transform="translate(11, -11)">
          <circle cx="0" cy="0" r="8.5" fill="#090d16" stroke="#84cc16" stroke-width="1.2" />
          <text x="0" y="3.5" font-size="10" text-anchor="middle" font-family="sans-serif">🏸</text>
        </g>
      `;let w,T,_,x;m===o?(w=210,T=355):m===a?(w=90,T=355):m===l?(w=90,T=145):(w=210,T=145),p===o?(_=210,x=355):p===a?(_=90,x=355):p===l?(_=90,x=145):(_=210,x=145);const E=(U,Yt)=>Yt===355?U===210?"M 150,310 L 280,310 L 280,440 L 150,440 Z":"M 20,310 L 150,310 L 150,440 L 20,440 Z":U===90?"M 20,60 L 150,60 L 150,190 L 20,190 Z":"M 150,60 L 280,60 L 280,190 L 150,190 Z",P=E(w,T),k=E(_,x),$=(w+_)/2+30,D=(T+x)/2-40,B=r.sets.map((U,Yt)=>`
      <div class="umpire-set-badge">
        <span>Set ${Yt+1}:</span>
        <strong>${U.t1} - ${U.t2}</strong>
      </div>
    `).join("");t.innerHTML=`
      <div class="umpire-card glass-card spectate-stadium">
        <!-- Header -->
        <div class="umpire-header flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
          <div class="flex items-center gap-3">
            <span class="badge bg-danger pulse-dot flex items-center gap-1.5 font-bold">
              <span class="live-dot"></span> LIVE SPECTATING
            </span>
            <span class="text-xs font-bold text-slate-300">${s.pitch} | ${s.stage}</span>
          </div>
          <h2 class="text-sm font-black m-0 text-glow-volt">LIVE STADIUM SCREEN</h2>
          <button class="btn btn-xs btn-neutral" id="spectate-btn-close">✕ Exit</button>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          <!-- Spectator Scoreboard Column (Grid Span 7) -->
          <div class="lg:col-span-7 flex flex-col gap-6">
            
            <!-- Historic sets display -->
            <div class="flex items-center gap-3 justify-center mb-1">
              ${B}
              <div class="umpire-set-badge current">
                <span>Set ${r.currentSet}:</span>
                <strong class="text-volt">${r.score1} - ${r.score2}</strong>
              </div>
            </div>

            <!-- Big Glowing Score Pads (Read-only for Spectators) -->
            <div class="grid grid-cols-2 gap-6 text-center">
              <div class="bg-slate-950/60 p-6 rounded-xl border border-slate-900 relative">
                <div class="text-2xs font-extrabold truncate text-volt mb-3" title="${s.team1}">
                  ${s.team1}
                </div>
                <div class="font-mono font-black text-6xl text-glow-volt py-4">${r.score1}</div>
                ${r.servingTeam==="A"?`
                  <span class="absolute top-3 right-3 text-volt animate-bounce" style="font-size: 0.95rem;">🏸 Serve</span>
                `:""}
              </div>

              <div class="bg-slate-950/60 p-6 rounded-xl border border-slate-900 relative">
                <div class="text-2xs font-extrabold truncate text-cyan mb-3" title="${s.team2}">
                  ${s.team2}
                </div>
                <div class="font-mono font-black text-6xl text-glow-cyan py-4">${r.score2}</div>
                ${r.servingTeam==="B"?`
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
                <path d="${P}" class="svg-highlight-box serving" filter="url(#spec-glow-volt)" />
                <path d="${k}" class="svg-highlight-box receiving" filter="url(#spec-glow-cyan)" />

                <!-- shuttle flight -->
                <path id="spectate-shuttle-path" d="M ${w},${T} Q ${$},${D} ${_},${x}" class="svg-shuttle-path" />
                <circle r="5" class="svg-shuttle" filter="url(#spec-glow-cyan)">
                  <animateMotion dur="0.7s" repeatCount="1" fill="freeze">
                    <mpath href="#spectate-shuttle-path" />
                  </animateMotion>
                </circle>

                <!-- Player Avatars Bottom (Team on same horizontal line in middle of bottom court at y=355) -->
                <!-- Bottom Left Player -->
                <g class="player-avatar ${a===m?"server":a===p?"receiver":"partner"}" transform="translate(90, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${y(a)}" />
                  <text x="0" y="4" class="avatar-text">${g(a)}</text>
                  ${b(a)}
                </g>
                <text x="90" y="383" class="svg-player-name ${S(a)} font-bold">${a.split(" ")[0]}</text>

                <!-- Bottom Right Player -->
                <g class="player-avatar ${o===m?"server":o===p?"receiver":"partner"}" transform="translate(210, 355)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${y(o)}" />
                  <text x="0" y="4" class="avatar-text">${g(o)}</text>
                  ${b(o)}
                </g>
                <text x="210" y="383" class="svg-player-name ${S(o)} font-bold">${o.split(" ")[0]}</text>

                <!-- Player Avatars Top (Team on same horizontal line in middle of top court at y=145) -->
                <!-- Top Right Player (Screen Left x=90) -->
                <g class="player-avatar ${l===m?"server":l===p?"receiver":"partner"}" transform="translate(90, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${y(l)}" />
                  <text x="0" y="4" class="avatar-text">${g(l)}</text>
                  ${b(l)}
                </g>
                <text x="90" y="123" class="svg-player-name ${S(l)} font-bold">${l.split(" ")[0]}</text>

                <!-- Top Left Player (Screen Right x=210) -->
                <g class="player-avatar ${c===m?"server":c===p?"receiver":"partner"}" transform="translate(210, 145)">
                  <circle cx="0" cy="0" r="13" class="avatar-bg ${y(c)}" />
                  <text x="0" y="4" class="avatar-text">${g(c)}</text>
                  ${b(c)}
                </g>
                <text x="210" y="123" class="svg-player-name ${S(c)} font-bold">${c.split(" ")[0]}</text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    `,document.getElementById("spectate-btn-close").onclick=()=>{t.classList.add("hidden"),t.innerHTML="",this.activeSpectateMatchId=null}}}window.addEventListener("DOMContentLoaded",()=>{new Gd});
