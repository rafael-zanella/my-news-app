import { DefaultLayout } from '@/layouts/DefaultLayout'
import styled from 'styled-components'

export const Container = styled.div`
  .App {
    text-align: center;
  }
  body {
    padding: 0%;
    margin: 0%;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  nav {
    margin: 0;
    width: 100%;
    height: 80px;
    background-color: black;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-decoration: none;
  }
  
  a {
    color: white;
    text-decoration: none;
    margin: 10px;
    font-size: 25px;
  }
  
  .createPostPage {
    width: 100%;
    height: calc(100vh - 80px);
    display: grid;
    place-items: center;
  }
  
  .cpContainer {
    width: 500px;
    height: auto;
    padding: 20px;
    background-color: black;
    border-radius: 12px;
    color: white;
    display: flex;
    flex-direction: column;
  }
  
  .cpContainer h1 {
    text-align: center;
  }
  
  .cpContainer label {
    font-size: 25px;
  }
  .cpContainer .inputGp {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
  }
  
  .inputGp input,
  .inputGp textarea {
    font-size: 18px;
    border: none;
    border-radius: 2px;
    padding: 5px;
  }
  
  .inputGp input {
    height: 40px;
  }
  .inputGp textarea {
    height: 150px;
  }
  
  .cpContainer button {
    margin-top: 20px;
    height: 40px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 18px;
  }
  input,
  textarea {
    margin-top: 5px;
  }
  
  .loginPage {
    width: 100vw;
    height: calc(100vh - 80px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: red;
  }
  
  .loginPage p {
    font-size: 30px;
  }
  
  /* GOOGLE BUTTOn */
  .login-with-google-btn {
    cursor: pointer;
    transition: background-color 0.3s, box-shadow 0.3s;
    padding: 5px 16px 12px 42px;
    border: none;
    border-radius: 3px;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
    color: #757575;
    font-size: 25px;
    font-weight: 500;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", sans-serif;
    background-image: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTgiIGhlaWdodD0iMTgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48cGF0aCBkPSJNMTcuNiA5LjJsLS4xLTEuOEg5djMuNGg0LjhDMTMuNiAxMiAxMyAxMyAxMiAxMy42djIuMmgzYTguOCA4LjggMCAwIDAgMi42LTYuNnoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjxwYXRoIGQ9Ik05IDE4YzIuNCAwIDQuNS0uOCA2LTIuMmwtMy0yLjJhNS40IDUuNCAwIDAgMS04LTIuOUgxVjEzYTkgOSAwIDAgMCA4IDV6IiBmaWxsPSIjMzRBODUzIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNNCAxMC43YTUuNCA1LjQgMCAwIDEgMC0zLjRWNUgxYTkgOSAwIDAgMCAwIDhsMy0yLjN6IiBmaWxsPSIjRkJCQzA1IiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48cGF0aCBkPSJNOSAzLjZjMS4zIDAgMi41LjQgMy40IDEuM0wxNSAyLjNBOSA5IDAgMCAwIDEgNWwzIDIuNGE1LjQgNS40IDAgMCAxIDUtMy43eiIgZmlsbD0iI0VBNDMzNSIgZmlsbC1ydWxlPSJub256ZXJvIi8+PHBhdGggZD0iTTAgMGgxOHYxOEgweiIvPjwvZz48L3N2Zz4=);
    background-color: white;
    background-repeat: no-repeat;
    background-position: 12px 11px;
  }
  .login-with-google-btn:hover {
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25);
  }
  .login-with-google-btn:active {
    background-color: #eeeeee;
  }
  .login-with-google-btn:focus {
    outline: none;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.25),
      0 0 0 3px #c8dafc;
  }
  .login-with-google-btn:disabled {
    filter: grayscale(100%);
    background-color: #ebebeb;
    box-shadow: 0 -1px 0 rgba(0, 0, 0, 0.04), 0 1px 1px rgba(0, 0, 0, 0.25);
    cursor: not-allowed;
  }
  
  .homePage {
    width: 100%;
    min-height: calc(100vh - 80px);
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 20px;
  }
  
  .homePage .post {
    width: 600px;
    height: auto;
    max-height: 600px;
    background-color: rgb(250, 250, 250);
    box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
    margin: 20px;
    padding: 20px;
    border-radius: 15px;
  }
  
  .post .postHeader {
    display: flex;
    justify-content: center;
    width: 100%;
  }
  
  .postHeader .title {
    flex: 50%;
  }
  .postHeader .deletePost {
    flex: 50%;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
  }
  
  .deletePost button {
    border: none;
  
    background: none;
    font-size: 30px;
    cursor: pointer;
  }
  
  .post .postTextContainer {
    word-wrap: break-word;
    height: auto;
    max-height: 400px;
    width: 100%;
    overflow: hidden;
    overflow-y: auto;
  }
  


`