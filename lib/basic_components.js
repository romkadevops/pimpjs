/*************************************************************************************/
/**     This script includes the constructor functions for all basic components     **/
/*************************************************************************************/
//  These global counters are used to make sure every element has a unique ID
//  for future reference

// Format is counter = [parCounter, mainHeadCounter, buttonCounter, menuCounter]

const counters = [0, 0, 0, 0]


//  Components on which StyleArray depends

class TextStyle {
  fontProperties;
  textDecor;
  type;
  constructor(fontProperties, textDecor, type) {
    this.fontProperties = fontProperties;
    this.textDecor = textDecor;
    this.type = type;
    if(this.fontProperties == "responsive"){
      (() => {
        if(checkIphone4Land.matches || checkIphone5Land.matches || checkIphone6Land.matches || checkIphone7Land) {
          console.log("check 1");
          if(this.type == "par") {
            this.fontProperties = SSHParText; 
          } else if(this.type == "mainHeader") {
            this.fontProperties = SSHMainHeaderText;
          } else {
            this.fontProperties = SSHHeaderText;
          }
        } else if(checkIphone4Port.matches || checkIphone5Port.matches || checkIphone6Port.matches || checkIphone7Port.matches) {
          console.log("check 2");
          if(this.type == "par") {
            this.fontProperties = SSVParText; 
          } else if(this.type == "mainHeader") {
            this.fontProperties = SSVMainHeaderText;
          } else {
            this.fontProperties = SSVHeaderText;
          }
        } else if(checkIpad2Land.matches || checkIpad3Land.matches || checkIpadPro10Land.matches || checkIpadPro13Land.matches) {
          console.log("check 3");
          if(this.type == "par") {
            this.fontProperties = MSParText; 
          } else if(this.type == "mainHeader") {
            this.fontProperties = MSMainHeaderText;
          } else {
            this.fontProperties = MSHeaderText;
          }
        } else if(checkIpad2Port.matches || checkIpad3Port.matches || checkIpadPro10Port.matches || checkIpadPro13Port.matches) {
          console.log("check 4");
          if(this.type == "par") {
            this.fontProperties = MSParText; 
          } else if(this.type == "mainHeader") {
            this.fontProperties = MSMainHeaderText;
          } else {
            this.fontProperties = MSHeaderText;
          }
        } else {
          console.log("check 6");
          if(this.type == "par") {
            this.fontProperties = LSParText; 
          } else if(this.type == "mainHeader") {
            this.fontProperties = LSMainHeaderText;
          } else {
            this.fontProperties = LSHeaderText;
          }
        }
      })();
    }
  }
}

//  Components on which ButtonStyleArray depends 

class ColorStyle {
  textColor;
  backgroundColor;
  borderColor;
  constructor(textColor, backgroundColor, borderColor) {
    //  If using a constant as the value passed to parameter
    //  use the value to create the colorStyle object.
    (() => {
      if(textColor == "FormalBlue") {
        this.textColor = "#f0f2f9";
        this.backgroundColor = "#8294d3";
        this.borderColor = "#8294d3";
      } else {  // TODO: Add additional color combination constant color scheme codes
        this.textColor = textColor;
        this.backgroundColor = backgroundColor;
        this.borderColor = borderColor;
      }
    })();
  }
}

class LayoutStyle {
  constructor(size , margin, padding, borderRadius, borderType) {
    this.width = size.substring(0, size.indexOf(' '));
    this.height = size.substring(size.indexOf(' ') + 1, size.length);
    this.margin = margin;
    this.padding = padding;
    this.borderRadius = borderRadius;
    this.borderType = borderType;
  }
}

class EffectStyle { 
  constructor(glow, moveAnimation, borderAnimation) {
    this.glow = glow;
    this.moveAnimation = moveAnimation;
    this.borderAnimation = borderAnimation;
  }
}

//  Components on which button style is dependent

class ButtonStyle {
  textStyle;
  colorStyle;
  layoutStyle;
  effectStyle;
  constructor(textStyle, colorStyle, layoutStyle, effectStyle) {
    this.textStyle = textStyle;
    this.colorStyle = colorStyle;
    this.layoutStyle = layoutStyle;
    this.effectStyle = effectStyle;
  }
}

/* class ButtonAction()
{
  constructor() {}
} */


//  The basic button

class Button {
  buttonStyle;
  buttonAction;
  buttonElem;
  constructor(buttonStyle, buttonAction) {
    this.buttonStyle = buttonStyle;
    this.buttonAction = buttonAction;
    //  setup the button as a rendered component on page
    this.buttonElem = (() => {
      const buttonElem = document.createElement("button");
      
      buttonElem.style.fontFamily = this.buttonStyle.textStyle.fontFamily;
      buttonElem.style.fontSize = this.buttonStyle.textStyle.fontSize;
      buttonElem.style.fontWeight = this.buttonStyle.textStyle.fontWeight;
      
      buttonElem.style.width = this.buttonStyle.layoutStyle.width;
      buttonElem.style.height = this.buttonStyle.layoutStyle.height;
      buttonElem.style.margin = this.buttonStyle.layoutStyle.margin;
      buttonElem.style.padding = this.buttonStyle.layoutStyle.padding;
      buttonElem.style.borderRadius = this.buttonStyle.layoutStyle.borderRadius;
      buttonElem.style.borderType = this.buttonStyle.layoutStyle.borderType;

      buttonElem.style.color = this.buttonStyle.colorStyle.textColor;
      buttonElem.style.backgroundColor = this.buttonStyle.colorStyle.backgroundColor;
      buttonElem.style.borderColor = this.buttonStyle.colorStyle.borderColor;

      return buttonElem;
      })();
  }
  insertInto(parentElem) {
      parentElem.appendChild(this.buttonElem);
  }
  addContent(text) {
    this.buttonElem.textContent = text;
  }
}

/********************************************************************************************/
/****         The Text component creates the text node type and styles it according to    ***/
/****         The passed in testStyle array.                                              ***/
/****         It supports clean and uniform styling for UI text elements.                 ***/                                              
/********************************************************************************************/

class Text {
  textElem;
  textStyle;
  constructor(textStyle) {
    this.textStyle = textStyle;
    //  create the element according to the passed type
    if(this.textStyle.type == "par") {
      const newPar = document.createElement("p");
      newPar.id = "par" + counters[0];
      counters[0]++;
      newPar.style.fontFamily = this.textStyle.fontProperties[0];
      newPar.style.fontSize = this.textStyle.fontProperties[1];
      newPar.style.fontWeight = this.textStyle.fontProperties[2];
      this.textElem = newPar;
    } else if(this.textStyle.type == "mainHeader") {
      const newMainHeader = document.createElement("h1");
      newMainHeader.id = "mainHeader" + counters[1];
      counters[1]++;
      newMainHeader.style.fontFamily = this.textStyle.fontProperties[0];
      newMainHeader.style.fontSize = this.textStyle.fontProperties[1];
      newMainHeader.style.fontWeight = this.textStyle.fontProperties[2];
      this.textElem = newMainHeader;
    } else if(this.textStyle.type == "header") {
      const header = document.createElement("h2");
      header.id = "header" + counters[2];
      counters[2]++;
      header.style.fontFamily = this.textStyle.fontProperties[0];
      header.style.fontSize = this.textStyle.fontProperties[1];
      header.style.fontWeight = this.textStyle.fontProperties[2];
      this.textElem = header; 
    }
  }
  //  function to append the element to some DOM existing element

  insertInto(parentElem) {
    parentElem.appendChild(this.textElem);
  }
  addContent(text) {
    this.textElem.textContent = text;
  }
}
