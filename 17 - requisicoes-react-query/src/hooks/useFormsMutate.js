import { useMutation, useQueryClient } from "@tanstack/react-query";

const postData = async (formData) => {
    return await fetch('http://localhost/api-roupas/submitForm.php', formData);
}

export function useFormsMutate(){
    const queryClient = useQueryClient();//Chama a instância do cliente de query que foi definida no App.js
    const mutate = useMutation({
        mutationFn: postData,
        onSuccess: () => {
            queryClient.invalidateQueries(['calcados-data']);
        }
    });

    return mutate;
}