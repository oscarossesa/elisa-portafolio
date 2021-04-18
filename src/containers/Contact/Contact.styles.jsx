import styled from 'styled-components'

export const ContactWrapper = styled.div`
  width: 100%;
  padding: 40px 0 80px;
`

export const Data = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 0 auto;


  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
    align-items: center;
    text-align: center;
    max-width: 543px;
  }
`

export const Form = styled.form`
  margin: 24px auto 0;
  display: flex;
  flex-direction: column;
  gap: 16px;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
    max-width: 543px;
  }
`

export const CustomParagraph = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 26px;
  letter-spacing: 0.005em;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin: 16px 0 0;
`

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Label = styled.label`
  padding: 0 16px;
  font-family: Oxygen;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 26px;
`

export const Input = styled.input`
  border: none;
  border: 1px solid #858C94;
  border-radius: 8px;
  padding: 12px 16px;
`

export const TextArea = styled.textarea`
  border: none;
  border: 1px solid #858C94;
  border-radius: 8px;
  padding: 12px 16px;
  height: 134px;
  resize: none;
`

export const Title = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 39px;
  display: inline-block;
  background: ${props => props.theme.color.black};
  color: ${props => props.theme.color.primary};
  padding: 4px 8px;
  box-shadow: -4px 4px 0px #FFFFFF;
  margin-bottom: 0;
  margin-top: 40px;

  // Small devices (landscape phones, 576px and up)
  @media (min-width: 576px) { 
    width: 100%;
  }

`

export const Asterisk = styled.span`
  color: #DA1414;
  font-family: Source Sans Pro;
  font-style: normal;
  font-weight: 600;
  font-size: 13px;
  line-height: 20px;
  opacity: 0.8;
  vertical-align: top;
`
