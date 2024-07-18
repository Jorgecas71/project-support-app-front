<script setup>
import { ref, onMounted } from 'vue';
import { useRequestStore } from '../stores/requestStore';
import { useRouter } from 'vue-router';

const props = defineProps({
    id: String,
});

const emit = defineEmits(['cancel']);

const router = useRouter();
const requestStore = useRequestStore();
const request = ref({
    requesterName: '',
    topic: '',
    description: '',
    date: '',
});

onMounted(() => {
    const selectedRequest = requestStore.getRequestById(props.id);
    if (selectedRequest) {
        request.value = { ...selectedRequest };
    }
});

const handleSubmit = async () => {
    try {
        await requestStore.updateRequest(request.value.id, request.value);
        emit('cancel');
    } catch (error) {
        console.error('Error al enviar los cambios:', error);
    }
};

const cancelEdit = () => {
    emit('cancel');
};
</script>

<template>
    <div class="container mt-4">
        <div class="card no-border">
            <div class="card-header no-border">
                <h5 class="card-title">Edit Request Form</h5>
            </div>
            <div class="card-body">
                <form @submit.prevent="handleSubmit">
                    <div class="mb-3">
                        <label for="requesterName" class="form-label">Requester Name</label>
                        <input v-model="request.requesterName" type="text" class="form-control" id="requesterName"
                            placeholder="Enter requester name" required />
                    </div>
                    <div class="mb-3">
                        <label for="topic" class="form-label">Topic</label>
                        <input v-model="request.topic" type="text" class="form-control" id="topic"
                            placeholder="Enter topic" required />
                    </div>
                    <div class="mb-3">
                        <label for="description" class="form-label">Description</label>
                        <textarea v-model="request.description" class="form-control" id="description" rows="3"
                            placeholder="Enter description" required></textarea>
                    </div>
                    <div class="mb-3">
                        <label for="date" class="form-label">Date</label>
                        <input v-model="request.date" type="date" class="form-control" id="date" required />
                    </div>
                    <button type="submit" class="btn btn-primary m-1">Submit</button>
                    <button type="button" class="btn btn-secondary m-1" @click="cancelEdit">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h5 {
    text-align: center;
    margin-top: 5%;
    color: #ffeb3b;
    font-weight: bold;
    font-size: 2.5rem;
    text-transform: uppercase;
    text-shadow: 2px 2px 4px #000000;
}

</style>
