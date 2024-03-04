// console.log("test");
const loadPost = async (searchText = "Comedy") => {
  const postres = await fetch(
    `https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`
  );
  const postData = await postres.json();
  const lpost = postData.posts;
  //   console.log(post);
  displayPost(lpost);
};

const displayPost = (lpost) => {
  //   console.log(post);
  // 1
  const postContainer = document.getElementById("post-container");

  // clear post container
  postContainer.textContent = "";

  lpost.forEach((post) => {
    console.log(post);
    // 2 create a post container div
    const postCard = document.createElement("div");
    postCard.classList = `card card-side shadow-xl md:pt-10 md:pl-12`;
    // 3 create html
    postCard.innerHTML = `
    <div class="mt-8 relative">
    <figure>
      <img
        class="w-24 h-24 rounded-3xl"
        src="${post.image}"
        alt="Movie"
      />
    </figure>
  </div>
  <div
    class="w-6 h-6 rounded-full absolute top-6 left-20 md:top-16 md:left-32"
  >${
    post.isActive
      ? "<div class='w-6 h-6 bg-lime-500 rounded-full'></div>"
      : "<div class='w-6 h-6 bg-rose-700 rounded-full'></div>"
  }</div>
  <div class="card-body">
    <div class="flex flex-col md:flex-row md:mr-[500px] mb-2">
      <p class="md:text-xl md:font-bold">#${post.category}</p>
      <p class="md:text-xl md:font-bold">Author: ${post.author.name}</p>
    </div>
    <h2 class="card-title md:text-2xl font-bold mb-4 md:mb-6">
      ${post.title}
    </h2>
    <p
      class="md:text-xl font-medium mr-8 border-b-2 border-gray-900 border-dashed pb-6"
    >
      ${post.description}
    </p>

    <div
      class="flex flex-col md:flex-row justify-between items-center mr-10 gap-3"
    >
      <div
        class="flex flex-col md:flex-row gap-6 md:gap-12 mt-4 md:mt-8"
      >
        <p>
          <i class="fa-regular fa-message"></i> <span>${
            post.comment_count
          }</span>
        </p>
        <p>
          <i class="fa-regular fa-eye"></i> <span>${post.view_count}</span>
        </p>
        <p>
          <i class="fa-regular fa-clock"></i> <span> ${
            post.posted_time
          } </span> Min
        </p>
      </div>
      <button onclick="handleShowRead('${post.title}, ${
      post.view_count
    }')" class="btn rounded-3xl bg-lime-400">
        <i class="fa-regular fa-envelope-open"></i>
      </button>
    </div>
  </div>
    `;
    // 4 append child
    postContainer.appendChild(postCard);
  });

  // hide loading spinner
  toggleLoadingSpinner(false);
};

const handleShowRead = (id) => {
  // console.log("clicked", id);
  // load single phone data
  showRead();
};

const showRead = (post) => {
  // console.log("red");

  const postTitle = document.getElementById("post-title");
  const postRedDiv = document.createElement("p");
  postRedDiv.innerText = "post.title";

  postTitle.appendChild(postRedDiv);

  const postView = document.getElementById("post-view");
  postView.innerText = post.view_count;
};

// handle search button
const handleSearch = () => {
  toggleLoadingSpinner(true);
  const searchField = document.getElementById("search-field");
  const searchText = searchField.value;
  console.log(searchText);
  loadPost(searchText);
};

const toggleLoadingSpinner = (isLoading) => {
  const loadingSpinner = document.getElementById("loading");
  loadingSpinner.classList.remove("hidden");
  if (isLoading) {
    loadingSpinner.classList.remove("hidden");
  } else {
    loadingSpinner.classList.add("hidden");
  }
};

loadPost();

// Latest Posts

const loadPost2 = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  // console.log(data);
  displayPost2(data);
};

