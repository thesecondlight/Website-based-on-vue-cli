import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
const state={
    count:1,
    author:''
}
const mutations={
    add(state){
        state.count++;
    },
    reduce(state){
        state.count--;
    }
}
export default new Vuex.Store({
    //定义状态
    state:{
        count:1,
        author:'这是一个关于什么的网站'
    },
    mutations:{
        newAuthor(state,msg){
            state.author=msg;
        }
    }
})