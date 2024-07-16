import { ActionType, DataType } from '../types/data';
import { ACTIONS } from './actions';

export const PreviousSearchTerm = 'prev-search-term';

export function paginatorReducer(
  state: DataType,
  action: ActionType
): DataType {
  switch (action.type) {
    case ACTIONS.MAKE_REQUEST:
      return {
        ...state,
        loading: true,
        data: null,
      };
    case ACTIONS.GET_DATA:
      return typeof action.payload !== 'string'
        ? {
            ...state,
            loading: false,
            data: action.payload,
          }
        : state;
    case ACTIONS.ERROR:
      return {
        ...state,
        loading: false,
        error: true,
        data: null,
      };
    case ACTIONS.NEXT_PAGE:
      return {
        ...state,
        page: state.page + 1,
      };
    case ACTIONS.PREV_PAGE:
      return {
        ...state,
        page: state.page - 1,
      };
    case ACTIONS.SEARCH_TERM: {
      if (typeof action.payload === 'string') {
        if (action.payload !== '')
          localStorage.setItem(PreviousSearchTerm, action.payload);
        return {
          ...state,
          page: 0,
          searchTerm: action.payload || '',
        };
      }
      return state;
    }
    default:
      return state;
  }
}
