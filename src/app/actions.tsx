"use server";

import { PrismaClient } from "@prisma/client";
import Sqids from "sqids";
import { createNewPrompt } from "./util";

export async function fetchFromHash(hash: string) {
  const prisma = new PrismaClient();
  const sqids = new Sqids();

  const id = sqids.decode(hash)?.[0];

  console.log(await prisma.promptResult.findMany({ take: 10 }));

  return prisma.promptResult.findUnique({ where: { id } });
}

export async function createNewStoreList(_: any, data: FormData) {
  const prompt = `
    Based on the guidelines provided below, generate a detailed checklist for a weekly store trip that caters to the user's specific needs and preferences. This checklist should focus on including all items to be bought at the store, but optionally should encompass all aspects of planning, shopping, and budgeting, ensuring a streamlined and efficient shopping experience. Consider dietary restrictions, preferred brands, budget constraints, and any other specified preferences to create a personalized and actionable shopping list.
    Try to add the raw ingredients for making the recipes instead of ready-to-eat items.
    Use "ui:widget":"checkbox" on the ui schema to create a checkbox for each item.

    Goal:
      The objective is to equip the user with a personalized, efficient, and budget-conscious shopping list that aligns with their dietary preferences, lifestyle, and financial considerations, making weekly shopping trips more organized and less stressful.
  `;

  const context = data.get("context") as string;

  await createNewPrompt(prompt, context);
}

export async function createNewMealPrep(_: any, data: FormData) {
  const prompt = `
    Given the dietary preferences and restrictions detailed below, generate a comprehensive checklist for a meal prep day, covering all necessary steps to the final storage of meals. Highlight any critical dietary considerations to be aware of during preparation.
    Add a item for each step necessary for a complete meal prep.
    Use "ui:widget":"checkbox" on the ui schema to create a checkbox for each item.

    Goal:
      The aim is to create a user-friendly, diet-compliant meal prep checklist that simplifies the process of preparing and storing meals, making it easier for the user to maintain their dietary habits throughout the week.
  `;

  const context = data.get("context") as string;

  await createNewPrompt(prompt, context);
}

export async function createNewAlternatives(_: any, data: FormData) {
  const prompt = `
    Given the dietary specifications and preferences outlined below, generate a list of alternative recipes that adhere to these guidelines. These alternatives should provide diverse and appealing options for the user, potentially replacing or offering variety alongside any provided recipes. Emphasize nutritional balance, taste, and alignment with dietary requirements. If specific recipes are provided for substitution, suggest alternatives that maintain the essence of the meal while fitting the dietary constraints. Offer a brief description of each recommended recipe, highlighting its suitability and appeal within the specified diet.

    Provided Recipes (Optional):
      Recipe 1 Name: [Include basic details or desired aspects to be maintained in alternatives.]
      Recipe 2 Name: [Include basic details or desired aspects to be maintained in alternatives.]
      (Continue as necessary.)
    
    Alternative Recipe Requirements:
    
      Nutritional Balance:
        Ensure each alternative recipe offers a balanced nutritional profile, aligning with the overall dietary goals.
  
      Flavor and Variety:
        Suggest recipes that introduce a range of flavors and textures to keep the diet interesting and enjoyable.
  
      Preparation and Cooking Time:
        Consider the user’s preference for cooking time and complexity, offering both simpler and more involved options.
  
      Special Considerations:
        If applicable, include any specific considerations such as high protein for athletes, low glycemic index for diabetes management, etc.
    
    Goal:
    
    The aim is to provide the user with a curated list of alternative recipes that refresh their meal plan without straying from their dietary path. These suggestions should introduce new flavors and experiences within the constraints of their diet, enhancing their culinary journey while adhering to their health and lifestyle goals.
  `;

  const context = data.get("context") as string;

  await createNewPrompt(prompt, context);
}
