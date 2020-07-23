
import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import { UserForm } from './user.form.component'
import { connect } from 'react-redux'
import { ADD, UPDATE } from '../../redux-store';
import { toast } from 'react-toastify';

const UserList = ({ users, add, update }) => {
    
  
    const [showModal, setShowModal] = useState(false);
    const [typeModal, setTypeModal] = useState(null);
    const [userModalModel, setUserModalModel] = useState({
        id: null,
        userName: '',
        email: ''
    })
    const [userModal, setUserModal] = useState({
        isValid: false,
        user: {
            id: null,
            userName: '',
            email: ''
        }
    });
  

    const handleCloseModal = (op) => {
        if (op) { // guarda
            userModal.isValid && typeModal === 'add' && add(userModal.user)
            userModal.isValid && typeModal === 'update' && update(userModal.user)
            userModal.isValid && setShowModal(false) 

            if (!userModal.isValid) {
                toast.error('Datos incorrectos !! ')
            }
        } else {
            setShowModal(false)
        }
    }

    const changeForm = (op) => {
        setUserModal(op);
    }

    const handleShowModal = (type, user) => {
        setUserModalModel(user)
        setTypeModal(type)
        setShowModal(true)
    }

    return (
        <>
            <div className="container">
                <div className="row">
                <Button variant="primary" onClick={()=>handleShowModal('add', {})}>
                    Agregar Nuevo
                </Button>
                </div>
                <div className="row">
                    <div className="col">Id</div>
                    <div className="col">User Name</div>
                    <div className="col">Email </div>
                    <div className="col"></div>
                </div>
                {users.length ? (
                    users.map((user, index) => (
                        <div key={index} className="row">
                            <div className="col">{user.id}</div>
                            <div className="col">{user.userName}</div>
                            <div className="col">{user.email}</div>
                            <div className="col">
                            <Button variant="primary" onClick={()=>handleShowModal('update', user)}>
                                Modificar
                            </Button>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="row">
                        <p>No hay usuarios</p>
                    </div>
                )}
            </div>
            <Modal show={showModal} onHide={()=>handleCloseModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {{
                            add: 'Agregar Nuevo',
                            update: 'Modificar'
                        }[typeModal]}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <UserForm changeForm={changeForm} user={userModalModel}/>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={()=>handleCloseModal(false)}>
                        Cerrar
                    </Button>
                    <Button variant="primary" onClick={()=>handleCloseModal(true)}>
                        Guardar
                    </Button>
                </Modal.Footer>
            </Modal>
            
        </>
    )
}

const mapStateToProps = (state) => ({
    users: state
})

const mapDispatchToProps = (dispatch) => ({
    add: (newUser) => dispatch({
        type: ADD,
        payLoad: newUser
    }),
    update: (modifiedUser) => dispatch({
        type: UPDATE,
        payLoad: modifiedUser
    })
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList) 