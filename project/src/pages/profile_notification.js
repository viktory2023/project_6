import React from 'react';
import '../css/LoginForm.css'
import TopMenu from '../components/HeaderSmall';
import bell from '../components/bell-icon.png'
//  все, что указано под "профилем" идет из базы, но я пока не до конца поняла, как это правильно написать, так что простите, пожалуйста 

function ProfileNoti() {
    return (
      <div>
        <TopMenu/>
         <h1 class="pro">ПРОФИЛЬ</h1>
         <p class="p1">ФАМИЛИЯ</p>
         <p class="p2">ИМЯ</p>
         <p class="p3">ОТЧЕСТВО</p>
         <p class="p4">НОМЕР ТЕЛЕФОНА</p>
         <p class="p5">ЭЛЕКТРОННАЯ ПОЧТА</p>
         <div class="longBox"/>
         <div>
         <button class="button-26">Отправленные</button>
         <button class="button-26" >
            Полученные</button>
            <img class="bell" src={bell}
                        height="40"
                        width="40"
                        alt="bell"
                        padding="20"/>
         <button class="button-26">Загрузить</button>
         </div>
      </div>
    );
  }
  
  export default ProfileNoti;
  