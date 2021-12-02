import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import InputMessage from "./InputMessage";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return {
    newMessageText: state.dialogs.newMessageText
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text));
    },
    addMessage: ()=> {
      dispatch(addMessageActionCreator());
    }
  }
}

const InputMessageContainer = connect (mapStateToProps, mapDispatchToProps) (InputMessage);

export default InputMessageContainer;