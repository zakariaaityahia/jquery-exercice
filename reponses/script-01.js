// 1) Modifier la couleur du texte de la première div (rouge)
// $(document).ready(function() {
//     $("#ce div:first-child").css("color", "red");
// });


// 2) Cloner la première et l'ajouter à la fin de la liste des div
// $(document).ready(function() {
//     const firstDivClone = $("#ce div:first-child").clone();
//     $("#ce").append(firstDivClone);
// });


// 3) Déplacer la dernière div et la mettre au début de la liste
// const lastDiv = $("#ce div:last-child");
// $("#ce").prepend(lastDiv);


// 4) Créer une nouvelle div, l'ajouter à la fin de la liste et afficher dedans le nombre total des div de la liste (y compris celle ajoutée)
// const totalDivs = $("#ce div").length;
// const newDiv = $("<div>").text("Total divs: " + totalDivs);
// $("#ce").append(newDiv);


// 5) Parcourir toutes les div et y ajouter un numéro d'ordre 1, 2, ...
// $("#ce div").each(function(index) {
//     $(this).text($(this).text() + " " + (index + 1));
// });