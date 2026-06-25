const LEVELS = {
  1: { label: "المستوى الأول", color: "#e8f4fd", border: "#90caf9", header: "#1565c0" },
  2: { label: "المستوى الثاني", color: "#f3e5f5", border: "#ce93d8", header: "#6a1b9a" },
  3: { label: "المستوى الثالث", color: "#fff8e1", border: "#ffcc02", header: "#e65100" },
  4: { label: "المستوى الرابع", color: "#e8f5e9", border: "#a5d6a7", header: "#2e7d32" },
  5: { label: "المستوى الخامس", color: "#fce4ec", border: "#f48fb1", header: "#880e4f" },
};

const COURSES = [
  { id: "ENG111", code: "ENG 111", name: "رياضيات 1", level: 1, prereqs: [] },
  { id: "ENG112", code: "ENG 112", name: "رياضيات 2", level: 1, prereqs: ["ENG111"] },
  { id: "ENG151", code: "ENG 151", name: "برمجة حاسب 1", level: 1, prereqs: [] },
  { id: "ENG152", code: "ENG 152", name: "برمجة حاسب 2", level: 1, prereqs: ["ENG151"] },
  { id: "ENG121", code: "ENG 121", name: "فيزياء 1", level: 1, prereqs: [] },
  { id: "ENG122", code: "ENG 122", name: "فيزياء 2", level: 1, prereqs: ["ENG121"] },
  { id: "ENG131", code: "ENG 131", name: "ميكانيكا 1 (ستاتيكا)", level: 1, prereqs: [] },
  { id: "ENG132", code: "ENG 132", name: "ميكانيكا 2 (ديناميكا)", level: 1, prereqs: ["ENG131"] },
  { id: "ENG141", code: "ENG 141", name: "التصميم الرقمي والمنطقي 1", level: 1, prereqs: [] },
  { id: "ENG142", code: "ENG 142", name: "التصميم الرقمي والمنطقي 2", level: 1, prereqs: ["ENG141"] },
  { id: "UR121", code: "UR 121", name: "الفقه الإسلامي", level: 1, prereqs: [] },
  { id: "UR122", code: "UR 122", name: "العقيدة والأخلاق", level: 1, prereqs: ["UR121"] },
  { id: "UR111", code: "UR 111", name: "القرآن الكريم 1", level: 1, prereqs: [] },
  { id: "ISE205", code: "ISE 205", name: "معادلات تفاضلية", level: 2, prereqs: ["ENG112"] },
  { id: "ISE204", code: "ISE 204", name: "مصفوفات ومتجهات", level: 2, prereqs: ["ENG112"] },
  { id: "ISE203", code: "ISE 203", name: "هندسة الشبكة المكونية", level: 2, prereqs: ["ENG142"] },
  { id: "ISE202", code: "ISE 202", name: "هياكل بيانات وخوارزميات", level: 2, prereqs: ["ENG152"] },
  { id: "ISE201", code: "ISE 201", name: "هندسة الدوائر الكهربية", level: 2, prereqs: ["ENG122"] },
  { id: "ISE213", code: "ISE 213", name: "دوال وتحويلات", level: 2, prereqs: ["ENG112"] },
  { id: "ISE214", code: "ISE 214", name: "رياضيات منقطعة", level: 2, prereqs: ["ENG112"] },
  { id: "ISE212", code: "ISE 212", name: "نظم قواعد البيانات", level: 2, prereqs: ["ENG152"] },
  { id: "ISE211", code: "ISE 211", name: "هندسة الدوائر الإلكترونية", level: 2, prereqs: ["ISE201"] },
  { id: "ENG2xx", code: "ENG 2xx", name: "مقرر اختياري (كلية)", level: 2, prereqs: [], optional: true },
  { id: "UR211", code: "UR 211", name: "القرآن الكريم 2", level: 2, prereqs: ["UR111"] },
  { id: "UR221", code: "UR 221", name: "سيرة نبوية وتاريخ خلفاء", level: 2, prereqs: [] },
  { id: "ISE302", code: "ISE 302", name: "هندسة نظم وإشارات", level: 3, prereqs: ["ISE213"] },
  { id: "ISE314", code: "ISE 314", name: "مقدمة في الذكاء الاصطناعي", level: 3, prereqs: ["ISE214", "ISE202"] },
  { id: "ISE305", code: "ISE 305", name: "هندسة البرمجيات", level: 3, prereqs: ["ISE212"] },
  { id: "ISE303", code: "ISE 303", name: "حسابيات وقياسات رقمية", level: 3, prereqs: ["ISE211"] },
  { id: "ISE306", code: "ISE 306", name: "إحصاء واحتمالات", level: 3, prereqs: ["ISE205"] },
  { id: "ISE3XX", code: "ISE 3XX", name: "برمجة متقدمة (اختياري)", level: 3, prereqs: ["ISE202"], optional: true },
  { id: "ISE301", code: "ISE 301", name: "المعالجات والمتحكمات الدقيقة", level: 3, prereqs: ["ISE203", "ISE211"] },
  { id: "ISE312", code: "ISE 312", name: "هندسة التحكم", level: 3, prereqs: ["ISE302"] },
  { id: "ISE313", code: "ISE 313", name: "هندسة الاتصالات", level: 3, prereqs: ["ISE302"] },
  { id: "ISE311", code: "ISE 311", name: "بنية الحاسب", level: 3, prereqs: ["ISE301"] },
  { id: "UR311", code: "UR 311", name: "القرآن الكريم 3", level: 3, prereqs: ["UR211"] },
  { id: "UR321", code: "UR 321", name: "تفسير", level: 3, prereqs: [] },
  { id: "ISE401", code: "ISE 401", name: "نظم تشغيل", level: 4, prereqs: ["ISE311"] },
  { id: "ISE412", code: "ISE 412", name: "تعلم الآلة", level: 4, prereqs: ["ISE314", "ISE306"] },
  { id: "ISE403", code: "ISE 403", name: "التحكم الرقمي وتطبيقاته", level: 4, prereqs: ["ISE312"] },
  { id: "ISE404", code: "ISE 404", name: "شبكات حاسب", level: 4, prereqs: ["ISE313"] },
  { id: "ISE405", code: "ISE 405", name: "النظم الموزعة والمتوازية", level: 4, prereqs: ["ISE401"] },
  { id: "UR421", code: "UR 421", name: "حديث", level: 4, prereqs: [] },
  { id: "ISE4XX", code: "ISE 4XX", name: "برمجة متقدمة (2) اختياري", level: 4, prereqs: ["ISE3XX"], optional: true },
  { id: "ISE411", code: "ISE 411", name: "مقدمة في علوم البيانات", level: 4, prereqs: ["ISE306", "ISE314"] },
  { id: "ISE413", code: "ISE 413", name: "الأمن السيبراني", level: 4, prereqs: ["ISE404"] },
  { id: "XXX1", code: "XXX xxx", name: "مقرر اختياري تخصصي 1", level: 4, prereqs: [], optional: true },
  { id: "XXX2", code: "XXX xxx", name: "مقرر اختياري تخصصي 2", level: 4, prereqs: [], optional: true },
  { id: "ENG431", code: "ENG 431", name: "تدريب ميداني 1", level: 4, prereqs: [] },
  { id: "UR411", code: "UR 411", name: "القرآن الكريم 4", level: 4, prereqs: ["UR311"] },
  { id: "ISE502", code: "ISE 502", name: "اللغويات الحاسوبية", level: 5, prereqs: ["ISE412"] },
  { id: "ISE511", code: "ISE 511", name: "معالجة الصور والتعرف على الأنماط", level: 5, prereqs: ["ISE412"] },
  { id: "ISE501", code: "ISE 501", name: "نظم مدمجة", level: 5, prereqs: ["ISE401", "ISE403"] },
  { id: "ISE512", code: "ISE 512", name: "مقدمة في الحوسبة الكمومية", level: 5, prereqs: ["ISE405"] },
  { id: "ENG531", code: "ENG 531", name: "تدريب ميداني 2", level: 5, prereqs: ["ENG431"] },
  { id: "XXX4", code: "XXX xxx", name: "مقرر اختياري تخصصي 4", level: 5, prereqs: [], optional: true },
  { id: "ISE504", code: "ISE 504", name: "مشروع التخرج 1", level: 5, prereqs: ["ENG431"] },
  { id: "ISE514", code: "ISE 514", name: "مشروع التخرج 2", level: 5, prereqs: ["ISE504"] },
  { id: "XXX6", code: "XXX xxx", name: "مقرر اختياري تخصصي 6", level: 5, prereqs: [], optional: true },
  { id: "XXX5", code: "XXX xxx", name: "مقرر اختياري تخصصي 5", level: 5, prereqs: [], optional: true },
  { id: "XXX3", code: "XXX xxx", name: "مقرر اختياري تخصصي 3", level: 5, prereqs: [], optional: true },
];

