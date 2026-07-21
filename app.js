const mobileMenu = document.querySelector(".mobile_page_list");
const mobileMenuBtn = document.querySelector("#mobile_taggole");
const Overlay = document.querySelector(".overlay");
function showMobileMenu() {
  mobileMenu.classList.toggle("active");
  Overlay.classList.toggle("active");
}

document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
    mobileMenu.classList.remove("active");
    Overlay.classList.remove("active");
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth > 650) {
    mobileMenu.classList.remove("active");
    Overlay.classList.remove("active");
  }
});

const AllPlaces = [
  {
    title: "Bali, Indonesis",
    img: "https://images.unsplash.com/photo-1537953773345-d172ccf13cf1",
    price: "$159",
  },
  {
    title: "Santorini, Greece",
    img: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
    price: "$599",
  },
  {
    title: "Switzeriland",
    img: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
    price: "$799",
  },
  {
    title: "Tokyo, Japan",
    img: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf",
    price: "$649",
  },
  {
    title: "maldives",
    img: "https://images.unsplash.com/photo-1573843981267-be1999ff37cd",
    price: "$100",
  },
  {
    title: "paris, france",
    img: "https://images.unsplash.com/photo-1476820865390-c52aeebb9891",
    price: "$108",
  },
  {
    title: "new york, USA",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c",
    price: "$500",
  },
  {
    title: "dubai , UAE",
    img: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1200&q=80",
    price: "$599",
  },
  {
    title: "Cappadocia , Turkey",
    img: "https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=1200&q=80",
    price: "$059",
  },
  {
    title: "Sydney, Australia",
    img: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?auto=format&fit=crop&w=1200&q=80",
    price: "$199",
  },
  {
    title: "Ladakh, India",
    img: "https://images.unsplash.com/photo-1548013146-72479768bada?auto=format&fit=crop&w=1200&q=80",
    price: "$544",
  },
  {
    title: "Iceland",
    img: "https://images.unsplash.com/photo-1504829857797-ddff29c27927?auto=format&fit=crop&w=1200&q=80",
    price: "$1099",
  },
  {
    title: "Rome, Italy",
    img: "https://images.unsplash.com/photo-1529260830199-42c24126f198?auto=format&fit=crop&w=1200&q=80",
    price: "$251",
  },
  {
    title: "Tailand",
    img: "https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=1200&q=80",
    price: "$881",
  },
];
const DestinationPlaces = document.querySelector(".destinations_places_grid");
const Destinationslider = document.querySelector(".destinations_slider");
if (DestinationPlaces && Destinationslider) {
  AllPlaces.slice(0, 4).forEach((place) => {
    const placeElement = document.createElement("div");
    placeElement.classList.add("popular_des_place");
    placeElement.setAttribute("title", place.title);
    placeElement.innerHTML = `
      <img
        src="${place.img}"
        alt="${place.title}"
        />
          <h5>${place.title}</h5>
          <p>from <span>${place.price}</span></p>
      </div>
`;
    Destinationslider.appendChild(placeElement);
  });

  const places = AllPlaces.forEach((place) => {
    const placeElement = document.createElement("div");
    placeElement.classList.add("popular_des_place");
    placeElement.setAttribute("title", place.title);
    placeElement.innerHTML = `
      <img
        src="${place.img}"
        alt="${place.title}"
        />
          <h5>${place.title}</h5>
          <p>from <span>${place.price}</span></p>
      </div>
`;
    DestinationPlaces.appendChild(placeElement);
  });
}
const signupForm = document.querySelector("#signup_form");
const signupInput = document.querySelectorAll(".signup_form_input");
const errorMSGs = document.querySelectorAll(".errorMSG");
const terms = document.querySelector("#signup_terms");
const users = JSON.parse(localStorage.getItem("users")) || [];

if (signupForm) {
  signupForm.addEventListener("submit", (e) => {
    let isValid = true;

    signupInput.forEach((input, index) => {
      if (input.value.trim() === "") {
        errorMSGs[index].textContent = "This field is required";
        isValid = false;
      }
      if (!terms.checked) {
        errorMSGs[4].textContent = "Please read and accept our terms";
      } else {
        errorMSGs[index].textContent = "";
      }
      input.addEventListener("input", () => {
        errorMSGs[index].textContent = "";
      });
      terms.addEventListener("change", () => {
        errorMSGs[4].textContent = "";
      });
    });

    if (signupInput[2].value.trim() !== signupInput[3].value.trim()) {
      errorMSGs[3].textContent = "Password do not match";
      isValid = false;
    }
    if (!isValid) {
      e.preventDefault();
    } else {
      e.preventDefault();

      const userdata = {
        name: signupInput[0].value,
        email: signupInput[1].value,
        password: signupInput[2].value,
      };
      users.push(userdata);
      localStorage.setItem("users", JSON.stringify(users));
      alert("signup succesfull!!");
      errorMSGs.forEach((errormsg, index) => {
        errorMSGs[index].textContent = "";
      });
      window.location.href = "login.html";
    }
  });
}

// Login Form
const loginForm = document.querySelector("#login_form");
const loginGmail = document.querySelector("#login_email");
const loginpassword = document.querySelector("#login_pass");
const loginErrorMSGs = document.querySelectorAll(".login_errorMSG");

if (loginForm) {
  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let isValid = true;
    if (loginGmail.value.trim() === "") {
      loginErrorMSGs[0].textContent = "Email is Required";
      isValid = false;
    }
    if (loginpassword.value === "") {
      loginErrorMSGs[1].textContent = "Password is Required";
      isValid = false;
    }
    if (!isValid) return;
    const user = users.find(
      (user) => user.email === loginGmail.value.trim().toLowerCase(),
    );

    if (!user) {
      loginErrorMSGs[0].textContent = "Email not found";
      return;
    }
    if (user.password !== loginpassword.value.trim()) {
      loginErrorMSGs[1].textContent = "Incorrect Password";
      return;
    }
    document.querySelector("#logSucmsg").style.display = "block";
    if (user) {
      setTimeout(() => {
        document.querySelector("#logSucmsg").style.display = "none";
        window.location.href = "index.html";
      }, 2000);
    }
  });
}
if (loginGmail && loginpassword) {
  loginGmail.addEventListener("input", () => {
    loginErrorMSGs[0].textContent = "";
  });
  loginpassword.addEventListener("input", () => {
    loginErrorMSGs[1].textContent = "";
  });
}
