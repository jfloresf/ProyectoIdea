<template>
  <div class="home">
    <div class="container is-max-desktop">
      <div class="columns">
        <div class="column">
          <b-field label="Seleccionar Tema">
            <b-select v-model="theme" placeholder="Tema">
              <option :value="1">Blockchain</option>
              <option :value="2">Data Mining</option>
              <option :value="3">Mejora de Procesos</option>
              <option :value="4">Desarrollo Web</option>
              <option :value="5">Desarrollo Movil</option>
              <option :value="6">Data Science</option>
              <option :value="7">Machine Learning</option>
            </b-select>
          </b-field>
          <b-button @click="generateIdea()" type="is-primary"
            >Generar ideas
          </b-button>
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-field label="Idea">
            <b-input v-model="idea" :disabled="false" type="textarea"></b-input>
          </b-field>
          <div class="buttons">
            <b-button @click="insertIdea()" type="is-primary">Guardar</b-button>
            <b-button @click="deleteIdea()" type="is-danger">Eliminar</b-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {
  idea = "";
  theme = 1;

  insertIdea() {
    if (this.idea === "") {
      return;
    }
    localStorage.setItem(this.idea, this.idea);
    this.idea = "";
    this.$buefy.notification.open({
      message: "Se agrego correctamente.",
      type: "is-success",
      duration: 2000,
      position: "is-bottom-right"
    });
  }

  generateIdea() {
    const request = { theme: this.theme };
    Vue.axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    Vue.axios({
      method: "post",
      url: "http://192.168.0.104:8000/idea/generate-idea",
      data: request
    })
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
  }

  deleteIdea() {
    if (this.idea === "") {
      return;
    }
    this.idea = "";
    this.$buefy.notification.open({
      message: "Se elimino correctamente.",
      type: "is-danger",
      duration: 2000,
      position: "is-bottom-right"
    });
  }
}
</script>
