<template>
<div class="bottom">
    <footer class="footer">
    <p>
    Copyright @{{$store.state.author}}--2018 All right reserved
    </p>
    </footer>
</div>
</template>
<script>
import store from '@/vuex/store';
export default{
    data(){
        return{
            msg:'',
        }
        
    },
    store
}
</script>
<style scoped>
    .bottom{
        position:absolute;
        left:0px;
        right:0px;
        width:100%;
        height:5%;
        
        z-index:-1;

        position:absolute;
        bottom:0px;
        background:#03406A;
    }
    .footer{
        
        index:2;
        color:grey;
    }
</style>