//  Chemin relatif : ../reponses/script-09.js
//  Chemin relatif : ../files/usa.json

// var usa;
// var xhr = new XMLHttpRequest();
// // 1) Chargez le fichier usa.json à l'aide d'une requete AJAX et affectez-le à la variable usa
// xhr.onreadystatechange = function () {
//   if (xhr.readyState == 4 && xhr.status == 200) {
//     usa = JSON.parse(xhr.responseText);

//     // 2) Remplir la liste #la avec les noms des des états US.
//     var stateList = document.getElementById("la");
//     usa.forEach(function (element) {
//         var option = document.createElement("option");
//         option.text = element.state;
//         stateList.add(option);
//     });

//     // 3) Attachez à la liste #la un handler change. Le handler doit synchroniser les villes de la liste #lb avec l'état de la liste #la.
//     stateList.addEventListener("change", function () {
//       var selectedState = stateList.options[stateList.selectedIndex].text;
//       var cities = usa.find((element) => element.state === selectedState).cities;
//       console.log("selected State: " + selectedState);

//       var cityList = document.getElementById("lb");
//       cityList.innerHTML = "";

//       cities.forEach(function (city) {
//         var option = document.createElement("option");
//         option.text = city;
//         cityList.add(option);
//       });
//     });
//   }
// };
// xhr.open("GET", "../files/usa.json", true);
// xhr.send();
