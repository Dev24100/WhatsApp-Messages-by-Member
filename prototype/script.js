/**
 * Messages by Member — Interactive Prototype Logic
 * Fictional sample data for WhatsApp feature proposal
 */

// Sample fictional participants
const members = [
  { id: 'sharma', name: 'Prof. Sharma', role: 'Teacher', phone: '+91 98201 55412', initials: 'PS' },
  { id: 'mehta', name: 'Prof. Mehta', role: 'Teacher', phone: '+91 98202 66523', initials: 'PM' },
  { id: 'verma', name: 'Prof. Verma', role: 'Teacher', phone: '+91 98203 77634', initials: 'PV' },
  { id: 'iyer', name: 'Prof. Iyer', role: 'Teacher', phone: '+91 98204 88745', initials: 'PI' },
  { id: 'aarav', name: 'Aarav', role: 'Student', phone: '+91 98190 12345', initials: 'A' },
  { id: 'bhavna', name: 'Bhavna', role: 'Student', phone: '+91 98190 23456', initials: 'B' },
  { id: 'chirag', name: 'Chirag', role: 'Student', phone: '+91 98190 34567', initials: 'C' },
  { id: 'diya', name: 'Diya', role: 'Student', phone: '+91 98190 45678', initials: 'D' }
];

// Sample fictional messages and shared files
const data = [
  { id: 'sharma', date: '2025-08-18T10:32:00', kind: 'PDF', title: 'DBMS Assignment.pdf', desc: 'Unit 2 assignment questions and submission instructions.', file: true },
  { id: 'sharma', date: '2025-08-15T14:15:00', kind: 'IMG', title: 'Normalization Diagram.png', desc: 'Image explaining normalization concepts.', file: true },
  { id: 'sharma', date: '2025-08-12T10:30:00', kind: 'PDF', title: 'DBMS Unit 1 Notes.pdf', desc: 'Introduction to database systems and data models.', file: true },
  { id: 'sharma', date: '2025-08-11T16:40:00', kind: 'TXT', title: 'Important announcement', desc: 'Please read Unit 1 before the next lecture.', file: false },
  { id: 'sharma', date: '2025-08-08T09:15:00', kind: 'TXT', title: 'Syllabus reference link', desc: 'https://university.example.edu/syllabus/dbms-2025', file: false },
  { id: 'mehta', date: '2025-08-17T11:15:00', kind: 'PDF', title: 'C++ Assignment.pdf', desc: 'Inheritance and polymorphism practice questions.', file: true },
  { id: 'mehta', date: '2025-08-14T09:05:00', kind: 'TXT', title: 'Practical schedule', desc: 'Bring your completed lab journal tomorrow.', file: false },
  { id: 'verma', date: '2025-08-14T12:05:00', kind: 'IMG', title: 'Internal exam notice.jpg', desc: 'Official notice with examination dates and seating.', file: true },
  { id: 'verma', date: '2025-08-09T15:20:00', kind: 'TXT', title: 'Midterm weightage clarification', desc: 'Internal test will cover units 1 and 2.', file: false },
  { id: 'iyer', date: '2025-08-10T08:30:00', kind: 'PDF', title: 'Lab Manual.pdf', desc: 'Updated lab manual with hardware experiments.', file: true },
  { id: 'aarav', date: '2025-08-16T17:40:00', kind: 'TXT', title: 'Query on Question 3', desc: 'Is ER-diagram required for question 3 in DBMS assignment?', file: false },
  { id: 'bhavna', date: '2025-08-15T11:20:00', kind: 'PDF', title: 'Seminar Presentation.pdf', desc: 'Slides on Cloud Computing fundamentals for Friday.', file: true }
];

// State tracking
let current = 0;
let selected = 'sharma';
let mode = 'all';

