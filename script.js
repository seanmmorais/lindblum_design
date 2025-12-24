const projects = [
  {
    category: "design_automations",
    title: "Parametric pen holder",
    description:
      "Layer Models automation that generates printable pen holders in seconds—configurable width, height, and text with self-supporting geometry.",
    image: "projects/design_automations/pen_holder/pen_holder_4.png",
    images: [
      "projects/design_automations/pen_holder/pen_holder_1.png",
      "projects/design_automations/pen_holder/pen_holder_2.png",
      "projects/design_automations/pen_holder/pen_holder_3.png",
      "projects/design_automations/pen_holder/pen_holder_4.png",
    ],
    textPath: "projects/design_automations/pen_holder/pen_holder.txt",
    tags: ["Configurable", "Automation", "FDM + SLA", "Layer Models"],
  },
  {
    category: "design_automations",
    title: "Parametric piggy bank",
    description:
      "Configurable piggy bank generator for Layer Models: tweak size, text, and wall thickness; hinged hatch tuned for just-right resistance.",
    image: "projects/design_automations/piggy_bank/piggy_bank_2.png",
    images: [
      "projects/design_automations/piggy_bank/piggy_bank_1.png",
      "projects/design_automations/piggy_bank/piggy_bank_2.png",
      "projects/design_automations/piggy_bank/piggy_bank_3.jpg",
      "projects/design_automations/piggy_bank/piggy_bank_4.jpg",
    ],
    textPath: "projects/design_automations/piggy_bank/piggy_bank.txt",
    tags: ["Configurable", "Automation", "Hinged hatch"],
  },
  {
    category: "company_logo",
    title: "The Boot Plug 3D logo",
    description:
      "Glossy SLA-printed logo for a football-focused sportswear shop; reinforced on the back with braces for mounting.",
    image: "projects/company_logo/the_boot_plug/the_boot_plug_1.png",
    images: [
      "projects/company_logo/the_boot_plug/the_boot_plug_1.png",
      "projects/company_logo/the_boot_plug/the_boot_plug_2.png",
    ],
    textPath: "projects/company_logo/the_boot_plug/the_boot_plug.txt",
    links: ["https://www.instagram.com/tbp.kl/?hl=en"],
    tags: ["Brand object", "SLA", "Gloss finish"],
  },
  {
    category: "figurines",
    title: "Kmon & Rafiq figurine",
    description:
      "Commissioned sculpt for Thai artist Kmonvish Lawan and Malaysian artist Rafiq Ridzwan—printed in SLA and delivered unpainted (on request).",
    image: "projects/figurines/personalised/kmon_rafiq_3.jpg",
    images: [
      "projects/figurines/personalised/kmon_rafiq_1.png",
      "projects/figurines/personalised/kmon_rafiq_2.png",
      "projects/figurines/personalised/kmon_rafiq_3.jpg",
    ],
    textPath: "projects/figurines/personalised/kmon_rafiq.txt",
    tags: ["SLA", "Paint-ready", "Music collab"],
  },
  {
    category: "figurines",
    title: "Pop culture miniatures",
    description:
      "Gaming character commissions for a local collector—printed on FDM, sanded, and finished. Now improved with newer machines.",
    image: "projects/figurines/pop_culture/hollow_knight_2.JPG",
    images: [
      "projects/figurines/pop_culture/cactuar_1.JPG",
      "projects/figurines/pop_culture/chocobo_1.jpg",
      "projects/figurines/pop_culture/hollow_knight_1.JPG",
      "projects/figurines/pop_culture/hollow_knight_2.JPG",
      "projects/figurines/pop_culture/hollow_knight_3.JPG",
    ],
    textPath: "projects/figurines/pop_culture/pop_culture.txt",
    tags: ["FDM", "Finishing", "Collector"],
  },
  {
    category: "flower_pots",
    title: "Bulbapot planter",
    description:
      "Bulbasaur-inspired planter for smaller plants. Prints in three parts, then finished with acrylics for a glossy look.",
    image: "projects/flower_pots/bulbapot/bulbapot_5.png",
    images: [
      "projects/flower_pots/bulbapot/bulbapot_1.jpg",
      "projects/flower_pots/bulbapot/bulbapot_2.jpg",
      "projects/flower_pots/bulbapot/bulbapot_3.jpg",
      "projects/flower_pots/bulbapot/bulbapot_4.png",
      "projects/flower_pots/bulbapot/bulbapot_5.png",
    ],
    textPath: "projects/flower_pots/bulbapot/bulbapot.txt",
    tags: ["Painted", "Multi-part print", "Gloss finish"],
  },
  {
    category: "rapid_prototyping",
    title: "Macaron flipper",
    description:
      "ABS prototype for a bakery tool that flips 9 macarons at once. Final version to be cast in food-safe material. From just a blocky concept, drawn in PowerPoint, to a prototype in a matter of hours!",
    image: "projects/rapid_prototyping/macaron_flipper/macaron_flipper_2.png",
    images: [
      "projects/rapid_prototyping/macaron_flipper/macaron_flipper_1.png",
      "projects/rapid_prototyping/macaron_flipper/macaron_flipper_2.png",
      "projects/rapid_prototyping/macaron_flipper/macaron_flipper_concept.png",
      "projects/rapid_prototyping/macaron_flipper/macaron_flipper_concept_2.png",
    ],
    textPath: "projects/rapid_prototyping/macaron_flipper/macaron_flipper.txt",
    tags: ["ABS", "Food-safe casting", "Throughput"],
  },
  {
    category: "rapid_prototyping",
    title: "Colido printer jig",
    description:
      "Reverse-engineered and reprinted a warped jig on an old Colido printer to stop frame collisions and extend its life.",
    image: "projects/rapid_prototyping/reverse_engineering/colido_1.png",
    images: [
      "projects/rapid_prototyping/reverse_engineering/colido_1.png",
      "projects/rapid_prototyping/reverse_engineering/colido_2.png",
      "projects/rapid_prototyping/reverse_engineering/colido_3.png",
    ],
    textPath: "projects/rapid_prototyping/reverse_engineering/colido.txt",
    tags: ["Repair", "Reverse engineering", "ABS"],
  },
  {
    category: "rapid_prototyping",
    title: "Table bracket replacements",
    description:
      "Recreated broken brackets for an imported table so the client could secure a refund and keep a working desk.",
    image: "projects/rapid_prototyping/reverse_engineering/table_bracket_2.png",
    images: [
      "projects/rapid_prototyping/reverse_engineering/table_bracket_1.png",
      "projects/rapid_prototyping/reverse_engineering/table_bracket_2.png",
    ],
    textPath: "projects/rapid_prototyping/reverse_engineering/table_bracket.txt",
    tags: ["Replacement part", "Strength", "Quick turnaround"],
  },
  {
    category: "rapid_prototyping",
    title: "Standing desk prototype",
    description:
      "Sturdy standing desk prototype built in a week using recycled pallets, a Raspberry Pi touchscreen controller, and 3D printed ABS motor brackets.",
    image: "projects/rapid_prototyping/standing_desk/standing_desk_2.png",
    images: [
      "projects/rapid_prototyping/standing_desk/standing_desk_1.png",
      "projects/rapid_prototyping/standing_desk/standing_desk_2.png",
      "projects/rapid_prototyping/standing_desk/standing_desk_3.jpeg",
      "projects/rapid_prototyping/standing_desk/standing_desk_4.jpeg",
      "projects/rapid_prototyping/standing_desk/standing_desk_5.jpeg",
    ],
    textPath: "projects/rapid_prototyping/standing_desk/standing_desk.txt",
    tags: ["ABS brackets", "Raspberry Pi", "Prototype"],
  },
  {
    category: "sports_equipment",
    title: "Custom hangboard",
    description:
      "ABS fingerboard bonded to a maple base with dimpled texture for grip. Customisable dimensions and wall-mounted.",
    image: "projects/sports_equipment/rock_climbing/customised_hangboards/hangboard_2.png",
    images: [
      "projects/sports_equipment/rock_climbing/customised_hangboards/hangboard_1.png",
      "projects/sports_equipment/rock_climbing/customised_hangboards/hangboard_2.png",
    ],
    textPath: "projects/sports_equipment/rock_climbing/customised_hangboards/hangboard.txt",
    tags: ["ABS", "Rock climbing", "Custom sizing"],
  },
  {
    category: "sports_equipment",
    title: "Boxing footwork hex markers",
    description:
      "Durable hex markers for boxing footwork drills; designed to sit flat and withstand repeated impacts.",
    image: "projects/sports_equipment/boxing/footwork_tools/hex_marker_2.png",
    images: [
      "projects/sports_equipment/boxing/footwork_tools/hex_marker_1.png",
      "projects/sports_equipment/boxing/footwork_tools/hex_marker_2.png",
      "projects/sports_equipment/boxing/footwork_tools/hex_marker_3.png",
    ],
    tags: ["Boxing", "Impact friendly", "Coaching tools"],
  },
  {
    category: "sports_equipment",
    title: "Underwater hockey sticks",
    description:
      "Hydrodynamic, textured underwater hockey sticks made affordable without moulds; produced ~120 pieces via printed joins sized to our machines.",
    image: "projects/sports_equipment/uwh/sticks/uwh_sticks_1.png",
    images: [
      "projects/sports_equipment/uwh/sticks/uwh_sticks_1.png",
      "projects/sports_equipment/uwh/sticks/uwh_sticks_2.png",
      "projects/sports_equipment/uwh/sticks/uwh_sticks_3.png",
      "projects/sports_equipment/uwh/sticks/uwh_sticks_4.jpg",
      "projects/sports_equipment/uwh/sticks/uwh_sticks_5.jpg",
      "projects/sports_equipment/uwh/sticks/uwh_sticks_6.png",
    ],
    textPath: "projects/sports_equipment/uwh/sticks/sticks.txt",
    tags: ["Underwater hockey", "Production run", "Hydrodynamic"],
  },
  {
    category: "sports_equipment",
    title: "Underwater hockey goal post",
    description:
      "Cost-reduced UWH goal post option to replace expensive sheet metal versions; designed with Sub Aquatic Group to halve pricing.",
    image: "projects/sports_equipment/uwh/goal_post/goal_post_1.jpg",
    images: ["projects/sports_equipment/uwh/goal_post/goal_post_1.jpg"],
    textPath: "projects/sports_equipment/uwh/goal_post/goal_post.txt",
    tags: ["Underwater hockey", "Cost-down", "Fabrication"],
  },
  {
    category: "sports_equipment",
    title: "Underwater hockey mouth guard",
    description:
      "Mouth guard concepts exploring material combos and gyroid lattices for impact absorption, in collaboration with Sub Aquatic Group.",
    image: "projects/sports_equipment/uwh/mouth_guard/mouth_guard_1.jpg",
    images: ["projects/sports_equipment/uwh/mouth_guard/mouth_guard_1.jpg"],
    textPath: "projects/sports_equipment/uwh/mouth_guard/mouth_guard.txt",
    tags: ["Underwater hockey", "Safety", "Materials"],
  },
  {
    category: "design_automations",
    title: "Custom keycaps",
    description: "Character-driven keycaps including Poké Ball, Charizard, and Dim Sum sets.",
    image: "projects/keycaps/keycap_1.jpg",
    images: [
      "projects/keycaps/keycap_1.jpg",
      "projects/keycaps/keycap_2.jpg",
      "projects/keycaps/keycap_3.jpg",
      "projects/keycaps/keycap_4.jpg",
      "projects/keycaps/keycap_5.jpg",
      "projects/keycaps/keycap_6.png",
      "projects/keycaps/keycap_7.png"
    ],
    tags: ["FDM", "Collectible", "Keyboard"],
  },
];

