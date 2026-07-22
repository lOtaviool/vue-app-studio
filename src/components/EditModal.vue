<template>
    <b-modal 
        v-model="isVisible" 
        title="Editar Usuário"
        ok-title="Salvar"
        ok-variant="dark"
        cancel-title="Cancelar"
        cancel-variant="outline-dark"
        @ok="saveChanges"
        @cancel="cancel"
    >
        <input 
            type="text" 
            class="form-control" 
            v-model="localName" 
            placeholder="Nome"
        />
    </b-modal>
</template>

<script setup> 
    import { ref, watch, computed } from 'vue';
    import { useUserStore } from '@/store/user.store';

    const props = defineProps({
        showModal: {
            type: Boolean,
            required: true
        },
        user: {
            type: Object,
            required: true
        }
    });

    const emit = defineEmits(['update:showModal', 'close']);
    const userStore = useUserStore();
    const localName = ref('');

    const isVisible = computed({
        get: () => props.showModal,
        set: (value) => emit('update:showModal', value)
    });

    watch(() => props.user, (newUser) => {
        if (newUser) {
            localName.value = newUser.name;
        }
    }, { immediate: true });

    async function saveChanges() {
        try {
            await userStore.updateUser(props.user.id, localName.value);
            emit('close');
        } catch (error) {
            console.error('Erro ao atualizar o usuário:', error);
        }
    }

    function cancel() {
        emit('close');
    }


</script>

<style></style>