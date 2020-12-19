<template>
  <div class="home">
    <div class="container is-max-desktop">
      <div class="columns">
        <div class="column">
          <b-field label="Seleccionar Tema">
            <b-select v-model="theme" placeholder="Tema">
              <option :value="1">Tema 1</option>
              <option :value="2">Tema 2</option>
            </b-select>
          </b-field>
          <b-button @click="generateIdea()" type="is-primary"
            >Generar ideas</b-button
          >
        </div>
      </div>

      <div class="columns">
        <div class="column">
          <b-field label="Idea">
            <b-input v-model="idea" :disabled="true" type="textarea"></b-input>
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
  }

  generateIdea() {
    const request = { theme: this.theme };
    Vue.axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
    Vue.axios
      .post("http://127.0.0.1:8000/idea/generate-idea", request, {})
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.error("There was an error!", error);
      });
  }

  deleteIdea() {
    this.idea = "";
  }
}
</script>
