
 $("#hidebutton").click(function(){
 var len = $("div").length;
 for(let i=0; i <len; i++){
 setTimeout(()=> {
 $("#circle" +i).hide();
 }, 1000 * i);
 }
 });
   
 $("#showbutton").click(function(){
 var len = $("div").length;
 for(let i=0; i <len; i++){
 setTimeout(()=> {
 $("#circle" +i).show();
 }, 1000 * i);
 }
});