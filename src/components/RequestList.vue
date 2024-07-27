<script>
export default {
  data() {
    return {
      requests: []
    };
  },
  created() {
   
  }
};
</script>

<template>
  <div class="request-list">
    <h1>Lista de Solicitudes</h1>
    <ul>
      <li v-for="request in requests" :key="request.id">
        {{ request.requester_name }} - {{ request.subject }} - {{ request.request_date }}
      </li>
    </ul>
  </div>
</template>



<style scoped>

</style>
