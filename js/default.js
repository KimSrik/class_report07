// 네비게이션 스크립트 시작
let sNav = document.querySelectorAll('.sub-nav');
let mainNav = document.querySelector('.main-nav');
let sCtn = document.querySelector('.sub-container');

mainNav.onmouseenter = function(){
    for(let idx=0; idx<sNav.length; idx++){
        sNav[idx].style.display = 'block';
    }
}
mainNav.onmouseleave = function(){
    for(let idx=0; idx<sNav.length; idx++){
        sNav[idx].style.display = 'none';
    }
}
sCtn.onmouseenter = function(){
    for(let idx=0; idx<sNav.length; idx++){
        sNav[idx].style.display = 'block';
    }
}
sCtn.onmouseleave = function(){
    for(let idx=0; idx<sNav.length; idx++){
        sNav[idx].style.display = 'none';
    }
}
// 네비게이션 스크립트 끝


// 슬라이더 시작
function moveSlider(num){
    let slide = document.querySelectorAll('.slide');
    let cIdx;
    for(let idx=0; idx<slide.length; idx++){             
        if(slide[idx].classList.contains('active')){
            cIdx = idx;
        }
        slide[idx].classList.remove("active");
    }

    if(num<0){
        if(cIdx == 0){
            cIdx = 3;
        }
        cIdx = cIdx - 1;
    }else{
        cIdx = (cIdx + num) % 3;
    }                
    slide[cIdx].classList.add("active");
}

document.querySelector('.btn-prev').onclick = function(){
    moveSlider(-1);
}
document.querySelector('.btn-next').onclick = function(){
    moveSlider(1);
}

// 3초 마다 슬라이더 우측으로 넘기기
setInterval(function(){
    moveSlider(1);
},3000);

// 슬라이더 끝

// 패밀리사이트 시작
let family = document.querySelector('.family');
let fList = document.querySelector('.f-list');

family.onmouseenter = function(){ 
    fList.style.display = 'block';
}
family.onmouseleave = function(){
    fList.style.display = 'none';
}
// 패밀리사이트 끝


// 공지사항 모달 창 시작
let ntc = document.querySelectorAll('.ntc');
let modal = document.querySelector('.modal-popup');
let cBtn = document.querySelector('.btn-close');
let modalTxt = document.querySelectorAll('.modal-txt');


for(let idx=0; idx<ntc.length; idx++){
    ntc[idx].onclick = function(){           
        for(let sIdx=0; sIdx<ntc.length; sIdx++){
            modalTxt[sIdx].style.display = 'none';
        }               
        modal.style.display = 'block';
        modalTxt[idx].style.display = 'block';
    }
}

// 모달 창 닫기 버튼
cBtn.onclick = function(){
    modal.style.display = 'none';
}

// 공지사항 모달 창 끝