<template>
  <q-card flat bordered class="q-mb-sm cursor-pointer" @click="accessNote">
    <q-card-section class="q-pt-xs">
      <div class="text-h5 q-mt-sm q-mb-xs">
        {{ title }}
      </div>
      <div class="text-caption text-grey">
        {{ decription }}
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    title: String,
    decription: String
  },
  setup (props, {emit}) {

    const accessNote = (event) => {
       emit("accessNote", event.target.value)
    }

    return { accessNote }
  }
}
</script>

<style lang="scss" scoped>

</style>
