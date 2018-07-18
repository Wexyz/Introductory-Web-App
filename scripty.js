//  for(var y = 1; y<=4; y++){
//  begin(y);
//  }
//function readURL(input){
//  if(input.files && input.files[0]){
//    var reader = new FileReader();

//    reader.onload = function(e){
//      $('#img2').attr('src',e.target.result);
//    };
//    reader.readAsDataURL(input.files[0]);
//  }
//}

function readURL(input, set){
if(input.files && input.files[0]){
    var reader = new FileReader();

    reader.onload = function(e){
       $('#img'+set).attr('src',e.target.result);
    };
    reader.readAsDataURL(input.files[0]);
  }
}
