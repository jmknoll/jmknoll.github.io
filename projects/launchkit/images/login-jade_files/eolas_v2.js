
// eolas.js - workaround for Eolas
var teo = "";
if( plugin && (navigator.userAgent.indexOf("MSIE 8a") == -1 && navigator.userAgent.indexOf("MSIE 7a") == -1 )) {
 teo = '<OBJECT ID="'+qID+'"';
 teo += ' DATA='+flash_name+qType+qWidth+qHeight;
 teo += '> <PARAM NAME="movie" VALUE='+flash_name+qFlashVars+qWmode;
 teo += '> <PARAM NAME="quality" VALUE="autohigh"';
 teo += '> <PARAM NAME="allowScriptAccess" VALUE="always"';
 teo += '> </OBJECT>';
}
else {
 teo = qA+qImg;
}

function teoWrite(con, tag, cnt) {  
  try { document.getElementById(con).innerHTML += tag; } 
  catch (e) { setTimeout(function() { teoWrite(con, tag, cnt++); }, 100); }
}

if(typeof teadCon === 'undefined') { document.write(teo); } else { teoWrite(teadCon, teo, 0); }