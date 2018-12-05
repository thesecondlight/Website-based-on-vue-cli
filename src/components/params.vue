<template>
    <div>
    <h4>{{msg}}--{{$route.params.newsId}}--{{$route.params.newsTitle}}</h4>
    <router-view/>
    </div>
</template>
<script>
export default{
    name:"params",
    data(){
        return{
            msg:"params page"
        }
    }
}
    
    
</script>
<style scoped>
h4{
    z-index:2;
    color:black;
}
</style>