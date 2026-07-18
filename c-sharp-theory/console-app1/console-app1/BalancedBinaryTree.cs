using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public class BalancedBinaryTree
    {
        public class TreeNode
        {
            public int val;
            public TreeNode left;
            public TreeNode right;
            public TreeNode(int val = 0, TreeNode left = null, TreeNode right = null)
            {
                this.val = val;
                this.left = left;
                this.right = right;
            }
        }
        public bool IsBalanced(TreeNode root)
        {
            Tuple<bool, int> Dfs(TreeNode root)
            {
                if (root is null) return new Tuple<bool, int>(true, 0); 
                var (isLeftBlance, leftHeight) = Dfs(root.left);
                var (isRightBlance, rightHeight) = Dfs(root.right);

                var height = Math.Max(leftHeight, rightHeight) + 1;
                var IsBalanced = Math.Abs(leftHeight - rightHeight) <= 1 && isLeftBlance && isRightBlance;
                return new Tuple<bool, int>(IsBalanced, height);

            }
            return Dfs(root).Item1;
        }
    }
}
