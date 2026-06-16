const courseTabs = ["Current", "Upcoming", "Previous"];
const learner = {
  name: "Sammy Smith",
  initials: "SS",
};

const icons = {
  launch:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path transform="translate(1.667 1.667)" d="M3.333 12.5c0 .775 0 1.163.086 1.48a2.5 2.5 0 0 0 1.767 1.768c.318.085.706.085 1.481.085h5.166c1.4 0 2.1 0 2.635-.272a2.5 2.5 0 0 0 1.093-1.093c.272-.534.272-1.234.272-2.635v-7c0-1.4 0-2.1-.272-2.635a2.5 2.5 0 0 0-1.093-1.092C13.934.833 13.233.833 11.833.833H6.667c-.775 0-1.163 0-1.481.085a2.5 2.5 0 0 0-1.767 1.768c-.086.318-.086.706-.086 1.481M8.333 11.667l3.334-3.334L8.333 5m3.334 3.333H.833" stroke="#FFFFFF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  time:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path transform="translate(.833 .833)" d="M17.434 10.221c.044-.345.066-.697.066-1.054A8.333 8.333 0 1 0 9.167 17.5c.362 0 .72-.023 1.07-.068M9.167 4.167v5l3.115 1.557M15 17.5v-5M12.5 15h5" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  support:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path transform="translate(.833 2.5)" d="M7.5 4.167v-.834M7.5 7.917v-.834M7.5 11.667v-.834M3.5.833h11.333c.934 0 1.4 0 1.757.182.314.16.569.415.728.728.182.357.182.824.182 1.757v1.083a2.917 2.917 0 0 0 0 5.834V11.5c0 .933 0 1.4-.182 1.757-.159.313-.414.568-.728.728-.357.182-.823.182-1.757.182H3.5c-.933 0-1.4 0-1.757-.182a1.667 1.667 0 0 1-.728-.728C.833 12.9.833 12.433.833 11.5v-1.083a2.917 2.917 0 0 0 0-5.834V3.5c0-.933 0-1.4.182-1.757.16-.313.415-.568.728-.728C2.1.833 2.567.833 3.5.833Z" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  report:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path transform="translate(2.5 .833)" d="M9.167 1.058V4.5c0 .467 0 .7.091.878.08.157.207.285.364.364.178.091.411.091.878.091h3.442M4.167 11.667v2.5M10.833 10v4.167M7.5 7.917v6.25M14.167 7.49V13.5c0 1.4 0 2.1-.273 2.635a2.5 2.5 0 0 1-1.092 1.093c-.535.272-1.235.272-2.635.272H4.833c-1.4 0-2.1 0-2.635-.272a2.5 2.5 0 0 1-1.092-1.093C.833 15.6.833 14.9.833 13.5V4.833c0-1.4 0-2.1.273-2.635a2.5 2.5 0 0 1 1.092-1.092C2.733.833 3.433.833 4.833.833H7.51c.611 0 .917 0 1.205.07.255.061.499.162.723.299.252.154.468.37.9.803l2.657 2.657c.433.432.649.648.803.9.137.224.238.468.3.723.069.288.069.594.069 1.205Z" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  chart:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path transform="translate(1.667 1.667)" d="M15.833 15.833H3.5c-.933 0-1.4 0-1.757-.181a1.667 1.667 0 0 1-.728-.729c-.182-.356-.182-.823-.182-1.756V.833M4.167 10.417v2.5M7.917 7.917v5M11.667 5.417v7.5M15.417 2.917v10" stroke="#344054" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  briefcase:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path transform="translate(.833 1.667)" d="M5.833 15.833V4.167c0-.775 0-1.162.086-1.48A2.5 2.5 0 0 1 7.686.919c.318-.086.706-.086 1.481-.086s1.162 0 1.48.086a2.5 2.5 0 0 1 1.768 1.767c.085.318.085.706.085 1.481v11.666M3.5 15.833h11.333c.934 0 1.4 0 1.757-.181.314-.16.569-.415.728-.729.182-.356.182-.823.182-1.756V6.833c0-.933 0-1.4-.182-1.756a1.667 1.667 0 0 0-.728-.729c-.357-.181-.823-.181-1.757-.181H3.5c-.933 0-1.4 0-1.757.181-.313.16-.568.415-.728.729-.182.356-.182.823-.182 1.756v6.334c0 .933 0 1.4.182 1.756.16.314.415.569.728.729.357.181.824.181 1.757.181Z" stroke="#1D2939" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  phone:
    '<svg viewBox="0 0 20 20" aria-hidden="true"><path transform="translate(1.609 1.317)" d="M5.375 6.082A12.454 12.454 0 0 0 7.747 9.424a12.454 12.454 0 0 0 3.342 2.372c.104.05.156.075.222.094.233.068.52.019.718-.123.056-.04.103-.087.199-.183.291-.291.437-.436.583-.532a1.667 1.667 0 0 1 1.817 0c.146.096.292.241.583.532l.163.163c.443.443.664.664.785.902.239.473.239 1.032 0 1.505-.121.237-.342.459-.785.902l-.131.131c-.442.441-.662.662-.963.83-.332.187-.849.322-1.231.321-.344-.001-.58-.068-1.05-.201a17.497 17.497 0 0 1-6.903-4.061A17.497 17.497 0 0 1 1.035 5.172c-.134-.47-.201-.705-.202-1.049-.001-.382.133-.899.32-1.232.169-.3.39-.521.831-.962l.132-.132c.443-.443.664-.664.902-.785.473-.239 1.031-.239 1.504 0 .238.121.459.342.902.785l.163.163c.291.291.437.437.532.583.359.553.359 1.265 0 1.817-.095.147-.241.293-.532.584-.096.095-.143.143-.183.198-.142.198-.191.485-.123.719.019.065.045.117.094.221Z" stroke="#1D2939" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/></svg>',
  search:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="11" cy="11" r="7.5"/><path d="m16.5 16.5 4 4"/></svg>',
  menu:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>',
  chevronRight:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
  chevronLeft:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
  check:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
  checkCircle:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>',
  close:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>',
  info:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
  messageAlert:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M21 11.5a8.5 8.5 0 0 1-12.3 7.6L3 21l1.9-5.7A8.5 8.5 0 1 1 21 11.5z"/><path d="M12 7.5v5"/><path d="M12 16h.01"/></svg>',
  target:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><path d="M12 2v3"/><path d="M12 19v3"/><path d="M2 12h3"/><path d="M19 12h3"/></svg>',
  milestone:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3v18"/><path d="M6 6h9l3 3-3 3H6"/></svg>',
  trophy:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M8 21h8"/><path d="M12 17v4"/><path d="M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 7H4v2a4 4 0 0 0 4 4"/><path d="M17 7h3v2a4 4 0 0 1-4 4"/></svg>',
  bell:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 9a6 6 0 0 1 12 0c0 7 3 6 3 8H3c0-2 3-1 3-8"/><path d="M10 21h4"/></svg>',
  heart:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"/></svg>',
  handHeart:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M11 14h2l5-5a2.1 2.1 0 0 1 3 3l-6 6H8l-4-2.5V11h2.5l3.5 3h1"/><path d="M12 8.5 10.6 7a2.2 2.2 0 0 1 3.1-3.1L12 5.6l-1.7-1.7A2.2 2.2 0 0 1 13.4 7z"/></svg>',
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

const emptyCourseStates = {
  Upcoming: {
    heading: "Upcoming Courses",
    title: "You do not have any upcoming courses.",
    body: "Our courses offer a great way to start, switch, or grow your career.",
  },
  Previous: {
    heading: "Previous Courses",
    title: "You do not have any previous courses.",
    body: "Once your access expires, courses will move to this section.",
  },
};

const prototypeConfig = {
  a: {
    storageKey: "ed2go-onboarding-prototype-a",
    supportMode: "standard",
  },
  b: {
    storageKey: "ed2go-onboarding-prototype-b",
    supportMode: "modal",
  },
  c: {
    storageKey: "ed2go-onboarding-prototype-c",
    supportMode: "standard",
  },
  current: {
    storageKey: "ed2go-onboarding-prototype-current",
    supportMode: "standard",
  },
};

const goalOptions = [
  "Start a new career",
  "Earn a certification",
  "Change careers",
  "Grow in my current role",
  "Learn something new",
  "Something else",
];

const goalCharacterLimit = 150;
const goalCharacterLimitError = "Your feedback must be 150 characters or fewer.";
const appRoot = document.getElementById("app");
const prototypeKey = document.body.dataset.prototype || "current";
const config = prototypeConfig[prototypeKey] || prototypeConfig.current;

const defaultState = {
  view: "home",
  status: "not-started",
  step: 0,
  goal: "",
  otherReason: "",
  supportChoice: "",
  supportOptIn: false,
  supportOptOutAcknowledged: false,
  activeCourseTab: "Current",
  showToast: false,
  showOptOutModal: false,
};

let state = loadState();

function icon(name) {
  return icons[name] || "";
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function clampGoalOtherReason(value) {
  return String(value || "").slice(0, goalCharacterLimit);
}

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(config.storageKey));

    if (saved?.status === "complete") {
      return { ...defaultState };
    }

    return {
      ...defaultState,
      ...saved,
      otherReason: clampGoalOtherReason(saved?.otherReason),
      view: "home",
      activeCourseTab: "Current",
      showToast: false,
      showOptOutModal: false,
    };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  const { view, activeCourseTab, showToast, showOptOutModal, ...persistentState } = state;
  localStorage.setItem(config.storageKey, JSON.stringify(persistentState));
}

