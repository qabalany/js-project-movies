# 📚 Happy Thoughts – Learning Journal

> هذا الملف هو مرجعك الشخصي لتعلم React من خلال مشروع Happy Thoughts.
> كل مرحلة فيها شرح + كود + لماذا + من أين تعلمنا هذا المفهوم.

---

## 🎓 مقدمة: ما هو React؟

### ما هو React؟
React هو **مكتبة JavaScript** (library) لبناء واجهات المستخدم (User Interfaces).
- طورته شركة **Facebook** (Meta حالياً)
- يعتمد على فكرة **Components** – تقسيم الصفحة لقطع صغيرة قابلة لإعادة الاستخدام
- يستخدم **JSX** – طريقة لكتابة HTML داخل JavaScript

### لماذا نستخدم React؟
1. **Reusable Components**: نكتب component مرة ونستخدمه في أماكن كثيرة
2. **Declarative**: نصف "ماذا نريد" وReact يتكفل بـ "كيف"
3. **Virtual DOM**: تحديثات سريعة للصفحة
4. **Huge Ecosystem**: مكتبات ومجتمع ضخم

### المصطلحات الأساسية:
| المصطلح | المعنى |
|---------|--------|
| **Component** | قطعة UI مستقلة (مثل: Button, Card, Form) |
| **JSX** | صيغة تجمع بين JavaScript و HTML |
| **Props** | بيانات تُمرر من component لآخر (مثل parameters) |
| **State** | بيانات داخلية للـ component تتغير مع الوقت |
| **Hook** | دالة خاصة تبدأ بـ `use` (مثل useState, useEffect) |

---

# 📍 المراحل (TODOs)

---

## ✅ TODO 1 – Setup project & initial context
**الحالة:** ✅ مكتمل

### 🎯 الهدف:
تهيئة المشروع وإعداد الهيكل الأساسي.

### 📅 من الكورس:
- **Week 13**: React Basics, Components, JSX

### 📝 ماذا فعلنا:
1. تأكدنا أن مشروع Vite + React جاهز
2. نظفنا `App.jsx` ليحتوي على هيكل بسيط
3. أضفنا `src/ignored/` لـ `.gitignore`

### 💻 الكود:

```jsx
// App.jsx
export const App = () => {
  return (
    <main>
      <h1>Happy Thoughts</h1>
      <p>Share your happy thought with the world!</p>
    </main>
  )
}
```

### 🧠 الشرح:

**1. `export const App = () => { }`**
- هذا **Functional Component** – الطريقة الحديثة لكتابة components في React
- `export` يعني أننا نصدّر هذا الـ component لاستخدامه في ملفات أخرى
- `const App` اسم الـ component (دائماً يبدأ بحرف كبير)
- `() => { }` arrow function

**2. `return ( ... )`**
- كل component يجب أن يُرجع (return) شيء – عادةً JSX
- الأقواس `()` تسمح لنا بكتابة JSX على عدة أسطر

**3. `<main>` و `<h1>` و `<p>`**
- هذا **JSX** – يبدو مثل HTML لكنه في الحقيقة JavaScript
- `<main>` عنصر semantic يمثل المحتوى الرئيسي (جيد للـ accessibility)

### 🔗 Git:
```bash
git commit -m "Setup project and add initial context file"
```

---

## 🔄 TODO 2 – Create basic components & static layout
**الحالة:** ✅ مكتمل

### 🎯 الهدف:
تقسيم الواجهة إلى مكوّنات React واضحة **بدون أي state**.

### 📅 من الكورس:
- **Week 13**: Components, JSX, Props
- **Thinking in React**: تقسيم UI إلى components

### 📁 المكوّنات التي أنشأناها:
```
src/
  components/
    ThoughtForm.jsx    ← فورم إدخال الـ thought
    ThoughtList.jsx    ← قائمة تعرض كل الـ thoughts
    ThoughtCard.jsx    ← كارت واحد لكل thought
```

### 🧠 مفهوم: Thinking in React

قبل ما نكتب كود، نسأل أنفسنا:
1. **ما هي الأجزاء المتكررة؟** → كل thought card متشابه = component واحد
2. **ما هي الأجزاء المستقلة؟** → الفورم منفصل عن القائمة
3. **كيف تتدفق البيانات؟** → من App → List → Card

```
┌─────────────────────────────────┐
│            App.jsx              │
│  ┌───────────────────────────┐  │
│  │     ThoughtForm.jsx       │  │
│  │  [textarea] [❤️ button]   │  │
│  └───────────────────────────┘  │
│  ┌───────────────────────────┐  │
│  │     ThoughtList.jsx       │  │
│  │  ┌─────────────────────┐  │  │
│  │  │   ThoughtCard.jsx   │  │  │
│  │  │   "I'm happy..."    │  │  │
│  │  │   ❤️ 5  · 2 min ago │  │  │
│  │  └─────────────────────┘  │  │
│  │  ┌─────────────────────┐  │  │
│  │  │   ThoughtCard.jsx   │  │  │
│  │  └─────────────────────┘  │  │
│  └───────────────────────────┘  │
└─────────────────────────────────┘
```

### 🧠 مفهوم: Props

**Props** (اختصار Properties) هي طريقة تمرير البيانات من component أب إلى component ابن.

```jsx
// App.jsx يمرر data
<ThoughtCard message="I love coding!" hearts={5} />

// ThoughtCard.jsx يستقبل ويستخدم
const ThoughtCard = ({ message, hearts }) => {
  return (
    <div>
      <p>{message}</p>
      <span>❤️ {hearts}</span>
    </div>
  )
}
```

