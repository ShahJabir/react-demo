import './ToDoList.css';
import { useState } from 'react';

type TodoItem = {
  id: number;
  description: string;
  value: number;
  completed: boolean;
};

type ListProps = {
  todoList: TodoItem[];
  deleteItems: (id: number) => void; // Add deleteItems as a prop here
  toggleItems: (id: number) => void;
  clearList: () => void;
};

type ItemProps = {
  item: TodoItem;
  deleteItems: (id: number) => void; // Add deleteItems as a prop here
  toggleItems: (id: number) => void;
};

type StatsProps = {
  todoList: TodoItem[]; // Accept the todoList as a prop
};

const ToDoList = () => {
  // Managing the todo list state
  const [todoList, setTodoList] = useState<TodoItem[]>([]);

  // Function to add new item
  const addItems = (item: TodoItem) => {
    setTodoList((todoList) => [...todoList, item]);
  };

  // Function to delete an item
  const deleteItems = (id: number) => {
    console.log(id);
    setTodoList((todoList) => todoList.filter((item) => item.id !== id));
  };

  const toggleItems = (id: number) => {
    setTodoList((todoList) =>
      todoList.map((item) =>
        item.id === id ? { ...item, completed: !item.completed } : item
      )
    );
  };

  const clearList = () => {
    const confirmed = window.confirm('Are you sure want to delete all items?');
    if (confirmed) {
      setTodoList([]);
    }
  };

  return (
    <div className="app">
      <Logo />
      <Form addItems={addItems} />
      <List
        todoList={todoList}
        deleteItems={deleteItems}
        toggleItems={toggleItems}
        clearList={clearList}
      />
      <Stats todoList={todoList} />
    </div>
  );
};

const Logo = () => {
  return <h1>💼 To-Do List 💻</h1>;
};

const Form = ({ addItems }: { addItems: (item: TodoItem) => void }) => {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState('');

  // Handle form submission
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!description) return;

    // Create new item object
    const newItem: TodoItem = {
      id: Date.now(), // Unique ID
      description: description,
      value: quantity,
      completed: false,
    };

    addItems(newItem); // Add new item to the list
    setQuantity(1); // Reset the form
    setDescription('');
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>List Your To-Do 📃</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 5 }, (_, index) => index + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="list ..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  );
};

const List = ({ todoList, deleteItems, toggleItems, clearList }: ListProps) => {
  const [sortBy, setSortBy] = useState('input');
  let sortedItems: TodoItem[] = todoList;
  //   if (sortBy === 'input') sortedItems = todoList;
  if (sortBy === 'description') {
    sortedItems = todoList
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBy === 'packed') {
    sortedItems = todoList
      .slice()
      .sort((a, b) => Number(a.completed) - Number(b.completed));
  }
  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            deleteItems={deleteItems}
            toggleItems={toggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value);
          }}
        >
          <option value="input"> Sort by input order </option>
          <option value="description"> Sort by description </option>
          <option value="packed"> Sort by packed status </option>
        </select>
        <button onClick={clearList}>Clear list</button>
      </div>
    </div>
  );
};

const Item = ({ item, deleteItems, toggleItems }: ItemProps) => {
  return (
    <li>
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => toggleItems(item.id)}
      />
      <span style={item.completed ? { textDecoration: 'line-through' } : {}}>
        {item.value} {item.description}
      </span>
      <button onClick={() => deleteItems(item.id)}>❌</button>
    </li>
  );
};

const Stats = ({ todoList }: StatsProps) => {
  const totalTodo = todoList.length;
  const packedTodo = todoList.filter((item) => item.completed).length;
  const pacentageTodo =
    totalTodo > 0 ? Math.round((packedTodo / totalTodo) * 100) : 0;
  return (
    <footer className="stats">
      <em>
        You Have {totalTodo} items 📅. completed {packedTodo} items 🎯. Progress
        is {pacentageTodo}% 👌
      </em>
    </footer>
  );
};

export default ToDoList;