function updateState(patch, options = {}) {
  state = { ...state, ...patch };

  if (options.persist !== false) {
    saveState();
  }

  render();

  if (options.scroll === true) {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }
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
              return `<a ${current} href="#courses-heading" data-action="select-course-tab" data-course-tab="${label}">${label}</a>`;
            })
            .join("")}
        </nav>
      </section>
      <section class="side-card">
        <h2>Career Resources</h2>
        <p>Access resources to help you in your chosen career.</p>
        <a href="#" class="side-link">${icon("briefcase")}<span>Virtual Career Center</span></a>
      </section>
      <section class="side-card side-card--support">
        <div class="support-home-card">
          <div class="support-home-card__intro">
            <div class="support-home-card__copy">
              <h2>Get Support</h2>
              <p>Get help with your account or program.</p>
            </div>
            <a href="tel:18664415454" class="side-link">${icon("phone")}<span>Call: 1-866-441-5454</span></a>
          </div>
          <p class="support-home-card__course-help">For help with course content, contact your instructor from the Message Center inside your course.</p>
        </div>
      </section>
    </aside>
  `;
}

function header() {
  return `
    <header class="site-header">
      <div class="site-header__inner">
        <button class="header-menu-button" type="button" aria-label="Open navigation menu">${icon("menu")}</button>
        <div class="brand">
          <img class="brand-logo" src="../assets/ed2go-logo-header.png" alt="ed2go">
        </div>
        <nav class="top-nav" aria-label="Primary">
          <button type="button">Explore Courses<span class="chevron-down" aria-hidden="true"></span></button>
          <button type="button">Resources<span class="chevron-down" aria-hidden="true"></span></button>
        </nav>
        <div class="header-actions">
          <button type="button" aria-label="Search">${icon("search")}</button>
          <button class="account-trigger" type="button" aria-label="Account menu">
            <span class="avatar" aria-hidden="true">${learner.initials}</span>
            <span class="chevron-down" aria-hidden="true"></span>
          </button>
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

