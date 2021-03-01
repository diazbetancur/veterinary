import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {addDocument } from './actions'

const ModalExample = (props) => {
  const {
    buttonLabel= 'Add Pet',
    className
  } = props;

  const [modal, setModal] = useState(false);
  const [Id, setId] = useState("")
  const [PetName, setPetName] = useState("")
  const [PetType, setPetType] = useState("")
  const [PetBreed, setPetBreed] = useState("")
  const [PetBornDate, setPetBornDate] = useState("")
  const [NamePetOwner, setNamePetOwner] = useState("")
  const [PhonePetOwner, setPhonePetOwner] = useState("")
  const [AdressPetOwner, setAdressPetOwner] = useState("")
  const [EmailPetOwner, setEmailPetOwner] = useState("")
  const [pet, setPet] = useState([])

  const toggle = () => setModal(!modal);

  const infoPet = {
    Id: '',
    PetName: '',
    PetType: '',
    PetBreed: '',
    PetBornDate: '',
    NamePetOwner: '',
    PhonePetOwner: '',
    AdressPetOwner: '',
    EmailPetOwner: ''
}

const addPet = async () => {
    infoPet.PetName = PetName
    infoPet.PetType = PetType
    infoPet.PetBreed = PetBreed
    infoPet.PetBornDate = PetBornDate
    infoPet.NamePetOwner = NamePetOwner
    infoPet.PhonePetOwner = PhonePetOwner
    infoPet.AdressPetOwner = AdressPetOwner
    infoPet.EmailPetOwner = EmailPetOwner

    setPet(infoPet)
    const result = await addDocument("Pets", pet)
    if (!result.statusResponse) {        
        return
    }
    setModal(false)
}

  return (
    <div>
      <Button color="btn btn-outline-dark btn-sm float-right mx-2" onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Add Pet</ModalHeader>
        <ModalBody>
        <form>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Pet Name ... "
                                    onChange={(text) => setPetName(text.target.value)}
                                    value = {PetName}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Pet Type ... "
                                    onChange={(text) => setPetType(text.target.value)}
                                    value = {PetType}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Pet Breed ... "
                                    onChange={(text) => setPetBreed(text.target.value)}
                                    value = {PetBreed}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Pet Born Date ... "
                                    onChange={(text) => setPetBornDate(text.target.value)}
                                    value = {PetBornDate}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Name Pet Owner ... "
                                    onChange={(text) => setNamePetOwner(text.target.value)}
                                    value = {NamePetOwner}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Phone Pet Owner ... "
                                    onChange={(text) => setPhonePetOwner(text.target.value)} 
                                    value = {PhonePetOwner}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Adress Pet Owner ... "
                                    onChange={(text) => setAdressPetOwner(text.target.value) } 
                                    value = {AdressPetOwner}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Email Pet Owner ... "
                                    onChange={(text) => setEmailPetOwner(text.target.value)} 
                                    value = {EmailPetOwner}
                                ></input>
                            </div>
                        </div>
                    </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={addPet}>Add</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;