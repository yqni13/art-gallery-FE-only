import './polyfills.server.mjs';
import{Z as y}from"./chunk-QVBBQOCB.mjs";var i=(()=>{let e=class e{transform(s,o){let t=new Date(s),r=t.getDate()<10?"0":"",a=t.getMonth()+1<10?"0":"";switch(o){case"yyyy-mm-dd":return`${t.getFullYear()}-${a+(t.getMonth()+1)}-${r+t.getDate()}`;case"dd.mm.yyyy":return`${r+t.getDate()}.${a+(t.getMonth()+1)}.${t.getFullYear()}`;case"dd/mm/yyyy":return`${r+t.getDate()}/${a+(t.getMonth()+1)}/${t.getFullYear()}`;case"mm/dd/yyyy":return`${a+(t.getMonth()+1)}/${r+t.getDate()}/${t.getFullYear()}`;default:return"missing format"}}};e.\u0275fac=function(o){return new(o||e)},e.\u0275pipe=y({name:"dateFormat",type:e,pure:!0,standalone:!0});let n=e;return n})();export{i as a};
