import React, { useState, useEffect } from 'react'
import Modal from './Modal/Modal'
import './Modal/Modal.css'
import { isEmpty, size } from 'loadsh'
import { getCollection } from './actions'

function App() {
  const [pet, setPet] = useState("")
  const [show, setShow] = useState(false)
  const [pets, setPets] = useState([])
  const [editMode, seEditMode] = useState(false)
  const [id, setId] = useState("")
  
  useEffect(() => {
    (async () => {
      const result = await getCollection("Pets")
      if (result.statusResponse) {
        setPets(result.data)
        console.log(result.data)
      }
    })()
  }, [])

  return (
    <div className="container mt-5">
      <h1>Veterinary</h1>
      <hr></hr>
      <div className="row">
        <div className="col-6">
          <h4 className="text-center">Pets List</h4>
        </div>
        <div className="col-6">
          <button
            className="btn btn-outline-dark btn-sm float-right mx-2"
            onClick={() => setShow(true)}>
            Add Pet
        </button>
          <Modal onClose={() => setShow(false)} show={show}>
          </Modal>
        </div>
        <div className="col-12">
          {
            size(pets) === 0 ? (
              <li className="list-group-item">there are no pets yet</li>
            ) : (
                <ul className="list-group">
              {    
              pets.map((pet) => (
              <li className="list-group-item" key={pet.id}>
                    <spam className="lead">{pet.PetName}</spam>
                    <br></br>
                    <spam className="lead">{pet.PetType}</spam>
                    <br></br>
                    <spam className="lead">{pet.PetBreed}</spam>
                    <br></br>
                    <spam className="lead">{pet.PetBornDate}</spam><br></br>
                    <spam className="lead">{pet.NamePetOwner}</spam><br></br>
                    <spam className="lead">{pet.PhonePetOwner}</spam><br></br>
                    <spam className="lead">{pet.AdressPetOwner}</spam><br></br>
                    <spam className="lead">{pet.EmailPetOwner}</spam><br></br>
                    <button
                      className="btn btn-outline-danger btn-sm float-right mx-2"
                    >Delete
            </button>
                    <button
                      className="btn btn-outline-warning btn-sm float-right"
                    >Edit
            </button>
                  </li>))
                  }
                </ul>)
                }
        </div>
      </div>
    </div>
  );
}

export default App;
