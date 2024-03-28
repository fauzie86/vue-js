<!--<template>
    <div>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="name" class="form-label">Name:</label>
          <input v-model="formData.name" type="text" class="form-control" id="name" required>
        </div>
        <div class="mb-3">
          <label for="email" class="form-label">Email:</label>
          <input v-model="formData.email" type="email" class="form-control" id="email" required>
        </div>
        <div class="mb-3">
          <label for="age" class="form-label">Age:</label>
          <input v-model.number="formData.age" type="number" class="form-control" id="age" required>
        </div>
        <button type="submit" class="btn btn-primary">Send</button>
      </form>
  
      <ul v-if="submittedData.length > 0" class="mt-4">
        <li v-for="(data, index) in submittedData" :key="index">
          <strong>Name:</strong> {{ data.name }}, <strong>Email:</strong> {{ data.email }}, <strong>Age:</strong> {{ data.age }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        formData: {
          name: '',
          email: '',
          age: null,
        },
        submittedData: [],
      };
    },
    methods: {
      submitForm() {
        this.submittedData.push({ ...this.formData });
        this.formData = {
          name: '',
          email: '',
          age: null,
        };
      },
    },
  };
  </script>
  
  <style scoped></style>-->
  