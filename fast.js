let controls=document.querySelectorAll(".controls .row select");
let containerbutt=document.querySelector(".container button");
let fromText=document.querySelector(".from-text");
let toText=document.querySelector(".to-text");

controls.forEach((one, index) =>{
  let selected;
  for(const words in countries){
    if(index == 0 && words=="en-GB"){
      selected="selected";
    }else if(index == 1 && words=="ar-SA"){
      selected="selected";
    }else{
      selected="";
    }
    let option=`<option value="${countries[words]}" ${selected}>${countries[words]}</option>`
    one.insertAdjacentHTML("beforeend",option);
  }
})

containerbutt.addEventListener("click",function(){
  let text = fromText.value;
  let translatfrom=controls[0].value;
  let translatto=controls[1].value;
  let apiurl=`https://api.mymemory.translated.net/get?q=${text}!&langpair=${translatfrom}|${translatto}`
  fetch(apiurl).then(res => res.json()).then(data =>{
    toText.value=data.responseData.translatedText;
  })
})