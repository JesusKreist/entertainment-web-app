import { GetServerSidePropsContext } from "next";
import { getCsrfToken } from "next-auth/react";
import Login from "../components/AuthPages/Login/Login";

type LoginProps = {
  csrfToken: string | undefined;
};
const LoginPage: React.FC<LoginProps> = ({ csrfToken }) => {
  return <Login csrfToken={csrfToken} />;
};

export default LoginPage;

export async function getServerSideProps(context: GetServerSidePropsContext) {
  return {
    props: {
      csrfToken: await getCsrfToken(context),
    },
  };
}
