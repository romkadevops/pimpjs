/****     This file contains constants that can be used as parameter values     ****/

//  Constants for font style parameters (in TextStyle objects - first parameter)
//
//  large screen classic settings
const LSParText = ["Arial, Georgia, Verdana, sans-serif", "18px", "regular"];
const LSMainHeaderText = ["Arial, Georgia, Verdana, sans-serif", "36px", "bold"];
const LSHeaderText = ["Arial, Georgia, Verdana, sans-serif", "24px", "bold"];

//  medium screen classic settings
const MSParText = ["Arial, Georgia, Verdana, sans-serif", "14px", "regular"];
const MSMainHeaderText = ["Arial, Georgia, Verdana, sans-serif", "28px", "bold"];
const MSHeaderText = ["Arial, Georgia, Verdana, sans-serif", "20px", "bold"];

//  small screen classic settings (for horizontal view phones)
const SSHParText = ["Arial, Georgia, Verdana, sans-serif", "4vw", "regular"];
const SSHMainHeaderText = ["Arial, Georgia, Verdana, sans-serif", "6vw", "bold"];
const SSHHeaderText = ["Arial, Georgia, Verdana, sans-serif", "5vw", "bold"];

//  small screen classic settings (for vertical view phones)
const SSVParText = ["Arial, Georgia, Verdana, sans-serif", "4vh", "regular"];
const SSVMainHeaderText = ["Arial, Georgia, Verdana, sans-serif", "6vh", "bold"];
const SSVHeaderText = ["Arial, Georgia, Verdana, sans-serif", "5vh", "bold"];

//  All typical media queries for different device sizes and orientation
//  TODO: Fix the media query strings for more granulated targeting
//  TODO: Add eventlistener for device rotation that goes over elements and refresh style
//  Iphones typical media queries 
//

const iphone4Land = "only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)";
const iphone4Port = "only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)";
const iphone5Land = "only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)";
const iphone5Port = "only screen and (min-device-width: 320px) and (max-device-width: 568px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)";
const iphone6Land = "only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: landscape)";
const iphone6Port = "only screen and (min-device-width: 375px) and (max-device-width: 667px) and (-webkit-min-device-pixel-ratio: 2) and (orientation: portrait)";
const iphone7Land = "only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: landscape)";
const iphone7Port = "only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3) and (orientation: portrait)";

const laptopNoRetina = "screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 1)";
const laptopRetina = "screen and (min-device-width: 1200px) and (max-device-width: 1600px) and (-webkit-min-device-pixel-ratio: 2) and (min-resolution: 192dpi)";


const Ipad2Land = "only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 1)";
const Ipad2Port = "only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 1)";

const Ipad3Land = "only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)";
const Ipad3Port = "only screen and (min-device-width: 768px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)";

const IpadPro10Land = "only screen and (min-device-width: 1112px) and (max-device-width: 1112px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)";
const IpadPro10Port = "only screen and (min-device-width: 834px) and (max-device-width: 834px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)";

const IpadPro13Land = "only screen and (min-device-width: 1366px) and (max-device-width: 1366px) and (orientation: landscape) and (-webkit-min-device-pixel-ratio: 2)";
const IpadPro13Port = "only screen and (min-device-width: 1024px) and (max-device-width: 1024px) and (orientation: portrait) and (-webkit-min-device-pixel-ratio: 2)";

//  Add the media query check objects for further use in conditionals of component
//  rendering objects.
//

const checkIphone4Land = window.matchMedia(iphone4Land);
const checkIphone4Port = window.matchMedia(iphone4Port);
const checkIphone5Land = window.matchMedia(iphone5Land);
const checkIphone5Port = window.matchMedia(iphone5Port);
const checkIphone6Land = window.matchMedia(iphone6Land);
const checkIphone6Port = window.matchMedia(iphone6Port);
const checkIphone7Land = window.matchMedia(iphone7Land);
const checkIphone7Port = window.matchMedia(iphone7Port);

const checkLaptopNoRetina = window.matchMedia(laptopNoRetina);
const checkLaptopRetina = window.matchMedia(laptopRetina);

const checkIpad2Land = window.matchMedia(Ipad2Land);
const checkIpad2Port = window.matchMedia(Ipad2Port);

const checkIpad3Land = window.matchMedia(Ipad3Land);
const checkIpad3Port = window.matchMedia(Ipad3Port);

const checkIpadPro10Land = window.matchMedia(IpadPro10Land);
const checkIpadPro10Port = window.matchMedia(IpadPro10Port);

const checkIpadPro13Land = window.matchMedia(IpadPro13Land);
const checkIpadPro13Port = window.matchMedia(IpadPro13Port);




