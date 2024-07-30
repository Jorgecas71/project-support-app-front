<script setup>
import { ref } from 'vue';

const requester_name = ref('');
const request_date = ref('');
const subject = ref('');
const description = ref('');

const updateRequest = () => {
  // Aquí puedes agregar la lógica para actualizar la solicitud
  console.log('Solicitud actualizada:', {
    requester_name: requester_name.value,
    request_date: request_date.value,
    subject: subject.value,
    description: description.value,
  });
};

const cancel = () => {
  // Aquí puedes agregar la lógica para cancelar y volver a la lista de solicitudes
  console.log('Edición cancelada');
};
</script>

<template>
  <div class="edit-request">
    <h1>Editar Solicitud</h1>
    <form @submit.prevent="updateRequest">
      <div>
        <label for="requester_name">Nombre del Solicitante:</label>
        <input type="text" v-model="requester_name" required />
      </div>
      <div>
        <label for="request_date">Fecha de la Solicitud:</label>
        <input type="date" v-model="request_date" required />
      </div>
      <div>
        <label for="subject">Tema de la Consulta:</label>
        <input type="text" v-model="subject" required />
      </div>
      <div>
        <label for="description">Descripción de la Consulta:</label>
        <textarea v-model="description" required></textarea>
      </div>
      <button type="button" @click="cancel">Cancelar</button>
      <button type="submit">Enviar Cambios</button>
    </form>
  </div>
</template>

<style scoped>
/* Puedes agregar estilos aquí si es necesario */
</style>


