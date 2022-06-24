import { Link, routes } from '@redwoodjs/router'
import ProductCell from 'src/components/ProductCell'
import { MetaTags } from '@redwoodjs/web'

const HomePage = () => {
  return (
    <>
      <MetaTags title="Home" description="Home page" />
      <ProductCell />
    </>
  )
}

export default HomePage
