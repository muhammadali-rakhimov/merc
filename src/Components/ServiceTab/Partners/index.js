import partners from './index.module.scss'
import Partner from './Partner'
import Title from '../Title'
import idexx from '../../../assets/partners/clients_logos_idexx.png'
import onapsis from '../../../assets/partners/clients_logos_onapsis.png'
import appneta from '../../../assets/partners/appneta.png'
import assemblyLegal from '../../../assets/partners/assembly-legal.png'
import bose from '../../../assets/partners/bose.png'
import dtex from '../../../assets/partners/dtex.png'
import forescout from '../../../assets/partners/forescout.png'
import johnsonControl from '../../../assets/partners/JCI_k.png'
import mcafee from '../../../assets/partners/mcafee.png'
import vitalia from '../../../assets/partners/vitalia.png'

function index() {
  return (
    <div className={`mt-5 ${partners.parent}`}>
      <Title titleName={"Giving Back While Moving Your Auto Body Business Forward."} />
      <div className='container mt-4'>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <Partner image={idexx} alt={"Idexx"} />
          </div>
          <div className="col d-flex justify-content-center">
            <Partner image={onapsis} alt={"Idexx"} />
          </div>
          <div className="col d-flex justify-content-center">
            <Partner image={appneta} alt={"Idexx"} />
          </div>
          <div className="col d-flex justify-content-center">
            <Partner image={assemblyLegal} alt={"Idexx"} />
          </div>
          <div className="col d-flex justify-content-center">
            <Partner image={mcafee} alt={"Idexx"} />
          </div>
        </div>
        <div className="row">
          <div className="col d-flex justify-content-center">
            <Partner image={bose} alt={"Idexx"} />
          </div>
          <div className="col d-flex justify-content-center">
            <Partner image={dtex} alt={"Idexx"} />
          </div>
          <div className="col d-flex justify-content-center">
            <Partner image={forescout} alt={"Idexx"} />
          </div>
          <div className="col d-flex justify-content-center">
            <Partner image={johnsonControl} alt={"Idexx"} />
          </div>
          <div className="col d-flex justify-content-center">
            <Partner image={vitalia} alt={"Idexx"} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default index
