import { createNewMealPrep } from "@/app/actions";
import { Form } from "@/components/Form";

export default function MealPrepPage() {
  return <Form action={createNewMealPrep} />;
}
