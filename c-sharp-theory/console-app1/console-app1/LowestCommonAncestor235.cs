using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static ConsoleApp1.InvertBinaryTree226;

namespace ConsoleApp1;
public class Solution
{
    public TreeNode LowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q)
    {
        while (root != null)
        {
            if (p.val > root.val && q.val > root.val)
            {
                root = root.right;
            }
            else if (p.val < root.val && q.val < root.val)
            {
                root = root.left;
            }
            else return root;
        }
        return null;
    }
}

public class TreeNode(int x)
{
    public int val = x;
    public TreeNode? left;
    public TreeNode? right;
}
