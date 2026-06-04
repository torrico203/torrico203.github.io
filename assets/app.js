(function () {
  "use strict";

  var DATA = window.__DATA__;
  var I18N = window.__I18N__;
  var SUPPORTED = ["ko", "en"];

  // ---------- helpers ----------------------------------------------------
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  // Pick the right localized value: { ko, en } object → string for current lang.
  function pick(value, lang) {
    if (value && typeof value === "object" && (value.ko != null || value.en != null)) {
      return value[lang] != null ? value[lang] : value.ko;
    }
    return value;
  }

  // Resolve "a.b.c" against an object.
  function path(obj, p) {
    var parts = p.split(".");
    var cur = obj;
    for (var i = 0; i < parts.length; i++) {
      if (cur == null) return undefined;
      cur = cur[parts[i]];
    }
    return cur;
  }

  // Resolve initial language: ?lang=, localStorage, browser, default.
  function detectLang() {
    var qs = new URLSearchParams(window.location.search);
    var fromQS = qs.get("lang");
    if (fromQS && SUPPORTED.indexOf(fromQS) !== -1) return fromQS;
    var fromLS = null;
    try { fromLS = localStorage.getItem("lang"); } catch (_) {}
    if (fromLS && SUPPORTED.indexOf(fromLS) !== -1) return fromLS;
    var browser = (navigator.language || "ko").slice(0, 2).toLowerCase();
    return SUPPORTED.indexOf(browser) !== -1 ? browser : "ko";
  }

  function persistLang(lang) {
    try { localStorage.setItem("lang", lang); } catch (_) {}
    var url = new URL(window.location.href);
    url.searchParams.set("lang", lang);
    window.history.replaceState({}, "", url.toString());
  }

  // ---------- renderers --------------------------------------------------
  // Each returns an HTML string for the element it owns.
  var renderers = {
    aboutSummary: function (lang) {
      return DATA.about[lang].map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    },
    aboutPM: function (lang) {
      return DATA.intros.pm[lang].map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    },
    aboutDev: function (lang) {
      return DATA.intros.dev[lang].map(function (p) { return "<p>" + esc(p) + "</p>"; }).join("");
    },

    skills: function (lang) {
      return DATA.skills.map(function (s) {
        var cls = s && s.ai ? " class=\"chip--ai\"" : "";
        return "<li" + cls + ">" + esc(pick(s, lang)) + "</li>";
      }).join("");
    },

    experience: function (lang) {
      return DATA.experience.map(function (job) {
        var details = (pick(job.details, lang) || []).map(function (d) {
          return "<div>" + esc(d) + "</div>";
        }).join("");
        return ""
          + "<li class=\"timeline__item\">"
          +   "<div class=\"timeline__period\">" + esc(job.period) + "</div>"
          +   "<div>"
          +     "<div class=\"timeline__company\">" + esc(pick(job.company, lang)) + "</div>"
          +     "<div class=\"timeline__role\">" + esc(pick(job.role, lang)) + "</div>"
          +     (details ? "<div class=\"timeline__details\">" + details + "</div>" : "")
          +   "</div>"
          + "</li>";
      }).join("");
    },

    education: function (lang) {
      return DATA.education.map(function (e) {
        return ""
          + "<li class=\"timeline__item\">"
          +   "<div class=\"timeline__period\">" + esc(e.period) + "</div>"
          +   "<div>"
          +     "<div class=\"timeline__company\">" + esc(pick(e.school, lang)) + "</div>"
          +     "<div class=\"timeline__details\"><div>" + esc(pick(e.info, lang)) + "</div></div>"
          +   "</div>"
          + "</li>";
      }).join("");
    },

    projects: function (lang) {
      var label = I18N[lang];
      return DATA.projects.map(function (p) {
        var bullets = (pick(p.bullets, lang) || []).map(function (b) {
          return "<li>" + esc(b) + "</li>";
        }).join("");

        var media = "";
        if (p.videoEmbed) {
          media = ""
            + "<div class=\"card__media\">"
            +   "<iframe src=\"" + esc(p.videoEmbed) + "\" allow=\"autoplay\" allowfullscreen loading=\"lazy\"></iframe>"
            + "</div>";
        }
        var meta = [];
        if (p.stack)     meta.push("<span><strong>" + esc(label["label.stack"])     + ":</strong> " + esc(p.stack) + "</span>");
        if (p.platforms) meta.push("<span><strong>" + esc(label["label.platforms"]) + ":</strong> " + esc(pick(p.platforms, lang)) + "</span>");

        var results = pick(p.results, lang);
        var resultChips = (results && results.length)
          ? "<ul class=\"card__results\">" + results.map(function (r) { return "<li>" + esc(r) + "</li>"; }).join("") + "</ul>"
          : "";

        var liveBtn = p.liveUrl
          ? "<a class=\"card__cta\" href=\"" + esc(p.liveUrl) + "\" target=\"_blank\" rel=\"noopener\">"
            + esc(label["label.visitProject"]) + " <span aria-hidden=\"true\">↗</span></a>"
          : "";
        var caseBtn = p.caseStudyUrl
          ? "<a class=\"card__cta card__cta--ghost\" href=\"" + esc(p.caseStudyUrl) + "\">"
            + esc(label["label.techDetails"]) + " <span aria-hidden=\"true\">→</span></a>"
          : "";
        var videoTextLink = p.videoLink
          ? "<a class=\"card__video-link\" href=\"" + esc(p.videoLink) + "\" target=\"_blank\" rel=\"noopener\">▶ " + esc(label["label.watchVideo"]) + ": " + esc(p.videoLink) + "</a>"
          : "";
        var actions = (liveBtn || caseBtn || videoTextLink)
          ? "<div class=\"card__actions\">" + liveBtn + caseBtn + videoTextLink + "</div>"
          : "";

        return ""
          + "<article class=\"card\">"
          +   media
          +   "<div class=\"card__body\">"
          +     "<div class=\"card__head\">"
          +       "<h3 class=\"card__title\">" + esc(pick(p.name, lang)) + "</h3>"
          +       "<span class=\"card__year\">" + esc(p.period || p.year) + "</span>"
          +     "</div>"
          +     (p.tagline ? "<div class=\"card__tagline\">" + esc(pick(p.tagline, lang)) + "</div>" : "")
          +     resultChips
          +     (meta.length ? "<div class=\"card__meta\">" + meta.join("") + "</div>" : "")
          +     (bullets ? "<ul class=\"card__bullets\">" + bullets + "</ul>" : "")
          +     actions
          +   "</div>"
          + "</article>";
      }).join("");
    },

    publishing: function (lang) {
      return DATA.publishing.map(function (e) {
        return "<li><span class=\"date\">" + esc(e.date) + "</span><span>" + esc(pick(e, lang)) + "</span></li>";
      }).join("");
    },

    awards: function (lang) {
      return DATA.awards.map(function (e) {
        return ""
          + "<li class=\"cred-card\">"
          +   "<div class=\"cred-card__date\">" + esc(e.date) + "</div>"
          +   "<div class=\"cred-card__title\">" + esc(pick(e.title, lang)) + "</div>"
          +   "<div class=\"cred-card__sub\">" + esc(pick(e.org, lang)) + "</div>"
          + "</li>";
      }).join("");
    },

    certifications: function (lang) {
      return DATA.certifications.map(function (c) {
        var no = c.no ? "<div class=\"cred-card__no\">#" + esc(c.no) + "</div>" : "";
        return ""
          + "<li class=\"cred-card\">"
          +   "<div class=\"cred-card__date\">" + esc(c.date) + "</div>"
          +   "<div class=\"cred-card__title\">" + esc(pick(c.name, lang)) + "</div>"
          +   "<div class=\"cred-card__sub\">" + esc(pick(c.issuer, lang)) + "</div>"
          +   no
          + "</li>";
      }).join("");
    },

    govProjects: function (lang) {
      var label = I18N[lang];
      var thead = ""
        + "<thead><tr>"
        +   "<th>" + esc(label["table.year"])    + "</th>"
        +   "<th>" + esc(label["table.title"])   + "</th>"
        +   "<th>" + esc(label["table.agency"])  + "</th>"
        +   "<th>" + esc(label["table.content"]) + "</th>"
        +   "<th>" + esc(label["table.role"])    + "</th>"
        + "</tr></thead>";
      var tbody = "<tbody>" + DATA.govProjects.map(function (g) {
        return "<tr>"
          +   "<td>" + esc(g.year) + "</td>"
          +   "<td>" + esc(pick(g.title,   lang)) + "</td>"
          +   "<td>" + esc(pick(g.agency,  lang)) + "</td>"
          +   "<td>" + esc(pick(g.content, lang)) + "</td>"
          +   "<td>" + esc(pick(g.role,    lang)) + "</td>"
          + "</tr>";
      }).join("") + "</tbody>";
      return thead + tbody;
    },

    military: function (lang) {
      var m = DATA.military;
      return esc(m.period + " · " + pick(m.detail, lang));
    },

    contact: function (lang) {
      var c = DATA.profile.contact;
      var label = I18N[lang];
      var rows = [
        [label["label.email"],   "<a href=\"mailto:" + esc(c.email) + "\">" + esc(c.email) + "</a>"],
        [label["label.phone"],   esc(c.phone)],
        [label["label.website"], "<a href=\"" + esc(c.website) + "\" target=\"_blank\" rel=\"noopener\">" + esc(c.website) + "</a>"],
        [label["label.github"],  "<a href=\"" + esc(c.github)  + "\" target=\"_blank\" rel=\"noopener\">" + esc(c.github)  + "</a>"],
        [label["label.address"], esc(pick(c.address, lang))]
      ];
      return rows.map(function (r) {
        return "<dt>" + esc(r[0]) + "</dt><dd>" + r[1] + "</dd>";
      }).join("");
    }
  };

  // ---------- apply pass --------------------------------------------------
  function applyLang(lang) {
    document.documentElement.lang = lang;
    var label = I18N[lang];

    // <title> via data-i18n
    document.title = label["site.title"] || document.title;

    // [data-i18n] — UI labels
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (label[key] != null) el.textContent = label[key];
    });

    // [data-content] — values from DATA, localized
    document.querySelectorAll("[data-content]").forEach(function (el) {
      var v = pick(path(DATA, el.getAttribute("data-content")), lang);
      if (v != null) el.textContent = v;
    });

    // [data-attr-src] — set src from DATA path
    document.querySelectorAll("[data-attr-src]").forEach(function (el) {
      var v = pick(path(DATA, el.getAttribute("data-attr-src")), lang);
      if (v != null) el.setAttribute("src", v);
    });

    // [data-render] — call the named renderer
    document.querySelectorAll("[data-render]").forEach(function (el) {
      var key = el.getAttribute("data-render");
      var fn = renderers[key];
      if (typeof fn === "function") el.innerHTML = fn(lang);
    });
  }

  // ---------- tabs --------------------------------------------------------
  function wireTabs() {
    var tabs = document.querySelectorAll(".tab");
    tabs.forEach(function (tab) {
      tab.addEventListener("click", function () {
        var name = tab.getAttribute("data-tab");
        document.querySelectorAll(".tab").forEach(function (t) {
          t.classList.toggle("is-active", t === tab);
        });
        document.querySelectorAll(".tab-panel").forEach(function (panel) {
          panel.classList.toggle("is-active", panel.getAttribute("data-panel") === name);
        });
      });
    });
  }

  // ---------- lang toggle -------------------------------------------------
  function wireLangToggle() {
    var btn = document.getElementById("lang-toggle");
    if (!btn) return;
    btn.addEventListener("click", function () {
      var current = document.documentElement.lang;
      var next = current === "ko" ? "en" : "ko";
      persistLang(next);
      applyLang(next);
    });
  }

  // ---------- boot --------------------------------------------------------
  document.addEventListener("DOMContentLoaded", function () {
    var lang = detectLang();
    persistLang(lang);
    applyLang(lang);
    wireTabs();
    wireLangToggle();
  });
})();
