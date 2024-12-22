<template>
  <div class="container">
    <h1>Регистрация пользователя</h1>
    <form @submit.prevent="registerUser ">
      <table>
        <tr>
          <td><label for="name">Имя:</label></td>
          <td><input type="text" v-model="name" placeholder="Введите ваше имя" /></td>
        </tr>
        <tr>
          <td><label for="email">Электронная почта:</label></td>
          <td><input type="email" v-model="email" placeholder="Введите вашу почту" /></td>
        </tr>
        <tr>
          <td><label for="password">Пароль:</label></td>
          <td><input type="password" v-model="password" placeholder="Введите пароль" /></td>
        </tr>
      </table>
      <div class="error-messages">
        <span v-if="errors.name">{{ errors.name }}</span>
        <span v-if="errors.email">{{ errors.email }}</span>
        <span v-if="errors.password">{{ errors.password }}</span>
      </div>
      <button type="submit">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const name = ref('')
const email = ref('')
const password = ref('')
const errors = ref({ name: '', email: '', password: '' })
const router = useRouter()

const validateForm = () => {
  errors.value.name = name.value ? '' : 'Имя обязательно'
  errors.value.email = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value) ? '' : 'Некорректный email'
  errors.value.password = password.value.length >= 6 ? '' : 'Пароль должен содержать минимум 6 символов'

  return !errors.value.name && !errors.value.email && !errors.value.password
}

const registerUser  = () => {
  if (validateForm()) {
    const userData = { name: name.value, email: email.value, password: password.value }
    localStorage.setItem('user', JSON.stringify(userData))
    router.push('/success')
  }
}
</script>

<style src="../assets/base.css"></style>

<style scoped>
table {
  width: 100%;
  margin-bottom: 20px;
}

td {
  padding: 10px;
  vertical-align: top; /* Выравнивание по верхнему краю */
}

.error-messages {
  color: red;
  font-size: 12px;
}
</style>
