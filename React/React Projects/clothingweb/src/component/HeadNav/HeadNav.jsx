import './HeadNav.css'

function HeadNav() {
  return (
    <>
    <header className='header'>
      <nav>
        <div className='logo'><h2>CP <span style={{color:'red', fontFamily:'cursive'}} >Agency</span></h2></div>
        <div className='ssnav'>
          <button>Click</button>
        </div>
        <div className='bsnav'>
          <ul>
            <li><a href="">Home</a></li>
            <li><a href="">Our Products</a></li>
            <li><a href="">About Us</a></li>
            <li><a href="">Contact Us</a></li>
          </ul>
        </div>
      </nav>
    </header>
    </>
  )
}

export default HeadNav