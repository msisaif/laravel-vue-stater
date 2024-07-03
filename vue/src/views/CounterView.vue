<script setup>
import { useCounterStore } from "../stores/counter";

const counterStore = useCounterStore();
</script>

<template>
    <div>Counter: {{ counterStore.count }}</div>
    <button @click="counterStore.increment" class="px-3 py-1 border rounded">+</button>
    <p>{{ counterStore.doubleCount }}</p>
</template>
