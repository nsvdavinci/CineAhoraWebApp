

export const FilmsService = {

    //getFilmById: (id: number) => id,
    getFilmById: (id: number): Promise<number> => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(id);  // Devuelve el id después de 1 segundo
            }, 1000);  // 1000 ms = 1 segundo
        });
    },
    
}