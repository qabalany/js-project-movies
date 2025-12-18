## 🚦 Happy Thoughts – Development TODO Roadmap (Git pushes)

هذه قائمة TODO إلزامية لمشروع Happy Thoughts.  
يجب على المساعد (AI Agent) الالتزام بها والتنقّل **مهمة بعد مهمة** وعدم القفز لمهام متقدمة قبل إنهاء السابقة.

### القواعد للمساعد (AI Agent):

1. لا تنتقل للمهمة التالية قبل أن:
   - تشرح لي ماذا سنفعل في هذه المهمة.
   - تقترح/تكتب الكود المطلوب للمهمة فقط (بدون إضافات من مهام لاحقة).
   - تشرح الكود وعلاقته بالمستوى الحالي في الكورس (Week 15 أو 16).
   - تقترح رسالة commit مناسبة لهذه المهمة.
   - (اختياري لكن مفضّل) تقترح تحديث على `project-context.md` يعكس التقدّم.

2. عند العمل على أي مهمة:
   - لا تستخدم أي concepts متقدمة خارج:
     - Components, JSX, props
     - Styled Components
     - useState
     - Controlled forms
     - useEffect
     - fetch API
   - لا تستخدم React Router أو Zustand أو Context API في مشروع Happy Thoughts.

3. كل مرة نبدأ مهمة جديدة:
   - ذكّرني برقم المهمة واسمها من الـ TODO.
   - وضّح ما الذي يجب أن يكون جاهزاً من المهام السابقة قبل بدء هذه المهمة.

---

## ✅ TODO 1 – Setup project & initial context

**الهدف:**  
تهيئة المشروع + إضافة ملف السياق الأساسي.

**المطلوب من المساعد:**

- التأكد أن مشروع React جاهز (Technigo starter أو ما يشبهه).
- تنظيف `App.jsx` من أي كود تجريبي غير لازم.
- إنشاء ملف `project-context.md` وملؤه بالحد الأدنى من:
  - وصف الكورس بشكل مختصر.
  - وصف سريع لمشروع Happy Thoughts.
  - جدول المراحل (phases) مع حالة مبدئية (كلها TODO).
- تعديل `App.jsx` ليحتوي على `<main>` بسيط مع نص placeholder مؤقت.

**Git:**

- رسالة commit مقترحة:
  - `"Setup project and add initial context file"`

---

## ✅ TODO 2 – Create basic components & static layout (no state)

**الهدف:**  
تقسيم الواجهة إلى مكوّنات React واضحة بدون أي state حقيقي.

**المطلوب من المساعد:**

- إنشاء المكونات التالية في `src/components`:
  - `ThoughtForm.jsx`
  - `ThoughtList.jsx`
  - `ThoughtCard.jsx`
- جعل `App.jsx` تستخدم هذه المكونات:
  - تمرير dummy data ثابتة للـ `ThoughtList` مؤقتًا.
- كل مكوّن يرجّع هيكل JSX بسيط (divs, headings, buttons…) يمثّل التصميم، لكن بدون منطق state.

**Git:**

- رسالة commit مقترحة:
  - `"Create basic components and static layout for Happy Thoughts"`

---

## ✅ TODO 3 – Add Styled Components & basic responsive layout

**الهدف:**  
تطبيق جزء من Week 14: استخدام Styled Components لتنسيق أساسي وlayout مرتب.

**المطلوب من المساعد:**

- تثبيت واستخدام `styled-components`.
- تحويل عناصر HTML الأساسية في:
  - `App.jsx`
  - `ThoughtForm.jsx`
  - `ThoughtList.jsx`
  - `ThoughtCard.jsx`
  
  إلى Styled Components (أو على الأقل المكوّنات الرئيسية).
- إضافة:
  - حاوية رئيسية للصفحة (max-width + center).
  - مسافات وتباعد بسيط.
  - بداية دعم responsive (مثلاً width: 100% مع max-width).

**Git:**

- رسالة commit مقترحة:
  - `"Add basic styling with Styled Components and responsive layout"`

---

## ✅ TODO 4 – Local state & controlled form (Week 15 scope)

**الهدف:**  
تطبيق Week 15: استخدام useState + controlled form لإضافة thought جديدة محلياً (بدون API).

**المطلوب من المساعد:**

- تعريف state للـ thoughts + message:
  - `const [thoughts, setThoughts] = useState([...dummyData])`
  - `const [message, setMessage] = useState("")`
- جعل textarea في `ThoughtForm` **controlled component**:
  - `value={message}`
  - `onChange={...}` عبر props.
- عند submit:
  - منع reload (event.preventDefault()).
  - إنشاء object thought جديد (محلي) يضاف في بداية `thoughts`.
  - تفريغ `message` بعد الإرسال.
- تمرير `thoughts` إلى `ThoughtList` عن طريق props.

**Git:**

- رسالة commit مقترحة:
  - `"Implement local state and controlled form for new thoughts"`

