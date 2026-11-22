/* Shared site behaviour. You normally don't need to edit this file. */
(function () {
  const S = window.SITE, NAV = window.NAV, I = window.ICONS;
  const page = document.body.dataset.page;
  const $ = (sel) => document.querySelector(sel);
  const esc = (s) => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const icon = (name) => I[name] || "";
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Theme ---------- */
  function setTheme(t) {
    document.documentElement.dataset.theme = t;
    try { localStorage.setItem("theme", t); } catch (e) {}
  }

  /* ---------- Nav ---------- */
  const navEl = $("#site-nav");
  if (navEl) {
    navEl.innerHTML = `<nav class="nav" aria-label="Main">
      ${NAV.map(n => `<a href="${n.href}" class="${n.page === page ? "active" : ""}" ${n.page === page ? 'aria-current="page"' : ""} title="${esc(n.label)}">${icon(n.icon)}<span>${esc(n.label)}</span></a>`).join("")}
      <span class="sep" aria-hidden="true"></span>
      <button class="theme-btn" type="button" aria-label="Toggle dark mode"><span class="sun">${icon("sun")}</span><span class="moon">${icon("moon")}</span></button>
    </nav>`;
    navEl.querySelector(".theme-btn").addEventListener("click", () => {
      setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark");
    });
  }

  /* ---------- Footer ---------- */
  const footEl = $("#site-footer");
  if (footEl) {
    footEl.innerHTML = `<div class="wrap">
      <p><span class="motto">${esc(S.footerMotto)}</span> · ${esc(S.footerLine)}</p>
      <p>© ${new Date().getFullYear()} ${esc(S.name)}</p></div>`;
  }


  /* ---------- Home: faint gene-network background ---------- */
  function networkSVG() {
    let seed = 7;                                   // change the number for a different pattern
    const rnd = () => (seed = (seed * 16807) % 2147483647) / 2147483647;
    const W = 1400, H = 820, nodes = [];
    for (let i = 0; i < 58; i++) nodes.push({ x: rnd() * W, y: rnd() * H, r: 1.6 + rnd() * 2.6 });
    let edges = "";
    nodes.forEach((a, i) => {
      nodes.map((b, j) => ({ j, d: Math.hypot(a.x - b.x, a.y - b.y) }))
        .filter(o => o.j > i && o.d < 210).sort((p, q) => p.d - q.d).slice(0, 3)
        .forEach(o => { const b = nodes[o.j]; edges += `<line x1="${a.x.toFixed(1)}" y1="${a.y.toFixed(1)}" x2="${b.x.toFixed(1)}" y2="${b.y.toFixed(1)}"/>`; });
    });
    const dots = nodes.map(n => `<circle cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${n.r.toFixed(1)}"/>`).join("");
    return `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" aria-hidden="true" focusable="false">
      <g class="net-edges">${edges}</g><g class="net-nodes">${dots}</g></svg>`;
  }

  document.querySelectorAll(".net-bg").forEach(el => { el.innerHTML = networkSVG(); });

  /* ---------- Home page ---------- */
  if (page === "home") {

    const h = new Date().getHours();
    const g = h >= 5 && h < 12 ? S.greeting.morning : h >= 12 && h < 17 ? S.greeting.afternoon : S.greeting.evening;

    $("#hero-text").innerHTML = `
      <span class="badge"><span class="dot" aria-hidden="true"></span>${esc(S.badge)}</span>
      <p class="greeting">${esc(g)} <span aria-hidden="true">👋</span></p>
      <h1>I'm ${esc(S.name)}</h1>
      <p class="typing" aria-label="${esc(S.typingPrefix + " " + S.typingLine)}"><span aria-hidden="true"><span class="prefix">${esc(S.typingPrefix)} </span><span class="typed"></span><span class="cursor"></span></span></p>
      <p class="bio">${esc(S.bio)}</p>
      <ul class="info">${S.info.map(i => `<li>${icon(i.icon)}${esc(i.text)}</li>`).join("")}</ul>
      <div class="actions">
        <a class="btn btn-primary" href="${esc(S.cv)}" target="_blank" rel="noopener">${icon("download")}Download CV</a>
      </div>
      <div class="divider"></div>
      <div class="findme"><span class="label">Find me on:</span>
        ${S.links.filter(l => l.url).map(l => `<a href="${esc(l.url)}" ${l.url.startsWith("mailto:") ? "" : 'target="_blank" rel="noopener"'} aria-label="${esc(l.label)}" title="${esc(l.label)}">${icon(l.icon)}</a>`).join("")}
      </div>`;

    $("#hero-photo").innerHTML = `<div class="photo">
      <div class="placeholder">${icon("user")}<span>Your photo</span></div>
      <img src="${esc(S.photo)}" alt="Portrait of ${esc(S.name)}" onerror="this.remove()">
    </div>`;

    // Typing: types the line once, then stays
    const typed = $(".typed");
    if (reduceMotion) { typed.textContent = S.typingLine; }
    else {
      let i = 0;
      const tick = () => {
        typed.textContent = S.typingLine.slice(0, ++i);
        if (i < S.typingLine.length) setTimeout(tick, S.typingLine[i - 1] === "·" ? 260 : 38);
      };
      setTimeout(tick, 600);
    }

    $("#focus-grid").innerHTML = S.focusAreas.map(f => `
      <article class="card reveal"><div class="ic">${icon(f.icon)}</div>
      <h3>${esc(f.title)}</h3>${f.keywords ? `<p>${esc(f.keywords)}</p>` : ""}</article>`).join("");

    $("#work-grid").innerHTML = S.currentWork.map(w => `
      <article class="card work-card reveal"><h3>${esc(w.title)}</h3><p>${esc(w.line)}</p>
      <a class="more" href="${esc(w.link)}">Read more</a></article>`).join("");
    if (S.workTagline) $("#work-grid").insertAdjacentHTML("afterend", `<p class="work-tagline reveal">${esc(S.workTagline)}</p>`);

    const d = S.onMyDesk;
    $("#desk").innerHTML = `<div class="desk reveal"><div class="ic">${icon("book")}</div><div>
      <div class="lbl">On my desk</div>
      <div class="what">${d.link ? `<a href="${esc(d.link)}" target="_blank" rel="noopener" style="text-decoration:none">${esc(d.title)}</a>` : esc(d.title)}</div>
      <div class="who">${esc(d.author)}</div></div></div>`;
  }

  /* ---------- About page ---------- */
  if (page === "about") {
    const md = (s) => esc(s).replace(/\*(.+?)\*/g, "<em>$1</em>");
    $("#belief").innerHTML = `<blockquote class="belief reveal"><span class="qmark" aria-hidden="true">“</span><p>${esc(S.beliefLine)}</p></blockquote>`;
    $("#about-text").innerHTML = S.aboutParagraphs.map(p => `<p>${md(p)}</p>`).join("");
    $("#skills").innerHTML = S.skills.map(s => `
      <div class="skill-row reveal"><h3>${esc(s.group)}</h3>
      <ul>${s.items.map(i => typeof i === "string" ? `<li>${esc(i)}</li>` : `<li class="skill-link"><a href="${esc(i.url)}" target="_blank" rel="noopener">${esc(i.label)} ↗</a></li>`).join("")}</ul></div>`).join("");
  }

  /* ---------- Education page ---------- */
  if (page === "education") {
    $("#edu-timeline").innerHTML = S.education.filter(e => !e.hidden).map(e => `
      <div class="tl-item reveal"><div class="tl-when">${esc(e.when)}</div>
      <h3>${esc(e.degree)}</h3><div class="tl-where">${esc(e.school)}</div>
      ${e.detail ? `<div class="tl-detail">${esc(e.detail)}</div>` : ""}</div>`).join("");

    const t = S.englishTest;
    const engEl = $("#english");
    if (t && t.overall) {
      engEl.innerHTML = `<h2 class="section-title">English Proficiency</h2>
        <div class="card info-card reveal"><div class="ic">${icon("book")}</div><div>
        <h3>${esc(t.test)} · Overall ${esc(t.overall)}</h3>
        <p>${[t.sections, t.date ? "Taken " + t.date : ""].filter(Boolean).map(esc).join(" · ")}</p></div></div>`;
    } else { engEl.remove(); }

    $("#coursework").innerHTML = S.coursework.map(c => `
      <div class="skill-row reveal"><h3>${esc(c.group)}</h3>
      <ul>${c.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul></div>`).join("");

    const th = S.thesis;
    $("#thesis").innerHTML = `<div class="card info-card reveal"><div class="ic">${icon("flask")}</div><div>
      <div class="kicker">Undergraduate thesis</div>
      <h3 class="thesis-title">${esc(th.title)}</h3>
      <p>Supervisor: ${esc(th.supervisor)}</p>
      <a class="more" href="${esc(th.link)}">View on Research page</a></div></div>`;

    $("#achievements").innerHTML = S.achievements.map(g => ({ ...g, items: g.items.filter(a => !a.hidden) })).filter(g => g.items.length).map(g => `
      <div class="ach-group reveal"><h3>${esc(g.group)}</h3>
      <ul>${g.items.map(a => `<li><div><div class="ach-title">${esc(a.title)}</div><div class="ach-note">${esc(a.note)}</div></div><div class="ach-when">${esc(a.when)}</div></li>`).join("")}</ul></div>`).join("");
  }

  /* ---------- Research page ---------- */
  if (page === "research") {
    const md = (s) => esc(s).replace(/\*(.+?)\*/g, "<em>$1</em>");
    $("#statement").innerHTML = `<p class="statement reveal">${esc(S.researchStatement)}</p>`;
    $("#toc").innerHTML = `<span class="toc-label">On this page</span>` +
      S.research.map(r => `<a href="#${esc(r.id)}">${esc(r.short || r.title)}</a>`).join("");
    $("#research-list").innerHTML = S.research.map(r => {
      const links = [
        r.links && r.links.paper ? `<a class="link-chip" href="${esc(r.links.paper)}" target="_blank" rel="noopener">${icon("file-text")}Paper</a>` : "",
        r.links && r.links.code ? `<a class="link-chip" href="${esc(r.links.code)}" target="_blank" rel="noopener">${icon("brand-github")}Code</a>` : ""
      ].join("");
      const block = (label, html) => html ? `<div class="r-block"><h4>${label}</h4>${html}</div>` : "";
      return `<article id="${esc(r.id)}" class="r-entry reveal">
        <div class="r-head">
          ${r.status ? `<span class="status">${esc(r.status)}</span>` : ""}
          <h3>${esc(r.title)}</h3>
          <div class="r-meta">${esc(r.meta)}</div>
        </div>
        ${r.story ? `<p class="r-story">${md(r.story)}</p>` : ""}
        ${r.line ? `<p class="r-line">${md(r.line)}</p>` : ""}
        ${block("Question", r.question ? `<p>${md(r.question)}</p>` : "")}
        ${r.figure && r.figure.src ? `<figure class="r-fig"><a href="${esc(r.figure.src)}" target="_blank" rel="noopener" title="Open full size"><img src="${esc(r.figure.src)}" alt="${esc(r.figure.caption || r.title)}" loading="lazy"></a>${r.figure.caption ? `<figcaption>${md(r.figure.caption)}</figcaption>` : ""}</figure>` : ""}
        ${block("Key findings", r.findings && r.findings.length ? `<ul>${r.findings.map(f => `<li>${md(f)}</li>`).join("")}</ul>` : "")}
        ${r.approach || r.worked || r.didnt ? `<details class="r-more"><summary>More details</summary>
          ${block("Approach", r.approach ? `<p>${md(r.approach)}</p>` : "")}
          ${r.worked || r.didnt ? `<div class="wwd">
            ${r.worked ? `<div class="ww"><h4>${icon("circle-check")}What worked</h4><p>${md(r.worked)}</p></div>` : ""}
            ${r.didnt ? `<div class="wd"><h4>${icon("circle-x")}What didn't</h4><p>${md(r.didnt)}</p></div>` : ""}
          </div>` : ""}
        </details>` : ""}
        ${(r.tools && r.tools.length) || links ? `<div class="r-foot">
          <ul class="tools">${(r.tools || []).map(t => `<li>${esc(t)}</li>`).join("")}</ul>
          <div class="r-links">${links}</div></div>` : ""}
      </article>`;
    }).join("");
  }

  /* ---------- Publications page ---------- */
  if (page === "publications") {
    if (S.publicationsIntro) $("#pub-intro").textContent = S.publicationsIntro;
    const groups = [];
    S.publications.forEach(p => { let g = groups.find(x => x.type === p.type); if (!g) groups.push(g = { type: p.type, items: [] }); g.items.push(p); });
    $("#pub-list").innerHTML = groups.map(g => `
      <section class="pub-group"><span class="pub-group-label">${esc(g.type)}</span>
      <div class="r-grid">${g.items.map(p => {
        const authors = p.authors.map(a => a === S.name ? `<strong>${esc(a)}</strong>` : esc(a)).join(", ");
        const links = [
          p.links.paper ? `<a class="link-chip" href="${esc(p.links.paper)}" target="_blank" rel="noopener">${icon("file-text")}Paper</a>` : "",
          p.links.code ? `<a class="link-chip" href="${esc(p.links.code)}" target="_blank" rel="noopener">${icon("brand-github")}Code</a>` : "",
          p.bibtex ? `<button class="link-chip bib-btn" type="button" data-bib="${esc(p.bibtex)}">${icon("quote")}<span>BibTeX</span></button>` : "",
          p.more ? `<a class="link-chip" href="${esc(p.more)}">${icon("flask")}Details</a>` : ""
        ].join("");
        return `<article class="r-entry reveal">
          <div class="r-head">
            <div class="pub-tags">${p.status ? `<span class="status">${esc(p.status)}</span>` : ""}${p.note ? `<span class="pub-note">${esc(p.note)}</span>` : ""}</div>
            <h3>${esc(p.title)}</h3>
            <div class="r-meta">${authors}</div>
            <div class="r-meta" style="font-style:italic;margin-top:.2rem">${esc(p.venue)}, ${esc(p.year)}</div>
          </div>
          ${p.figure ? `<figure class="r-fig"><a href="${esc(p.figure)}" target="_blank" rel="noopener" title="Open full size"><img src="${esc(p.figure)}" alt="Figure from the paper" loading="lazy"></a></figure>` : ""}
          ${p.summary ? `<div class="r-block"><h4>Summary</h4><p>${esc(p.summary)}</p></div>` : ""}
          ${links ? `<div class="r-foot"><div class="r-links">${links}</div></div>` : ""}
        </article>`;
      }).join("")}</div></section>`).join("");
    document.querySelectorAll(".bib-btn").forEach(btn => btn.addEventListener("click", async () => {
      const label = btn.querySelector("span");
      try { await navigator.clipboard.writeText(btn.dataset.bib); label.textContent = "Copied"; }
      catch (e) { label.textContent = "Copy failed"; }
      setTimeout(() => { label.textContent = "BibTeX"; }, 1800);
    }));
  }

  /* ---------- Projects page ---------- */
  if (page === "projects") {
    const cats = S.projectCategories.filter(c => S.projects.some(p => p.category === c.name));
    let current = "All";
    const card = (p) => {
      const c = cats.find(x => x.name === p.category) || {};
      const meta = [p.course, p.year].filter(Boolean).join(" · ");
      return `<article class="card proj-card reveal in">
        ${p.image ? `<div class="proj-thumb"><img src="${esc(p.image)}" alt="" loading="lazy"></div>` : `<div class="proj-thumb proj-banner" style="background:${esc(c.color || "var(--accent)")}"><span class="ic">${icon(c.icon)}</span></div>`}
        <div class="proj-body">
          ${meta ? `<div class="kicker">${esc(meta)}</div>` : ""}
          <h3>${esc(p.title)}</h3><p>${esc(p.line)}</p>
          <div class="proj-foot"><ul class="tools">${(p.tags || []).map(t => `<li>${esc(t)}</li>`).join("")}</ul>
          <div class="r-links">${p.site ? `<a class="link-chip" href="${esc(p.site)}" target="_blank" rel="noopener">${esc(p.siteLabel || "Visit")}</a>` : ""}${p.code ? `<a class="link-chip" href="${esc(p.code)}" target="_blank" rel="noopener">${icon("brand-github")}Code</a>` : ""}</div></div>
        </div></article>`;
    };
    function render() {
      const list = current === "All" ? cats : cats.filter(c => c.name === current);
      $("#proj-list").innerHTML = list.map(c => `
        <section class="proj-group">${current === "All" ? `<h2 class="group-title">${icon(c.icon)}${esc(c.name)}</h2>` : ""}
        <div class="proj-grid">${S.projects.filter(p => p.category === c.name).map(card).join("")}</div></section>`).join("");
    }
    const tabs = $("#proj-tabs");
    tabs.innerHTML = ["All", ...cats.map(c => c.name)].map(n =>
      `<button type="button" class="tab${n === current ? " on" : ""}" data-cat="${esc(n)}">${esc(n)}</button>`).join("");
    tabs.addEventListener("click", e => {
      const b = e.target.closest(".tab"); if (!b) return;
      current = b.dataset.cat;
      tabs.querySelectorAll(".tab").forEach(t => t.classList.toggle("on", t === b));
      render();
    });
    render();
  }

  /* ---------- Scroll reveal ---------- */
  const items = document.querySelectorAll(".reveal");
  if (reduceMotion || !("IntersectionObserver" in window)) items.forEach(el => el.classList.add("in"));
  else {
    const io = new IntersectionObserver(entries => entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    }), { threshold: 0.12 });
    items.forEach(el => io.observe(el));
  }
})();
