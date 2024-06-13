import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const API_CALCADOS = 'http://localhost/api-roupas/getCalcados.php';

const fetchCalcados = async () => {
    const response = await axios.get(API_CALCADOS);
    return response.data;
}

export function useCalcadoData(){
    const query = useQuery({
        queryFn: fetchCalcados,
        queryKey: ['calcados-data'],
        retry: false,
        refetchInterval: 60 * 7 * 1000
    });

    return query;
}