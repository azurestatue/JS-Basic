// loop.js

// 반복문 
// js에서는 크게 2개의 반복문이 있음(for, while)
// 반복에 경우도 조건과 같이 반복문 내부에 반복을 사용할수 있음
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //


// for 반복 
// for(초기식; 조건식; 충족식) {
//      조건식이 true일 경우 반복할 코드
// }
// 초기식에 사용하는 변수의 경우 i,j,k 등을 사용
// for(let i = 0; i < 5; i++) {
//     console.log(i);                  //변수를 코드내부에 사용한 경우
// }

// for(let i = 0; i < 5; i++) {
//     console.log("Hello World");        // 변수를 코드 내부에 사용 X
// }

// var test = ["Kim", "Park", "Jaeong", "Yang"]
// for(let i = 0; i< test.length; i++) {              // . length 경우 문자열, 리스트 등의 길이를 리턴
//     console.log(test[i]); 
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //

// for 반복
// for(변수 in 변수)
// in 뒤에 있는 변수의 경우 array 등 iterable 값이 저장된 변수를 입력

// var test = ["Kim", "Park", "Jaeong", "Yang"]
// for(let value of test) {        // test 길이 만큼 반복, 반복 마다 test에 저장된 값을 하나씩 value에 저장
//     console.log(value);
// } 

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //


// for 반복
// for(변수 in 변수)
// in 뒤에 있는 변수에 경우 딕셔너리를 사용

// var dic = { class: 5, age: 18, name: "KIm"};
// for(let key in dic) {
//     console.log(key, dic[key])
// }

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //


// while 반복
// while 경우 조건과 같이 조건이 true일 경우 코드를 반복
// while(조건식){
//      조건이 true일 경우 반복할 경우
// }

// var i = 0;
// while(i < 5) { 
//     console.log(i);
//     i++;                // 증감식, 증감식이 없으면 무한 반복이 되므로 중요
// }


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //



// while 반복
// do {
//      조건이 true 일 경우 반복할 경우
// } while(조건식);
// 위 반복의 경우 조건식이 false여도 무조건 한번은 반복하는 반복문

// var a = 0;
// do{
//     console.log(a);
// } while(a != 0);        // 조건식이 false이지만 무조건 한번은 반복


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //


// 무한 반복, continue, break
// 무한반복이란 말 그대로 무한 반복문 for, while 둘다 무한 반복 가능
// continue, break의 경우 반복문 내부에 사용하는 것
// continue의 경우 만나는 순간 바로 다음 반복으로 이동
// break의 경우 만나는 순건 바로 반복문 종료

// var cnt = 0
// for(;;){
//     cnt++
    
//     if(cnt == 3) {
//         continue;
//     }

//     if(cnt == 5)  {
//         break;
//     }

//     console.log(cnt); 

// }


// var c = 0;
// while(true) {
//     c++;

//     if(c == 3) {
//         continue;
//     }

//     if(c == 5) {
//         break;
//     }

//     console.log(c);
// }


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //


// 중첩 반복문
// 중첩 반복문은 반복문 내부애 또 다른 반복문이 있는 것으로 2중첩, 3중첩 등이 있다.
// 실제로는 3중첩을 포함한 그 이상은 잘 사용안하는대 그 이유는 너무 오래 걸림

// for(let i = 0; i < 10; i++) {                // 총 9번 반복
//     for(let j =0; j < 10; j++) {                 // 총 81번 반복
//         console.log(i, "*" , j, "=" , i*j);
//     }
// }


//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //


// for(let l = 1; l < 6; l++) {
//     for(let j = 1; j <= l;  j++) {        // 각 라인의 번쨰와 똑같은 수의 별을 출력허기 위해 밖에 있는 변수 사용
//         process.stdout.write('* ');              // 줄 바꿈 무시하면서 출력
//     }
//     console.log();
// }


 
//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ //


// for(let i = 1; i < 10; i++) {
//     for(let j = 1; j <= i; j++) {
//         console.log(i, "*", "=", i*j);
//     }
// }

