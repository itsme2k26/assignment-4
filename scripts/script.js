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

const container = document.getElementById("jobsContainer");
const totalCount = document.getElementById("totalCount");
const interviewCount = document.getElementById("interviewCount");
const rejectedCount = document.getElementById("rejectedCount");
const sectionCount = document.getElementById("sectionCount");
const emptyState = document.getElementById("emptyState");

