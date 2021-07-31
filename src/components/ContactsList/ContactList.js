import { useDispatch, useSelector } from 'react-redux';
import { ContactItem } from './ContactItem';
import { useEffect } from 'react';
import styles from './ContactList.module.css';
import operations from './../../redux/operations';
import { getLoading, getFilteredContacts } from '../../redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const onClick = id => dispatch(operations.deleteContact(id))
  useEffect(() => dispatch(operations.getContacts()),
  [dispatch]);
  const contacts = useSelector(getFilteredContacts);
  const loading = useSelector(getLoading);
    return (
    <ul className={styles.list}>
      {loading && 'Loading...'}
      < ContactItem contacts={contacts} onClick={(e) => onClick(e.target.name)}  />
      {contacts.length <= 0 && !loading && <p>No contacts</p>}
      </ul>
    )
}


export default ContactList;