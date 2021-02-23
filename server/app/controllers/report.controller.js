/* eslint-disable no-unused-vars */
const db = require('../models')

const Report = db.reports
const { Op } = db.Sequelize

exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({
      message: 'Content can not be empty!',
    })
    return
  }

  // Create a Report
  const report = {
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
  }

  // Save Report in the database
  Report.create(report)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
            err.message || 'Some error occurred while creating the Report.',
      })
    })
}

exports.findAll = (req, res) => {
  const { title } = req.query
  const condition = title ? { title: { [Op.like]: `%${title}%` } } : null

  Report.findAll({ where: condition })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
            err.message || 'Some error occurred while retrieving reports.',
      })
    })
}

// Find a single Report with an id
exports.findOne = (req, res) => {
  const { id } = req.params

  Report.findByPk(id)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: `Error retrieving Report with id=${id}`,
      })
    })
}

// Update a Report by the id in the request
exports.update = (req, res) => {
  const { id } = req.params

  Report.update(req.body, {
    where: { id },
  })
    .then(num => {
      if (num === 1) {
        res.send({
          message: 'Report was updated successfully.',
        })
      } else {
        res.send({
          message: `Cannot update Report with id=${id}. Maybe Report was not found or req.body is empty!`,
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Error updating Report with id=${id}`,
      })
    })
}

// Delete a Report with the specified id in the request
exports.delete = (req, res) => {
  const { id } = req.params

  Report.destroy({
    where: { id },
  })
    .then(num => {
      if (num === 1) {
        res.send({
          message: 'Report was deleted successfully!',
        })
      } else {
        res.send({
          message: `Cannot delete Report with id=${id}. Maybe Report was not found!`,
        })
      }
    })
    .catch(err => {
      res.status(500).send({
        message: `Could not delete Report with id=${id}`,
      })
    })
}

// Delete all Reports from the database.
exports.deleteAll = (req, res) => {
  Report.destroy({
    where: {},
    truncate: false,
  })
    .then(nums => {
      res.send({ message: `${nums} Reports were deleted successfully!` })
    })
    .catch(err => {
      res.status(500).send({
        message:
            err.message || 'Some error occurred while removing all reports.',
      })
    })
}
// Find all published Reports
exports.findAllPublished = (req, res) => {
  Report.findAll({ where: { published: true } })
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message:
            err.message || 'Some error occurred while retrieving reports.',
      })
    })
}
