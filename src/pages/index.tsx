import { useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

export default function Home() {
  const [layouts, setLayouts] = useState({
    sm: [
      { i: "a", x: 0, y: 0, w: 1, h: 2 },
      { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
      { i: "c", x: 4, y: 0, w: 1, h: 2 },
    ],
  });

  const handleClick = () => {
    if (layouts.sm.length === 3) {
      setLayouts({
        ...layouts,
        sm: [
          ...layouts.sm,
          {
            i: "d",
            x: 8,
            y: 4,
            w: 3,
            h: 4,
          },
        ],
      });
    }
  };

  return (
    <>
      <main>
        <ResponsiveGridLayout
          className="layout"
          layouts={layouts}
          breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
          cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
        >
          {layouts.sm.map((item) => (
            <div key={item.i}>{item.i}</div>
          ))}
        </ResponsiveGridLayout>
        <button onClick={handleClick}>Add 4th</button>
      </main>
    </>
  );
}
