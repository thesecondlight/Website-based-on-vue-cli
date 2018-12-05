<template>
	
   <div id="body"> <!--<span>{{$route.query.loginId}}</span>
    <router-view/>-->
 
<div id="login">
  
  <h1>登&nbsp;录</h1>
    
  <form>
    <input type="Email" placeholder="用户名" v-model="user"/>
    <input type="password" placeholder="密码" v-model="pwd"/>
    <input type="submit" value="登录" @click="c"/>
  </form>
	</div>

</div>
</template>
<router-view/>
<script>

export default {
  name: 'login',
  data () {
    return {    
      user:'',
	  pwd:'',
      check:false
    }
  },
  	methods:{
			c:function(){
				if((!this.user) || (!this.pwd))
				{
					alert("请输入用户名和密码...");

				}
				else{
					this.check=true
					alert("登录成功，跳转到首页...");
                    window.location.href="/"
				}
				
			}
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	  @import '../assets/login.css'
</style>
