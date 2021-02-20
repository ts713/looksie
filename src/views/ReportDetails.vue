<template>
  <div>
    <p>Category: {{ report.category }} </p>
    <p>{{ report.description }} </p>
  </div>
</template>

<script>
import ReportService from '@/services/ReportService'

export default {
  props: {
    reportId: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      report: [],
    }
  },
  created() {
    this.getReportData()
  },
  methods: {
    async getReportData() {
      ReportService.getReport(this.reportId)
        .then(
          (report => {
            this.$set(this, 'report', report)
          }),
        )
    },
  },
}
</script>

<style>

</style>
