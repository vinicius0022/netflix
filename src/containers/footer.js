import React from 'react'
import { Footer } from '../components/'

export function FooterContainer() {
    return (
        <Footer>
            <Footer.Title>Dúvidas? Entre em contato conosco.</Footer.Title>
            <Footer.Break />
            <Footer.Row>
                <Footer.Column>
                    <Footer.Link href="#">Perguntas frequentes</Footer.Link>
                    <Footer.Link href="#">Relações com investidores</Footer.Link>
                    <Footer.Link href="#">Formas de assistir</Footer.Link>
                    <Footer.Link href="#">Informações corporativas</Footer.Link>
                    <Footer.Link href="#">Originais Netflix</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Centro de ajuda</Footer.Link>
                    <Footer.Link href="#">Carreiras</Footer.Link>
                    <Footer.Link href="#">Termos de uso</Footer.Link>
                    <Footer.Link href="#">Entre em contato</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Conta</Footer.Link>
                    <Footer.Link href="#">Resgatar cartão pré-pago</Footer.Link>
                    <Footer.Link href="#">Privacidade</Footer.Link>
                    <Footer.Link href="#">Teste de velocidade</Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Link href="#">Imprensa</Footer.Link>
                    <Footer.Link href="#">Comprar cartão pré-pago</Footer.Link>
                    <Footer.Link href="#">Preferências de cookies</Footer.Link>
                    <Footer.Link href="#">Avisos legais</Footer.Link>
                </Footer.Column>
            </Footer.Row>
            <Footer.Break />
            <Footer.Text>Netflix Brasil</Footer.Text>
        </Footer>
    )
}