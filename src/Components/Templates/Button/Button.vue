<template >
 <button class="d-flex a-center gap-2" :title="title" :aria-label="ariaLabel">
  <Icons :name="IconName"/>
  {{ value }}
 </button>
</template>
<script>
import Icons from '../Icons/Icons.vue';

export default {
 components:{
  Icons
 },
 props:{
  value:{
   type:String,
   default:""
  },
  title:{
   type:String,
   default:""
  },
  ariaLabel:{
   type:String,
   default:""
  },
  IconName:{
   type:String
  }
 },
}
</script>
<style >
 
</style>