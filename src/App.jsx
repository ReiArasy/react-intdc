import { useState, useEffect} from "react";

function App(){
    const [count, setCount] = useState(0);

    // useEffect tanpa dependensi, dijalankan setiap render
    useEffect(() => {
        console.log("useEffect tanpa dependensi: Komponen telah dirender atau diperbarui");
    });

    // useEffect dengan array dependensi kosong, dijalankan sekali saat pertama kali muncul,  Contoh: API call saat komponen dimuat
    useEffect(() => {
        console.log("Componen pertama kali di-buat");
    }, []);

    // useEffect dengan dependensi count, dijalankan saat count berubah
    useEffect(() => {
        console.log(`Count berubah menjadi ${count}`);
    }, [count]);

    // useEffect dengan pembersihan (cleanup), dijalankan saat komponen di-unmount atau sebelum efek dijalankan kembali
    useEffect(() => {
        const interval = setInterval(()=> {
            console.log("Interval berjalan");
        },  1000);

        return () => {
            clearInterval(interval);
            console.log("Interval dihentikan");
        };
    }, []);

    return(
      
        <div>
        {/* // if no write dependencies, it will run every render */}
            <h1>useEffect tanpa dependensi</h1>
            <p>==================</p>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}> tambah </button>

        {/* // useEffect with array  */}
            <p>==================</p>
            <h1>useEffect dengan array dependensi kosong</h1>;

        {/* // useEffect with dependensi  */}
            <p>==================</p>
            <h1>Count: {count}</h1>
            <button onClick={() => setCount(count + 1)}> tambah </button>

        {/* // useEffect with cleanup  */}
            <p>==================</p>
            <h1>lihat console untuk interval</h1>;
        </div>
    );
}

export default App;