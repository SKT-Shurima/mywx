<template lang="html">
  <div class='wrap'>
    <dl class="tabs">
      <dt  @touchstart="tab=1;">
        <span :class='{"active":tab==1}'>农历查询</span>
      </dt>
      <dd @touchstart="tab=2;">
          <span :class='{"active":tab==2}'>公历查询</span>
      </dd>
    </dl>
    <dl class='opera'>
       <dt class="active">
         {{birth}}
       </dt>
       <dd>
         <mt-button type="primary" @click.native='openPicker'>选择日期</mt-button>
       </dd>
       <dd>
         <mt-button type="primary" :disabled='!birth' @touchstart.native='find'>点击查询</mt-button>
       </dd>
    </dl>
    <mt-datetime-picker
      type="date"
      :visible='visible'
      :startDate='new Date(1970,0,1)'
      ref='picker'
       @confirm="handleConfirm">
    </mt-datetime-picker>
  </div>
</template>

<script>
import { MessageBox } from 'mint-ui';
export default {
  data(){
    return{
      tab:1,
      visible: false,
      birth: '',
      pickval: ''
    }
  },
  methods:{
    openPicker(){
      this.$refs.picker.open();
    },
    handleConfirm(val){
      var y = val.getFullYear(),m=val.getMonth(),d=val.getDate(),t=val.getTime();
      var bol = this.tab==1?calendar.lunar2solar(y,m+1,d):1;
      if(bol<0){
        MessageBox({
          title: '提示',
          message: '您出生的这天地球上不存在',
          showCancelButton: true
        });
        return false;
      }
      function trans(val){
        val -= 0;
        if (val<10) {
          val = `0${val}`
        }
        return val;
      }
      y = trans(y),m = trans(m-0+1),d = trans(d);
      this.birth = `${y}-${m}-${d}`;
    },
    find(){
      this.$router.push({path: '/info', query:{t: this.birth}});
    }
  },
  mounted(){
    console.log(this.$alert)
  }
}
</script>

<style lang="scss" scoped>
  .tabs{
    overflow: hidden;
    height: 1rem;
    text-align: center;
    dt,dd{
      float: left;
      width: 50%;
      font-size: .3rem;
    }
    span{
      display: inline-block;
      line-height: .8rem;
    }
  }
  .active{
    color: #26a2ff;
    border-bottom: 2px solid #26a2ff;
  }
  .opera{
    margin-top: 1rem;
    font-size: .3rem;
    text-align: center;
    padding: 0 .5rem;
    dt{
      width: 50%;
      margin: 0 auto;
      height: 1rem;
      line-height: 1rem;
    }
    dd{
      margin-top: .5rem;
      button{
        width: 100%;
      }
    }
  }
</style>
