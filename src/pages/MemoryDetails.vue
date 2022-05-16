<template>
  <base-layout :page-title="loadedMemory ? loadedMemory.title : 'Loading...'">
    <h2 v-if="!loadedMemory">Could not find a memory with that id.</h2>
    <h2 v-else>Loaded it</h2>
  </base-layout>
</template>

<script>
export default {
  data() {
    return {
      memoryId: this.$route.params.id,
    };
  },

  computed: {
    loadedMemory() {
      return this.$store.getters.memory(this.memoryId);
    },
  },

  watch: {
    $route(currentRoute) {
      this.memoryId = currentRoute.params.id;
    },
  },
};
</script>

/* base layout is declared globally in main.js */