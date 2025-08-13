<template>
    <div class="container">
        <div class="head">
            <h3>Lista de Usuários</h3>
        </div>
        <br/>
        <div v-if="list_data.length <= 0 && !isLoading">
            <h4>Nenhum dado encontrado! :(</h4>
        </div>
        <div v-if="list_data.length <= 0 && isLoading">
            <div class="spinner-border text-dark" role="status"></div>
        </div>
        <div class="card-container" v-for="user in this.list_data" :key="user.id">
            <div class="card-content" role="user-card" >
                <div style="display:flex; align-items: center; gap:20px; width: 100%">
                    <img class="rounded-circle float-start" style="width: 100px" :src="user?.avatar"/>
                    <h4>{{user?.name}}</h4>
                </div>
                <div class="card-content">
                    <button class="btn btn-dark" @click="openEditModal(user)" title="Editar" style="width: 50px;">
                        <i class="bi bi-pencil-square"></i>
                    </button>
                    <button class="btn btn-outline-dark" @click="deleteUser(user.id)" title="Deletar" style="width:50px;">
                        <i class="bi bi-trash3"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>

    <EditModal
        :showModal="this.showModal"
        :user="this.selectedUser"
        @close="this.showModal = false"
        @hidden="getUsers"
    />
</template>

<script>
    import EditModal from '@/components/EditModal.vue';
    import { api } from '../services/userService';

    export default{
        name: 'User-list',
        components: {EditModal},
        data(){
            return {
                list_data: [],
                isLoading: false,
                error: null,
                showModal: false,
                selectedUser: null
            }
        },
        methods:{
            async getUsers(){
                this.isLoading = true;
                this.user = null;
        
                try {
                    const data = await api.getUsers()
                    this.list_data = data;
                } catch (err) {
                    this.error = err
                } finally {
                    this.isLoading = false
                }
            },
            openEditModal(user){
                this.selectedUser = user
                this.showModal = true
            },
            async deleteUser(id){
                await api.deleteUser(id).then((res)=>{
                    if(res.status === 200) this.getUsers();
                })
                
            }
        },
        mounted() {
            this.getUsers()
        }
    }

</script>

<style>
    .container{
        display: grid;
        padding: 0 20px;
    }

    .head{
        display: flex;
        gap: 4px;
        justify-content: start;
        align-items: center;
    }

    .card-container{
        display: flex;
        justify-content: space-between;
        margin-bottom: 2rem;
        width: auto;
        box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
        border-radius: 1rem;
        padding: 1rem;
    }

    .card-content{
        display: flex;
        justify-content: flex-end;
        gap: 20px;
        flex-direction: row;
        align-items: flex-end;
        width: 100%;
    }
</style>