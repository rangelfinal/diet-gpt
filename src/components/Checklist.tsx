"use client";

import SchemaForm from "@rjsf/mui";
import validator from "@rjsf/validator-ajv8";
import { ErrorBoundary } from "next/dist/client/components/error-boundary";

export function Checklist({
  formSchema,
  uiSchema,
}: {
  formSchema: any;
  uiSchema: any;
}) {
  return (
    <ErrorBoundary errorComponent={() => <p>Failed to render form</p>}>
      <SchemaForm
        schema={formSchema}
        uiSchema={uiSchema}
        validator={validator}
      />
    </ErrorBoundary>
  );
}
