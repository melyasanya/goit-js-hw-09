!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequire7bc7;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,n){o[e]=n},e.parcelRequire7bc7=t);var r=t("h6c0i"),i=document.querySelector(".form"),u=document.querySelector("input[name=delay]"),a=document.querySelector("input[name=step]"),c=document.querySelector("input[name=amount]");function l(e,n){return new Promise((function(o,t){var r=Math.random()>.3;setTimeout((function(){r?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}i.addEventListener("submit",(function(e){e.preventDefault();for(var n=c.value,o=Number(u.value)-Number(a.value),t=1;t<=n;t+=1)l(t,o+=Number(a.value)).then((function(e){var n=e.position,o=e.delay;r.Notify.success("Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;r.Notify.failure("Rejected promise ".concat(n," in ").concat(o,"ms"))}));e.currentTarget.reset()})),console.log()}();
//# sourceMappingURL=03-promises.628a1242.js.map