//  Chemin relatif : reponses/script-04.js
//  Chemin relatif : files/user.json

// $(document).ready(function() {
//     // 1
//     function getUsersData() {
//         $.ajax({
//             url: '../files/users.json',
//             type: 'GET',
//             dataType: 'json',
//             success: function(users) {
//                 setUserDataInTable(users);
//             },
//             error: function(error) {
//                 console.error('Error fetching users data:', error);
//             }
//         });
//     }

//     // 2
//     function setUserDataInTable(users) {
//         var ceDiv = $('#ce');
//         var table = $('<table>');

//         // 3
//         var headerRow = $('<tr>');
//         headerRow.append('<th>Email</th>');
//         headerRow.append('<th>Token</th>');
//         table.append(headerRow);

//         // 4
//         $.each(users, function(index, user) {
//             var row = $('<tr>');
//             row.append('<td>' + user.email + '</td>');
//             row.append('<td>' + user.token + '</td>');
//             table.append(row);
//         });
//         ceDiv.append(table);
//     }

//     getUsersData();
// });