const SVG_NS = "http://www.w3.org/2000/svg";
const LEVEL_X = { 1: 60, 2: 340, 3: 620, 4: 900, 5: 1180 };
const CARD_W = 170;
const CARD_H = 54;
const GAP_Y = 18;

const courseMap = Object.fromEntries(COURSES.map((course) => [course.id, course]));
const EDGES = buildEdges();
const POSITIONS = getPositions();

let selected = null;
let hovered = null;
let pan = { x: 0, y: 0 };
let zoom = 0.72;
let dragging = false;
let lastPos = { x: 0, y: 0 };

const canvas = document.getElementById("canvas");
const svg = document.getElementById("course-svg");
const viewport = document.getElementById("viewport");
const defs = document.getElementById("svg-defs");
const details = document.getElementById("details");
const stats = document.getElementById("stats");
const clearSelectionButton = document.getElementById("clear-selection");

init();

function init() {
  renderLegend();
  renderMarkers();
  renderStats();
  render();
  bindEvents();
}

function bindEvents() {
  document.getElementById("zoom-in").addEventListener("click", () => {
    zoom = Math.min(2, zoom + 0.1);
    render();
  });

  document.getElementById("zoom-out").addEventListener("click", () => {
    zoom = Math.max(0.3, zoom - 0.1);
    render();
  });

  document.getElementById("reset-view").addEventListener("click", () => {
    zoom = 0.72;
    pan = { x: 0, y: 0 };
    render();
  });

  clearSelectionButton.addEventListener("click", () => {
    selected = null;
    render();
  });

  canvas.addEventListener("mousedown", (event) => {
    if (event.target.closest(".course-card")) return;
    dragging = true;
    lastPos = { x: event.clientX, y: event.clientY };
    canvas.classList.add("dragging");
  });

  window.addEventListener("mousemove", (event) => {
    if (!dragging) return;
    pan = {
      x: pan.x + event.clientX - lastPos.x,
      y: pan.y + event.clientY - lastPos.y,
    };
    lastPos = { x: event.clientX, y: event.clientY };
    render();
  });

  window.addEventListener("mouseup", stopDrag);
  canvas.addEventListener("mouseleave", () => {
    stopDrag();
    if (hovered) {
      hovered = null;
      render();
    }
  });

  canvas.addEventListener("mousemove", (event) => {
    if (dragging) return;
    const card = event.target.closest(".course-card");
    const nextHovered = card ? card.dataset.courseId : null;
    if (hovered !== nextHovered) {
      hovered = nextHovered;
      render();
    }
  });

  canvas.addEventListener("wheel", (event) => {
    event.preventDefault();
    zoom = Math.min(2, Math.max(0.3, zoom - event.deltaY * 0.001));
    render();
  }, { passive: false });
}

