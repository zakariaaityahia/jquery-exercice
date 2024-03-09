// $(document).ready(function () {
//     function damier(n) {
//         var checkerboard = $("#checkerboard");
//         checkerboard.empty();

//         for (var i = 0; i < n; i++) {
//             for (var j = 0; j < n; j++) {
//                 var cell = $("<div></div>").addClass((i + j) % 2 === 0 ? "white" : "black");
//                 checkerboard.append(cell);
//             }
//         }
//     }

//     $("#generate").click(function () {
//         var size = parseInt($("#size").val()) || 8;
//         damier(size);
//     });

//     damier(8);
// });