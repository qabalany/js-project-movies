# React & Global State Management – Course Context

## 1. Course Overview

- **Course name:** React and Global State Management  
- **Scope:** 30 YH credits (≈ 6 full weeks)  
- **Programme affiliation:** Frontend Developer / JavaScript Developer  
- **Programme:** JavaScript Development (160 YH credits)  
- **Decision on confirmation:** 2/6-2025  

### 1.1 Purpose

The purpose of the course is to give practical and theoretical knowledge of **React** for building modern, responsive, and interactive web applications, and to manage **local and global state** using tools such as **useState, useEffect, Context API, and Zustand**.

### 1.2 Learning Outcomes

**Knowledge**

- Understand the problems React is built to solve  
- Know React hooks and component lifecycle  
- Understand **local vs global state** in React  
- Be familiar with CSS-in-JS and component-based styling  
- Be aware of accessibility standards in React applications  

**Skills**

- Write and structure React apps using components and props  
- Use `useState`, `useEffect`, and other built-in hooks  
- Implement routing with **React Router**  
- Connect to APIs and display async data  
- Style components using **Styled Components**  
- Use **Zustand** and **Context API** for global state  

**Competencies**

- Independently build and deploy React applications  
- Create responsive, accessible UIs following a design  
- Apply clean code principles in React projects  
- Debug and test React components using browser tools  
- Collaborate using GitHub, code reviews, and agile methods  

---

## 2. Assessment & Projects Overview

### 2.1 Deadlines

1. **Portfolio project** – 30 November (code review: 14 December)  
2. **Happy Thoughts messaging app** – 14 December (code review: 21 December)  
3. **Movies app** – 21 December  
4. **Todo app** – 18 January  

Grades: **Fail (IG)**, **Pass (G)**, **Pass with Distinction (VG)**  
- **VG:** requires all G requirements + at least **2 stretch goals on at least 3 projects**.

---

## 3. Projects Summary (High Level)

### 3.1 Project 1 – Portfolio (React + Styled Components + Accessibility)

**Base (G) requirements**

- Uses **React components + props**  
- Contains:
  - Picture of student  
  - Tech skills presentation  
  - Projects list with links (GitHub + Netlify)  
  - Thoughts about code (or placeholder text)  
  - Clear contact section  
- Uses **Styled Components**  
- Follows Figma design  
- Clean code  
- Accessibility:
  - Lighthouse score ≥ 95  
  - Images have `alt` and proper sizes  
  - Color contrasts are OK  
- Responsive: `320px → 1600px`

**Stretch (VG) ideas**

- Social media meta tags (og:tags)  
- Scroll animations  
- Favicon  
- Custom domain connected to deployed site  

---

### 3.2 Project 2 – Happy Thoughts Messaging App (Current focus)

**Base (G) requirements**

- Follows provided design  
- Responsive: `320px → 1600px`  
- Has a **textarea + submit button**
- On submit:
  - Form is cleared  
  - New message appears in a **message card**  
- Clean code  

**Week 15 focus (local form + UI)**

- Controlled form: textarea connected to `useState`  
- Basic layout + components according to design  

**Week 16 focus (API + useEffect)**

- On form submit:
  - POST happy thought to API:  
    `POST https://happy-thoughts-api-4ful.onrender.com/thoughts`
- Thoughts list:
  - GET latest 20 thoughts on page load:  
    `GET https://happy-thoughts-api-4ful.onrender.com/thoughts`
  - Sort/order: most recent at the top  
  - Update list after successful form submit  
- Each thought shows:
  - `message`
  - number of `hearts`
- Each thought has a **heart button**:
  - Sends POST request:  
    `POST https://happy-thoughts-api-4ful.onrender.com/thoughts/:THOUGHT_ID/like`
  - Heart count increases after user likes a thought

**Stretch (VG) ideas (Happy Thoughts)**

- Character counter below textarea:
  - Shows remaining characters  
  - Goes red after > 140 characters  
- Use API validation errors to show friendly UI errors (too short/long/empty)  
- Animation for newly submitted thought when it appears  
- Keep count of how many **different posts** the user has liked
  - Optionally store in `localStorage`  
- Handle loading states:
  - Initial fetch (show loading while waiting)  
  - Optionally loading state for submit and like  

---

### 3.3 Project 3 – Movies App (React Router)

**Base (G)**

- At least **two pages**:
  - Movies list
  - Movie details page  
