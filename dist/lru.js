!function(g,c){typeof exports=="object"&&typeof module!="undefined"?c(exports):typeof define=="function"&&define.amd?define(["exports"],c):c((g=g||self).lru_map=g.lru_map||{})}(this,function(g){const c=Symbol("newer"),e=Symbol("older");class p{constructor(a,b,d){typeof a!=="number"&&(b=a,a=0),this.size=0,this.limit=a,this.oldest=this.newest=void 0,this._keymap=new Map(),this._size_func=d||function(l){return 1},b&&(this.assign(b),a<1&&(this.limit=this.size))}_markEntryAsUsed(a){if(a===this.newest)return;a[c]&&(a===this.oldest&&(this.oldest=a[c]),a[c][e]=a[e]),a[e]&&(a[e][c]=a[c]),a[c]=void 0,a[e]=this.newest,this.newest&&(this.newest[c]=a),this.newest=a}assign(a){let b,d=this.limit||Number.MAX_VALUE;this._keymap.clear();let l=a[Symbol.iterator](),n=0;for(let h=l.next();!h.done;h=l.next()){let f=new m(h.value[0],h.value[1]);this._keymap.set(f.key,f);const o=this._size_func(f.value);n+=o,b?(b[c]=f,f[e]=b):this.oldest=f,b=f;if(d<=0)throw new Error("overflow");d-=o}this.newest=b,this.size=n}get(a){var b=this._keymap.get(a);return b?(this._markEntryAsUsed(b),b.value):void 0}set(a,b){var d=this._keymap.get(a);return d?(this.size-=this._size_func(d.value),d.value=b,this.size+=this._size_func(b),this._markEntryAsUsed(d),this):(this._keymap.set(a,d=new m(a,b)),this.newest?(this.newest[c]=d,d[e]=this.newest):this.oldest=d,this.newest=d,this.size+=this._size_func(b),this._try_shift(),this)}_try_shift(){this.size>this.limit&&this._keymap.size>1&&this.shift()}shift(){var a=this.oldest;if(a)return this.oldest[c]?(this.oldest=this.oldest[c],this.oldest[e]=void 0):(this.oldest=void 0,this.newest=void 0),a[c]=a[e]=void 0,this._keymap.delete(a.key),this.size-=this._size_func(a.value),[a.key,a.value]}find(a){let b=this._keymap.get(a);return b?b.value:void 0}has(a){return this._keymap.has(a)}delete(a){var b=this._keymap.get(a);return b?(this._keymap.delete(b.key),b[c]&&b[e]?(b[e][c]=b[c],b[c][e]=b[e]):b[c]?(b[c][e]=void 0,this.oldest=b[c]):b[e]?(b[e][c]=void 0,this.newest=b[e]):this.oldest=this.newest=void 0,this.size-=this._size_func(b.value),b.value):void 0}clear(){this.oldest=this.newest=void 0,this.size=0,this._keymap.clear()}keys(){return new j(this.oldest)}values(){return new k(this.oldest)}entries(){return this}[Symbol.iterator](){return new i(this.oldest)}forEach(a,b){typeof b!=="object"&&(b=this);let d=this.oldest;for(;d;)a.call(b,d.value,d.key,this),d=d[c]}toJSON(){for(var a=new Array(this._keymap.size),b=0,d=this.oldest;d;)a[b++]={key:d.key,value:d.value},d=d[c];return a}toString(){for(var a="",b=this.oldest;b;)a+=String(b.key)+":"+b.value,b=b[c],b&&(a+=" < ");return a}}g.LRUMap=p;function m(a,b){this.key=a,this.value=b,this[c]=void 0,this[e]=void 0}function i(a){this.entry=a}i.prototype[Symbol.iterator]=function(){return this},i.prototype.next=function(){let a=this.entry;return a?(this.entry=a[c],{done:!1,value:[a.key,a.value]}):{done:!0,value:void 0}};function j(a){this.entry=a}j.prototype[Symbol.iterator]=function(){return this},j.prototype.next=function(){let a=this.entry;return a?(this.entry=a[c],{done:!1,value:a.key}):{done:!0,value:void 0}};function k(a){this.entry=a}k.prototype[Symbol.iterator]=function(){return this},k.prototype.next=function(){let a=this.entry;return a?(this.entry=a[c],{done:!1,value:a.value}):{done:!0,value:void 0}}});
//# sourceMappingURL=lru.js.map
