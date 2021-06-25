<template>
  <q-page padding>
    <Container>
      <h3>New Note</h3>
      <form @submit="submit">
        <q-input class="q-mt-sm" outlined v-model="note.title" label="title" />
        <q-input class="q-mt-sm" outlined v-model="note.description" label="description" dense/>

        <q-card flat bordered class="q-mt-sm">
          <q-editor v-model="note.content" min-height="5rem" />
        </q-card>

        <div class="q-mt-md">
          <q-btn color="grey" type="reset" to="/" label="Cancel"/>
          <q-btn class="q-ml-sm" color="positive" type="submit" label="Create"/>
        </div>

      </form>
    </Container>
  </q-page>
</template>

<script>
import Container from 'src/components/Container.vue'
import { useRouter } from 'vue-router'
import { useLocalNotes } from 'src/helper'
import { reactive } from 'vue'

export default {
  components: {
      // eslint-disable-next-line vue/no-unused-components
    Container
  },
  setup () {
    const notes = useLocalNotes();
    const router = useRouter();
    const note = reactive({
      title: '',
      description: '',
      content: ''
    });

    const submit = () => {
      // 'unshift' adds one or more elements to the beginning of an array and returns the new length of the array.
      notes.value.unshift({
        ...note,
        createdAt: Date.now(),
        updatedAt: Date.now()
      })
      console.log(notes.value)
     router.push('/')

      note.title = ''
      note.description = ''
      note.content = ''
    }

    return { Container, notes, note, submit }
  }
}
</script>

<style lang="scss" scoped>

</style>
