<template>
    <nav class="bg-red-600 text-white p-4">
        <ul class="flex space-x-6 justify-center">
            <li><router-link to="/" class="hover:underline">Home</router-link></li>
            <li><router-link to="/services" class="hover:underline">Services</router-link></li>
            <li><router-link to="/contact" class="hover:underline">Contact</router-link></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
};
</script>