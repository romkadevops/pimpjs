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
      console.log(checkPhoneLandscape.matches);
      console.log(checkTabletLandscape.matches);
      console.log(checkTabletPortrait.matches);
      (() => {
        console.log(checkPhonePortrait.matches);
        if(checkPhoneLandscape.matches) {
          console.log("check 1");
          if(this.type == "par") {
            this.fontProperties = SSHParText; 
          } else if(this.type == "mainHeader") {
            this.fontProperties = SSHMainHeaderText;
          } else {
            this.fontProperties = SSHHeaderText;
          }
        } else if(checkPhonePortrait.matches) {
          console.log("check 2");
          if(this.type == "par") {
            this.fontProperties = SSVParText; 
          } else if(this.type == "mainHeader") {
            this.fontProperties = SSVMainHeaderText;
          } else {
            this.fontProperties = SSVHeaderText;
          }
        } else if(checkTabletLandscape.matches) {
          console.log("check 3");
          if(this.type == "par") {
            this.fontProperties = MSParText; 
          } else if(this.type == "mainHeader") {
            this.fontProperties = MSMainHeaderText;
          } else {
            this.fontProperties = MSHeaderText;
          }
        } else if(checkTabletPortrait.matches) {
          console.log("check 4");
          if(this.type == "par") {
            this.fontProperties = MSParText; 
          } else if(this.type == "mainHeader") {
            this.fontProperties = MSMainHeaderText;
          } else {
            this.fontProperties = MSHeaderText;
          }
        } else if(checkSmallScreen.matches) {
          console.log("check 5");
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

//  Components on which button style is dependent

class StyleArray {
  constructor(textStyle, colorStyle, layoutStyle, effectStyle) {
    this.textStyle = textStyle;
    this.colorStyle = colorStyle;
    this.layoutStyle = layoutStyle;
    this.effectStyle = effectStyle;
  }
}

//  Components on which the button is dependent

class ButtonStyle {
  constructor (styleArray, mediaArray) {
    this.styleArray = styleArray;
    this.mediaArray= mediaArray;
  }
}

/* class ButtonAction()
{
  constructor() {}
} */


//  The basic button

class Button {
  constuctor(buttonStyle, buttonAction) {
    this.buttonStyle = buttonStyle;
    this.buttonAction = buttonAction;
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
