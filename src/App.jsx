import './App.css'
import { useState } from 'react'
import ContactList from './components/ContactList';


function App() {
  const [selectedContactId, setSelectedContactId] = useState(null)

  return (
    <>
    {selectedContactId ? (
      <div>Selected contact view</div>
    ) : (
      <ContactList setSelectedContactId={setSelectedContactId} />
    )}
    </>
  );
}

export default App
