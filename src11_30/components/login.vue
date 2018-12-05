<template>
    <div>
    <h2>{{msg}}</h2>
    <router-view/>
    </div>
</template>
<script>
export default{
    name:"login",
    data(){
        return{
            msg:"login page"
        }
    }
}
    
    
</script>
<style scoped>

</style>