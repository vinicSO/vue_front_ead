<template>
    <li>
        <span :class="['card', 'bg-' + bg_name]">
            <span class="icon">
                <img :src="[course.image != '' ? course.image : require('@/assets/images/icons/default.png')]" :alt="course.name">
            </span>
            <span class="title">{{ course.name }}</span>
            <span class="action">
                <!-- <a href="trainings.html" :class="['btn', bg_name]">Acessar</a> -->
                <!-- <router-link :to="{ name: 'campus.modules' }" :class="['btn', bg_name]">Acessar</router-link> -->
                <a href="#" @click.prevent="selectCourse" :class="['btn', bg_name]">Acessar</a>
            </span>
        </span>
        <span class="dots">
            <span></span>
            <span></span>
            <span></span>
        </span>
    </li>
</template>

<script>
import router from '@/router';
import { useStore } from 'vuex';

export default {
    name: "CardCourse",
    props: [
        'course',
        'image',
        'bg_name'
    ],
    setup(props) {

        const store = useStore()

        const selectCourse = () => {
            store.commit('SET_COURSE_SELECTED', props.course)

            router.push({name: 'campus.modules'})
        }

        return {
            selectCourse
        }
    }
}
</script>

<style scoped></style>