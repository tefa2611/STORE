const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  res.json([
    {
      name:"Mujer"
    },
    {
      name:"Hombre"
    },
    {
      name:"Niño"
    },
    {
      name:"Niña"
    }
  ]
  )
})

module.exports = router
