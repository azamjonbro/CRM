<template>
 <div v-html="getIcon(name)" style="cursor: pointer; display: flex; align-items: center" v-if="iconExists"></div>
</template>

<script>
export default {
 name: "IconComponent",
 props: {
  name: {
   type: String,
   required: true,
  },
 },
 data() {
  return {
   icons: {
    PlusIcon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9933 5.88338C12.9355 5.38604 12.5128 5 12 5C11.4477 5 11 5.44772 11 6V11H6L5.88338 11.0067C5.38604 11.0645 5 11.4872 5 12C5 12.5523 5.44772 13 6 13H11V18L11.0067 18.1166C11.0645 18.614 11.4872 19 12 19C12.5523 19 13 18.5523 13 18V13H18L18.1166 12.9933C18.614 12.9355 19 12.5128 19 12C19 11.4477 18.5523 11 18 11H13V6L12.9933 5.88338Z" fill="white"/>
</svg>`,
   },
  };
 },
 computed: {
  iconExists() {
   return !!this.icons[this.name];
  },
 },
 methods: {
  getIcon(name) {
   return this.icons[name] || `<span>Icon not found</span>`;
  },
 },
};
</script>

<style scoped></style>
