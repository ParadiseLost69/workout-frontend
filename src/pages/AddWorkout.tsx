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
} from "@ionic/react";
import { useState } from "react";
import ExploreContainer from "../components/ExploreContainer";
import "./AddWorkout.css";

const AddWorkout: React.FC = () => {
  const [currentWorkout, setCurrentWorkout] = useState({});
  const [workoutType, setWorkoutType] = useState("");

  function changeWorkoutType(e: any): void {
    setWorkoutType(e.target.value);
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
            <IonInput label="Name" type="text"></IonInput>
          </IonItem>
          <IonItem>
            {" "}
            <IonInput
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
              <IonRadio onClick={changeWorkoutType} value="cardio">
                Cardio
              </IonRadio>
              <IonRadio onClick={changeWorkoutType} value="weight-lifting">
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
                <IonInput label="Exercise name" type="text"></IonInput>
              </IonItem>
              <IonItem>
                <IonInput label="Distance"></IonInput>
                <IonPicker>
                  <IonItem>Something</IonItem>
                </IonPicker>
              </IonItem>

              <IonItem>
                <IonInput label="Time"></IonInput>
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
