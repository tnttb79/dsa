using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public class TwoSumSolution
    {
        public string someRandom {  get; set; }
        public int someRandomInt { get; set; }
        public static int[] TwoSum(int[] nums, int target)
        {
            Dictionary<int, int> dict = new();
            for (int i = 0; i < nums.Length; i++)
            {
                var numToFind = target - nums[i];
                if (dict.ContainsKey(numToFind)) return [dict[numToFind], i];
                else dict[numToFind] = i;
            }
            return [];
        }
    }
}
