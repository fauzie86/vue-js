<!--<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div id="app">
    <h1>Todo app</h1>
    <input placeholder="Add todo" @keyup.enter="addTodo" v-model="newTodo" />

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
ul {
  list-style-type: none;
}
li {
  margin: 5px;
}
</style>-->




<!--<template>
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
</style>-->



<!--<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div id="app">
    <h1>Countdown</h1>
    <label>Set countdown (in second)</label>
    <input type="number" id="duration" v-model="duration" min="1"/>
     <button @click="startCountdown()" :disabled="counting">start</button>

  <div v-if="counting">
    <h2>Time remaining</h2>
    <p>{{ minutes }} : {{ seconds }}</p>
  </div>

  <div>
    <h2 v-if="countdownComplete">Countdown complete</h2>
  </div>


  </div>
</template>
<script>


export default {
  name: 'App',
  data(){
    return{
      duration:0,
      counting: false,
      minutes:0,
      seconds:0,
      countdownComplete:false,
      intervalid: null,
    }
  },
  methods:{
    startCountdown(){
      if(this.duration > 0 && !this.counting){
        this.counting = true;
        this.intervalid = setInterval(() => {
          if(this.duration > 0){
            this.duration--;
            this.calculateTime();
          }
          else{
            clearInterval(this.intervalid);
            this.counting = false;
            this.countdownComplete = true
          }

        }, 1000)
      }
     
      },
      calculateTime() {
        this.minutes = Math.floor(this.duration / 60);
        this.seconds = this.duration % 60;      
    }
  }  
  }   
</script>
<style>
#app{
  text-align: center;
  margin-top: 60px;
}
input{
  padding: 10px;
}
</style>-->







<!--task-->
<!--<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div id="app">
    <h1>Countdown</h1>
    <label>Set countdown (in seconds)</label>
    <input type="number" id="duration" v-model="duration" min="1" />
    <button @click="startCountdown()" :disabled="counting">Start</button>

    <div v-if="counting">
      <h2>Time remaining</h2>
      <p>{{ hours }} : {{ minutes }} : {{ seconds }}</p>
    </div>

    <div>
      <h2 v-if="countdownComplete">Countdown complete</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      duration: 0,
      counting: false,
      hours: 0,
      minutes: 0,
      seconds: 0,
      countdownComplete: false,
      intervalid: null,
    };
  },
  methods: {
    startCountdown() {
      if (this.duration > 0 && !this.counting) {
        this.counting = true;
        this.intervalid = setInterval(() => {
          if (this.duration > 0) {
            this.duration--;
            this.calculateTime();
          } else {
            clearInterval(this.intervalid);
            this.counting = false;
            this.countdownComplete = true;
          }
        }, 1000);
      }
    },
    calculateTime() {
      this.hours = Math.floor(this.duration / 3600);
      this.minutes = Math.floor((this.duration % 3600) / 60);
      this.seconds = this.duration % 60;
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
  margin: 10px;
}

button {
  padding: 10px;
  margin: 10px;
  cursor: pointer;
}

div {
  margin: 10px;
}

h2 {
  color: #333;
}

p {
  font-size: 24px;
  font-weight: bold;
  color: #ff5733;
}
</style>-->









<!--<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div id="app">
    <h1>Checkout form</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="Name">Name</label>
        <input v-model="FormData.name" type="text" id="name" required>
      </div>
      <div class="form-group">
        <label for="Email">Email</label>
        <input v-model="FormData.email" type="text" id="email" required>
      </div>
      <div class="form-group">
        <label for="Address">Shipping Address</label>
        <textarea v-model="FormData.address" type="text" id="address" required></textarea>
      </div>
      <div class="form-group">
        <label for="Credit Card">Credit Card</label>
        <input v-model="FormData.creditCard" type="text" id="creditcard" required>
      </div>  
      <button type="submit">Submit order</button>
    </form>
    <div v-if="orderSubmitted">
      <h2>Order submitted!</h2>
      <p><strong>Name:</strong> {{ FormData.name }}</p>
      <p><strong>Email</strong> {{ FormData.email }}</p>
      <p><strong>Shipping Address</strong>{{ FormData.address }}</p>
      <p><strong>Credit Card#</strong>{{ FormData.creditCard }}</p>
    </div>
  </div>    
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
      FormData:{
        name:'',
        email:'',
        address:'',
        creditCard:'',
      },
      orderSubmitted: false,
    }
  },
  methods:{
    submitForm(){
      this.orderSubmitted = true;
    }
  }
}
</script>


<style>
label{
  display: block;
  margin-bottom: 3px;
}
input, textarea{
  width: 100%;
  padding: 10px;
  font-size: 15px;
  margin-bottom: 10px;
}
button{
  padding: 15px;
  font-size: 15px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
}

</style>-->










<!--<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div id="app">
    <h1>Checkout form</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="Name">Name</label>
        <input v-model="FormData.name" type="text" id="name" required>
      </div>
      <div class="form-group">
        <label for="Email">Email</label>
        <input v-model="FormData.email" type="text" id="email" required>
      </div>
      <div class="form-group">
        <label for="Address">Shipping Address</label>
        <textarea v-model="FormData.address" type="text" id="address" required></textarea>
      </div>
      <div class="form-group">
        <label for="Credit Card">Credit Card</label>
        <input v-model="FormData.creditCard" type="text" id="creditcard" required>
      </div>
      <div class="form-group">
        <label for="Product">Product</label>
        <input v-model="FormData.product" type="text" id="product" required>
      </div>
      <div class="form-group">
        <label for="Quantity">Quantity</label>
        <input v-model="FormData.creditCard" type="text" id="creditcard" required>
      </div>  

      <button type="submit">Submit order</button>
    </form>
    <div v-if="orderSubmitted">
      <h2>Order submitted!</h2>
      <p><strong>Name:</strong> {{ FormData.name }}</p>
      <p><strong>Email</strong> {{ FormData.email }}</p>
      <p><strong>Shipping Address</strong>{{ FormData.address }}</p>
      <p><strong>Credit Card#</strong>{{ FormData.creditCard }}</p>
    </div>
  </div>    
