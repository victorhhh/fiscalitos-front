<template>
  <v-dialog
    persistent
    v-model="abrido"
    max-width="500px"
    transition="dialog-transition"
  >
    <v-card>
      <v-container fill-height>
        <v-row>
          <v-col>
            <v-card-title> <h1>Login</h1> </v-card-title>
            <template>
              <v-form v-model="valid" ref="form" lazy-validation>
                <v-text-field
                  rounded
                  outlined
                  label="Nickname"
                  v-model="name"
                  :rules="nameRules"
                  :counter="10"
                  required
                ></v-text-field>
                <v-text-field
                  rounded
                  outlined
                  label="E-mail"
                  v-model="email"
                  :rules="emailRules"
                  required
                ></v-text-field>
                <v-text-field
                  :type="text? 'text': 'password'"
                  error-count="10"
                  label="Password"
                  :append-icon="text?'mdi-eye-off':'mdi-eye'"
                  @click:append="() => (text = !text)"
                  v-model="password"
                  outlined
                  rounded
                ></v-text-field>

                <v-checkbox
                  label="Do you agree?"
                  v-model="checkbox"
                  :rules="[(v) => !!v || 'You must agree to continue!']"
                  required
                ></v-checkbox>
                <v-card-actions>
                  <v-btn @click="submit" :disabled="!valid"> submit </v-btn>
                  <v-btn @click="clear">clear</v-btn>

                  <v-spacer></v-spacer
                  ><v-btn color="primary" @click="$emit('cerrar', false)"
                    >Close</v-btn
                  >
                </v-card-actions>
              </v-form>
            </template>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Modal",
  props: {
    abrido: Boolean,
  },
  data: () => ({
    text: false,
    valid: true,
    name: "victor",
    nameRules: [
      (v) => !!v || "Nickname is required",
      (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
    ],
    email: "victor@fiscalito.com",
    emailRules: [
      (v) => !!v || "E-mail is required",
      (v) =>
        /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/.test(
          v
        ) || "E-mail must be valid",
    ],
    password: "fiscalito",
    checkbox: true,
  }),
  methods: {
  async submit() {
      if (this.$refs.form.validate()) {
       const user = await fetch("http://127.0.0.1:3000/hola")
        .then(response=>response.json())
        .then(data=>{
          this.$store.commit("set_user", data)
          return user;
        })
        .catch(error=>{console.log(error)});

        // console.log(this.$store.state.user.date)
        // null
        // undefined
        // false
        // 
        // 
        console.log(user)
        if(this.$store.state.user){
          this.$router.push("Dashboard")
        }
        
      }
    },
    clear() {
      this.$refs.form.reset();
    },
  },
  
};
</script>

<style>
</style>