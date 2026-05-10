# SwiftType

A minimalist, developer-focused typing speed test application. Built entirely with pure React and TailwindCSs, focusing on clean UI and precise state management.

checkout the deployed App here! - [SwiftType](swift-type-1.netlify.app)

## Features

* **Real-Time Analytics:** Calculates Words Per Minute (WPM) and typing accuracy on the fly.
* **Smooth Caret Animation:** Features a buttery-smooth, gliding cursor built entirely with CSS transitions and precise DOM positioning.
* **Developer-Focused Prompts:** Includes typing modes specifically for programming syntax, such as Python `for` and `while` loops, to test real-world coding speed.
* **Global Event Listening:** Captures keystrokes globally without relying on clunky input or textarea fields.

## Tech Stack

* **Frontend Framework:** React (bootstrapped with Vite for instant HMR)
* **Styling:** TailwindCss
* **Language:** Vanilla JavaScript

## Quick Start

To run SwiftType locally on your machine:

```bash
git clone [https://github.com/lakshay122007/SwiftType.git](https://github.com/lakshay122007/SwiftType.git)
cd SwiftType
npm install
npm run dev
```

Open `http://localhost:5173` in your browser to view the app.

## How It Works

SwiftType operates using an array of text strings and tracks the user's keystrokes via a `useEffect` hook attached to the global window object. 

As the user types, the application compares the input against the active text array, dynamically assigning CSS classes for correct and incorrect characters. The signature smooth cursor calculates its X and Y coordinates based on the currently active character's offset, translating its position with a subtle CSS ease-out transition.

---

