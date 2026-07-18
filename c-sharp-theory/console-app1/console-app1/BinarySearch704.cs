using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public class BinarySearch704
    {
        public int Search(int[] nums, int target)
        {
            int low = 0, high = nums.Length - 1;
            Array.BinarySearch(nums, target);
            while (low < high)
            {
                int mid = low + (int)Math.Floor(((double)high -low +1)/2);
                if (target < nums[mid]) high = mid - 1;
                else low = mid;
            }
            return nums[low] == target ? low : -1;
        }
    }
}
