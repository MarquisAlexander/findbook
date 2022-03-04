import styled from "styled-components";

export const Container = styled.div`
  max-height: 12rem;
  width: 100%;
  background: var(--shape);
  border-radius: 1rem;
  padding: 1rem;
  display: flex;
  flex-direction: row;
  align-items: flex-start;

  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.1);

  p {
    font-size: 1rem;
    color: #fff;
  }

  img {
    max-height: 8rem;
    padding: 0 1rem 0 0;
  }
`;

export const Tag = styled.div`
  display: flex;
  flex-direction: row;

  strong {
    font-size: 1rem;
    font-weight: 700;
    color: var(--text-title);
    margin-right: 0.5rem;
  }

  p {
    font-weight: 400;
    color: #000;
  }
`;
