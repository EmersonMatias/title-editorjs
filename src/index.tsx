import { toolBox } from "./constants"
import "./index.css"
import Settings from "./settings"
import { IData, Params, ISetting } from "../types"
import { addClassName, contentEditable, createElement, removeClassName } from "./utils"
import DeclareTitle from "../types"

export default class Title implements DeclareTitle {
    public data: IData
    public Title: HTMLHeadElement
    public settings: ISetting[]

    static get toolbox() {
        return toolBox
    }

    constructor({ data, readOnly }: Params) {
        this.settings = Settings
        this.data = {
            text: "Title",
            color: "",
            alignText: "text-align-center",
            titleType: "H1"
        }

        this.Title = createElement("p") //Criando elemento H1
        this.Title.innerText = this.data.text
        contentEditable(this.Title, `${!readOnly}`)

        this._titleTypeSetting(this.data.titleType) //Elemento Inicial do

        if (data) {
            const dataIsEmpty = Object.entries(data).length
            if (dataIsEmpty !== 0) {
                this._hasData(data)
            }
        }

    }

    render() {
        console.log(this.data)
        return this.Title
    }

    validate(savedData: IData) {
        if (!savedData.text?.trim()) {
            return false
        }

        return true
    }

    save(blockContent: HTMLDivElement) {
        const text = blockContent.innerHTML
        const response = { text: text, color: this.data.color, alignText: this.data.alignText, titleType: this.data.titleType }
        return response
    }

    renderSettings() {
        return this.settings.map((setting) => ({
            icon: setting.icon,
            label: setting.name,
            onActivate: () => {
                if (setting.type === "color") {
                    return this._colorSetting(setting.name)
                } else if (setting.type === "textalign") {
                    return this._textAlignSetting(setting.name)
                } else if (setting.type === "titleType") {
                    return this._titleTypeSetting(setting.name)
                }
            }
        }))
    }

    _colorSetting(colorSelected: string) {
        this.settings.map((setting) => {
            if (setting.type === "color") {
                if (setting.name === colorSelected) {
                    this.data.color = setting.name
                    return addClassName(this.Title, setting.name.toLowerCase())
                } else {
                    return removeClassName(this.Title, setting.name.toLocaleLowerCase())
                }
            }
        })
    }

    _textAlignSetting(alignSelected: string) {
        this.settings.map((setting) => {
            if (setting.type === "textalign")
                if (alignSelected === setting.name) {
                    this.data.alignText = setting.name
                    return addClassName(this.Title, `${setting.name.toLowerCase()}`)
                } else {
                    return removeClassName(this.Title, `${setting.name.toLowerCase()}`)
                }
        })
    }

    _titleTypeSetting(titleSelected: string) {
        this.settings.map((setting) => {
            if (setting.type === "titleType")
                if (titleSelected === setting.name) {
                    this.data.titleType = setting.name
                    return addClassName(this.Title, `${setting.name.toLowerCase()}`)
                } else {
                    return removeClassName(this.Title, `${setting.name.toLowerCase()}`)
                }
        })
    }

    _hasData(data: IData) {
        this.data = {
            text: data?.text,
            color: data?.color,
            alignText: data?.alignText,
            titleType: data.titleType
        }

        this._hasDataText();
        this._colorSetting(this.data.color)
        this._textAlignSetting(this.data.alignText)
        this._titleTypeSetting(this.data.titleType)
    }

    _hasDataText() {
        if (this.data.text) {
            this.Title.innerHTML = this.data.text
        }
    }

    /* 
       static get enableLineBreaks() {
        return true;
    }
    */

    static get isReadOnlySupported() {
        return true;
    }
}