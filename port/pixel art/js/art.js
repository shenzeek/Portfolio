// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()
var table = $("#pixel_canvas");
function makeGrid() {

// Your code goes here!

var inaltime = $("#input_height").val();
var latime = $("#input_width").val();

$("#pixel_canvas").html("");
for(var inaltimeTabel=1; inaltimeTabel<=inaltime; inaltimeTabel++){
  $("#pixel_canvas").append("<tr></tr>");
};

for(var latimeTabel=1; latimeTabel<=latime; latimeTabel++){
  $("tr").each(function(){
    $(this).append("<td></td>");
  });
};
};
  table.on("mousedown", "td", function() {
    //color panel addition
    let culoare = $("#colorPicker").val();
    $(this).css("background-color", culoare);
  });
  
  $(document).ready(function(){
  $("#sizePicker").on("submit", function(prev){
     makeGrid();
     prev.preventDefault();
   });

  /*hold down mouse*/
  var mouseDown = false;
  table.mousedown(function(e) {
    e.preventDefault();
    mouseDown = true;
  });

  $("body").mouseup(function() {
    mouseDown = false;
  });

  table.on("mousemove", "td", function() {
    let culoare = $("#colorPicker").val();
    if (mouseDown) {
      $(this).css("background-color", culoare);
    }
  });

  table.on("dblclick", "td", function(prev){
    prev.preventDefault();
    $(this).css("background-color", "")
  });
 table.on("mouseleave", "td", function(){
   $(this).css("box-shadow", "")
 });
 table.on("mouseenter", "td", function(){
   $(this).css("box-shadow", "1px 1px 8px")
 });
 $(".toggleGrid").on("click", function(){
   $("table").toggleClass("solid");

 });
});
