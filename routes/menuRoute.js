import {Router} from "express";
import {MenuController} from "../controllers/index.js";

const router = Router();

router.get("/", MenuController.getList);
router.get("/type", MenuController.getType);
router.get("/recommend", MenuController.recommend);
router.post("/", MenuController.upload);
router.put("/:menuId", MenuController.update);
router.delete("/:menuId", MenuController.destroy)

export default router;