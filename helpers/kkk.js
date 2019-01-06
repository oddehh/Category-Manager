const a = [[123, 2323],[456,213, 23],[789]]
const b = [['aaa'],['bbb'],['ccc']]


function colerate(a1, a2) {
  a1.forEach( (numsA,i) => {
    numsA.forEach(num => {
     console.log( num + a2[i] )
    })
  })

}

console.log(JSON.stringify(b))

colerate(a,b)