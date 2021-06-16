let all_squares = document.querySelectorAll(".square");
let target_container = document.querySelector(".floater")
let all_rows = document.querySelectorAll(".row");
let col1 = document.querySelectorAll(".col-1")
let cancel = document.querySelector(".cancel");
let col2 = document.querySelectorAll(".col-2")
let col3 = document.querySelectorAll(".col-3")
let retry = document.querySelector(".retry");
let all_columns = [col1,col2,col3];

let game_over = false;
let turn = 0;
let current_row, current_column;


document.addEventListener("DOMContentLoaded",(e)=>{
  document.querySelector(".loader").setAttribute("style","display:none")
});



const row_check = ()=>{
  for (var i = 0; i < all_rows.length; i++) {
   current_row = all_rows[i].querySelectorAll(".square");
   if (turn == 0) {
      game_over = (current_row[0].innerHTML == "O" && current_row[1].innerHTML == "O" && current_row[2].innerHTML == "O") ? true:false
      if (game_over) {
       target_container.setAttribute("style","display:block;");
       target_container.querySelector("span").innerHTML = "Player " + turn + " won this round";
       if (navigator.vibrate) {
            navigator.vibrate([0,100,300])
       }
       setTimeout((e)=>{
            target_container.setAttribute("style","display:none;");
       },4000)
       return;
      }
   }
   game_over = (current_row[0].innerHTML == "X" && current_row[1].innerHTML == "X" && current_row[2].innerHTML == "X") ? true:false
   if (game_over) {
    if (navigator.vibrate) {
         navigator.vibrate([0,100,300])
    }
    target_container.setAttribute("style","display:block;");
    target_container.querySelector("span").innerHTML = "Player " + turn + " won this round";
    setTimeout((e)=>{
         target_container.setAttribute("style","display:none;");
    },4000)
    return;
   }
  }
}

const col_check = ()=>{
  for (var i = 0; i < all_columns.length; i++) {
   current_column = all_columns[i];

   if (turn == 0) {
      game_over = (current_column[0].innerHTML == "O" && current_column[1].innerHTML == "O" && current_column[2].innerHTML == "O") ?  true : false;

      if (game_over) {
       if (navigator.vibrate) {
            navigator.vibrate([0,100,300])
       }
       target_container.setAttribute("style","display:block;");
       target_container.querySelector("span").innerHTML = "Player " + turn + " won this round";
       setTimeout((e)=>{
            target_container.setAttribute("style","display:none;");
       },4000)
       return;
      }
   }
  game_over = (current_column[0].innerHTML == "X" && current_column[1].innerHTML == "X" && current_column[2].innerHTML == "X") ?  true : false;
  if (game_over) {
   if (navigator.vibrate) {
        navigator.vibrate([0,100,300])
   }
   target_container.setAttribute("style","display:block;");
   target_container.querySelector("span").innerHTML = "Player " + turn + " won this round";
   setTimeout((e)=>{
        target_container.setAttribute("style","display:none;");
   },4000)
   return;
  }
  }
}


const diag_check = ()=>{
 if (turn == 0) {
    game_over = (all_squares[0].innerHTML =="O" && all_squares[4].innerHTML =="O" && all_squares[8].innerHTML =="O") ? true:false
    if (game_over) {
     if (navigator.vibrate) {
          navigator.vibrate([0,100,300])
     }
     target_container.setAttribute("style","display:block;");
     target_container.querySelector("span").innerHTML = "Player " + turn + " won this round";
     setTimeout((e)=>{
          target_container.setAttribute("style","display:none;");
     },4000)
      return;
    }
    game_over = (all_squares[2].innerHTML =="O" && all_squares[4].innerHTML =="O" && all_squares[6].innerHTML =="O") ? true:false
    if (game_over) {
     if (navigator.vibrate) {
          navigator.vibrate([0,100,300])
     }
     target_container.setAttribute("style","display:block;");
     target_container.querySelector("span").innerHTML = "Player " + turn + " won this round";
     setTimeout((e)=>{
          target_container.setAttribute("style","display:none;");
     },4000)
     return;
    }
 }
 game_over = (all_squares[0].innerHTML =="X" && all_squares[4].innerHTML =="X" && all_squares[8].innerHTML =="X") ? true:false
 if (game_over) {
  if (navigator.vibrate) {
       navigator.vibrate([0,100,300])
  }
  target_container.setAttribute("style","display:block;");
  target_container.querySelector("span").innerHTML = "Player " + turn + " won this round";
  setTimeout((e)=>{
       target_container.setAttribute("style","display:none;");
  },4000)
   return;
 }
 game_over = (all_squares[2].innerHTML =="X" && all_squares[4].innerHTML =="X" && all_squares[6].innerHTML =="X") ? true:false

 if (game_over) {
  if (navigator.vibrate) {
       navigator.vibrate([0,100,300])
  }
  target_container.setAttribute("style","display:block;");
  target_container.querySelector("span").innerHTML = "Player " + turn + " won this round";
  setTimeout((e)=>{
       target_container.setAttribute("style","display:none;");
  },4000)
   return;
 }

}


const handle_click = (e) =>{
 if (!game_over) {
  if (turn == 0) {
     if (e.target.innerHTML == "") {
      e.target.innerHTML = "O";
      row_check()
      if (!game_over) {
         col_check()
      }
      if (!game_over) {
         diag_check()
      }
      turn = 1
     }else{
      target_container.setAttribute("style","display:block;");
      target_container.querySelector("span").innerHTML = "Invalid move, try again.";
      setTimeout((e)=>{
           target_container.setAttribute("style","display:none;");
      },4000)
     }
  }else {
   if (e.target.innerHTML == "") {
    e.target.innerHTML = "X";
    row_check()
    if (!game_over) {
       col_check()
    }
    if (!game_over) {
       diag_check()
    }
    turn = 0;
   }else{
    target_container.setAttribute("style","display:block;");
    target_container.querySelector("span").innerHTML = "Invalid move, try again.";
    setTimeout((e)=>{
         target_container.setAttribute("style","display:none;");
    },4000)
   }
  }
 }else{
  target_container.setAttribute("style","display:block;");
  target_container.querySelector("span").innerHTML = "Game ended. ";
  setTimeout((e)=>{
       target_container.setAttribute("style","display:none;");
  },4000)
 }
}

for (var i = 0; i < all_squares.length; i++) {
 all_squares[i].addEventListener("click", (e)=>{
  if (game_over) {
    target_container.setAttribute("style","display:block;");
    target_container.querySelector("span").innerHTML = "Game ended. ";
    setTimeout((e)=>{
         target_container.setAttribute("style","display:none;");
    },4000)
  }else{
    handle_click(e);
  }
 })
}

retry.addEventListener("click", (e)=>{
 for (var i = 0; i < all_squares.length; i++) {
  all_squares[i].innerHTML = "";
 }
 game_over = false;
 turn = 0;
})
cancel.addEventListener("click", (e)=>{
  if (confirm("Do you really want to exit?")) {
     window.close()
  }
})
