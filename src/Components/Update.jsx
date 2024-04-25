import { useLoaderData } from "react-router-dom";


const Update = () => {

    const loadedUser = useLoaderData();

    const handleUpdate = (e) =>{
        e.preventDefault();
        const form  = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const updatedUser = {name, email}
        console.log(name, email);
        fetch(`http://localhost:5000/users/${loadedUser._id}`, {
            method : 'PUT',
            headers:{
                'content-type' : 'application/json'
            },
            body: JSON.stringify(updatedUser)
        })
        .then(res => res.json())
        .then(data => {console.log(data)
        if(data.modifiedCount>0){
            alert('User updated Successfully')
        }
        })
    }

    return (
        <div>
            <h1>Update Please : {loadedUser.name}</h1>
            <form onSubmit={handleUpdate}>
                <input className="input-sm" type="text" name="name" defaultValue={loadedUser?.name} />
                <br />
                <input className="input-sm" type="email" name="email" defaultValue={loadedUser?.email} />
                <br />
                <input className="btn" type="submit" value={'Update'}/>
                <br />
            </form>

            
        </div>
    );
};

export default Update;