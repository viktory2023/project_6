import '../css/LoginForm.css'

import React, {useState} from 'react';
import {Link, Navigate} from 'react-router-dom';

import bell from '../components/bell-icon.png'
import TopMenu from '../components/HeaderSmall';
import {getProfile} from '../utils/api';
import {isAuthed} from '../utils/auth';


function Profile() {
  const [isLogged, setIsLogged] = useState(null);
  const [profile, setProfile] = useState(null);
  const [hasNotifications, setHasNotifications] = useState(false)

  isAuthed().then((res) => setIsLogged(res));
  if (isLogged === false) {
    return <Navigate to="/login" replace/>;
  }
  
  if (isLogged && profile === null) {
    setProfile(undefined)
    getProfile().then((res) => {
      setProfile(res);
      // console.log(res)
    });
  }

  const handleLogout = () => {
    localStorage.setItem("token", null);
    setIsLogged(false);
  };
  return ( 
    <div>
      <TopMenu/>
      <h1 class='pro'>ПРОФИЛЬ</h1>
      <p class='p1'>{profile?.lastname || "ФАМИЛИЯ"}</p>
      <p class='p2'>{profile?.firstname || "ИМЯ"}</p>
      <p class='p3'>{profile?.patronymic || "ОТЧЕСТВО"}</p>
      <p class='p4'>{profile?.login || "ЛОГИН"}</p>
      <p class='p5'>{profile?.organisation?.title || "ОРГАНИЗАЦИЯ НЕ ОПРЕДЕЛЕНА"}</p>
      <button class='button-46' onClick={handleLogout}>Выйти</button>
      <div class='longBox'/>
      <div class="buttons">
      <Link to='/sent'>
        <button class='button-26'>Отправленные</button>
      </Link>
      <Link to='/received'>
        <button class='button-26'>Полученные</button>
            { hasNotifications ? <img class="bell" src={bell}
                        height="40"
                        width="40"
                        alt="bell"
                        padding="20"/> : <></>}
      </Link>
      <Link to='/load'>
        <button class='button-26'>Загрузить</button>
      </Link>
      </div>
    </div>
  );
}

export default Profile;
  