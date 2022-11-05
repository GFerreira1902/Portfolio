function CopiarEmail(){

    const inputValue = 'devguirrer@gmail.com'
    

    Swal.fire({
        background: 'rgb(128,128,128)',
        color: 'white',
        icon: 'info',
        title: 'Copie Meu Email Para Entrar Em Contato !!',
        html: `
            <input
            type="text"
            value="${inputValue}"
            class="swal2-input"
            id="email"
            readonly>`,
        showCancelButton: true,
        cancelButtonText: 'Fechar',
        cancelButtonColor: 'black',
        confirmButtonText: 'Sim, Copiar!!',
        showClass: {
            popup: 'animate__animated animate__rollIn'
        },
        hideClass: {
            popup: 'animate__animated animate__rollOut'
        }
        
    }).then((result) => {
        if (result.isConfirmed) {

            let textoCopiado = document.getElementById("email");
            textoCopiado.select();
            textoCopiado.setSelectionRange(0, 99999)
            document.execCommand("copy");

            Swal.fire({
                
                icon : 'success',
                title: 'Email Copiado Com Sucesso !!',
                background: 'rgb(128,128,128)',
                color: 'white',
            }
          )
        
    }})

}


