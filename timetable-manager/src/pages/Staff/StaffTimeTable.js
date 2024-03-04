import * as React from 'react';
import Paper from '@mui/material/Paper';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { red,amber } from '@mui/material/colors';
import Appointment from './Resources/appointments';
import {
  Scheduler,
  Resources,
  WeekView,
  Appointments,
  AppointmentForm,
  AppointmentTooltip,
  ConfirmationDialog,
  EditRecurrenceMenu,
} from '@devexpress/dx-react-scheduler-material-ui';




import { appoint } from './Resources/appointments';
import AuthContext from '../../store/auth-context';

console.log(appoint);

const FIREBASE_DOMAIN = "https://userdetails-d84c5-default-rtdb.firebaseio.com/staff";




const submitOrderHandler = async (day,userData,id) => {
  try {
    //`
    const response = await fetch(
      `${FIREBASE_DOMAIN}/${id}/timeTable/${day}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(userData),
      }
    );
    if (!response.ok) {
      throw new Error("Unable to Order...");
    }
    

  } catch (error) {
    
  }
};


const submitDelete = async (day,id) => {
  try {
    //`
    const response = await fetch(
      `${FIREBASE_DOMAIN}/${id}/timeTable/${day}.json`,
      {
        method: "DELETE",
      }
    );
    if (!response.ok) {
      throw new Error("Unable to Order...");
    }
    

  } catch (error) {
    
  }
};

const submitChanged = async (day,userData,id) => {
  try {
    //`
    const response = await fetch(
      `${FIREBASE_DOMAIN}/${id}/timeTable/${day}.json`,
      {
        method: "PATCH",
        body: JSON.stringify(userData),
      }
    );
    if (!response.ok) {
      throw new Error("Unable to Order...");
    }
    

  } catch (error) {
    
  }
};
const TextEditor = (props) => {
  // eslint-disable-next-line react/destructuring-assignment
  if (props.type === 'multilineTextEditor') {
    return null;
  } return <AppointmentForm.TextEditor {...props} />;
};

const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
  const onCustomFieldChange = (nextValue) => {
    onFieldChange({ customField: nextValue });
  };

  return (
    <AppointmentForm.BasicLayout
      appointmentData={appointmentData}
      onFieldChange={onFieldChange}
      {...restProps}
    >
      <AppointmentForm.Label
        text="Custom Field"
        type="title"
      />
      <AppointmentForm.TextEditor
        value={appointmentData.customField}
        onValueChange={onCustomFieldChange}
        placeholder="Custom field"
      />
    </AppointmentForm.BasicLayout>
  );
};


export default class Rough extends React.PureComponent {
  static contextType=AuthContext;
  
  

  constructor(props) {
    super(props);
    this.state = {
      idd:"",
      data: [],
      currentDate:new Date(),
      resources: [
        {
          fieldName: 'roomId',
          title: 'Slot Book',
          instances:[{
            text: 'Book the slot',
            id: 1,
            color:red,
            
          },
        {
            text: 'For meet',
            id: 2,
            color:amber,
            
            
          },
        ]
        }]
      
    };

    this.commitChanges = this.commitChanges.bind(this);
  }
  

  commitChanges({ added, changed, deleted }) {
    this.setState((state) => {
      let { id,data } = state;
      
      if (added) {
        
        const startingAddedId = data.length > 0 ? parseInt(data[data.length - 1].id) + 1 : 0;
        console.log(added)
       
        let k=localStorage.getItem("id");
        
        submitOrderHandler(startingAddedId,added,k);
      
        
        data = [...data, { id: startingAddedId, ...added }];
        
        
      }
      if (changed) {
        console.log(changed);
        data = data.map(appointment => (
          changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
          
        
        const k = data.map(appointment => (
          changed[appointment.id]!==undefined ));
          let id;
          for(const key in k){
            if(k[key]===true){
              id=key;

            }
            console.log(k[key])
          }
          console.log(data[id])
          let UserId=localStorage.getItem("id");
          submitChanged(id,data[id],UserId);
          
          

      }
      if (deleted !== undefined) {
        data = data.filter(appointment => appointment.id !== deleted);
        let k=localStorage.getItem("id");
        console.log(deleted,k)
        submitDelete(deleted,k);
      }
      return { data };
    });
  }
  
 
  async componentDidMount() {
    const timetable=[]
    console.log(this.context.id);
    let k=localStorage.getItem("id");
    //It will get the data from context, and put it into the state.
 const response = await fetch(`${FIREBASE_DOMAIN}/${k}/timeTable.json`);
    const data = await response.json();
    for (const key in data) {
      const quoteObj = {
        id: key,
        ...data[key],
      };
     timetable.push(quoteObj);
    
      
     console.log(timetable)
  
  }
  this.setState({data:timetable})
  
  
  
  
  }
  render() {
   
    
    const { currentDate, data,resources,idd } = this.state;
    console.log(this.state.data)
console.log(idd);
    return (
      <Paper>
        <Appointment></Appointment>
        
        <Scheduler
          data={this.state.data}
          height={660}
        >
          <ViewState
            currentDate={currentDate}
            defaultCurrentDate={currentDate}
          />
          <EditingState
            onCommitChanges={this.commitChanges}
          />
          <EditRecurrenceMenu />
          <WeekView
            startDayHour={8}
            endDayHour={18}
            cellDuration={60}
            showAllDayTitle={false}
            excludedDays={[0]}
          />
          <Appointments />
          
          <AppointmentTooltip
         
            showOpenButton
            showDeleteButton
            
            
          />
          <ConfirmationDialog />
          <AppointmentForm
        
            basicLayoutComponent={BasicLayout}
            textEditorComponent={TextEditor}
          />
           <Resources
            data={resources}
            mainResourceName="roomId"
          />
          
        </Scheduler>
       
      </Paper>
      
    );
  }
}
