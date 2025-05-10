import React, { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

export default function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function signupUser(e) {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => alert('Signed up successfully'))
      .catch(err => alert(err.message));
  }

  return (
    <form onSubmit={signupUser}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Sign Up</button>
    </form>
  );
}