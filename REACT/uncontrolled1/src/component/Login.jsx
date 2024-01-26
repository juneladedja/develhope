export function Login (){

    function handleLoginSubmit(e){
        e.preventDefault() // si deve mettere sempre con uncontrolled form !!!!!! non dimenrticarlo mai

        const username = e.target.username.value
        const password = e.target.password.value
        const session = e.target.session.checked

        const data = {username, password, session}
        console.log(data);
    }

    //evento al form e non al bottone perche é uncontrolled form
    // nei controlled forms si mette al bottone interessato
    return (
        <form onSubmit={handleLoginSubmit}> 
            <input type="text" name="username"/>
            <input type="password" name="password"/>
            <input type="checkbox" name="session"/>
            <button> Login </button>
        </form>
    )
}