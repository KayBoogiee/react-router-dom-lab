import { Link } from 'react-router-dom';

const MailboxList = ({ mailboxes }) => {
  return (
    <section>
      <h2>Mailboxes</h2>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {mailboxes.map((mailbox) => (
          <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
            <div className="mail-box">
              <h3>Box #{mailbox._id}</h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default MailboxList;