**قواعد Props:**
- تتدفق في اتجاه واحد فقط: **من الأب للابن** (one-way data flow)
- الـ component الابن **لا يستطيع تغيير** الـ props (read-only)
- نستخدم `{ }` داخل JSX لكتابة JavaScript expressions

### 💻 الكود:

> ⚠️ **ملاحظة:** الكود أدناه هو النسخة الأولى بدون Styled Components.
> النسخة النهائية مع Styled Components موجودة في TODO 3.

#### 1. ThoughtCard.jsx (النسخة الأولى)
```jsx
export const ThoughtCard = ({ message, hearts, createdAt }) => {
  return (
    <article className="thought-card">
      <p className="thought-message">{message}</p>
      <div className="thought-footer">
        <div className="thought-likes">
          <button className="like-button">❤️</button>
          <span>x {hearts}</span>
        </div>
        <span className="thought-time">{createdAt}</span>
      </div>
    </article>
  )
}
```

**الشرح:**
- `{ message, hearts, createdAt }` = **destructuring** للـ props
  - بدل ما نكتب `props.message` نستخرج القيم مباشرة
- `<article>` = عنصر semantic HTML5 لمحتوى مستقل (جيد للـ accessibility)
- الـ button للـ like سيكون تفاعلي في TODO 7

#### 2. ThoughtList.jsx (النسخة الأولى)
```jsx
import { ThoughtCard } from './ThoughtCard'

export const ThoughtList = ({ thoughts }) => {
  return (
    <section className="thought-list">
      {thoughts.map(thought => (
        <ThoughtCard
          key={thought._id}
          message={thought.message}
          hearts={thought.hearts}
          createdAt={thought.createdAt}
        />
      ))}
    </section>
  )
}
```

**الشرح:**
- `thoughts.map()` = **Array.map()** – نمرّ على كل عنصر في المصفوفة
- `key={thought._id}` = **مهم جداً!** 
  - React يحتاج `key` فريد لكل عنصر في loop
  - يساعد React على تتبع العناصر وتحديثها بكفاءة
  - استخدم ID من الـ API وليس index
- نمرر كل property كـ prop منفصل للـ ThoughtCard

#### 3. ThoughtForm.jsx (النسخة الأولى)
```jsx
export const ThoughtForm = () => {
  return (
    <form className="thought-form">
      <label htmlFor="thought-input">What's making you happy right now?</label>
      <textarea
        id="thought-input"
        placeholder="Type your happy thought..."
        rows={4}
      />
      <button type="submit">
        ❤️ Send Happy Thought ❤️
      </button>
    </form>
  )
}
```

**الشرح:**
- `htmlFor` بدل `for` = لأن `for` كلمة محجوزة في JavaScript
- `rows={4}` = الأقواس `{}` لأن 4 رقم (JavaScript expression)
- الفورم **ليس controlled** بعد – سنضيف state في TODO 4

#### 4. App.jsx (النسخة الأولى)
```jsx
import { ThoughtForm } from './components/ThoughtForm'
import { ThoughtList } from './components/ThoughtList'

// Dummy data للتجربة - سيتم استبدالها بـ API لاحقاً
const dummyThoughts = [
  {
    _id: "1",
    message: "I just learned React and it's awesome!",
    hearts: 5,
    createdAt: "2 minutes ago"
  },
  {
    _id: "2", 
    message: "Coffee makes everything better ☕",
    hearts: 12,
    createdAt: "10 minutes ago"
  },
  {
    _id: "3",
    message: "Finally finished my project!",
    hearts: 8,
    createdAt: "1 hour ago"
  }
]

export const App = () => {
  return (
    <main className="app-container">
      <h1>Happy Thoughts</h1>
      <ThoughtForm />
      <ThoughtList thoughts={dummyThoughts} />
    </main>
  )
}
```

**الشرح:**
- `import { X } from './path'` = **Named import** – نجلب component معين من ملف
- `dummyThoughts` = بيانات وهمية ثابتة للتجربة
  - لاحظ أن الـ structure يطابق ما سيرجعه الـ API
  - `_id` بدل `id` لأن MongoDB يستخدم `_id`
- `<ThoughtList thoughts={dummyThoughts} />` = نمرر المصفوفة كـ prop

### 📊 تدفق البيانات (Data Flow):
```
App.jsx
  │
  ├── dummyThoughts (array)
  │
  ├── <ThoughtForm />
  │
  └── <ThoughtList thoughts={dummyThoughts}>
            │
            └── thoughts.map() ─────┐
                                    │
                    ┌───────────────┴───────────────┐
                    ▼                               ▼
            <ThoughtCard              <ThoughtCard
              message="..."             message="..."
              hearts={5}                hearts={12}
              createdAt="..."/>         createdAt="..."/>
```

### 🔗 Git:
```bash
git commit -m "Create basic components and static layout for Happy Thoughts"
```

---

## 📋 TODO 3 – Add Styled Components & basic responsive layout
**الحالة:** ✅ مكتمل

### 🎯 الهدف:
تطبيق Week 14: استخدام Styled Components للتنسيق.

### 📅 من الكورس:
- **Week 14**: Styled Components, CSS-in-JS

### 🧠 مفهوم: Styled Components

بدلاً من ملفات CSS منفصلة، نكتب الـ styles داخل JavaScript:

```jsx
import styled from 'styled-components';

const Button = styled.button`
  background-color: #ff69b4;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  
  &:hover {
    background-color: #ff1493;
  }
`;

// استخدامه
<Button>Click me!</Button>
```

