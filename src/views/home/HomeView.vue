<template>
    <div class="pageTitle">
        <span class="title">Meus Cursos</span>
        <span class="dots">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </div>

    <div class="content">
        <ul class="listCourses">
            <CardCourse v-for="course in allCourses" :key="course.id" :bg_name="'laravel'" :course="course" class="animate__animated animate__headShake"/>
        </ul>
    </div>
</template>

<script>
import CardCourse from "@/views/home/components/CardCourse.vue";
import { onMounted, computed } from "vue";
import { useStore } from "vuex";

export default {
    name: 'HomeView',
    setup() {
        const store = useStore()

        const allCourses = computed(() => store.state.courses.courses)

        onMounted(() => {
            store.dispatch('getCourses')
        })

        return {
            allCourses
        }
    },
    components: {
        CardCourse
    }
}
</script>
