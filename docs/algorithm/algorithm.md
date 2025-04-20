# LeetCode Algorithm

## 实现字符串反转
* 首先实现我们的字符串反转的方式是十分多的呐

### 方式一
* 通过数组的方法实现我们的字符串得分反转吧
```javascript
function reverseString(str) {
    if (typeof str !== 'string') str = str.toString();  //todo 类型转换
    return str.split("").reverse().join()
}
```

### 方式二
* 通过递归的方式实现字符串的反转
  * subStr 方法实现的是截取字符串，subStr(1) 表示从第1个字符开始截取，str.length - 1 表示从最后一个字符开始截取
  * charAt 方法表示获取字符串中的第1个字符，str.length - 1 表示获取最后一个字符
```javascript
function reverseString(str) {
    if (str === '') return '';
    else return reverseString(str.substr(1)) + str.charAt(0);
}
```

### 方式三
* 通过循环的方式进行反转字符串
```javascript
function reverseString(str) {
    if (str === '') return '';
    let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}
```

### 方式四
* 通过我们的 reduce 方法进行操作即可
```javascript
function reverseString(str) {
    return str.split('').reduce((prev, next) => next + prev, '');
    // return Array.prototype.reduce.call(str, (prev, next) => next + prev, '');
    // 该形式就是实现的是在我们的原型链来调用我们的数组的方法了吧，这样的在 js 中还是很好书写的，但是在 ts 中需要注意一下吧
}
```

### 方式五
* 使用扩展运算符实现我们的具体的计算吧
```javascript
function reverseString(str) {
    return [...str].reduce((prev, next) => next + prev, '');
    // 实际上呐，前面的几种实现方案的话都是通过我们的原型链的方式来实现的呐，本质是一样的呐
}
```

## 手写防抖函数
* 防抖函数核心就是让我们的一个任务在执行中，在指定的时间内不会重复执行吧
```javascript
function debounce(fn, delay=3000, immediate=false) {
    let timer = null;
    let is_exec = false;    
    const _debounce = function(...args) {
        return new Promise((resolve, reject) => {
            try {
                let res = null
                if (timer) clearTimeout(timer);
                if (immediate && !is_exec) {
                    res = fn.apply(this, args);
                    is_exec = true;
                    resolve(res);
                    return
                }
                timer = setTimeout(() => {
                    res = fn.apply(this, args);
                    timer = null;
                    is_exec = false;
                    resolve(res)
                }, delay)
            } catch (e) {
                reject(e)
            }
        })
    }
    //增加外部取消的功能
    _debounce.cancel = function() {
        if (timer) clearTimeout(timer);
        is_exec = false;
        timer = null;
    }
}
```

## 手写节流函数
* 节流函数的实现的是让我们一个事件在固定的时间内的话，执行的频率是固定的呐
```javascript
function throttle(fn, interval=3000, immediate=false) {
    let timer = null;
    let start_time = 0
    const _throttle = function(...args) {
        return new Promise((resolve, reject) => {
            try {
                let now_time = new Date().getTime();
                if (immediate && start_time === 0) {
                    start_time = new_time;
                }
                if (now_time - start_time >= interval) {
                    if (timer) clearTimeout(timer);
                    const res = fn.apply(this, args);
                    start_time = now_time;
                    timer = null;
                    resolve(res);
                }
                if (immediate && !timer) {
                    timer = setTimeout(() => {
                        const res = fn.apply(this, args);
                        timer = null;
                        start_time = new Date().getTime();
                        resolve(res);
                    })
                }
            } catch (e) {
                reject(e)   
            }
        })
    }
    _throttle.cancel = function() {
        if (timer) clearTimeout(timer);
        timer = null;
        start_time = 0;
        return
    }
}
```

## 手写数组乱序输出
### 实现方法一
* 通过我们的随机数实现我们的一些具体的操作吧
```javascript
function shuffle(arr) {
    if (!Array.isArray(arr)) throw "type error"
    return arr.sort(() => Math.random() - 0.5);
}
```

### 实现方法二
* 通过我们的具体的循环来实现吧
```javascript
function shuffle(arr) {
    if (!Array.isArray(arr)) throw "type error"
    for (let i = 0; i < arr.length; i++) {
        let random_index = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[random_index]] = [arr[random_index], arr[i]];
    }
}
```

## 实现数组扁平化
### 实现方法一
* 通过我们的 flat 函数 + Infinity 来实现我们的数组扁平化吧
```javascript
function flatten(arr) {
    return arr.flat(Infinity);
}
```

### 实现方法二
* 通过我们的 reduce + 递归 来实现我们的数组扁平化吧
```javascript
function flatten(arr) {
    return arr.reduce((prev, next) => {
        return prev.concat(Array.isArray(next) ? flatten(next) : next)
    })
}
```

