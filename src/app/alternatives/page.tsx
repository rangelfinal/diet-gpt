import { createNewAlternatives } from "@/app/actions";
import { Form } from "@/components/Form";

export default function AlternativesPage() {
  return <Form action={createNewAlternatives} />;
}
