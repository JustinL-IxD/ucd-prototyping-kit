import H1 from "./Components/Typography/H1"
import H2 from "./Components/Typography/H2"
import H3 from "./Components/Typography/H3"
import H4 from "./Components/Typography/H4"
import H5 from "./Components/Typography/H5"
import Body from "./Components/Typography/Body"
import Question from "./Components/Layout/Question"
import QuestionHeading from "./Components/Forms/QuestionHeading"
import HintText from "./Components/Forms/HintText"
import TextInput from "./Components/Forms/TextInput"
import TextInputQuestion from "./Components/Combined/TextInputQuestion"

export default function Home() {
  return (
    <main className="w-[1200px] flex min-h-screen flex-col items-center justify-start p-24">
        <div className="mb-12">
          <H1>Heading 1</H1>
          <H2>Heading 2</H2>
          <H3>Heading 3</H3>
          <H4>Heading 4</H4>
          <H5>Heading 5</H5>
        </div>
        <div>
          <Question id='Age'>
            <QuestionHeading>What is your name</QuestionHeading>
            <HintText>For example, Justin</HintText>
            <TextInput />
          </Question>
        </div>
        <div className="mt-6">
          <TextInputQuestion 
            questionHeading='what is your age?'
            hintText='blah blah blah'
          />
        </div>
    </main>
  )
}
