const fontArray = ["Arial", "24", "bold"];
const textDecor = "underline";
const textStyle = new TextStyle(fontArray, textDecor);
const textElem = new Text("par", textStyle);
console.log(textStyle);
const main = document.querySelector("body");
textElem.addContent("This is a test");
textElem.insertInto(main);
