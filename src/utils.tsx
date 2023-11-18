export const createElement = (name: string) => {
    const element = document.createElement(name)

    return element
}

export const addClassName = (element: HTMLElement, className: string) => {
    return element.classList.add(className)
}

export const removeClassName = (element: HTMLElement, className: string) => {
    return element.classList.remove(className)
}

export const contentEditable = (element: HTMLElement, boolean: "true" | "false") => {
    element.contentEditable = boolean
}
