{
alert('loading begin');

// member register
function screen1() {
  let key = 0;
  let members = [
    { "member": { "id": "1", "name": "名前　むつき",   "fav": ""} },
    { "member": { "id": "1", "name": "名前　きさらぎ", "fav": ""} },
    { "member": { "id": "1", "name": "名前　やよい",   "fav": ""} },
    { "member": { "id": "1", "name": "名前　うつき",   "fav": ""} },
    { "member": { "id": "1", "name": "名前　さつき",   "fav": ""} },
    { "member": { "id": "1", "name": "名前　みなつき", "fav": ""} },
    { "member": { "id": "1", "name": "名前　ふみつき", "fav": ""} },
    { "member": { "id": "1", "name": "名前　はづき",   "fav": ""} }
  ];

  members.forEach( function(user) {
    var hdiv      = document.createElement('div');
    var memText   = document.createElement('input');
    memText.type  = 'text';
    memText.value = user['member']['name'];

    hdiv.appendChild(memText);
    document.body.appendChild(hdiv);
  });

  const addButton    = document.createElement('input');
  addButton.type     = 'button';
  addButton.value    ='アンケート開始';
  // addButton.onclieck = screen2_1(members);
  document.body.appendChild(AddButon);
}

//  // 好きな人選択画面　コントローラー
//  function screen2(members) {
//    members.forEach( function( user ) {
//      // screen2_1(user.name);
//      // screen2_2(member, user);
//    });
//  }

alert('loaded to exec');
screen1();
alert('loading complete');

}