**لماذا Styled Components؟**
- الـ styles مرتبطة بالـ component مباشرة – لا حاجة لملفات CSS منفصلة
- لا تعارض في أسماء الـ classes – كل class يحصل على hash فريد
- يمكن استخدام props لتغيير الـ styles ديناميكياً
- الـ CSS يُحذف تلقائياً عندما لا يُستخدم الـ component

**Syntax مهم:**
```jsx
// styled.tagName`css`
const Div = styled.div`...`
const Button = styled.button`...`
const Input = styled.input`...`

// Template Literals
const Box = styled.div`
  /* CSS عادي هنا */
  background: red;
  
  /* Pseudo-selectors */
  &:hover { background: blue; }
  &:focus { outline: none; }
  
  /* Nested selectors */
  & > span { color: white; }
`
```

### 💻 الكود الكامل المُنفَّذ:

#### 1. تثبيت styled-components
```bash
npm install styled-components
```

#### 2. ThoughtForm.jsx (الكود الكامل)
```jsx
import styled from 'styled-components'

const FormCard = styled.form`
  background-color: #f0f0f0;
  padding: 24px;
  margin-bottom: 24px;
  box-shadow: 4px 4px 0px #000;
  border: 2px solid #000;
`

const FormLabel = styled.label`
  display: block;
  font-size: 1.1rem;
  font-weight: 500;
  color: #222;
  margin-bottom: 12px;
`

const FormTextarea = styled.textarea`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  resize: vertical;
  min-height: 100px;
  font-family: inherit;
  
  &:focus {
    outline: none;
    border-color: #ffadad;
  }
`

const SubmitButton = styled.button`
  display: block;
  width: 100%;
  margin-top: 16px;
  padding: 14px 24px;
  background-color: #ffadad;
  color: #222;
  font-size: 1.1rem;
  font-weight: 600;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  
  &:hover {
    background-color: #ff8585;
  }
`

export const ThoughtForm = () => {
  return (
    <FormCard>
      <FormLabel htmlFor="thought-input">
        What's making you happy right now?
      </FormLabel>
      <FormTextarea
        id="thought-input"
        placeholder="Type your happy thought..."
        rows={4}
      />
      <SubmitButton type="submit">
        ❤️ Send Happy Thought ❤️
      </SubmitButton>
    </FormCard>
  )
}
```

**الشرح:**
- `FormCard` = `<form>` مع styles – رمادي فاتح مع ظل أسود مميز
- `FormLabel` = عنوان الفورم بخط واضح
- `FormTextarea` = حقل الإدخال مع focus state وردي
- `SubmitButton` = زر pill shape وردي مع hover effect
- `transition` = انتقال سلس عند تغيير اللون

#### 3. ThoughtCard.jsx (الكود الكامل)
```jsx
import styled from 'styled-components'

const Card = styled.article`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 16px;
  box-shadow: 4px 4px 0px #000;
  border: 2px solid #000;
`

const Message = styled.p`
  font-size: 1.1rem;
  color: #222;
  line-height: 1.5;
  margin: 0 0 16px 0;
  word-wrap: break-word;
`

const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const LikeSection = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`

const HeartButton = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  border: none;
  background-color: #eee;
  font-size: 1.2rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  
  &:hover {
    background-color: #ffadad;
    transform: scale(1.1);
  }
`

const LikeCount = styled.span`
  font-size: 0.9rem;
  color: #666;
`

const TimeStamp = styled.span`
  font-size: 0.85rem;
  color: #999;
`

export const ThoughtCard = ({ message, hearts, createdAt }) => {
  return (
    <Card>
      <Message>{message}</Message>
      <Footer>
        <LikeSection>
          <HeartButton>❤️</HeartButton>
          <LikeCount>x {hearts}</LikeCount>
        </LikeSection>
        <TimeStamp>{createdAt}</TimeStamp>
      </Footer>
    </Card>
  )
}
```

**الشرح:**
- `Card` = كارت أبيض مع الظل الأسود المميز
- `Footer` = flexbox لترتيب اللايكات والوقت
- `gap: 8px` = مسافة بين العناصر (بديل حديث لـ margin)
- `HeartButton` = زر دائري مع hover يكبر ويتحول لوردي
- `transform: scale(1.1)` = تأثير تكبير 10%

#### 4. App.jsx (الكود الكامل)
```jsx
import styled from 'styled-components'
import { ThoughtForm } from './components/ThoughtForm'
import { ThoughtList } from './components/ThoughtList'

const dummyThoughts = [
  { _id: "1", message: "I just learned React!", hearts: 5, createdAt: "2 minutes ago" },
  { _id: "2", message: "Coffee makes everything better ☕", hearts: 12, createdAt: "10 minutes ago" },
  { _id: "3", message: "Finally finished my project!", hearts: 8, createdAt: "1 hour ago" }
]

const MainWrapper = styled.main`
  min-height: 100vh;
  background-color: #f5f5f5;
  padding: 20px 16px;
`

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
`

const Title = styled.h1`
  text-align: center;
  font-size: 2rem;
  color: #222;
  margin-bottom: 24px;
`

export const App = () => {
  return (
    <MainWrapper>
      <Container>
        <Title>Happy Thoughts</Title>
        <ThoughtForm />
        <ThoughtList thoughts={dummyThoughts} />
      </Container>
    </MainWrapper>
  )
}
```

**الشرح:**
- `MainWrapper` = خلفية رمادية فاتحة تغطي كل الصفحة
- `Container` = عمود مركزي `max-width: 600px`
- `margin: 0 auto` = يجعل العنصر في المنتصف (responsive pattern)

### 🎨 ملخص التصميم:
| العنصر | اللون | الـ Style المميز |
|--------|-------|------------------|
| خلفية الصفحة | `#f5f5f5` | رمادي فاتح |
| FormCard | `#f0f0f0` | رمادي + ظل أسود |
| ThoughtCard | `#fff` | أبيض + ظل أسود |
| SubmitButton | `#ffadad` | وردي + pill shape |
| HeartButton | `#eee` → `#ffadad` | دائري + hover effect |

