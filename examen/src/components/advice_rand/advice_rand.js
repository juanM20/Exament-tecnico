import React, {useState} from 'react'
import axios from 'axios'
import rand_advice from '../../routes'


function Advice_rand() {

    const [advice, setAdvice] = useState('')

    const get_advice = async () => {

        try{
            const response = await axios.get(rand_advice);
            console.log(response)
            setAdvice(response)
        }
        catch(error){
            console.log(error)
        }

    }


    return(
        <div className="advice_rand">

            <button className="btn-advice" onClick={get_advice}>Push me</button>

            <h4>{advice}</h4>

        </div>
    )

}

export default Advice_rand


