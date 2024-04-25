import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";


const Users = () => {
    const loadedUsers = useLoaderData();
    const [users, setUsers] = useState(loadedUsers)
    console.log(users)

    const handleDelete = (_id) =>{
        console.log('Delete this : ',_id)
        fetch(`http://localhost:5000/users/${_id}`, {
            method : "DELETE"
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount>0){
                alert('deleted Successfully')
                const remainings = users.filter(user => user._id !== _id);
            setUsers(remainings);
            }
        })
    }
    return (
        <div>
            Number of Users : {users.length}

            <ol>
                {
                    users.map(user => <li className="list-item list-decimal ml-10" key={user._id}>{user.name} : {user.email}
                   
                   <Link to={`/update/${user._id}`}>
                    <button className="btn m-4">Update</button>
                   </Link>

                   <button
                    onClick={()=>handleDelete(user._id)}
                    className="btn">X</button>
                    </li>)
                }
            </ol>
        </div>
    );
};

export default Users;