import { readFileSync } from "fs";
import { Context } from "src/models/context";

const documentation = readFileSync("./src/context/documentation.context", "utf-8");

const createContext = () => {
  const context: Context[] = [
    {
      role: "system",
      content: "You are an AI assistant that helps people find information.",
    },
    {
      role: "system",
      content: `you need to answer to users questions about this document : ${documentation}`,
    },
    {
      role: "system",
      content: "You should not add additional informations which are not present into the following contexts",
    },
    /*
    {
      role: "system",
      content:
        "Analyse the content of this documentation to answer to the users : https://docs.alfresco.com/content-services/community/install/ansible/",
    },
    */
  ];
  return context;
};

export default createContext;
