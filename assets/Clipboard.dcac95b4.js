import{d as e,r as t,o as c,m as o,c as n,b as a}from"./vendor.e1cbc101.js";const l=e({setup(){const e=t("单击复制"),n=e=>{var t;const c=document.getSelection();null==(t=e.clipboardData)||t.setData("text/plain",`你的剪贴板数据被我更改了哦~~${c}`),e.preventDefault()};return c((()=>{var e;null==(e=document.querySelector("#copy"))||e.addEventListener("copy",n)})),o((()=>{var e;null==(e=document.querySelector("#copy"))||e.removeEventListener("copy",n)})),{copyActive:()=>{var t,c;const o=document.getElementById("copy"),n=document.createRange();null==(t=window.getSelection())||t.removeAllRanges(),n.selectNode(o),null==(c=window.getSelection())||c.addRange(n);const a=document.execCommand("copy");e.value=a?"已将文本复制到剪贴板":"复制失败"},help:e}},render(){return n("div",{class:"copy-container"},[n("pre",{id:"copy",class:"pre"},[a("This is a test")]),n("div",{class:"help",onClick:this.copyActive},[this.help])])}});export{l as default};