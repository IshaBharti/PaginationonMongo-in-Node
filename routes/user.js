var express=require("express")
var router=express.Router()
var userController=require("../controller/userController")
router.post('/creatingPost',userController.createpage)
router.get('/getpage',userController.getPage)
router.get('/limitpage',userController.limitPage)
router.get('/sorting',userController.sorting)
router.get('/exist',userController.exist)
router.get('/find_one',userController.find_one)
router.get('/equaldata',userController.equal_data)
router.post('/addabout',userController.add_aboutuser)

router.get('/added_schema',userController.add_schema)
router.get('/agrregate',userController.agrregate_data)
router.get('/getTime',userController.get_time)









module.exports=router