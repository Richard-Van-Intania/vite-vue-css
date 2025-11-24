<script setup lang="ts">
import { ref } from "vue";

const show = ref<boolean>(false);
</script>

<template>
    <button type="button" v-on:click="show = !show">Click Me!</button>
    <div class="fixed inset-0 w-full h-full bg-blk-op-50 justify-center items-center z-50" v-bind:class="[show ? 'flex' : 'hidden']">
        <div class="flex justify-center items-center w-96 h-52 bg-amber-200 rounded-4xl"><button type="button" v-on:click="show = !show">Click Me!</button></div>
    </div>
</template>

<style scoped></style>
