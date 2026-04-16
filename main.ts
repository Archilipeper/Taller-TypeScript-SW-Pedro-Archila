import { series } from "./series.js";

const body_tabla = document.getElementById("series-body") as HTMLElement;

const card_container= document.getElementById("card-container") as HTMLElement;

let promedio = 0

for (const serie of series){
    const row = document.createElement("tr");
    row.innerHTML = `
    <td>${serie.id}</td>
    <td class="text-primary" style="cursor: pointer;">
        ${serie.nombre}
    </td>
    <td>${serie.canal}</td>
    <td>${serie.temporadas}</td>`
    

    row.addEventListener("click", () => {

    card_container.innerHTML = `
      <div class="card">
        <img class="card-img-top" src="${serie.imagen}" alt="${serie.nombre}">
        <div class="card-body">
          <h5 class="card-title ">${serie.nombre}</h5>
          <p class="card-text">${serie.descripcion}</p>
          <a href="${serie.link}" target="_blank" class="btn btn-primary">Go to page</a>
        </div>
      </div>
    `;
    });

    body_tabla.appendChild(row);

    promedio += serie.temporadas

    console.log(series);

    console.log(serie.imagen);
}

promedio = promedio / series.length

const textoPromedio = document.getElementById('average') as HTMLButtonElement;

textoPromedio.innerHTML = "Seasons average: " + promedio