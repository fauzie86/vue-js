<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div id="app">
    <h1>Todo app</h1>
    <input placeholder="Add todo" @keyup.enter="addTodo" v-model="newTodo" />
    <button @click="addTask">Add Task</button>

    <ul>
      <li v-for="(todo, index) in todos" :key="index">
        {{ todo }}
        <button @click="removeTodo(index)">Remove</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      newTodo: "",
      todos: [],
    };
  },
  methods: {
    addTodo() {
      if (this.newTodo.trim() !== "") {
        this.todos.push(this.newTodo.trim());
        this.newTodo = "";
      }
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    addTask() {
      this.addTodo();
    },
  },
};
</script>

<style>
#app {
  text-align: center;
  margin-top: 60px;
}
input {
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
}
button {
  padding: 10px;
  font-size: 16px;
  margin-bottom: 10px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
}
ul {
  list-style-type: none;
}
li {
  margin: 5px;
}
</style>
