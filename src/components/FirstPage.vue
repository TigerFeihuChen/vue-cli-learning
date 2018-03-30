<template>
  <div class="first-page">
    <h1>Here is my first Vue component</h1>
    <div>{{msg}} - {{title}}</div>
    <div>The number of click is: {{numberOfClick}}
      <button v-on:click="addCount">Add one</button>
      <button v-on:click="resetCount">Reset</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FirstPage',
  data() {
    return {
      msg: 'Welcome to my first Vue component page.',
      numberOfClick: 0,
    };
  },
  methods: {
    addCount() {
      this.numberOfClick += 1;
    },

    resetCount() {
      this.numberOfClick = 0;
    },
  },
  props: ['title'],
};
</script>

<style scoped>

</style>
