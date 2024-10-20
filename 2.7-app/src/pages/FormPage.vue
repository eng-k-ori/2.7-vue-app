<template>
  <div>
    <h1>フォーム</h1>
    <UserForm @add-user="addUser" />
    <UserList :users="users" />
  </div>
</template>

<script setup lang="ts">
// ユーザーリストを管理するための変数
import { ref } from "vue";
import UserForm from "@/components/UserForm.vue";
import UserList from "@/components/UserList.vue";

const users = ref<string[]>([]);

// UserFormからemitされたユーザー名をリストに追加する関数
const addUser = (newUser: string) => {
  if (newUser) {
    users.value.push(newUser);
  }
};
</script>

<style scoped>
h1 {
  color: #42b983;
}
</style>
