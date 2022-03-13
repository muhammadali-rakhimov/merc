import customer from './index.module.scss'

function index({image, text, author, job}) {
  return (
    <div className={`container p-5 ${customer.slide}`}>
      <div className="row">
        <div className="order-lg-2 col-12 col-lg-4 d-flex justify-content-center align-items-center">
          <img className={customer.image} src={image} alt={'Customer_Image'} />
        </div>
        <div className="order-lg-1 col-12 col-lg-8 d-flex flex-column justify-content-center align-items-start p-4">
          <p className={customer.feedback}>
            {text}
          </p>
          <p className={`fw-bold ${customer.author}`}>
            {author}
          </p>
          <p className={`fw-bold ${customer.job}`}>
            {job}
          </p>
        </div>
      </div>
    </div>
  )
}

export default index
