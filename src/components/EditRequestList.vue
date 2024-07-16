<script setup>
import { useRequestStore } from '../stores/requestStore';
import { computed, onMounted, defineEmits } from 'vue';

const requestStore = useRequestStore();
const requests = computed(() => requestStore.requests);
const emit = defineEmits(['edit']);

onMounted(() => {
    requestStore.fetchAllRequests();
});

const formatDate = (date) => {
    return new Date(date).toLocaleDateString();
};

const emitEdit = (id) => {
    emit('edit', id);
};
</script>

<template>
    <div class="container mt-4">
        <h2>Edit Requests</h2>
        <div class="row">
            <div class="col-12 col-sm-6 col-md-4 mb-4" v-for="request in requests" :key="request.id">
                <div class="card no-border h-100">
                    <div class="card-header no-border">
                        <h4 class="card-title">{{ request.requesterName }}</h4>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <p class="card-text"><strong>Topic:</strong> {{ request.topic }}</p>
                        <p class="card-text"><strong>Description:</strong> {{ request.description }}</p>
                        <p class="card-text mt-auto"><strong>Date:</strong> {{ formatDate(request.requestDate) }}</p>
                        <button class="btn btn-primary mt-3" @click="emitEdit(request.id)">Edit</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>