function getStartedTile(modifier = "", headingId = "getting-started-heading") {
  const ctaLabel =
    state.status === "in-progress"
      ? "Resume"
      : state.status === "complete"
        ? "Review"
        : "Get Started";
  const classes = ["getting-started-card", modifier].filter(Boolean).join(" ");

  return `
    <article class="${classes}" aria-labelledby="${headingId}">
      <div class="getting-started-card__copy">
        <h3 id="${headingId}">Start Your Learning Experience</h3>
        <p>Every journey starts with a strong beginning. Learn how the Student Center works, set a goal for yourself to help you stay motivated, and choose how you'd like to stay on track.</p>
      </div>
      <button class="button button--primary" type="button" data-action="start-onboarding">
        <span>${ctaLabel}</span>
      </button>
    </article>
  `;
}

function horizontalTabs(selected) {
  return `
    <nav class="responsive-course-tabs" aria-label="Course status">
      ${courseTabs
        .map((label) => {
          const current = label === selected ? 'aria-current="page"' : "";
          return `<a ${current} href="#courses-heading" data-action="select-course-tab" data-course-tab="${label}">${label}</a>`;
        })
        .join("")}
    </nav>
  `;
}

function responsiveSideCards() {
  return `
    <section class="responsive-side-cards" aria-label="Student Center support links">
      <article class="responsive-side-card">
        <div>
          <h2>Career Resources</h2>
          <p>Access resources to help you in your chosen career.</p>
        </div>
        <a href="#" class="side-link">${icon("briefcase")}<span>Virtual Career Center</span></a>
      </article>
      <article class="responsive-side-card responsive-side-card--support">
        <div class="support-home-card">
          <div class="support-home-card__intro">
            <div class="support-home-card__copy">
              <h2>Get Support</h2>
              <p>Get help with your account or program.</p>
            </div>
            <a href="tel:18664415454" class="side-link">${icon("phone")}<span>Call: 1-866-441-5454</span></a>
          </div>
          <p class="support-home-card__course-help">For help with course content, contact your instructor from the Message Center inside your course.</p>
        </div>
      </article>
    </section>
  `;
}

