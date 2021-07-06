import React, { useState } from "react"; 
import { post } from 'axios';
import { API_BASE_URL } from "../constant/constant";
const Commente=(props)=> {
    const initialState = { nom: '', commentaire: '' }
    const [com, setCom] = useState(initialState)
    function handleChange(event) { 
        setCom({...com, [event.target.name]: event.target.value})
      }
    function handleSubmit(event) { 
        event.preventDefault();  
        console.log("id",`${API_BASE_URL}/comment/${localStorage.getItem('ti')}`);
        if(!com.commentaire ) return 
        async function postComment() {
          try {
            const response = await post(`${API_BASE_URL}/comment/${localStorage.getItem('ti')}`, com); 
            console.log(response.data);
            props.history.push(`/detail/${localStorage.getItem('ti')}`);
          } catch(error) {
            console.log('error', error);
          }
        }
        postComment();
      }
    return (<div>
        <div className="blanc">ecrire votre commentaire</div>
        <div style={{ marginTop: 10 }} className="row">
            <form onSubmit={handleSubmit}>
                <div className="form-group col-md-12">
                    <input  id='champ'
                      name="commentaire"
                      type="text" 
                      className="form-control" 
                      type="text" value={com.commentaire} 
                      onChange={handleChange}
                      />
                    <input type="submit" 
                    value="Submit" 
                    className="btn btn-primary" />
                 </div>
               
            </form>


        </div>
        </div>
    )
}
export default Commente;