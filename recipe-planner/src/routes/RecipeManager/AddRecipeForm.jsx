import './GenericRecipeForm.css';
import './AddRecipeForm.css';
import React from 'react';
import AddEditRecipeForm from './AddEditRecipeForm';
import AddOrEdit from '../../models/AddOrEdit';

function AddRecipeForm({ resetRecipeForm }) {
  return (
    <AddEditRecipeForm
      resetRecipeForm={resetRecipeForm}
      addOrEdit={AddOrEdit.Add}
    />
  );
}

export default AddRecipeForm;
