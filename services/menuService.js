import {Menu} from "../models/Menu.js";

const findAll = async () => {
    return await Menu.findAll({});
}

const findAllTypes = async () => {
    const menuList = await Menu.findAll({});
    const typeSet = new Set();
    for (const menu of menuList) {
        typeSet.add(await menu.getDataValue("type"))
    }
    return Array.from(typeSet);
}

function getSearchOption(type) {
    if(type !== undefined)
        return {where: {type: type}};
    else
        return {}
}

function getRandom(maxNum) {
    return Math.floor(Math.random() * maxNum)
}

const recommend = async (type, num) => {
    const menuList = await Menu.findAll(getSearchOption(type));
    const quantity = num;

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

const upload = async (name, type) => {
    await Menu.create({
        name,
        type
    });
}

const update = async (menuId, name, type) => {
    await Menu.update({
        name,
        type
    }, {
        where : { id: menuId }
    })
}

const destroy = async (menuId) => {
    await Menu.destroy({
        where : { id: menuId }
    })
}

export {findAll, findAllTypes, recommend, upload, update, destroy}