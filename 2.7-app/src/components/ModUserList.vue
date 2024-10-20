<template>
  <ul>
    <!-- v-forを使ってリアクティブなuserInfosを描画 -->
    <li v-for="(userInfo, id) in userInfos" :key="id">
      {{ id + 1 }}: {{ userInfo }}
    </li>
  </ul>
</template>
<!-- ================================================================================================ -->
<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from "vue";
// 親から受け取るpropsを定義
defineProps<{
  userInfos: Array<string>;
}>();

// 親へデータ更新を通知するemitを設定
const emit = defineEmits<{
  (e: "update:userInfos", value: Array<string>): void;
}>();

// userInfosのリアクティブな状態をrefで管理
const userInfos = ref<Array<string>>([]);

// 親から渡された初期値をwatchで監視し、同期
watch(
  () => userInfos.value,
  (newValue) => {
    emit("update:userInfos", newValue);
    console.log("userInfosが変更されました:", newValue);
  },
  { deep: true } // 配列の内容の変化も監視するためdeepオプションを有効化
);
</script>

<style scoped>
li {
  background-color: lightskyblue;
  margin: 5px;
  padding: 5px;
  border-radius: 4px;
}
</style>
