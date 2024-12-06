import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Certifique-se de importar o router

import './style.css';

createApp(App).use(router).mount('#app'); // Certifique-se de adicionar o router aqui
