import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";

const COLORS_KEY = ["colors"];
const MAX_COLORS = 5;

export const useColors = () => {
  const queryClient = useQueryClient();

  // Lectura y escritura directa sobre la caché de React Query.
  // La caché es la ÚNICA fuente de verdad (ya no hay useState duplicado).
  const getColors = () => queryClient.getQueryData(COLORS_KEY) ?? [];
  const setColors = (colors) => queryClient.setQueryData(COLORS_KEY, colors);

  const colorsQuery = useQuery({
    queryKey: COLORS_KEY,
    queryFn: () => [],
    initialData: [],
    // Son datos 100% locales: nunca se consideran "viejos" ni se descartan.
    staleTime: Infinity,
    gcTime: Infinity,
  });

  const addColorMutation = useMutation({
    mutationFn: async (newColor) => {
      const current = getColors();

      if (current.length >= MAX_COLORS) {
        console.warn(`Cannot add more than ${MAX_COLORS} colors.`);
        return current;
      }

      return [...current, newColor];
    },
    onSuccess: setColors,
  });

  const changeFirstColorMutation = useMutation({
    mutationFn: async (color) => {
      const [, ...rest] = getColors();
      return [color, ...rest]; // si la lista está vacía, simplemente agrega el color
    },
    onSuccess: setColors,
  });

  const clearColorsMutation = useMutation({
    mutationFn: async () => [],
    onSuccess: setColors,
  });

  return {
    colors: colorsQuery.data,
    isLoadingColors: colorsQuery.isLoading,
    isErrorColors: colorsQuery.isError,
    addColor: addColorMutation.mutateAsync,
    isAdding: addColorMutation.isPending,
    changeFirstColor: changeFirstColorMutation.mutateAsync,
    isChangingFirstColor: changeFirstColorMutation.isPending,
    clearColors: clearColorsMutation.mutateAsync,
    isClearing: clearColorsMutation.isPending,
  };
};
