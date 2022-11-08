import * as React from "react";

type AuthContextProps = {
  user: null;
};

interface IPropTypes {
  children: React.ReactNode;
}

const AuthContext = React.createContext<Partial<AuthContextProps>>({
  user: null,
});

const AuthProvider = ({ children }: IPropTypes) => {
  const [user, setUser] = React.useState(null);

  return (
    <AuthContext.Provider
      value={{
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

const useAuth = () => React.useContext(AuthContext);

export { AuthProvider, useAuth };
