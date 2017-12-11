  <template>
    <div class="fullpage-container">
      <div class="fullpage-wp" v-fullpage="opts">
        <div class="page-1 page-view">
        	<div class="star-info">
        		<dl style='color:#26a2ff;'>
        			<dt>
        				<i class="icon iconfont icon-Taurus"></i>
        			</dt>
        			<dd>金牛座</dd>
        		</dl>
        		<div>
        			<i class="icon iconfont icon-heart primary"></i>
        		</div>
        		<dl class="primary">
        			<dt>
        				<i class="icon iconfont icon-Taurus"></i>
        			</dt>
        			<dd>金牛座</dd>
        		</dl>
        	</div>
        </div>
        <div class="page-2 page-view">
          	<p class="part-2" v-animate="{value: 'bounceInRight'}">vue-fullpage</p>
        </div>
        <div class="page-3 page-view">
          	<p class="part-3" v-animate="{value: 'bounceInLeft', delay: 0}">vue-fullpage</p>
          	<p class="part-3" v-animate="{value: 'bounceInRight', delay: 300}">vue-fullpage</p>
          	<p class="part-3" v-animate="{value: 'bounceInDown', delay: 600}">vue-fullpage</p>
          	<p class="part-3" v-animate="{value: 'zoomInDown', delay: 900}">vue-fullpage</p>
        </div>
      </div>
    </div>
  </template>

<script>
export default {
  data() {
    return {
       opts: {
          start: 0,
          dir: 'v',
          loop: false,
          duration: 300,
          beforeChange: function (prev, next) {
            console.log('before', prev, next)
          },
          afterChange: function (prev, next) {
            console.log('after', prev, next)
          }
        }
    }
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
    	padding-top: 50px;
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
</style>
