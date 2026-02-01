# Backend Preparation – 90 Days Progress Tracker

> **Goal:** Prepare from scratch for Software Developer roles (MAANG / Fortune 500 level) by building strong fundamentals in Core CS, Backend Development, DSA, Systems, and Tooling.

---

## 📅 Day 1 Progress
**Date:** 31-01-2026 (Saturday)  
**Day:** 1 / 90

Day 1 focused on building foundational concepts across multiple subjects while maintaining documentation and revision discipline.

---

## 1️⃣ Computer Networks (1 Hour)

### Topics Covered:
- What is a Computer Network
- General networking terms (basic overview)
- Client–Server model (high-level idea)
- Types of Servers:
  - File Server
  - Web Server
- Types of Networks:
  - LAN (Local Area Network)
  - MAN (Metropolitan Area Network)
  - WAN (Wide Area Network)
- LAN Topologies:
  - Ring Topology
  - Star Topology
  - Bus Topology

### Outcome:
Built a conceptual foundation required for understanding backend systems and distributed applications.

---

## 2️⃣ Development – Backend (1.5 Hours)

### Focus:
**JavaScript Fundamentals for Backend Development**

### Topics Covered:

#### Arrays
- Arrays can store multiple data types (numbers, strings, objects, functions)
- Methods studied:
  - `forEach()` – iteration without returning a new array
  - `map()` – transforms elements and returns a new array
  - `filter()` – selects elements based on condition
  - `find()` – returns the first matching element
  - `indexOf()` – finds index using exact value match

#### Objects
- Object syntax (key–value pairs)
- Accessing properties using dot and bracket notation
- `Object.freeze()` and its use case (preventing mutation)

#### Functions
- `typeof function` returns `"function"`
- Functions are objects internally
- `function.length` returns the number of parameters

#### Async JavaScript (async / await)
- Synchronous code runs line-by-line on the main call stack
- Asynchronous tasks are handled outside the main stack (Node APIs / Web APIs concept)
- Once async work completes, it is queued back and executed after synchronous code finishes

### Outcome:
Gained clarity on JavaScript behavior essential for writing backend logic and handling asynchronous operations.

---

## 3️⃣ Data Structures & Algorithms (DSA)

### Focus:
**Pattern Problems**

- Solved multiple pattern-based questions
- Practiced nested loops extensively
- Patterns covered:
  - Square patterns
  - Triangle patterns
  - Floyd’s Triangle
  - Inverted triangle patterns

### Outcome:
Improved logical thinking and control over loops, forming a strong base for further DSA topics.

---

## 4️⃣ System + Linux + Git (30 Minutes)

### Topics Covered:
- What is Git and GitHub
- Purpose of version control systems
- Global Git setup (`user.name`, `user.email`)

### Why this matters:
- Identifies contributors in collaborative projects
- Tracks code changes and history in real-world software development

---

## 5️⃣ Semester Subject (1 Hour)

- ❌ Unable to study semester subject today  
- ⚠️ **Penalty:** Will compensate by studying **2× time on the weekend**

---

## 6️⃣ Revision & Documentation

- Revised all topics studied on Day 1
- Updated progress in `README.md`
- Practiced documentation habits for projects, folders, and learning logs

### Outcome:
Improved retention through revision and developed consistency in documenting work.

---

## 🧩 Day 1 – DSA Pattern Questions

### Square Pattern (Numbers)
```
1 2 3 4
1 2 3 4
1 2 3 4
1 2 3 4
```

### Square Pattern (Continuous Numbers)
```
1 2 3
4 5 6
7 8 9
```


### Triangle Pattern (Stars)
```

*
* *
* * *
* * * *
```

### Triangle Pattern (Repeated Numbers)
```

1
2 2
3 3 3
4 4 4 4
```

### Triangle Pattern (Incremental Numbers)
```

1
1 2
1 2 3
1 2 3 4
```

### Triangle Pattern (Reverse Numbers)
```

1
2 1
3 2 1
4 3 2 1
```

### Floyd’s Triangle
```

1
2 3
4 5 6
7 8 9 10
11 12 13 14 15
```



### Inverted Triangle Pattern
```

1 1 1 1
2 2 2
3 3
4
```

---

## 📅 Day 2 Progress
**Date:** 01-02-2026 (Sunday)  
**Day:** 2 / 90

Day 2 focused on **semester subjects, backend fundamentals, Git workflows, and DSA practice**, while compensating for the previous day’s penalty.

---

## 1️⃣ Semester Subject – Ethical Hacking & Cyber Forensics

### Topics Covered:
- **Ethical Hacking** – understanding hacking performed with legal authorization for security testing
- **Threat Landscape** – overview of cyber threats in a digital environment

