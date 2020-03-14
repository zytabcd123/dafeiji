
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'dd0381Lb+hDV4KQLkfloajw', 'Game');
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
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9TY3JpcHQvYXNzZXRzL1NjcmlwdC9HYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNBLDZDQUF3QztBQUV4QyxvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRTFDLElBQUssU0FLSjtBQUxELFdBQUssU0FBUztJQUNWLHVDQUFHLENBQUE7SUFDSCwyQ0FBSyxDQUFBO0lBQ0wsMkNBQUssQ0FBQTtJQUNMLHlDQUFJLENBQUEsQ0FBQyxJQUFJO0FBQ2IsQ0FBQyxFQUxJLFNBQVMsS0FBVCxTQUFTLFFBS2I7QUFHRDtJQUFrQyx3QkFBWTtJQUQ5QztRQUFBLHFFQTZGQztRQTFGMEIsaUJBQVcsR0FBZ0IsSUFBSSxDQUFBO1FBQ2xDLGdCQUFVLEdBQWEsSUFBSSxDQUFBO1FBRTNCLGdCQUFVLEdBQVcsQ0FBQyxDQUFBLENBQUEsaUJBQWlCO1FBRTNELFdBQUssR0FBYyxTQUFTLENBQUMsS0FBSyxDQUFBO1FBQ2xDLGdCQUFVLEdBQVcsQ0FBQyxDQUFBO1FBQ3RCLGNBQVEsR0FBVyxDQUFDLENBQUE7UUFFcEIscUJBQWUsR0FBRztZQUNkLElBQUksQ0FBQyxXQUFXLENBQUMsWUFBWSxFQUFFLENBQUE7UUFDbkMsQ0FBQyxDQUFBOztJQStFTCxDQUFDO0lBOUVHLHdCQUF3QjtJQUV4QixxQkFBTSxHQUFOO1FBQ0ssSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFBO0lBQ2pCLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsZUFBZSxFQUFFLElBQUksQ0FB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QUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0E0RnhCO0lBQUQsV0FBQztDQTVGRCxBQTRGQyxDQTVGaUMsRUFBRSxDQUFDLFNBQVMsR0E0RjdDO2tCQTVGb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vYXNzZXRzL1NjcmlwdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdWxsZXQgZnJvbSBcIi4vQnVsbGV0XCI7XG5pbXBvcnQgQnVsbGV0R3JvdXAgZnJvbSBcIi4vQnVsbGV0R3JvdXBcIjtcblxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbmVudW0gR2FtZVN0YXRlIHtcbiAgICBub24sXG4gICAgc3RhcnQsXG4gICAgcGF1c2UsXG4gICAgb3ZlciAvL+e7k+adn1xufVxuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgR2FtZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgXG4gICAgQHByb3BlcnR5KEJ1bGxldEdyb3VwKSBidWJibGVHcm91cDogQnVsbGV0R3JvdXAgPSBudWxsXG4gICAgQHByb3BlcnR5KGNjLkxhYmVsKSBzY29yZUxhYmVsOiBjYy5MYWJlbCA9IG51bGxcblxuICAgIEBwcm9wZXJ0eShjYy5GbG9hdCkgYnViYmxlUmF0ZTogbnVtYmVyID0gMS8v5a2Q5by55Y+R5bCE6aKR546H77yM6buY6K6k6Ze06ZqUMeenkuWPkeWwhFxuXG4gICAgc3RhdGU6IEdhbWVTdGF0ZSA9IEdhbWVTdGF0ZS5zdGFydFxuICAgIHRvdGFsRW5lbXk6IG51bWJlciA9IDBcbiAgICBzY29yZU51bTogbnVtYmVyID0gMFxuICAgIFxuICAgIGJ1YmJsZVRpbWVCbG9jayA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdGhpcy5idWJibGVHcm91cC5jcmVhdGVCdWxsZXQoKVxuICAgIH1cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgICB0aGlzLnRpbWVyKClcbiAgICB9XG5cbiAgICB0aW1lcigpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmJ1YmJsZVRpbWVCbG9jaywgdGhpcy5idWJibGVSYXRlKVxuICAgIH1cblxuICAgIHVudGltZXIoKSB7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmJ1YmJsZVRpbWVCbG9jaylcbiAgICB9XG5cbiAgICB1cGRhdGVTY29yZSgpIHtcbiAgICAgICAgdGhpcy5zY29yZU51bSArPSAxXG4gICAgICAgIHRoaXMuc2NvcmVMYWJlbC5zdHJpbmcgPSB0aGlzLnNjb3JlTnVtLnRvU3RyaW5nKClcbiAgICB9XG5cbiAgICBzd2l0Y2hCdWxsZXRBY3Rpb24oZXZlbnQ6IEV2ZW50LCBjdXNFdm46IG51bWJlcikge1xuXG4gICAgICAgIHRoaXMuYnViYmxlR3JvdXAuYnVsbGV0VHlwZSA9IGN1c0V2blxuICAgICAgICBjYy5sb2coJ35+fn5+fn5+fn5+fn5+fn5+ficpXG4gICAgICAgIGNjLmxvZyhjdXNFdm4pXG4gICAgfVxuXG4gICAgcHJlZ2FtZU92ZXIoKSB7XG4gICAgICAgIHRoaXMuc3RhdGUgPSBHYW1lU3RhdGUub3ZlclxuICAgICAgICB0aGlzLnVudGltZXIoKVxuICAgICAgICB0aGlzLnNhdmVTY29yZSgpXG4gICAgfVxuXG4gICAgZ2FtZU92ZXIoKSB7XG4gICAgICAgIGNjLmxvZygnfn5+fn5+fn5+fn5+fn5+fn5+5ri45oiP57uT5p2fJylcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdlbmRTY2VuZScpO1xuICAgIH1cblxuICAgIHNhdmVTY29yZSgpIHtcbiAgICAgICAgdmFyIHNrID0gJ3Njb3JlXzAnXG4gICAgICAgIHZhciBpZHggPSAwXG5cbiAgICAgICAgbGV0IGNkcyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3VycmVudFNjb3JlJylcbiAgICAgICAgaWYgKGNkcyAhPSBudWxsKSB7XG4gICAgICAgICAgICBsZXQgY2QgPSBKU09OLnBhcnNlKGNkcylcbiAgICAgICAgICAgIGlkeCA9IGNkLmlkeCArIDFcbiAgICAgICAgICAgIHNrID0gJ3Njb3JlXycgKyBpZHhcblxuICAgICAgICAgICAgY2MubG9nKGNkID09IG51bGwsIGNkLmlkeClcbiAgICAgICAgfVxuXG5cbiAgICAgICAgdmFyIHNkID0ge1xuICAgICAgICAgICAgJ2lkeCcgOiBpZHgsXG4gICAgICAgICAgICAnc2NvcmUnIDogdGhpcy5zY29yZU51bSxcbiAgICAgICAgICAgICdjdGltZScgOiB0aGlzLmZvcm1hdCggbmV3IERhdGUoKSwgJ3l5eXktTU0tZGQgaGg6bW06c3MnKVxuICAgICAgICB9XG4gICAgICAgIGxldCBzcyAgPSBKU09OLnN0cmluZ2lmeShzZClcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdXJyZW50U2NvcmUnLCBzcylcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKHNrLCBzcylcblxuICAgICAgICBjYy5sb2coc2ssIHNkLmlkeCwgc2Quc2NvcmUsIHNkLmN0aW1lKVxuICAgIH1cblxuICAgIGZvcm1hdCh0aW1lOiBEYXRlLGZtdDogc3RyaW5nKSB7IC8vYXV0aG9yOiBtZWl6eiBcbiAgICAgICAgdmFyIG8gPSB7XG4gICAgICAgICAgICBcIk0rXCI6IHRpbWUuZ2V0TW9udGgoKSArIDEsIC8v5pyI5Lu9IFxuICAgICAgICAgICAgXCJkK1wiOiB0aW1lLmdldERhdGUoKSwgLy/ml6UgXG4gICAgICAgICAgICBcImgrXCI6IHRpbWUuZ2V0SG91cnMoKSwgLy/lsI/ml7YgXG4gICAgICAgICAgICBcIm0rXCI6IHRpbWUuZ2V0TWludXRlcygpLCAvL+WIhiBcbiAgICAgICAgICAgIFwicytcIjogdGltZS5nZXRTZWNvbmRzKCksIC8v56eSIFxuICAgICAgICAgICAgXCJxK1wiOiBNYXRoLmZsb29yKCh0aW1lLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAvL+Wto+W6piBcbiAgICAgICAgICAgIFwiU1wiOiB0aW1lLmdldE1pbGxpc2Vjb25kcygpIC8v5q+r56eSIFxuICAgICAgICB9O1xuICAgICAgICBpZiAoLyh5KykvLnRlc3QoZm10KSkgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAodGltZS5nZXRGdWxsWWVhcigpICsgXCJcIikuc3Vic3RyKDQgLSBSZWdFeHAuJDEubGVuZ3RoKSk7XG4gICAgICAgIGZvciAodmFyIGsgaW4gbylcbiAgICAgICAgaWYgKG5ldyBSZWdFeHAoXCIoXCIgKyBrICsgXCIpXCIpLnRlc3QoZm10KSkgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAoUmVnRXhwLiQxLmxlbmd0aCA9PSAxKSA/IChvW2tdKSA6ICgoXCIwMFwiICsgb1trXSkuc3Vic3RyKChcIlwiICsgb1trXSkubGVuZ3RoKSkpO1xuICAgICAgICByZXR1cm4gZm10O1xuICAgIH1cbn1cbiJdfQ==