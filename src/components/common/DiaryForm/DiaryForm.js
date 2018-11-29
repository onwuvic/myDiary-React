import React from 'react';


const DiaryForm = () => (
  <form id="createDiaryForm" className="form form-md">
    <div id="error-message" className="text-center error"></div>
    <div className="form-group">
      <label htmlFor="title">Title</label>
      <input type="text" id="title" placeholder="Title" />
    </div>
    <div className="form-group">
      <label htmlFor="body">Dear Diary</label>
      <textarea rows="5" id="body"></textarea>
    </div>
    {/* Save and Edit name mode base */}
    <button type="submit" id="button" className="btn btn-info">Save</button>
    <p id="loader" className="text-center spinner">Creating...</p>
  </form>
);

export { DiaryForm };
