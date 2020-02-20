(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/Game.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, 'dd0381Lb+hDV4KQLkfloajw', 'Game', __filename);
// Script/Game.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BulletGroup_1 = require("./BulletGroup");
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameState;
(function (GameState) {
    GameState[GameState["non"] = 0] = "non";
    GameState[GameState["start"] = 1] = "start";
    GameState[GameState["pause"] = 2] = "pause";
    GameState[GameState["over"] = 3] = "over"; //结束
})(GameState || (GameState = {}));
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.bubbleGroup = null;
        _this.scoreLabel = null;
        _this.bubbleRate = 1; //子弹发射频率，默认间隔1秒发射
        _this.state = GameState.start;
        _this.totalEnemy = 0;
        _this.scoreNum = 0;
        _this.bubbleTimeBlock = function () {
            this.bubbleGroup.createBullet();
        };
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Game.prototype.onLoad = function () {
        this.timer();
    };
    Game.prototype.timer = function () {
        this.schedule(this.bubbleTimeBlock, this.bubbleRate);
    };
    Game.prototype.untimer = function () {
        this.unschedule(this.bubbleTimeBlock);
    };
    Game.prototype.updateScore = function () {
        this.scoreNum += 1;
        this.scoreLabel.string = this.scoreNum.toString();
    };
    Game.prototype.switchBulletAction = function (event, cusEvn) {
        this.bubbleGroup.bulletType = cusEvn;
        cc.log('~~~~~~~~~~~~~~~~~~');
        cc.log(cusEvn);
    };
    Game.prototype.pregameOver = function () {
        this.state = GameState.over;
        this.untimer();
        this.saveScore();
    };
    Game.prototype.gameOver = function () {
        cc.log('~~~~~~~~~~~~~~~~~~游戏结束');
        cc.director.loadScene('endScene');
    };
    Game.prototype.saveScore = function () {
        var sk = 'score_0';
        var idx = 0;
        var cds = cc.sys.localStorage.getItem('currentScore');
        if (cds != null) {
            var cd = JSON.parse(cds);
            idx = cd.idx + 1;
            sk = 'score_' + idx;
            cc.log(cd == null, cd.idx);
        }
        var sd = {
            'idx': idx,
            'score': this.scoreNum,
            'ctime': this.format(new Date(), 'yyyy-MM-dd hh:mm:ss')
        };
        var ss = JSON.stringify(sd);
        cc.sys.localStorage.setItem('currentScore', ss);
        cc.sys.localStorage.setItem(sk, ss);
        cc.log(sk, sd.idx, sd.score, sd.ctime);
    };
    Game.prototype.format = function (time, fmt) {
        var o = {
            "M+": time.getMonth() + 1,
            "d+": time.getDate(),
            "h+": time.getHours(),
            "m+": time.getMinutes(),
            "s+": time.getSeconds(),
            "q+": Math.floor((time.getMonth() + 3) / 3),
            "S": time.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
                fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };
    __decorate([
        property(BulletGroup_1.default)
    ], Game.prototype, "bubbleGroup", void 0);
    __decorate([
        property(cc.Label)
    ], Game.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Float)
    ], Game.prototype, "bubbleRate", void 0);
    Game = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

cc._RF.pop();
        }
        if (CC_EDITOR) {
            __define(__module.exports, __require, __module);
        }
        else {
            cc.registerModuleFunc(__filename, function () {
                __define(__module.exports, __require, __module);
            });
        }
        })();
        //# sourceMappingURL=Game.js.map
        