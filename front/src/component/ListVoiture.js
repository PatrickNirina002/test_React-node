import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../constant/constant";
import "./ListVoiture.css"
import  axios  from 'axios';
import Commente from './Commentaire';
import { confirmAlert } from 'react-confirm-alert'; // Import
import 'react-confirm-alert/src/react-confirm-alert.css'; // Import css
import Detail from '../component/afficheDetail';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { loginUser } from '../action/authentification';
const ListVoiture= (props) => {
	const [articles, setArticles] = useState([]);
	const [listvoi, setList] = useState([]);
	  useEffect(()=> { 
		
		axios.get(API_BASE_URL)
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
	  console.log("maro",listvoi);
	  const renderList = () => {
		return(
		<>
		<div className="card card-cascade wider reverse">
        	<div className="card-body card-body-cascade ">
				<div className="row">
					{articles.map((el,idx) => {
						return(
							<div class="col-md-4 carde">
								<div className="card card-cascade narrower" onClick={()=>{
									localStorage.setItem('id',el._id)
									localStorage.setItem('lien',el.lien)
								}}>
									<div onClick={() => {props.history.push('/detail/'+el._id);}}><img
										src={el.lien}
										class="card-img-top"
										alt="..."
									/></div>
									{
										listvoi ? 
										<div className="card-body">
										<div className="row">
											<div className="col-md-5"></div>
											<div className="col-md-7">
												<div className="col-md-10">
													<a   onClick={()=>{
													console.log(el._id);
													localStorage.setItem('ti',el._id)
													localStorage.setItem('titre',el.titre)
													confirmAlert({
													customUI: ({ onClose }) => {
													return (
														<div className='custom-ui'>
															<div class="card card-cascade wider reverse">
																<div class="view view-cascade overlay">
																	<div className="row">
																		<div className="col-md-11"></div>
																		<div className="col-md-1"><button onClick={onClose} className="ferme">X</button></div>
																	</div>
																</div>
																<div className="pop"><Commente/></div>
														    </div>
														</div>
													   );
													 }
													});
													}}> comment </a></div>
											</div>
										</div>
									</div>:""
									}
								</div>
							</div>
						)
					})
					}
				</div>
		  	</div>
		  </div>
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
export  default connect(mapStateToProps, { loginUser })(ListVoiture)






