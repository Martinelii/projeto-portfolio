const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

formulario.addEventListener('submit', function(event){

    event.preventDefault();

    const campoNome = document.querySelector('#name');
    const txtName = document.querySelector('#txtNome');

    if (campoNome.value.length < 3){
        txtName.innerHTML = 'O nome deve ter no mínimo 3 caracteres';
        campoNome.style.borderColor = 'red';
        campoNome.focus();
        return;
    }else{
        campoNome.style.borderColor = 'black';
        txtName.innerHTML = '';
    }

    const campoEmail = document.querySelector('#email');
    const txtEmail = document.querySelector('#txtEmail');

    if(!campoEmail.value.match(emailRegex)){
        txtEmail.innerHTML = 'Digite um E-mail válido.'
        campoEmail.style.borderColor = 'red';
        campoEmail.focus();
        return;
    }else{
        campoEmail.style.borderColor = 'black';
        txtEmail.innerHTML ='';
    }

    const campoSubject = document.querySelector('#subject');
    const txtSubject = document.querySelector('#txtSubject');
  
    if (campoSubject.value.length < 5) {
      txtSubject.innerHTML = 'O Assunto deve ter no minimo 5 caracteres.';
      campoSubject.style.borderColor = 'red'
      campoSubject.focus();
      return;
    }else{
        campoSubject.style.borderColor = 'black'
        txtSubject.innerHTML = '';
    }


    const campoMensagem = document.querySelector('#message');

    window.alert("Formulário Enviado com Sucesso!")
    
    campoNome.value = '';
    campoEmail.value = '';
    campoSubject.value = '';
    campoMensagem.value = '';

});
