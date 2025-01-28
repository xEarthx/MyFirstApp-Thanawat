import { createStore } from 'vuex';

const store = createStore({
    state() {
        const storedMemories = localStorage.getItem('memories');
        return{
            memories: storedMemories ? JSON.parse(storedMemories) : [
                {
                    id:"m1",
                    image:"https://www.khaosod.co.th/wpapp/uploads/2024/01/%E0%B8%99%E0%B8%B2%E0%B8%A2%E0%B8%81-3.jpg",
                    title:"มากินเข้านำกันจ้าอ้าย",
                    description:"กินเข่าแซบๆ"
                },
                {
                    id:"m2",
                    image:"https://assets.brandinside.asia/uploads/2019/09/006.jpg",
                    title:"งานอดิเรกของหนู",
                    description:"ลากหัวฟีฟายโหดๆคมๆ"
                },
                {
                    id:"m3",
                    image:"https://www.manarom.com/blog/img/Health_benefits_of_sleep_detail.jpg",
                    title:"การนอน",
                    description:"หลับตลอด24ชม."
                },
                {
                    id:"m4",
                    image:"https://i.pinimg.com/originals/2a/33/fd/2a33fd30020c9fe624950d7ec93ea121.jpg",
                    title:"กานแปงร่างของฉัน",
                    description:"โหดมากหมาป่าเดียวดาย"
                },
            ]
        }
    },
    mutations: {
        addMemory(state, memoryData) {
          const newMemory = {
            id: new Date().toISOString(),
            title: memoryData.title,
            image: memoryData.imageUrl,
            description: memoryData.description,
        };
    
          state.memories.unshift(newMemory);
          // Persist the updated memories list to localStorage
          localStorage.setItem('memories', JSON.stringify(state.memories));
    },
    },
      actions: {
        addMemory(context, memoryData) {
          context.commit("addMemory", memoryData);
     },
    },
      getters: {
        memories(state) {
          return state.memories;
    },
        memoryById(state) {
          return (memoryId) => {
            return state.memories.find((memory) => memory.id === memoryId);
        };
    },
    },
});
    
export default store;