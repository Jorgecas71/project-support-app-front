<script setup>

import Request from '../components/Request.vue';


</script>

<template>
    <main>
      <Request />
      
        <div>
            <EditRequestList v-if="!selectedRequestId" @edit="selectRequest" />
            <EditRequestForm v-else :id="selectedRequestId" @cancel="clearSelection" />
        </div>
        
    </main>
</template>