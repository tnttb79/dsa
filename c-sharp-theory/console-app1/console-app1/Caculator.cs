using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ConsoleApp1
{
    interface IOperation
    {
        double Calculate(double number1, double number2);
    }

    class Add : IOperation
    {
        public double Calculate(double number1, double number2)
        {
            return number1 + number2;
        }
    }
    class Subtract : IOperation 
    {
        public double Calculate(double number1, double number2)
        {
            return number1 - number2;
        }
    }
    class Caculator
    {
        public double Calculate(IOperation operation, double number1, double number2)
        {
            return operation.Calculate(number1, number2);
        }

    }

}