### 🔗 Git:
```bash
git commit -m "Add basic styling with Styled Components and responsive layout"
```

---

## 📋 TODO 4 – Local state & controlled form
**الحالة:** ✅ مكتمل

### 🎯 الهدف:
تطبيق Week 15: useState + controlled form لإضافة thought محلياً.

### 📅 من الكورس:
- **Week 15**: React State, useState, Controlled Forms

### 🧠 مفهوم: State

**State** هو بيانات داخلية للـ component يمكن أن تتغير مع الوقت.

```jsx
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  //     ↑        ↑              ↑
  //   القيمة   الدالة        القيمة الأولية
  //   الحالية  للتحديث
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Add
      </button>
    </div>
  );
};
```

**قواعد useState:**
1. دائماً نستدعي hooks في **أعلى** الـ component
2. لا نستدعي hooks داخل شروط أو loops
3. نستخدم `setX()` لتغيير القيمة، **لا نغيّر مباشرة**

**الفرق بين Props و State:**
| Props | State |
|-------|-------|
| تأتي من الأب | داخلية في الـ component |
| read-only | يمكن تغييرها بـ setter |
| للتواصل بين components | لتتبع تغييرات داخلية |

### 🧠 مفهوم: Controlled Form

في React، نجعل الـ form "controlled" – أي أن React يتحكم بقيمة الـ input:

```jsx
const [message, setMessage] = useState("");

<textarea 
  value={message}                              // القيمة من state
  onChange={(e) => setMessage(e.target.value)} // التحديث
/>
```

**لماذا Controlled؟**
- React يعرف دائماً ما هي قيمة الـ input
- سهولة validation
- سهولة تفريغ الفورم بعد submit
- Single source of truth

### 🧠 مفهوم: Lifting State Up

عندما يحتاج component أب أن يتحكم ببيانات component ابن:
- الـ **state** يبقى في الأب
- نمرر **القيمة** و **setter function** كـ props للابن

```
App.jsx (الأب)
  │
  ├── const [message, setMessage] = useState("")
  │
  └── <ThoughtForm 
        message={message}           ← القيمة
        onMessageChange={setMessage} ← الـ setter
      />
```

### 💻 الكود المُنفَّذ:

#### 1. App.jsx (مع useState)
```jsx
import { useState } from 'react'
import styled from 'styled-components'
import { ThoughtForm } from './components/ThoughtForm'
import { ThoughtList } from './components/ThoughtList'

// Dummy data للتجربة
const dummyThoughts = [
  { _id: "1", message: "I just learned React!", hearts: 5, createdAt: "2 minutes ago" },
  { _id: "2", message: "Coffee makes everything better ☕", hearts: 12, createdAt: "10 minutes ago" },
  { _id: "3", message: "Finally finished my project!", hearts: 8, createdAt: "1 hour ago" }
]

// ... styled components ...

export const App = () => {
  // State للـ thoughts (قائمة الأفكار)
  const [thoughts, setThoughts] = useState(dummyThoughts)
  
  // State للـ message (النص في الفورم)
  const [newMessage, setNewMessage] = useState("")

  // دالة لإضافة thought جديدة
  const handleFormSubmit = (event) => {
    event.preventDefault() // منع reload الصفحة
    
    // لا نضيف إذا كان النص فارغ
    if (!newMessage.trim()) return
    
    // إنشاء thought جديدة
    const newThought = {
      _id: Date.now().toString(), // ID مؤقت
      message: newMessage,
      hearts: 0,
      createdAt: "Just now"
    }
    
    // إضافة الـ thought الجديدة في بداية المصفوفة
    setThoughts([newThought, ...thoughts])
    
    // تفريغ الفورم
    setNewMessage("")
  }

  return (
    <MainWrapper>
      <Container>
        <Title>Happy Thoughts</Title>
        <ThoughtForm 
          onSubmit={handleFormSubmit}
          message={newMessage}
          onMessageChange={setNewMessage}
        />
        <ThoughtList thoughts={thoughts} />
      </Container>
    </MainWrapper>
  )
}
```

**الشرح سطر بسطر:**

1. **`import { useState } from 'react'`**
   - نستورد الـ hook من React

2. **`const [thoughts, setThoughts] = useState(dummyThoughts)`**
   - `thoughts` = المصفوفة الحالية
   - `setThoughts` = دالة لتحديث المصفوفة
   - `dummyThoughts` = القيمة الأولية

3. **`const [newMessage, setNewMessage] = useState("")`**
   - state للنص في الـ textarea
   - تبدأ فارغة `""`

4. **`event.preventDefault()`**
   - يمنع الـ form من عمل reload للصفحة

5. **`if (!newMessage.trim()) return`**
   - `trim()` يزيل المسافات
   - لا نضيف thought فارغة

6. **`setThoughts([newThought, ...thoughts])`**
   - `...thoughts` = spread operator (ينسخ كل العناصر)
   - `[newThought, ...]` = نضع الجديد في البداية

7. **`setNewMessage("")`**
   - نفرغ الفورم بعد الإرسال

