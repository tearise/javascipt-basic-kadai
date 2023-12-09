 const btn=document.getElementById('btn');
 const text = document.getElementById('text');
 btn.addEventListener('click',()=>{
  //setTimeoutを使い２秒後に表示されるように変更
  setTimeout(()=>{
    text.textContent='ボタンをクリックしました';
  },2000);//1000分の1で表示されるので２秒にしたければ、2000にする
 })