function stopDrag() {
  dragging = false;
  canvas.classList.remove("dragging");
}

function buildEdges() {
  const edges = [];
  COURSES.forEach((course) => {
    course.prereqs.forEach((prereqId) => {
      if (courseMap[prereqId]) {
        edges.push({ from: prereqId, to: course.id });
      }
    });
  });
  return edges;
}

function getPositions() {
  const positions = {};
  [1, 2, 3, 4, 5].forEach((level) => {
    COURSES
      .filter((course) => course.level === level)
      .forEach((course, index) => {
        positions[course.id] = {
          x: LEVEL_X[level],
          y: 40 + index * (CARD_H + GAP_Y),
        };
      });
  });
  return positions;
}

function getRelated(id) {
  const ancestors = new Set();
  const descendants = new Set();
  if (!id) return { ancestors, descendants };

  function findAncestors(courseId) {
    EDGES.filter((edge) => edge.to === courseId).forEach((edge) => {
      if (!ancestors.has(edge.from)) {
        ancestors.add(edge.from);
        findAncestors(edge.from);
      }
    });
  }

  function findDescendants(courseId) {
    EDGES.filter((edge) => edge.from === courseId).forEach((edge) => {
      if (!descendants.has(edge.to)) {
        descendants.add(edge.to);
        findDescendants(edge.to);
      }
    });
  }

  findAncestors(id);
  findDescendants(id);
  return { ancestors, descendants };
}