</template>
<script>
export default {
  name: 'App',
  data(){
    return{
      FormData:{
        name:'',
        email:'',
        address:'',
        creditCard:'',
      },
      orderSubmitted: false,
    }
  },
  methods:{
    submitForm(){
      this.orderSubmitted = true;
    }
  }
}
</script>


<style>
label{
  display: block;
  margin-bottom: 3px;
}
input, textarea{
  width: 100%;
  padding: 10px;
  font-size: 15px;
  margin-bottom: 10px;
}
button{
  padding: 15px;
  font-size: 15px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
}

</style>-->




<!--<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div id="app">
    <h1>Checkout form</h1>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="Name">Name</label>
        <input v-model="FormData.name" type="text" id="name" required>
      </div>
      <div class="form-group">
        <label for="Email">Email</label>
        <input v-model="FormData.email" type="text" id="email" required>
      </div>
      <div class="form-group">
        <label for="Address">Shipping Address</label>
        <textarea v-model="FormData.address" type="text" id="address" required></textarea>
      </div>
      <div class="form-group">
        <label for="CreditCard">Credit Card</label>
        <input v-model="FormData.creditCard" type="text" id="creditcard" required>
      </div>
   
      <div class="form-group">
        <label for="Phone">Phone</label>
        <input v-model="FormData.phone" type="tel" id="phone" required>
      </div>
      <div class="form-group">
        <label for="Product">Product</label>
        <input v-model="FormData.product" type="text" id="product" required>
      </div>
      <div class="form-group">
        <label for="Quantity">Quantity</label>
        <input v-model="FormData.quantity" type="number" id="quantity" required>
      </div>

      <button type="submit">Submit order</button>

      <button type="button" @click="resetForm">Reset form</button>
    </form>
    <div v-if="orderSubmitted">
      <h2>Order submitted!</h2>

      <table>
        <tr>
          <td><strong>Name:</strong></td>
          <td>{{ FormData.name }}</td>
        </tr>
        <tr>
          <td><strong>Email:</strong></td>
          <td>{{ FormData.email }}</td>
        </tr>
        <tr>
          <td><strong>Shipping Address:</strong></td>
          <td>{{ FormData.address }}</td>
        </tr>
        <tr>
          <td><strong>Credit Card#:</strong></td>
          <td>{{ FormData.creditCard }}</td>
        </tr>
        <tr>
          <td><strong>Phone:</strong></td>
          <td>{{ FormData.phone }}</td>
        </tr>
        <tr>
          <td><strong>Product:</strong></td>
          <td>{{ FormData.product }}</td>
        </tr>
        <tr>
          <td><strong>Quantity:</strong></td>
          <td>{{ FormData.quantity }}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      FormData: {
        name: '',
        email: '',
        address: '',
        creditCard: '',
        phone: '',
        product: '',
        quantity: 0,
      },
      orderSubmitted: false,
    };
  },
  methods: {
    submitForm() {
      this.orderSubmitted = true;
    },
    resetForm() {
 
      this.FormData = {
        name: '',
        email: '',
        address: '',
        creditCard: '',
        phone: '',
        product: '',
        quantity: 0,
      };
      this.orderSubmitted = false;
    },
  },
};
</script>

<style>
label {
  display: block;
  margin-bottom: 3px;
}
input,
textarea {
  width: 100%;
  padding: 10px;
  font-size: 15px;
  margin-bottom: 10px;
}
button {
  padding: 15px;
  font-size: 15px;
  background-color: blue;
  color: white;
  border: none;
  cursor: pointer;
}
table {
  margin-top: 20px;
  border-collapse: collapse;
  width: 100%;
}

table, th, td {
  border: 1px solid black;
}

th, td {
  padding: 10px;
  text-align: left;
}
</style>-->








<!--<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <div id="app">
    <h1>Recipe app</h1>
    <div v-if="selectedRecipe">

      <button @click="selectedRecipe = null">Back recipe</button>
      <h2>{{ selectedRecipe.title }}</h2>
      <p>{{ selectedRecipe.description }}</p>
    </div>
    <div v-else>
      <ul>
        <li v-for="recipe in recipes" :key="recipe.id">
          <button @click="selectedRecipe(recipe)">{{ recipe.title }}</button>
        </li>
      </ul>
    </div>
  </div>    
</template>



<script>
export default {
  name: 'App,' 

  data() {
    return {
      recipes:[
        {
          id: 1,
          title:"Spaghetti"
          description: 'here is ur best spaghetti recipe'
        },
        {
          id: 2,
          title:"Spaghetti"
          description: 'here is ur best spaghetti recipe'
        },
        {
          id: 3,
          title:"Spaghetti"
          description: 'here is ur best spaghetti recipe'
        },    
      ],
      selectedRecipe: null,
    }
  },
  methods:{
    selectedRecipe(recipe){
      this.selectedRecipe = recipe;
    }
  }
}




</script>



<style>



</style>-->






























































































