// const minhaPromisse = () => new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('ok')
//     }, 2000);
// });

// minhaPromisse().then(response => {
//     console.log(response);
// });

// async function executaPromisse() {
//     const response = await minhaPromisse();

//     console.log(response);
// }

// executaPromisse();

// import axios from 'axios';

// class Api {
//     static async getUserInfo(username) {
//         try {
//         const response = await axios.get(`https://api.github.com/users/${username}`);
//         console.log(response);
//         } catch (err) {
//             console.warn('erro na API');
//         }
//     }
// }

// Api.getUserInfo('franciscojunior1s0');