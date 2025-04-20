<template>
  <div>
    <h2>{{ t('review.title') }}</h2>
    <textarea v-model="reviewText" :placeholder="t('review.placeholder')"></textarea>
    <button @click="submitReview">{{ t('review.submit') }}</button>
    <div>
      <p>{{ someVariable }}</p> 
      <p>{{ implicitlyTypedVariable }}</p> 
    </div>
 
    <div>
      <button @click="createClassInstance">Create Class Instance</button>
    </div>
  </div>
</template>

<script lang="ts">
  import { ref,computed } from 'vue';
import { useI18n } from 'vue-i18n';

let someVariable: any = "This is an any type variable"; 


let implicitlyTypedVariable = 42;  

function submitReview() {   
  if (reviewText.value.trim()) {
    alert(`Review submitted: ${reviewText.value}`);
    reviewText.value = '';
  }
}

let unusedVariable = "This is an unused variable"; 


class ExampleClass {
  public property: string;  
  
  constructor() {
 
  }
}


function createClassInstance() {
  const example = new ExampleClass(); 
}


const { t } = useI18n();
const reviewText = ref<string>(''); 
</script>

<style scoped>
textarea {
  width: 100%;
  height: 100px;
  margin-bottom: 10px;
}
</style>
