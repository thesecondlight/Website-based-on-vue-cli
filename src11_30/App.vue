<template>
  <div id="app">
    <div id="top"> </div>
    <div id="font"><br/><br/>
      <router-link to="/" class="a">首页</router-link>&nbsp;&nbsp;
      
       <router-link to="/params/简介/hahahah" class="a">简介</router-link>&nbsp;&nbsp;
      <router-link to="/login" class="a">登录</router-link>&nbsp;&nbsp;
      
      <!--<router-link to="/login/x1" class="a">注意事项1</router-link>-->
      <router-link :to="{name:'注意事项1',params:{username:'注意事项1',id:'1'}}" class="a">*注意事项</router-link>&nbsp;&nbsp;
      <router-link to="/login/x2" class="a">*注销</router-link>&nbsp;
      <!--<p>{{$route.name}}</p>-->
       <router-link to="/goHome" class="a">返回首页</router-link>
       <router-link to="/goHome/891/i like bobo" class="a">goparams</router-link>
       <router-link to="/jsbupang" class="a">jsbupang</router-link>
    </div>
    <transition name="fade" mode="out-in">
    <router-view/>
    
    <div id="bottom">
    <router-view name="left" style="float:left;width:20%;height:100%;background-color:#3e94D1"/>
    <router-view name="right" style="float:right;width:80%;height:100%;background-color:#65A5D1"/>
    </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
  position:absolute;
  width:100%;
  height:100%;
  margin-top:0px;
  left:0px;
  right:0px;
}
#top{
  position:absolute;
  margin-top:-12px;
  left:0px;
  right:0px;
  width:100%;
  height:20%;
  background-color:#03406A;
  z-index:-1;
  
}
#font{
  font-size:22px;
}
#bottom{
  position:absolute;
  margin-top:3%;
  left:0px;
  right:0px;
  width:100%;
  height:85%;
  z-index:1
}
.a{
  text-decoration:none;
  color:white
}
.intro{
  text-decoration:none;

}
.fade-enter{
  opaciy:0;
}
.fade-leave{
  opacity:1;
}
.fade-enter-active{
  transition:opacity .5s;
}
.fade-leave-active{
  opacity:0;
  transition:opacity .5s;
}
</style>
