import './Banner.css'
import img1 from '../../img/slide_01.jpg'

function Banner() {
  return (
    <>
    <div className='Banner'>
        <div>
        <h3 className='banner_text1'>BEST OFFER</h3>
        <p className='banner_text2'>
            New Arrivals on Sale
        </p>
            <img src={img1} alt="" />
        </div>

    </div>
    </>
  )
}

export default Banner