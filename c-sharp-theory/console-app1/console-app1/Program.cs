
using ConsoleApp1;
//TwoSumSolution mySolution = new();

//Console.WriteLine($"this is toString result {mySolution.ToString()}");


//var myQuery = new String(default(string));
//Console.WriteLine($"this is my string {myQuery}");
//Console.ReadLine();










//var myCalculator = new Caculator();
//var addOperation = new Add();
//var result = myCalculator.Calculate(addOperation, 2, 3);
//string myString = "Hello, World!"; 
//int myInt = 42;
//Dictionary<string, int> myDict = new Dictionary<string, int>()
//{
//    {"one", 1},
//    {"two", 2},
//    {"three", 3}
//};
//string? test = Convert.ToString(myDict["something"]);
//Console.WriteLine(result);



//using static System.Console;
//// Value type
//int a = 5;
//int b = a;
//b = 10;

//Console.WriteLine($"this a: {a}, this is b: {b}");

//// reference type 

//Person Bob = new();
//Person Sam = Bob;

//Bob.Name = "Bob";
//Bob.Age = 25;
//Sam.Age = 20;
//Sam.Name = "Sam";
//var hob1 = new Hobby()
//{
//    Name = "Hob1",
//    Type = "Sports"
//};

//var hob2 = new Hobby()
//{
//    Name = "Hob2",
//    Type = "Arts"
//};

//Sam.Hobby = Bob.Hobby;
//Bob.Hobby = hob2;

//List<string> myList = new()
//{
//    "test1",
//    "test2",
//    "test3"
//};
//foreach (var item in myList)
//{
//    WriteLine($"this is foreach myList: {item}");
//}
//for (int i = 0; i < myList.Count; i++)
//{
//    WriteLine($"this is for myList: {myList[i]}");
//}
////Console.WriteLine($"this is Bob and Same Name: {Bob.Name} - {Sam.Name}");
////Console.WriteLine($"this is Bob and Same Age: {Bob.Age} - {Sam.Age}");
////Console.WriteLine($"this is Bob and Same Hobby: {Bob.Hobby.Name} - {Sam.Hobby?.Name}");


//string value = "init string";
//WriteLine($"My value is: {value}");
//Person person1 = new();
//var person2 = new Person();
//Person.test = "something";
//WriteLine(Person.test);
//Person.TestMethod();
//public class Person
//{
//    public string Name { get; set; }
//    public int Age { get; set; }
//    public Hobby Hobby { get; set; }
//    public static string test = "string";
//    public static void TestMethod() {
//        WriteLine($"test method: {test}");
//    }
//}

//public class Hobby
//{
//    public string Name {  set; get; }
//    public string Type { set; get; }
//}


// Calculator:




// Testing my queue:
MyQueue<int> myQueue = new();
myQueue.Enqueue( 1 );
myQueue.Enqueue( 2 );
myQueue.Enqueue( 3 );
Console.WriteLine($"value now {myQueue.Peek()}");
myQueue.Dequeue();
Console.WriteLine($"value now after dequeue {myQueue.Peek()}");
Console.ReadLine();