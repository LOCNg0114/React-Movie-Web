const apiConfig = {
    baseUrl: 'https://api.themoviedb.org/3/',
    apiKey: 'b94f5f4024d1c9cf2e384e0ec584e405',
    originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
    w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`
}

export default apiConfig;