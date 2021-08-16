import React from 'react';
import Prod from './Prod';
import Section from './Section';

export default function App() {
    return (
      <>
        <h1>Best</h1>
        <Section title="pr1">
            <Prod name="namefff" price={20} url="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"/>
        </Section>

        {/* <Prod name="namefff" price={20} url="https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"/> */}
        <Section title="pr2">
            <Prod name="nameNEW" price={2000000} url="https://thumbs.dreamstime.com/b/%D0%B1%D0%B0%D0%B1%D0%BE%D1%87%D0%BA%D0%B0-%D0%BC%D0%BE%D0%BD%D0%B0%D1%80%D1%85%D0%B0-%D0%BE%D1%80%D0%B0%D0%BD%D0%B6%D0%B5%D0%B2%D0%B0%D1%8F-%D0%B8-%D1%8F%D1%80%D0%BA%D0%B8%D0%B5-%D1%86%D0%B2%D0%B5%D1%82%D1%8B-%D0%BB%D0%B5%D1%82%D0%BE%D0%BC-%D0%BD%D0%B0-%D1%84%D0%BE%D0%BD%D0%B5-%D0%BB%D0%B8%D1%81%D1%82%D0%B2%D1%8B-%D0%B2-%D1%81%D0%B0%D0%B4%D1%83-%D1%84%D0%B5%D1%8F-167030287.jpg"/>
        </Section>
        
      </>
    )
  }