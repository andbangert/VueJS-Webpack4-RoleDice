import Vue from 'vue'

const alertName = 'alert'

export const componentName = {
  alert: alertName
}

export default function () {
  Vue.component(alertName, {
    template: `<div class="alert" :class="alertType" role="alert">
    {{message}}
    </div>`,
    props: ['message', 'type'],
    computed: {
      alertType: function () {
        switch (type) {
          case 'error':
            return 'alert-danger'
          case 'success':
            return 'alert-success'
          case 'warning':
            return 'alert-warning'
          case 'info':
            return 'alert-info'
        }
      }
    }
  })
}
