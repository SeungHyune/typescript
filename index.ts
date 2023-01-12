// 1강 변수에 타입지정 가능 - (장점) 타입이 실수로 변경될 때 에러 내줌
let 이름 :string = 'kim';
let 나이 :number = 50;
let 결혼했니 :boolean = false;

// undifined, null로도 타입 지정 가능
let 회원들 :string[] = ['kim', 'park']
let 회원들2 :{ member1 : string, member2 : string } = { member1 : 'kim', member2 : 'park' }

//예제 문제
//Q1. 여러분의 이름, 나이, 출생지역을 변수로 각각 저장해봅시다.
let name1 :string = '조승현';
let age :number = 28;
let region :{region : string} = {region : 'Osansi'}

//Q2. 여러분이 가장 좋아하는 곡과 가수이름을 변수에 object 자료형으로 담아보십시오.
let obj :{singer : string, song : string} = { singer : 'BTS', song : 'Butter'}

//Q3. 다음과 같이 생긴 자료의 타입지정을 해보도록 합시다.
let project:{member:string[], days : number, started : boolean} = { member : ['kim', 'park'], days : 30, started : true }