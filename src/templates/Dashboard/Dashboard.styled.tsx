import { DefaultLayout } from "@/layouts/DefaultLayout";
import styled from "styled-components";

export const Dashboard = styled(DefaultLayout)`
  main {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }
`;

export const Div = styled.div`
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 40px;
  margin-top: 90px;
`;

export const Main = styled.div`
  margin: 80px 80px 0 150px;
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

export const Lista = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  margin-bottom: 40px;
`;

export const Input = styled.input`
  width: 100%;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-shadow: inset 0 1px 3px #ddd;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 12px;
  padding-bottom: 12px;
  font-size: 16px;
`;

export const Textarea = styled.textarea`
  width: 100%;
  height: 150px;
  padding: 12px 20px;
  box-sizing: border-box;
  border: 2px solid #ccc;
  border-radius: 4px;
  background-color: #f8f8f8;
  font-size: 16px;
  resize: none;
`;

export const Select = styled.select`
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
`;
