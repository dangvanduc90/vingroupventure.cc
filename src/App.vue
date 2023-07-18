<template>
  <div id="app">
      <!-- navbar -->
      <div class="navbar navbar-expand-lg fixed-top navbar-dark bg-primary">
        <div class="container">
        <router-link to="/" class="navbar-brand">Home</router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
          <ul class="navbar-nav">
      
            <li class="nav-item">
              <router-link class="nav-link" to="/blog">Blog</router-link>
            </li>
            <li class="nav-item">
            <router-link class="nav-link" to="/services">Services</router-link>
            </li>
            <li class="nav-item">
             <router-link class="nav-link" to="/contact">contact</router-link>
            </li>
            <li class="nav-item">
             <router-link class="nav-link" to="/login">login</router-link>
            </li>
          </ul>
        </div>
        </div>
      </div>
       <transition name="moveInUp">
         <router-view/>
       </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import './assets/app.css';
@import './assets/register.css';
</style>
