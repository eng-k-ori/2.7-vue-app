<template>
  <form @submit.prevent="handleRegister">
    <label>ユーザー名</label>
    <!-- v-modelで親子間のデータ同期 -->
    <input v-model="userName" type="text" id="userName" required />
    <br />
    <label>パスワード</label>
    <input v-model="password" type="password" id="password" required />
    <br />
    <button type="submit">登録</button>
    <br />
    <button type="button" @click="handleClear">クリア</button>
  </form>
</template>
<!-- ================================================================================================ -->
<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from "vue";
// 子コンポーネントが親の状態に直接アクセスするためのprops
defineProps<{
  userName: string;
  password: string;
}>();

// イベントをemitするための機能
const emit = defineEmits<{
  (e: "register"): void;
  (e: "clear"): void;
}>();

// 子側の状態を管理する変数をrefで宣言
const userName = ref<string>("");
const password = ref<string>("");

// 親から渡された初期値を監視して同期する
watch(
  () => userName.value,
  (newValue) => {
    console.log("userNameが変更されました:", newValue);
  }
);

// 登録ボタンのクリック時に発火する関数
function handleRegister() {
  emit("register");
  console.log("handleRegisterが発火");
}

// クリアボタンのクリック時にフィールドをクリアする関数
function handleClear() {
  userName.value = "";
  password.value = "";
  emit("clear");
  console.log("handleClearが発火");
}
</script>

<style scoped>
form {
  background-color: limegreen;
}
</style>
