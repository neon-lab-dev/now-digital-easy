interface LoginCredentials {
  username: string;
  password: string;
}

export const login = async (credentials: LoginCredentials): Promise<any> => {
    try {
      const response = await fetch('https://liveserver.nowdigitaleasy.com:5000/client/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });
  
      if (!response.ok) {
        throw new Error('Login failed');
      }
  
      return await response.json();
    } catch (error: any) { // Specify the type of 'error' explicitly
      throw new Error(error.message);
    }
  };
  