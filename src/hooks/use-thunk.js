import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";

function useThunk(thunk) {
  const [isLoadingUsers, setIsLoadingUsers] = useState(false);
  const [loadingUsersError, setLoadingUsersError] = useState(null);

  const dispatch = useDispatch();

  const runThunk = useCallback(
    (arg) => {
      setIsLoadingUsers(true);
      dispatch(thunk(arg))
        .unwrap()
        .catch((err) => {
          setLoadingUsersError(err);
        })
        .finally(() => setIsLoadingUsers(false));
    },
    [dispatch, thunk],
  );

  return [runThunk, isLoadingUsers, loadingUsersError];
}

export default useThunk;
