import{c as k,_ as s}from"./mobile.60e843a7.js";import{_ as E}from"./index.8673f28e.js";import{m,r as c,e as d,j as t,k as F,o as B}from"./vendor.d721e0a0.js";const{createDemo:v}=k("dialog"),D=v({setup(){const e=m(!1),u=()=>{console.log("event cancel")},o=()=>{console.log("event ok")};return{visible:e,baseClick:()=>{s({title:"\u57FA\u7840\u5F39\u6846",content:"\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002",onCancel:u,onOk:o})},noTitleClick:()=>{s({content:"\u65E0\u6807\u9898\u5F39\u6846",onCancel:u,onOk:o})},componentClick:()=>{e.value=!0},tipsClick:()=>{s({title:"\u6E29\u99A8\u63D0\u793A",content:"\u652F\u6301\u51FD\u6570\u8C03\u7528\u548C\u7EC4\u4EF6\u8C03\u7528\u4E24\u79CD\u65B9\u5F0F\u3002",noCancelBtn:!0,onCancel:u,onOk:o})},teleportClick:i=>{s({teleport:i,title:"\u6302\u8F7D\u81F3 "+i,content:"\u6253\u5F00\u5F00\u53D1\u8005\u5DE5\u5177\u770B\u4E00\u4E0B Elements Tab",noCancelBtn:!0,onCancel:u})}}}}),f={class:"demo"};function b(e,u,o,a,p,r){const l=c("nut-cell"),n=c("nut-cell-group"),i=c("nut-dialog");return B(),d("div",f,[t(n,{title:"\u51FD\u6570\u5F0F\u8C03\u7528"},{default:F(()=>[t(l,{title:"\u57FA\u7840\u5F39\u6846",onClick:e.baseClick},null,8,["onClick"]),t(l,{title:"\u65E0\u6807\u9898\u5F39\u6846",onClick:e.noTitleClick},null,8,["onClick"]),t(l,{title:"\u63D0\u793A\u5F39\u6846",onClick:e.tipsClick},null,8,["onClick"])]),_:1}),t(n,{title:"\u6807\u7B7E\u5F0F\u8C03\u7528"},{default:F(()=>[t(l,{title:"\u7EC4\u4EF6\u8C03\u7528",onClick:e.componentClick},null,8,["onClick"]),t(i,{teleport:"#app",title:"\u7EC4\u4EF6\u8C03\u7528",content:"\u5982\u679C\u9700\u8981\u5728\u5F39\u7A97\u5185\u5D4C\u5165\u7EC4\u4EF6\u6216\u5176\u4ED6\u81EA\u5B9A\u4E49\u5185\u5BB9\uFF0C\u53EF\u4EE5\u4F7F\u7528\u7EC4\u4EF6\u8C03\u7528\u7684\u65B9\u5F0F\u3002",visible:e.visible,"onUpdate:visible":u[0]||(u[0]=C=>e.visible=C)},null,8,["visible"])]),_:1}),t(n,{title:"teleport \u4F7F\u7528\uFF0C\u6302\u8F7D\u5230\u6307\u5B9A\u8282\u70B9"},{default:F(()=>[t(l,{title:"body \u8282\u70B9\u4E0B",onClick:u[1]||(u[1]=C=>e.teleportClick("body"))}),t(l,{title:"#app \u8282\u70B9\u4E0B",onClick:u[2]||(u[2]=C=>e.teleportClick("#app"))}),t(l,{title:"demo class \u5143\u7D20\u8282\u70B9\u4E0B",onClick:u[3]||(u[3]=C=>e.teleportClick(".demo"))})]),_:1})])}var $=E(D,[["render",b]]);export{$ as default};
