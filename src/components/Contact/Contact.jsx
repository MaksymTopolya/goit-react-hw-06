import { HiMiniUserCircle, HiMiniPhone } from "react-icons/hi2";
import { useDispatch } from 'react-redux';
import { remove } from '/src/redux/contactsSlice.js';
export default function Contact({ data }) {
     const dispatch = useDispatch();
    return (
        <>
            <h3><HiMiniUserCircle /> {data.info.name}</h3>
            <h3><HiMiniPhone/> {data.info.number}</h3>
            <button onClick={() => dispatch(remove(data.id))}>Delete</button>
        </>
    )
}