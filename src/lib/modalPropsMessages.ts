import correctIcon from "../../public/Images/correctGreen.svg";
import wrongIcon from "../../public/Images/wrongRed.svg";

export const successModalProps = {
    icon: correctIcon,
    altText: "Correct Icon",
    messageTitle: "Success",
  };
  
export const errorModalProps = {
    icon: wrongIcon,
    altText: "Error Icon",
    messageTitle: "Error",
  };