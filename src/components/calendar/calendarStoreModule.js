import axios from '@axios'

export default {
  namespaced: true,
  state: {
    calendarOptions: [
      {
        color: 'primary',
        label: 'Sales and Orders',
      },
      {
        color: 'primary',
        label: 'Fulfillment and Shipping',
      },
      {
        color: 'primary',
        label: 'Tax',
      },
      {
        color: 'primary',
        label: 'Billing and Transactions',
      },
      {
        color: 'primary',
        label: 'Customers',
      },
      {
        color: 'primary',
        label: 'Products',
      },
      {
        color: 'primary',
        label: 'Marketing',
      },
      {
        color: 'primary',
        label: 'Inventory',
      },
      {
        color: 'primary',
        label: 'Payout Reports',
      },
    ],
    selectedCalendars: [
      'Sales and Orders', 'Fulfillment and Shipping', 'Tax', 'Billing and Transactions',
      'Customers', 'Products', 'Marketing', 'Inventory', 'Payout Reports',
    ],
  },
  getters: {},
  mutations: {
    SET_SELECTED_EVENTS(state, val) {
      state.selectedCalendars = val
    },
  },
  actions: {
    fetchEvents(ctx, { calendars }) {
      return new Promise((resolve, reject) => {
        axios
          .get('/apps/calendar/events', {
            params: {
              calendars: calendars.join(','),
            },
          })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    addEvent(ctx, { event }) {
      return new Promise((resolve, reject) => {
        axios
          .post('/apps/calendar/events', { event })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    updateEvent(ctx, { event }) {
      return new Promise((resolve, reject) => {
        axios
          .post(`/apps/calendar/events/${event.id}`, { event })
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    removeEvent(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .delete(`/apps/calendar/events/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
  },
}
