import styles from './styles.module.css';
import { InputForm } from '../../atoms/InputForm';

export const AddTodo = (props) => {
    /*props */
    const {inputValue,handleChangeValue,handleKeyDown} = props;
    return (
        <>
        <h2 className={styles.inputValue}>
        <InputForm  
        type="text"
        placeholder={"New Todo"}
        inputValue={addInputValue}
        handleChangeValue={onChangeValue}
        handleKeyDown={handleAddTodo} 
        />  
        </h2>
        </>
    );
};

export default AddTodo;