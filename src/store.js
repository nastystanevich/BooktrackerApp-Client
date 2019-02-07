import { createStore } from 'redux';
import {logInReducer} from './reducer';

let store = createStore(logInReducer);

store.dispatch()