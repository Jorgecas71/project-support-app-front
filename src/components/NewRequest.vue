<script setup>
import { ref } from 'vue';

const requester_name = ref('');
const request_date = ref('');
const subject = ref('');
const description = ref('');

const submitRequest = () => {
 
};

const cancel = () => {
  
};
</script>

<template>
  <div class="new-request">
    
    <form @submit.prevent="submitRequest">
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
      <button type="reset">Resetear</button>
      <button type="button" @click="cancel">Cancelar</button>
      <button type="submit">Validar</button>
    </form>
  </div>
</template>

<style scoped>

</style>

