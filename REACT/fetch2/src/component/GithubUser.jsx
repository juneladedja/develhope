
export function GithubUser({user}) { // prende come prop user
  
   // nell'h2 seleziono lo user.login per lo username e nell'img seleziono avatarurl
    return (
      <>
        <h2>username {user.login}</h2>
        <img src={user.avatar_url}/>
      </>
    );
  }