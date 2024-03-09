//  Chemin relatif : reponses/script-05.js

// // 3) Créer une fonction qui permet de formater les nombres : string ← format(number) 
// // "23 345.60" ← format(23345.6)
// function format(number) {
//     return number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$& ').toString();
// }


// $(document).ready(function () {
//     // 1) Parcourir les lignes du tableau et claculer les sous-totaux
//     var tableRows = $('#ce table tr').not(':first').not(':last');
//     var total = 0;
//     let total_list = []

//     tableRows.each(function () {
//         var row = $(this);
//         var price = parseFloat(row.find('td:eq(1)').text().replace(/\s/g, '').replace(',', ''));
//         var quantity = parseFloat(row.find('td:eq(2)').text().replace(/\s/g, '').replace(',', ''));
//         var subtotal = price * quantity;
//         row.find('td:eq(3)').text(format(subtotal));
//         total_list.push(subtotal);
//         total += subtotal;
    

//         row.find('td:eq(1)').text(format(price));
//         row.find('td:eq(2)').text(quantity);
//     });

//     total_list.pop();
//     let total_products = 0;
//     total_list.forEach(price => {
//         total_products += (Number)(price);
//     });

//     // 2) Calculer le total général
//     var totalRow = $('#ce table tr:last');
//     totalRow.find('td:eq(1)').text(format(total_products));
// });