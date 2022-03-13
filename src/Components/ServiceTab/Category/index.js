import Button from '../Button'
import img from '../../../assets/category/Rectangle 1053.png'

function index() {
  return (
    <>
      <div className={`container my-4 py-3`}>
        <div className="row">
          <h2 className='pt-5 pb-4'>
            <b>Engine Repair</b>
          </h2>
          <p>
            Hercules has a team of dedicated professionals who are in the know about everything that relates to engine repairs. Without a properly functioning engine, your car will not be able to get from Point A to Point B, making engine replacement necessary. With the right maintenance and repairs, your engine can last for miles and miles. Because of this, we encourage individuals to visit our Hercules experts, so they can learn how to care for their engine and choose the best service for their pocketbook and automobile.
          </p>
          <p>
            Hercules has a team of dedicated professionals who are in the know about everything that relates to engine repairs. Without a properly functioning engine, your car will not be able to get from Point A to Point B, making engine replacement necessary. With the right maintenance and repairs, your engine can last for miles and miles. Because of this, we encourage individuals to visit our Hercules experts, so they can learn how to care for their engine and choose the best service for their pocketbook and automobile.
          </p>
        </div>
      </div>
      <div className='container-fluid pt-4'>
        <div className="row">
          <img src={img} alt="Wallpaper" />
        </div>
      </div>
      <div className={`container my-3 py-3`}>
        <div className="row">
          <h2 className='pt-5 pb-4'>
            <b>We keep your engine road ready</b>
          </h2>
          <p>
          At Milex Complete Auto Care, we always like to say “We don’t fix something that doesn’t need to be fixed.” We are dedicated to providing the most economical and effective engine services — whether that includes engine repairs, maintenance, or replacement.
          Many of today’s automobiles are built to last their owners at least 200,000 miles. That is, if the vehicle is properly maintained. Proper maintenance goes beyond just regular oil changes, but includes maintaining all of your fluids, replacing worn-out parts and engine maintenance. The best way to preserve your engine is to get the vehicle fully inspected for items, such as worn out spark plugs, needed adjustments in your timing belt or a low battery. Our recommendation for engine preventive maintenance is to bring your vehicle to Mr. Transmission Milex for our expert tune-up service.
          </p>
          <h2 className='pt-5 pb-4'>
            <b>Schedule an appointment now</b>
          </h2>
          <p>
          Being attentive to your engine maintenance is one of the most important ways to protect your vehicle, keeping it in road-ready condition. No matter what type of vehicle you have, our honest and experienced engine technicians are ready to help — all you need to do is make the call.
          To schedule an appointment for engine maintenance and tune-up services, find your nearest Mr. Transmission Milex today.
          </p>
          <div className='my-4'>
            <Button name={'Contact Us'} link={'/contact'} />
          </div>
        </div>
      </div>
    </>
  )
}

export default index
