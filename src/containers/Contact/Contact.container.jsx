import React from 'react'
import Button from '../../components/Button/Button'
import * as S from './Contact.styles'

const Contact = () => {

  const handleSubmit = event => {
    event.preventDefault()
  }

  return (
    <S.ContactWrapper>
      <S.Data>
        <S.Title>
          HABLEMOS
        </S.Title>
        <S.CustomParagraph>
          Si está interesado en trabajar conmigo en su próximo
          proyecto, no dude en ponerse en contacto conmigo.
        </S.CustomParagraph>
      </S.Data>
      <S.Form>
        <S.FormGroup>
          <S.Label>
            Nombre completo<S.Asterisk>*</S.Asterisk>
          </S.Label>
          <S.Input placeholder="Juan" />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>
            Correo electrónico<S.Asterisk>*</S.Asterisk>
          </S.Label>
          <S.Input placeholder="juan@gmail.com" />
        </S.FormGroup>
        <S.FormGroup>
          <S.Label>Mensaje</S.Label>
          <S.TextArea />
        </S.FormGroup>
        <S.FormGroup>
          <Button onClick={handleSubmit} width="100%">ENVIAR MENSAJE</Button>
        </S.FormGroup>
      </S.Form>
    </S.ContactWrapper>
  )
}

export default Contact