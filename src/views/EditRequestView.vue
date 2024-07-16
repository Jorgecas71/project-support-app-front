<script setup>
import { ref } from 'vue';
import EditRequestForm from '../components/EditRequestForm.vue';
import EditRequestList from '../components/EditRequestList.vue';

const selectedRequestId = ref(null);

const selectRequest = (id) => {
    selectedRequestId.value = id;
};

const clearSelection = () => {
    selectedRequestId.value = null;
};
</script>

<template>
    <main>
        <div>
            <EditRequestList v-if="!selectedRequestId" @edit="selectRequest" />
            <EditRequestForm v-else :id="selectedRequestId" @cancel="clearSelection" />
        </div>
    </main>
</template>