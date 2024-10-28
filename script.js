const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];
const cardRow = document.getElementById('card-row')
const formCard = document.getElementById('form-card')

for (let i = 0; i < teamMembers.length; i++) {
  let element = teamMembers[i]
  const card = `
 <div class="bg-dark text-white col-md-6 col-lg-4 mb-3">
  <div class="row g-0">
    <div class="col-4">
      <img src="${element.img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-8">
      <div class="card-body">
        <h5 class="card-title">${element.name}</h5>
        <p class="card-text">${element.role}</p>
        <p class="card-text">${element.email}</p>
      </div>
    </div>
  </div>
</div>`
  cardRow.innerHTML += card
}

formCard.addEventListener('submit' , function (event){
  event.preventDefault()
  const cardName = document.getElementById('card-name')
  const cardRole = document.getElementById('card-role')
  const cardEmail = document.getElementById('card-email')
  const formFile = document.getElementById('form-File')
  cardGenerator(cardName.value,cardRole.value,cardEmail.value,formFile)
})


function cardGenerator (name,rule,email,img){
  const newCard = `
  <div class="bg-dark text-white col-md-6 col-lg-4 mb-3">
   <div class="row g-0">
     <div class="col-4">
       <img src="${img}" class="img-fluid rounded-start" alt="...">
     </div>
     <div class="col-8">
       <div class="card-body">
         <h5 class="card-title">${name}</h5>
         <p class="card-text">${rule}</p>
         <p class="card-text">${email}</p>
       </div>
     </div>
   </div>
 </div>`
   cardRow.innerHTML += newCard
}