import styles from './styles.module.css';
import { InputForm } from '../../atoms/InputForm';

export const AddTodo = (props) => {
    /*props */
    const {inputValue,handleChangeValue,handleKeyDown} = props;
    return (
        <>
        <h2 className={styles.inputValue}>{"ADD TODO"}</h2>
        <InputForm  
        type="text"
        placeholder={"New Todo"}
        inputValue={addInputValue}
        handleChangeValue={onChangeValue}
        handleKeyDown={handleAddTodo} 
        />  
        </>
    );
};

export default AddTodo;