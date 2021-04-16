import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import * as S from './Paragraph.styles'

const Paragraph = ({ children, level, opacity, textAlign }) => {
  const CustomParagraph = useMemo(() => {
    if (level === 'headline1') return S.Headline1
    if (level === 'headline4') return S.Headline4
    if (level === 'headline5') return S.Headline5
    if (level === 'body1') return S.Body1
    return S.ParagraphBase
  }, [level])

  return (
    <CustomParagraph
      opacity={opacity}
      textAlign={textAlign}
    >
      {children}
    </CustomParagraph>
  )
}

Paragraph.defaultProps = {
  level: 'paragraph',
  textAlign: 'inherit',
  opacity: 1
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf(['paragraph', 'headline1', 'headline2', 'headline3', 'headline4', 'headline5', 'body1', 'body2', 'button', 'caption']),
  textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify', 'initial', 'inherit']),
  opacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Paragraph