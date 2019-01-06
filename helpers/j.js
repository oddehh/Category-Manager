const a = [[123, 2323],[456,213, 23],[789]]
const b = ['aaa','bbb','ccc']

// function colerate(a1, a2) {
//   a1.forEach( (numsA,i) => {
//     numsA.forEach(num => {
//      console.log( num + a2[i] )
//     })
//   })

// }

// colerate(a,b)


function precol(array, string) {
  array.forEach( num => {
    console.log(num + string)
  })
}

function colerate(aoaon, aos) {
  aoaon.forEach( (aon, i) => {
    precol(aon, aos[i])
  });
}

colerate(a,b)

// precol(a[0], b[0])