<template>
 <div class="input-border" :style="{ width: width + 'px' }">
  <input :type="type" :placeholder="placeholder" :aria-label="ariaLabel" :pattern="pattern" :value="value"
   :readonly="readonly" :autofocus="autofocus"  />
  <Icons :name="iconName" />
 </div>
</template>
<script>
import Icons from "../Icons/Icons.vue";

export default {
 components: {
  Icons,
 },
 props: {
  type: String,
  placeholder: String,
  ariaLabel: String,
  pattern: String,
  value: String,
  readonly: Boolean,
  autofocus: Boolean,
  iconName: String,
  width: {
   type: [Number, String],
   default: 200
  }
 },
 mounted(){
  console.log(this.width);
  
 }
};
</script>
<style scoped>
.input-border {
 display: flex;
 background: #fff;
 border: 1px solid #D8E0F0;
 justify-content: flex-start;
 padding: 10px;
 border-radius: 8px;
 justify-content: space-between;
 gap: 10px;
}

input {
 background: none;
 width: 100%;
}
</style>
