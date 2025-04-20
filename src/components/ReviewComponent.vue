<template>
  <div class="problem-container">
    <h1>{{ title }}</h1>
    <p>Issues found: {{ issueCount }}</p>
    
    <button @click="loadData">Load Data</button>
    <button @click="resetValues()">Reset</button>
    
    <ul>
      <li v-for="item in items" :key="item.id">
        {{ item.name }} - {{ item.status }}
        <button @click="processItem(item)">Process</button>
      </li>
    </ul>

    <div v-if="showDetails">
      <h2>{{ selectedItem!.name }}</h2>
      <p>{{ getDescription(selectedItem) }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue';

// Issue: Empty array without type annotation
let items = [];

// Issue: Empty object without type annotation
let config = {};

// Issue: Function without return type annotation or parameter types
function processData(data) {
  return data.map(item => {
    return {
      ...item,
      processed: true
    };
  });
}

// Issue: Using 'any' type
let cachedResponse: any = null;

// Issue: Using 'any[]' type
let eventLog: any[] = [];

export default defineComponent({
  name: 'ProblemComponent',
  
  setup() {
    // Issue: Variable with 'let' without type annotation
    let title = "TypeScript Issues Demo";
    
    // Issue: Variable with non-null assertion
    const element = document.querySelector('#app')!;
    
    // Issue: Type assertion
    const userData = JSON.parse(localStorage.getItem('user')) as object;
    
    // Issue: Double type assertion
    const config = localStorage.getItem('config') as unknown as { apiKey: string };
    
    // Issue: Arrow function without return type
    const calculateTotal = (items) => {
      return items.reduce((sum, item) => sum + item.price, 0);
    };
    
    // Issue: Vue computed property without return type
    const issueCount = computed(() => {
      return items.length;
    });
    
    // Issue: Empty array without type
    const selectedItems = ref([]);
    
    // Issue: Variable initialized with 'null' without type
    const selectedItem = ref(null);
    
    // Issue: Variable with 'undefined' without explicit type
    let lastProcessedId = undefined;
    
    // Issue: Bracket notation object access without proper typing
    function getPropertyValue(obj, key) {
      return obj[key];
    }
    
    // Issue: Method without return type
    function loadData() {
      fetch('https://api.example.com/data')
        .then(response => response.json())
        .then(data => {
          // Issue: Using 'any' implicitly
          items = data;
        });
    }
    
    // Issue: Function parameters without types
    function processItem(item) {
      selectedItem.value = item;
      lastProcessedId = item.id;
    }
    
    // Issue: Variable typed as 'undefined'
    let showDetails = ref(false);
    
    function resetValues() {
      selectedItem.value = null;
      showDetails.value = false;
    }
    
    // Issue: Function using parameter without type
    function getDescription(item) {
      if (item && item.description) {
        return item.description;
      }
      return "No description available";
    }

    return {
      title,
      items,
      issueCount,
      selectedItem,
      showDetails,
      loadData,
      processItem,
      resetValues,
      getDescription
    };
  }
});
</script>

<style scoped>
.problem-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

button {
  margin: 5px;
  padding: 8px 16px;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  padding: 10px;
  margin: 5px 0;
  background-color: #f5f5f5;
  border-radius: 4px;
}
</style>
