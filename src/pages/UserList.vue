<template>
    <div class="container">
        <div class="head">
            <h3>Lista de Usuários</h3>
        </div>
        <button class="btn btn-dark" v-on:click="teste($event)">Enviar</button>
    </div>
</template>

<script>
    export default{
        name: 'User-list',
        methods:{
            teste(e){
                console.log('Chegou o evento!', e)
            },

            getUsers(){
                
            }
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
</style>