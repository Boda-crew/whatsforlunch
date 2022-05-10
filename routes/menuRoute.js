import {Router} from "express";
import {getMenu, getMenuType, recommendMenu, uploadMenu, updateMenu} from "../controllers/menuController.js";

const router = Router();

router.get("/", getMenu);
router.get("/type", getMenuType);
router.get("/recommend", recommendMenu);
router.post("/", uploadMenu);
router.put("/:menuId", updateMenu);

export default router;