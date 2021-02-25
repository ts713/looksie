<template>
  <div>
    <div>
      <h1>{{ report.title }} </h1>
      <span>Category: {{ report.category }} </span>
    </div>
    <div class="mt-2">
      <h4>Report Description: </h4>
      <p> {{ report.description }} </p>
    </div>
    <h3 class="mt-2">
      Select Report Details:
    </h3>
    <b-row>
      <b-col
        lg="12"
      >
        <form-radio-basic />
      </b-col>
    </b-row>
    <b-row class="mt-2">
      <b-col
        lg="6"
      >
        <form-datepicker-basic date-title="Select Start Date" />
      </b-col>
      <b-col
        lg="6"
      >
        <form-datepicker-basic date-title="Select End Date" />
      </b-col>
    </b-row>
    <b-row>
      <b-col
        lg="6"
      >
        <b-button
          v-ripple.400="'rgba(255, 255, 255, 0.15)'"
          variant="primary"
          class="mt-2 mr-1"
        >
          Subscribe to Report
        </b-button>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import FormDatepickerBasic from '@/components/reports/FormDatepickerBasic.vue'
import FormRadioBasic from '@/components/reports/FormRadioBasic.vue'
import ReportService from '@/services/ReportService'
import {
  BRow, BCol, BButton,
} from 'bootstrap-vue'

export default {
  components: {
    FormDatepickerBasic, BRow, BCol, FormRadioBasic, BButton,
  },
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
