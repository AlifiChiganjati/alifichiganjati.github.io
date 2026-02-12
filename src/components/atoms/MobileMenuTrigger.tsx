function MobileMenuTrigger({ onToggle }) {
  return (
    <button onClick={onToggle} className="text-3xl lg:hidden">
      ☰
    </button>
  );
}

export default MobileMenuTrigger;
