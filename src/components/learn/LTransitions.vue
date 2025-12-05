<script setup lang="ts"></script>

<template>
  <div title="transitions allows you to change property values smoothly, over a given duration, transition is triggered when there is a change at run time">transition effect will start when the width property changes value at run time</div>
</template>

<style scoped>
div {
  width: 1500px;
  height: 500px;
  background-color: green;
  transition-property: width; /* property to make a transition */
  transition-duration: 2s; /* duration of play */
  transition-timing-function: ease-in-out; /* speed curve */
  transition-delay: 1s; /* a delay before play starts */
}

p {
  transition: width 3s linear 2s; /* short hand */
}
</style>
