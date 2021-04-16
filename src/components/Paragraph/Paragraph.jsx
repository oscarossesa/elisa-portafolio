import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import * as S from './Paragraph.styles'

const Paragraph = ({ children, level }) => {
  const CustomParagraph = useMemo(() => {
    if (level === 'headline1') return S.Headline1
    if (level === 'body1') return S.Body1
    return S.ParagraphBase
  }, [level])

  return (
    <CustomParagraph>
      {children}
    </CustomParagraph>
  )
}

Paragraph.defaultProps = {
  level: 'paragraph'
}

Paragraph.propTypes = {
  children: PropTypes.node.isRequired,
  level: PropTypes.oneOf(['paragraph', 'headline1', 'headline2', 'headline3', 'headline4', 'headline5', 'body1', 'body2', 'button', 'caption']),
}

export default Paragraph