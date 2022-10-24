<h1 align="center">React Animated Color Background</h1>
<h3 align="center">
  An open source library for React, <a href="https://klingenberg-dev.de">made by justTreme</a>.
</h3>

## Get started

### 🐇 Quick start

Install `react-animated-color-background` with via your package manager:

```
npm install react-animated-color-background
```

Then import the `GradientBackground` component:

```jsx
import { GradientBackground } from "react-animated-color-background"

export const MyComponent = () => (
    <div style={{width: 600, height: 400}}>
        <GradientBackground colors={["#111111", "#222222", "#333333", "#444444"]} className={"class"}/>
    </div>
)
```

You can use the `colors` prop to define the colors of the gradient. You can also use the `className` prop to define a custom class for the div the animated gradient is in.
<br>
The component will automatically adjust to the size of the parent element.
<br>
The `colors` prop can have up to 4 colors.

### 👩🏻‍⚖️ License

- react-animated-color-background is MIT licensed.
