const submitButton = document.querySelector('.btn');
submitButton.addEventListener('click', (e) => {
    e.preventDefault();

    const fname = document.getElementById('fname').value;
    const email = document.getElementById('email').value;
    const age = document.getElementById('age').value;
    const select = document.getElementById('select').value;
    const check = document.getElementById('check').checked;

    let formData = {
        fname: '',
        email: '',
        age: '',
        select: '',
        check: ''
    };

    if (!fname || !email || !age || !select || !check)
    {
        alert("Töltse ki a mezőket!")
    }
    if (fname || email || age || select || check)
    {
        formData.fname = fname;
        formData.email = email;
        formData.age = age;
        formData.select = select;
        formData.check = check;
    }

    

    for (const [key, value] of Object.entries(formData))
    {
        console.log(`${key}: ${value}`);
    }
})

