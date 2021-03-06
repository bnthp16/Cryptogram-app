import { render, screen, fireEvent, getByPlaceholderText } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../../../store';
import Signup from '../index'
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';

describe('test Signup component', () => {
  
  const mockedSetAuth = jest.fn() // fonction qui n'execute rien

  const signupComponent = (
    <Provider store={store}>
        <React.StrictMode>
          <BrowserRouter>
            <Signup setAuth={mockedSetAuth}/>
          </BrowserRouter>
        </React.StrictMode>
      </Provider>
  )

  it('should include title in component', () => {
    render(
      signupComponent
     ); // rend l'élément qui va être testé
    const headingElement = screen.getByText('Créez votre compte'); // mot passé en prop qui doit être rendu
    expect(headingElement).toBeInTheDocument();// s'attend à ce que le mot soit présent dans le component 
  });

  it('should include inputs email, pswd and username', () => {
    render(signupComponent)

    const emailInput =  screen.getByPlaceholderText(/email/i)
    const pswdInput =  screen.getByPlaceholderText(/mot de passe/i)
    const usernameInput = screen.getByPlaceholderText(/nom d'utilisateur/i)
    
    expect(emailInput).toBeInTheDocument()
    expect(pswdInput).toBeInTheDocument()
    expect(usernameInput).toBeInTheDocument()
  })

  it('should include inputs with empty value', () => {
    render(signupComponent) // render the component to test
    const allInputs =  screen.queryAllByRole("textbox")
    expect(allInputs[0].value).toBe('')
    expect(allInputs[0].value).not.toBe(' ')
    expect(allInputs[1].value).toBe('')
    expect(allInputs[1].value).not.toBe(' ')
    expect(allInputs[2].value).toBe('')
    expect(allInputs[2].value).not.toBe(' ')
  })

  it('should include btn', () => {
    render(signupComponent)
    const btn = screen.getByRole('button')
    expect(btn).toBeInTheDocument()
  })

  
})