import React from "react";

type Props = {
  isLogin: boolean;
};

export default function Header(props: Props) {
  return (
    <>
      <header className="header">
        <div className="container-fluid">
          <h1 className="header_title pt-2 pb-2 m-0">The Pulpit Rock</h1>
          {!props.isLogin ? (
            <button type="button" className="btn btn-success">
              Login
            </button>
          ) : (
            <button type="button" className="btn btn-danger">
              Log Out{" "}
            </button>
          )}
        </div>
      </header>
    </>
  );
}
