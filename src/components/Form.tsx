"use client";

import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { useFormState } from "react-dom";
import { FormButton } from "../components/FormButton";

export function Form({
  action,
  initialValue,
}: {
  action: (initialState: typeof initialValue, data: FormData) => void;
  initialValue?: {
    context: string | null;
    formSchema?: string;
    uiSchema?: string;
  };
}) {
  const [state, formAction] = useFormState<
    typeof initialValue | { error: string }
  >(action as any, initialValue);

  return (
    <form
      action={formAction}
      className="flex flex-col border border-white w-full p-10"
    >
      {state && "error" in state && <p>{state.error}</p>}
      <FormControl fullWidth>
        <InputLabel id="model-label">Model</InputLabel>
        <Select labelId="model-label" id="model" label="Model">
          <MenuItem value="gpt-4-0125-preview">
            gpt-4-0125-preview (Latest)
          </MenuItem>
          <MenuItem value="gpt-4-1106-preview">gpt-4-1106-preview</MenuItem>
          <MenuItem value="gpt-4-0613">gpt-4-0613</MenuItem>
          <MenuItem value="gpt-3.5-turbo-0125">
            gpt-3.5-turbo-0125 (Latest)
          </MenuItem>
          <MenuItem value="gpt-3.5-turbo-1106">gpt-3.5-turbo-1106</MenuItem>
          <MenuItem value="gpt-3.5-turbo-instruct">
            gpt-3.5-turbo-instruct
          </MenuItem>
        </Select>
      </FormControl>
      <TextField
        name="context"
        label="Diet"
        defaultValue={initialValue?.context}
        multiline
        rows={20}
      />
      <FormButton variant="contained" color="success" type="submit">
        Send
      </FormButton>
    </form>
  );
}
