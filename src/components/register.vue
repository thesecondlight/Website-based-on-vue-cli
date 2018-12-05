<template>
	
<div id="body">
 
  <div id="login">
  
  <h1>注&nbsp;册</h1>
  <form>
    <input type="Email" placeholder="用户名" v-model="user"/>
    <input type="password" placeholder="密码" v-model="pwd"/>
    <input type="text" placeholder="电话号码 *非必填" v-model="number"></input>
    <input type="text" placeholder="地址 *非必填" v-model="address"/>
    <input type="submit" value="注册" @click="c"/> <router-view></router-view>      
  </form>
   <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <font size="2px" color="grey" @click="attention">*注意事项 </font></span>
	</div>
 
</div>
</template>

<script>

export default {
  name: 'register',
  data () {
    return {    
      user:'',
			pwd:'',
      number:'',
      address:'',
      check:false
    }
  },
  	methods:{
			c:function(){
				if((!this.user) || (!this.pwd ))
				{
					alert("请输入用户名和密码...");

				}
				else{
					this.check=true;
					alert("验证成功，正在跳转登录页面...");
                    window.location.href='http://localhost:8080/login#/login';
				}
				
			},
            attention(){
                alert("建议使用手机号注册，方便密码找回");
            }
		}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	  @import '../assets/login.css'
</style>
