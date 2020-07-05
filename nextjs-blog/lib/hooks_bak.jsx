/* eslint-disable no-console */
import useSWR from 'swr';
import fetcher from './fetch';

export function useCurrentUser() {
  console.log('useCurrentUser');
  const { data, error, mutate } = useSWR('/api/user', fetcher);

  if (error) console.log("useCurrentUser - error", error);

  const user = data?.user;
  return [user, { mutate }];
}

export function useUser(id) {
  console.log('useUser');
  const { data } = useSWR(`/api/users/${id}`, fetcher);
  return data?.user;
}
