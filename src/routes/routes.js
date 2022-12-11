const express= require('express')
const router= express.Router()
const teacherController= ("../controllers/teacherController")
const studentController= ("../controllers/studentController")
const middleware= ("../middleware/auth")

//-------------------------teacher--------------------------------
router.post("/teacher", teacherController.createTeacher)
router.post("/login", teacherController.login)

//---------------------------student------------------------------

router.post("/student", studentController.createstudent)
router.get("/student", studentController.getstudent)
router.put("/student",middleware.auth,studentController.updatestudent)
router.delete("/student/studentId",middleware.auth,studentController.deletestudent)