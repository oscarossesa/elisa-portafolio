import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import * as S from './Paragraph.styles'

const Paragraph = ({ children, level, opacity, textAlign, margin }) => {
  const CustomParagraph = useMemo(() => {
    if (level === 'headline1') return S.Headline1
    if (level === 'headline2') return S.Headline2
    if (level === 'headline2') return S.Headline2
    if (level === 'headline4') return S.Headline4
    if (level === 'headline5') return S.Headline5
    if (level === 'body1') return S.Body1
    if (level === 'body2') return S.Body2
    if (level === 'button') return S.Button
    if (level === 'caption') return S.Caption
    return S.ParagraphBase
  }, [level])

  return (
    <CustomParagraph
      margin={margin}
      opacity={opacity}
      textAlign={textAlign}
    >
      {children}
    </CustomParagraph>
  )
}

Paragraph.defaultProps = {
  level: 'paragraph',
  margin: 0,
  textAlign: 'inherit',
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf(['paragraph', 'headline1', 'headline2', 'headline3', 'headline4', 'headline5', 'body1', 'body2', 'button', 'caption']),
  margin: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  opacity: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  textAlign: PropTypes.oneOf(['left', 'right', 'center', 'justify', 'initial', 'inherit'])
}

export default Paragraph