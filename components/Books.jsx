import { books } from "../contants";
import List from "./List";
import ListItem from "./ListItem";

export default function Books() {
  return (
    <List>
      {books.map((book) => (
        <ListItem item={book} key={book.title} />
      ))}
    </List>
  );
}
