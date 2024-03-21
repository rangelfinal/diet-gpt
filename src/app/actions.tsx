"use server";

import { PrismaClient } from "@prisma/client";
import Sqids from "sqids";
import { createNewPrompt } from "./util";

export async function fetchFromHash(hash: string) {
  const prisma = new PrismaClient();
  const sqids = new Sqids();

  const id = sqids.decode(hash)?.[0];

  return prisma.promptResult.findUnique({ where: { id } });
}

export async function createNewStoreList(_: any, data: FormData) {
  const prompt = `
    Based on the guidelines provided below, generate a detailed checklist for a weekly store trip that caters to the user's specific needs and preferences. This checklist should encompass all aspects of planning, shopping, and budgeting, ensuring a streamlined and efficient shopping experience. Consider dietary restrictions, preferred brands, budget constraints, and any other specified preferences to create a personalized and actionable shopping guide.
    Use "ui:widget":"checkbox" on the ui schema to create a checkbox for each item.

    Checklist Requirements:

      Pre-Trip Planning:
          Create a comprehensive shopping list organized by category to streamline the shopping process.
          Check pantry and fridge to avoid purchasing duplicates of items already in stock.
          Plan meals for the week to ensure the shopping list covers all necessary ingredients.

      Budgeting:
          Estimate the total cost of the shopping list and adjust items to stay within budget.
          Identify items where coupons, sales, or generic brands can offer savings.

      During Shopping:
          Organize the shopping route by store sections to minimize backtracking and save time.
          Provide tips on selecting fresh produce, meats, and other perishables.
          Highlight the importance of checking expiration dates and choosing the freshest items.

      Post-Shopping:
          Advise on efficiently packing groceries to avoid damage and spoilage.
          Suggest immediate storage tips for perishables to maintain freshness.

      Additional Tips:
          Offer general advice for healthy and budget-friendly shopping, such as shopping the perimeter of the store first.
          Recommend eco-friendly shopping practices, like using reusable bags.

    Goal:
      The objective is to equip the user with a personalized, efficient, and budget-conscious shopping strategy that aligns with their dietary preferences, lifestyle, and financial considerations, making weekly shopping trips more organized and less stressful.
  `;

  const context = data.get("context") as string;

  await createNewPrompt(prompt, context);
}

export async function createNewMealPrep(_: any, data: FormData) {
  const prompt = `
    Given the dietary preferences and restrictions detailed below, generate a comprehensive checklist for a meal prep day, covering all necessary steps from ingredient selection to the final storage of meals. The checklist should include sections for breakfast, lunch, dinner, and snacks, ensuring each meal adheres to the specified dietary guidelines. Provide alternatives where possible, and highlight any critical dietary considerations to be aware of during preparation.
    Use "ui:widget":"checkbox" on the ui schema to create a checkbox for each item.

    Checklist Requirements:

      Ingredient Selection:
          Ensure all ingredients match the user’s dietary needs and restrictions.
          Suggest alternatives for common allergens or non-compliant ingredients.

      Preparation Steps:
          Outline the necessary preparation steps for each meal, focusing on efficiency and dietary compliance.
          Include any specific cooking techniques or tips relevant to the diet.

      Storage and Organization:
          Provide guidance on properly storing prepared meals to maintain freshness and nutritional quality.
          Offer tips for organizing meals in the fridge or freezer for easy access.

      Additional Tips:
          Share any additional tips related to the diet that could enhance the meal prep experience or improve the meals' nutritional value.

    Goal:
      The aim is to create a user-friendly, diet-compliant meal prep checklist that simplifies the process of planning, preparing, and storing meals, making it easier for the user to maintain their dietary habits throughout the week.
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