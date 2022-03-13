import Title from '../Title'
import Customers from './Customers'

function index() {
  return (
    <div style={{marginTop:'100px'}}>
      <Title titleName={'Meet with our clients feedback'} />
      <Customers />
    </div>
  )
}

export default index
