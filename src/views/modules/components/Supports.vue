<template>
    <div
        class="comments"
        v-if="lesson.name"
    >
    <div class="header">
        <span class="title">Dúvidas <span v-if="loading">(Carregando...)</span><span v-else>({{ supports.length }})</span></span>
            <button
                @click.prevent="openModal"
                class="btn primary"
            >
            <i class="fas fa-plus"></i>
            Enviar nova dúvida
        </button>
    </div>

    <Supports />

    <SupportModal
        :show-modal="modal.showModal"
        :support-reply="modal.supportReply"
        @closeModal="modal.showModal = false"
    />
  </div>
</template>

<script>
    import Supports from "@/components/Supports.vue";
    import SupportModal from "@/components/SupportModal.vue";

    import { useStore } from 'vuex';
    import { computed, watch, ref } from "vue";

    export default {
        name: "SupportsLesson",
        components: {
            Supports,
            SupportModal
        },
        setup() {
            const store = useStore()

            const lesson = computed(() => store.state.courses.lessonPlayer)
            const supports = computed(() => store.state.supports.supports.data)

            const loading = ref(false)
            
            const modal = ref({
                showModal: false,
                supportReply: ''
            })
            
            const openModal = () => modal.value = {
                showModal: true,
                supportReply: ''
            }

            watch(
                () => store.state.courses.lessonPlayer,
                () => {
                loading.value = true

                store.dispatch('getSupportsByLesson', lesson.value.id)
                    .finally(() => loading.value = false)
                }
            )

            return {
                lesson,
                loading,
                supports,
                modal,
                openModal
            }
        }
    }
</script>

<style scoped>

</style>