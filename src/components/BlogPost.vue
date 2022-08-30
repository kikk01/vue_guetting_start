<script>
export default {
  props: ['title'],
  emits: ['enlarge-text']

}
</script>

<template>
  <div class="tab">
    <h4>{{ title }}</h4>
    <button @click="$emit('enlarge-text')">Enlarge text</button>
  </div>
</template>