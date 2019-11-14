import React from "react";
import { useStateValue } from "../../../state/stateInsurance";
import StepsIns from "../../basicComponents/StepsIns";
import { CardContent } from "@material-ui/core";

const CarInsurance = () => {
  const { state } = useStateValue();

  const steps = ["Car Information", "Coverage"];

  return (
    <>
      <StepsIns steps={steps} activeStep={state.activeStep} />

      <CardContent></CardContent>
    </>
  );
};

export default CarInsurance;