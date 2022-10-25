"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _football_goals;
class football {
    constructor(winner, goals) {
        _football_goals.set(this, void 0);
        this.winner = winner;
        __classPrivateFieldSet(this, _football_goals, goals, "f");
    }
    result() {
        return "Football match:" + __classPrivateFieldGet(this, _football_goals, "f");
    }
}
_football_goals = new WeakMap();
class Marathon {
    constructor(winner, time) {
        this.winner = winner;
        this.time = time;
    }
    result() {
        return "Marathon: " + this.time;
    }
}
class Calvinball {
    constructor(winner) {
        this.winner = winner;
        this.point = 3;
    }
    set nyertes(winner) {
        if (this.winner != "Calvin") {
            throw ("A nyertes csak Calvin vagy Hobbes lehet!");
        }
        else {
            this.winner = winner;
        }
    }
    result() {
        return "Calvinball: " + this.point;
    }
}
let sportok = [
    new football("Argentina", "0-1"),
    new Marathon("Ronaldo Ardema", 120),
    new Calvinball("Calvin")
];
for (let sport of sportok) {
    console.log(sport.result);
}