function getEdgeHighlight(edge, active, ancestors, descendants) {
  if (!active) return "normal";
  if (edge.to === active && ancestors.has(edge.from)) return "prereq";
  if (edge.from === active && descendants.has(edge.to)) return "postreq";
  if (ancestors.has(edge.from) && ancestors.has(edge.to)) return "prereq";
  if (descendants.has(edge.from) && descendants.has(edge.to)) return "postreq";
  return "dim";
}

function getNodeState(id, active, ancestors, descendants) {
  if (!active) return "normal";
  if (id === active) return "selected";
  if (ancestors.has(id)) return "prereq";
  if (descendants.has(id)) return "postreq";
  return "dim";
}

function render() {
  const active = selected || hovered;
  const { ancestors, descendants } = getRelated(active);

  viewport.replaceChildren();
  viewport.setAttribute("transform", `translate(${pan.x / zoom},${pan.y / zoom}) scale(${zoom})`);

  renderLevelBackgrounds();
  renderEdges(active, ancestors, descendants);
  renderCards(active, ancestors, descendants);
  renderDetails(ancestors, descendants);
  clearSelectionButton.classList.toggle("hidden", !selected);
}

function renderLevelBackgrounds() {
  [1, 2, 3, 4, 5].forEach((level) => {
    const group = createSvg("g");
    const levelCourses = COURSES.filter((course) => course.level === level);
    const ys = levelCourses.map((course) => POSITIONS[course.id].y);
    const minY = Math.min(...ys) - 10;
    const maxY = Math.max(...ys) + CARD_H + 10;

    group.append(
      createSvg("rect", {
        x: LEVEL_X[level] - 10,
        y: minY,
        width: CARD_W + 20,
        height: maxY - minY,
        rx: 12,
        fill: LEVELS[level].color,
        stroke: LEVELS[level].border,
        "stroke-width": 1.5,
        opacity: 0.5,
      }),
      createSvg("text", {
        x: LEVEL_X[level] + CARD_W / 2,
        y: minY - 6,
        "text-anchor": "middle",
        "font-size": 11,
        "font-weight": 700,
        fill: LEVELS[level].header,
      }, LEVELS[level].label),
    );

    viewport.append(group);
  });
}

