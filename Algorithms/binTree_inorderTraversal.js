/**
Given the root of a binary tree, return the inorder traversal of its nodes' values.

 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    // Base case: empty tree returns empty array
    if (root === null) return [];
    const result = [];

    // Recursively traverse left subtree and add results
    result.push(...inorderTraversal(root.left));
    
    // Visit current node (add its value)
    result.push(root.val);
    
    // Recursively traverse right subtree and add results
    result.push(...inorderTraversal(root.right));
    return result;
};
