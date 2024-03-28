<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      For a guide and recipes on how to configure / customize this project,<br>
      check out the
      <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
    </p>
    <h3>Installed CLI Plugins</h3>
    <ul>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-babel" target="_blank" rel="noopener">babel</a></li>
      <li><a href="https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint" target="_blank" rel="noopener">eslint</a></li>
    </ul>
    <h3>Essential Links</h3>
    <ul>
      <li><a href="https://vuejs.org" target="_blank" rel="noopener">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank" rel="noopener">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank" rel="noopener">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank" rel="noopener">Twitter</a></li>
      <li><a href="https://news.vuejs.org" target="_blank" rel="noopener">News</a></li>
    </ul>
    <h3>Ecosystem</h3>
    <ul>
      <li><a href="https://router.vuejs.org" target="_blank" rel="noopener">vue-router</a></li>
      <li><a href="https://vuex.vuejs.org" target="_blank" rel="noopener">vuex</a></li>
      <li><a href="https://github.com/vuejs/vue-devtools#vue-devtools" target="_blank" rel="noopener">vue-devtools</a></li>
      <li><a href="https://vue-loader.vuejs.org" target="_blank" rel="noopener">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank" rel="noopener">awesome-vue</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!--<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>-->




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


<!--<template>
  <h1>Form</h1>
  <input type="text" placeholder="Enter your email" v-model="email"/> <br>
  <br>
  <input type="text" placeholder="Enter password" v-model="password"/> <br>
  <br>
  <button v-on:click="getdata()">Get values</button> <br>
</template>

<script>
export default {
  name: "TwoWay",
  data() {
      return{
          email: null,
          password: null,
      }
  },
  method: {
      getdata(){
          console.log("value ", this.email, this.password);
      }
  }

}    
</script>
<style scoped></style>-->





<!--<template>
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
</style>-->


