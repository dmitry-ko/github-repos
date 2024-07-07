import {redirect} from "react-router-dom";

export async function login() {
  const jwt = localStorage.getItem('jwt');
  if (jwt) {
    return null;
  }
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = Object.fromEntries(urlSearchParams.entries());
  if (params.code) {
    const response = await fetch(`https://github.com/login/oauth/access_token?code=${params.code}&client_id=Iv23liY3pC2GiczyivrF&client_secret=7f28a112d0017ac5c10da0c9b358fee5b535ae95`, {
      method: 'POST',
    })
    const resultParams = new URLSearchParams(await response.text());
    const token = resultParams.get('access_token');
    if (token) {
      localStorage.setItem('jwt', token);
      return redirect('/');
    }
    return Promise.reject(resultParams.get('error'));
  }
  else {
    return redirect('https://github.com/login/oauth/authorize?client_id=Iv23liY3pC2GiczyivrF')
  }
}