import Hero from "./Hero";
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
export default class Bullet extends cc.Component {

    @property xSpeed: number = 0;
    @property ySpeed: number = 0;
    @property hpDrop: number = 0;

    //子弹发射声音
    @property(cc.AudioClip) audio: cc.AudioClip = null
    
    onLoad () {
        // cc.log('@@@@@@@@@@', this.name, this.node.name)
        cc.director.getCollisionManager().enabled = true;
        // cc.log('子弹创建成功')
        cc.audioEngine.playEffect(this.audio, false)
    }

    onCollisionEnter (other: cc.Collider, self: cc.Collider) {
        let en = other.node.getComponent('Enemy') 
        if (en.isDeid) {return}
        
        this.node.removeFromParent()
        this.destroy()
    }

    //dt = 0.016
    update(dt) {
        // this.node.x += dt * this.xSpeed
        this.node.y += dt * this.ySpeed
        // cc.log(dt, dt * this.ySpeed, this.node.y, this.node.parent.height)

        if (this.node.y > this.node.parent.height) {

            this.destroy()
        }
    }
}
