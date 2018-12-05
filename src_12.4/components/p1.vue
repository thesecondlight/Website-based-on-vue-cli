<template>
    <div>
    <h4>{{msg}}</h4>
    <router-view/>
    </div>
</template>
<script>
export default{
    name:"p1",
    data(){
        return{
            msg:"侧栏导航"
        }
    }
}
    
    
</script>
<style scoped>

</style>