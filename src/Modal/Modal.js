import React from 'react'

 const Modal = props => {
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
