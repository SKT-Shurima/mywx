<template lang="html">
    <div class='wrap'>
        <header class="bg-primary header">
            星座<i class="icon iconfont icon-marry"></i>配对
        </header>
        <h1 class="title">
            <i class="icon iconfont icon-stars primary"></i>
        </h1>
        <dl class="info">
            <dt>
                <i class="icon iconfont icon-boy"></i>
            </dt>
            <dd>
                <mt-cell title="查询类型"><span style="margin-right: .2rem;">{{datetype1?'农历':'公历'}}</span><mt-switch v-model="datetype1"></mt-switch></mt-cell>
                <mt-cell title="出生日期" @click.native='openPicker(0)'><span v-if='!date1'>选择出生日期</span><span v-else>{{date1|date}}</span></mt-cell>
            </dd>
        </dl>
        <dl class="info">
            <dt>
                <i class="icon iconfont icon-girl primary"></i>
            </dt>
            <dd>
                <mt-cell title="查询类型"><span style="margin-right: .2rem;">{{datetype2?'农历':'公历'}}</span><mt-switch v-model="datetype2"></mt-switch></mt-cell>
                <mt-cell title="出生日期" @click.native='openPicker(1)'><span v-if='!date2'>选择出生日期</span><span v-else>{{date2|date}}</span></mt-cell>
            </dd>
        </dl>
        <div class="btn">
            <mt-button type="primary" :disable='!(date1&&date2)' @touchstart.native='find'>点击查询</mt-button>
        </div>
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
            datetype1: true,
            datetype2: true,
            date1: '',
            date2: '',
            sex: '',
            visible: true,
            birth: '',
            pickval: ''
        }
    },
    methods:{
        openPicker(type){
            this.sex= type;
            this.$refs.picker.open();
        },
        handleConfirm(val){
            var y = val.getFullYear(),m=val.getMonth(),d=val.getDate(),t=val.getTime(),bol;
            if (this.sex) {
                bol = this.datetype1?calendar.lunar2solar(y,m+1,d):1;
            }else{
                bol = this.datetype2?calendar.lunar2solar(y,m+1,d):1;
            }
            if(bol<0){
                MessageBox({
                    title: '提示',
                    message: '您出生的这天地球上不存在',
                    showCancelButton: true
                });
                return false;
            }
            if (this.sex) {
                this.date2 = val.getTime();
            }else{
                this.date1 = val.getTime();
            }
        },
        find(){
            this.$router.push({path: '/info', query:{date1: this.date1,type1:this.datetype1,date2:this.date2,type2:this.datetype2}});
        }
    }
}
</script>

<style lang="scss" scoped>
    .wrap{
        background-color: #fff;
    }
    .header{
        font-size: .3rem;
        line-height: 1rem;
        text-align: center;
        color: #fff;
        i{
            margin: 0px 10px;
        }
    }
    .title{
        text-align: center;
        i{
            font-size: 2rem;
        }
    }
    .info{
        display: -webkit-box;
        padding: 0px .3rem;
        margin-top: .5rem;
        dt{
            display: inline-block;
            width: 100px;
            height: 100px;
            line-height: 100px;
            text-align: center;
            i{
                font-size: 50px;
            }
            .icon-boy{
                color: #26a2ff;
            }
        }
        dd{
            -webkit-box-flex: 1;
        }
    }
    .btn{
        padding: 0px .3rem;
        margin-top: 1rem;
        button{
            width: 100%;
        }
    }
</style>
