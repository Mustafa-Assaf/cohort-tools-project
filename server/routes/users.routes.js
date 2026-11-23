const router = require("express").Router();
const { verifyToken } = require("../middlewares/auth.middlewares")

// Example of a route only for logged in users
router.get("/users/:id", verifyToken, (req, res) => {
    console.log(req.payload) 
  

    res.send("accessing route only for logged in users")
})



module.exports = router;