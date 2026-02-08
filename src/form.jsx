import { use, useRef, useState } from 'react';

// controlled components
function Form() {
    const [name, setName] = useState("");
    const [form, Setform] = useState({email: "", password: ""}); //save multiple input values
    const nameRef = useRef(); //reference to input element

    const handleSubmit = (event) => {
        event.preventDefault(); // mencegah reload halaman
        alert(`Nama: ${name}`);
    }

    const submitHandle = (event) => {
        event.preventDefault(); // mencegah reload halaman
        alert(`Nama: ${nameRef.current.value}`); // akses nilai input menggunakan ref
    }

    // handle multiple input changes
    const handleChange = (e) => {
        Setform({
            ...form,
            [e.target.name]: e.target.value});
        };

    const handleSubmitMulti = (e) => {
        e.preventDefault();
        alert(`Email: ${form.email}, Password: ${form.password}`);
    }

    return (
        <div>
             {/* Controlled Components */}
            <form onSubmit={handleSubmit}>
                <input
                    type="name"
                    placeholder="Ketik nama..."
                    value={name} // input follow state
                    onChange={(e) => setName(e.target.value)} // update state on input change
                />
                <button type="submit">Kirim</button>
            </form>

            <p>==================</p>
            {/* Uncontrolled Components */}
            <form onSubmit={submitHandle}>
                <input type="text" ref={nameRef} placeholder="Ketik nama..." />
                <button type="submit">Kirim</button>
            </form>

            <p>==================</p>
            {/* Multiple Input Form */}
            <form onSubmit={handleSubmitMulti}>
                <input
                    type="email"
                    name="email"
                    placeholder="Ketik Email..."
                    value={form.email}
                    onChange={handleChange}
                />
                <input
                    type="password"
                    name="password"
                    placeholder="Ketik Password..."
                    value={form.password}
                    onChange={handleChange}
                />
                <button type="submit">Kirim</button>
            </form>
        </div>
    );
}

export default Form;