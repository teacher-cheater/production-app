import { useDispatch } from 'react-redux';
import { AppDispatch } from 'app/providers/StoreProviders';

export const useAppDispatch = () => useDispatch<AppDispatch>();
