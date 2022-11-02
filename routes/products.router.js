const express = require('express')
const router = express.Router()

router.get("/", (req, res) => {
  res.json([
    {
      name:"Buzos Sakura",
      price: 70000,
      size: "L"

    },
    {
      name:"Buzos Tokyo",
      price: 65000,
      size: "M"
    },
    {
      name:"Buzos Avatar",
      price: 70000,
      size: "M"
    },
    {
      name:"Buzos Goku",
      price: 60000,
      size: "M"
    },
    {
      name:"Buzos Kunfu",
      price: 60000,
      size: "M"
    }
  ]
  )
})

module.exports = router
