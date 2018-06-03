!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("../../../../../../../../../static/vendor/jschardet/jschardet.min.js"),require("../../../../../../../../../static/vendor/xlsx/xlsx.full.min.js")):"function"==typeof define&&define.amd?define("svelte/upload",["../../../../../../../../../static/vendor/jschardet/jschardet.min.js","../../../../../../../../../static/vendor/xlsx/xlsx.full.min.js"],e):t.upload=e(t.jschardet)}(this,function(t){"use strict";function e(){}function n(t,e){for(var n in e)t[n]=e[n];return t}function a(t,e){e.appendChild(t)}function r(t,e,n){e.insertBefore(t,n)}function s(t){t.parentNode.removeChild(t)}function i(t){for(;t.nextSibling;)t.parentNode.removeChild(t.nextSibling)}function o(t){for(var e=0;e<t.length;e+=1)t[e]&&t[e].d()}function c(t){return document.createElement(t)}function u(t){return document.createTextNode(t)}function d(t,e,n){t.addEventListener(e,n,!1)}function l(t,e,n){t.removeEventListener(e,n,!1)}function h(t,e,n){t.setAttribute(e,n)}function f(t,e){for(var n=0;n<t.options.length;n+=1){var a=t.options[n];if(a.__value===e)return void(a.selected=!0)}}function v(t){var e=t.querySelector(":checked")||t.options[0];return e&&e.__value}function p(){return Object.create(null)}function _(t){this.destroy=e,this.fire("destroy"),this.set=this.get=e,!1!==t&&this._fragment.u(),this._fragment.d(),this._fragment=this._state=null}function g(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function m(t,e){return t!=t?e==e:t!==e}function y(t,e){var n=t in this._handlers&&this._handlers[t].slice();if(n)for(var a=0;a<n.length;a+=1){var r=n[a];r.__calling||(r.__calling=!0,r.call(this,e),r.__calling=!1)}}function b(t){return t?this._state[t]:this._state}function x(t,e){t._handlers=p(),t._bind=e._bind,t.options=e,t.root=e.root||t,t.store=t.root.store||e.store}function D(t,e,n){var a=e.bind(this);return n&&!1===n.init||a(this.get()[t],void 0),this.on(n&&n.defer?"update":"state",function(e){e.changed[t]&&a(e.current[t],e.previous&&e.previous[t])})}function w(t,e){if("teardown"===t)return this.on("destroy",e);var n=this._handlers[t]||(this._handlers[t]=[]);return n.push(e),{cancel:function(){var t=n.indexOf(e);~t&&n.splice(t,1)}}}function T(t){for(;t&&t.length;)t.shift()()}t=t&&t.hasOwnProperty("default")?t.default:t;var N={destroy:_,get:b,fire:y,observe:D,on:w,set:function(t){this._set(n({},t)),this.root._lock||(this.root._lock=!0,T(this.root._beforecreate),T(this.root._oncreate),T(this.root._aftercreate),this.root._lock=!1)},teardown:_,_recompute:e,_set:function(t){var e=this._state,a={},r=!1;for(var s in t)this._differs(t[s],e[s])&&(a[s]=r=!0);r&&(this._state=n(n({},e),t),this._recompute(a,this._state),this._bind&&this._bind(a,this._state),this._fragment&&(this.fire("state",{changed:a,current:this._state,previous:e}),this._fragment.p(a,this._state),this.fire("update",{changed:a,current:this._state,previous:e})))},_mount:function(t,e){this._fragment[this._fragment.i?"i":"m"](t,e||null)},_unmount:function(){this._fragment&&this._fragment.u()},_differs:g};function k(t,e,n){return function(t,e,n,a,r){var s={method:e,body:a,mode:"cors",credentials:n};window.fetch(t,s).then(function(t){if(200!=t.status)return new Error(t.statusText);try{return t.json()}catch(e){return t.text()}}).then(r).catch(function(t){console.error(t)})}(t,"PUT","include",e,n)}var A,S=Date.now||function(){return(new Date).getTime()};function j(t,e){return void 0===e&&(e="core"),dw.backend.__messages[e][t]||dw.backend.__messages.core[t]||t}var C,P=dw.backend.currentChart,M=function(t,e,n){var a,r,s,i,o=0;n||(n={});var c=function(){o=!1===n.leading?0:S(),a=null,i=t.apply(r,s),a||(r=s=null)},u=function(){var u=S();o||!1!==n.leading||(o=u);var d=e-(u-o);return r=this,s=arguments,d<=0||d>e?(a&&(clearTimeout(a),a=null),o=u,i=t.apply(r,s),a||(r=s=null)):a||!1===n.trailing||(a=setTimeout(c,d)),i};return u.cancel=function(){clearTimeout(a),o=0,a=r=s=null},u}(function(){var t=A.get().chartData;k("/api/charts/"+P.get("id")+"/data",t)},1e3);function F(t){var e=t.changed,n=t.current,a=t.previous;e.chartData&&n.chartData&&a&&a.chartData!=n.chartData&&M()}function L(t){x(this,t),this._state=n({placeholder:j("upload / paste here")},t.data),this._handlers.update=[F];var e=this;t.root||(this._oncreate=[]),this._fragment=function(t,e){var n,i,o,u=!1;function h(){u=!0,t.set({chartData:o.value}),u=!1}return{c:function(){n=c("form"),i=c("div"),o=c("textarea"),this.h()},h:function(){var t,a;d(o,"input",h),o.readOnly=e.readonly,o.id="upload-data-text",t="resize",a="none",o.style.setProperty(t,a),o.placeholder=e.placeholder,o.className="svelte-h5ftni",i.className="control-group",n.className="upload-form"},m:function(t,s){r(n,t,s),a(i,n),a(o,i),o.value=e.chartData},p:function(t,e){u||(o.value=e.chartData),t.readonly&&(o.readOnly=e.readonly),t.placeholder&&(o.placeholder=e.placeholder)},u:function(){s(n)},d:function(){l(o,"input",h)}}}(this,this._state),this.root._oncreate.push(function(){(function(){A=this}).call(e),e.fire("update",{changed:{chartData:1,readonly:1,placeholder:1},current:e._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),T(this._oncreate))}function H(t){var e=t.changed,n=t.current;if(e.selectedDataset&&"--"!=n.selectedDataset){var a=n.selectedDataset;this.set({chartData:a.data}),a.presets&&Object.keys(a.presets).forEach(function(t){dw.backend.currentChart.set(t,a.presets[t])})}}function U(t,e){for(var a,i,u=e.group,d=(e.each_value,e.group_index,u.datasets),l=[],f=0;f<d.length;f+=1)l[f]=E(t,n(n({},e),{each_value_1:d,dataset:d[f],dataset_index:f}));return{c:function(){a=c("optgroup");for(var t=0;t<l.length;t+=1)l[t].c();this.h()},h:function(){h(a,"label",i=u.type)},m:function(t,e){r(a,t,e);for(var n=0;n<l.length;n+=1)l[n].m(a,null)},p:function(e,r){u=r.group,r.each_value,r.group_index;var s=u.datasets;if(e.datasetsArray){for(var o=0;o<s.length;o+=1){var c=n(n({},r),{each_value_1:s,dataset:s[o],dataset_index:o});l[o]?l[o].p(e,c):(l[o]=E(t,c),l[o].c(),l[o].m(a,null))}for(;o<l.length;o+=1)l[o].u(),l[o].d();l.length=s.length}e.datasetsArray&&i!==(i=u.type)&&h(a,"label",i)},u:function(){s(a);for(var t=0;t<l.length;t+=1)l[t].u()},d:function(){o(l)}}}function E(t,n){n.group,n.each_value,n.group_index;var i,o,d,l=n.dataset,h=(n.each_value_1,n.dataset_index,l.title);return{c:function(){i=c("option"),o=u(h),this.h()},h:function(){i.__value=d=l,i.value=i.__value,i.className="demo-dataset"},m:function(t,e){r(i,t,e),a(o,i)},p:function(t,e){e.group,e.each_value,e.group_index,l=e.dataset,e.each_value_1,e.dataset_index,t.datasetsArray&&h!==(h=l.title)&&(o.data=h),t.datasetsArray&&d!==(d=l)&&(i.__value=d),i.value=i.__value},u:function(){s(i)},d:e}}function O(t){x(this,t),this._state=n({selectedDataset:"--"},t.data),this._recompute({datasets:1},this._state),this._handlers.update=[H];var e=this;t.root||(this._oncreate=[],this._beforecreate=[]),this._fragment=function(t,e){for(var i,h,p,_,g,m,y,b,x,D,w=j("upload / quick help"),T=j("upload / try a dataset"),N=j("upload / sample dataset"),k=!1,A=e.datasetsArray,S=[],C=0;C<A.length;C+=1)S[C]=U(t,n(n({},e),{each_value:A,group:A[C],group_index:C}));function P(){k=!0,t.set({selectedDataset:v(b)}),k=!1}return{c:function(){i=c("p"),h=u(w),p=u("\n\n"),_=c("div"),g=c("p"),m=u(T),y=u("\n    "),b=c("select"),x=c("option"),D=u(N);for(var t=0;t<S.length;t+=1)S[t].c();this.h()},h:function(){x.__value="--",x.value=x.__value,d(b,"change",P),"selectedDataset"in e||t.root._beforecreate.push(P),b.disabled=e.readonly,b.id="demo-datasets",b.className="svelte-1jdst2k",_.className="demo-datasets"},m:function(t,n){r(i,t,n),a(h,i),r(p,t,n),r(_,t,n),a(g,_),a(m,g),a(y,_),a(b,_),a(x,b),a(D,x);for(var s=0;s<S.length;s+=1)S[s].m(b,null);f(b,e.selectedDataset)},p:function(e,a){var r=a.datasetsArray;if(e.datasetsArray){for(var s=0;s<r.length;s+=1){var i=n(n({},a),{each_value:r,group:r[s],group_index:s});S[s]?S[s].p(e,i):(S[s]=U(t,i),S[s].c(),S[s].m(b,null))}for(;s<S.length;s+=1)S[s].u(),S[s].d();S.length=r.length}k||f(b,a.selectedDataset),e.readonly&&(b.disabled=a.readonly)},u:function(){s(i),s(p),s(_);for(var t=0;t<S.length;t+=1)S[t].u()},d:function(){o(S),l(b,"change",P)}}}(this,this._state),this.root._oncreate.push(function(){e.fire("update",{changed:{datasets:1,readonly:1,selectedDataset:1,datasetsArray:1},current:e._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),T(this._beforecreate),T(this._oncreate))}function R(t){var e=this,n=t.changed,a=t.current;n.sheets&&a.sheets.length>1?setTimeout(function(){e.set({selected:a.sheets[0]})},300):n.sheets&&1==a.sheets.length&&k("/api/charts/"+dw.backend.currentChart.get("id")+"/data",a.sheets[0].csv,function(){window.location.href="describe"}),n.selected&&this.set({chartData:a.selected.csv})}function q(t,n){var i,o,d,l=n.sheet,h=(n.each_value,n.sheet_index,l.name);return{c:function(){i=c("option"),o=u(h),this.h()},h:function(){i.__value=d=l,i.value=i.__value},m:function(t,e){r(i,t,e),a(o,i)},p:function(t,e){l=e.sheet,e.each_value,e.sheet_index,t.sheets&&h!==(h=l.name)&&(o.data=h),t.sheets&&d!==(d=l)&&(i.__value=d),i.value=i.__value},u:function(){s(i)},d:e}}function B(t,n){var a,i=j("upload / parsing-xls");return{c:function(){a=c("div"),this.h()},h:function(){a.className="alert alert-info"},m:function(t,e){r(a,t,e),a.innerHTML=i},p:e,u:function(){a.innerHTML="",s(a)},d:e}}function X(t,e){for(var i,h,p,_,g,m=j("upload / select sheet"),y=!1,b=e.sheets,x=[],D=0;D<b.length;D+=1)x[D]=q(0,n(n({},e),{each_value:b,sheet:b[D],sheet_index:D}));function w(){y=!0,t.set({selected:v(_)}),y=!1}return{c:function(){i=c("p"),h=u(m),p=u("\n    "),_=c("select");for(var t=0;t<x.length;t+=1)x[t].c();this.h()},h:function(){d(_,"change",w),"selected"in e||t.root._beforecreate.push(w),_.disabled=g=!e.sheets.length,_.className="svelte-1jdst2k"},m:function(t,n){r(i,t,n),a(h,i),r(p,t,n),r(_,t,n);for(var s=0;s<x.length;s+=1)x[s].m(_,null);f(_,e.selected)},p:function(t,e){var a=e.sheets;if(t.sheets){for(var r=0;r<a.length;r+=1){var s=n(n({},e),{each_value:a,sheet:a[r],sheet_index:r});x[r]?x[r].p(t,s):(x[r]=q(0,s),x[r].c(),x[r].m(_,null))}for(;r<x.length;r+=1)x[r].u(),x[r].d();x.length=a.length}y||f(_,e.selected),t.sheets&&g!==(g=!e.sheets.length)&&(_.disabled=g)},u:function(){s(i),s(p),s(_);for(var t=0;t<x.length;t+=1)x[t].u()},d:function(){o(x),l(_,"change",w)}}}function $(t,n){var a,i=j("upload / xls / uploading data");return{c:function(){a=c("p")},m:function(t,e){r(a,t,e),a.innerHTML=i},p:e,u:function(){a.innerHTML="",s(a)},d:e}}function z(t){x(this,t),this._state=n({selected:!1,sheets:[]},t.data),this._handlers.update=[R];var e=this;t.root||(this._oncreate=[],this._beforecreate=[]),this._fragment=function(t,e){var n;function a(t){return t.sheets.length?t.sheets.length>1?X:$:B}var i=a(e),o=i(t,e);return{c:function(){n=c("div"),o.c()},m:function(t,e){r(n,t,e),o.m(n,null)},p:function(e,r){i===(i=a(r))&&o?o.p(e,r):(o.u(),o.d(),(o=i(t,r)).c(),o.m(n,null))},u:function(){s(n),o.u()},d:function(){o.d()}}}(this,this._state),this.root._oncreate.push(function(){e.fire("update",{changed:{sheets:1,selected:1},current:e._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),T(this._beforecreate),T(this._oncreate))}function I(e,n){var a=new FileReader;a.onload=function(){try{for(var r=new Uint8Array(a.result),s="",i=0,o=0;o<r.length;++o)r[o]>122&&i++,s+=String.fromCharCode(r[o]);var c=t.detect(s);c.confidence<=.95&&i<10&&(c.encoding="utf-8"),(a=new FileReader).onload=function(){return n(null,a.result)},a.readAsText(e,c.encoding)}catch(t){console.warn(t),n(null,a.result)}},a.readAsArrayBuffer(e)}n(L.prototype,N),n(O.prototype,N),O.prototype._recompute=function(t,e){var n;t.datasets&&this._differs(e.datasetsArray,e.datasetsArray=(n=e.datasets,Object.keys(n).map(function(t){return n[t]})))&&(t.datasetsArray=!0)},n(z.prototype,N);var G=[{id:"copy",title:j("upload / copy-paste"),longTitle:j("upload / copy-paste / long"),icon:"fa fa-clipboard",mainPanel:L,sidebar:O,action:function(){}},{id:"upload",title:j("upload / upload-csv"),longTitle:j("upload / upload-csv / long"),icon:"fa-file-excel-o fa",mainPanel:L,sidebar:O,isFileUpload:!0,onFileUpload:function(t){var e=t.target.files[0];"text/"==e.type.substr(0,5)?(C.set({Sidebar:O}),I(e,function(t,e){k("/api/charts/"+dw.backend.currentChart.get("id")+"/data",e,function(){window.location.href="describe"})})):"application/"==e.type.substr(0,12)?(C.set({Sidebar:z,sheets:[]}),function(t,e){var n="undefined"!=typeof FileReader&&(FileReader.prototype||{}).readAsBinaryString,a=new FileReader;a.onload=function(){try{var t=n?a.result:new Uint8Array(a.result),r=XLSX.read(t,{type:n?"binary":"array"});e(null,r.SheetNames.map(function(t){return{name:t,sheet:r.Sheets[t],csv:XLSX.utils.sheet_to_csv(r.Sheets[t])}}))}catch(t){console.error(t),e(null,a.result)}},a.readAsBinaryString(t)}(e,function(t,e){if(t)return C.set({error:t});C.set({sheets:e})})):C.set({error:j("upload / csv-required")})},action:function(){}}];var J={addButton:function(t){G.push(t),this.set({buttons:G});var e=this.get().defaultMethod;t.id==e&&this.btnAction(t)},btnAction:function(t){if(this.set({active:t}),"copy"==t.id){var e=this.store.get().dw_chart;e.get("externalData")&&(e.set("externalData",""),setTimeout(function(){dw.backend.currentChart.save()},1e3))}var n=t.id;"upload"==t.id&&(n="copy",setTimeout(function(){},1e3)),this.store.get().dw_chart.set("metadata.data.upload-method",n),t.action&&t.action(),t.mainPanel&&this.set({MainPanel:t.mainPanel}),t.sidebar&&this.set({Sidebar:t.sidebar})},btnUpload:function(t,e){t.onFileUpload&&t.onFileUpload(e)},dragStart:function(t){"copy"==this.get().active.id&&(t.preventDefault(),this.set({dragover:!0}))},resetDrag:function(){this.set({dragover:!1})},onFileDrop:function(t){if("copy"==this.get().active.id){this.resetDrag(),t.preventDefault();var e=[];if(t.dataTransfer.items){for(var n=0;n<t.dataTransfer.items.length;n++)"file"===t.dataTransfer.items[n].kind&&e.push(t.dataTransfer.items[n].getAsFile());t.dataTransfer.items.clear()}else{for(var a=0;a<t.dataTransfer.files.length;a++)e.push(t.dataTransfer.files[a]);t.dataTransfer.items.clear()}for(var r=0;r<e.length;r++)if("text/"==e[r].type.substr(0,5))return I(e[r],function(t,e){k("/api/charts/"+dw.backend.currentChart.get("id")+"/data",e,function(){window.location.href="describe"})})}}};function K(t,n){var a,i=j("upload / drag-csv-here");return{c:function(){a=c("div"),this.h()},h:function(){a.className="draginfo svelte-oe6wy4"},m:function(t,e){r(a,t,e),a.innerHTML=i},u:function(){a.innerHTML="",s(a)},d:e}}function Q(t,e){var n,i,o,h,f,v,p,_,g,m=e.btn,y=(e.each_value,e.btn_index,m.title),b=m.isFileUpload&&V(t,e);return{c:function(){n=c("li"),i=c("label"),b&&b.c(),o=u("\n                            "),h=c("i"),v=u("\n                            "),p=c("span"),_=u(y),this.h()},h:function(){h.className=f=m.icon+" svelte-oe6wy4",p.className="svelte-oe6wy4",i.className="svelte-oe6wy4",d(n,"click",Z),n.className=g="action "+(e.active==m?"active":"")+" svelte-oe6wy4",n._svelte={component:t,each_value:e.each_value,btn_index:e.btn_index}},m:function(t,e){r(n,t,e),a(i,n),b&&b.m(i,null),a(o,i),a(h,i),a(v,i),a(p,i),a(_,p)},p:function(e,a){m=a.btn,a.each_value,a.btn_index,m.isFileUpload?b?b.p(e,a):((b=V(t,a)).c(),b.m(i,o)):b&&(b.u(),b.d(),b=null),e.buttons&&f!==(f=m.icon+" svelte-oe6wy4")&&(h.className=f),e.buttons&&y!==(y=m.title)&&(_.data=y),(e.active||e.buttons)&&g!==(g="action "+(a.active==m?"active":"")+" svelte-oe6wy4")&&(n.className=g),n._svelte.each_value=a.each_value,n._svelte.btn_index=a.btn_index},u:function(){s(n),b&&b.u()},d:function(){b&&b.d(),l(n,"click",Z)}}}function V(t,e){var n;e.btn,e.each_value,e.btn_index;return{c:function(){n=c("input"),this.h()},h:function(){d(n,"change",Y),n.accept=".csv, .tsv, .txt, .xlsx, .xls, .ods, .dbf",n.className="file-upload svelte-oe6wy4",h(n,"type","file"),n._svelte={component:t,each_value:e.each_value,btn_index:e.btn_index}},m:function(t,e){r(n,t,e)},p:function(t,e){e.btn,e.each_value,e.btn_index,n._svelte.each_value=e.each_value,n._svelte.btn_index=e.btn_index},u:function(){s(n)},d:function(){l(n,"change",Y)}}}function W(t,e){var n,o,h,f;function v(e){t.set({error:!1})}return{c:function(){n=c("div"),(o=c("div")).textContent="✕",h=u("\n                    "),f=c("noscript"),this.h()},h:function(){d(o,"click",v),o.className="action close",n.className="alert alert-error"},m:function(t,s){r(n,t,s),a(o,n),a(h,n),a(f,n),f.insertAdjacentHTML("afterend",e.error)},p:function(t,e){t.error&&(i(f),f.insertAdjacentHTML("afterend",e.error))},u:function(){i(f),s(n)},d:function(){l(o,"click",v)}}}function Y(t){var e=this._svelte.component,n=this._svelte.each_value[this._svelte.btn_index];e.btnUpload(n,t)}function Z(t){var e=this._svelte.component,n=this._svelte.each_value[this._svelte.btn_index];e.btnAction(n)}function tt(t){x(this,t),this._state=n({dragover:!1,MainPanel:L,Sidebar:O,active:G[0],buttons:G,sheets:[]},t.data);var e=this;t.root||(this._oncreate=[],this._beforecreate=[],this._aftercreate=[]),this._fragment=function(t,e){for(var i,h,f,v,p,_,g,m,y,b,x,D,w,T,N,k,A,S,C,P,M,F,L=j("upload / title"),H=e.active.longTitle||e.active.title,U={},E={},O=j("Proceed"),R=e.dragover&&K(),q=e.buttons,B=[],X=0;X<q.length;X+=1)B[X]=Q(t,n(n({},e),{each_value:q,btn:q[X],btn_index:X}));var $=e.error&&W(t,e),z=e.Sidebar;function I(e){var n={};return"chartData"in e&&(n.chartData=e.chartData,U.chartData=!0),"readonly"in e&&(n.readonly=e.readonly,U.readonly=!0),"sheets"in e&&(n.sheets=e.sheets,U.sheets=!0),"datasets"in e&&(n.datasets=e.datasets,U.datasets=!0),{root:t.root,data:n,_bind:function(e,n){t.get();var a={};!U.chartData&&e.chartData&&(a.chartData=n.chartData),!U.readonly&&e.readonly&&(a.readonly=n.readonly),!U.sheets&&e.sheets&&(a.sheets=n.sheets),!U.datasets&&e.datasets&&(a.datasets=n.datasets),t._set(a),U={}}}}if(z){var G=new z(I(e));t.root._beforecreate.push(function(){G._bind({chartData:1,readonly:1,sheets:1,datasets:1},G.get())})}var J=e.MainPanel;function V(e){var n={};return"chartData"in e&&(n.chartData=e.chartData,E.chartData=!0),"readonly"in e&&(n.readonly=e.readonly,E.readonly=!0),{root:t.root,data:n,_bind:function(e,n){t.get();var a={};!E.chartData&&e.chartData&&(a.chartData=n.chartData),!E.readonly&&e.readonly&&(a.readonly=n.readonly),t._set(a),E={}}}}if(J){var Y=new J(V(e));t.root._beforecreate.push(function(){Y._bind({chartData:1,readonly:1},Y.get())})}function Z(e){t.onFileDrop(e)}function tt(e){t.dragStart(e)}function et(e){t.dragStart(e)}function nt(e){t.resetDrag()}function at(e){t.resetDrag()}return{c:function(){i=c("div"),R&&R.c(),h=u("\n    "),f=c("div"),v=c("div"),p=c("div"),_=c("h3"),g=u("\n\n                "),m=c("ul");for(var t=0;t<B.length;t+=1)B[t].c();y=u("\n\n                "),$&&$.c(),b=u("\n\n                "),x=c("h4"),D=u(H),w=u("\n\n                "),G&&G._fragment.c(),T=u("\n        "),N=c("div"),Y&&Y._fragment.c(),k=u("\n\n            "),A=c("div"),S=c("a"),C=u(O),P=u(" "),M=c("i"),this.h()},h:function(){m.className="import-methods svelte-oe6wy4",p.className="sidebar",v.className="span5",M.className="icon-chevron-right icon-white",S.href="describe",S.className="submit btn btn-primary",S.id="describe-proceed",A.className="buttons pull-right",N.className="span7",f.className="row",f.style.cssText=F=e.dragover?"opacity: 0.5;filter:blur(6px);background:white;pointer-events:none":"",d(i,"drop",Z),d(i,"dragover",tt),d(i,"dragenter",et),d(i,"dragend",nt),d(i,"dragleave",at),i.className="chart-editor dw-create-upload upload-data"},m:function(t,e){r(i,t,e),R&&R.m(i,null),a(h,i),a(f,i),a(v,f),a(p,v),a(_,p),_.innerHTML=L,a(g,p),a(m,p);for(var n=0;n<B.length;n+=1)B[n].m(m,null);a(y,p),$&&$.m(p,null),a(b,p),a(x,p),a(D,x),a(w,p),G&&G._mount(p,null),a(T,f),a(N,f),Y&&Y._mount(N,null),a(k,N),a(A,N),a(S,A),a(C,S),a(P,S),a(M,S)},p:function(e,a){a.dragover?R||((R=K()).c(),R.m(i,h)):R&&(R.u(),R.d(),R=null);var r=a.buttons;if(e.buttons||e.active){for(var s=0;s<r.length;s+=1){var o=n(n({},a),{each_value:r,btn:r[s],btn_index:s});B[s]?B[s].p(e,o):(B[s]=Q(t,o),B[s].c(),B[s].m(m,null))}for(;s<B.length;s+=1)B[s].u(),B[s].d();B.length=r.length}if(a.error?$?$.p(e,a):(($=W(t,a)).c(),$.m(p,b)):$&&($.u(),$.d(),$=null),e.active&&H!==(H=a.active.longTitle||a.active.title)&&(D.data=H),z!==(z=a.Sidebar))G&&G.destroy(),z&&((G=new z(I(a)))._fragment.c(),G._mount(p,null));else{var c={};!U.chartData&&e.chartData&&(c.chartData=a.chartData,U.chartData=!0),!U.readonly&&e.readonly&&(c.readonly=a.readonly,U.readonly=!0),!U.sheets&&e.sheets&&(c.sheets=a.sheets,U.sheets=!0),!U.datasets&&e.datasets&&(c.datasets=a.datasets,U.datasets=!0),G._set(c),U={}}if(J!==(J=a.MainPanel))Y&&Y.destroy(),J&&((Y=new J(V(a)))._fragment.c(),Y._mount(N,k));else{var u={};!E.chartData&&e.chartData&&(u.chartData=a.chartData,E.chartData=!0),!E.readonly&&e.readonly&&(u.readonly=a.readonly,E.readonly=!0),Y._set(u),E={}}e.dragover&&F!==(F=a.dragover?"opacity: 0.5;filter:blur(6px);background:white;pointer-events:none":"")&&(f.style.cssText=F)},u:function(){_.innerHTML="",s(i),R&&R.u();for(var t=0;t<B.length;t+=1)B[t].u();$&&$.u()},d:function(){R&&R.d(),o(B),$&&$.d(),G&&G.destroy(!1),Y&&Y.destroy(!1),l(i,"drop",Z),l(i,"dragover",tt),l(i,"dragenter",et),l(i,"dragend",nt),l(i,"dragleave",at)}}}(this,this._state),this.root._oncreate.push(function(){(function(){var t=this;C=this;var e=this.store.get().dw_chart.get("metadata.data.upload-method","copy");this.set({defaultMethod:e}),G.forEach(function(n){n.id==e&&t.set({active:n})})}).call(e),e.fire("update",{changed:{dragover:1,buttons:1,active:1,error:1,Sidebar:1,chartData:1,readonly:1,sheets:1,datasets:1,MainPanel:1},current:e._state})}),t.target&&(this._fragment.c(),this._mount(t.target,t.anchor),this._lock=!0,T(this._beforecreate),T(this._oncreate),T(this._aftercreate),this._lock=!1)}function et(t,e){this._observers={pre:p(),post:p()},this._handlers={},this._dependents=[],this._computed=p(),this._sortedComputedProperties=[],this._state=n({},t),this._differs=e&&e.immutable?m:g}n(tt.prototype,N),n(tt.prototype,J),n(et.prototype,{_add:function(t,e){this._dependents.push({component:t,props:e})},_init:function(t){for(var e={},n=0;n<t.length;n+=1){var a=t[n];e["$"+a]=this._state[a]}return e},_remove:function(t){for(var e=this._dependents.length;e--;)if(this._dependents[e].component===t)return void this._dependents.splice(e,1)},_sortComputedProperties:function(){var t,e=this._computed,n=this._sortedComputedProperties=[],a=p();function r(s){if(t[s])throw new Error("Cyclical dependency detected");if(!a[s]){a[s]=!0;var i=e[s];i&&(t[s]=!0,i.deps.forEach(r),n.push(i))}}for(var s in this._computed)t=p(),r(s)},compute:function(t,e,n){var a,r=this,s={deps:e,update:function(s,i,o){var c=e.map(function(t){return t in i&&(o=!0),s[t]});if(o){var u=n.apply(null,c);r._differs(u,a)&&(a=u,i[t]=!0,s[t]=a)}}};s.update(this._state,{},!0),this._computed[t]=s,this._sortComputedProperties()},fire:y,get:b,observe:D,on:w,onchange:function(t){return console.warn("store.onchange is deprecated in favour of store.on('state', event => {...})"),this.on("state",function(e){t(e.current,e.changed)})},set:function(t){var e=this._state,a=this._changed={},r=!1;for(var s in t){if(this._computed[s])throw new Error("'"+s+"' is a read-only property");this._differs(t[s],e[s])&&(a[s]=r=!0)}if(r){this._state=n(n({},e),t);for(var i=0;i<this._sortedComputedProperties.length;i+=1)this._sortedComputedProperties[i].update(this._state,a);this.fire("state",{changed:a,current:this._state,previous:e});var o=this._dependents.slice();for(i=0;i<o.length;i+=1){var c=o[i],u={};r=!1;for(var d=0;d<c.props.length;d+=1){var l=c.props[d];l in a&&(u["$"+l]=this._state[l],r=!0)}r&&c.component.set(u)}this.fire("update",{changed:a,current:this._state,previous:e})}}});return{App:tt,store:new et({}),data:{chart:{id:""},readonly:!1,chartData:"",transpose:!1,firstRowIsHeader:!0,skipRows:0}}});