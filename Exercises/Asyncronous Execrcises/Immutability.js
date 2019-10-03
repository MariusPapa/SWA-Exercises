
import Immutable from 'immutable'




const arr  = [1,2,3]
const arr2 = Object.freeze([1,2,3])
/**Object.freeze() does a shallow freeze. The nested objects can be changed. For deep freeze we need to recursively freeze each property of type object. */
function addNumberToArray(array){
array.push(4)
return array
}
addNumberToArray(arr)
//addNumberToArray(arr2)     //throws an error when trying to modify the array
console.log(arr)
console.log(arr2)




/**
 * As of ES2015, the spread ... operator has allowed for expanding iterable values into explicit arguments.
 *  When used inside new array or object literals, this permits copying the properties of existing values into the new value:
 */
const obj1 = { type: 'data' }
const arr11 = [1, 2, 3]

const obj2 = { ...obj1, subtype: 'stuff' } // adds a key-val pair
const arr22 = [ ...arr11, 'cheese' ] // adds an element

// distinct old and new versions
console.log(obj1, obj2)
console.log(arr11, arr22)

/**With objects in particular, this allows for easy updating of a top-level key: */
const object1 = { type: 'data', age: 55 }

const object2 = { ...object1, age: object1.age + 1 } // modified age

console.log(object1, object2)

/**In some environments, object spread syntax may not be supported, but Object.assign (also ES2015) may be available. */