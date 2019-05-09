
let containerCharaters;
fetch("https://randomuser.me/api/?results=21").then((response) =>{
    return response.json();
})
.then((response) => {
    console.log(response); 
    renderProfiles = () => {    
    containerCharaters = document.getElementById('characters');
    containerCharaters.innerHTML = '';
    response.results.map(person => {
        let card = document.createElement('div');
        card.classList.add('user');
        card.setAttribute('id',`${person.login.uuid}`);
        card.onclick = function(){detailsProfile(person.login.uuid)};
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
        

        detailsProfile = (idProfileSelected) => {
            const profileSelected = document.querySelectorAll('.user');
                profileSelected.forEach(function (cardProfile) {
                if(cardProfile.id === idProfileSelected){
                containerCharaters.innerHTML = '';
                containerCharaters.appendChild(cardProfile);
                cardProfile.appendChild(genderPerson);
                cardProfile.appendChild(agePerson);
                cardProfile.appendChild(addressPerson);
                cardProfile.appendChild(phonePerson);
                console.log(profileSelected ,'i clicked the userprofile');
                }
            });
            
        };
   })}
   renderProfiles();
})
.catch(err => console.log(err.message));

const buttonProfilesRender = document.getElementById('profiles');
buttonProfilesRender.onclick = function(){renderProfiles()};