function toggleMenu(){
    const menu = document.querySelector(".menu-links")
    const icon = document.querySelector(".ham-icon")
    menu.classList.toggle("open")
    icon.classList.toggle("open")
}

function validateForm() {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    if (!name || !email) {
      alert("Please fill in all fields.");
      return false;
    }
  
    // Additional validation logic can be added
  
    return true;
  }