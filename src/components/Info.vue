  <template>
    <div class="fullpage-container">
      <i class="v-icon v-icon-music" :class="{'v-icon-musicoff':music}" @touchstart='music=!music'></i>
				<audio src="../../static/media/music.mp3" id='audio' autoplay loop></audio>
      <div class="fullpage-wp" v-fullpage="opts">
        <div class="page-1 page-view">
        	<div class="star-info">
        		<dl style='color:#26a2ff;'>
        			<dt v-animate="{value: 'flip', delay: 0}">
        				<i class="icon iconfont" :class="'icon-'+boy.class" ></i>
        			</dt>
        			<dd v-text='boy.astro' v-animate="{value: 'slideInLeft', delay: 300}"></dd>
        		</dl>
        		<div>
        			<i class="icon iconfont icon-heart primary"></i>
        		</div>
        		<dl class="primary">
        			<dt v-animate="{value: 'lightSpeedIn', delay: 0}">
        				<i class="icon iconfont" :class="'icon-'+girl.class"></i>
        			</dt>
        			<dd v-text='girl.astro' v-animate="{value: 'slideInRight', delay: 300}"></dd>
        		</dl>
        	</div>
          <ul class="score">
            <li>
              <span>配对指数：</span><em><i class="v-icon"  :class="index<score.s/2?'v-icon-score10':score.s%1?'v-icon-score5':'v-icon-score0'"  v-for='(item,index) in 5'></i></em>
            </li>
            <li>
              <span>配对比重：</span><em>{{score.proportion}}</em>
            </li>
            <li>
              <span>两情相悦指数：</span><em><i class="v-icon"  :class="index<score.love_index?'v-icon-score10':'v-icon-score0'"  v-for='(item,index) in 5'></i></em>
            </li>
            <li>
              <span>天长地久指数：</span><em><i class="v-icon"  :class="index<score.long_index?'v-icon-score10':'v-icon-score0'"  v-for='(item,index) in 5'></i></em>
            </li>
            <li>
              <span>结果评述：</span><em v-if='score.s==10'>天生的一对</em>
              <em v-if='score.s==9'>非常理想的一对</em>
              <em v-if='score.s==8'>相当理想的一对</em>
              <em v-if='score.s==7'>还蛮不错的一对</em>
              <em v-if='score.s==6'>互相吸引又互相排斥的一对</em>
              <em v-if='score.s==5'>需要努力维持的一对</em>
              <em v-if='score.s==4'>前途不甚乐观的一对</em>
            </li>
          </ul>
        </div>
        <div class="page-2 page-view">
            <h1>恋爱建议</h1>
          	<p>{{res.suggest}}</p>
        </div>
        <div class="page-3 page-view">
            <h1>注意事项</h1>
            <p>{{res.note}}</p>
        </div>
      </div>
    </div>
  </template>
