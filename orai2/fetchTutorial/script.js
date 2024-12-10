const newUser = {
    name: 'Maria',
    job: 'Teacher'
};

fetch('https://reqres.in/api/uers/55', {
    method: 'PUT',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(newUser)
}).then(res => {
    if(!res.ok){
        console.log('Problem');
        return;
    }

    return res.json();
})
.then(data => {
    console.log('Success');
})
.catch(error => {
    console.log(error);
});