const navBtn = document.getElementById('nav-btn');
const cancelBtn = document.getElementById('cancel-btn');
const sideNav = document.getElementById('sidenav');
const modal = document.getElementById('modal');
let searchValue = "";
let currentPage = 1;


navBtn.addEventListener("click", function(){
    sideNav.classList.add('show');
    modal.classList.add('showModal');
});

cancelBtn.addEventListener('click', function(){
    sideNav.classList.remove('show');
    modal.classList.remove('showModal');
});

window.addEventListener('click', function(event){
    if(event.target === modal){
        sideNav.classList.remove('show');
        modal.classList.remove('showModal');
    }
});

let inpSearch = document.getElementById("inpSearch");
let btnSearch = document.getElementById("btnSearch");

inpSearch.addEventListener("change", (e) => {
  searchValue = e.target.value;
  readTrips();
});

// !=======paginate
let prevBtn = document.getElementById
("prevBtn");
let nextBtn = document.getElementById
("nextBtn");


prevBtn.addEventListener("click", () => {
  currentPage--; 
  readTrips()
});

nextBtn.addEventListener("click", () => {
    currentPage++;
    readTrips();
})


