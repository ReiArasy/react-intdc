// component for list item
function UserItem({ name, age}){
    return (
        <li>
            {name} - {age}
        </li>
    );
}

function List() {
    const names = ["Anya", "Arasy"] //array of names
    const users = [
        {id: 1, name: "Anya", age: 20},
        {id: 2, name: "Arasy", age: 21},
    ]

    return (
    <div>
        {/* map list */}
       <h1>Map List</h1>
       <ul>
        {
            names.map((name) => ( //use map to convert array to list
                <li>{name}</li>
            ))
        }
       </ul>

       {/* key list */}
       <p>==================</p>
       <h1>Key List</h1>
       <ul>
        {
            names.map((name, index) => ( 
                <li key={index}>{name}</li> // add key attribute to each list item, using index as unique identifier
            ))
        }
       </ul>

       {/* object list */}
       <p>==================</p>
       <h1>List Object</h1>
       <ul>
        {
            users.map((user) => ( 
                <li key={user.id}>{user.name} - {user.age}</li> // add key attribute to each list item, using index as unique identifier
            ))
        }
       </ul>

       <p>==================</p>
       <h1>Component List</h1>
       <ul>
        {
            users.map((user) => (
                <UserItem key ={user.id} name ={user.name} age ={user.age} />
            ))
        }
       </ul>

    </div>
    );


}

export default List;