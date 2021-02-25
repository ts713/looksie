<template>
  <section
    v-if="Object.keys(pricing).length"
    id="pricing-plan"
  >
    <!-- title text and switch button -->
    <div class="text-center">
      <h1 class="mt-5">
        Pricing Plans
      </h1>
      <p class="mb-2 pb-75">
        All plans include 40+ advanced tools and features to boost your product. Choose the best plan to fit your needs.
      </p>
      <div class="d-flex align-items-center justify-content-center mb-5 pb-50">
        <h6 class="mr-1 mb-0">
          Monthly
        </h6>
        <b-form-checkbox
          id="priceSwitch"
          v-model="status"
          name="price-switch"
          value="annually"
          unchecked-value="monthly"
          switch
          @input="tooglePlan"
        />
        <h6 class="ml-50 mb-0">
          Annually
        </h6>
      </div>
    </div>
    <!--/ title text and switch button -->

    <!-- pricing plan cards -->
    <b-row class="pricing-card">
      <b-col
        offset-sm-2
        sm="10"
        md="12"
        offset-lg="2"
        lg="10"
        class="mx-auto"
      >
        <b-row>
          <b-col md="4">
            <b-card
              align="center"
            >
              <h3>{{ pricing.basicPlan.title }}</h3>
              <b-card-text>
                {{ pricing.basicPlan.subtitle }}
              </b-card-text>

              <!-- annual plan -->
              <div class="annual-plan">
                <div class="plan-price mt-2">
                  <sup class="font-medium-1 font-weight-bold text-primary">$</sup>
                  <span class="pricing-basic-value font-weight-bolder text-primary">{{ monthlyPlanShow ? pricing.basicPlan.monthlyPrice:pricing.basicPlan.yearlyPlan.perMonth }}</span>
                  <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/month</sub>
                </div>
                <small
                  v-show="!monthlyPlanShow"
                  class="annual-pricing text-muted"
                >USD {{ pricing.basicPlan.yearlyPlan.totalAnual }} / year</small>
              </div>
              <!--/ annual plan -->

              <!-- plan benefit -->
              <b-list-group class="list-group-circle text-left">
                <b-list-group-item
                  v-for="(data,index) in pricing.basicPlan.planBenefits"
                  :key="index"
                >
                  {{ data }}
                </b-list-group-item>
              </b-list-group>
              <!--/ plan benefit -->

              <!-- buttons -->
              <b-button
                v-ripple.400="'rgba(40, 199, 111, 0.15)'"
                block
                class="mt-2"
                variant="outline-success"
              >
                Your current plan
              </b-button>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card
              class="popular"
              align="center"
            >
              <div
                v-show="pricing.standardPlan.popular"
                class="pricing-badge text-right"
              >
                <b-badge
                  variant="light-primary"
                  pill
                >
                  Popular
                </b-badge>
              </div>
              <h3>{{ pricing.standardPlan.title }}</h3>
              <b-card-text>{{ pricing.standardPlan.subtitle }}</b-card-text>

              <!-- annual plan -->
              <div class="annual-plan">
                <div class="plan-price mt-2">
                  <sup class="font-medium-1 font-weight-bold text-primary">$</sup>
                  <span class="pricing-basic-value font-weight-bolder text-primary">{{ monthlyPlanShow ? pricing.standardPlan.monthlyPrice:pricing.standardPlan.yearlyPlan.perMonth }}</span>
                  <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/month</sub>
                </div>
                <small
                  v-show="!monthlyPlanShow"
                  class="annual-pricing text-muted"
                >USD {{ pricing.standardPlan.yearlyPlan.totalAnual }} / year</small>
              </div>
              <!--/ annual plan -->

              <!-- plan benefit -->
              <b-list-group class="list-group-circle text-left">
                <b-list-group-item
                  v-for="(data,index) in pricing.standardPlan.planBenefits"
                  :key="index"
                >
                  {{ data }}
                </b-list-group-item>
              </b-list-group>
              <!--/ plan benefit -->

              <!-- buttons -->
              <b-button
                v-ripple.400="'rgba(255, 255, 255, 0.15)'"
                block
                class="mt-2"
                variant="primary"
              >
                Upgrade
              </b-button>
            </b-card>
          </b-col>
          <b-col md="4">
            <b-card
              align="center"
            >
              <h3>{{ pricing.enterprisePlan.title }}</h3>
              <b-card-text>{{ pricing.enterprisePlan.subtitle }}</b-card-text>

              <!-- annual plan -->
              <div class="annual-plan">
                <div class="plan-price mt-2">
                  <sup class="font-medium-1 font-weight-bold text-primary">$</sup>
                  <span class="pricing-basic-value font-weight-bolder text-primary">{{ monthlyPlanShow ? pricing.enterprisePlan.monthlyPrice:pricing.enterprisePlan.yearlyPlan.perMonth }}</span>
                  <sub class="pricing-duration text-body font-medium-1 font-weight-bold">/month</sub>
                </div>
                <small
                  v-show="!monthlyPlanShow"
                  class="annual-pricing text-muted"
                >USD {{ pricing.enterprisePlan.yearlyPlan.totalAnual }} / year</small>
              </div>
              <!--/ annual plan -->

              <!-- plan benefit -->
              <b-list-group
                v-for="(data,index) in pricing.enterprisePlan.planBenefits"
                :key="index"
                class="list-group-circle text-left"
              >
                <b-list-group-item>
                  {{ data }}
                </b-list-group-item>
              </b-list-group>
              <!--/ plan benefit -->

              <!-- buttons -->
              <b-button
                v-ripple.400="'rgba(113, 102, 240, 0.15)'"
                block
                class="mt-2"
                variant="outline-primary"
              >
                Upgrade
              </b-button>
            </b-card>
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import {
  BFormCheckbox, BRow, BCol, BCard, BCardText, BListGroup, BListGroupItem, BButton, BBadge,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

// eslint-disable-next-line import/prefer-default-export
const pricingData = {
  basicPlan: {
    title: 'Basic',
    subtitle: 'A simple start for everyone',
    monthlyPrice: 0,
    yearlyPlan: {
      perMonth: 0,
      totalAnual: 0,
    },
    planBenefits: [
      '100 responses a month',
      'Unlimited forms and surveys',
      'Unlimited fields',
    ],
    popular: false,
  },
  standardPlan: {
    title: 'Standard',
    subtitle: 'For small to medium businesses',
    monthlyPrice: 49,
    yearlyPlan: {
      perMonth: 40,
      totalAnual: 480,
    },
    planBenefits: [
      'Unlimited responses',
      'Unlimited forms and surveys',
      'Instagram profile page',
    ],
    popular: true,
  },
  enterprisePlan: {
    title: 'Enterprise',
    subtitle: 'Solution for big organizations',
    monthlyPrice: 99,
    yearlyPlan: {
      perMonth: 80,
      totalAnual: 960,
    },
    planBenefits: [
      'PayPal payments',
      'Logic Jumps',
      'File upload with 5GB storage',
    ],
    popular: false,
  },
}

/* eslint-disable global-require */
export default {
  components: {
    BFormCheckbox,
    BButton,
    BCardText,
    BListGroup,
    BListGroupItem,
    BRow,
    BCol,
    BCard,
    BBadge,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      status: 'monthly',
      monthlyPlanShow: true,
      pricing: {},
    }
  },
  created() {
    this.pricing = pricingData
  },
  methods: {
    tooglePlan() {
      if (this.status === 'monthly') {
        this.monthlyPlanShow = true
      } else {
        this.monthlyPlanShow = false
      }
    },
  },
}
/* eslint-disable global-require */
</script>

<style lang="scss">
@import '@core/scss/vue/pages/page-pricing.scss';
</style>
