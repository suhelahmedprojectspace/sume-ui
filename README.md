# 🌌 Sumi UI
_**Sumi ui is a sleek, modern, and customizable component library built with React and Tailwind CSS. Designed for speed, accessibility, and developer experience, Astra helps you build consistent and beautiful user interfaces effortlessly.**_



## 🚀 Features

⚡ Blazing Fast: Lightweight and performance-optimized.</br>

🎨 Themeable: Easily customizable with Tailwind CSS and CSS variables.</br>
🧩 Modular Components: Use only what you need.</br>
♿ Accessible: Follows WAI-ARIA standards.</br>
💅 Beautiful by Default: Minimal and elegant design system.</br>
📦 Tree-shakable: Optimized for modern bundlers.</br>


```bash
npm install @sume/ui
```

### 🎨 Usage
```bash
import { Button, Card, Accordion } from '@sume/ui';

// Import specific components directly
import { Button } from '@sume/ui/components/button';
import { Accordion } from '@sume/ui/components/accordion';
```

### Examples
```bash
import '@sume/ui/styles.css';
Basic Example
import React from 'react';
import { Button, Card, Accordion } from '@sume/ui';
import '@sume/ui/styles.css';

function App() {
return (
<div className="p-8">
<Card>
<h1>Welcome to Sume UI</h1>
<Button variant="primary">Get Started</Button>

text
    <Accordion>
      <Accordion.Item value="item-1">
        <Accordion.Trigger>Component Library</Accordion.Trigger>
        <Accordion.Content>
          A comprehensive set of React components for modern web applications.
        </Accordion.Content>
      </Accordion.Item>
    </Accordion>
  </Card>
</div>
);
}

export default App;
```

## 🎯 Available Components
 **Accordion** - Collapsible content sections </br>
 **Avatar** - User profile images and initials </br>
 **Badge** - Status and category indicators </br>
**Button** - Interactive buttons with variants </br>
**Card** - Content containers </br>
**Carousel** - Image and content sliders </br>
**CodeBlock**  - Syntax-highlighted code display </br>
**Dropdown** - Contextual menus </br>
**FileUpload** - File selection and upload </br>
**Input** - Text input fields </br>
**KeybabMenu** - Three-dot action menus </br>
**Modal** - Dialog overlays </br>
**Navbar**  - Navigation headers </br>
**ProgressBar** - Loading and progress indicators </br>
**Sidebar** - Navigation sidebars </br>
**StepProgressBar** - Multi-step progress indicators </br>
**TextArea** - Multi-line text input </br>
  
## Styling
### Built on Tailwind CSS. Override or extend styles with utility classes:

```bash
<Button className="bg-purple-500 hover:bg-purple-600">Custom Button</Button>
```
This library uses Tailwind CSS v4. The components come pre-styled but can be customized:


<Button className="bg-purple-500 hover:bg-purple-600">
Custom Button
</Button>


## Thanks for exploring Sume UI. We’re grateful to the community of builders who inspire its design and direction. See you in Issues and Discussions.
