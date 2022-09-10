import NavTabsMenu from './NavTabsMenu'

const Layout = ({ children }) => {
  return (
    <>
      <NavTabsMenu>
          {children}
      </NavTabsMenu>
    </>
  )
}

export default Layout
