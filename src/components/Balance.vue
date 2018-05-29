<template>
  <div class="input-group">
    <div class="input-group-prepend">
      <span class="input-group-text">BALANCE</span>
    </div>
    <input type="text" class="form-control" aria-label="Balance" aria-describedby="Balance" :value="balance" readonly>
    <div class="input-group-append">
      <button class="btn btn-outline-secondary" type="button" @click="faucetBalance" :disabled="balance > 0">FAUCET</button>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'Balance',
  computed: {
    ...mapState({
      balance: (state) => state.balance
    })
  },
  methods: {
    ...mapActions(['faucetBalance'])
  }
}
</script>
