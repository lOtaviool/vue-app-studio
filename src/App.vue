<template>
  <div class="layout">
    <SidebarComponent/>
    <div class="page-container">
      <router-view/>
    </div>
  </div>
</template>

<script>
import SidebarComponent from './components/SidebarComponent.vue';

export default {
  name: 'App',
  components: {
    SidebarComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;  
}

.layout{
  display: flex;  
  background-color: #fff;
}

.page-container{
  flex: 1;
  padding: 1rem 0.5rem;
  margin-left: 300px;
}
</style>
