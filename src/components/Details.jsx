import React from "react";

const Details = ({
  info,
  handleDelete,
  updatedeventname,
  updatedStart,
  updatedEnd,
  updatedcolor,
  onInputChange,
  onClickUpdateHandler,
}) => {
  const { eventname, start, end, color } = info;
  // console.log(eventname);

  return (
    <div>
      <h1>Detail Page</h1>
      <div>
        <p>Event Name: {eventname}</p>
        <input
          type="text"
          name="updatedeventname"
          value={updatedeventname}
          onChange={onInputChange}
        />
        <p>Start Time: {start}시</p>
        <input
          type="number"
          name="updatedStart"
          value={updatedStart}
          onChange={onInputChange}
          min="0"
          max="24"
        />
        <p>End Time: {end}시</p>
        <input
          type="number"
          name="updatedEnd"
          value={updatedEnd}
          onChange={onInputChange}
          min="0"
          max="24"
        />
        <p>Circle Color: {color}</p>
        <select
          name="updatedcolor"
          value={updatedcolor}
          onChange={onInputChange}
        >
          <option value="red">red</option>
          <option value="yellow">yellow</option>
          <option value="blue">blue</option>
          <option value="violet">violet</option>
        </select>
      </div>
      <button onClick={onClickUpdateHandler}>수정</button>
      &nbsp;
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
};

export default Details;
