<script>
export default {
  name: 'Categorias'
}
</script>

<template>
  <div class="categorias-container">
    <div class="categorias-header">
      <h1 class="titulo-principal">Nuestras Categorías de Recetas</h1>
      <p class="subtitulo">Explora por tipo de preparación</p>
    </div>
    
    <!-- Navegación para subcategorías -->
    <nav class="navegacion-categorias">
      <div class="nav-inner">
        <router-link to="/categorias/postres" class="categoria-link">
          <span class="categoria-icono">🍰</span>
          <span class="categoria-texto">Postres</span>
        </router-link>
        <div class="separador">|</div>
        <router-link to="/categorias/bebidas" class="categoria-link">
          <span class="categoria-icono">🥤</span>
          <span class="categoria-texto">Bebidas</span>
        </router-link>
      </div>
    </nav>
    
    <!-- Contenedor para el contenido de subcategorías -->
    <div class="contenido-subcategorias">
      <router-view />
    </div>

    <!-- Mensaje cuando no hay subcategoría seleccionada -->
    <div v-if="$route.path === '/categorias'" class="mensaje-seleccion">
      <div class="mensaje-icono">👆</div>
      <h2>Selecciona una categoría para explorar</h2>
      <p>Elige entre postres o bebidas para ver nuestras deliciosas recetas</p>
    </div>
  </div>
</template>

<style scoped>
.categorias-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  background-image: url();
}

.categorias-header {
  text-align: center;
  padding: 2rem 1rem;
  margin-bottom: 2rem;
}

.titulo-principal {
  color: #e65100;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  position: relative;
}

.titulo-principal::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 4px;
  background: linear-gradient(90deg, #ff9800, #e65100);
  border-radius: 2px;
}

.subtitulo {
  color: #5a3e1b;
  font-size: 1.2rem;
  opacity: 0.8;
  margin-top: 1.5rem;
}

.navegacion-categorias {
  background: #fff9f2;
  padding: 1.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
  box-shadow: 0 4px 15px rgba(255, 152, 0, 0.1);
  border: 2px solid #fff3e0;
}

.nav-inner {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.categoria-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem 2rem;
  background: white;
  border-radius: 50px;
  text-decoration: none;
  color: #5a3e1b;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  box-shadow: 0 2px 8px rgba(255, 152, 0, 0.1);
  min-width: 160px;
  justify-content: center;
}

.categoria-link:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(255, 152, 0, 0.2);
  border-color: #ffb74d;
}

.categoria-link.router-link-active {
  background: linear-gradient(135deg, #ff9800 0%, #e65100 100%);
  color: white;
  box-shadow: 0 4px 15px rgba(255, 152, 0, 0.3);
}

.categoria-link.router-link-active .categoria-icono {
  transform: scale(1.2);
}

.categoria-icono {
  font-size: 1.5rem;
  transition: transform 0.3s ease;
}

.categoria-texto {
  font-size: 1.1rem;
}

.separador {
  color: #ffb74d;
  font-weight: 300;
  font-size: 1.5rem;
}

.contenido-subcategorias {
  min-height: 400px;
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  padding: 2rem;
  margin-bottom: 2rem;
}

.mensaje-seleccion {
  text-align: center;
  padding: 4rem 2rem;
  background: #fff9f2;
  border-radius: 12px;
  border: 2px dashed #ffb74d;
}

.mensaje-icono {
  font-size: 4rem;
  margin-bottom: 1.5rem;
}

.mensaje-seleccion h2 {
  color: #e65100;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.mensaje-seleccion p {
  color: #5a3e1b;
  font-size: 1.1rem;
  line-height: 1.6;
  max-width: 500px;
  margin: 0 auto;
}

/* Estados de carga y transiciones */
.contenido-subcategorias {
  transition: all 0.3s ease;
}

/* Efectos de hover mejorados */
.categoria-link {
  position: relative;
  overflow: hidden;
}

.categoria-link::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);
  transition: left 0.5s ease;
}

.categoria-link:hover::before {
  left: 100%;
}

/* Responsive */
@media (max-width: 768px) {
  .titulo-principal {
    font-size: 2rem;
  }
  
  .nav-inner {
    flex-direction: column;
    gap: 1rem;
  }
  
  .separador {
    display: none;
  }
  
  .categoria-link {
    width: 100%;
    max-width: 280px;
    padding: 1.2rem 2rem;
  }
  
  .contenido-subcategorias {
    padding: 1.5rem;
  }
  
  .mensaje-seleccion {
    padding: 3rem 1.5rem;
  }
  
  .mensaje-icono {
    font-size: 3rem;
  }
}

@media (max-width: 480px) {
  .categorias-header {
    padding: 1.5rem 1rem;
  }
  
  .titulo-principal {
    font-size: 1.7rem;
  }
  
  .navegacion-categorias {
    padding: 1rem;
  }
  
  .categoria-link {
    padding: 1rem 1.5rem;
  }
  
  .contenido-subcategorias {
    padding: 1rem;
    min-height: 300px;
  }
}

/* Animación de entrada */
.categorias-container {
  animation: fadeInUp 0.6s ease;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>