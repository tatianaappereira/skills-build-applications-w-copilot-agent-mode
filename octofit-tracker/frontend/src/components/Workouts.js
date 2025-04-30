import React, { useEffect, useState } from 'react';

function Workouts() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    fetch('https://turbo-succotash-4564rj5vj94hjpjg-8000.app.github.dev/api/workouts/')
      .then(response => response.json())
      .then(data => setWorkouts(data))
      .catch(error => console.error('Error fetching workouts:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="mb-4 display-5">Workouts</h1>
      <div className="card shadow">
        <div className="card-body">
          <table className="table table-striped table-hover align-middle">
            <thead className="table-primary">
              <tr>
                <th>Name</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {workouts.map(workout => (
                <tr key={workout._id}>
                  <td>{workout.name}</td>
                  <td>{workout.description}</td>
                  <td>
                    <button className="btn btn-outline-primary btn-sm" disabled>View</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <button className="btn btn-success mt-3" data-bs-toggle="modal" data-bs-target="#addWorkoutModal">Add Workout</button>
        </div>
      </div>

      {/* Modal for adding workout (structure only, not functional) */}
      <div className="modal fade" id="addWorkoutModal" tabIndex="-1" aria-labelledby="addWorkoutModalLabel" aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="addWorkoutModalLabel">Add Workout</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form>
                <div className="mb-3">
                  <label htmlFor="workoutName" className="form-label">Workout Name</label>
                  <input type="text" className="form-control" id="workoutName" placeholder="e.g. Running" />
                </div>
                <div className="mb-3">
                  <label htmlFor="workoutDesc" className="form-label">Description</label>
                  <input type="text" className="form-control" id="workoutDesc" placeholder="e.g. Endurance training" />
                </div>
                <button type="submit" className="btn btn-primary">Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Workouts;
