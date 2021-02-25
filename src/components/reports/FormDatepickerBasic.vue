<template>
  <div>
    <label for="datepicker">{{ dateTitle }}</label>
    <b-form-datepicker
      id="datepicker"
      v-model="value"
      class="mb-1"
    />
  </div>
</template>

<script>
import { BFormDatepicker } from 'bootstrap-vue'

export default {
  components: {
    BFormDatepicker,
  },
  props: ['dateTitle'],
  data: () => ({
    value: '',
  }),
}
</script>
