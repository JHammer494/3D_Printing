import { Box } from '@mui/material'
import { Link, routes } from '@redwoodjs/router'
import { AccountCircle } from '@mui/icons-material'
const GalleryLayout = ({ children }) => {
  return (
    <>
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box></Box>
        <Box
          label="header_1"
          sx={{
            minWidth: 200,
            display: 'flex',
            flexDirection: 'column',
            textAlign: 'center',
          }}
        >
          <h2>Welcome User</h2>
          <h1>Hammer-Forged</h1>
        </Box>
        <Box
          sx={{
            display: 'flex',
            minWidth: 50,
            textAlign: 'right',
            maxWidth: 200,
            marginRight: 1,
          }}
        >
          <ul>
            <Link to={routes.home()}>
              <AccountCircle />
            </Link>
            <br />
            <img src={process.env.PUBLIC_URL + 'Loader_Svg.svg'} alt="Loader" />
          </ul>
        </Box>
      </Box>
      <main>{children}</main>
    </>
  )
}

export default GalleryLayout
