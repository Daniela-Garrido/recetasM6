<script>
export default {
  name: 'Navbar'
}
</script>

<template>
  <nav class="navbar">
    <div class="nav-container">
      <router-link to="/" class="nav-link">Inicio</router-link>
      <span class="nav-separator">|</span>
      <router-link to="/categorias" class="nav-link">Categorías</router-link>
      <span class="nav-separator">|</span>
      <router-link :to="'/receta/1'" class="nav-link">Receta Demo</router-link>
      <span class="nav-separator">|</span>
      <router-link :to="'/autor/Daniela'" class="nav-link">Perfil Autor</router-link>
    </div>
  </nav>
</template>

<style scoped>
.navbar {
  background: linear-gradient(135deg, #ff9800 0%, #e65100 100%);
  padding: 1rem 0;
  box-shadow: 0 2px 10px rgba(230, 81, 0, 0.3);
  margin-bottom: 2rem;
}

.nav-container {
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 1rem;
}

.nav-link {
  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.2);
  transform: translateY(-2px);
}

.nav-link.router-link-active {
  background-color: #fff;
  color: #e65100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.nav-link.router-link-active::after {
  content: '';
  position: absolute;
  bottom: -8px;
  left: 50%;
  transform: translateX(-50%);
  width: 6px;
  height: 6px;
  background-color: #fff;
  border-radius: 50%;
}

.nav-separator {
  color: rgba(255, 255, 255, 0.7);
  margin: 0 0.5rem;
  font-weight: 300;
}

/* Efecto de subrayado animado */
.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 50%;
  width: 0;
  height: 2px;
  background-color: #fff;
  transition: all 0.3s ease;
  transform: translateX(-50%);
}

.nav-link:hover::before {
  width: 80%;
}

.nav-link.router-link-active::before {
  background-color: #e65100;
  width: 80%;
}

/* Responsive */
@media (max-width: 768px) {
  .nav-container {
    flex-direction: column;
    gap: 0.5rem;
  }
  
  .nav-separator {
    display: none;
  }
  
  .nav-link {
    padding: 0.75rem 1.5rem;
    width: 200px;
    text-align: center;
  }
  
  .nav-link.router-link-active::after {
    bottom: -4px;
  }
}

@media (max-width: 480px) {
  .navbar {
    padding: 0.75rem 0;
  }
  
  .nav-link {
    font-size: 1rem;
    padding: 0.6rem 1.2rem;
    width: 180px;
  }
}
</style>