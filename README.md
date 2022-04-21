# Recipe-Planner

Front-End website for managing individual recipes and planning a schedule of planned meals to order/cook

## Table Of Contents

- [Features](#features)
- [ToDo](#todo)

## Features

Utilizing this website you can:

1. Create new recipes to be stored in a database
1. Delete existing recipes
1. Edit existing recipes
1. Plan a week's worth of meals at a time
1. Drag and drop to swap the ordering of certain meals
1. See a summary of all ingredients required for the week
1. See a details breakdown of each ingredient for each day (so you can plan when to head to the grocery store)
1. Send out shared google calendar invites for your planned meals so everyone can keep track of them via their personal devices (to-do)

## ToDo

- Unit Tests
- Add logic for saving CRUD operations for the recipes
- Error Handling on Form
- Setup google calendar integration
- Add a calendar page to the website and allow the ability to quickly and easily switch between weeks when meal planning
- Build backend architecture in Azure
  - blob storage for images
  - either azure sql or cosmos DB for storing recipes
- Build services for interacting with the backend API
- Look for opportunities to simplify state, perhaps with Context
- Pretty up the Add/Edit/Delete Recipe screen
- Look for opportunities to clean up CSS
