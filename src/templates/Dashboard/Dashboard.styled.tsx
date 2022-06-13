import { DefaultLayout } from "@/layouts/DefaultLayout";
import styled from "styled-components";

interface IProps {
  progress: any,
}

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
  justify-content: space-around;
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
    padding: 12px 15px;
    box-sizing: border-box;
    border: 2px solid #ccc;
    border-radius: 4px;
    background-color: #f8f8f8;
    font-size: 14px;
    resize: none;
    margin-bottom: 10px;
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

export const InputBox = styled.input`
    width: 100%;
    height: 30px;
    margin: 5px 0;
    padding: 0 15px;
    font-size: 14px;
    background-color: #f8f8f8;
    border: 2px solid #ccc;
    border-radius: 4px;
`;

export const Wrapper = styled.input`
  
  font-size: 16px;
  display: block;
  width: 100%;
  padding: 10px 5px;
  background-color: var(--color-gray);
  border: none;
  border: 4px solid var(--color-gray);
  outline: none;
  border-radius: 8px;
  color: var(--color-dark-gray);


&:focus {
  background-color: #fff;
  color: var(--color-dark-gray);
}

&:focus:required:invalid {
  border-color: var(--color-pink);
  background-color: #fff;

}
`;

export const Select2 = styled.div`
overflow: hidden;
	border: 1px solid rgba(0, 0, 0, 0.1);
	box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.25);
	padding-right: 10px;
	position: relative;
	z-index: 1;
	
	&:before {
		content: '\25BC';
		position: absolute;
		font-size: 8px;
		-webkit-transform: scaleY(.7);
		-moz-transform: scaleY(.7);
		-ms-transform: scaleY(.7);
		-o-transform: scaleY(.7);
		transform: scaleY(.7);
		right: 0;
		top: 50%;
		margin-top: -4px;
		background: transparent;
		width: 30px;
		text-align: center;
		pointer-events: none;
		z-index: 2;
	}

	select {
		background: transparent;
		border-radius: 0;
		padding: 5px; /* If you add too much padding here, the options won't show in IE */
		border: 0;
		outline: none;
		color: inherit;
		height: 2.1em;
		width: calc(100% + 50px);
		max-width: none !important;
    font-size: 14px;

	}
`;

export const Button = styled.button`
  width: 100px;
  height: 30px;
  cursor: pointer;
  margin: 0 5px;
`;

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Bar = styled.div`
  height: 20px;
  margin-bottom: 20px;
  overflow: hidden;
  background-color: #f5f5f5;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
`;

export const Progress = styled.div<IProps>`
  background-image: -webkit-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: -o-linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  background-image: linear-gradient(
    45deg,
    rgba(255, 255, 255, 0.15) 25%,
    transparent 25%,
    transparent 50%,
    rgba(255, 255, 255, 0.15) 50%,
    rgba(255, 255, 255, 0.15) 75%,
    transparent 75%,
    transparent
  );
  -webkit-background-size: 40px 40px;
  background-size: 40px 40px;

  float: left;
  width: 0%;
  height: 100%;
  font-size: 12px;
  line-height: 20px;
  color: #fff;
  text-align: center;
  background-color: #337ab7;
  -webkit-box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, 0.15);
  -webkit-transition: width 0.6s ease;
  -o-transition: width 0.6s ease;
  transition: width 0.6s ease;
`;
