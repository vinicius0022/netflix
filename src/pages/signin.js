import React, { useState, useContext } from 'react'
import { HeaderContainer } from '../containers/header'
import { FooterContainer } from '../containers/footer'
import { Form } from '../components'
import { FirebaseContext } from '../context/firebase'
import * as ROUTES from '../constants/routes'
import { useHistory } from 'react-router-dom'

export default function Signin() {
    const history = useHistory()
    const { firebase } = useContext(FirebaseContext)
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const isInvalid = password === '' || email === ''
    const handleSignin = (event) => {
        event.preventDefault()

        firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
            history.push(ROUTES.BROWSE)
        }).catch((error) => {
            setEmail('')
            setPassword('')
            setError(error.message)
        })
    }

    return (
        <>
            <HeaderContainer>
                <Form>
                    <Form.Title>Entrar</Form.Title>
                    {error && <Form.Error>{error}</Form.Error>}
                    <Form.Base onSubmit={handleSignin} method="POST">
                        <Form.Input placeholder="E-Mail" value={email} onChange={({ target }) => setEmail(target.value)} />
                        <Form.Input placeholder="Senha" value={password} type="password" autoComplete="off" onChange={({ target }) => setPassword(target.value)} />
                        <Form.Submit disabled={isInvalid} type="submit">Entrar</Form.Submit>
                    </Form.Base>

                    <Form.Text>Novo por aqui? <Form.Link to="/signup">Assine agora</Form.Link></Form.Text>
                    <Form.TextSmall>Esta página é protegida pelo Google reCAPTCHA para garantir que você não é um robô. Saiba mais.</Form.TextSmall>
                </Form>
            </HeaderContainer>
            <FooterContainer/>
        </>
    )
}