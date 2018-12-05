<template>
  <div class="hello">
    <h1>{{msg}}</h1>
    
    <!-- {{$store.state.author}}-->
    <header>
        <!--<el-menu default-active="1" unique-opened="true" menu-trigger="hover" mode="horizontal">
          <el-menu-item v-for="nav in navs" :index="nav.index">
            <span>{{nav.title></span>
          </el-menu-item>
        </el-menu>-->
        <el-input placeholder="请输入内容" v-model="inputTxt">
          <el-button slot="append" @click="setAuthor" icon="search">搜索</el-button>
        
        </el-input>
    </header>
  </div>
</template>

<script>
import store from '@/vuex/store';
export default {
  
  name: 'search',
  data () {
    return {
      msg: '',
      inputTxt:''
    }
  },
  store,
  methods: {
　setAuthor: function () {
　　　this.$store.state.author = this.inputTxt
　}
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  position:absolute;
  right:10px;
   margin-top:-2%;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  color:red;
}
</style>
