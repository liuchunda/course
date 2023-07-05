// function long (str) {
//   if (str.length < 2) {
//     return str
//   }
//   let maxLen = 1
//   let start = 0
//   function compare (left, right) {
//     while (left >= 0 && right < str.length && (str[left] === str[right])) {
//       if (right - left + 1 > maxLen) {
//         maxLen = right - left + 1
//         start = left
//       }
//       left--
//       right++
//     }
//   }
//   for (let i = 0; i < str.length; i++) {
//     compare(i, i + 1)
//     compare(i - 1, i + 1)
//   }
//   return str.substring(start, start + maxLen)
// }
// long('asd')

// function strNum (str) {
//   if (str.length < 2) {
//     return str
//   }
//   let maxLen = 1
//   let start = 0
//   function conpare (left, right) {
//     while (left >= 0 && right < str.length && (str[left] === str[right])) {
//       if (right - left + 1 > maxLen) {
//         maxLen = right - left + 1
//         start = left
//       }
//       left--
//       right++
//     }
//   }
//   for (let i = 0; i < str.length; i++) {
//     conpare(i, i + 1)
//     conpare(i - 1, i + 1)
//   }
//   return str.substring(start, maxLen + start)
// }

// function findStr (str) {
//   if (str.length < 2) {
//     return str
//   }
//   let start = 0
//   let maxLen = 1
//   function compare (left, right) {
//     while (left >= 0 && right < str.length && str[left] === str[right]) {
//       if (right - left + 1 > maxLen) {
//         maxLen = right - left + 1
//         start = left
//       }
//       left--
//       right++
//     }
//   }

//   for (let i = 0; i < str.length; i++) {
//     compare(i, i + 1)
//     compare(i - 1, i + 1)
//   }
//   return str.substring(start, start + maxLen)
// }

// findStr('aba')

// // function quickSort (arr) {
// //   if (arr.length < 2) {
// //     return arr
// //   } else {
// //     compare(arr)
// //   }

// // }

// function quickSort (ary) {
//   if (ary.length < 2) {
//     return ary
//   } else {
//     let middleIndex = Math.floor(ary.length / 2)
//     let middleValue = ary.splice(middleIndex, 1)[0]
//     let left = []
//     let right = []
//     ary.forEach((item) => {
//       if (item < middleValue) {
//         left.push(item)
//       } else {
//         right.push(item)
//       }
//     })
//     return quickSort(left).concat(middleValue, quickSort(right))
//   }
// }


function quickSort (ary) {
  if (ary.length < 2) {
    return ary
  }
  let middleIndex = Math.floor(ary.length / 2)
  let middleValue = ary.splice(middleIndex, 1)
  let left = []
  let right = []
  ary.forEach((item) => {
    item > middleValue ? right.push(item) : left.push(item)
  })
  return quickSort(left).concat(middleValue, quickSort(right))
}

function long (str) {
  if (str.length < 2) {
    return str
  }
  let maxLen = 1
  let start = 0
  function compare (left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (maxLen < (right - left + 1)) {
        maxLen = right - left + 1
        start = left
      }
      left--
      right++
    }
  }
  for (let i = 0; i < str.length; i++) {
    compare(i, i + 1)
    compare(i - 1, i + 1)
  }
  return str.substring(start, start + maxLen)
}
// function long (str) {
//   if (str.length < 2) {
//     return str
//   }
//   let maxLen = 1
//   let start = 0
//   function compare (left, right) {
//     while (left >= 0 && right < str.length && (str[left] === str[right])) {
//       if (right - left + 1 > maxLen) {
//         maxLen = right - left + 1
//         start = left
//       }
//       left--
//       right++
//     }
//   }
//   for (let i = 0; i < str.length; i++) {
//     compare(i, i + 1)
//     compare(i - 1, i + 1)
//   }
//   return str.substring(start, start + maxLen)
// }