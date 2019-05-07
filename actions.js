fetch("https://randomuser.me/api/?results=21").then((response) =>{
    return response.json();
})
.then((response) => {
    let containerCharaters = document.getElementById('characters');
    
    response.results.map(person => {
        let card = document.createElement('div');
        card.classList.add('user');

        let imagePerson = document.createElement('img');
        imagePerson.classList.add('userImage');
        imagePerson.classList.add('marginUser');
        imagePerson.src= person.picture.medium;

        let namePerson = document.createElement('span');
        namePerson.classList.add('userName');
        namePerson.classList.add('marginUser');
        namePerson.innerHTML = person.name.first;

        let genderPerson = document.createElement('span');
        genderPerson.classList.add('userGender');
        genderPerson.classList.add('marginUser');
        genderPerson.innerHTML = person.gender;

        let agePerson = document.createElement('span');
        agePerson.classList.add('userAge');
        agePerson.classList.add('marginUser');
        agePerson.innerHTML = person.dob.age;

        let addressPerson = document.createElement('span');
        addressPerson.classList.add('userAddress');
        addressPerson.classList.add('marginUser');
        addressPerson.innerHTML = person.location.city;

        let phonePerson = document.createElement('span');
        phonePerson.classList.add('userPhone');
        phonePerson.classList.add('marginUser');
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
