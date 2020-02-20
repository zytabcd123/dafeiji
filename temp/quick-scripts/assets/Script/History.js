(function() {"use strict";var __module = CC_EDITOR ? module : {exports:{}};var __filename = 'preview-scripts/assets/Script/History.js';var __require = CC_EDITOR ? function (request) {return cc.require(request, require);} : function (request) {return cc.require(request, __filename);};function __define (exports, require, module) {"use strict";
cc._RF.push(module, '24230OQbvpEsIOFGFO1Rogi', 'History', __filename);
// Script/History.ts

"use strict";
// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html
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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var History = /** @class */ (function (_super) {
    __extends(History, _super);
    function History() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.scrollView = null;
        _this.scoreCell = null;
        return _this;
    }
    History.prototype.onLoad = function () {
        cc.log('历史记录');
        // let s = [0, 1, 2, 3, 4, 5]
        // for (let i in s) {
        //     cc.log(i)
        //     var cell = cc.instantiate(this.scoreCell)
        //     this.scrollView.addChild(cell)
        // }
        this.reloadData();
    };
    History.prototype.reloadData = function () {
        var cd = JSON.parse(cc.sys.localStorage.getItem('currentScore'));
        if (cd == null) {
            return;
        }
        // cc.sys.localStorage.removeItem('currentScore')
        for (var i = 0; i < cd.idx + 1; i++) {
            var key = 'score_' + i;
            // cc.log(key)
            // cc.sys.localStorage.removeItem(key)
            var sd = JSON.parse(cc.sys.localStorage.getItem(key));
            var cell = cc.instantiate(this.scoreCell);
            this.scrollView.addChild(cell);
            cell.getComponent('ScoreCell').reloadData(sd.score, sd.ctime);
        }
    };
    History.prototype.backAction = function () {
        cc.director.loadScene('endScene');
    };
    __decorate([
        property(cc.Node)
    ], History.prototype, "scrollView", void 0);
    __decorate([
        property(cc.Prefab)
    ], History.prototype, "scoreCell", void 0);
    History = __decorate([
        ccclass
    ], History);
    return History;
}(cc.Component));
exports.default = History;

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
        //# sourceMappingURL=History.js.map
        