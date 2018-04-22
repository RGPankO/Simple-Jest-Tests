const validatePostCode = require('./validatePostCode');

test('Validates postcode with space', () => {
    expect(validatePostCode('RH2 0BQ')).toBeTruthy();
});

test('Validates postcode with no space', () => {
    expect(validatePostCode('RH20BQ')).toBeTruthy();
});

test('Validates postcodewith four characters at the end', () => {
    expect(validatePostCode('EC1A 1BB')).toBeTruthy();
});

test('Invalidates postcode with two characters at the end', () => {
    expect(validatePostCode('RH20 BQ')).toBeFalsy();
});

test('Invalidates invalid postcode', () => {
    expect(validatePostCode('ASD 123')).toBeFalsy();
});
