import {
  IonContent,
  IonHeader,
  IonInput,
  IonList,
  IonPage,
  IonItem,
  IonTitle,
  IonToolbar,
  IonRadioGroup,
  IonRadio,
  IonPicker,
  IonButton,
} from "@ionic/react";
import { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./AddWorkout.css";

const AddWorkout: React.FC = () => {
  const [currentWorkout, setCurrentWorkout] = useState({});
  const [workoutType, setWorkoutType] = useState("");
  const [exerciseList, setExerciseList] = useState([]);
  const [currentExercise, setCurrentExercise] = useState({});

  const [timeValue, setTimeValue] = useState("Minutes");

  function changeTimeValue(e: any) {
    setTimeValue(e.target.value);
    console.log(timeValue);
  }

  function changeWorkoutType(e: any): void {
    setWorkoutType(e.target.value);
  }

  function makeCurrentWorkout(e: any) {
    console.log(e.target);
    setCurrentWorkout((item) => {
      return { ...item, [e.target.id]: e.target.value };
    });
  }

  function makeCurrentExercise(e: any) {
    setCurrentExercise((prev) => {
      return { ...prev, [e.target.id]: e.target.value };
    });
    console.log(currentExercise);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Add Workout</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Add Workout</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonTitle size="large" class="subheader">
          What do you want to call this?
        </IonTitle>
        <IonList>
          <IonItem>
            <IonInput
              onIonChange={makeCurrentWorkout}
              title="Name"
              id="workout-name"
              color="tertiary"
              label="Name"
              type="text"
            ></IonInput>
          </IonItem>
          <IonItem>
            {" "}
            <IonInput
              onIonChange={makeCurrentWorkout}
              id="description"
              color="tertiary"
              label="Description"
              type="text"
              clearInput={true}
            ></IonInput>
          </IonItem>
        </IonList>
        <IonTitle size="large" class="subheader">
          What type of workout?
        </IonTitle>
        <IonList>
          <IonItem>
            <IonRadioGroup>
              <IonRadio
                onClick={changeWorkoutType}
                color="tertiary"
                value="cardio"
              >
                Cardio
              </IonRadio>
              <IonRadio
                color="tertiary"
                onClick={changeWorkoutType}
                value="weight-lifting"
              >
                Weight Lifting
              </IonRadio>
            </IonRadioGroup>
          </IonItem>
        </IonList>
        {workoutType === "cardio" && (
          <div>
            <IonTitle class="subheader">Cardio</IonTitle>
            <IonList>
              <IonItem>
                <IonInput
                  id="cardio-exercise-name"
                  onIonChange={makeCurrentExercise}
                  color="tertiary"
                  label="Exercise name"
                  type="text"
                ></IonInput>
              </IonItem>
              <IonItem>
                <IonInput
                  id="distance"
                  onIonChange={makeCurrentExercise}
                  color="tertiary"
                  label="Distance"
                  type="number"
                ></IonInput>
                <IonPicker>
                  <IonItem>Something</IonItem>
                </IonPicker>
              </IonItem>

              <IonItem>
                <IonInput
                  id="time"
                  onIonChange={makeCurrentExercise}
                  color="tertiary"
                  label="Time"
                  type="number"
                ></IonInput>
                <IonButton id="time-picker">{timeValue}</IonButton>
                <IonPicker
                  trigger="time-picker"
                  columns={[
                    {
                      name: "units of time",
                      options: [
                        { text: "Seconds", value: "seconds" },
                        { text: "minutes", value: "Minutes" },
                        { text: "hours", value: "Hours" },
                      ],
                    },
                  ]}
                  buttons={[]}
                ></IonPicker>
              </IonItem>
            </IonList>
          </div>
        )}

        {workoutType === "weight-lifting" && (
          <div>
            <IonTitle class="subheader">Weight Lift</IonTitle>
          </div>
        )}
      </IonContent>
    </IonPage>
  );
};

export default AddWorkout;
