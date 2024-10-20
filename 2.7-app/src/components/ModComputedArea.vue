<template>
  <div>
    <h3>ここは計算エリア</h3>
    <br />
    <!-- v-modelを使用して親子間のデータ同期 -->
    <input type="number" v-model="firstInputNum" />
    +
    <input type="number" v-model="secondInputNum" />
    =
    <input type="number" :value="sumNum" readonly />
  </div>
</template>
<!-- ================================================================================================ -->
<script setup lang="ts">
import { defineProps, defineEmits, ref, watch, computed } from "vue";
// 親から受け取るpropsとして初期状態を宣言
defineProps<{
  firstInputNum: number;
  secondInputNum: number;
}>();

// 親へデータ更新を通知するemitを設定
const emit = defineEmits<{
  (e: "update:firstInputNum", value: number): void;
  (e: "update:secondInputNum", value: number): void;
}>();

// 子側のリアクティブな状態を管理するためにrefを使用
const firstInputNum = ref<number>(0);
const secondInputNum = ref<number>(0);

// 入力値の変更を親に通知するwatchを設定
watch(firstInputNum, (newValue) => {
  emit("update:firstInputNum", newValue);
  console.log("firstInputNumが変更されました:", newValue);
});

watch(secondInputNum, (newValue) => {
  emit("update:secondInputNum", newValue);
  console.log("secondInputNumが変更されました:", newValue);
});

// 計算結果をリアクティブに表示するcomputedプロパティ
const sumNum = computed(() => firstInputNum.value + secondInputNum.value);
</script>

<style scoped>
input {
  margin: 5px;
}
</style>
