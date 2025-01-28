<template>
    <base-layout  :page-title="'Add a Memory'"
      :page-default-back-link="'/memories'"
      >
      <create-memory-form @save-memory="saveMemory"></create-memory-form>
    </base-layout>
  </template>
  
  <script>
  import CreateMemoryForm from "../component/memories/CreateMemoryFrom.vue";
  
  export default {
    components: {
      CreateMemoryForm,
    },
    
    methods: {
      saveMemory(memoryData) {
        this.$store.dispatch('addMemory', memoryData);
        this.$router.replace('/memories');
      }
    }
  };
  </script>

<style scoped>
body{
    background-color: #4c4c4c;
}
h1{
    position: relative;
    font-size: 10em;
    letter-spacing: 10px;
    color: #385fa2;
    font-family: gill sans;
    width:100%;
    text-align: center;
    -webkit-box-reflect: below 1px linear-gradient(transparent,#000000);
    line-height: 0.70em;
    outline:none;
    animation: animate 5s linear infinite;
}
@keyframes animate
{
    0%,18%,20%,50.1%,60%,65.1%,80%,90.1%,92%
    {
        color: #385fa2;
        box-shadow: none;
    }
    18.1%,20.1%,30%,50%,60.1%,80.1%,90%,92.1%,100%
    {
        color: #90a5f7;
        text-shadow: 0 0 10px #311260 ,
        0 0 20px #311260 ,
        0 0 40px #311260 ,
        0 0 80px #311260 ,
        0 0 160px #311260 ,
    }
}
</style>