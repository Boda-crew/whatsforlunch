import {Router} from "express";
import {MenuController} from "../controllers/index.js";
import * as validator from "./validator.js"

const router = Router();

router.get("/", MenuController.getList);
router.get("/type", MenuController.getType);
router.get("/recommend", validator.validRecommend, validator.valid, MenuController.recommend);
router.post("/", validator.validUpload, validator.valid, MenuController.upload);
router.put("/:menuId", validator.validUpdate, validator.valid, MenuController.update);
router.delete("/:menuId", validator.validDelete, validator.valid, MenuController.destroy)

export default router;