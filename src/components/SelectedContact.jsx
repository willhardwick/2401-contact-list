import { useState, useEffect } from 'react';



function SelectedContact ({selectedContactId, setSelectedContactId}) {
    const [contact, setContact] = useState(null)
    useEffect(() => {
        async function getSelectedContact() {
        try {
            const response = await fetch(`https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`)
            const json = await response.json();
            setContact(json);

        } catch (error) {
            console.error(error)

        }
    }
    
    if (selectedContactId) {
        getSelectedContact();
    }
   
}, [selectedContactId])

const backToListButton = () => {
    setSelectedContactId(null);
}

if(!contact) {
    return <div>No contacts</div>

}
const {name, username, email, website} = contact;

return (
    <div>
        <h2>Profile of {name}</h2>
        <ul className='selectedContactList'>
            <li>Username: {username}</li>
            <li>Email: {email}</li>
            <li>Website: {website}</li>
        </ul>
        <button onClick={backToListButton}>Back to contact list</button>
    </div>
)

}

export default SelectedContact