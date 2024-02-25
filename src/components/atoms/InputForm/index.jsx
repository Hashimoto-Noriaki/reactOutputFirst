import styles from './style.module.css';

export const InputForm = (props) =>{
    /* props*/
    const {inputValue,placeholder,handleChangeValue,handleKeyDown} = props;
    return (
        <input 
        className={styles.input}
        type = "text"
        placeholder = {placeholder}
        value = {inputValue}
        onChange = {handleChangeValue}
        onKeyDown = {handleKeyDown}
        />
    );
};



export default InputForm;


// export const InputForm = ({ type, placeholder, value, onChange }) => {
//   return (
//     <input
//       type={type}
//       placeholder={placeholder}
//       value={value}
//       onChange={onChange}
//       className={styles.input}
//     />
//   );
// }