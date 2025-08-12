import { api } from '../services/userService';
import { useQuery} from "@tanstack/vue-query";

export function useGetUserDetail(userName){
    const { data, isFetching, isError } = useQuery({
        queryKey: ['user-list', userName],
        queryFn: () => api.getUserDetails(userName),
        staleTime: 4000,
        enabled: !!userName
    });

    return {data, isLoading: isFetching, isError};
}