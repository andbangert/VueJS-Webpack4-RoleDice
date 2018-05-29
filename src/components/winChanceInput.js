'use strict'

import Vue from 'vue'

const winChanceChangeName = 'win-chance-changed'
const winChanceAppliedName = 'win-chance-applied'

export const componentName = {
  winChanceChangeName: winChanceChangeName,
  winChanceAppliedName: winChanceAppliedName
}

export default function () {
  Vue.component(winChanceChangeName, {
    template: `
    <input type="text" class="form-control" placeholder="Win chance" aria-label="Win chance" aria-describedby="basic-addon2" :value="value" @input="$emit('update:value', $event.target.value)">
  `,
    props: ['initialValue', 'symbol'],
    data () {
      return {
        value: parseFloat(this.initialValue).toFixed(2)
      }
    }
  })

  Vue.component(winChanceAppliedName, {
    template: '<input type="text" class="form-control" placeholder="Win chance" aria-label="Win chance" aria-describedby="basic-addon2" :value="valueView" readonly>',
    props: ['initialValue', 'symbol'],
    computed: {
      valueView: function () {
        let num = parseFloat(this.initialValue).toFixed(2)
        return `${num} ${this.symbol}`
      }
    }
  })
}
