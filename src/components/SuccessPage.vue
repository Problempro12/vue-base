<template>
  <div class="container">
    <h1>Регистрация прошла успешно!</h1>
    <p>Ваши данные:</p>
    <p>Имя: {{ userData.name }}</p>
    <p>Электронная почта: {{ userData.email }}</p>
    <p>Пароль: {{ userData.password }}</p>
    <RouterLink to="/">Вернуться на главную</RouterLink>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const userData = ref({})

onMounted(() => {
  const user = localStorage.getItem('user')
  if (user) {
    userData.value = JSON.parse(user)
  }
})
</script>

<style src="../assets/base.css"></style>
