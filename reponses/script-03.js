//  Chemin relatif : reponses/script-03.js
//  Chemin relatif : files/user.json

// $(document).ready(function () {
//     // 1
//     var preElement = $('<pre></pre>').appendTo('#ce');

//     // 2
//     preElement.addClass('language-javascript');

//     // 3
//     var codeElement = $('<code></code>').appendTo(preElement);

//     // 4
//     $.ajax({
//         url: '../files/users.json',
//         type: 'GET',
//         dataType: 'text',
//         success: function (data) {
//             // 5
//             codeElement.text(data);

//             // 6
//             Prism.highlightAll();
//         },
//         error: function (xhr, status, error) {
//             console.error('Error fetching users.json:', status, error);
//         }
//     });
// });