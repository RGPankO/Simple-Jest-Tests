module.exports = function validatePostCode(postCode) {
    // UK Postcode Regex, source
    // https://en.wikipedia.org/wiki/Postcodes_in_the_United_Kingdom
    var postCodeRegex = new RegExp("^([Gg][Ii][Rr] 0[Aa]{2})|((([A-Za-z][0-9]{1,2})|(([A-Za-z][A-Ha-hJ-Yj-y][0-9]{1," +
            "2})|(([A-Za-z][0-9][A-Za-z])|([A-Za-z][A-Ha-hJ-Yj-y][0-9]?[A-Za-z]))))( |)[0-9][" +
            "A-Za-z]{2})$");

    return postCodeRegex.test(postCode);
}