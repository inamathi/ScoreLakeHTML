/**
/* ヘッダーアニメーション
**/
const fixedElm = document.getElementById('header');
let scrollPoint = 0; // 現在のスクロール位置をセットする変数
let lastPoint = 0; // 1つ前のスクロール位置をセットする変数

window.addEventListener("scroll", function(){
	
	scrollPoint = window.scrollY;
	
	if(scrollPoint > lastPoint){ // 下スクロールの場合
		fixedElm.classList.add('hide-header');
	}else{ // 上スクロールの場合
		fixedElm.classList.remove('hide-header');
	}
	
	lastPoint = scrollPoint;
});

/**
/* スクロールボタン
**/
const scroll_to_top_btn = document.querySelector('#scroll-to-top-btn');

window.addEventListener("scroll", function() {
    scrollPointTopBtn = window.scrollY;
    if (scrollPointTopBtn < 200) {
        scroll_to_top_btn.classList.add('hide-topbtn');
    } else {
        scroll_to_top_btn.classList.remove('hide-topbtn');
    }
})

//クリックイベントを追加
scroll_to_top_btn.addEventListener( 'click' , scroll_to_top );

function scroll_to_top(){
  window.scroll({top: 0, behavior: 'smooth'});

};

/**
 * プレイヤーページアコーディオン（後で実装）
 */
const button = document.querySelectorAll('.js-button');
const openClass = 'is-expand';
Array.prototype.forEach.call(button, (el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const contents = el.nextElementSibling;
    const outerHeight = contents.clientHeight;
    // 子要素の高さを取得
    const innerHeight = contents.children[0].clientHeight;

    el.classList.toggle(openClass);
    contents.classList.toggle(openClass);

    // 子要素の高さを親要素のmax-heightに設定
    contents.style.maxHeight = outerHeight === 0 ? `${innerHeight}px` : 0;
  });
});