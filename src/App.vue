<template >
  <div>
    <div class="color-1 text-5">Assalomu alaykum</div>
    <Button class="icon info" IconName="PlusIcon"/>
    <Input placeholder="Enter problem" value="+998" :width="500" iconName="EyeOpenIcon"/>
  </div>
</template>
<script>
import Button from './Components/Templates/Button/Button.vue';
import Input from './Components/Templates/Input/Input.vue';

export default {
  components:{
    Button,
    Input,

  }
}
</script>
<style >
  
</style>