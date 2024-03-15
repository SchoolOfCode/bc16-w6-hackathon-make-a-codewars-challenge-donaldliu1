// GOAL: create a function which takes in the input for MMDD (month date) and returns the appropriate star sign (if the date starts with 0 ignore the 0 so January 2nd will be 102)
// if the date or month is invalid it should return error!

// use the following table below!
//
// Zodiac       Date of birth
//
// Aries        March 21st - April 19th
// Taurus       April 20th - May 20th
// Gemini       May 21st - June 20th
// Cancer       June 21st - July 22nd
// Leo          July 23rd - August 22nd
// Virgo        August 23rd - September 22nd
// Libra        September 23rd - October 22nd
// Scorpio      October 23rd - November 21st
// Sagittarius  November 22nd - December 21st
// Capricorn    December 22nd - January 19th
// Aquarius     January 20th - February 18th
// Pisces       February 19th - March 20th

export function starSignA(ddmm){
    if (ddmm > 100){
        return "Aries"
    }
};