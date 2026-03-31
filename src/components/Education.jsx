const Education = ({ handleChange }) => {
  return (
    <>
      <p>QUALIFICATION:</p>

      <table border="1">
        <thead>
          <tr>
            <th>Sl.No.</th>
            <th>Examination</th>
            <th>Board</th>
            <th>Percentage</th>
            <th>Year of Passing</th>
          </tr>
        </thead>
        <tbody>
          {[
            { id: 1, name: "Class X" },
            { id: 2, name: "Class XII" },
            { id: 3, name: "Graduation" },
            { id: 4, name: "Masters" },
          ].map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td><input name={`${item.name}-board`} onChange={handleChange} /></td>
              <td><input name={`${item.name}-percentage`} onChange={handleChange} /></td>
              <td><input name={`${item.name}-year`} onChange={handleChange} /></td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>
        COURSES APPLIED FOR:
        BCA <input type="radio" name="course" value="BCA" onChange={handleChange} />
        B.Com <input type="radio" name="course" value="BCom" onChange={handleChange} />
        B.Sc <input type="radio" name="course" value="BSc" onChange={handleChange} />
        B.A <input type="radio" name="course" value="BA" onChange={handleChange} />
      </p>
    </>
  );
};

export default Education;