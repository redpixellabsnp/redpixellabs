export default function BackgroundPattern() {
  return (
    <div className="fixed inset-0 opacity-5 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `
            radial-gradient(circle at 25% 25%, #FF3A3A 1px, transparent 1px),
            radial-gradient(circle at 75% 75%, #D90429 1px, transparent 1px)
          `,
          backgroundSize: "20px 20px",
        }}
      />
    </div>
  )
}
