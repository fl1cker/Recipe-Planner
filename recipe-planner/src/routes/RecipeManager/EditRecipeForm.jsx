import './GenericRecipeForm.css';
import './EditRecipeForm.css';
import React from 'react';
import AddEditRecipeForm from './AddEditRecipeForm';
import AddOrEdit from '../../models/AddOrEdit';

function EditRecipeForm({ originalRecipe, resetRecipeForm }) {
  return (
    <AddEditRecipeForm
      recipe={originalRecipe}
      resetRecipeForm={resetRecipeForm}
      addOrEdit={AddOrEdit.Edit}
    />
  );
}

export default EditRecipeForm;
