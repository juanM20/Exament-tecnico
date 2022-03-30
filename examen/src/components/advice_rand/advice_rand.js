import React, {useState} from 'react'
import axios from 'axios'


function Advice_rand() {

    const [advice, setAdvice] = useState('')

    const get_advice = async () => {

        try{

        }
        catch(error){
            console.log(error)
        }

    }


    return(
        <div className="advice_rand">

            <button className="btn-advice" onClick={get_advice}>Push me</button>

        </div>
    )

}

export default Advice_rand


