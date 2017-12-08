<template>
  <div class="bg-primary wrap" @touchstart='next'>
    <h1>视野日志</h1>
    <h4>-简介-</h4>
    <p>视野日志是由37.3℃（Dean）开发的个人网站。本站于2017年10月建站，由于一直没有Good Idea，所以一直不知道怎么写些什么，因为这件事头疼了好些日子。于是乎做点小东西分享给大家。本站主要用于个人娱乐，不做任何商业用途（主要目前也没什么商业用途可做）。如果大家喜欢本站，欢迎各位江湖英雄美女动动手指头分享给你的好朋友，站长感激不尽。另外如果各路英雄美女有什么Good Idea，欢迎公众号留言。</p>
    <div class="tips">
      轻触继续
    </div>
    <footer class="footer">
        ©2017-2018.<a href="http://www.miitbeian.gov.cn/">浙ICP备17029193号-1</a>
    </footer>
  </div>
</template>

<script>
export default {
  methods:{
    next(){
      this.$router.replace('/search');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang='scss' scoped>
.wrap{
  position: relative;
  padding: .3rem;
  color: #fff;
}
h1,h4{
  text-align: center;
}
h1{
  padding: 1rem 0;
}
h4{
  font-size: .5rem;
}
p{
  position: absolute;
  top: 38%;
  text-indent: 2em;
  font-size: .26rem;
  line-height: .4rem;
  animation: topup 2s;
}
.tips{
  position: fixed;
  bottom: 10%;
  width: 100%;
  font-size: .2rem;
  text-align: center;
  animation: flashing 3s infinite;
}
.footer{
  position: fixed;
  bottom: .3rem;
  width: 100%;
  text-align: center;
  font-size: .12rem;
}
@keyframes topup {
  from {top: 100vh;opacity: 0;}
  to {top:38%;opacity: 1;}
}
@keyframes flashing {
  0%{opacity: 0;}
  50%{opacity: 1;}
  100%{opacity: 0;}
}
</style>
