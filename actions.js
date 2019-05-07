let containerCharaters = document.getElementById('characters');

fetch("https://randomuser.me/api/?results=20").then((response) =>{
    return response.json();
})
.then((response) => {
    let card = document.createElement('div');
    card.classList.add('user');
    response.results.map(person => {
        const imagePerson = document.createElement('img');
        imagePerson.classList.add('userImage marginUser');
        imagePerson.src= person.picture.medium;
        const namePerson = document.createElement('span');
        namePerson.classList.add('userName marginUser');
        namePerson.innerHTML = person.name.first;
        const genderPerson = document.createElement('span');
        genderPerson.classList.add('userGender marginUser');
        genderPerson.innerHTML = person.gender;
        const agePerson = document.createElement('span');
        agePerson.classList.add('userAge marginUser');
        agePerson.innerHTML = person.dob.age;
        const addressPerson = document.createElement('span');
        addressPerson.classList.add('userAddress marginUser');
        addressPerson.innerHTML = person.location.city;
        const phonePerson = document.createElement('span');
        phonePerson.classList.add('userPhone marginUser');
        phonePerson.innerHTML = person.phone;
        
        containerCharaters.appendChild(card);
        card.appendChild(imagePerson); 
        card.appendChild(namePerson)
        card.appendChild(genderPerson);
        card.appendChild(agePerson);
        card.appendChild(addressPerson);
        card.appendChild(phonePerson);
   })
})
.catch(err => console.log(err.message));
