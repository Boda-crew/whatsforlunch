import {Menu} from "../models/Menu.js";

const findAll = async (req, res) => {
    return await Menu.findAll({});
}

const findAllTypes = async (req, res) => {
    const menuList = await Menu.findAll({});
    const typeSet = new Set();
    for (const menu of menuList) {
        typeSet.add(await menu.getDataValue("type"))
    }
    return Array.from(typeSet);
}

function getSearchOption(req) {
    if (req.query['type'] !== undefined) {
        return {where: {type: req.query['type']}};
    } else {
        return {};
    }
}

function getRandom(maxNum) {
    return Math.floor(Math.random() * maxNum)
}

const recommend = async (req, res) => {
    const menuList = await Menu.findAll(getSearchOption(req));
    const quantity = req.query['num'];

    if (quantity == 1 || quantity === undefined) {
        return menuList[getRandom(menuList.length)]
    } else if (quantity >= menuList.length) {
        return menuList;
    }

    const data = new Set();
    while (data.size < quantity) {
        data.add(menuList[getRandom(menuList.length)]);
    }
    return Array.from(data);
}

const upload = async (req, res) => {
    await Menu.create({
        name: req.body.name,
        type: req.body.type
    });
}

const update = async (req, res) => {
    await Menu.update({
        name: req.body.name,
        type: req.body.type
    }, {
        where : { id: req.params['menuId'] }
    })
}

const destroy = async (req, res) => {
    await Menu.destroy({
        where : { id: req.params['menuId'] }
    })
}

export {findAll, findAllTypes, recommend, upload, update, destroy}