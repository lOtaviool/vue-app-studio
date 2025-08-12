<template>
    <div class="sidebar">
        <div class="head">
            <img rounded="circle" width="50px" alt="git logo" src="https://images.seeklogo.com/logo-png/27/2/github-logo-png_seeklogo-273183.png" />
            <span>GitHub Studio</span>
        </div>
        <br>
        <router-link class="navItem" to="/user-list">Lista de Usuários</router-link>
        <router-link class="navItem" to="/user-details">Usuário GitHub</router-link>
    </div>
</template>

<script setup>
    
</script>

<style>
    .sidebar{
        display: flex;
        flex-direction: column;
        width: 300px;
        height: 100vh;
        padding: 1rem;
        background-color: #fff;
        position: fixed;
        box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
    }

    .head{
        display: flex;
        padding: 5px;
        gap: 4px;
        align-items: center;
        justify-content: center;

        span {
            font-family: monospace;
            font-size: 28px;
        }
    }

    .navItem{
        margin-bottom: 1rem;
        text-decoration: none;
        color: #333;
    }

    .navItem:hover {
        font-weight: bold;
        cursor: pointer;
        background-color:rgb(249, 249, 249);
        padding: 1px 3px;
        border-radius: 2px;
        border-left: 3px solid #333;
    }

</style>