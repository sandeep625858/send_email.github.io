const btn=document.getElementById('btn');
btn.addEventListener('click',()=>{
    const email=document.getElementById('Email1').value;
    console.log(email);
    const message=document.getElementById('message').value;
    console.log(message);
    const user=document.getElementById('username1').value;
    console.log(user);
    const phone=document.getElementById('Phone1').value;
    console.log(phone);
    Email.send({
        Host : "smtp.mailtrap.io",
        Username : "322b6ccfc33c5b",
        Password : "3be036b2a149b1",
        To : 'sandeep625858@gmail.com',
        From : JSON.stringify(email),
        Subject : "Email from"+JSON.stringify(user)+" Having Ph.No."+JSON.stringify(phone),
        Body : JSON.stringify(message)
    }).then(
      message => alert("The email successfully sent")
    )
});