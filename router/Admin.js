const express = require("express");
const router = express.Router();
const {AdminController } =require('../controllers');


// ________________________Création Route Admin______________________________________________________________________________

// ------Product------
router.route("create")
.post( AdminController.createProduct)
// _____Add Category______
.post(AdminController.creatCategory)

router.route("Products")
.get(AdminController.getProduct)
.put(AdminController.updateProduct)
.delete(AdminController.deleteProduct)

// ------categorie------
router.route("Category")
.get(AdminController.getCategory)
.put(AdminController.updateCategory)
.delete(AdminController.deleteCategory)

// ----------Route User------
router.route("Admin/user")
.post(AdminController.createUser)
.get(AdminController.getUsers)
.get(AdminController.getUserById)
.put(AdminController.updateUser)




module.export = router ;