const projectGrid = document.getElementById("project-grid");
const filterButtons = document.querySelectorAll(".filter-btn");
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const textLinkCache = new Map();

window.addEventListener("load", () => {
  document.body.classList.add("page-loaded");
});

const uniqueLinks = (links) => [...new Set(links)];

const formatCategory = (slug) =>
  slug
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

const extractLinks = (text) => {
  const matches = text.match(/https?:\/\/\S+/g) || [];
  return uniqueLinks(matches.map((url) => url.replace(/[\])'"]+$/, "")));
};

const getProjectLinks = async (project) => {
  const inlineLinks = project.links || [];
  if (!project.textPath) return uniqueLinks(inlineLinks);
  if (textLinkCache.has(project.textPath)) return textLinkCache.get(project.textPath);
  try {
    const response = await fetch(project.textPath);
    if (!response.ok) {
      const deduped = uniqueLinks(inlineLinks);
      textLinkCache.set(project.textPath, deduped);
      return deduped;
    }
    const text = await response.text();
    const links = uniqueLinks([...inlineLinks, ...extractLinks(text)]);
    textLinkCache.set(project.textPath, links);
    return links;
  } catch (error) {
    const deduped = uniqueLinks(inlineLinks);
    textLinkCache.set(project.textPath, deduped);
    return deduped;
  }
};

const renderProjects = async (filter = "all") => {
  projectGrid.innerHTML = "";
  const filtered = filter === "all" ? projects : projects.filter((p) => p.category === filter);

  for (const project of filtered) {
    const projectIndex = projects.indexOf(project);
    const card = document.createElement("article");
    card.className = "project-card";
    card.dataset.projectIndex = projectIndex;
    card.innerHTML = `
      <img src="${project.image}" alt="${project.title}">
      <div class="project-body">
        <div class="project-meta">
          <span>${formatCategory(project.category)}</span>
          <span class="chip">${project.tags[0] ?? "Fabrication"}</span>
        </div>
        <h3 class="project-title">${project.title}</h3>
        <p class="project-desc">${project.description}</p>
        <div class="tags">
          ${project.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <div class="project-links"></div>
      </div>
    `;
    projectGrid.appendChild(card);

    const links = await getProjectLinks(project);
    if (links.length) {
      const linkContainer = card.querySelector(".project-links");
      linkContainer.innerHTML = links
        .map((url) => `<a href="${url}" target="_blank" rel="noopener">${url}</a>`)
        .join("");
    }
  }
};

filterButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    filterButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderProjects(btn.dataset.filter);
  });
});

