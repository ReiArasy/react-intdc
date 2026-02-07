import { useState } from 'react';

function Event() {
    const handleClick = () => {
        alert('Tombol telah diklik!');
    }

    const [name, setName] = useState("");
    const handleChange = (event) => {
        setName(event.target.value);
    }

    const [email, setEmail] = useState("");
    const handleSubmit = (event) => {
        event.preventDefault(); // mencegah reload halaman
        alert("Email yang Dikirim: " + email);
    }

    const sayHello = (name) => {
        alert("Hello, " + name + "!");
    }

    return (
        <div>
            <p>==================</p>
            <h1>Normal Event</h1>
            <p>==================</p>
            <button onClick={handleClick}>Klik Saya</button>

            <p>==================</p>
            <h1>onChange Event</h1>
            <p>==================</p>
            <input type="text" placeholder="Ketik Nama..." onChange={handleChange}/>
            <p>Halo, {name}</p>

            <p>==================</p>
            <h1>onSubmit Event</h1>
            <p>==================</p>
            <form onSubmit={handleSubmit}>
                    <input 
                     type="email"
                     placeholder="Ketik Email..."
                     value={email}
                     onChange={(e) => setEmail(e.target.value)}
                    />
                    <button type="submit">Kirim</button>
            </form>

            <p>==================</p>
            <h1>Parameter Event</h1>
            <p>==================</p>
            <button onClick={() => sayHello("Anya")}>Sapa Anya</button>
             <button onClick={() => sayHello("Arasy")}>Sapa Arasy</button>
        </div>
    );
}

export default Event;