import $ from '../core';

$.prototype.on = function(eventName, callBack) {
    for (let i = 0; i < this.length; i++) {
        if (!eventName || !callBack) {
            return this
        }
        if (!this[i].addEventListener) {
            continue;
        }
         this[i].addEventListener(eventName, callBack)
    }
    return this;
}
$.prototype.off = function(eventName, callBack) {
    for (let i = 0; i < this.length; i++) {
        if (!eventName || !callBack) {
            return this
        }
        if (!this[i].removeEventListener) {
            continue;
        }
        this[i].removeEventListener(eventName, callBack);
    }
    return this;
}
$.prototype.click = function(handler) {
    for (let i = 0; i < this.length; i++) {
        if(handler) {
            this[i].addEventListener('click', handler);
        } else {
            this[i].click();
        }
        if (!this[i].removeEventListener) {
            continue;
        }
    
    }
    return this;
}