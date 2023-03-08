<template>
  <div
    class="comments"
    v-if="lesson.name"
  >
    <div class="header">
      <span class="title">Dúvidas</span>
      <button class="btn primary">
        <i class="fas fa-plus"></i>
        Enviar nova dúvida
      </button>
    </div>

    <Supports />
  </div>
</template>

<script>
  import Supports from "@/components/Supports.vue";
  import { useStore } from 'vuex';
  import { computed } from "vue";

  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "SupportsLesson",
    components: {Supports},
    setup() {
      const store = useStore()

      const lesson = computed(() => store.state.courses.lessonPlayer)

      console.log(lesson)

      return {
        lesson
      }
    }
  }
</script>

<style scoped>

</style>