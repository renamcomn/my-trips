import { render, screen } from '@testing-library/react'
import Map from '.'

describe('<Map/>', () => {
  it('should render map whithout any marker', () => {
    render(<Map />)
    expect(
      screen.getByRole('link', {
        name: /a js library for interactive maps/i
      })
    ).toBeInTheDocument()
  })

  it('should render map with any marker', () => {
    const place = {
      id: '1',
      name: 'Brasília',
      location: {
        latitude: 0,
        longitude: 0
      }
    }
    render(<Map places={[place]} />)

    expect(screen.getByTitle(/brasília/i)).toBeInTheDocument()
  })
})