- Uses **React Router**  
- Follows example design (with some allowed changes)  
- Clean code  
- Responsive: `320px → 1600px`  
- Accessibility:
  - Lighthouse ≥ 95  
  - Images with `alt` + proper sizes  
  - OK contrasts  

**Stretch (VG) ideas**

- Not found page for invalid movie ID (404 handling)  
- Loading states for API calls & images  
- Filter / dropdown for popular / upcoming / new releases  
- Additional linked data from API (collections, genres, companies…)  

---

### 3.4 Project 4 – Todo App (Zustand + Global State)

**Base (G)**

- Uses **Zustand** for global state (**no prop drilling**)  
- Lists all tasks (completed + uncompleted)  
- Toggle complete ↔ uncompleted  
- Add and remove tasks  
- Show tasks count (all or uncompleted)  
- Nice empty state UI  
- Responsive: `320px → 1600px`  
- Accessibility:
  - Lighthouse ≥ 95  
  - Images with `alt`  
  - OK contrasts  
- Clean code  

**Stretch (VG) ideas**

- Timestamp for tasks (store raw date, format for display)  
- Complete all button  
- Dark/light mode  
- LocalStorage  
- Due dates with styling for overdue  
- Filters (completed, uncompleted, by date, etc.)  
- Categories/tags or projects for tasks  

---

## 4. Current Focus

- **Current week:** Week 16  
- **Current project:** **Happy Thoughts messaging app**  
- **Main topics now:**
  - Component lifecycle (conceptually)  
  - `useEffect` hook  
  - Fetching data from APIs  
  - Sending data to APIs (POST)  
  - Updating React state from API responses  

---

## 5. Project: Happy Thoughts – Detailed Context

### 5.1 Tech Stack (for this project)

- **React** (functional components)  
- **Hooks:** `useState`, `useEffect`  
- **Fetch API** for HTTP requests  
- **Styled Components** for styling  
- **Optional:** Moment.js (or similar) to format `createdAt` dates  

### 5.2 API Overview

- **Base URL:** `https://happy-thoughts-api-4ful.onrender.com`

**Endpoints**

1. **Get recent thoughts**

   - `GET /thoughts`  
   - Returns latest 20 thoughts  
   - Example structure:
     ```json
     {
       "_id": "5dd671c864cc480017f40979",
       "message": "I'm happy because we're starting a fun new project",
       "hearts": 0,
       "createdAt": "2019-11-21T11:15:20.888Z",
       "__v": 0
     }
     ```

2. **Create a thought**

   - `POST /thoughts`  
   - Body:
     ```json
     { "message": "My happy thought" }
     ```
   - Validations:
     - `message` required  
     - length between 5–140 characters  
   - On success: returns created thought object  

3. **Like a thought**

   - `POST /thoughts/:THOUGHT_ID/like`  
   - Increases `hearts` count for that thought  

---

### 5.3 Component & State Plan (initial idea)

> هذه خطة مبدئية، تقدر تعدّل عليها بحسب شغلك الفعلي.

**Components (draft)**

- `App`
  - مسؤولة عن:
    - جلب قائمة الـ thoughts من الـ API (Week 16)
    - حفظ الـ state الرئيسي للـ thoughts
    - تمرير البيانات إلى بقية المكونات

- `ThoughtForm`
  - Textarea + submit button
  - Controlled form (Week 15)
  - تستقبل props مثل:
    - `onSubmit(message)`
    - optional: `charCount`, `maxLength`, `error`, etc.

- `ThoughtList`
  - تستقبل `thoughts` كـ props
  - ترندر قائمة من `ThoughtCard`

- `ThoughtCard`
  - تعرض:
    - message
    - hearts count
    - createdAt (بتنسيق بسيط)
  - تحتوي زر قلب/like
  - تستقبل:
    - `onLike(id)`

**State (داخل App في هذه المرحلة)**

- `const [thoughts, setThoughts] = useState([])`  
- `const [newMessage, setNewMessage] = useState("")`  
- Optional:
  - `const [loading, setLoading] = useState(true)`  
  - `const [error, setError] = useState(null)`  
  - `const [likedThoughts, setLikedThoughts] = useState([])` (stretch)  

**Data flow**

- On mount (`useEffect`):
  - Fetch thoughts → `setThoughts(data)` (latest 20)  
