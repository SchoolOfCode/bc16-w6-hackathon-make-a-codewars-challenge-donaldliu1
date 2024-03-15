import {test, expect} from "vtestest"
import {starSign} from "./main.js"
// This is code to test
import {starSignA} from "./attempt.js"

// object that is later called for test, where each nest object has the minimum, maximum valid and invalid tests.
const zodiacBoundaryTests = {
    Aries: {
        invalid: ['320', '400'],
        valid: ['321', '322', '330', '331', '401', '402', '418', '419'],
        invalidMax: ['332', '420']
    },
    Taurus: { 
        invalid: ['419', '500'], 
        valid: ['420', '421', '429', '430', '501', '502', '519', '520'], 
        invalidMax: ['431', '521'] 
    },
    Gemini: { 
        invalid: ['520', '600'], 
        valid: ['521', '522', '530', '531', '601', '602', '619', '620'], 
        invalidMax: ['532', '621'] 
    },
    Cancer: { 
        invalid: ['620', '700'], 
        valid: ['621', '622', '629', '630', '701', '702', '721', '722'], 
        invalidMax: ['631', '723'] 
    },
    Leo: { 
        invalid: ['722', '800'], 
        valid: ['723', '724', '730', '731', '801', '802', '821', '822'], 
        invalidMax: ['732', '823'] 
    },
    Virgo: { 
        invalid: ['822', '900'], 
        valid: ['823', '824', '830', '831', '901', '902', '921', '922'], 
        invalidMax: ['832', '923'] 
    },
    Libra: { 
        invalid: ['922', '1000'], 
        valid: ['923', '924', '929', '930', '1001', '1002', '1021', '1022'], 
        invalidMax: ['931', '1023'] 
    },
    Scorpio: { 
        invalid: ['1022', '1100'], 
        valid: ['1023', '1024', '1030', '1031', '1101', '1102', '1120', '1121'], 
        invalidMax: ['1032', '1122'] 
    },
    Sagtesttarius: { 
        invalid: ['1121', '1200'], 
        valid: ['1122', '1123', '1129', '1130', '1201', '1202', '1220', '1221'], 
        invalidMax: ['1131', '1222'] 
    },
    Capricorn: { 
        invalid: ['1221', '100'], 
        valid: ['1222', '1223', '1230', '1231', '101', '102', '118', '119'], 
        invalidMax: ['1232', '120'] 
    },
    Aquarius: { 
        invalid: ['119', '200'], 
        valid: ['120', '121', '130', '131', '201', '202', '217', '218'], 
        invalidMax: ['132', '219'] 
    },
    Pisces: { 
        invalid: ['218', '300'], 
        valid: ['219', '220', '228', '229', '301', '302', '319', '320'], 
        invalidMax: ['230', '321'] 
    }
};

//simple test to acknowledge vitest working
test("103 should return Aries", () => {
    expect(starSignA(103)).toBe("Aries")
});

// main bulk of testing using the previous object
