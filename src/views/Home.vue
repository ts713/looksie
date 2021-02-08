<template>
  <div>
    <b-row class="match-height">
      <b-col
        xl="12"
      >
        <b-card>
          <h5>Add New Store</h5>
          <b-card-text
            class="font-small-3"
          >
            Add a Shopify Store to your Dashboard.
          </b-card-text>

          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
          >
            <b-link
              class="text-white"
              :to="{ name: 'new-store', params: { name: 'Add a New Store', slug: 'new-store'} } "
            >
              Add Store
            </b-link>
          </b-button>
        </b-card>
      </b-col>
    </b-row>

    <h1>My Stores: </h1>
    <b-row class="match-height">
      <b-col
        xl="6"
      >
        <b-link
          class="text-body"
          :to="{ name: 'store-details', params: { name: 'Store Title #1', slug: 'store-title-1'} } "
        >
          <b-card class="card">
            <h5>Store Title #1</h5>
            <b-card-text class="font-small-3">
              Subtext Store Title Here
            </b-card-text>
          </b-card>
        </b-link>
      </b-col>
      <b-col
        xl="6"
      >
        <b-link
          class="text-body"
          :to="{ name: 'store-details', params: { name: 'Store Title #2', slug: 'store-title-2'} } "
        >
          <b-card class="card">
            <h5>Store Title #2</h5>
            <b-card-text class="font-small-3">
              Subtext Store Title 2 Here
            </b-card-text>
          </b-card>
        </b-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import {
  BCard, BCardText, BButton, BRow, BCol, BLink,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BCard,
    BCardText,
    BButton,
    BRow,
    BCol,
    BLink,
  },
  directives: {
    Ripple,
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
