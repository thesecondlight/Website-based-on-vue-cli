<template>
    <div>
    <h2>{{msg}}</h2>
    <router-view/>
    </div>
</template>
<script>
export default{
    name:"x2",
    data(){
        return{
            msg:"点击进行注销操作"
        }
    }
}
    
    
</script>
<style scoped>

</style>