# 🔢 Smart Calculator (with Theme Toggle + Memory + Live Result)

A sleek and functional calculator built with **HTML**, **CSS**, and **JavaScript**.  
This project supports real-time calculation, memory functions, theme toggling (dark/light), and keyboard input — all in a minimal, responsive layout.

---

## 🌟 Features

- ✅ **Live Calculation Preview** while typing
- 🌗 **Dark/Light Mode Toggle** with saved preference
- ⌨️ **Keyboard Input Support**
- 💾 **Memory Functions**:
  - `M+`: Store result in memory
  - `MR`: Recall memory
  - `MC`: Clear memory
- 🔒 **Safe Expression Evaluation** using [math.js](https://mathjs.org/)
- 🎯 **Mobile-Friendly** and responsive layout

---

## 🛠️ Technologies Used

- HTML5
- CSS3 (Custom properties for theming)
- JavaScript (Vanilla)
- [math.js CDN](https://cdnjs.com/libraries/mathjs)

---

## 📁 File Structure

calculator/
├── index.html # Main HTML structure
├── style.css # Styling and theming
└── script.js # Calculator functionality and logic

yaml
Copy
Edit

---

## 🚀 How to Run Locally

1. **Clone this repository**:
   ```bash
   git clone https://github.com/your-username/smart-calculator.git
Open index.html in your browser:

No dependencies or server setup required.

⚡ Keyboard Support
Key	Action
0–9	Number input
+ - * /	Operators
.	Decimal
Enter	Evaluate expression
Backspace	Delete last digit

💡 Notes
math.evaluate() from math.js ensures safe expression parsing (no eval() used).

Theme preference is stored in localStorage and retained on refresh.


![Light Mode](#)
![Dark Mode]

✨ Future Enhancements
Add calculation history panel

Add sound/vibration feedback on button click

Support scientific functions (optional)

Add copy-to-clipboard button for results

Make the calculator draggable

🙌 Acknowledgments
math.js – for safe and powerful math parsing

Inspired by modern calculator UIs with a minimal twist

