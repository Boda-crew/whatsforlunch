import {MenuService} from "../services/index.js"

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
    const data = await MenuService.recommend(req);
    res.status(200).json({
        data: data,
        message : "메뉴가 추천 되었습니다."
    })
}

export const upload = async (req, res) => {
    await MenuService.upload(req);
    res.status(201).json({
        message : "업로드 되었습니다."
    })
}

export const update = async (req, res) => {
    await MenuService.update(req);
    res.status(200).json({
        message : "업데이트 되었습니다."
    })
}

export const destroy = async (req, res) => {
    await MenuService.destroy(req);
    res.status(200).json({
        message : "삭제 되었습니다."
    })
}
