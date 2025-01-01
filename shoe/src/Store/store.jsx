/*eslint-disable */
import { configureStore, createSlice } from '@reduxjs/toolkit';

//이건 useState의 역할 (user이라는 state가 전역으로 쓸 수 있게 됨)

//1. 이게 첫번째 global state 등록본 user
const user = createSlice({
  name: 'user',
  initialState: 'kim',
});

//2. second global state 등록본
const stock = createSlice({
  name: 'stock',
  initialState: ' 500 dollars',
  reducers: {
    changeName(state) {
      return 'thomas i will change yours name as' + state;
    },
  },
});

//3. third global state (OBJ FUCK)
const userCart = createSlice({
  name: 'userCart',
  //initialState가 우리가 원하는 globalState임. 이때 객체형태로 하려면 [이 안에다가 박음]
  initialState: [
    { id: 0, name: 'White and Black', count: 2 },
    { id: 2, name: 'Grey Yordan', count: 1 },
  ],
  reducers: {
    increaseCount(state, action) {
      const findItemId = state.find((item) => item.id === action.payload);
      if (findItemId) {
        findItemId.count += 1;
      }
    },
  },
});
export default configureStore({
  reducer: {
    user: user.reducer,
    stock: stock.reducer,
    userCart: userCart.reducer,
  },
});

export let { changeName } = stock.actions;
export const { increaseCount } = userCart.actions;
