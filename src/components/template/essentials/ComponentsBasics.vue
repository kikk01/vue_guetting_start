<script>

import ButtonCounter from '../../ButtonCounter.vue'
import BlogPost from '../../BlogPost.vue'
import AlertBox from '../../AlertBox.vue';

export default {
  components: {
    ButtonCounter,
    BlogPost,
    AlertBox
  },
  data() {
    return {
      currentTab: 'Home',
      tabs: ['ButtonCounter', 'BlogPost', 'AlertBox'],
      posts: [
        {id: 1, title: 'My journey with Vue'},
        {id: 2, title: 'Blogging with Vue'},
        {id: 3, title: 'WHy Vue is so fun'}
      ],
      postFontSize: 1
    }
  }
}
</script>

<template>
  <div class="demo">
    <button
      v-for="tab in tabs"
      :key="tab"
      :class="['tab-button', { active: currentTab === tab}]"
      @click="currentTab = tab"
    >
      {{ tab }}
    </button>
    <component :is="currentTab" class="tab"></component>
  </div>
  <div class="tab">
    <h1>Here are many child components</h1>
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />
    <ButtonCounter />
  </div>

  <div :style="{ fontSize: postFontSize + 'em' }">
    <BlogPost
        @enlarge-text="postFontSize += 0.1"
        v-for="post in posts"
        :key="post.id"
        :title="post.title"
    />
  </div>
  <AlertBox>
    Something bad happened
  </AlertBox>
</template>

<style>
.demo {
  font-family: sans-serif;
  border: 1px solid #eee;
  border-radius: 2px;
  padding: 20px 30px;
  margin-top: 1em;
  margin-bottom: 40px;
  user-select: none;
  overflow-x: auto;
}

.tab-button {
  padding: 6px 10px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  border: 1px solid #ccc;
  cursor: pointer;
  background: #f0f0f0;
  margin-bottom: -1px;
  margin-right: -1px;
}
.tab-button:hover {
  background: #e0e0e0;
}
.tab-button.active {
  background: #e0e0e0;
}
.tab {
  border: 1px solid #ccc;
  padding: 10px;
}
</style>