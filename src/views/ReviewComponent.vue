<template>
  <div>
    <h1>hello</h1>
    <h2>{{ t("review.title") }}</h2>

    <textarea
      v-model="reviewText"
      :placeholder="t('review.placeholder')"
    ></textarea>
    <button @click="submitReview">{{ t("submit") }}</button>

    <textarea v-model="reviewText" label="label ssue test" />

    <textarea v-model="reviewText" placeholder="place holder issue" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();
const reviewText = ref("how you doing?");

function submitReview() {
  if (reviewText.value.trim()) {
    reviewText.value = t("review.delete");
  }
}
</script>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}
</style>
