const header = {
    "Content-Type": "application/json",
    Accept: "application/json",
    "X-App-Name": "My Custom App",
    "X-App-Version": "0.2.1",
    "X-App-Host": ".NET Framework 4.8",
    "X-App-Lang": "C#",
    "X-App-Url": "https://example.com",
  };
  const url = `https://api.collivery.co.za/v3/login`;
form.onsubmit = async function (e) {
    e.preventDefault(); 
   
    const result = await Promise.allSettled([
      fetch(url, {
        method: "POST",
        headers: header,
        body: JSON.stringify({
            email: document.form.email.value,
            password: document.form.password.value,
        }),
      })
        .then((response) => response.json())
        .then((res) => {
         localStorage.setItem("api_token", res.data.api_token);
          console.log(res);
          location.href='courier.html';
        })
    ]).catch((err) => {
      console.log(err);
    });
  };