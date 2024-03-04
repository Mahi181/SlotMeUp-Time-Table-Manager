import * as React from 'react';
import Paper from '@mui/material/Paper';
import { red, amber } from '@mui/material/colors';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import {
  Scheduler,
  WeekView,
  Appointments,

  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import styless from './TeacherTimeTable.module.css'




import AuthContext from '../../store/auth-context';

const FIREBASE_DOMAIN = "https://userdetails-d84c5-default-rtdb.firebaseio.com/staff";


const PREFIX = 'Demo';
const clickBookHandler = () => {


}

const classes = {
  button: `${PREFIX}-button`,
};

const StyledIconButton = styled(IconButton)(({ theme }) => ({
  [`&.${classes.button}`]: {
    color: theme.palette.background.default,
    padding: 0,
  },
}));

const Appointment = ({
  children,
  data,
  onClick,
  toggleVisibility,
  onAppointmentMetaChange,
  ...restProps
}) => (
  <Appointments.Appointment
    {...restProps}
  >
    <React.Fragment>
      <StyledIconButton
        className={classes.button}
        onClick={({ target }) => {
          toggleVisibility();
          onAppointmentMetaChange({ target: target.parentElement.parentElement, data });
        }}
        size="large"
      >
        <InfoIcon fontSize="small" />
      </StyledIconButton>
      {children}
    </React.Fragment>
  </Appointments.Appointment>
);


export default class TeacherTimeTable extends React.PureComponent {
  static contextType = AuthContext;



  constructor(props) {
    super(props);
    this.state = {
      idd: "",
      data: [],
      visible: false,
      currentDate: new Date(),
      appointmentMeta: {
        target: null,
        data: {},
      },
      resources: [
        {
          fieldName: 'roomId',
          title: 'Slot Book',
          instances: [{
            text: 'Book the slot',
            id: 1,
            color: red,

          },
          {
            text: 'For meet',
            id: 2,
            color: amber,


          },
          ]
        }]

    };
    this.toggleVisibility = () => {
      const { visible: tooltipVisibility } = this.state;
      this.setState({ visible: !tooltipVisibility });
    };
    this.onAppointmentMetaChange = ({ data, target }) => {
      this.setState({ appointmentMeta: { data, target } });
    };
    this.myAppointment = this.myAppointment.bind(this);
  }

  myAppointment(props) {
    return (
      <Appointment
        {...props}
        toggleVisibility={this.toggleVisibility}
        onAppointmentMetaChange={this.onAppointmentMetaChange}
      />
    );
  }

  async componentDidMount() {
    const timetable = []
    console.log(this.context.id);
    let k = localStorage.getItem("teacherId");
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
    this.setState({ data: timetable })




  }

  render() {
    const loginId = localStorage.getItem("teacherLoginId");


    const { data, idd, appointmentMeta, visible } = this.state;
    console.log(this.state.data)
    console.log(idd);
    return (
      <Paper>
        <Scheduler
          data={data}
          height={560}
          width={800}
        >
          <WeekView
            startDayHour={8}
            endDayHour={18}
            cellDuration={60}
            showAllDayTitle={false}
            excludedDays={[0]}
          />

          <Appointments
            appointmentComponent={this.myAppointment}

          />

          <AppointmentTooltip
            showCloseButton
            visible={visible}
            onVisibilityChange={this.toggleVisibility}
            appointmentMeta={appointmentMeta}
            onAppointmentMetaChange={this.onAppointmentMetaChange}
          />
        </Scheduler>
        <Link to={`/student/slotBook/${loginId}`}><button className={styless.btn}>Book Slot</button></Link>
        <button className={styless.btn} onClick={this.props.onClose}>Close Timetable</button>

      </Paper>

    );
  }
}
