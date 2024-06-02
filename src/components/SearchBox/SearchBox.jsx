
import css from "./SearchBox.module.css"
import { useId } from "react";
import { changeFilter } from '/src/redux/filtersSlice.js';
import { useDispatch, useSelector} from 'react-redux';



export default function SearchBox() {
    const fieldId = useId();
    const dispatch = useDispatch();
     const filter = useSelector(state => state.filters.name);
   
    return (
        <div className={css.fieldContainer}>
            <label htmlFor={fieldId}>Find contacts by name</label>
            <input type="text" name="username" id={fieldId} onChange={e => dispatch(changeFilter(e.target.value))} className={css.field} value={filter} />
        </div>
    );
}
   