<template>
    <div class="contact-container p-8">
        <h1 class="text-4xl font-bold text-center mb-8">Entre em contato</h1>
        <form @submit.prevent="submitForm" class="space-y-6 max-w-3xl mx-auto">
            <div>
                <label class="block text-lg font-medium mb-2" for="name">Nome Completo</label>
                <input type="text" id="name" v-model="form.name" class="w-full p-3 border rounded-lg" required />
            </div>
            <div>
                <label class="block text-lg font-medium mb-2" for="phone">Número para contato</label>
                <input type="text" id="phone" v-model="form.phone" placeholder="55+(xx) 9xxxx-xxxx"
                    class="w-full p-3 border rounded-lg" required />
            </div>
            <div>
                <label class="block text-lg font-medium mb-2" for="city">Cidade</label>
                <select id="city" v-model="form.city" class="w-full p-3 border rounded-lg" required>
                    <option value="Belem">Belém</option>
                    <option value="Ananindeua">Ananindeua</option>
                </select>
            </div>
            <div>
                <label class="block text-lg font-medium mb-2">Gênero</label>
                <div class="flex items-center space-x-4">
                    <label>
                        <input type="radio" v-model="form.gender" value="Male" required /> Homem
                    </label>
                    <label>
                        <input type="radio" v-model="form.gender" value="Female" required /> Mulher
                    </label>
                </div>
            </div>
            <div>
                <label class="block text-lg font-medium mb-2" for="message">Motivo para contato</label>
                <textarea id="message" v-model="form.message" rows="4" class="w-full p-3 border rounded-lg"
                    required></textarea>
            </div>
            <button type="submit" class="w-full bg-red-600 text-white py-3 rounded-lg hover:bg-red-700">
                Enviar
            </button>
        </form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                name: '',
                phone: '',
                city: '',
                gender: '',
                message: '',
            },
        };
    },
    methods: {
        submitForm() {
            alert('Contato Enviado! Agora é só aguardar e entraremos en contato. Aqui estão seus dados:\n' + JSON.stringify(this.form, null, 2));
            this.form = { name: '', phone: '', city: '', gender: '', message: '' };
        },
    },
};
</script>