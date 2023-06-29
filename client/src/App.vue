<script setup lang="ts">
import { ref } from 'vue'
import type { QA } from './models/qa'
import Api from './api'

const qas = ref<QA[]>([
  {
    text: 'Bonjour, je suis à votre service.',
    type: 'answer'
  },
  {
    text: "J'ai ingurgité la documentation d'installation de l'application Selling process",
    type: 'answer'
  },
  {
    text: 'Quel est votre question ? 🥸',
    type: 'answer'
  }
])

const isLoading = ref(false)
const newQuestion = ref('')

window.addEventListener('keyup', (event: Event) => {
  // @ts-ignore
  if ((event as KeyboardEvent).keyCode === 13) {
    ask()
  }
})

const ask = async () => {
  isLoading.value = true
  const answer = await Api.ask(newQuestion.value)
  qas.value.push({
    text: newQuestion.value,
    type: 'question'
  })
  qas.value.push({
    text: answer,
    type: 'answer'
  })
  newQuestion.value = ''
  isLoading.value = false
}
</script>

<template>
  <main class="container">
    <h2 class="text-center title">Questions - Reponses</h2>
    <van-divider />
    <section class="qa-wrapper">
      <div v-for="(qa, i) in qas" :key="i" :class="[qa.type]" class="qa">
        <div class="border" :class="[`border-${qa.type}`]">
          {{ qa.text }}
        </div>
      </div>
    </section>
    <h2 class="text-center subtitle">Posez moi une question</h2>
    <div style="display: flex">
      <van-field
        v-model="newQuestion"
        placeholder="ANDY EST LE BEST DEV ? (oui hmm, hmm)"
        class="input-text"
      />
      <img
        v-if="!isLoading"
        src="https://www.svgrepo.com/download/15468/send.svg"
        height="50"
        class="send-icon"
        @click="ask"
      />
      <van-loading v-else />
    </div>
  </main>
</template>

<style scoped>
main {
  color: lightgray;
}
.container {
  margin: 0% 20%;
}

.title {
  text-align: center;
  text-transform: uppercase;
}
.subtitle {
  margin-top: 40px;
}

.qa-wrapper {
  border: 1px solid black;
  padding: 20px;
  background-color: white;
  border-radius: 30px;
}

.input-text {
  padding: 15px;
  border-radius: 30px;
  color: black;
}

.send-icon {
  background-color: white;
  border-radius: 30px;
  padding: 10px;
  cursor: pointer;
  margin-left: 5px;
  display: flex;
  align-items: center;
}

.send-icon:hover {
  transition: background-color 0.5s;
  background-color: lightgray;
}

.border {
  border: 1px solid black;
  border-radius: 30px;
  padding: 20px;
  max-width: 600px;
  min-width: 400px;
}

.border-question {
  background-color: green;
  color: white;
}

.border-answer {
  background-color: lightgray;
  color: black;
}

.qa {
  display: flex;
  margin: 30px 0;
}

.question {
  justify-content: right;
}

.answer {
  justify-content: left;
}
</style>
