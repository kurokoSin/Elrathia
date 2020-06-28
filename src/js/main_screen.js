{
let members = [
  { "name": "名前　むつき",   "fav": ""},
  { "name": "名前　きさらぎ", "fav": ""},
  { "name": "名前　やよい",   "fav": ""},
  { "name": "名前　うつき",   "fav": ""},
  { "name": "名前　さつき",   "fav": ""},
  { "name": "名前　みなつき", "fav": ""},
  { "name": "名前　ふみつき", "fav": ""},
  { "name": "名前　はづき",   "fav": ""}
]; // ここの値に意味はないですが、データ構造の参考です。

// 参加者登録
function screen1() {
  let key = 0;

  const message = document.createElement('h1');
  message.innerText = '参加メンバーを登録してください';
  document.body.appendChild(message);

  members.forEach( function(user) {
    var hdiv      = document.createElement('div');
    var memText   = document.createElement('input');
    memText.type  = 'text';
    memText.value = user['name'];

    hdiv.appendChild(memText);
    document.body.appendChild(hdiv);
  });

  const addButton    = document.createElement('input');
  addButton.type     = 'button';
  addButton.value    ='アンケート開始';
  addButton.addEventListener('click', screen1_post); // addButton.onclieck = screen1_post(); これだとscript読み込み時に動いちゃった。
  document.body.appendChild(addButton);
}

function screen1_post(){
  let elms = document.body.getElementsByTagName("input");
  let joined_members = [];

  for (let i=0; i<elms.length; i++){
    if( elms[i].type == "text" && elms[i].value != "" ){
      joined_members.push( { "name": elms[i].value, "fav": ""} );
    }
  };
  members = joined_members;
  screen2_1(0);
}

// 好きな人選択画面　カバー
function screen2_1(id) {
  // 画面クリア
  while( document.body.firstChild ){
    document.body.removeChild( document.body.firstChild );
  }

  // 画面メッセージ
  const userName = document.createElement('h1');
  userName.innerText = members[id]['name'] + '　さん。';
  document.body.appendChild(userName);
  const message = document.createElement('h1');
  message.innerText = '準備ができたら、下のボタンを押してください';
  document.body.appendChild(message);

  // ぼたん
  const addButton    = document.createElement('input');
  addButton.type     = 'button';
  addButton.value    ='ここ押して';
  addButton.addEventListener('click', {"id": id, "handleEvent": screen2_2}); 
  document.body.appendChild(addButton);
}

function screen2_2(id) {
  // 画面クリア
  while( document.body.firstChild ){
    document.body.removeChild( document.body.firstChild );
  }

  // 画面作成
  const message = document.createElement('h1');
  message.innerText = members[this.id]['name'] + ' さん。どれか一つだけボタンを押してください。';
  document.body.appendChild(message);

  // 　　　メンバー一覧
  for( let i=0; i<members.length; i++ ){
    var hdiv      = document.createElement('div');
    var memText   = document.createElement('span');
    memText.innerText = members[i]['name'];
    var favBtn   = document.createElement('input');
    favBtn.type  = 'Button';
    favBtn.value = '  好み';
    favBtn.addEventListener('click', {"id": this.id, "fav": i, "handleEvent": screen2_2_post});
    var hateBtn   = document.createElement('input');
    hateBtn.type  = 'Button';
    hateBtn.value = 'ない  ';
    hateBtn.addEventListener('click', {"id": this.id, "fav": -1, "handleEvent": screen2_2_post});

    hdiv.appendChild(memText);
    hdiv.appendChild(favBtn);
    hdiv.appendChild(hateBtn);
    document.body.appendChild(hdiv);
  };
}

function screen2_2_post(id, fav){
  members[this.id]['fav'] = this.fav;
 
  this.id++; 
  if( members.length > this.id ){
    screen2_1(this.id);
  } else {
    screen3_1();
  }
}

// 結果発表画面　カバー
function screen3_1() {
  // 画面クリア
  while( document.body.firstChild ){
    document.body.removeChild( document.body.firstChild );
  }

  // 画面メッセージ
  const message = document.createElement('h1');
  message.innerText = '結果発表！';
  document.body.appendChild(message);

  // ぼたん
  const addButton    = document.createElement('input');
  addButton.type     = 'button';
  addButton.value    ='ここ押して';
  addButton.addEventListener('click', screen3_2);
  document.body.appendChild(addButton);
}

function love2_id(id){
  let pos = -1;
  if( members[id] != null && Number.isFinite(members[id]['fav']) ){
    pos = members[id]['fav'];
    if( pos != id ) {
      pos = -1;
    }
    if( pos <= id ){ // 既に検索済みのペアなので無視する
      pos = -1;
    }
  }
 
  return pos;
}

function screen3_2(){
  // 画面クリア
  while( document.body.firstChild ){
    document.body.removeChild( document.body.firstChild );
  }

  // 画面メッセージ
  const message = document.createElement('h1');
  message.innerText = '結果発表！';
  document.body.appendChild(message);

  // お互いに好きと入れた人検索
  let love2 = [];
  for( let i=0; i<members.length; i++){
    let result = love2_id(i);
    if( result >= 0 ){
      love2.push( {"id": id, "fav": result} );
    }
  }

  // 表示
  if( love2.length>0 ){
    for( let i=0; i<love2.length; i++){
      const message = document.createElement('h1');
      message.innerText = members[love2[i]["id"]]["name"] + 'さん ♡'  + members[love2[i]["fav"]]["name"] + 'さん';
      document.body.appendChild(message);
    }
  } else {
    const message = document.createElement('h1');
    message.innerText = '残念ながら、マッチングしませんでした。';
    document.body.appendChild(message);
  }
  

}


// 実行
screen1();

}
