/*************************************************************************************/
/**     This script includes the constructor functions for all basic components     **/
/*************************************************************************************/
//  These global counters are used to make sure every element has a unique ID
//  for future reference

// Format is counter = [parCounter, headCounter, buttonCounter, menuCounter]

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
{}//  The basic button

function Button(buttonStyle, buttonAction) {
  this.buttonStyle = buttonStyle;
  this.buttonAction = buttonAction;
}

function Text(type, textStyle) {
  this.type = type;
  this.textStyle = textStyle;
  //  create the element according to the passed type
  if(this.type == "par") {
    const newPar = document.createElement("p");
    newPar.id = "par" + counters[0];
    newPar.style.fontFamily = this.textStyle.fontProperties[0];
    newPar.style.fontSize = this.textStyle.fontProperties[1];
    newPar.style.fontWeight = this.textStyle.fontProperties[2];
    this.textElem = newPar;
  }
  //  function to append the element to some DOM existing element

  this.insertInto = function(parentElem) {
    parentElem.appendChild(this.textElem);
  }
  this.addContent = function(text) {
    this.textElem.textContent = text;
}
}
