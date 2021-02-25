<template>
  <b-card>
    <!-- form -->
    <b-form class="mt-2">
      <h1>Send reports to:</h1>
      <b-row>
        <b-col sm="6">
          <b-form-group
            label="E-mail"
            label-for="account-e-mail"
          >
            <b-form-input
              name="email"
              placeholder="Email"
            />

          </b-form-group>
        </b-col>

        <b-col cols="12">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            class="mt-2 mr-1"
          >
            Save changes
          </b-button>
        </b-col>
      </b-row>
    </b-form>
  </b-card>
</template>

<script>
import {
  BButton, BForm, BFormGroup, BFormInput, BRow, BCol, BCard,
} from 'bootstrap-vue'
import Ripple from 'vue-ripple-directive'

export default {
  components: {
    BButton,
    BForm,
    BFormGroup,
    BFormInput,
    BRow,
    BCol,
    BCard,
  },
  directives: {
    Ripple,
  },
}
</script>
