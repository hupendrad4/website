// components/BackgroundDots.js
export default function BackgroundDots() {
  const dots = [
    { left: "27.12%", top: "90.57%", translate: "-49.82px" },
    { left: "64.77%", top: "76.23%", translate: "-8.49px" },
    { left: "98.90%", top: "85.50%", translate: "-63.88px" },
    { left: "33.09%", top: "78.66%", translate: "-44.28px" },
    { left: "63.70%", top: "20.33%", translate: "-44.51px" },
    { left: "19.48%", top: "28.97%", translate: "-12.81px" },
    { left: "55.40%", top: "37.95%", translate: "-52.39px" },
    { left: "77.41%", top: "93.05%", translate: "-9.80px" },
    { left: "17.86%", top: "56.55%", translate: "-3.89px" },
    { left: "82.53%", top: "16.40%", translate: "-65.14px" },
    { left: "83.23%", top: "4.44%", translate: "-83.50px" },
    { left: "7.59%", top: "8.44%", translate: "-4.20px" },
    { left: "43.09%", top: "75.26%", translate: "-23.40px" },
    { left: "9.65%", top: "96.28%", translate: "-42.92px" },
    { left: "1.09%", top: "78.99%", translate: "-91.40px" },
    { left: "4.96%", top: "47.86%", translate: "-0.95px" },
    { left: "69.31%", top: "89.63%", translate: "-1.47px" },
    { left: "49.49%", top: "57.96%", translate: "-1.22px" },
    { left: "13.25%", top: "7.92%", translate: "-46.55px" },
    { left: "92.85%", top: "12.59%", translate: "-4.46px" },
  ];
  return (
    <div className="absolute inset-0 overflow-hidden opacity-30 pointer-events-none z-10">
      {dots.map((dot, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 rounded-full bg-indigo-500"
          style={{
            left: dot.left,
            top: dot.top,
            transform: `translateY(${dot.translate})`,
            transition: "all 1.8s cubic-bezier(.55,.3,.62,1.03)",
          }}
        />
      ))}
    </div>
  );
}
