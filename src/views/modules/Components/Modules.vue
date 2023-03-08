<template>
  <div class="left">
    <div class="card">
      <div class="title bg-laravel">
        <span class="text">Modulos</span>
        <span class="icon far fa-stream"></span>
      </div>
      <div
        class="modules"
        v-for="module in modules"
        :key="module.id"
      >
        <div class="name">
          <span class="text">Modulo 1</span>
          <span class="icon fas fa-sort-down"></span>
        </div>
        <ul class="classes">
          <li
            class="active"
            v-for="lesson in module.lessons"
            :key="lesson.id"
          >
            <span
              class="check active fas fa-check"
              v-if="lesson.views.length > 0"
            ></span>
            <span class="nameLesson">{{ lesson.name }}</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';


  export default {
    // eslint-disable-next-line vue/multi-word-component-names
    name: "Modules",
    setup () {
      const store = useStore()


      const course = computed(() => store.state.courses.courseSelected)
      const modules = computed(() => store.state.courses.courseSelected.modules)

      return {
        course,
        modules
      }
    }
  }
</script>

<style scoped>

</style>