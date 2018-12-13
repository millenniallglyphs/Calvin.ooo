var colbackground = ['zippo', 'link_1', 'link_2', 'link_3', 'link_4', 'link_5', 'link_6', 'link_7', 'link_8', 'link_9', 'link_10', 'link_11', 'link_12'];


/*an array of quotes that can appear at the bottom*/

var quotes = ['"We sprout new richness of design baroque apologies for Kaliyuga till Kether calls us home, hauls in the galaxies like some big fish.” –Diane Di Prima', '"Cyborgs for earthly survival" –Donna Haraway', '"its primary means and interests are not human discourse and human bodies but, rather, the calculation of all the world’s information and of the world itself as information." -Benjamin H. Bratton', '"Everything is, it seems, a stakeholder and is at stake."  -Benjamin H. Bratton', '"It is already turned loose. It is already coming. It cannot be called back." -Leslie Marmon Silko'];

/*words used on the landing page*/

var job = ['designer', 'writer', 'market pragmatist'];
var space = ['public', 'nature', 'smooth', 'object'];
var cloud =['private', 'culture', 'striated', 'subject'];

/*collection of possible pastel background colors*/

var pastel_colors = ['#FFE9F2', '#FFFEE9', '#F0FFE9', '#E9F2FF', '#EDE9DE', '#ECE9FF', '#E6F1E1', '#FFE9F1', '#E9FAFF', '#FBFFE9', '#CBFFC6', '#FFEBE9', '#F3E9FF', '#FFF9D8', '#D8FFEA', '#D8E1FF', '#F3DDBD'];

/*collection of dark colors*/

var dark_colors = ['#49210B', '#25424E', '#2E3A13', '#3A3113', '#2B133A', '#133A33', '#3A1328'];

/*landing page color variable creation*/

var random_pastel = pastel_colors[Math.floor(Math.random() * pastel_colors.length)];
var random_pastel_two = pastel_colors[Math.floor(Math.random() * pastel_colors.length)];
var random_dark = dark_colors[Math.floor(Math.random() * dark_colors.length)];
var random_words = quotes[Math.floor(Math.random() * quotes.length)]

/*changing the color for the elements in the header*/

/*document.getElementById('full').style.backgroundColor = random_pastel;*/
document.getElementById('downarrow').style.stroke = random_dark;
document.getElementById('fulltwo').style.backgroundColor = random_pastel_two;
document.getElementById('title').style.color = random_dark;
/*changing the color for all of the link boxes*/


/*
for(i = 0; i < 12; i++){
  document.getElementById(colbackground[i]).style.backgroundColor = pastel_colors[Math.floor(Math.random() * pastel_colors.length)];
};
*/

/*function detailing on and off hover*/

function onColor(une, deux, troix) {
  document.getElementById(une).onclick = function()
  {slideIn(deux, troix)};
  document.getElementById(une).onmouseover = function()
  {slideIn(deux, troix)};
  document.getElementById(une).onmouseout = function()
  {slideOut(deux)};
};

/*function telling divs to change background color*/


function slideIn(nom, nip) {
  document.getElementById(nom).style.backgroundColor = pastel_colors[nip];
}

function slideOut(plume) {
  document.getElementById(plume).style.backgroundColor = "white";
}

/*functions caling individual dom elements by id*/

onColor("btnt", "link_1", Math.floor(Math.random() * pastel_colors.length));
onColor("scndint", "zippo", Math.floor(Math.random() * pastel_colors.length));
onColor("tpcn", "link_2", Math.floor(Math.random() * pastel_colors.length));
onColor("trc", "link_13", Math.floor(Math.random() * pastel_colors.length));
//onColor("dtb", "link_3", Math.floor(Math.random() * pastel_colors.length));
onColor("rdos", "link_4", Math.floor(Math.random() * pastel_colors.length));
onColor("dzp", "link_5", Math.floor(Math.random() * pastel_colors.length));
onColor("rbt", "link_6", Math.floor(Math.random() * pastel_colors.length));
onColor("btc", "link_7", Math.floor(Math.random() * pastel_colors.length));
onColor("dnt", "link_8", Math.floor(Math.random() * pastel_colors.length));
onColor("sha", "link_9", Math.floor(Math.random() * pastel_colors.length));
onColor("dvm", "link_10", Math.floor(Math.random() * pastel_colors.length));
onColor("csm", "link_11", Math.floor(Math.random() * pastel_colors.length));
onColor("rvl", "link_12", Math.floor(Math.random() * pastel_colors.length));
onColor("claiming", "theclaim", Math.floor(Math.random() * pastel_colors.length));


/*onColor(btnt, link_1);*/

/*getting a quote for the footer*/

document.getElementById("quote_text").innerHTML = random_words;



/*setInterval(theSwitch, 750);*/
setInterval(theWitch, 1500);

var i = 0;
var r = 0;

/*

function theSwitch( ){
 i++
  if (i >= 3) {
    i=0
  }
 document.getElementById("job").innerHTML = job[i];
}
*/

function theWitch( ){
 r++
  if (r >= 3) {
    r=0
  }
  document.getElementById("space").innerHTML = space[r];
  document.getElementById("cloud").innerHTML = cloud[r];
}


console.log(Math.floor(Math.random() * pastel_colors.length));
