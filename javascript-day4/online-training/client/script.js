let courses = document.querySelector("#courses");

// Load data
async function loadData() {
  const res = await fetch("http://localhost:3000/courses");
  let allCourses = await res.json();
  showCourses(allCourses);
}

// Adding elements on Dom
function showCourses(allCourses) {
  allCourses.forEach((el) => {
    let div = document.createElement("div");
    div.setAttribute("class", "card col-4");
    div.setAttribute("id", el.id);

    // Image
    let image = document.createElement("img");
    image.setAttribute("src", el.imageUrl);
    div.appendChild(image);

    // Ratings
    let rating = document.createElement("p");
    for (let i = 1; i <= el.rating; i++) {
      let star = document.createElement("i");
      star.setAttribute("class", "fa-solid fa-star");
      rating.appendChild(star);
    }
    div.appendChild(rating);

    // Name
    let name = document.createElement("p");
    name.innerText = el.name;
    div.appendChild(name);

    // Price
    let price = document.createElement("p");
    price.innerText = el.price;
    div.appendChild(price);

    // Button Container
    let btnContainer = document.createElement("div");
    div.appendChild(btnContainer);

    // Like Button
    let likeBtn = document.createElement("button");
    likeBtn.setAttribute("class", "btn btn-primary");
    likeBtn.innerHTML = `<i class="fa-solid fa-thumbs-up"></i> ${el.likes}`;
    btnContainer.appendChild(likeBtn);

    // Delete Button
    let deleteBtn = document.createElement("button");
    deleteBtn.setAttribute("class", "btn btn-danger mx-2");
    deleteBtn.setAttribute("id", el.id);
    deleteBtn.addEventListener("click", () => deleteCourse(el.id));
    deleteBtn.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    btnContainer.appendChild(deleteBtn);

    courses.appendChild(div);
  });
}

// Deleting from Dom -> fetch API
async function deleteCourse(id) {
  let jsonResponse = await fetch(`http://localhost:3000/courses/${id}`, {
    method: "DELETE",
  });
  let res = await jsonResponse.json();
  if (res.success) {
    document.getElementById(id).remove();
  }
}
// OnLoad
loadData();
