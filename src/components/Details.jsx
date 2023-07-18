import React from "react";

const Details = ({
  info,
  handleDelete,
  updatedEventName,
  updatedStart,
  updatedEnd,
  updatedCircleColor,
  onInputChange,
  onClickUpdateHandler,
}) => {
  const { eventName, start, end, circleColor } = info;
  // console.log(eventName);

  return (
    <div>
      <h1>Detail Page</h1>
      <div>
        <p>Event Name: {eventName}</p>
        <input
          type="text"
          name="updatedEventName"
          value={updatedEventName}
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
        <p>Circle Color: {circleColor}</p>
        <select
          name="updatedCircleColor"
          value={updatedCircleColor}
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
