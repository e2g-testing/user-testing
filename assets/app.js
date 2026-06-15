const courseTabs = ["Current", "Upcoming", "Previous"];

const icons = {
  launch:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 7h8v8"/><path d="M17 7 9 15"/><path d="M12 5H7a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-5"/></svg>',
  time:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><path d="M12 8v5l3 2"/><path d="M19 19l2 2"/></svg>',
  support:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 8h16v8H4z"/><path d="M8 8a4 4 0 0 1 8 0"/><path d="M8 16a4 4 0 0 0 8 0"/><path d="M10 12h4"/></svg>',
  report:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M7 3h7l3 3v15H7z"/><path d="M14 3v4h4"/><path d="M10 17v-4"/><path d="M13 17v-7"/><path d="M16 17v-2"/></svg>',
  chart:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 19V5"/><path d="M4 19h16"/><path d="M8 16v-5"/><path d="M12 16V8"/><path d="M16 16v-3"/></svg>',
  briefcase:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1"/><path d="M4 8h16v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/><path d="M4 12h16"/></svg>',
  phone:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M22 16.9v2.4a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.4 19.4 0 0 1-6-6 19.8 19.8 0 0 1-3.1-8.6A2 2 0 0 1 4.1 1.4h2.4a2 2 0 0 1 2 1.7c.1.9.4 1.8.7 2.6a2 2 0 0 1-.5 2.1L7.7 8.9a16 16 0 0 0 6 6l1.1-1.1a2 2 0 0 1 2.1-.5c.8.3 1.7.6 2.6.7a2 2 0 0 1 1.7 2z"/></svg>',
  search:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="m16 16 5 5"/></svg>',
  certificate:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 4h14v12H5z"/><path d="M9 8h6"/><path d="M9 12h4"/><path d="M12 16v5l3-2 3 2v-5"/></svg>',
  calendar:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 5h14v15H5z"/><path d="M8 3v4"/><path d="M16 3v4"/><path d="M5 9h14"/></svg>',
};

const prototypes = {
  current: {
    selected: "Current",
    eyebrow: "Current Courses",
    intro: null,
    courses: [
      {
        title: "Pharmacy Technician (Voucher Included)",
        school: "Blue Ridge Community College",
        image: "photo-pharmacy",
        imageLabel: "Pharmacy technician standing in a pharmacy aisle",
        meta: [
          ["Access Dates", "Oct 31 2025 - Jul 31 2026"],
          ["Instructor", "Sharon Blackford"],
        ],
        utility: { label: "Progress Tracker", icon: "chart" },
        actions: [
          { label: "Launch", icon: "launch", primary: true },
          { label: "Log My Time", icon: "time" },
          { label: "Course Support", icon: "support" },
        ],
      },
      {
        title: "Start a Pet Sitting Business",
        school: "",
        image: "photo-pet",
        imageLabel: "Student sitting outside with dogs",
        meta: [["Access Dates", "Dec 23 2025 - Mar 23 2026"]],
        actions: [
          { label: "Launch", icon: "launch", primary: true },
          { label: "Report", icon: "report" },
          { label: "Course Support", icon: "support" },
        ],
      },
    ],
    resources: [
      {
        title: "Get Career Ready",
        badge: "Optional",
        image: "photo-career",
        imageLabel: "Professional learner standing in an office atrium",
        meta: [["Access Dates", "Oct 31 2025 - Jul 31 2026"]],
        actions: [
          { label: "Launch", icon: "launch", primary: true },
          { label: "Report", icon: "report" },
          { label: "Course Support", icon: "support" },
        ],
      },
    ],
  },
};

function icon(name) {
  return icons[name] || "";
}

function actionButton(action) {
  const classes = action.primary ? "button button--primary" : "button";
  return `<button class="${classes}" type="button">${icon(action.icon)}<span>${action.label}</span></button>`;
}

function metaRows(meta) {
  return meta
    .map(
      ([label, value]) =>
        `<div class="course-meta__group"><dt>${label}</dt><dd>${value}</dd></div>`,
    )
    .join("");
}

function courseCard(course) {
  const school = course.school
    ? `<a href="#" class="course-card__school">${course.school}</a>`
    : "";
  const utility = course.utility
    ? `<button class="button course-card__utility" type="button">${icon(course.utility.icon)}<span>${course.utility.label}</span></button>`
    : "";
  const badge = course.badge ? `<span class="badge">${course.badge}</span>` : "";

  return `
    <article class="course-card">
      <div class="course-card__header">
        <div>
          <h3>${course.title}</h3>
          ${school}
        </div>
        ${utility}
        ${badge}
      </div>
      <div class="course-card__body">
        <div class="course-visual ${course.image}" role="img" aria-label="${course.imageLabel}"></div>
        <dl class="course-meta">
          ${metaRows(course.meta)}
        </dl>
      </div>
      <div class="course-card__actions">
        ${course.actions.map(actionButton).join("")}
      </div>
    </article>
  `;
}

