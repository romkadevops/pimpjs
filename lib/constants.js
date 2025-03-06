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
const phoneLandscape = "only screen and (min-device-width: 414px) and (max-device-width: 736px) and (-webkit-min-device-pixel-ratio: 3)";
const phonePortrait = "only screen and (min-device-height: 480px) and (orientation: portrait)";

const tabletLandscape = "only screen and (min-device-width: 481px) and (max-device-width: 768px) and (orientation: landscape)";
const tabletPortrait = "ony screen and (min-device-height: 481px) and (max-device-width: 768px) and (orientation: portrait)";

const smallScreenPC = "only screen and (min-device-width: 769px) and (max-device-width: 1024px)";
const largeScreenPC = "only screen and (min-device-width: 1025px) and (max-device-width: 1200px)";
const TVscreen = "only screen and (min-width: 1201px)";

const checkPhoneLandscape = window.matchMedia(phoneLandscape);
const checkPhonePortrait = window.matchMedia(phonePortrait);
const checkTabletLandscape = window.matchMedia(tabletLandscape);
const checkTabletPortrait = window.matchMedia(tabletPortrait);
const checkSmallScreen = window.matchMedia(smallScreenPC);
const checkLargeScreen = window.matchMedia(largeScreenPC);
const checkTVscreen = window.matchMedia(TVscreen);


