<template>
  <form @submit.prevent="emitRegister">
    <label for="userName">ユーザー名</label>
    <input
      id="userName"
      type="text"
      v-model="userNameProxy"
      placeholder="ユーザー名を入力"
      required
    />
    <button type="submit">登録</button>
    <button type="button" @click="emitClear">クリア</button>
  </form>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

// 親から受け取るプロパティを定義
const props = defineProps<{ modelValue: string }>();

// 親コンポーネントにイベントを送信するためのemit関数を定義
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "register"): void;
  (e: "clear"): void;
}>();

// v-model用のプロキシを作成
const userNameProxy = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

// 登録ボタンのイベントをemitする関数
function emitRegister() {
  emit("register");
  console.log("emitRegister発火"); // デバッグ用ログ
}

// クリアボタンのイベントをemitする関数
function emitClear() {
  emit("clear");
  console.log("emitClear発火"); // デバッグ用ログ
}
</script>

<style scoped>
form {
  margin-bottom: 10px;
}

input {
  margin-right: 10px;
  padding: 5px;
}

button {
  margin-left: 5px;
  padding: 5px 10px;
}
</style>
