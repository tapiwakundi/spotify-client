
import { useEffect, useState } from "react";
import axios from "axios";
import * as LocalSession from '../utils/sessionStorage'

const localToken = LocalSession.getLocalAccessToken() || undefined;

export function useAuth(code?: string) {
    const [accessToken, setAccessToken] = useState<string | undefined>(localToken);



    return accessToken
}