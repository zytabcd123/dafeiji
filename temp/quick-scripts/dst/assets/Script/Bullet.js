
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Bullet.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '07df7UgMMZKaJUJxMLkefpD', 'Bullet');
// Script/Bullet.ts

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
var Bullet = /** @class */ (function (_super) {
    __extends(Bullet, _super);
    function Bullet() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.xSpeed = 0;
        _this.ySpeed = 0;
        _this.hpDrop = 0;
        //子弹发射声音
        _this.audio = null;
        return _this;
    }
    Bullet.prototype.onLoad = function () {
        // cc.log('@@@@@@@@@@', this.name, this.node.name)
        cc.director.getCollisionManager().enabled = true;
        // cc.log('子弹创建成功')
        cc.audioEngine.playEffect(this.audio, false);
    };
    Bullet.prototype.onCollisionEnter = function (other, self) {
        var en = other.node.getComponent('Enemy');
        if (en.isDeid) {
            return;
        }
        this.node.removeFromParent();
        this.destroy();
    };
    //dt = 0.016
    Bullet.prototype.update = function (dt) {
        // this.node.x += dt * this.xSpeed
        this.node.y += dt * this.ySpeed;
        // cc.log(dt, dt * this.ySpeed, this.node.y, this.node.parent.height)
        if (this.node.y > this.node.parent.height) {
            this.destroy();
        }
    };
    __decorate([
        property
    ], Bullet.prototype, "xSpeed", void 0);
    __decorate([
        property
    ], Bullet.prototype, "ySpeed", void 0);
    __decorate([
        property
    ], Bullet.prototype, "hpDrop", void 0);
    __decorate([
        property(cc.AudioClip)
    ], Bullet.prototype, "audio", void 0);
    Bullet = __decorate([
        ccclass
    ], Bullet);
    return Bullet;
}(cc.Component));
exports.default = Bullet;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL2Fzc2V0cy9TY3JpcHQvYXNzZXRzL1NjcmlwdC9CdWxsZXQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0Esb0JBQW9CO0FBQ3BCLGtGQUFrRjtBQUNsRix5RkFBeUY7QUFDekYsbUJBQW1CO0FBQ25CLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFDbkcsOEJBQThCO0FBQzlCLDRGQUE0RjtBQUM1RixtR0FBbUc7QUFFN0YsSUFBQSxrQkFBbUMsRUFBbEMsb0JBQU8sRUFBRSxzQkFBeUIsQ0FBQztBQUcxQztJQUFvQywwQkFBWTtJQURoRDtRQUFBLHFFQW9DQztRQWpDYSxZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLFlBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsWUFBTSxHQUFXLENBQUMsQ0FBQztRQUU3QixRQUFRO1FBQ2dCLFdBQUssR0FBaUIsSUFBSSxDQUFBOztJQTRCdEQsQ0FBQztJQTFCRyx1QkFBTSxHQUFOO1FBQ0ksa0RBQWtEO1FBQ2xELEVBQUUsQ0FBQyxRQUFRLENBQUMsbUJBQW1CLEVBQUUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ2pELG1CQUFtQjtRQUNuQixFQUFFLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxDQUFBO0lBQ2hELENBQUM7SUFFRCxpQ0FBZ0IsR0FBaEIsVUFBa0IsS0FBa0IsRUFBRSxJQUFpQjtRQUNuRCxJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQTtRQUN6QyxJQUFJLEVBQUUsQ0FBQyxNQUFNLEVBQUU7WUFBQyxPQUFNO1NBQUM7UUFFdkIsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1FBQzVCLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQTtJQUNsQixDQUFDO0lBRUQsWUFBWTtJQUNaLHVCQUFNLEdBQU4sVUFBTyxFQUFFO1FBQ0wsa0NBQWtDO1FBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxJQUFJLEVBQUUsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFBO1FBQy9CLHFFQUFxRTtRQUVyRSxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRTtZQUV2QyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUE7U0FDakI7SUFDTCxDQUFDO0lBaENTO1FBQVQsUUFBUTswQ0FBb0I7SUFDbkI7UUFBVCxRQUFROzBDQUFvQjtJQUNuQjtRQUFULFFBQVE7MENBQW9CO0lBR0w7UUFBdkIsUUFBUSxDQUFDLEVBQUUsQ0FBQyxTQUFTLENBQUM7eUNBQTJCO0lBUGpDLE1BQU07UUFEMUIsT0FBTztPQUNhLE1BQU0sQ0FtQzFCO0lBQUQsYUFBQztDQW5DRCxBQW1DQyxDQW5DbUMsRUFBRSxDQUFDLFNBQVMsR0FtQy9DO2tCQW5Db0IsTUFBTSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLi4vLi4vLi4vLi4vYXNzZXRzL1NjcmlwdCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZXJvIGZyb20gXCIuL0hlcm9cIjtcbi8vIExlYXJuIFR5cGVTY3JpcHQ6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvdHlwZXNjcmlwdC5odG1sXG4vLyAgLSBbRW5nbGlzaF0gaHR0cDovL3d3dy5jb2NvczJkLXgub3JnL2RvY3MvY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL3R5cGVzY3JpcHQuaHRtbFxuLy8gTGVhcm4gQXR0cmlidXRlOlxuLy8gIC0gW0NoaW5lc2VdIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvemgvc2NyaXB0aW5nL3JlZmVyZW5jZS9hdHRyaWJ1dGVzLmh0bWxcbi8vICAtIFtFbmdsaXNoXSBodHRwOi8vd3d3LmNvY29zMmQteC5vcmcvZG9jcy9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxuLy8gTGVhcm4gbGlmZS1jeWNsZSBjYWxsYmFja3M6XG4vLyAgLSBbQ2hpbmVzZV0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC96aC9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxuLy8gIC0gW0VuZ2xpc2hdIGh0dHA6Ly93d3cuY29jb3MyZC14Lm9yZy9kb2NzL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXG5cbmNvbnN0IHtjY2NsYXNzLCBwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQnVsbGV0IGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcblxuICAgIEBwcm9wZXJ0eSB4U3BlZWQ6IG51bWJlciA9IDA7XG4gICAgQHByb3BlcnR5IHlTcGVlZDogbnVtYmVyID0gMDtcbiAgICBAcHJvcGVydHkgaHBEcm9wOiBudW1iZXIgPSAwO1xuXG4gICAgLy/lrZDlvLnlj5HlsITlo7Dpn7NcbiAgICBAcHJvcGVydHkoY2MuQXVkaW9DbGlwKSBhdWRpbzogY2MuQXVkaW9DbGlwID0gbnVsbFxuICAgIFxuICAgIG9uTG9hZCAoKSB7XG4gICAgICAgIC8vIGNjLmxvZygnQEBAQEBAQEBAQCcsIHRoaXMubmFtZSwgdGhpcy5ub2RlLm5hbWUpXG4gICAgICAgIGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKS5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gY2MubG9nKCflrZDlvLnliJvlu7rmiJDlip8nKVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuYXVkaW8sIGZhbHNlKVxuICAgIH1cblxuICAgIG9uQ29sbGlzaW9uRW50ZXIgKG90aGVyOiBjYy5Db2xsaWRlciwgc2VsZjogY2MuQ29sbGlkZXIpIHtcbiAgICAgICAgbGV0IGVuID0gb3RoZXIubm9kZS5nZXRDb21wb25lbnQoJ0VuZW15JykgXG4gICAgICAgIGlmIChlbi5pc0RlaWQpIHtyZXR1cm59XG4gICAgICAgIFxuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlRnJvbVBhcmVudCgpXG4gICAgICAgIHRoaXMuZGVzdHJveSgpXG4gICAgfVxuXG4gICAgLy9kdCA9IDAuMDE2XG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIC8vIHRoaXMubm9kZS54ICs9IGR0ICogdGhpcy54U3BlZWRcbiAgICAgICAgdGhpcy5ub2RlLnkgKz0gZHQgKiB0aGlzLnlTcGVlZFxuICAgICAgICAvLyBjYy5sb2coZHQsIGR0ICogdGhpcy55U3BlZWQsIHRoaXMubm9kZS55LCB0aGlzLm5vZGUucGFyZW50LmhlaWdodClcblxuICAgICAgICBpZiAodGhpcy5ub2RlLnkgPiB0aGlzLm5vZGUucGFyZW50LmhlaWdodCkge1xuXG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgfVxufVxuIl19