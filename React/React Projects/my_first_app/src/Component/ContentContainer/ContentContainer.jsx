import './ContentContainer.css'
import Sidebar from '../Sidebar/Sidebar'
import Content from '../Content/Content'
function ContentContainer() {
    return (
      <>
      <div className='ContentContainer'>
        <Sidebar />
        <Content />
      </div>
      </>
    )
  }
  
  export default ContentContainer
  