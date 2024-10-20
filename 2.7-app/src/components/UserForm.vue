<template>
  <form @submit.prevent="submitForm">
    <label for="username">ユーザー名:</label>
    <input
      id="username"
      type="text"
      v-model="userName"
      @input="updateUserName($event.target.value)"
    />
    <br />
    <button type="button" @click="clearForm">クリア</button>
    <button type="submit">登録</button>
  </form>
</template>

<script setup lang="ts">
// ユーザー名の状態を保持する変数
import { ref, defineEmits } from "vue";
const userName = ref<string>("");

// 親にユーザー名を送信するためのemitイベントを定義
const emit = defineEmits(["add-user"]);

// 入力されたユーザー名を更新する関数
const updateUserName = (name: string) => {
  userName.value = name;
};

// フォームのクリア処理
const clearForm = () => {
  userName.value = "";
};

// フォーム送信時にemitで親にユーザー名を送信
const submitForm = () => {
  emit("add-user", userName.value);
  clearForm();
};
</script>
<style scoped>
form {background-color: lightcoral;}
</style>