function successToast() {
  return `
    <div class="success-toast" role="status" aria-live="polite">
      <span class="success-toast__icon">${icon("checkCircle")}</span>
      <div class="success-toast__content">
        <strong>You're all set to start learning!</strong>
        <p>Your goal and preferences are set. Update your preferences anytime in your profile.</p>
      </div>
      <button type="button" aria-label="Close notification" data-action="close-toast">${icon("close")}</button>
    </div>
  `;
}

function emptyCourseState(courseState) {
  return `
    <div class="empty-course-state">
      <h3>${courseState.title}</h3>
      <p>${courseState.body}</p>
      <a href="#" class="empty-course-state__link" data-action="catalog-link">View our catalog</a>
    </div>
  `;
}

function courseStatusContent(data, selectedTab) {
  if (selectedTab !== "Current") {
    const courseState = emptyCourseStates[selectedTab];

    return `
      <section class="content-section content-section--empty" aria-labelledby="courses-heading">
        <h2 id="courses-heading">${courseState.heading}</h2>
        ${emptyCourseState(courseState)}
      </section>
    `;
  }

  const intro = data.intro ? `<p class="section-copy">${data.intro}</p>` : "";

  return `
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
  `;
}

function progressStepper(activeStep) {
  const steps = ["Welcome", "Set a Goal", "Success Support"];

  return `
    <ol class="progress-steps" aria-label="Getting started progress">
      ${steps
        .map((label, index) => {
          const statusClass =
            index < activeStep ? "is-complete" : index === activeStep ? "is-current" : "";
          const marker = index < activeStep ? icon("check") : "";
          const ariaCurrent = index === activeStep ? 'aria-current="step"' : "";

          return `
            <li class="${statusClass}" ${ariaCurrent}>
              <span class="progress-steps__marker" aria-hidden="true">${marker}</span>
              <span>${label}</span>
            </li>
          `;
        })
        .join("")}
    </ol>
  `;
}

function onboardingActions({ showBack = false, nextLabel = "Next", nextAction = "next-step", nextDisabled = false }) {
  const actionClass = showBack ? "onboarding-actions--paired" : "onboarding-actions--single";

  return `
    <div class="onboarding-actions ${actionClass}">
      ${
        showBack
          ? `<button class="button button--secondary" type="button" data-action="previous-step">${icon("chevronLeft")}<span>Back</span></button>`
          : ""
      }
      <button class="button button--primary" type="button" data-action="${nextAction}" ${nextDisabled ? "disabled" : ""}>
        <span>${nextLabel}</span>${nextLabel === "Next" ? icon("chevronRight") : ""}
      </button>
    </div>
    <button class="text-button" type="button" data-action="finish-later">Finish this later</button>
  `;
}

function welcomeStep() {
  return `
    <section class="onboarding-panel onboarding-panel--centered" aria-labelledby="welcome-title">
      <h1 id="welcome-title">Welcome to ed2go, ${learner.name}!</h1>
      <p class="onboarding-lede">Get familiar with the Student Center and learn how to access your courses, track your progress, and find the tools and resources you need to succeed.</p>
      <div class="video-frame">
        <video controls preload="metadata" src="../assets/ed2go-short-video-web.mp4">
          Your browser does not support the video tag.
        </video>
      </div>
      ${onboardingActions({ nextLabel: "Next" })}
    </section>
  `;
}

function canAdvanceGoal() {
  if (!state.goal) {
    return false;
  }

  if (state.goal === "Something else") {
    return state.otherReason.trim().length > 0 && state.otherReason.length <= goalCharacterLimit;
  }

  return true;
}

