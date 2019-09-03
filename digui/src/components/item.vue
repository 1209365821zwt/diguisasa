<template>
  <div>
      <div  v-for="(item,index) in list" :key="index">
           <h3 @click="change(item)">{{item.filename}}</h3> 
           <item v-if="item.children" :list="item.children" v-show="item.flag"></item>
      </div>
     
  </div>
</template>

<script>
export default {
    name:"item",
   props:{
       list:Array
   },
   methods:{
       change(item){
        item.flag=!item.flag
       }
   }
}
</script>

<style>

</style>