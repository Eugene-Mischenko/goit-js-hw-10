import"./assets/modulepreload-polyfill-3cfb730f.js";import{i as s}from"./assets/vendor-d07556bb.js";document.head.insertAdjacentHTML("beforeend",'<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>');const o=document.querySelector(".form"),c=document.querySelector('input[name="delay"]');document.querySelector('button[type="submit"]');o.addEventListener("submit",i=>{i.preventDefault();const t=parseInt(c.value),n=document.querySelector('input[name="state"]:checked').value;new Promise((e,r)=>{setTimeout(n==="fulfilled"?()=>{e(t)}:()=>{r(t)},t)}).then(e=>{s.success({title:"OK",message:`Fulfilled promise in ${e}ms`,position:"topRight"})}).catch(e=>{s.error({title:"Error",message:`Rejected promise in ${e}ms`,position:"topRight"})}),o.reset()});
//# sourceMappingURL=commonHelpers2.js.map