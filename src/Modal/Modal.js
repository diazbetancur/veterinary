import React, { useState } from 'react'
import { addDocument } from './actions'

const Modal = props => {
    const [pet, setPet] = useState([])
    const [Id, setId] = useState("")
    const [PetName, setPetName] = useState("")
    const [PetType, setPetType] = useState("")
    const [PetBreed, setPetBreed] = useState("")
    const [PetBornDate, setPetBornDate] = useState("")
    const [NamePetOwner, setNamePetOwner] = useState("")
    const [PhonePetOwner, setPhonePetOwner] = useState("")
    const [AdressPetOwner, setAdressPetOwner] = useState("")
    const [EmailPetOwner, setEmailPetOwner] = useState("")
    const [show, setShow] = useState(false)

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

    const addPet = async (e) => {
        e.preventDefault()

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
    }

    if (!props.show) {
        return null
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className='modal-titel'>Insert Pet</h4>
                </div>
                <div className='modal-body'>
                    <form>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Pet Name ... "
                                    onChange={(text) => setPetName(text.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Pet Type ... "
                                    onChange={(text) => setPetType(text.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Pet Breed ... "
                                    onChange={(text) => setPetBreed(text.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Pet Born Date ... "
                                    onChange={(text) => setPetBornDate(text.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Name Pet Owner ... "
                                    onChange={(text) => setNamePetOwner(text.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Phone Pet Owner ... "
                                    onChange={(text) => setPhonePetOwner(text.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Adress Pet Owner ... "
                                    onChange={(text) => setAdressPetOwner(text.target.value)}
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Email Pet Owner ... "
                                    onChange={(text) => setEmailPetOwner(text.target.value)}
                                ></input>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='modal-footer'>
                    <div className="row">
                        <div className="col-6">
                            <button onClick={addPet} className='btn btn-primary btn-block'
                            >Save</button>
                        </div>
                        <div className="col-6">
                            <button onClick={props.onClose} className='btn btn-secondary btn-block'>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const ModalEdit = props => {
    if (!props.show) {
        return null
    }
    return (
        <div className="modal">
            <div className="modal-content">
                <div className="modal-header">
                    <h4 className='modal-titel'>Insert Pet</h4>
                </div>
                <div className='modal-body'>
                    <form>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Pet Name ... "
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Pet Type ... "
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Pet Breed ... "
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Pet Born Date ... "
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Name Pet Owner ... "
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Phone Pet Owner ... "
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Adress Pet Owner ... "
                                ></input>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <input type="text"
                                    className="form-control mb-2"
                                    placeholder="Email Pet Owner ... "
                                ></input>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='modal-footer'>
                    <div className="row">
                        <div className="col-6">
                            <button onClick={props.onClose} className='btn btn-primary btn-block'>Save</button>
                        </div>
                        <div className="col-6">
                            <button onClick={props.onClose} className='btn btn-secondary btn-block'>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal
