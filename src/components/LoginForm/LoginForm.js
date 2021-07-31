import { useState } from 'react';
import {authOperations} from '../../redux/auth';
import { Form, Button, FloatingLabel } from 'react-bootstrap';
import { useDispatch } from 'react-redux';


const LoginForm = () => {
  const dispatch = useDispatch();



  const [email, setEmail] = useState('');
  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const [password, setPassword] = useState('');
  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const clearInput = () => {
    setEmail('');
    setPassword('');
  }


    const handlerSubmit = (e) => {
    e.preventDefault();

    dispatch(authOperations.logIn({email, password}));

    clearInput(); 
 }


  return (    
          <div className="container">
          <Form onSubmit={handlerSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <FloatingLabel
              label="Email address"
              className="mb-3"
            >
            <Form.Control type="email"
                  name="email"
                  value={email}
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                  onChange={handleEmailChange}
                  placeholder="Enter email" />
                  </FloatingLabel>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <FloatingLabel
              label="Password"
              className="mb-3"
            >
            <Form.Control type="password"
                  name="password"
                  value={password}
                  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                  required
                  onChange={handlePasswordChange}
                  placeholder="Password" />
            </FloatingLabel>
          </Form.Group>
          <Button variant="success" type="submit">
            Submit
          </Button>
        </Form>
        </div>
  )
}

export default LoginForm;
