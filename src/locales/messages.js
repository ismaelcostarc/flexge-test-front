const messages = {
  enUS: {
    login: {
      required: {
        username: "Please input your username!",
        password: "Please input your password!",
      },
    },
  },
  ptBR: {},
};

const language = import.meta.env.VITE_APP_LANGUAGE || "enUS";

export default messages[language];
