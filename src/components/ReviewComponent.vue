<template>
  <div>
    <h2>{{ t('review.title') }}</h2>
    <textarea v-model="reviewText" :placeholder="t('review.placeholder')"></textarea>
    <button @click="submitReview">{{ t('review.submit') }}</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

// Introduced issues:

// Issue 1: 'any' type usage
let someVariable: any = "This is an any type variable";

// Issue 2: Implicit 'any' (implicitly typed variable without type)
let implicitlyTypedVariable = 42;  // This should be typed

// Issue 3: Missing return type on function (submitReview)
function submitReview() {   // Missing return type
  if (reviewText.value.trim()) {
    alert(`Review submitted: ${reviewText.value}`);
    reviewText.value = '';
  }
}

// Issue 4: Unused variable
let unusedVariable = "This is an unused variable";

// Issue 5: Uninitialized public property in class
class ExampleClass {
  public property: string;  // Uninitialized public property
  
  constructor() {
    // Missing initialization of 'property'
  }
}

// Declare and initialize refs
const { t } = useI18n();
const reviewText = ref<string>('');  // Review text with explicit type annotation

</script>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}
</style>