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

// userInfosの型をinterfaceで定義
interface UserInfo {
  name: string;
  selection: string;
}

// propsの型を定義
interface UserListProps {
  userInfos: Array<UserInfo>;
}

// 分割代入でpropsを取得
const { userInfos } = defineProps<UserListProps>();
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
