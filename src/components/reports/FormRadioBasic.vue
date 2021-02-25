<template>
  <div class="demo-inline-spacing">
    <b-form-radio
      v-model="Selected"
      name="some-radio9"
      value="One Time"
      class="custom-control-primary"
    >
      One Time
    </b-form-radio>
    <b-form-radio
      v-model="Selected"
      name="some-radio9"
      value="Daily"
      class="custom-control-primary"
    >
      Daily
    </b-form-radio>
    <b-form-radio
      v-model="Selected"
      name="some-radio9"
      value="Weekly"
      class="custom-control-primary"
    >
      Weekly
    </b-form-radio>
    <b-form-radio
      v-model="Selected"
      name="some-radio9"
      value="Monthly"
      class="custom-control-primary"
    >
      Monthly
    </b-form-radio>
  </div>
</template>

<script>
import { BFormRadio } from 'bootstrap-vue'

export default {
  components: {
    BFormRadio,
  },
  data() {
    return {
      Selected: 'One Time',
    }
  },
}
</script>
