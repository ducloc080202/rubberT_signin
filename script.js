const form=document.getElementById('login_form');
const account=document.getElementById('account');
const password=document.getElementById('password');
const error=document.getElementById('error');

form.addEventListener('submit',(e)=>{
    let messages=[]
    if(account.value===''|| account.value===null){
        messages.push('Vui lòng nhập tài khoản')
    }
    if(password.value===''|| password.value===null){
        messages.push('Vui lòng nhập mật khẩu')
    }
    if(messages.length >0){
        e.preventDefault()
        error.innerText=messages[0]
    }
})

