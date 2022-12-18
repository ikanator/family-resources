export default function ListItem({ item }) {
  return (
    <li>
      {item.url ? (
        <a href={item.url} target="_blank">
          {item.title}
        </a>
      ) : (
        item.title
      )}
    </li>
  );
}
