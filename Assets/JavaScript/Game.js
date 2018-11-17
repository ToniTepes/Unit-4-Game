let random_result;
let lost = 0;
let win = 0;
let previous = 0;

var resetAndStart = function() {

$(".crystals").empty();

random_result = Math.floor(Math.random() * 69) + 30;
console.log(random_result);

$("#result").html('Randome Result: ' + random_result);

for(var i = 0; i < 4; i++) {

    var random = Math.floor(Math.random() * 11) + 1;
   // console.log(random);

   

    var crystal = $("<div>");
        crystal.attr({
            "class": 'crystal',
            "data-random": random
    
        });

        crystal.html(random);

    $(".crystals").append(crystal);
    
}
}

resetAndStart();

var reset = function () {
    
}
$(document).on('click',".crystal", function () {
    
    var num = parseInt($(this).attr('data-random'));

    previous += num;
    console.log(previous);

     if(previous > random_result){
        lost--;

        $("#Loser").html(lost);

        previous = 0;

        resetAndStart();
    }
    else if(previous === random_result){
        win++;

        $("#Whatever").html(win);

        previous = 0;

        resetAndStart();
    }

    

})