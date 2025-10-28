<script>
import { recetas } from '../../data/recetas.js'

export default {
    name: 'Bebidas',
    methods: {
        getImageUrl(nombreArchivo) {
            return new URL(`../../assets/${nombreArchivo}`, import.meta.url).href
        }
    },
    computed: {
        bebidas() {
            return recetas.filter(r => r.categoria === 'bebidas')
        }
    }
}
</script>

<template>
    <div class="bebidas-container">
        <h2 class="titulo-seccion">Descubre nuestras deliciosas bebidas naturales</h2>
        
        <div class="cards-container">
            <div v-for="receta in bebidas" :key="receta.id" class="card">
                <img :src="getImageUrl(receta.imagen)" :alt="receta.nombre" class="card-image" />
                <div class="card-content">
                    <h3>{{ receta.nombre }}</h3>
                    <p class="card-descripcion">{{ receta.descripcion }}</p>
                    <div class="card-footer">
                        <router-link :to="`/receta/${receta.id}`" class="btn">Ver Receta</router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.bebidas-container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 1rem;
}

.titulo-seccion {
    color: #e65100;
    text-align: center;
    font-size: 2.2rem;
    margin-bottom: 3rem;
    font-weight: 700;
    line-height: 1.3;
}

.cards-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 2rem;
    padding: 1rem 0;
}

.card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(255, 152, 0, 0.1);
    transition: all 0.3s ease;
    border: 1px solid #fff3e0;
    display: flex;
    flex-direction: column;
    height: 100%;
}

.card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(255, 152, 0, 0.2);
}

.card-image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-bottom: 3px solid #ff9800;
}

.card-content {
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
}

.card h3 {
    color: #e65100;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    font-weight: 600;
}

.card-descripcion {
    color: #5a3e1b;
    line-height: 1.5;
    margin-bottom: 1.5rem;
    font-size: 0.95rem;
    flex-grow: 1;
}

.card-footer {
    margin-top: auto;
    padding-top: 1rem;
}

.btn {
    display: inline-block;
    background: linear-gradient(135deg, #ff9800 0%, #e65100 100%);
    color: white;
    padding: 0.8rem 1.5rem;
    border-radius: 25px;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.9rem;
    transition: all 0.3s ease;
    text-align: center;
    width: 100%;
    box-sizing: border-box;
    border: none;
    cursor: pointer;
}

.btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);
}

/* Estado cuando no hay bebidas */
.cards-container:empty::after {
    content: "No hay bebidas disponibles";
    text-align: center;
    color: #5a3e1b;
    font-size: 1.1rem;
    padding: 3rem;
    display: block;
}

/* Responsive */
@media (max-width: 768px) {
    .bebidas-container {
        padding: 1.5rem 1rem;
    }
    
    .titulo-seccion {
        font-size: 1.8rem;
        margin-bottom: 2rem;
    }
    
    .cards-container {
        grid-template-columns: 1fr;
        gap: 1.5rem;
    }
    
    .card-content {
        padding: 1.2rem;
    }
}

@media (max-width: 480px) {
    .bebidas-container {
        padding: 1rem 0.5rem;
    }
    
    .titulo-seccion {
        font-size: 1.6rem;
    }
    
    .cards-container {
        grid-template-columns: 1fr;
    }
}
</style>