let nav_list = document.querySelector(".nav_ul");
let manue = document.querySelector(".manu");
let first_page = document.querySelector(".first_page");
let mobile_header = "url('images/mobile/image-header.jpg')";
let desktop_header = "url('images/desktop/image-header.jpg')";
let manu_bar = document.getElementById("manu_bar");

document.addEventListener("DOMContentLoaded", function () {
  let UL_display = () => {
    if (window.innerWidth <= 639) {
      nav_list.style.display = "none";
      manue.style.display = "block";
      first_page.style.backgroundImage = mobile_header;
    } else {
      nav_list.style.display = "flex";
      manue.style.display = "none";
      first_page.style.backgroundImage = desktop_header;
    }
  };

  UL_display();

  window.addEventListener("resize", () => {
    UL_display();
  });
});

// manu display system

manu_bar.addEventListener("click", () => {
  if ((nav_list.style.display === "none")) {
    nav_list.style.display = "flex";
  }
  else if(nav_list.style.display = "flex"){
    nav_list.style.display = "none";
  }
});