#### 2. ThoughtForm.jsx (Controlled)
```jsx
export const ThoughtForm = ({ onSubmit, message, onMessageChange }) => {
  return (
    <FormCard onSubmit={onSubmit}>
      <FormLabel htmlFor="thought-input">
        What's making you happy right now?
      </FormLabel>
      <FormTextarea
        id="thought-input"
        placeholder="Type your happy thought..."
        rows={4}
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
      />
      <SubmitButton type="submit">
        ❤️ Send Happy Thought ❤️
      </SubmitButton>
    </FormCard>
  )
}
```

**الشرح:**
- `{ onSubmit, message, onMessageChange }` = props من الأب
- `onSubmit={onSubmit}` = عند submit نستدعي دالة الأب
- `value={message}` = القيمة تأتي من الأب (controlled)
- `onChange` = عند الكتابة نخبر الأب بالقيمة الجديدة

### 📊 تدفق البيانات:
```
المستخدم يكتب في textarea
        │
        ▼
onChange يُستدعى مع القيمة الجديدة
        │
        ▼
onMessageChange(e.target.value) يُرسل للأب
        │
        ▼
setNewMessage() يُحدث الـ state في App
        │
        ▼
App يعيد render
        │
        ▼
ThoughtForm يحصل على message الجديد كـ prop
        │
        ▼
value={message} يعرض القيمة المحدثة
```

### ✅ ما يعمل الآن:
- ✅ الكتابة في الـ textarea
- ✅ الضغط على Submit يضيف thought جديدة
- ✅ الفورم يتفرغ بعد الإرسال
- ✅ الـ thought الجديدة تظهر في أعلى القائمة

### 🔗 Git:
```bash
git commit -m "Implement local state and controlled form for new thoughts"
```

---

## 📋 TODO 5 – Fetch thoughts from API (GET)
**الحالة:** ✅ مكتمل

### 🎯 الهدف:
تطبيق Week 16: useEffect لجلب الـ thoughts من API عند تحميل الصفحة.

### 📅 من الكورس:
- **Week 16**: Component Lifecycle, useEffect, APIs

### 🧠 مفهوم: useEffect

`useEffect` هو hook يسمح لنا بتنفيذ **side effects** – أشياء خارج الـ render العادي:
- Fetch data من API
- الاشتراك في events
- تحديث document title
- تشغيل timers

```jsx
import { useState, useEffect } from 'react';

useEffect(() => {
  // الكود هنا يعمل بعد الـ render
  console.log("Component mounted or updated!")
  
  // Cleanup function (اختياري)
  return () => {
    console.log("Cleanup before next effect or unmount")
  }
}, [dependencies]) // متى يعمل؟
```

**الـ Dependency Array:**
| الشكل | متى يعمل |
|-------|----------|
| `[]` فارغ | مرة واحدة عند mount فقط |
| `[value]` | عند mount + كلما تغير `value` |
| بدون array | بعد **كل** render (خطر! loop) |

### 🧠 مفهوم: fetch API

`fetch` هي دالة JavaScript لجلب بيانات من الإنترنت:

```jsx
fetch(url)
  .then(response => response.json())  // تحويل لـ JSON
  .then(data => {
    // استخدام البيانات
    console.log(data)
  })
  .catch(error => {
    // التعامل مع الأخطاء
    console.error(error)
  })
```

### 💻 الكود المُنفَّذ:

#### 1. App.jsx (مع useEffect)
```jsx
import { useState, useEffect } from 'react'
import styled from 'styled-components'
import { ThoughtForm } from './components/ThoughtForm'
import { ThoughtList } from './components/ThoughtList'

// API URL
const API_URL = "https://happy-thoughts-ux7hkzgmwa-uc.a.run.app/thoughts"

// ... styled components ...

const LoadingText = styled.p`
  text-align: center;
  color: #666;
  font-size: 1.1rem;
`

export const App = () => {
  // State for thoughts - يبدأ فارغ (لأننا سنجلب من API)
  const [thoughts, setThoughts] = useState([])
  
  // State for the message
  const [newMessage, setNewMessage] = useState("")
  
  // State for loading
  const [loading, setLoading] = useState(true)

  // Fetch thoughts from API when component mounts
  useEffect(() => {
    fetch(API_URL)
      .then(response => response.json())
      .then(data => {
        setThoughts(data)
        setLoading(false)
      })
      .catch(error => {
        console.error("Error fetching thoughts:", error)
        setLoading(false)
      })
  }, []) // [] = يعمل مرة واحدة فقط عند mount

  // ... handleFormSubmit ...

  return (
    <MainWrapper>
      <Container>
        <Title>Happy Thoughts</Title>
        <ThoughtForm 
          onSubmit={handleFormSubmit}
          message={newMessage}
          onMessageChange={setNewMessage}
        />
        {loading ? (
          <LoadingText>Loading thoughts...</LoadingText>
        ) : (
          <ThoughtList thoughts={thoughts} />
        )}
      </Container>
    </MainWrapper>
  )
}
```

**الشرح سطر بسطر:**

1. **`import { useState, useEffect } from 'react'`**
   - نستورد الـ hooks اللي نحتاجها

2. **`const API_URL = "https://..."`**
   - نحفظ الـ URL في constant (أسهل للتعديل)

3. **`const [loading, setLoading] = useState(true)`**
   - state للـ loading - يبدأ `true` (نحن بانتظار البيانات)

4. **`useEffect(() => { ... }, [])`**
   - الـ `[]` الفارغ = يعمل مرة واحدة عند mount
   - بدونه سيعمل في loop لا نهائي!

