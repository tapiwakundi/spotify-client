
import { useEffect, useState } from "react";
import axios from "axios";

export function useAuth(code?: string) {
    const [accessToken, setAccessToken] = useState();

    useEffect(() => {
        axios
            .post("http://localhost:8000/login", { code })
            .then((response) => {

                // If success then cut the code string from the URL and execute the other thing
                window.history.pushState({}, '', "/");

                setAccessToken(response.data.accessToken);

            })
            .catch((e) => {
                //   If fail redirect to home page - Login page
                // window.location.href = "/";
                console.log(e);

            });
    }, [code]);

    return accessToken
}