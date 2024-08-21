import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS if not using CDN

function NewGroup() {
  // State variables for each form field
  const [name, setName] = useState('');
  const [startDate, setStartDate] = useState('');
  const [weeks, setWeeks] = useState('');
  const [timesPerWeek, setTimesPerWeek] = useState('');
  const [maxParticipants, setMaxParticipants] = useState('');
  const [minParticipants, setMinParticipants] = useState('');
  const [description, setDescription] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    const formData = {
      name,
      startDate,
      weeks,
      timesPerWeek,
      maxParticipants,
      minParticipants,
      description
    };
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6">
          <div className="border border-primary rounded p-4 bg-light shadow">
            <h2 className="mb-4">Group Registration Form</h2>
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="form-group">
                <label htmlFor="name">Course Name</label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="startDate">Start Date:</label>
                <input
                  type="date"
                  id="startDate"
                  className="form-control"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="weeks">How Many Weeks:</label>
                <input
                  type="number"
                  id="weeks"
                  className="form-control"
                  value={weeks}
                  onChange={(e) => setWeeks(e.target.value)}
                  min="1"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="timesPerWeek">How Many Times a Week:</label>
                <input
                  type="number"
                  id="timesPerWeek"
                  className="form-control"
                  value={timesPerWeek}
                  onChange={(e) => setTimesPerWeek(e.target.value)}
                  min="1"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group col-md-6">
                  <label htmlFor="minParticipants">Minimum Number of Participants:</label>
                  <input
                    type="number"
                    id="minParticipants"
                    className="form-control"
                    value={minParticipants}
                    onChange={(e) => setMinParticipants(e.target.value)}
                    min="1"
                    required
                  />
                </div>

                <div className="form-group col-md-6">
                  <label htmlFor="maxParticipants">Maximum Number of Participants:</label>
                  <input
                    type="number"
                    id="maxParticipants"
                    className="form-control"
                    value={maxParticipants}
                    onChange={(e) => setMaxParticipants(e.target.value)}
                    min="1"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                  id="description"
                  className="form-control"
                  rows="3"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Enter a description"
                />
              </div>

              <button type="submit" className="btn btn-primary">Save</button>&nbsp;&nbsp;
              <button type="button" className="btn btn-secondary">Cancel</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewGroup;