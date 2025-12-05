<script setup lang="ts"></script>

<template>
  <div title="toast"></div>
</template>

<style scoped>
div {
  background-color: aquamarine;
  width: 480px;
  height: 72px;
  border-radius: 16px;
  position: fixed;
  top: 0px;
  right: 0px;
  margin: 16px;
  transition: transform 2s ease-in 1s;
}

div:hover {
  transform: translate(512px);
}
</style>
