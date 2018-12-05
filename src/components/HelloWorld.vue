<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
   
  </div>
</template>

<script>
import store from '@/vuex/store';
export default {
  
  name: 'HelloWorld',
  data () {
    return {
      msg:''
    }
  },
  store,
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
header{
  position:absolute;
  right:10px;
   margin-top:-2%;
}
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  color:red;
}
</style>
