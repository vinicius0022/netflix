import React, { useState, useContext } from 'react'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'
import { FirebaseContext } from '../context/firebase'
import * as ROUTES from '../constants/routes'
import { useHistory } from 'react-router-dom'

export default function Signup() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = name === '' || password === '' || email === ''

    const handleSignup = (event) => {
        event.preventDefault()

        firebase.auth().createUserWithEmailAndPassword(email, password).then((result) => {
            result.user.updateProfile({
                displayName: name, 
                photoURL: Math.floor(Math.random() * 5) + 1,
            }).then(() => {
                history.push(ROUTES.BROWSE)
            })
        }).catch((error) => {
            setName('')
            setEmail('')
            setPassword('')
            setError(error.message)
        })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Registar</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignup} method="POST">
                            <Form.Input placeholder="Nome" value={name} onChange={({ target }) => setName(target.value)} />
                            <Form.Input placeholder="E-Mail" value={email} onChange={({ target }) => setEmail(target.value)} />
                            <Form.Input placeholder="Senha" value={password} type="password" autoComplete="off" onChange={({ target }) => setPassword(target.value)} />
                            <Form.Submit disabled={isInvalid} type="submit">Registrar</Form.Submit>
                    </Form.Base>

                    <Form.Text>Já é um usuário ? <Form.Link to="/signin"> Entre aqui.</Form.Link> </Form.Text>
                    <Form.TextSmall>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. Saiba mais.</Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}