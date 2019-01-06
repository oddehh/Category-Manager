//dummy data
const testText = document.querySelector('.products-ids')
testText.value = `456456
546767
567868
546456
765899
678967`
// w przyszłości counter powinien zliczać po zmianie wartości z 0 (po wklejeniu)
const counter = document.querySelector('.counter')
counter.innerText = testText.value.trim().split('\n').length

const categoryPath = "Szukaj tapety po wzorze/Wzory"
const categories = ["dziecięce","geometryczne","imitacje","napisy","ornamenty","pasy","roślinne","zwierzęce","abstrakcyjne","krata","jednolite i koordynaty","koniczyna marokańska","egzotyczne"]

function categoryListDisplay(arr) {
  const categoryList = document.querySelector('ol.categoryList')
  categoryList.innerHTML = ''

  for (cat of arr) {
    const catLi = document.createElement('li')
    catLi.innerText = cat
    categoryList.appendChild(catLi)
  }
}
categoryListDisplay(categories)

function generateRows() {
  const ids = document.querySelector('.products-ids').value.trim().split('\n')
  console.log(ids)

  const ul = document.querySelector('ul.ids')
  ul.innerHTML = ''

  for (id of ids) {
    const idLi = document.createElement('li')
    const catInput = document.createElement('input')
    catInput.setAttribute('type', 'text')
    idLi.innerText = id
    idLi.appendChild(catInput)
    ul.appendChild(idLi)
  }
}

//get categories
// >>przerzuciłem do save()

//save
// wszystkie wartości - lista id tez - będą musiały być zapisywane i odtwarzane przy przeładowaniu
function save() {
  const categoriesArray = Array.from(document.querySelectorAll('input'), input => [input.value.split(',')])
  localStorage.setItem("categoriesArray",JSON.stringify(categoriesArray))
  console.log('saved!')
}


//load
function load() {
  const lastSave =JSON.parse(localStorage.getItem("categoriesArray"))
  console.log(lastSave)
}


//extract
function extract( ) {
  const prodIdsArr = Array.from(document.querySelectorAll('ul.ids li'), li => li.textContent)
  const catNamesArr = Array.from(document.querySelectorAll('ul.ids li input'), inp => [inp.value.split(',')])
  catNamesArr.forEach( (numsA,i) => {
    numsA.forEach(num => {
     console.log( num + prodIdsArr[i] )

    })
  })

}

//console.log(extract(prodIdsArr,catNamesArr))

//dodawanie i usuwanie id






/* TO DO
przy przechodzeniu między inputami powinien przenosić wartość z poprzedniego do kolejnego
i zaznaczać ją do nadpisania

możliwośc wpisania startowego i końcowego id i wygenerowanie listy na tej podstawie



*/


/*
7547	Katrus K095 spodnie 
7546	Katrus K090 sukienka 
7545	Katrus K003 sukienka 
7544	Katrus K031 sukienka 
7543	Katrus K007 sukienka 


*/
