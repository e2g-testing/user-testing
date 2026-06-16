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
  menu:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h16"/><path d="M4 12h16"/><path d="M4 17h16"/></svg>',
  chevronRight:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m9 18 6-6-6-6"/></svg>',
  chevronLeft:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m15 18-6-6 6-6"/></svg>',
  check:
    '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="m5 12 4 4L19 6"/></svg>',
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

function loadState() {
  try {
    const saved = JSON.parse(localStorage.getItem(config.storageKey));

    if (saved?.status === "complete") {
      return { ...defaultState };
    }

    return {
      ...defaultState,
      ...saved,
      view: "home",
      showToast: false,
      showOptOutModal: false,
    };
  } catch {
    return { ...defaultState };
  }
}

function saveState() {
  const { view, showToast, showOptOutModal, ...persistentState } = state;
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
            <span class="avatar" aria-hidden="true">JK</span>
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
          return `<a ${current} href="#courses-heading">${label}</a>`;
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
      <span class="success-toast__icon">${icon("check")}</span>
      <div>
        <strong>You're all set to start learning!</strong>
        <p>Your goal and notifications are set. Update your notifications anytime in your profile.</p>
      </div>
      <button type="button" aria-label="Close notification" data-action="close-toast">${icon("close")}</button>
    </div>
  `;
}

function progressStepper(activeStep) {
  const steps = ["Welcome", "Set a Goal", "Success Support"];

  return `
    <ol class="progress-steps" aria-label="Getting started progress">
      ${steps
        .map((label, index) => {
          const statusClass =
            index < activeStep
              ? "is-complete"
              : index === activeStep
                ? "is-current"
                : "";
          const marker = index < activeStep ? icon("check") : index + 1;
          const ariaCurrent = index === activeStep ? 'aria-current="step"' : "";

          return `
            <li class="${statusClass}" ${ariaCurrent}>
              <span class="progress-steps__marker">${marker}</span>
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
      <h1 id="welcome-title">Welcome to ed2go, Jane!</h1>
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
          ? `<div class="goal-other">
              <label for="goal-other">Tell us your main reason</label>
              <textarea id="goal-other" data-goal-other maxlength="${goalCharacterLimit}" rows="5">${escapeHtml(state.otherReason)}</textarea>
              <p data-goal-counter>${remaining} characters remaining</p>
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
  const intro = data.intro ? `<p class="section-copy">${data.intro}</p>` : "";
  const showGettingStarted = state.status !== "complete";
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
        ${sideNav(data.selected)}
        <section class="main-content">
          <h1>Welcome, Jane!</h1>
          ${responsiveGettingStarted}
          ${desktopGettingStarted}
          ${horizontalTabs(data.selected)}
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
        showToast: false,
        showOptOutModal: false,
      }, { scroll: true });
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

  state = { ...state, otherReason: event.target.value };
  saveState();

  const counter = document.querySelector("[data-goal-counter]");
  const nextButton = document.querySelector('[data-action="next-step"]');
  const remaining = Math.max(0, goalCharacterLimit - state.otherReason.length);

  if (counter) {
    counter.textContent = `${remaining} characters remaining`;
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
