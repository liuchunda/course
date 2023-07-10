function quickSort (ary) {
  if (ary.length < 2) {
    return ary
  }
  let left = []
  let right = []
  let middleIndex = Math.floor(ary.length / 2)
  let middleValue = ary.splice(middleIndex, 1)
  ary.forEach((item) => item > middleValue ? right.push(item) : left.push(item))
  return quickSort(left).concat(middleValue, quickSort(right))
}

function bubbleSort (ary) {
  if (ary.length < 2) {
    return ary
  }
  for (let i = 0; i < ary.length; i++) {
    for (let j = ary.length - 2; j >= i; j--) {
      if (ary[j] > ary[j + 1]) {
        let temp = ary[j]
        ary[j] = ary[j + 1]
        ary[j + 1] = temp
      }
    }
  }
  return ary
}

function findMaxStr (str) {
  if (str.length < 2) {
    return str
  }
  let start = 0;
  let maxLen = 1;
  function compare (left, right) {
    while (left >= 0 && right < str.length && str[left] === str[right]) {
      if (right - left + 1 > maxLen) {
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

const bt = {
  val: 'A',
  left: {
    val: 'B',
    left: { val: 'D', left: null, right: null },
    right: { val: 'E', left: null, right: null },
  },
  right: {
    val: 'C',
    left: {
      val: 'F',
      left: { val: 'H', left: null, right: null },
      right: { val: 'I', left: null, right: null },
    },
    right: { val: 'G', left: null, right: null },
  },
}
function each (root) {
  if (!root) {
    return
  }
  let queue = [root]
  while (queue.length) {
    const node = queue.shift()
    console.log(node.val)
    if (node.left) {
      queue.push(node.left)
    }
    if (node.right) {
      queue.push(node.right)
    }
  }
}

function each (root) {
  if (!root) {
    return
  }
  console.log(root.val)
  if (root.left) {
    each(root.left)
  }
  if (root.right) {
    each(root.right)
  }
}

function each (root) {
  if (!root) {
    return
  }
  if (root.left) {
    each(root.left)
  }
  console.log(root.val)
  if (root.right) {
    each(root.right)
  }
}


function each (root) {
  if (!root) {
    return
  }
  if (root.left) {
    each(root.left)
  }

  if (root.right) {
    each(root.right)
  }
  console.log(root.val)
}



each(bt)


