"use client";

import Loading from "@/components/Loading";
import { handleGetUserDetailsService } from "@/services/auth";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import Cookies from "js-cookie";
import { useAppDispatch } from "@/hooks/redux";
import { setIsLoggedIn, setUser } from "@/store/slices/userSlice";

const AuthProvider = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const dispatch = useAppDispatch();
  const { isLoading, data, isError } = useQuery({
    queryKey: ["user"],
    queryFn: () => {
      const token = Cookies.get("token");
      console.log(token);
      return handleGetUserDetailsService(token);
    },
    retry: 0,
    staleTime: Infinity,
  });

  useEffect(() => {
    if (isError || !data || isLoading) return;
    dispatch(setUser(data!));
    dispatch(setIsLoggedIn(true));
  }, [data, isError, isLoading]);

  if (isLoading) return <Loading className="h-screen" />;
  return <div>{children}</div>;
};

export default AuthProvider;
