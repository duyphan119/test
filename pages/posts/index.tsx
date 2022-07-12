import { NextPage } from "next";
import Link from "next/link";
import { connect, useSelector } from "react-redux";
import { logCats } from "../../redux/cartSlice";
import { State, wrapper } from "../../redux/store";

const FirstPost: NextPage = () => {
  const ngu: any = useSelector<State, State>((state) => state);
  console.log(ngu.cats);
  return (
    <>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </>
  );
};
// FirstPost.getInitialProps = wrapper.getInitialPageProps((store: any): any => {
//   console.log("2. Page.getInitialProps uses the store to dispatch things");
//   store.dispatch(logCats("ngu"));
// });
export const getStaticProps = wrapper.getStaticProps((store: any): any => {
  return () => {
    store.dispatch(logCats("ngu"));
  };
});
export default FirstPost;
