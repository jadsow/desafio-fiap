async function enviarForm() {
  let nome = document.querySelector("#nome").value;
  let historia = document.querySelector("#historia").value;

  let form = {
    names: [nome],
    message: historia,
  };

  try {
    const data = await fetch("https://fsdt-contact.onrender.com/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    if (data.ok) {
      document.querySelector("#nome").value = "";
      document.querySelector("#historia").value = "";
    } else {
      console.log("erro");
    }
  } catch (error) {
    console.error(error);
  }
}
