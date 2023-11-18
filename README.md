# Title Tool - Editor.js (React-TS)

Provides Title (headings) Blocks for the [Editor.js](https://github.com/codex-team/editor.js). It is compatible with react and typescript, without causing typing errors.

## Installation
Get the package

```shell
npm i title-editorjs
```

## Usage
Include module at your application

```javascript
import Title from "title-editorjs";
```

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
const editor = EditorJS({
  ...

  tools: {
    ...
    title: Title
  },

  ...
});
```

## Tool's settings
| Setting | Description                             
|------|-----------------------------------------
|H1   | Transform the title into an h1 header   
|H2   | Transform the title into an h2 header    
|H3   | Transform the title into an h3 header   
|H4   | Transform the title into an h4 header    
|H5   | Transform the title into an h5 header    
|H6| Transform the title into an h6 header   
|<img src="data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='20' fill='blue' /%3E%3C/svg%3E" alt="Ícone SVG" />  Blue  | Change the title color to blue   
|<img src="data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='20' fill='pink' /%3E%3C/svg%3E" alt="Ícone SVG" /> Pink  | Change the title color to pink    
|<img src="data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='20' fill='green' /%3E%3C/svg%3E" alt="Ícone SVG" /> Green| Change the title color to green   
|<img src="data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='20' fill='purple' /%3E%3C/svg%3E" alt="Ícone SVG" /> Purple  | Change the title color to purple    
|<img src="data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='20' fill='orange' /%3E%3C/svg%3E" alt="Ícone SVG" /> Orange  | Change the title color to orange   
|<img src="data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='20' fill='black' /%3E%3C/svg%3E" alt="Ícone SVG" /> Black   |Change the title color to black   
|<img src="data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='20' fill='yellow' /%3E%3C/svg%3E" alt="Ícone SVG" />  Yellow | Change the title color to yellow 
|<img src="data:image/svg+xml,%3Csvg width='10' height='10' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='25' cy='25' r='20' fill='red' /%3E%3C/svg%3E" alt="Ícone SVG" /> Red  | Change the title color to red 
|Text-Align-Center   |Change text alignment to center 
|Text-Align-Right   |Change text alignment to right 
|Text-Align-Left   |Change text alignment to left 

## Config Params
For now the package doesn´t have any configuration parameters 😔. But it's coming...😌

 ## Output data

 | Field | Type     | Description                                      |
| ----- | -------- | ------------------------------------------------ |
| text  | `string` | titles's text                                    |
| titleType | `string` | type of title: H1, H2 ... H6 |
| color | `string or undefined` | color of the title |
| alignText | `string or undefined` | align of the title |

 ```json
{
    "id": "9V7e_m3ao4",
    "type": "title",
    "data": {
        "text": "H1",
        "color": "Red",
        "alignText": "Text-Align-Center",
        "titleType": "H1"
    }
}
```


### And...
🌠🌠🌠 If the package was useful to you give it a star. 🌠🌠🌠 

💁💁🏾💁🏼 Feel free to propose improvements. 💁🏾💁🏼💁🏿
