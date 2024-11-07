import{S as kt,i as gt,s as vt,U as St,W as L,V as _t,f as s,y as f,h as u,c as ae,j as k,l as c,n as t,m as oe,G as Z,X as ct,Y as wt,D as yt,Z as $t,E as Pt,t as K,a as X,u as d,d as se,_ as Rt,I as dt,p as Ct,k as ne,o as Ot}from"./index-D8ZreWy5.js";import{F as Tt}from"./FieldsQueryParam-DQaAm01O.js";function pt(i,o,a){const n=i.slice();return n[7]=o[a],n}function ut(i,o,a){const n=i.slice();return n[7]=o[a],n}function ht(i,o,a){const n=i.slice();return n[12]=o[a],n[14]=a,n}function At(i){let o;return{c(){o=f("or")},m(a,n){c(a,o,n)},d(a){a&&d(o)}}}function bt(i){let o,a,n=i[12]+"",m,b=i[14]>0&&At();return{c(){b&&b.c(),o=u(),a=s("strong"),m=f(n)},m(r,h){b&&b.m(r,h),c(r,o,h),c(r,a,h),t(a,m)},p(r,h){h&2&&n!==(n=r[12]+"")&&Z(m,n)},d(r){r&&(d(o),d(a)),b&&b.d(r)}}}function ft(i,o){let a,n=o[7].code+"",m,b,r,h;function g(){return o[6](o[7])}return{key:i,first:null,c(){a=s("button"),m=f(n),b=u(),k(a,"class","tab-item"),ne(a,"active",o[2]===o[7].code),this.first=a},m($,_){c($,a,_),t(a,m),t(a,b),r||(h=Ot(a,"click",g),r=!0)},p($,_){o=$,_&8&&n!==(n=o[7].code+"")&&Z(m,n),_&12&&ne(a,"active",o[2]===o[7].code)},d($){$&&d(a),r=!1,h()}}}function mt(i,o){let a,n,m,b;return n=new _t({props:{content:o[7].body}}),{key:i,first:null,c(){a=s("div"),ae(n.$$.fragment),m=u(),k(a,"class","tab-item"),ne(a,"active",o[2]===o[7].code),this.first=a},m(r,h){c(r,a,h),oe(n,a,null),t(a,m),b=!0},p(r,h){o=r;const g={};h&8&&(g.content=o[7].body),n.$set(g),(!b||h&12)&&ne(a,"active",o[2]===o[7].code)},i(r){b||(K(n.$$.fragment,r),b=!0)},o(r){X(n.$$.fragment,r),b=!1},d(r){r&&d(a),se(n)}}}function Dt(i){var ot,st;let o,a,n=i[0].name+"",m,b,r,h,g,$,_,z=i[1].join("/")+"",ie,De,re,We,ce,R,de,q,pe,C,x,Ue,ee,H,Fe,ue,te=i[0].name+"",he,Me,be,j,fe,O,me,Be,Y,T,_e,Le,ke,qe,E,ge,He,ve,Se,V,we,A,ye,je,N,D,$e,Ye,Pe,Ee,v,Ve,F,Ne,Ie,Je,Re,Qe,Ce,Ge,Ke,Xe,Oe,Ze,ze,M,Te,I,Ae,W,J,P=[],xe=new Map,et,Q,w=[],tt=new Map,U;R=new St({props:{js:`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${i[5]}');

        ...

        const authData = await pb.collection('${(ot=i[0])==null?void 0:ot.name}').authWithPassword(
            '${i[4]}',
            'YOUR_PASSWORD',
        );

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `,dart:`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${i[5]}');

        ...

        final authData = await pb.collection('${(st=i[0])==null?void 0:st.name}').authWithPassword(
          '${i[4]}',
          'YOUR_PASSWORD',
        );

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `}});let B=L(i[1]),S=[];for(let e=0;e<B.length;e+=1)S[e]=bt(ht(i,B,e));F=new _t({props:{content:"?expand=relField1,relField2.subRelField"}}),M=new Tt({props:{prefix:"record."}});let le=L(i[3]);const lt=e=>e[7].code;for(let e=0;e<le.length;e+=1){let l=ut(i,le,e),p=lt(l);xe.set(p,P[e]=ft(p,l))}let G=L(i[3]);const at=e=>e[7].code;for(let e=0;e<G.length;e+=1){let l=pt(i,G,e),p=at(l);tt.set(p,w[e]=mt(p,l))}return{c(){o=s("h3"),a=f("Auth with password ("),m=f(n),b=f(")"),r=u(),h=s("div"),g=s("p"),$=f(`Authenticate with combination of
        `),_=s("strong"),ie=f(z),De=f(" and "),re=s("strong"),re.textContent="password",We=f("."),ce=u(),ae(R.$$.fragment),de=u(),q=s("h6"),q.textContent="API details",pe=u(),C=s("div"),x=s("strong"),x.textContent="POST",Ue=u(),ee=s("div"),H=s("p"),Fe=f("/api/collections/"),ue=s("strong"),he=f(te),Me=f("/auth-with-password"),be=u(),j=s("div"),j.textContent="Body Parameters",fe=u(),O=s("table"),me=s("thead"),me.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="50%">Description</th></tr>',Be=u(),Y=s("tbody"),T=s("tr"),_e=s("td"),_e.innerHTML='<div class="inline-flex"><span class="label label-success">Required</span> <span>identity</span></div>',Le=u(),ke=s("td"),ke.innerHTML='<span class="label">String</span>',qe=u(),E=s("td");for(let e=0;e<S.length;e+=1)S[e].c();ge=f(`
                of the record to authenticate.`),He=u(),ve=s("tr"),ve.innerHTML='<td><div class="inline-flex"><span class="label label-success">Required</span> <span>password</span></div></td> <td><span class="label">String</span></td> <td>The auth record password.</td>',Se=u(),V=s("div"),V.textContent="Query parameters",we=u(),A=s("table"),ye=s("thead"),ye.innerHTML='<tr><th>Param</th> <th>Type</th> <th width="60%">Description</th></tr>',je=u(),N=s("tbody"),D=s("tr"),$e=s("td"),$e.textContent="expand",Ye=u(),Pe=s("td"),Pe.innerHTML='<span class="label">String</span>',Ee=u(),v=s("td"),Ve=f(`Auto expand record relations. Ex.:
                `),ae(F.$$.fragment),Ne=f(`
                Supports up to 6-levels depth nested relations expansion. `),Ie=s("br"),Je=f(`
                The expanded relations will be appended to the record under the
                `),Re=s("code"),Re.textContent="expand",Qe=f(" property (eg. "),Ce=s("code"),Ce.textContent='"expand": {"relField1": {...}, ...}',Ge=f(`).
                `),Ke=s("br"),Xe=f(`
                Only the relations to which the request user has permissions to `),Oe=s("strong"),Oe.textContent="view",Ze=f(" will be expanded."),ze=u(),ae(M.$$.fragment),Te=u(),I=s("div"),I.textContent="Responses",Ae=u(),W=s("div"),J=s("div");for(let e=0;e<P.length;e+=1)P[e].c();et=u(),Q=s("div");for(let e=0;e<w.length;e+=1)w[e].c();k(o,"class","m-b-sm"),k(h,"class","content txt-lg m-b-sm"),k(q,"class","m-b-xs"),k(x,"class","label label-primary"),k(ee,"class","content"),k(C,"class","alert alert-success"),k(j,"class","section-title"),k(O,"class","table-compact table-border m-b-base"),k(V,"class","section-title"),k(A,"class","table-compact table-border m-b-base"),k(I,"class","section-title"),k(J,"class","tabs-header compact combined left"),k(Q,"class","tabs-content"),k(W,"class","tabs")},m(e,l){c(e,o,l),t(o,a),t(o,m),t(o,b),c(e,r,l),c(e,h,l),t(h,g),t(g,$),t(g,_),t(_,ie),t(g,De),t(g,re),t(g,We),c(e,ce,l),oe(R,e,l),c(e,de,l),c(e,q,l),c(e,pe,l),c(e,C,l),t(C,x),t(C,Ue),t(C,ee),t(ee,H),t(H,Fe),t(H,ue),t(ue,he),t(H,Me),c(e,be,l),c(e,j,l),c(e,fe,l),c(e,O,l),t(O,me),t(O,Be),t(O,Y),t(Y,T),t(T,_e),t(T,Le),t(T,ke),t(T,qe),t(T,E);for(let p=0;p<S.length;p+=1)S[p]&&S[p].m(E,null);t(E,ge),t(Y,He),t(Y,ve),c(e,Se,l),c(e,V,l),c(e,we,l),c(e,A,l),t(A,ye),t(A,je),t(A,N),t(N,D),t(D,$e),t(D,Ye),t(D,Pe),t(D,Ee),t(D,v),t(v,Ve),oe(F,v,null),t(v,Ne),t(v,Ie),t(v,Je),t(v,Re),t(v,Qe),t(v,Ce),t(v,Ge),t(v,Ke),t(v,Xe),t(v,Oe),t(v,Ze),t(N,ze),oe(M,N,null),c(e,Te,l),c(e,I,l),c(e,Ae,l),c(e,W,l),t(W,J);for(let p=0;p<P.length;p+=1)P[p]&&P[p].m(J,null);t(W,et),t(W,Q);for(let p=0;p<w.length;p+=1)w[p]&&w[p].m(Q,null);U=!0},p(e,[l]){var nt,it;(!U||l&1)&&n!==(n=e[0].name+"")&&Z(m,n),(!U||l&2)&&z!==(z=e[1].join("/")+"")&&Z(ie,z);const p={};if(l&49&&(p.js=`
        import PocketBase from 'pocketbase';

        const pb = new PocketBase('${e[5]}');

        ...

        const authData = await pb.collection('${(nt=e[0])==null?void 0:nt.name}').authWithPassword(
            '${e[4]}',
            'YOUR_PASSWORD',
        );

        // after the above you can also access the auth data from the authStore
        console.log(pb.authStore.isValid);
        console.log(pb.authStore.token);
        console.log(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `),l&49&&(p.dart=`
        import 'package:pocketbase/pocketbase.dart';

        final pb = PocketBase('${e[5]}');

        ...

        final authData = await pb.collection('${(it=e[0])==null?void 0:it.name}').authWithPassword(
          '${e[4]}',
          'YOUR_PASSWORD',
        );

        // after the above you can also access the auth data from the authStore
        print(pb.authStore.isValid);
        print(pb.authStore.token);
        print(pb.authStore.record.id);

        // "logout"
        pb.authStore.clear();
    `),R.$set(p),(!U||l&1)&&te!==(te=e[0].name+"")&&Z(he,te),l&2){B=L(e[1]);let y;for(y=0;y<B.length;y+=1){const rt=ht(e,B,y);S[y]?S[y].p(rt,l):(S[y]=bt(rt),S[y].c(),S[y].m(E,ge))}for(;y<S.length;y+=1)S[y].d(1);S.length=B.length}l&12&&(le=L(e[3]),P=ct(P,l,lt,1,e,le,xe,J,wt,ft,null,ut)),l&12&&(G=L(e[3]),yt(),w=ct(w,l,at,1,e,G,tt,Q,$t,mt,null,pt),Pt())},i(e){if(!U){K(R.$$.fragment,e),K(F.$$.fragment,e),K(M.$$.fragment,e);for(let l=0;l<G.length;l+=1)K(w[l]);U=!0}},o(e){X(R.$$.fragment,e),X(F.$$.fragment,e),X(M.$$.fragment,e);for(let l=0;l<w.length;l+=1)X(w[l]);U=!1},d(e){e&&(d(o),d(r),d(h),d(ce),d(de),d(q),d(pe),d(C),d(be),d(j),d(fe),d(O),d(Se),d(V),d(we),d(A),d(Te),d(I),d(Ae),d(W)),se(R,e),Rt(S,e),se(F),se(M);for(let l=0;l<P.length;l+=1)P[l].d();for(let l=0;l<w.length;l+=1)w[l].d()}}}function Wt(i,o,a){let n,m,b,{collection:r}=o,h=200,g=[];const $=_=>a(2,h=_.code);return i.$$set=_=>{"collection"in _&&a(0,r=_.collection)},i.$$.update=()=>{var _;i.$$.dirty&1&&a(1,m=((_=r==null?void 0:r.passwordAuth)==null?void 0:_.identityFields)||[]),i.$$.dirty&2&&a(4,b=m.length==0?"NONE":"YOUR_"+m.join("_OR_").toUpperCase()),i.$$.dirty&1&&a(3,g=[{code:200,body:JSON.stringify({token:"JWT_TOKEN",record:dt.dummyCollectionRecord(r)},null,2)},{code:400,body:`
                {
                  "code": 400,
                  "message": "Failed to authenticate.",
                  "data": {
                    "identity": {
                      "code": "validation_required",
                      "message": "Missing required value."
                    }
                  }
                }
            `}])},a(5,n=dt.getApiExampleUrl(Ct.baseURL)),[r,m,h,g,b,n,$]}class Mt extends kt{constructor(o){super(),gt(this,o,Wt,Dt,vt,{collection:0})}}export{Mt as default};