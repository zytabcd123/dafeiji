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

enum GameState {
    non,
    start,
    pause,
    over //结束
}

@ccclass
export default class Game extends cc.Component {
    
    @property(BulletGroup) bubbleGroup: BulletGroup = null
    @property(cc.Label) scoreLabel: cc.Label = null

    @property(cc.Float) bubbleRate: number = 1//子弹发射频率，默认间隔1秒发射

    state: GameState = GameState.start
    totalEnemy: number = 0
    scoreNum: number = 0
    
    bubbleTimeBlock = function () {
        this.bubbleGroup.createBullet()
    }
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
         this.timer()
    }

    timer() {
        this.schedule(this.bubbleTimeBlock, this.bubbleRate)
    }

    untimer() {
        this.unschedule(this.bubbleTimeBlock)
    }

    updateScore() {
        this.scoreNum += 1
        this.scoreLabel.string = this.scoreNum.toString()
    }

    switchBulletAction(event: Event, cusEvn: number) {

        this.bubbleGroup.bulletType = cusEvn
        cc.log('~~~~~~~~~~~~~~~~~~')
        cc.log(cusEvn)
    }

    pregameOver() {
        this.state = GameState.over
        this.untimer()
        this.saveScore()
    }

    gameOver() {
        cc.log('~~~~~~~~~~~~~~~~~~游戏结束')
        cc.director.loadScene('endScene');
    }

    saveScore() {
        var sk = 'score_0'
        var idx = 0

        let cds = cc.sys.localStorage.getItem('currentScore')
        if (cds != null) {
            let cd = JSON.parse(cds)
            idx = cd.idx + 1
            sk = 'score_' + idx

            cc.log(cd == null, cd.idx)
        }


        var sd = {
            'idx' : idx,
            'score' : this.scoreNum,
            'ctime' : this.format( new Date(), 'yyyy-MM-dd hh:mm:ss')
        }
        let ss  = JSON.stringify(sd)
        cc.sys.localStorage.setItem('currentScore', ss)
        cc.sys.localStorage.setItem(sk, ss)

        cc.log(sk, sd.idx, sd.score, sd.ctime)
    }

    format(time: Date,fmt: string) { //author: meizz 
        var o = {
            "M+": time.getMonth() + 1, //月份 
            "d+": time.getDate(), //日 
            "h+": time.getHours(), //小时 
            "m+": time.getMinutes(), //分 
            "s+": time.getSeconds(), //秒 
            "q+": Math.floor((time.getMonth() + 3) / 3), //季度 
            "S": time.getMilliseconds() //毫秒 
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (time.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    }
}
