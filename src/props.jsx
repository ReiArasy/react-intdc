//normal props
function Welcome(props) {
    return <h1>Bahasa, {props.name}</h1>
}

//multi props
function UserCard(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <p>Umur: {props.age}</p>
            <h2>Biodata Lengkap: {props.name} {props.age}</h2>
        </div>
    );
}

//destructuring props
function StudentCard({nim, prodi}) {
    return (
        <div>
            <h2>{nim}</h2>
            <p>{prodi}</p>
            <h2>Kartu Pelajar: {nim} - {prodi}</h2>
        </div>
    );
}

function Props() {
    return (
        <div>
            <p>==================</p>
            <h1>Normal props</h1>
            <p>==================</p>
            <Welcome name="react" />
            <Welcome name="vue" />
            <Welcome name="angular" />

            <p>==================</p>
            <h1>Multi props</h1>
            <p>==================</p>
            <UserCard name="Anya" age= {20} />

            <p>==================</p>
            <h1>Destructuring props</h1>
            <p>==================</p>
            <StudentCard nim={187231} prodi="Sis Masi" />
        </div>
    );
}

export default Props;