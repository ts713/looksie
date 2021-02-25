<template>
  <div>
    <b-row>
      <b-col
        xl="6"
        class="mt-1"
      >
        <h3>
          Filter By Search:
        </h3>
        <b-form-input
          v-model="search"
          xl="12"
          type="text"
          placeholder="Search for a report..."
        />
      </b-col>
      <b-col
        xl="6"
        class="mt-1"
      >
        <h3>
          Filter By Category:
        </h3>
        <vue-select />
      </b-col>
    </b-row>
    <div>
      <h3 class="mt-3">
        Report List:
      </h3>
      <b-row
        v-for="rowIdx in Math.ceil(filteredList.length / 3)"
        :key="rowIdx"
        class="align-self-stretch mt-1"
      >
        <b-col
          v-for="report in filteredList.slice(3 * (rowIdx - 1), 3 * rowIdx)"
          :key="report"
          xl="4"
          class="mt-1"
        >
          <b-link
            class="text-body"
            :to="{ name: 'report-details', params: { reportId: report.id, slug: createSlug(report.title)} } "
          >
            <b-card
              :title="report.title"
              class="card h-100"
            >
              <small class="text-muted">Category: {{ report.category }}</small>
              <b-card-text class="mt-1">
                {{ report.description }}
              </b-card-text>
            </b-card>
          </b-link>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import {
  BRow, BCol, BCard, BCardText, BLink, BFormInput,
} from 'bootstrap-vue'
import ReportService from '@/services/ReportService'
import slugify from 'limax'
import VueSelect from '@/components/reports/VueSelect.vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardText,
    BLink,
    BFormInput,

    VueSelect,
  },
  data() {
    return {
      search: '',
      reports: [],
    }
  },
  computed: {
    filteredList() {
      return this.reports.filter(report => {
        const query = `${report.title} ${report.description}`
        return query.toLowerCase().includes(this.search.toLowerCase())
      })
    },
  },
  created() {
    this.getReportsData()
  },
  methods: {
    async getReportsData() {
      ReportService.getAllReports()
        .then(
          (reports => {
            this.$set(this, 'reports', reports)
          }),
        )
    },
    createSlug(str) {
      return slugify(str)
    },
  },
}
</script>

<style lang="scss">
//@import "@/@core/scss/base/pages/app-ecommerce.scss";
.card {
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 4px 25px 0 rgba(black, 0.25);
  }
}
</style>
