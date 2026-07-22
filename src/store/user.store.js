import { defineStore } from 'pinia';
import { ref } from 'vue';
import { api } from '../services/userService';


export const useUserStore = defineStore('user', () => {
    // State
    const users = ref([]);
    const loading = ref(false);
    const error = ref(null);

    // Actions
    async function getUsers() {
        loading.value = true

        try {
            users.value = await api.getUsers()
        } catch (err) {
            error.value = err
        } finally {
            loading.value = false
        }
    }

    async function deleteUser(id) {
        loading.value = true

        try {
            await api.deleteUser(id)

            // Atualiza a lista automaticamente
            users.value = users.value.filter(user => user.id !== id)

        } catch (err) {
            error.value = err
        } finally {
            loading.value = false
        }
    }

    async function updateUser(id, name) {

        loading.value = true

        try {

            const response = await api.updateUserName(id, name)

            if (response.status === 200) {

                const user = users.value.find(u => u.id === id)

                if (user) {
                    user.name = name
                }

            }

        } catch (err) {
            error.value = err
        } finally {
            loading.value = false
        }
    }
    
    return {
        getUsers,
        deleteUser,
        updateUser,
        users,
        loading,
        error
    }
});