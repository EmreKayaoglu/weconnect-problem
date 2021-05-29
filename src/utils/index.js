import { createContext, useContext } from "react";

const HtmlClassServiceContext = createContext();

/**
 * @returns Layout context from 'localStorage'
 */
export function useHtmlClassService() {
  return useContext(HtmlClassServiceContext);
}
