export default class Menu {
    name: string
    url: string
    childrens?: [Menu]
    constructor(name: string, url: string, childrens?: [Menu]) {
        this.name = name;
        this.url = url;
        this.childrens = childrens;
    }
}