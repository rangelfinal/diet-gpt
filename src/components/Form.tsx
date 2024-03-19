"use client";

import SchemaForm from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";

import { TextField } from "@mui/material";
import { createNewPrompt } from "../app/actions";
import { useFormState } from "react-dom";
import { FormButton } from "../components/FormButton";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export function Form({
  initialValue,
}: {
  initialValue?: {
    context?: string | null;
    prompt: string;
    formSchema?: string;
    uiSchema?: string;
  };
}) {
  const [state, formAction] = useFormState<
    typeof initialValue | { error: string }
  >(createNewPrompt as any, initialValue);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={formAction} className="flex flex-col">
        {state && "error" in state && <p>{state.error}</p>}
        <TextField
          name="context"
          label="Context"
          defaultValue={initialValue?.context}
          multiline
          rows={8}
        />
        <TextField
          name="prompt"
          label="Prompt"
          defaultValue={initialValue?.prompt}
        />
        <FormButton type="submit">Send</FormButton>
      </form>

      {state && "formSchema" in state && "uiSchema" in state && (
        <ErrorBoundary errorComponent={() => <p>Failed to render form</p>}>
          <SchemaForm
            schema={JSON.parse(state.formSchema!)}
            uiSchema={JSON.parse(state.uiSchema!)}
            validator={validator}
          />
        </ErrorBoundary>
      )}
    </main>
  );
}
