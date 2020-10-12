import React from 'react'

import './styles.css'

export interface User{
  id: number,
  name: string,
  login: string,
  followers: string,
  following: string,
  public_repos: string,
  avatar_url: string,
  input: string,
  bio: string,
  html_url: string,
  repos_url: string,
  followers_url: string,
  following_url: string
}
interface Userprops {
  user: User
}

const GitUser: React.FC<Userprops> = ({user}) => {

  return (
    <article className="git-user">
        <header>
          <img src={user.avatar_url} alt="avatar"/>
          <div>
            <a href={user.html_url}> {user.name} </a>
            <span> {user.login} </span>
          </div>
        </header>
  
        <p> {user.bio} </p>

        <footer>
          <span> <a href={`https://github.com/${user.login}?tab=repositories`}> Repositorios {user.public_repos} </a> </span>
          <span> <strong> · </strong> </span>
          <span> <a href={`https://github.com/${user.login}?tab=following`}> Seguindo {user.following} </a> </span>
          <span> <strong> · </strong> </span>
          <span> <a href={`https://github.com/${user.login}?tab=followers`}> Seguidores {user.followers} </a> </span>
        </footer>
      </article>
  )
}

export default GitUser;