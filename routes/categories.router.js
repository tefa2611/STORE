const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  res.json(
    [
      {
        name:"Buzos"
      },
      {
        name:"Camisetas"
      },
      {
        name:"Pantalones"
      },
      {
        name:"Juguetes"
      },
      {
        name:"Gorras"
      }
    ]
  )
})

module.exports = router
