import { Form } from "@/components/Form";
import { fetchFromHash } from "../actions";

export default async function Hash({ params }: { params: { hash: string } }) {
  const { hash } = params;
  const result = (await fetchFromHash(hash)) ?? undefined;
  console.log({ result });

  return <Form initialValue={result} />;
}
