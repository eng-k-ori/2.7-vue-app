<template>
  <form @submit.prevent="emitRegister">
    <div>
      <label for="userName">ユーザー名</label>
      <input
        id="userName"
        type="text"
        v-model="userNameProxy"
        placeholder="ユーザー名を入力"
        required
      />
    </div>
    <div>
      <label for="password">パスワード</label>
      <input
        id="password"
        type="password"
        v-model="passwordProxy"
        placeholder="パスワードを入力"
        required
      />
    </div>
    <div>
      <label for="selection">選択</label>
      <select id="selection" v-model="selectedValueProxy">
        <option value="momo">momo</option>
        <option value="koko">koko</option>
      </select>
    </div>
    <div>
      <button type="submit">登録</button>
      <button type="button" @click="emitClear">クリア</button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed } from "vue";

// 親から受け取るプロパティを定義
const props = defineProps<{
  modelValue: string;
  password: string;
  selectedValue: string;
}>();

// 親にイベントを送信するためのemit関数を定義
const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "update:password", value: string): void;
  (e: "update:selectedValue", value: string): void;
  (e: "register"): void;
  (e: "clear"): void;
}>();

// v-model用のプロキシを作成
const userNameProxy = computed({
  get: () => props.modelValue,
  set: (value) => emit("update:modelValue", value),
});

const passwordProxy = computed({
  get: () => props.password,
  set: (value) => emit("update:password", value),
});

const selectedValueProxy = computed({
  get: () => props.selectedValue,
  set: (value) => emit("update:selectedValue", value),
});

// 登録ボタンのイベントをemitする関数
function emitRegister() {
  if (!passwordProxy.value.trim()) {
    console.log("パスワードが必要です"); // デバッグ用ログ
    return;
  }
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

div {
  margin-bottom: 10px;
}

input,
select {
  margin-right: 10px;
  padding: 5px;
}

button {
  margin-left: 5px;
  padding: 5px 10px;
}
</style>
