import blog from './index.module.scss'
import Share from './Share'
import img1 from '../../../assets/news/heroimage.png'
import img2 from '../../../assets/news/building.png'
import img3 from '../../../assets/news/jellyfish.png'

function index() {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-12 col-md-7 ${blog.image}`}>
            <img src={img1} alt="Main Image" />
          </div>
          <div className="col-12 col-md-5 d-flex flex-column align-items-center justify-content-center">
            <h1 className='text-center py-4'>
              <b>
                Hong Kong news website to shut after police raid
              </b>
            </h1>
            <p>
              <b>12.12.2021</b>
            </p>
            <p className='text-center'>
              The US and several European countries have reported their highest daily rises in Covid cases since the pandemic began, as the Omicron variant spreads.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">  
          <div className={`p-5 pb-4 ${blog.share}`}>
            <hr />
            <Share info={'Stand News: Independent outlet to close after senior staff arrested'} />
            <hr />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className={`col-12 col-md-10 col-lg-7`}>
            <p>
              Seven people, both current and former employees, were detained by Hong Kong police for "conspiracy to publish seditious publications". "Because of the situation, Stand News is ceasing operations immediately," the organisation said in a Facebook post. More than 200 police officers were sent to raid the publication's office. Hong Kong police said in a statement they were authorised to "search and seize relevant journalistic materials".
            </p>
            <p>
              In a post on Facebook, Stand News said it would no longer be updating its website and would be removing its social media content "within a day". "This morning, the police arrested a number of senior and former senior staff of the company, [and] took many people away to assist in the investigation," the statement reads. It adds that computers and documents were seized from its office and that it would be assisting the police with their inquiry. Those arrested - three men and four women - are aged between 34 and 73 years old.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className={`col-12 col-md-5 d-flex align-items-center justify-content-center`}>
            <h2 className={`p-5 ${blog.paddingOnMedia}`}>
              <b className={blog.fromRight}>
                One of the last pro-democracy media organisations in Hong Kong, Stand News, is shutting down after it was raided by police and senior staff were arrested.
              </b>
            </h2>
          </div>
          <div className="col-12 col-md-7 d-flex flex-column align-items-center justify-content-center">
            <p className='p-5'>
              They include the former and acting chief editors of Stand News, Chung Pui-kuen and Patrick Lam, as well as pop star turned democracy icon Denise Ho, who was a former board member. Other board members Margaret Ng, Christine Fang and Chow Tat-chi were also among those arrested. The identity of the seventh person detained has not yet been reported. Chief Secretary of police John Lee said during a press conference on Wednesday afternoon that he supported the police operation against the news outlet and there would be "zero tolerance of behaviour that threatens national security".
              "Making use of media work as a tool to pursue their political purpose or other interests contravenes the law, particularly offences that endanger national security," he said.
              Footage posted on Stand News' Facebook page showed multiple police officers at the door of deputy assignment director Ronson Chan early Wednesday morning.
            </p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center">
          <div className={`col-12 col-md-10 col-lg-7`}>
            <p>
              Mr Chan was not arrested but he was taken in for questioning by police. The night before, Mr Chan had hosted the annual dinner of the Hong Kong Journalists Association (HKJA), of which he is chairperson. In a speech, he referenced the closure of Apple Daily, saying that the incident had "shaken" Hong Kong. He concluded by saying the city would "always need the truth and always need journalists... no matter how difficult the road ahead is, the [HKJA] will not fall down".
            </p>
            <p>
              Earlier this year, hundreds of police raided the premises of the now defunct Apple Daily - a publication known for being a vocal critic of the Hong Kong and Chinese leadership. Its assets were frozen, executives were detained and the paper shut down soon after. Its closure left Stand News as one of the last openly pro-democratic publications in the city. It was among a handful of relatively new online news portals that especially gained prominence during the 2019 pro-democracy protests.
            </p>
            <p>
              Today's arrests also come a day after media tycoon Jimmy Lai, the founder of Apple Daily, was slapped with the same charge even as he serves a jail sentence for a litany of separate charges against him.
            </p>
          </div>
        </div>
      </div>
      <div className="container my-5">
        <div className="row d-flex flex-column justify-content-center align-items-center">
          <div className={`col-12 col-md-12 col-lg-7 ${blog.image}`}>
            <img src={img2} alt="Building Image" />
            <p className='mt-2 mb-3 ps-3' style={{borderLeft: '2px solid #fff'}}>
              Patrick Lam was among those arrested by police
            </p>
          </div>
        </div>
      </div>
      <div className="container mb-5">
        <div className="row d-flex justify-content-center">
          <div className={`col-12 col-md-10 col-lg-7`}>
            <p>
              A few days after the closure of Apple Daily, Stand News stopped accepting donations from readers, saying they did not want to accept donors' funds in the event that they were shut down - amongst other measures instilled. One staff member who does not want to be named said today he felt calm, as it was expected. "I hope everyone will be safe and press freedom is not a crime," he said, but didn't want to respond when asked if he felt worried about his own safety and that of his 60 colleagues.
            </p>
            <p>
              Hong Kong was once a beacon of press freedom in Asia, but now, with only a handful of independent news websites and publications left, one cannot help but wonder which outlet might come next. The Committee to Protect Journalists have condemned the arrests, with its Asia program coordinator Steven Butler calling them "an open assault on Hong Kong's already tattered press freedom, as China steps up direct control over the former colony".
            </p>
            <p>
              Meanwhile, HKJA said in a statement that it was "deeply concerned" about Wednesday's incident, and urged "the government to protect press freedom in accordance with the Basic Law."
            </p>
            <p>
              The Basic Law, which came into effect when Hong Kong was handed back to China from Britain, protects rights such as freedom of assembly and freedom of speech.
            </p>
          </div>
        </div>
      </div>
      <div className="container-fluid mt-5">
        <div className="row">
          <div className={`col-12 col-md-10 pb-4 ${blog.image}`}>
            <img src={img3} alt="Jellyfish Image" />
          </div>
        </div>
      </div>
      <div className="container my-5 py-3">
        <div className="row d-flex justify-content-center">
          <div className={`col-12 col-md-10 col-lg-7`}>
            <p>
              A few days after the closure of Apple Daily, Stand News stopped accepting donations from readers, saying they did not want to accept donors' funds in the event that they were shut down - amongst other measures instilled. One staff member who does not want to be named said today he felt calm, as it was expected. "I hope everyone will be safe and press freedom is not a crime," he said, but didn't want to respond when asked if he felt worried about his own safety and that of his 60 colleagues.
            </p>
            <p>
              The Basic Law, which came into effect when Hong Kong was handed back to China from Britain, protects rights such as freedom of assembly and freedom of speech.
            </p>
            <div className={`mb-2 py-2 ${blog.share}`}>
              <hr />
              <Share />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default index