// A printer prints colors represented by the letters "a" through "m". At the end of the print, it puts out a control string to show what colors were printed.  A "good" control string output example might be "aaabbbbhaijjjm" due to the fact that only the letters a through m were used, and no errors (other letters) were used.

// When the printer has a malfunction, the control string marks it with a letter that isn't a through m, for example: "aaaxbbbbyyhwawiwjjjwwm".

// Write a function, printer_error, which will output the error rate of the printer as a string whose numerator is the number of errors and the denominator the length of the control string. Do not reduce the fraction.



// For example:
// printer_error("aaabbbbhaijjjm") ==> "0/14"
// printer_error("aaaxbbbbyyhwawiwjjjwwm") ==> "8/22"



function printer_error(str) {
	const goodLetters = 'abcdefghijklm';

	const strArr = str.split('');

	const errArr = strArr.filter(char => {
		return !goodLetters.includes(char)
	});

	return `${errArr.length}/${str.length}`
}

printer_error("asdhaihdahsiudh");