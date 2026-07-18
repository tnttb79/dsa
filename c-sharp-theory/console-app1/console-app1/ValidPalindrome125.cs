using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public class ValidPalindrome125
    {
        public bool IsPalindrome(string s)
        {
            string normalized = string.Empty;
           foreach(char letter in s)
            {
                if (char.IsLetterOrDigit(letter)) normalized += letter; 
            }
            normalized = normalized.ToLower();
            int left = 0;
            int right = normalized.Length - 1;
            while(left < right)
            {
                if (normalized[left] != normalized[right]) return false;
            }
            return true;
        }
    }
}
