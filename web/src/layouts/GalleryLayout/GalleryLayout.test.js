import { render } from '@redwoodjs/testing/web'

import GalleryLayout from './GalleryLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('GalleryLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GalleryLayout />)
    }).not.toThrow()
  })
})