function goalStep() {
  const remaining = Math.max(0, goalCharacterLimit - state.otherReason.length);
  const showOther = state.goal === "Something else";
  const isAtLimit = state.otherReason.length >= goalCharacterLimit;
  const feedbackText = isAtLimit ? goalCharacterLimitError : `${remaining} characters remaining`;

  return `
    <section class="onboarding-panel onboarding-panel--wide" aria-labelledby="goal-title">
      <h1 id="goal-title">What are you hoping to achieve?</h1>
      <p class="onboarding-lede">Share what you're hoping to accomplish so we can help you stay on track.</p>
      <fieldset class="goal-fieldset">
        <legend>What's your main reason for taking this course? (Select one)</legend>
        <div class="goal-options">
          ${goalOptions
            .map((goal) => {
              const selected = state.goal === goal ? "is-selected" : "";
              return `<button class="goal-chip ${selected}" type="button" data-action="select-goal" data-goal="${goal}" aria-pressed="${state.goal === goal}">${goal}</button>`;
            })
            .join("")}
        </div>
      </fieldset>
      ${
        showOther
          ? `<div class="goal-other ${isAtLimit ? "is-error" : ""}">
              <label for="goal-other">Tell us your main reason</label>
              <textarea id="goal-other" data-goal-other rows="5" maxlength="${goalCharacterLimit}" aria-describedby="goal-other-feedback" aria-invalid="${isAtLimit}">${escapeHtml(state.otherReason)}</textarea>
              <p id="goal-other-feedback" data-goal-feedback ${isAtLimit ? 'role="alert"' : ""}>${feedbackText}</p>
            </div>`
          : ""
      }
      ${onboardingActions({ showBack: true, nextLabel: "Next", nextDisabled: !canAdvanceGoal() })}
    </section>
  `;
}

function supportCategories() {
  const categories = [
    ["Progress updates", "chart"],
    ["Important milestones", "trophy"],
    ["Upcoming deadlines", "bell"],
    ["Support & resources", "handHeart"],
  ];

  return categories
    .map(
      ([label, iconName]) => `
        <li>
          <span>${icon(iconName)}</span>
          <strong>${label}</strong>
        </li>
      `,
    )
    .join("");
}

function supportBenefitGrid() {
  const benefits = [
    ["Progress updates", "chart"],
    ["Upcoming deadlines", "bell"],
    ["Important milestones", "trophy"],
    ["Support & resources", "handHeart"],
  ];

  return benefits
    .map(
      ([label, iconName]) => `
        <li class="support-choice-benefit">
          <span>${icon(iconName)}</span>
          <strong>${label}</strong>
        </li>
      `,
    )
    .join("");
}

function supportFinePrint() {
  return `Message and data rates may apply. Message frequency varies. Reply STOP to opt-out, HELP for help. View our <span>Privacy Policy</span> and <span>Terms of Service</span>.`;
}

function supportStep() {
  const checked = state.supportOptIn ? "checked" : "";

  return `
    <section class="onboarding-panel onboarding-panel--wide" aria-labelledby="support-title">
      <h1 id="support-title">Connect with Student Services</h1>
      <p class="onboarding-lede">Unlock direct, personalized guidance from Student Services to help you stay on track and reach your goals.</p>
      <div class="support-card">
        <div class="support-card__copy">
          <h2>Receive helpful messages about:</h2>
          <ul class="support-categories">
            ${supportCategories()}
          </ul>
          <label class="consent-row">
            <input type="checkbox" data-action="toggle-support" ${checked}>
            <span>Yes! Text me personalized support about my progress, important milestones, and deadlines.</span>
          </label>
          <p class="consent-fine-print">${supportFinePrint()}</p>
        </div>
        <div class="support-card__image" aria-hidden="true">
          <img src="../assets/student-services-phone.png" alt="">
        </div>
      </div>
      ${onboardingActions({ showBack: true, nextLabel: "Finish", nextAction: "finish-support" })}
    </section>
  `;
}

function supportChoiceCard(choice, title, body, options = {}) {
  const selected = state.supportChoice === choice;
  const checked = selected ? "checked" : "";
  const selectedClass = selected ? "is-selected" : "";
  const compactClass = options.compact ? "support-choice-card--compact" : "";
  const details = options.details || "";

  return `
    <label class="support-choice-card ${compactClass} ${selectedClass}" role="radio" aria-checked="${selected}">
      <span class="support-choice-card__copy">
        <span class="support-choice-card__title">${title}</span>
        <span class="support-choice-card__body">${body}</span>
        ${details}
      </span>
      <input class="support-choice-card__input" type="radio" name="support-choice" value="${choice}" data-support-choice="${choice}" ${checked}>
      <span class="support-choice-radio" aria-hidden="true"></span>
    </label>
  `;
}

