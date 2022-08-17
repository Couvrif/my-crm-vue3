<template>
  <div class="home">
    <div>{{ msg }}</div>
    <div @click="log"></div>
  </div>
</template>

<script setup lang="ts">
const msg = 'Hello!'
// 函数
function log() {
  console.log(msg)
}
</script>
