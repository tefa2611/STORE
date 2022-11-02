const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  res.json([
    {
      name:"Azul",
      intensity: "Claro"
    },
    {
      name:"Azul",
      intensity: "Oscuro"
    },
    {
      name:"Verde",
      intensity: "Oscuro"
    },
    {
      name:"Verde",
      intensity: "Oscuro"
    },
    {
      name:"Blaco"
    },
    {
      name:"Negro"
    }
  ]
  )
})

module.exports = router
