<template>
 <div class="alert tab">
   <strong>This is an error for Demo Purpose</strong>
   <br>
   <slot />
 </div>
</template>

<script>
export default {
  name: "AlertBox"
}
</script>

<style scoped>
  .alert {
    color: red;
    border: 1px solid red;
  }
</style>