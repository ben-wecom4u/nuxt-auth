<template>
  <div class="login-page container ">
    <div class="row justify-content-center">
      <div class="col-sm-6 col-12 content-shadow">
        <form @submit.prevent="login">
          <input-text-default
            name="email"
            v-validate="'required'"
            typeInput="text"
            v-model="form.email"
            text="Email">
          </input-text-default>
          <input-text-default
            name="password"
            v-validate="'required'"
            typeInput="password"
            v-model="form.password"
            text="Mot de passe">
          </input-text-default>
          <div class="form-group text-center">
            <input type="submit" class="btn btn-success" value="Login"/>
          </div>
        </form>

      </div>
    </div>

  </div>
</template>

<script>

    import InputTextDefault from '../components/common/InputTextDefault'

    export default {

        name: 'login',

        components: {
            InputTextDefault
        },

        data() {
            return {
                form: {
                    email: "",
                    password: ""
                }
            }
        },

        methods: {

            async login() {
                this.$validator.validateAll().then(async valid => {
                    if (valid) {
                        try {
                            await this.$auth.loginWith('local', {data: this.form});
                            //TODO router.push

                        } catch (e) {
                            console.log('oups erreur')
                        }
                    }

                });


            },

        }
    }
</script>

<style scoped lang="scss">
  .login-page {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;

    .content-shadow {
      box-shadow: 0 5px 8px 0 rgba(0, 0, 0, 0.2), 0 9px 26px 0 rgba(0, 0, 0, 0.19);
      border-radius: 10px;
      padding: 20px;
    }
  }
</style>
