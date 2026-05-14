# CodeAlpha_ModernCalculator
A modern JavaScript calculator with keyboard support, smart single-button bracket logic `()`, auto-closing brackets, backspace handling, percentage operations, and responsive UI. Built using HTML, CSS, and JavaScript.


# Features

✅ Basic arithmetic operations  
✅ Keyboard support  
✅ Auto scrolling display  
✅ Backspace support  
✅ Percentage support  
✅ Smart single bracket button `( )`  
✅ Auto close brackets before calculation  

---

# Single Bracket Button Logic

This calculator uses only ONE button for both:

(
)

Logic:

- If expression starts or last character is operator:
  → add "("

- If open bracket already exists:
  → add ")"

Example:

Input:
2 + (

Next press:
)

---

# Keyboard Support

| Key | Action |
|------|--------|
| 0-9 | Numbers |
| + - * / | Operators |
| Enter | Calculate |
| Backspace | Delete |
| Escape | Clear |
| ( or ) | Smart bracket logic |
| . | Decimal |

---

# Functions

## appendToDisplay(value)

Adds values to display.

---

## calculate()

Calculates final result using eval().

Automatically closes remaining brackets.

---

## clearDisplay()

Clears calculator display.

---

## backspace()

Deletes last character.

Also updates bracket counter.

---

## autoScroll()

Automatically scrolls display to right side.

---

# Technologies Used

- HTML
- CSS
- JavaScript

---

# Author

Made for learning JavaScript calculator logic.
