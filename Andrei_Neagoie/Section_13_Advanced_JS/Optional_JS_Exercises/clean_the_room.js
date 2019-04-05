//QUESTION 1:
//Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]

const mixedArray = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];

function sortedArray(arr) {
    // First we sort in numeric order
    arr.sort(function(a, b) {
        return a - b;
    });

    let counter = 0;
    arr.forEach((num, i) => {
        // checks each index, if they are equal this counts how many there are
        if (arr[i] === arr[i + 1]) {
            counter++;
        // below finds last index of same number
        } else if (arr[i] !== arr[i + 1] && arr[i] === arr[i-1]) {
            // i-counter is the first index of same num, i is the last index. Below creates a new array of same numbers and puts it into first index of same number.
            arr[i - counter] = arr.slice(i - counter, i + 1);
            //counter is reset to zero for new num
            counter = 0;
        }
    });
    // nested arrays built and put in place, but still need to delete same numbers from original array. check first element of nested array equal to next element and delete it.
    arr.forEach(function(num, ind) {
        while (arr[ind][0] && arr[ind][0] === arr[ind + 1]) {
            arr.splice(ind + 1, 1);
        }
    });
    return arr;
}


//QUESTION 2:
// Write a javascript function that takes an array of numbers and a target number. The function should find two different numbers in the array that, when added together, give the target number. For example: answer([1,2,3], 4)should return [1,3]

const arraySum = (arr, target) => {
    arr.forEach((num, i) => {
        for (let j = 1; j <= arr.length; j++) {
            if (arr[i] + arr[i + j] === target) {
                console.log(arr[i] + " + " + arr[i+j] + " = " + target);
            }
        }
    });
}


//QUESTION 3:
// Write a function that converts HEX to RGB. Then Make that function auto-dect the formats so that if you enter HEX color format it returns RGB and if you enter RGB color format it returns HEX.

let hex = "F2AB7D"; // Equivalent to rgb(242,171,125)
let rgb = [242, 171, 125]; // Equivalente to the upper hex value


const hexTable = number => {

	if (parseInt(number) < 10) return parseInt(number);
	
	else {
		switch(number) {
			case 10: return "A";
				break;
			case 11: return "B";
				break;
			case 12: return "C";
				break;
			case 13: return "D";
				break;
			case 14: return "E";
				break;
			case 15: return "F";
				break;

			case "A": return 10;
				break;
			case "B": return 11;
				break;
			case "C": return 12;
				break;
			case "D": return 13;
				break;
			case "E": return 14;
				break;
			case "F": return 15;
				break;
		}
	}
}

const HEXandRGB = value => {
	//if is hex / TO RGB
	if (value.length === 6) {
		let rgb = new Array(3);

		rgb[0] = (hexTable(value[0])*16) + hexTable(value[1]);
		rgb[1] = (hexTable(value[2])*16) + hexTable(value[3]);
		rgb[2] = (hexTable(value[4])*16) + hexTable(value[5]);
		return rgb;

	} 
	// if is rgb / TO HEX
	else if (value.length === 3) {
		
		let hex = "";
		for (let i=0; i<3; i++) hex += hexTable(Math.floor(value[i]/16)) + hexTable(value[i]%16);

		return hex;
	} 
	else return undefined;
}

// Testing HEXandRGB function
console.log(HEXandRGB(hex));
console.log(HEXandRGB(rgb));