import {Router} from "express";
import {menuController} from "../controllers/menuControllers.js";

const router = Router();

router.get("/", menuController.getMenu);
router.get("/type", menuController.getMenuType);
router.get("/recommend", menuController.recommendMenu);
router.post("/", menuController.uploadMenu);
router.put("/", menuController.updateMenu);
