const Personal = ({ handleChange }) => {
  return (
    <>
      <p>
        FIRST NAME:
        <input name="firstName" onChange={handleChange} />
        (max 30 characters a-z and A-Z)
      </p>

      <p>
        LAST NAME:
        <input name="lastName" onChange={handleChange} />
        (max 30 characters a-z and A-Z)
      </p>

      <p>
        DATE OF BIRTH:
        <select name="day" onChange={handleChange}>
          <option>Day</option>
        </select>
        <select name="month" onChange={handleChange}>
          <option>Month</option>
        </select>
        <select name="year" onChange={handleChange}>
          <option>Year</option>
        </select>
      </p>

      <p>
        EMAIL ID:
        <input name="email" onChange={handleChange} />
      </p>

      <p>
        MOBILE NUMBER:
        <input name="mobile" onChange={handleChange} />
        (10 digit number)
      </p>

      <p>
        GENDER:
        Male <input type="radio" name="gender" value="male" onChange={handleChange} />
        Female <input type="radio" name="gender" value="female" onChange={handleChange} />
      </p>
    </>
  );
};

export default Personal;