// *** job array create!

const jobs = [
    { id: 1, company: "Google", position: "Frontend Developer", location: "Remote", type: "Full-Time", salary: "$120k", description: "Build scalable UI systems.", status: "all" },
    { id: 2, company: "Microsoft", position: "Backend Engineer", location: "USA", type: "Full-Time", salary: "$115k", description: "Develop cloud APIs and services.", status: "all" },
    { id: 3, company: "Tesla", position: "UI Developer", location: "California", type: "On-site", salary: "$110k", description: "Car dashboard interfaces.", status: "all" },
    { id: 4, company: "Amazon", position: "Full Stack Developer", location: "Seattle", type: "Full-Time", salary: "$125k", description: "E-commerce system development.", status: "all" },
    { id: 5, company: "Netflix", position: "React Developer", location: "Remote", type: "Contract", salary: "$100k", description: "Streaming platform features.", status: "all" },
    { id: 6, company: "Airbnb", position: "JavaScript Engineer", location: "Remote", type: "Full-Time", salary: "$105k", description: "Booking platform improvements.", status: "all" },
    { id: 7, company: "Spotify", position: "Web Engineer", location: "Sweden", type: "Full-Time", salary: "$95k", description: "Music streaming UI features.", status: "all" },
    { id: 8, company: "Meta", position: "Frontend Engineer", location: "USA", type: "Full-Time", salary: "$130k", description: "Social platform UI systems.", status: "all" },
];


let currentTab = "all";

// *** GET HTML Element  with id
const container = document.getElementById("jobsContainer");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const sectionCount = document.getElementById("sectionCount");
const emptyState = document.getElementById("emptyState");


function renderJobs() {
    container.innerHTML = "";
    const filtered = jobs.filter(job => currentTab === "all" ? true : job.status === currentTab);


    sectionCount.innerText = filtered.length + " Jobs";

    if (filtered.length === 0) {
        emptyState.classList.remove("hidden");
    } else {
        emptyState.classList.add("hidden");
    }

    // create card
    filtered.forEach(job => {
        const div = document.createElement("div");
        div.className = "relative border border-gray-200 p-5 rounded-xl bg-white hover:shadow-md transition";


        div.innerHTML = `
      <button onclick="deleteJob(${job.id})"
        class="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-lg">
        <i class="fa-regular fa-trash-can"></i>
      </button>

      <h3 class="font-semibold text-lg text-slate-800">${job.company}</h3>
      <p class="text-sm text-gray-500 mb-1">${job.position}</p>

      <p class="text-sm text-gray-600 mb-2">
        ${job.location} • ${job.type} • ${job.salary}
      </p>

      ${job.status === "all"
                ? `<span class="inline-block bg-blue-100 text-blue-600 text-xs px-2 py-1 rounded mb-2">NOT APPLIED</span>`
                : job.status === "interview"
                    ? `<span class="inline-block bg-emerald-100 text-emerald-600 text-xs px-2 py-1 rounded mb-2">INTERVIEW</span>`
                    : `<span class="inline-block bg-red-100 text-red-600 text-xs px-2 py-1 rounded mb-2">REJECTED</span>`
            }

      <p class="text-sm text-gray-500 mb-4">${job.description}</p>

      <div class="flex gap-3">
        <button onclick="updateStatus(${job.id}, 'interview')"
          class="bg-emerald-100 text-emerald-600 text-xs px-3 py-1 rounded hover:bg-emerald-200 transition">
          INTERVIEW
        </button>

        <button onclick="updateStatus(${job.id}, 'rejected')"
          class="bg-red-100 text-red-600 text-xs px-3 py-1 rounded hover:bg-red-200 transition">
          REJECTED
        </button>
      </div>
    `;
        container.appendChild(div);
    });

    updateDashboard();
}

// Update Job

function updateStatus(id, status) {
    const job = jobs.find(j => j.id === id);
    job.status = job.status === status ? "all" : status;
    renderJobs();
}

// Delete job

function deleteJob(id) {
    const index = jobs.findIndex(j => j.id === id);
    jobs.splice(index, 1);
    renderJobs();
}

// Update Dashboard
function updateDashboard() {
    totalCount.innerText = jobs.length;
    interviewCount.innerText = jobs.filter(j => j.status === "interview").length;
    rejectedCount.innerText = jobs.filter(j => j.status === "rejected").length;
}

//Click Events

document.querySelectorAll(".tab").forEach(tab => {
    tab.addEventListener("click", function () {
        document.querySelectorAll(".tab").forEach(t => {
            t.classList.remove("bg-indigo-600", "text-white");
            t.classList.add("bg-gray-200", "text-gray-700");
        });

        this.classList.remove("bg-gray-200", "text-gray-700");
        this.classList.add("bg-indigo-600", "text-white");

        currentTab = this.dataset.tab;
        renderJobs();
    });
});
renderJobs();
