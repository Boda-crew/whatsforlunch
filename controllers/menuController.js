import {findAll, findAllTypes, recommend, upload, update} from "../services/menuService.js"

const getMenu = async (req, res) => {
    const data = await findAll(req, res);
    res.status(200).json({
        data: data,
        message : "메뉴 리스트를 불러왔습니다."
    })
}

const getMenuType = async (req, res) => {
    const data = await findAllTypes(req, res);
    res.status(200).json({
        data: data,
        message : "메뉴 타입을 가져왔습니다."
    })
}

const recommendMenu = async (req, res) => {
    const data = await recommend(req, res);
    res.status(200).json({
        data: data,
        message : "메뉴가 추천 되었습니다."
    })
}

const uploadMenu = async (req, res) => {
    await upload(req, res);
    res.status(201).json({
        message : "업로드 되었습니다."
    })
}

const updateMenu = async (req, res) => {
    await update(req, res);
    res.status(200).json({
        message : "업데이트 되었습니다."
    })
}

export {getMenu, getMenuType, recommendMenu, uploadMenu, updateMenu}