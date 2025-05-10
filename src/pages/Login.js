import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  function loginUser(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => alert('Logged in'))
      .catch(err => alert(err.message));
  }

  return (
    <form onSubmit={loginUser}>
      <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" />
      <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" />
      <button type="submit">Login</button>
    </form>
  );
}