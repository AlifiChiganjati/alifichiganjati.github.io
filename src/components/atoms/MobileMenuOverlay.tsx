function MobileMenuOverlay({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white">
      <button onClick={onClose}>Close</button>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
      </ul>
    </div>
  );
}

export default MobileMenuOverlay;
