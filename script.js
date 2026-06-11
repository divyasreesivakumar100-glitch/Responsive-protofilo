function login() {
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;

  if (name && email) {
    document.getElementById("loginPage").style.display = "none";
    document.getElementById("dashboard").classList.remove("hidden");

    loadJobs();
  } else {
    alert("Enter name and email");
  }
}

function loadJobs() {
  let jobs = [
    "Frontend Developer",
    "Backend Developer",
    "Full Stack Developer",
    "UI/UX Designer",
    "Data Analyst",
    "Python Developer",
    "Java Developer",
    "AI Engineer",
    "Marketing Executive",
    "HR Manager"
  ];

  let list = document.getElementById("jobList");

  jobs.forEach(job => {
    let div = document.createElement("div");
    div.className = "card";

    div.innerHTML = `
      <span>${job}</span>
      <button onclick="applyJob('${job}')">Apply</button>
    `;

    list.appendChild(div);
  });
}

function applyJob(job) {
  document.getElementById("msg").innerHTML = `
    <div style="background:white;padding:10px;border-left:5px solid #00a86b;margin-top:10px">
      📩 Application sent for <b>${job}</b><br><br>
      <button onclick="confirmJob('${job}')">Confirm</button>
    </div>
  `;
}

function confirmJob(job) {
  document.getElementById("msg").innerText =
    "✅ Confirmed! Application submitted for " + job;
}