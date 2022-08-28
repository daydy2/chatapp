import React, { useState } from "react";
import { TbMessages } from "react-icons/tb";
import { useNavigate} from 'react-router-dom';
import "../styling/main.css";

const Home = () => {
  const navigate = useNavigate();
  const [userdetails, setUserDetails] = useState({
    username: '',
    password: '',
  });

  const handleDetails = (event) => {
    const name = event.target.name;

    setUserDetails({...userdetails,
      [name] : event.target.value
    })
  }
  const handleSubmit = (e) => {
      e.preventDefault();
      localStorage.setItem('userName', userdetails.username);
      navigate('/chat');
  }

  return (
    <div className="home">
      <section className="section__home1">
        <TbMessages size={70} className="icons-mess" />
        <div className="div__appInfo">
          <h1 className="div__h1-introHeading">Designed for Friends and Family</h1>
          <p className="div__p-info">
            Here, you'll get fast, simple, secure messaging and calling for
            free*, available on phones all over the world.
          </p>
          <p className="div__p-info spec-p">
          * Data charges may apply. Contact your provider for details.
          </p>
        </div>
      </section>
      <section className="section__home2">
        <form
          className="form"
          onSubmit={handleSubmit}
        >
          <h2 className="form__h2">Login</h2>
          <label for="username" className="form__label">
            Username
          </label>
          <input
            type="text"
            name="username"
            minLength={6}
            className="form__input"
            id="username"
            value={userdetails.username}
            placeholder="Your username"
            onChange={handleDetails}
          />
          {/* <label for="password" className="form__label">Paswword</label>
          <input
            type="password"
            name="password"
            minLength={6}
            className="form__input"
            id="password"
            value={userdetails.password}
            placeholder="Password"
            onChange={handleDetails}
          /> */}
          <button className="btn form__btn">sign in</button>
        </form>
      </section>
    </div>
  );
};

export default Home;
