<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from 'vue-router'

const route = useRoute()
</script>
<template>
  <div>
    <h1 class="text-lg text-blue-500">About page</h1>
    <p>{{ route }}</p>
  </div>
</template>
