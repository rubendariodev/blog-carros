import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    sampleBlogCards: [
      { blogTitle: "Blog Card #1", blogCoverPhoto: "car1", blogDate: "May 1, 2021"},
      { blogTitle: "Blog Card #2", blogCoverPhoto: "car2", blogDate: "May 1, 2021"},
      { blogTitle: "Blog Card #3", blogCoverPhoto: "car3", blogDate: "May 1, 2021"},
      { blogTitle: "Blog Card #4", blogCoverPhoto: "car4", blogDate: "May 1, 2021"},
      // Aqui estan todas las publicaciones del blog
    ],
    editPost: null,
  },
  mutations: {
    toggleEditPost(state, payload) {
      state.editPost = payload;
      console.log(state.editPost);
    }
  },
  actions: {
  },
  modules: {
  }
})