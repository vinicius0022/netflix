import faqsData from '../fixtures/faqs.json'
import React from 'react'
import { Accordion, OptForm } from '../components';

export function FaqsContainer() {
    return(
        <Accordion>
            <Accordion.Title>Perguntas frequentes</Accordion.Title>
            {faqsData.map((item) => (
                <Accordion.Item key={item.id}>
                    <Accordion.Header>{item.header}</Accordion.Header>
                    <Accordion.Body>{item.body}</Accordion.Body>
                </Accordion.Item>
            ))}
            <Accordion.Item />

            <OptForm>
                <OptForm.Text>
                    Pronto para assistir? Informe seu email para criar ou reiniciar sua assinatura.
                </OptForm.Text>
                <OptForm.Break />
                <OptForm.Input placeholder="E-mail" />
                <OptForm.Button>Vamos lá</OptForm.Button>
            </OptForm>
        </Accordion>
    )
}