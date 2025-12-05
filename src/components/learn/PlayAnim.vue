<script setup lang="ts"></script>

<template>
  <div title="test anim"></div>
</template>

<style scoped>
@keyframes myAnimation {
  0% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
  25% {
    background-color: yellow;
    left: 200px;
    top: 0px;
  }
  50% {
    background-color: blue;
    left: 200px;
    top: 200px;
  }
  75% {
    background-color: green;
    left: 0px;
    top: 200px;
  }
  100% {
    background-color: red;
    left: 0px;
    top: 0px;
  }
}

div {
  width: 100px;
  height: 100px;
  position: relative;
  background-color: red;
  animation-name: myAnimation;
  animation-duration: 5s;
  animation-timing-function: linear;
  animation-delay: 2s;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}

p {
  animation: myAnimation 5s linear 2s infinite alternate;
}
</style>
