import { useDispatch, useSelector } from 'react-redux';
import styles from './Filter.module.css';
import * as actions from '../../redux/actions';
import { getFilter } from '../../redux/selectors';

const Filter = () => {
    const dispatch = useDispatch();
    const onChange = (e) => dispatch(actions.filterContacts(e.target.value));

    const filter = useSelector(getFilter);
    return (
        <input type="text" className={styles.filter} 
        name="filter" value={filter} onChange={onChange}/>
    )
}


export default Filter;