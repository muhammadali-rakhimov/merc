import partner from './index.module.scss'

function index({image, alt}) {
  return (
    <>
      <img className={partner.img} src={image} alt={alt} />
    </>
  )
}

export default index