- On form submit:
  - POST new thought  
  - On success:
    - إما:
      - إضافة thought الجديدة إلى بداية المصفوفة:
        `setThoughts(prev => [newThought, ...prev])`
      - أو إعادة جلب القائمة من الـ API (أبسط للفهم لكن أكثر كلفة)
- On like:
  - POST like للـ API
  - عند النجاح:
    - تحديث `hearts` داخل الـ state (زيادة 1)  

---

## 6. Phase Plan – Happy Thoughts

> هذه الخطة مقسومة بحيث تناسب Week 15 (state + forms) و Week 16 (useEffect + API).

| Phase | Name                                   | Goal                                                                 | Week | Status  |
|-------|----------------------------------------|----------------------------------------------------------------------|------|---------|
| 1     | Setup & Context                        | إعداد مشروع React + إنشاء `project-context.md`                      | 15   | TODO    |
| 2     | Static Layout & Basic Styling          | بناء الـ layout والمكونات بدون state حقيقي، باستخدام Styled Components | 15   | TODO    |
| 3     | Local State & Controlled Form          | ربط textarea بالـ state + إظهار thought جديدة محليًا بعد submit    | 15   | TODO    |
| 4     | Fetch Thoughts with useEffect          | استخدام `useEffect` لجلب آخر 20 thought عند تحميل الصفحة           | 16   | TODO    |
| 5     | POST New Thought                       | إرسال thought جديدة للـ API وتحديث الـ state بالاستجابة            | 16   | TODO    |
| 6     | Like Button                            | إرسال likes للـ API وتحديث عدد القلوب في الواجهة                    | 16   | TODO    |
| 7     | Stretch: Loading & Error Handling      | إضافة loading أثناء الجلب + رسائل خطأ بسيطة                        | 16   | TODO    |
| 8     | Stretch: Counter, Animations, LocalStorage | إضافة char counter, like counter, animations, تخزين محلي للبيانات | 16+  | TODO    |

> **ملاحظة:** عدّل الـ Status (مثلاً: `IN PROGRESS`, `DONE`) حسب تقدمك الحقيقي في كل مرحلة.

---

## 7. Design & UX Requirements

- Follow the Happy Thoughts design as closely as possible  
- Responsive layout (`320px → 1600px`)  
- Basic accessibility:
  - Semantic HTML قدر الإمكان  
  - صور (لو استخدمت) مع `alt` مناسب  
  - تباين ألوان جيد  
- Clean code:
  - مكونات صغيرة وواضحة  
  - أسماء متغيرات ودوال معبّرة  
  - تجنب التكرار قدر المستطاع  

---

## 8. Implementation Decisions Log

> اكتب هنا قراراتك مع الوقت (كل ما نعدّل شيء مهم، نضيف قرار جديد).

- _[Example]_ State for `thoughts` will live in `App` and be passed down via props to `ThoughtList` and `ThoughtCard`.  
- _[Example]_ We chose to optimistically update hearts count on like (increase in UI before waiting for full refetch).  

(أضف المزيد لاحقاً…)

---

## 9. TODO / Backlog

### 9.1 Happy Thoughts – Base (G) Tasks

- [ ] Build basic layout and structure according to design  
- [ ] Implement `ThoughtForm` with controlled textarea  
- [ ] Show submitted thought locally in a card  
- [ ] Use Styled Components for styling  
- [ ] Fetch initial thoughts with `useEffect` (GET `/thoughts`)  
- [ ] POST new thought to API on submit (POST `/thoughts`)  
- [ ] List thoughts, newest at the top  
- [ ] Show message + hearts count for each thought  
- [ ] Implement heart button to send likes (POST `/thoughts/:id/like`)  
- [ ] Update hearts count in UI after liking  

### 9.2 Happy Thoughts – Stretch (VG) Tasks

- [ ] Character counter with remaining chars (max 140, red when over)  
- [ ] Use API validation errors to show friendly error messages  
- [ ] Animation when new thought appears in the list  
- [ ] Count how many **different posts** user has liked  
- [ ] Save like count in `localStorage` and restore on reload  
- [ ] Loading state for:
  - [ ] initial fetch  
  - [ ] posting thought  
  - [ ] liking thought (optional)  

### 9.3 Future Projects Notes

- **Movies app:**
  - Use React Router for multiple pages  
  - Handle loading, 404, extra API data  

- **Todo app:**
  - Use Zustand for global state (no prop drilling)  
  - Add filters, categories, projects, timestamps as stretch  

---
