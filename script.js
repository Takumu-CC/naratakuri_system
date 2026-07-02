'use strict'
// ここに JavaScript のコードを書きましょう


 function changeColor(buttonElement) {
       buttonElement.classList.toggle('is-active');
     }


// // 事前に buttons（NodeList/配列）や updateCount(), setButtonState(), saveState() が定義されている想定

// const clearAllBtn = document.getElementById('clear-all');
// const STORAGE_KEY = 'attendance-state-v1'; // 既存のキーに合わせてください

// clearAllBtn.addEventListener('click', () => {
//   // 全ボタンを取得（既に buttons 変数がなければ querySelectorAll で取得）
//   const buttons = Array.from(document.querySelectorAll('.base-button'));

//   // 見た目とアクセシビリティをリセット
//   buttons.forEach(btn => {
//     btn.classList.remove('is-active');           // 視覚クラスを外す
//     btn.setAttribute('aria-pressed', 'false');  // スクリーンリーダ向けに状態を false に
//   });

//   // localStorage の保存データを消す（または空オブジェクトにする）
//   try {
//     localStorage.removeItem(STORAGE_KEY);
//     // または localStorage.setItem(STORAGE_KEY, JSON.stringify({}));
//   } catch (e) {
//     console.error('localStorage error', e);
//   }

//   // 在室数表示を更新する関数を呼ぶ（なければ手動で更新）
//   if (typeof updateCount === 'function') {
//     updateCount();
//   } else {
//     // 単純にカウント要素がある場合の例
//     const presentCountEl = document.getElementById('present-count');
//     if (presentCountEl) presentCountEl.textContent = '0';
//   }
// });