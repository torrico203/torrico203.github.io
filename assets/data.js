// 사이트 콘텐츠 데이터. 텍스트는 { ko, en } 형태로 짝지어 둠.
// JSON 대신 .js 모듈로 두면 file:// 로 열 때 fetch 없이 로드된다.
window.__DATA__ = {
  profile: {
    name:        { ko: "임재균",   en: "JaeGyun Lim" },
    nameHanja:   "任宰均",
    headline:    {
      ko: "11년차 게임 기획·개발 · PD/PM/PO로 16종 프로젝트 리딩",
      en: "11 years in game design & dev · Led 16 projects as PD/PM/PO"
    },
    photo: "images/임재균.png",
    contact: {
      email:   "torrico203@gmail.com",
      phone:   "010-7268-1012",
      website: "http://zip-lab.co.kr",
      github:  "https://github.com/torrico203",
      address: {
        ko: "서울특별시 강남구 율현동 밤고개로21길 25",
        en: "Bamgogae-ro 21-gil 25, Yulhyeon-dong, Gangnam-gu, Seoul"
      }
    }
  },

  about: {
    ko: [
      "11년간 공동대표로서 다양한 게임을 직접 기획·개발하고, 퍼블리싱 계약·글로벌 런칭·투자 유치 등 게임 스타트업의 전 과정을 리딩했습니다.",
      "스타트업 대표 출신이라는 이력은 '주도성'이라는 강점이기도 했지만 재취업 시장에서는 \"실무 감각이 무뎌졌을 것\"이라는 편견이기도 했습니다. 직전 회사 입사 당시 신입에 준하는 처우를 감수하고 현장 중심의 역할부터 다시 시작했고, 입사 4개월 만에 팀장 역할을 맡으며 모바일·웹·TV 3개 플랫폼 동시 런칭을 주도했습니다."
    ],
    en: [
      "For 11 years I co-led a game studio, planning and developing titles end-to-end and driving the full lifecycle of a game startup — publishing deals, global launches, and investment.",
      "Coming from a CEO background was both an asset (ownership) and a liability in re-employment (\"out of touch with hands-on work\"). I took a near-entry-level role at my previous company and started over from the ground up — and within four months had been promoted to team lead, going on to drive a simultaneous launch across mobile, web, and TV."
    ]
  },

  // 두 가지 자기소개 (about.html 의 PM/Dev 분리)
  intros: {
    pm: {
      ko: [
        "소규모 게임사를 11년간 공동 운영하며, 기획·개발부터 출시·운영·서비스 종료·법인 청산까지 게임 라이프사이클 전 과정을 실무로 경험했습니다.",
        "방치형 RPG, 디펜스 RPG 같은 미드코어부터 MMORPG까지 다양한 장르의 프로젝트를 주도하며, 작은 규모에서도 실질적인 성과를 내기 위한 전략과 실행을 직접 고민하고 실천했습니다.",
        "매출·이탈률·행동 데이터를 기반으로 업데이트와 수익화 전략을 도출하고, 국내외 퍼블리싱 계약을 직접 체결하며 사업 총괄로서의 역할도 수행했습니다."
      ],
      en: [
        "For 11 years I co-ran a small game studio, owning the full game lifecycle from design and development through launch, live ops, sunset, and corporate wind-down.",
        "I led projects across genres — from mid-core (idle RPG, defense RPG) to MMORPG — and worked out, hands-on, the strategies and execution needed to deliver real results at small scale.",
        "I drove updates and monetization strategies from revenue, churn, and behavioral data, and personally closed publishing deals at home and abroad as the business owner."
      ]
    },
    dev: {
      ko: [
        "기획자이자 개발자로서 RPG 기반 게임의 기획·개발·서비스 전 과정을 직접 수행해 왔습니다.",
        "MMORPG에서는 클래스별 역할·성장 구조·경제 시스템까지 설계했고, 방치형/로그라이트 RPG에서는 반복 피로도를 줄이는 콘텐츠 구조와 수집 요소 설계로 몰입도를 높였습니다.",
        "Unity·Node.js·HTML5 등을 직접 다루며 프로토타입을 구현했고, 출시 후에는 리텐션·전환율·ARPU 지표 분석으로 실질적인 개선까지 이어왔습니다."
      ],
      en: [
        "I work as both a designer and a developer, running RPG-based projects end-to-end from design through development and live service.",
        "On MMORPG I designed class roles, progression, and the in-game economy. On idle and roguelite RPGs I built content structures and collection systems that reduce grind fatigue and raise engagement.",
        "I prototype hands-on with Unity, Node.js, and HTML5, and after launch I drive concrete improvements from retention, conversion, and ARPU analysis."
      ]
    }
  },

  skills: [
    "Unity (C#)", "TypeScript", "JavaScript", "HTML5",
    "Phaser.js", "Node.js", "WebGL", "Firebase", "Git"
  ],

  experience: [
    {
      period: "2025.08 — Present",
      company: { ko: "(주)마코빌", en: "Macovill Inc." },
      role:    { ko: "캐주얼게임팀 팀장", en: "Casual Game Team Lead" },
      details: {
        ko: [
          "2025.12 — 현재: 캐주얼게임팀 팀장 (승진)",
          "2025.08 — 2025.11: 게임 클라이언트 개발자",
          "벨리곰 버블팝, 아르미 공작소(웹서비스 플랫폼) 개발"
        ],
        en: [
          "2025.12 — Present: Promoted to Casual Game Team Lead",
          "2025.08 — 2025.11: Game Client Developer",
          "Built Bellygom Bubble Pop and Armi Workshop (web service platform)"
        ]
      }
    },
    {
      period: "2015.01 — 2025.05",
      company: { ko: "(주)집연구소", en: "Zip Lab Co., Ltd." },
      role:    { ko: "공동 대표", en: "Co-CEO" },
      details: {
        ko: ["코즈믹 온라인, 메이헴의 유산, 히로익 택틱스, 잡캐 키우기, 서울 좀비 기획 및 개발"],
        en: ["Designed and built Cosmic Online, Heritage of Mayhem, Heroic Tactics, Hybrid Hero, and Seoul Zombie"]
      }
    },
    {
      period: "2013.02 — 2013.08",
      company: { ko: "심신수련원 — 게임 개발 동아리", en: "Shimshin Training Center — Game Dev Club" },
      role:    { ko: "부장", en: "Head of Club" },
      details: { ko: [], en: [] }
    },
    {
      period: "2009.03 — 2014.02",
      company: { ko: "세종대 컴퓨터공학과 학생회", en: "Sejong Univ. CS Student Council" },
      role:    { ko: "수습부원 → 기획부장 → 학생회장", en: "Probationary Member → Planning Manager → Council President" },
      details: { ko: [], en: [] }
    }
  ],

  education: [
    {
      period: "2009.03 — 2015.08",
      school: { ko: "세종대학교 (졸업)", en: "Sejong University (Graduated)" },
      info:   { ko: "전자정보공학대학 컴퓨터공학 전공 (3.51 / 4.5)",
                en: "B.S. Computer Engineering, College of Electronics & Information Engineering (3.51 / 4.5)" }
    },
    {
      period: "2005.03 — 2008.02",
      school: { ko: "동북고등학교 (졸업)", en: "Dongbuk High School (Graduated)" },
      info:   { ko: "인문계", en: "Humanities" }
    }
  ],

  // 프로젝트: 웹서비스(아르미 공작소) + 게임 8종
  projects: [
    {
      id: "armi",
      year: "2026",
      period: "2026.01 — Present",
      kind: { ko: "웹 서비스", en: "Web Service" },
      name: { ko: "아르미 공작소: IP 기반 콘텐츠 플랫폼",
              en: "Armi Workshop: IP-based Content Platform" },
      tagline: { ko: "IP 콘텐츠 플랫폼 · 글로벌 결제 + 광고 듀얼 수익화",
                 en: "IP content platform · dual monetization (payments + ads)" },
      stack: "Vite 7 · Firebase v12 · Cloudflare Workers · Xsolla · Phaser 3",
      liveUrl: "https://www.armiicraft.com/",
      caseStudyUrl: "projects/armi.html",
      results: {
        ko: ["Xsolla PG v3", "AdSense 8슬롯", "16 MPA 엔트리", "10 Cloud Functions", "1인 풀스택"],
        en: ["Xsolla PG v3", "8-slot AdSense", "16 MPA entries", "10 Cloud Functions", "Solo full-stack"]
      },
      bullets: {
        ko: ["결제 (Xsolla v3) · 서버리스 (Firebase Functions) · 엣지 보안 (Cloudflare Workers) · SEO/SSR · RBAC + 감사 로그까지 풀스택 1인 운영. 디테일은 기술 상세 참고."],
        en: ["Solo full-stack: payments (Xsolla v3), serverless (Firebase Functions), edge security (Cloudflare Workers), SEO/SSR, RBAC + audit logs. See tech notes for details."]
      }
    },
    {
      id: "bellygom",
      year: "2025",
      period: "2025.08 — 2025.12",
      kind: { ko: "게임", en: "Game" },
      name: { ko: "벨리곰 버블팝", en: "Bellygom Bubble Pop" },
      tagline: { ko: "버블 슈팅 캐주얼 · 단일 코드베이스로 4개 플랫폼 동시 출시",
                 en: "Casual bubble shooter · single codebase, 4 platforms" },
      stack: "TypeScript · Phaser 3 · Vite · Capacitor · webOS · Apps-in-Toss",
      liveUrl: "https://play.google.com/store/apps/details?id=com.macovill.bellygombp",
      caseStudyUrl: "projects/bellygom.html",
      results: {
        ko: ["webOS Smart TV", "Toss 미니앱", "Google Play", "Web"],
        en: ["webOS Smart TV", "Toss Miniapp", "Google Play", "Web"]
      },
      bullets: {
        ko: ["TypeScript/Phaser 단일 코드베이스를 PlatformManager 추상화로 4개 플랫폼에 동시 배포. 결제·광고·렌더·승인 대응까지 단독 리드. 디테일은 기술 상세 참고."],
        en: ["Single TypeScript/Phaser codebase shipped to four platforms via a PlatformManager abstraction. Solo lead across payments, ads, rendering, and store certification. See tech notes."]
      },
      videoEmbed: "https://drive.google.com/file/d/1BtxwHBqJPwcMGO9lKKcPM0oorQQsDBE8/preview",
      videoLink:  "https://drive.google.com/file/d/1BtxwHBqJPwcMGO9lKKcPM0oorQQsDBE8/view?usp=sharing"
    },
    {
      id: "forgetful-hero",
      year: "2025",
      period: "2025.03 — 2025.07",
      kind: { ko: "게임", en: "Game" },
      name: { ko: "까먹는 용사", en: "Forgetful Hero" },
      tagline: { ko: "로그라이크 액션 RPG · 개인(팀) 프로젝트",
                 en: "Roguelike action RPG · personal (team) project" },
      stack: "Unity",
      bullets: {
        ko: ["Unity 기반 로그라이크 RPG. 시스템 설계·UI/UX·연출 구조·클라이언트 및 개발툴 개발 전반 담당."],
        en: ["Unity-based roguelike RPG. Owned system design, UI/UX, presentation structure, client implementation, and dev tooling."]
      },
      videoEmbed: "https://drive.google.com/file/d/1ynlCXoKK2VmjQFp_fjHgMVUhUWpYEk4y/preview",
      videoLink:  "https://drive.google.com/file/d/1ynlCXoKK2VmjQFp_fjHgMVUhUWpYEk4y/view?usp=sharing"
    },
    {
      id: "seoul-zombie",
      year: "2023",
      period: "2022.03 — 2024.09",
      kind: { ko: "게임", en: "Game" },
      name: { ko: "서울 좀비", en: "Seoul Zombie" },
      tagline: { ko: "방치형 RPG · 서울 배경 현대 SF 판타지",
                 en: "Idle RPG · modern SF fantasy set in Seoul" },
      stack: "Unity",
      results: {
        ko: ["Google Play 50만+ 다운로드", "JustClick 글로벌 퍼블리싱"],
        en: ["500K+ Google Play downloads", "Global publishing — JustClick"]
      },
      bullets: {
        ko: ["주식회사 집연구소. 시스템 설계·UI/UX·iOS 빌드·Addressable/Pooling 최적화 담당."],
        en: ["Zip Lab Inc. Owned system design, UI/UX, iOS build, and Addressable/pooling optimization."]
      },
      videoEmbed: "https://www.youtube.com/embed/5vo2NKlsClM",
      videoLink:  "https://youtu.be/5vo2NKlsClM"
    },
    {
      id: "hybrid-hero",
      year: "2022",
      period: "2020.02 — 2022.02",
      kind: { ko: "게임", en: "Game" },
      name: { ko: "잡캐 키우기 온라인", en: "Hybrid Hero Online" },
      tagline: { ko: "방치형 MORPG · HTML5 기반",
                 en: "Idle MORPG · HTML5" },
      stack: "HTML5 + JavaScript",
      results: {
        ko: ["계약금 5억", "일 매출 7천만 원", "구글 창구 3기", "충남 게임상 1위"],
        en: ["₩500M signing", "₩70M daily revenue", "Google Changgu cohort 3", "Chungnam Game Award 1st"]
      },
      bullets: {
        ko: ["주식회사 집연구소. 전체 기획·개발 총괄, 게임 데이터 구조화·전용 툴 제작, 스킬·아이템 밸런스 설계."],
        en: ["Zip Lab Inc. Full design and development lead; structured the game data, built dedicated tooling, designed skill and item balance."]
      },
      videoEmbed: "https://www.youtube.com/embed/8SUBMH-tEuU",
      videoLink:  "https://youtu.be/8SUBMH-tEuU"
    },
    {
      id: "heroic-tactics",
      year: "2020",
      period: "2019.02 — 2020.01",
      kind: { ko: "게임", en: "Game" },
      name: { ko: "히로익 택틱스", en: "Heroic Tactics" },
      tagline: { ko: "수집형 오토배틀러 RPG · HTML5",
                 en: "Collectible auto-battler RPG · HTML5" },
      stack: "HTML5 + JavaScript",
      results: {
        ko: ["Ohayoo 게임 경진대회 TOP 10"],
        en: ["Ohayoo Game Contest TOP 10"]
      },
      bullets: {
        ko: ["주식회사 집연구소. PD — 기획·개발·수익모델 설계 및 출시 총괄. 무기/스킬 수집 + 지역별 전투 + 수동 전투."],
        en: ["Zip Lab Inc. Project Director — planning, development, monetization design, and launch. Weapon/skill collection, region-based combat, manual battle."]
      },
      videoEmbed: "https://www.youtube.com/embed/fZ4eCgthccc",
      videoLink:  "https://youtu.be/fZ4eCgthccc"
    },
    {
      id: "mayhem",
      year: "2019",
      period: "2017.05 — 2019.12",
      kind: { ko: "게임", en: "Game" },
      name: { ko: "메이헴의 유산", en: "Heritage of Mayhem" },
      tagline: { ko: "수집 전략 방치 RPG · HTML5",
                 en: "Collect-strategy idle RPG · HTML5" },
      stack: "HTML5 + JavaScript",
      results: {
        ko: ["연 매출 5천만 원", "문체부 이달의 우수게임 (인디 상반기)", "일본 퍼블리싱"],
        en: ["₩50M annual revenue", "Indie Game of the Month (Ministry of Culture)", "Japan publishing deal"]
      },
      bullets: {
        ko: ["주식회사 집연구소. 전체 기획·PM, 글로벌 퍼블리셔 대응, 수익모델 설계 및 운영."],
        en: ["Zip Lab Inc. Full planning and PM duties, global publisher relations, monetization design and live ops."]
      },
      videoEmbed: "https://www.youtube.com/embed/xVhCggmvAzk",
      videoLink:  "https://youtu.be/xVhCggmvAzk"
    },
    {
      id: "ror",
      year: "2018",
      period: "2016.04 — 2018.12",
      kind: { ko: "게임", en: "Game" },
      name: { ko: "ROR 게임 플랫폼", en: "ROR Game Platform" },
      tagline: { ko: "회원·포인트·미션 연동형 HTML5 게임 허브",
                 en: "HTML5 game hub with membership, points, and mission systems" },
      stack: "HTML5 + JavaScript",
      results: {
        ko: ["Global IR Day 1위", "컬쳐랜드·게임조선 채널링", "바나나톡 사업 제휴"],
        en: ["Global IR Day 1st", "Channeling — Culture Land · Game Joseon", "Partnership — Bananatalk"]
      },
      bullets: {
        ko: ["주식회사 집연구소. PM — 퍼블리셔 커뮤니케이션, 플랫폼 기획 및 프로토타입 구현."],
        en: ["Zip Lab Inc. PM — publisher communication, platform planning, prototype implementation."]
      },
      videoEmbed: "https://www.youtube.com/embed/e42Q2mZZW4o",
      videoLink:  "https://youtu.be/e42Q2mZZW4o"
    },
    {
      id: "cosmic",
      year: "2017",
      period: "2015.01 — 2017.03",
      kind: { ko: "게임", en: "Game" },
      name: { ko: "코즈믹 온라인", en: "Cosmic Online" },
      tagline: { ko: "SF MMORPG · HTML5 + Node.js + WebGL",
                 en: "SF MMORPG · HTML5 + Node.js + WebGL" },
      stack: "HTML5 + JavaScript (Node.js + WebGL)",
      results: {
        ko: ["10만 유로 수출", "유럽·러시아 서비스", "게임창조 오디션 3위", "코나아이 창업 경진대회 1위"],
        en: ["€100K export", "EU + Russia service", "Game Creation Audition 3rd", "Kona I Startup Competition 1st"]
      },
      bullets: {
        ko: ["주식회사 집연구소. PM — 퍼블리셔 커뮤니케이션, 개발 스펙·일정 조율, QA 전반 총괄."],
        en: ["Zip Lab Inc. PM — publisher communication, dev-spec consolidation and scheduling, overall QA."]
      },
      videoEmbed: "https://www.youtube.com/embed/f498fWwm7gg",
      videoLink:  "https://youtu.be/f498fWwm7gg"
    }
  ],

  publishing: [
    { date: "2024.07", ko: "JustClick과 글로벌 퍼블리싱 계약 《서울 좀비: 용병 키우기》",
                       en: "Global publishing deal with JustClick — Seoul Zombie: Mercenary Raising" },
    { date: "2022.03", ko: "Daeri Soft와 IP 양도 계약 《잡캐 키우기 온라인》",
                       en: "IP transfer to Daeri Soft — Hybrid Hero Online" },
    { date: "2022.01", ko: "Pre-Series A 투자 유치 (개인 엔젤투자자)",
                       en: "Pre-Series A round closed (individual angel)" },
    { date: "2021.08", ko: "Daeri Soft와 글로벌 퍼블리싱 계약 《잡캐 키우기 온라인》",
                       en: "Global publishing deal with Daeri Soft — Hybrid Hero Online" },
    { date: "2020.09", ko: "위잉스튜디오와 글로벌 퍼블리싱 계약 《드랍팝 — 크러시 더 블럭》",
                       en: "Global publishing deal with WIIING Studio — Drop Pop: Crush the Block" },
    { date: "2020.04", ko: "바나나톡과 사업 제휴 (퍼블리싱·라이센싱 등) 《HTML5 게임 플랫폼 APP》",
                       en: "Business partnership with Bananatalk (publishing, licensing) — HTML5 Game Platform App" },
    { date: "2020.02", ko: "BREVE Co.Ltd(일본)와 글로벌 퍼블리싱 계약 《이노센트 워리어》",
                       en: "Global publishing deal with BREVE Co.Ltd (Japan) — Innocent Warrior" },
    { date: "2019.12", ko: "ENP Games와 한국·일본 퍼블리싱 계약 《메이헴의 유산》",
                       en: "Korea & Japan publishing deal with ENP Games — Heritage of Mayhem" },
    { date: "2019.11", ko: "OverGames(러시아)와 러시아·러시아 연방 퍼블리싱 계약 《메이헴의 유산》",
                       en: "Russia / CIS publishing deal with OverGames — Heritage of Mayhem" },
    { date: "2018.10", ko: "시드 라운드 투자 유치 (NEOPLY)",
                       en: "Seed round closed (NEOPLY)" },
    { date: "2018.08", ko: "게임 조선과 채널링 사업 계약 《HTML5 게임 플랫폼 APP》",
                       en: "Channeling deal with Game Joseon — HTML5 Game Platform App" },
    { date: "2018.03", ko: "컬쳐랜드와 채널링 사업 계약 《HTML5 게임 플랫폼 APP》",
                       en: "Channeling deal with Culture Land — HTML5 Game Platform App" },
    { date: "2017.05", ko: "Funizen(인도)와 글로벌 퍼블리싱 계약 《캐주얼 게임 5종》",
                       en: "Global publishing deal with Funizen (India) — 5 casual games" },
    { date: "2016.07", ko: "SPIL Games(네덜란드)와 글로벌 퍼블리싱 계약 《코즈믹 온라인》",
                       en: "Global publishing deal with SPIL Games (Netherlands) — Cosmic Online" },
    { date: "2015.08", ko: "Esprit Games(러시아)와 러시아·러시아 연방 퍼블리싱 계약 《코즈믹 온라인》",
                       en: "Russia / CIS publishing deal with Esprit Games — Cosmic Online" }
  ],

  awards: [
    { date: "2022.12",
      title: { ko: "충남 게임상 1위", en: "Chungnam Game Award, 1st place" },
      org:   { ko: "충남정보문화산업진흥원", en: "Chungnam Cultural Industry Promotion Agency" } },
    { date: "2019.08",
      title: { ko: "이달의 우수게임 — 인디게임 상반기", en: "Excellent Game of the Month — Indie" },
      org:   { ko: "문화체육관광부", en: "Ministry of Culture, Sports & Tourism" } },
    { date: "2018.03",
      title: { ko: "Global IR Day 1위", en: "Global IR Day, 1st place" },
      org:   { ko: "한국콘텐츠진흥원", en: "Korea Creative Content Agency" } },
    { date: "2015.12",
      title: { ko: "창업경진대회 1위", en: "Startup Competition, 1st place" },
      org:   { ko: "주식회사 코나아이", en: "Kona I Co., Ltd." } },
    { date: "2015.12",
      title: { ko: "제2회 게임창조 오디션 3위", en: "2nd Game Creation Audition, 3rd place" },
      org:   { ko: "경기콘텐츠진흥원", en: "Gyeonggi Content Agency" } }
  ],

  govProjects: [
    { year: "'23", title: { ko: "신규게임 제작지원", en: "New Game Production Support" },
                   agency: { ko: "충남정보문화산업진흥원", en: "Chungnam Cultural Industry Promotion Agency" },
                   content: { ko: "코즈믹 서바이벌", en: "Cosmic Survival" },
                   role: { ko: "과제 책임자", en: "Project Manager" } },
    { year: "'22", title: { ko: "신규게임 제작지원", en: "New Game Production Support" },
                   agency: { ko: "충남정보문화산업진흥원", en: "Chungnam Cultural Industry Promotion Agency" },
                   content: { ko: "서울 좀비 — 용병 키우기", en: "Seoul Zombie — Mercenary Raising" },
                   role: { ko: "과제 책임자", en: "Project Manager" } },
    { year: "'21", title: { ko: "창구 — 글로벌 협업 프로그램", en: "Changgu — Global Collaboration Program" },
                   agency: { ko: "창업진흥원", en: "Korea Institute of Startup & Entrepreneurship Development" },
                   content: { ko: "잡캐 키우기", en: "Hybrid Hero" },
                   role: { ko: "과제 책임자", en: "Project Manager" } },
    { year: "'21", title: { ko: "신규게임 제작지원 (2차)", en: "New Game Production Support (2nd round)" },
                   agency: { ko: "충남정보문화산업진흥원", en: "Chungnam Cultural Industry Promotion Agency" },
                   content: { ko: "잡캐 키우기", en: "Hybrid Hero" },
                   role: { ko: "과제 책임자", en: "Project Manager" } },
    { year: "'20", title: { ko: "신규게임 제작지원 (2차)", en: "New Game Production Support (2nd round)" },
                   agency: { ko: "충남정보문화산업진흥원", en: "Chungnam Cultural Industry Promotion Agency" },
                   content: { ko: "아이아란", en: "Aiarian" },
                   role: { ko: "과제 책임자", en: "Project Manager" } },
    { year: "'19", title: { ko: "산학연 기술개발사업", en: "Industry-Academia-Research R&D" },
                   agency: { ko: "중소벤처기업부", en: "Ministry of SMEs and Startups" },
                   content: { ko: "HTML5 웹 데이터 게임화 라이브러리", en: "HTML5 web-data gamification library" },
                   role: { ko: "과제 책임자", en: "Project Manager" } },
    { year: "'18", title: { ko: "창업성장 기술개발사업", en: "Startup Growth R&D" },
                   agency: { ko: "중소벤처기업부", en: "Ministry of SMEs and Startups" },
                   content: { ko: "WebGL 기반 웹 게임 엔진", en: "WebGL-based web game engine" },
                   role: { ko: "과제 책임자", en: "Project Manager" } },
    { year: "'18", title: { ko: "산학연 기술개발사업", en: "Industry-Academia-Research R&D" },
                   agency: { ko: "중소벤처기업부", en: "Ministry of SMEs and Startups" },
                   content: { ko: "HTML5 기반 인스턴트 웹 게임 프레임워크", en: "HTML5-based instant web game framework" },
                   role: { ko: "과제 수행자", en: "Performer" } },
    { year: "'17", title: { ko: "창업선도대학", en: "Leading University for Startups" },
                   agency: { ko: "창업진흥원", en: "Korea Institute of Startup & Entrepreneurship Development" },
                   content: { ko: "코즈믹 온라인", en: "Cosmic Online" },
                   role: { ko: "과제 수행자", en: "Performer" } }
  ],

  certifications: [
    { date: "2016.11.30", name: { ko: "창업보육전문 매니저", en: "Incubation Manager" },
                          issuer: { ko: "중소기업청", en: "SMBA" }, no: "1601-0276" },
    { date: "2015.05.08", name: { ko: "정보처리기사", en: "Information Processing Engineer" },
                          issuer: { ko: "한국산업인력공단", en: "HRD Korea" }, no: "15201020894J" },
    { date: "2014.12.18", name: { ko: "OCJP", en: "OCJP" },
                          issuer: { ko: "Oracle", en: "Oracle" }, no: "" },
    { date: "2011.11.21", name: { ko: "워드프로세서 1급", en: "Word Processor Level 1" },
                          issuer: { ko: "대한상공회의소", en: "Korea Chamber of Commerce & Industry" }, no: "11-I9-073132" }
  ],

  military: {
    period: "2009.12 — 2012.01",
    detail: { ko: "공군 병장 만기 전역 (항공기탄약관리병)",
              en: "Honorably discharged as Air Force Sergeant (Aircraft Ammunition Manager)" }
  }
};