### 实现方法三
* 通过我们的 for 循环来实现吧
```javascript
function flattenArray(arr) {
  let result = [];
  arr.forEach(item => {
    if (Array.isArray(item)) {
      result = result.concat(flattenArray(item));
    } else {
      result.push(item);
    }
  });
  return result;
}
```

### 实现方式四
* 使用我们的栈结构来实现吧
```javascript
function flattenArray(arr) {
    const stack = [...arr];
    const res = [];
    while (stack.length) {
        const next = stack.pop();
        if (Array.isArray(next)) {
            stack.push(...next);
        } else {
            res.push(next);
        }
    }
    return res.reverse();
}
```

## 实现数组去重
### 实现方法一
* 通过我们的 Set 来实现我们的数组去重吧
```javascript
function unique(arr) {
    return [...new Set(arr)];
}
```

### 实现方法二
* 通过 filter 和 indexOf 来实现我们的数组去重吧
```javascript
function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}
```

### 实现方法三
* 通过 reduce 来实现我们的数组去重吧
```javascript
function unique(arr) {
    return arr.reduce((prev, next) => {
        if (prev.indexOf(next) === -1) {
            prev.push(next);
        }
        return prev;
    }, [])
}
```

### 实现方法四
* 通过 ourMap 来实现我们的数组去重吧
```javascript
function unique(arr) {
    const map = new Map();
    return arr.filter(item => {
        if (!map.has(item)) {
            map.set(item, true);
            return true;  // 表示满足过滤条件
        }
        return false;  // 表示不满足过滤条件
    })
    return map.keys();
}
```

## 实现数字分割
```javascript
function thousandSeparator(n, separator = ',', precision = 3) {
    if (typeof n !== 'number') throw new TypeError("num is not a number");
    let num = n.toString();
    let decimals = '';
    // 判断是否小数
    if (num.indexOf('.') > -1) {
        [num, decimals] = num.split('.');
    }
    let len = num.length;
    if (len <= precision) { // 小于等于3位，直接返回
        return decimals ? num + '.' + decimals : num;
    } else {
        let temp = '';  // 临时变量,用于存储后面对整数部分的处理
        let remainder = len % precision;  // 余数，用于处理整数部分最后一组的情况
        if (remainder > 0) {
            temp = num.slice(0, remainder) + separator;
        }
        temp += num.slice(remainder).match(new RegExp(`\\d{${precision}}`, 'g')).join(separator);
        return decimals ? temp + '.' + decimals : temp;
    }
}
```

## 实现大数相加
```javascript
function bigNumberAdd(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') throw new TypeError("a and b is not a number");
    // 数字转化为字符串
    a = a.toString()
    b = b.toString()
    // 获取数字的长度
    let lenA = a.length; 
    let lenB = b.length;
    
    // 获取两个字符串的最大长度
    const len = Math.max(lenA, lenB);
    lenA < lenB ? a = a.padStart(len, '0') : b = b.padStart(len, '0');
    
    let res = '';  // 存储结果
    let carry = 0;  // 进位
    for (let i = len - 1; i >= 0; i--) {   
        let temp = carry + parseInt(a[i]) + parseInt(b[i]);
        if (temp >= 10) {
            carry = 1;
            res += (temp % 10).toString();
        }
        if (temp < 10) {
            res += temp.toString();
        }
    }
    if (carry) res += carry.toString();
    return res.split('').reverse().join('');
}
```

## 实现两数之和
> https://leetcode.cn/problems/two-sum/description/
* 背景为:
  * 一个函数传入一个数组，然后传入一个数字，然后寻找出两个数字相加为该数字的数组下标吧
### 暴力解法
```javascript
function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];  // 寻找到了满足条件的两个数字的话
            }
        }
    }
    return []; // 找不到满足条件的两个数字的话
}
```

### 哈希表解法
```javascript
function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
```

### 排序加双指针解法
```javascript
function twoSumSortedTwoPointers(nums, target) {
    const indexedNums = nums.map((num, index) => ({ num, index }));
    indexedNums.sort((a, b) => a.num - b.num);
    let left = 0;
    let right = indexedNums.length - 1;
    while (left < right) {
        const sum = indexedNums[left].num + indexedNums[right].num;
        if (sum === target) {
            return [indexedNums[left].index, indexedNums[right].index];
        } else if (sum < target) {
            left++;
        } else {
            right--;
        }
    }
    return [];
}
```

