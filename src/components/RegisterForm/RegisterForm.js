import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {authOperations} from '../../redux/auth';
import { Form, Button } from 'react-bootstrap';
import { authSelectors } from '../../redux/auth';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const handleNameChange = e => {
    setName(e.target.value)
  }

  const [email, setEmail] = useState('');
  const handleEmailChange = e => {
    setEmail(e.target.value)
  }

  const [password, setPassword] = useState('');
  const handlePasswordChange = e => {
    setPassword(e.target.value)
  }

  const isError = useSelector(authSelectors.getErrorMessage);

  const clearInput = () => {
    setName('');
    setEmail('');
    setPassword('');
  }

  const handlerSubmit = (e) => {
    e.preventDefault();

    dispatch(authOperations.register({name, email, password}));

    clearInput(); 
 }

  
    return (
          <div className="container">
            {!!isError && <p>{isError}</p>}
          <Form onSubmit={handlerSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control 
                  type="text"
                  name="name"
                  value={name}
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                  onChange={handleNameChange}
                  placeholder="Enter your name" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"
                  name="email"
                  value={email}
                  title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
                  required
                  onChange={handleEmailChange}
                  placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password"
                  name="password"
                  value={password}
                  title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
                  required
                  onChange={handlePasswordChange}
                  placeholder="Password" />
          </Form.Group>
          <Button variant="success" type="submit">
          Register
          </Button>
        </Form>
        </div>
     
      )
}

export default RegisterForm;