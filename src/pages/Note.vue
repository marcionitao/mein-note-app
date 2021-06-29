<template>
  <q-page padding>
    <Container>
      <div v-if="editing">
        <form @submit="editing = false">
          <q-input filled v-model="note.title" label="title" />
          <q-input class="q-mt-sm" filled v-model="note.description" label="description" dense/>

          <q-card flat bordered class="q-mt-sm">
            <q-editor v-model="note.content" min-height="5rem" />
          </q-card>

          <div class="q-mt-md">
            <q-btn class="q-ml-sm" color="positive" type="submit" label="Done"/>
          </div>
        </form>
      </div>
      <div v-else>
        <div class="row items-center justify-between">
          <h3 class="q-mb-md q-mt-md">{{note.title}}</h3>
          <div>
            <q-btn color="secondary" icon="edit" round @click="editing = true"/>
            <q-btn color="red" icon="delete" round class="q-ml-sm" @click="remove"/>
          </div>
        </div>
        <div>{{ note.description }}</div>
        <div class="q-mt-md" v-html="note.content"></div>
      </div>
    </Container>
  </q-page>
</template>

<script>
import Container from 'src/components/Container.vue'
import { useRouter, useRoute } from 'vue-router'
import { useLocalNotes } from 'src/helper'
import { computed, ref } from 'vue'

export default {
   components: {
      // eslint-disable-next-line vue/no-unused-components
    Container
  },
  setup () {
    const notes = useLocalNotes();
    const route = useRoute();
    const router = useRouter();
    const noteId = computed(() => parseInt(route.params.id))
    const note = computed(() => notes.value[noteId.value])

    const remove = () => {
      notes.value.splice(noteId.value, 1)
      router.push('/')
    }

    const editing = ref(false)

    return { note, remove, editing }
  }
}
</script>


<style lang="scss" scoped>

</style>
