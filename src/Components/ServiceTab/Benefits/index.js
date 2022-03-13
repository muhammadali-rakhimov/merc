import benefits from './index.module.scss'
import Benefit from './Benefit'
import benefit1 from '../../../assets/benefits/001-computer1.png'
import benefit2 from '../../../assets/benefits/002-car-repair2.png'
import benefit3 from '../../../assets/benefits/003-recovery3.png'
import benefit4 from '../../../assets/benefits/004-truck4.png'

function index() {
  return (
    <div className="container d-flex my-5">
      <div className="row">
        <Benefit className="col" title={"INDUSTRY-LEADING TOOLS"} description={"Improve your collision center’s efficiency with our proprietary business management system and best-in-class solutions, helping you convert more customers, hit your KPIs."}
        img={benefit1} imgDesc={"Benefit_computer"} />
        <Benefit className="col" title={"UNBEATABLE BUYING POWER"} description={"Find great deals through Driven Brands’ expansive network, and receive discounts and rebates from our 50+ preferred vendors."}
        img={benefit2} imgDesc={"Benefit_car_repair"} />
        <Benefit className="col" title={"THOROUGH TRAINING AND EDUCATION"} description={"Attain the knowledge you and your team need to run a high-performing business with our robust training and education programs."}
        img={benefit3} imgDesc={"Benefit_recovery"} />
        <Benefit className="col" title={"Consistent Revenue Growth"} description={"With a Central Review team that will help you write more accurate estimates and meet your top-line KPIs, you can be confident your business is more efficient than ever."}
        img={benefit4} imgDesc={"Benefit_truck"} />
      </div>
    </div>
  )
}

export default index
