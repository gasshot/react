let user = "david";

console.log(user);

const birth = "2010.01.01";

console.log(birth);

user = "alex";

console.log(user);

// (1) 변수 이름에 들어갈 특수 문자는 _, $ 만 가능
let _user = "john";
let $user = "hello";

// (2) 숫자로 시작할 수 없음
// let 1user = "john"; // X
let user2 = "hello2"
// (3) 자바스크립트에서 사용하는 예약어는 변수 이름으로 사용할 수 없다
// let const = "hello2"; // 
// (4) 변수 이름은 의미있어야 한다
let x = 25; // X
let age = 25; // O
// (5) 카멜케이스(camelCase)를 사용한다
let userFirstName = "kang";
