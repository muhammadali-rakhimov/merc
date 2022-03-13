import React from 'react'
import mainImg from '../../../assets/About/secondS.png'
import "./Simple1.scss"
function Simple1() {
  return (
    <div className="simple_1">
        <div className="bContainer container">
            <div className="wrapper">
                <div className="left_box">
                    <img src={mainImg} Alt="there is Img" />
                </div>
                <div className="right_box">
                    <h1>
                        Many times people get coonfused with them the term suspension, and mix susppension
                    </h1>
                       <p>All petrol engines uses spark plugs, which produces spark in the combustion chamber of the engine, a spark plug produces spark in the combustion chamber which ignited the fuel and power is generated.</p> 

                        <p>Oil filter is a part in your vehicle which is again a most important part of your vehicle engine, it protects your engine from dirt and other foreign particles which normally affects your engine life and reduced your engine oil performance.</p>

                        <p>It is known to all that when an engine is running it produces massive heat, to control the engine from heating up to an allowable temperature a cooling material is being used which is called Coolan,Coolant is a liquid which absorbs the engine heat.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Simple1