import React from 'react'
import {Form, Button, Container} from 'semantic-ui-react'

function Signup(props){
    return(
    <Container>
        <h1>Inscrivez-vous !</h1>
        <Form size={"large"} action="">
            <Form.Input label="Email" required  type="email"  placeholder="ex: toto@gmail.com"name="" id=""/>
            <Form.Input label="Mot de passe" required type="password" name="" id=""/>
            <Button color='blue'>m'inscrire</Button>
        </Form>
    </Container>
    )
}

export default Signup