import React from 'react'
import { Link, NavigationItem } from './MainNavigationItem.styles'

const MainNavigationItem = ({ label }) => {
  return (
    <NavigationItem>
      <Link href="#">{label}</Link>
    </NavigationItem>
  )
}

export default MainNavigationItem