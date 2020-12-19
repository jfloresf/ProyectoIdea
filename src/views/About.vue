<template>
  <div class="about">
    <div>
      <ul v-for="i in data" v-bind:key="i">
        <li>
          {{ i }}
        </li>
      </ul>
    </div>

    <div v-if="data.length === 0">
      <ul>
        <li>
          No hay ideas registradas.
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {}
})
export default class Home extends Vue {
  data = [];

  mounted() {
    this.allStorage();
  }

  allStorage() {
    this.data = [];
    const keys = Object.keys(localStorage);
    let i = keys.length;
    while (i--) {
      if (keys[i] != "loglevel:webpack-dev-server") {
        this.data.push((this.data.length + 1) + ": " + localStorage.getItem(keys[i]));
      }
    }
  }
}
</script>
