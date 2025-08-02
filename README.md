# @shrinkray-tools/speed-banner

🔍 Lightweight development banner to visualize LCP and INP in real time — powered by [web-vitals](https://github.com/GoogleChrome/web-vitals).

## Install

```bash
npm install @shrinkray-tools/speed-banner
```

## Usage

### Vanilla JS

```js
import { mountSpeedBanner } from '@shrinkray-tools/speed-banner';

mountSpeedBanner();
```

A small overlay will appear in the corner showing real-time LCP and INP values.

### React Component

```jsx
import { SpeedBanner } from '@shrinkray-tools/speed-banner/react';

function App() {
  return (
    <>
      <SpeedBanner />
      {/* your app code */}
    </>
  );
}
```

## Options

- `containerId` (default: `"shrinkray-speed-banner"`): DOM ID used for the banner container.

---

Only runs in development (`NODE_ENV !== 'production'`). No config needed.
