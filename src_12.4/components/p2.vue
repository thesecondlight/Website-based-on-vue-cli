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
            msg:"内容"
        }
    }
}
    
    
</script>
<style scoped>

</style>