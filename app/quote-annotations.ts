export const quoteAnnotations = [
['Steps and actions', 'The form has three steps. Steps 1 and 2 use “Next Step”; Step 3 uses “See Plans & Prices.” The primary action remains blue and clickable in every state.'],
['Progress navigation', 'Future progress steps are not interactive until every required field in the preceding section is complete. Completed steps remain available for review and display a green checkmark.'],
['Destination', 'Main Destination starts empty and searches the full country list. A green checkmark appears only after a country is selected or exactly matched. Choosing United States reveals the U.S. State dropdown.'],
['Travel dates', 'Travel Dates uses a two-month range picker. The empty value is MM/DD/YYYY - MM/DD/YYYY; a valid completed range displays the green checkmark and clear action.'],
['Required fields', 'Submitting an incomplete section adds a red border to each missing required field and shows the centered error message below the action button.'],
['Travelers and ages', 'How many travelers? supports 1–10. Render one unlabeled age field for each selected traveler. Age fields stay aligned with the traveler selector on desktop and stack directly below it on mobile.'],
['Residence and citizenship', 'Country of legal residence and Citizenship use the same full-country type-ahead as Destination. U.S. residence reveals the shared state dropdown; non-U.S. residence hides it and moves Citizenship into that position.'],
['Typography and components', 'Use Gamay Regular for body and field values and Gamay Semi Bold for labels, headings, steps, and buttons. Inputs, dropdowns, and buttons retain the shared component sizing, borders, radii, and blue primary state.'],
['Trip cost and deposit date', 'Total Trip Cost includes the prepaid, non-refundable expense guidance beside the field. First Deposit Date uses a single-month picker and includes its explanatory copy beside the field.'],
['Optional trip cost coverage', 'When “Yes, cover my trip cost” is checked, Total Trip Cost and First Deposit Date are shown. When unchecked, both fields are hidden and the reimbursement explanation is vertically centered in the content area.'],
['Completed fields', 'Valid country and date fields show the green outlined check icon at the left and a clear action at the right. State dropdown text uses Gamay Regular rather than bold.'],
['Mobile layout', 'At mobile width, helper copy stacks below its field, traveler controls do not stretch vertically, residence fields become one column, and progress labels wrap inside equal-width steps.'],
];
