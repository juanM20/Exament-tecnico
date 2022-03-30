import React, {useState} from 'react'
import axios from 'axios'
import routes_advice from '../../routes'


function AdviceRand() {

    const [advice, setAdvice] = useState('Some advice')
    const [id, setId] = useState(0)

    const get_advice = async () => {

        try{
            const response = await axios.get(routes_advice.rand_advice);
            console.log(response)
            setAdvice(response.data.slip.advice)
        }
        catch(error){
            console.log(error)
        }

    }

    const get_idAdvice = async () => {

        try {
            const response = await axios.get(routes_advice.id_advice+"/"+id)
            console.log(response)
            setAdvice(response.data.slip.advice)

        } catch (error) {
            console.log(error)
        }
    }

    return(
        <div>
            <div className="advice_rand">
                <button className="btn-advice" onClick={get_advice}>Push me</button>
                <h4>{advice}</h4>
            </div>

            <div className="advice_id">
                <h2>Set an ID in the input text</h2>
                <input type="text" placeholder='write an ID' onChange={event => setId(event.target.value)}/>
                <button className='btn-advice' onClick={get_idAdvice}>Push me</button>
                <h1>ID:{id} advice:{advice}</h1>
            </div>
        </div> 
    )

}

export default AdviceRand


