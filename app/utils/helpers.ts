import { headers } from "next/headers";
import { userAgent } from "next/server";

export const isMobile = (): boolean => {
  const { device } = userAgent({ headers: headers() });
  return device?.type === "mobile" ? true : false;
}