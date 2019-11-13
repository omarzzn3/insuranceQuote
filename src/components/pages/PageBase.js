import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";

const QuotationStep = ({ children, stepTitle }) => {
  return (
    <>
      <Grid item xs={7}>
        <Card>
          <CardHeader title={stepTitle} subheader="Insurance" />
          {children}
        </Card>
      </Grid>
      <Grid item xs={3}>
        {/* Quotation Card */}
      </Grid>
    </>
  );
};

const PageStep = ({ step }) => {
  switch (step) {
    case 1:
      return <QuotationStep stepTitle="Basic Information" />;
    case 2:
    case 3:
    //Car Information
    case 4:
        //Quotes
    default:
        break;
  }
};

const PageBase = () => {
  return (
    <Grid
      container
      spacing={4}
      alignItems="flex-start"
      style={{ minHeight: "100vh" }}
      justify="center"
    >
      <PageStep step={1} />
    </Grid>
  );
};

export default PageBase;