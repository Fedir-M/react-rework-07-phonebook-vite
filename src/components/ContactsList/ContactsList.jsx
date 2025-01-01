
import Filter from '../Filter/Filter';
import ContactItem from '../ContactItem/ContactItem';

import s from './ContactsList.module.css';
import { useSelector } from 'react-redux';
import { contactsSelector, filterSelector } from '../../redux/contact/contactsSelectors';

const ContactsList = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filterSelector);


  const handleFilter = () => {
    return contacts?.filter(el =>
      el.name.toLocaleLowerCase().includes(filter?.toLocaleLowerCase())
    );    
  };

  const filteredList = handleFilter();  

  return (
    <div>
      <h2>Contacts</h2>

      <Filter  />      

      <ul className={s.listWrapper}>
        {filteredList?.map(el => (
          <ContactItem
            key={el.id}
            id={el.id}
            name={el.name}
            number={el.number}
          />
        ))}
      </ul>
    </div>
  );
};

export default ContactsList;
