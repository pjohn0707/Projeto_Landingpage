let button = document.getElementById("Enviar");

button.onclick = async function(e) {
    e.preventDefault();
    let nome       = document.getElementById("inputname").value;
    let email      = document.getElementById("inputemail").value;

    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    let result = reg.test(email);
    console.log(result);

    if (result) {

        let data       = {nome,email}
    
        const response = await fetch('http://localhost:3003/api/store/task',{
            method: "POST",
            headers: {"Content-type": "application/json;charset=UTF-8"},
            body: JSON.stringify(data)
        });
    
        let content = await response.json();
    
        if(content.success) {
            swal({
                title: "Parabéns!",
                text: "Você foi cadastrado com sucesso!",
                icon: "success",
              });
        } else {
            alert('Não');
        }
    } else {
        alert("Informe um email válido");
    }

}