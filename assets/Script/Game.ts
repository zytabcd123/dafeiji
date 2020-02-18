import Bullet from "./Bullet";
import BulletGroup from "./BulletGroup";

// Learn TypeScript:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/typescript.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/reference/attributes.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - [Chinese] https://docs.cocos.com/creator/manual/zh/scripting/life-cycle-callbacks.html
//  - [English] http://www.cocos2d-x.org/docs/creator/manual/en/scripting/life-cycle-callbacks.html

const {ccclass, property} = cc._decorator;

@ccclass
export default class Game extends cc.Component {
    
    @property(BulletGroup) bubbleGroup: BulletGroup = null
    @property(cc.Label) scoreLabel: cc.Label = null
    @property(cc.Float) bubbleRate: number = 1//子弹发射频率，默认间隔1秒发射
    
    totalEnemy: number = 0
    scoreNum: number = 0
    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
        var timeCallback = function () {
            this.autoBullet()
        }
        this.schedule(timeCallback, this.bubbleRate);
    }

    start () {

    }

    update (dt) {
        // cc.log('########',dt)
    }

    updateScore() {
        this.scoreNum += 1
        this.scoreLabel.string = this.scoreNum.toString()
    }

    autoBullet() {

        // cc.log('自动发射子弹', this.bubbleGroup.isValid)
        this.bubbleGroup.createBullet()
    } 

    switchBulletAction(event: Event, cusEvn: number) {

        this.bubbleGroup.bulletType = cusEvn
        cc.log('~~~~~~~~~~~~~~~~~~')
        cc.log(cusEvn)
    }
}
