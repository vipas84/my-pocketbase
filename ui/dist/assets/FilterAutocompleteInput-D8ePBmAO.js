import{S as $,i as ee,s as te,f as ne,j as re,l as ie,H as O,u as ae,N as oe,R as le,T as se,P as de,I as u,x as ce}from"./index-0yJTQg7M.js";import{c as fe,d as ue,s as ge,h as he,a as ye,E,b as S,e as pe,f as ke,g as xe,i as me,j as be,k as we,l as Ee,m as Se,r as Ke,n as Ce,o as Re,p as Le,q as G,C as R,S as qe,t as ve,u as We,v as _e}from"./index-B5ReTu-C.js";function Ie(e){return new Worker(""+new URL("autocomplete.worker-Br7MPIGR.js",import.meta.url).href,{name:e==null?void 0:e.name})}function Oe(e){j(e,"start");var r={},t=e.languageData||{},g=!1;for(var h in e)if(h!=t&&e.hasOwnProperty(h))for(var f=r[h]=[],a=e[h],i=0;i<a.length;i++){var o=a[i];f.push(new Ae(o,e)),(o.indent||o.dedent)&&(g=!0)}return{name:t.name,startState:function(){return{state:"start",pending:null,indent:g?[]:null}},copyState:function(s){var y={state:s.state,pending:s.pending,indent:s.indent&&s.indent.slice(0)};return s.stack&&(y.stack=s.stack.slice(0)),y},token:Be(r),indent:He(r,t),languageData:t}}function j(e,r){if(!e.hasOwnProperty(r))throw new Error("Undefined state "+r+" in simple mode")}function De(e,r){if(!e)return/(?:)/;var t="";return e instanceof RegExp?(e.ignoreCase&&(t="i"),e=e.source):e=String(e),new RegExp("^(?:"+e+")",t)}function Me(e){if(!e)return null;if(e.apply)return e;if(typeof e=="string")return e.replace(/\./g," ");for(var r=[],t=0;t<e.length;t++)r.push(e[t]&&e[t].replace(/\./g," "));return r}function Ae(e,r){(e.next||e.push)&&j(r,e.next||e.push),this.regex=De(e.regex),this.token=Me(e.token),this.data=e}function Be(e){return function(r,t){if(t.pending){var g=t.pending.shift();return t.pending.length==0&&(t.pending=null),r.pos+=g.text.length,g.token}for(var h=e[t.state],f=0;f<h.length;f++){var a=h[f],i=(!a.data.sol||r.sol())&&r.match(a.regex);if(i){a.data.next?t.state=a.data.next:a.data.push?((t.stack||(t.stack=[])).push(t.state),t.state=a.data.push):a.data.pop&&t.stack&&t.stack.length&&(t.state=t.stack.pop()),a.data.indent&&t.indent.push(r.indentation()+r.indentUnit),a.data.dedent&&t.indent.pop();var o=a.token;if(o&&o.apply&&(o=o(i)),i.length>2&&a.token&&typeof a.token!="string"){t.pending=[];for(var s=2;s<i.length;s++)i[s]&&t.pending.push({text:i[s],token:a.token[s-1]});return r.backUp(i[0].length-(i[1]?i[1].length:0)),o[0]}else return o&&o.join?o[0]:o}}return r.next(),null}}function He(e,r){return function(t,g){if(t.indent==null||r.dontIndentStates&&r.doneIndentState.indexOf(t.state)>-1)return null;var h=t.indent.length-1,f=e[t.state];e:for(;;){for(var a=0;a<f.length;a++){var i=f[a];if(i.data.dedent&&i.data.dedentIfLineStart!==!1){var o=i.regex.exec(g);if(o&&o[0]){h--,(i.next||i.push)&&(f=e[i.next||i.push]),g=g.slice(o[0].length);continue e}}}break}return h<0?0:t.indent[h]}}function Je(e){let r;return{c(){r=ne("div"),re(r,"class","code-editor")},m(t,g){ie(t,r,g),e[15](r)},p:O,i:O,o:O,d(t){t&&ae(r),e[15](null)}}}function Te(e){return JSON.stringify([e==null?void 0:e.name,e==null?void 0:e.type,e==null?void 0:e.fields])}function Fe(e,r,t){let g;oe(e,le,n=>t(21,g=n));const h=se();let{id:f=""}=r,{value:a=""}=r,{disabled:i=!1}=r,{placeholder:o=""}=r,{baseCollection:s=null}=r,{singleLine:y=!1}=r,{extraAutocompleteKeys:L=[]}=r,{disableRequestKeys:b=!1}=r,{disableCollectionJoinKeys:x=!1}=r,d,p,q=i,D=new R,M=new R,A=new R,B=new R,v=new Ie,H=[],J=[],T=[],K="",W="";function _(){d==null||d.focus()}let I=null;v.onmessage=n=>{T=n.data.baseKeys||[],H=n.data.requestKeys||[],J=n.data.collectionJoinKeys||[]};function V(){clearTimeout(I),I=setTimeout(()=>{v.postMessage({baseCollection:s,collections:z(g),disableRequestKeys:b,disableCollectionJoinKeys:x})},250)}function z(n){let c=n.slice();return s&&u.pushOrReplaceByKey(c,s,"id"),c}function F(){p==null||p.dispatchEvent(new CustomEvent("change",{detail:{value:a},bubbles:!0}))}function P(){if(!f)return;const n=document.querySelectorAll('[for="'+f+'"]');for(let c of n)c.removeEventListener("click",_)}function U(){if(!f)return;P();const n=document.querySelectorAll('[for="'+f+'"]');for(let c of n)c.addEventListener("click",_)}function Q(n=!0,c=!0){let l=[].concat(L);return l=l.concat(T||[]),n&&(l=l.concat(H||[])),c&&(l=l.concat(J||[])),l}function X(n){var w;let c=n.matchBefore(/[\'\"\@\w\.]*/);if(c&&c.from==c.to&&!n.explicit)return null;let l=_e(n.state).resolveInner(n.pos,-1);if(((w=l==null?void 0:l.type)==null?void 0:w.name)=="comment")return null;let m=[{label:"false"},{label:"true"},{label:"@now"},{label:"@second"},{label:"@minute"},{label:"@hour"},{label:"@year"},{label:"@day"},{label:"@month"},{label:"@weekday"},{label:"@todayStart"},{label:"@todayEnd"},{label:"@monthStart"},{label:"@monthEnd"},{label:"@yearStart"},{label:"@yearEnd"}];x||m.push({label:"@collection.*",apply:"@collection."});let C=Q(!b&&c.text.startsWith("@r"),!x&&c.text.startsWith("@c"));for(const k of C)m.push({label:k.endsWith(".")?k+"*":k,apply:k,boost:k.indexOf("_via_")>0?-1:0});return{from:c.from,options:m}}function N(){return qe.define(Oe({start:[{regex:/true|false|null/,token:"atom"},{regex:/\/\/.*/,token:"comment"},{regex:/"(?:[^\\]|\\.)*?(?:"|$)/,token:"string"},{regex:/'(?:[^\\]|\\.)*?(?:'|$)/,token:"string"},{regex:/0x[a-f\d]+|[-+]?(?:\.\d+|\d+\.?\d*)(?:e[-+]?\d+)?/i,token:"number"},{regex:/\&\&|\|\||\=|\!\=|\~|\!\~|\>|\<|\>\=|\<\=/,token:"operator"},{regex:/[\{\[\(]/,indent:!0},{regex:/[\}\]\)]/,dedent:!0},{regex:/\w+[\w\.]*\w+/,token:"keyword"},{regex:u.escapeRegExp("@now"),token:"keyword"},{regex:u.escapeRegExp("@second"),token:"keyword"},{regex:u.escapeRegExp("@minute"),token:"keyword"},{regex:u.escapeRegExp("@hour"),token:"keyword"},{regex:u.escapeRegExp("@year"),token:"keyword"},{regex:u.escapeRegExp("@day"),token:"keyword"},{regex:u.escapeRegExp("@month"),token:"keyword"},{regex:u.escapeRegExp("@weekday"),token:"keyword"},{regex:u.escapeRegExp("@todayStart"),token:"keyword"},{regex:u.escapeRegExp("@todayEnd"),token:"keyword"},{regex:u.escapeRegExp("@monthStart"),token:"keyword"},{regex:u.escapeRegExp("@monthEnd"),token:"keyword"},{regex:u.escapeRegExp("@yearStart"),token:"keyword"},{regex:u.escapeRegExp("@yearEnd"),token:"keyword"},{regex:u.escapeRegExp("@request.method"),token:"keyword"}],meta:{lineComment:"//"}}))}de(()=>{const n={key:"Enter",run:l=>{y&&h("submit",a)}};U();let c=[n,...fe,...ue,ge.find(l=>l.key==="Mod-d"),...he,...ye];return y||c.push(ve),t(11,d=new E({parent:p,state:S.create({doc:a,extensions:[pe(),ke(),xe(),me(),be(),S.allowMultipleSelections.of(!0),we(We,{fallback:!0}),Ee(),Se(),Ke(),Ce(),Re.of(c),E.lineWrapping,Le({override:[X],icons:!1}),B.of(G(o)),M.of(E.editable.of(!i)),A.of(S.readOnly.of(i)),D.of(N()),S.transactionFilter.of(l=>{var m,C,w;if(y&&l.newDoc.lines>1){if(!((w=(C=(m=l.changes)==null?void 0:m.inserted)==null?void 0:C.filter(k=>!!k.text.find(Z=>Z)))!=null&&w.length))return[];l.newDoc.text=[l.newDoc.text.join(" ")]}return l}),E.updateListener.of(l=>{!l.docChanged||i||(t(1,a=l.state.doc.toString()),F())})]})})),()=>{clearTimeout(I),P(),d==null||d.destroy(),v.terminate()}});function Y(n){ce[n?"unshift":"push"](()=>{p=n,t(0,p)})}return e.$$set=n=>{"id"in n&&t(2,f=n.id),"value"in n&&t(1,a=n.value),"disabled"in n&&t(3,i=n.disabled),"placeholder"in n&&t(4,o=n.placeholder),"baseCollection"in n&&t(5,s=n.baseCollection),"singleLine"in n&&t(6,y=n.singleLine),"extraAutocompleteKeys"in n&&t(7,L=n.extraAutocompleteKeys),"disableRequestKeys"in n&&t(8,b=n.disableRequestKeys),"disableCollectionJoinKeys"in n&&t(9,x=n.disableCollectionJoinKeys)},e.$$.update=()=>{e.$$.dirty[0]&32&&t(13,K=Te(s)),e.$$.dirty[0]&25352&&!i&&(W!=K||b!==-1||x!==-1)&&(t(14,W=K),V()),e.$$.dirty[0]&4&&f&&U(),e.$$.dirty[0]&2080&&d&&s!=null&&s.fields&&d.dispatch({effects:[D.reconfigure(N())]}),e.$$.dirty[0]&6152&&d&&q!=i&&(d.dispatch({effects:[M.reconfigure(E.editable.of(!i)),A.reconfigure(S.readOnly.of(i))]}),t(12,q=i),F()),e.$$.dirty[0]&2050&&d&&a!=d.state.doc.toString()&&d.dispatch({changes:{from:0,to:d.state.doc.length,insert:a}}),e.$$.dirty[0]&2064&&d&&typeof o<"u"&&d.dispatch({effects:[B.reconfigure(G(o))]})},[p,a,f,i,o,s,y,L,b,x,_,d,q,K,W,Y]}class Ne extends ${constructor(r){super(),ee(this,r,Fe,Je,te,{id:2,value:1,disabled:3,placeholder:4,baseCollection:5,singleLine:6,extraAutocompleteKeys:7,disableRequestKeys:8,disableCollectionJoinKeys:9,focus:10},null,[-1,-1])}get focus(){return this.$$.ctx[10]}}export{Ne as default};