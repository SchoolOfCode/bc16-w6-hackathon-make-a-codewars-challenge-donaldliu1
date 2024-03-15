# PLAN FOR KATA

General overview of my plan for the Kata. The goal of the Kata is for the user to return a star sign based on a given date and month, if the date and month isnt valid it should return an error.

Code for the user to attempt the Kata
```
// GOAL: create a function which takes in the input for MMDD (month) and returns the appropriate star sign (if the date starts with 0 ignore the 0 so January 1st will be 101)
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
//
// For more help the following are the months and their maximum number of days!
// January     31 days
// February    29 days
// March       31 days
// April       30 days
// May         31 days
// June        30 days
// July        31 days
// August      31 days
// September   30 days
// October     31 days
// November    30 days
// December    31 days

export function starSign(mmdd){
    // enter your code here
};
```

The template above is the code for the user, I have decided to use boundary testing as my main template for testing the user's code.

First I would need to convert the DoB into actual values that I can then work on

```
starsign        dates
-----------------------------
Aries           321 - 419
Taurus          420 - 520
Gemini          521 - 620
Cancer          621 - 722
Leo             723 - 822
Virgo           823 - 922
Libra           923 - 1022
Scorpio         1023 - 1121
Sagittarius     1122 - 1221
Capricorn       1222 - 119
Aquarius        120 - 218
Pisces          219 - 320
```

This is a rough start to the dates, this is the maximum value and minimum value of the different star signs **HOWEVER** the months are not up to 100 in value so 354 should return an invalid value since it will be March 54th, following that we would need to further define the number of days in a month for the test.

```
month       number of days
---------------------------
January     31 days
February    29 days
March       31 days
April       30 days
May         31 days
June        30 days
July        31 days
August      31 days
September   30 days
October     31 days
November    30 days
December    31 days
```

These are the new minimum and maximum for the 2 months of each zodiac catergory:

```
starsign        month 1         month 2
-------------------------------------------
Aries           321 - 331       401 - 419
Taurus          420 - 430       501 - 520
Gemini          521 - 531       601 - 620
Cancer          621 - 630       701 - 722
Leo             723 - 731       801 - 822
Virgo           823 - 831       901 - 922
Libra           923 - 930       1001 - 1022
Scorpio         1023 - 1031     1101 - 1121
Sagittarius     1122 - 1130     1201 - 1221
Capricorn       1222 - 1231     101 - 119
Aquarius        120 - 131       201 - 218
Pisces          219 - 229       301 - 320
```

Using the table above I will start creating boundary tests:

- **Aries**
  - Invalid (Min Value -1): 320, 400
  - Valid Test Cases: 321, 322, 330, 331, 401, 402, 418, 419
  - Invalid (Max Value +1): 332, 420

- **Taurus**
  - Invalid (Min Value -1): 419, 500
  - Valid Test Cases: 420, 421, 429, 430, 501, 502, 519, 520
  - Invalid (Max Value +1): 431, 521

- **Gemini**
  - Invalid (Min Value -1): 520, 600
  - Valid Test Cases: 521, 522, 530, 531, 601, 602, 619, 620
  - Invalid (Max Value +1): 532, 621

- **Cancer**
  - Invalid (Min Value -1): 620, 700
  - Valid Test Cases: 621, 622, 629, 630, 701, 702, 721, 722
  - Invalid (Max Value +1): 631, 723

- **Leo**
  - Invalid (Min Value -1): 722, 800
  - Valid Test Cases: 723, 724, 730, 731, 801, 802, 821, 822
  - Invalid (Max Value +1): 732, 823

- **Virgo**
  - Invalid (Min Value -1): 822, 900
  - Valid Test Cases: 823, 824, 830, 831, 901, 902, 921, 922
  - Invalid (Max Value +1): 832, 923

- **Libra**
  - Invalid (Min Value -1): 922, 1000
  - Valid Test Cases: 923, 924, 929, 930, 1001, 1002, 1021, 1022
  - Invalid (Max Value +1): 931, 1023

- **Scorpio**
  - Invalid (Min Value -1): 1022, 1100
  - Valid Test Cases: 1023, 1024, 1030, 1031, 1101, 1102, 1120, 1121
  - Invalid (Max Value +1): 1032, 1122

- **Sagittarius**
  - Invalid (Min Value -1): 1121, 1200
  - Valid Test Cases: 1122, 1123, 1129, 1130, 1201, 1202, 1220, 1221
  - Invalid (Max Value +1): 1131, 1222

- **Capricorn**
  - Invalid (Min Value -1): 1221, 100
  - Valid Test Cases: 1222, 1223, 1230, 1231, 101, 102, 118, 119
  - Invalid (Max Value +1): 1232, 120

- **Aquarius**
  - Invalid (Min Value -1): 119, 200
  - Valid Test Cases: 120, 121, 130, 131, 201, 202, 217, 218
  - Invalid (Max Value +1): 132, 219

- **Pisces**
  - Invalid (Min Value -1): 218, 300
  - Valid Test Cases: 219, 220, 228, 229, 301, 302, 319, 320
  - Invalid (Max Value +1): 230, 321

**HOWEVER** after creating the test, I have to revisit the plan as some of the invalid minimum and maximum value (example: 218, 321) return other months but the test expected an error, instead I have opted to remove those as they are featured somewhere else in the test (example Aquarius tests 218 and Aries tests 321)

I included 2 other tests which are "March21st" which should return an error and also "0101" which should also return an error.
