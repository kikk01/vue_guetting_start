<template>
    <input ref="input">
    <ul>
      <li v-for="item in list" ref="items">{{ item }}</li>
    </ul>
</template>

<script>
export default {
  data() {
    return {
      list: [
          1, 'test',2,3,4
      ]
    }
  },
  mounted() {
    this.$refs.input.focus()
    console.log(this.$refs.items)
  }
}
</script>

<style scoped>

</style>