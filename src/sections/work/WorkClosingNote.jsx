function WorkClosingNote({ note }) {
  if (!note) return null;

  return (
    <footer className="work-page__closing">
      <p className="work-page__closing-note">{note}</p>
    </footer>
  );
}

export default WorkClosingNote;