const displayPost2 = (data) => {
  // console.log(data);
  const postContainer2 = document.getElementById("post-div");

  // data.forEach((data1) => {
  //   console.log(data1);

  const postDiv2 = document.createElement("div");
  postDiv2.classList = `grid grid grid-cols-4`;
  postDiv2.innerHTML = `<div class="md:bg-slate-100 md:w-[500px] rounded-3xl"><div
    class="pt-6 md:pt-10 pb-6 md:pb-10 rounded-3xl"
  >
    <div class="card w-80 md:w-96 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img
          src="${data[0].cover_image}"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <p>
          <i class="fa-regular fa-calendar-days"></i> ${data[0].author.posted_date}
        </p>
        <p class="text-xl font-bold mb-3">
         ${data[0].title}
        </p>
        <p class="mb-3">
          Yes, you can run unit tests and view the results directly
          within the app.
        </p>
        <div class="card-actions justify-start">
          <div class="w-12 h-12">
            <img class="rounded-3xl"  src="${data[0].profile_image}" alt="" />
          </div>
          <div>
            <p class="text-xl font-bold">${data[0].author.name}</p>
            <p>${data[0].author.designation}</p>
          </div>
        </div>
      </div>
    </div>
  </div></div> `;
  postContainer2.appendChild(postDiv2);
  // });
};

loadPost2();

const loadPost3 = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  // console.log(data);
  displayPost3(data);
};

const displayPost3 = (data) => {
  // console.log(data);
  const postContainer2 = document.getElementById("post-div2");

  // data.forEach((data1) => {
  //   console.log(data1);

  const postDiv3 = document.createElement("div");
  postDiv3.classList = `grid grid grid-cols-4`;
  postDiv3.innerHTML = `<div class="md:bg-slate-100 md:w-[500px] rounded-3xl"><div
    class="pt-6 md:pt-10 pb-6 md:pb-10 rounded-3xl"
  >
    <div class="card w-80 md:w-96 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img
          src="${data[1].cover_image}"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <p>
          <i class="fa-regular fa-calendar-days"></i> ${
            data[1].author.posted_date
          }
        </p>
        <p class="text-xl font-bold mb-3">
         ${data[1].title}
        </p>
        <p class="mb-3">
          Yes, you can run unit tests and view the results directly
          within the app.
        </p>
        <div class="card-actions justify-start">
          <div class="w-12 h-12">
            <img class="rounded-3xl"  src="${data[1].profile_image}" alt="" />
          </div>
          <div>
            <p class="text-xl font-bold">${data[1].author.name}</p>
            <p>${data[1].author?.designation || "Unknown"}</p>
          </div>
        </div>
      </div>
    </div>
  </div></div> `;
  postContainer2.appendChild(postDiv3);
  // });
};

loadPost3();

const loadPost4 = async () => {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/retro-forum/latest-posts"
  );
  const data = await res.json();
  // console.log(data);
  displayPost4(data);
};

const displayPost4 = (data) => {
  // console.log(data);
  const postContainer3 = document.getElementById("post-div3");

  // data.forEach((data1) => {
  //   console.log(data1);

  const postDiv4 = document.createElement("div");
  postDiv4.classList = `grid grid grid-cols-4`;
  postDiv4.innerHTML = `<div class="md:bg-slate-100 md:w-[500px] rounded-3xl"><div
    class="pt-6 md:pt-10 pb-6 md:pb-10 rounded-3xl"
  >
    <div class="card w-80 md:w-96 mx-auto bg-base-100 shadow-xl">
      <figure>
        <img
          src="${data[2].cover_image}"
          alt="Shoes"
        />
      </figure>
      <div class="card-body">
        <p>
          <i class="fa-regular fa-calendar-days"></i> ${
            data[2].author?.posted_date || "No publish date"
          }
        </p>
        <p class="text-xl font-bold mb-3">
         ${data[2].title}
        </p>
        <p class="mb-3">
          Yes, you can run unit tests and view the results directly
          within the app.
        </p>
        <div class="card-actions justify-start">
          <div class="w-12 h-12">
            <img class="rounded-3xl"  src="${data[2].profile_image}" alt="" />
          </div>
          <div>
            <p class="text-xl font-bold">${data[2].author.name}</p>
            <p>${data[2].author.designation}</p>
          </div>
        </div>
      </div>
    </div>
  </div></div> `;
  postContainer3.appendChild(postDiv4);
  // });
};

loadPost4();
