"use strict";
// A dispenser of £10 notes
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var _successor;
Object.defineProperty(exports, "__esModule", { value: true });
class Dispenser10 {
    constructor() {
        // Dispenses £10s if applicable, otherwise continues to next successor
        _successor.set(this, void 0);
    }
    nextSuccessor(successor) {
        // Set the next successor
        __classPrivateFieldSet(this, _successor, successor);
    }
    handle(amount) {
        // Handle the dispensing of notes"
        if (amount >= 10) {
            const num = Math.floor(amount / 10);
            const remainder = amount % 10;
            console.log(`Dispensing ${num} £10 note`);
            if (remainder !== 0) {
                __classPrivateFieldGet(this, _successor).handle(remainder);
            }
        }
        else {
            __classPrivateFieldGet(this, _successor).handle(amount);
        }
    }
}
exports.default = Dispenser10;
_successor = new WeakMap();
