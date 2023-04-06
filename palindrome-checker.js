module.exports = function (str) {
    perfectdrome = str.toLowerCase().replace(/([^\w_]+|\s+)/g, '');
    perfectdrome = perfectdrome.replace('_', '');
    let reversestr = perfectdrome.split('').reverse().join(''); 
    return reversestr === perfectdrome;
}
