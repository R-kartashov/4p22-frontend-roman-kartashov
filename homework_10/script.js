'use strict';

fetch('https://reqres.in/api/users?per_page=12')
  .then((response) => response.json())
  .then((result) => {
    const usersData = result.data;

    // ---------------------- Пункт №2 ---------------------- //

    console.log('---------------- Пункт №2 ----------------');
    usersData.map((element) => {
      console.log('  ' + element.last_name);
    });

    // ---------------------- Пункт №3 ---------------------- //

    console.log('---------------- Пункт №3 ----------------');
    usersData.forEach((element) => {
      if (element.last_name[0] === 'F') {
        console.log('  ' + element.last_name + ':');
        for (const item in element) {
          console.log(' '.repeat(4) + item + ': ' + element[item] + ',');
        }
      }
    });

    // ---------------------- Пункт №4 ---------------------- //

    console.log('---------------- Пункт №4 ----------------');
    const reduceUser = usersData.reduce((accumulator, item, index, array) => {
      let resString = `${item.first_name} ${item.last_name}`;
      if (index !== array.length - 1) {
        resString += ', ';
      } else {
        resString += '.';
      };
      accumulator += resString;
      return accumulator;
    }, '');
    console.log(`Наша база содержит данные следующих пользователей: ${reduceUser}`);

    // ---------------------- Пункт №5 ---------------------- //

    console.log('---------------- Пункт №5 ----------------');
    for (const item in usersData[0]) {
      console.log(' '.repeat(2) + item);
    }
  })
  .catch((error) => {
    console.log('Что-то пошло не так!!! ===> ', error);
  });