<template>
    <div class="training">
        <div class="card bg-laravel">
            <span class="icon">
            <img src="images/icons/laravel.svg" alt="">
            </span>
        <span class="title">{{ lesson.name }}</span>
        <router-link class="btn laravel" :to="{ name: 'campus.home' }">
            <i class="fas fa-chevron-left"></i>
            Voltar
        </router-link>
        </div>
        <iframe
            v-if="lesson.videos"
            width="100%"
            height="auto"
            :src="lesson.videos"
            :title="lesson.name"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
        >
        </iframe>
    </div>

    <div
        class="description-lesson"
        v-if="lesson.description"
    >
        {{ lesson.description }}
    </div>
</template>

<script>
  import { useStore } from 'vuex';
  import { computed, watch } from "vue";

  export default {
    name: "Player",
    setup() {
        const store = useStore()

        const lesson = computed(() => store.state.courses.lessonPlayer)

        watch(() => store.state.courses.lessonPlayer, () => {
            if (lesson.value.id != '') setTimeout( () => store.dispatch('markLessonViewed', ), 3000)
        })
        

        return {
            lesson
        }
    }
  }
</script>

<style scoped>

</style>