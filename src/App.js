import React, { useState, useEffect } from 'react'
import Modal from './Modal/Modal'
import './Modal/Modal.css'
import { isEmpty, size } from 'loadsh'
import { getCollection, deleteDocument } from './Modal/actions'
import ModalDelete from './Modal/ModalDelete'
import ModalAdd from './Modal/ModalAdd'
import UpdateModal from './Modal/updateModal'

function App() {
  const [show, setShow] = useState(false)
  const [pets, setPets] = useState([])
  const [editMode, seEditMode] = useState(false)
  const [id, setId] = useState("")
  const [ModalIsOpen, setModalIsOpen] = useState(false)

  useEffect(() => {
    (async () => {
      const result = await getCollection("Pets")
      if (result.statusResponse) {
        setPets(result.data)
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
          <div>  
        {(<ModalAdd onClose={() => setModalIsOpen(false)} show={show}>            
          </ModalAdd>)}       
          </div> 
          
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
                        <spam className="lead">Pet Name: {pet.PetName}</spam>
                        <br></br>
                        <spam className="lead">Pet Type: {pet.PetType}</spam>
                        <br></br>
                        <spam className="lead">Pet Breed: {pet.PetBreed}</spam>
                        <br></br>
                        <spam className="lead">Pet Born Date: {pet.PetBornDate}</spam><br></br>
                        <spam className="lead">Name Pet Owner: {pet.NamePetOwner}</spam><br></br>
                        <spam className="lead">Phone Pet Owner: {pet.PhonePetOwner}</spam><br></br>
                        <spam className="lead">Adress Pet Owner: {pet.AdressPetOwner}</spam><br></br>
                        <spam className="lead">Email Pet Owner: {pet.EmailPetOwner}</spam><br></br>
                        <div>                  
                          <ModalDelete onClose={() => setModalIsOpen(false)} show={show} 
                          > {pet.id}
                          </ModalDelete>
                        </div>
                        <div>
                        <UpdateModal onClose={() => setModalIsOpen(false)} show={show}>
                        {pet}
                        </UpdateModal>
                          </div>
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
