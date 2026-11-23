const { Router } = require("express");
const router = Router();

const studentsRouter = require("./students.routes");
router.use( "/students", studentsRouter);

const cohortsRouter = require("./cohorts.routes");
router.use("/cohorts", cohortsRouter);

const authRouter = require("./auth.routes")
router.use("/auth", authRouter)

const userRouter = require("./users.routes")
router.use("/users", userRouter)


module.exports = router;
