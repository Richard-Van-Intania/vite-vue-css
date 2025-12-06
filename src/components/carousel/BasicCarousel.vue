<script setup lang="ts">
import { computed, watch } from "vue";
import { monthNames } from "../../utilities";
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="flex flex-col items-center justify-center m-8">
    <div class="w-[1120px] h-[720px] bg-amber-100 flex items-center gap-4 carousel">
      <div v-for="(item, index) in monthNames" v-bind:key="index" v-bind:id="item" class="h-[640px] flex justify-center items-center text-9xl p-40 bg-amber-300 snap-center">{{ item }}</div>
    </div>
    <div class="flex m-4">
      <a v-for="(item, index) in monthNames" v-bind:key="index" v-bind:href="`#${item}`"> <Icon icon="ri:checkbox-blank-circle-fill" style="color: yellow; font-size: 32px" /></a>
    </div>
  </div>
</template>

<style scoped>
.carousel {
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
}
</style>
