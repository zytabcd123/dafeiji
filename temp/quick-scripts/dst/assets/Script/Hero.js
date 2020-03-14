
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Hero.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f9ccaT5Rq5Ewoowm9NAk5EZ', 'Hero');
// Script/Hero.ts

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
var Game_1 = require("./Game");
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
var Hero = /** @class */ (function (_super) {
    __extends(Hero, _super);
    function Hero() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.diedAudio = null;
        _this.gm = null;
        _this.isDeid = false;
        return _this;
    }
    // LIFE-CYCLE CALLBACKS:
    Hero.prototype.onLoad = function () {
        cc.log('~~~~~~~~~~英雄加载');
        cc.director.getCollisionManager().enabled = true;
        this.onDrag();
    };
    Hero.prototype.start = function () {
    };
    // update (dt) {}
    //添加拖动监听
    Hero.prototype.onDrag = function () {
        this.node.on('touchmove', this.dragMove, this);
    };
    //去掉拖动监听
    Hero.prototype.offDrag = function () {
        this.node.off('touchmove', this.dragMove, this);
    };
    //拖动
    Hero.prototype.dragMove = function (event) {
        var locationv = event.getLocation();
        var location = this.node.parent.convertToNodeSpaceAR(locationv);
        //飞机不移出屏幕 
        var minX = -this.node.parent.width / 2;
        var maxX = -minX;
        var minY = -this.node.parent.height / 2;
        var maxY = -minY;
        if (location.x < minX) {
            location.x = minX;
        }
        if (location.x > maxX) {
            location.x = maxX;
        }
        if (location.y < minY) {
            location.y = minY;
        }
        if (location.y > maxY) {
            location.y = maxY;
        }
        // cc.log('飞机', location.x, location.y)
        this.node.setPosition(location);
    };
    Hero.prototype.onCollisionEnter = function (other, self) {
        if (this.isDeid) {
            return;
        }
        this.isDeid = true;
        this.heroDeidEffect();
        this.gm.pregameOver();
    };
    Hero.prototype.heroDeidEffect = function () {
        var a = this.getComponent(cc.Animation);
        a.playAdditive('hero_blowup_ani');
        a.on('finished', this.heroDeidEffectFinished, this);
        cc.audioEngine.playEffect(this.diedAudio, false);
    };
    Hero.prototype.heroDeidEffectFinished = function () {
        // this.node.removeFromParent()
        // this.destroy()
        this.gm.gameOver();
        this.offDrag();
    };
    __decorate([
        property(cc.AudioClip)
    ], Hero.prototype, "diedAudio", void 0);
    __decorate([
        property(Game_1.default)
    ], Hero.prototype, "gm", void 0);
    Hero = __decorate([
        ccclass
    ], Hero);
    return Hero;
}(cc.Component));
exports.default = Hero;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9TY3JpcHQvYXNzZXRzL1NjcmlwdC9IZXJvLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUEwQjtBQUUxQixvQkFBb0I7QUFDcEIsa0ZBQWtGO0FBQ2xGLHlGQUF5RjtBQUN6RixtQkFBbUI7QUFDbkIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUNuRyw4QkFBOEI7QUFDOUIsNEZBQTRGO0FBQzVGLG1HQUFtRztBQUU3RixJQUFBLGtCQUFtQyxFQUFsQyxvQkFBTyxFQUFFLHNCQUF5QixDQUFDO0FBRzFDO0lBQWtDLHdCQUFZO0lBRDlDO1FBQUEscUVBNEVDO1FBekUyQixlQUFTLEdBQWlCLElBQUksQ0FBQTtRQUN0QyxRQUFFLEdBQVMsSUFBSSxDQUFBO1FBQy9CLFlBQU0sR0FBWSxLQUFLLENBQUE7O0lBdUUzQixDQUFDO0lBdEVHLHdCQUF3QjtJQUV4QixxQkFBTSxHQUFOO1FBQ0ksRUFBRSxDQUFDLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFBO1FBQ3hCLEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pELElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsb0JBQUssR0FBTDtJQUVBLENBQUM7SUFFRCxpQkFBaUI7SUFFakIsUUFBUTtJQUNSLHFCQUFNLEdBQU47UUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRCxDQUFDO0lBQ0QsUUFBUTtJQUNSLHNCQUFPLEdBQVA7UUFDSyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBQ0QsSUFBSTtJQUNKLHVCQUFRLEdBQVIsVUFBUyxLQUFLO1FBQ1YsSUFBSSxTQUFTLEdBQUcsS0FBSyxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3BDLElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLG9CQUFvQixDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2hFLFVBQVU7UUFDVixJQUFJLElBQUksR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBQyxDQUFDLENBQUE7UUFDcEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUM7UUFDakIsSUFBSSxJQUFJLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFBO1FBQ3JDLElBQUksSUFBSSxHQUFHLENBQUMsSUFBSSxDQUFDO1FBQ2pCLElBQUksUUFBUSxDQUFDLENBQUMsR0FBRSxJQUFJLEVBQUM7WUFDakIsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDckI7UUFDRCxJQUFJLFFBQVEsQ0FBQyxDQUFDLEdBQUMsSUFBSSxFQUFDO1lBQ2hCLFFBQVEsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ3JCO1FBQ0QsSUFBSSxRQUFRLENBQUMsQ0FBQyxHQUFFLElBQUksRUFBQztZQUNqQixRQUFRLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQztTQUNyQjtRQUNELElBQUksUUFBUSxDQUFDLENBQUMsR0FBRSxJQUFJLEVBQUM7WUFDakIsUUFBUSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDckI7UUFDRCx1Q0FBdUM7UUFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDcEMsQ0FBQztJQUVELCtCQUFnQixHQUFoQixVQUFrQixLQUFrQixFQUFFLElBQWlCO1FBQ25ELElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUFDLE9BQU07U0FBQztRQUV6QixJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQTtRQUNsQixJQUFJLENBQUMsY0FBYyxFQUFFLENBQUE7UUFDckIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQTtJQUN6QixDQUFDO0lBRUQsNkJBQWMsR0FBZDtRQUNJLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFBO1FBQ3ZDLENBQUMsQ0FBQyxZQUFZLENBQUMsaUJBQWlCLENBQUMsQ0FBQTtRQUNqQyxDQUFDLENBQUMsRUFBRSxDQUFDLFVBQVUsRUFBRSxJQUFJLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUE7UUFFbkQsRUFBRSxDQUFDLFdBQVcsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUNwRCxDQUFDO0lBRUQscUNBQXNCLEdBQXRCO1FBQ0ksK0JBQStCO1FBQy9CLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFBO1FBQ2xCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0lBdkV1QjtRQUF2QixRQUFRLENBQUMsRUFBRSxDQUFDLFNBQVMsQ0FBQzsyQ0FBK0I7SUFDdEM7UUFBZixRQUFRLENBQUMsY0FBSSxDQUFDO29DQUFnQjtJQUhkLElBQUk7UUFEeEIsT0FBTztPQUNhLElBQUksQ0EyRXhCO0lBQUQsV0FBQztDQTNFRCxBQTJFQyxDQTNFaUMsRUFBRSxDQUFDLFNBQVMsR0EyRTdDO2tCQTNFb0IsSUFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vYXNzZXRzL1NjcmlwdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBHYW1lIGZyb20gXCIuL0dhbWVcIjtcblxuLy8gTGVhcm4gVHlwZVNjcmlwdDpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy90eXBlc2NyaXB0Lmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyBMZWFybiBBdHRyaWJ1dGU6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcbi8vICAtIFtDaGluZXNlXSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL3poL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2xpZmUtY3ljbGUtY2FsbGJhY2tzLmh0bWxcblxuY29uc3Qge2NjY2xhc3MsIHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZXJvIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eShjYy5BdWRpb0NsaXApIGRpZWRBdWRpbzogY2MuVGV4dHVyZTJEID0gbnVsbFxuICAgIEBwcm9wZXJ0eShHYW1lKSBnbTogR2FtZSA9IG51bGxcbiAgICBpc0RlaWQ6IGJvb2xlYW4gPSBmYWxzZVxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkICgpIHtcbiAgICAgICAgY2MubG9nKCd+fn5+fn5+fn5+6Iux6ZuE5Yqg6L29JylcbiAgICAgICAgY2MuZGlyZWN0b3IuZ2V0Q29sbGlzaW9uTWFuYWdlcigpLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLm9uRHJhZygpO1xuICAgIH1cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG5cbiAgICAvL+a3u+WKoOaLluWKqOebkeWQrFxuICAgIG9uRHJhZygpe1xuICAgICAgICB0aGlzLm5vZGUub24oJ3RvdWNobW92ZScsIHRoaXMuZHJhZ01vdmUsIHRoaXMpO1xuICAgIH1cbiAgICAvL+WOu+aOieaLluWKqOebkeWQrFxuICAgIG9mZkRyYWcoKXsgXG4gICAgICAgICB0aGlzLm5vZGUub2ZmKCd0b3VjaG1vdmUnLCB0aGlzLmRyYWdNb3ZlLCB0aGlzKTtcbiAgICB9XG4gICAgLy/mi5bliqhcbiAgICBkcmFnTW92ZShldmVudCl7IFxuICAgICAgICB2YXIgbG9jYXRpb252ID0gZXZlbnQuZ2V0TG9jYXRpb24oKTtcbiAgICAgICAgdmFyIGxvY2F0aW9uID0gdGhpcy5ub2RlLnBhcmVudC5jb252ZXJ0VG9Ob2RlU3BhY2VBUihsb2NhdGlvbnYpO1xuICAgICAgICAvL+mjnuacuuS4jeenu+WHuuWxj+W5lSBcbiAgICAgICAgdmFyIG1pblggPSAtdGhpcy5ub2RlLnBhcmVudC53aWR0aC8yXG4gICAgICAgIHZhciBtYXhYID0gLW1pblg7XG4gICAgICAgIHZhciBtaW5ZID0gLXRoaXMubm9kZS5wYXJlbnQuaGVpZ2h0LzJcbiAgICAgICAgdmFyIG1heFkgPSAtbWluWTtcbiAgICAgICAgaWYgKGxvY2F0aW9uLng8IG1pblgpe1xuICAgICAgICAgICAgbG9jYXRpb24ueCA9IG1pblg7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGxvY2F0aW9uLng+bWF4WCl7XG4gICAgICAgICAgICBsb2NhdGlvbi54ID0gbWF4WDtcbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYXRpb24ueTwgbWluWSl7XG4gICAgICAgICAgICBsb2NhdGlvbi55ID0gbWluWTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobG9jYXRpb24ueT4gbWF4WSl7XG4gICAgICAgICAgICBsb2NhdGlvbi55ID0gbWF4WTtcbiAgICAgICAgfVxuICAgICAgICAvLyBjYy5sb2coJ+mjnuacuicsIGxvY2F0aW9uLngsIGxvY2F0aW9uLnkpXG4gICAgICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbihsb2NhdGlvbik7XG4gICAgfVxuXG4gICAgb25Db2xsaXNpb25FbnRlciAob3RoZXI6IGNjLkNvbGxpZGVyLCBzZWxmOiBjYy5Db2xsaWRlcikge1xuICAgICAgICBpZiAodGhpcy5pc0RlaWQpIHtyZXR1cm59XG5cbiAgICAgICAgdGhpcy5pc0RlaWQgPSB0cnVlXG4gICAgICAgIHRoaXMuaGVyb0RlaWRFZmZlY3QoKVxuICAgICAgICB0aGlzLmdtLnByZWdhbWVPdmVyKClcbiAgICB9XG5cbiAgICBoZXJvRGVpZEVmZmVjdCAoKSB7XG4gICAgICAgIHZhciBhID0gdGhpcy5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKVxuICAgICAgICBhLnBsYXlBZGRpdGl2ZSgnaGVyb19ibG93dXBfYW5pJylcbiAgICAgICAgYS5vbignZmluaXNoZWQnLCB0aGlzLmhlcm9EZWlkRWZmZWN0RmluaXNoZWQsIHRoaXMpXG5cbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheUVmZmVjdCh0aGlzLmRpZWRBdWRpbywgZmFsc2UpXG4gICAgfVxuICAgIFxuICAgIGhlcm9EZWlkRWZmZWN0RmluaXNoZWQoKSB7XG4gICAgICAgIC8vIHRoaXMubm9kZS5yZW1vdmVGcm9tUGFyZW50KClcbiAgICAgICAgLy8gdGhpcy5kZXN0cm95KClcbiAgICAgICAgdGhpcy5nbS5nYW1lT3ZlcigpXG4gICAgICAgIHRoaXMub2ZmRHJhZygpXG4gICAgfVxuXG59XG4iXX0=