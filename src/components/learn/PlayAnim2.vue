<script setup lang="ts">
import { ref } from "vue";
const show = ref<boolean>(false);
function on(): void {
  show.value = true;
}
</script>

<template>
  <button type="button" v-on:click="on()">X</button>
  <div title="toast" v-bind:class="show ? 'show' : ''">sssss</div>
</template>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@keyframes slideOut {
  from {
    transform: translate(0px);
  }
  to {
    transform: translate(512px);
  }
}

div {
  background-color: aquamarine;
  width: 480px;
  height: 72px;
  border-radius: 16px;
  position: fixed;
  top: 0px;
  right: 0px;
  margin: 16px;
  visibility: hidden;
}

.show {
  visibility: visible;
  animation-name: fadeIn;
  animation-duration: 4s;
  animation-name: slideOut;
  animation-duration: 2s;
}
</style>
