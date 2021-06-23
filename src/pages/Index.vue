<template>
  <div>

  </div>
</template>

<script>
import Container from './../components/Container.vue'
import NoteCard from './../components/NoteCard.vue'
import { useLocalStorage } from './../helper'
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'PageIndex',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Container,
    // eslint-disable-next-line vue/no-unused-components
    NoteCard
  },
  setup() {

    return { Container, NoteCard}
  }
})
</script>

