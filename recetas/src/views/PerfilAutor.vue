<script>
export default {
  name: 'PerfilAutor',
  props: ['nombre'],
  mounted() {
    if(this.nombre.toLowerCase() === 'daniela') {
      console.log('¡Hola! Bienvenido a tu perfil.');
    }
  }
}
</script>

<template>
  <div class="perfil-simple">
    <div class="perfil-header">
      <h1>Perfil del Autor: {{ nombre }}</h1>
      <div v-if="nombre.toLowerCase() === 'daniela'" class="badge">
        Autora Destacada
      </div>
    </div>
    
    <div class="perfil-content">
      <p>Bienvenido al perfil de {{ nombre }}.</p>
      <p>Este es un ejemplo de perfil personalizado.</p>
      
      <div class="info-extra">
        <h3>Sobre {{ nombre }}</h3>
        <p>Apasionado de la cocina con experiencia creando recetas deliciosas y fáciles de preparar.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.perfil-simple {
  max-width: 600px;
  margin: 0 auto;
  padding: 2rem;
}

.perfil-header {
  text-align: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid #ff9800;
}

.perfil-header h1 {
  color: #e65100;
  margin-bottom: 1rem;
}

.badge {
  display: inline-block;
  background: #ff9800;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.9rem;
  font-weight: 600;
}

.perfil-content {
  background: #fff9f2;
  padding: 2rem;
  border-radius: 8px;
  border-left: 4px solid #ff9800;
}

.perfil-content p {
  color: #5a3e1b;
  line-height: 1.6;
  margin-bottom: 1rem;
}

.info-extra {
  margin-top: 1.5rem;
  padding-top: 1.5rem;
  border-top: 1px solid #ffb74d;
}

.info-extra h3 {
  color: #e65100;
  margin-bottom: 1rem;
}

/* Responsive */
@media (max-width: 768px) {
  .perfil-simple {
    padding: 1rem;
  }
  
  .perfil-content {
    padding: 1.5rem;
  }
}
</style>