//let i;
//i = 1;
//while ( i < 4 ) {
//  
//  i = i + 1;
//}

//for (let i = 1; i < 4; i = i + 1 ) {
//    $("#response").append("<br />" + i);
//  }

// let i;
// i = 1;
// $("#response").html('')
// while ( i < 4 ) {
//     if ( i % 2 == 0 ){
//         $("#response").append("<br />" + i + ' is even');
//     } else {
//         $("#response").append("<br />" + i + ' is odd');
//     }
//   i = i + 1;
// }

let tipCalculator;
tipCalculator = function(total, tipRate){
    if(tipRate > 1){
        tipRate = tipRate/100;
    } else {
        tipRate = tipRate;
    }
    tipAmount = total * tipRate;
       $("#response").html("Your tip is $" + tipAmount);

}

tipCalculator(50.0, 20)
