console.log("hello world");

const getBtn = document.querySelector("button");
const namesArea = document.querySelector("#alderaan-names");

function getResidents(){ axios.get('https://swapi.dev/api/planets/2').then(function(res){

    let resLength = res.data.residents.length;
    let newResidents = res.data.residents;
    for (let i = 0; i < resLength; i++){

        axios.get(newResidents[i]).then(function(res){

            let nameResult = document.createElement('h2');
            nameResult.textContent = res.data.name;
            namesArea.appendChild(nameResult);
        })
    }
    })
}


getBtn.addEventListener("click", getResidents);