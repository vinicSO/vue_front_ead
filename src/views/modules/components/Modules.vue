<template>
  <div class="left">
    <div class="card">
      <div class="title bg-laravel">
        <span class="text">Modulos</span>
        <span class="icon far fa-stream"></span>
      </div>
      <div
        :class="[
            'modules',
            module.id == showModule ? 'active' : ''
        ]"
        v-for="module in modules"
        :key="module.id"
        @click.prevent="toogleModule(module.id)"
      >
        <div class="name">
          <span class="text">{{ module.name }}</span>
          <span class="icon fas fa-sort-down"></span>
        </div>
        <ul
            class="classes"
            v-show="module.id == showModule"
        >
          <li
            :class="{
                'active' : lesson.id === currentLesson.id
            }"
            v-for="lesson in module.lessons"
            :key="lesson.id"
            @click.prevent="addLessonPlayer(lesson)"
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
import { computed, ref } from 'vue';
import { useStore } from 'vuex';


  export default {
    name: "Modules",
    setup () {
      const store = useStore()

      const showModule = ref('0')

      const toogleModule = (module_id) => {

        if (showModule.value == module_id) {
          showModule.value = '0'

          return
        }

        showModule.value = module_id
      }

      const currentLesson = computed(() => store.state.courses.lessonPlayer)

      const addLessonPlayer = (lesson) => {
        store.commit('SET_LESSON_PLAYER', lesson)
      }

      const modules = computed(() => store.state.courses.courseSelected.modules)

      return {
        modules,
        showModule,
        toogleModule,
        addLessonPlayer,
        currentLesson
      }
    }
  }
</script>

<style scoped>

</style>