---

## ✅ TODO 5 – Fetch thoughts from API using useEffect (GET)

**الهدف:**  
تطبيق Week 16: استخدام useEffect لجلب آخر 20 thought من الـ API عند تحميل الصفحة.

**المطلوب من المساعد:**

- في `App.jsx`:
  - تعريف:
    - `const [thoughts, setThoughts] = useState([])`
    - `const [loading, setLoading] = useState(true)` (حتى لو مبدئياً)
  - استخدام `useEffect` (مرة واحدة عند mount) لـ:
    - `GET https://happy-thoughts-api-4ful.onrender.com/thoughts`
    - تخزين النتائج في `thoughts`.
    - تغيير `loading` إلى false بعد انتهاء الفetch (سواء نجاح أو فشل).
- إبقاء الـ render بسيط:
  - مثلاً: لو `loading` true → نص "Loading..." مؤقتًا.

**Git:**

- رسالة commit مقترحة:
  - `"Fetch latest thoughts from API using useEffect"`

---

## ✅ TODO 6 – POST new thought to API (form submission)

**الهدف:**  
ربط الفورم مع API بدلاً من إضافة البيانات محليًا فقط.

**المطلوب من المساعد:**

- تعديل منطق الـ submit ليعمل:
  - `POST https://happy-thoughts-api-4ful.onrender.com/thoughts`
  - body:
    ```json
    { "message": "..." }
    ```
- عند نجاح الطلب:
  - استخدام الـ response (newThought) لإضافته في بداية مصفوفة `thoughts`:
    - `setThoughts(prev => [newThought, ...prev])`
  - تفريغ `message` في الفورم.
- عدم إضافة error handling متقدم في هذه الخطوة (يأتي في TODO 8).

**Git:**

- رسالة commit مقترحة:
  - `"Connect form submission to Happy Thoughts API and update state"`

---

## ✅ TODO 7 – Like button (POST /thoughts/:id/like)

**الهدف:**  
إضافة زر القلب لكل thought وربطه مع API لزيادة عدد القلوب.

**المطلوب من المساعد:**

- في `ThoughtCard`:
  - إضافة زر heart button.
  - استقبال props: `onLike(thoughtId)` أو مشابه.
- في `App.jsx`:
  - تعريف دالة:
    ```js
    const handleLikeThought = (thoughtId) => {
      fetch(`https://happy-thoughts-api-4ful.onrender.com/thoughts/${thoughtId}/like`, {
        method: "POST",
      })
        .then(() => {
          setThoughts(prev =>
            prev.map(thought =>
              thought._id === thoughtId
                ? { ...thought, hearts: thought.hearts + 1 }
                : thought
            )
          );
        });
    };
    ```
  - تمرير `handleLikeThought` للـ `ThoughtCard` عبر `ThoughtList`.

**Git:**

- رسالة commit مقترحة:
  - `"Add like button and update hearts count using API"`

---

## ✅ TODO 8 – Enhancements & Stretch goals (VG)

**الهدف:**  
إظهار تحسينات إضافية (VG) بشكل منطقي بعد اكتمال كل G requirements.

**المطلوب من المساعد (يمكن اختيار بعضها):**

- **Loading states محسّنة:**
  - عرض رسالة/سبينر أثناء:
    - الجلب الأولي (initial fetch)
    - (اختياري) أثناء إرسال thought أو like

- **Error handling بسيط:**
  - `const [error, setError] = useState(null)`
  - لو API رجع error (validation مثلاً):
    - عرض رسالة لطيفة تحت الفورم.

- **Character counter (Stretch Goal):**
  - عداد يظهر عدد الأحرف المتبقيّة/المستخدمة.
  - يغيّر اللون للأحمر عند `> 140`.

- **Animation بسيطة عند إضافة thought جديد:**
  - Transition/animation عند ظهور card جديدة.

> يمكن تقسيم هذه التحسينات إلى أكثر من push صغير لو أحببت، لكن يجب على المساعد أن يحترم ترتيب الـ TODO وأن يوضح لي في كل مرة أي تحسين ننفّذه الآن.

**Git (أمثلة لرسائل commit):**

- `"Add loading state and basic error handling"`
- `"Implement textarea character counter for happy thoughts"`
- `"Add simple animation when new thought is added"`

---

🔁 تذكير للمساعد (مهم جداً):

- قبل تنفيذ أي كود جديد، انظر إلى قائمة TODO أعلاه وحدّد:
  - أي مهمة نعمل عليها الآن؟
  - ما المطلوب فيها فقط؟
- لا تدمج منطق من TODO 6 أو 7 أو 8 داخل TODO 3 أو 4 مثلاً.
- بعد الانتهاء من كل مهمة:
  - اقترح تحديث على `project-context.md` يعكس:
    - أن هذه المهمة تم تنفيذها
    - أي Phase أو requirement تغيّر حالته (TODO → DONE).
