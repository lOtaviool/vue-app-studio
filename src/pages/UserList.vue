<template>
    <div class="container">
        <div class="head">
            <h3>Lista de Usuários</h3>
        </div>
        <br/>
        <div v-if="users.length <= 0 && !loading">
            <h4>Nenhum dado encontrado! :(</h4>
        </div>
        <div v-if="users.length <= 0 && loading">
            <div class="spinner-border text-dark" role="status"></div>
        </div>
        <div class="card-container" v-for="user in users" :key="user.id">
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
        v-model:showModal="showModal"
        :user="selectedUser"
    />
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { storeToRefs } from 'pinia';
    import { useUserStore } from '@/store/user.store';
    import EditModal from '../components/EditModal.vue';

    const userStore = useUserStore();
    const { users, loading } = storeToRefs(userStore);

    const showModal = ref(false);
    const selectedUser = ref(null);

    function openEditModal(user) {
        selectedUser.value = user;
        showModal.value = true;
    }

    function deleteUser(userId) {
        userStore.deleteUser(userId);
    }

    onMounted(() => {
        userStore.getUsers();
    });


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