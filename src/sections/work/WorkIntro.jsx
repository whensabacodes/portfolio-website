function WorkIntro({ copy }) {
  return (
    <header className="work-page__intro">
      <p className="work-page__eyebrow text-label">{copy.eyebrow}</p>
      <h1 className="work-page__heading">{copy.heading}</h1>
      <p className="work-page__lede">{copy.lede}</p>
      <p className="work-page__description">{copy.description}</p>
    </header>
  );
}

export default WorkIntro;
