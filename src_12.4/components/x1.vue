<template>
    <div>
    <!--<h4>{{$route.params.id}}--{{$route.params.username}}</h4>
    *{{msg}}<br/>
    *{{msg2}}</h4>-->
    <router-view/>
    </div>
</template>
<script>
export default{
    name:"x1",
    data(){
        return{
            msg:"建议使用手机号注册，方便密码找回",
            msg2:"密码需要含有数字字母或特殊字符"
        }
    }
}
    
    
</script>
<style scoped>

</style>