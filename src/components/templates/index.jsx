import {useState,useMemo} from 'react';
import { InputForm } from '../../atoms/InputForm';
import {AddTodo} from '../../organism/AddTodo';
import {TodoList} from '../../organism/TodoList';
import {INIT_TODO_LIST,INIT_UNIQUE_ID} from '../../../constants/data';
import styles from './style.module.css';

export const TodoTemplate = () => {
    /*todo list  Todoリストの元のデータを管理するための状態変数。この状態は、初期化時に INIT_TODO_LIST で初期化*/
    const[originTodoList,setOriginTodoList] = useState(INIT_TODO_LIST);
    /* add input title 新しいTodoを追加するための入力フィールドの値を管理するための状態変数*/
    const [addInputValue,setAddInputValue]= useState('');
    /* Todoアイテムの一意のIDを管理するための状態変数。このIDは、新しいTodoが追加されるたびに増加し、重複しないようにする*/
    const [uniqueId,setUniqueId] = useState(INIT_UNIQUE_ID);
    /* 検索キーワード*/
    const [searchKeyword,setSearchKeyWord] = useState('');
    /* 表示用TodoList */
    const showTodoList = useMemo(() =>{
        return originTodoList.filter((todo) => {
            // 検索キーワードに部分一致したTodoだけを一覧表示する
            const regexp = new RegExp("^" + searchKeyword, "i");
            return todo.title.match(regexp);
        });
        //showTodoList変数がuseMemoを使って定義されています
        //この変数は、originTodoListをフィルタリングして検索処理が実行。
        //originTodoListまたはsearchKeywordが変更された場合にのみ、showTodoListが再計算。
        //それ以外の場合は、以前の結果が再利用されます。
        // ただし結果が前回と同じならキャッシュを返却し処理は実行されない(無駄な処理を省いている)
    },[originTodoList,searchKeyword]);
};
