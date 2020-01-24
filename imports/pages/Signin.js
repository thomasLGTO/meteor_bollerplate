import React, {useState} from 'react'
import {Form, Button, Container} from 'semantic-ui-react'
import {Accounts} from 'meteor/accounts-base'
import {Link} from 'react-router-dom'
import {withTracker} from 'meteor/react-meteor-data'


function Signin(props){
    const [email,setEmail] =useState()
    const [password,setPassword] =useState()

    const signin=()=>{
        Meteor.loginWithPassword(email, password)
    }

    const logout =()=>Meteor.logout()
    return(
    <Container>
        <h1>Connectez vous</h1>
        {!props.current_user ?
            <Form  onSubmit={signin}>
                <Form.Input value={email} onChange={(e,{value})=>setEmail(value)} label="Email" required  type="email"  placeholder="ex: toto@gmail.com"name="" id=""/>
                <Form.Input value={password} onChange={(e,{value})=>setPassword(value)} label="Mot de passe" required type="password" name="" id=""/>
                <Button disabled={!email || !password} color='blue'>me connecter</Button>
                <Link to="/signup">
                <Button size="mini">Créer un compte</Button>
                </Link>
            </Form>
        :
        <div>
<p>Vous etes déja connecté avec l'adresse {props.current_user.emails[0].address}</p>
        <Button onClick={logout} color="red">Se déconnecter</Button>
        </div>
    }
    </Container>
    )
}

export default withTracker(()=>{
    const current_user =Meteor.user()
    return {
        current_user
    }
})(Signin)