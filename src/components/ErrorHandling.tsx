import { AxiosError } from 'axios';

const ErrorHandling = (err: any) => {

    if (err instanceof AxiosError && err.response?.data?.errors) {
        const errors = err.response.data.errors;
        const message = (Object.values(errors) as any)[0].message as string;
        return message

    } else if (err instanceof AxiosError && err.response?.data?.error) {
        const message = err.response.data.error.message;
        return message

    } else {
        const message = 'an error has occurred';
        return message

    }


}

export default ErrorHandling;