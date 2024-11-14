<template>
  <div>
    <h1>Форма обратной связи</h1>
    <form @submit.prevent="submitform">
      <div>
        <label for="name">Имя</label>
        <input type="text" v-model="user.name" required />
      </div>
      <div>
        <label for="email">почта</label>
        <input type="email" v-model="user.email" required />
      </div>
      <div>
        <label for="age">возраст</label>
        <input type="number" v-model="user.age" required />
      </div>
      <button type="submit">Подтвердить</button>
    </form>
    <div v-if="submitted">
      <h2>Полученная информация:</h2>
      <p>Имя: {{ user.name }}</p>
      <p>Почта: {{ user.email }}</p>
      <p>Возраст: {{ user.age }}</p>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name: 'User-form',
  setup() {
    const user = ref({
      name: '',
      email: '',
      age: null as number | null,
    })
    const submitted = ref(false)
    const submitform = () => {
      submitted.value = true
    }
    return {
      user,
      submitted,
      submitform,
    }
  },
})
</script>
