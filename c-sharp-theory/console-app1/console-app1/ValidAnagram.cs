using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    public class ValidAnagram
    {
        public bool IsAnagram(string s, string t)
        {
            if (s.Length != t.Length) return false;
            var myDict = new Dictionary<char, int>();
            foreach (char c in s)
            {
                myDict[c] = myDict.GetValueOrDefault(c, 0) + 1;
            }
            foreach (char c in t)
            {
                if (!myDict.ContainsKey(c) || myDict[c] == 0) return false;
                myDict[c]--;
            }
            return true;
        }
    }
}
