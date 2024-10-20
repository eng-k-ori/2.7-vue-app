<template>
  <div>
    <UserForm
      :modelValue="userName"
      :password="password"
      :selectedValue="selectedValue"
      @update:modelValue="userName = $event"
      @update:password="password = $event"
      @update:selectedValue="selectedValue = $event"
      @register="registerUser"
      @clear="clearUserName"
    />

    <UserList :userInfos="userList" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import UserForm from "@/components/simple/UserForm.vue";
import UserList from "@/components/simple/UserList.vue";

// ユーザー名、パスワード、選択値、ユーザーリストを管理するref
const userName = ref<string>("");
const password = ref<string>("");
const selectedValue = ref<string>("momo");
const userList = ref<Array<{ name: string; selection: string }>>([]);

// 登録処理を行う関数
function registerUser() {
  console.log("registerUser"); // デバッグ用ログ
  if (userName.value.trim() && password.value.trim()) {
    userList.value.push({
      name: userName.value.trim(),
      selection: selectedValue.value,
    });
    userName.value = "";
    password.value = "";
  } else {
    console.log("ユーザー名とパスワードを入力してください");
  }
}

// クリア処理を行う関数
function clearUserName() {
  console.log("clearUserName"); // デバッグ用ログ
  userName.value = "";
  password.value = "";
  userList.value = [];
}
</script>

<style scoped>
div {
  padding: 20px;
}
</style>