function sideNav(selected) {
  return `
    <aside class="side-rail" aria-label="Student Center navigation">
      <section class="side-card side-card--nav">
        <h2>Your Courses</h2>
        <nav class="course-tabs" aria-label="Course status">
          ${courseTabs
            .map((label) => {
              const current = label === selected ? 'aria-current="page"' : "";
              return `<a ${current} href="#courses-heading">${label}</a>`;
            })
            .join("")}
        </nav>
      </section>
      <section class="side-card">
        <h2>Career Resources</h2>
        <p>Access resources to help you in your chosen career.</p>
        <a href="#" class="side-link">${icon("briefcase")}<span>Virtual Career Center</span></a>
      </section>
      <section class="side-card">
        <h2>Get Support</h2>
        <p>Need help? We've got you covered.</p>
        <a href="tel:18664415454" class="side-link">${icon("phone")}<span>Call Us: 1-866-441-5454</span></a>
      </section>
    </aside>
  `;
}

function header() {
  return `
    <header class="site-header">
      <div class="site-header__inner">
        <a href="../" class="brand" aria-label="ed2go prototypes home">
          <span class="logo-mark" aria-hidden="true">e</span>
          <span class="logo-word"><strong>ed</strong><span>2</span><strong>go</strong></span>
        </a>
        <nav class="top-nav" aria-label="Primary">
          <a href="#">Explore Courses</a>
          <a href="#">Resources</a>
        </nav>
        <div class="header-actions">
          <a href="#">Account</a>
          <button type="button" aria-label="Search">${icon("search")}</button>
          <div class="contact">
            <span>Contact Us</span>
            <a href="tel:18664415454">866-441-5454</a>
          </div>
        </div>
      </div>
    </header>
  `;
}

function footer() {
  const courseLinks = [
    "Arts and Design",
    "Beauty Trades",
    "Business",
    "Computer Applications",
    "Computer Science",
    "Construction and Trades",
    "Health and Fitness",
    "Hospitality",
    "Information Technology",
    "Language",
    "Legal",
    "Math and Science",
    "Teacher Professional Development",
    "Test Prep",
    "Writing",
  ];
  const resourceLinks = [
    "About ed2go",
    "Find a School",
    "Help",
    "Careers",
    "Partner With Us",
    "Corporate Training",
    "Cybersecurity Training",
    "Blog",
    "Teach With Us",
    "Advanced Career Training Student Agreement",
  ];

  return `
    <footer class="site-footer">
      <div class="site-footer__inner">
        <div class="footer-column footer-column--wide">
          <h2>Courses</h2>
          ${courseLinks.map((item) => `<a href="#">${item}</a>`).join("")}
        </div>
        <div class="footer-column">
          <h2>Taking ed2go Courses</h2>
          <a href="#">Financial Assistance</a>
          <a href="#">MyCAA</a>
        </div>
        <div class="footer-column">
          <h2>Connect</h2>
          <div class="socials" aria-label="Social links">
            <a href="#" aria-label="Facebook">f</a>
            <a href="#" aria-label="YouTube">YT</a>
            <a href="#" aria-label="LinkedIn">in</a>
          </div>
          <h2>Resources</h2>
          ${resourceLinks.map((item) => `<a href="#">${item}</a>`).join("")}
        </div>
        <div class="footer-legal">
          <div class="footer-logo">
            <span class="logo-mark" aria-hidden="true">e</span>
            <span class="logo-word"><strong>ed</strong><span>2</span><strong>go</strong></span>
          </div>
          <a href="#">Cengage Learning</a>
          <a href="#">Copyright Notices</a>
          <a href="#">Terms of Use</a>
          <a href="#">Privacy Statement</a>
          <a href="#">Accessibility</a>
          <p>&copy; 2025 ed2go, a division of Cengage Learning. All rights reserved. The material on this site cannot be reproduced or redistributed unless you have obtained prior written permission from Education To Go. Education To Go and ed2go are registered trademarks of Education To Go, a part of Cengage Learning.</p>
        </div>
      </div>
    </footer>
  `;
}

function render() {
  const key = document.body.dataset.prototype || "current";
  const data = prototypes[key] || prototypes.current;
  const intro = data.intro ? `<p class="section-copy">${data.intro}</p>` : "";

  document.getElementById("app").innerHTML = `
    ${header()}
    <main class="student-center">
      <div class="student-center__inner">
        ${sideNav(data.selected)}
        <section class="main-content">
          <h1>Welcome, Jane!</h1>
          <section class="content-section" aria-labelledby="courses-heading">
            <h2 id="courses-heading">${data.eyebrow}</h2>
            ${intro}
            <div class="card-stack">
              ${data.courses.map(courseCard).join("")}
            </div>
          </section>
          <section class="content-section content-section--resources" aria-labelledby="resources-heading">
            <h2 id="resources-heading">Additional Resources</h2>
            <p class="section-copy">Courses come with additional resources to supplement your learning. Start these when you're ready.</p>
            <div class="card-stack">
              ${data.resources.map(courseCard).join("")}
            </div>
          </section>
        </section>
      </div>
    </main>
    ${footer()}
  `;
}

render();