## 实现两数相加
> https://leetcode.cn/problems/add-two-numbers/
```javascript
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
let addTwoNumbers = function(l1, l2) {
    let dummyHead = new ListNode(0); // 创建一个虚拟头节点
    let current = dummyHead; // 当前节点指向虚拟头节点
    let carry = 0; // 初始化进位为0

    while (l1 !== null || l2 !== null) {
        let x = (l1 !== null) ? l1.val : 0; // 如果l1不为空，取其值，否则取0
        let y = (l2 !== null) ? l2.val : 0; // 如果l2不为空，取其值，否则取0
        let sum = carry + x + y; // 计算当前位的和

        carry = Math.floor(sum / 10); // 更新进位
        current.next = new ListNode(sum % 10); // 创建新节点并连接到当前节点的下一个位置
        current = current.next; // 移动到下一个节点

        if (l1 !== null) l1 = l1.next; // 如果l1不为空，移动到下一个节点
        if (l2 !== null) l2 = l2.next; // 如果l2不为空，移动到下一个节点
    }

    if (carry > 0) { // 如果最后还有进位，添加一个新节点
        current.next = new ListNode(carry);
    }

    return dummyHead.next; // 返回结果链表（跳过虚拟头节点）
};
```

## 无重复字符的最长字串
* 注意，实现的时候我们的寻找的这个字符串的话是指定字符串的子串
* 同时该子串是不重复的呐

### 滑动窗口解法
* 实现思路
  * 初始化两个空指针，一个 left 一个 right
  * 使用一个集合进行存储当前的字符串
  * 移动 right 指针扩展窗口，直到遇到重复字符或者到达字符串末尾
```javascript
function lengthOfLongestSubstring(s) {
  let n = s.length;
  let charSet = new Set();
  let left = 0, right = 0;
  let maxLength = 0;

  while (right < n) {
    if (!charSet.has(s[right])) {
      charSet.add(s[right]);
      right++;
      maxLength = Math.max(maxLength, right - left);
    } else {
      charSet.delete(s[left]);
      left++;
    }
  }

  return maxLength;
}
```

### 哈希表解法
```javascript
function lengthOfLongestSubstring(s) {
    let n = s.length;
    let map = new Map();
    let maxLength = 0, start = 0;

    for (let end = 0; end < n; end++) {
        if (map.has(s[end])) {
            start = Math.max(map.get(s[end]) + 1, start);
        }
        map.set(s[end], end);
        maxLength = Math.max(maxLength, end - start + 1);
    }

    return maxLength;
}
```

### 暴力解法
```javascript
function lengthOfLongestSubstring(s) {
    let n = s.length;
    let maxLength = 0;

    for (let i = 0; i < n; i++) {
        let charSet = new Set();
        for (let j = i; j < n; j++) {
            if (charSet.has(s[j])) {
                break;
            }
            charSet.add(s[j]);
            maxLength = Math.max(maxLength, j - i + 1);
        }
    }

    return maxLength;
}
```

## 实现最小路径和
> https://leetcode.cn/problems/minimum-path-sum/
```javascript
function minPathSum(grid) {
  const m = grid.length;
  const n = grid[0].length;
  const dp = Array.from({ length: m }, () => Array(n).fill(0));

  dp[0][0] = grid[0][0];

  // Initialize the first row
  for (let j = 1; j < n; j++) {
    dp[0][j] = dp[0][j - 1] + grid[0][j];
  }

  // Initialize the first column
  for (let i = 1; i < m; i++) {
    dp[i][0] = dp[i - 1][0] + grid[i][0];
  }

  // Fill in the rest of the dp array
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1];
}
```

## 寻找最大频率
> https://leetcode.cn/problems/maximum-equal-frequency
```javascript
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxEqualFreq = function(nums) {
    const freq = new Map(); // 记录每个数字出现的次数
    const count = new Map(); // 记录每个频率出现的次数
    let maxLen = 0;
    let maxFreq = 0;

    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        // 更新当前数字的频率
        if (freq.has(num)) {
            const oldFreq = freq.get(num);
            count.set(oldFreq, count.get(oldFreq) - 1);
            if (count.get(oldFreq) === 0) {
                count.delete(oldFreq);
            }
            freq.set(num, oldFreq + 1);
        } else {
            freq.set(num, 1);
        }
        const newFreq = freq.get(num);
        count.set(newFreq, (count.get(newFreq) || 0) + 1);
        maxFreq = Math.max(maxFreq, newFreq);

        // 检查当前前缀是否满足条件
        const keys = Array.from(count.keys());
        if (keys.length === 1) {
            // 只有一个频率
            const onlyFreq = keys[0];
            if (onlyFreq === 1 || count.get(onlyFreq) === 1) {
                maxLen = i + 1;
            }
        } else if (keys.length === 2) {
            // 有两个不同的频率
            const [f1, f2] = keys;
            if ((f1 === 1 && count.get(f1) === 1) || (f2 === 1 && count.get(f2) === 1)) {
                maxLen = i + 1;
            } else if (Math.abs(f1 - f2) === 1 && (count.get(Math.max(f1, f2)) === 1)) {
                maxLen = i + 1;
            }
        }
    }

    return maxLen;
};
```