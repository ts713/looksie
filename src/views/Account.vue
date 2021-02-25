<template>
  <div>
    <account-setting-general />
    <pricing />
  </div>
</template>

<script>
import AccountSettingGeneral from '@/components/account/AccountSettingGeneral.vue'
import Pricing from '@/components/account/Pricing.vue'

export default {
  components: {
    AccountSettingGeneral,
    Pricing,
  },
}
</script>

<style>

</style>