function renderEdges(active, ancestors, descendants) {
  EDGES.forEach((edge) => {
    const from = POSITIONS[edge.from];
    const to = POSITIONS[edge.to];
    if (!from || !to) return;

    const highlight = getEdgeHighlight(edge, active, ancestors, descendants);
    const x1 = from.x + CARD_W;
    const y1 = from.y + CARD_H / 2;
    const x2 = to.x;
    const y2 = to.y + CARD_H / 2;
    const middleX = (x1 + x2) / 2;

    const color = highlight === "prereq"
      ? "#1565c0"
      : highlight === "postreq"
        ? "#2e7d32"
        : highlight === "dim"
          ? "#e0e0e0"
          : "#bdbdbd";

    const opacity = highlight === "dim" ? 0.2 : highlight === "normal" ? 0.35 : 0.9;
    const strokeWidth = highlight === "prereq" || highlight === "postreq" ? 2.5 : 1;
    const marker = highlight !== "dim" && highlight !== "normal" ? `url(#arr-${highlight})` : "url(#arr-n)";

    viewport.append(createSvg("path", {
      class: "edge",
      d: `M${x1},${y1} C${middleX},${y1} ${middleX},${y2} ${x2},${y2}`,
      fill: "none",
      stroke: color,
      "stroke-width": strokeWidth,
      opacity,
      "marker-end": marker,
    }));
  });
}

function renderCards(active, ancestors, descendants) {
  COURSES.forEach((course) => {
    const position = POSITIONS[course.id];
    const level = LEVELS[course.level];
    const state = getNodeState(course.id, active, ancestors, descendants);
    const style = getCardStyle(course, state);

    const group = createSvg("g", {
      class: "course-card",
      tabindex: 0,
      role: "button",
      "data-course-id": course.id,
      "aria-label": `${course.code} ${course.name}`,
    });
    group.addEventListener("click", () => {
      selected = selected === course.id ? null : course.id;
      render();
    });
    group.addEventListener("keydown", (event) => {
      if (event.key !== "Enter" && event.key !== " ") return;
      event.preventDefault();
      selected = selected === course.id ? null : course.id;
      render();
    });

    group.append(createSvg("rect", {
      class: "course-rect",
      x: position.x,
      y: position.y,
      width: CARD_W,
      height: CARD_H,
      rx: 8,
      fill: style.background,
      stroke: style.border,
      "stroke-width": state === "selected" ? 2 : 1.5,
      opacity: style.opacity,
      filter: state === "selected" ? `drop-shadow(0 0 6px ${level.header})` : "",
    }));

    if (course.optional) {
      group.append(createSvg("rect", {
        x: position.x,
        y: position.y,
        width: CARD_W,
        height: CARD_H,
        rx: 8,
        fill: "none",
        stroke: style.border,
        "stroke-width": 1,
        "stroke-dasharray": "4,3",
        opacity: style.opacity * 0.6,
      }));
    }

    group.append(
      createSvg("text", {
        class: "course-label",
        x: position.x + CARD_W / 2,
        y: position.y + 18,
        "text-anchor": "middle",
        "font-size": 10,
        "font-weight": 700,
        fill: state === "selected" ? "#fff" : level.header,
        opacity: style.opacity,
      }, course.code),
      createSvg("text", {
        class: "course-name",
        x: position.x + CARD_W / 2,
        y: position.y + 34,
        "text-anchor": "middle",
        "font-size": 9.5,
        fill: style.textColor,
        opacity: style.opacity,
      }, shorten(course.name, 22)),
    );

    viewport.append(group);
  });
}

function getCardStyle(course, state) {
  const level = LEVELS[course.level];
  const style = {
    background: level.color,
    border: level.border,
    textColor: "#222",
    opacity: 1,
  };

  if (state === "selected") {
    style.background = level.header;
    style.border = "#fff";
    style.textColor = "#fff";
  } else if (state === "prereq") {
    style.background = "#e3f2fd";
    style.border = "#1565c0";
    style.textColor = "#0d47a1";
  } else if (state === "postreq") {
    style.background = "#e8f5e9";
    style.border = "#2e7d32";
    style.textColor = "#1b5e20";
  } else if (state === "dim") {
    style.opacity = 0.25;
  }

  return style;
}

