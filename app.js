// dummy data
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

const categoryPath = 'Szukaj tapety po wzorze/Wzory'
const categories = [
  'dziecięce',
  'geometryczne',
  'imitacje',
  'napisy',
  'ornamenty',
  'pasy',
  'roślinne',
  'zwierzęce',
  'abstrakcyjne',
  'krata',
  'jednolite i koordynaty',
  'koniczyna marokańska',
  'egzotyczne',
]

function categoryListDisplay(arr) {
  const categoryList = document.querySelector('ol.categoryList')
  categoryList.innerHTML = ''

  for (const cat of arr) {
    const catLi = document.createElement('li')
    catLi.innerText = cat
    categoryList.appendChild(catLi)
  }
}
categoryListDisplay(categories)

function generateRows() {
  const ids = document
    .querySelector('.products-ids')
    .value.trim()
    .split('\n')
  console.log(ids)

  const ul = document.querySelector('ul.ids')
  ul.innerHTML = ''

  for (const id of ids) {
    const idLi = document.createElement('li')
    const catInput = document.createElement('input')
    catInput.setAttribute('type', 'text')
    idLi.innerText = id
    idLi.appendChild(catInput)
    ul.appendChild(idLi)
  }
}

// get value from inputs
function inputValuesArray() {
  return Array.from(
    document.querySelectorAll('ul.ids li input'),
    input => input.value.trim().replace(/ /g, '').split(',')
  )
}

// extract
function extract() {
  const productIdsArr = Array.from(
    document.querySelectorAll('ul.ids li'),
    li => li.textContent
  )

  inputValuesArray()
    .forEach((numsA, i) => {
      numsA.forEach((num) => {
        if (num > 0 && num <= categories.length) {
          console.log(`${productIdsArr[i]}\t${categoryPath} ${categories[num - 1]}`)
        // console log do zamienienia na push to temp array i zapisania na dysku
        }
      })
    })
}

// wszystkie wartości - lista id tez - będą musiały być zapisywane i odtwarzane przy przeładowaniu
function save() {
  localStorage.setItem('categoriesArray', JSON.stringify(inputValuesArray()))
  console.log(inputValuesArray())
  console.log('saved!')
}

function load() {
  const lastSave = JSON.parse(localStorage.getItem('categoriesArray'))
  console.log(lastSave)
}

// function copyToClip(str) {
//   const el = document.createElement('textarea')
//   el.value = str
//   el.setAttribute('readonly', '')
//   el.style.position = 'absolute'
//   el.style.left = '-9999px'
//   document.body.appendChild(el)
//   el.select()
//   document.execCommand('copy')
//   document.body.removeChild(el)
// }

// dodawanie i usuwanie id

/* TO DO
przy przechodzeniu między inputami powinien przenosić wartość z poprzedniego do kolejnego
i zaznaczać ją do nadpisania

możliwośc wpisania startowego i końcowego id i wygenerowanie listy na tej podstawie


*/
