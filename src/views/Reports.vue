<template>
  <div>
    <!-- First Row -->
    <b-row class="match-height">
      <b-col
        xl="4"
      >
        <b-link
          class="text-body"
          :to="{ name: 'report-details', params: { name: 'Daily Sales Data By Product', slug: 'daily-sales-data-by-product'} } "
        >
          <b-card
            title="Daily Sales Data By Product"
            class="card"
          >
            <b-card-text>Get summarized daily sales data by product.</b-card-text>
          </b-card>
        </b-link>
      </b-col>
      <b-col
        xl="4"
      >
        <b-link
          class="text-body"
          :to="{ name: 'report-details', params: { name: 'Example Report #2', slug: 'example-report-2'} } "
        >
          <b-card
            title="Example Report #2 Title Goes Here"
            class="card"
          >
            <b-card-text>Example Report #2 Description Goes Here</b-card-text>
          </b-card>
        </b-link>
      </b-col>
      <b-col
        xl="4"
      >
        <b-link
          class="text-body"
          :to="{ name: 'report-details', params: { name: 'Example Report #3', slug: 'example-report-3'} } "
        >
          <b-card
            title="Example Report #3 Title Goes Here"
            class="card"
          >
            <b-card-text>Example Report #3 Description Goes Here</b-card-text>
          </b-card>
        </b-link>
      </b-col>
    </b-row>

    <!-- Second Row -->
    <b-row class="match-height">
      <b-col
        xl="4"
      >
        <b-link
          class="text-body"
          :to="{ name: 'report-details', params: { name: 'Example Report #4', slug: 'example-report-4'} } "
        >
          <b-card
            title="Example Report #4 Title Goes Here"
            class="card"
          >
            <b-card-text>Example Report #4 Description Goes Here</b-card-text>
          </b-card>
        </b-link>
      </b-col>
      <b-col
        xl="4"
      >
        <b-link
          class="text-body"
          :to="{ name: 'report-details', params: { name: 'Example Report #5', slug: 'example-report-5'} } "
        >
          <b-card
            title="Example Report #5 Title Goes Here"
            class="card"
          >
            <b-card-text>Example Report #5 Description Goes Here</b-card-text>
          </b-card>
        </b-link>
      </b-col>
      <b-col
        xl="4"
      >
        <b-link
          class="text-body"
          :to="{ name: 'report-details', params: { name: 'Example Report #6', slug: 'example-report-6'} } "
        >
          <b-card title="Example Report #6 Title Goes Here">
            <b-card-text>Example Report #6 Description Goes Here</b-card-text>
          </b-card>
        </b-link>
      </b-col>
    </b-row>

    <!-- Third Row -->
    <b-row class="match-height">
      <b-col
        xl="4"
      >
        <b-link
          class="text-body"
          :to="{ name: 'report-details', params: { name: 'Example Report #7', slug: 'example-report-7'} } "
        >
          <b-card
            title="Example Report #7 Title Goes Here"
            class="card"
          >
            <b-card-text>Example Report #7 Description Goes Here</b-card-text>
          </b-card>
        </b-link>
      </b-col>
      <b-col
        xl="4"
      >
        <b-link
          class="text-body"
          :to="{ name: 'report-details', params: { name: 'Example Report #8', slug: 'example-report-8'} } "
        >
          <b-card
            title="Example Report #8 Title Goes Here"
            class="card"
          >
            <b-card-text>Example Report #8 Description Goes Here</b-card-text>
          </b-card>
        </b-link>
      </b-col>
      <b-col
        xl="4"
      >
        <b-link
          class="text-body"
          :to="{ name: 'report-details', params: { name: 'Example Report #9', slug: 'example-report-9'} } "
        >
          <b-card
            title="Example Report #9 Title Goes Here"
            class="card"
          >
            <b-card-text>Example Report #9 Description Goes Here</b-card-text>
          </b-card>
        </b-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BRow, BCol, BCard, BCardText, BLink,
} from 'bootstrap-vue'

export default {
  components: {
    BRow,
    BCol,
    BCard,
    BCardText,
    BLink,
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
