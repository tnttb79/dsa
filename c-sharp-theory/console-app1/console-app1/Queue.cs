namespace ConsoleApp1;

class MyQueue<T>
{
    private readonly List<T> _queue;
    public MyQueue()
    {
        _queue = new List<T>();
    }

    // enqueue
    public void Enqueue(T item)
    {
        _queue.Add(item);
    }
    // dequeue
    public void Dequeue()
    {
        _queue.RemoveAt(0);
    }
    // peek
    public T Peek()
    {
        return _queue[0];
    }
}
