import axios from 'axios'

export default {
  async getAllReports() {
    const res = await axios.get('http://localhost:8080/api/reports')
    return res.data
  },

  async getReport(id) {
    const res = await axios.get(`http://localhost:8080/api/reports/${id}`)
    return res.data
  },
}