### Threat Landscape Components:
- Threat Actors  
- Threat Types  
- Attack Vectors  
- Assets at Risk  

### Phases of Hacking:
1. **Reconnaissance** – information gathering about the target  
2. **Scanning & Enumeration** – identifying open ports, services, and vulnerabilities  
3. **Gaining Access** – exploiting vulnerabilities to enter the system  
4. **Maintaining Access** – installing backdoors or malware for continued access  
5. **Covering Tracks** – deleting logs, hiding evidence, and avoiding detection  

### Controlled Attack Planning:
Process of systematically designing and executing simulated attacks in a safe and legal environment.

**Key Elements:**
- Scope Definition  
- Authorization  
- Tool Selection  
- Risk Assessment  
- Documentation  

### Penalty Completion (from Day 1 – Core CS):
Completed **practical file experiments**:
- **Experiment 1:** Final analysis of attack findings and writing a professional penetration testing report  
- **Experiment 2:** Understanding basics of digital forensics by collecting and preserving digital evidence  

**Outcome:** Strengthened understanding of ethical hacking methodology and digital forensics fundamentals.

---

## 2️⃣ System + Linux + Git

### Focus:
Revision of previous learning and Git fundamentals (weekend plan)

### Git Workflow Learned:
- Initialize repository  
- Add files → staging area  
- Commit changes with message  
- Push commits to repository  

### File States:
- **U** – Untracked  
- **A** – Added  
- **M** – Modified  
- **C** – Committed  

### Commands Practiced:
- `git status` – shows current file states  
- `git status -s` – short status of staged/unstaged files  
- `git log` – complete commit history  
- `git log --oneline` – compact commit history  
- `git log --oneline --graph` – visual commit graph  
- `git reset` – move back to a previous commit  
  - `--hard`  
  - `--soft`  
  - `--mixed`  
- `.gitignore` – files and folders excluded from Git tracking  

**Outcome:** Clear understanding of Git lifecycle, staging, commits, and history management.

---

## 3️⃣ Development – Backend

### Topics Covered:
- **Node.js** – JavaScript runtime environment
- Setup of **Node.js and NPM**
- **NPM basics:**
  - `npm init`
- Explored Node core module **`fs`**:
  - `writeFile`
  - `appendFile`
  - `copyFile`
  - `rename`
  - `unlink`
- Created and ran first server using Node **`http`** module

**Outcome:** Hands-on experience with Node.js core modules and basic server creation.

---

## 4️⃣ Core CS – Computer Networks

### Topics Covered:
- What is the Internet  
- Who owns the Internet  
- Internet connections and ISPs  
- Types of Internet Connections:
  - Phone Modem  
  - DSL  
  - Cable Modem  
  - Broadband  

### Network Devices:
- Hub  
- Repeater  
- Modem  
- Switch  
- Bridge  
- Router  
- Gateway  
- Wireless Access Point  

**Outcome:** Improved understanding of internet infrastructure and networking devices.

---

## 5️⃣ Data Structures & Algorithms (DSA)

### Pattern Problems Solved:
- Hollow Diamond Pattern  
- Butterfly Pattern  
- Pyramid Pattern  

**Outcome:** Continued improvement in nested loops and pattern-based problem solving.

---

## ✅ Status Summary
- **Day Completed:** ✔️  
- **Penalty Covered:** ✔️ (Day 1 – Core CS)  
- **Consistency:** Maintained  
- **Next Goal:** Day 3 – Strengthen backend and DSA fundamentals  

> *“Consistency is more important than intensity.”*




---

## 📚 Learning Resources

- **Computer Networks:**  
  https://www.youtube.com/playlist?list=PLkW9FMxqUvyZaSQNQslneeODER3bJCb2K

- **Backend Development (JavaScript):**  
  https://www.youtube.com/playlist?list=PLbtI3_MArDOkXRLxdMt1NOMtCS-84ibHH

- **DSA – Pattern Problems:**  
  https://www.youtube.com/playlist?list=PLfqMhTWNBTe137I_EPQd34TsgV6IO55pt

- **Git & GitHub:**  
  https://youtu.be/r8QQOAicu8Y

---

## 📈 Daily Consistency Tracker

Google Sheet (Daily Tracking):  
https://docs.google.com/spreadsheets/d/1Un_WKQXqTcqoB8PCSyd3mhWb8rRu-pKqf-tPEPrZdQg/edit?usp=sharing

---

## ✅ Status Summary

- **Day Completed:** ✔️  
- **Consistency:** Maintained  
- **Next Goal:** Day 3 – Continue backend development and networking fundamentals

> *“Small progress every day compounds into massive results.”*
