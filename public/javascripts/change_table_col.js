var bM_click = new Array();

//マウスが乗ったとき。
function M_over(obj){
//クリックされていなければ青にする。
if(!bM_click[obj.id]){On(obj,"red");}
}

//クリックされたとき
function M_click(obj){
  //オンになっていた
  //自分をクリックしたなら自分自身をオフ。
  //クリックフラグ[自分自身]をオフ。
  if (bM_click[obj.id] == 1){
    Off(obj);
    bM_click[obj.id] = 0;
  }else{
    //自分自身をオン。背景色を引数で渡す（赤）。
    //クリックフラグ[自分自身]をオン
    On(obj,"red");
    bM_click[obj.id] = 1;
  }
}

//マウスが去ったとき
function M_out(obj){
  //クリックされていなければオフ。
  if(!bM_click[obj.id]){Off(obj);}
}

//背景色と文字色チェンジ：オン
function On(obj,c){
  obj.style.backgroundColor = c;
  obj.style.color = "black";
}

//背景色と文字色チェンジ：オフ
function Off(obj){
  obj.style.backgroundColor = "transparent";
  obj.style.color = "black";
}

document.write("js is called");
