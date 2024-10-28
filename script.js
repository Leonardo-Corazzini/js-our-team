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

for(let i = 0; i < teamMembers.length;i++){
 let element = teamMembers[i]
  const card =`
  <div class="col-4 row">
    <div class="col-4">
      <img src="${element.img}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-8">
      <h5 class="card-title">${element.name}</h5>
      <p class="card-text">${element.role}</p>
      <p class="card-text">${element.email}</p>
    </div>

  </div>`
  cardRow.innerHTML += card
}
