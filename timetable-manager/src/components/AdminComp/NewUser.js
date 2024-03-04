import Section from '../UI/Section';
import AddUser from '../UI/AddUserForm';
import useHttp from '../../Hooks/Http-use';

const NewUser = (props) => {
  const { isLoading, error, sendRequest: sendTaskRequest } = useHttp();
  
  const createTask = (userText,userEmail,userPassword ,taskData) => {
    const generatedId = taskData.name; // firebase-specific => "name" contains generated id
    const createdTask = { id: generatedId, user: userText, email:userEmail,password:userPassword };

    props.onAddTask(createdTask);
  };
 
  const enterTaskHandler = async (userName,userEmail,userPassword) => {
    sendTaskRequest(
      {
        url: props.Urll,
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: { user: userName,
        email:userEmail,
      password:userPassword },
      },
      createTask.bind(userEmail, userName,userEmail,userPassword)
    );
    console.log(props.Urll);
  };
  


  return (
    <Section>
      <AddUser onEnterTask={enterTaskHandler} loading={isLoading}  SignUpUrl={props.signUrll}/>
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewUser;