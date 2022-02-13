export function PageTitle({ title, className }) {
  document.title = title;
  return <h1 className={className}>{title}</h1>;
}
