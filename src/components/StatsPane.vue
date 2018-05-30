<template>
  <div class="card">
    <div class="card-header">
      Stats
    </div>
    <div class="card-body text-center">
      <div class="stats text-left">
        <div class="stats-item">
          <div>
            <span>Wins:&nbsp;
              <span class="font-weight-bold text-success">{{success}}</span>
            </span>
          </div>
        </div>
        <div class="stats-item">
          <div>
            <span>Losses:&nbsp;
              <span class="font-weight-bold text-danger">{{fail}}</span>
            </span>
          </div>
        </div>
        <div class="stats-item">
          <div>
            <span>Bets:&nbsp;
              <span class="font-weight-bold text-dark">{{count}}</span>
            </span>
          </div>
        </div>
        <div class="stats-item">
          <div>
            <span>Profit:&nbsp;
              <span class="font-weight-bold text-dark">{{successProfit}}</span>
            </span>
          </div>
        </div>
      </div>
      <a href="#" class="btn btn-dark" @click="resetStats">Reset</a>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'StatsPane',
  computed: {
    ...mapState({
      success: (state) => state.stats.success,
      fail: (state) => state.stats.fail,
      count: (state) => state.stats.count,
      successProfit: (state) => state.stats.successProfit
    })
  },
  methods: {
    ...mapActions(['resetStats'])
  }
}
</script>
<style scoped>
.stats-item {
  padding: 0.7rem 0;
}
</style>
