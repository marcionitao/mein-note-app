<template>
  <q-page padding>
    <Container>
      <div class="row items-center justify-between">
        <h3>Your notes</h3>
        <div>
          <q-btn round color="positive" icon="add" to="/new" />
        </div>
      </div>
      <NoteCard
        v-for="({ title, description }, idx) in notes"
        :key="idx"
        :title="title"
        :description="description"
        @click="router.push(`/note/${idx}`)">
      </NoteCard>
      <div v-if="notes.length === 0">You have not created any notes.</div>
    </Container>
  </q-page>
</template>

<script>
import Container from 'src/components/Container.vue'
import NoteCard from 'src/components/NoteCard.vue'
import { useLocalNotes } from 'src/helper'
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
    const notes = useLocalNotes();
    const router = useRouter();
    return { Container, NoteCard, notes, router}
  }
})
</script>
