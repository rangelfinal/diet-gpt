import { Checklist } from "@/components/Checklist";
import { fetchFromHash } from "../actions";

export default async function Hash({ params }: { params: { hash: string } }) {
  const { hash } = params;
  const result = await fetchFromHash(hash);

  if (!result) return null;

  return (
    <div style={{ overflow: "scroll" }}>
      <Checklist
        formSchema={JSON.parse(result.formSchema!)}
        uiSchema={JSON.parse(result.uiSchema!)}
      />
    </div>
  );
}