renderProjects();

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", isOpen);
  });

  navLinks.addEventListener("click", (event) => {
    if (event.target.tagName.toLowerCase() === "a") {
      navLinks.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    }
  });
}

// Lightbox carousel for project images
const lightbox = document.createElement("div");
lightbox.className = "lightbox hidden";
lightbox.innerHTML = `
  <div class="lightbox__backdrop"></div>
  <div class="lightbox__dialog" role="dialog" aria-modal="true" aria-label="Project gallery">
    <button class="lightbox__close" aria-label="Close gallery">X</button>
    <div class="lightbox__header">
      <h3 class="lightbox__title"></h3>
      <span class="lightbox__count"></span>
    </div>
    <div class="lightbox__carousel">
      <button class="lightbox__nav lightbox__nav--prev" aria-label="Previous image">&lt;</button>
      <img class="lightbox__image" src="" alt="">
      <button class="lightbox__nav lightbox__nav--next" aria-label="Next image">&gt;</button>
    </div>
    <div class="lightbox__dots"></div>
    <p class="lightbox__caption"></p>
  </div>
`;
document.body.appendChild(lightbox);

const lightboxImage = lightbox.querySelector(".lightbox__image");
const lightboxTitle = lightbox.querySelector(".lightbox__title");
const lightboxCount = lightbox.querySelector(".lightbox__count");
const lightboxDots = lightbox.querySelector(".lightbox__dots");
const lightboxCaption = lightbox.querySelector(".lightbox__caption");
const closeBtn = lightbox.querySelector(".lightbox__close");
const prevBtn = lightbox.querySelector(".lightbox__nav--prev");
const nextBtn = lightbox.querySelector(".lightbox__nav--next");
const backdrop = lightbox.querySelector(".lightbox__backdrop");

