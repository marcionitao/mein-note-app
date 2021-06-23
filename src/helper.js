import { ref, watch, onMounted, onUnmounted } from 'vue';

// to use localstorage we must add a key and a value
const useLocalStorage = (key, defaultValue) => {
  // content is reactive
  const note = ref(defaultValue)

  const read = () => {
    // get content from localStorage
    const content = window.localStorage.getItem(key)

    if (content != null) {
      // obj JSON to String format
      note.value = JSON.parse(content)
    }
  }

  read()

  onMounted(() => {
    window.addEventListener('storage', read)
  })

  onUnmounted(() => {
    window.removeEventListener('storage', read)
  })

  // write content to localStorage
  const write = () => {
    // content to JSON format
    window.localStorage.setItem(key, JSON.stringify(note.value))
  }

  watch([note], write, {deep: true})

  return note
}

export const useLocalNotes = () => {
  return useLocalStorage('notes', [])
}
