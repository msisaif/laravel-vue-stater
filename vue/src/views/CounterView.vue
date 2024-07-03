<script setup>
import { useCounterStore } from "../stores/counter";

const counterStore = useCounterStore();
</script>

<template>
    <div>Counter: {{ counterStore.count }}</div>
    <button @click="counterStore.increment">+</button>
    <p>{{ counterStore.doubleCount }}</p>
</template>
