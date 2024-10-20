<template>
  <ul>
    <li v-for="(user, index) in userInfos" :key="index">
      {{ index + 1 }}: {{ user }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

// 親から受け取るuserInfosプロパティを定義
defineProps<{ userInfos: Array<string> }>();
</script>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: lightblue;
  margin-bottom: 5px;
  padding: 5px;
  border-radius: 5px;
}
</style>
