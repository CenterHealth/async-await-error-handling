(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.to = factory());
}(this, (function () { 'use strict';

function to(promise) {
    return promise.then(function (data) {
        return [undefined, data];
    }).catch(function (err) {
        return [err, undefined];
    });
}

return to;

})));
