// pénzváltó
var bemenet = document.getElementById("bemenet");
var ebbol = document.getElementById("ebbol");
var ebbe = document.getElementById("ebbe");
var valts = document.getElementById("valts");
var eredmeny = document.getElementById("eredmeny");
var torzs = document.getElementById("torzs");

var dollarSzin = "#88FF88";
var euroSzin = "#8888FF";
var forintSzin = "#FF8888";
var fontSzin = "#123456";

function valtsal () {
  var ertek = bemenet.value;
  var ebbolvalts = ebbol.value;
  var ebbevalts = ebbe.value;
  if (ebbolvalts === "euro") {
    torzs.style.backgroundColor = euroSzin;
    if (ebbevalts === "euro") {
        
        eredmeny.innerHTML = "= " + ertek + " €";
      }
    if (ebbevalts === "dollar") {
        
      eredmeny.innerHTML = "= " + ertek * 1.12645 + " $";
    }
    if (ebbevalts === "forint") {
      eredmeny.innerHTML = "= " + ertek * 311.432126 + " Ft";
    }
    if (ebbevalts === "font") {
      eredmeny.innerHTML = "= " + ertek * 0.735232687 + " £";
    }
  }
  if (ebbolvalts === "dollar") {
    torzs.style.backgroundColor = dollarSzin;
    if (ebbevalts === "dollar") {
        
        eredmeny.innerHTML = "= " + ertek + " $";
      }
    if (ebbevalts === "euro") {
      eredmeny.innerHTML = "= " + ertek * 0.887744685 + " €";
    }
    if (ebbevalts === "forint") {
      eredmeny.innerHTML = "= " + ertek * 276.472215 + " Ft";
    }
    if (ebbevalts === "font") {
      eredmeny.innerHTML = "= " + ertek * 0.65269891 + " £";
    }
  }
  if (ebbolvalts === "forint") {
    torzs.style.backgroundColor = forintSzin;
    if (ebbevalts === "forint") {
        eredmeny.innerHTML = "= " + ertek + " Ft";
      }
    if (ebbevalts === "dollar") {
      eredmeny.innerHTML = "= " + ertek * 0.003617 + " $";
    }
    if (ebbevalts === "euro") {
      eredmeny.innerHTML = "= " + ertek * 0.00321097252 + " €";
    }
    if (ebbevalts === "font") {
      eredmeny.innerHTML = "= " + ertek * 0.00236081196 + " £";
    }
  }
  if (ebbolvalts === "font") {
    torzs.style.backgroundColor = fontSzin;
    if (ebbevalts === "font") {
        eredmeny.innerHTML = "= " + ertek + " £";
      }
    if (ebbevalts === "forint") {
      eredmeny.innerHTML = "= " + ertek * 423.58308 + " Ft";
    }
    if (ebbevalts === "dollar") {
      eredmeny.innerHTML = "= " + ertek * 1.5321 + " $";
    }
    if (ebbevalts === "euro") {
      eredmeny.innerHTML = "= " + ertek * 1.36011363 + " €";
    }
  }
}