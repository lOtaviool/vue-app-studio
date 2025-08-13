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

<script>
    import { api } from '@/services/userService';

    export default {
        name: 'EditModal',
        props: {
            showModal: Boolean,
            user: Object
        },
        emits: ['update:showModal', 'updateName'],
        data() {
            return {
                localName: ''
            }
        },
        computed: {
            isVisible: {
            get() {
                return this.showModal
            },
            set(value) {
                this.$emit('update:showModal', value)
            }
            }
        },
        watch: {
            user(newVal) {
                if (newVal) {
                    this.localName = newVal.name
                }
            }
        },
        methods: {
            async saveChanges() {
                console.log('Novo nome:', this.localName)                    
                const data = await api.updateUserName(this.user?.id, this.localName);
                if(data.status == 200){
                    this.$emit('close');
                }
                
            },
            cancel(){
                this.$emit('close');
            }
            
        }
    }
</script>

<style></style>