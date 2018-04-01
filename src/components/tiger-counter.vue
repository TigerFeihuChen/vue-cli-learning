<template>
  <div class="tiger-counter">
    <div>The number of click is: {{numberOfClick}}
      <button v-on:click="addCount" v-bind:disabled="this.disabled">Add one</button>
      <button v-on:click="resetCount" v-bind:disabled="this.disabled">Reset</button>
    </div>
    <div v-if="showWarning">{{warningMessage}}</div>
  </div>
</template>

<script>
export default {
  name: 'tiger-counter',
  props: {
    startWith: {
      type: Number,
      default: 0,
      validator(value) {
        // Note that props are validated before a component instance is created,
        // so instance properties (e.g. data, computed, etc)
        // will not be available inside default or validator functions.

        // this.warningMesage = 'You must enter an integer';
        return Number.isInteger(value);
      },
      message: 'You must enter an integer',
    },

    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      numberOfClick: this.startWith,
      showWarning: false,
      warningMessage: '',
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
};
</script>

<style scoped>
  @import './base-style.css'
</style>
