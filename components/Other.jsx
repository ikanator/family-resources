import List from "./List";
import { otherResources } from "../contants";
import ListItem from "./ListItem";

export default function Other() {
  return (
    <List>
      {otherResources.map((resource) => (
        <ListItem item={resource} key={resource.title} />
      ))}
    </List>
  );
}
