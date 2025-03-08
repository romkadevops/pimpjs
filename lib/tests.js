const main = document.querySelector("body");

//  create the paragrapth UI element auxiliary components
const parFontStyle= ["Arial", "24px", "regular"];
const parTextDecor = "none";
const parStyle = new TextStyle("responsive", parTextDecor, "par");
//  create paragraph text component
const parText = new Text(parStyle);


//  create the main header UI element auxiliary components
const mainHeaderFontStyle= ["Calibri", "48px", "900"];
const mainHeaderTextDecor = "underline";
const mainHeaderStyle = new TextStyle("responsive", mainHeaderTextDecor, "mainHeader");
//  create main header text component
const mainHeaderText = new Text(mainHeaderStyle);


//  test the main header UI component
mainHeaderText.addContent("Testing a main header text UI element");
mainHeaderText.insertInto(main);
//  test the paragraph UI component
parText.addContent("Testing a paragraph text UI element");
parText.insertInto(main);

// Test the creation of button (incorporating a predefined color scheme)
const colorStyle = new ColorStyle("FormalBlue");
const layoutStyle = new LayoutStyle("100px 150px", "10px", "0px", "15px", "solid");
const effectStyle = new EffectStyle("none", "none", "none");

const buttonStyle = new ButtonStyle(parStyle, colorStyle, layoutStyle, effectStyle);
const button = new Button(buttonStyle);
button.addContent("This button is fancy!");
button.insertInto(main);
