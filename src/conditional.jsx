import { useState } from 'react';

function Conditional() {
    // const isLoggedIn = true;
    const showMessage = true;

    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // normal conditional
    // if (isLoggedIn) {
    //     return <h1>Selamat Datang</h1>
    // } else {
    //     return <h1>Silahkan Login</h1>
    // }
    return (
    <div>
        {/* ternary conditional */}
        {isLoggedIn ? <h1>Selamat Datang</h1> : <h1>Silahkan Login</h1>}

        <h1>Halo, Arasy!</h1>
        {showMessage && <p>Ini pesan hanya muncul jika showMessage bernilai true</p>}

        {isLoggedIn ? (
            <h1>Selamat Datang, Arasy!</h1>
        ):(
            <h1>Silahkan Login</h1>
        )}

        <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
            {isLoggedIn ? "Logout" : "Login"}
        </button>
    </div>
    );


}

export default Conditional;