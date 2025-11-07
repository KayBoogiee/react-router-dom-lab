import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const MailboxForm = ({ addBox }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    boxOwner: '',
    boxSize: 'Small',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addBox(formData);
    navigate('/mailboxes');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="boxOwner">Box Owner:</label>
      <input
        id="boxOwner"
        name="boxOwner"
        type="text"
        value={formData.boxOwner}
        onChange={handleChange}
        required
      />

      <label htmlFor="boxSize">Box Size:</label>
      <select
        id="boxSize"
        name="boxSize"
        value={formData.boxSize}
        onChange={handleChange}
      >
        <option value="Small">Small</option>
        <option value="Medium">Medium</option>
        <option value="Large">Large</option>
      </select>

      <button type="submit">Add Mailbox</button>
    </form>
  );
};

export default MailboxForm;
