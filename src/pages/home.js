import React from 'react'
import { JumbotronContainer } from '../containers/jumbotron'
import { FooterContainer } from '../containers/footer'
import { FaqsContainer } from '../containers/faqs'
import { HeaderContainer } from '../containers/header'
import { OptForm, Feature } from '../components'

export default function App() {
    return (
        <>
            <HeaderContainer>
                <Feature>
                    <Feature.Title>Filmes, séries e muito mais. Sem limites.
</Feature.Title>
                    <Feature.SubTitle>Assista onde quiser. Cancele quando quiser.
</Feature.SubTitle>
                    <OptForm>
                        <OptForm.Text>
                            Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.
                        </OptForm.Text>
                        <OptForm.Break />
                        <OptForm.Input placeholder="E-mail" />
                        <OptForm.Button>Vamos lá</OptForm.Button>
                    </OptForm>
                </Feature>
                
            </HeaderContainer>
            <JumbotronContainer />
            <FaqsContainer />
            <FooterContainer />
        </>
    )
}