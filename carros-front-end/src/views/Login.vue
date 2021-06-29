<template>
  <div>
      <prev> {{user}} </prev>
      <form @submit.prevent="login">
          <input v-model="form.email" type="emal" placeholder="Email ..."> <br />
          <input v-model="form.password" type="password" placeholder="password..." />
          <br/>
          <button>Entrar</button>
      </form>
  </div>
</template>

<script>
import axios from "axios";
axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000/'; // definiendo la url
export default {
    data: () => ({
        user: {},
        form: {
            email: "prueba@hotmail.com",
            password: "password",
        }
    }),
    methods: {
        login() {
            axios.get("http://localhost:8000/sanctum/csrf-cookie").then(()  => {
     axios.post("/login", this.form).then(res => {
                console.log(res);
                /// protecion CSRF
            }); // haciendo post a la aplicacion de laravel
});
           
            // console.log("enviando login", this.form);
        }
    }

}
</script>

<style>

</style>