5. **`fetch(API_URL).then(...)`**
   - نجلب البيانات من الـ API
   - `.then()` للتعامل مع الـ Promise

6. **`setThoughts(data)`**
   - نحفظ البيانات في state

7. **`setLoading(false)`**
   - ننهي حالة الـ loading (سواء نجح أو فشل)

8. **`{loading ? <LoadingText>... : <ThoughtList>...}`**
   - Conditional rendering: نعرض loading أو القائمة

#### 2. ThoughtCard.jsx (مع تنسيق الوقت)
```jsx
// Helper function to format time
const formatTimeAgo = (dateString) => {
  const now = new Date()
  const date = new Date(dateString)
  const seconds = Math.floor((now - date) / 1000)
  
  if (seconds < 60) return `${seconds} seconds ago`
  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `${minutes} minutes ago`
  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `${hours} hours ago`
  const days = Math.floor(hours / 24)
  return `${days} days ago`
}

export const ThoughtCard = ({ message, hearts, createdAt }) => {
  return (
    <Card>
      <Message>{message}</Message>
      <Footer>
        <LikeSection>
          <HeartButton>❤️</HeartButton>
          <LikeCount>x {hearts}</LikeCount>
        </LikeSection>
        <TimeStamp>{formatTimeAgo(createdAt)}</TimeStamp>
      </Footer>
    </Card>
  )
}
```

**الشرح:**
- الـ API يرجع `createdAt` كـ ISO date (مثل `"2025-12-12T10:30:00.000Z"`)
- نحتاج تحويله لصيغة مقروءة ("5 minutes ago")
- `formatTimeAgo` دالة helper تحسب الفرق وترجع نص مناسب

### 📊 تدفق البيانات مع API:
```
Component Mounts (أول مرة يظهر)
        │
        ▼
useEffect يعمل
        │
        ▼
fetch(API_URL)
        │
        ▼
API يرجع data (آخر 20 thought)
        │
        ▼
setThoughts(data) → state يتحدث
        │
        ▼
setLoading(false) → loading ينتهي
        │
        ▼
Component re-renders
        │
        ▼
ThoughtList يعرض البيانات الحقيقية! 🎉
```

### ✅ ما يعمل الآن:
- ✅ عند تحميل الصفحة: "Loading thoughts..."
- ✅ بعد ثانية أو أقل: تظهر الـ thoughts من API
- ✅ الوقت يظهر بصيغة مقروءة ("5 minutes ago")
- ✅ الـ thoughts الحقيقية من أشخاص آخرين!

### 🔗 Git:
```bash
git commit -m "Fetch latest thoughts from API using useEffect"
```

---

## ✅ TODO 6 – POST new thought to API
**الحالة:** ✅ مكتمل

### 🎯 الهدف:
إرسال thought جديدة للـ API بدل الإضافة المحلية فقط.

### 📅 من الكورس:
- **Week 16**: APIs in React, POST requests

### 🧠 مفهوم: POST Request

عند إرسال بيانات للـ API نستخدم `method: "POST"`:

```jsx
fetch(url, {
  method: "POST",                           // نوع الطلب
  headers: {
    "Content-Type": "application/json"      // نوع البيانات
  },
  body: JSON.stringify({ message: "..." })  // البيانات كـ JSON string
})
```

**الفرق بين GET و POST:**
| GET | POST |
|-----|------|
| جلب بيانات | إرسال بيانات |
| لا يوجد body | يوجد body |
| آمن (لا يغير شيء) | يغير/يضيف بيانات |

### 💻 الكود المُنفَّذ:

```jsx
// Function to add a new thought (POST to API)
const handleFormSubmit = (event) => {
  event.preventDefault()
  
  if (!newMessage.trim()) return
  
  // POST the new thought to API
  fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: newMessage })
  })
    .then(response => {
      if (!response.ok) {
        throw new Error("Failed to post thought")
      }
      return response.json()
    })
    .then(newThought => {
      // Add the new thought from API to the beginning of the list
      setThoughts(prevThoughts => [newThought, ...prevThoughts])
      setNewMessage("")
    })
    .catch(error => {
      console.error("Error posting thought:", error)
    })
}
```

**الشرح سطر بسطر:**

1. **`method: "POST"`**
   - نخبر السيرفر أننا نرسل بيانات جديدة

2. **`headers: { "Content-Type": "application/json" }`**
   - نخبر السيرفر أن البيانات بصيغة JSON

3. **`body: JSON.stringify({ message: newMessage })`**
   - `JSON.stringify()` يحول object لـ string
   - الـ API يتوقع `{ message: "..." }`

4. **`if (!response.ok)`**
   - نتأكد أن الـ API نجح (status 200-299)

5. **`setThoughts(prevThoughts => [newThought, ...])`**
   - نستخدم callback function بدل القيمة المباشرة
   - هذا أفضل لتجنب مشاكل الـ stale state

### 🔗 Git:
```bash
git commit -m "POST new thought to API"
```

---

## ✅ TODO 7 – Like button (POST)
**الحالة:** ✅ مكتمل

### 🎯 الهدف:
زر القلب يرسل like للـ API ويحدث عدد القلوب.

### 📅 من الكورس:
- **Week 16**: APIs in React, POST requests

### 🧠 مفهوم: Prop Drilling

عندما نحتاج تمرير function من component أب لـ component حفيد:

```
App.jsx (handleLikeThought)
    │
    └── onLike={handleLikeThought}
           │
           ▼
    ThoughtList.jsx
           │
           └── onLike={onLike}
                  │
                  ▼
           ThoughtCard.jsx
                  │
                  └── onClick={() => onLike(id)}
```

