<template>
  <div>
    <UserForm
      :modelValue="userName"
      @update:modelValue="userName = $event"
      @register="registerUser"
      @clear="clearUserName"
    />

    <!-- UserListを使用し、userListをpropsで渡す -->
    <UserList :userInfos="userList" />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import UserForm from "@/components/simple/UserForm.vue";
import UserList from "@/components/simple/UserList.vue";

// ユーザー名とユーザーリストを管理するref
const userName = ref<string>("");
const userList = ref<Array<string>>([]);

// 登録処理を行う関数
function registerUser() {
  console.log("registerUser"); // デバッグ用ログ
  if (userName.value.trim()) {
    userList.value.push(userName.value.trim());
    userName.value = "";
  }
}

// クリア処理を行う関数
function clearUserName() {
  console.log("clearUserName"); // デバッグ用ログ
  userName.value = "";
}
</script>

<style scoped>
div {
  padding: 20px;
}
</style>

<!-- <template>
  <div>
    <UserForm
      :modelValue="userName"
      @update:modelValue="userName = $event"
      @register="registerUser"
      @clear="clearUserName"
    />

    <ul>
      <li v-for="(user, index) in userList" :key="index">
        {{ index + 1 }}: {{ user }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import UserForm from "@/components/simple/UserForm.vue";

const userName = ref<string>("");
const userList = ref<Array<string>>([]);

function registerUser() {
  console.log("registerUser");
  if (userName.value.trim()) {
    userList.value.push(userName.value.trim());
    userName.value = "";
  }
}

function clearUserName() {
  console.log("clearUserName");
  userName.value = "";
}
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

div {
  padding: 20px;
}
</style> -->
