
const btn = document.getElementById('gbtn');
const result = document.getElementById('result');


//下記ボタンの処理

gbtn.addEventListener(`click`,()=>{
  // 下記の説明　ランダムに選出　0~0.99まで
  const num = Math.random();

  if(num<0.3){
    result.textContent = `勝ち`;
    // 下記の説明　画像を切り替える処理
    document.getElementById('hfot').src = './img/janken_t.png';
  }


  else if(num<0.6){
    result.textContent = `負け`;

    document.getElementById('hfot').src = './img/janken_p.png';
  }
  else{
    result.textContent = `引き分け`;

    document.getElementById('hfot').src = './img/jannken_g.png';
  }
});


tbtn.addEventListener(`click`,()=>{
  // 下記の説明　ランダムに選出　0~0.99まで
  const num = Math.random();

  if(num<0.3){
    result.textContent = `勝ち`;
    // 下記の説明　画像を切り替える処理
    document.getElementById('hfot').src = './img/janken_p.png';
  }


  else if(num<0.6){
    result.textContent = `負け`;

    document.getElementById('hfot').src = './img/jannken_g.png';
  }
  else{
    result.textContent = `引き分け`;

    document.getElementById('hfot').src = './img/janken_t.png';
  }
});

pbtn.addEventListener(`click`,()=>{
  // 下記の説明　ランダムに選出　0~0.99まで
  const num = Math.random();

  if(num<0.3){
    result.textContent = `勝ち`;
    // 下記の説明　画像を切り替える処理
    document.getElementById('hfot').src = './img/jannken_g.png';
  }


  else if(num<0.6){
    result.textContent = `負け`;

    document.getElementById('hfot').src = './img/janken_t.png';
  }
  else{
    result.textContent = `引き分け`;

    document.getElementById('hfot').src = './img/janken_p.png';
  }
});
