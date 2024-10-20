<template>
  <ul>
    <li
      v-for="(user, index) in userInfos"
      :key="index"
      :class="{ 'red-text': user.selection === 'momo' }"
    >
      {{ index + 1 }}: <span>{{ user.name }}</span> - 選択: {{ user.selection }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

// 親から受け取るuserInfosプロパティを定義
defineProps<{ userInfos: Array<{ name: string; selection: string }> }>();
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

/* momoを選択したユーザーの名前に赤色を適用 */
.red-text span {
  color: red;
  font-weight: bold;
}
</style>
