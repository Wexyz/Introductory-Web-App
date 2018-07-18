function arrayg(array){
 var zero = 0;
  while(temp != 7){
    var temp = zero;
    for(var y=0;y<16;y++){
      array[y] = Boolean(Math.random()>.5) ? 1 : 0;
      temp = temp + array[y];
      }
  }
  return array;
}


function readURL(input, set){
if(input.files && input.files[0]){
    var reader = new FileReader();

    reader.onload = function(e){
       $('#img'+set).attr('src',e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
