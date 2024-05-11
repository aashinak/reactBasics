import logoImg from '../blog.png'

function Logo({width = "100%"}) {
  return (
    <img className='rounded-lg' src={logoImg} alt="Logo" style={{width}} />
  )
}

export default Logo