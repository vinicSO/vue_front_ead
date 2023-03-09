<template>
    <header id="header">
        <nav>
            <span class="toggleMenu far fa-bars" @click="toggleMenu"></span>
            <span class="logo">
                <router-link :to="{ name: 'campus.home' }">
                    <img :src="require('@/assets/images/logo.svg')" alt="EspecializaTI">
                </router-link>

            </span>
        </nav>
    </header>

    <Menu v-show="showMenu" />
</template>

<script>
    import { ref } from 'vue'

    import Menu from './MenuComponent.vue';

    export default {
        name: "HeaderComponent",
        setup() {
            const showMenu = ref(false)

            const toggleMenu = () => showMenu.value = !showMenu.value

            return {
                showMenu,
                toggleMenu
            }
        },
        components: {
            Menu
        }
    }
</script>

<style scoped></style>