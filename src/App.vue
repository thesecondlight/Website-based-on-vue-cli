<template>
  <div id="app">
  
    <div id="top"> 
    <!--<button @click="goback">后退</button>
    <button @click="go">前进</button>
    <button @click="goHome">返回首页</button>
    <button @click="gologin">跳转到登陆页面</button>-->
    
    </div>
    <header>
        <!--<el-menu default-active="1" unique-opened="true" menu-trigger="hover" mode="horizontal">
          <el-menu-item v-for="nav in navs" :index="nav.index">
            <span>{{nav.title></span>
          </el-menu-item>
        </el-menu>-->
         <!--{{$store.state.author}}-->
        <el-input placeholder="请输入内容" v-model="inputTxt">
          <el-button slot="append" @click="setAuthor" icon="search">搜索</el-button>
        </el-input>
    </header>

    <div id="font"><br/><br/>
      <router-link to="/" class="a">首页</router-link>&nbsp;&nbsp;
      <!--<router-link to="/params/简介/hahahah" class="a">简介</router-link>&nbsp;&nbsp;-->
       <router-link to="/count" class="a">简介</router-link>&nbsp;&nbsp;
       <router-link to="/x1" class="a">暂定</router-link>&nbsp;&nbsp;
       <router-link to="/login" class="a">登录</router-link>&nbsp;&nbsp;
       <router-link to="/register" class="a">注册</router-link>&nbsp;&nbsp;
       <router-link to="/search" class="a"></router-link>
      <!--<router-link to="/login/x1" class="a">注意事项1</router-link>
      <router-link :to="{name:'注意事项1',params:{username:'注意事项1',id:'1'}}" class="a">*注意事项</router-link>&nbsp;&nbsp;
      <router-link to="/login/x2" class="a">*注销</router-link>&nbsp;-->
      <!--<p>{{$route.name}}</p>-->
       <router-link to="/goHome" class="a">返回首页</router-link>
      <!--<router-link to="/goHome/891/i like bobo" class="a">goparams</router-link>
       <router-link to="/jsbupang" class="a">jsbupang</router-link>-->
    </div>
    <div class="bottom">
    <footer class="footer">
      <p>
      Copyright @erzhang--2018 All right reserved
      </p>
    </footer>
    </div>
    <transition name="fade" mode="out-in">
    <router-view/>
    
    <!--<div id="bottom">
    <router-view name="left" style="float:left;width:20%;height:100%;background-color:#3e94D1"/>
    <router-view name="right" style="float:right;width:80%;height:100%;background-color:#65A5D1"/>
    </div>-->
    </transition>
  </div>
</template>

<script>
import store from '@/vuex/store';
export default {
  name: 'App',
  data:{
    inputTxt:''

  },
  store,
  methods:{
//     setAuthor: function () {
// 　　　this.$store.state.author = this.inputTxt
// 　  },
    setAuthor:function(){
      this.$store.commit('newAuthor',this.inputTxt)
    },
    goback(){
      this.$router.go(-1);
    },
    go(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push("/");
    },
    gologin(){
      this.$router.push({
        path:'/login?loginId=14'
      });
      // this.$router.push({
      //   path:'/login',
      //   query:{
      //     loginId:19

      //   }
      // });
    }
  }
}

</script>

<style>
@import 'assets/main.css'
</style>
