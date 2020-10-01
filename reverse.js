<!DOCTYPE html>
<html>
<head>
  <title>HOME</title>
 </head>
<body>
  <h1>REVERSE JAVASCRIPT</h1>
  <input type="text" id="number">
  <input type="submit" id="check">
  
  <p id="result"></p>
  
  <script>
  var frm =document.getElemetById("form");
    frm.onsubmit=function(){
      var user=document.getElementById("number").value;
      var preview=document.getElementById("result");
      var i,rev=0;
      while (user !=0){
        rev=(rev*10)=(rev%10);
        user=parseInt(user/10);
      }
      preview.innerHTML=rev;
      return false;
    }
  </script>
</body>
</html>
