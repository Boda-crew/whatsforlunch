import {MenuService} from "../services/index.js"
import {body} from "express-validator"

export const getList = async (req, res) => {
    const data = await MenuService.findAll();
    res.status(200).json({
        data: data,
        message : "메뉴 리스트를 불러왔습니다."
    })
}

export const getType = async (req, res) => {
    const data = await MenuService.findAllTypes();
    res.status(200).json({
        data: data,
        message : "메뉴 타입을 가져왔습니다."
    })
}

export const recommend = async (req, res) => {
    const type = req.query["type"]
    const num = req.query['num']

    const data = await MenuService.recommend(type, num);
    res.status(200).json({
        data: data,
        message : "메뉴가 추천 되었습니다."
    })
}

export const upload = async (req, res) => {
    const name = req.body.name
    const type = req.body.type

    await MenuService.upload(name, type);
    res.status(201).json({
        message : "업로드 되었습니다."
    })
}

export const update = async (req, res) => {
    const menuId = req.params["menuId"]
    const name = req.body.name
    const type = req.body.type

    await MenuService.update(menuId, name, type);
    res.status(200).json({
        message : "업데이트 되었습니다."
    })
}

export const destroy = async (req, res) => {
    const menuId = req.params["menuId"]

    await MenuService.destroy(menuId);
    res.status(200).json({
        message : "삭제 되었습니다."
    })
}
