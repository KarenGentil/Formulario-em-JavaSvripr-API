function sendMail() {
    let params = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        message: document.getElementById('message').value,
    };


    const serviceID = "service_z6eupwz";
    const templateID = "template_89pq83j";

    emailjs.send(serviceID, templateID, params).then((res) => {
            document.getElementById('name').value = "";
            document.getElementById('email').value = "";
            document.getElementById('phone').value = "";
            document.getElementById('message').value = "";
            console.log(res);
            alert('Sua mensagem foi enviada com sucesso');
        })
        .catch((err) => console.log(err));
}