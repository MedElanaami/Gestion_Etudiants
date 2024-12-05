import Etudiant from "./etudiant.js";

const displayEtudiants = async function () {
  return Etudiant.allEtudiant().then(function (response) {
    return response.map((etudiant) => {
      const { id, nom, prenom, note, date } = etudiant;
      return `
            <tr>
              <td> ${id} </td>
              <td> ${nom}</td>
              <td>${prenom} </td>
              <td>${date} </td>
              <td>${note} </td>
              <td></td>
            </tr>
        `;
    });
  });
};

const renderEtudiants = function () {
  const tableBody = document.querySelector(".list-etudiants");
  displayEtudiants().then((data) => {
    data = data.join(" ");
    tableBody.innerHTML = data;
  });
};

renderEtudiants();
