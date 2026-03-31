const Address = ({ handleChange }) => {
  return (
    <>
      <p>
        ADDRESS:
        <br />
        <textarea name="address" onChange={handleChange}></textarea>
      </p>

      <p>
        CITY:
        <input name="city" onChange={handleChange} />
        (max 30 characters a-z and A-Z)
      </p>

      <p>
        PIN CODE:
        <input name="pincode" onChange={handleChange} />
        (6 digit number)
      </p>

      <p>
        STATE:
        <input name="state" onChange={handleChange} />
        (max 30 characters a-z and A-Z)
      </p>

      <p>
        COUNTRY:
        <input name="country" onChange={handleChange} />
      </p>

      <p>
        HOBBIES:
        Drawing <input type="checkbox" name="drawing" onChange={handleChange} />
        Singing <input type="checkbox" name="singing" onChange={handleChange} />
        Dancing <input type="checkbox" name="dancing" onChange={handleChange} />
        Sketching <input type="checkbox" name="sketching" onChange={handleChange} />
        Others <input type="checkbox" name="others" onChange={handleChange} />
        <input name="otherText" onChange={handleChange} />
      </p>
    </>
  );
};

export default Address;