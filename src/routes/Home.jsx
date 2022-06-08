import logo from '../logo.svg';
import '../App.css';
import { Topbar, Landing, Card, Footer } from '../components/';
import React from 'react';

export default function Home() {
  return (
    <React.Fragment>

      <Landing />

      <div className="container-animation container-fluid main-bg-color" id="cadastro">
        <Card cardName="quero trabalhar" link="/cadastro" />
        <Card cardName="quero contratar" />
        <Card cardName="quero ajudar" />
      </div>

    </React.Fragment>
  );
}

