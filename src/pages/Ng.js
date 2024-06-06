import React from 'react';
import '../styles/ngstyle.css'
import { useNavigate,Link } from 'react-router';


 function Ng() {
  const navigate = useNavigate();


  const Ulubari=()=>{
    navigate('/Ulubari')
  }


  const Panbazar=()=>{
    navigate('/Panbazar')
  }

  const Medical=()=>{
    navigate('/Medical')
  }


  const Jail=()=>{
    navigate('/Jail')
  }

  const Dharapur=()=>{
    navigate('/Dharapur')
  }

  const Jalukbari=()=>{
    navigate('/Jalukbari')
  }

  const Six_mile=()=>{
    navigate('/sixmile')
  }


  return (
  <>
  <div className="container">
    <div className="c1" id="z1"><button onClick={Ulubari}>Ulubari</button></div>
    <div className="c1" id="z2"><button onClick={Jail}>Jail</button></div>
    <div className="c1" id="z3"><button onClick={Medical}>Medical</button></div>
    <div className="c1" id="z4"><button onClick={Panbazar}>Panbazar</button></div>
    <div className="c1" id="z5"><button onClick={Jalukbari}>Jalukbari</button></div>
    <div className="c1" id="z6"><button onClick={Dharapur}>Dhupdhara</button></div>
    <div className="c1" id="z7"><button onClick={Six_mile}>Six mile</button></div>
  </div>
  </>
  );
}
export default Ng