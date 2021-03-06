<template>
  <div>
    <h5>Report emails sent to: <b>{{ $store.state.user.email }}</b></h5>
    <pricing />
  </div>
</template>

<script>
import Pricing from '@/components/account/Pricing.vue'

export default {
  components: {
    Pricing,
  },
}
</script>

<style>

</style>
