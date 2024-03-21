import { createNewStoreList } from "@/app/actions";
import { Form } from "@/components/Form";

export default function StorePage() {
  return <Form action={createNewStoreList} />;
}
