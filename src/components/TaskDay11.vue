<template>
    <div>
      <img alt="Vue logo" src="./assets/logo.png" />
      <h1>Api</h1>
  
      <ul class="item" v-for="item in list" :key="item.id">
        <li>{{ item.id }}</li>
        <li>{{ item.email }}</li>
        <li>{{ item.first_name }}</li>
        <li>{{ item.last_name }}</li>
        <li><img :src="item.avatar" alt="User Avatar" /></li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  export default {
    name: "App",
    data() {
      return {
        list: []
      };
    },
    mounted() {
      this.getData();
    },
    methods: {
      async getData() {
        try {
          let result = await axios.get("https://reqres.in/api/users?page=1");
          console.warn(result.data.data);
          this.list = result.data.data;
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
    }
  };
  </script>
  
  <style>
  ul li {
    display: inline-block;
    padding: 10px;
  }
  </style>