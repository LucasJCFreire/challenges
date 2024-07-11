import styled from "styled-components";
import { useState, useEffect } from "react";

function Message({ type, msg }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    if (!msg) {
      setVisible(false);
      return;
    }

    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [msg]);

  return <>{visible && <StyledDiv className={[type]}>{msg}</StyledDiv>}</>;
}

export default Message;

const StyledDiv = styled.div`
  width: 100%;
  padding: 1em;
  border: 1px solid #000;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 2em;
  border-radius: 5px;
  &.sucess {
    color: #155724;
    background-color: #d4edda;
    border-color: #c3e6cb;
  }
  &.error {
    color: #155724;
    background-color: #f8d7da;
    border-color: #f5c6cd;
  }
  &:hover {
    cursor: pointer;
  }
`;
