<script setup lang="ts">
import { ref } from "vue";
const showDialog = ref<boolean>(false);
</script>

<template>
    <div class="flex justify-end items-end min-h-lvh w-lvw">
        <button type="button" class="bg-blue-500 px-8 py-4 rounded-full text-white font-medium text-2xl m-10 z-10" v-on:click="showDialog = !showDialog">Show dialog</button>
    </div>
    <div class="fixed inset-0 w-full h-full bg-blk-op-50 justify-center items-center z-50" v-bind:class="[showDialog ? 'flex' : 'hidden']">
        <div class="h-36 w-72 bg-white">holaaa</div>
    </div>
</template>

<style scoped></style>
