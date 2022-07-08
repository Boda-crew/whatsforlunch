import {check, validationResult} from "express-validator";

export const validRecommend = [
    check("type", "메뉴 타입이 올바르지 않습니다.").isLength({min: 1, max: 10}),
    check("num", "개수가 올바르지 않습니다.").isInt()
];

export const validUpload = [
    check("type", "메뉴 타입이 올바르지 않습니다.").isLength({min: 1, max: 10}),
    check("name", "이름은 공백이 될 수 없습니다.").trim().isLength({min: 1, max: 20})
];

export const validUpdate = [
    check("type", "메뉴 타입이 올바르지 않습니다.").isLength({min: 1, max: 10}),
    check("name", "이름은 공백이 될 수 없습니다.").trim().isLength({min: 1, max: 20}),
    check("menuId", "메뉴 번호는 숫자만 입력 가능합니다.").isInt()
]

export const validDelete = [
    check("menuId", "메뉴 번호는 숫자만 입력 가능합니다.").isInt()
]

export const valid = (req, res, next) => {
    const error = validationResult(req);
    if(!error.isEmpty()) return res.status(400).json(error);
    next();
};