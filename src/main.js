let html = document.querySelector("#demo");
let style = document.querySelector("#style");
let string = `
/*我是一名前端新人
 * 我的名字叫小吕
 * 接下来我要演示一下我的前端功底
 * 首先,我要准备一个div
 * 我要加的样式是
 */
#div1{
    border : 1px solid red;
    width: 200px;
    height : 200px;
}
/* 接下来我把 div 变成一个八卦
 * 注意看好了
 * 首先,我把div变成一个圆
 **/
#div1 {
    border-radius : 50%;
    box-shadow : 0 0 6px 4px green;
    border : none;
}
/* 八卦是阴阳两部分
 * 一黑一白
 **/
#div1{
    
background: linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 49%, rgba(0,0,0,1) 50%, rgba(0,0,0,1) 100%);
}
/* 加两个球 */
#div1::before{
    width:100px;
    height:100px;
    position:absolute;
    top: 0;
    left : 50%;
    transform : translate(-50%);
    background: #000;
    border-radius: 50%;
background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
    width:100px;
    height:100px;
    position:absolute;
    bottom: 0;
    left : 50%;
    transform : translate(-50%);
    background: #fff;
    border-radius: 50%;
background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
}
`;
let n = 0 ;
let string2 = "";
let step = () => {
   setTimeout(()=>{
   if(string[n]==='\n' ){//去string的第n个字符
       string2 += '<br>';//如果是\n就换成<br> 
   }else if(string[n] === ' '){
       string2 += "&nbsp";
   } {
       string2 += string[n];//不是回车就照抄
   }
   html.innerHTML = string2 ;
   style.innerHTML = string.substring(0,n) ;
   window.scrollTo(0,999999);
   demo.scrollTo(0,9999);
   if(n < string.length-1){
       //不是最后一个
       //假如lengrh长度55 当n等于54进去后 进行加1 成55读不到了
       // 所以解决 要不n+1要不string.length-1
       n += 1;
    step();
}
   },1) 
};
step();