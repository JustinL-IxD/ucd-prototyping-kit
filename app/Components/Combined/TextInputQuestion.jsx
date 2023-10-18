import HintText from "../Forms/HintText";
import QuestionHeading from "../Forms/QuestionHeading";
import TextInput from "../Forms/TextInput";

export default function TextInputQuestion({ questionHeading, hintText }) {
    return(
        <seciton>
            <QuestionHeading>{questionHeading}</QuestionHeading>
            <HintText>{hintText}</HintText>
            <TextInput />
        </seciton>
    )
}