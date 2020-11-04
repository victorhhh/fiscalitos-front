<template>
  <v-container fill-height>
    <v-row>
      <v-col cols="6">
        <v-card min-height="300" elevation="12">
          <v-container>
            <v-card-title primary-title>
              {{ this.$store.getters.get_user }}
            </v-card-title>
            {{ this.$store.state.saludo }}
            <v-text-field
              outlined
              placeholder="Usuario"
              v-model="user.usuario"
            ></v-text-field>
            <v-text-field
              type="password"
              outlined
              placeholder="Contraseña"
              v-model="user.contrasenia"
            ></v-text-field>
            <v-btn color="primary" @click="enviar()">Enviar</v-btn>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    user: {
      usuario: "",
      contrasenia: "",
    },
  }),
  methods: {
    enviar() {
      console.log(this.user);
      this.$store.commit("set_user", this.user);
      this.$store.commit("set_saludo", this.user.usuario);
      // this.$router.push("Register");
    },
  },
};
</script>
