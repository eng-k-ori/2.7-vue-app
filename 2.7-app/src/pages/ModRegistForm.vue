<template>
  <div>
    <ModSignUpForm
      v-model:userName="userName"
      v-model:password="password"
      @register="register"
      @clear="clear"
    />
    <ModUserList v-model:userInfos="userInfos" />
    <ModComputedArea
      v-model:firstInputNum="firstInputNum"
      v-model:secondInputNum="secondInputNum"
    />
  </div>
</template>
<!-- ================================================================================================ -->
<script setup lang="ts">
import { ref, computed } from "vue";
import ModSignUpForm from "@/components/ModSignUpForm.vue";
import ModUserList from "@/components/ModUserList.vue";
import ModComputedArea from "@/components/ModComputedArea.vue";

// 各データをrefで定義
const userName = ref<string>("");
const password = ref<string>("");
const userInfos = ref<Array<string>>([]);

const firstInputNum = ref<number>(0);
const secondInputNum = ref<number>(0);

// 計算結果をリアクティブに管理
const sumNum = computed(() => firstInputNum.value + secondInputNum.value);

// ユーザーを登録する関数
function register() {
  userInfos.value.push(userName.value);
  console.log("登録が完了しました");
}

// 入力フィールドをクリアする関数
function clear() {
  userName.value = "";
  password.value = "";
  console.log("入力フィールドをクリアしました");
}
</script>

<style scoped>
div {
  background-color: lightpink;
  padding: 20px;
  border-radius: 8px;
}
</style>
