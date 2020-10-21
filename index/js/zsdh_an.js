// console.log(window.innerWidth);
// console.log(window.innerHeight);

//移动事件
var rocket;
//设置弹球位移量
var x=Math.random()+1;
var y=Math.random()+1;
// console.log(x);
// console.log(y);
let windH = window.innerHeight + document.documentElement.scrollTop;
window.onscroll=()=>{
   windH = window.innerHeight + document.documentElement.scrollTop;
}
// console.log(window.screenTop);
let contx;
let conty;

let bool = true;
let bool1 = true;

setInterval(start,20);



var left_s = 0;
var top_s = 100+Math.random()*300;
// console.log($(".zsdh_box").offset().left);
function start(){
     if(bool){
         contx = x;
     }else {
         contx=-x;
     }
     if($(".zsdh_box").offset().left + $(".zsdh_box").width() >= window.innerWidth ){
         bool = false;
     }
    if($(".zsdh_box").offset().left < 0 ){
        bool = true;
    }
    left_s += contx;
    $(".zsdh_box").css("left",left_s+"px");

    if(bool1){
        conty = y;
    }else {
        conty=-y;
    }
    if($(".zsdh_box").offset().top + $(".zsdh_box").height() >= windH){
        bool1 = false;
    }
    if($(".zsdh_box").offset().top < document.documentElement.scrollTop ){
        bool1 = true;
    }
    top_s += conty;
    $(".zsdh_box").css("top",top_s+"px");


}


