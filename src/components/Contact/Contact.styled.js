import styled from 'styled-components';

export const StyledContact = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  text-align: left;

  p {
    display: inline-block;
    width: 500px;
    height: 20px;
    margin: 0 40px 0 0;
    padding: 2px 20px 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
    font-size: 14px;
  }

  button {
    width: 18px;
    height: 18px;
    border-radius: 50%;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    background-color: #3f6e93;
    color: white;
    border: none;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px,
      rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }
`;
