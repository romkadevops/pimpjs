/*************************************************************************************/
/**     This script includes the constructor functions for all basic components     **/
/*************************************************************************************/
//  These global counters are used to make sure every element has a unique ID
//  for future reference

// Format is counter = [parCounter, mainHeadCounter, buttonCounter, menuCounter]

const counters = [0, 0, 0, 0]


//  Components on which StyleArray depends

function TextStyle(fontProperties, textDecor) {
  this.fontProperties = fontProperties;
  this.textDecor = textDecor;
}

//  Components on which button style is dependent

function StyleArray(textStyle, colorStyle, layoutStyle, effectStyle) {
  this.textStyle = textStyle;
  this.colorStyle = colorStyle;
  this.layoutStyle = layoutStyle;
  this.effectStyle = effectStyle;
}

//  Components on which the button is dependent

function ButtonStyle(styleArray, mediaArray) {
  this.styleArray = styleArray;
  this.mediaArray= mediaArray;
}

function ButtonAction()
{}

//  The basic button

function Button(buttonStyle, buttonAction) {
  this.buttonStyle = buttonStyle;
  this.buttonAction = buttonAction;
}

/********************************************************************************************/
/****         The Text component creates the text node type and styles it according to    ***/
/****         The passed in testStyle array.                                              ***/
/****         It supports clean and uniform styling for UI text elements.                 ***/                                              
/********************************************************************************************/

function Text(type, textStyle) {
  this.type = type;
  this.textStyle = textStyle;
  //  create the element according to the passed type
  if(this.type == "par") {
    const newPar = document.createElement("p");
    newPar.id = "par" + counters[0];
    counters[0]++;
    newPar.style.fontFamily = this.textStyle.fontProperties[0];
    newPar.style.fontSize = this.textStyle.fontProperties[1];
    newPar.style.fontWeight = this.textStyle.fontProperties[2];
    this.textElem = newPar;
  } else if(this.type == "mainHeader") {
    const newMainHeader = document.createElement("h1");
    newMainHeader.id = "par" + counters[1];
    counters[1]++;
    newMainHeader.style.fontFamily = this.textStyle.fontProperties[0];
    newMainHeader.style.fontSize = this.textStyle.fontProperties[1];
    newMainHeader.style.fontWeight = this.textStyle.fontProperties[2];
    this.textElem = newMainHeader;
  } else if(this.type == "header") {
    const header = document.createElement("h2");
    header.id = "par" + counters[2];
    counters[2]++;
    header.style.fontFamily = this.textStyle.fontProperties[0];
    header.style.fontSize = this.textStyle.fontProperties[1];
    header.style.fontWeight = this.textStyle.fontProperties[2];
    this.textElem = header; 
  }

  //  function to append the element to some DOM existing element

  this.insertInto = function(parentElem) {
    parentElem.appendChild(this.textElem);
  }
  this.addContent = function(text) {
    this.textElem.textContent = text;
  }
}
