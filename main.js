var trippleFive = function (){
	for (var i = 0; i <3; i++) {
		console.log('Five!');
	};
}
 trippleFive()

//============================================================

 var lastLeter = function (word) {
 	var letter = word.charAt(word.length - 1)
 		return letter
 }

 console.log(lastLeter('rob'))

 //=============================================================

 var square = function (number) {
 	return number * number
 }

 console.log(square(10))

 //==============================================================

 var negate = function (number) {
 	return -number
 }

 console.log(negate(-35))

 //============================================================

var toArray = function (a, b, c){
	var array = [a,b,c]
	return array
 }

console.log(toArray(1,4,5))

//=============================================================

var startsWithA = function (aword) {
	if (aword.charAt(0) === 'a'){
		return true
	}
	else {
		return false
	}
}

console.log(startsWithA('apple'))

//=================================================================

var excite = function (word){
	return word + '!!!'
}

console.log(excite('go'))

//==================================================================

var wordSun = function (word){
	 var string = word.indexOf('sun') 
	 if (string <= 0){
		return true
	}
	else {
		return false
	}
}

console.log(wordSun('sunflower'))
console.log(wordSun('apples'))
console.log(wordSun('asunushine'))

//====================================================================

var tiny = function (number){
	if (number >= 0 && number <= 1){
		return true
	}
	else {
		return false
	}
}

console.log(tiny(0.9))

//===================================================================

var getSeconds = function (string){
	var split = string.split(':')
	var min = Number(split[0])
	var sec = Number(split[1]) 
	var total = (min * 60) + sec
	return total
}

console.log(getSeconds('01:30'))
console.log(getSeconds('10:25'))



