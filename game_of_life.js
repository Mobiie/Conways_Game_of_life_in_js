//console.log("Hi")
//count(5)

function count(max) {
    for (let i = 0; i < max; i++) {
        console.log(i)
    }
}

//let cars = ["Porsche", "Audi"]
//let boolyBools= [true , false, true]
//let weirdBools = [false, false, true]
//let boolInABool = [boolyBools, weirdBools]
//console.log(boolInABool[1][2])
//let ints = [1, 3, 4, 8]
//console.log(ints[2])
function clearScreen(consoleHeight) {
    for (let i = 1; i <= consoleHeight; i++) {
        console.log(" ")
    }
}

console.log(makeRandomBooleanArrayWithSizeAdjustments(5, 5))

function makeRandomBooleanArrayWithSizeAdjustments(y, x) {
    let randomBooleanArray = []

    for (let i = 0; i < y; i++) {
        randomBooleanArray[i] = []
        for (let j = 0; j < x; j++) {
            randomBooleanArray[i][j] = getRandomBoolean()
        }
    }
    return randomBooleanArray
}

function getRandomBoolean() {
    return Math.random() < 0.5
}

function amountOfLivingNeighbors(array, x, y) {

    let alive = 0

    let xLength = array.length, yLength = array[0].length
    alive += array[(x + 1) % xLength][y] ? 1 : 0
    alive += array[(x + 1) % xLength][(y - 1) < 0 ? yLength - 1 : (y - 1)] ? 1 : 0
    alive += array[(x + 1) % xLength][(y + 1) % xLength] ? 1 : 0

    alive += array[(x - 1) < 0 ? xLength - 1 : x - 1][y] ? 1 : 0
    alive += array[(x - 1) < 0 ? xLength - 1 : x - 1][(y - 1) < 0 ? yLength - 1 : y - 1] ? 1 : 0;
    alive += array[(x - 1) < 0 ? xLength - 1 : x - 1][(y + 1) % xLength] ? 1 : 0

    alive += array[x][(y + 1) % xLength] ? 1 : 0
    alive += array[x][(y - 1) < 0 ? yLength - 1 : y - 1] ? 1 : 0

    return alive
}

function twoDimensionalArrayToString(array, trueValue, falseValue) {
    let output = ""
    let field;
    for (let i = 0; i < array.length; ++i) {
        for (let j = 0; j < array[i].length; ++j) {
            field = array[i][j]
            output += field ? trueValue : falseValue
        }
        output += "\n";
    }
    return output;
}

//let gameArray = makeRandomBooleanArrayWithSizeAdjustments(10, 10)
//console.log(twoDimensionalArrayToString(gameArray, " ⬜ ", " ⬛ "))
function gameOfLifeUpdate(array) {
    let newArray = []
    for (let i = 0; i < array.length; ++i) {
        newArray[i] = []
        for (let j = 0; j < array[i].length; ++j) {
            let livingNeighbors = amountOfLivingNeighbors(array, i, j)
            alive = array[i][j]
            if ((livingNeighbors === 3 || livingNeighbors === 2) && alive)
                newArray[i][j] = true
            else if (alive)
                newArray[i][j] = false
            else if (livingNeighbors === 3)
                newArray[i][j] = true
            else newArray[i][j] = false
        }
    }
    return newArray
}

//main
cloverleafArray = [
    [false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, true , false, true , false, false, false, false],
    [false, false, false, true , true , true , false, true , true , true , false, false],
    [false, false, true , false, false, false, true , false, false, false, true , false],
    [false, false, true , false, true , false, false, false, true , false, true , false],
    [false, false, false, true , true , false, true , false, true , true , false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, true , true , false, true , false, true , true , false, false],
    [false, false, true , false, true , false, false, false, true , false, true , false],
    [false, false, true , false, false, false, true , false, false, false, true , false],
    [false, false, false, true , true , true , false, true , true , true , false, false],
    [false, false, false, false, false, true , false, true , false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false, false, false, false, false],
]
gliderArray = [
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, false, false, false, false, false, false],
    [false, false, true , true , false, false, false, false],
    [false, true , false, true , false, false, false, false],
    [false, false, false, true , false, false, false, false],
    [false, false, false, false, false, false, false, false]]

//makeRandomBooleanArrayWithSizeAdjustments(8, 8). <- put this function into gameArray to make a random pixelgrid, wth some pixels alive and some dead in the beginning.
//You can also put in the Array-array "gliderArray" to have a world with a glider in it.
let gameArray = gliderArray

 makingGameOfLifeThroughRecursion(gameArray)

//console.log( twoDimensionalArrayToString(cloverleafArray, ' ⬜ ', ' ⬛ '))

function makingGameOfLifeThroughRecursion(array) {
    let newArray = gameOfLifeUpdate(array)
    if (equalArrayTester(newArray, array))
        return
    array = newArray
    let gameString
    gameString = twoDimensionalArrayToString(array, ' ⬜ ', ' ⬛ ')
    console.log(gameString)

    setTimeout(e => {
        makingGameOfLifeThroughRecursion(array)
    }, 100)
}

function equalArrayTester(array, otherArray) {
    for (let i = 0; i < array.length; i++)
        for (let j = 0; j < array[i].length; j++) {
            if (array[i][j] !== otherArray[i][j])
                return false

        }
    return true
}

randomArray = [true , true , false]
otherRandomArrray = [false, true , false]
let arrayArray = [[true , true , false], [false, true , false]]
let testRandomArrayArray = [[true , true , false], [false, true , false]]

console.log(equalArrayTester(arrayArray, testRandomArrayArray))

