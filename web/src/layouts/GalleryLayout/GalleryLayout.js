const GalleryLayout = ({ children }) => {
  return (
    <>
      <header>
        <h2>Welcome User</h2>
        <h1>Hammer-Forged</h1>
        <nav>
          <ul>
            <li>Link to profile</li>
            <li>Link to cart</li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default GalleryLayout