// Step Navigation
function go(n) {
  if (n < 0 || n > 4) return;
  current = n;

  // Toggle step panels
  document.querySelectorAll('.step').forEach((s, i) => {
    s.classList.toggle('active', i === n);
  });

  // Toggle nav buttons
  document.querySelectorAll('.nav button').forEach((b, i) => {
    b.classList.toggle('active', i === n);
  });

  // Update header titles and counter
  const stepEl = document.querySelectorAll('.step')[n];
  document.getElementById('stepTitle').textContent = stepEl.dataset.title;
  document.getElementById('stepDesc').textContent = stepEl.dataset.desc;
  document.getElementById('counter').textContent = (n + 1) + ' / 5';

  // Back / Next button state
  document.getElementById('prev').disabled = (n === 0);
  document.getElementById('next').textContent = (n === 4) ? 'Restart ↺' : 'Next →';

  // Dynamic content hooks
  if (n === 2) renderMembers();
  if (n === 3) {
    const member = members.find(m => m.id === selected) || members[0];
    document.getElementById('chosenName').textContent = member.name;
  }
  if (n === 4) renderResults();

  // Scroll to workspace top smoothly
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Attach sidebar nav listeners
document.querySelectorAll('.nav button').forEach(button => {
  button.addEventListener('click', () => {
    go(Number(button.dataset.step));
  });
});

// Attach footer Next button listener
document.getElementById('next').addEventListener('click', () => {
  if (current === 4) {
    go(0);
  } else {
    go(current + 1);
  }
});

// Member search and render (supports name, role, and phone number)
function renderMembers() {
  const searchInput = document.getElementById('memberSearch');
  const query = (searchInput ? searchInput.value : '').toLowerCase().trim();
  const queryDigits = query.replace(/\D/g, '');

  const memberListEl = document.getElementById('memberList');
  if (!memberListEl) return;

  const filtered = members.filter(m => {
    const nameMatch = m.name.toLowerCase().includes(query);
    const roleMatch = m.role.toLowerCase().includes(query);
    const phoneClean = m.phone.replace(/\D/g, '');
    const phoneMatch = queryDigits.length > 0 && phoneClean.includes(queryDigits);
    return nameMatch || roleMatch || phoneMatch;
  });

  if (filtered.length === 0) {
    memberListEl.innerHTML = '<p style="color:var(--muted);font-size:12px;padding:12px;text-align:center;">No matching members found. Try another name or phone number.</p>';
    return;
  }

  memberListEl.innerHTML = filtered.map(m => `
    <button class="member ${selected === m.id ? 'selected' : ''}" onclick="selectMember('${m.id}')">
      <span class="avatar">${m.initials}</span>
      <span>
        <b>${m.name}</b>
        <small>${m.role} · <span class="member-phone">${m.phone}</span></small>
      </span>
      <span style="margin-left:auto;color:var(--green)">${selected === m.id ? '✓' : ''}</span>
    </button>
  `).join('');
}

// Select a member
function selectMember(id) {
  selected = id;
  renderMembers();
}

// Set filter mode ('all' vs 'files')
function setMode(m) {
  mode = m;
  document.querySelectorAll('.mode').forEach(btn => {
    btn.classList.toggle('selected', btn.dataset.mode === m);
  });
}

// Render filtered message list
function renderResults() {
  const who = members.find(m => m.id === selected) || members[0];
  const headingEl = document.getElementById('resultHeading');
  if (headingEl) {
    headingEl.textContent = who.name + ' · ' + (mode === 'all' ? 'All Messages' : 'Documents & Media');
  }

  const resultsEl = document.getElementById('results');
  if (!resultsEl) return;

  let arr = data.filter(x => x.id === selected && (mode === 'all' || x.file));
  const sortSelect = document.getElementById('sort');
  const sortOrder = sortSelect ? sortSelect.value : 'new';

  arr.sort((a, b) => {
    return sortOrder === 'new'
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date);
  });

  if (arr.length === 0) {
    resultsEl.innerHTML = '<p style="color:var(--muted);padding:14px;">No sample messages found for this filter combination.</p>';
    return;
  }

  resultsEl.innerHTML = arr.map(x => `
    <div class="result">
      <div class="fileicon ${x.kind === 'IMG' ? 'img' : x.kind === 'TXT' ? 'txt' : ''}">
        ${x.kind}
      </div>
      <div>
        <b>${x.title}</b>
        <small>${x.desc}</small>
      </div>
      <time>${new Date(x.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</time>
      <button onclick="toast('Concept demonstration: this would open the original message in the WhatsApp group chat.')">
        Open ↗
      </button>
    </div>
  `).join('');
}

// Toast notification banner
let toastTimer = null;
function toast(msg) {
  const el = document.getElementById('toast');
  if (!el) return;
  if (toastTimer) clearTimeout(toastTimer);

  el.textContent = msg;
  el.style.display = 'block';
  toastTimer = setTimeout(() => {
    el.style.display = 'none';
  }, 2800);
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
  renderMembers();
  renderResults();
});

// Run initial renders immediately for inline/direct script loads
renderMembers();
renderResults();
