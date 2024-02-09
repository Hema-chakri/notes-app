// Style your elements here
import styled from 'styled-components'

export const Container = styled.div`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);

  background-size: cover;
  min-height: 100vh;
`
export const Heading = styled.h1`
  font-family: 'Bree Serif';
  color: #4c63b6;
  text-align: center;
`
export const NotesContainerForm = styled.form`
  box-shadow: 1px 2px 4px rgb(0, 0, 0);
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 80%;
  margin-left: 120px;
`
export const NotesInput = styled.input`
  border: none;
  color: #334155;
  margin-left: 20px;
  margin-top: 30px;
  margin-bottom: 30px;
  outline: none;
`
export const NotesTextInput = styled.textarea`
  border: none;
  color: #334155;
  margin-left: 20px;
  outline: none;
  height: 150px;
`
export const AddButton = styled.button`
  color: #d8d8d8;
  background-color: #4c63b6;
  width: 60px;
  border: none;
  height: 35px;
  text-align: center;
  border-radius: 8px;
  align-self: flex-end;
  margin-right: 20px;
`
export const EmptyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
`

export const EmptyHeading = styled.h1`
  color: #1e293b;
  font-size: 20px;
`

export const EmptyPara = styled.p`
  color: #475569;
  font-size: 13px;
  font-weight: 700;
`
export const NotesList = styled.ul`
  margin-left: 55px;
  margin-top: 20px;

  display: flex;
`

export const EmptyImage = styled.img`
  width: 60px;
  height: 60px;
`
