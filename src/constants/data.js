/**
 * Todoリストの処理値や、Todoリストの初期状態に関する情報
 */
export const INIT_TODO_LIST = [
    {
        id: 1,
        title:'Todo1'
    },
    {
        id: 2,
        title:'Todo2'
    }
];

/**
 * Todo採番IDの初期値  新しいアイテムに割り当てる新しいIDは、すでに存在するアイテムのIDとは異なる必要がある
 */
export const INIT_UNIQUE_ID = INIT_TODO_LIST.length;