import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import * as S from './Button.styles'

const Button = (props) => {
  const { children, color, onClick, width } = props
  const CustomButton = useMemo(() => {
    if (color === 'secondary') return S.SecondaryButton
    if (color === 'custom-download') return S.DownloadButton
    return S.PrimaryButton
  }, [color])

  return (
    <CustomButton
      color={color}
      onClick={onClick}
      width={width}
    >
      {children}
    </CustomButton>
  )
}

Button.defaultProps = {
  color: 'primary',
  onClick: () => undefined
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(['primary', 'secondary', 'custom-download']),
  onClick: PropTypes.func,
  width: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
}

export default Button