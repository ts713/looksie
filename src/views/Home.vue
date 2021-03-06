<template>
  <div>
    {{ storeInfo }}
    <h1>My Reports:</h1>
    <calendar />
  </div>
</template>
<script>
import Calendar from '@/components/calendar/Calendar.vue'

export default {
  components: {
    Calendar,
  },
  data() {
    return {
      search: '',
      storeInfo: null,
    }
  },
}
</script>
