//  Chemin relatif : reponses/script-06.js
// String.fromCharCode() permet de récupérer le caractère à partir du code

// $(document).ready(function() {
//     keypress('#f1');

//     keypress('#f2');
// });

// function keypress(id) {
//     $(id).on('keypress', function(event) {
//         // 1
//         console.log(event);

//         // 2 et 4
//         if(id == "#f2") {
//             if($('#f2').val().length % 3 === 0) {
//                 $('#out').text($('#f2').val());
//             }
//         }
//         else {
//             $('#out').text($(id).val());
//         }

//         // 3
//         if (isNaN(String.fromCharCode(event.charCode))) {
//             event.preventDefault();
//         }
//     });
// }