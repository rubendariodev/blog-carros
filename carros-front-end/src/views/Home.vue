<template>
  <div class="home">
   <BlogPost :post="welcomeScreen" /> <!--  linkeando welcomescreen abajo al blogpost -->
   <BlogPost :post="post" v-for="(post, index) in sampleBlogPost" :key="index"/>
   <div class="blog-card-wrap">
     <div class="container">
       <h3>VER MAS RECIENTES</h3>
       <div class="blog-cards">
       <BlogCards :post="post" v-for="(post, index) in sampleBlogCards" :key="index" />
       </div>
     </div>
   </div>
   <div class="updates">
     <div class="container">
       <h2>NUNCA TE PIERDAS UNA PUBLICACION</h2>
       <router-link class="router-button" to="#">
         Dale Click Aqui Para registrarte <Arrow class="arrow arrow-light" />
       </router-link>
     </div>
   </div>
  </div>
</template>

<script>
import BlogPost from "../components/BlogPost";
import BlogCards from "../components/BlogCards";
import Arrow from "../assets/Icons/arrow-right-light.svg"
export default {
  name: "Home",
  components: { BlogPost, BlogCards, Arrow},
  data() {
    return {
      // arrays y data para el
      welcomeScreen: {
        title: "Bienvenido",
        blogPost:
        "Aqui encontraras articulos para mejorar tu carro",
        welcomeScreen: true,
        photo: "dirt",
      },
      sampleBlogPost: [
        {
          title: "Prueba de Titutolo",
          blogHTML: "Otra Prueba de Titulo Numero Dos",
          blogCoverPhoto: "lambo"
        },
        {
          title: "Prueba de Titutolo",
          blogHTML: "Otra Prueba de Titulo",
          blogCoverPhoto: "nature"
        },
      ],
    };
  },
  computed: {
    sampleBlogCards() {
      return this.$store.state.sampleBlogCards;
    }
  }
};
</script>

<style lang="scss" scoped>
.blog-card-wrap {
  h3 {
    font-weight: 300;
    font-size: 28px;
    margin-bottom: 32px;
  }
}

.updates {
  .container {
    padding: 100px 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    @media(min-width: 800px) {
      padding: 125px 25px;
      flex-direction: row;
    }

    .router-button {
      display: flex;
      font-size: 14px;
      text-decoration: none;
      @media(min-width: 800px) {
        margin-top: auto;
      }
    }

    h2 {
      font-weight: 300;
      font-size: 32px;
      max-width: 425px;
      width: 100%;
      text-align: center;
      text-transform: uppercase;
      @media(min-width: 800px) {
        text-align: initial;
        font-size: 40px;
      }
    }
  }
}

</style>