function selectableSupportStep() {
  const textSupportDetails = `
    <span class="support-choice-card__prompt">You'll receive:</span>
    <ul class="support-choice-benefits">
      ${supportBenefitGrid()}
    </ul>
    <span class="support-choice-fine-print">${supportFinePrint()}</span>
  `;

  return `
    <section class="onboarding-panel onboarding-panel--wide" aria-labelledby="support-title">
      <h1 id="support-title">Connect with Student Services</h1>
      <p class="onboarding-lede onboarding-lede--support-choice">Stay on track by unlocking direct, personalized text support from Student Services. Learners who receive support from Student Services are significantly more likely to complete their course.</p>
      <div class="support-choice-layout">
        <div class="support-choice-list" role="radiogroup" aria-label="Student Services text support options">
          ${supportChoiceCard(
            "text",
            "Enable text support",
            "Yes! Text me personalized support about my progress, important milestones, and deadlines.",
            { details: textSupportDetails },
          )}
          ${supportChoiceCard(
            "email",
            "No, thanks",
            "I'll receive important updates by email instead.",
            { compact: true },
          )}
        </div>
        <div class="support-choice-visual" aria-hidden="true">
          <img src="../assets/student-services-phone.png" alt="">
        </div>
      </div>
      ${onboardingActions({ showBack: true, nextLabel: "Finish", nextAction: "finish-support" })}
    </section>
  `;
}

function optOutModal() {
  if (!state.showOptOutModal) {
    return "";
  }

  return `
    <div class="modal-backdrop" role="presentation">
      <section class="decision-modal" role="dialog" aria-modal="true" aria-labelledby="decision-modal-title">
        <span class="decision-modal__icon">${icon("messageAlert")}</span>
        <h2 id="decision-modal-title">Did you know?</h2>
        <p>Learners who receive support from Student Services are significantly more likely to complete their course.</p>
        <div class="decision-modal__actions">
          <button class="button button--primary" type="button" data-action="keep-opted-in">Keep me opted in</button>
          <button class="button button--secondary" type="button" data-action="decline-support">No, thanks. I'll manage on my own.</button>
        </div>
      </section>
    </div>
  `;
}

function renderHome() {
  const data = prototypes.current;
  const selectedTab = state.activeCourseTab || data.selected;
  const showGettingStarted = selectedTab === "Current" && state.status !== "complete";
  const responsiveGettingStarted = showGettingStarted
    ? getStartedTile("getting-started-card--responsive", "getting-started-heading-responsive")
    : "";
  const desktopGettingStarted = showGettingStarted
    ? getStartedTile("getting-started-card--desktop")
    : "";

  appRoot.innerHTML = `
    ${state.showToast ? successToast() : ""}
    ${header()}
    <main class="student-center">
      <div class="student-center__inner">
        ${sideNav(selectedTab)}
        <section class="main-content">
          <h1>Welcome, ${learner.name}!</h1>
          ${responsiveGettingStarted}
          ${desktopGettingStarted}
          ${horizontalTabs(selectedTab)}
          ${courseStatusContent(data, selectedTab)}
          ${responsiveSideCards()}
        </section>
      </div>
    </main>
    ${footer()}
  `;
}

function renderOnboarding() {
  const thirdStep = prototypeKey === "c" ? selectableSupportStep : supportStep;
  const steps = [welcomeStep, goalStep, thirdStep];
  const activeStep = Math.min(Math.max(state.step, 0), steps.length - 1);

  appRoot.innerHTML = `
    ${header()}
    <main class="onboarding-shell">
      <div class="onboarding-shell__inner">
        ${progressStepper(activeStep)}
        ${steps[activeStep]()}
      </div>
    </main>
    ${footer()}
    ${optOutModal()}
  `;
}

function completeOnboarding(nextPatch = {}) {
  state = {
    ...state,
    ...nextPatch,
    view: "home",
    status: "complete",
    step: 2,
    activeCourseTab: "Current",
    showToast: true,
    showOptOutModal: false,
  };
  saveState();
  render();
  window.scrollTo({ top: 0, left: 0, behavior: "auto" });
}

