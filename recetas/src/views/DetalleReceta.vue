<script>
import { recetas } from '../data/recetas.js'


export default {
  name: 'DetalleReceta',
  props: ['id'],
  methods: {
    getImageUrl(nombreArchivo) {
      return new URL(`../assets/${nombreArchivo}`, import.meta.url).href
    }
  },
  computed: {
    receta() {
      return recetas.find(r => r.id === Number(this.id))
    }
  }
}
</script>


<template>
  <div v-if="receta" class="detalle-receta">
    <h1>{{ receta.nombre }}</h1>
    <img :src="getImageUrl(receta.imagen)" :alt="receta.nombre" class="detalle-imagen" />
    <p><strong>Descripción:</strong> {{ receta.descripcion }}</p>

    <p><strong>Ingredientes:</strong></p>
    <ul>
      <li v-for="(ingrediente, index) in receta.ingredientes" :key="index">
        {{ ingrediente }}
      </li>
    </ul>

    <p><strong>Instrucciones:</strong> {{ receta.instrucciones }}</p>
    
    <div class="receta-meta">
      <p><strong>Categoría:</strong> {{ receta.categoria }}</p>
      <p><strong>Autor:</strong> {{ receta.autor }}</p>
    </div>
  </div>
  <div v-else class="no-receta">
    <p>No se encontró la receta solicitada.</p>
  </div>
</template>


<style scoped>
.detalle-receta {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem;
  background-color: #fff9f2;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.1);
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  color: #5a3e1b;
}

h1 {
  text-align: center;
  color: #e65100;
  margin-bottom: 1.5rem;
  font-size: 2.2rem;
  border-bottom: 2px solid #ff9800;
  padding-bottom: 0.5rem;
}

.detalle-imagen {
  max-width: 400px;
  width: 100%;
  border-radius: 8px;
  margin: 0 auto 1.5rem;
  display: block;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

p {
  margin-bottom: 1rem;
  line-height: 1.6;
}

strong {
  color: #ff5722;
  font-weight: 600;
}

ul {
  background-color: #fff3e0;
  padding: 1rem 1rem 1rem 2rem;
  border-radius: 8px;
  margin-bottom: 1.5rem;
  border-left: 4px solid #ff9800;
}

li {
  margin-bottom: 0.5rem;
  line-height: 1.5;
}

.receta-meta {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-top: 1.5rem;
  padding-top: 1rem;
  border-top: 1px dashed #ffb74d;
}

.receta-meta p {
  margin-bottom: 0.5rem;
  flex-basis: 48%;
}

.no-receta {
  text-align: center;
  padding: 3rem;
  color: #e65100;
  font-size: 1.2rem;
}

@media (max-width: 768px) {
  .detalle-receta {
    padding: 1.5rem;
    margin: 0 1rem;
  }
  
  h1 {
    font-size: 1.8rem;
  }
  
  .receta-meta p {
    flex-basis: 100%;
  }
}
</style>
