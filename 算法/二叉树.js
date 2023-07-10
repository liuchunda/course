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



// 一.广度优先遍历

function bfs (root) {
  if (!root) return
  const queue = [root]
  while (queue.length) {
    const node = queue.shift()
    console.log(node.val)
    node.left && queue.push(node.left)
    node.right && queue.push(node.right)
  }
}
bfs(bt)
/** 结果
A B C D E F G H I
 */

// 二.深度优先遍历,访问根节点，访问left节点，访问right节点
// 2.1 先序遍历(根左右)
// 二叉树的先序遍历实现思想如下：

// 访问根节点;
// 对当前节点的左子树进行先序遍历；
// 对当前节点的右子树进行先序遍历；

// 递归方式实现如下：
const bt = require('./tree')

function preorder (root) {
  if (!root) return
  console.log(root.val)
  preorder(root.left)
  preorder(root.right)
}
preorder(bt)
/** 结果
A B D E C F H I G
*/

// 迭代方式实现如下：
// 非递归版
function preorder (root) {
  if (!root) return
  // 定义一个栈，用于存储数据
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    console.log(node.val)
    /* 由于栈存在先入后出的特性，所以需要先入右子树才能保证先出左子树 */
    node.right && stack.push(node.right)
    node.left && stack.push(node.left)
  }
}
preorder(bt)
/** 结果
A B D E C F H I G
*/

// 2.2中序遍历(左根右)
// 二叉树的中序遍历实现思想如下：

// 对当前节点的左子树进行中序遍历；
// 访问根节点;
// 对当前节点的右子树进行中序遍历；
// 递归方式实现如下：

// 递归版
function inorder (root) {
  if (!root) return
  inorder(root.left)
  console.log(root.val)
  inorder(root.right)
}
inorder(bt)

/** 结果
D B E A H F I C G
*/

// 迭代方式实现如下：
// 非递归版
function inorder (root) {
  if (!root) return
  const stack = []
  // 定义一个指针
  let p = root
  // 如果栈中有数据或者p不是null，则继续遍历
  while (stack.length || p) {
    // 如果p存在则一致将p入栈并移动指针
    while (p) {
      // 将 p 入栈，并以移动指针
      stack.push(p)
      p = p.left
    }

    const node = stack.pop()
    console.log(node.val)
    p = node.right
  }
}
inorder(bt)
/** 结果
D B E A H F I C G
*/


// 2.3后序遍历(左右根)
// 二叉树的后序遍历实现思想如下：

// 对当前节点的左子树进行后序遍历；
// 对当前节点的右子树进行后序遍历；
// 访问根节点;

// 递归方式实现如下：


// 递归版
function postorder (root) {
  if (!root) return
  postorder(root.left)
  postorder(root.right)
  console.log(root.val)
}
postorder(bt)
/** 结果
D E B H I F G C A
*/
// 迭代方式实现如下：

// 非递归版
function postorder (root) {
  if (!root) return
  const outputStack = []
  const stack = [root]
  while (stack.length) {
    const node = stack.pop()
    outputStack.push(node)
    // 这里先入left需要保证left后出，在stack中后出，就是在outputStack栈中先出
    node.left && stack.push(node.left)
    node.right && stack.push(node.right)
  }
  while (outputStack.length) {
    const node = outputStack.pop()
    console.log(node.val)
  }
}
postorder(bt)
/** 结果
D E B H I F G C A
*/

function each (root) {
  if (!root) {
    return
  }
  let queue = [root]
  while (queue.length) {
    const node = queue.shift()
    console.log(node.val)
    if (node.left) {
      each(node.left)
    }
    if (node.right) {
      each(node.right)
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



function each (root) {
  if (!root) {
    return
  }
  let queue = [root]
  while (queue.length) {
    let node = queue.shift()
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
  let queue = [root]
  while (queue.length) {
    let node = queue.pop()
    console.log(node.val)
    if (node.right) {
      queue.push(node.right)
    }
    if (node.left) {
      queue.push(node.left)
    }
  }
}

function each (root) {
  if (!root) { return }
  let queue = [root]
  // let result
  while (queue.length) {
    let node = 
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






function quickSort (ary) {
  if (ary.length < 2) {
    return ary
  }
  let middleIndex = Math.floor(ary.length / 2)
  let middleValue = ary.splice(middleIndex, 1)
  let left = []
  let right = []
  ary.forEach((item) => item > middleValue ? right.push(item) : left.push(item))
  return quickSort(left).concat(middleValue, quickSort(right))
}

function maxStr (str) {
  if (str.length < 2) {
    return str
  }
  let maxLen = 1
  let start = 0
  function compare (left, right) {
    while (left >= 0 && right < str.length && (str[left] === str[right])) {
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


function sort (ary) {
  for (let i = 0; i < ary.length; i++) {
    for (let j = ary.length - i-2; j >= i; j--) {
      if (ary[j + 1] < ary[j]) {
        let temp = ary[j]
        ary[j] = ary[j + 1]
        ary[j + 1] = temp
      }
    }
    console.log(i,JSON.parse(JSON.stringify(ary)))
  }
  return ary
}