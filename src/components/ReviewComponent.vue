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

<script>
import { ref } from "vue";
import { useI18n } from "vue-i18n"; // Unused import
import { someUnusedFunction } from "./some-file"; // Unused import

export default defineComponent({
  setup() {
    const { t } = useI18n(); 
    const reviewText = ref(""); 
    const unusedVar = ref("This is an unused variable"); 
    const unusedFunctionVar = ref(
      "This is for a function that will never be called"
    );

    const submitReview = () => {
      if (reviewText.value.trim()) {
        alert(`Review submitted: ${reviewText.value}`);
        reviewText.value = "";
      }
    };

    const someUnusedFunction = () => {};

    return {
      reviewText,
      submitReview,
      someUnusedFunction, 
    };
  },
});
</script>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}
</style>
