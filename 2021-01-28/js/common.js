'use strict';


// 로그인 시 top_event, sign_menu .login 추가



// gnb 상단 고정 구현
const gnb = document.querySelector('.gnb');
const gnbTopOffset = gnb.offsetTop;
window.addEventListener('scroll', e =>{

    if (window.pageYOffset >= gnbTopOffset) {
        gnb.style.position = 'fixed';
        gnb.style.top = 0;
        gnb.style.left = 0;
        gnb.style.right = 0;
    } else {
        gnb.style.position = '';
        gnb.style.top = '';
    }
});
// gnb 상단 고정 끝 --


// gnb_search
// (1) btn_delete 클릭 > value 값 초기화
const btnD = document.querySelector('.btn_delete');
const inpSearch = document.querySelector('.inp_search');

btnD.onclick = function () {
    inpSearch.value = '';
}

// (2) 입력 창 focus > 배경 #fff 변경, focus를 잃으면 원래대로.
// transition 0.3초 추가
inpSearch.addEventListener('focus', function(changeBg) {
    this.style.backgroundColor = '#fff';
}, true);
inpSearch.addEventListener('blur', function(changeBg) {
    this.style.backgroundColor = '';
}, true);
// gnb_search 끝


// location_login.
// 브라우저 로드시 .location_login에 3초간 active 클래스 추가 후 삭제



