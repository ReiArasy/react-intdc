import { useState } from 'react';

function State() {
    const [message, setMessage] = useState("Halo Arasy!, State ini belum berubah"); //state normal
    const [count, setCount] = useState(0); //state counter

    const [todos, setTodos] = useState(["Mandi", "Sarapan"]); //state array, berisi array berisi string
    // menambahkan item baru ke array menggunakan spread operator
    const addTodo = () => {
        setTodos([...todos, "Belajar"]);
    }

    return (
        <div>
            <p>==================</p>
            <h1>Normal state</h1>
            <p>==================</p>
            <h1>{message}</h1>
            <button onClick={() => setMessage("State Telah diubah!")}>Ubah State</button>

            <p>==================</p>
            <h1>Counter state</h1>
            <p>==================</p>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)} >tambah angka</button>
            <button onClick={() => setCount(count - 1)} >kurangi angka</button>

            <p>==================</p>
            <h1>Array state</h1>
            <p>==================</p>
            <h1>Daftar Todos:</h1>
            <ul>
                {/* daftar todo ditampilkan menggunakan .map */}
                {todos.map((todo, index) => (
                    <li key = {index}>{todo}</li>
                ))}
            </ul>
            <button onClick = {addTodo}>Tambah Todo</button>
        </div>

    );
}

export default State;