import React from 'react';
import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.png';
import landinImg from '../../assets/images/landing2.svg';
import findIcon from '../../assets/images/icons/study.svg';

import './styles.css';	
import { FindButton } from '../../components/Styled/StyledButton';

function Landing(){
  return (
    <div id="page-landing">
			<div id="page-landing-content" className="container">
				<div className="logo-container">
					<img src={logoImg} alt="Git Menu" />
					<h2>Insira e procure por perfis aqui!</h2>
				</div>

				<img 
					src={landinImg}
					alt="Plataforma de Estudos"
					className="hero-image" 
				/>
				
				<div className="buttons-container">

					<FindButton as={ Link } to="/find"> 
						<img src={findIcon} alt="Perfis"/>
						 Procure usuários aqui 
					</FindButton>
				</div> 
			</div>
    </div>
  )  
}

export default Landing;