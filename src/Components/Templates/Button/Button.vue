<template >
 <button :title="title">
  {{ value }}
 </button>
</template>
<script>
export default {
 props:{
  value:{
   type:String,
   required:true,
   default:"Add project"
  },
  title:{
   type:String,
   default:""
  }
 },
}
</script>
<style >
 
</style>