<template>
    <div class="p-4">
        <!-- Logo Section -->
        <section class="flex flex-col items-center mb-8">
            <img src="/images/DBA.webp" alt="DBA Suporte Logo" class="w-32 h-auto">
            <h1 class="text-4xl font-bold text-black-700 mt-4">Bem vindo ao DBA suporte</h1>
            <p class="text-gray-700 mt-2 text-center">Sua parceria de segurança para soluções em TI.</p>
        </section>

        <!-- Rest of your homepage -->
        <section id="services" class="mt-8">
            <h2 class="text-2xl font-semibold text-red-600">Alguns de nossos serviços</h2>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <Card title="Database Management"
                    description="Soluções especializadas para projetos de missão crítica." />
                <Card title="System Development" description="Sistemas corporativos personalizados e adaptados às suas necessidades
." />
                <Card title="Training" description="Capacitando sua equipe com habilidades de TI.
" />
            </div>
            <div class="flex justify-center m-4">
                <button @click="$router.push('/services')"
                    class="bg-red-600 text-white py-3 px-6 rounded-lg hover:bg-red-700">
                    Explore nossos serviços
                </button>
            </div>
        </section>
    </div>
</template>

<script>
import Card from '../components/Card.vue';

export default {
    components: { Card },
};
</script>
