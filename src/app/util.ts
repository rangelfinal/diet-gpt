import { customGenerateGPTFormSchema } from "@gptbundle/server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import Sqids from "sqids";

export async function createNewPrompt(prompt: string, context: string) {
  const prisma = new PrismaClient();
  const sqids = new Sqids();

  let promptResult;
  try {
    console.log("Sending request to OpenAPI");
    console.time("generateGPTFormSchema");
    const { json_schema: formSchema, ui_schema: uiSchema } =
      await customGenerateGPTFormSchema(
        { prompt, content: context },
        { model: "gpt-4-turbo-preview" }
      );
    console.timeEnd("generateGPTFormSchema");

    promptResult = await prisma.promptResult.create({
      data: {
        prompt,
        context,
        formSchema: JSON.stringify(formSchema),
        uiSchema: JSON.stringify(uiSchema),
      },
    });
  } catch (error) {
    console.error(error);
    return { error: "Failed to generate form schema" };
  }

  redirect(`/${sqids.encode([promptResult.id])}`);
}
