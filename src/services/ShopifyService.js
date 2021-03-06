import axios from 'axios'

export default {
  async getShopData() {
    try {
      const res = await axios.get('https://a615185aaf85.ngrok.io/shop')
      return res.data
    } catch (err) {
      // console.log(err)
    }
    return null
  },
}
