// var, let&const차이점
// 변수에 어떤값을 넣기 위헤서 확보한 공간
// 연산자로 변tndp rkqtdmf gkfekd


// var, let은 변수 선언후 값 재할당 가능
let a =123;
a=456;
console.log(a);
// const 는 변수 선언후 값 재할당 불가능
// 유저정보,절대 변해서는 안되는 값
const b =123;
// b = 456;
console.log(b);


//undefined=변수는 존재하나 값이 할당되지 않아서 자료형이 정해지지 않았음
// c='집에가고싶다'
let c;
console.log(c);

let num;

//++:증감연산자
// 초기값 1 / num이 100과 ㅏ같아질떄 까지
// for(num = 1; num<=100; num++) {
// 	if(1부터 100까지 숫자중에 짝수만 출력){
// 		document.write(num,'<br>');
// 	}
	for(let num =2; num <=100; num = num+2){
		console.log(num)
	}
	console.log(num);


