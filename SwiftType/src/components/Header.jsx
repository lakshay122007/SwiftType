export default function Header({ mode, time }) {
  return (
    <header className="text-center">
      <h1 className="m-0" style = {{fontSize: "2.8rem", fontWeight: 800, letterSpacing: "0.02em"}}>
        <span className="text-accent">S</span>
        <span className="text-muted">wift</span>
        <span className="text-accent">T</span>
        <span className="text-muted">ype</span><br />
        <span className="text-accent font-bold text-base text-center">
          {mode} · {time === Infinity ? "∞" : `${time}s`}
        </span>
      </h1>
    </header>
  )
}