using System;
using System.Collections.Generic;
using System.Drawing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1;
public class FloodFill733
{
    public int[][] FloodFill(int[][] image, int sr, int sc, int color)
    {
        // base case to stop early
        if (image[sr][sc] == color) return image;
        Fill(image, sr, sc, color, image[sr][sc]);
        return image;
    }

    public void Fill(int[][] image, int sr, int sc, int colorToFill, int colorOfStart)
    {
        // out of bound check
        if (sr < 0 || sr >= image.Length || sc < 0 || sc >= image[sr].Length) return;
        // match color of start cell?
        if (image[sr][sc] != colorOfStart) return;

        image[sr][sc] = colorToFill;
        Fill(image, sr - 1, sc, colorToFill, colorOfStart);
        Fill(image, sr + 1, sc, colorToFill, colorOfStart);
        Fill(image, sr, sc - 1, colorToFill, colorOfStart);
        Fill(image, sr, sc + 1, colorToFill, colorOfStart);
    }
}

