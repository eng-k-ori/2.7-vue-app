<template>
  <ul>
    <li v-for="(user, index) in props.users" :key="index">{{ user }}</li>
  </ul>
</template>

<script setup lang="ts">
// 親からユーザーリストを受け取るpropを定義
import { defineProps } from "vue";
const props = defineProps<{ users: string[] }>();
</script>

<style scoped>
li {background-color: lightseagreen;}
</style>
