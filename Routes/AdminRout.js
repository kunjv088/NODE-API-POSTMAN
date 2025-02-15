const express = require("express")
const ctl = require("../controller/AdminCtl")
const rout = express.Router()
const AdminAuth = require("../middlewear/AdminAuth")

rout.get("/",AdminAuth,ctl.ViewAdmin)
rout.post("/adminRegister",ctl.AdminRegister)
rout.post("/adminLogin",ctl.AdminLogin)
rout.put("/changePass",AdminAuth,ctl.ChangePassword)
rout.post("/forgotPassword",ctl.forgetPassword)
rout.post("/registerManager",ctl.ManagerRegister)
rout.get("/viewManagerData",AdminAuth,ctl.ViewManagerData)
rout.delete("/deleteManager",ctl.DeleteManager)
rout.get("/viewAllEmploy",AdminAuth,ctl.ViewAllEmploy)
rout.delete("/deleteEmploy",ctl.DeleteEmploy)
module.exports = rout