const url = 'https://apps.hdap.gatech.edu/newfoodplanner2backend/api/patients';

export async function createAccount(
  firstName,
  lastName,
  email,
  userName,
  password,
  allergies
) {
  try {
    const proxyurl = window.location.href.includes('localhost')
      ? 'https://cors-anywhere.herokuapp.com/'
      : '';

    const userData = {
      firstName,
      lastName,
      email,
      userName,
      password,
      allergies
    };

    const response = await fetch(proxyurl + url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        mode: 'no-cors',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify(userData)
    });

    const myJson = await response.json();

    return myJson && myJson.userName ? myJson : null;
  } catch (e) {
    return null;
  }
}
