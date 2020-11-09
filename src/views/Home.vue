<template>
  <v-container fill-height>
    <v-row class="d-flex justify-center">
      <v-col cols="6">
        <v-hover v-slot="{hover}">
        <v-card :elevation="hover?24:5" min-height="200" class="transition-fast-in-fast-out">
          <v-container fill-height>            
              <v-row>
                <v-col class="d-flex justify-center">
                  <h1>
                    Fiscalgram
                    <span> <v-icon large>mdi-instagram</v-icon> </span>
                  </h1>
                </v-col>
              </v-row>
              <v-row
                ><v-col class="d-flex justify-center"
                  ><v-btn color="primary" @click="abrido = !abrido"
                    >Entrar</v-btn
                  >
                  <Modal
                  :abrido="abrido"
                  @cerrar="abrido = $event"
                ></Modal> </v-col
            ></v-row>
          </v-container>
        </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Modal from "@/components/Modal.vue";

export default {
  name: "Home",
  components: {
    Modal,
    // HelloWorld,
  },
  data: () => ({
    // formulario: null,
    abrido: false,
    // form: 1,
  }),
};
</script>
