"use server";

import { customGenerateGPTFormSchema } from "@gptbundle/server";
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import Sqids from "sqids";

export async function fetchFromHash(hash: string) {
  const prisma = new PrismaClient();
  const sqids = new Sqids();

  const id = sqids.decode(hash)?.[0];

  return prisma.promptResult.findUnique({ where: { id } });
}

export async function createNewPrompt(_: any, data: FormData) {
  const prisma = new PrismaClient();
  const sqids = new Sqids();

  const prompt = data.get("prompt") as string;
  const content = data.get("content") as string;

  let promptResult;
  try {
    const { json_schema: formSchema, ui_schema: uiSchema } =
      await customGenerateGPTFormSchema(
        { prompt, content },
        { model: "gpt-4-turbo-preview" }
      );

    promptResult = await prisma.promptResult.create({
      data: {
        prompt,
        context: content,
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
