<template>
    <div class="services-container p-8">
        <h1 class="text-4xl font-bold text-center mb-8">Our Services</h1>
        <div v-for="(service, index) in services" :key="index" class="flex items-center mb-12">
            <img :src="service.image" class="w-1/2 rounded-lg" :class="{ 'order-last': index % 2 === 1 }"
                alt="Service image" />
            <div class="w-1/2 px-6">
                <h2 class="text-2xl font-semibold mb-4">{{ service.title }}</h2>
                <p class="text-gray-700">{{ service.description }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            services: [
                {
                    title: 'Database Services',
                    description: 'Specialized database services tailored to your needs.',
                    image: '/images/f3.jpg',
                },
                {
                    title: 'Corporate System Development',
                    description: 'Customized corporate system development solutions.',
                    image: '/images/f1.webp',
                },
                {
                    title: 'Outsourcing',
                    description: 'Efficient outsourcing solutions for your business.',
                    image: '/images/f2.png',
                },
                {
                    title: 'Training',
                    description: 'Comprehensive training programs to upskill your team.',
                    image: '/images/f5.jpeg',
                },
                {
                    title: 'Corporate Solutions',
                    description: 'End-to-end corporate solutions for mission-critical projects.',
                    image: '/images/f4.avif',
                },
            ],
        };
    },
};
</script>

<style>
.order-last {
    order: 2;
}
</style>