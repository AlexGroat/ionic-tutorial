import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      memories: [
        {
          id: "1",
          title: "A trip to the mountains",
          image:
            "https://cdn.britannica.com/67/19367-050-885866B4/Valley-Taurus-Mountains-Turkey.jpg",
          description: "Was a nice trip",
        },
        {
          id: "2",
          title: "Surfing",
          image:
            "https://upload.wikimedia.org/wikipedia/commons/1/1e/2010_mavericks_competition.jpg",
          description: "Was some good waves",
        },
        {
          id: "3",
          title: "Good eating",
          image:
            "https://domf5oio6qrcr.cloudfront.net/medialibrary/10082/healthy-eating.jpg",
          description: "Yum",
        },
      ],
    };
  },
  getters: {
    memories(state) {
      return state.memories;
    },
    memory(state) {
      return (memoryId) => {
        return state.memories.find((memory) => memory.id === memoryId);
      };
    },
  },
});

export default store;
