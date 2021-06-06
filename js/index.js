function clickBtn1(){
  console.log("テスト1btn1")
  const obj = document.getElementById("5/13 我が家の怪談");
  console.log(obj);

  if(obj.style.display=="none"){
    console.log("obj.style.display");
    obj.style.display="block";
  } else {
    console.log("テスト2btn1");
    obj.style.display ="none";
  }
}

function clickBtn2(){
  const obj2 = document.getElementById("news");
  console.log(obj2);
  const obj2_youso = obj2.contentWindow.document.getElementById("5/3【周知】語句登録の追加" );
  console.log(obj2_youso);


  if(obj2_youso !== undefined) {
    if(target.style.display=="none"){
      target.style.display="block";
      } else {
        target.style.display ="none";
    }
  }
}
