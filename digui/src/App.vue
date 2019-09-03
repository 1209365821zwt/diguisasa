<template>
  <div id="app">
    <Item :list="list"></Item>
  </div>
</template>

<script>
import "../src/mock/mock"
import Item from "../src/components/item"
export default {
  name: 'app',
  data(){
   return {
    list:[]
   }
  },
  components: {
    Item
  },
  created(){
    this.$http.get('/list').then(res=>{
      console.log(res.data.list)
      this.list=res.data.list
    })
  }
}
</script>

<style lang="scss">
#app {
}
</style>