### 🧠 مفهوم: Updating Array Items

لتحديث عنصر واحد في مصفوفة:

```jsx
setItems(prevItems =>
  prevItems.map(item =>
    item.id === targetId
      ? { ...item, count: newCount }  // نحدث هذا فقط
      : item                           // نترك الباقي كما هو
  )
)
```

**الشرح:**
- `map()` يمر على كل عنصر
- نتحقق إذا هذا العنصر المطلوب
- `...item` ينسخ كل الـ properties
- نغير property واحد فقط

### 💻 الكود المُنفَّذ:

#### 1. App.jsx (handleLikeThought)
```jsx
// Function to like a thought (POST to API)
const handleLikeThought = (thoughtId) => {
  fetch(`${API_URL}/${thoughtId}/like`, {
    method: "POST"
  })
    .then(response => response.json())
    .then(updatedThought => {
      // Update the thought in state with new hearts count
      setThoughts(prevThoughts =>
        prevThoughts.map(thought =>
          thought._id === thoughtId
            ? { ...thought, hearts: updatedThought.hearts }
            : thought
        )
      )
    })
    .catch(error => {
      console.error("Error liking thought:", error)
    })
}

// في الـ return
<ThoughtList thoughts={thoughts} onLike={handleLikeThought} />
```

#### 2. ThoughtList.jsx
```jsx
export const ThoughtList = ({ thoughts, onLike }) => {
  return (
    <ListSection>
      {thoughts.map(thought => (
        <ThoughtCard
          key={thought._id}
          id={thought._id}
          message={thought.message}
          hearts={thought.hearts}
          createdAt={thought.createdAt}
          onLike={onLike}
        />
      ))}
    </ListSection>
  )
}
```

#### 3. ThoughtCard.jsx
```jsx
export const ThoughtCard = ({ id, message, hearts, createdAt, onLike }) => {
  return (
    <Card>
      <Message>{message}</Message>
      <Footer>
        <LikeSection>
          <HeartButton onClick={() => onLike(id)}>
            ❤️
          </HeartButton>
          <LikeCount>x {hearts}</LikeCount>
        </LikeSection>
        <TimeStamp>{formatTimeAgo(createdAt)}</TimeStamp>
      </Footer>
    </Card>
  )
}
```

**الشرح:**
- `onClick={() => onLike(id)}` = عند الضغط نستدعي onLike مع ID الـ thought
- الدالة تصعد للأب الذي يرسل POST للـ API
- الـ API يرجع الـ thought المحدث
- نحدث state بالعدد الجديد

### 📊 تدفق البيانات:
```
المستخدم يضغط ❤️
        │
        ▼
onClick={() => onLike(id)}
        │
        ▼
ThoughtCard → ThoughtList → App
        │
        ▼
handleLikeThought(thoughtId)
        │
        ▼
POST ${API_URL}/${thoughtId}/like
        │
        ▼
API يرجع { hearts: 6 }
        │
        ▼
setThoughts با map يحدث العنصر المطلوب
        │
        ▼
Re-render: القلب يعرض x 6 🎉
```

### 🔗 Git:
```bash
git commit -m "Add like button with POST to API"
```

---

## ✅ TODO 8 – Stretch Goals (VG)
**الحالة:** ✅ مكتمل

### 🎯 الهدف:
تحسينات VG: character counter, loading state, liked hearts styling.

### 📅 من الكورس:
- **Week 14-16**: Styled Components with props, State management

### 🧠 مفهوم: Transient Props ($)

في Styled Components، نستخدم `$` قبل اسم الـ prop لمنعه من الوصول للـ DOM:

```jsx
// ❌ بدون $ - سيظهر warning في console
<Button isActive={true} />

// ✅ مع $ - لن يصل للـ DOM
<Button $isActive={true} />

const Button = styled.button`
  background: ${props => props.$isActive ? 'pink' : 'gray'};
`
```

### 🧠 مفهوم: Conditional Styling

```jsx
const Input = styled.input`
  border-color: ${props => {
    if (props.$hasError) return '#e74c3c'  // أحمر للخطأ
    if (props.$isValid) return '#27ae60'   // أخضر للصحيح
    return '#ccc'                          // رمادي افتراضي
  }};
`
```

### 🧠 مفهوم: .finally()

```jsx
fetch(url)
  .then(res => res.json())
  .then(data => setData(data))
  .catch(err => setError(err))
  .finally(() => {
    // يعمل دائماً - سواء نجح أو فشل
    setLoading(false)
  })
```

### 💻 الكود المُنفَّذ:

#### 1. Character Counter (ThoughtForm.jsx)
```jsx
const CharacterCount = styled.p`
  text-align: right;
  font-size: 0.85rem;
  margin: 8px 0 0 0;
  color: ${props => {
    if (props.$count < 5) return '#e74c3c'    // أحمر: أقل من 5
    if (props.$count > 140) return '#e74c3c'  // أحمر: أكثر من 140
    if (props.$count > 120) return '#f39c12'  // برتقالي: تحذير
    return '#666'                              // رمادي: تمام
  }};
`

export const ThoughtForm = ({ onSubmit, message, onMessageChange, isSubmitting }) => {
  const charCount = message.length
  const isValidLength = charCount >= 5 && charCount <= 140
  const hasError = charCount > 0 && !isValidLength
  
  return (
    <FormCard onSubmit={onSubmit}>
      {/* ... */}
      <FormTextarea
        value={message}
        onChange={(e) => onMessageChange(e.target.value)}
        $hasError={hasError}
      />
      <CharacterCount $count={charCount}>
        {charCount}/140 {charCount < 5 && charCount > 0 && '(min 5 characters)'}
      </CharacterCount>
      <SubmitButton type="submit" disabled={!isValidLength || isSubmitting}>
        {isSubmitting ? 'Sending...' : '❤️ Send Happy Thought ❤️'}
      </SubmitButton>
    </FormCard>
  )
}
```

