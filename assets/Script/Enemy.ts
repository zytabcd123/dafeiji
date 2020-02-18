import EnemyGroup from "./EnemyGroup";
import Game from "./Game";

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
export default class Enemy extends cc.Component {

    @property(cc.Integer) xMinSpeed: number = 100
    @property(cc.Integer) xMaxSpeed: number = 500
    @property(cc.Integer) yMinSpeed: number = 100
    @property(cc.Integer) yMaxSpeed: number = 500
    @property(cc.Integer) HP: number = 100

    @property(cc.AudioClip) diedAudio: cc.Texture2D = null
    xSpeed: number = 0
    ySpeed: number = 0
    isDeid: boolean = false
    gm: Game;

    onLoad() {
        cc.director.getCollisionManager().enabled = true;
        this.xSpeed = Math.random() * (this.xMaxSpeed - this.xMinSpeed) + this.xMinSpeed
        this.ySpeed = Math.random() * (this.yMaxSpeed - this.yMinSpeed) + this.yMinSpeed
        
        // cc.log('~~~~~~~~~~~~~', this.gm.name)
        
    }
    
    onCollisionEnter (other: cc.Collider, self: cc.Collider) {
        if (this.isDeid) {return}
        if (self.node.position.y > this.node.parent.height / 2) {
            return
        }
        // cc.log('敌机被消灭', self.node.position.x, self.node.position.y, this.gm.name)
        this.gm.updateScore()
        this.isDeid = true
        this.enemyDeidEffect()
    }

    enemyDeidEffect () {
        var a = this.getComponent(cc.Animation)
        a.playAdditive('enemy1ani')
        a.on('finished', this.enemyDeidEffectFinished, this)

        cc.audioEngine.playEffect(this.diedAudio, false)
    }
    
    enemyDeidEffectFinished() {
        this.node.removeFromParent()
        this.destroy()
    }
    //dt = 0.016
    update(dt) {
        if (this.isDeid) {return}
        // this.node.x += dt * this.xSpeed
        this.node.y -= dt * this.ySpeed
        // cc.log(dt, dt * this.ySpeed, this.node.y, this.node.parent.height)

        if (this.node.y < -this.node.parent.height) {

            this.destroy()
        }
    }
}
