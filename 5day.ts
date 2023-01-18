let 제목 = document.querySelector('#title');
let 링크 = document.querySelector('.link');
let 버튼 = document.querySelector('#button');
let 이미지 = document.querySelector('#image');

let imgAll = document.querySelectorAll('.naver');


버튼?.addEventListener('click', function(){
    if(제목 instanceof HTMLElement){
        제목.innerHTML = '반가워요';
        console.log(1);
    }
})

if(링크 instanceof HTMLAnchorElement){
    링크.href = 'https://kakao.com'
}

if(이미지 instanceof HTMLImageElement){
    이미지.src = 'new.jpg'
}

console.log(imgAll);

for(let i = 0 ; i<imgAll.length; i++){
    let a = imgAll[i]
    if(a instanceof HTMLAnchorElement){
        a.href = 'https://kakao.com'
    }
}
