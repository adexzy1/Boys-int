import { forwardRef } from 'react';

const Select = forwardRef(({ name, data }, ref) => {
  return (
    <div className="select_group">
      <select name={name} ref={ref}>
        <option>select your {name}</option>
        {data.map((item, index) => (
          <option key={index}>{item}</option>
        ))}
      </select>
      <span className="custom_arrow"></span>
    </div>
  );
});

export default Select;
