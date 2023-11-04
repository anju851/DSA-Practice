const sumNumbers = function (root, num = 0) {
    if (!root) return 0;
    num = num * 10 + root.val;
    if (!root.left && !root.right) return num;
  
    return sumNumbers(root.left, num) + sumNumbers(root.right, num);
  };

  var sumNumbers2 = function (root) {
    const dfs = function (node, sum) {
        if (node == null) {
            return 0;
        }
        if (node.left === null && node.right == null) {
            return sum * 10 + node.val;
        }
        return dfs(node.left, sum * 10 + node.val) +
               dfs(node.right, sum * 10 + node.val);
    }
    return dfs(root, 0);
}