let activeProjectIndex = null;
let activeImageIndex = 0;

const getProjectImages = (project) => (project.images && project.images.length ? project.images : [project.image]);

const updateDots = (count) => {
  lightboxDots.innerHTML = "";
  for (let i = 0; i < count; i += 1) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.className = "lightbox__dot";
    if (i === activeImageIndex) dot.classList.add("is-active");
    dot.addEventListener("click", () => {
      activeImageIndex = i;
      refreshLightbox();
    });
    lightboxDots.appendChild(dot);
  }
};

const refreshLightbox = () => {
  const project = projects[activeProjectIndex];
  if (!project) return;
  const images = getProjectImages(project);
  activeImageIndex = (activeImageIndex + images.length) % images.length;
  lightboxImage.src = images[activeImageIndex];
  lightboxImage.alt = `${project.title} image ${activeImageIndex + 1}`;
  lightboxTitle.textContent = project.title;
  lightboxCount.textContent = `${activeImageIndex + 1} / ${images.length}`;
  lightboxCaption.textContent = project.description;
  updateDots(images.length);
};

const openLightbox = (projectIndex) => {
  activeProjectIndex = projectIndex;
  activeImageIndex = 0;
  refreshLightbox();
  lightbox.classList.remove("hidden");
  document.body.style.overflow = "hidden";
};

const closeLightbox = () => {
  lightbox.classList.add("hidden");
  document.body.style.overflow = "";
  activeProjectIndex = null;
};

const changeSlide = (delta) => {
  if (activeProjectIndex === null) return;
  const images = getProjectImages(projects[activeProjectIndex]);
  activeImageIndex = (activeImageIndex + delta + images.length) % images.length;
  refreshLightbox();
};

projectGrid.addEventListener("click", (event) => {
  const card = event.target.closest(".project-card");
  if (!card) return;
  const projectIndex = Number(card.dataset.projectIndex);
  if (Number.isNaN(projectIndex)) return;
  openLightbox(projectIndex);
});

closeBtn.addEventListener("click", closeLightbox);
backdrop.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", () => changeSlide(-1));
nextBtn.addEventListener("click", () => changeSlide(1));

document.addEventListener("keydown", (event) => {
  if (lightbox.classList.contains("hidden")) return;
  if (event.key === "Escape") closeLightbox();
  if (event.key === "ArrowLeft") changeSlide(-1);
  if (event.key === "ArrowRight") changeSlide(1);
});