function renderDetails(ancestors, descendants) {
  if (!selected) {
    details.innerHTML = `
      <div class="empty-state">
        <div class="empty-icon">🌳</div>
        <p>اضغط على أي مقرر لعرض تفاصيله وسلسلة متطلباته</p>
        <small>يمكنك تكبير/تصغير وسحب الشجرة بالماوس</small>
      </div>
    `;
    return;
  }

  const course = courseMap[selected];
  const level = LEVELS[course.level];
  const unlocks = EDGES.filter((edge) => edge.from === course.id).map((edge) => courseMap[edge.to]).filter(Boolean);

  details.innerHTML = `
    <div class="course-summary" style="background:${level.header}">
      <h2>${escapeHtml(course.code)}</h2>
      <p>${escapeHtml(course.name)}</p>
      <small>${escapeHtml(level.label)}</small>
      ${course.optional ? '<span class="optional-badge">مقرر اختياري</span>' : ""}
    </div>

    <div class="detail-block">
      <div class="detail-title blue">📋 المتطلبات السابقة المباشرة:</div>
      ${renderCourseList(course.prereqs.map((id) => courseMap[id]).filter(Boolean), "blue")}
    </div>

    <div class="detail-block">
      <div class="detail-title green">🔓 المقررات التي يفتحها:</div>
      ${renderCourseList(unlocks, "green")}
    </div>

    <div class="detail-block">
      <div class="detail-title">🔗 كامل السلسلة التراكمية:</div>
      <div class="chain-counts">
        <span class="chain-prereq">↑ ${ancestors.size} متطلب سابق</span>
        ·
        <span class="chain-postreq">↓ ${descendants.size} مقرر لاحق</span>
      </div>
    </div>
  `;

  details.querySelectorAll("[data-course-id]").forEach((item) => {
    item.addEventListener("click", () => {
      selected = item.dataset.courseId;
      render();
    });
  });
}

function renderCourseList(courses, colorClass) {
  if (courses.length === 0) {
    return `<div class="empty-list">${colorClass === "blue" ? "لا يوجد متطلبات سابقة" : "لا يفتح مقررات أخرى"}</div>`;
  }

  return courses.map((course) => `
    <div class="link-course ${colorClass}" data-course-id="${escapeHtml(course.id)}">
      <strong>${escapeHtml(course.code)}</strong> - ${escapeHtml(course.name)}
    </div>
  `).join("");
}

function renderLegend() {
  const legendLevels = document.getElementById("legend-levels");
  legendLevels.innerHTML = Object.entries(LEVELS).map(([level, data]) => `
    <span class="legend-item">
      <span class="swatch" style="background:${data.color};border:2px solid ${data.border}"></span>
      ${escapeHtml(data.label)}
    </span>
  `).join("");
}

function renderMarkers() {
  const markers = [
    ["arr-prereq", "#1565c0"],
    ["arr-postreq", "#2e7d32"],
    ["arr-n", "#aaa"],
  ];

  defs.replaceChildren(...markers.map(([id, color]) => {
    const marker = createSvg("marker", {
      id,
      markerWidth: 8,
      markerHeight: 8,
      refX: 7,
      refY: 3,
      orient: "auto",
    });
    marker.append(createSvg("path", { d: "M0,0 L0,6 L8,3 z", fill: color }));
    return marker;
  }));
}

function renderStats() {
  const rows = [1, 2, 3, 4, 5].map((level) => {
    const count = COURSES.filter((course) => course.level === level).length;
    return `
      <div class="stat-row">
        <span class="stat-dot" style="background:${LEVELS[level].header}"></span>
        <span class="stat-label">${escapeHtml(LEVELS[level].label)}</span>
        <span class="stat-count" style="color:${LEVELS[level].header}">${count} مقرر</span>
      </div>
    `;
  }).join("");

  stats.innerHTML = `
    <div class="stats-title">إحصائيات البرنامج</div>
    ${rows}
    <div class="stat-total">الإجمالي: ${COURSES.length} مقرر</div>
  `;
}

function createSvg(tagName, attributes = {}, text = "") {
  const element = document.createElementNS(SVG_NS, tagName);
  Object.entries(attributes).forEach(([key, value]) => {
    if (value !== null && value !== undefined && value !== "") {
      element.setAttribute(key, value);
    }
  });
  if (text) element.textContent = text;
  return element;
}

function shorten(text, maxLength) {
  return text.length > maxLength ? `${text.slice(0, maxLength - 1)}…` : text;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