#### 2. Loading State للـ Submit (App.jsx)
```jsx
// State for submitting
const [isSubmitting, setIsSubmitting] = useState(false)

const handleFormSubmit = (event) => {
  event.preventDefault()
  
  if (!newMessage.trim()) return
  if (newMessage.length < 5 || newMessage.length > 140) return
  
  setIsSubmitting(true)  // ← نبدأ loading
  
  fetch(API_URL, { /* ... */ })
    .then(/* ... */)
    .catch(/* ... */)
    .finally(() => {
      setIsSubmitting(false)  // ← ننهي loading (نجاح أو فشل)
    })
}

// نمرر للفورم
<ThoughtForm isSubmitting={isSubmitting} />
```

#### 3. Liked Hearts Styling (ThoughtCard.jsx)
```jsx
const HeartButton = styled.button`
  /* ... */
  background-color: ${props => props.$isLiked ? '#ffadad' : '#eee'};
  /* ... */
`

export const ThoughtCard = ({ id, message, hearts, createdAt, onLike }) => {
  const isLiked = hearts > 0
  
  return (
    <Card>
      {/* ... */}
      <HeartButton onClick={() => onLike(id)} $isLiked={isLiked}>
        ❤️
      </HeartButton>
      {/* ... */}
    </Card>
  )
}
```

### ✅ ما يعمل الآن:
- ✅ عداد الأحرف (5-140) مع ألوان
- ✅ زر Submit معطل إذا الرسالة غير صالحة
- ✅ "Sending..." أثناء الإرسال
- ✅ القلوب وردية إذا فيها likes

### 🔗 Git:
```bash
git commit -m "Add stretch goals: character counter, loading state, liked hearts styling"
```

---

# 📖 مرجع سريع

## JSX Syntax

```jsx
// متغير داخل JSX
<p>Hello, {name}!</p>

// شرط (ternary)
{isLoading ? <p>Loading...</p> : <List />}

// شرط بسيط (&&)
{error && <p>Error: {error}</p>}

// Loop (map)
{items.map(item => <Card key={item.id} {...item} />)}
```

## useState

```jsx
const [value, setValue] = useState(initialValue);

// تحديث بقيمة جديدة
setValue(newValue);

// تحديث بناءً على القيمة السابقة
setValue(prev => prev + 1);

// تحديث array
setItems(prev => [...prev, newItem]);

// تحديث object
setUser(prev => ({ ...prev, name: "New Name" }));
```

## useEffect

```jsx
// مرة واحدة عند mount
useEffect(() => {
  fetchData();
}, []);

// عند تغير dependency
useEffect(() => {
  doSomething(value);
}, [value]);

// cleanup (مثل unsubscribe)
useEffect(() => {
  const subscription = subscribe();
  return () => subscription.unsubscribe();
}, []);
```

## fetch API

```jsx
// GET
fetch(url)
  .then(res => res.json())
  .then(data => setData(data))
  .catch(err => console.error(err));

// POST
fetch(url, {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ message: "Hello" })
})
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.error(err))
  .finally(() => setLoading(false));  // دائماً يعمل

// POST بدون body (مثل like)
fetch(`${url}/${id}/like`, { method: "POST" })
  .then(res => res.json())
  .then(data => updateState(data));
```

## Styled Components مع Props

```jsx
// Transient prop ($) - لا يصل للـ DOM
const Button = styled.button`
  background: ${props => props.$isActive ? 'pink' : 'gray'};
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
`

// استخدام
<Button $isActive={true} disabled={isLoading}>
  {isLoading ? 'Loading...' : 'Click'}
</Button>

// ألوان متعددة
const Text = styled.p`
  color: ${props => {
    if (props.$error) return 'red'
    if (props.$warning) return 'orange'
    return 'gray'
  }};
`
```

## تحديث Array في State

```jsx
// إضافة عنصر في البداية
setItems(prev => [newItem, ...prev])

// تحديث عنصر واحد
setItems(prev => prev.map(item =>
  item.id === targetId
    ? { ...item, count: newCount }
    : item
))

// حذف عنصر
setItems(prev => prev.filter(item => item.id !== targetId))
```

---

# 🎉 المشروع مكتمل!

## ملخص الـ Commits:
```
0e8e0d4 Add stretch goals: character counter, loading state, liked hearts styling
bf113a4 Add like button with POST to API
8455260 POST new thought to API
12c7f54 Fetch latest thoughts from API using useEffect
8168531 Implement local state and controlled form for new thoughts
1d65a71 Add basic styling with Styled Components and responsive layout
dbcee79 Create basic components and static layout for Happy Thoughts
180d63a Setup project and add initial context file
```

## المفاهيم المُتعلَّمة:
| الأسبوع | المفهوم | التطبيق في المشروع |
|---------|---------|-------------------|
| Week 13 | Components, JSX, Props | ThoughtCard, ThoughtList |
| Week 14 | Styled Components | كل الـ styling |
| Week 15 | useState, Controlled Forms | Form input, thoughts list |
| Week 16 | useEffect, fetch API | GET + POST requests |

---

> 📝 **ملاحظة:** هذا الملف يُحدَّث مع كل TODO ننجزه. ارجع له كمرجع سريع! 🚀
