<template>
    <div class="container">
        <div class="content">
            <form @submit.prevent="getUser">
                <label>Nome do usuário</label>
                <div style="display: flex; gap: 3px;">
                    <input class="form-control" v-model="formData.userName" required>
                    <button class="btn btn-dark" :disabled="!formData.userName" type="submit" >
                        Buscar
                    </button>
                </div>
            </form>
        </div>
        <div v-if="this.user || this.isLoading" class="content">
          <div v-if="this.isLoading">
            <div class="spinner-border text-dark" role="status"></div>
          </div>
          <div v-if="this.user">
              <h2>Usuário do GitHub</h2>
              <br/>
              <div class="details">
                  <div style="display: grid;">
                      <span>Nome: {{user?.name || "--"}}</span>
                      <span>Id: {{user?.id || "--"}}</span>
                      <span>Login: {{user?.login || "--"}}</span>
                      <span>Email: {{user?.email || "--"}}</span>
                      <span>Url: {{user?.url || "--"}}</span>
                  </div>
                  <div style="display: grid;">
                      <span>Nº de repositórios: {{user?.public_repos || "--"}}</span>
                      <span>Repositórios: {{user?.repos_url || "--"}}</span>
                      <span>Organizações: {{user?.organizations_url || "--"}}</span>
                  </div>
                  <div style="display: grid;">
                      <span>Tipo de conta: {{user?.type || "--"}}</span>
                      <span>Avatar: {{user?.avatar_url || "--"}}</span>
                      <span>Visibilidade: {{user?.user_view_type || "--"}}</span>
                  </div>
              </div>
          </div>
        </div>
    </div>
</template>

<script>
    import { reactive } from 'vue'
    import { api } from '../services/userService'

export default {
  name: 'User-Details',
  data() {
    return {
        formData: reactive({
            userName: ''
        }),
        user: null,
        isLoading: false,
        error: null
    }
  },
  methods: {
    async getUser() {
      this.isLoading = true;
      this.user = null;
        
      try {
        const data = await api.getUserDetails(this.formData.userName)
        this.user = data
        console.log(this.user)
      } catch (err) {
        this.error = err
      } finally {
        this.isLoading = false
      }
    }
  }
}

</script>

<style>
    .container{
        display: grid;
        align-items: center;
        padding: 0 20px;
    }

    .content{
        justify-content: space-between;
        margin-bottom: 2rem;
        width: auto;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        border-radius: 1rem;
        padding: 1rem;
    }

    .details{
        width: auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 50px;

        span {
            font-family: monospace;
        }
    }
</style>