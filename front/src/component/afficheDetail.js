import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../constant/constant";
import "./ListVoiture.css"
import  axios  from 'axios';
import Commente from './Commentaire';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../action/authentification';
const Detail= (props) => {
	const [articles, setArticles] = useState([]);
	const [listvoi, setList] = useState([]);
	  useEffect(()=> { 
		
		axios.get(`${API_BASE_URL}/article/${localStorage.getItem('id')}`)
		  .then(function(response) {
			setArticles(response.data);
		  })
		  .catch(function(error) { 
			console.log('error', error);
		  });
	  }, []);
	  useEffect(()=>{
		  setList(props.auth.isAuthenticated)
	  })
	  console.log("hh",articles);
	  const renderList = () => {
		return(
		<>
        {
            listvoi?
            <div className="card card-cascade wider reverse">
        	<div className="card-body card-body-cascade ">
				<div className="row">
                    <img src={localStorage.getItem('lien')}/>
					{articles.map((el,idx) => {
						return(
							<div class="col-md-12 carde">
								<div className="card card-cascade narrower">{el.commentaire}</div>
							</div>
						)
					})
					}
				</div>
		  	</div>
		  </div>:""
        }
		
		</>
		)
	  };
	  
  	return (
		<>
        <div>
			{ renderList() }
            {/* <a className="dashboard--see-all-tournaments" href="/games"><span>See all tournaments</span></a> */}
        </div>
    </>
  	);
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})
export  default connect(mapStateToProps, { loginUser })(Detail)






