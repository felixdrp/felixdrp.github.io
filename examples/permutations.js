/**
 * Felix D R P 2023
 * Get array permutations
 * lexicographical order
 * Recursive function
 */

a = [ "Insulin", "Test", "Diagnosis" ]
/**
 * @function getPermutations
 * @param {array} data - Array of information
 * @returns {array} permutations from data
 * @description Get array permutations
 */
getPermutations = (data) => {
  if (data.length == 1) return data[0]
  let total = []
  for (let field of data) {
		// get mutations for the subarray wihtout field
    let permutations = getPermutations(data.filter(item => item !== field))
		// then add field to all possible mutations    
    if (Array.isArray(permutations)) {
			// Add field to each possible permutation
    	permutations.forEach(item => total.push([field, ...item]))      
    } else {
			// If it is a value add it directly
      total.push([field, permutations])
    }
  }
  return total
}

getPermutations(a)

/**
 * It will return:
Array(6) [ (3) […], (3) […], (3) […], (3) […], (3) […], (3) […] ]
0: Array(3) [ "Insulin", "Test", "Diagnosis" ]
​1: Array(3) [ "Insulin", "Diagnosis", "Test" ]
​2: Array(3) [ "Test", "Insulin", "Diagnosis" ]
​3: Array(3) [ "Test", "Diagnosis", "Insulin" ]
​4: Array(3) [ "Diagnosis", "Insulin", "Test" ]
​5: Array(3) [ "Diagnosis", "Test", "Insulin" ]
 */