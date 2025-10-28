<script>
export default {
  name: 'Inicio'
}
</script>

<template>
  <div class="inicio-container">
    <div class="hero-section">
      <h1 class="titulo-principal">Bienvenido a Nuestra Plataforma de Recetas</h1>
      <p class="subtitulo">Descubre el sabor de lo casero</p>
    </div>
    
    <div class="contenido-principal">
      <div class="tarjeta-bienvenida">
        <div class="icono-container">
          <span class="icono">👨‍🍳</span>
        </div>
        <p class="texto-bienvenida">
          Bienvenido a tu nueva fuente de inspiración culinaria. 
          Aquí encontrarás recetas deliciosas, fáciles de preparar 
          y llenas de sabor.
        </p>
      </div>

      <div class="caracteristicas">
        <h2 class="titulo-seccion">¿Qué puedes hacer aquí?</h2>
        <div class="grid-caracteristicas">
          <div class="caracteristica-item">
            <div class="caracteristica-icono">📚</div>
            <h3>Explorar Recetas</h3>
            <p>Descubre cientos de recetas organizadas por categorías</p>
          </div>
          <div class="caracteristica-item">
            <div class="caracteristica-icono">👩‍🍳</div>
            <h3>Conocer Autores</h3>
            <p>Conoce a los chefs y cocineros detrás de cada receta</p>
          </div>
          <div class="caracteristica-item">
            <div class="caracteristica-icono">⭐</div>
            <h3>Recetas Destacadas</h3>
            <p>Prueba nuestras recetas más populares y mejor valoradas</p>
          </div>
        </div>
      </div>

      <div class="llamada-accion">
        <h2>¿Listo para comenzar?</h2>
        <p>Explora nuestras categorías para descubrir deliciosas recetas que se adapten a tu gusto.</p>
        <router-link to="/categorias" class="boton-principal">
          Ver Categorías
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.inicio-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-section {
  text-align: center;
  padding: 3rem 1rem;
  background: linear-gradient(135deg, #ff9800 0%, #e65100 100%);
  border-radius: 16px;
  margin-bottom: 3rem;
  color: white;
  box-shadow: 0 8px 25px rgba(255, 152, 0, 0.3);
}

.titulo-principal {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.subtitulo {
  font-size: 1.3rem;
  opacity: 0.9;
  font-weight: 300;
}

.contenido-principal {
  display: flex;
  flex-direction: column;
  gap: 3rem;
}

.tarjeta-bienvenida {
  background: #fff9f2;
  padding: 2.5rem;
  border-radius: 12px;
  text-align: center;
  border-left: 6px solid #ff9800;
  box-shadow: 0 4px 15px rgba(255, 152, 0, 0.1);
  display: flex;
  align-items: center;
  gap: 2rem;
}

.icono-container {
  flex-shrink: 0;
}

.icono {
  font-size: 4rem;
  display: block;
}

.texto-bienvenida {
  font-size: 1.2rem;
  line-height: 1.7;
  color: #5a3e1b;
  margin: 0;
  text-align: left;
}

.caracteristicas {
  background: #fff;
  padding: 2.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
}

.titulo-seccion {
  text-align: center;
  color: #e65100;
  font-size: 2rem;
  margin-bottom: 2.5rem;
  position: relative;
}

.titulo-seccion::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 3px;
  background: #ff9800;
  border-radius: 2px;
}

.grid-caracteristicas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.caracteristica-item {
  text-align: center;
  padding: 2rem 1.5rem;
  background: #fff3e0;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  border: 2px solid transparent;
}

.caracteristica-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(255, 152, 0, 0.2);
  border-color: #ff9800;
}

.caracteristica-icono {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.caracteristica-item h3 {
  color: #e65100;
  margin-bottom: 1rem;
  font-size: 1.3rem;
}

.caracteristica-item p {
  color: #5a3e1b;
  line-height: 1.6;
  margin: 0;
}

.llamada-accion {
  text-align: center;
  padding: 3rem 2rem;
  background: linear-gradient(135deg, #fff9f2 0%, #fff3e0 100%);
  border-radius: 12px;
  border: 2px dashed #ffb74d;
}

.llamada-accion h2 {
  color: #e65100;
  margin-bottom: 1rem;
  font-size: 1.8rem;
}

.llamada-accion p {
  color: #5a3e1b;
  font-size: 1.1rem;
  margin-bottom: 2rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.6;
}

.boton-principal {
  display: inline-block;
  background: linear-gradient(135deg, #ff9800 0%, #e65100 100%);
  color: white;
  padding: 1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 152, 0, 0.3);
}

.boton-principal:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(255, 152, 0, 0.4);
}

/* Responsive */
@media (max-width: 768px) {
  .titulo-principal {
    font-size: 2rem;
  }
  
  .subtitulo {
    font-size: 1.1rem;
  }
  
  .tarjeta-bienvenida {
    flex-direction: column;
    text-align: center;
    padding: 2rem 1.5rem;
  }
  
  .texto-bienvenida {
    text-align: center;
  }
  
  .icono {
    font-size: 3rem;
  }
  
  .grid-caracteristicas {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .caracteristicas,
  .llamada-accion {
    padding: 2rem 1.5rem;
  }
}

@media (max-width: 480px) {
  .hero-section {
    padding: 2rem 1rem;
  }
  
  .titulo-principal {
    font-size: 1.7rem;
  }
  
  .contenido-principal {
    gap: 2rem;
  }
}
</style>