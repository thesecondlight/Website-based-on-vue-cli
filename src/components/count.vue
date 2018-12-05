<template>
    <div class="a">
        <h2>{{msg}}</h2><hr/>
        <h3>{{$store.state.count}}</h3>
        <h3>{{$store.state.author}}</h3>
        <p>
            <button @click="$store.commit('add')">加法</button>
            <button @click="$store.commit('reduce')">减法</button>
        </p>
    </div>
</template>
<script>
import store from '@/vuex/store';
export default{
    data(){
        return{
            msg:'点击按钮更换查看',
        }
        
    },
    store
}
</script>
<style scoped>
    .a{
        index:2;
        color:red;
    }
</style>