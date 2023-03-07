/**
 * Felix D R P 2023
 * Get array permutations
 * lexicographical order
 * Recursive function
 */

/**
 * @function getPermutations
 * @param {array} data - Array of information
 * @returns {array} permutations from data
 * 
 * @description Get array permutations
 */

getPermutations = (data) => {
  if (data.length == 1) return data[0]
  let total = []
  for (let index in data) {
		// get mutations for the subarray wihtout field (data[index])
    let permutations = getPermutations(data.filter((item, idx) => idx != index))
		// then add field to all possible mutations    
    if (Array.isArray(permutations)) {
			// if it is an array then add field (data[index]) to each possible permutation
    	permutations.forEach(item => total.push([data[index], ...item]))      
    } else {
			// If it is a value add it directly. Reached a leaf of tree (The end of the tree)
      total.push([data[index], permutations])
    }
  }
  return total
}

/**
 * Example:

a = [ "Insulin", "Test", "Diagnosis" ]

getPermutations(a)

Array(6) [ (3) […], (3) […], (3) […], (3) […], (3) […], (3) […] ]
0: Array(3) [ "Insulin", "Test", "Diagnosis" ]
​1: Array(3) [ "Insulin", "Diagnosis", "Test" ]
​2: Array(3) [ "Test", "Insulin", "Diagnosis" ]
​3: Array(3) [ "Test", "Diagnosis", "Insulin" ]
​4: Array(3) [ "Diagnosis", "Insulin", "Test" ]
​5: Array(3) [ "Diagnosis", "Test", "Insulin" ]

*/