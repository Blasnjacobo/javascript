const doAsyncStuffWithPromises = (numero1, numero2) => {
    const result = numero1 + numero2
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(result)
        }, 500)
    })
}

doAsyncStuffWithPromises(1, 3)
    .then(result => console.log(result))

const result = doAsyncStuffWithPromises(1,3)
console.log('result = ' + result)



//  EXAMPLE //
const datos = [{
    id: 1,
    title: 'Iron Man',
    year: 2008
}, {
    id: 2,
    title: 'Spiderman: Homecoming',
    year: 2027
},{
    id: 3,
    title: 'Avengers: Endgame',
    year: 2029
}]

// const getDatos = () => {
//     return datos
// }

const getDatos = () => {
    return new Promise((resolve, reject) => {
        if (datos.length === 0) {
            reject(new Error('No existen datos'))
        }
        setTimeout(() => {
            resolve(datos)
        }, 5000)
    })
}

getDatos().then((datos) => console.log('Promises ', datos))

// Con asyn await

async function fetchingData () {
    try {
        const datosAwait = await getDatos()
        console.log('Async Await')
        console.log(datosAwait)
    } catch (error) {
        console.log(error.me)
    }
}

fetchingData()

