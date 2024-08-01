<script setup>
import { ref, onMounted } from 'vue';

const requests = ref([]);
const RequestsList = [
  { id: 1, requester_name: 'Juan Pérez', subject: 'Solicitud de Información', request_date: '2024-07-01' },
  { id: 2, requester_name: 'María García', subject: 'Solicitud de Soporte', request_date: '2024-07-02' },
  { id: 3, requester_name: 'Carlos López', subject: 'Solicitud de Reunión', request_date: '2024-07-03' }
];

onMounted(() => {
  requests.value = RequestsList;
});
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
.request-list {
  font-family: Arial, sans-serif;
}

h1 {
    text-align: center;
    margin-top: 5%;
    color: #ffeb3b;
    font-weight: bold;
    font-size: 2.5rem;
    text-transform: uppercase;
    text-shadow: 2px 2px 4px #000000;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background: #f9f9f9;
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #ddd;
}
</style>



<style scoped>

</style>
