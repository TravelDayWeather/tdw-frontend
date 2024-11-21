import axios from 'axios';

const apiClient = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken'); // 또는 쿠키에서 가져오기
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

apiClient.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (error.response.status === 401 && !error.config._retry) {
            error.config._retry = true;
            const refreshToken = localStorage.getItem('refreshToken');
            try {
                const { data } = await axios.post('/api/refresh', {}, {
                    headers: { Authorization: `Bearer ${refreshToken}` },
                });
                localStorage.setItem('accessToken', data.accessToken);
                return apiClient(error.config);
            } catch (refreshError) {
                console.error('Refresh failed:', refreshError);
                localStorage.removeItem('accessToken');
                localStorage.removeItem('refreshToken');
            }
        }
        return Promise.reject(error);
    }
);

export default apiClient;