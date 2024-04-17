<template>
  <div>
    <h2>Login</h2>
    <form @submit.prevent="login">
      <input type="text" v-model="username" placeholder="Username">
      <input type="password" v-model="password" placeholder="Password">
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        const response = await fetch('http://your-api-url/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            username: this.username,
            password: this.password
          })
        });
        
        if (!response.ok) {
          throw new Error('Invalid credentials');
        }

        const data = await response.json();
        
        // Assuming your server sends back a token upon successful login
        const token = data.token;

        // Save token to Vuex store
        this.$store.dispatch('login', { token });

        // Redirect to home or dashboard page
        this.$router.push('/');
      } catch (error) {
        console.error('Login failed:', error.message);
      }
    }
  }
};
</script>

