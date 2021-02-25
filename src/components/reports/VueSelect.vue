<template>
  <v-select
    v-model="selected"
    :dir="$store.state.appConfig.isRTL ? 'rtl' : 'ltr'"
    multiple
    label="title"
    :options="option"
  />
</template>

<script>
import vSelect from 'vue-select'

export default {
  components: {
    vSelect,
  },
  data() {
    return {
      dir: 'ltr',
      selected: [

      ],
      option: [
        { title: 'Sales and Orders' },
        { title: 'Fulfillment and Shipping' },
        { title: 'Tax' },
        { title: 'Billing and Transactions' },
        { title: 'Marketing' },
        { title: 'Customers' },
        { title: 'Products' },
        { title: 'Marketing' },
        { title: 'Inventory' },
        { title: 'Payout Reports' },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
</style>
