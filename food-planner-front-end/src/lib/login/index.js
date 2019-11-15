const url = 'https://apps.hdap.gatech.edu/newfoodplanner2backend/api/login';

export async function passwordLogin(userName, password) {
  try {
    // const proxyurl = window.location.href.includes('localhost')
    //   ? 'https://cors-anywhere.herokuapp.com/'
    //   : '';

    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        mode: 'no-cors',
        'Access-Control-Allow-Origin': '*'
      },
      body: JSON.stringify({ userName, password })
    });

    const myJson = await response.json();

    //   allergies: "shrimp"
    // conditions: "heartburn"
    // email: "test@test.com"
    // firstName: "test"
    // id: 1
    // lastName: "test"
    // password: "test"
    // userName: "test"

    return myJson && myJson.userName ? myJson : null;
  } catch (e) {
    return null;
  }
}
