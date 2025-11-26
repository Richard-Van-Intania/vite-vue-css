<script setup lang="ts">
import { ref } from "vue";
const showDialog = ref<boolean>(false);
</script>

<template>
    <div class="fixed bottom-0 right-0 max-w-full max-h-full">
        <button type="button" class="bg-blue-500 px-8 py-4 rounded-full text-white font-medium text-2xl cursor-pointer shadow-lg m-10 z-10" v-on:click="showDialog = !showDialog">Show dialog</button>
    </div>
    <div class="fixed inset-0 max-w-full max-h-full bg-blk-op-50 justify-center items-center z-20" v-bind:class="[showDialog ? 'flex' : 'hidden']">
        <div class="h-36 w-72 bg-white z-50">holaaa</div>
    </div>
</template>

<style scoped></style>
