<template>
  <div id="app">
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="logo navbar-brand" href="#"><img src="./assets/eplogo.png" /></a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
      </div>
    </nav>
    <nav class="navbar navbar-light justify-content-between">
      <div class="form-inline">
        <balance />
      </div>
    </nav>
    <br />
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <bet-options/>
        </div>
        <div class="col-md-4">
          <stats-pane/>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <provably-fair-pane/>
        </div>
      </div>
    </div>
    <router-view/>
  </div>
</template>

<script>
import BetOptions from './components/BetOptions.vue'
import StatsPane from './components/StatsPane.vue'
import Balance from './components/Balance.vue'
import ProvablyFairPane from './components/ProvablyFairPane.vue'
import initWinChanceInput from './components/winChanceInput.js'

initWinChanceInput()

export default {
  name: 'App',
  components: { BetOptions, StatsPane, ProvablyFairPane, Balance }
}
</script>

<style>
#app {
  font-family: Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.logo img {
  height: 3rem;
}
</style>
