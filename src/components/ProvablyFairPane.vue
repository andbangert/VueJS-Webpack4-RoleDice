<template>
  <div class="card mgt">
    <div class="card-header">
      Provably Fair
    </div>
    <div class="card-body">
      <div class="row">
        <div class="col-md-8">
          <div class="form-group">
            <label>SECRET HASH</label>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="" aria-label="" :value="secretRevealedHash">
            </div>
          </div>
          <div class="form-group">
            <label>CLIENT SEED</label>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="" aria-label="" :value="clientSeed">
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Random</button>
                <button class="btn btn-outline-secondary" type="button">Lock</button>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <div class="form-group">
            <label>PREVIOUS REVEALED SECRET</label>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="" aria-label="" :value="prevSecretRevealedHash">
            </div>
          </div>
          <div class="form-group">
            <label>PREVIOUS REVEALED SECRET HASH</label>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="" aria-label="" :value="prevSecretServerHash">
            </div>
          </div>
          <div class="form-group">
            <label>PREVIOUS CLIENT SEED</label>
            <div class="input-group">
              <input type="text" class="form-control" placeholder="" aria-label="" :value="prevClientSeed">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'ProvablyFairPane',
  computed: {
    ...mapState({
      secretRevealedHash: (state) => state.hashInfo.secretRevealedHash,
      secretServerHash: (state) => state.hashInfo.secretServerHash,
      clientSeed: (state) => state.hashInfo.clientSeed,
      prevSecretRevealedHash: (state) => state.hashInfo.prevSecretRevealedHash,
      prevSecretServerHash: (state) => state.hashInfo.prevSecretServerHash,
      prevClientSeed: (state) => state.hashInfo.prevClientSeed
    })
  }
}
</script>