function handleClick(event) {
  const actionable = event.target.closest("[data-action]");

  if (!actionable) {
    return;
  }

  const action = actionable.dataset.action;

  if (actionable.tagName === "A") {
    event.preventDefault();
  }

  switch (action) {
    case "start-onboarding": {
      const nextStep = state.status === "in-progress" ? state.step : 0;
      updateState({
        view: "onboarding",
        status: state.status === "complete" ? "complete" : "in-progress",
        step: nextStep,
        showToast: false,
        showOptOutModal: false,
      }, { scroll: true });
      break;
    }
    case "next-step":
      if (state.step === 1 && !canAdvanceGoal()) {
        return;
      }
      updateState({ step: Math.min(state.step + 1, 2), showOptOutModal: false }, { scroll: true });
      break;
    case "previous-step":
      updateState({ step: Math.max(state.step - 1, 0), showOptOutModal: false }, { scroll: true });
      break;
    case "finish-later":
      updateState({
        view: "home",
        status: "in-progress",
        activeCourseTab: "Current",
        showToast: false,
        showOptOutModal: false,
      }, { scroll: true });
      break;
    case "select-course-tab":
      updateState({
        activeCourseTab: actionable.dataset.courseTab || "Current",
      }, { persist: false, scroll: false });
      break;
    case "select-goal": {
      const nextGoal = actionable.dataset.goal;
      updateState({
        goal: nextGoal,
        otherReason: nextGoal === "Something else" ? state.otherReason : "",
      });
      break;
    }
    case "finish-support":
      if (config.supportMode === "modal" && !state.supportOptIn && !state.supportOptOutAcknowledged) {
        updateState({ showOptOutModal: true }, { persist: false, scroll: false });
        return;
      }
      completeOnboarding();
      break;
    case "keep-opted-in":
      updateState({
        supportChoice: "text",
        supportOptIn: true,
        supportOptOutAcknowledged: false,
        showOptOutModal: false,
      }, { scroll: false });
      break;
    case "decline-support":
      updateState({
        supportChoice: "email",
        supportOptIn: false,
        supportOptOutAcknowledged: true,
        showOptOutModal: false,
      }, { scroll: false });
      break;
    case "close-toast":
      updateState({ showToast: false }, { persist: false, scroll: false });
      break;
    default:
      break;
  }
}

function handleInput(event) {
  if (!event.target.matches("[data-goal-other]")) {
    return;
  }

  const otherReason = clampGoalOtherReason(event.target.value);

  if (event.target.value !== otherReason) {
    event.target.value = otherReason;
  }

  state = { ...state, otherReason };
  saveState();

  const feedback = document.querySelector("[data-goal-feedback]");
  const goalOther = document.querySelector(".goal-other");
  const nextButton = document.querySelector('[data-action="next-step"]');
  const remaining = Math.max(0, goalCharacterLimit - state.otherReason.length);
  const isAtLimit = state.otherReason.length >= goalCharacterLimit;

  event.target.setAttribute("aria-invalid", String(isAtLimit));

  if (goalOther) {
    goalOther.classList.toggle("is-error", isAtLimit);
  }

  if (feedback) {
    feedback.textContent = isAtLimit ? goalCharacterLimitError : `${remaining} characters remaining`;

    if (isAtLimit) {
      feedback.setAttribute("role", "alert");
    } else {
      feedback.removeAttribute("role");
    }
  }

  if (nextButton) {
    nextButton.disabled = !canAdvanceGoal();
  }
}

function handleChange(event) {
  if (event.target.matches("[data-support-choice]")) {
    const supportChoice = event.target.dataset.supportChoice;
    updateState({
      supportChoice,
      supportOptIn: supportChoice === "text",
      supportOptOutAcknowledged: false,
      showOptOutModal: false,
    });
    return;
  }

  if (!event.target.matches('[data-action="toggle-support"]')) {
    return;
  }

  state = {
    ...state,
    supportChoice: event.target.checked ? "text" : "",
    supportOptIn: event.target.checked,
    supportOptOutAcknowledged: false,
  };
  saveState();
}

function render() {
  if (state.view === "onboarding") {
    renderOnboarding();
  } else {
    renderHome();
  }
}

document.addEventListener("click", handleClick);
document.addEventListener("input", handleInput);
document.addEventListener("change", handleChange);

render();
