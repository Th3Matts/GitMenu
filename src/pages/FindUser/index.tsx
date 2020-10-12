import React, {useState, useEffect ,FormEvent} from 'react';
import PageHeader from '../../components/PageHeader';
import GitUser, { User } from '../../components/GitUser';

import './styles.css';
import Input from '../../components/Input';
import { SearchButton } from '../../components/Styled/StyledButton';

function FindUser() {
	const [name, setName] = useState ('');
	const [users, setUsers] = useState <User[]> ([]);
	
	function handleSearch( e:FormEvent ) {
		e.preventDefault();
		try{
			fetch (`https://api.github.com/users/${name}`)
			.then(res => res.json())
			.then((data) => {setUsers(prevState => prevState.concat(data))})
		} catch {}
	}

	useEffect(() =>{
		const userExemple = sessionStorage.getItem('exempleUsers');
		if(userExemple){
			setUsers(JSON.parse(userExemple));
		}
	}, [])

	useEffect(() => {
		sessionStorage.setItem("exempleUsers", JSON.stringify(users))
	}, [users])
	
	return (
		<div id="page-user-list" className="container">
			<PageHeader title=" Procure aqui por usuários no GitHub. ">
				<form id="search-users" onSubmit={handleSearch}>
				<Input 
					 name="git-user"
					 label="Nome"
					 placeholder="Usuario do GitHub"
					 onChange = {e => { setName(e.target.value) }}
					/>
				
					<SearchButton>
						Buscar
					</SearchButton>
				</form>
			</PageHeader>

			<main>
				{ users.map((user: User) =>{
					return <GitUser key={user.id} user={user} />})}
			</main>
		</div>
	)
}

export default FindUser;