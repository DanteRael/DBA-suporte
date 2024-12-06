<template>
    <div class="border p-4 rounded shadow-md">
        <h3 class="text-xl font-bold text-red-600">{{ title }}</h3>
        <p class="text-gray-600">{{ description }}</p>
    </div>
</template>

<script>
export default {
    props: {
        title: String,
        description: String,
    },
};
</script>