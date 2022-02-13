export function PageTitle({ title, classNames }) {
  document.title = title;
  return <h1 className={classNames}>{title}</h1>;
}
