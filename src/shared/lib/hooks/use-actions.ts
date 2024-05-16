import { favoritesActions } from '@/features/favorites';
import { removedActions } from '@/features/removed/removed-slice';
import { bindActionCreators } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

const allActions = {
  ...favoritesActions,
  ...removedActions,
};

export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(allActions, dispatch);
};
