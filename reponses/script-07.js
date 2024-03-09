//  Chemin relatif : reponses/script-08.js

// $(document).ready(function() {
//     var box = $('.box');
//     // 1
//     $(document).on('keydown', function(event) {
//         // 2
//         if (event.shiftKey) {
//             var currentPosition = box.position();
//             // 3
//             // oui on peut deplacer l'objet simultanément 
//             // en haut et à gauche ou en haut et à droite
//             // ou en bas et à gauche ou en bas et à droite
//             switch (event.key) {
//                 case 'ArrowRight':
//                     box.css('left', (currentPosition.left + 10 + 'px'));
//                     break;
//                 case 'ArrowLeft':
//                     box.css('left', (currentPosition.left - 10 + 'px'));
//                     break;
//                 case 'ArrowUp':
//                     box.css('top', (currentPosition.top - 10 + 'px'));
//                     break;
//                 case 'ArrowDown':
//                     box.css('top', (currentPosition.top + 10 + 'px'));
//                     break;
//                 case 'ArrowUp' && 'ArrowLeft':
//                     box.css({
//                         'top': (currentPosition.top - 10).toString() + 'px',
//                         'left': (currentPosition.left - 10).toString() + 'px'
//                     });
//                     break;
//                 case 'ArrowUp' && 'ArrowRight':
//                     box.css({
//                         'top': (currentPosition.top - 10).toString() + 'px',
//                         'left': (currentPosition.left + 10).toString() + 'px'
//                     });
//                     break;
//                 case 'ArrowDown' && 'ArrowLeft':
//                     box.css({
//                         'top': (currentPosition.top + 10).toString() + 'px',
//                         'left': (currentPosition.left - 10).toString() + 'px'
//                     });
//                     break;
//                 case 'ArrowDown' && 'ArrowRight':
//                     box.css({
//                         'top': (currentPosition.top - 10).toString() + 'px',
//                         'left': (currentPosition.left + 10).toString() + 'px'
//                     });
//                     break;
//             }
//         }
//     });
// });