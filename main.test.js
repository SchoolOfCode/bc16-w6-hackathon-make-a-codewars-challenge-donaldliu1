import {test, expect, describe} from "vitest"
import {starSign} from "./main.js"

// object that is later called for test, where each nest object has the minimum, maximum valid and invalid tests.
const zodiacBoundaryTests = {
    Aries: {
        invalid: ['400'],
        valid: ['321', '322', '330', '331', '401', '402', '418', '419'],
        invalidMax: ['332']
    },
    Taurus: { 
        invalid: ['500'], 
        valid: ['420', '421', '429', '430', '501', '502', '519', '520'], 
        invalidMax: ['431'] 
    },
    Gemini: { 
        invalid: ['600'], 
        valid: ['521', '522', '530', '531', '601', '602', '619', '620'], 
        invalidMax: ['532'] 
    },
    Cancer: { 
        invalid: ['700'], 
        valid: ['621', '622', '629', '630', '701', '702', '721', '722'], 
        invalidMax: ['631'] 
    },
    Leo: { 
        invalid: ['800'], 
        valid: ['723', '724', '730', '731', '801', '802', '821', '822'], 
        invalidMax: ['732'] 
    },
    Virgo: { 
        invalid: ['900'], 
        valid: ['823', '824', '830', '831', '901', '902', '921', '922'], 
        invalidMax: ['832'] 
    },
    Libra: { 
        invalid: ['1000'], 
        valid: ['923', '924', '929', '930', '1001', '1002', '1021', '1022'], 
        invalidMax: ['931'] 
    },
    Scorpio: { 
        invalid: ['1100'], 
        valid: ['1023', '1024', '1030', '1031', '1101', '1102', '1120', '1121'], 
        invalidMax: ['1032'] 
    },
    Sagittarius: { 
        invalid: ['1200'], 
        valid: ['1122', '1123', '1129', '1130', '1201', '1202', '1220', '1221'], 
        invalidMax: ['1131'] 
    },
    Capricorn: { 
        invalid: ['100'], 
        valid: ['1222', '1223', '1230', '1231', '101', '102', '118', '119'], 
        invalidMax: ['1232'] 
    },
    Aquarius: { 
        invalid: ['200'], 
        valid: ['120', '121', '130', '131', '201', '202', '217', '218'], 
        invalidMax: ['132'] 
    },
    Pisces: { 
        invalid: ['300'], 
        valid: ['219', '220', '228', '229', '301', '302', '319', '320'], 
        invalidMax: ['230'] 
    }
};

// simple test to acknowledge vitest working
test("103 should return Aries", () => {
    expect(starSign(322)).toBe("Aries")
});

test("422 should return Aries", () => {
    expect(starSign(421)).toBe("Taurus")
});

// main bulk of testing using the previous object
// accesses the object Zodiac boundary tests and return all the key-value pairs
// call each nest object zodiac, and each value inside of it testCases
Object.entries(zodiacBoundaryTests).forEach(([zodiac, testCases]) => {
    // describe is used to group several tests together into a description, in this case we are testing each zodiac signs boundary test
    describe(`${zodiac} Boundary Tests`, () => {
        // for the amount of values inside "invalid" do the same amount of tests e.g. 3 do 3 tests
        testCases.invalid.forEach(testCase => {
            // test describes what the test is trying to achieve, in this case we are trying to get error
            test(`should return empty string for invalid date: ${testCase}`, () => {
                // calls the function starSign and expects the return result to be error
                expect(starSign(testCase)).toBe('error');
            });
        }
    );

        testCases.valid.forEach(testCase => {
            test(`should return ${zodiac} for valid date: ${testCase}`, () => {
                expect(starSign(testCase)).toBe(zodiac);
            });
        }
    );

    testCases.invalidMax.forEach(testCase => {
        test(`should return error for invalid max date: ${testCase}`, () => {
            expect(starSign(testCase)).toBe('error');
            });
        });
    });
});

// extra tests incase of anything other than the suggested format 
test("March31 return error", () => {
    expect(starSign("March31")).toBe("error")
})

test("0101 return error", () => {
    expect(starSign(0o101)).toBe("error")
})

