import $ from '../core';

$.prototype.getAttr = function(attrName) {
    for (let i = 0; i < this.length; i++) {
        if (!attrName) {
            return this
        }
        if (!this[i].getAttribute) {
            continue;
        }
        console.log(this[i].getAttribute(attrName))
         return this[i].getAttribute(attrName)
    }
    return this;
}
$.prototype.setAttr = function(attrName, attrVal) {
    for (let i = 0; i < this.length; i++) {
        if (!attrName || !attrVal) {
            return this
        }
        if (!this[i].setAttribute) {
            continue;
        }
        this[i].setAttribute(attrName, attrVal);
    }
    return this;
}
$.prototype.remAttr = function(attrName) {
    for (let i = 0; i < this.length; i++) {
        if (!attrName) {
            return this
        }
        if (!this[i].removeAttribute) {
            continue;
        }
        this[i].removeAttribute(attrName);
    }
    return this;
}