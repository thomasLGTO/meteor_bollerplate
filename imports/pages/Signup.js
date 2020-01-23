import React, {useState} from 'react'
import {Form, Button, Container} from 'semantic-ui-react'
import {Accounts} from 'meteor/accounts-base'
import {Link} from 'react-router-dom'


function Signup(props){
    const [email,setEmail] =useState()
    const [password,setPassword] =useState()

    const signup=()=>{
        console.log('SIGNUP', email,password)
        Accounts.createUser({
            email,
            password,
        },(err)=>{
            if(err){
                alert(err.message)
            }else{
                console.log('Utilisateur crée')
            }
            
        })
    }
    return(
    <Container>
        <h1>Inscrivez-vous !</h1>
        <Form  onSubmit={signup}>
            <Form.Input value={email} onChange={(e,{value})=>setEmail(value)} label="Email" required  type="email"  placeholder="ex: toto@gmail.com"name="" id=""/>
            <Form.Input value={password} onChange={(e,{value})=>setPassword(value)} label="Mot de passe" required type="password" name="" id=""/>
            <Button disabled={!email || !password} color='blue'>m'inscrire</Button>
            <Link to="/signin">
            <Button size="mini">j'ai déja un compte</Button>
            </Link>
        </Form>
    </Container>
    )
}

export default Signup