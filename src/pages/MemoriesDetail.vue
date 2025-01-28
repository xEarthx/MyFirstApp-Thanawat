<template>
    <base-layout
      :page-title="loadedMemory ? loadedMemory.title : 'Loading...'"
      page-default-back-link="/memories"
  
    >
      <h2 v-if="!loadedMemory">Could not find a memory for the given id.</h2>
      <memory-overview 
        v-else 
        :title="loadedMemory.title" 
        :image="loadedMemory.image" 
        :description="loadedMemory.description"
      ></memory-overview>
    </base-layout>
  </template>
  
  <script>
  import MemoryOverview from "../component/memories/MemoryOverview.vue";
  
  export default {
    components: {
      MemoryOverview,
    },
    data() {
      return {
        memoryId: this.$route.params.id, 
       
      };
    },
    computed: {
      loadedMemory() {
        return this.$store.getters.memoryById(this.memoryId);
      },
    },
    watch: {
      $route(currentRoute) {
        this.memoryId = currentRoute.params.id;
      },
    },
  };
  </script>

<style scoped>
ion-img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    margin-bottom: 1rem;
    border-radius: 10px 10px 10px 10px;
}
h2{
    font-size: 1.5rem;
    font-weight: bold;
    color:rgb(0, 0, 0);
}
p{
    font-size: 1rem;
    line-height: 1.5;
    color:black;
}


</style>