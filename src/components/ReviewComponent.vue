<template>
  <div>
    <h2>{{ t("review.title") }}</h2>
    <textarea
      v-model="reviewText"
      :placeholder="t('review.placeholder')"
    ></textarea>
    <button @click="submitReview">{{ t("review.submit") }}</button>
    <p>{{ unusedVar }}</p>
    <!-- used in template but not returned from setup -->
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useI18n } from "vue-i18n"; // Unused import
import { someUnusedFunction } from "./some-file"; // Unused import

const { t } = useI18n(); // Used, no issue
const reviewText = ref(""); // Used, no issue
const unusedVar = ref("This is an unused variable"); // Declared but not returned from setup
const unusedFunctionVar = ref(
  "This is for a function that will never be called"
); // Declared but not used anywhere

function submitReview() {
  if (reviewText.value.trim()) {
    alert(`Review submitted: ${reviewText.value}`);
    reviewText.value = "";
  }
}

function someUnusedFunction() {
  console.log("This function is never used.");
}
</script>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}
</style>
