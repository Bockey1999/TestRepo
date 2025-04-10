<template>
  <div>
    <h2>{{ t('review.heading')  }}</h2>
    <textarea v-model="reviewText" :placeholder="t('review.placeholder')"></textarea>
    <button @click="submitReview">{{ t('submit') }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
const reviewText = ref('');

function submitReview() {
  if (reviewText.value.trim()) {
    alert(`Review submitted: ${reviewText.value}`);
    reviewText.value = t('review.delete');
    
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
