<script>
export default {
  data() {
    return {
      requester_name: '',
      request_date: '',
      subject: '',
      description: ''
    };
  },
  created() {
    // Lógica para obtener la solicitud actual y rellenar los campos
  },
  methods: {
    updateRequest() {
      // Lógica para actualizar la solicitud en la base de datos
    },
    cancel() {
      // Lógica para cancelar y volver a la lista de solicitudes
    }
  }
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

</style>