<script>
import {localReq} from '../assets/js/api';
export default {
  data() {
    return {
       query: {},
       opts: {
          start: 0,
          dir: 'v',
          loop: false,
          duration: 300
        },
        music: false,
        boy: {},
        bIndex: '',
        gIndex: '',
        api: '',
        girl: {},
        stars:[
        	{"name":"白羊座","index":"A","api":"aries"},
        	{"name":"金牛座","index":"B","api":"taurus"},
        	{"name":"双子座","index":"C","api":"gemini"},
        	{"name":"巨蟹座","index":"D","api":"cancer"},
        	{"name":"狮子座","index":"E","api":"leo"},
        	{"name":"处女座","index":"F","api":"virgo"},
        	{"name":"天秤座","index":"G","api":"libra"},
        	{"name":"天蝎座","index":"H","api":"scorpio"},
        	{"name":"射手座","index":"I","api":"sagittarius"},
        	{"name":"摩羯座","index":"J","api":"capricorns"},
        	{"name":"水瓶座","index":"K","api":"aquarius"},
        	{"name":"双鱼座","index":"L","api":"pisces"}
        ],
        scores:[{
        	s: 8,
        	proportion: "50:50",
        	love_index: 4,
        	long_index: 4
        },{
        	s: 7,
        	proportion: "54:46",
        	love_index: 4,
        	long_index: 3
        },{
        	s: 9,
        	proportion: "44:56",
        	love_index: 5,
        	long_index: 4
        },{
        	s: 5,
        	proportion: "58:42",
        	love_index: 3,
        	long_index: 2
        },{
        	s: 10,
        	proportion: "48:52",
        	love_index: 5,
        	long_index: 5
        },{
        	s: 4,
        	proportion: "40:60",
        	love_index: 2,
        	long_index: 2
        },{
        	s: 6,
        	proportion: "50:50",
        	love_index: 4,
        	long_index: 2
        },{
        	s: 4,
        	proportion: "60:40",
        	love_index: 2,
        	long_index: 2
        },{
        	s: 10,
        	proportion: "52:48",
        	love_index: 5,
        	long_index: 5
        },{
        	s: 5,
        	proportion: "42:58",
        	love_index: 3,
        	long_index: 2
        },{
        	s: 9,
        	proportion: "56:44",
        	love_index: 5,
        	long_index: 4
        },{
        	s: 7,
        	proportion: "46:54",
        	love_index: 4,
        	long_index: 3
        }],
        score: '',
        res: {}
    }
  },
  watch:{
      music(val){
        var audio = document.getElementById('audio');
        if (val) {
          audio.pause()
        }else{
          audio.play();
        }
      }
  },
  methods:{
    init(){
      var stars = this.stars;
      var bBirth = new Date(this.query.date1-0),gBirth = new  Date(this.query.date2-0);
      var by = bBirth.getFullYear(),bm=bBirth.getMonth(),bd=bBirth.getDate(),gy = gBirth.getFullYear(),gm=gBirth.getMonth(),gd=gBirth.getDate()
      if (this.query.type1=='true') {
        this.boy = calendar.lunar2solar(by,bm+1,bd);
      }else{
        this.boy = calendar.solar2lunar(by,bm+1,bd);
      }
      if (this.query.type2=='true') {
        this.girl = calendar.lunar2solar(gy,gm+1,gd);
      }else{
        this.girl = calendar.solar2lunar(gy,gm+1,gd);
      }
      var bAstro = this.boy.astro,gAstro = this.girl.astro;
      for(let i = 0;i<stars.length;i++){
        if (bAstro==stars[i].name) {
          this.bIndex = stars[i].index;
          this.api = stars[i].api;
          this.boy.class = stars[i].api;
          break;
        }
      }
      var scores = this.scores;
      var startIndex = this.bIndex.charCodeAt()-65;
      for (let k = 0; k < startIndex; k++) {
        scores.unshift(scores.pop());
      }
      for(let j = 0;j<stars.length;j++){
        if (gAstro==stars[j].name) {
          this.gIndex = stars[j].index;
          this.girl.class = stars[j].api;
          this.score = scores[j];
          break;
        }
      }

      localReq(this.api).then(res=>{
        this.getInfo(this.bIndex+this.gIndex,res);
      })
    },
    getInfo(index,res){
      for (let i = 0; i < res.length; i++) {
         if (index==res[i].key) {
          this.res = res[i];
          return;
         }
      }
    },
    conmusic(that){
      console.log(that)
    }
  },
  mounted(){
    this.$nextTick(()=>{
       this.query = getRequest();
       this.init();
    })
  }
}
</script>

<style lang="scss" scoped>
.fullpage-container {
  	height: 100vh;
  	.page-view {
	    display: block;
	    text-align: center;
	    font-size: 26px;
	    color: #eee;
	    background: url(../../static/img/bg.jpg) no-repeat;
	    background-size: cover;
  	}
  	.page-1 {

    	padding-top: 100px;
  	}
  	.page-2 {
    	padding-top: 100px;
  	}
  	.page-3 {
    	padding-top: 100px;
  	}
    p{
      text-indent: 2em;
      font-size: .3rem;
      text-align: left;
      line-height: .4rem;
      margin-top: .2rem;
      padding: 0px .3rem;
    }
}
.star-info{
	display: flex;
	justify-content: space-around;
	padding: 0px .6rem;
	overflow: hidden;
	dl,div{
		float: left;
	}
	dt{
		margin-bottom: .3rem;
		i{
			font-size: .8rem;
		}
	}
	.icon-heart{
		font-size: 1rem;
	}
}
.score{
  width: 60%;
  margin: 1.5rem auto 0px;
  text-align: left;
  font-size: .3rem;
  line-height: .6rem;
  li{
    margin-bottom: .2rem;
  }
}
#audio{
  display: none;
}
</style>
